/**
 * Fiqh - Lesson 020: صلاة المريض
 * Prayer of the Sick
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson020: Lesson = {
  id: 'lesson-020',
  title: {
    ar: 'صلاة المريض',
    en: 'Prayer of the Sick',
    fr: 'La Prière du Malade',
  },
  duration: '25 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 2,
};

export default lesson020;
