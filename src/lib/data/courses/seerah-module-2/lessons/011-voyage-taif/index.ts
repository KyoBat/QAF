/**
 * Seerah - Lesson 011: The Journey to Ta'if
 * الرحلة إلى الطائف - Le Voyage à Ta'if
 */

import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'
import { Lesson } from '../../../types'

export const lesson011: Lesson = {
  id: 'seerah-011',
  order: 11,
  duration: '30 min',
  title: {
    ar: 'الرحلة إلى الطائف',
    fr: 'Le Voyage à Ta\'if',
    en: 'The Journey to Ta\'if',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}

export default lesson011
