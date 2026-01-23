/**
 * Seerah - Lesson 009: The Persecution of the Muslims
 * اضطهاد المسلمين - La Persécution des Musulmans
 */

import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'
import { Lesson } from '../../../types'

export const lesson009: Lesson = {
  id: 'seerah-009',
  order: 9,
  duration: '30 min',
  title: {
    ar: 'اضطهاد المسلمين',
    fr: 'La Persécution des Musulmans',
    en: 'The Persecution of the Muslims',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}

export default lesson009
