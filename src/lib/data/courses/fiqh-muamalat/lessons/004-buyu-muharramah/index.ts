import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson004: Lesson = {
  id: 'muamalat-004',
  title: {
    ar: 'البيوع المحرمة',
    fr: 'Ventes interdites',
    en: 'Prohibited Sales',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
  order: 4,
};
