/**
 * الأدعية الصحيحة - الدرس 007: التشهد والصلاة الإبراهيمية
 * Exports centralisés pour toutes les langues
 */

import { content as arContent } from './ar';
import { content as frContent } from './fr';
import { content as enContent } from './en';

export const lesson007 = {
  id: 'adia-007',
  slug: 'salat-tashahud',
  order: 7,
  title: {
    ar: 'التشهد والصلاة الإبراهيمية',
    fr: 'Le Tashahud et la Prière Ibrahimique',
    en: 'Tashahhud and Ibrahimic Prayer',
  },
  description: {
    ar: 'تعلّم التشهد الكامل والصلاة على النبي ﷺ والأدعية في التشهد الأخير',
    fr: 'Apprenez le tashahhud complet, la prière sur le Prophète ﷺ et les invocations du dernier tashahhud',
    en: 'Learn the complete tashahhud, prayer upon the Prophet ﷺ and supplications in the final sitting',
  },
  duration: '12 دقيقة',
  content: {
    ar: arContent,
    fr: frContent,
    en: enContent,
  },
};
