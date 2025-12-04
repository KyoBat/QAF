/**
 * MindMap Data for Lessons
 * Données des cartes mentales pour les leçons
 * Supports AR/EN/FR translations
 */

import type { MindMapData } from '@/components/mindmap';

// Type pour les labels multilingues
interface MultiLangLabel {
  ar: string;
  en: string;
  fr: string;
}

// Type pour les données MindMap avec traductions
export interface MindMapDataMultiLang {
  id: string;
  label: MultiLangLabel;
  children?: MindMapDataMultiLang[];
  color?: string;
  icon?: string;
}

// Fonction pour convertir les données multilingues en MindMapData selon la locale
export function getMindMapByLocale(data: MindMapDataMultiLang, locale: string): MindMapData {
  const lang = locale as keyof MultiLangLabel;
  const isArabic = locale === 'ar';
  
  return {
    id: data.id,
    label: isArabic ? data.label.en : data.label[lang] || data.label.fr,
    labelAr: isArabic ? data.label.ar : undefined,
    color: data.color,
    icon: data.icon,
    children: data.children?.map(child => getMindMapByLocale(child, locale)),
  };
}

// ============================================
// AQEEDAH - Introduction (001-introduction)
// ============================================
export const introductionAqeedahData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'العقيدة', en: 'Aqeedah', fr: 'La Aqeedah' },
  icon: '🕌',
  color: '#1e3a5f',
  children: [
    {
      id: 'definition',
      label: { ar: 'التعريف', en: 'Definition', fr: 'Définition' },
      icon: '📖',
      color: '#2d6a4f',
      children: [
        { id: 'meaning', label: { ar: 'الإيمان الجازم', en: 'Firm belief', fr: 'Croyance ferme' }, icon: '💎' },
        { id: 'importance', label: { ar: 'أساس الإسلام', en: 'Foundation of Islam', fr: 'Fondement de l\'Islam' }, icon: '🏛️' },
        { id: 'source', label: { ar: 'الكتاب والسنة', en: 'Quran & Sunnah', fr: 'Coran & Sunna' }, icon: '📚' },
      ],
    },
    {
      id: 'pillars',
      label: { ar: 'أركان الإيمان الستة', en: 'Six Pillars of Faith', fr: 'Les Six Piliers de la Foi' },
      icon: '🏛️',
      color: '#7b2cbf',
      children: [
        { id: 'allah', label: { ar: 'الإيمان بالله', en: 'Belief in Allah', fr: 'Foi en Allah' }, icon: '☝️' },
        { id: 'angels', label: { ar: 'الملائكة', en: 'Angels', fr: 'Anges' }, icon: '👼' },
        { id: 'books', label: { ar: 'الكتب', en: 'Books', fr: 'Livres' }, icon: '📖' },
        { id: 'messengers', label: { ar: 'الرسل', en: 'Messengers', fr: 'Messagers' }, icon: '🕌' },
        { id: 'lastday', label: { ar: 'اليوم الآخر', en: 'Last Day', fr: 'Jour Dernier' }, icon: '⚖️' },
        { id: 'qadr', label: { ar: 'القدر', en: 'Divine Decree', fr: 'Destin' }, icon: '📜' },
      ],
    },
    {
      id: 'jibril',
      label: { ar: 'حديث جبريل', en: 'Hadith of Jibril', fr: 'Hadith de Jibril' },
      icon: '📜',
      color: '#c9184a',
      children: [
        { id: 'islam', label: { ar: 'الإسلام', en: 'Islam', fr: 'Islam' }, icon: '☪️' },
        { id: 'iman', label: { ar: 'الإيمان', en: 'Iman', fr: 'Iman' }, icon: '❤️' },
        { id: 'ihsan', label: { ar: 'الإحسان', en: 'Ihsan', fr: 'Ihsan' }, icon: '✨' },
        { id: 'hour', label: { ar: 'الساعة', en: 'The Hour', fr: 'L\'Heure' }, icon: '⏰' },
      ],
    },
    {
      id: 'iman-meaning',
      label: { ar: 'ما هو الإيمان؟', en: 'What is Faith?', fr: 'Qu\'est-ce que la Foi ?' },
      icon: '💡',
      color: '#9c6644',
      children: [
        { id: 'heart', label: { ar: 'القلب', en: 'Heart', fr: 'Cœur' }, icon: '❤️' },
        { id: 'tongue', label: { ar: 'اللسان', en: 'Tongue', fr: 'Langue' }, icon: '👅' },
        { id: 'limbs', label: { ar: 'الجوارح', en: 'Limbs', fr: 'Membres' }, icon: '🙌' },
      ],
    },
  ],
};

