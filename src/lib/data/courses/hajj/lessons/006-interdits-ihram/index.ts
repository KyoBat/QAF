/**
 * Hajj - Leçon 006: Les Interdits de l'Ihram
 * Index du module
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson006: Lesson = {
  id: 'lesson-006',
  duration: '45 min',
  order: 6,
  title: {
    fr: 'Les Interdits de l\'Ihram',
    ar: 'محظورات الإحرام',
    en: 'Prohibitions During Ihram'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  }
}

export default lesson006
