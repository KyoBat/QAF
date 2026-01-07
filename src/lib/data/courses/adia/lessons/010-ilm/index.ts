/**
 * الأدعية الصحيحة - الدرس 010: أدعية الهداية والعلم
 * Exports centralisés pour toutes les langues
 */


import { content as arContent } from './ar';
import { content as frContent } from './fr';
import { content as enContent } from './en';

export const lesson010 = {
  id: 'adia-010',
  slug: 'ilm',
  order: 10,
  title: {
    ar: 'أدعية الهداية والعلم',
    fr: 'Invocations pour la Guidance et la Science',
    en: 'Supplications for Guidance and Knowledge',
  },
  description: {
    ar: 'تعلّم أدعية طلب العلم والهداية: رب زدني علماً، اللهم إني أسألك علماً نافعاً، ودعاء قنوت الوتر',
    fr: 'Apprenez les invocations pour la science et la guidance : Rabbi zidnī ʿilmā, demande de science bénéfique et invocation du qunūt',
    en: 'Learn supplications for knowledge and guidance: Rabbi zidnī ʿilmā, beneficial knowledge request and qunūt supplication',
  },
  duration: '15 دقيقة',
  content: {
    ar: arContent,
    fr: frContent,
    en: enContent,
  },
};
