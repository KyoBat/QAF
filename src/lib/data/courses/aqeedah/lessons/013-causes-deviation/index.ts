/**
 * Aqeedah - Leçon 013: أسباب الانحراف عن العقيدة الصحيحة
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson013: Lesson = {
  id: 'lesson-013',
  duration: '40 min',
  order: 14,
  title: {
    fr: 'Les Causes de Déviation de la Croyance Authentique',
    ar: 'أسباب الانحراف عن العقيدة الصحيحة',
    en: 'Causes of Deviation from Authentic Creed',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
