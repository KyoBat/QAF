/**
 * Aqeedah - Leçon 003: Tawheed Al-Uluhiyyah
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson003: Lesson = {
  id: 'lesson-003',
  duration: '55 min',
  order: 3,
  title: {
    fr: "Tawheed Al-Uluhiyyah - L'Unicité dans l'Adoration",
    ar: 'توحيد الألوهية',
    en: 'Tawheed Al-Uluhiyyah - Oneness of Worship',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
