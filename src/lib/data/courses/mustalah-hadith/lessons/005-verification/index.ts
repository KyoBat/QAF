/**
 * Mustalah al-Hadith - Leçon 005: التحقق من الحديث
 * Comment Vérifier un Hadith
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson005: Lesson = {
  id: 'lesson-005',
  duration: '40 min',
  order: 5,
  title: {
    fr: 'Comment Vérifier un Hadith',
    ar: 'كيف تتحقق من صحة الحديث',
    en: 'How to Verify a Hadith',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
