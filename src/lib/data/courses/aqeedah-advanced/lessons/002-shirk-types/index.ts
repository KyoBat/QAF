/**
 * Leçon 002: Le Shirk — Types et Causes
 * Export centralisé
 */

import { Lesson } from '../../../types'
import { lesson002Ar } from './ar'
import { lesson002Fr } from './fr'
import { lesson002En } from './en'

export const lesson002: Lesson = {
  id: 'aqeedah-adv-002',
  title: {
    fr: lesson002Fr.title,
    ar: lesson002Ar.title,
    en: lesson002En.title,
  },
  content: {
    fr: lesson002Fr.content,
    ar: lesson002Ar.content,
    en: lesson002En.content,
  },
  duration: '35 min',
  order: 2,
  videoUrl: '',
}
