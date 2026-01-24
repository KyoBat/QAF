/**
 * Leçon 025 — Le Pèlerinage d'Adieu
 * Module 4 : Les Dernières Années
 */

import type { Lesson } from '../../../types'
import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'

const lesson: Lesson = {
  id: 'seerah-025',
  order: 25,
  duration: '35 min',
  title: {
    ar: 'حجة الوداع',
    fr: 'Le Pèlerinage d\'Adieu',
    en: 'The Farewell Pilgrimage',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}

export default lesson
