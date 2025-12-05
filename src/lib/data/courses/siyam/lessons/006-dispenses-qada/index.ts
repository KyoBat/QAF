import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson006: Lesson = {
  id: 'lesson-006',
  duration: '35 min',
  order: 6,
  title: {
    fr: 'Les Dispenses et le Rattrapage',
    ar: 'الرُّخَص والقضاء',
    en: 'Exemptions and Making Up Fasts',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
