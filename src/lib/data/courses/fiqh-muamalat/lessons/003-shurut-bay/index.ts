import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson003: Lesson = {
  id: 'muamalat-003',
  title: {
    ar: 'شروط البيع',
    fr: 'Conditions de la vente',
    en: 'Conditions of Sale',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
  order: 3,
};
