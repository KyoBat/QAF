/**
 * Seerah - Lesson 008: The Public Call
 * الجهر بالدعوة - L'Appel Public
 */

import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'
import { Lesson } from '../../../types'

export const lesson008: Lesson = {
  id: 'seerah-008',
  order: 8,
  duration: '30 min',
  title: {
    ar: 'الجهر بالدعوة',
    fr: "L'Appel Public",
    en: 'The Public Call',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}

export default lesson008
