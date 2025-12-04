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
// AQEEDAH - Introduction (lesson-001 in aqeedah)
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
// FIQH - Introduction (lesson-001 in fiqh)
// ============================================
export const introductionFiqhData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'علم الفقه', en: 'Science of Fiqh', fr: 'Science du Fiqh' },
  icon: '⚖️',
  color: '#1e3a5f',
  children: [
    {
      id: 'definition',
      label: { ar: 'تعريف الفقه', en: 'Definition', fr: 'Définition' },
      icon: '📖',
      color: '#2d6a4f',
      children: [
        { id: 'linguistic', label: { ar: 'لغة: الفهم العميق', en: 'Linguistic: Deep understanding', fr: 'Linguistique: Compréhension profonde' }, icon: '💡' },
        { id: 'technical', label: { ar: 'اصطلاحاً: الأحكام الشرعية العملية', en: 'Technical: Practical rulings', fr: 'Technique: Règles pratiques' }, icon: '📜' },
      ],
    },
    {
      id: 'sources',
      label: { ar: 'مصادر الفقه', en: 'Sources of Fiqh', fr: 'Sources du Fiqh' },
      icon: '📚',
      color: '#7b2cbf',
      children: [
        { id: 'quran', label: { ar: 'القرآن الكريم', en: 'The Quran', fr: 'Le Coran' }, icon: '📖' },
        { id: 'sunnah', label: { ar: 'السنة النبوية', en: 'The Sunnah', fr: 'La Sunna' }, icon: '🕌' },
        { id: 'ijma', label: { ar: 'الإجماع', en: 'Ijma (Consensus)', fr: 'Ijma (Consensus)' }, icon: '🤝' },
        { id: 'qiyas', label: { ar: 'القياس', en: 'Qiyas (Analogy)', fr: 'Qiyas (Analogie)' }, icon: '⚖️' },
      ],
    },
    {
      id: 'madhabs',
      label: { ar: 'المذاهب الأربعة', en: 'Four Schools', fr: 'Quatre Écoles' },
      icon: '🏛️',
      color: '#0891b2',
      children: [
        { id: 'hanafi', label: { ar: 'الحنفي', en: 'Hanafi', fr: 'Hanafite' }, icon: '1️⃣' },
        { id: 'maliki', label: { ar: 'المالكي', en: 'Maliki', fr: 'Malikite' }, icon: '2️⃣' },
        { id: 'shafii', label: { ar: 'الشافعي', en: 'Shafi\'i', fr: 'Shafiite' }, icon: '3️⃣' },
        { id: 'hanbali', label: { ar: 'الحنبلي', en: 'Hanbali', fr: 'Hanbalite' }, icon: '4️⃣' },
      ],
    },
    {
      id: 'rulings',
      label: { ar: 'الأحكام التكليفية', en: 'Legal Rulings', fr: 'Statuts Légaux' },
      icon: '📋',
      color: '#c9184a',
      children: [
        { id: 'wajib', label: { ar: 'الواجب', en: 'Obligatory (Wajib)', fr: 'Obligatoire (Wajib)' }, icon: '⭐' },
        { id: 'mustahab', label: { ar: 'المستحب', en: 'Recommended (Mustahab)', fr: 'Recommandé (Mustahab)' }, icon: '👍' },
        { id: 'mubah', label: { ar: 'المباح', en: 'Permissible (Mubah)', fr: 'Permis (Mubah)' }, icon: '✅' },
        { id: 'makruh', label: { ar: 'المكروه', en: 'Disliked (Makruh)', fr: 'Détestable (Makruh)' }, icon: '👎' },
        { id: 'haram', label: { ar: 'الحرام', en: 'Forbidden (Haram)', fr: 'Interdit (Haram)' }, icon: '🚫' },
      ],
    },
    {
      id: 'virtue',
      label: { ar: 'فضل تعلم الفقه', en: 'Virtue of Learning Fiqh', fr: 'Mérite d\'Apprendre le Fiqh' },
      icon: '🌟',
      color: '#9c6644',
      children: [
        { id: 'hadith', label: { ar: 'من يرد الله به خيراً يفقهه في الدين', en: 'Whom Allah wants good for...', fr: 'Celui pour qui Allah veut du bien...' }, icon: '📜' },
        { id: 'worship', label: { ar: 'العبادة على بصيرة', en: 'Worship with knowledge', fr: 'Adorer en connaissance' }, icon: '🕋' },
        { id: 'halal-haram', label: { ar: 'تمييز الحلال والحرام', en: 'Distinguish lawful/unlawful', fr: 'Distinguer licite/illicite' }, icon: '⚖️' },
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
// FIQH - Introduction to Salah (011-salat-introduction)
// ============================================
export const salatIntroductionData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'الصلاة', en: 'Salah', fr: 'La Salat' },
  icon: '🕌',
  color: '#1e3a5f',
  children: [
    {
      id: 'status',
      label: { ar: 'المكانة والفرضية', en: 'Status & Obligation', fr: 'Statut & Obligation' },
      icon: '🏛️',
      color: '#2d6a4f',
      children: [
        { id: 'pillar', label: { ar: 'ركن الإسلام الثاني', en: 'Second pillar of Islam', fr: "2e pilier de l'Islam" }, icon: '2️⃣' },
        { id: 'first-account', label: { ar: 'أول ما يحاسب عليه العبد', en: 'First deed judged', fr: 'Premier acte jugé' }, icon: '⚖️' },
        { id: 'connection', label: { ar: 'صلة بين العبد وربه', en: 'Connection to Allah', fr: 'Lien avec Allah' }, icon: '🔗' },
      ],
    },
    {
      id: 'evidences',
      label: { ar: 'أدلة من القرآن والسنة', en: 'Quran & Sunnah Evidences', fr: 'Preuves Coran & Sunna' },
      icon: '📜',
      color: '#7b2cbf',
      children: [
        { id: 'quran', label: { ar: '﴿وَأَقِيمُوا الصَّلَاةَ﴾', en: 'Establish Salah', fr: 'Etablissez la Salat' }, icon: '📖' },
        { id: 'hadith', label: { ar: 'حديث قرة العين', en: 'Coolness of my eyes', fr: 'Fraicheur de mes yeux' }, icon: '❤️' },
        { id: 'impact', label: { ar: '﴿تنهى عن الفحشاء والمنكر﴾', en: 'Prevents immorality', fr: 'Empêche les turpitudes' }, icon: '🚫' },
      ],
    },
    {
      id: 'warning',
      label: { ar: 'التحذير من تركها', en: 'Warning for neglect', fr: 'Avertissement en cas d’abandon' },
      icon: '⚠️',
      color: '#c9184a',
      children: [
        { id: 'ghayy', label: { ar: '﴿فَسَوْفَ يَلْقَوْنَ غَيًّا﴾', en: 'They will meet Ghayy', fr: 'Ils rencontreront Ghayy' }, icon: '🔥' },
        { id: 'covenant', label: { ar: 'العهد الذي بيننا الصلاة', en: 'Covenant equals Salah', fr: 'Pacte: la Salat' }, icon: '🤝' },
        { id: 'salaf', label: { ar: 'أقوال السلف في ترك الصلاة', en: 'Statements of the Salaf', fr: 'Paroles des Salaf' }, icon: '📚' },
      ],
    },
    {
      id: 'fruits',
      label: { ar: 'ثمرات المحافظة عليها', en: 'Fruits of observance', fr: 'Fruits de l’assiduité' },
      icon: '🌟',
      color: '#0891b2',
      children: [
        { id: 'khushu', label: { ar: 'خشوع وطمأنينة', en: 'Khushu & serenity', fr: 'Recueillement & paix' }, icon: '🕊️' },
        { id: 'barakah', label: { ar: 'بركة في الوقت والرزق', en: 'Barakah in time & rizq', fr: 'Baraka dans le temps et la subsistance' }, icon: '⏱️' },
        { id: 'light', label: { ar: 'نور يوم القيامة', en: 'Light on the Day of Judgement', fr: 'Lumière au Jour du Jugement' }, icon: '✨' },
      ],
    },
    {
      id: 'program',
      label: { ar: 'برنامج عملي للشباب', en: 'Practical youth program', fr: 'Programme pratique pour les jeunes' },
      icon: '📝',
      color: '#9c6644',
      children: [
        { id: 'intentions', label: { ar: 'تجديد النية لكل صلاة', en: 'Renew intention each Salah', fr: "Renouveler l'intention avant chaque prière" }, icon: '🧭' },
        { id: 'masjid', label: { ar: 'الحرص على الجماعة والأذان', en: 'Guard the adhan & congregation', fr: "Veiller à l'adhan et à la prière en groupe" }, icon: '🏠' },
        { id: 'dua', label: { ar: 'دعاء (اللهم أعني على ذكرك)', en: "Du'a Allahumma a'inni...", fr: "Doua Allahumma a'inni..." }, icon: '🤲' },
      ],
    },
  ],
};

// ============================================
// FIQH - Salah Conditions (012-salat-conditions)
// ============================================
export const salatConditionsData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'شروط الصلاة', en: 'Conditions of Salah', fr: 'Conditions de la Salat' },
  icon: '🧾',
  color: '#1e3a5f',
  children: [
    {
      id: 'definition',
      label: { ar: 'تعريف الشرط', en: 'Definition', fr: 'Définition' },
      icon: 'ℹ️',
      color: '#2d6a4f',
      children: [
        { id: 'meaning', label: { ar: 'ما يلزم قبل العبادة', en: 'Prerequisite before worship', fr: "Préalable à l'adoration" }, icon: '📘' },
        { id: 'difference', label: { ar: 'الفرق عن الركن والواجب', en: 'Differs from pillar/obligation', fr: 'Différent du pilier/obligation' }, icon: '⚖️' },
      ],
    },
    {
      id: 'conditions',
      label: { ar: 'الشروط السبعة', en: 'Seven conditions', fr: 'Les sept conditions' },
      icon: '7️⃣',
      color: '#7b2cbf',
      children: [
        { id: 'islam-cond', label: { ar: 'الإسلام', en: 'Islam', fr: 'Islam' }, icon: '☪️' },
        { id: 'sanity-cond', label: { ar: 'العقل', en: 'Sanity', fr: 'Raison' }, icon: '🧠' },
        { id: 'tamyeez-cond', label: { ar: 'التمييز', en: 'Discernment', fr: 'Discernement' }, icon: '👦' },
        { id: 'tahara-cond', label: { ar: 'الطهارة من الحدث والخبث', en: 'Purity from hadath/khabath', fr: 'Pureté du hadath et du khabath' }, icon: '💧' },
        { id: 'awrah-cond', label: { ar: 'ستر العورة', en: 'Covering awrah', fr: 'Voilement de la awra' }, icon: '🧥' },
        { id: 'time-cond', label: { ar: 'دخول الوقت', en: 'Prayer time', fr: "Entrée du temps" }, icon: '⏰' },
        { id: 'qiblah-cond', label: { ar: 'استقبال القبلة', en: 'Facing Qiblah', fr: 'Orientation Qibla' }, icon: '🧭' },
      ],
    },
    {
      id: 'evidences-cond',
      label: { ar: 'أدلة الشروط', en: 'Textual proofs', fr: 'Preuves textuelles' },
      icon: '📜',
      color: '#0891b2',
      children: [
        { id: 'ayah-cond', label: { ar: '﴿إِنَّ الصَّلَاةَ كَانَتْ...﴾', en: 'Prayer prescribed verse', fr: 'Verset de la prescription' }, icon: '📖' },
        { id: 'hadith-cond', label: { ar: 'حديث لا تُقبل صلاة', en: 'Hadith “No prayer without purification”', fr: 'Hadith « Pas de prière sans purification »' }, icon: '🕌' },
        { id: 'ijma-cond', label: { ar: 'إجماع الصحابة', en: 'Consensus of Companions', fr: 'Consensus des Compagnons' }, icon: '🤝' },
      ],
    },
    {
      id: 'practice-cond',
      label: { ar: 'تطبيق عملي', en: 'Practical checks', fr: 'Vérifications pratiques' },
      icon: '✅',
      color: '#9c6644',
      children: [
        { id: 'checklist-cond', label: { ar: 'بطاقة فحص الصلاة', en: 'Prayer checklist', fr: 'Checklist de prière' }, icon: '🗒️' },
        { id: 'family-cond', label: { ar: 'تذكير الأسرة', en: 'Family reminders', fr: 'Rappels familiaux' }, icon: '🏠' },
        { id: 'dua-cond', label: { ar: 'دعاء (رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ)', en: 'Du’a 14:40', fr: 'Doua 14:40' }, icon: '🤲' },
      ],
    },
  ],
};

