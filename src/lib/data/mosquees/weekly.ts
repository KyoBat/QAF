/**
 * Rotation hebdomadaire — mosquée Ar-Rayane
 *
 * Tout bascule le VENDREDI à minuit, heure de Batna, et reste figé 7 jours :
 *   - le hadith de la semaine, pris dans la banque, dans l'ordre ;
 *   - le cours de la semaine, choisi par weekly-plan (calendrier puis série).
 *
 * Rotation déterministe : même semaine = même contenu pour tout le monde,
 * ce qui permet de servir la page en ISR et rend l'affichage reproductible.
 */

import { coursesData } from '@/lib/data/courses/index'
import type { Locale } from '@/locales'
import { hadithBank } from './hadith-bank'
import {
  courseHooks,
  courseSequence,
  seasonalPlan,
  PRIMING_SEQUENCE_WEEKS,
} from './weekly-plan'
import type { BankEntry, LocalizedText } from './types'

/** Batna suit UTC+1 toute l'année (pas d'heure d'été en Algérie). */
const ALGERIA_UTC_OFFSET_MS = 60 * 60 * 1000
const MS_PER_DAY = 24 * 60 * 60 * 1000
const DAYS_PER_WEEK = 7

const LOCALE_TAGS: Record<Locale, string> = { fr: 'fr-DZ', ar: 'ar-DZ', en: 'en-GB' }

/**
 * Vendredi 7 août 2026, premier vendredi de mise en ligne de la page.
 * C'est l'origine des semaines : décaler cette date décale tout le planning.
 */
const ANCHOR_DAY_NUMBER = Math.floor(
  (Date.parse('2026-08-07T00:00:00Z') + ALGERIA_UTC_OFFSET_MS) / MS_PER_DAY
)

/** Garde-fou : au-delà, on cesse de dérouler l'historique semaine par semaine. */
const MAX_WEEKS_SCANNED = 2600 // ~50 ans

/**
 * Numéro de jour absolu dans le fuseau de Batna.
 * Change à minuit heure locale.
 */
export function getAlgeriaDayNumber(date: Date = new Date()): number {
  return Math.floor((date.getTime() + ALGERIA_UTC_OFFSET_MS) / MS_PER_DAY)
}

/**
 * Index de la semaine courante, 0 pour la semaine du vendredi d'origine.
 * Avant cette date, on reste sur la semaine 0.
 */
export function getWeekIndex(date: Date = new Date()): number {
  const elapsed = getAlgeriaDayNumber(date) - ANCHOR_DAY_NUMBER
  if (elapsed < 0) return 0
  return Math.floor(elapsed / DAYS_PER_WEEK)
}

/** Premier jour (vendredi) de la semaine d'index donné. */
function firstDayOfWeek(weekIndex: number): number {
  return ANCHOR_DAY_NUMBER + weekIndex * DAYS_PER_WEEK
}

/** Instant situé en milieu de journée, pour lire un mois hégirien sans effet de bord. */
function noonOfDay(dayNumber: number): Date {
  return new Date(dayNumber * MS_PER_DAY - ALGERIA_UTC_OFFSET_MS + MS_PER_DAY / 2)
}

// Intl est coûteux à instancier : un seul formateur réutilisé pour tout le scan
const hijriMonthFormatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
  month: 'numeric',
  timeZone: 'Africa/Algiers',
})

/** Mois hégirien, de 1 (Muharram) à 12 (Dhul-Hijja). */
export function getHijriMonth(date: Date = new Date()): number {
  return Number(hijriMonthFormatter.format(date))
}

/** Date hégirienne complète, dans la langue de lecture. */
export function formatHijriDate(locale: Locale, date: Date = new Date()): string {
  return new Intl.DateTimeFormat(`${LOCALE_TAGS[locale]}-u-ca-islamic-umalqura`, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Africa/Algiers',
  }).format(date)
}

// ───────────────────────────────────────────────────────────────
// Hadith de la semaine
// ───────────────────────────────────────────────────────────────

