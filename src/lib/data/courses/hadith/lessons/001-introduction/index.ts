/**
 * Hadith - Leçon 001: Qu'est-ce que le Hadith?
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
    fr: "Qu'est-ce que le Hadith?",
    ar: 'ما هو الحديث؟',
    en: 'What is Hadith?',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
