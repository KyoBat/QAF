import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson005: Lesson = {
  id: 'muamalat-005',
  title: {
    ar: 'الخيارات',
    fr: 'Les options',
    en: 'Options in Sales',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
  order: 5,
};