// ============================================
// FIQH - Salah Pillars (013-salat-pillars)
// ============================================
export const salatPillarsData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'أركان الصلاة', en: 'Pillars of Salah', fr: 'Piliers de la Salat' },
  icon: '🏛️',
  color: '#1e3a5f',
  children: [
    {
      id: 'definition-pillar',
      label: { ar: 'تعريف الركن', en: 'Definition', fr: 'Définition' },
      icon: 'ℹ️',
      color: '#2d6a4f',
      children: [
        { id: 'essence', label: { ar: 'جزء من ماهية الصلاة', en: 'Part of Salah essence', fr: 'Partie intégrale de la salat' }, icon: '🧱' },
        { id: 'rule', label: { ar: 'لا يجبر بسجود السهو', en: 'Not compensated by sujud sahw', fr: 'Non compensé par prost. de l’oubli' }, icon: '⚠️' },
      ],
    },
    {
      id: 'sequence',
      label: { ar: 'تسلسل الأركان', en: 'Pillar sequence', fr: 'Séquence des piliers' },
      icon: '🔁',
      color: '#7b2cbf',
      children: [
        { id: 'before-sujud', label: { ar: 'ما قبل السجود', en: 'Pre-sujud', fr: 'Avant les prosternations' }, icon: '⬆️',
          children: [
            { id: 'standing', label: { ar: 'القيام', en: 'Standing', fr: 'Station debout' } },
            { id: 'takbir', label: { ar: 'تكبيرة الإحرام', en: 'Opening takbir', fr: 'Takbir d’entrée' } },
            { id: 'fatiha', label: { ar: 'الفاتحة', en: 'Fatiha', fr: 'Al-Fatiha' } },
            { id: 'ruku', label: { ar: 'الركوع', en: 'Ruku', fr: 'Inclinaison' } },
            { id: 'rise-ruku', label: { ar: 'الرفع من الركوع', en: 'Rise from ruku', fr: 'Redressement' } },
            { id: 'standing-still', label: { ar: 'الاعتدال قائمًا', en: 'Standing upright', fr: 'Redressement complet' } },
          ],
        },
        { id: 'sujud-cycle', label: { ar: 'دورة السجود', en: 'Sujud cycle', fr: 'Cycle des prosternations' }, icon: '🧎',
          children: [
            { id: 'sujud1', label: { ar: 'السجود الأول', en: 'First sujud', fr: 'Première prosternation' } },
            { id: 'sitting', label: { ar: 'الجلوس بين السجدتين', en: 'Sitting between sujud', fr: 'Assise intermédiaire' } },
            { id: 'sujud2', label: { ar: 'السجود الثاني', en: 'Second sujud', fr: 'Deuxième prosternation' } },
          ],
        },
        { id: 'closing', label: { ar: 'الختام', en: 'Closing pillars', fr: 'Clôture' }, icon: '🏁',
          children: [
            { id: 'tashahhud', label: { ar: 'التشهد الأخير', en: 'Final tashahhud', fr: 'Tachahhud final' } },
            { id: 'sitting-final', label: { ar: 'الجلوس له', en: 'Sitting for it', fr: 'Assise finale' } },
            { id: 'salat-nabi', label: { ar: 'الصلاة على النبي ﷺ', en: 'Salawat on Prophet', fr: 'Prière sur le Prophète' } },
            { id: 'salam', label: { ar: 'التسليم المرتب', en: 'Ordered taslim', fr: 'Salam final' } },
          ],
        },
      ],
    },
    {
      id: 'evidences-pillars',
      label: { ar: 'الأدلة', en: 'Evidences', fr: 'Preuves' },
      icon: '📜',
      color: '#0891b2',
      children: [
        { id: 'hadith-jibril', label: { ar: 'حديث المسيء صلاته', en: 'Hadith of the man who prayed badly', fr: 'Hadith de l’homme qui mal priait' }, icon: '🗣️' },
        { id: 'hadith-fatiha', label: { ar: 'حديث «لا صلاة لمن لم يقرأ الفاتحة»', en: 'Hadith “No Salah without Fatiha”', fr: 'Hadith « Pas de salat sans Fatiha »' }, icon: '📖' },
        { id: 'seven-bones', label: { ar: 'السجود على الأعضاء السبعة', en: 'Hadith seven bones', fr: 'Hadith des sept membres' }, icon: '👐' },
      ],
    },
    {
      id: 'practice-pillars',
      label: { ar: 'تدريب', en: 'Practice', fr: 'Entraînement' },
      icon: '🏋️',
      color: '#9c6644',
      children: [
        { id: 'checklist-pillars', label: { ar: 'قائمة متابعة الأركان', en: 'Pillar checklist', fr: 'Checklist des piliers' }, icon: '🗒️' },
        { id: 'peer-review', label: { ar: 'مراجعة مع زميل', en: 'Peer review', fr: 'Relecture par un pair' }, icon: '👥' },
        { id: 'audio-demo', label: { ar: 'الاستماع لصلاة نموذجية', en: 'Listen to model prayer', fr: 'Écouter une prière modèle' }, icon: '🎧' },
      ],
    },
  ],
};

