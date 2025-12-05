/**
 * Hajj - Leçon 007: Le Tawaf et le Sa'i
 * Index du module
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson007: Lesson = {
  id: 'lesson-007',
  duration: '50 min',
  order: 7,
  title: {
    fr: 'Le Tawaf et le Sa\'i',
    ar: 'الطواف والسعي',
    en: 'Tawaf and Sa\'i'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  }
}

export default lesson007
