import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson014: Lesson = {
  id: 'muamalat-014',
  title: {
    ar: 'التأمين الإسلامي',
    fr: 'L\'assurance islamique',
    en: 'Islamic Insurance',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
  order: 14,
};
