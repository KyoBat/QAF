/**
 * Quiz de Placement - Évaluation du Niveau
 * 
 * Ce quiz évalue le niveau global de l'étudiant dans les sciences islamiques
 * pour recommander un parcours d'apprentissage personnalisé.
 * 
 * Structure : 30 questions réparties sur 6 catégories
 * - Aqeedah (5 questions)
 * - Fiqh (5 questions)  
 * - Seerah (5 questions)
 * - Coran/Tajweed (5 questions)
 * - Hadith (5 questions)
 * - Histoire (5 questions)
 * 
 * Chaque catégorie a des questions de 3 niveaux : débutant, intermédiaire, avancé
 */

import { Quiz, Question } from '../types';

// ============================================
// Questions Aqeedah
// ============================================
const aqeedahQuestions: Question[] = [
  {
    id: 'placement-aqeedah-001',
    type: 'single',
    difficulty: 'easy',
    category: 'aqeedah',
    question: {
      fr: 'Combien y a-t-il de piliers de l\'Islam ?',
      ar: 'كم عدد أركان الإسلام؟',
      en: 'How many pillars of Islam are there?',
    },
    options: [
      { id: 'a', text: { fr: '3', ar: '٣', en: '3' } },
      { id: 'b', text: { fr: '5', ar: '٥', en: '5' } },
      { id: 'c', text: { fr: '6', ar: '٦', en: '6' } },
      { id: 'd', text: { fr: '7', ar: '٧', en: '7' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les 5 piliers de l\'Islam sont : Shahada, Salat, Zakat, Sawm et Hajj.',
      ar: 'أركان الإسلام الخمسة: الشهادة، الصلاة، الزكاة، الصوم، والحج.',
      en: 'The 5 pillars of Islam are: Shahada, Salat, Zakat, Sawm and Hajj.',
    },
    points: 10,
    tags: ['aqeedah', 'pillars', 'basics'],
  },
  {
    id: 'placement-aqeedah-002',
    type: 'single',
    difficulty: 'easy',
    category: 'aqeedah',
    question: {
      fr: 'Combien y a-t-il de piliers de la foi (Iman) ?',
      ar: 'كم عدد أركان الإيمان؟',
      en: 'How many pillars of faith (Iman) are there?',
    },
    options: [
      { id: 'a', text: { fr: '5', ar: '٥', en: '5' } },
      { id: 'b', text: { fr: '6', ar: '٦', en: '6' } },
      { id: 'c', text: { fr: '7', ar: '٧', en: '7' } },
      { id: 'd', text: { fr: '4', ar: '٤', en: '4' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les 6 piliers de l\'Iman : croire en Allah, Ses anges, Ses livres, Ses messagers, le Jour Dernier et le Destin.',
      ar: 'أركان الإيمان الستة: الإيمان بالله، وملائكته، وكتبه، ورسله، واليوم الآخر، والقدر.',
      en: 'The 6 pillars of Iman: belief in Allah, His angels, His books, His messengers, the Last Day and Destiny.',
    },
    points: 10,
    tags: ['aqeedah', 'iman', 'basics'],
  },
  {
    id: 'placement-aqeedah-003',
    type: 'single',
    difficulty: 'medium',
    category: 'aqeedah',
    question: {
      fr: 'Qu\'est-ce que le Tawhid al-Uluhiyya ?',
      ar: 'ما هو توحيد الألوهية؟',
      en: 'What is Tawhid al-Uluhiyya?',
    },
    options: [
      { id: 'a', text: { fr: 'L\'unicité d\'Allah dans la création', ar: 'وحدانية الله في الخلق', en: 'Allah\'s oneness in creation' } },
      { id: 'b', text: { fr: 'L\'unicité d\'Allah dans l\'adoration', ar: 'وحدانية الله في العبادة', en: 'Allah\'s oneness in worship' } },
      { id: 'c', text: { fr: 'L\'unicité des Noms et Attributs', ar: 'وحدانية الأسماء والصفات', en: 'Oneness of Names and Attributes' } },
      { id: 'd', text: { fr: 'La croyance aux anges', ar: 'الإيمان بالملائكة', en: 'Belief in angels' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Tawhid al-Uluhiyya signifie n\'adorer qu\'Allah seul, sans Lui associer quoi que ce soit.',
      ar: 'توحيد الألوهية يعني عبادة الله وحده لا شريك له.',
      en: 'Tawhid al-Uluhiyya means worshipping Allah alone, without associating anything with Him.',
    },
    points: 15,
    tags: ['aqeedah', 'tawhid', 'uluhiyya'],
  },
  {
    id: 'placement-aqeedah-004',
    type: 'single',
    difficulty: 'medium',
    category: 'aqeedah',
    question: {
      fr: 'Quelle est la position d\'Ahl as-Sunna sur les Attributs divins (Sifat) ?',
      ar: 'ما موقف أهل السنة من صفات الله؟',
      en: 'What is Ahl as-Sunna\'s position on Divine Attributes (Sifat)?',
    },
    options: [
      { id: 'a', text: { fr: 'Les nier complètement', ar: 'نفيها تماماً', en: 'Deny them completely' } },
      { id: 'b', text: { fr: 'Les affirmer sans les assimiler ni les nier', ar: 'إثباتها بلا تشبيه ولا تعطيل', en: 'Affirm them without likening or denying' } },
      { id: 'c', text: { fr: 'Les interpréter métaphoriquement', ar: 'تأويلها مجازياً', en: 'Interpret them metaphorically' } },
      { id: 'd', text: { fr: 'Les assimiler aux créatures', ar: 'تشبيهها بالمخلوقات', en: 'Liken them to creatures' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Ahl as-Sunna affirment les Sifat comme elles sont révélées, sans tashbih (ressemblance) ni ta\'til (négation).',
      ar: 'أهل السنة يُثبتون الصفات كما وردت، بلا تشبيه ولا تعطيل.',
      en: 'Ahl as-Sunna affirm Sifat as revealed, without tashbih (resemblance) or ta\'til (negation).',
    },
    points: 15,
    tags: ['aqeedah', 'sifat', 'ahl-sunna'],
  },
  {
    id: 'placement-aqeedah-005',
    type: 'single',
    difficulty: 'hard',
    category: 'aqeedah',
    question: {
      fr: 'Quelles sont les 7 conditions de validité de "La ilaha illa Allah" ?',
      ar: 'ما شروط "لا إله إلا الله" السبعة؟',
      en: 'What are the 7 conditions of "La ilaha illa Allah"?',
    },
    options: [
      { id: 'a', text: { fr: 'Ilm, Yaqin, Qabul, Inqiyad, Sidq, Ikhlas, Mahabba', ar: 'العلم، اليقين، القبول، الانقياد، الصدق، الإخلاص، المحبة', en: 'Ilm, Yaqin, Qabul, Inqiyad, Sidq, Ikhlas, Mahabba' } },
      { id: 'b', text: { fr: 'Les 5 piliers de l\'Islam', ar: 'أركان الإسلام الخمسة', en: 'The 5 pillars of Islam' } },
      { id: 'c', text: { fr: 'Les 6 piliers de la foi', ar: 'أركان الإيمان الستة', en: 'The 6 pillars of faith' } },
      { id: 'd', text: { fr: 'Il n\'y a pas de conditions', ar: 'لا شروط', en: 'There are no conditions' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les 7 conditions : Connaissance, Certitude, Acceptation, Soumission, Véracité, Sincérité, Amour.',
      ar: 'الشروط السبعة: العلم، اليقين، القبول، الانقياد، الصدق، الإخلاص، المحبة.',
      en: 'The 7 conditions: Knowledge, Certainty, Acceptance, Submission, Truthfulness, Sincerity, Love.',
    },
    points: 20,
    tags: ['aqeedah', 'shahada', 'conditions'],
  },
];

// ============================================
// Questions Fiqh
// ============================================
const fiqhQuestions: Question[] = [
  {
    id: 'placement-fiqh-001',
    type: 'single',
    difficulty: 'easy',
    category: 'fiqh',
    question: {
      fr: 'Combien de prières obligatoires y a-t-il par jour ?',
      ar: 'كم عدد الصلوات المفروضة في اليوم؟',
      en: 'How many obligatory prayers are there per day?',
    },
    options: [
      { id: 'a', text: { fr: '3', ar: '٣', en: '3' } },
      { id: 'b', text: { fr: '4', ar: '٤', en: '4' } },
      { id: 'c', text: { fr: '5', ar: '٥', en: '5' } },
      { id: 'd', text: { fr: '7', ar: '٧', en: '7' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Les 5 prières sont : Fajr, Dhuhr, Asr, Maghrib et Isha.',
      ar: 'الصلوات الخمس: الفجر، الظهر، العصر، المغرب، والعشاء.',
      en: 'The 5 prayers are: Fajr, Dhuhr, Asr, Maghrib and Isha.',
    },
    points: 10,
    tags: ['fiqh', 'salat', 'basics'],
  },
  {
    id: 'placement-fiqh-002',
    type: 'single',
    difficulty: 'easy',
    category: 'fiqh',
    question: {
      fr: 'Qu\'est-ce qui annule le wudu (ablution) ?',
      ar: 'ما الذي يُبطل الوضوء؟',
      en: 'What invalidates wudu (ablution)?',
    },
    options: [
      { id: 'a', text: { fr: 'Boire de l\'eau', ar: 'شرب الماء', en: 'Drinking water' } },
      { id: 'b', text: { fr: 'Sortir de gaz/uriner/déféquer', ar: 'خروج الريح/البول/الغائط', en: 'Passing gas/urinating/defecating' } },
      { id: 'c', text: { fr: 'Parler', ar: 'الكلام', en: 'Speaking' } },
      { id: 'd', text: { fr: 'Marcher', ar: 'المشي', en: 'Walking' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Ce qui sort des voies naturelles (gaz, urine, selles) annule le wudu.',
      ar: 'ما خرج من السبيلين (الريح، البول، الغائط) ينقض الوضوء.',
      en: 'What exits from the private parts (gas, urine, feces) invalidates wudu.',
    },
    points: 10,
    tags: ['fiqh', 'tahara', 'wudu'],
  },
  {
    id: 'placement-fiqh-003',
    type: 'single',
    difficulty: 'medium',
    category: 'fiqh',
    question: {
      fr: 'Quel est le nisab (seuil) de la Zakat sur l\'or ?',
      ar: 'ما نصاب زكاة الذهب؟',
      en: 'What is the nisab (threshold) for Zakat on gold?',
    },
    options: [
      { id: 'a', text: { fr: '85 grammes', ar: '85 غراماً', en: '85 grams' } },
      { id: 'b', text: { fr: '50 grammes', ar: '50 غراماً', en: '50 grams' } },
      { id: 'c', text: { fr: '100 grammes', ar: '100 غرام', en: '100 grams' } },
      { id: 'd', text: { fr: '200 grammes', ar: '200 غرام', en: '200 grams' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le nisab de l\'or est d\'environ 85 grammes (20 dinars). On paie 2,5% si on possède ce montant pendant un an.',
      ar: 'نصاب الذهب حوالي 85 غراماً (20 ديناراً). يُخرج 2.5% إذا مرّ عليه الحول.',
      en: 'Gold\'s nisab is about 85 grams (20 dinars). One pays 2.5% if possessed for a year.',
    },
    points: 15,
    tags: ['fiqh', 'zakat', 'nisab'],
  },
  {
    id: 'placement-fiqh-004',
    type: 'single',
    difficulty: 'medium',
    category: 'fiqh',
    question: {
      fr: 'Quelles sont les sources du Fiqh selon leur ordre de priorité ?',
      ar: 'ما مصادر الفقه حسب ترتيب الأولوية؟',
      en: 'What are the sources of Fiqh in order of priority?',
    },
    options: [
      { id: 'a', text: { fr: 'Coran, Sunna, Ijma\', Qiyas', ar: 'القرآن، السنة، الإجماع، القياس', en: 'Quran, Sunna, Ijma\', Qiyas' } },
      { id: 'b', text: { fr: 'Sunna, Coran, Qiyas, Ijma\'', ar: 'السنة، القرآن، القياس، الإجماع', en: 'Sunna, Quran, Qiyas, Ijma\'' } },
      { id: 'c', text: { fr: 'Ijma\', Coran, Sunna, Qiyas', ar: 'الإجماع، القرآن، السنة، القياس', en: 'Ijma\', Quran, Sunna, Qiyas' } },
      { id: 'd', text: { fr: 'Qiyas, Sunna, Coran, Ijma\'', ar: 'القياس، السنة، القرآن، الإجماع', en: 'Qiyas, Sunna, Quran, Ijma\'' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'L\'ordre est : 1) Coran (parole d\'Allah), 2) Sunna (enseignements du Prophète ﷺ), 3) Ijma\' (consensus), 4) Qiyas (raisonnement analogique).',
      ar: 'الترتيب: 1) القرآن (كلام الله)، 2) السنة (هدي النبي ﷺ)، 3) الإجماع، 4) القياس.',
      en: 'Order is: 1) Quran (Allah\'s word), 2) Sunna (Prophet\'s ﷺ teachings), 3) Ijma\' (consensus), 4) Qiyas (analogical reasoning).',
    },
    points: 15,
    tags: ['fiqh', 'usul', 'sources'],
  },
  {
    id: 'placement-fiqh-005',
    type: 'single',
    difficulty: 'hard',
    category: 'fiqh',
    question: {
      fr: 'Quelle est la différence entre "Fard Ayn" et "Fard Kifaya" ?',
      ar: 'ما الفرق بين "فرض العين" و"فرض الكفاية"؟',
      en: 'What is the difference between "Fard Ayn" and "Fard Kifaya"?',
    },
    options: [
      { id: 'a', text: { fr: 'Ayn = obligatoire sur chacun ; Kifaya = si certains le font, les autres sont exemptés', ar: 'عين = واجب على كل فرد ؛ كفاية = إذا قام به البعض سقط عن الباقين', en: 'Ayn = obligatory on each; Kifaya = if some do it, others are exempted' } },
      { id: 'b', text: { fr: 'Ayn = recommandé ; Kifaya = obligatoire', ar: 'عين = مستحب ؛ كفاية = واجب', en: 'Ayn = recommended; Kifaya = obligatory' } },
      { id: 'c', text: { fr: 'Pas de différence', ar: 'لا فرق', en: 'No difference' } },
      { id: 'd', text: { fr: 'Ayn = pour les hommes ; Kifaya = pour les femmes', ar: 'عين = للرجال ؛ كفاية = للنساء', en: 'Ayn = for men; Kifaya = for women' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Fard Ayn (ex: les 5 prières) incombe à chaque musulman. Fard Kifaya (ex: prière funéraire) : si un groupe l\'accomplit, le reste est exempté.',
      ar: 'فرض العين (مثل: الصلوات الخمس) واجب على كل مسلم. فرض الكفاية (مثل: صلاة الجنازة): إذا قام به البعض سقط عن الباقين.',
      en: 'Fard Ayn (e.g., 5 prayers) is on every Muslim. Fard Kifaya (e.g., funeral prayer): if some do it, others are exempted.',
    },
    points: 20,
    tags: ['fiqh', 'usul', 'fard'],
  },
];

// ============================================
// Questions Seerah
// ============================================
const seerahQuestions: Question[] = [
  {
    id: 'placement-seerah-001',
    type: 'single',
    difficulty: 'easy',
    category: 'seerah',
    question: {
      fr: 'Dans quelle ville le Prophète ﷺ est-il né ?',
      ar: 'في أي مدينة وُلد النبي ﷺ؟',
      en: 'In which city was the Prophet ﷺ born?',
    },
    options: [
      { id: 'a', text: { fr: 'Médine', ar: 'المدينة', en: 'Medina' } },
      { id: 'b', text: { fr: 'La Mecque', ar: 'مكة', en: 'Mecca' } },
      { id: 'c', text: { fr: 'Taif', ar: 'الطائف', en: 'Taif' } },
      { id: 'd', text: { fr: 'Jérusalem', ar: 'القدس', en: 'Jerusalem' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète Muhammad ﷺ naquit à La Mecque en l\'an de l\'éléphant (~570).',
      ar: 'وُلد النبي محمد ﷺ في مكة في عام الفيل (~570م).',
      en: 'Prophet Muhammad ﷺ was born in Mecca in the Year of the Elephant (~570).',
    },
    points: 10,
    tags: ['seerah', 'birth', 'mecca'],
  },
  {
    id: 'placement-seerah-002',
    type: 'single',
    difficulty: 'easy',
    category: 'seerah',
    question: {
      fr: 'Qui était la première épouse du Prophète ﷺ ?',
      ar: 'من كانت أول زوجة للنبي ﷺ؟',
      en: 'Who was the Prophet\'s ﷺ first wife?',
    },
    options: [
      { id: 'a', text: { fr: 'Aisha', ar: 'عائشة', en: 'Aisha' } },
      { id: 'b', text: { fr: 'Khadija', ar: 'خديجة', en: 'Khadija' } },
      { id: 'c', text: { fr: 'Hafsa', ar: 'حفصة', en: 'Hafsa' } },
      { id: 'd', text: { fr: 'Fatima', ar: 'فاطمة', en: 'Fatima' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Khadija bint Khuwaylid fut la première épouse et la première à croire en lui.',
      ar: 'خديجة بنت خويلد كانت أول زوجاته وأول من آمن به.',
      en: 'Khadija bint Khuwaylid was his first wife and first believer.',
    },
    points: 10,
    tags: ['seerah', 'khadija', 'wives'],
  },
  {
    id: 'placement-seerah-003',
    type: 'single',
    difficulty: 'medium',
    category: 'seerah',
    question: {
      fr: 'En quelle année eut lieu la Hijra vers Médine ?',
      ar: 'في أي سنة وقعت الهجرة إلى المدينة؟',
      en: 'In what year did the Hijra to Medina occur?',
    },
    options: [
      { id: 'a', text: { fr: '610', ar: '610م', en: '610' } },
      { id: 'b', text: { fr: '622', ar: '622م', en: '622' } },
      { id: 'c', text: { fr: '630', ar: '630م', en: '630' } },
      { id: 'd', text: { fr: '632', ar: '632م', en: '632' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La Hijra eut lieu en 622, date qui marque le début du calendrier islamique.',
      ar: 'وقعت الهجرة عام 622م، وهي بداية التقويم الهجري.',
      en: 'The Hijra occurred in 622, marking the start of the Islamic calendar.',
    },
    points: 15,
    tags: ['seerah', 'hijra', 'date'],
  },
  {
    id: 'placement-seerah-004',
    type: 'single',
    difficulty: 'medium',
    category: 'seerah',
    question: {
      fr: 'Quelle fut la première grande bataille de l\'Islam ?',
      ar: 'ما أول غزوة كبرى في الإسلام؟',
      en: 'What was the first major battle of Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Uhud', ar: 'أحد', en: 'Uhud' } },
      { id: 'b', text: { fr: 'Badr', ar: 'بدر', en: 'Badr' } },
      { id: 'c', text: { fr: 'Khandaq', ar: 'الخندق', en: 'Khandaq' } },
      { id: 'd', text: { fr: 'Hunayn', ar: 'حنين', en: 'Hunayn' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La bataille de Badr (2H/624) fut la première grande victoire : 313 musulmans contre ~1000 Quraysh.',
      ar: 'غزوة بدر (2هـ/624م) كانت أول انتصار كبير: 313 مسلماً ضد ~1000 من قريش.',
      en: 'Battle of Badr (2H/624) was first major victory: 313 Muslims vs ~1000 Quraysh.',
    },
    points: 15,
    tags: ['seerah', 'badr', 'battle'],
  },
  {
    id: 'placement-seerah-005',
    type: 'single',
    difficulty: 'hard',
    category: 'seerah',
    question: {
      fr: 'Qu\'était la "Sahifa al-Madina" (Constitution de Médine) ?',
      ar: 'ما هي "صحيفة المدينة"؟',
      en: 'What was the "Sahifa al-Madina" (Constitution of Medina)?',
    },
    options: [
      { id: 'a', text: { fr: 'Charte établissant les droits de tous les habitants de Médine', ar: 'ميثاق يحدد حقوق جميع سكان المدينة', en: 'Charter establishing rights of all Medina inhabitants' } },
      { id: 'b', text: { fr: 'Déclaration de guerre', ar: 'إعلان حرب', en: 'Declaration of war' } },
      { id: 'c', text: { fr: 'Contrat commercial', ar: 'عقد تجاري', en: 'Commercial contract' } },
      { id: 'd', text: { fr: 'Traité de paix avec Quraysh', ar: 'معاهدة سلام مع قريش', en: 'Peace treaty with Quraysh' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'La Sahifa (~622) est considérée comme la première constitution écrite, définissant droits et devoirs de tous.',
      ar: 'الصحيفة (~622م) تُعتبر أول دستور مكتوب، تحدد حقوق وواجبات الجميع.',
      en: 'The Sahifa (~622) is considered the first written constitution, defining rights and duties of all.',
    },
    points: 20,
    tags: ['seerah', 'sahifa', 'constitution'],
  },
];

// ============================================
// Questions Coran/Tajweed
// ============================================
const quranQuestions: Question[] = [
  {
    id: 'placement-quran-001',
    type: 'single',
    difficulty: 'easy',
    category: 'quran',
    question: {
      fr: 'Combien de sourates contient le Coran ?',
      ar: 'كم عدد سور القرآن؟',
      en: 'How many surahs does the Quran contain?',
    },
    options: [
      { id: 'a', text: { fr: '100', ar: '١٠٠', en: '100' } },
      { id: 'b', text: { fr: '114', ar: '١١٤', en: '114' } },
      { id: 'c', text: { fr: '120', ar: '١٢٠', en: '120' } },
      { id: 'd', text: { fr: '99', ar: '٩٩', en: '99' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Coran contient 114 sourates, de Al-Fatiha à An-Nas.',
      ar: 'القرآن يحتوي على 114 سورة، من الفاتحة إلى الناس.',
      en: 'The Quran contains 114 surahs, from Al-Fatiha to An-Nas.',
    },
    points: 10,
    tags: ['quran', 'surahs', 'basics'],
  },
  {
    id: 'placement-quran-002',
    type: 'single',
    difficulty: 'easy',
    category: 'quran',
    question: {
      fr: 'Quelle est la plus longue sourate du Coran ?',
      ar: 'ما أطول سورة في القرآن؟',
      en: 'What is the longest surah in the Quran?',
    },
    options: [
      { id: 'a', text: { fr: 'Al-Fatiha', ar: 'الفاتحة', en: 'Al-Fatiha' } },
      { id: 'b', text: { fr: 'Al-Baqara', ar: 'البقرة', en: 'Al-Baqara' } },
      { id: 'c', text: { fr: 'Yasin', ar: 'يس', en: 'Yasin' } },
      { id: 'd', text: { fr: 'Al-Kahf', ar: 'الكهف', en: 'Al-Kahf' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Sourate Al-Baqara (La Vache) compte 286 versets, c\'est la plus longue.',
      ar: 'سورة البقرة تتكون من 286 آية، وهي الأطول.',
      en: 'Surah Al-Baqara (The Cow) has 286 verses, the longest.',
    },
    points: 10,
    tags: ['quran', 'baqara', 'basics'],
  },
  {
    id: 'placement-quran-003',
    type: 'single',
    difficulty: 'medium',
    category: 'quran',
    question: {
      fr: 'Qu\'est-ce que le "Madd" en Tajweed ?',
      ar: 'ما هو "المد" في التجويد؟',
      en: 'What is "Madd" in Tajweed?',
    },
    options: [
      { id: 'a', text: { fr: 'L\'allongement d\'une voyelle', ar: 'إطالة حرف المد', en: 'Lengthening of a vowel' } },
      { id: 'b', text: { fr: 'L\'arrêt à la fin d\'un verset', ar: 'الوقف آخر الآية', en: 'Stopping at verse end' } },
      { id: 'c', text: { fr: 'La fusion de deux lettres', ar: 'دمج حرفين', en: 'Merging two letters' } },
      { id: 'd', text: { fr: 'Le nasallement', ar: 'الغنة', en: 'Nasalization' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Madd est l\'allongement des lettres Alif, Waw et Ya\' selon des règles précises.',
      ar: 'المد هو إطالة حروف الألف والواو والياء وفق قواعد محددة.',
      en: 'Madd is lengthening of letters Alif, Waw and Ya\' according to specific rules.',
    },
    points: 15,
    tags: ['tajweed', 'madd', 'rules'],
  },
  {
    id: 'placement-quran-004',
    type: 'single',
    difficulty: 'medium',
    category: 'quran',
    question: {
      fr: 'Que signifie "Makki" et "Madani" pour les sourates ?',
      ar: 'ما معنى "مكي" و"مدني" للسور؟',
      en: 'What does "Makki" and "Madani" mean for surahs?',
    },
    options: [
      { id: 'a', text: { fr: 'Révélées avant/après la Hijra', ar: 'نزلت قبل/بعد الهجرة', en: 'Revealed before/after Hijra' } },
      { id: 'b', text: { fr: 'Courtes/longues', ar: 'قصيرة/طويلة', en: 'Short/long' } },
      { id: 'c', text: { fr: 'Faciles/difficiles', ar: 'سهلة/صعبة', en: 'Easy/difficult' } },
      { id: 'd', text: { fr: 'Pour hommes/femmes', ar: 'للرجال/للنساء', en: 'For men/women' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Makki = révélé avant la Hijra (souvent sur la foi). Madani = après la Hijra (souvent sur la législation).',
      ar: 'مكي = نزل قبل الهجرة (غالباً عن العقيدة). مدني = بعد الهجرة (غالباً عن التشريع).',
      en: 'Makki = revealed before Hijra (often on faith). Madani = after Hijra (often on legislation).',
    },
    points: 15,
    tags: ['quran', 'makki', 'madani'],
  },
  {
    id: 'placement-quran-005',
    type: 'single',
    difficulty: 'hard',
    category: 'quran',
    question: {
      fr: 'Qu\'est-ce que "Asbab an-Nuzul" ?',
      ar: 'ما هي "أسباب النزول"؟',
      en: 'What is "Asbab an-Nuzul"?',
    },
    options: [
      { id: 'a', text: { fr: 'Les circonstances/événements ayant occasionné la révélation d\'un verset', ar: 'الظروف/الأحداث التي سببت نزول آية', en: 'Circumstances/events that occasioned revelation of a verse' } },
      { id: 'b', text: { fr: 'L\'ordre des sourates', ar: 'ترتيب السور', en: 'Order of surahs' } },
      { id: 'c', text: { fr: 'Les règles de récitation', ar: 'قواعد التلاوة', en: 'Recitation rules' } },
      { id: 'd', text: { fr: 'Les noms d\'Allah', ar: 'أسماء الله', en: 'Names of Allah' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Asbab an-Nuzul aide à comprendre le contexte et le sens précis des versets coraniques.',
      ar: 'أسباب النزول تساعد على فهم سياق ومعنى الآيات القرآنية.',
      en: 'Asbab an-Nuzul helps understand context and precise meaning of Quranic verses.',
    },
    points: 20,
    tags: ['quran', 'asbab', 'tafsir'],
  },
];

// ============================================
// Questions Hadith
// ============================================
const hadithQuestions: Question[] = [
  {
    id: 'placement-hadith-001',
    type: 'single',
    difficulty: 'easy',
    category: 'hadith',
    question: {
      fr: 'Qu\'est-ce qu\'un "Hadith" ?',
      ar: 'ما هو "الحديث"؟',
      en: 'What is a "Hadith"?',
    },
    options: [
      { id: 'a', text: { fr: 'Un verset du Coran', ar: 'آية من القرآن', en: 'A verse from Quran' } },
      { id: 'b', text: { fr: 'Parole, acte ou approbation du Prophète ﷺ', ar: 'قول أو فعل أو تقرير النبي ﷺ', en: 'Saying, action or approval of Prophet ﷺ' } },
      { id: 'c', text: { fr: 'L\'avis d\'un savant', ar: 'رأي عالم', en: 'A scholar\'s opinion' } },
      { id: 'd', text: { fr: 'Une histoire ancienne', ar: 'قصة قديمة', en: 'An old story' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Hadith inclut les paroles (qawl), actions (fi\'l) et approbations tacites (taqrir) du Prophète ﷺ.',
      ar: 'الحديث يشمل أقوال وأفعال وتقريرات النبي ﷺ.',
      en: 'Hadith includes sayings (qawl), actions (fi\'l) and tacit approvals (taqrir) of Prophet ﷺ.',
    },
    points: 10,
    tags: ['hadith', 'definition', 'basics'],
  },
  {
    id: 'placement-hadith-002',
    type: 'single',
    difficulty: 'easy',
    category: 'hadith',
    question: {
      fr: 'Quel est le recueil de hadiths considéré comme le plus authentique ?',
      ar: 'ما أصح كتب الحديث؟',
      en: 'Which hadith collection is considered most authentic?',
    },
    options: [
      { id: 'a', text: { fr: 'Sahih al-Bukhari', ar: 'صحيح البخاري', en: 'Sahih al-Bukhari' } },
      { id: 'b', text: { fr: 'Sunan Abu Dawud', ar: 'سنن أبي داود', en: 'Sunan Abu Dawud' } },
      { id: 'c', text: { fr: 'Jami\' at-Tirmidhi', ar: 'جامع الترمذي', en: 'Jami\' at-Tirmidhi' } },
      { id: 'd', text: { fr: 'Muwatta Malik', ar: 'موطأ مالك', en: 'Muwatta Malik' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Sahih al-Bukhari est unanimement considéré comme le livre le plus authentique après le Coran.',
      ar: 'صحيح البخاري يُعتبر بإجماع أصح كتاب بعد القرآن.',
      en: 'Sahih al-Bukhari is unanimously considered the most authentic book after Quran.',
    },
    points: 10,
    tags: ['hadith', 'bukhari', 'collections'],
  },
  {
    id: 'placement-hadith-003',
    type: 'single',
    difficulty: 'medium',
    category: 'hadith',
    question: {
      fr: 'Qu\'est-ce que le "Isnad" d\'un hadith ?',
      ar: 'ما هو "الإسناد" في الحديث؟',
      en: 'What is the "Isnad" of a hadith?',
    },
    options: [
      { id: 'a', text: { fr: 'Le texte du hadith', ar: 'نص الحديث', en: 'The hadith text' } },
      { id: 'b', text: { fr: 'La chaîne des transmetteurs', ar: 'سلسلة الرواة', en: 'The chain of transmitters' } },
      { id: 'c', text: { fr: 'L\'explication du hadith', ar: 'شرح الحديث', en: 'The hadith explanation' } },
      { id: 'd', text: { fr: 'La classification du hadith', ar: 'تصنيف الحديث', en: 'The hadith classification' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'L\'Isnad est la chaîne de transmission remontant au Prophète ﷺ. Le Matn est le texte.',
      ar: 'الإسناد هو سلسلة الرواة الموصلة للنبي ﷺ. المتن هو النص.',
      en: 'Isnad is the chain of transmission going back to Prophet ﷺ. Matn is the text.',
    },
    points: 15,
    tags: ['hadith', 'isnad', 'sciences'],
  },
  {
    id: 'placement-hadith-004',
    type: 'single',
    difficulty: 'medium',
    category: 'hadith',
    question: {
      fr: 'Qu\'est-ce qu\'un hadith "Sahih" ?',
      ar: 'ما هو الحديث "الصحيح"؟',
      en: 'What is a "Sahih" hadith?',
    },
    options: [
      { id: 'a', text: { fr: 'Hadith faible', ar: 'حديث ضعيف', en: 'Weak hadith' } },
      { id: 'b', text: { fr: 'Hadith authentique remplissant 5 conditions', ar: 'حديث صحيح يستوفي 5 شروط', en: 'Authentic hadith meeting 5 conditions' } },
      { id: 'c', text: { fr: 'Hadith inventé', ar: 'حديث موضوع', en: 'Fabricated hadith' } },
      { id: 'd', text: { fr: 'Hadith bon', ar: 'حديث حسن', en: 'Good hadith' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: '5 conditions : chaîne continue, transmetteurs fiables/précis, sans défauts cachés ni anomalies.',
      ar: '5 شروط: اتصال السند، عدالة الرواة، ضبطهم، عدم الشذوذ، عدم العلة.',
      en: '5 conditions: continuous chain, trustworthy/precise transmitters, no hidden defects or anomalies.',
    },
    points: 15,
    tags: ['hadith', 'sahih', 'classification'],
  },
  {
    id: 'placement-hadith-005',
    type: 'single',
    difficulty: 'hard',
    category: 'hadith',
    question: {
      fr: 'Qu\'est-ce qu\'un hadith "Mutawatir" ?',
      ar: 'ما هو الحديث "المتواتر"؟',
      en: 'What is a "Mutawatir" hadith?',
    },
    options: [
      { id: 'a', text: { fr: 'Rapporté par un seul narrateur', ar: 'رواه راوٍ واحد', en: 'Reported by a single narrator' } },
      { id: 'b', text: { fr: 'Rapporté par tant de gens qu\'il est impossible de mentir', ar: 'رواه كثيرون يستحيل تواطؤهم على الكذب', en: 'Reported by so many that lying is impossible' } },
      { id: 'c', text: { fr: 'Hadith fabriqué', ar: 'حديث موضوع', en: 'Fabricated hadith' } },
      { id: 'd', text: { fr: 'Hadith avec une chaîne faible', ar: 'حديث بسند ضعيف', en: 'Hadith with weak chain' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Mutawatir = rapporté par un si grand nombre à chaque niveau qu\'un mensonge collectif est impossible. Il donne certitude absolue.',
      ar: 'المتواتر = رواه عدد كبير في كل طبقة يستحيل تواطؤهم على الكذب. يفيد العلم اليقيني.',
      en: 'Mutawatir = reported by such large numbers at each level that collective lying is impossible. Gives absolute certainty.',
    },
    points: 20,
    tags: ['hadith', 'mutawatir', 'classification'],
  },
];

// ============================================
// Questions Histoire
// ============================================
const historyQuestions: Question[] = [
  {
    id: 'placement-history-001',
    type: 'single',
    difficulty: 'easy',
    category: 'history',
    question: {
      fr: 'Qui fut le premier calife après le Prophète ﷺ ?',
      ar: 'من أول خليفة بعد النبي ﷺ؟',
      en: 'Who was the first caliph after Prophet ﷺ?',
    },
    options: [
      { id: 'a', text: { fr: 'Omar ibn al-Khattab', ar: 'عمر بن الخطاب', en: 'Omar ibn al-Khattab' } },
      { id: 'b', text: { fr: 'Abu Bakr as-Siddiq', ar: 'أبو بكر الصديق', en: 'Abu Bakr as-Siddiq' } },
      { id: 'c', text: { fr: 'Uthman ibn Affan', ar: 'عثمان بن عفان', en: 'Uthman ibn Affan' } },
      { id: 'd', text: { fr: 'Ali ibn Abi Talib', ar: 'علي بن أبي طالب', en: 'Ali ibn Abi Talib' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Abu Bakr fut élu premier calife à Saqifat Bani Sa\'ida après le décès du Prophète ﷺ.',
      ar: 'أبو بكر انتُخب أول خليفة في سقيفة بني ساعدة بعد وفاة النبي ﷺ.',
      en: 'Abu Bakr was elected first caliph at Saqifat Bani Sa\'ida after Prophet\'s ﷺ death.',
    },
    points: 10,
    tags: ['history', 'khilafa', 'abu-bakr'],
  },
  {
    id: 'placement-history-002',
    type: 'single',
    difficulty: 'easy',
    category: 'history',
    question: {
      fr: 'Combien y a-t-il de califes "bien guidés" (Rashidun) ?',
      ar: 'كم عدد الخلفاء الراشدين؟',
      en: 'How many "rightly guided" caliphs (Rashidun) are there?',
    },
    options: [
      { id: 'a', text: { fr: '3', ar: '٣', en: '3' } },
      { id: 'b', text: { fr: '4', ar: '٤', en: '4' } },
      { id: 'c', text: { fr: '5', ar: '٥', en: '5' } },
      { id: 'd', text: { fr: '12', ar: '١٢', en: '12' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les 4 Rashidun : Abu Bakr, Omar, Uthman, Ali (رضي الله عنهم).',
      ar: 'الخلفاء الراشدون الأربعة: أبو بكر، عمر، عثمان، علي رضي الله عنهم.',
      en: 'The 4 Rashidun: Abu Bakr, Omar, Uthman, Ali (may Allah be pleased with them).',
    },
    points: 10,
    tags: ['history', 'rashidun', 'caliphs'],
  },
  {
    id: 'placement-history-003',
    type: 'single',
    difficulty: 'medium',
    category: 'history',
    question: {
      fr: 'Qui compila le Coran en un seul volume (Mushaf) ?',
      ar: 'من جمع القرآن في مصحف واحد؟',
      en: 'Who compiled the Quran into one volume (Mushaf)?',
    },
    options: [
      { id: 'a', text: { fr: 'Le Prophète ﷺ', ar: 'النبي ﷺ', en: 'The Prophet ﷺ' } },
      { id: 'b', text: { fr: 'Abu Bakr (avec comité sous Omar)', ar: 'أبو بكر (بلجنة برئاسة عمر)', en: 'Abu Bakr (with committee under Omar)' } },
      { id: 'c', text: { fr: 'Uthman', ar: 'عثمان', en: 'Uthman' } },
      { id: 'd', text: { fr: 'Ali', ar: 'علي', en: 'Ali' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Abu Bakr ordonna la compilation après Yamama. Uthman standardisa ensuite les copies.',
      ar: 'أمر أبو بكر بالجمع بعد اليمامة. عثمان وحّد المصاحف لاحقاً.',
      en: 'Abu Bakr ordered compilation after Yamama. Uthman later standardized copies.',
    },
    points: 15,
    tags: ['history', 'quran', 'compilation'],
  },
  {
    id: 'placement-history-004',
    type: 'single',
    difficulty: 'medium',
    category: 'history',
    question: {
      fr: 'Qui fonda les 4 écoles de jurisprudence (madhahib) ?',
      ar: 'من أسس المذاهب الأربعة؟',
      en: 'Who founded the 4 schools of jurisprudence (madhahib)?',
    },
    options: [
      { id: 'a', text: { fr: 'Les 4 califes', ar: 'الخلفاء الأربعة', en: 'The 4 caliphs' } },
      { id: 'b', text: { fr: 'Abu Hanifa, Malik, Shafi\'i, Ahmad', ar: 'أبو حنيفة، مالك، الشافعي، أحمد', en: 'Abu Hanifa, Malik, Shafi\'i, Ahmad' } },
      { id: 'c', text: { fr: 'Bukhari, Muslim, Tirmidhi, Nasa\'i', ar: 'البخاري، مسلم، الترمذي، النسائي', en: 'Bukhari, Muslim, Tirmidhi, Nasa\'i' } },
      { id: 'd', text: { fr: 'Ibn Taymiyya, Ibn Qayyim, Dhahabi, Nawawi', ar: 'ابن تيمية، ابن القيم، الذهبي، النووي', en: 'Ibn Taymiyya, Ibn Qayyim, Dhahabi, Nawawi' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les 4 imams fondateurs : Hanafi (80-150H), Maliki (93-179H), Shafi\'i (150-204H), Hanbali (164-241H).',
      ar: 'الأئمة الأربعة: الحنفي (80-150هـ)، المالكي (93-179هـ)، الشافعي (150-204هـ)، الحنبلي (164-241هـ).',
      en: 'The 4 founding imams: Hanafi (80-150H), Maliki (93-179H), Shafi\'i (150-204H), Hanbali (164-241H).',
    },
    points: 15,
    tags: ['history', 'madhahib', 'imams'],
  },
  {
    id: 'placement-history-005',
    type: 'single',
    difficulty: 'hard',
    category: 'history',
    question: {
      fr: 'Quelle bataille mit fin à l\'Empire perse sassanide ?',
      ar: 'أي معركة أنهت الإمبراطورية الفارسية الساسانية؟',
      en: 'Which battle ended the Sassanid Persian Empire?',
    },
    options: [
      { id: 'a', text: { fr: 'Bataille de Qadisiyya', ar: 'معركة القادسية', en: 'Battle of Qadisiyya' } },
      { id: 'b', text: { fr: 'Bataille de Yarmouk', ar: 'معركة اليرموك', en: 'Battle of Yarmouk' } },
      { id: 'c', text: { fr: 'Bataille de Nahavand', ar: 'معركة نهاوند', en: 'Battle of Nahavand' } },
      { id: 'd', text: { fr: 'Bataille de Badr', ar: 'معركة بدر', en: 'Battle of Badr' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Nahavand (21H/642) fut appelée "Fath al-Futuh" (Victoire des victoires). Qadisiyya ouvrit la voie, Nahavand scella le sort.',
      ar: 'نهاوند (21هـ/642م) سُميت "فتح الفتوح". القادسية فتحت الطريق، ونهاوند حسمت الأمر.',
      en: 'Nahavand (21H/642) was called "Fath al-Futuh" (Victory of victories). Qadisiyya opened the way, Nahavand sealed the fate.',
    },
    points: 20,
    tags: ['history', 'conquests', 'persia'],
  },
];

// ============================================
// Combinaison de toutes les questions
// ============================================
export const allPlacementQuestions: Question[] = [
  ...aqeedahQuestions,
  ...fiqhQuestions,
  ...seerahQuestions,
  ...quranQuestions,
  ...hadithQuestions,
  ...historyQuestions,
];

// ============================================
// Quiz de Placement
// ============================================
export const quizPlacement: Quiz = {
  id: 'quiz-placement-evaluation',
  type: 'placement',
  title: {
    fr: 'Évaluation de Niveau - Sciences Islamiques',
    ar: 'تقييم المستوى - العلوم الإسلامية',
    en: 'Level Assessment - Islamic Sciences',
  },
  description: {
    fr: 'Ce test évalue votre niveau dans 6 domaines pour vous proposer un parcours personnalisé.',
    ar: 'هذا الاختبار يقيّم مستواك في 6 مجالات لاقتراح مسار تعليمي مخصص.',
    en: 'This test evaluates your level in 6 areas to suggest a personalized learning path.',
  },
  instructions: {
    fr: 'Répondez honnêtement. Pas de limite de temps. Vos résultats détermineront les cours recommandés.',
    ar: 'أجب بصدق. لا حد زمني. نتائجك ستحدد الدورات المقترحة.',
    en: 'Answer honestly. No time limit. Your results will determine recommended courses.',
  },
  questions: allPlacementQuestions,
  duration: 30, // 30 minutes suggérées
  passingScore: 0, // Pas de score de passage, c'est une évaluation
  maxAttempts: 999, // Peut être repassé
  shuffleQuestions: true,
  shuffleOptions: false,
  showCorrectAnswer: true,
  showExplanation: 'after_complete',
  allowReview: true,
  createdAt: '2026-01-31',
  updatedAt: '2026-01-31',
};

export default quizPlacement;
