/**
 * Fiqh - Lesson 030: آداب الصلاة (Prayer Etiquettes)
 * Lesson Export with Multi-language Content
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson030: Lesson = {
  id: 'lesson-030',
  title: {
    ar: 'آداب الصلاة',
    en: 'Prayer Etiquettes (Ādāb)',
    fr: 'Les Convenances de la Prière (Ādāb)',
  },
  duration: '35 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 20,
};

export default lesson030;
