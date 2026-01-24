import { Lesson } from '../../../types';
import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson004: Lesson = {
  id: 'heroines-004-martyres',
  title: {
    fr: 'Les Premières Martyres — Sumayyah et les Opprimées',
    ar: 'الشهيدات الأوائل — سُمَيَّة والمُستضعَفات',
    en: 'The First Martyrs — Sumayyah and the Oppressed',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  duration: '35 min',
  order: 4,
};
