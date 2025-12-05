/**
 * Fiqh - Lesson 028: مقدمة في الزكاة (Introduction to Zakat)
 * Index file - Aggregates all language versions
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson028: Lesson = {
  id: 'lesson-028',
  title: {
    fr: 'Introduction à la Zakat',
    ar: 'مقدمة في الزكاة',
    en: 'Introduction to Zakat',
  },
  duration: '25 min',
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  order: 1,
};

export default lesson028;
