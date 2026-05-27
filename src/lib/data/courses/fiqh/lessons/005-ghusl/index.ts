/**
 * Fiqh - Leçon 005: الغسل
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson005: Lesson = {
  id: 'lesson-005',
  duration: '40 min',
  order: 7,
  title: {
    fr: 'Les Grandes Ablutions (Ghusl)',
    ar: 'الغسل',
    en: 'Major Ablution (Ghusl)',
  },
  description: {
    fr: "Comment faire le ghusl (grande ablution) en islam selon le rite malékite : causes rendant le ghusl obligatoire (janaba, menstrues, nifas), étapes du ghusl complet et abrégé.",
    ar: "أحكام الغسل عند المالكية: موجباته، فرائضه، سننه، وكيفية الغسل الكامل والمجزئ.",
    en: "How to perform ghusl (major ritual bath) in Maliki fiqh: obligatory causes, obligatory acts, sunnah acts, and step-by-step method.",
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
