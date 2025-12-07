/**
 * Histoire Islamique - Leçon 004 : 'Alī ibn Abī Ṭālib
 * Index des traductions
 */

import { content as frContent } from './fr';
import { content as arContent } from './ar';
import { content as enContent } from './en';

export const lesson004 = {
  id: 'lesson-004',
  slug: '004-ali',
  duration: '35min',
  order: 4,
  title: {
    fr: '\'Alī ibn Abī Ṭālib — Le Lion d\'Allah',
    ar: 'علي بن أبي طالب — أسد الله',
    en: '\'Alī ibn Abī Ṭālib — The Lion of Allah'
  },
  description: {
    fr: 'Le premier enfant musulman, la porte du savoir, le gendre du Prophète ﷺ.',
    ar: 'أول طفل مسلم، باب العلم، صهر النبي ﷺ.',
    en: 'The first Muslim child, the gate of knowledge, the son-in-law of the Prophet ﷺ.'
  },
  content: {
    fr: frContent,
    ar: arContent,
    en: enContent
  }
};

export default lesson004;
