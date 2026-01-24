import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson009: Lesson = {
  id: 'sectes-009',
  title: {
    ar: 'الفرق المعاصرة — القاديانية والبهائية',
    fr: 'Les Sectes Contemporaines — Qadianiyyah et Baha\'isme',
    en: 'Contemporary Sects — Qadianiyyah and Baha\'ism',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '35 min',
  order: 9,
};