export interface WeeklyHadith {
  entry: BankEntry
  lessonTitle: LocalizedText
  courseTitle: LocalizedText
  lessonDuration: string
  /** Chemin sans préfixe de langue, ex. /courses/sciences-hadith/lessons/lesson-001 */
  path: string
  /** Rang dans le cycle, de 1 à cycleLength */
  weekInCycle: number
  cycleLength: number
}

/**
 * Résout une entrée vers la leçon réelle.
 * Renvoie null si le cours ou la leçon n'existe plus : l'appelant passe alors
 * à l'entrée suivante plutôt que d'afficher un lien mort.
 */
export function resolveEntry(entry: BankEntry): WeeklyHadith | null {
  const course = coursesData.find(c => c.slug === entry.courseSlug && c.published)
  if (!course) return null

  const lesson = course.lessons.find(l => l.id === entry.lessonId)
  if (!lesson) return null

  const bankIndex = hadithBank.findIndex(e => e.id === entry.id)

  return {
    entry,
    lessonTitle: lesson.title as LocalizedText,
    courseTitle: course.title as LocalizedText,
    lessonDuration: lesson.duration,
    path: `/courses/${course.slug}/lessons/${lesson.id}`,
    weekInCycle: bankIndex >= 0 ? bankIndex + 1 : 1,
    cycleLength: hadithBank.length,
  }
}

/** L'entrée de la banque correspondant à cette semaine. */
export function getWeeklyEntry(date: Date = new Date()): BankEntry {
  return hadithBank[getWeekIndex(date) % hadithBank.length]
}

/**
 * Hadith de la semaine, déjà résolu.
 * Si l'entrée pointe vers une leçon disparue, on avance dans la banque
 * jusqu'à en trouver une valide — la page reste toujours affichable.
 */
export function getWeeklyHadith(date: Date = new Date()): WeeklyHadith {
  const start = getWeekIndex(date) % hadithBank.length

  for (let offset = 0; offset < hadithBank.length; offset++) {
    const resolved = resolveEntry(hadithBank[(start + offset) % hadithBank.length])
    if (resolved) return resolved
  }

  throw new Error(
    'Banque mosquée : aucune entrée ne pointe vers une leçon publiée. ' +
      'Vérifier les courseSlug / lessonId dans hadith-bank.ts.'
  )
}

// ───────────────────────────────────────────────────────────────
// Cours de la semaine
// ───────────────────────────────────────────────────────────────

export interface WeeklyCourse {
  slug: string
  title: LocalizedText
  description: LocalizedText
  hook: LocalizedText
  lessonsCount: number
  duration: string
  /** Chemin sans préfixe de langue, ex. /courses/aqeedah-islamique */
  path: string
  /** Renseigné quand le mois hégirien impose ce cours */
  seasonalReason: LocalizedText | null
  /** Rang dans la série ; null pendant une semaine saisonnière */
  positionInSequence: number | null
  sequenceLength: number
}

function buildWeeklyCourse(
  slug: string,
  seasonalReason: LocalizedText | null,
  positionInSequence: number | null
): WeeklyCourse | null {
  const course = coursesData.find(c => c.slug === slug && c.published)
  if (!course) return null

  return {
    slug: course.slug,
    title: course.title as LocalizedText,
    description: course.description as LocalizedText,
    hook: courseHooks[slug] ?? (course.description as LocalizedText),
    lessonsCount: course.lessons.length,
    duration: course.duration,
    path: `/courses/${course.slug}`,
    seasonalReason,
    positionInSequence,
    sequenceLength: courseSequence.length,
  }
}

/**
 * Le créneau saisonnier qui s'applique à cette semaine, s'il y en a un.
 * Pendant les premières semaines du planning, la série passe avant le
 * calendrier : sans cela, un mois imposé tombant juste après le lancement
 * couperait la série de aqida au bout d'une semaine.
 */
function seasonalSlotForWeek(weekIndex: number) {
  if (weekIndex < PRIMING_SEQUENCE_WEEKS) return undefined
  return seasonalPlan[getHijriMonth(noonOfDay(firstDayOfWeek(weekIndex)))]
}

/**
 * Rang de la semaine à l'intérieur de son mois hégirien, à partir de 0.
 * Sert à faire tourner les cours d'un même mois : un mois couvre 4 à 5
 * semaines, la page ne doit pas rester figée sur le même cours tout du long.
 */
