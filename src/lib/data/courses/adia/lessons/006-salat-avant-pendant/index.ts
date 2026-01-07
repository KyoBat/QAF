/**
 * الأدعية الصحيحة - الدرس 006: أدعية قبل الصلاة وأثناءها
 * Exports centralisés pour toutes les langues
 */

import { content as arContent } from './ar';

export const lesson006 = {
  id: 'adia-006',
  slug: 'salat-avant-pendant',
  order: 6,
  title: {
    ar: 'أدعية قبل الصلاة وأثناءها',
    fr: 'Invocations Avant et Pendant la Salat',
    en: 'Supplications Before and During Salat',
  },
  description: {
    ar: 'تعلّم الأدعية الواردة قبل الدخول في الصلاة وأثناء أدائها، من الأذان إلى السجود',
    fr: 'Apprenez les invocations avant et pendant la prière, de l\'appel à la prière jusqu\'à la prosternation',
    en: 'Learn the supplications before and during prayer, from the call to prayer to prostration',
  },
  duration: '15 دقيقة',
  content: {
    ar: arContent,
    fr: arContent, // TODO: À traduire
    en: arContent, // TODO: À traduire
  },
};
