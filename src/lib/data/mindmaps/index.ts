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
// AQEEDAH - Qadar (009-destin)
// ============================================
export const qadarData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'الإيمان بالقدر', en: 'Belief in Divine Decree', fr: 'La Foi au Destin' },
  icon: '📜',
  color: '#1e3a5f',
  children: [
    {
      id: 'maratib',
      label: { ar: 'مراتب القدر الأربعة', en: 'Four Levels of Qadar', fr: 'Les Quatre Niveaux du Qadar' },
      icon: '🔢',
      color: '#2d6a4f',
      children: [
        { id: 'ilm', label: { ar: '١. العلم', en: '1. Knowledge', fr: '1. La Science' }, icon: '🧠' },
        { id: 'kitabah', label: { ar: '٢. الكتابة', en: '2. Writing', fr: '2. L\'Écriture' }, icon: '📝' },
        { id: 'mashiah', label: { ar: '٣. المشيئة', en: '3. Will', fr: '3. La Volonté' }, icon: '⚡' },
        { id: 'khalq', label: { ar: '٤. الخلق', en: '4. Creation', fr: '4. La Création' }, icon: '🌟' },
      ],
    },
    {
      id: 'ilm-detail',
      label: { ar: 'العلم الإلهي', en: 'Divine Knowledge', fr: 'La Science Divine' },
      icon: '🧠',
      color: '#7b2cbf',
      children: [
        { id: 'past', label: { ar: 'ما كان', en: 'What was', fr: 'Ce qui a été' }, icon: '⏮️' },
        { id: 'present', label: { ar: 'ما هو كائن', en: 'What is', fr: 'Ce qui est' }, icon: '▶️' },
        { id: 'future', label: { ar: 'ما سيكون', en: 'What will be', fr: 'Ce qui sera' }, icon: '⏭️' },
        { id: 'hypothetical', label: { ar: 'لو كان كيف يكون', en: 'What would be', fr: 'Ce qui serait' }, icon: '❓' },
      ],
    },
    {
      id: 'lawh-mahfuz',
      label: { ar: 'اللوح المحفوظ', en: 'Preserved Tablet', fr: 'Tablette Préservée' },
      icon: '📖',
      color: '#0891b2',
      children: [
        { id: 'written-before', label: { ar: 'كُتب قبل الخلق', en: 'Written before creation', fr: 'Écrit avant la création' }, icon: '✍️' },
        { id: '50000-years', label: { ar: 'قبل ٥٠ ألف سنة', en: '50,000 years before', fr: '50 000 ans avant' }, icon: '📅' },
        { id: 'everything', label: { ar: 'كل شيء مكتوب', en: 'Everything is written', fr: 'Tout est écrit' }, icon: '📋' },
      ],
    },
    {
      id: 'mawqif',
      label: { ar: 'موقف المؤمن من القدر', en: 'Believer\'s Attitude', fr: 'Attitude du Croyant' },
      icon: '🤲',
      color: '#c9184a',
      children: [
        { id: 'rida', label: { ar: 'الرضا', en: 'Contentment', fr: 'Agrément' }, icon: '😊' },
        { id: 'sabr', label: { ar: 'الصبر', en: 'Patience', fr: 'Patience' }, icon: '💪' },
        { id: 'istirja', label: { ar: 'الاسترجاع', en: 'Saying Inna lillah', fr: 'Dire Inna lillah' }, icon: '🙏' },
        { id: 'no-blame', label: { ar: 'عدم التسخط', en: 'No resentment', fr: 'Pas de ressentiment' }, icon: '❌' },
      ],
    },
    {
      id: 'firaq',
      label: { ar: 'مذاهب الفرق في القدر', en: 'Sects on Qadar', fr: 'Sectes sur le Qadar' },
      icon: '⚠️',
      color: '#9c6644',
      children: [
        { id: 'qadariyyah', label: { ar: 'القدرية (نفاة)', en: 'Qadariyyah (Deniers)', fr: 'Qadariyyah (Négateurs)' }, icon: '🚫' },
        { id: 'jabriyyah', label: { ar: 'الجبرية (غلاة)', en: 'Jabriyyah (Extremists)', fr: 'Jabriyyah (Extrémistes)' }, icon: '⛓️' },
        { id: 'ahlussunnah', label: { ar: 'أهل السنة (الوسط)', en: 'Ahlus-Sunnah (Middle)', fr: 'Ahlus-Sunnah (Milieu)' }, icon: '✅' },
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
// AQEEDAH - Tawheed Rububiyyah (002)
// ============================================
export const tawheedRububiyyahData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'توحيد الربوبية', en: 'Tawheed Ar-Rububiyyah', fr: 'Tawheed Ar-Rububiyyah' },
  icon: '🌍',
  color: '#1e3a5f',
  children: [
    {
      id: 'definition',
      label: { ar: 'التعريف', en: 'Definition', fr: 'Définition' },
      icon: '📖',
      color: '#2d6a4f',
      children: [
        { id: 'meaning', label: { ar: 'الرب = المالك المدبر', en: 'Rabb = Master & Manager', fr: 'Rabb = Maitre et Gestionnaire' }, icon: '💡' },
        { id: 'unique', label: { ar: 'الله وحده الرب', en: 'Allah alone is Lord', fr: 'Allah seul est Seigneur' }, icon: '☝️' },
      ],
    },
    {
      id: 'pillars',
      label: { ar: 'الأركان الأربعة', en: 'Four Pillars', fr: 'Les Quatre Piliers' },
      icon: '🏛️',
      color: '#7b2cbf',
      children: [
        { id: 'khalq', label: { ar: '١. الخَلْق', en: '1. Creation', fr: '1. La Création' }, icon: '🌱' },
        { id: 'rizq', label: { ar: '٢. الرِّزْق', en: '2. Provision', fr: '2. La Subsistance' }, icon: '🍞' },
        { id: 'mulk', label: { ar: '٣. المُلْك', en: '3. Sovereignty', fr: '3. La Souveraineté' }, icon: '👑' },
        { id: 'tadbir', label: { ar: '٤. التَّدْبِير', en: '4. Management', fr: '4. La Gestion' }, icon: '⚙️' },
      ],
    },
    {
      id: 'proofs',
      label: { ar: 'الأدلة', en: 'Proofs', fr: 'Preuves' },
      icon: '📜',
      color: '#0891b2',
      children: [
        { id: 'quran', label: { ar: '﴿اللَّهُ خَالِقُ كُلِّ شَيْءٍ﴾', en: 'Allah is Creator of all', fr: 'Allah est Créateur de tout' }, icon: '📖' },
        { id: 'fitrah', label: { ar: 'الفطرة السليمة', en: 'Natural instinct', fr: 'Instinct naturel (Fitrah)' }, icon: '❤️' },
        { id: 'aql', label: { ar: 'العقل السليم', en: 'Sound reasoning', fr: 'Raisonnement sain' }, icon: '🧠' },
      ],
    },
    {
      id: 'warning',
      label: { ar: 'تحذير مهم', en: 'Important Warning', fr: 'Avertissement Important' },
      icon: '⚠️',
      color: '#c9184a',
      children: [
        { id: 'mushrikun', label: { ar: 'المشركون أقروا بها', en: 'Mushrikun acknowledged it', fr: 'Les Mushrikun la reconnaissaient' }, icon: '❗' },
        { id: 'not-enough', label: { ar: 'لا تكفي وحدها', en: 'Not sufficient alone', fr: 'Ne suffit pas seule' }, icon: '🚫' },
        { id: 'requires', label: { ar: 'تستلزم توحيد الألوهية', en: 'Requires Uluhiyyah', fr: 'Exige le Tawheed Uluhiyyah' }, icon: '➡️' },
      ],
    },
    {
      id: 'fruits',
      label: { ar: 'ثمرات الإيمان بها', en: 'Fruits of Belief', fr: 'Fruits de cette Foi' },
      icon: '🌟',
      color: '#9c6644',
      children: [
        { id: 'tawakkul', label: { ar: 'التوكل على الله', en: 'Trust in Allah', fr: 'Confiance en Allah' }, icon: '🤲' },
        { id: 'tranquility', label: { ar: 'طمأنينة القلب', en: 'Peace of heart', fr: 'Sérénité du coeur' }, icon: '😌' },
        { id: 'gratitude', label: { ar: 'الشكر لله', en: 'Gratitude to Allah', fr: 'Gratitude envers Allah' }, icon: '🙏' },
      ],
    },
  ],
};

// ============================================
// AQEEDAH - Tawheed Uluhiyyah (003)
// ============================================
export const tawheedUluhiyyahData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'توحيد الألوهية', en: 'Tawheed Al-Uluhiyyah', fr: 'Tawheed Al-Uluhiyyah' },
  icon: '🕋',
  color: '#1e3a5f',
  children: [
    {
      id: 'definition',
      label: { ar: 'التعريف', en: 'Definition', fr: 'Définition' },
      icon: '📖',
      color: '#2d6a4f',
      children: [
        { id: 'meaning', label: { ar: 'إفراد الله بالعبادة', en: 'Worship Allah alone', fr: 'Adorer Allah seul' }, icon: '☝️' },
        { id: 'importance', label: { ar: 'أهم أنواع التوحيد', en: 'Most important type', fr: 'Type le plus important' }, icon: '⭐' },
        { id: 'mission', label: { ar: 'دعوة جميع الرسل', en: 'Call of all Messengers', fr: 'Appel de tous les Messagers' }, icon: '📢' },
      ],
    },
    {
      id: 'types-ibadah',
      label: { ar: 'أنواع العبادة', en: 'Types of Worship', fr: "Types d'Adoration" },
      icon: '🤲',
      color: '#7b2cbf',
      children: [
        { id: 'salah', label: { ar: 'الصلاة', en: 'Prayer', fr: 'Prière' }, icon: '🕌' },
        { id: 'dua', label: { ar: 'الدعاء', en: 'Supplication', fr: 'Invocation' }, icon: '🙏' },
        { id: 'dhikr', label: { ar: 'الذكر', en: 'Remembrance', fr: 'Rappel' }, icon: '📿' },
        { id: 'nidhr', label: { ar: 'النذر', en: 'Vow', fr: 'Voeu' }, icon: '📜' },
        { id: 'dhabh', label: { ar: 'الذبح', en: 'Sacrifice', fr: 'Sacrifice' }, icon: '🐑' },
        { id: 'tawakkul', label: { ar: 'التوكل', en: 'Reliance', fr: 'Confiance' }, icon: '💪' },
      ],
    },
    {
      id: 'heart-worship',
      label: { ar: 'عبادات القلب', en: 'Heart Worship', fr: 'Adorations du Coeur' },
      icon: '❤️',
      color: '#c9184a',
      children: [
        { id: 'khawf', label: { ar: 'الخوف', en: 'Fear', fr: 'Crainte' }, icon: '😰' },
        { id: 'raja', label: { ar: 'الرجاء', en: 'Hope', fr: 'Espoir' }, icon: '🌅' },
        { id: 'mahabbah', label: { ar: 'المحبة', en: 'Love', fr: 'Amour' }, icon: '💕' },
        { id: 'khushu', label: { ar: 'الخشوع', en: 'Humility', fr: 'Humilité' }, icon: '🙇' },
      ],
    },
    {
      id: 'shirk',
      label: { ar: 'نواقض التوحيد', en: 'Nullifiers', fr: 'Annulatifs' },
      icon: '🚫',
      color: '#dc2626',
      children: [
        { id: 'shirk-akbar', label: { ar: 'الشرك الأكبر', en: 'Major Shirk', fr: 'Shirk Majeur' }, icon: '❌' },
        { id: 'shirk-asghar', label: { ar: 'الشرك الأصغر', en: 'Minor Shirk', fr: 'Shirk Mineur' }, icon: '⚠️' },
        { id: 'riya', label: { ar: 'الرياء', en: 'Showing off', fr: 'Ostentation' }, icon: '👁️' },
      ],
    },
    {
      id: 'evidence',
      label: { ar: 'الدليل', en: 'Evidence', fr: 'Preuve' },
      icon: '📜',
      color: '#0891b2',
      children: [
        { id: 'ayah', label: { ar: '﴿وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ﴾', en: 'Created to worship', fr: 'Créés pour adorer' }, icon: '📖' },
        { id: 'hadith', label: { ar: 'حق الله على العباد', en: "Allah's right on servants", fr: "Droit d'Allah sur Ses serviteurs" }, icon: '🕌' },
      ],
    },
  ],
};

