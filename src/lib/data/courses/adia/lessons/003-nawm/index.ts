/**
 * Les Invocations Authentiques - Leçon 003: Invocations du Sommeil
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson003: Lesson = {
  id: 'lesson-003',
  duration: '35 min',
  order: 3,
  title: {
    fr: 'Invocations du Sommeil',
    ar: 'أذكار النوم',
    en: 'Sleep Supplications',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
