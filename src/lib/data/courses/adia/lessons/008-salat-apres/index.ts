/**
 * الأدعية الصحيحة - الدرس 008: أذكار ما بعد الصلاة
 * Exports centralisés pour toutes les langues
 */

import { content as arContent } from './ar';
import { content as frContent } from './fr';
import { content as enContent } from './en';

export const lesson008 = {
  id: 'adia-008',
  slug: 'salat-apres',
  order: 8,
  title: {
    ar: 'أذكار ما بعد الصلاة',
    fr: 'Invocations Après la Salat',
    en: 'Supplications After Salat',
  },
  description: {
    ar: 'تعلّم الأذكار المشروعة بعد السلام من الصلاة: الاستغفار، التسبيح، آية الكرسي والمعوذات',
    fr: 'Apprenez les invocations après la prière : istighfar, tasbih, Ayat al-Kursi et les Mu\'awwidhat',
    en: 'Learn the post-prayer supplications: istighfar, tasbih, Ayat al-Kursi and Mu\'awwidhat',
  },
  duration: '15 دقيقة',
  content: {
    ar: arContent,
    fr: frContent,
    en: enContent,
  },
};
