/**
 * Hajj - Leçon 010: Al-'Umra (Le Petit Pèlerinage)
 * Index du module
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson010: Lesson = {
  id: 'lesson-010',
  duration: '35 min',
  order: 10,
  title: {
    fr: 'Al-\'Umra - Le Petit Pèlerinage',
    ar: 'العمرة - الحج الأصغر',
    en: 'Al-\'Umra - The Lesser Pilgrimage'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  }
}

export default lesson010
