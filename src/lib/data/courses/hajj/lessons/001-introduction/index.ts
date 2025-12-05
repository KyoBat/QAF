/**
 * Hajj - Leçon 001: Introduction au Pèlerinage
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson001: Lesson = {
  id: 'lesson-001',
  duration: '35 min',
  order: 1,
  title: {
    fr: 'Introduction au Pèlerinage',
    ar: 'مقدمة في الحج',
    en: 'Introduction to Pilgrimage',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
