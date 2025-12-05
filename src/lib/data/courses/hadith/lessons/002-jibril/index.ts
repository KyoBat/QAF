/**
 * Hadith Essentiels - Leçon 002: Le Hadith de Jibril
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson002: Lesson = {
  id: 'lesson-002',
  duration: '40 min',
  order: 2,
  title: {
    fr: 'Le Hadith de Jibril',
    ar: 'حديث جبريل',
    en: 'The Hadith of Jibril',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
