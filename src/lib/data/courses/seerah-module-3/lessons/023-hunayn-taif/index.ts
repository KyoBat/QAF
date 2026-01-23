/**
 * Leçon 023 — Hunayn et Ta'if
 * Module 3 : Médine et la construction de l'État islamique
 */

import type { Lesson } from '../../../types'
import { content as contentAr } from './ar'
import { content as contentFr } from './fr'
import { content as contentEn } from './en'

const lesson: Lesson = {
  id: 'seerah-023',
  order: 23,
  duration: '35 min',
  title: {
    ar: 'غزوة حنين وحصار الطائف',
    fr: 'La Bataille de Hunayn et le Siège de Ta\'if',
    en: 'The Battle of Hunayn and the Siege of Ta\'if',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
}

export default lesson
