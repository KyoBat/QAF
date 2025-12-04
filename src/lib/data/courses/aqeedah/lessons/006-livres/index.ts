/**
 * Aqeedah - Lesson 006: Belief in the Books
 * Index file exporting all language versions
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson006: Lesson = {
  id: 'lesson-006',
  duration: '40 min',
  order: 9,
  title: {
    fr: 'La Foi aux Livres Révélés (Al-Kutub)',
    ar: 'الإيمان بالكتب المنزلة',
    en: 'Belief in the Revealed Books (Al-Kutub)'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  },
}
