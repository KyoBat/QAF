/**
 * Lesson 028 — Les Enseignements du Prophète ﷺ
 * Module 4 : Les Dernières Années
 */

import type { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

const lesson028: Lesson = {
  id: 'seerah-028',
  order: 28,
  duration: '35 min',
  title: {
    fr: 'Les Enseignements du Prophète ﷺ',
    ar: 'تعاليم النبي ﷺ',
    en: 'The Teachings of the Prophet ﷺ',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}

export default lesson028
