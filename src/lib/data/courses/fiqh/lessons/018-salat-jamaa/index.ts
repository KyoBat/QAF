/**
 * Fiqh - Lesson 018: صلاة الجماعة
 * Congregational Prayer
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson018: Lesson = {
  id: 'lesson-018',
  title: {
    ar: 'صلاة الجماعة',
    en: 'Congregational Prayer',
    fr: 'La Prière en Groupe',
  },
  duration: '30 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 8,
};

export default lesson018;
