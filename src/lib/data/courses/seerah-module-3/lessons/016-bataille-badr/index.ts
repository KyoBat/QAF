/**
 * Leçon 016 — La Bataille de Badr
 * Index et métadonnées
 */

import type { Lesson } from '../../../types'
import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'

const lesson: Lesson = {
  id: 'seerah-016',
  order: 16,
  duration: '35 min',
  title: {
    ar: 'غزوة بدر الكبرى',
    fr: 'La Bataille de Badr',
    en: 'The Battle of Badr',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}

export default lesson
