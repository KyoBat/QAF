/**
 * Mustalah al-Hadith - Leçon 003: السند والإسناد
 * La Chaîne de Transmission
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson003: Lesson = {
  id: 'lesson-003',
  duration: '45 min',
  order: 3,
  title: {
    fr: 'La Chaîne de Transmission (Isnad)',
    ar: 'السند والإسناد',
    en: 'The Chain of Transmission (Isnad)',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
