/**
 * Leçon 001: Les Annulateurs de l'Islam — Introduction
 * Export centralisé
 */

import { Lesson } from '../../../types'
import { lesson001Ar } from './ar'
import { lesson001Fr } from './fr'
import { lesson001En } from './en'

export const lesson001: Lesson = {
  id: 'aqeedah-adv-001',
  title: {
    fr: lesson001Fr.title,
    ar: lesson001Ar.title,
    en: lesson001En.title,
  },
  content: {
    fr: lesson001Fr.content,
    ar: lesson001Ar.content,
    en: lesson001En.content,
  },
  duration: '30 min',
  order: 1,
  videoUrl: '',
}
