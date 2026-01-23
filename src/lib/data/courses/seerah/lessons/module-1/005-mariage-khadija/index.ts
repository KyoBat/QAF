/**
 * Seerah - Leçon 005: Le Mariage avec Khadija
 * Index de la leçon
 */

import { Lesson } from '../../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson005: Lesson = {
  id: 'lesson-005',
  duration: '30 min',
  order: 5,
  title: {
    fr: 'Le Mariage avec Khadîja',
    ar: 'الزواج من خديجة',
    en: 'The Marriage to Khadîja',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
