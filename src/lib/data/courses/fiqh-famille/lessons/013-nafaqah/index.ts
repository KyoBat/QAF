import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson013: Lesson = {
  id: 'famille-013',
  order: 13,
  title: {
    ar: 'النفقة',
    fr: 'La pension alimentaire',
    en: 'Maintenance/Alimony',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
};
