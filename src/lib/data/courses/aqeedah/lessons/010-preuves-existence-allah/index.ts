/**
 * Aqeedah - Leçon 010: أصول العقيدة والأدلة على وجود الله
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson010: Lesson = {
  id: 'lesson-010',
  duration: '50 min',
  order: 10,
  title: {
    fr: 'Les Preuves de l\'Existence d\'Allah',
    ar: 'الأدلة على وجود الله',
    en: 'Proofs of Allah\'s Existence',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
