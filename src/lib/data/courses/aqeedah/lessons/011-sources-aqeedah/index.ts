/**
 * Aqeedah - Leçon 011: مصادر تلقي العقيدة الصحيحة
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson011: Lesson = {
  id: 'lesson-011',
  duration: '40 min',
  order: 11,
  title: {
    fr: 'Les Sources de la Croyance Authentique',
    ar: 'مصادر تلقي العقيدة الصحيحة',
    en: 'Sources of Authentic Creed',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
