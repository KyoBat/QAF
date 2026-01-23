/**
 * Seerah - Leçon 001: L'Arabie avant l'Islam
 * Index de la leçon
 */

import { Lesson } from '../../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson001: Lesson = {
  id: 'lesson-001',
  duration: '50 min',
  order: 1,
  title: {
    fr: "L'Arabie avant l'Islam",
    ar: 'الجزيرة العربية قبل الإسلام',
    en: 'Arabia Before Islam',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
