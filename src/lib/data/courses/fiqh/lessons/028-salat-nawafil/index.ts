/**
 * Fiqh - Leçon 028: صلاة النوافل (Les Prières Surérogatoires)
 * Export principal
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson028: Lesson = {
  id: 'lesson-028',
  title: {
    ar: 'صلاة النوافل',
    en: 'Voluntary Prayers (Nawafil)',
    fr: 'Les Prières Surérogatoires',
  },
  duration: '45 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 18,
};

export default lesson028;
