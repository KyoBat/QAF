/**
 * Catégories et Hiérarchie des Examens
 * Architecture du Fiqh Islamique
 * 
 * Structure :
 * - Fiqh Complet (Certification globale)
 *   └── Ibadaat (العبادات)
 *       ├── Tahara (الطهارة)
 *       ├── Salat (الصلاة)
 *       ├── Siyam (الصيام)
 *       ├── Zakat (الزكاة)
 *       └── Hajj (الحج)
 *   └── Mu'amalat (المعاملات)
 *   └── Ahwal Shakhsiyya (الأحوال الشخصية)
 */

import { LocalizedText } from './types';

// ============================================
// Types de Catégories
// ============================================

export interface ExamCategory {
  /** Identifiant unique */
  id: string;
  
  /** Catégorie parente (pour hiérarchie) */
  parentId?: string;
  
  /** Nom de la catégorie */
  name: LocalizedText;
  
  /** Description */
  description: LocalizedText;
  
  /** Icône emoji */
  icon: string;
  
  /** Ordre d'affichage */
  order: number;
  
  /** Sous-thèmes de cette catégorie */
  subTopics: SubTopic[];
  
  /** Couleur de la catégorie */
  color: string;
}

export interface SubTopic {
  id: string;
  name: LocalizedText;
  icon: string;
}

// ============================================
// Définition des Catégories
// ============================================