// ============================================
// FIQH - Salah Obligatory Actions (014-salat-obligatory-actions)
// ============================================
export const salatObligatoryData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'واجبات الصلاة', en: 'Obligatory Actions', fr: 'Obligations de la Salat' },
  icon: '📌',
  color: '#1e3a5f',
  children: [
    {
      id: 'definition-obligatory',
      label: { ar: 'تعريف الواجب', en: 'Definition', fr: 'Définition' },
      icon: 'ℹ️',
      color: '#2d6a4f',
      children: [
        { id: 'status-obligatory', label: { ar: 'يُجبر بسجود السهو', en: 'Compensated by sujud sahw', fr: 'Compensé par prosternation de l’oubli' }, icon: '🧠' },
        { id: 'difference-obligatory', label: { ar: 'بين الركن والسنة', en: 'Between pillar & sunnah', fr: 'Entre pilier et sunna' }, icon: '⚖️' },
      ],
    },
    {
      id: 'list-obligatory',
      label: { ar: 'الواجبات الثمانية', en: 'Eight essentials', fr: 'Huit obligations' },
      icon: '8️⃣',
      color: '#7b2cbf',
      children: [
        { id: 'takbirs-move', label: { ar: 'تكبيرات الانتقال', en: 'Transition takbirs', fr: 'Takbirs de transition' }, icon: '🔊' },
        { id: 'sami-allah', label: { ar: 'سمع الله لمن حمده', en: 'Sami Allah...', fr: 'Sami Allah...' }, icon: '🗣️' },
        { id: 'rabbana-hamd', label: { ar: 'ربنا ولك الحمد', en: 'Rabbana wa laka al-hamd', fr: 'Rabbana wa laka al-hamd' }, icon: '🙏' },
        { id: 'tasbih-ruku', label: { ar: 'تسبيح الركوع', en: 'Tasbih in ruku', fr: 'Tasbih en ruku' }, icon: '🔁' },
        { id: 'tasbih-sujud', label: { ar: 'تسبيح السجود', en: 'Tasbih in sujud', fr: 'Tasbih en sujud' }, icon: '🧎' },
        { id: 'dua-between', label: { ar: 'رب اغفر لي', en: 'Rabbighfir li', fr: 'Rabbi ighfir li' }, icon: '📝' },
        { id: 'tashahhud-first', label: { ar: 'التشهد الأول', en: 'First tashahhud', fr: 'Premier tachahhud' }, icon: '📜' },
        { id: 'sitting-first', label: { ar: 'جلوس التشهد الأول', en: 'Sitting for first tashahhud', fr: 'Assise du premier tachahhud' }, icon: '🪑' },
      ],
    },
    {
      id: 'evidences-obligatory',
      label: { ar: 'أدلة الواجبات', en: 'Textual proofs', fr: 'Preuves' },
      icon: '📚',
      color: '#0891b2',
      children: [
        { id: 'hadith-wael', label: { ar: 'حديث وائل بن حجر', en: 'Hadith Wael ibn Hujr', fr: 'Hadith Wael ibn Hujr' }, icon: '🕌' },
        { id: 'hadith-buhaina', label: { ar: 'حديث ابن بحينة', en: 'Hadith Ibn Buhayna', fr: 'Hadith Ibn Buhayna' }, icon: '📖' },
        { id: 'hadith-dhulyadayn', label: { ar: 'حديث ذي اليدين', en: 'Hadith Dhu al-Yadayn', fr: 'Hadith Dhi al-Yadayn' }, icon: '✋' },
      ],
    },
    {
      id: 'sujud-sahw',
      label: { ar: 'سجود السهو', en: 'Sujud as-sahw', fr: "Prosternation de l'oubli" },
      icon: '🧎‍♂️',
      color: '#c9184a',
      children: [
        { id: 'when-sahw', label: { ar: 'متى يُشرع', en: 'When performed', fr: 'Quand le faire' }, icon: '⏱️' },
        { id: 'before-after', label: { ar: 'قبل أم بعد السلام', en: 'Before/after salam', fr: 'Avant/après le salam' }, icon: '↔️' },
        { id: 'how-sahw', label: { ar: 'كيفية السجود', en: 'How to perform', fr: 'Comment effectuer' }, icon: '📝' },
      ],
    },
    {
      id: 'practice-obligatory',
      label: { ar: 'تطبيق', en: 'Practice', fr: 'Pratique' },
      icon: '✅',
      color: '#9c6644',
      children: [
        { id: 'scenario', label: { ar: 'سيناريو النسيان', en: 'Forgetting scenario', fr: "Scénario d'oubli" }, icon: '🧩' },
        { id: 'group-review', label: { ar: 'مراجعة جماعية', en: 'Group review', fr: 'Revue collective' }, icon: '👥' },
        { id: 'voice', label: { ar: 'تدريب صوتي', en: 'Voice rehearsal', fr: 'Révision vocale' }, icon: '🎙️' },
      ],
    },
  ],
};

