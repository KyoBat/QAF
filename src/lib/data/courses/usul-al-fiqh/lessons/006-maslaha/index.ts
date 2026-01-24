import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson006: Lesson = {
  id: 'usul-006',
  title: {
    ar: 'المصلحة المرسلة',
    fr: "L'intérêt général",
    en: 'Public Interest (Maslaha)',
  },
  content: { ar: contentAr, fr: contentFr, en: contentEn },
  duration: '30 min',
  order: 6,
};