// ============================================
// AQEEDAH - Tawheed Asma wa Sifat (004)
// ============================================
export const tawheedAsmaSifatData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'توحيد الأسماء والصفات', en: 'Tawheed Al-Asma wa Sifat', fr: 'Tawheed des Noms et Attributs' },
  icon: '✨',
  color: '#1e3a5f',
  children: [
    {
      id: 'definition',
      label: { ar: 'التعريف', en: 'Definition', fr: 'Définition' },
      icon: '📖',
      color: '#2d6a4f',
      children: [
        { id: 'ithbat', label: { ar: 'إثبات ما أثبته الله لنفسه', en: 'Affirm what Allah affirmed', fr: "Affirmer ce qu'Allah a affirmé" }, icon: '✅' },
        { id: 'nafy', label: { ar: 'نفي ما نفاه الله عن نفسه', en: 'Negate what Allah negated', fr: "Nier ce qu'Allah a nié" }, icon: '❌' },
      ],
    },
    {
      id: 'principles',
      label: { ar: 'القواعد الأربع', en: 'Four Principles', fr: 'Quatre Règles' },
      icon: '📋',
      color: '#7b2cbf',
      children: [
        { id: 'no-tamthil', label: { ar: 'لا تمثيل', en: 'No resemblance', fr: 'Pas de ressemblance' }, icon: '1️⃣' },
        { id: 'no-takyif', label: { ar: 'لا تكييف', en: 'No asking how', fr: 'Pas de questionnement sur le comment' }, icon: '2️⃣' },
        { id: 'no-tatil', label: { ar: 'لا تعطيل', en: 'No denial', fr: 'Pas de négation' }, icon: '3️⃣' },
        { id: 'no-tahrif', label: { ar: 'لا تحريف', en: 'No distortion', fr: 'Pas de déformation' }, icon: '4️⃣' },
      ],
    },
    {
      id: 'key-verse',
      label: { ar: 'الآية الجامعة', en: 'Key Verse', fr: 'Verset Clé' },
      icon: '📖',
      color: '#0891b2',
      children: [
        { id: 'laysa', label: { ar: '﴿لَيْسَ كَمِثْلِهِ شَيْءٌ﴾', en: 'Nothing is like Him', fr: 'Rien ne Lui ressemble' }, icon: '☝️' },
        { id: 'sami-basir', label: { ar: '﴿وَهُوَ السَّمِيعُ الْبَصِيرُ﴾', en: 'He is All-Hearing, All-Seeing', fr: 'Il est Audient et Clairvoyant' }, icon: '👂' },
      ],
    },
    {
      id: 'examples',
      label: { ar: 'أمثلة الأسماء', en: 'Examples of Names', fr: 'Exemples de Noms' },
      icon: '💎',
      color: '#9c6644',
      children: [
        { id: 'rahman', label: { ar: 'الرحمن', en: 'The Most Merciful', fr: 'Le Tout Miséricordieux' }, icon: '❤️' },
        { id: 'alim', label: { ar: 'العليم', en: 'The All-Knowing', fr: "L'Omniscient" }, icon: '🧠' },
        { id: 'qadir', label: { ar: 'القدير', en: 'The All-Powerful', fr: 'Le Tout-Puissant' }, icon: '💪' },
        { id: 'hakim', label: { ar: 'الحكيم', en: 'The All-Wise', fr: 'Le Sage' }, icon: '📚' },
      ],
    },
    {
      id: 'deviant-groups',
      label: { ar: 'الفرق المنحرفة', en: 'Deviant Groups', fr: 'Groupes Déviants' },
      icon: '⚠️',
      color: '#c9184a',
      children: [
        { id: 'muattilah', label: { ar: 'المعطلة (نفاة)', en: 'Muattilah (Deniers)', fr: 'Muattilah (Négateurs)' }, icon: '🚫' },
        { id: 'mushabbihah', label: { ar: 'المشبهة (ممثلة)', en: 'Mushabbihah (Anthropomorphists)', fr: 'Mushabbihah (Anthropomorphistes)' }, icon: '👤' },
        { id: 'ahlussunnah', label: { ar: 'أهل السنة (الوسط)', en: 'Ahlus-Sunnah (Middle)', fr: 'Ahlus-Sunnah (Juste Milieu)' }, icon: '✅' },
      ],
    },
  ],
};

