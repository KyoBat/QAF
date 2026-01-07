/**
 * الأدعية الصحيحة - الدرس 014: التوبة والاستغفار
 * Exports centralisés pour toutes les langues
 */

import { content as arContent } from './ar';

export const lesson014 = {
  id: 'adia-014',
  slug: 'tawba',
  order: 14,
  title: {
    ar: 'التوبة والاستغفار',
    fr: 'Repentir et Demande de Pardon',
    en: 'Repentance and Seeking Forgiveness',
  },
  description: {
    ar: 'تعلّم أدعية التوبة: سيد الاستغفار، أستغفر الله وأتوب إليه، رب اغفر لي وتب علي، وأدعية المغفرة الشاملة',
    fr: 'Apprenez les invocations du repentir : Sayyid al-Istighfār, Astaghfiru Allāh, Rabbi ighfir lī et invocations de pardon global',
    en: 'Learn supplications of repentance: Sayyid al-Istighfār, Astaghfiru Allāh, Rabbi ighfir lī and comprehensive forgiveness invocations',
  },
  duration: '18 دقيقة',
  content: {
    ar: arContent,
    fr: arContent, // TODO: À traduire
    en: arContent, // TODO: À traduire
  },
};
