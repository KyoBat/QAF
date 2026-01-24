/**
 * Leçon 026 — La Maladie et le Décès du Prophète ﷺ
 * Module 4 : Les Dernières Années
 */

import type { Lesson } from '../../../types'
import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'

const lesson: Lesson = {
  id: 'seerah-026',
  order: 26,
  duration: '35 min',
  title: {
    ar: 'مرض النبي ﷺ ووفاته',
    fr: 'La Maladie et le Décès du Prophète ﷺ',
    en: 'The Prophet\'s ﷺ Illness and Death',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}

export default lesson