// ============================================
// AQEEDAH - Les Anges (005)
// ============================================
export const malaikaData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'الإيمان بالملائكة', en: 'Belief in Angels', fr: 'La Foi aux Anges' },
  icon: '👼',
  color: '#1e3a5f',
  children: [
    {
      id: 'nature',
      label: { ar: 'طبيعتهم', en: 'Their Nature', fr: 'Leur Nature' },
      icon: '✨',
      color: '#2d6a4f',
      children: [
        { id: 'light', label: { ar: 'مخلوقون من نور', en: 'Created from light', fr: 'Créés de lumière' }, icon: '💡' },
        { id: 'obey', label: { ar: 'لا يعصون الله', en: 'Never disobey Allah', fr: "N'ont jamais désobéi à Allah" }, icon: '✅' },
        { id: 'wings', label: { ar: 'لهم أجنحة', en: 'Have wings', fr: 'Ont des ailes' }, icon: '🪽' },
        { id: 'no-eat', label: { ar: 'لا يأكلون ولا يشربون', en: 'Do not eat or drink', fr: 'Ne mangent ni ne boivent' }, icon: '🚫' },
      ],
    },
    {
      id: 'named-angels',
      label: { ar: 'الملائكة المسمون', en: 'Named Angels', fr: 'Anges Nommés' },
      icon: '📜',
      color: '#7b2cbf',
      children: [
        { id: 'jibril', label: { ar: 'جبريل - الوحي', en: 'Jibril - Revelation', fr: 'Jibril - Révélation' }, icon: '📖' },
        { id: 'mikail', label: { ar: 'ميكائيل - الرزق', en: 'Mikail - Provision', fr: 'Mikail - Subsistance' }, icon: '🌧️' },
        { id: 'israfil', label: { ar: 'إسرافيل - الصور', en: 'Israfil - Trumpet', fr: 'Israfil - Trompette' }, icon: '📯' },
        { id: 'malak-mawt', label: { ar: 'ملك الموت', en: 'Angel of Death', fr: 'Ange de la Mort' }, icon: '💀' },
        { id: 'malik', label: { ar: 'مالك - خازن النار', en: 'Malik - Guardian of Hell', fr: "Malik - Gardien de l'Enfer" }, icon: '🔥' },
      ],
    },
    {
      id: 'functions',
      label: { ar: 'وظائفهم', en: 'Their Functions', fr: 'Leurs Fonctions' },
      icon: '⚙️',
      color: '#0891b2',
      children: [
        { id: 'throne', label: { ar: 'حملة العرش', en: 'Carriers of Throne', fr: 'Porteurs du Trône' }, icon: '🏛️' },
        { id: 'scribes', label: { ar: 'الكتبة', en: 'Scribes', fr: 'Scribes' }, icon: '✍️' },
        { id: 'guardians', label: { ar: 'الحفظة', en: 'Guardians', fr: 'Gardiens' }, icon: '🛡️' },
        { id: 'grave', label: { ar: 'منكر ونكير', en: 'Munkar & Nakir', fr: 'Munkar et Nakir' }, icon: '⚰️' },
        { id: 'mountains', label: { ar: 'ملك الجبال', en: 'Angel of Mountains', fr: 'Ange des Montagnes' }, icon: '🏔️' },
      ],
    },
    {
      id: 'effects',
      label: { ar: 'آثار الإيمان بهم', en: 'Effects of Belief', fr: 'Effets de cette Foi' },
      icon: '🌟',
      color: '#9c6644',
      children: [
        { id: 'awareness', label: { ar: 'مراقبة النفس', en: 'Self-awareness', fr: 'Conscience de soi' }, icon: '👁️' },
        { id: 'love', label: { ar: 'محبتهم', en: 'Love for them', fr: 'Les aimer' }, icon: '❤️' },
        { id: 'gratitude', label: { ar: 'شكر الله', en: 'Gratitude to Allah', fr: 'Gratitude envers Allah' }, icon: '🙏' },
      ],
    },
  ],
};

// ============================================
// AQEEDAH - Les Livres (006)
// ============================================
export const kutubData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'الإيمان بالكتب', en: 'Belief in the Books', fr: 'La Foi aux Livres' },
  icon: '📚',
  color: '#1e3a5f',
  children: [
    {
      id: 'definition',
      label: { ar: 'التعريف', en: 'Definition', fr: 'Définition' },
      icon: '📖',
      color: '#2d6a4f',
      children: [
        { id: 'meaning', label: { ar: 'كلام الله المنزل', en: "Allah's revealed speech", fr: "Parole d'Allah révélée" }, icon: '💬' },
        { id: 'guidance', label: { ar: 'هداية للبشر', en: 'Guidance for mankind', fr: "Guide pour l'humanité" }, icon: '🧭' },
      ],
    },
    {
      id: 'named-books',
      label: { ar: 'الكتب المسماة', en: 'Named Books', fr: 'Livres Nommés' },
      icon: '📜',
      color: '#7b2cbf',
      children: [
        { id: 'quran', label: { ar: 'القرآن - محمد ﷺ', en: 'Quran - Muhammad ﷺ', fr: 'Coran - Muhammad ﷺ' }, icon: '📗' },
        { id: 'tawrat', label: { ar: 'التوراة - موسى', en: 'Torah - Musa', fr: 'Torah - Moussa' }, icon: '📘' },
        { id: 'injil', label: { ar: 'الإنجيل - عيسى', en: 'Gospel - Isa', fr: 'Évangile - Issa' }, icon: '📕' },
        { id: 'zabur', label: { ar: 'الزبور - داود', en: 'Psalms - Dawud', fr: 'Psaumes - Dawoud' }, icon: '📙' },
        { id: 'suhuf', label: { ar: 'صحف إبراهيم وموسى', en: 'Scriptures of Ibrahim & Musa', fr: "Feuillets d'Ibrahim et Moussa" }, icon: '📄' },
      ],
    },
    {
      id: 'quran-special',
      label: { ar: 'خصائص القرآن', en: 'Quran Distinctions', fr: 'Particularités du Coran' },
      icon: '⭐',
      color: '#0891b2',
      children: [
        { id: 'final', label: { ar: 'الكتاب الخاتم', en: 'Final Book', fr: 'Livre Final' }, icon: '🔚' },
        { id: 'preserved', label: { ar: 'محفوظ من التحريف', en: 'Preserved from distortion', fr: 'Préservé de toute falsification' }, icon: '🛡️' },
        { id: 'abrogates', label: { ar: 'ناسخ لما قبله', en: 'Abrogates previous books', fr: 'Abroge les livres précédents' }, icon: '✅' },
        { id: 'universal', label: { ar: 'للناس كافة', en: 'For all mankind', fr: "Pour toute l'humanité" }, icon: '🌍' },
      ],
    },
    {
      id: 'belief-content',
      label: { ar: 'ما يجب الإيمان به', en: 'What to Believe', fr: "Ce qu'il faut croire" },
      icon: '✅',
      color: '#9c6644',
      children: [
        { id: 'from-allah', label: { ar: 'أنها من عند الله', en: 'They are from Allah', fr: "Ils viennent d'Allah" }, icon: '☝️' },
        { id: 'named', label: { ar: 'الإيمان بما سُمي', en: 'Believe in named ones', fr: 'Croire aux nommés' }, icon: '📝' },
        { id: 'general', label: { ar: 'الإيمان بما لم يُسمَّ', en: 'Believe in unnamed ones', fr: 'Croire aux non-nommés' }, icon: '📦' },
      ],
    },
  ],
};

