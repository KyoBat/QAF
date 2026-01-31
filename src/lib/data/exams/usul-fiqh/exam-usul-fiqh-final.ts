/**
 * Examen Final - Usul al-Fiqh (Fondements du Droit Islamique)
 * 
 * 30 questions QCM couvrant :
 * - Les sources du droit islamique
 * - Al-Qiyas (analogie)
 * - Al-Ijma' (consensus)
 * - Règles d'interprétation
 * - Les écoles juridiques
 * - Maqasid ash-Shari'a (objectifs de la loi)
 */

import { ExamConfig, ExamQuestion } from '../types';

// ============================================
// Questions - Sources du Droit (Adilla)
// ============================================

const sourcesQuestions: ExamQuestion[] = [
  {
    id: 'usul-sources-001',
    question: {
      fr: 'Quelles sont les 4 sources principales du droit islamique selon la majorité ?',
      ar: 'ما المصادر الأربعة الرئيسية للشريعة عند الجمهور؟',
      en: 'What are the 4 main sources of Islamic law according to the majority?',
    },
    options: [
      { id: 'a', text: { fr: 'Coran, Sunna, Ijma\' (consensus), Qiyas (analogie)', ar: 'القرآن، السنة، الإجماع، القياس', en: 'Quran, Sunnah, Ijma\' (consensus), Qiyas (analogy)' } },
      { id: 'b', text: { fr: 'Coran, Torah, Évangile, Psaumes', ar: 'القرآن، التوراة، الإنجيل، الزبور', en: 'Quran, Torah, Gospel, Psalms' } },
      { id: 'c', text: { fr: 'Coran uniquement', ar: 'القرآن فقط', en: 'Quran only' } },
      { id: 'd', text: { fr: 'Opinion des savants', ar: 'آراء العلماء', en: 'Scholars\' opinions' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les 4 sources agréées sont : 1) Le Coran, 2) La Sunna authentique, 3) L\'Ijma\' (consensus des savants), 4) Le Qiyas (analogie basée sur une cause commune).',
      ar: 'المصادر الأربعة المتفق عليها: 1) القرآن، 2) السنة الصحيحة، 3) الإجماع، 4) القياس (المبني على علة مشتركة).',
      en: 'The 4 agreed sources are: 1) Quran, 2) Authentic Sunnah, 3) Ijma\' (scholarly consensus), 4) Qiyas (analogy based on common cause).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'sources',
  },
  {
    id: 'usul-sources-002',
    question: {
      fr: 'Quel est le statut de la Sunna par rapport au Coran ?',
      ar: 'ما مكانة السنة بالنسبة للقرآن؟',
      en: 'What is the status of Sunnah in relation to the Quran?',
    },
    options: [
      { id: 'a', text: { fr: 'Elle est moins importante et optionnelle', ar: 'أقل أهمية واختيارية', en: 'Less important and optional' } },
      { id: 'b', text: { fr: 'Elle contredit parfois le Coran', ar: 'تتعارض أحيانًا مع القرآن', en: 'It sometimes contradicts the Quran' } },
      { id: 'c', text: { fr: 'Elle explique, détaille et complète le Coran ; elle est une révélation', ar: 'تُفسر وتُفصّل وتُكمل القرآن؛ وهي وحي', en: 'It explains, details and completes the Quran; it is revelation' } },
      { id: 'd', text: { fr: 'Elle n\'est pas une source de loi', ar: 'ليست مصدرًا للتشريع', en: 'It is not a source of law' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Allah dit : "Et Nous avons fait descendre sur toi le Rappel pour que tu expliques aux gens ce qui leur a été descendu" (16:44). La Sunna est "وحي غير متلو" (révélation non récitée).',
      ar: 'قال تعالى: "وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ" (النحل:44). والسنة "وحي غير متلو".',
      en: 'Allah says: "And We revealed to you the Reminder that you may make clear to people what was sent down to them" (16:44). Sunnah is "revelation not recited".',
    },
    points: 2,
    difficulty: 'medium',
    category: 'sources',
  },
  {
    id: 'usul-sources-003',
    question: {
      fr: 'Qu\'est-ce que l\'Ijma\' ?',
      ar: 'ما هو الإجماع؟',
      en: 'What is Ijma\'?',
    },
    options: [
      { id: 'a', text: { fr: 'L\'opinion d\'un seul savant', ar: 'رأي عالم واحد', en: 'One scholar\'s opinion' } },
      { id: 'b', text: { fr: 'Le vote majoritaire', ar: 'التصويت بالأغلبية', en: 'Majority vote' } },
      { id: 'c', text: { fr: 'L\'opinion du calife', ar: 'رأي الخليفة', en: 'The caliph\'s opinion' } },
      { id: 'd', text: { fr: 'L\'accord unanime des mujtahidun d\'une époque sur une question juridique', ar: 'اتفاق المجتهدين في عصر على حكم شرعي', en: 'Unanimous agreement of mujtahidun of an era on a legal ruling' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'L\'Ijma\' est l\'accord de tous les mujtahidun (savants qualifiés) de la Umma après le décès du Prophète ﷺ sur une question de droit islamique.',
      ar: 'الإجماع هو اتفاق جميع المجتهدين من الأمة بعد وفاة النبي ﷺ على حكم شرعي.',
      en: 'Ijma\' is the agreement of all mujtahidun (qualified scholars) of the Ummah after the Prophet\'s ﷺ death on a matter of Islamic law.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'sources',
  },
  {
    id: 'usul-sources-004',
    question: {
      fr: 'Qu\'est-ce que le Qiyas ?',
      ar: 'ما هو القياس؟',
      en: 'What is Qiyas?',
    },
    options: [
      { id: 'a', text: { fr: 'Une mesure physique', ar: 'قياس مادي', en: 'A physical measurement' } },
      { id: 'b', text: { fr: 'Appliquer le jugement d\'un cas original à un nouveau cas partageant la même cause (\'Illa)', ar: 'إلحاق فرع بأصل لعلة جامعة بينهما', en: 'Applying the ruling of an original case to a new case sharing the same cause (\'Illa)' } },
      { id: 'c', text: { fr: 'Suivre son opinion personnelle', ar: 'اتباع الرأي الشخصي', en: 'Following personal opinion' } },
      { id: 'd', text: { fr: 'Rejeter les textes', ar: 'رفض النصوص', en: 'Rejecting texts' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Ex: Le vin (Khamr) est interdit car il enivre (\'Illa). Donc toute boisson enivrante est interdite par Qiyas.',
      ar: 'مثال: الخمر محرمة لأنها تُسكر (العلة). فكل مُسكر حرام بالقياس.',
      en: 'Ex: Wine (Khamr) is forbidden because it intoxicates (\'Illa). So any intoxicating drink is forbidden by Qiyas.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'sources',
  },
];

// ============================================
// Questions - Al-Ahkam (Les Jugements)
// ============================================

const ahkamQuestions: ExamQuestion[] = [
  {
    id: 'usul-ahkam-001',
    question: {
      fr: 'Quelles sont les 5 catégories de jugements (Al-Ahkam al-Khamsa) ?',
      ar: 'ما هي الأحكام التكليفية الخمسة؟',
      en: 'What are the 5 categories of rulings (Al-Ahkam al-Khamsa)?',
    },
    options: [
      { id: 'a', text: { fr: 'Wajib (obligatoire), Mandub (recommandé), Mubah (permis), Makruh (détesté), Haram (interdit)', ar: 'واجب، مندوب، مباح، مكروه، حرام', en: 'Wajib (obligatory), Mandub (recommended), Mubah (permissible), Makruh (disliked), Haram (forbidden)' } },
      { id: 'b', text: { fr: 'Bien, mal, neutre, bon, mauvais', ar: 'حسن، سيء، محايد، جيد، رديء', en: 'Good, bad, neutral, nice, evil' } },
      { id: 'c', text: { fr: 'Salat, Zakat, Siyam, Hajj, Shahada', ar: 'الصلاة، الزكاة، الصيام، الحج، الشهادة', en: 'Salat, Zakat, Siyam, Hajj, Shahada' } },
      { id: 'd', text: { fr: 'Facile, difficile, moyen, simple, complexe', ar: 'سهل، صعب، متوسط، بسيط، معقد', en: 'Easy, hard, medium, simple, complex' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les 5 jugements sont : Wajib/Fard (obligatoire), Mandub/Sunna (recommandé), Mubah (permis), Makruh (détesté), Haram (interdit).',
      ar: 'الأحكام الخمسة: الواجب/الفرض، المندوب/السنة، المباح، المكروه، الحرام.',
      en: 'The 5 rulings are: Wajib/Fard (obligatory), Mandub/Sunnah (recommended), Mubah (permissible), Makruh (disliked), Haram (forbidden).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'ahkam',
  },
  {
    id: 'usul-ahkam-002',
    question: {
      fr: 'Quelle est la différence entre Fard \'Ayn et Fard Kifaya ?',
      ar: 'ما الفرق بين فرض العين وفرض الكفاية؟',
      en: 'What is the difference between Fard \'Ayn and Fard Kifaya?',
    },
    options: [
      { id: 'a', text: { fr: 'Aucune différence', ar: 'لا فرق', en: 'No difference' } },
      { id: 'b', text: { fr: 'Fard Kifaya est plus important', ar: 'فرض الكفاية أهم', en: 'Fard Kifaya is more important' } },
      { id: 'c', text: { fr: 'Fard \'Ayn : obligatoire pour chaque individu ; Fard Kifaya : si certains le font, les autres sont dispensés', ar: 'فرض العين: واجب على كل فرد؛ فرض الكفاية: إذا قام به البعض سقط عن الباقين', en: 'Fard \'Ayn: obligatory on every individual; Fard Kifaya: if some do it, others are relieved' } },
      { id: 'd', text: { fr: 'Fard \'Ayn concerne la communauté', ar: 'فرض العين للأمة', en: 'Fard \'Ayn concerns the community' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Fard \'Ayn : la prière, le jeûne (chacun doit). Fard Kifaya : la prière funéraire, les études de médecine (si suffisamment le font).',
      ar: 'فرض العين: الصلاة، الصيام (على كل فرد). فرض الكفاية: صلاة الجنازة، دراسة الطب (إذا قام به الكفاية).',
      en: 'Fard \'Ayn: prayer, fasting (each must). Fard Kifaya: funeral prayer, medical studies (if enough do it).',
    },
    points: 2,
    difficulty: 'medium',
    category: 'ahkam',
  },
  {
    id: 'usul-ahkam-003',
    question: {
      fr: 'Que signifie Makruh Tahrim ?',
      ar: 'ما معنى المكروه تحريمًا؟',
      en: 'What does Makruh Tahrim mean?',
    },
    options: [
      { id: 'a', text: { fr: 'Légèrement détesté', ar: 'مكروه خفيفًا', en: 'Slightly disliked' } },
      { id: 'b', text: { fr: 'Totalement permis', ar: 'مباح تمامًا', en: 'Completely permissible' } },
      { id: 'c', text: { fr: 'Obligatoire', ar: 'واجب', en: 'Obligatory' } },
      { id: 'd', text: { fr: 'Proche de l\'interdit, son auteur mérite un blâme (terme Hanafi)', ar: 'قريب من الحرام، فاعله يستحق الذم (مصطلح حنفي)', en: 'Close to forbidden, its doer deserves blame (Hanafi term)' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Les Hanafis distinguent Makruh Tanzihi (léger) et Makruh Tahrimi (proche du Haram, basé sur un texte probable).',
      ar: 'يفرق الحنفية بين المكروه تنزيهًا (خفيف) والمكروه تحريمًا (قريب من الحرام، بدليل ظني).',
      en: 'Hanafis distinguish Makruh Tanzihi (light) and Makruh Tahrimi (close to Haram, based on probable evidence).',
    },
    points: 3,
    difficulty: 'hard',
    category: 'ahkam',
  },
];

// ============================================
// Questions - Méthodes d'Interprétation
// ============================================

const interpretationQuestions: ExamQuestion[] = [
  {
    id: 'usul-interp-001',
    question: {
      fr: 'Qu\'est-ce qu\'un texte Qat\'i (قطعي) ?',
      ar: 'ما هو النص القطعي؟',
      en: 'What is a Qat\'i (definitive) text?',
    },
    options: [
      { id: 'a', text: { fr: 'Un texte qui peut avoir plusieurs sens', ar: 'نص يحتمل عدة معانٍ', en: 'A text that can have multiple meanings' } },
      { id: 'b', text: { fr: 'Un texte dont le sens est clair et certain, n\'admettant qu\'une interprétation', ar: 'نص واضح المعنى لا يحتمل إلا تفسيرًا واحدًا', en: 'A text with clear certain meaning, admitting only one interpretation' } },
      { id: 'c', text: { fr: 'Un texte abrogé', ar: 'نص منسوخ', en: 'An abrogated text' } },
      { id: 'd', text: { fr: 'Un texte faible', ar: 'نص ضعيف', en: 'A weak text' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Ex: "Les parts d\'héritage" dans le Coran sont Qat\'i ad-Dalala (sens définitif). Le Coran est Qat\'i ath-Thubut (transmission certaine).',
      ar: 'مثال: "أنصبة الميراث" في القرآن قطعية الدلالة. والقرآن قطعي الثبوت.',
      en: 'Ex: "Inheritance shares" in Quran are Qat\'i ad-Dalala (definitive meaning). Quran is Qat\'i ath-Thubut (definitive transmission).',
    },
    points: 2,
    difficulty: 'medium',
    category: 'interpretation',
  },
  {
    id: 'usul-interp-002',
    question: {
      fr: 'Qu\'est-ce que le Naskh (abrogation) ?',
      ar: 'ما هو النسخ؟',
      en: 'What is Naskh (abrogation)?',
    },
    options: [
      { id: 'a', text: { fr: 'Remplacer un jugement antérieur par un jugement postérieur', ar: 'رفع حكم سابق بحكم لاحق', en: 'Replacing an earlier ruling with a later one' } },
      { id: 'b', text: { fr: 'Copier un texte', ar: 'نسخ النص', en: 'Copying a text' } },
      { id: 'c', text: { fr: 'Supprimer le Coran', ar: 'حذف القرآن', en: 'Deleting the Quran' } },
      { id: 'd', text: { fr: 'Ajouter un nouveau pilier', ar: 'إضافة ركن جديد', en: 'Adding a new pillar' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Naskh est un concept coranique (2:106). Ex: La Qibla vers Jérusalem fut abrogée par celle vers La Mecque.',
      ar: 'النسخ مفهوم قرآني (البقرة:106). مثال: القبلة نحو القدس نُسخت بالقبلة نحو مكة.',
      en: 'Naskh is a Quranic concept (2:106). Ex: Qibla towards Jerusalem was abrogated by that towards Mecca.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'interpretation',
  },
  {
    id: 'usul-interp-003',
    question: {
      fr: 'Qu\'est-ce que le \'Amm (عام) et le Khass (خاص) ?',
      ar: 'ما هو العام والخاص؟',
      en: 'What is \'Amm (general) and Khass (specific)?',
    },
    options: [
      { id: 'a', text: { fr: 'Des types de prière', ar: 'أنواع من الصلاة', en: 'Types of prayer' } },
      { id: 'b', text: { fr: 'Des noms de savants', ar: 'أسماء علماء', en: 'Names of scholars' } },
      { id: 'c', text: { fr: '\'Amm : texte général englobant plusieurs cas ; Khass : texte spécifique à certains cas', ar: 'العام: نص يشمل حالات عديدة؛ الخاص: نص مقيد ببعض الحالات', en: '\'Amm: general text covering multiple cases; Khass: specific text for certain cases' } },
      { id: 'd', text: { fr: 'Des livres de hadith', ar: 'كتب حديث', en: 'Hadith books' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le Khass peut restreindre le \'Amm. Ex: "Tuez les polythéistes" (\'Amm) est restreint par l\'interdiction de tuer femmes, enfants, moines (Khass).',
      ar: 'الخاص يُقيد العام. مثال: "اقتلوا المشركين" (عام) يُقيد بالنهي عن قتل النساء والأطفال والرهبان (خاص).',
      en: 'Khass restricts \'Amm. Ex: "Kill the polytheists" (\'Amm) is restricted by prohibition of killing women, children, monks (Khass).',
    },
    points: 3,
    difficulty: 'hard',
    category: 'interpretation',
  },
];

// ============================================
// Questions - Les Écoles Juridiques
// ============================================

const madhabQuestions: ExamQuestion[] = [
  {
    id: 'usul-madhab-001',
    question: {
      fr: 'Combien d\'écoles juridiques sunnites sont reconnues ?',
      ar: 'كم مذهبًا فقهيًا سنيًا معترفًا به؟',
      en: 'How many Sunni jurisprudential schools are recognized?',
    },
    options: [
      { id: 'a', text: { fr: '2 écoles', ar: 'مذهبان', en: '2 schools' } },
      { id: 'b', text: { fr: '7 écoles', ar: '7 مذاهب', en: '7 schools' } },
      { id: 'c', text: { fr: '1 seule école', ar: 'مذهب واحد', en: '1 school only' } },
      { id: 'd', text: { fr: '4 écoles : Hanafi, Maliki, Shafi\'i, Hanbali', ar: '4 مذاهب: الحنفي، المالكي، الشافعي، الحنبلي', en: '4 schools: Hanafi, Maliki, Shafi\'i, Hanbali' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Les 4 écoles suivent les 4 grands imams. Historiquement, d\'autres existaient (Awza\'i, Thawri, Zahiri) mais les 4 ont prévalu.',
      ar: 'المذاهب الأربعة تتبع الأئمة الأربعة الكبار. تاريخيًا كانت هناك مذاهب أخرى (الأوزاعي، الثوري، الظاهري) لكن الأربعة استمرت.',
      en: 'The 4 schools follow the 4 great imams. Historically, others existed (Awza\'i, Thawri, Zahiri) but these 4 prevailed.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'madhab',
  },
  {
    id: 'usul-madhab-002',
    question: {
      fr: 'Qu\'est-ce que l\'Ijtihad ?',
      ar: 'ما هو الاجتهاد؟',
      en: 'What is Ijtihad?',
    },
    options: [
      { id: 'a', text: { fr: 'Suivre aveuglément un savant', ar: 'تقليد أعمى لعالم', en: 'Blindly following a scholar' } },
      { id: 'b', text: { fr: 'L\'effort maximal d\'un savant qualifié pour extraire un jugement des sources', ar: 'بذل الفقيه المؤهل جهده لاستنباط الحكم من الأدلة', en: 'Maximum effort of a qualified scholar to extract a ruling from sources' } },
      { id: 'c', text: { fr: 'Inventer de nouvelles règles', ar: 'اختراع قواعد جديدة', en: 'Inventing new rules' } },
      { id: 'd', text: { fr: 'Rejeter le Coran', ar: 'رفض القرآن', en: 'Rejecting the Quran' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'L\'Ijtihad requiert des conditions strictes : maîtrise de l\'arabe, du Coran, du Hadith, de l\'Usul, de l\'Ijma\', etc.',
      ar: 'الاجتهاد يتطلب شروطًا صارمة: إتقان العربية والقرآن والحديث والأصول والإجماع وغيرها.',
      en: 'Ijtihad requires strict conditions: mastery of Arabic, Quran, Hadith, Usul, Ijma\', etc.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'madhab',
  },
  {
    id: 'usul-madhab-003',
    question: {
      fr: 'Qu\'est-ce que le Taqlid ?',
      ar: 'ما هو التقليد؟',
      en: 'What is Taqlid?',
    },
    options: [
      { id: 'a', text: { fr: 'Suivre l\'avis d\'un savant qualifié sans connaître sa preuve détaillée', ar: 'اتباع قول عالم مؤهل دون معرفة دليله التفصيلي', en: 'Following a qualified scholar\'s opinion without knowing its detailed proof' } },
      { id: 'b', text: { fr: 'L\'Ijtihad', ar: 'الاجتهاد', en: 'Ijtihad' } },
      { id: 'c', text: { fr: 'Rejeter toutes les écoles', ar: 'رفض كل المذاهب', en: 'Rejecting all schools' } },
      { id: 'd', text: { fr: 'Créer sa propre école', ar: 'إنشاء مذهب خاص', en: 'Creating one\'s own school' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Taqlid est permis pour le non-savant. "Demandez aux gens du rappel si vous ne savez pas" (16:43). Les 4 imams ont interdit de les suivre contre une preuve claire.',
      ar: 'التقليد جائز لغير العالم. "فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ" (النحل:43). والأئمة الأربعة نهوا عن تقليدهم مقابل دليل واضح.',
      en: 'Taqlid is permitted for non-scholars. "Ask the people of knowledge if you don\'t know" (16:43). The 4 imams forbade following them against clear proof.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'madhab',
  },
];

// ============================================
// Questions - Maqasid ash-Shari'a
// ============================================

const maqasidQuestions: ExamQuestion[] = [
  {
    id: 'usul-maqasid-001',
    question: {
      fr: 'Quels sont les 5 objectifs universels (Maqasid) de la Shari\'a ?',
      ar: 'ما هي الضروريات الخمس (مقاصد الشريعة)؟',
      en: 'What are the 5 universal objectives (Maqasid) of Shari\'a?',
    },
    options: [
      { id: 'a', text: { fr: 'Les 5 piliers de l\'Islam', ar: 'أركان الإسلام الخمسة', en: 'The 5 pillars of Islam' } },
      { id: 'b', text: { fr: 'Les 5 prières quotidiennes', ar: 'الصلوات الخمس اليومية', en: 'The 5 daily prayers' } },
      { id: 'c', text: { fr: 'Préserver : la religion, la vie, l\'intellect, la descendance, les biens', ar: 'حفظ: الدين، النفس، العقل، النسل، المال', en: 'Preserving: religion, life, intellect, lineage, wealth' } },
      { id: 'd', text: { fr: 'Les 5 sens', ar: 'الحواس الخمس', en: 'The 5 senses' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Les Daruriyyat al-Khams : 1) Din (religion), 2) Nafs (vie), 3) \'Aql (intellect), 4) Nasl (descendance), 5) Mal (biens). L\'honneur (\'Ird) est parfois ajouté.',
      ar: 'الضروريات الخمس: 1) الدين، 2) النفس، 3) العقل، 4) النسل، 5) المال. ويُضاف أحيانًا العِرض.',
      en: 'The Daruriyyat al-Khams: 1) Din (religion), 2) Nafs (life), 3) \'Aql (intellect), 4) Nasl (lineage), 5) Mal (wealth). Honor (\'Ird) is sometimes added.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'maqasid',
  },
  {
    id: 'usul-maqasid-002',
    question: {
      fr: 'Qu\'est-ce que la Maslaha (intérêt général) ?',
      ar: 'ما هي المصلحة؟',
      en: 'What is Maslaha (public interest)?',
    },
    options: [
      { id: 'a', text: { fr: 'L\'intérêt personnel uniquement', ar: 'المصلحة الشخصية فقط', en: 'Personal interest only' } },
      { id: 'b', text: { fr: 'Toute chose agréable', ar: 'أي شيء ممتع', en: 'Anything pleasant' } },
      { id: 'c', text: { fr: 'Les désirs personnels', ar: 'الرغبات الشخصية', en: 'Personal desires' } },
      { id: 'd', text: { fr: 'Ce qui réalise un bénéfice ou repousse un mal, conforme aux objectifs de la Shari\'a', ar: 'ما يحقق نفعًا أو يدفع ضررًا، موافقًا لمقاصد الشريعة', en: 'What achieves benefit or repels harm, conforming to Shari\'a objectives' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'La Maslaha Mursala (intérêt non spécifié par les textes) est utilisée par les Malikis notamment. Elle doit être conforme aux objectifs globaux de la Shari\'a.',
      ar: 'المصلحة المرسلة (غير المنصوص عليها) يستخدمها المالكية خاصة. ويجب أن تتوافق مع المقاصد العامة للشريعة.',
      en: 'Maslaha Mursala (unspecified interest) is used especially by Malikis. It must conform to Shari\'a\'s general objectives.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'maqasid',
  },
];

// ============================================
// Questions - Règles Juridiques (Qawa'id)
// ============================================

const qawaidQuestions: ExamQuestion[] = [
  {
    id: 'usul-qawaid-001',
    question: {
      fr: 'Que signifie la règle : "الأمور بمقاصدها" (Les actes sont selon les intentions) ?',
      ar: 'ما معنى قاعدة "الأمور بمقاصدها"؟',
      en: 'What does the rule "Al-Umur bi Maqasidiha" (Matters are according to intentions) mean?',
    },
    options: [
      { id: 'a', text: { fr: 'L\'intention n\'a pas d\'importance', ar: 'النية غير مهمة', en: 'Intention doesn\'t matter' } },
      { id: 'b', text: { fr: 'La validité et la récompense des actes dépendent de l\'intention', ar: 'صحة الأعمال وثوابها يتوقفان على النية', en: 'Validity and reward of actions depend on intention' } },
      { id: 'c', text: { fr: 'Seuls les résultats comptent', ar: 'النتائج فقط تهم', en: 'Only results matter' } },
      { id: 'd', text: { fr: 'Les pensées sont jugées', ar: 'الأفكار تُحاسب', en: 'Thoughts are judged' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Basée sur le hadith "Les actions ne valent que par les intentions." C\'est l\'une des 5 grandes maximes juridiques (Al-Qawa\'id al-Kubra).',
      ar: 'مبنية على حديث "إنما الأعمال بالنيات." وهي من القواعد الكبرى الخمس.',
      en: 'Based on the hadith "Actions are by intentions." It\'s one of the 5 major legal maxims (Al-Qawa\'id al-Kubra).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'qawaid',
  },
  {
    id: 'usul-qawaid-002',
    question: {
      fr: 'Que signifie "الضرر يُزال" (Le préjudice doit être éliminé) ?',
      ar: 'ما معنى قاعدة "الضرر يُزال"؟',
      en: 'What does "Ad-Darar Yuzal" (Harm must be eliminated) mean?',
    },
    options: [
      { id: 'a', text: { fr: 'La Shari\'a vise à prévenir et réparer les préjudices', ar: 'الشريعة تهدف إلى منع الضرر وإزالته', en: 'Shari\'a aims to prevent and repair harm' } },
      { id: 'b', text: { fr: 'On peut nuire aux autres', ar: 'يجوز الإضرار بالآخرين', en: 'One can harm others' } },
      { id: 'c', text: { fr: 'Le préjudice est toléré', ar: 'الضرر مقبول', en: 'Harm is tolerated' } },
      { id: 'd', text: { fr: 'Seuls les grands préjudices sont concernés', ar: 'الأضرار الكبيرة فقط', en: 'Only major harms are concerned' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Basée sur le hadith "لا ضرر ولا ضِرار" (Pas de préjudice ni de représailles). Elle fonde de nombreuses règles de protection.',
      ar: 'مبنية على حديث "لا ضرر ولا ضِرار." وتؤسس لكثير من قواعد الحماية.',
      en: 'Based on the hadith "No harm and no reciprocal harm." It establishes many protection rules.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'qawaid',
  },
  {
    id: 'usul-qawaid-003',
    question: {
      fr: 'Que signifie "اليقين لا يُزال بالشك" ?',
      ar: 'ما معنى قاعدة "اليقين لا يُزال بالشك"؟',
      en: 'What does "Al-Yaqin la Yuzal bi ash-Shakk" mean?',
    },
    options: [
      { id: 'a', text: { fr: 'Le doute l\'emporte sur la certitude', ar: 'الشك يغلب اليقين', en: 'Doubt prevails over certainty' } },
      { id: 'b', text: { fr: 'Il faut toujours douter', ar: 'يجب الشك دائمًا', en: 'One must always doubt' } },
      { id: 'c', text: { fr: 'La certitude n\'est pas annulée par le doute', ar: 'اليقين لا يُرفع بالشك', en: 'Certainty is not nullified by doubt' } },
      { id: 'd', text: { fr: 'La certitude n\'existe pas', ar: 'اليقين غير موجود', en: 'Certainty doesn\'t exist' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Ex: Si on est certain d\'avoir fait le Wudu et doute de l\'avoir rompu, on reste en état de pureté. Le principe de base (Asl) prévaut.',
      ar: 'مثال: من تيقن الوضوء وشك في الحدث، يبقى على طهارته. الأصل يبقى.',
      en: 'Ex: If certain of having Wudu and doubtful of breaking it, one remains pure. The base principle (Asl) prevails.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'qawaid',
  },
];

// ============================================
// Assemblage de l'examen COMPLET
// ============================================

const allQuestions: ExamQuestion[] = [
  ...sourcesQuestions,        // 4 questions
  ...ahkamQuestions,          // 3 questions
  ...interpretationQuestions, // 3 questions
  ...madhabQuestions,         // 3 questions
  ...maqasidQuestions,        // 2 questions
  ...qawaidQuestions,         // 3 questions
  // Total : 18 questions
];

export const examUsulFiqhFinal: ExamConfig = {
  id: 'exam-usul-fiqh-final',
  type: 'course',
  level: 'advanced',
  title: {
    fr: 'Examen Complet - Usul al-Fiqh',
    ar: 'الامتحان الشامل - أصول الفقه',
    en: 'Complete Exam - Usul al-Fiqh',
  },
  description: {
    fr: 'Examen de 15 questions sélectionnées aléatoirement parmi une banque de 18 questions. Couvre les fondements du droit islamique.',
    ar: 'امتحان من 15 سؤالاً يتم اختيارها عشوائياً من بنك يضم 18 سؤالاً. يغطي أصول الفقه.',
    en: 'Exam with 15 questions randomly selected from a pool of 18. Covers foundations of Islamic law.',
  },
  instructions: {
    fr: 'Vous avez 25 minutes pour répondre à 15 questions. Chaque question a une seule bonne réponse. Un score de 70% est requis pour réussir.',
    ar: 'لديك 25 دقيقة للإجابة على 15 سؤالاً. لكل سؤال إجابة صحيحة واحدة. يُشترط 70% للنجاح.',
    en: 'You have 25 minutes to answer 15 questions. Each question has one correct answer. A score of 70% is required to pass.',
  },
  courseSlug: 'usul-al-fiqh',
  questionPool: allQuestions,
  questionsPerExam: 15,
  categoryConfig: [
    { category: 'sources', count: 3 },
    { category: 'ahkam', count: 2 },
    { category: 'interpretation', count: 3 },
    { category: 'madhab', count: 2 },
    { category: 'maqasid', count: 2 },
    { category: 'qawaid', count: 3 },
  ],
  questions: [],
  duration: 25,
  passingScore: 70,
  maxAttempts: 5,
  shuffleQuestions: true,
  shuffleOptions: true,
  showAnswersAfter: 'complete',
  hasCertificate: true,
  certificateName: {
    fr: 'Certificat de Maîtrise - Usul al-Fiqh',
    ar: 'شهادة الإتقان - أصول الفقه',
    en: 'Mastery Certificate - Usul al-Fiqh',
  },
  createdAt: '2026-01-31',
};

export default examUsulFiqhFinal;
