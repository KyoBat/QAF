/**
 * Fiqh - Lesson 022: صلاة العيدين
 * The Two Eid Prayers
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson022: Lesson = {
  id: 'lesson-022',
  title: {
    ar: 'صلاة العيدين',
    en: 'The Two Eid Prayers',
    fr: 'La Prière des Deux Fêtes',
  },
  duration: '30 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 4,
};

export default lesson022;
