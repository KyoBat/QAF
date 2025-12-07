/**
 * Leçon 007 : Leurs Livres
 * الدرس السابع: مؤلفاتهم
 */

import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson007 = {
  id: '007-livres',
  title: {
    fr: 'Leurs Livres',
    ar: 'مؤلفاتهم',
    en: 'Their Books'
  },
  duration: '35 min',
  order: 7,
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  }
};

export default lesson007;
