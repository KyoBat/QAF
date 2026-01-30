/**
 * Fiqh - Leçon 034: Al-Khushū' - L'Âme de la Prière
 * Index - Export des trois langues
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson034: Lesson = {
  id: 'lesson-034',
  title: {
    ar: 'الخشوع — روح الصلاة',
    en: "Khushū' — The Soul of Prayer",
    fr: "Le Khushū' — L'Âme de la Prière",
  },
  duration: '40 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 24,
};

export default lesson034;
