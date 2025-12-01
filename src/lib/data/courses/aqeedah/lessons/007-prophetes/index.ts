/**
 * Aqeedah - Lesson 007: Belief in the Prophets
 * Index file exporting all language versions
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson007: Lesson = {
  id: 'lesson-007',
  duration: '60 min',
  order: 7,
  title: {
    fr: 'La Foi aux Prophètes et Messagers (Ar-Rusul)',
    ar: 'الإيمان بالأنبياء والرسل',
    en: 'Belief in the Prophets and Messengers (Ar-Rusul)'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  },
}
