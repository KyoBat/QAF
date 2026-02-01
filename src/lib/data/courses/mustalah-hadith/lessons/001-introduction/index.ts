/**
 * Mustalah al-Hadith - Leçon 001: مقدمة في علوم الحديث
 * Introduction aux Sciences du Hadith
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
    fr: 'Introduction aux Sciences du Hadith',
    ar: 'مقدمة في علوم الحديث',
    en: 'Introduction to Hadith Sciences',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
