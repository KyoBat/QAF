import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson005: Lesson = {
  id: 'lesson-005',
  duration: '30 min',
  order: 5,
  title: {
    fr: 'Ce qui est Permis pendant le Jeûne',
    ar: 'ما يُباح للصائم',
    en: 'What is Permitted During Fasting',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