// ============================================
// FIQH - Salah Sunan & Nullifiers (015-salat-sunan-nullifiers)
// ============================================
export const salatSunanNullifiersData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'سنن الصلاة ومبطلاتها', en: 'Sunan & Nullifiers', fr: 'Sunan et annulatifs' },
  icon: '🌿',
  color: '#1e3a5f',
  children: [
    {
      id: 'sunan-branch',
      label: { ar: 'سنن الصلاة', en: 'Sunan of Salah', fr: 'Sunan de la Salat' },
      icon: '🌟',
      color: '#2d6a4f',
      children: [
        { id: 'confirmed-sunan', label: { ar: 'سنن مؤكدة', en: 'Emphasized sunan', fr: 'Sunan confirmées' }, icon: '✅',
          children: [
            { id: 'rafayadayn', label: { ar: 'رفع اليدين', en: 'Raising hands', fr: 'Lever les mains' } },
            { id: 'istiftah', label: { ar: 'دعاء الاستفتاح', en: 'Opening supplication', fr: 'Invocation d’ouverture' } },
            { id: 'basmala', label: { ar: 'الاستعاذة والبسملة', en: 'Ta’awwudh & basmala', fr: 'Taawwudh et basmala' } },
            { id: 'surah', label: { ar: 'قراءة بعد الفاتحة', en: 'Reading extra surah', fr: 'Lecture après Fatiha' } },
            { id: 'ameen', label: { ar: 'قول آمين', en: 'Saying Ameen', fr: 'Dire Amine' } },
          ],
        },
        { id: 'nonconfirmed-sunan', label: { ar: 'سنن غير مؤكدة', en: 'Non-emphasized', fr: 'Sunan non confirmées' }, icon: '🕊️',
          children: [
            { id: 'rest-sit', label: { ar: 'جلسة الاستراحة', en: 'Rest sitting', fr: "Assise de repos" } },
            { id: 'extra-tasbih', label: { ar: 'تكرار التسبيح', en: 'Extra tasbih', fr: 'Tasbih répété' } },
            { id: 'longer-first', label: { ar: 'إطالة الركعة الأولى', en: 'Longer first rakah', fr: 'Première rakaa plus longue' } },
          ],
        },
      ],
    },
    {
      id: 'nullifiers-branch',
      label: { ar: 'مبطلات الصلاة', en: 'Nullifiers', fr: 'Annulatifs' },
      icon: '🚫',
      color: '#c9184a',
      children: [
        { id: 'major-nullifiers', label: { ar: 'مبطلات كبرى', en: 'Major nullifiers', fr: 'Annulatifs majeurs' }, icon: '🔥',
          children: [
            { id: 'leave-pillar', label: { ar: 'ترك ركن عمدًا', en: 'Leaving pillar deliberately', fr: 'Abandon volontaire dun pilier' } },
            { id: 'talk', label: { ar: 'الكلام والقهقهة', en: 'Speech/laughter', fr: 'Parole ou rire' } },
            { id: 'eat-drink', label: { ar: 'الأكل والشرب', en: 'Eating/drinking', fr: 'Manger/boire' } },
            { id: 'expose-awrah', label: { ar: 'نكشف العورة', en: 'Expose awrah', fr: 'Découvrir la awra' } },
            { id: 'hadath', label: { ar: 'الحدث', en: 'Nullifying hadath', fr: 'Hadath' } },
          ],
        },
        { id: 'minor-nullifiers', label: { ar: 'مخالفات صغرى', en: 'Minor issues', fr: 'Manquements mineurs' }, icon: '⚠️',
          children: [
            { id: 'excess-move', label: { ar: 'الحركة الكثيرة', en: 'Excessive movement', fr: 'Mouvements excessifs' } },
            { id: 'look-around', label: { ar: 'الالتفات', en: 'Turning head', fr: 'Regarder autour' } },
            { id: 'phone', label: { ar: 'الانشغال بالأجهزة', en: 'Phone distraction', fr: 'Distraction téléphone' } },
            { id: 'raise-eyes', label: { ar: 'رفع البصر للسماء', en: 'Raise eyes skyward', fr: 'Lever les yeux au ciel' } },
          ],
        },
      ],
    },
    {
      id: 'tips-branch',
      label: { ar: 'نصائح عملية', en: 'Practical tips', fr: 'Conseils pratiques' },
      icon: '💡',
      color: '#0891b2',
      children: [
        { id: 'focus-prep', label: { ar: 'تهيئة القلب قبل الصلاة', en: 'Prepare heart', fr: 'Préparer le coeur' }, icon: '❤️' },
        { id: 'space', label: { ar: 'تهيئة المكان', en: 'Prepare space', fr: 'Préparer le lieu' }, icon: '🧹' },
        { id: 'rows', label: { ar: 'تسوية الصفوف', en: 'Align rows', fr: 'Aligner les rangs' }, icon: '📏' },
        { id: 'adhkar', label: { ar: 'أذكار بعد الصلاة', en: 'Post-salah adhkar', fr: 'Adhkar post-salat' }, icon: '🗣️' },
      ],
    },
  ],
};

