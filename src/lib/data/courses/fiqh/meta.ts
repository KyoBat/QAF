/**
 * Cours: Les Bases du Fiqh des Adorations
 * Métadonnées du cours
 */

import { CourseMeta } from '../types'

export const fiqhPurificationMeta: CourseMeta = {
  id: 'course-002a',
  slug: 'bases-fiqh-ibadat-purification',
  title: {
    fr: 'Les Bases du Fiqh des Adorations : Purification',
    ar: 'أساسيات فقه العبادات: الطهارة',
    en: 'Fundamentals of Fiqh Al-Ibadat: Purification',
  },
  description: {
    fr: 'Approfondissez les règles essentielles de la purification selon les quatre écoles juridiques : types d’eaux, impuretés, ablutions et situations particulières.',
    ar: 'تعرف على أحكام الطهارة بالتفصيل وفق المذاهب الأربعة: أنواع المياه، النجاسات، الوضوء، الغسل والحالات الخاصة.',
    en: 'Master the essential rulings of purification across the four schools: water categories, impurities, wudu, ghusl, and special cases.',
  },
  category: 'fiqh',
  level: 'beginner',
  duration: '6h 30min',
  instructor: 'Sheikh Muhammad Al-Faqih',
  image: '/images/courses/fiqh.svg',
  tags: ['fiqh', 'purification', 'worship'],
  featured: false,
  published: true,
  resources: [],
  createdAt: '2025-01-20T00:00:00.000Z',
  updatedAt: '2025-12-04T00:00:00.000Z',
}

export const fiqhSalatMeta: CourseMeta = {
  id: 'course-002b',
  slug: 'bases-fiqh-ibadat-salat',
  title: {
    fr: 'Les Bases du Fiqh des Adorations : Salat',
    ar: 'أساسيات فقه العبادات: الصلاة',
    en: 'Fundamentals of Fiqh Al-Ibadat: Salah',
  },
  description: {
    fr: 'Découvrez les fondements du fiqh de la Salat : son statut, ses preuves, ses conditions et sa place centrale dans la vie du musulman.',
    ar: 'اكتشف أساسيات فقه الصلاة: مكانتها، أدلتها، شروطها ودورها المركزي في حياة المسلم.',
    en: 'Explore the foundations of Salah jurisprudence: its status, evidences, prerequisites, and central role in a Muslim’s life.',
  },
  category: 'fiqh',
  level: 'beginner',
  duration: '4h 00min',
  instructor: 'Sheikh Muhammad Al-Faqih',
  image: '/images/courses/fiqh.svg',
  tags: ['fiqh', 'prayer', 'salah', 'worship'],
  featured: false,
  published: true,
  resources: [],
  createdAt: '2025-12-04T00:00:00.000Z',
  updatedAt: '2025-12-04T00:00:00.000Z',
}

export const fiqhSalawatKhassaMeta: CourseMeta = {
  id: 'course-002c',
  slug: 'bases-fiqh-salawat-khassa',
  title: {
    fr: 'Les Prières Spéciales en Islam',
    ar: 'الصلوات الخاصة في الإسلام',
    en: 'Special Prayers in Islam',
  },
  description: {
    fr: 'Maîtrisez les règles des prières spéciales selon les quatre écoles : voyageur, malade, Jumu\'ah, Eid, funéraire, éclipse, pluie et rattrapage.',
    ar: 'أتقن أحكام الصلوات الخاصة وفق المذاهب الأربعة: صلاة المسافر، المريض، الجمعة، العيدين، الجنازة، الكسوف، الاستسقاء وقضاء الفوائت.',
    en: 'Master the rulings of special prayers across the four schools: traveler, sick, Jumu\'ah, Eid, funeral, eclipse, rain prayer, and make-up prayers.',
  },
  category: 'fiqh',
  level: 'beginner',
  duration: '5h 00min',
  instructor: 'Sheikh Muhammad Al-Faqih',
  image: '/images/courses/fiqh.svg',
  tags: ['fiqh', 'prayer', 'salah', 'special-prayers', 'worship'],
  featured: false,
  published: true,
  resources: [],
  createdAt: '2025-12-05T00:00:00.000Z',
  updatedAt: '2025-12-05T00:00:00.000Z',
}

export const fiqhZakatMeta: CourseMeta = {
  id: 'course-002d',
  slug: 'bases-fiqh-zakat',
  title: {
    fr: 'Le Fiqh de la Zakat',
    ar: 'فقه الزكاة',
    en: 'Fiqh of Zakat',
  },
  description: {
    fr: 'Maîtrisez toutes les règles de la Zakat : conditions d\'obligation, types de richesse (monnaie, commerce, bétail, agriculture), Zakat Al-Fitr, bénéficiaires et calcul pratique.',
    ar: 'أتقن جميع أحكام الزكاة: شروط الوجوب، أنواع الأموال (النقود، التجارة، الأنعام، الزروع)، زكاة الفطر، المصارف والحساب العملي.',
    en: 'Master all Zakat rulings: conditions of obligation, wealth types (currency, trade, livestock, agriculture), Zakat Al-Fitr, beneficiaries, and practical calculation.',
  },
  category: 'fiqh',
  level: 'beginner',
  duration: '4h 30min',
  instructor: 'Sheikh Muhammad Al-Faqih',
  image: '/images/courses/fiqh.svg',
  tags: ['fiqh', 'zakat', 'charity', 'pillar-of-islam', 'worship'],
  featured: true,
  published: true,
  resources: [],
  createdAt: '2025-12-05T00:00:00.000Z',
  updatedAt: '2025-12-05T00:00:00.000Z',
}
