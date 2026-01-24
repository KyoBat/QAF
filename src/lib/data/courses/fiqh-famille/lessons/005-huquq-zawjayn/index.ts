import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson005: Lesson = {
  id: 'famille-005',
  order: 5,
  title: {
    ar: 'حقوق الزوجين',
    fr: 'Droits des époux',
    en: 'Spousal Rights',
  },
  content: { ar: contentAr, fr: contentFr, en: contentEn },
  duration: '35 min',
};
