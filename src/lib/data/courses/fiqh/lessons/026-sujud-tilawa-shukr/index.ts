/**
 * Fiqh - Lesson 026: سجود التلاوة والشكر
 * Prostrations of Recitation and Gratitude
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson026: Lesson = {
  id: 'lesson-026',
  title: {
    ar: 'سجود التلاوة والشكر',
    en: 'Prostrations of Recitation and Gratitude',
    fr: 'Les Prosternations de Récitation et de Gratitude',
  },
  duration: '25 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 8,
};

export default lesson026;
