/**
 * Les Opprimés — Bilāl, Ṣuhayb, 'Ammār
 * Lesson index - exports all language versions
 */

import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson007 = {
  id: 'lesson-007',
  slug: '007-opprimes',
  duration: '35min',
  order: 7,
  title: {
    fr: 'Les Opprimés — Bilāl, Ṣuhayb, \'Ammār',
    ar: 'المستضعفون — بلال وصهيب وعمار',
    en: 'The Oppressed — Bilāl, Ṣuhayb, \'Ammār'
  },
  description: {
    fr: 'Ceux qui ont le plus souffert pour l\'Islam : Bilāl sous les rochers, Ṣuhayb qui abandonna sa fortune, la famille d\'\'Ammār martyrisée.',
    ar: 'الذين عانوا أكثر من أجل الإسلام: بلال تحت الصخور، صهيب الذي ترك ثروته، عائلة عمار الشهيدة.',
    en: 'Those who suffered most for Islam: Bilāl under the rocks, Ṣuhayb who gave up his fortune, \'Ammār\'s martyred family.'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  }
};

export default lesson007;
