/**
 * Tajweed - Leçon 002: Les points d'articulation (Makharij)
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson002: Lesson = {
  id: 'lesson-002',
  duration: '60 min',
  order: 2,
  videoUrl: 'https://www.youtube.com/watch?v=example2',
  title: {
    fr: "Les points d'articulation (Makharij)",
    ar: 'مخارج الحروف',
    en: 'Articulation Points (Makharij)',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
