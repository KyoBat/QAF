import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson008: Lesson = {
  id: 'famille-008',
  order: 8,
  title: {
    ar: 'الطلاق السني والبدعي',
    fr: 'Divorce sunnite et innovateur',
    en: 'Sunnah vs Bid\'ah Divorce',
  },
  content: { ar: contentAr, fr: contentFr, en: contentEn },
  duration: '40 min',
};