// ============================================
// FIQH - Sujood As-Sahw (016-sujood-sahw)
// ============================================
export const sujoodSahwData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'سجود السهو', en: 'Prostration of Forgetfulness', fr: "Prosternation de l'Oubli" },
  icon: '🧎',
  color: '#1e3a5f',
  children: [
    {
      id: 'definition-sahw',
      label: { ar: 'تعريف سجود السهو', en: 'Definition', fr: 'Définition' },
      icon: 'ℹ️',
      color: '#2d6a4f',
      children: [
        { id: 'meaning-sahw', label: { ar: 'سجدتان يسجدهما المصلي', en: 'Two prostrations by the praying person', fr: 'Deux prosternations du priant' }, icon: '📘' },
        { id: 'purpose-sahw', label: { ar: 'جبر ما حصل من خلل', en: 'To compensate for a defect', fr: "Compenser un défaut" }, icon: '🔧' },
        { id: 'wisdom-sahw', label: { ar: 'رحمة الله بعباده', en: "Allah's mercy upon His servants", fr: "Miséricorde d'Allah" }, icon: '💎' },
      ],
    },
    {
      id: 'causes-sahw',
      label: { ar: 'أسباب سجود السهو', en: 'Causes of Sujud Sahw', fr: 'Causes du Sujud Sahw' },
      icon: '🎯',
      color: '#7b2cbf',
      children: [
        { id: 'increase', label: { ar: 'الزيادة', en: 'Addition', fr: 'Ajout' }, icon: '➕',
          children: [
            { id: 'extra-rakah', label: { ar: 'زيادة ركعة', en: 'Extra rakah', fr: 'Rakaa supplémentaire' } },
            { id: 'extra-sujud', label: { ar: 'زيادة سجود', en: 'Extra sujud', fr: 'Sujud supplémentaire' } },
            { id: 'extra-ruku', label: { ar: 'زيادة ركوع', en: 'Extra ruku', fr: 'Ruku supplémentaire' } },
          ],
        },
        { id: 'decrease', label: { ar: 'النقص', en: 'Omission', fr: 'Omission' }, icon: '➖',
          children: [
            { id: 'leave-wajib', label: { ar: 'ترك واجب', en: 'Leaving an obligation', fr: "Abandon d'une obligation" } },
            { id: 'tashahhud-first', label: { ar: 'ترك التشهد الأول', en: 'Leaving first tashahhud', fr: 'Oubli du premier tachahhud' } },
            { id: 'tasbih', label: { ar: 'ترك التسبيح', en: 'Leaving tasbih', fr: 'Oubli du tasbih' } },
          ],
        },
        { id: 'doubt', label: { ar: 'الشك', en: 'Doubt', fr: 'Doute' }, icon: '❓',
          children: [
            { id: 'doubt-count', label: { ar: 'الشك في عدد الركعات', en: 'Doubt in number of rakahs', fr: 'Doute sur le nombre' } },
            { id: 'build-certain', label: { ar: 'البناء على اليقين', en: 'Build on certainty', fr: 'Se baser sur la certitude' } },
            { id: 'less-count', label: { ar: 'الأخذ بالأقل', en: 'Take the lesser count', fr: 'Prendre le minimum' } },
          ],
        },
      ],
    },
    {
      id: 'timing-sahw',
      label: { ar: 'موضع سجود السهو', en: 'Timing of Sujud Sahw', fr: 'Moment du Sujud Sahw' },
      icon: '⏰',
      color: '#0891b2',
      children: [
        { id: 'before-salam', label: { ar: 'قبل السلام', en: 'Before Salam', fr: 'Avant le Salam' }, icon: '⬅️',
          children: [
            { id: 'when-decrease', label: { ar: 'في حالة النقص', en: 'In case of omission', fr: "En cas d'omission" } },
            { id: 'when-doubt-less', label: { ar: 'الشك والبناء على الأقل', en: 'Doubt, take lesser', fr: 'Doute, prendre le minimum' } },
          ],
        },
        { id: 'after-salam', label: { ar: 'بعد السلام', en: 'After Salam', fr: 'Après le Salam' }, icon: '➡️',
          children: [
            { id: 'when-increase', label: { ar: 'في حالة الزيادة', en: 'In case of addition', fr: "En cas d'ajout" } },
            { id: 'doubt-certainty', label: { ar: 'الشك مع ترجيح', en: 'Doubt with probability', fr: 'Doute avec probabilité' } },
          ],
        },
      ],
    },
    {
      id: 'how-sahw',
      label: { ar: 'كيفية سجود السهو', en: 'How to Perform', fr: 'Comment Effectuer' },
      icon: '📋',
      color: '#c9184a',
      children: [
        { id: 'takbir-sahw', label: { ar: 'التكبير للسجود', en: 'Takbir for sujud', fr: 'Takbir pour le sujud' }, icon: '🔊' },
        { id: 'first-sujud', label: { ar: 'السجدة الأولى', en: 'First prostration', fr: 'Première prosternation' }, icon: '1️⃣' },
        { id: 'sit-between', label: { ar: 'الجلوس بينهما', en: 'Sitting between them', fr: 'Assise entre les deux' }, icon: '🪑' },
        { id: 'second-sujud', label: { ar: 'السجدة الثانية', en: 'Second prostration', fr: 'Seconde prosternation' }, icon: '2️⃣' },
        { id: 'then-salam', label: { ar: 'ثم التسليم', en: 'Then Salam', fr: 'Puis le Salam' }, icon: '👋' },
      ],
    },
    {
      id: 'mamum-sahw',
      label: { ar: 'أحكام المأموم', en: 'Rulings for Follower', fr: 'Règles pour le Suiveur' },
      icon: '👥',
      color: '#9c6644',
      children: [
        { id: 'follow-imam', label: { ar: 'متابعة الإمام', en: 'Follow the Imam', fr: "Suivre l'Imam" }, icon: '🚶' },
        { id: 'imam-forgets', label: { ar: 'إذا سها الإمام', en: 'If Imam forgets', fr: "Si l'Imam oublie" }, icon: '⚠️' },
        { id: 'mamum-forgets', label: { ar: 'إذا سها المأموم', en: 'If follower forgets', fr: 'Si le suiveur oublie' }, icon: '🤔' },
        { id: 'late-comer', label: { ar: 'المسبوق', en: 'Late comer', fr: 'Le retardataire' }, icon: '🏃' },
      ],
    },
    {
      id: 'evidences-sahw',
      label: { ar: 'الأدلة من السنة', en: 'Evidences from Sunnah', fr: 'Preuves de la Sunna' },
      icon: '📜',
      color: '#059669',
      children: [
        { id: 'hadith-dhulyadayn', label: { ar: 'حديث ذي اليدين', en: 'Hadith Dhu al-Yadayn', fr: 'Hadith Dhi al-Yadayn' }, icon: '✋' },
        { id: 'hadith-ibn-masud', label: { ar: 'حديث ابن مسعود', en: 'Hadith Ibn Masud', fr: "Hadith Ibn Mas'ud" }, icon: '📖' },
        { id: 'hadith-buhaina', label: { ar: 'حديث ابن بحينة', en: 'Hadith Ibn Buhayna', fr: 'Hadith Ibn Buhayna' }, icon: '🕌' },
      ],
    },
  ],
};

