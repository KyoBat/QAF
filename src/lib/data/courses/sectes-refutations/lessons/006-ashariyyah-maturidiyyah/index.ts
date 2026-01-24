import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson006: Lesson = {
  id: 'sectes-006',
  title: {
    ar: 'الأشاعرة والماتريدية — دراسة ونقد',
    fr: 'Les Asha\'irah et Maturidiyyah — Étude et Critique',
    en: 'The Asha\'irah and Maturidiyyah — Study and Critique',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '40 min',
  order: 6,
};
