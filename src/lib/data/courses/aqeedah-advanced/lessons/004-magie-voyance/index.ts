/**
 * Leçon 004: La Magie et la Voyance
 * Export centralisé
 */

import { Lesson } from '../../../types'
import { lesson004Ar } from './ar'
import { lesson004Fr } from './fr'
import { lesson004En } from './en'

export const lesson004: Lesson = {
  id: 'aqeedah-adv-004',
  title: {
    fr: lesson004Fr.title,
    ar: lesson004Ar.title,
    en: lesson004En.title,
  },
  content: {
    fr: lesson004Fr.content,
    ar: lesson004Ar.content,
    en: lesson004En.content,
  },
  duration: '30 min',
  order: 4,
  videoUrl: '',
}
