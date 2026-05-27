/**
 * Fiqh - Leçon 004: الوضوء
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson004: Lesson = {
  id: 'lesson-004',
  duration: '45 min',
  order: 6,
  title: {
    fr: 'Les Ablutions (Wudu)',
    ar: 'الوضوء',
    en: 'Ablution (Wudu)',
  },
  description: {
    fr: "Comment faire le wudu (ablutions) correctement selon le rite malékite : étapes obligatoires, conditions, ce qui annule les ablutions et les erreurs courantes. Guide complet avec preuves du Coran et de la Sunna.",
    ar: "كيفية الوضوء الصحيح عند المالكية: فرائضه، شروطه، نواقضه، وسننه مع الأدلة من القرآن والسنة النبوية.",
    en: "How to perform wudu correctly in Maliki fiqh: obligatory acts, conditions, what nullifies ablution and common mistakes, with Quranic and Sunnah evidence.",
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
