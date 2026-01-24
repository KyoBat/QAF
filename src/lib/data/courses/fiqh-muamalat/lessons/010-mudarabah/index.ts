import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson010: Lesson = {
  id: 'muamalat-010',
  title: {
    ar: 'المضاربة',
    fr: 'Le partenariat de capital',
    en: 'Mudarabah Partnership',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
  order: 10,
};
