/**
 * Hajj - Leçon 009: Le Sacrifice et la Lapidation
 * Index du module
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson009: Lesson = {
  id: 'lesson-009',
  duration: '45 min',
  order: 9,
  title: {
    fr: 'Le Sacrifice et la Lapidation',
    ar: 'الهدي والرمي',
    en: 'The Sacrifice and Stoning'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  }
}

export default lesson009
