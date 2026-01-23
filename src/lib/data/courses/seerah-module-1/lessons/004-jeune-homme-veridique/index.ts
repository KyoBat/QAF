/**
 * Seerah - Leçon 004: Le Jeune Homme Véridique
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson004: Lesson = {
  id: 'lesson-004',
  duration: '30 min',
  order: 4,
  title: {
    fr: 'Le Jeune Homme Véridique',
    ar: 'الشاب الصادق الأمين',
    en: 'The Truthful Young Man',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