// ============================================
// AQEEDAH - Les Prophètes (007)
// ============================================
export const rusulData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'الإيمان بالرسل', en: 'Belief in the Messengers', fr: 'La Foi aux Messagers' },
  icon: '🕌',
  color: '#1e3a5f',
  children: [
    {
      id: 'difference',
      label: { ar: 'الفرق', en: 'Difference', fr: 'Différence' },
      icon: '📖',
      color: '#2d6a4f',
      children: [
        { id: 'nabi', label: { ar: 'النبي: أوحي إليه', en: 'Prophet: Received revelation', fr: 'Prophète : A reçu révélation' }, icon: '💭' },
        { id: 'rasul', label: { ar: 'الرسول: أوحي وأُمر بالتبليغ', en: 'Messenger: Commanded to convey', fr: 'Messager : Ordonné de transmettre' }, icon: '📢' },
      ],
    },
    {
      id: 'ulul-azm',
      label: { ar: 'أولو العزم', en: 'Ulul-Azm', fr: 'Les Ulul-Azm' },
      icon: '⭐',
      color: '#7b2cbf',
      children: [
        { id: 'nuh', label: { ar: 'نوح عليه السلام', en: 'Nuh (Noah)', fr: 'Nouh (Noé)' }, icon: '🚢' },
        { id: 'ibrahim', label: { ar: 'إبراهيم عليه السلام', en: 'Ibrahim (Abraham)', fr: 'Ibrahim (Abraham)' }, icon: '🔥' },
        { id: 'musa', label: { ar: 'موسى عليه السلام', en: 'Musa (Moses)', fr: 'Moussa (Moïse)' }, icon: '🌊' },
        { id: 'isa', label: { ar: 'عيسى عليه السلام', en: 'Isa (Jesus)', fr: 'Issa (Jésus)' }, icon: '✝️' },
        { id: 'muhammad', label: { ar: 'محمد ﷺ', en: 'Muhammad ﷺ', fr: 'Muhammad ﷺ' }, icon: '☪️' },
      ],
    },
    {
      id: 'message',
      label: { ar: 'رسالتهم الواحدة', en: 'Their One Message', fr: 'Leur Message Unique' },
      icon: '☝️',
      color: '#0891b2',
      children: [
        { id: 'tawhid', label: { ar: 'التوحيد', en: 'Tawhid', fr: 'Tawhid' }, icon: '🕋' },
        { id: 'ibadah', label: { ar: 'عبادة الله وحده', en: 'Worship Allah alone', fr: 'Adorer Allah seul' }, icon: '🤲' },
        { id: 'reject-taghut', label: { ar: 'اجتناب الطاغوت', en: 'Reject false gods', fr: 'Rejeter les fausses divinités' }, icon: '🚫' },
      ],
    },
    {
      id: 'traits',
      label: { ar: 'صفاتهم', en: 'Their Traits', fr: 'Leurs Qualités' },
      icon: '💎',
      color: '#9c6644',
      children: [
        { id: 'sidq', label: { ar: 'الصدق', en: 'Truthfulness', fr: 'Véracité' }, icon: '✅' },
        { id: 'amanah', label: { ar: 'الأمانة', en: 'Trustworthiness', fr: 'Fidélité' }, icon: '🔐' },
        { id: 'tabligh', label: { ar: 'التبليغ', en: 'Conveying', fr: 'Transmission' }, icon: '📢' },
        { id: 'fatanah', label: { ar: 'الفطانة', en: 'Wisdom', fr: 'Sagesse' }, icon: '🧠' },
      ],
    },
    {
      id: 'seal',
      label: { ar: 'خاتم النبيين', en: 'Seal of Prophets', fr: 'Sceau des Prophètes' },
      icon: '🔚',
      color: '#c9184a',
      children: [
        { id: 'last', label: { ar: 'لا نبي بعده ﷺ', en: 'No prophet after him ﷺ', fr: 'Aucun prophète après lui ﷺ' }, icon: '🏁' },
        { id: 'universal', label: { ar: 'رسالته عالمية', en: 'His message is universal', fr: 'Son message est universel' }, icon: '🌍' },
      ],
    },
  ],
};

// ============================================
// AQEEDAH - Le Jour Dernier (008)
// ============================================
export const yawmAkhirData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'الإيمان باليوم الآخر', en: 'Belief in the Last Day', fr: 'La Foi au Jour Dernier' },
  icon: '⚖️',
  color: '#1e3a5f',
  children: [
    {
      id: 'names',
      label: { ar: 'أسماء هذا اليوم', en: 'Names of This Day', fr: 'Noms de ce Jour' },
      icon: '📜',
      color: '#2d6a4f',
      children: [
        { id: 'qiyamah', label: { ar: 'يوم القيامة', en: 'Day of Resurrection', fr: 'Jour de la Résurrection' }, icon: '🌅' },
        { id: 'hisab', label: { ar: 'يوم الحساب', en: 'Day of Reckoning', fr: 'Jour du Compte' }, icon: '📋' },
        { id: 'din', label: { ar: 'يوم الدين', en: 'Day of Recompense', fr: 'Jour de la Rétribution' }, icon: '⚖️' },
        { id: 'saa', label: { ar: 'الساعة', en: 'The Hour', fr: "L'Heure" }, icon: '⏰' },
      ],
    },
    {
      id: 'stages',
      label: { ar: 'مراحل اليوم الآخر', en: 'Stages', fr: 'Étapes' },
      icon: '📊',
      color: '#7b2cbf',
      children: [
        { id: 'death', label: { ar: 'الموت', en: 'Death', fr: 'La Mort' }, icon: '💀' },
        { id: 'grave', label: { ar: 'القبر', en: 'The Grave', fr: 'La Tombe' }, icon: '⚰️' },
        { id: 'bath', label: { ar: 'البعث', en: 'Resurrection', fr: 'Résurrection' }, icon: '🌱' },
        { id: 'hashr', label: { ar: 'الحشر', en: 'Gathering', fr: 'Rassemblement' }, icon: '👥' },
        { id: 'hisab-stage', label: { ar: 'الحساب', en: 'Reckoning', fr: 'Jugement' }, icon: '📖' },
        { id: 'sirat', label: { ar: 'الصراط', en: 'The Bridge', fr: 'Le Pont' }, icon: '🌉' },
      ],
    },
    {
      id: 'grave-trial',
      label: { ar: 'فتنة القبر', en: 'Trial of the Grave', fr: 'Épreuve de la Tombe' },
      icon: '❓',
      color: '#0891b2',
      children: [
        { id: 'questions', label: { ar: 'الأسئلة الثلاثة', en: 'Three Questions', fr: 'Trois Questions' }, icon: '3️⃣' },
        { id: 'lord', label: { ar: 'من ربك؟', en: 'Who is your Lord?', fr: 'Qui est ton Seigneur ?' }, icon: '☝️' },
        { id: 'religion', label: { ar: 'ما دينك؟', en: 'What is your religion?', fr: 'Quelle est ta religion ?' }, icon: '☪️' },
        { id: 'prophet', label: { ar: 'من نبيك؟', en: 'Who is your prophet?', fr: 'Qui est ton prophète ?' }, icon: '🕌' },
      ],
    },
    {
      id: 'outcomes',
      label: { ar: 'المصير', en: 'Outcomes', fr: 'Destinées' },
      icon: '🎯',
      color: '#c9184a',
      children: [
        { id: 'jannah', label: { ar: 'الجنة', en: 'Paradise', fr: 'Paradis' }, icon: '🌴' },
        { id: 'nar', label: { ar: 'النار', en: 'Hellfire', fr: 'Enfer' }, icon: '🔥' },
      ],
    },
    {
      id: 'effects',
      label: { ar: 'آثار الإيمان', en: 'Effects of Belief', fr: 'Effets de cette Foi' },
      icon: '🌟',
      color: '#9c6644',
      children: [
        { id: 'fear', label: { ar: 'الخوف من الله', en: 'Fear of Allah', fr: "Crainte d'Allah" }, icon: '😰' },
        { id: 'hope', label: { ar: 'الرجاء في رحمته', en: 'Hope in His mercy', fr: 'Espoir en Sa miséricorde' }, icon: '🌅' },
        { id: 'prepare', label: { ar: 'الاستعداد بالعمل', en: 'Prepare with deeds', fr: 'Se préparer par les actes' }, icon: '💪' },
        { id: 'patience', label: { ar: 'الصبر على البلاء', en: 'Patience in trials', fr: 'Patience dans les épreuves' }, icon: '🙏' },
      ],
    },
  ],
};

