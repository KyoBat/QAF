import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson010: Lesson = {
  id: 'famille-010',
  order: 10,
  title: {
    ar: 'الرجعة',
    fr: 'La reprise',
    en: 'Resumption of marriage',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '25 min',
};
