import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson004: Lesson = {
  id: 'lesson-004',
  duration: '40 min',
  order: 4,
  title: {
    fr: 'Les Actes qui Annulent le Jeûne',
    ar: 'المفطرات',
    en: 'Acts that Nullify Fasting',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
