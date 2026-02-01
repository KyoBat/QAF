/**
 * Mustalah al-Hadith - Leçon 002: تصنيف الأحاديث
 * Classification des Hadiths
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson002: Lesson = {
  id: 'lesson-002',
  duration: '45 min',
  order: 2,
  title: {
    fr: 'Classification : Sahih, Hasan, Da\'if',
    ar: 'تصنيف الأحاديث: الصحيح والحسن والضعيف',
    en: 'Classification: Sahih, Hasan, Da\'if',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
