/**
 * Leçon 029 — Leçons de la Seerah pour Aujourd'hui
 */

import { Lesson } from '../../../types'
import { lesson029Fr } from './fr'
import { lesson029Ar } from './ar'
import { lesson029En } from './en'

const lesson029: Lesson = {
  id: 'seerah-029-lecons-seerah',
  title: {
    fr: lesson029Fr.title,
    ar: lesson029Ar.title,
    en: lesson029En.title,
  },
  content: {
    fr: lesson029Fr.content,
    ar: lesson029Ar.content,
    en: lesson029En.content,
  },
  duration: '30 min',
  order: 29,
}

export default lesson029
