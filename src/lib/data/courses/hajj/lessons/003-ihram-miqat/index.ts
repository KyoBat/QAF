/**
 * Hajj - Leçon 003: L'Ihram et les Miqat
 * Index du module
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson003: Lesson = {
  id: 'lesson-003',
  duration: '40 min',
  order: 3,
  title: {
    fr: 'L\'Ihram et les Miqat',
    ar: 'الإحرام والمواقيت',
    en: 'Ihram and Miqat'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  }
}

export default lesson003
