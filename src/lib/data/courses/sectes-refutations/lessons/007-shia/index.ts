import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson007: Lesson = {
  id: 'sectes-007',
  title: {
    ar: 'الشيعة — النشأة والفرق',
    fr: 'Les Shi\'a — Origine et Branches',
    en: 'The Shi\'a — Origin and Branches',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '45 min',
  order: 7,
};
