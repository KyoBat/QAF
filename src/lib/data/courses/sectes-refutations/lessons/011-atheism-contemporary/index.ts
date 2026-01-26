import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson011: Lesson = {
  id: 'sectes-011',
  title: {
    ar: 'الإلحاد المعاصر — فهمه والرد عليه',
    fr: 'L\'Athéisme Contemporain — Le Comprendre et y Répondre',
    en: 'Contemporary Atheism — Understanding and Responding to It',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '40 min',
  order: 11,
};
