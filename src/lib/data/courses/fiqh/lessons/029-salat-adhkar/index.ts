/**
 * Fiqh - Lesson 029: أذكار الصلاة (Prayer Invocations)
 * Lesson Export with Multi-language Content
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson029: Lesson = {
  id: 'lesson-029',
  title: {
    ar: 'أذكار الصلاة',
    en: 'Prayer Invocations (Adhkār)',
    fr: 'Les Invocations de la Prière (Adhkār)',
  },
  duration: '40 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 19,
};

export default lesson029;
