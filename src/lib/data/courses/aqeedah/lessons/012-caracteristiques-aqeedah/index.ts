/**
 * Aqeedah - Leçon 012: مميزات العقيدة الصحيحة
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson012: Lesson = {
  id: 'lesson-012',
  duration: '35 min',
  order: 12,
  title: {
    fr: 'Les Caractéristiques de la Croyance Authentique',
    ar: 'مميزات العقيدة الصحيحة',
    en: 'Characteristics of Authentic Creed',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