// ============================================
// AQEEDAH - Arkan Tawhid (014-arkan-tawhid)
// ============================================
export const arkanTawhidData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'أقسام التوحيد', en: 'Categories of Tawhid', fr: 'Catégories du Tawhid' },
  icon: '☝️',
  color: '#1e3a5f',
  children: [
    {
      id: 'rububiyyah',
      label: { ar: 'توحيد الربوبية', en: 'Tawhid Ar-Rububiyyah', fr: 'Tawhid Ar-Rububiyyah' },
      icon: '🌍',
      color: '#2d6a4f',
      children: [
        { id: 'creation', label: { ar: 'الخلق', en: 'Creation', fr: 'Création' }, icon: '🌱' },
        { id: 'provision', label: { ar: 'الرزق', en: 'Provision', fr: 'Subsistance' }, icon: '🍞' },
        { id: 'sovereignty', label: { ar: 'الملك', en: 'Sovereignty', fr: 'Souveraineté' }, icon: '👑' },
        { id: 'management', label: { ar: 'التدبير', en: 'Management', fr: 'Gestion' }, icon: '⚙️' },
      ],
    },
    {
      id: 'uluhiyyah',
      label: { ar: 'توحيد الألوهية', en: 'Tawhid Al-Uluhiyyah', fr: 'Tawhid Al-Uluhiyyah' },
      icon: '🕋',
      color: '#7b2cbf',
      children: [
        { id: 'dua', label: { ar: 'الدعاء', en: 'Supplication', fr: 'Invocation' }, icon: '🤲' },
        { id: 'sacrifice', label: { ar: 'الذبح', en: 'Sacrifice', fr: 'Sacrifice' }, icon: '🐑' },
        { id: 'vow', label: { ar: 'النذر', en: 'Vow', fr: 'Vœu' }, icon: '📜' },
        { id: 'fear', label: { ar: 'الخوف', en: 'Fear', fr: 'Crainte' }, icon: '😨' },
        { id: 'hope', label: { ar: 'الرجاء', en: 'Hope', fr: 'Espoir' }, icon: '🙏' },
        { id: 'love', label: { ar: 'المحبة', en: 'Love', fr: 'Amour' }, icon: '❤️' },
      ],
    },
    {
      id: 'asma-sifat',
      label: { ar: 'توحيد الأسماء والصفات', en: 'Tawhid Al-Asma was-Sifat', fr: 'Tawhid Al-Asma was-Sifat' },
      icon: '✨',
      color: '#c9184a',
      children: [
        { id: 'affirm', label: { ar: 'الإثبات', en: 'Affirmation', fr: 'Affirmation' }, icon: '✅' },
        { id: 'negate', label: { ar: 'نفي النقائص', en: 'Negation of defects', fr: 'Négation des défauts' }, icon: '❌' },
        { id: 'no-tamthil', label: { ar: 'لا تمثيل', en: 'No resemblance', fr: 'Pas de ressemblance' }, icon: '🚫' },
        { id: 'no-tahrif', label: { ar: 'لا تحريف', en: 'No distortion', fr: 'Pas de distorsion' }, icon: '⚠️' },
      ],
    },
    {
      id: 'conditions',
      label: { ar: 'شروط لا إله إلا الله', en: 'Conditions of Shahada', fr: 'Conditions de la Shahada' },
      icon: '🔑',
      color: '#9c6644',
      children: [
        { id: 'knowledge', label: { ar: 'العلم', en: 'Knowledge', fr: 'Science' }, icon: '📚' },
        { id: 'certainty', label: { ar: 'اليقين', en: 'Certainty', fr: 'Certitude' }, icon: '💯' },
        { id: 'acceptance', label: { ar: 'القبول', en: 'Acceptance', fr: 'Acceptation' }, icon: '✅' },
        { id: 'submission', label: { ar: 'الانقياد', en: 'Submission', fr: 'Soumission' }, icon: '🙇' },
        { id: 'truthfulness', label: { ar: 'الصدق', en: 'Truthfulness', fr: 'Véracité' }, icon: '💎' },
        { id: 'sincerity', label: { ar: 'الإخلاص', en: 'Sincerity', fr: 'Sincérité' }, icon: '❤️' },
        { id: 'love-cond', label: { ar: 'المحبة', en: 'Love', fr: 'Amour' }, icon: '💕' },
      ],
    },
  ],
};

