/**
 * Les Invocations Authentiques - Leçon 004: Invocations du Réveil
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson004: Lesson = {
  id: 'lesson-004',
  duration: '30 min',
  order: 4,
  title: {
    fr: 'Invocations du Réveil',
    ar: 'أدعية الاستيقاظ',
    en: 'Waking Up Supplications',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
