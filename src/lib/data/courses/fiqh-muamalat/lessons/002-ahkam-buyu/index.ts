import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson002: Lesson = {
  id: 'muamalat-002',
  title: {
    ar: 'أحكام البيوع',
    fr: 'Les règles des ventes',
    en: 'Rules of Sales',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
  order: 2,
};
