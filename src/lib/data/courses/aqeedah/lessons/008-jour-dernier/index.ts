/**
 * Aqeedah - Lesson 008: Belief in the Last Day
 * Index file exporting all language versions
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson008: Lesson = {
  id: 'lesson-008',
  duration: '55 min',
  order: 11,
  title: {
    fr: 'La Foi au Jour Dernier (Al-Yawm Al-Akhir)',
    ar: 'الإيمان باليوم الآخر',
    en: 'Belief in the Last Day (Al-Yawm Al-Akhir)'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  },
}
