import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson010: Lesson = {
  id: 'sectes-010',
  title: {
    ar: 'منهج أهل السنة في الرد على الفرق',
    fr: 'La Méthodologie d\'Ahl as-Sunnah dans la Réfutation des Sectes',
    en: 'The Methodology of Ahl as-Sunnah in Refuting Sects',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '35 min',
  order: 10,
};
