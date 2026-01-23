/**
 * Seerah - Lesson 014: Building the Mosque and Brotherhood
 * بناء المسجد النبوي والمؤاخاة - Construction de la Mosquée et Fraternité
 */

import type { Lesson } from '../../../types'
import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'

const lesson: Lesson = {
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

export default lesson
