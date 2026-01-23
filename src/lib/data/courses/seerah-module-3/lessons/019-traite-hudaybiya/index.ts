/**
 * Leçon 019 — Le Traité de Hudaybiya
 * Index et métadonnées
 */

import type { Lesson } from '../../../types'
import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'

const lesson: Lesson = {
  id: 'seerah-019',
  order: 19,
  duration: '35 min',
  title: {
    ar: 'صلح الحديبية',
    fr: 'Le Traité de Hudaybiya',
    en: 'The Treaty of Hudaybiya',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}

export default lesson
