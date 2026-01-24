import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson006: Lesson = {
  id: 'muamalat-006',
  title: {
    ar: 'الربا — تعريف وتحريم',
    fr: "L'usure — Définition et interdiction",
    en: 'Usury — Definition and Prohibition',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
  order: 6,
};
