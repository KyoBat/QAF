/**
 * Seerah - Leçon 002: La Naissance du Prophète ﷺ
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson002: Lesson = {
  id: 'lesson-002',
  duration: '50 min',
  order: 2,
  title: {
    fr: 'La Naissance du Prophète ﷺ',
    ar: 'مولد النبي ﷺ',
    en: 'The Birth of the Prophet ﷺ',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
