/**
 * الأدعية الصحيحة - الدرس 009: أدعية الكرب والشدائد
 * Exports centralisés pour toutes les langues
 */

import { content as arContent } from './ar';

export const lesson009 = {
  id: 'adia-009',
  slug: 'karab',
  order: 9,
  title: {
    ar: 'أدعية الكرب والشدائد',
    fr: 'Invocations en Cas de Difficulté',
    en: 'Supplications in Times of Hardship',
  },
  description: {
    ar: 'تعلّم الأدعية الصحيحة عند الكرب والشدائد: دعاء ذي النون، حسبنا الله، وأدعية تفريج الهموم',
    fr: 'Apprenez les invocations lors des difficultés : l\'invocation de Dhū al-Nūn, Ḥasbunā Allāh et les invocations de soulagement',
    en: 'Learn authentic supplications during hardships: Dhū al-Nūn\'s supplication, Ḥasbunā Allāh and relief invocations',
  },
  duration: '15 دقيقة',
  content: {
    ar: arContent,
    fr: arContent, // TODO: À traduire
    en: arContent, // TODO: À traduire
  },
};
