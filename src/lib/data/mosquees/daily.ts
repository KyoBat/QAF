/**
 * Sélection de l'entrée du jour + résolution vers la leçon réelle.
 *
 * La rotation est déterministe : même jour = même entrée pour tout le monde,
 * ce qui permet de servir la page en ISR (pas de rendu par visiteur) et rend
 * l'affichage reproductible pour un test.
 */

import { coursesData } from '@/lib/data/courses/index'
import type { Locale } from '@/locales'
import { dailyBank } from './daily-bank'
import type { DailyEntry, LocalizedText } from './types'

/** Batna suit UTC+1 toute l'année (pas d'heure d'été en Algérie). */
const ALGERIA_UTC_OFFSET_MS = 60 * 60 * 1000
const MS_PER_DAY = 24 * 60 * 60 * 1000

/**
 * Numéro de jour absolu dans le fuseau de Batna.
 * Sert d'index de rotation : il change à minuit heure locale.
 */
export function getAlgeriaDayNumber(date: Date = new Date()): number {
  return Math.floor((date.getTime() + ALGERIA_UTC_OFFSET_MS) / MS_PER_DAY)
}

/** L'entrée de la banque correspondant à ce jour. */
export function getDailyEntry(date: Date = new Date()): DailyEntry {
  const index = getAlgeriaDayNumber(date) % dailyBank.length
  return dailyBank[index]
}

export interface ResolvedDaily {
  entry: DailyEntry
  /** Titre de la leçon dans les 3 langues, lu depuis les données du cours */
  lessonTitle: LocalizedText
  courseTitle: LocalizedText
  lessonDuration: string
  /** Chemin sans préfixe de langue, ex. /courses/sciences-hadith/lessons/lesson-001 */
  path: string
  /** Rang de l'entrée dans le cycle, de 1 à cycleLength (affiché « Jour 12 / 32 ») */
  dayInCycle: number
  cycleLength: number
}

/**
 * Résout une entrée vers la leçon réelle.
 * Renvoie null si le cours ou la leçon n'existe plus (cours dépublié, leçon
 * renommée) : l'appelant peut alors passer à l'entrée suivante plutôt que
 * d'afficher un lien mort.
 */
export function resolveEntry(entry: DailyEntry): ResolvedDaily | null {
  const course = coursesData.find(c => c.slug === entry.courseSlug && c.published)
  if (!course) return null

  const lesson = course.lessons.find(l => l.id === entry.lessonId)
  if (!lesson) return null

  // Rang réel de l'entrée dans la banque : reste juste même si la rotation a
  // dû sauter une entrée cassée pour arriver ici.
  const bankIndex = dailyBank.findIndex(e => e.id === entry.id)

  return {
    entry,
    lessonTitle: lesson.title as LocalizedText,
    courseTitle: course.title as LocalizedText,
    lessonDuration: lesson.duration,
    path: `/courses/${course.slug}/lessons/${lesson.id}`,
    dayInCycle: bankIndex >= 0 ? bankIndex + 1 : 1,
    cycleLength: dailyBank.length,
  }
}

/**
 * Entrée du jour, déjà résolue.
 * Si l'entrée du jour pointe vers une leçon disparue, on avance dans la banque
 * jusqu'à en trouver une valide — la page reste donc toujours affichable.
 */
export function getResolvedDaily(date: Date = new Date()): ResolvedDaily {
  const start = getAlgeriaDayNumber(date) % dailyBank.length

  for (let offset = 0; offset < dailyBank.length; offset++) {
    const resolved = resolveEntry(dailyBank[(start + offset) % dailyBank.length])
    if (resolved) return resolved
  }

  throw new Error(
    'Banque quotidienne mosquée : aucune entrée ne pointe vers une leçon publiée. ' +
      'Vérifier les courseSlug / lessonId dans daily-bank.ts.'
  )
}

/** Aperçu des jours suivants, pour la section « à venir ». */
export function getUpcoming(count: number, date: Date = new Date()): ResolvedDaily[] {
  const out: ResolvedDaily[] = []
  const startDay = getAlgeriaDayNumber(date)

  for (let i = 1; out.length < count && i <= dailyBank.length; i++) {
    const resolved = resolveEntry(dailyBank[(startDay + i) % dailyBank.length])
    if (resolved) out.push(resolved)
  }

  return out
}

const LOCALE_TAGS: Record<Locale, string> = { fr: 'fr-DZ', ar: 'ar-DZ', en: 'en-GB' }

/** Date du jour formatée dans la langue de lecture, calée sur Batna. */
export function formatDailyDate(locale: Locale, date: Date = new Date()): string {
  return new Intl.DateTimeFormat(LOCALE_TAGS[locale], {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Africa/Algiers',
  }).format(date)
}

/**
 * Date hégirienne — repère naturel pour un public de mosquée.
 * Fourni nativement par Intl (calendrier umm al-qura), sans dépendance.
 */
export function formatHijriDate(locale: Locale, date: Date = new Date()): string {
  return new Intl.DateTimeFormat(`${LOCALE_TAGS[locale]}-u-ca-islamic-umalqura`, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Africa/Algiers',
  }).format(date)
}

export { dailyBank }
export type { DailyEntry }
