import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson007: Lesson = {
  id: 'usul-007',
  title: {
    ar: 'الاستحسان والاستصحاب',
    fr: 'Istihsan et Istishab',
    en: 'Juristic Preference and Presumption of Continuity',
  },
  content: { ar: contentAr, fr: contentFr, en: contentEn },
  duration: '30 min',
  order: 7,
};
