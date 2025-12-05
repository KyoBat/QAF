/**
 * Fiqh - Lesson 021: صلاة الجمعة
 * Friday Prayer
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson021: Lesson = {
  id: 'lesson-021',
  title: {
    ar: 'صلاة الجمعة',
    en: 'Friday Prayer',
    fr: 'La Prière du Vendredi',
  },
  duration: '30 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 3,
};

export default lesson021;
