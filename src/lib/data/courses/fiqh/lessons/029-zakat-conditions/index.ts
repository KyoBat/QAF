/**
 * Fiqh - Lesson 029: شروط وجوب الزكاة (Conditions of Zakat Obligation)
 * Index file - Aggregates all language versions
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson029: Lesson = {
  id: 'lesson-029',
  title: {
    fr: 'Les Conditions d\'Obligation de la Zakat',
    ar: 'شروط وجوب الزكاة',
    en: 'Conditions of Zakat Obligation',
  },
  duration: '25 min',
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  order: 2,
};

export default lesson029;
