import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson013: Lesson = {
  id: 'muamalat-013',
  title: {
    ar: 'القرض والرهن',
    fr: 'Le prêt et le gage',
    en: 'Loan and Pledge',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
  order: 13,
};
