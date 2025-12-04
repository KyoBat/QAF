/**
 * Fiqh - Leçon 011: مقدمة في فقه الصلاة
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson011: Lesson = {
  id: 'lesson-011',
  duration: '45 min',
  order: 1,
  title: {
    fr: 'Introduction au Fiqh de la Salat',
    ar: 'مقدمة في فقه الصلاة',
    en: 'Introduction to Salah Fiqh',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
