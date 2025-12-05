/**
 * Hajj - Leçon 002: Les Conditions d'Obligation
 * Index du module
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson002: Lesson = {
  id: 'lesson-002',
  duration: '35 min',
  order: 2,
  title: {
    fr: 'Les Conditions d\'Obligation du Hajj',
    ar: 'شروط وجوب الحج',
    en: 'Conditions for the Obligation of Hajj'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  }
}

export default lesson002
