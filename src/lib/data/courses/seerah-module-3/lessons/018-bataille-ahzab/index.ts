/**
 * Leçon 018 — La Bataille des Coalisés
 * Index et métadonnées
 */

import type { Lesson } from '../../../types'
import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'

const lesson: Lesson = {
  id: 'seerah-018',
  order: 18,
  duration: '35 min',
  title: {
    ar: 'غزوة الأحزاب',
    fr: 'La Bataille des Coalisés',
    en: 'The Battle of the Confederates',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}

export default lesson
