import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson003: Lesson = {
  id: 'lesson-003',
  duration: '35 min',
  order: 3,
  title: {
    fr: 'Piliers et Conditions de Validité',
    ar: 'أركان الصيام وشروط صحته',
    en: 'Pillars and Conditions of Validity',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
