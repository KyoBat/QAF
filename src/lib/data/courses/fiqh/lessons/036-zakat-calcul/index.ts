/**
 * Fiqh - Lesson 036: Calcul Pratique de la Zakat (حساب الزكاة العملي)
 * Index - Lesson Configuration
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson036: Lesson = {
  id: 'lesson-036',
  title: {
    fr: 'Calcul Pratique de la Zakat',
    ar: 'حساب الزكاة العملي',
    en: 'Practical Zakat Calculation',
  },
  duration: '40 min',
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  order: 9,
};

export default lesson036;
