import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson009: Lesson = {
  id: 'lesson-009',
  duration: '35 min',
  order: 9,
  title: {
    fr: "Laylat al-Qadr et l'I'tikaf",
    ar: 'ليلة القدر والاعتكاف',
    en: "Laylat al-Qadr and I'tikaf",
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
