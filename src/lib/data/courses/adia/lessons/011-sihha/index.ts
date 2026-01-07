/**
 * الأدعية الصحيحة - الدرس 011: أدعية الصحة والعافية
 * Exports centralisés pour toutes les langues
 */

import { content as arContent } from './ar';

export const lesson011 = {
  id: 'adia-011',
  slug: 'sihha',
  order: 11,
  title: {
    ar: 'أدعية الصحة والعافية',
    fr: 'Invocations pour la Santé et la Protection',
    en: 'Supplications for Health and Protection',
  },
  description: {
    ar: 'تعلّم الأدعية الصحيحة لطلب العافية والشفاء: دعاء العافية، دعاء المريض، الرقية الشرعية بالمعوذات',
    fr: 'Apprenez les invocations pour la santé et la guérison : demande de bien-être, invocation pour le malade, ruqya avec les Muʿawwidhāt',
    en: 'Learn authentic supplications for health and healing: well-being request, supplication for the sick, ruqya with Muʿawwidhāt',
  },
  duration: '18 دقيقة',
  content: {
    ar: arContent,
    fr: arContent, // TODO: À traduire
    en: arContent, // TODO: À traduire
  },
};
