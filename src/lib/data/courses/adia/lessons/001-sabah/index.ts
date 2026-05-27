/**
 * Les Invocations Authentiques - Leçon 001: Invocations du Matin
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson001: Lesson = {
  id: 'lesson-001',
  duration: '40 min',
  order: 1,
  title: {
    fr: 'Invocations du Matin',
    ar: 'أذكار الصباح',
    en: 'Morning Supplications',
  },
  description: {
    fr: "Les invocations (adhkar) du matin authentiques selon la Sunna du Prophète — avec leur texte arabe, translittération et traduction. À réciter après fajr pour protéger sa journée.",
    ar: "أذكار الصباح الثابتة عن النبي صلى الله عليه وسلم مع النص العربي، الترجمة وعدد المرات.",
    en: "Authentic morning adhkar from the Sunnah of the Prophet, with Arabic text, transliteration and translation. To be recited after Fajr for daily protection.",
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
