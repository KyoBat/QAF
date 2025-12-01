/**
 * Fiqh - Leçon 001: Introduction au Fiqh
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson001: Lesson = {
  id: 'lesson-001',
  duration: '40 min',
  order: 1,
  title: {
    fr: 'Introduction au Fiqh',
    ar: 'مقدمة في الفقه',
    en: 'Introduction to Fiqh',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
