import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson008: Lesson = {
  id: 'lesson-008',
  duration: '30 min',
  order: 8,
  title: {
    fr: 'Le Jeûne Surérogatoire',
    ar: 'صيام التطوع',
    en: 'Voluntary Fasting',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
