/**
 * Sciences du Hadith - Leçon 004: من حسن إسلام المرء تركه ما لا يعنيه
 * Délaisser ce qui ne te concerne pas - L'Excellence de l'Islam
 * Leave What Does Not Concern You
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson004: Lesson = {
  id: 'lesson-004',
  duration: '35 min',
  order: 4,
  title: {
    fr: 'Délaisser ce qui ne te concerne pas',
    ar: 'من حسن إسلام المرء تركه ما لا يعنيه',
    en: 'Leave What Does Not Concern You',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
