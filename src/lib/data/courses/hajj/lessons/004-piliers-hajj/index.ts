/**
 * Hajj - Leçon 004: Les Piliers du Hajj
 * Index du module
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson004: Lesson = {
  id: 'lesson-004',
  duration: '45 min',
  order: 4,
  title: {
    fr: 'Les Piliers du Hajj',
    ar: 'أركان الحج',
    en: 'The Pillars of Hajj'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  }
}

export default lesson004
