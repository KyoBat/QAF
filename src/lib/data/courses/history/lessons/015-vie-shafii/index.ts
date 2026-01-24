/**
 * Leçon 015 : La Vie de l'Imam al-Shafi'i (150-204 H)
 * الدرس الخامس عشر: حياة الإمام الشافعي
 */

import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson015 = {
  id: '015-vie-shafii',
  title: {
    fr: "La Vie de l'Imam al-Shafi'i (150-204 H)",
    ar: 'حياة الإمام الشافعي (150-204 هـ)',
    en: 'The Life of Imam al-Shafi\'i (150-204 H)'
  },
  duration: '30 min',
  order: 15,
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  }
};

export default lesson015;
