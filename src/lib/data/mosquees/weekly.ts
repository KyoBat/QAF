/**
 * Rotation hebdomadaire — mosquée Ar-Rayane
 *
 * Tout bascule le VENDREDI à minuit, heure de Batna, et reste figé 7 jours.
 * L'unité de la semaine est UNE LEÇON : quelque chose qu'on finit, et sur
 * quoi une question peut être précise. Le parcours n'est que le contexte.
 *
 * Rotation déterministe : même semaine = même contenu pour tout le monde, et
 * un planning qu'on peut dérouler à l'avance. La page est pour autant rendue
 * à la demande (voir page.tsx) : en ISR, le premier visiteur après la bascule
 * du vendredi recevrait encore la leçon de la semaine précédente.
 */

import { coursesData } from '@/lib/data/courses/index'
import type { Locale } from '@/locales'
import { lessonEntries } from './lesson-entries'
import {
  parcoursSequence,
  seasonalPlan,
  PRIMING_SEQUENCE_WEEKS,
  type Parcours,
  type SeasonalSlot,
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

const entriesById = new Map(lessonEntries.map(e => [e.id, e]))

// ───────────────────────────────────────────────────────────────
// Repères temporels
// ───────────────────────────────────────────────────────────────

/** Numéro de jour absolu dans le fuseau de Batna. */
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

/** Instant en milieu de journée, pour lire un mois hégirien sans effet de bord. */
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

// ───────────────────────────────────────────────────────────────
// Résolution d'une entrée vers la leçon réelle
// ───────────────────────────────────────────────────────────────

export interface WeeklyLesson {
  entry: BankEntry
  /** Titre de la leçon dans les 3 langues, lu depuis les données du cours */
  lessonTitle: LocalizedText
  courseTitle: LocalizedText
  lessonDuration: string
  /** Chemin de la leçon, sans préfixe de langue */
  path: string
  /** Chemin du cours, pour « voir tout le parcours » */
  coursePath: string
  /** Nom du parcours dont fait partie cette leçon */
  parcoursName: LocalizedText
  /** Rang dans le parcours, à partir de 1 */
  positionInParcours: number
  parcoursLength: number
  /** Renseigné quand le mois hégirien impose ce parcours */
  seasonalReason: LocalizedText | null
}

/**
 * Résout une entrée vers la leçon réelle.
 * Renvoie null si l'entrée, le cours ou la leçon n'existe plus : l'appelant
 * passe alors à la suivante plutôt que d'afficher un lien mort.
 */
export function resolveEntry(
  entryId: string,
  parcours: Parcours,
  positionInParcours: number,
  seasonalReason: LocalizedText | null
): WeeklyLesson | null {
  const entry = entriesById.get(entryId)
  if (!entry) return null

  const course = coursesData.find(c => c.slug === entry.courseSlug && c.published)
  if (!course) return null

  const lesson = course.lessons.find(l => l.id === entry.lessonId)
  if (!lesson) return null

  return {
    entry,
    lessonTitle: lesson.title as LocalizedText,
    courseTitle: course.title as LocalizedText,
    lessonDuration: lesson.duration,
    path: `/courses/${course.slug}/lessons/${lesson.id}`,
    coursePath: `/courses/${course.slug}`,
    parcoursName: parcours.name,
    positionInParcours,
    parcoursLength: parcours.entryIds.length,
    seasonalReason,
  }
}

// ───────────────────────────────────────────────────────────────
// Sélection de la semaine
// ───────────────────────────────────────────────────────────────

interface SequenceSlot {
  parcours: Parcours
  entryId: string
  position: number
}

/**
 * La série mise à plat : une case = une semaine.
 *
 * Les parcours sont ENTRELACÉS, pas concaténés : un tour prend une leçon dans
 * chaque parcours encore fourni, dans l'ordre de parcoursSequence. Concaténés,
 * les 15 leçons du parcours Hadith figeaient pendant 15 semaines le cours
 * affiché, le badge de parcours et le lien « voir tout le parcours » — même si
 * la leçon, elle, changeait bien chaque vendredi. Les parcours courts
 * s'épuisent en cours de route, les longs finissent seuls : c'est voulu.
 */
function interleaveParcours(list: Parcours[]): SequenceSlot[] {
  const slots: SequenceSlot[] = []
  const longest = Math.max(0, ...list.map(p => p.entryIds.length))

  for (let round = 0; round < longest; round++) {
    for (const parcours of list) {
      const entryId = parcours.entryIds[round]
      if (entryId) slots.push({ parcours, entryId, position: round + 1 })
    }
  }

  return slots
}

const flatSequence = interleaveParcours(parcoursSequence)

export const SEQUENCE_LENGTH = flatSequence.length

// Intl reste coûteux même formateur réutilisé, et le rendu est dynamique :
// on mémorise les lectures de calendrier, qui ne dépendent que de l'index.
const hijriMonthByWeek = new Map<number, number>()

/** Mois hégirien du vendredi qui ouvre la semaine. */
function hijriMonthOfWeek(weekIndex: number): number {
  const cached = hijriMonthByWeek.get(weekIndex)
  if (cached !== undefined) return cached

  const month = getHijriMonth(noonOfDay(firstDayOfWeek(weekIndex)))
  hijriMonthByWeek.set(weekIndex, month)
  return month
}

/**
 * Le créneau saisonnier qui s'applique à cette semaine, s'il y en a un.
 *
 * Deux raisons de rendre la main à la série malgré un mois attitré :
 * le priming du lancement (voir PRIMING_SEQUENCE_WEEKS), et l'épuisement —
 * un mois couvre 4 à 5 semaines pour un parcours saisonnier de 2 à 4 entrées.
 * Rajab, avec 3 entrées sur 5 semaines, rejouait sinon ses deux premières
 * leçons en fin de mois. Ces semaines rendues comptent pour la série.
 */
function seasonalSlotForWeek(weekIndex: number): SeasonalSlot | undefined {
  if (weekIndex < PRIMING_SEQUENCE_WEEKS) return undefined

  const slot = seasonalPlan[hijriMonthOfWeek(weekIndex)]
  if (!slot) return undefined

  return weekWithinHijriMonth(weekIndex) < slot.parcours.entryIds.length ? slot : undefined
}

/**
 * Rang de la semaine à l'intérieur de son mois hégirien, à partir de 0.
 * Sert à avancer dans les leçons d'un même mois, une par semaine.
 */
function weekWithinHijriMonth(weekIndex: number): number {
  const month = hijriMonthOfWeek(weekIndex)
  let rank = 0

  // Un mois hégirien fait 29 ou 30 jours : jamais plus de 5 semaines
  for (let back = 1; back <= 5; back++) {
    const previous = weekIndex - back
    if (previous < PRIMING_SEQUENCE_WEEKS) break
    if (hijriMonthOfWeek(previous) !== month) break
    rank++
  }

  return rank
}

/**
 * Combien de semaines NON saisonnières se sont écoulées avant celle-ci.
 * C'est ce compteur qui fait « reprendre la série où elle en était » :
 * les semaines saisonnières ne le font pas avancer.
 *
 * Le résultat ne dépend que du calendrier : on le mémorise, et un nouveau
 * calcul repart du dernier point connu au lieu de rescanner l'historique.
 */
const stepsBeforeWeek = new Map<number, number>()

function sequenceStepsBefore(weekIndex: number): number {
  const target = Math.min(Math.max(weekIndex, 0), MAX_WEEKS_SCANNED)

  const cached = stepsBeforeWeek.get(target)
  if (cached !== undefined) return cached

  let steps = 0
  let w = target

  while (w > 0) {
    const known = stepsBeforeWeek.get(w)
    if (known !== undefined) {
      steps += known
      break
    }
    w--
    if (!seasonalSlotForWeek(w)) steps++
  }

  stepsBeforeWeek.set(target, steps)
  return steps
}

/** La leçon de la série au rang donné, en sautant les entrées cassées. */
function lessonFromSequence(steps: number): WeeklyLesson | null {
  for (let offset = 0; offset < flatSequence.length; offset++) {
    const slot = flatSequence[(steps + offset) % flatSequence.length]
    const lesson = resolveEntry(slot.entryId, slot.parcours, slot.position, null)
    if (lesson) return lesson
  }
  return null
}

/**
 * La leçon de la semaine.
 * Le calendrier prime : si le mois hégirien courant a un parcours attitré et
 * qu'il lui reste une leçon, on la prend. Sinon on avance d'un cran dans la
 * série entrelacée, qui n'a pas bougé pendant les semaines saisonnières.
 */
export function getWeeklyLesson(date: Date = new Date()): WeeklyLesson {
  const weekIndex = getWeekIndex(date)
  const slot = seasonalSlotForWeek(weekIndex)

  if (slot) {
    const { entryIds } = slot.parcours
    // seasonalSlotForWeek garantit rang < nombre d'entrées : une leçon du mois
    // par semaine, sans répétition. Le décalage ne sert qu'aux ids cassés.
    const start = weekWithinHijriMonth(weekIndex)

    for (let offset = 0; offset < entryIds.length; offset++) {
      const position = (start + offset) % entryIds.length
      const lesson = resolveEntry(
        entryIds[position],
        slot.parcours,
        position + 1,
        slot.reason
      )
      if (lesson) return lesson
    }
    // Aucune leçon du mois n'est résolvable : on retombe sur la série
  }

  const lesson = lessonFromSequence(sequenceStepsBefore(weekIndex))
  if (lesson) return lesson

  throw new Error(
    'Plan mosquée : aucune entrée de parcoursSequence ne pointe vers une leçon ' +
      'publiée. Vérifier les ids dans weekly-plan.ts et lesson-entries.ts.'
  )
}

/** Prochaines leçons de la série, pour la section « à venir ». */
export function getUpcomingLessons(count: number, date: Date = new Date()): WeeklyLesson[] {
  const out: WeeklyLesson[] = []
  const weekIndex = getWeekIndex(date)
  const steps = sequenceStepsBefore(weekIndex)

  // Une semaine saisonnière ne consomme pas de cran : la prochaine de la série
  // est celle pointée par `steps`, pas la suivante.
  const from = seasonalSlotForWeek(weekIndex) ? steps : steps + 1

  for (let i = 0; out.length < count && i < flatSequence.length; i++) {
    const lesson = lessonFromSequence(from + i)
    if (lesson && !out.some(l => l.path === lesson.path)) out.push(lesson)
  }

  return out
}

export { lessonEntries }
export type { BankEntry }
