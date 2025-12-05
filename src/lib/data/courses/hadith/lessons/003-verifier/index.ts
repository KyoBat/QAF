/**
 * Hadith Essentiels - Leçon 003: Vérifier avant de Parler
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson003: Lesson = {
  id: 'lesson-003',
  duration: '30 min',
  order: 3,
  title: {
    fr: 'Vérifier avant de Parler',
    ar: 'التثبت قبل النقل',
    en: 'Verify Before Speaking',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
