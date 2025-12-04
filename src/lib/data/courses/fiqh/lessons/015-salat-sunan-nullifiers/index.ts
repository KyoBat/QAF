/**
 * Fiqh - Leçon 015: سنن الصلاة ومبطلاتها
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson015: Lesson = {
  id: 'lesson-015',
  duration: '45 min',
  order: 5,
  title: {
    fr: 'Les Sunan et Annulatifs de la Salat',
    ar: 'سنن الصلاة ومبطلاتها',
    en: 'Sunan and Nullifiers of Salah',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
