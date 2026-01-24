/**
 * Leçon 024 — L'Année des Délégations
 * Module 4 : Les Dernières Années
 */

import type { Lesson } from '../../../types'
import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'

const lesson: Lesson = {
  id: 'seerah-024',
  order: 24,
  duration: '30 min',
  title: {
    ar: 'عام الوفود',
    fr: 'L\'Année des Délégations',
    en: 'The Year of Delegations',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}

export default lesson
