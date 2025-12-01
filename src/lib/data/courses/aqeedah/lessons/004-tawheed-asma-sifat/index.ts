/**
 * Aqeedah - Lesson 004: Tawheed Al-Asma wa Sifat
 * Index file exporting all language versions
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson004: Lesson = {
  id: 'lesson-004',
  duration: '55 min',
  order: 4,
  title: {
    fr: 'Tawheed Al-Asma wa Sifat (Unicité des Noms et Attributs)',
    ar: 'توحيد الأسماء والصفات',
    en: 'Tawheed Al-Asma wa Sifat (Oneness of Names and Attributes)'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  },
}
