import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson014: Lesson = {
  id: 'famille-014',
  order: 14,
  title: {
    ar: 'النسب والرضاعة',
    fr: 'Filiation et allaitement',
    en: 'Lineage and breastfeeding',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '35 min',
};
