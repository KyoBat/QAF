/**
 * Leçon 008: L'Innovation
 * Export centralisé
 */

import { Lesson } from '../../../types'
import { lesson008Ar } from './ar'
import { lesson008Fr } from './fr'
import { lesson008En } from './en'

export const lesson008: Lesson = {
  id: 'aqeedah-adv-008',
  title: {
    fr: lesson008Fr.title,
    ar: lesson008Ar.title,
    en: lesson008En.title,
  },
  content: {
    fr: lesson008Fr.content,
    ar: lesson008Ar.content,
    en: lesson008En.content,
  },
  duration: '35 min',
  order: 8,
  videoUrl: '',
}