// ============================================
// SIYAM - Leçon 001: Introduction au Jeûne
// ============================================
export const siyamIntroductionData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'الصيام', en: 'Fasting (Siyam)', fr: 'Le Jeûne (Siyam)' },
  icon: '🌙',
  color: '#1e3a5f',
  children: [
    {
      id: 'definition',
      label: { ar: 'التعريف', en: 'Definition', fr: 'Définition' },
      icon: '📖',
      color: '#2d6a4f',
      children: [
        { id: 'linguistic', label: { ar: 'لغة: الإمساك', en: 'Linguistically: Abstention', fr: 'Linguistique: Abstention' }, icon: '📝' },
        { id: 'legal', label: { ar: 'شرعاً: الإمساك عن المفطرات', en: 'Legally: Abstaining from invalidators', fr: 'Légal: Abstention des invalidateurs' }, icon: '⚖️' },
        { id: 'timing', label: { ar: 'من الفجر إلى الغروب', en: 'From dawn to sunset', fr: 'De l\'aube au coucher' }, icon: '🌅' },
        { id: 'intention', label: { ar: 'بنية', en: 'With intention', fr: 'Avec intention' }, icon: '❤️' },
      ],
    },
    {
      id: 'prescription',
      label: { ar: 'المشروعية', en: 'Prescription', fr: 'Prescription' },
      icon: '📜',
      color: '#7b2cbf',
      children: [
        { id: 'quran', label: { ar: 'القرآن: البقرة 183', en: 'Quran: Al-Baqara 183', fr: 'Coran: Al-Baqara 183' }, icon: '📖' },
        { id: 'sunnah', label: { ar: 'السنة: حديث أركان الإسلام', en: 'Sunnah: Pillars hadith', fr: 'Sunna: Hadith des piliers' }, icon: '📚' },
        { id: 'ijma', label: { ar: 'الإجماع', en: 'Consensus', fr: 'Consensus (Ijma\')' }, icon: '🤝' },
      ],
    },
    {
      id: 'wisdom',
      label: { ar: 'الحكم والفضائل', en: 'Wisdom & Virtues', fr: 'Sagesses & Vertus' },
      icon: '✨',
      color: '#c9184a',
      children: [
        { id: 'taqwa', label: { ar: 'التقوى', en: 'Piety (Taqwa)', fr: 'Piété (Taqwa)' }, icon: '🙏' },
        { id: 'purify', label: { ar: 'تزكية النفس', en: 'Soul purification', fr: 'Purification de l\'âme' }, icon: '💎' },
        { id: 'empathy', label: { ar: 'الشعور بالفقراء', en: 'Empathy for poor', fr: 'Empathie envers les pauvres' }, icon: '❤️' },
        { id: 'forgiveness', label: { ar: 'غفران الذنوب', en: 'Sins forgiven', fr: 'Pardon des péchés' }, icon: '🌟' },
      ],
    },
    {
      id: 'types',
      label: { ar: 'أنواع الصيام', en: 'Types of Fasting', fr: 'Types de Jeûne' },
      icon: '📋',
      color: '#9c6644',
      children: [
        { id: 'wajib', label: { ar: 'واجب: رمضان، القضاء، النذر', en: 'Obligatory: Ramadan, make-up, vow', fr: 'Obligatoire: Ramadan, rattrapage, vœu' }, icon: '⭐' },
        { id: 'mustahab', label: { ar: 'مستحب: الإثنين، الخميس، عرفة', en: 'Recommended: Mon/Thu, Arafah', fr: 'Recommandé: Lun/Jeu, Arafah' }, icon: '💚' },
        { id: 'haram', label: { ar: 'حرام: العيدين', en: 'Forbidden: Two Eids', fr: 'Interdit: Les deux Eids' }, icon: '🚫' },
        { id: 'makruh', label: { ar: 'مكروه: الجمعة منفرداً', en: 'Disliked: Friday alone', fr: 'Détestable: Vendredi seul' }, icon: '⚠️' },
      ],
    },
  ],
};

// ============================================
// SIYAM - Leçon 002: Conditions d'Obligation
// ============================================
export const siyamConditionsData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'شروط وجوب الصيام', en: 'Conditions of Obligation', fr: 'Conditions d\'Obligation' },
  icon: '📋',
  color: '#1e3a5f',
  children: [
    {
      id: 'islam',
      label: { ar: 'الإسلام', en: 'Islam', fr: 'L\'Islam' },
      icon: '☪️',
      color: '#2d6a4f',
      children: [
        { id: 'muslim-only', label: { ar: 'المسلم فقط', en: 'Muslim only', fr: 'Musulman uniquement' }, icon: '✅' },
        { id: 'conversion', label: { ar: 'الإسلام يجب ما قبله', en: 'Islam erases what preceded', fr: 'L\'Islam efface ce qui précède' }, icon: '🔄' },
      ],
    },
    {
      id: 'puberty',
      label: { ar: 'البلوغ', en: 'Puberty', fr: 'La Puberté' },
      icon: '👤',
      color: '#7b2cbf',
      children: [
        { id: 'signs-male', label: { ar: 'الاحتلام، الشعر، 15 سنة', en: 'Wet dream, hair, 15 years', fr: 'Éjaculation, poils, 15 ans' }, icon: '👦' },
        { id: 'signs-female', label: { ar: 'الحيض، الشعر، 15 سنة', en: 'Menses, hair, 15 years', fr: 'Menstrues, poils, 15 ans' }, icon: '👧' },
        { id: 'child-training', label: { ar: 'تعويد الصبي مستحب', en: 'Training child recommended', fr: 'Habituer l\'enfant recommandé' }, icon: '📚' },
      ],
    },
    {
      id: 'reason',
      label: { ar: 'العقل', en: 'Reason', fr: 'La Raison' },
      icon: '🧠',
      color: '#c9184a',
      children: [
        { id: 'insane', label: { ar: 'المجنون: لا قضاء', en: 'Insane: no make-up', fr: 'Fou: pas de rattrapage' }, icon: '❌' },
        { id: 'unconscious', label: { ar: 'المغمى عليه', en: 'Unconscious', fr: 'Inconscient' }, icon: '😴' },
      ],
    },
    {
      id: 'ability',
      label: { ar: 'القدرة', en: 'Ability', fr: 'La Capacité' },
      icon: '💪',
      color: '#9c6644',
      children: [
        { id: 'sick', label: { ar: 'المريض: قضاء', en: 'Sick: make-up', fr: 'Malade: rattrapage' }, icon: '🤒' },
        { id: 'traveler', label: { ar: 'المسافر: قضاء', en: 'Traveler: make-up', fr: 'Voyageur: rattrapage' }, icon: '✈️' },
        { id: 'pregnant', label: { ar: 'الحامل والمرضع: قضاء', en: 'Pregnant/nursing: make-up', fr: 'Enceinte/allaitante: rattrapage' }, icon: '🤰' },
        { id: 'elderly', label: { ar: 'الشيخ الكبير: فدية', en: 'Elderly: fidya', fr: 'Vieillard: fidya' }, icon: '👴' },
      ],
    },
    {
      id: 'residence',
      label: { ar: 'الإقامة', en: 'Residence', fr: 'La Résidence' },
      icon: '🏠',
      color: '#0077b6',
      children: [
        { id: 'travel-choice', label: { ar: 'المسافر مخير', en: 'Traveler has choice', fr: 'Voyageur a le choix' }, icon: '🔀' },
        { id: 'maliki-view', label: { ar: 'المالكية: الصوم أفضل', en: 'Maliki: fasting better', fr: 'Malikite: jeûner préférable' }, icon: '🟡' },
      ],
    },
    {
      id: 'no-impediment',
      label: { ar: 'عدم الموانع', en: 'No Impediments', fr: 'Absence d\'Empêchements' },
      icon: '🚫',
      color: '#d00000',
      children: [
        { id: 'menses', label: { ar: 'الحيض: حرام + قضاء', en: 'Menses: forbidden + make-up', fr: 'Menstrues: interdit + rattrapage' }, icon: '🔴' },
        { id: 'postpartum', label: { ar: 'النفاس: حرام + قضاء', en: 'Postpartum: forbidden + make-up', fr: 'Lochies: interdit + rattrapage' }, icon: '🔴' },
      ],
    },
  ],
};