// ============================================
// FIQH - Tahara (002-tahara)
// ============================================
export const taharaData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'الطهارة', en: 'Purification', fr: 'La Purification' },
  icon: '💧',
  color: '#1e3a5f',
  children: [
    {
      id: 'water-types',
      label: { ar: 'أقسام المياه', en: 'Types of Water', fr: 'Types d\'Eau' },
      icon: '💦',
      color: '#2d6a4f',
      children: [
        { id: 'tahur', label: { ar: 'طَهور (طاهر ومُطهِّر)', en: 'Tahur (Pure & Purifying)', fr: 'Tahur (Pure et Purifiant)' }, icon: '🟢' },
        { id: 'tahir', label: { ar: 'طاهر (غير مُطهِّر)', en: 'Tahir (Pure only)', fr: 'Tahir (Pur seulement)' }, icon: '🟡' },
        { id: 'najis', label: { ar: 'نجس', en: 'Najis (Impure)', fr: 'Najis (Impur)' }, icon: '🔴' },
      ],
    },
    {
      id: 'tahur-examples',
      label: { ar: 'أمثلة الماء الطَّهور', en: 'Tahur Examples', fr: 'Exemples d\'Eau Tahur' },
      icon: '✅',
      color: '#0891b2',
      children: [
        { id: 'rain', label: { ar: 'المطر', en: 'Rain', fr: 'Pluie' }, icon: '🌧️' },
        { id: 'sea', label: { ar: 'البحر', en: 'Sea', fr: 'Mer' }, icon: '🌊' },
        { id: 'river', label: { ar: 'الأنهار', en: 'Rivers', fr: 'Rivières' }, icon: '🏞️' },
        { id: 'zamzam', label: { ar: 'زمزم', en: 'Zamzam', fr: 'Zamzam' }, icon: '💎' },
        { id: 'snow', label: { ar: 'الثلج', en: 'Snow', fr: 'Neige' }, icon: '❄️' },
      ],
    },
    {
      id: 'removing-impurity',
      label: { ar: 'رفع النجاسة', en: 'Removing Impurity', fr: 'Enlever l\'Impureté' },
      icon: '🧹',
      color: '#7b2cbf',
      children: [
        { id: 'hadath', label: { ar: 'الحدث (المعنوية)', en: 'Ritual (Hadath)', fr: 'Rituelle (Hadath)' }, icon: '🚿' },
        { id: 'khabath', label: { ar: 'الخبث (الحسية)', en: 'Physical (Khabath)', fr: 'Physique (Khabath)' }, icon: '🧼' },
      ],
    },
    {
      id: 'purification-tools',
      label: { ar: 'أدوات الطهارة', en: 'Purification Tools', fr: 'Outils de Purification' },
      icon: '🛠️',
      color: '#c9184a',
      children: [
        { id: 'water', label: { ar: 'الماء', en: 'Water', fr: 'Eau' }, icon: '💧' },
        { id: 'earth', label: { ar: 'التراب (التيمم)', en: 'Earth (Tayammum)', fr: 'Terre (Tayammum)' }, icon: '🏜️' },
        { id: 'stones', label: { ar: 'الحجارة (الاستجمار)', en: 'Stones (Istijmar)', fr: 'Pierres (Istijmar)' }, icon: '🪨' },
        { id: 'tanning', label: { ar: 'الدباغة', en: 'Tanning', fr: 'Tannage' }, icon: '🐄' },
      ],
    },
  ],
};

