import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson001: Lesson = {
  id: 'sectes-001',
  title: {
    ar: 'الفرق في الإسلام — مقدمة ومنهج',
    fr: 'Les Sectes en Islam — Introduction et Méthodologie',
    en: 'Sects in Islam — Introduction and Methodology',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
  order: 1,
};
