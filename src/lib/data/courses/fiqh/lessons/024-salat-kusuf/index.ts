/**
 * Fiqh - Lesson 024: صلاة الكسوف والخسوف
 * Eclipse Prayer
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson024: Lesson = {
  id: 'lesson-024',
  title: {
    ar: 'صلاة الكسوف والخسوف',
    en: 'Eclipse Prayer',
    fr: 'La Prière de l\'Éclipse',
  },
  duration: '25 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 6,
};

export default lesson024;
