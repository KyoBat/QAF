/**
 * Fiqh - Lesson 023: صلاة الجنازة
 * Funeral Prayer
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson023: Lesson = {
  id: 'lesson-023',
  title: {
    ar: 'صلاة الجنازة',
    en: 'Funeral Prayer',
    fr: 'La Prière Funéraire',
  },
  duration: '30 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 5,
};

export default lesson023;
