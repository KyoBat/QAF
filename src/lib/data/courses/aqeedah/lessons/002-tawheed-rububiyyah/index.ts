/**
 * Aqeedah - Leçon 002: Tawheed Al-Rububiyyah
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson002: Lesson = {
  id: 'lesson-002',
  duration: '50 min',
  order: 2,
  title: {
    fr: "Tawheed Al-Rububiyyah - L'Unicité de la Seigneurie",
    ar: 'توحيد الربوبية',
    en: 'Tawheed Al-Rububiyyah - Oneness of Lordship',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
