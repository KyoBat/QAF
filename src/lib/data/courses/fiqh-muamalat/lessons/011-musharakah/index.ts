import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson011: Lesson = {
  id: 'muamalat-011',
  title: {
    ar: 'الشركات',
    fr: 'Les sociétés',
    en: 'Partnerships',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
  order: 11,
};
