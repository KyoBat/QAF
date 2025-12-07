/**
 * Histoire Islamique - Leçon 002 : 'Umar ibn al-Khaṭṭāb
 * Index des traductions
 */

import { content as frContent } from './fr';
import { content as arContent } from './ar';
import { content as enContent } from './en';

export const lesson002 = {
  id: 'lesson-002',
  slug: '002-umar',
  duration: '35min',
  order: 2,
  title: {
    fr: '\'Umar ibn al-Khaṭṭāb — Le Discernant',
    ar: 'عمر بن الخطاب — الفاروق',
    en: '\'Umar ibn al-Khaṭṭāb — The Distinguisher'
  },
  description: {
    fr: 'D\'ennemi juré à pilier de l\'Islam, le conquérant juste qui fonda l\'État islamique.',
    ar: 'من عدو لدود إلى ركيزة الإسلام، الفاتح العادل الذي أسس الدولة الإسلامية.',
    en: 'From sworn enemy to pillar of Islam, the just conqueror who founded the Islamic State.'
  },
  content: {
    fr: frContent,
    ar: arContent,
    en: enContent
  }
};

export default lesson002;
