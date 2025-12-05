import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson007: Lesson = {
  id: 'lesson-007',
  duration: '30 min',
  order: 7,
  title: {
    fr: "L'Expiation (Kaffara) et la Fidya",
    ar: 'الكفارة والفدية',
    en: 'Expiation (Kaffara) and Fidya',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
