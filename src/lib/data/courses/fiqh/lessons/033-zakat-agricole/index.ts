/**
 * Fiqh - Lesson 033: Zakat Agricole (الزروع والثمار)
 * Index - Lesson Configuration
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson033: Lesson = {
  id: 'lesson-033',
  title: {
    fr: 'Zakat Agricole',
    ar: 'زكاة الزروع والثمار',
    en: 'Zakat on Agricultural Produce',
  },
  duration: '30 min',
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  order: 6,
};

export default lesson033;
