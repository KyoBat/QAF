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
// Questions - Maslaha et Istihsan (NOUVEAU)
// ============================================

const maslahIstihsanQuestions: ExamQuestion[] = [
  {
    id: 'usul-maslaha-001',
    question: {
      fr: 'Qu\'est-ce que la Maslaha Mursala ?',
      ar: 'ما هي المصلحة المرسلة؟',
      en: 'What is Maslaha Mursala?',
    },
    options: [
      { id: 'a', text: { fr: 'Une source rejetée par tous les savants', ar: 'مصدر يرفضه جميع العلماء', en: 'A source rejected by all scholars' } },
      { id: 'b', text: { fr: 'Un intérêt public non mentionné dans les textes mais conforme aux objectifs de la Shari\'a', ar: 'مصلحة عامة لم تُذكر في النصوص لكنها متوافقة مع مقاصد الشريعة', en: 'A public interest not mentioned in texts but conforming to Shari\'a objectives' } },
      { id: 'c', text: { fr: 'Une innovation blâmable', ar: 'بدعة مذمومة', en: 'A blameworthy innovation' } },
      { id: 'd', text: { fr: 'L\'opinion d\'un savant spécifique', ar: 'رأي عالم معين', en: 'A specific scholar\'s opinion' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La Maslaha Mursala est un intérêt reconnu par la Shari\'a en général, mais sans texte spécifique. Ex: compilation du Coran, construction de prisons.',
      ar: 'المصلحة المرسلة مصلحة معتبرة شرعًا لكن لا نص خاص فيها. مثل: جمع القرآن، بناء السجون.',
      en: 'Maslaha Mursala is an interest recognized by Shari\'a in general, but without specific text. Ex: compilation of Quran, building prisons.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'maslaha-istihsan',
  },
  {
    id: 'usul-maslaha-002',
    question: {
      fr: 'Quelles sont les 3 catégories de Maslaha selon les Usuliyyun ?',
      ar: 'ما الأقسام الثلاثة للمصلحة عند الأصوليين؟',
      en: 'What are the 3 categories of Maslaha according to Usuliyyun?',
    },
    options: [
      { id: 'a', text: { fr: 'Daruriyyat (nécessités), Hajiyyat (besoins), Tahsiniyyat (embellissements)', ar: 'الضروريات، الحاجيات، التحسينيات', en: 'Daruriyyat (necessities), Hajiyyat (needs), Tahsiniyyat (embellishments)' } },
      { id: 'b', text: { fr: 'Grande, moyenne, petite', ar: 'كبيرة، متوسطة، صغيرة', en: 'Large, medium, small' } },
      { id: 'c', text: { fr: 'Obligatoire, recommandée, permise', ar: 'واجبة، مستحبة، مباحة', en: 'Obligatory, recommended, permissible' } },
      { id: 'd', text: { fr: 'Ancienne, nouvelle, future', ar: 'قديمة، جديدة، مستقبلية', en: 'Ancient, new, future' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les Daruriyyat (les 5 nécessités) sont prioritaires. Les Hajiyyat facilitent la vie. Les Tahsiniyyat embellissent mais ne sont pas essentiels.',
      ar: 'الضروريات (الخمس) لها الأولوية. والحاجيات تسهّل الحياة. والتحسينيات تزين لكنها ليست أساسية.',
      en: 'Daruriyyat (5 necessities) have priority. Hajiyyat facilitate life. Tahsiniyyat beautify but are not essential.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'maslaha-istihsan',
  },
  {
    id: 'usul-istihsan-001',
    question: {
      fr: 'Qu\'est-ce que l\'Istihsan ?',
      ar: 'ما هو الاستحسان؟',
      en: 'What is Istihsan?',
    },
    options: [
      { id: 'a', text: { fr: 'Suivre ses préférences personnelles', ar: 'اتباع التفضيلات الشخصية', en: 'Following personal preferences' } },
      { id: 'b', text: { fr: 'Délaisser un Qiyas apparent pour un autre plus approprié ou pour une preuve plus forte (coutume, nécessité)', ar: 'العدول عن قياس ظاهر إلى آخر أرجح أو دليل أقوى (عرف، ضرورة)', en: 'Abandoning an apparent Qiyas for a more appropriate one or stronger evidence (custom, necessity)' } },
      { id: 'c', text: { fr: 'Rejeter toutes les sources', ar: 'رفض جميع المصادر', en: 'Rejecting all sources' } },
      { id: 'd', text: { fr: 'Suivre l\'opinion majoritaire', ar: 'اتباع رأي الأغلبية', en: 'Following majority opinion' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'L\'Istihsan est utilisé surtout par les Hanafis pour éviter la rigidité du Qiyas quand il mène à un résultat contraire à l\'esprit de la loi.',
      ar: 'الاستحسان يستخدمه الحنفية خاصة لتجنب جمود القياس عندما يؤدي إلى نتيجة مخالفة لروح الشريعة.',
      en: 'Istihsan is used especially by Hanafis to avoid rigidity of Qiyas when it leads to a result contrary to the spirit of the law.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'maslaha-istihsan',
  },
];

// ============================================
// Questions - Ijtihad et Taqlid (NOUVEAU)
// ============================================

const ijtihadTaqlidQuestions: ExamQuestion[] = [
  {
    id: 'usul-ijtihad-001',
    question: {
      fr: 'Qu\'est-ce que l\'Ijtihad ?',
      ar: 'ما هو الاجتهاد؟',
      en: 'What is Ijtihad?',
    },
    options: [
      { id: 'a', text: { fr: 'Copier l\'avis d\'un autre savant', ar: 'نقل رأي عالم آخر', en: 'Copying another scholar\'s opinion' } },
      { id: 'b', text: { fr: 'Effort maximal d\'un savant qualifié pour déduire un jugement juridique des sources', ar: 'بذل الفقيه المؤهل وسعه لاستنباط حكم شرعي من الأدلة', en: 'Maximum effort of a qualified scholar to derive a legal ruling from sources' } },
      { id: 'c', text: { fr: 'Méditation spirituelle', ar: 'تأمل روحي', en: 'Spiritual meditation' } },
      { id: 'd', text: { fr: 'Mémorisation du Coran', ar: 'حفظ القرآن', en: 'Memorizing Quran' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'L\'Ijtihad exige des conditions : maîtrise de l\'arabe, connaissance du Coran et de la Sunna, des principes Usul, de l\'Ijma\', et de la réalité contemporaine.',
      ar: 'الاجتهاد يشترط: إتقان العربية، معرفة القرآن والسنة، أصول الفقه، الإجماع، والواقع المعاصر.',
      en: 'Ijtihad requires: Arabic mastery, knowledge of Quran and Sunnah, Usul principles, Ijma\', and contemporary reality.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'ijtihad-taqlid',
  },
  {
    id: 'usul-ijtihad-002',
    question: {
      fr: 'Que signifie le hadith "Si le juge fait l\'Ijtihad et se trompe, il a une récompense" ?',
      ar: 'ما معنى حديث "إذا اجتهد الحاكم فأخطأ فله أجر"؟',
      en: 'What does the hadith "If the judge makes Ijtihad and errs, he has one reward" mean?',
    },
    options: [
      { id: 'a', text: { fr: 'L\'erreur délibérée est récompensée', ar: 'الخطأ المتعمد يُثاب عليه', en: 'Deliberate error is rewarded' } },
      { id: 'b', text: { fr: 'L\'Ijtihad sincère basé sur les sources est récompensé même si la conclusion est erronée', ar: 'الاجتهاد المخلص المبني على الأدلة مثاب حتى لو أخطأ في النتيجة', en: 'Sincere Ijtihad based on sources is rewarded even if conclusion is wrong' } },
      { id: 'c', text: { fr: 'Les juges sont infaillibles', ar: 'القضاة معصومون', en: 'Judges are infallible' } },
      { id: 'd', text: { fr: 'L\'Ijtihad est interdit', ar: 'الاجتهاد محرم', en: 'Ijtihad is forbidden' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Mujtahid qui s\'efforce sincèrement est récompensé pour son effort. S\'il a raison : 2 récompenses. S\'il se trompe : 1 récompense pour l\'effort.',
      ar: 'المجتهد المخلص يُثاب على جهده. إن أصاب: أجران. وإن أخطأ: أجر واحد على الجهد.',
      en: 'The sincere Mujtahid is rewarded for effort. If correct: 2 rewards. If wrong: 1 reward for the effort.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'ijtihad-taqlid',
  },
  {
    id: 'usul-taqlid-001',
    question: {
      fr: 'Qu\'est-ce que le Taqlid ?',
      ar: 'ما هو التقليد؟',
      en: 'What is Taqlid?',
    },
    options: [
      { id: 'a', text: { fr: 'L\'innovation religieuse', ar: 'الابتداع الديني', en: 'Religious innovation' } },
      { id: 'b', text: { fr: 'Suivre l\'avis d\'un mujtahid sans connaître sa preuve détaillée', ar: 'اتباع قول مجتهد دون معرفة دليله التفصيلي', en: 'Following a mujtahid\'s opinion without knowing his detailed evidence' } },
      { id: 'c', text: { fr: 'Rejeter tous les savants', ar: 'رفض جميع العلماء', en: 'Rejecting all scholars' } },
      { id: 'd', text: { fr: 'Faire l\'Ijtihad', ar: 'القيام بالاجتهاد', en: 'Performing Ijtihad' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Taqlid est permis (voire obligatoire) pour le non-savant : "Demandez aux gens du Rappel si vous ne savez pas" (16:43). Suivre un madhab est une forme de Taqlid organisé.',
      ar: 'التقليد جائز (بل واجب) لغير العالم: "فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ" (النحل:43). واتباع المذهب تقليد منظم.',
      en: 'Taqlid is permissible (even obligatory) for non-scholars: "Ask the people of knowledge if you don\'t know" (16:43). Following a madhab is organized Taqlid.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'ijtihad-taqlid',
  },
];

// ============================================
// Questions - Nasikh wa Mansukh (Abrogation)
// ============================================

const naskhQuestions: ExamQuestion[] = [
  {
    id: 'usul-naskh-001',
    question: {
      fr: 'Qu\'est-ce que le Naskh (abrogation) dans le contexte des textes islamiques ?',
      ar: 'ما هو النسخ في سياق النصوص الإسلامية؟',
      en: 'What is Naskh (abrogation) in the context of Islamic texts?',
    },
    options: [
      { id: 'a', text: { fr: 'Effacer complètement un texte du Coran', ar: 'محو نص من القرآن تماما', en: 'Completely erasing a text from the Quran' } },
      { id: 'b', text: { fr: 'Lever (annuler) un jugement par un texte révélé postérieur', ar: 'رفع حكم شرعي بدليل شرعي متأخر', en: 'Lifting (canceling) a ruling by a later revealed text' } },
      { id: 'c', text: { fr: 'Interpréter un verset', ar: 'تفسير آية', en: 'Interpreting a verse' } },
      { id: 'd', text: { fr: 'Copier un manuscrit', ar: 'نسخ مخطوطة', en: 'Copying a manuscript' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Naskh est "lever un jugement légal par un texte révélé postérieur". Allah dit : "Si Nous abrogeons un verset ou le faisons oublier, Nous en apportons un meilleur ou semblable" (2:106). Condition : le nasikh doit être postérieur.',
      ar: 'النسخ هو "رفع حكم شرعي بدليل شرعي متأخر". قال تعالى: "مَا نَنسَخْ مِنْ آيَةٍ أَوْ نُنسِهَا نَأْتِ بِخَيْرٍ مِّنْهَا أَوْ مِثْلِهَا" (البقرة:106). الشرط: أن يكون الناسخ متأخرا.',
      en: 'Naskh is "lifting a legal ruling by a later revealed text". Allah says: "We do not abrogate a verse or cause it to be forgotten except that We bring forth better than it or similar" (2:106). Condition: nasikh must be later.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'naskh',
  },
  {
    id: 'usul-naskh-002',
    question: {
      fr: 'Quel type de Naskh est illustré par l\'évolution de l\'interdiction du vin (étapes progressives) ?',
      ar: 'ما نوع النسخ الذي يظهر في تحريم الخمر التدريجي؟',
      en: 'What type of Naskh is illustrated by the gradual prohibition of wine?',
    },
    options: [
      { id: 'a', text: { fr: 'Naskh al-Hukm wa at-Tilawa (abrogation du jugement et de la récitation)', ar: 'نسخ الحكم والتلاوة', en: 'Naskh al-Hukm wa at-Tilawa (abrogation of ruling and recitation)' } },
      { id: 'b', text: { fr: 'Naskh at-Tilawa duna al-Hukm (abrogation de la récitation sans le jugement)', ar: 'نسخ التلاوة دون الحكم', en: 'Naskh at-Tilawa duna al-Hukm (abrogation of recitation without ruling)' } },
      { id: 'c', text: { fr: 'Naskh al-Hukm duna at-Tilawa (abrogation du jugement, récitation reste)', ar: 'نسخ الحكم دون التلاوة', en: 'Naskh al-Hukm duna at-Tilawa (abrogation of ruling, recitation remains)' } },
      { id: 'd', text: { fr: 'Pas de Naskh, juste Takhsis (spécification)', ar: 'لا نسخ، بل تخصيص', en: 'No Naskh, just Takhsis (specification)' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le vin fut interdit progressivement : 1) Pas mention (licite), 2) "péché > bienfait" (2:219), 3) "ne priez pas ivres" (4:43), 4) interdiction totale (5:90). Les versets antérieurs restent récités mais leur jugement est abrogé. C\'est "Naskh al-Hukm duna at-Tilawa".',
      ar: 'حُرّم الخمر تدريجيا: ١) لا ذكر (حلال)، ٢) "إثمهما أكبر من نفعهما" (٢:٢١٩)، ٣) "لا تقربوا الصلاة وأنتم سكارى" (٤:٤٣)، ٤) تحريم تام (٥:٩٠). الآيات السابقة باقية التلاوة لكن حكمها منسوخ. هذا "نسخ الحكم دون التلاوة".',
      en: 'Wine prohibited gradually: 1) No mention (lawful), 2) "sin > benefit" (2:219), 3) "don\'t pray intoxicated" (4:43), 4) total prohibition (5:90). Earlier verses remain recited but their ruling is abrogated. This is "Naskh al-Hukm duna at-Tilawa".',
    },
    points: 3,
    difficulty: 'hard',
    category: 'naskh',
  },
  {
    id: 'usul-naskh-003',
    question: {
      fr: 'La Sunna peut-elle abroger le Coran selon les savants ?',
      ar: 'هل يمكن للسنة أن تنسخ القرآن عند العلماء؟',
      en: 'Can the Sunnah abrogate the Quran according to scholars?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, la Sunna Mutawatira peut abroger le Coran (avis majoritaire Shafi\'i, Hanbali)', ar: 'نعم، السنة المتواترة يمكن أن تنسخ القرآن (رأي الجمهور الشافعي، الحنبلي)', en: 'Yes, Mutawatir Sunnah can abrogate Quran (majority Shafi\'i, Hanbali opinion)' } },
      { id: 'b', text: { fr: 'Non, jamais selon tous les savants', ar: 'لا، أبدا عند جميع العلماء', en: 'No, never according to all scholars' } },
      { id: 'c', text: { fr: 'Seulement les hadiths faibles', ar: 'الأحاديث الضعيفة فقط', en: 'Only weak hadiths' } },
      { id: 'd', text: { fr: 'La Sunna n\'a aucun pouvoir législatif', ar: 'السنة لا سلطة تشريعية لها', en: 'Sunnah has no legislative power' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Avis majoritaire (Shafi\'i, Hanbali, Ibn Hazm) : Oui, car la Sunna est aussi révélation (Wahy). Exemple débattu : orientation vers Jérusalem (Coran implicite) abrogée par Sunna vers la Ka\'ba confirmée par Coran (2:144). Hanafis/Malikis : préfèrent que le Coran abroge le Coran.',
      ar: 'رأي الجمهور (الشافعي، الحنبلي، ابن حزم): نعم، لأن السنة أيضا وحي. مثال مُتنازع: التوجه لبيت المقدس (قرآن ضمني) نُسخ بالسنة للكعبة ثم أُكّد بالقرآن (٢:١٤٤). الحنفية/المالكية: يفضلون أن القرآن ينسخ القرآن.',
      en: 'Majority opinion (Shafi\'i, Hanbali, Ibn Hazm): Yes, as Sunnah is also revelation (Wahy). Debated example: direction toward Jerusalem (implicit Quran) abrogated by Sunnah toward Ka\'ba confirmed by Quran (2:144). Hanafis/Malikis: prefer Quran abrogates Quran.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'naskh',
  },
];

// ============================================
// Questions - Istidlal Méthodologique Avancé
// ============================================

const istidlalQuestions: ExamQuestion[] = [
  {
    id: 'usul-istidlal-001',
    question: {
      fr: 'Qu\'est-ce que le "Mafhum al-Mukhalafa" (concept d\'opposition) ?',
      ar: 'ما هو "مفهوم المخالفة"؟',
      en: 'What is "Mafhum al-Mukhalafa" (concept of opposition)?',
    },
    options: [
      { id: 'a', text: { fr: 'Le sens explicite du texte', ar: 'المعنى الصريح للنص', en: 'The explicit meaning of the text' } },
      { id: 'b', text: { fr: 'Déduire que le jugement opposé s\'applique au cas non mentionné', ar: 'استنباط أن الحكم المعاكس يُطبق على الحالة غير المذكورة', en: 'Deducing that the opposite ruling applies to the unmentioned case' } },
      { id: 'c', text: { fr: 'Contradiction entre deux textes', ar: 'تعارض بين نصين', en: 'Contradiction between two texts' } },
      { id: 'd', text: { fr: 'Opinion personnelle', ar: 'رأي شخصي', en: 'Personal opinion' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Exemple : "Dans les moutons qui paissent librement (Sa\'ima), la Zakat" → Mafhum : pas de Zakat sur les moutons nourris (Ma\'lufa) selon certains. Les Hanafis rejettent ce Mafhum, les Shafi\'is l\'acceptent si la restriction est significative.',
      ar: 'مثال: "في الغنم السائمة زكاة" → المفهوم: لا زكاة في الغنم المعلوفة عند البعض. الحنفية يرفضون هذا المفهوم، الشافعية يقبلونه إن كان القيد مؤثرا.',
      en: 'Example: "In freely grazing sheep (Sa\'ima), Zakat" → Mafhum: no Zakat on fed sheep (Ma\'lufa) per some. Hanafis reject this Mafhum, Shafi\'is accept if restriction is significant.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'istidlal',
  },
  {
    id: 'usul-istidlal-002',
    question: {
      fr: 'Qu\'est-ce que "Sadd adh-Dhara\'i\'" (bloquer les moyens menant au mal) ?',
      ar: 'ما هو "سد الذرائع"؟',
      en: 'What is "Sadd adh-Dhara\'i\'" (blocking means leading to evil)?',
    },
    options: [
      { id: 'a', text: { fr: 'Interdire un acte licite s\'il mène probablement à un interdit', ar: 'تحريم فعل حلال إن أدى غالبا لحرام', en: 'Prohibiting a lawful act if it likely leads to forbidden' } },
      { id: 'b', text: { fr: 'Permettre tout', ar: 'إباحة كل شيء', en: 'Permitting everything' } },
      { id: 'c', text: { fr: 'Suivre uniquement le texte littéral', ar: 'اتباع النص الحرفي فقط', en: 'Following only literal text' } },
      { id: 'd', text: { fr: 'Rejeter la Sunna', ar: 'رفض السنة', en: 'Rejecting Sunnah' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Sadd adh-Dhara\'i\' est un principe Maliki/Hanbali fort. Exemple : Interdire vendre des raisins à un fabricant de vin (vente licite → usage interdit). Coran : "N\'insultez pas les idoles de peur qu\'ils n\'insultent Allah" (6:108) - bloquer insulte (licite) car mène à blasphème.',
      ar: 'سد الذرائع مبدأ مالكي/حنبلي قوي. مثال: منع بيع العنب لصانع خمر (بيع حلال → استعمال حرام). قرآن: "وَلَا تَسُبُّوا الَّذِينَ يَدْعُونَ مِن دُونِ اللَّهِ فَيَسُبُّوا اللَّهَ عَدْوًا" (الأنعام:١٠٨) - منع السب (حلال) لأنه يؤدي للتجديف.',
      en: 'Sadd adh-Dhara\'i\' is a strong Maliki/Hanbali principle. Example: Prohibit selling grapes to wine maker (lawful sale → forbidden use). Quran: "Don\'t insult idols lest they insult Allah" (6:108) - block insult (lawful) as leads to blasphemy.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'istidlal',
  },
  {
    id: 'usul-istidlal-003',
    question: {
      fr: 'Quelle est la différence entre Qiyas (analogie) et Istihsan (préférence juridique) ?',
      ar: 'ما الفرق بين القياس والاستحسان؟',
      en: 'What is the difference between Qiyas (analogy) and Istihsan (juristic preference)?',
    },
    options: [
      { id: 'a', text: { fr: 'Qiyas = analogie stricte basée sur \'Illa. Istihsan = délaisser Qiyas évident pour un Qiyas caché/Maslaha plus fort', ar: 'القياس = قياس صارم على علة. الاستحسان = ترك قياس ظاهر لقياس خفي/مصلحة أقوى', en: 'Qiyas = strict analogy based on \'Illa. Istihsan = leaving obvious Qiyas for hidden Qiyas/stronger Maslaha' } },
      { id: 'b', text: { fr: 'Ce sont identiques', ar: 'متطابقان', en: 'They are identical' } },
      { id: 'c', text: { fr: 'Istihsan est interdit par tous', ar: 'الاستحسان محرم عند الجميع', en: 'Istihsan is forbidden by all' } },
      { id: 'd', text: { fr: 'Qiyas n\'existe pas', ar: 'القياس غير موجود', en: 'Qiyas doesn\'t exist' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Istihsan (Hanafi, Maliki) = délaisser un Qiyas évident pour une preuve cachée ou Maslaha. Exemple : Qiyas dit puits touché par impureté = impur entièrement. Istihsan : si eau abondante, seule partie touchée est impure (Hadith + Maslaha). Shafi\'i refuse : "Qui fait Istihsan légifère".',
      ar: 'الاستحسان (حنفي، مالكي) = ترك قياس ظاهر لدليل خفي أو مصلحة. مثال: القياس يقول بئر مسّته نجاسة = نجس كله. الاستحسان: إن كان الماء كثيرا، فقط الجزء الملموس نجس (حديث + مصلحة). الشافعي يرفض: "من استحسن فقد شرّع".',
      en: 'Istihsan (Hanafi, Maliki) = leaving obvious Qiyas for hidden evidence or Maslaha. Example: Qiyas says well touched by impurity = entirely impure. Istihsan: if water abundant, only touched part impure (Hadith + Maslaha). Shafi\'i rejects: "Whoever does Istihsan legislates".',
    },
    points: 3,
    difficulty: 'hard',
    category: 'istidlal',
  },
];

// ============================================
// Assemblage de l'examen COMPLET
// ============================================

const allQuestions: ExamQuestion[] = [
  ...sourcesQuestions,          // 4 questions
  ...ahkamQuestions,            // 3 questions
  ...interpretationQuestions,   // 3 questions
  ...madhabQuestions,           // 3 questions
  ...maqasidQuestions,          // 2 questions
  ...qawaidQuestions,           // 3 questions
  ...maslahIstihsanQuestions,   // 3 questions
  ...ijtihadTaqlidQuestions,    // 3 questions
  ...naskhQuestions,            // 3 questions (NOUVEAU Phase 2)
  ...istidlalQuestions,         // 3 questions (NOUVEAU Phase 2)
  // Total : 30 questions
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
    fr: 'Examen de 25 questions sélectionnées aléatoirement parmi une banque de 30 questions. Couvre les fondements du droit islamique incluant Naskh et Istidlal avancé.',
    ar: 'امتحان من 25 سؤالاً يتم اختيارها عشوائياً من بنك يضم 30 سؤالاً. يغطي أصول الفقه بما في ذلك النسخ والاستدلال المتقدم.',
    en: 'Exam with 25 questions randomly selected from a pool of 30. Covers foundations of Islamic law including Naskh and advanced Istidlal.',
  },
  instructions: {
    fr: 'Vous avez 40 minutes pour répondre à 25 questions. Chaque question a une seule bonne réponse. Un score de 70% est requis pour réussir.',
    ar: 'لديك 40 دقيقة للإجابة على 25 سؤالاً. لكل سؤال إجابة صحيحة واحدة. يُشترط 70% للنجاح.',
    en: 'You have 40 minutes to answer 25 questions. Each question has one correct answer. A score of 70% is required to pass.',
  },
  courseSlug: 'usul-al-fiqh',
  questionPool: allQuestions,
  questionsPerExam: 25,
  categoryConfig: [
    { category: 'sources', count: 3 },
    { category: 'ahkam', count: 2 },
    { category: 'interpretation', count: 2 },
    { category: 'madhab', count: 3 },
    { category: 'maqasid', count: 2 },
    { category: 'qawaid', count: 3 },
    { category: 'maslaha-istihsan', count: 3 },
    { category: 'ijtihad-taqlid', count: 2 },
    { category: 'naskh', count: 3 },
    { category: 'istidlal', count: 2 },
  ],
  questions: [],
  duration: 40,
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
