import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson008: Lesson = {
  id: 'muamalat-008',
  title: {
    ar: 'الصرف',
    fr: 'Le change de devises',
    en: 'Currency Exchange',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
  order: 8,
};
