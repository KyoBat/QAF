import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson006: Lesson = {
  id: 'famille-006',
  order: 6,
  title: {
    ar: 'النشوز والشقاق',
    fr: 'Discorde conjugale',
    en: 'Marital Discord',
  },
  content: { ar: contentAr, fr: contentFr, en: contentEn },
  duration: '40 min',
};
