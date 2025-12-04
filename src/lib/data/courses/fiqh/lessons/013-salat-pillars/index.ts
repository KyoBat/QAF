/**
 * Fiqh - Leçon 013: أركان الصلاة
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson013: Lesson = {
  id: 'lesson-013',
  duration: '55 min',
  order: 3,
  title: {
    fr: 'Les Piliers de la Salat',
    ar: 'أركان الصلاة',
    en: 'The Pillars of Salah',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
