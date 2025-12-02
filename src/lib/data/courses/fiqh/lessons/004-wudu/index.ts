/**
 * Fiqh - Leçon 004: الوضوء
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson004: Lesson = {
  id: 'lesson-004',
  duration: '45 min',
  order: 6,
  title: {
    fr: 'Les Ablutions (Wudu)',
    ar: 'الوضوء',
    en: 'Ablution (Wudu)',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
