import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson005: Lesson = {
  id: 'usul-005',
  title: {
    ar: 'القياس',
    fr: "L'analogie",
    en: 'Analogical Reasoning (Qiyas)',
  },
  content: { ar: contentAr, fr: contentFr, en: contentEn },
  duration: '30 min',
  order: 5,
};
