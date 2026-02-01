/**
 * Mustalah al-Hadith - Leçon 004: الكتب الستة
 * Les Recueils Majeurs
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson004: Lesson = {
  id: 'lesson-004',
  duration: '50 min',
  order: 4,
  title: {
    fr: 'Les Six Recueils Majeurs (Kutub as-Sitta)',
    ar: 'الكتب الستة',
    en: 'The Six Major Collections (Kutub as-Sitta)',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
