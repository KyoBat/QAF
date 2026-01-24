import { Lesson } from '../../../types';
import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson003: Lesson = {
  id: 'heroines-003-fatima',
  title: {
    fr: "Fāṭima al-Zahrā' — La Dame du Paradis",
    ar: 'فاطمة الزهراء — سيدة نساء أهل الجنة',
    en: "Fāṭima al-Zahrā' — The Lady of Paradise",
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  duration: '40 min',
  order: 3,
};
