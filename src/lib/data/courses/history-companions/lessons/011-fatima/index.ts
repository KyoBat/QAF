/**
 * Fāṭima et Ahl al-Bayt — La Famille du Prophète
 * Lesson index - exports all language versions
 */

import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson011 = {
  id: 'lesson-011',
  slug: '011-fatima',
  duration: '40min',
  order: 11,
  title: {
    fr: 'Fāṭima et Ahl al-Bayt — La Famille du Prophète',
    ar: 'فاطمة وآل البيت — عائلة النبي',
    en: 'Fāṭima and Ahl al-Bayt — The Prophet\'s Family'
  },
  description: {
    fr: 'La fille bien-aimée du Prophète ﷺ, al-Ḥasan le réconciliateur, al-Ḥusayn le martyr de Karbala.',
    ar: 'ابنة النبي ﷺ الحبيبة، الحسن المصالح، الحسين شهيد كربلاء.',
    en: 'The beloved daughter of the Prophet ﷺ, al-Ḥasan the reconciler, al-Ḥusayn the martyr of Karbala.'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  }
};

export default lesson011;
