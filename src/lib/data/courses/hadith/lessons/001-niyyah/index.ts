/**
 * Hadith Essentiels - Leçon 001: Les Actes selon les Intentions
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson001: Lesson = {
  id: 'lesson-001',
  duration: '35 min',
  order: 1,
  title: {
    fr: 'Les Actes selon les Intentions',
    ar: 'الأعمال بالنيات',
    en: 'Actions According to Intentions',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
