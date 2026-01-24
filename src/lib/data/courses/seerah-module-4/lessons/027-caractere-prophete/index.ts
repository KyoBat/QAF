/**
 * Lesson 027 — Le Caractère du Prophète ﷺ
 * Module 4 : Les Dernières Années
 */

import type { Lesson } from '../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

const lesson027: Lesson = {
  id: 'seerah-027',
  slug: '027-caractere-prophete',
  order: 27,
  duration: '30 min',
  title: {
    fr: 'Le Caractère du Prophète ﷺ',
    ar: 'شمائل النبي ﷺ',
    en: 'The Character of the Prophet ﷺ',
  },
  description: {
    fr: 'Description physique et morale du Prophète ﷺ : son apparence, ses qualités, ses relations familiales et sociales, son humour et sa douceur.',
    ar: 'الوصف الخَلْقي والخُلُقي للنبي ﷺ : مظهره، صفاته، علاقاته الأسرية والاجتماعية، مُزاحه ولطفه.',
    en: 'Physical and moral description of the Prophet ﷺ: his appearance, qualities, family and social relationships, humor, and gentleness.',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}

export default lesson027
