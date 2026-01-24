import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson015: Lesson = {
  id: 'muamalat-015',
  title: {
    ar: 'المعاملات المصرفية المعاصرة',
    fr: 'Transactions bancaires contemporaines',
    en: 'Contemporary Banking',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
  order: 15,
};
