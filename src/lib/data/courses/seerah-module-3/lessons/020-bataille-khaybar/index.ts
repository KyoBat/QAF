/**
 * Leçon 020 — La Bataille de Khaybar
 * Index et métadonnées
 */

import type { Lesson } from '../../../types'
import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'

const lesson: Lesson = {
  id: 'seerah-020',
  order: 20,
  duration: '35 min',
  title: {
    ar: 'غزوة خيبر',
    fr: 'La Bataille de Khaybar',
    en: 'The Battle of Khaybar',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}

export default lesson
