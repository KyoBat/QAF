/**
 * Fiqh - Leçon 032: Questions Contemporaines de la Salat
 * Index - Export des trois langues
 */

import type { Lesson } from '@/types';

import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson032: Lesson = {
  id: 'lesson-032',
  title: {
    ar: 'قضايا معاصرة في الصلاة',
    en: 'Contemporary Issues in Prayer',
    fr: 'Questions Contemporaines de la Salat',
  },
  duration: '40 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 22,
};

export default lesson032;
