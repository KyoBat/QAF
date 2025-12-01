/**
 * Tajweed - Leçon 003: Les caractéristiques des lettres (Sifat)
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson003: Lesson = {
  id: 'lesson-003',
  duration: '55 min',
  order: 3,
  title: {
    fr: 'Les caractéristiques des lettres (Sifat)',
    ar: 'صفات الحروف',
    en: 'Letter Characteristics (Sifat)',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
