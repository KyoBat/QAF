import { Lesson } from '../../../types';
import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lessonShamail: Lesson = {
  id: 'seerah-033-shamail-vie-quotidienne',
  title: {
    fr: 'La Vie Quotidienne du Prophète ﷺ — Shamā\'il',
    ar: 'الشمائل النبوية',
    en: 'The Daily Life of the Prophet ﷺ — Shamā\'il',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  duration: '35 min',
  order: 33,
};
