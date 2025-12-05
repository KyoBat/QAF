import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson010: Lesson = {
  id: 'lesson-010',
  duration: '30 min',
  order: 10,
  title: {
    fr: "Zakat Al-Fitr et l'Eid",
    ar: 'زكاة الفطر والعيد',
    en: 'Zakat Al-Fitr and Eid',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
