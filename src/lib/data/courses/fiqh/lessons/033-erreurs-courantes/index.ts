/**
 * Fiqh - Leçon 033: Les Erreurs Courantes dans la Salat
 * Index - Export des trois langues
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson033: Lesson = {
  id: 'lesson-033',
  title: {
    ar: 'الأخطاء الشائعة في الصلاة',
    en: 'Common Mistakes in Prayer',
    fr: 'Les Erreurs Courantes dans la Salat',
  },
  duration: '35 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 23,
};

export default lesson033;
