/**
 * Sciences du Hadith - Leçon 005: عجباً لأمر المؤمن
 * L'Affaire du Croyant est Étonnante - L'Optimisme Islamique
 * The Affair of the Believer is Amazing
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson005: Lesson = {
  id: 'lesson-005',
  duration: '35 min',
  order: 5,
  title: {
    fr: 'L\'Affaire du Croyant est Étonnante',
    ar: 'عجباً لأمر المؤمن',
    en: 'The Affair of the Believer is Amazing',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
