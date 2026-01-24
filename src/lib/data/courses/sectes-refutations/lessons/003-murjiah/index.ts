import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson003: Lesson = {
  id: 'sectes-003',
  title: {
    ar: 'المرجئة — العقيدة والرد',
    fr: 'Les Murji\'ah — Croyance et Réfutation',
    en: 'The Murji\'ah — Belief and Refutation',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
  order: 3,
};
