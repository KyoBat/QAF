/**
 * Leçon 010: Les Karamât
 * Export centralisé
 */

import { Lesson } from '../../../types'
import { lesson010Ar } from './ar'
import { lesson010Fr } from './fr'
import { lesson010En } from './en'

export const lesson010: Lesson = {
  id: 'aqeedah-adv-010',
  title: {
    fr: lesson010Fr.title,
    ar: lesson010Ar.title,
    en: lesson010En.title,
  },
  content: {
    fr: lesson010Fr.content,
    ar: lesson010Ar.content,
    en: lesson010En.content,
  },
  duration: '30 min',
  order: 10,
  videoUrl: '',
}
