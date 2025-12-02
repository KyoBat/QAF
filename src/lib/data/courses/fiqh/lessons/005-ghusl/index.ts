/**
 * Fiqh - Leçon 005: الغسل
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson005: Lesson = {
  id: 'lesson-005',
  duration: '40 min',
  order: 7,
  title: {
    fr: 'Les Grandes Ablutions (Ghusl)',
    ar: 'الغسل',
    en: 'Major Ablution (Ghusl)',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
