/**
 * Seerah - Lesson 014: Building the Mosque and Brotherhood
 * بناء المسجد النبوي والمؤاخاة - Construction de la Mosquée et Fraternité
 */

import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'
import { Lesson } from '../../../types'

export const lesson014: Lesson = {
  id: 'seerah-014',
  order: 14,
  duration: '30 min',
  title: {
    ar: 'بناء المسجد النبوي والمؤاخاة',
    fr: 'Construction de la Mosquée et Fraternité',
    en: 'Building the Mosque and Brotherhood',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}
