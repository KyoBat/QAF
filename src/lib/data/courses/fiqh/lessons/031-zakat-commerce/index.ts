/**
 * Fiqh - Lesson 031: Zakat du Commerce (عروض التجارة)
 * Index - Lesson Configuration
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson031: Lesson = {
  id: 'lesson-031',
  title: {
    fr: 'Zakat du Commerce',
    ar: 'زكاة عروض التجارة',
    en: 'Zakat on Trade Goods',
  },
  duration: '30 min',
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  order: 4,
};

export default lesson031;
