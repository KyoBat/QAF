/**
 * Types pour les pages dédiées aux mosquées partenaires
 */

import type { Locale } from '@/locales'

/** Texte disponible dans les 3 langues du site */
export type LocalizedText = Record<Locale, string>

export interface Mosquee {
  /** Identifiant stable, utilisé aussi comme slug d'URL */
  slug: string
  name: LocalizedText
  /** Nom arabe affiché tel quel quelle que soit la langue de lecture */
  nameArabic: string
  /** Quartier / rue */
  address: LocalizedText
  city: LocalizedText
  country: LocalizedText
  /** Date d'inauguration au format ISO (YYYY-MM-DD) */
  inauguratedAt: string
  /** Phrase de contexte affichée sous le titre */
  intro: LocalizedText
  /** Détail de l'inauguration */
  inaugurationNote: LocalizedText
}

/**
 * Une entrée de la banque quotidienne.
 * Le titre et la durée ne sont pas dupliqués ici : ils sont résolus depuis
 * coursesData via courseSlug + lessonId, ce qui garantit qu'un lien ne peut
 * pas pointer vers une leçon inexistante ou renommée.
 */
export interface DailyEntry {
  /** Identifiant stable de l'entrée (ne pas réutiliser après suppression) */
  id: string
  /** Slug du cours TahaLearn ciblé */
  courseSlug: string
  /** Id de la leçon dans ce cours */
  lessonId: string
  /** hadith = une citation est affichée ; lesson = on met en avant la leçon seule */
  kind: 'hadith' | 'lesson'
  /** Citation affichée pour les entrées de type hadith */
  quote?: {
    ar: string
    translation: LocalizedText
    /** Référence (Bukhari, Muslim…) telle qu'affichée */
    source: LocalizedText
  }
  /** La question du jour — c'est elle qui doit donner envie d'ouvrir la leçon */
  question: LocalizedText
}
