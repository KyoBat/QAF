/**
 * Les Invocations Authentiques - Leçon 002: Invocations du Soir
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson002: Lesson = {
  id: 'lesson-002',
  duration: '40 min',
  order: 2,
  title: {
    fr: 'Invocations du Soir',
    ar: 'أذكار المساء',
    en: 'Evening Supplications',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
