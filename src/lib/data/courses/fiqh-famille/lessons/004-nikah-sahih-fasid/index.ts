import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson004: Lesson = {
  id: 'famille-004',
  order: 4,
  title: {
    ar: 'النكاح الصحيح والفاسد',
    fr: 'Mariage valide et invalide',
    en: 'Valid and Invalid Marriage',
  },
  content: { ar: contentAr, fr: contentFr, en: contentEn },
  duration: '45 min',
};
