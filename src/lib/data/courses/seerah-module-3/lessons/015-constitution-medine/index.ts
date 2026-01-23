/**
 * Leçon 015 — La Constitution de Médine
 * Index et métadonnées
 */

import type { Lesson } from '../../../types'
import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'

const lesson: Lesson = {
  id: 'seerah-015',
  order: 15,
  duration: '30 min',
  title: {
    ar: 'صحيفة المدينة',
    fr: 'La Constitution de Médine',
    en: 'The Constitution of Medina',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}

export default lesson
