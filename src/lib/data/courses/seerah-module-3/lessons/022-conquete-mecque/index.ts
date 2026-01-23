/**
 * Leçon 022 — La Conquête de La Mecque
 * Module 3 : Médine et la construction de l'État islamique
 */

import type { Lesson } from '../../../types'
import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'

const lesson: Lesson = {
  id: 'seerah-022',
  order: 22,
  duration: '35 min',
  title: {
    ar: 'فتح مكة : العودة المظفّرة',
    fr: 'La Conquête de La Mecque : Le Retour Triomphal',
    en: 'The Conquest of Mecca: The Triumphant Return',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}

export default lesson
