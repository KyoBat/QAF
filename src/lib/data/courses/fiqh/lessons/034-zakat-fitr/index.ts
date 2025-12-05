/**
 * Fiqh - Lesson 034: Zakat Al-Fitr (زكاة الفطر)
 * Index - Lesson Configuration
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson034: Lesson = {
  id: 'lesson-034',
  title: {
    fr: 'Zakat Al-Fitr',
    ar: 'زكاة الفطر',
    en: 'Zakat Al-Fitr',
  },
  duration: '25 min',
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  order: 7,
};

export default lesson034;
