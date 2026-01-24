/**
 * Leçon 012: La Modération en Croyance
 * Export centralisé
 */

import { Lesson } from '../../../types'
import { lesson012Ar } from './ar'
import { lesson012Fr } from './fr'
import { lesson012En } from './en'

export const lesson012: Lesson = {
  id: 'aqeedah-adv-012',
  title: {
    fr: lesson012Fr.title,
    ar: lesson012Ar.title,
    en: lesson012En.title,
  },
  content: {
    fr: lesson012Fr.content,
    ar: lesson012Ar.content,
    en: lesson012En.content,
  },
  duration: '35 min',
  order: 12,
  videoUrl: '',
}
