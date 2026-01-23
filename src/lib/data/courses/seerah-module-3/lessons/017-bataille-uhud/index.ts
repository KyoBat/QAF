/**
 * Leçon 017 — La Bataille d'Uhud
 * Index et métadonnées
 */

import type { Lesson } from '../../../types'
import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'

const lesson: Lesson = {
  id: 'seerah-017',
  order: 17,
  duration: '35 min',
  title: {
    ar: 'غزوة أُحد',
    fr: 'La Bataille d\'Uhud',
    en: 'The Battle of Uhud',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}

export default lesson
