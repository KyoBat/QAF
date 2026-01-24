import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson003: Lesson = {
  id: 'famille-003',
  order: 3,
  title: {
    ar: 'أركان النكاح',
    fr: 'Piliers du mariage',
    en: 'Pillars of Marriage',
  },
  content: { ar: contentAr, fr: contentFr, en: contentEn },
  duration: '40 min',
};
