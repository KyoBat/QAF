import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson012: Lesson = {
  id: 'muamalat-012',
  title: {
    ar: 'السلم والاستصناع',
    fr: 'Salam et Istisna\'',
    en: 'Salam and Istisna\'',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
  order: 12,
};
