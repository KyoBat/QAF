/**
 * Aqeedah - Leçon 014: أركان التوحيد وأقسامه
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson014: Lesson = {
  id: 'lesson-014',
  duration: '45 min',
  order: 14,
  title: {
    fr: 'Les Piliers et Catégories du Tawhid',
    ar: 'أركان التوحيد وأقسامه',
    en: 'Pillars and Categories of Tawhid',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
