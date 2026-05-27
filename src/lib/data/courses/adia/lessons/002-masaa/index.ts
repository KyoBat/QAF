/**
 * Les Invocations Authentiques - Leçon 002: Invocations du Soir
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson002: Lesson = {
  id: 'lesson-002',
  duration: '40 min',
  order: 2,
  title: {
    fr: 'Invocations du Soir',
    ar: 'أذكار المساء',
    en: 'Evening Supplications',
  },
  description: {
    fr: "Les invocations (adhkar) du soir authentiques selon la Sunna — texte arabe, translittération et traduction. À réciter après Asr jusqu'au Maghrib pour la protection du soir.",
    ar: "أذكار المساء الثابتة عن النبي صلى الله عليه وسلم مع النص العربي، الترجمة وعدد المرات.",
    en: "Authentic evening adhkar from the Sunnah, with Arabic text, transliteration and translation. To be recited from Asr to Maghrib for protection.",
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
