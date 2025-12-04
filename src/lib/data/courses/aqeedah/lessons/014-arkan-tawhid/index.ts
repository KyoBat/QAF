/**
 * Aqeedah - Leçon 014: أركان التوحيد وأقسامه
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'
import { aqsamTawhidMindMap, shurutKalimahMindMap } from '../../mindmaps'

export const lesson014: Lesson = {
  id: 'lesson-014',
  duration: '45 min',
  order: 4,
  title: {
    fr: 'Les Piliers et Catégories du Tawhid',
    ar: 'أركان التوحيد وأقسامه',
    en: 'Pillars and Categories of Tawhid',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  mindmaps: [
    {
      id: 'aqsam-tawhid',
      title: {
        fr: 'Les Trois Types de Tawhid',
        ar: 'أقسام التوحيد الثلاثة',
        en: 'The Three Types of Tawhid',
      },
      data: aqsamTawhidMindMap,
    },
    {
      id: 'shurut-kalimah',
      title: {
        fr: 'Les Conditions de La ilaha illa Allah',
        ar: 'شروط لا إله إلا الله',
        en: 'Conditions of La ilaha illa Allah',
      },
      data: shurutKalimahMindMap,
    },
  ],
}
