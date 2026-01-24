import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson004: Lesson = {
  id: 'sectes-004',
  title: {
    ar: 'القدرية والجبرية — نفي القدر والغلو فيه',
    fr: 'Les Qadariyyah et Jabriyyah — Négation du Destin et Excès',
    en: 'The Qadariyyah and Jabriyyah — Denying and Exaggerating Predestination',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '35 min',
  order: 4,
};
