/**
 * Leçon 005: L'Alliance et le Désaveu
 * Export centralisé
 */

import { Lesson } from '../../../types'
import { lesson005Ar } from './ar'
import { lesson005Fr } from './fr'
import { lesson005En } from './en'

export const lesson005: Lesson = {
  id: 'aqeedah-adv-005',
  title: {
    fr: lesson005Fr.title,
    ar: lesson005Ar.title,
    en: lesson005En.title,
  },
  content: {
    fr: lesson005Fr.content,
    ar: lesson005Ar.content,
    en: lesson005En.content,
  },
  duration: '35 min',
  order: 5,
  videoUrl: '',
}
