import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson001: Lesson = {
  id: 'lesson-001',
  duration: '30 min',
  order: 1,
  title: {
    fr: 'Introduction au Jeûne',
    ar: 'مقدمة في الصيام',
    en: 'Introduction to Fasting',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
