/**
 * Histoire Islamique - Leçon 001 : Abū Bakr al-Ṣiddīq
 * Index des traductions
 */

import { content as frContent } from './fr';
import { content as arContent } from './ar';
import { content as enContent } from './en';

export const lesson001 = {
  id: 'lesson-001',
  slug: '001-abu-bakr',
  duration: '35min',
  order: 1,
  title: {
    fr: 'Abū Bakr al-Ṣiddīq — Le Véridique',
    ar: 'أبو بكر الصديق — الخليفة الأول',
    en: 'Abū Bakr al-Ṣiddīq — The Truthful'
  },
  description: {
    fr: 'Le premier à croire, le Compagnon de la Grotte, celui qui a tout donné pour l\'Islam.',
    ar: 'أول من آمن، صاحب الغار، الذي أعطى كل شيء للإسلام.',
    en: 'The first to believe, the Companion of the Cave, the one who gave everything for Islam.'
  },
  content: {
    fr: frContent,
    ar: arContent,
    en: enContent
  }
};

export default lesson001;
