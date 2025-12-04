/**
 * Fiqh - Lesson 017: صلاة المسبوق
 * Prayer of the Late-Comer (Masbuq)
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson017: Lesson = {
  id: 'lesson-017',
  title: {
    ar: 'صلاة المسبوق',
    en: 'Prayer of the Late-Comer',
    fr: 'Prière du Retardataire',
  },
  duration: '25 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 7,
};

export default lesson017;
