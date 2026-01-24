/**
 * Leçon 009: Le Tawassul
 * Export centralisé
 */

import { Lesson } from '../../../types'
import { lesson009Ar } from './ar'
import { lesson009Fr } from './fr'
import { lesson009En } from './en'

export const lesson009: Lesson = {
  id: 'aqeedah-adv-009',
  title: {
    fr: lesson009Fr.title,
    ar: lesson009Ar.title,
    en: lesson009En.title,
  },
  content: {
    fr: lesson009Fr.content,
    ar: lesson009Ar.content,
    en: lesson009En.content,
  },
  duration: '35 min',
  order: 9,
  videoUrl: '',
}
