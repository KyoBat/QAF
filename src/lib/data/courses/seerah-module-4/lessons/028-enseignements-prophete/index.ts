/**
 * Lesson 028 — Les Enseignements du Prophète ﷺ
 * Module 4 : Les Dernières Années
 */

import type { Lesson } from '../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

const lesson028: Lesson = {
  id: 'seerah-028',
  slug: '028-enseignements-prophete',
  order: 28,
  duration: '35 min',
  title: {
    fr: 'Les Enseignements du Prophète ﷺ',
    ar: 'تعاليم النبي ﷺ',
    en: 'The Teachings of the Prophet ﷺ',
  },
  description: {
    fr: 'Guide complet des enseignements prophétiques : adoration, moralité, relations et spiritualité, avec les hadiths authentiques.',
    ar: 'دليل شامل للتعاليم النبوية : العبادة، الأخلاق، العلاقات والروحانيات، مع الأحاديث الصحيحة.',
    en: 'Complete guide to Prophetic teachings: worship, morality, relationships, and spirituality, with authentic hadiths.',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}

export default lesson028
