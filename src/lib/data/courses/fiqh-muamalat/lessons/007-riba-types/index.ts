import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson007: Lesson = {
  id: 'muamalat-007',
  title: {
    ar: 'أنواع الربا',
    fr: "Types d'usure",
    en: 'Types of Usury',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
  order: 7,
};
