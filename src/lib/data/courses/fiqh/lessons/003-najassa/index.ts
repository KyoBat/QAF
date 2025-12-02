/**
 * Fiqh - Leçon 003: النجاسة وأحكامها
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson003: Lesson = {
  id: 'lesson-003',
  duration: '35 min',
  order: 3,
  title: {
    fr: 'Les Impuretés (Najassa)',
    ar: 'النجاسة وأحكامها',
    en: 'Impurities (Najassa)',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