// ============================================
// FIQH - Salat Al-Masbuq (017-salat-masbuq)
// ============================================
export const salatMasbuqData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'صلاة المسبوق', en: 'Prayer of the Late-Comer', fr: 'Prière du Retardataire' },
  icon: '🏃',
  color: '#1e3a5f',
  children: [
    {
      id: 'definition-masbuq',
      label: { ar: 'تعريف المسبوق', en: 'Definition', fr: 'Définition' },
      icon: 'ℹ️',
      color: '#2d6a4f',
      children: [
        { id: 'masbuq-meaning', label: { ar: 'من فاته ركعة أو أكثر', en: 'One who missed a rakah or more', fr: "Celui qui a raté une rak'a ou plus" }, icon: '📘' },
        { id: 'mudrik', label: { ar: 'المُدرِك: من أدرك كل الصلاة', en: 'Mudrik: caught all prayer', fr: 'Mudrik: a rattrapé toute la prière' }, icon: '✅' },
        { id: 'lahiq', label: { ar: 'اللاحق: من فاته بعضها لعذر', en: 'Lahiq: missed some for excuse', fr: 'Lahiq: en a raté pour excuse' }, icon: '⏳' },
      ],
    },
    {
      id: 'catching-rakah',
      label: { ar: 'إدراك الركعة', en: 'Catching the Rakah', fr: "Rattraper la Rak'a" },
      icon: '🎯',
      color: '#7b2cbf',
      children: [
        { id: 'ruku-rule', label: { ar: 'من أدرك الركوع أدرك الركعة', en: 'Catching ruku = catching rakah', fr: "Rattraper le ruku = rattraper la rak'a" }, icon: '⭐' },
        { id: 'after-ruku', label: { ar: 'من أدرك بعد الركوع فاتته', en: 'After ruku = missed it', fr: "Après le ruku = rak'a ratée" }, icon: '❌' },
        { id: 'tashahud-only', label: { ar: 'من أدرك التشهد فقط', en: 'Caught tashahhud only', fr: 'A rattrapé le tachahhud seulement' }, icon: '🪑' },
      ],
    },
    {
      id: 'what-caught',
      label: { ar: 'ما يدركه المسبوق', en: 'What Masbuq Catches', fr: 'Ce que le Masbuq rattrape' },
      icon: '📋',
      color: '#0891b2',
      children: [
        { id: 'first-prayer', label: { ar: 'ما أدركه = أول صلاته', en: 'What caught = first of prayer', fr: 'Ce qui est rattrapé = début de sa prière' }, icon: '1️⃣' },
        { id: 'makes-up', label: { ar: 'ما يقضيه = آخر صلاته', en: 'What makes up = end of prayer', fr: 'Ce qui est à compléter = fin de sa prière' }, icon: '🔚' },
        { id: 'wait-imam', label: { ar: 'ينتظر سلام الإمام', en: 'Wait for Imam salam', fr: "Attendre le salam de l'Imam" }, icon: '⏱️' },
      ],
    },
    {
      id: 'how-makeup',
      label: { ar: 'كيفية القضاء', en: 'How to Make Up', fr: 'Comment Compléter' },
      icon: '📝',
      color: '#c9184a',
      children: [
        { id: 'first-rakahs', label: { ar: 'الركعات الأُوَل: الفاتحة وسورة', en: 'First rakahs: Fatiha + surah', fr: 'Premières rakaas: Fatiha + sourate' }, icon: '📖' },
        { id: 'last-rakahs', label: { ar: 'الركعات الأخيرة: الفاتحة فقط', en: 'Last rakahs: Fatiha only', fr: 'Dernières rakaas: Fatiha seulement' }, icon: '📄' },
        { id: 'loud-silent', label: { ar: 'الجهر والإسرار حسب الصلاة', en: 'Loud/silent per prayer type', fr: 'À voix haute/basse selon la prière' }, icon: '🔊' },
      ],
    },
    {
      id: 'jumua-masbuq',
      label: { ar: 'أحكام الجمعة للمسبوق', en: 'Jumua Rulings for Masbuq', fr: "Règles du Vendredi pour le Masbuq" },
      icon: '🕌',
      color: '#9c6644',
      children: [
        { id: 'one-rakah', label: { ar: 'أدرك ركعة = أدرك الجمعة', en: 'Caught 1 rakah = caught Jumua', fr: "1 rak'a = Jumua valide" }, icon: '✅' },
        { id: 'less-rakah', label: { ar: 'أقل من ركعة = يتمها ظهرًا', en: 'Less than rakah = pray Dhuhr', fr: "Moins d'une rak'a = prier Dhuhr" }, icon: '4️⃣' },
        { id: 'tashahud-jumua', label: { ar: 'أدرك التشهد = ظهر أربعًا', en: 'Caught tashahhud = 4 rakah Dhuhr', fr: 'Tachahhud seulement = 4 rakaas Dhuhr' }, icon: '🔄' },
      ],
    },
    {
      id: 'adab-masbuq',
      label: { ar: 'آداب المسبوق', en: 'Etiquettes of Masbuq', fr: 'Bienséances du Masbuq' },
      icon: '🤲',
      color: '#059669',
      children: [
        { id: 'sakina', label: { ar: 'الإسراع بسكينة', en: 'Hasten with tranquility', fr: 'Se hâter avec sérénité' }, icon: '🚶' },
        { id: 'join-immediately', label: { ar: 'الدخول فورًا', en: 'Join immediately', fr: 'Rejoindre immédiatement' }, icon: '➡️' },
        { id: 'no-crossing', label: { ar: 'عدم تخطي الرقاب', en: 'No crossing over people', fr: 'Ne pas enjamber les gens' }, icon: '🚫' },
        { id: 'quiet-rise', label: { ar: 'الهدوء عند القيام', en: 'Rise quietly', fr: 'Se lever calmement' }, icon: '🤫' },
      ],
    },
    {
      id: 'sahw-masbuq',
      label: { ar: 'سجود السهو للمسبوق', en: 'Sujud Sahw for Masbuq', fr: 'Prosternation de Oubli pour Masbuq' },
      icon: '🧎',
      color: '#7c3aed',
      children: [
        { id: 'follow-imam-sahw', label: { ar: 'يتابع إمامه إذا سها', en: 'Follow Imam if he forgets', fr: "Suivre l'Imam s'il oublie" }, icon: '👥' },
        { id: 'own-sahw', label: { ar: 'يسجد لسهو نفسه', en: 'Prostrate for own forgetfulness', fr: 'Se prosterner pour son propre oubli' }, icon: '🙋' },
        { id: 'after-complete', label: { ar: 'بعد إتمام صلاته', en: 'After completing prayer', fr: 'Après avoir complété sa prière' }, icon: '✔️' },
      ],
    },
  ],
};

