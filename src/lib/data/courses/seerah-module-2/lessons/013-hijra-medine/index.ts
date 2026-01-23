/**
 * Seerah - Lesson 013: The Hijra to Medina
 * الهجرة إلى المدينة - La Hijra vers Médine
 */

import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'
import { Lesson } from '../../../types'

export const lesson013: Lesson = {
  id: 'seerah-013',
  order: 13,
  duration: '30 min',
  title: {
    ar: 'الهجرة إلى المدينة',
    fr: 'La Hijra vers Médine',
    en: 'The Hijra to Medina',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}
