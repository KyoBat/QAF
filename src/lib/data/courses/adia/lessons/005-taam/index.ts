/**
 * Les Invocations Authentiques - Leçon 005: Invocations des Repas
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson005: Lesson = {
  id: 'lesson-005',
  duration: '30 min',
  order: 5,
  title: {
    fr: 'Invocations des Repas',
    ar: 'أدعية الطعام',
    en: 'Meal Supplications',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
