/**
 * Leçon 007: Les Règles du Takfir
 * Export centralisé
 */

import { Lesson } from '../../../types'
import { lesson007Ar } from './ar'
import { lesson007Fr } from './fr'
import { lesson007En } from './en'

export const lesson007: Lesson = {
  id: 'aqeedah-adv-007',
  title: {
    fr: lesson007Fr.title,
    ar: lesson007Ar.title,
    en: lesson007En.title,
  },
  content: {
    fr: lesson007Fr.content,
    ar: lesson007Ar.content,
    en: lesson007En.content,
  },
  duration: '40 min',
  order: 7,
  videoUrl: '',
}