export const examCategories: ExamCategory[] = [
  // ==========================================
  // FIQH COMPLET (Racine)
  // ==========================================
  {
    id: 'fiqh',
    name: {
      fr: 'Fiqh Islamique',
      ar: 'الفقه الإسلامي',
      en: 'Islamic Jurisprudence',
    },
    description: {
      fr: 'Jurisprudence islamique complète couvrant tous les domaines',
      ar: 'الفقه الإسلامي الشامل لجميع المجالات',
      en: 'Complete Islamic jurisprudence covering all areas',
    },
    icon: '📚',
    order: 1,
    color: 'emerald',
    subTopics: [],
  },

  // ==========================================
  // IBADAAT (العبادات)
  // ==========================================
  {
    id: 'fiqh-ibadaat',
    parentId: 'fiqh',
    name: {
      fr: 'Ibadaat - Actes d\'adoration',
      ar: 'العبادات',
      en: 'Ibadaat - Acts of Worship',
    },
    description: {
      fr: 'Les actes d\'adoration : purification, prière, jeûne, aumône et pèlerinage',
      ar: 'العبادات: الطهارة والصلاة والصيام والزكاة والحج',
      en: 'Acts of worship: purification, prayer, fasting, alms and pilgrimage',
    },
    icon: '🕌',
    order: 1,
    color: 'blue',
    subTopics: [
      { id: 'tahara', name: { fr: 'Tahara', ar: 'الطهارة', en: 'Tahara' }, icon: '💧' },
      { id: 'salat', name: { fr: 'Salat', ar: 'الصلاة', en: 'Salat' }, icon: '🕌' },
      { id: 'siyam', name: { fr: 'Siyam', ar: 'الصيام', en: 'Siyam' }, icon: '🌙' },
      { id: 'zakat', name: { fr: 'Zakat', ar: 'الزكاة', en: 'Zakat' }, icon: '💰' },
      { id: 'hajj', name: { fr: 'Hajj', ar: 'الحج', en: 'Hajj' }, icon: '🕋' },
    ],
  },

  // ==========================================
  // TAHARA (الطهارة)
  // ==========================================
  {
    id: 'fiqh-tahara',
    parentId: 'fiqh-ibadaat',
    name: {
      fr: 'Fiqh de la Purification',
      ar: 'فقه الطهارة',
      en: 'Fiqh of Purification',
    },
    description: {
      fr: 'Règles de la purification : eau, types d\'impuretés, ablutions',
      ar: 'أحكام الطهارة: الماء وأنواع النجاسات والوضوء',
      en: 'Rules of purification: water, types of impurities, ablutions',
    },
    icon: '💧',
    order: 1,
    color: 'cyan',
    subTopics: [
      { id: 'miyah', name: { fr: 'Les eaux', ar: 'المياه', en: 'Waters' }, icon: '💧' },
      { id: 'najasaat', name: { fr: 'Impuretés', ar: 'النجاسات', en: 'Impurities' }, icon: '🚫' },
      { id: 'wudu', name: { fr: 'Ablutions', ar: 'الوضوء', en: 'Wudu' }, icon: '🤲' },
      { id: 'ghusl', name: { fr: 'Grandes ablutions', ar: 'الغسل', en: 'Ghusl' }, icon: '🚿' },
      { id: 'tayammum', name: { fr: 'Tayammum', ar: 'التيمم', en: 'Tayammum' }, icon: '🏜️' },
      { id: 'masah', name: { fr: 'Essuyage', ar: 'المسح', en: 'Wiping' }, icon: '🧦' },
      { id: 'hayd', name: { fr: 'Menstrues', ar: 'الحيض', en: 'Menstruation' }, icon: '📅' },
    ],
  },

  // ==========================================
  // SALAT (الصلاة)
  // ==========================================
  {
    id: 'fiqh-salat',
    parentId: 'fiqh-ibadaat',
    name: {
      fr: 'Fiqh de la Prière',
      ar: 'فقه الصلاة',
      en: 'Fiqh of Prayer',
    },
    description: {
      fr: 'Toutes les règles de la prière : obligatoires, surérogatoires et spéciales',
      ar: 'جميع أحكام الصلاة: الفرائض والنوافل والصلوات الخاصة',
      en: 'All rules of prayer: obligatory, voluntary and special prayers',
    },
    icon: '🕌',
    order: 2,
    color: 'indigo',
    subTopics: [
      { id: 'adhan', name: { fr: 'Adhan & Iqama', ar: 'الأذان والإقامة', en: 'Adhan & Iqama' }, icon: '📢' },
      { id: 'salat-fard', name: { fr: 'Prières obligatoires', ar: 'الصلوات المفروضة', en: 'Obligatory prayers' }, icon: '🕌' },
      { id: 'salat-jamaa', name: { fr: 'Prière en groupe', ar: 'صلاة الجماعة', en: 'Congregational prayer' }, icon: '👥' },
      { id: 'nawafil', name: { fr: 'Prières surérogatoires', ar: 'النوافل', en: 'Voluntary prayers' }, icon: '⭐' },
      { id: 'sujud-sahw', name: { fr: 'Prosternation de l\'oubli', ar: 'سجود السهو', en: 'Prostration of forgetfulness' }, icon: '🔄' },
      { id: 'juma', name: { fr: 'Prière du vendredi', ar: 'صلاة الجمعة', en: 'Friday prayer' }, icon: '🕌' },
      { id: 'janaza', name: { fr: 'Prière funéraire', ar: 'صلاة الجنازة', en: 'Funeral prayer' }, icon: '⚰️' },
      { id: 'eid', name: { fr: 'Prières des fêtes', ar: 'صلاة العيدين', en: 'Eid prayers' }, icon: '🎉' },
      { id: 'kusuf', name: { fr: 'Prière de l\'éclipse', ar: 'صلاة الكسوف', en: 'Eclipse prayer' }, icon: '🌑' },
      { id: 'istisqa', name: { fr: 'Prière pour la pluie', ar: 'صلاة الاستسقاء', en: 'Rain prayer' }, icon: '🌧️' },
      { id: 'musafir', name: { fr: 'Prière du voyageur', ar: 'صلاة المسافر', en: 'Traveler\'s prayer' }, icon: '✈️' },
      { id: 'marid', name: { fr: 'Prière du malade', ar: 'صلاة المريض', en: 'Sick person\'s prayer' }, icon: '🏥' },
      { id: 'khawf', name: { fr: 'Prière de la peur', ar: 'صلاة الخوف', en: 'Prayer of fear' }, icon: '⚔️' },
    ],
  },

  // ==========================================
  // SIYAM (الصيام)
  // ==========================================
  {
    id: 'fiqh-siyam',
    parentId: 'fiqh-ibadaat',
    name: {
      fr: 'Fiqh du Jeûne',
      ar: 'فقه الصيام',
      en: 'Fiqh of Fasting',
    },
    description: {
      fr: 'Règles du jeûne de Ramadan et jeûnes volontaires',
      ar: 'أحكام صيام رمضان والصيام التطوعي',
      en: 'Rules of Ramadan fasting and voluntary fasts',
    },
    icon: '🌙',
    order: 3,
    color: 'purple',
    subTopics: [
      { id: 'ramadan', name: { fr: 'Ramadan', ar: 'رمضان', en: 'Ramadan' }, icon: '🌙' },
      { id: 'muftiraat', name: { fr: 'Annulatifs du jeûne', ar: 'المفطرات', en: 'Invalidators of fasting' }, icon: '❌' },
      { id: 'qada', name: { fr: 'Rattrapage', ar: 'القضاء', en: 'Making up fasts' }, icon: '🔄' },
      { id: 'kaffarah', name: { fr: 'Expiation', ar: 'الكفارة', en: 'Expiation' }, icon: '⚖️' },
      { id: 'siyam-tatawwu', name: { fr: 'Jeûnes volontaires', ar: 'صيام التطوع', en: 'Voluntary fasts' }, icon: '⭐' },
      { id: 'itikaf', name: { fr: 'Retraite spirituelle', ar: 'الاعتكاف', en: 'Spiritual retreat' }, icon: '🕌' },
    ],
  },

  // ==========================================
  // ZAKAT (الزكاة)
  // ==========================================
  {
    id: 'fiqh-zakat',
    parentId: 'fiqh-ibadaat',
    name: {
      fr: 'Fiqh de la Zakat',
      ar: 'فقه الزكاة',
      en: 'Fiqh of Zakat',
    },
    description: {
      fr: 'Règles de l\'aumône légale et de la Zakat al-Fitr',
      ar: 'أحكام الزكاة وزكاة الفطر',
      en: 'Rules of obligatory alms and Zakat al-Fitr',
    },
    icon: '💰',
    order: 4,
    color: 'yellow',
    subTopics: [
      { id: 'nisab', name: { fr: 'Seuil imposable', ar: 'النصاب', en: 'Nisab threshold' }, icon: '📊' },
      { id: 'amwal', name: { fr: 'Biens imposables', ar: 'الأموال الزكوية', en: 'Zakatable wealth' }, icon: '💎' },
      { id: 'masarif', name: { fr: 'Bénéficiaires', ar: 'مصارف الزكاة', en: 'Recipients' }, icon: '👥' },
      { id: 'zakat-fitr', name: { fr: 'Zakat al-Fitr', ar: 'زكاة الفطر', en: 'Zakat al-Fitr' }, icon: '🌾' },
      { id: 'sadaqah', name: { fr: 'Aumône volontaire', ar: 'الصدقة', en: 'Voluntary charity' }, icon: '❤️' },
    ],
  },

  // ==========================================
  // HAJJ (الحج)
  // ==========================================
  {
    id: 'fiqh-hajj',
    parentId: 'fiqh-ibadaat',
    name: {
      fr: 'Fiqh du Hajj et Omra',
      ar: 'فقه الحج والعمرة',
      en: 'Fiqh of Hajj and Umrah',
    },
    description: {
      fr: 'Règles du pèlerinage majeur et mineur',
      ar: 'أحكام الحج والعمرة',
      en: 'Rules of major and minor pilgrimage',
    },
    icon: '🕋',
    order: 5,
    color: 'amber',
    subTopics: [
      { id: 'ihram', name: { fr: 'Ihram', ar: 'الإحرام', en: 'Ihram' }, icon: '🧕' },
      { id: 'mawaqit', name: { fr: 'Miqat', ar: 'المواقيت', en: 'Miqat' }, icon: '📍' },
      { id: 'tawaf', name: { fr: 'Tawaf', ar: 'الطواف', en: 'Tawaf' }, icon: '🔄' },
      { id: 'say', name: { fr: 'Sa\'y', ar: 'السعي', en: 'Sa\'y' }, icon: '🏃' },
      { id: 'wuquf', name: { fr: 'Station à Arafat', ar: 'الوقوف بعرفة', en: 'Standing at Arafat' }, icon: '⛰️' },
      { id: 'ramy', name: { fr: 'Lapidation', ar: 'رمي الجمرات', en: 'Stoning' }, icon: '🪨' },
      { id: 'hady', name: { fr: 'Sacrifice', ar: 'الهدي', en: 'Sacrifice' }, icon: '🐑' },
      { id: 'umrah', name: { fr: 'Omra', ar: 'العمرة', en: 'Umrah' }, icon: '🕌' },
      { id: 'fidyah', name: { fr: 'Compensations', ar: 'الفدية', en: 'Compensations' }, icon: '⚖️' },
    ],
  },

  // ==========================================
  // MU'AMALAT (المعاملات)
  // ==========================================
  {
    id: 'fiqh-muamalat',
    parentId: 'fiqh',
    name: {
      fr: 'Mu\'amalat - Transactions',
      ar: 'المعاملات',
      en: 'Mu\'amalat - Transactions',
    },
    description: {
      fr: 'Règles des transactions commerciales et financières',
      ar: 'أحكام المعاملات التجارية والمالية',
      en: 'Rules of commercial and financial transactions',
    },
    icon: '💼',
    order: 2,
    color: 'green',
    subTopics: [
      { id: 'buyu', name: { fr: 'Ventes', ar: 'البيوع', en: 'Sales' }, icon: '🛒' },
      { id: 'riba', name: { fr: 'Usure', ar: 'الربا', en: 'Usury' }, icon: '🚫' },
      { id: 'ijarah', name: { fr: 'Location', ar: 'الإجارة', en: 'Rent' }, icon: '🏠' },
      { id: 'shirka', name: { fr: 'Partenariat', ar: 'الشركة', en: 'Partnership' }, icon: '🤝' },
    ],
  },
];

// ============================================
// Fonctions utilitaires
// ============================================

/**
 * Récupère une catégorie par son ID
 */
export function getCategoryById(id: string): ExamCategory | undefined {
  return examCategories.find(cat => cat.id === id);
}

/**
 * Récupère les sous-catégories d'une catégorie
 */
export function getSubCategories(parentId: string): ExamCategory[] {
  return examCategories.filter(cat => cat.parentId === parentId);
}

/**
 * Récupère la hiérarchie complète (breadcrumb)
 */
export function getCategoryPath(id: string): ExamCategory[] {
  const path: ExamCategory[] = [];
  let current = getCategoryById(id);
  
  while (current) {
    path.unshift(current);
    current = current.parentId ? getCategoryById(current.parentId) : undefined;
  }
  
  return path;
}

/**
 * Récupère toutes les catégories racines
 */
export function getRootCategories(): ExamCategory[] {
  return examCategories.filter(cat => !cat.parentId);
}
