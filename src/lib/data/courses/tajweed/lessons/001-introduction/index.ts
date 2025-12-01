/**
 * Tajweed - Leçon 001: Introduction et importance du Tajweed
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson001: Lesson = {
  id: 'lesson-001',
  duration: '45 min',
  order: 1,
  videoUrl: 'https://www.youtube.com/watch?v=example1',
  title: {
    fr: 'Introduction et importance du Tajweed',
    ar: 'مقدمة وأهمية التجويد',
    en: 'Introduction and Importance of Tajweed',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