function weekWithinHijriMonth(weekIndex: number): number {
  const month = getHijriMonth(noonOfDay(firstDayOfWeek(weekIndex)))
  let rank = 0

  // Un mois hégirien fait 29 ou 30 jours : jamais plus de 5 semaines
  for (let back = 1; back <= 5; back++) {
    const previous = weekIndex - back
    if (previous < PRIMING_SEQUENCE_WEEKS) break
    if (getHijriMonth(noonOfDay(firstDayOfWeek(previous))) !== month) break
    rank++
  }

  return rank
}

/**
 * Combien de semaines NON saisonnières se sont écoulées avant celle-ci.
 * C'est ce compteur qui fait « reprendre la série où elle en était » :
 * les semaines saisonnières ne le font pas avancer.
 */
function sequenceStepsBefore(weekIndex: number): number {
  let steps = 0
  const scanned = Math.min(weekIndex, MAX_WEEKS_SCANNED)

  for (let w = 0; w < scanned; w++) {
    if (!seasonalSlotForWeek(w)) steps++
  }

  return steps
}

/**
 * Cours de la semaine.
 * Le calendrier prime : si le mois hégirien courant a des cours attitrés, on
 * tourne dedans. Sinon on avance d'un cran dans la série (aqida, puis hadith,
 * puis le reste).
 */
export function getWeeklyCourse(date: Date = new Date()): WeeklyCourse {
  const weekIndex = getWeekIndex(date)
  const slot = seasonalSlotForWeek(weekIndex)

  if (slot && slot.courseSlugs.length > 0) {
    const start = weekWithinHijriMonth(weekIndex) % slot.courseSlugs.length

    // Un cours saisonnier peut avoir été dépublié : on prend le suivant du mois
    for (let offset = 0; offset < slot.courseSlugs.length; offset++) {
      const slug = slot.courseSlugs[(start + offset) % slot.courseSlugs.length]
      const seasonal = buildWeeklyCourse(slug, slot.reason, null)
      if (seasonal) return seasonal
    }
    // Aucun cours du mois n'est publié : on retombe sur la série
  }

  const steps = sequenceStepsBefore(weekIndex)

  // Un slug de la série peut avoir été dépublié : on avance jusqu'au suivant
  for (let offset = 0; offset < courseSequence.length; offset++) {
    const position = (steps + offset) % courseSequence.length
    const course = buildWeeklyCourse(courseSequence[position], null, position + 1)
    if (course) return course
  }

  throw new Error(
    'Série mosquée : aucun cours de courseSequence n’est publié. ' +
      'Vérifier les slugs dans weekly-plan.ts.'
  )
}

// ───────────────────────────────────────────────────────────────
// Affichage
// ───────────────────────────────────────────────────────────────

/** Bornes de la semaine courante : « vendredi 7 août → jeudi 13 août ». */
export function formatWeekRange(locale: Locale, date: Date = new Date()): string {
  const start = firstDayOfWeek(getWeekIndex(date))

  const fmt = new Intl.DateTimeFormat(LOCALE_TAGS[locale], {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'Africa/Algiers',
  })

  return `${fmt.format(noonOfDay(start))} → ${fmt.format(noonOfDay(start + 6))}`
}

/** Prochains cours de la série, pour la section « à venir ». */
export function getUpcomingCourses(count: number, date: Date = new Date()): WeeklyCourse[] {
  const out: WeeklyCourse[] = []
  const weekIndex = getWeekIndex(date)
  const steps = sequenceStepsBefore(weekIndex)
  const isSeasonal = Boolean(seasonalSlotForWeek(weekIndex))

  // Une semaine saisonnière ne consomme pas de cran : le prochain de la série
  // est celui pointé par `steps`, pas le suivant.
  const from = isSeasonal ? steps : steps + 1

  for (let i = 0; out.length < count && i < courseSequence.length; i++) {
    const position = (from + i) % courseSequence.length
    const course = buildWeeklyCourse(courseSequence[position], null, position + 1)
    if (course) out.push(course)
  }

  return out
}

export { hadithBank }
export type { BankEntry }
