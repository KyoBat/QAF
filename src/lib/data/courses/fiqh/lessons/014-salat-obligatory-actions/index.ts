/**
 * Fiqh - Leçon 014: واجبات الصلاة
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson014: Lesson = {
  id: 'lesson-014',
  duration: '45 min',
  order: 4,
  title: {
    fr: 'Les Obligations de la Salat',
    ar: 'واجبات الصلاة',
    en: 'The Obligatory Actions of Salah',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
