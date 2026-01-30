/**
 * Fiqh - Leçon 031: Spécificités de la Prière Féminine
 * Index - Export des trois langues
 */

import type { Lesson } from '@/lib/schemas/course';

import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson031: Lesson = {
  id: 'lesson-031',
  title: {
    ar: 'أحكام صلاة المرأة',
    en: "Women's Prayer Rules",
    fr: 'Spécificités de la Prière Féminine',
  },
  duration: '35 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 21,
};

export default lesson031;
