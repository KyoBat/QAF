import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson009: Lesson = {
  id: 'muamalat-009',
  title: {
    ar: 'الإجارة',
    fr: 'La location',
    en: 'Leasing',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
  order: 9,
};
