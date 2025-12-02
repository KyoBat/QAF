/**
 * Fiqh - Leçon 008: Les Récipients (الآنية)
 * Index file
 */

import { content as contentAr } from './ar'
import { content as contentEn } from './en'
import { content as contentFr } from './fr'
import type { Lesson } from '@/lib/schemas'

export const lesson008: Lesson = {
  id: 'lesson-008',
  duration: '25 min',
  order: 3,
  title: {
    ar: 'أحكام الآنية',
    en: 'Rulings on Vessels',
    fr: 'Les Règles sur les Récipients'
  },
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr
  }
}

export default lesson008
