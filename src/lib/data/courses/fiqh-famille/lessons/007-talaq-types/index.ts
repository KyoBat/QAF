import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson007: Lesson = {
  id: 'famille-007',
  order: 7,
  title: {
    ar: 'أنواع الطلاق',
    fr: 'Types de divorce',
    en: 'Types of Divorce',
  },
  content: { ar: contentAr, fr: contentFr, en: contentEn },
  duration: '45 min',
};
