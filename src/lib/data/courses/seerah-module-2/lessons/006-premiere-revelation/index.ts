/**
 * Seerah - Lesson 006: The First Revelation
 * الوحي الأول - La Première Révélation
 */

import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'
import { Lesson } from '../../../types'

export const lesson006: Lesson = {
  id: 'seerah-006',
  order: 6,
  duration: '25 min',
  title: {
    ar: 'الوحي الأول',
    fr: 'La Première Révélation',
    en: 'The First Revelation',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}

export default lesson006
