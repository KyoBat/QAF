import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson008: Lesson = {
  id: 'sectes-008',
  title: {
    ar: 'الصوفية — دراسة تاريخية وعقدية',
    fr: 'Le Soufisme — Étude Historique et Doctrinale',
    en: 'Sufism — Historical and Doctrinal Study',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '40 min',
  order: 8,
};
