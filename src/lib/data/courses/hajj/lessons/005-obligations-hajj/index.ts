/**
 * Hajj - Leçon 005: Les Obligations du Hajj
 * Index du module
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson005: Lesson = {
  id: 'lesson-005',
  duration: '40 min',
  order: 5,
  title: {
    fr: 'Les Obligations du Hajj',
    ar: 'واجبات الحج',
    en: 'The Obligations of Hajj'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  }
}

export default lesson005
