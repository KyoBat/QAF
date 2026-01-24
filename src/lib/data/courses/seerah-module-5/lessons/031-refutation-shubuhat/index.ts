/**
 * Leçon — Réfutation des Accusations contre le Prophète ﷺ (الرد على الشبهات)
 */

import { Lesson } from '../../../types'
import { lessonShubuhattFr } from './fr'
import { lessonShubuhattAr } from './ar'
import { lessonShubuhattEn } from './en'

const lessonRefutationShubuhat: Lesson = {
  id: 'seerah-031-refutation-shubuhat',
  title: {
    fr: lessonShubuhattFr.title,
    ar: lessonShubuhattAr.title,
    en: lessonShubuhattEn.title,
  },
  content: {
    fr: lessonShubuhattFr.content,
    ar: lessonShubuhattAr.content,
    en: lessonShubuhattEn.content,
  },
  duration: '45 min',
  order: 31,
}

export default lessonRefutationShubuhat
