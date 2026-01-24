import type { Lesson } from '@/types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson001: Lesson = {
  id: 'muamalat-001',
  title: {
    ar: 'مقدمة في فقه المعاملات',
    fr: 'Introduction au Fiqh des Transactions',
    en: 'Introduction to Fiqh of Transactions',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
  order: 1,
};
