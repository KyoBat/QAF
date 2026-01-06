/**
 * Les Invocations Authentiques - Leçon 001: Invocations du Matin
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
    fr: 'Invocations du Matin',
    ar: 'أذكار الصباح',
    en: 'Morning Supplications',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
