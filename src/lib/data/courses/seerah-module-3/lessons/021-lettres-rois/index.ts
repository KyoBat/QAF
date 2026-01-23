/**
 * Leçon 021 — Les Lettres aux Rois
 * Index et métadonnées
 */

import type { Lesson } from '../../../types'
import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'

const lesson: Lesson = {
  id: 'seerah-021',
  order: 21,
  duration: '30 min',
  title: {
    ar: 'رسائل النبي ﷺ إلى الملوك',
    fr: 'Les Lettres aux Rois',
    en: 'The Letters to the Kings',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}

export default lesson
