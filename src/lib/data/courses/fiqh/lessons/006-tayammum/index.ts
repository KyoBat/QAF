/**
 * Fiqh - Leçon 006: التيمم
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson006: Lesson = {
  id: 'lesson-006',
  duration: '30 min',
  order: 8,
  title: {
    fr: 'Les Ablutions Sèches (Tayammum)',
    ar: 'التيمم',
    en: 'Dry Ablution (Tayammum)',
  },
  description: {
    fr: "Comment faire le tayammum selon le rite malékite : conditions autorisant les ablutions sèches, gestes obligatoires, et ce qui invalide le tayammum. Alternative au wudu et au ghusl en cas d'absence d'eau ou de maladie.",
    ar: "أحكام التيمم عند المالكية: شروطه، فرائضه، مبطلاته، وموجباته. البديل عن الوضوء والغسل عند عدم وجود الماء أو تعذر استعماله.",
    en: "How to perform tayammum in Maliki fiqh: conditions, obligatory gestures, and what invalidates it. Alternative to wudu and ghusl when water is unavailable or harmful.",
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
