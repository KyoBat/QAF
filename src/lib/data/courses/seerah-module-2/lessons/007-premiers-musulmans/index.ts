/**
 * Seerah - Lesson 007: The First Muslims
 * السابقون الأولون - Les Premiers Musulmans
 */

import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'
import { Lesson } from '../../../types'

export const lesson007: Lesson = {
  id: 'seerah-007',
  order: 7,
  duration: '25 min',
  title: {
    ar: 'السابقون الأولون',
    fr: 'Les Premiers Musulmans',
    en: 'The First Muslims',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}

export default lesson007
