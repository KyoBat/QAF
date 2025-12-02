/**
 * Fiqh - Leçon 009: Les Règles des Toilettes et l'Istinja
 * Index file
 */

import { content as contentAr } from './ar'
import { content as contentEn } from './en'
import { content as contentFr } from './fr'
import type { Lesson } from '@/lib/schemas'

export const lesson009: Lesson = {
  id: 'lesson-009',
  duration: '30 min',
  order: 4,
  title: {
    ar: 'آداب قضاء الحاجة والاستنجاء',
    en: 'Etiquettes of Relieving Oneself and Istinja',
    fr: 'Les Règles des Toilettes et l\'Istinja'
  },
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr
  }
}

export default lesson009
