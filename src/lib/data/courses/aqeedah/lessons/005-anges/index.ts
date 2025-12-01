/**
 * Aqeedah - Lesson 005: Belief in the Angels
 * Index file exporting all language versions
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson005: Lesson = {
  id: 'lesson-005',
  duration: '50 min',
  order: 5,
  title: {
    fr: 'La Foi aux Anges (Al-Mala\'ika)',
    ar: 'الإيمان بالملائكة',
    en: 'Belief in the Angels (Al-Mala\'ika)'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  },
}
