/**
 * Seerah - Lesson 010: The Difficult Years
 * السنوات الصعبة - Les Années Difficiles
 */

import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'
import { Lesson } from '../../../types'

export const lesson010: Lesson = {
  id: 'seerah-010',
  order: 10,
  duration: '30 min',
  title: {
    ar: 'السنوات الصعبة — عام الحزن',
    fr: 'Les Années Difficiles',
    en: 'The Difficult Years',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}

export default lesson010
