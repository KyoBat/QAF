/**
 * Seerah - Leçon 003: L'Enfance et la Jeunesse
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson003: Lesson = {
  id: 'lesson-003',
  duration: '50 min',
  order: 3,
  title: {
    fr: "L'Enfance et la Jeunesse",
    ar: 'الطفولة والشباب',
    en: 'Childhood and Youth',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
