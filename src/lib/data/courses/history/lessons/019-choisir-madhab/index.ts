/**
 * Leçon 019 : Comment Choisir un Madhab ?
 * الدرس التاسع عشر: كيف تختار مذهبًا؟
 */

import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson019 = {
  id: '019-choisir-madhab',
  title: {
    fr: 'Comment Choisir un Madhab ?',
    ar: 'كيف تختار مذهبًا؟',
    en: 'How to Choose a Madhab?'
  },
  description: {
    fr: "Comment choisir entre les 4 écoles de jurisprudence islamique (madhab) : Malékite, Hanafite, Chafiéite, Hanbalite. Différences pratiques, répartition géographique et conseils concrets pour le musulman d'aujourd'hui.",
    ar: "كيف تختار مذهبك الفقهي: المالكي، الحنفي، الشافعي، الحنبلي. الفروق العملية، التوزيع الجغرافي ونصائح للمسلم المعاصر.",
    en: "How to choose between the 4 Islamic schools of jurisprudence: Maliki, Hanafi, Shafi'i, Hanbali. Practical differences, geographic distribution and guidance for the modern Muslim.",
  },
  duration: '30 min',
  order: 19,
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  }
};

export default lesson019;