// ============================================
// Map lesson IDs to their MindMap data
// Format: 'course-slug:lesson-id' for unique identification
// ============================================
export const lessonMindMapsMultiLang: Record<string, MindMapDataMultiLang> = {
  // Aqeedah lessons
  'aqeedah:lesson-001': introductionAqeedahData,
  'aqeedah:lesson-014': arkanTawhidData,
  // Fiqh lessons
  'fiqh:lesson-001': introductionFiqhData,
  'fiqh:lesson-002': taharaData,
  'fiqh:lesson-004': wuduData,
  'fiqh:lesson-011': salatIntroductionData,
  'fiqh:lesson-012': salatConditionsData,
  'fiqh:lesson-013': salatPillarsData,
  'fiqh:lesson-014': salatObligatoryData,
  'fiqh:lesson-015': salatSunanNullifiersData,
  'fiqh:lesson-016': sujoodSahwData,
  'fiqh:lesson-017': salatMasbuqData,
};

// Get mindmap by lesson ID with locale
// Supports both 'course:lesson-id' format and legacy 'lesson-id' format
export function getMindMapForLesson(lessonId: string, locale: string = 'fr', courseSlug?: string): MindMapData | undefined {
  // Try with course slug first if provided
  if (courseSlug) {
    // Normalize course slug (remove 'bases-' prefix, etc.)
    const normalizedSlug = courseSlug.includes('aqeedah') ? 'aqeedah' : 
                          courseSlug.includes('fiqh') ? 'fiqh' : courseSlug;
    const key = `${normalizedSlug}:${lessonId}`;
    const data = lessonMindMapsMultiLang[key];
    if (data) return getMindMapByLocale(data, locale);
  }
  
  // Fallback: try legacy format without course prefix
  const legacyData = lessonMindMapsMultiLang[lessonId];
  if (legacyData) return getMindMapByLocale(legacyData, locale);
  
  return undefined;
}
