/**
 * Leçon 011: La Croyance des Quatre Imams
 * Export centralisé
 */

import { Lesson } from '../../../types'
import { lesson011Ar } from './ar'
import { lesson011Fr } from './fr'
import { lesson011En } from './en'

export const lesson011: Lesson = {
  id: 'aqeedah-adv-011',
  title: {
    fr: lesson011Fr.title,
    ar: lesson011Ar.title,
    en: lesson011En.title,
  },
  content: {
    fr: lesson011Fr.content,
    ar: lesson011Ar.content,
    en: lesson011En.content,
  },
  duration: '40 min',
  order: 11,
  videoUrl: '',
}
