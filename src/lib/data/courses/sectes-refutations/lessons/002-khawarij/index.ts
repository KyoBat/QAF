import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson002: Lesson = {
  id: 'sectes-002',
  title: {
    ar: 'الخوارج — النشأة والعقائد',
    fr: 'Les Khawarij — Origine et Croyances',
    en: 'The Khawarij — Origin and Beliefs',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '35 min',
  order: 2,
};
