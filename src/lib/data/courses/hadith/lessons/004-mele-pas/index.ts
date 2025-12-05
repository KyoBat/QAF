/**
 * Hadith Essentiels - Leçon 004: Délaisser ce qui ne te concerne pas
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson004: Lesson = {
  id: 'lesson-004',
  duration: '30 min',
  order: 4,
  title: {
    fr: 'Délaisser ce qui ne te concerne pas',
    ar: 'ترك ما لا يعني',
    en: 'Leave What Doesn\'t Concern You',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
