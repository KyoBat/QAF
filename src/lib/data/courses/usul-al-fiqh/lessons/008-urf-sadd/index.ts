import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson008: Lesson = {
  id: 'usul-008',
  title: {
    ar: 'العرف وسد الذرائع',
    fr: 'Coutume et blocage des prétextes',
    en: 'Custom and Blocking Pretexts',
  },
  content: { ar: contentAr, fr: contentFr, en: contentEn },
  duration: '30 min',
  order: 8,
};
