/**
 * Mustalah al-Hadith - Leçon 007: المحدثات من النساء
 * Les Femmes Savantes du Hadith
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson007: Lesson = {
  id: 'lesson-007',
  duration: '45 min',
  order: 7,
  title: {
    fr: 'Les Femmes Savantes du Hadith',
    ar: 'المحدثات من النساء',
    en: 'Women Scholars of Hadith',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