// ============================================
// HAJJ - Introduction (lesson-001)
// ============================================
export const hajjIntroductionData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'مقدمة في الحج', en: 'Introduction to Hajj', fr: 'Introduction au Hajj' },
  icon: '🕋',
  color: '#1e3a5f',
  children: [
    {
      id: 'definition',
      label: { ar: 'تعريف الحج', en: 'Definition of Hajj', fr: 'Définition du Hajj' },
      icon: '📖',
      color: '#2d6a4f',
      children: [
        { id: 'linguistic', label: { ar: 'لغة: القصد إلى معظم', en: 'Linguistic: Intent to venerated', fr: 'Linguistique: Intention vers vénéré' }, icon: '📚' },
        { id: 'technical', label: { ar: 'اصطلاحا: قصد البيت الحرام', en: 'Technical: Intent to Sacred House', fr: 'Technique: Intention vers Maison Sacrée' }, icon: '📜' },
      ],
    },
    {
      id: 'pillar',
      label: { ar: 'الركن الخامس', en: 'Fifth Pillar', fr: 'Cinquième Pilier' },
      icon: '🏛️',
      color: '#7b2cbf',
      children: [
        { id: 'shahada', label: { ar: 'الشهادة', en: 'Shahada', fr: 'Shahada' }, icon: '1️⃣' },
        { id: 'salat', label: { ar: 'الصلاة', en: 'Salat', fr: 'Salat' }, icon: '2️⃣' },
        { id: 'zakat', label: { ar: 'الزكاة', en: 'Zakat', fr: 'Zakat' }, icon: '3️⃣' },
        { id: 'sawm', label: { ar: 'الصيام', en: 'Sawm', fr: 'Sawm' }, icon: '4️⃣' },
        { id: 'hajj', label: { ar: 'الحج ⭐', en: 'Hajj ⭐', fr: 'Hajj ⭐' }, icon: '5️⃣' },
      ],
    },
    {
      id: 'uniqueness',
      label: { ar: 'ما يميز الحج', en: 'Uniqueness of Hajj', fr: 'Unicité du Hajj' },
      icon: '✨',
      color: '#c9184a',
      children: [
        { id: 'body', label: { ar: 'عبادة بدنية', en: 'Bodily worship', fr: 'Adoration corporelle' }, icon: '🚶' },
        { id: 'wealth', label: { ar: 'عبادة مالية', en: 'Financial worship', fr: 'Adoration financière' }, icon: '💰' },
        { id: 'heart', label: { ar: 'عبادة قلبية', en: 'Heart worship', fr: 'Adoration du cœur' }, icon: '❤️' },
        { id: 'unity', label: { ar: 'وحدة الأمة', en: 'Unity of Ummah', fr: 'Unité de la Oumma' }, icon: '🤝' },
      ],
    },
    {
      id: 'vocabulary',
      label: { ar: 'مصطلحات الحج', en: 'Hajj Vocabulary', fr: 'Vocabulaire du Hajj' },
      icon: '📖',
      color: '#0891b2',
      children: [
        { id: 'manasik', label: { ar: 'المناسك', en: 'Manasik (Rites)', fr: 'Manasik (Rites)' }, icon: '📋' },
        { id: 'ihram', label: { ar: 'الإحرام', en: 'Ihram', fr: 'Ihram' }, icon: '🧕' },
        { id: 'tawaf', label: { ar: 'الطواف', en: 'Tawaf', fr: 'Tawaf' }, icon: '🔄' },
        { id: 'sai', label: { ar: 'السعي', en: "Sa'i", fr: "Sa'i" }, icon: '🏃' },
        { id: 'wuquf', label: { ar: 'الوقوف', en: 'Wuquf', fr: 'Wuquf' }, icon: '⛰️' },
      ],
    },
    {
      id: 'virtues',
      label: { ar: 'فضائل الحج', en: 'Virtues of Hajj', fr: 'Mérites du Hajj' },
      icon: '🌟',
      color: '#9c6644',
      children: [
        { id: 'sins-erased', label: { ar: 'محو الذنوب', en: 'Sins erased', fr: 'Péchés effacés' }, icon: '🧹' },
        { id: 'paradise', label: { ar: 'الجنة جزاؤه', en: 'Paradise reward', fr: 'Paradis en récompense' }, icon: '🏞️' },
        { id: 'ibrahim-call', label: { ar: 'إجابة نداء إبراهيم', en: "Answer Ibrahim's call", fr: "Réponse à l'appel d'Ibrahim" }, icon: '📢' },
      ],
    },
  ],
};

// ============================================
// HAJJ - Conditions d'Obligation (lesson-002)
// ============================================
export const hajjConditionsData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'شروط وجوب الحج', en: 'Conditions of Obligation', fr: "Conditions d'Obligation" },
  icon: '📋',
  color: '#1e3a5f',
  children: [
    {
      id: 'islam',
      label: { ar: 'الإسلام', en: 'Islam', fr: "L'Islam" },
      icon: '☪️',
      color: '#2d6a4f',
      children: [
        { id: 'muslim-only', label: { ar: 'المسلم فقط', en: 'Muslim only', fr: 'Musulman uniquement' }, icon: '✅' },
        { id: 'convert', label: { ar: 'الإسلام يجب ما قبله', en: 'Islam erases past', fr: "L'Islam efface le passé" }, icon: '🔄' },
      ],
    },
    {
      id: 'puberty',
      label: { ar: 'البلوغ', en: 'Puberty', fr: 'La Puberté' },
      icon: '👤',
      color: '#7b2cbf',
      children: [
        { id: 'child-hajj', label: { ar: 'حج الصبي: نفل', en: 'Child Hajj: voluntary', fr: "Hajj enfant: surérogatoire" }, icon: '👦' },
        { id: 'must-redo', label: { ar: 'يعيده بعد البلوغ', en: 'Must redo after puberty', fr: 'Doit refaire après puberté' }, icon: '🔁' },
      ],
    },
    {
      id: 'reason',
      label: { ar: 'العقل', en: 'Reason', fr: 'La Raison' },
      icon: '🧠',
      color: '#c9184a',
      children: [
        { id: 'insane', label: { ar: 'المجنون: لا حج عليه', en: 'Insane: no Hajj', fr: 'Fou: pas de Hajj' }, icon: '❌' },
        { id: 'mentally-ill', label: { ar: 'فاقد العقل معذور', en: 'Mentally ill excused', fr: 'Malade mental excusé' }, icon: '🏥' },
      ],
    },
    {
      id: 'freedom',
      label: { ar: 'الحرية', en: 'Freedom', fr: 'La Liberté' },
      icon: '🔓',
      color: '#0891b2',
      children: [
        { id: 'slave', label: { ar: 'العبد: لا يجب عليه', en: 'Slave: not obligatory', fr: 'Esclave: pas obligatoire' }, icon: '⛓️' },
        { id: 'if-hajj', label: { ar: 'لو حج: يعيده حرا', en: 'If Hajj: redo when free', fr: 'Si Hajj: refaire libre' }, icon: '🔄' },
      ],
    },
    {
      id: 'istita',
      label: { ar: 'الاستطاعة', en: 'Istita\'a (Ability)', fr: "L'Istita'a (Capacité)" },
      icon: '💪',
      color: '#9c6644',
      children: [
        { id: 'financial', label: { ar: 'مالية: الزاد والراحلة', en: 'Financial: provision & mount', fr: 'Financière: provisions & monture' }, icon: '💰' },
        { id: 'physical', label: { ar: 'بدنية: القدرة على السفر', en: 'Physical: able to travel', fr: 'Physique: capacité de voyager' }, icon: '🚶' },
        { id: 'security', label: { ar: 'أمن الطريق', en: 'Road safety', fr: 'Sécurité du chemin' }, icon: '🛡️' },
        { id: 'time', label: { ar: 'سعة الوقت', en: 'Sufficient time', fr: 'Temps suffisant' }, icon: '⏰' },
      ],
    },
    {
      id: 'woman',
      label: { ar: 'شرط المرأة', en: "Woman's Condition", fr: 'Condition de la Femme' },
      icon: '👩',
      color: '#d00000',
      children: [
        { id: 'mahram', label: { ar: 'المحرم', en: 'Mahram', fr: 'Mahram' }, icon: '👨‍👩‍👧' },
        { id: 'maliki-view', label: { ar: 'المالكية: رفقة مأمونة', en: 'Maliki: safe company', fr: 'Malikite: compagnie sûre' }, icon: '🟡' },
        { id: 'jumhur', label: { ar: 'الجمهور: محرم لازم', en: 'Majority: Mahram required', fr: 'Majorité: Mahram obligatoire' }, icon: '⚖️' },
      ],
    },
  ],
};

