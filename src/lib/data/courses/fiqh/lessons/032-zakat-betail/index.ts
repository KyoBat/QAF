/**
 * Fiqh - Lesson 032: Zakat du Bétail (الأنعام)
 * Index - Lesson Configuration
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson032: Lesson = {
  id: 'lesson-032',
  title: {
    fr: 'Zakat du Bétail',
    ar: 'زكاة الأنعام',
    en: 'Zakat on Livestock',
  },
  duration: '35 min',
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  order: 5,
};

export default lesson032;
