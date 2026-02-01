/**
 * Mustalah al-Hadith - Leçon 006: الأحاديث الموضوعة
 * Les Hadiths Fabriqués
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson006: Lesson = {
  id: 'lesson-006',
  duration: '45 min',
  order: 6,
  title: {
    fr: 'Les Hadiths Fabriqués (Mawdu\')',
    ar: 'الأحاديث الموضوعة',
    en: 'Fabricated Hadiths (Mawdu\')',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
