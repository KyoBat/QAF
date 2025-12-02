/**
 * Fiqh - Leçon 007: Les Menstrues et les Lochies (الحيض والنفاس)
 * Index file
 */

import { content as contentAr } from './ar'
import { content as contentEn } from './en'
import { content as contentFr } from './fr'
import type { Lesson } from '@/lib/schemas'

export const lesson007: Lesson = {
  id: 'lesson-007',
  duration: '40 min',
  order: 9,
  title: {
    ar: 'أحكام الحيض والنفاس',
    en: 'Rulings on Menstruation and Postpartum Bleeding',
    fr: 'Les Règles sur les Menstrues et les Lochies'
  },
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr
  }
}

export default lesson007