// ============================================
// FIQH - Wudu (004-wudu)
// ============================================
export const wuduData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'الوضوء', en: 'Wudu (Ablution)', fr: 'Le Wudu (Ablutions)' },
  icon: '🚿',
  color: '#1e3a5f',
  children: [
    {
      id: 'conditions',
      label: { ar: 'شروط الصحة', en: 'Conditions', fr: 'Conditions de Validité' },
      icon: '✅',
      color: '#2d6a4f',
      children: [
        { id: 'islam', label: { ar: 'الإسلام', en: 'Islam', fr: 'Islam' }, icon: '☪️' },
        { id: 'sanity', label: { ar: 'العقل', en: 'Sanity', fr: 'Raison' }, icon: '🧠' },
        { id: 'discernment', label: { ar: 'التمييز', en: 'Discernment', fr: 'Discernement' }, icon: '👶' },
        { id: 'intention', label: { ar: 'النية', en: 'Intention', fr: 'Intention' }, icon: '❤️' },
        { id: 'pure-water', label: { ar: 'الماء الطهور', en: 'Pure Water', fr: 'Eau Pure' }, icon: '💧' },
      ],
    },
    {
      id: 'obligatory',
      label: { ar: 'الفرائض', en: 'Obligatory Acts', fr: 'Actes Obligatoires' },
      icon: '⭐',
      color: '#7b2cbf',
      children: [
        { id: 'face', label: { ar: 'غسل الوجه', en: 'Wash face', fr: 'Laver le visage' }, icon: '😊' },
        { id: 'arms', label: { ar: 'غسل اليدين', en: 'Wash arms', fr: 'Laver les bras' }, icon: '💪' },
        { id: 'head', label: { ar: 'مسح الرأس', en: 'Wipe head', fr: 'Essuyer la tête' }, icon: '👤' },
        { id: 'feet', label: { ar: 'غسل الرجلين', en: 'Wash feet', fr: 'Laver les pieds' }, icon: '🦶' },
        { id: 'order', label: { ar: 'الترتيب', en: 'Order', fr: 'Ordre' }, icon: '📋' },
        { id: 'continuity', label: { ar: 'الموالاة', en: 'Continuity', fr: 'Continuité' }, icon: '⏱️' },
      ],
    },
    {
      id: 'sunnah',
      label: { ar: 'السنن', en: 'Recommended Acts', fr: 'Actes Recommandés' },
      icon: '🌟',
      color: '#0891b2',
      children: [
        { id: 'bismillah', label: { ar: 'البسملة', en: 'Bismillah', fr: 'Bismillah' }, icon: '📿' },
        { id: 'siwak', label: { ar: 'السواك', en: 'Siwak', fr: 'Siwak' }, icon: '🪥' },
        { id: 'three-times', label: { ar: 'التثليث', en: '3 times', fr: '3 fois' }, icon: '3️⃣' },
        { id: 'right-first', label: { ar: 'التيامن', en: 'Right first', fr: 'Droite d\'abord' }, icon: '👉' },
      ],
    },
    {
      id: 'nullifiers',
      label: { ar: 'النواقض', en: 'Nullifiers', fr: 'Annulatifs' },
      icon: '❌',
      color: '#c9184a',
      children: [
        { id: 'exit', label: { ar: 'الخارج من السبيلين', en: 'What exits passages', fr: 'Ce qui sort des 2 voies' }, icon: '🚽' },
        { id: 'sleep', label: { ar: 'النوم المستغرق', en: 'Deep sleep', fr: 'Sommeil profond' }, icon: '😴' },
        { id: 'unconscious', label: { ar: 'زوال العقل', en: 'Unconsciousness', fr: 'Perte de conscience' }, icon: '🤕' },
        { id: 'touching', label: { ar: 'مس الفرج', en: 'Touching private part', fr: 'Toucher les parties' }, icon: '✋' },
        { id: 'camel', label: { ar: 'لحم الإبل', en: 'Camel meat', fr: 'Viande de chameau' }, icon: '🐪' },
      ],
    },
    {
      id: 'masah',
      label: { ar: 'المسح على الخفين', en: 'Wiping over Socks', fr: 'Essuyage sur Chaussettes' },
      icon: '🧦',
      color: '#9c6644',
      children: [
        { id: 'resident', label: { ar: 'المقيم: يوم وليلة', en: 'Resident: 24h', fr: 'Résident: 24h' }, icon: '🏠' },
        { id: 'traveler', label: { ar: 'المسافر: 3 أيام', en: 'Traveler: 72h', fr: 'Voyageur: 72h' }, icon: '✈️' },
        { id: 'condition', label: { ar: 'اللبس على طهارة', en: 'Worn in purity', fr: 'Porté en pureté' }, icon: '✅' },
      ],
    },
  ],
};

// ============================================
// Map lesson IDs to their MindMap data
// ============================================
export const lessonMindMapsMultiLang: Record<string, MindMapDataMultiLang> = {
  'lesson-001': introductionAqeedahData,
  'lesson-014': arkanTawhidData,
  'lesson-002': taharaData,
  'lesson-004': wuduData,
};

// Get mindmap by lesson ID with locale
export function getMindMapForLesson(lessonId: string, locale: string = 'fr'): MindMapData | undefined {
  const data = lessonMindMapsMultiLang[lessonId];
  if (!data) return undefined;
  return getMindMapByLocale(data, locale);
}
