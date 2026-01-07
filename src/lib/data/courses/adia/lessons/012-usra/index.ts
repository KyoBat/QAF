/**
 * الأدعية الصحيحة - الدرس 012: أدعية الأسرة والعلاقات
 * Exports centralisés pour toutes les langues
 */

import { content as arContent } from './ar';

export const lesson012 = {
  id: 'adia-012',
  slug: 'usra',
  order: 12,
  title: {
    ar: 'أدعية الأسرة والعلاقات',
    fr: 'Invocations pour la Famille et les Relations',
    en: 'Supplications for Family and Relationships',
  },
  description: {
    ar: 'تعلّم الأدعية الصحيحة للأسرة: دعاء الزواج، للذرية الصالحة، للوالدين، وللمولود الجديد',
    fr: 'Apprenez les invocations pour la famille : mariage, descendance pieuse, parents et nouveau-né',
    en: 'Learn authentic supplications for family: marriage, righteous offspring, parents and newborn',
  },
  duration: '18 دقيقة',
  content: {
    ar: arContent,
    fr: arContent, // TODO: À traduire
    en: arContent, // TODO: À traduire
  },
};
