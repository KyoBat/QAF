/**
 * Fiqh - Leçon 006: التيمم
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson006: Lesson = {
  id: 'lesson-006',
  duration: '30 min',
  order: 8,
  title: {
    fr: 'Les Ablutions Sèches (Tayammum)',
    ar: 'التيمم',
    en: 'Dry Ablution (Tayammum)',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
