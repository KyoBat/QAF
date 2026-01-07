/**
 * الأدعية الصحيحة - الدرس 015: أدعية النبي إبراهيم عليه السلام
 * Exports centralisés pour toutes les langues
 */

import { content as arContent } from './ar';
import { content as frContent } from './fr';
import { content as enContent } from './en';

export const lesson015 = {
  id: 'adia-015',
  slug: 'ibrahim',
  order: 15,
  title: {
    ar: 'أدعية النبي إبراهيم',
    fr: 'Invocations du Prophète Ibrahim',
    en: 'Supplications of Prophet Ibrahim',
  },
  description: {
    ar: 'تعلّم أدعية خليل الرحمن: ربنا تقبل منا، اجعلنا مسلمين، هب لي من الصالحين، اجعلني مقيم الصلاة، واجنبني الشرك',
    fr: 'Apprenez les invocations d\'Ibrahim (le Khalīl) : Rabbanā taqabbal, Ij\'alnā muslimīn, Hab lī min aṣ-ṣāliḥīn et Ij\'alnī muqīm aṣ-ṣalāh',
    en: 'Learn supplications of Ibrahim (the Friend): Rabbanā taqabbal, Ij\'alnā muslimīn, Hab lī min aṣ-ṣāliḥīn and Ij\'alnī muqīm aṣ-ṣalāh',
  },
  duration: '22 دقيقة',
  content: {
    ar: arContent,
    fr: frContent,
    en: enContent,
  },
};
