/**
 * Aqeedah - Lesson 009: Belief in Divine Decree
 * Index file exporting all language versions
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson009: Lesson = {
  id: 'lesson-009',
  duration: '55 min',
  order: 9,
  title: {
    fr: 'La Foi au Destin (Al-Qadr)',
    ar: 'الإيمان بالقدر',
    en: 'Belief in Divine Decree (Al-Qadr)'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  },
}
