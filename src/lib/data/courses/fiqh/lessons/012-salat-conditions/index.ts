/**
 * Fiqh - Leçon 012: شروط الصلاة السبعة
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson012: Lesson = {
  id: 'lesson-012',
  duration: '50 min',
  order: 2,
  title: {
    fr: 'Les Conditions de la Salat',
    ar: 'شروط الصلاة السبعة',
    en: 'The Conditions of Salah',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
