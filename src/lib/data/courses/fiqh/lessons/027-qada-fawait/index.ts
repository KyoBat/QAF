/**
 * Fiqh - Lesson 027: قضاء الفوائت
 * Making Up Missed Prayers
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson027: Lesson = {
  id: 'lesson-027',
  title: {
    ar: 'قضاء الفوائت',
    en: 'Making Up Missed Prayers',
    fr: 'Le Rattrapage des Prières Manquées',
  },
  duration: '25 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 9,
};

export default lesson027;