// ============================================
// HISTORY - Les 4 Grands Imams (سلسلة الأسانيد)
// ============================================
export const asanidChainData: MindMapDataMultiLang = {
  id: 'rasul',
  label: { ar: 'الرَّسُولُ ﷺ', en: 'The Prophet ﷺ', fr: 'Le Prophète ﷺ' },
  icon: '☪️',
  color: '#1e3a5f',
  children: [
    {
      id: 'ibn-umar',
      label: { ar: 'ابن عمر', en: 'Ibn Umar', fr: 'Ibn Omar' },
      icon: '🌟',
      color: '#059669',
      children: [
        {
          id: 'nafi',
          label: { ar: 'نَافِع', en: "Nāfi'", fr: "Nāfi'" },
          icon: '📚',
          color: '#0891b2',
          children: [
            {
              id: 'malik-nafi',
              label: { ar: 'مَالِك', en: 'Mālik', fr: 'Mālik' },
              icon: '🟡',
              color: '#eab308',
            },
            {
              id: 'abu-hanifa-nafi',
              label: { ar: 'أَبُو حَنِيفَة', en: 'Abū Ḥanīfa', fr: 'Abū Ḥanīfa' },
              icon: '🟢',
              color: '#22c55e',
            },
          ],
        },
      ],
    },
    {
      id: 'ibn-abbas',
      label: { ar: 'ابن عباس', en: 'Ibn Abbas', fr: 'Ibn Abbas' },
      icon: '🌟',
      color: '#059669',
      children: [
        {
          id: 'ata',
          label: { ar: 'عَطَاء', en: "'Aṭā'", fr: "'Aṭā'" },
          icon: '📚',
          color: '#0891b2',
          children: [
            {
              id: 'abu-hanifa-ata',
              label: { ar: 'أَبُو حَنِيفَة', en: 'Abū Ḥanīfa', fr: 'Abū Ḥanīfa' },
              icon: '🟢',
              color: '#22c55e',
            },
          ],
        },
      ],
    },
    {
      id: 'aisha',
      label: { ar: 'عائشة', en: 'Aisha', fr: 'Aïcha' },
      icon: '🌟',
      color: '#059669',
      children: [
        {
          id: 'urwa',
          label: { ar: 'عروة', en: 'Urwa', fr: 'Urwa' },
          icon: '📚',
          color: '#0891b2',
          children: [
            {
              id: 'zuhri',
              label: { ar: 'الزُّهْرِي', en: 'Al-Zuhrī', fr: 'Al-Zuhrī' },
              icon: '📜',
              color: '#7c3aed',
              children: [
                {
                  id: 'malik-zuhri',
                  label: { ar: 'مَالِك', en: 'Mālik', fr: 'Mālik' },
                  icon: '🟡',
                  color: '#eab308',
                },
                {
                  id: 'sufyan',
                  label: { ar: 'سُفْيَان', en: 'Sufyān', fr: 'Sufyān' },
                  icon: '📖',
                  color: '#7c3aed',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// Chain from Imams - Continuation
export const imamsChainData: MindMapDataMultiLang = {
  id: 'imams-root',
  label: { ar: 'سلسلة الأئمة', en: 'Chain of Imams', fr: 'Chaîne des Imams' },
  icon: '🔗',
  color: '#1e3a5f',
  children: [
    {
      id: 'malik-imam',
      label: { ar: 'مَالِك', en: 'Mālik', fr: 'Mālik' },
      icon: '🟡',
      color: '#eab308',
      children: [
        {
          id: 'shafii-malik',
          label: { ar: 'الشَّافِعِي', en: "Al-Shāfi'ī", fr: "Al-Shāfi'ī" },
          icon: '🔵',
          color: '#3b82f6',
          children: [
            {
              id: 'ahmad',
              label: { ar: 'أَحْمَد', en: 'Aḥmad', fr: 'Aḥmad' },
              icon: '🟣',
              color: '#a855f7',
            },
          ],
        },
      ],
    },
    {
      id: 'abu-hanifa-imam',
      label: { ar: 'أَبُو حَنِيفَة', en: 'Abū Ḥanīfa', fr: 'Abū Ḥanīfa' },
      icon: '🟢',
      color: '#22c55e',
      children: [
        {
          id: 'shaybani',
          label: { ar: 'الشَّيْبَانِي', en: 'Al-Shaybānī', fr: 'Al-Shaybānī' },
          icon: '📚',
          color: '#16a34a',
          children: [
            {
              id: 'shafii-shaybani',
              label: { ar: 'الشَّافِعِي', en: "Al-Shāfi'ī", fr: "Al-Shāfi'ī" },
              icon: '🔵',
              color: '#3b82f6',
            },
          ],
        },
      ],
    },
  ],
};

// ============================================
// GENERATIONAL CHAIN DATA for timeline component
// Données pour le composant de chaîne générationnelle
// Format compatible avec GenerationalChain component
// ============================================
import type { GenerationalChainData } from '@/components/mindmap/GenerationalChain';

export const generationalChainData: GenerationalChainData = {
  title: 'Generational Chain of Imams',
  titleAr: 'التسلسل الجيلي للأئمة الأربعة',
  nodes: [
    {
      id: 'abu-hanifa',
      name: 'Abū Ḥanīfa',
      nameAr: 'أَبُو حَنِيفَة',
      dates: '80 - 150 هـ',
      color: '#22c55e',
      icon: '🟢',
    },
    {
      id: 'malik',
      name: 'Mālik',
      nameAr: 'مَالِك',
      dates: '93 - 179 هـ',
      color: '#eab308',
      icon: '🟡',
    },
    {
      id: 'shaybani',
      name: 'Al-Shaybānī',
      nameAr: 'الشَّيْبَانِي',
      dates: '132 - 189 هـ',
      color: '#16a34a',
      icon: '📚',
      note: 'Student of Abū Ḥanīfa',
      noteAr: 'تلميذ أبي حنيفة',
    },
    {
      id: 'shafii',
      name: "Al-Shāfi'ī",
      nameAr: 'الشَّافِعِي',
      dates: '150 - 204 هـ',
      color: '#3b82f6',
      icon: '🔵',
    },
    {
      id: 'ahmad',
      name: 'Aḥmad',
      nameAr: 'أَحْمَد',
      dates: '164 - 241 هـ',
      color: '#a855f7',
      icon: '🟣',
    },
  ],
  links: [
    { from: 'abu-hanifa', to: 'shaybani', label: 'Taught', labelAr: 'علّم' },
    { from: 'abu-hanifa', to: 'malik', label: 'Met in Medina', labelAr: 'التقى في المدينة' },
    { from: 'malik', to: 'shafii', label: '9 years study', labelAr: '٩ سنوات دراسة' },
    { from: 'shaybani', to: 'shafii', label: 'Studied Hanafi fiqh', labelAr: 'درس فقه الحنفية' },
    { from: 'shafii', to: 'ahmad', label: '4 years study', labelAr: '٤ سنوات دراسة' },
  ],
};

export function getGenerationalChainData(): GenerationalChainData {
  return generationalChainData;
}

// ============================================
// METHOD FLOWCHART DATA for legal methodology
// Données pour les schémas de méthodes juridiques
// ============================================
import type { MethodFlowchartData } from '@/components/mindmap/MethodFlowchart';

export const hanafiMethodData: MethodFlowchartData = {
  title: 'Hanafi Method',
  titleAr: 'منهج الحنفية',
  titleFr: 'Méthode Hanafite',
  school: 'hanafi',
  steps: [
    { id: 'question', label: 'Legal Question', labelAr: 'المسألة الفقهية', labelFr: 'Question Juridique' },
    { id: 'quran', label: 'The Quran', labelAr: 'القرآن الكريم', labelFr: 'Le Coran', isSource: true, note: 'no clear answer?', noteAr: 'لا جواب صريح؟', noteFr: 'pas de réponse claire ?' },
    { id: 'sunnah', label: 'Mutawātir Sunnah', labelAr: 'السنة المتواترة', labelFr: 'Sunnah Mutawātira', isSource: true, note: 'no answer?', noteAr: 'لا جواب؟', noteFr: 'pas de réponse ?' },
    { id: 'ahad', label: 'Āḥād Hadith + Strict Conditions', labelAr: 'حديث آحاد + شروط صارمة', labelFr: 'Hadith Āḥād + Conditions Strictes', isSource: true },
    { id: 'ijma', label: "Ijmā' of Companions", labelAr: 'إجماع الصحابة', labelFr: 'Ijmā\' des Compagnons', isSource: true },
    { id: 'sahabi', label: 'Individual Opinion of Companion', labelAr: 'رأي صحابي فرد', labelFr: 'Avis Individuel d\'un Compagnon' },
    { id: 'qiyas', label: 'Qiyās (Analogy)', labelAr: 'القياس', labelFr: 'Qiyās (Analogie)', note: 'problematic result?', noteAr: 'نتيجة إشكالية؟', noteFr: 'résultat problématique ?' },
    { id: 'istihsan', label: 'Istiḥsān', labelAr: 'الاستحسان', labelFr: 'Istiḥsān', isSource: true },
    { id: 'urf', label: "'Urf (Custom)", labelAr: 'العُرف', labelFr: '\'Urf (Coutume)' },
  ],
};

export const malikiMethodData: MethodFlowchartData = {
  title: 'Maliki Method',
  titleAr: 'منهج المالكية',
  titleFr: 'Méthode Malikite',
  school: 'maliki',
  steps: [
    { id: 'question', label: 'Legal Question', labelAr: 'المسألة الفقهية', labelFr: 'Question Juridique' },
    { id: 'quran', label: 'The Quran', labelAr: 'القرآن الكريم', labelFr: 'Le Coran', isSource: true },
    { id: 'sunnah', label: 'The Sunnah', labelAr: 'السنة النبوية', labelFr: 'La Sunnah', isSource: true },
    { id: 'amal', label: "'Amal Ahl al-Madīna", labelAr: 'عمل أهل المدينة', labelFr: 'Pratique des Médinois', isSource: true, note: 'can override āḥād', noteAr: 'يُقدَّم على الآحاد', noteFr: 'peut primer sur āḥād' },
    { id: 'ijma', label: "Ijmā' of Companions", labelAr: 'إجماع الصحابة', labelFr: 'Ijmā\' des Compagnons', isSource: true },
    { id: 'qiyas', label: 'Qiyās', labelAr: 'القياس', labelFr: 'Qiyās' },
    { id: 'maslaha', label: 'Al-Maṣlaḥa al-Mursala', labelAr: 'المصلحة المرسلة', labelFr: 'Intérêt Public', isSource: true },
    { id: 'sadd', label: "Sadd al-Dharā'i'", labelAr: 'سد الذرائع', labelFr: 'Blocage des Prétextes', isSource: true },
    { id: 'urf', label: "'Urf", labelAr: 'العُرف', labelFr: '\'Urf (Coutume)' },
  ],
};

export const shafiiMethodData: MethodFlowchartData = {
  title: "Shafi'i Method",
  titleAr: 'منهج الشافعية',
  titleFr: 'Méthode Shafi\'ite',
  school: 'shafii',
  steps: [
    { id: 'question', label: 'Legal Question', labelAr: 'المسألة الفقهية', labelFr: 'Question Juridique' },
    { id: 'quran', label: 'The Quran', labelAr: 'القرآن الكريم', labelFr: 'Le Coran', isSource: true },
    { id: 'sunnah', label: 'Sunnah (Mutawātir & Authentic Āḥād)', labelAr: 'السنة (متواترة وآحاد صحيحة)', labelFr: 'Sunnah (Mutawātir et Āḥād authentique)', isSource: true },
    { id: 'ijma', label: "Ijmā'", labelAr: 'الإجماع', labelFr: 'Ijmā\'', isSource: true },
    { id: 'sahabi', label: 'Opinions of Companions', labelAr: 'أقوال الصحابة', labelFr: 'Avis des Compagnons' },
    { id: 'qiyas', label: 'Strict Qiyās', labelAr: 'قياس صارم', labelFr: 'Qiyās Strict', isSource: true },
    { id: 'no-istihsan', label: '(No Istiḥsān)', labelAr: '(لا استحسان)', labelFr: '(Pas d\'Istiḥsān)', note: 'rejected', noteAr: 'مرفوض', noteFr: 'rejeté' },
  ],
};

export const hanbaliMethodData: MethodFlowchartData = {
  title: 'Hanbali Method',
  titleAr: 'منهج الحنابلة',
  titleFr: 'Méthode Hanbalite',
  school: 'hanbali',
  steps: [
    { id: 'question', label: 'Legal Question', labelAr: 'المسألة الفقهية', labelFr: 'Question Juridique' },
    { id: 'quran', label: 'The Quran', labelAr: 'القرآن الكريم', labelFr: 'Le Coran', isSource: true },
    { id: 'sunnah', label: 'Sunnah (all categories)', labelAr: 'السنة (جميع المراتب)', labelFr: 'Sunnah (toutes catégories)', isSource: true },
    { id: 'fatwa', label: 'Fatwa of a Companion', labelAr: 'فتوى صحابي', labelFr: 'Fatwa d\'un Compagnon', isSource: true },
    { id: 'daif', label: "Ḍa'īf Hadith (if nothing else)", labelAr: 'حديث ضعيف (إن لم يوجد غيره)', labelFr: 'Hadith Ḍa\'īf (si rien d\'autre)', note: 'last resort', noteAr: 'عند الضرورة', noteFr: 'dernier recours' },
    { id: 'ijma', label: "Ijmā'", labelAr: 'الإجماع', labelFr: 'Ijmā\'', isSource: true },
    { id: 'qiyas', label: 'Qiyās (last resort)', labelAr: 'القياس (آخر المطاف)', labelFr: 'Qiyās (dernier recours)', note: 'reluctantly', noteAr: 'على مضض', noteFr: 'à contrecœur' },
  ],
};

export const allMethodsData: MethodFlowchartData[] = [
  hanafiMethodData,
  malikiMethodData,
  shafiiMethodData,
  hanbaliMethodData,
];

export function getMethodData(school: 'hanafi' | 'maliki' | 'shafii' | 'hanbali'): MethodFlowchartData {
  const methods = { hanafi: hanafiMethodData, maliki: malikiMethodData, shafii: shafiiMethodData, hanbali: hanbaliMethodData };
  return methods[school];
}

// ============================================
// Map lesson IDs to their MindMap data
// Format: 'course-slug:lesson-id' for unique identification
// ============================================
export const lessonMindMapsMultiLang: Record<string, MindMapDataMultiLang> = {
  // Aqeedah lessons
  'aqeedah:lesson-001': introductionAqeedahData,
  'aqeedah:lesson-002': tawheedRububiyyahData,
  'aqeedah:lesson-003': tawheedUluhiyyahData,
  'aqeedah:lesson-004': tawheedAsmaSifatData,
  'aqeedah:lesson-005': malaikaData,
  'aqeedah:lesson-006': kutubData,
  'aqeedah:lesson-007': rusulData,
  'aqeedah:lesson-008': yawmAkhirData,
  'aqeedah:lesson-009': qadarData,
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
  // Siyam lessons
  'siyam:lesson-001': siyamIntroductionData,
  'siyam:lesson-002': siyamConditionsData,
  // Hajj lessons
  'fiqh-hajj:lesson-001': hajjIntroductionData,
  'fiqh-hajj:lesson-002': hajjConditionsData,
  'hajj:lesson-001': hajjIntroductionData,
  'hajj:lesson-002': hajjConditionsData,
  // History lessons (Les 4 Grands Imams)
  'history:002-maitres-communs': asanidChainData,
  'les-4-grands-imams:002-maitres-communs': asanidChainData,
  'history:003-rencontres': imamsChainData,
  'les-4-grands-imams:003-rencontres': imamsChainData,
};

// Get mindmap by lesson ID with locale
// Supports both 'course:lesson-id' format and legacy 'lesson-id' format
export function getMindMapForLesson(lessonId: string, locale: string = 'fr', courseSlug?: string): MindMapData | undefined {
  // Try with course slug first if provided
  if (courseSlug) {
    // Normalize course slug (remove 'bases-' prefix, etc.)
    const normalizedSlug = courseSlug.includes('aqeedah') ? 'aqeedah' : 
                          courseSlug.includes('siyam') ? 'siyam' :
                          courseSlug.includes('hajj') ? 'hajj' :
                          courseSlug.includes('fiqh') ? 'fiqh' : 
                          courseSlug.includes('4-grands-imams') || courseSlug.includes('history') ? 'les-4-grands-imams' : 
                          courseSlug;
    const key = `${normalizedSlug}:${lessonId}`;
    const data = lessonMindMapsMultiLang[key];
    if (data) return getMindMapByLocale(data, locale);
  }
  
  // Fallback: try legacy format without course prefix
  const legacyData = lessonMindMapsMultiLang[lessonId];
  if (legacyData) return getMindMapByLocale(legacyData, locale);
  
  return undefined;
}
