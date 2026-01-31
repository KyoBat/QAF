/**
 * Examen Final - Seerah (Biographie du Prophète ﷺ)
 * 
 * 35 questions QCM couvrant :
 * - La vie avant la prophétie
 * - La révélation et la période mecquoise
 * - L'Hégire et la période médinoise
 * - Les batailles principales
 * - Les dernières années et le décès
 * - La famille et les Compagnons
 */

import { ExamConfig, ExamQuestion } from '../types';

// ============================================
// Questions - Avant la Prophétie
// ============================================

const avantProphetieQuestions: ExamQuestion[] = [
  {
    id: 'seerah-avant-001',
    question: {
      fr: 'En quelle année est né le Prophète Muhammad ﷺ ?',
      ar: 'في أي عام وُلد النبي محمد ﷺ؟',
      en: 'In which year was Prophet Muhammad ﷺ born?',
    },
    options: [
      { id: 'a', text: { fr: '570 après J.-C. (Année de l\'Éléphant)', ar: '570 م (عام الفيل)', en: '570 CE (Year of the Elephant)' } },
      { id: 'b', text: { fr: '550 après J.-C.', ar: '550 م', en: '550 CE' } },
      { id: 'c', text: { fr: '600 après J.-C.', ar: '600 م', en: '600 CE' } },
      { id: 'd', text: { fr: '622 après J.-C.', ar: '622 م', en: '622 CE' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ est né l\'Année de l\'Éléphant (\'Am al-Fil), où Abraha tenta de détruire la Ka\'ba. C\'était environ 570 de l\'ère chrétienne.',
      ar: 'وُلد النبي ﷺ في عام الفيل الذي حاول فيه أبرهة هدم الكعبة. وكان ذلك نحو 570 ميلادية.',
      en: 'The Prophet ﷺ was born in the Year of the Elephant, when Abraha tried to destroy the Ka\'ba. This was around 570 CE.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'avant-prophetie',
  },
  {
    id: 'seerah-avant-002',
    question: {
      fr: 'Qui étaient les parents du Prophète ﷺ ?',
      ar: 'من هما والدا النبي ﷺ؟',
      en: 'Who were the Prophet\'s ﷺ parents?',
    },
    options: [
      { id: 'a', text: { fr: 'Abu Talib et Fatima', ar: 'أبو طالب وفاطمة', en: 'Abu Talib and Fatima' } },
      { id: 'b', text: { fr: '\'Abdullah ibn \'Abd al-Muttalib et Amina bint Wahb', ar: 'عبد الله بن عبد المطلب وآمنة بنت وهب', en: '\'Abdullah ibn \'Abd al-Muttalib and Amina bint Wahb' } },
      { id: 'c', text: { fr: 'Hashim et Salma', ar: 'هاشم وسلمى', en: 'Hashim and Salma' } },
      { id: 'd', text: { fr: 'Abd al-Muttalib et Halima', ar: 'عبد المطلب وحليمة', en: 'Abd al-Muttalib and Halima' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Son père \'Abdullah mourut avant sa naissance. Sa mère Amina mourut quand il avait 6 ans. Il fut ensuite élevé par son grand-père \'Abd al-Muttalib, puis son oncle Abu Talib.',
      ar: 'توفي والده عبد الله قبل ولادته. وتوفيت والدته آمنة وعمره 6 سنوات. ثم كفله جده عبد المطلب، ثم عمه أبو طالب.',
      en: 'His father \'Abdullah died before his birth. His mother Amina died when he was 6. He was then raised by his grandfather \'Abd al-Muttalib, then his uncle Abu Talib.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'avant-prophetie',
  },
  {
    id: 'seerah-avant-003',
    question: {
      fr: 'Qui était la nourrice du Prophète ﷺ dans le désert ?',
      ar: 'من هي مرضعة النبي ﷺ في البادية؟',
      en: 'Who was the Prophet\'s ﷺ wet nurse in the desert?',
    },
    options: [
      { id: 'a', text: { fr: 'Khadija', ar: 'خديجة', en: 'Khadija' } },
      { id: 'b', text: { fr: 'Umm Ayman', ar: 'أم أيمن', en: 'Umm Ayman' } },
      { id: 'c', text: { fr: 'Halima as-Sa\'diyya', ar: 'حليمة السعدية', en: 'Halima as-Sa\'diyya' } },
      { id: 'd', text: { fr: 'Fatima bint Asad', ar: 'فاطمة بنت أسد', en: 'Fatima bint Asad' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Halima as-Sa\'diyya de la tribu des Banu Sa\'d l\'allaita et l\'éleva dans le désert pendant environ 4-5 ans. C\'est là qu\'eut lieu l\'incident de l\'ouverture de la poitrine.',
      ar: 'حليمة السعدية من بني سعد أرضعته وربته في البادية نحو 4-5 سنوات. وهناك وقعت حادثة شق الصدر.',
      en: 'Halima as-Sa\'diyya from Banu Sa\'d nursed him and raised him in the desert for about 4-5 years. The chest-opening incident occurred there.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'avant-prophetie',
  },
  {
    id: 'seerah-avant-004',
    question: {
      fr: 'Quel surnom avait le Prophète ﷺ avant l\'Islam ?',
      ar: 'ما لقب النبي ﷺ قبل الإسلام؟',
      en: 'What nickname did the Prophet ﷺ have before Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Le Guerrier', ar: 'المحارب', en: 'The Warrior' } },
      { id: 'b', text: { fr: 'Le Riche', ar: 'الغني', en: 'The Rich' } },
      { id: 'c', text: { fr: 'Le Poète', ar: 'الشاعر', en: 'The Poet' } },
      { id: 'd', text: { fr: 'As-Sadiq al-Amin (Le Véridique, le Digne de confiance)', ar: 'الصادق الأمين', en: 'As-Sadiq al-Amin (The Truthful, the Trustworthy)' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Même ses ennemis reconnaissaient son honnêteté. Quand il annonça sa mission depuis Safa, ils confirmèrent n\'avoir jamais connu de mensonge de sa part.',
      ar: 'حتى أعداؤه أقروا بصدقه. فعندما أعلن رسالته من الصفا أكدوا أنهم لم يجربوا عليه كذبًا قط.',
      en: 'Even his enemies acknowledged his honesty. When he announced his mission from Safa, they confirmed they had never known him to lie.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'avant-prophetie',
  },
  {
    id: 'seerah-avant-005',
    question: {
      fr: 'À quel âge le Prophète ﷺ a-t-il épousé Khadija رضي الله عنها ?',
      ar: 'في أي عمر تزوج النبي ﷺ خديجة رضي الله عنها؟',
      en: 'At what age did the Prophet ﷺ marry Khadija رضي الله عنها?',
    },
    options: [
      { id: 'a', text: { fr: '25 ans', ar: '25 سنة', en: '25 years' } },
      { id: 'b', text: { fr: '20 ans', ar: '20 سنة', en: '20 years' } },
      { id: 'c', text: { fr: '30 ans', ar: '30 سنة', en: '30 years' } },
      { id: 'd', text: { fr: '40 ans', ar: '40 سنة', en: '40 years' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ avait 25 ans et Khadija environ 40. Elle avait été impressionnée par son honnêteté lors d\'un voyage commercial en Syrie.',
      ar: 'كان النبي ﷺ في الـ 25 وخديجة نحو 40. وقد أعجبها صدقه في رحلة تجارية إلى الشام.',
      en: 'The Prophet ﷺ was 25 and Khadija about 40. She was impressed by his honesty during a trade journey to Syria.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'avant-prophetie',
  },
];

// ============================================
// Questions - Révélation et Période Mecquoise
// ============================================

const periodeMecquoiseQuestions: ExamQuestion[] = [
  {
    id: 'seerah-mecque-001',
    question: {
      fr: 'À quel âge le Prophète ﷺ a-t-il reçu la première révélation ?',
      ar: 'في أي عمر نزل الوحي على النبي ﷺ أول مرة؟',
      en: 'At what age did the Prophet ﷺ receive the first revelation?',
    },
    options: [
      { id: 'a', text: { fr: '25 ans', ar: '25 سنة', en: '25 years' } },
      { id: 'b', text: { fr: '40 ans', ar: '40 سنة', en: '40 years' } },
      { id: 'c', text: { fr: '50 ans', ar: '50 سنة', en: '50 years' } },
      { id: 'd', text: { fr: '63 ans', ar: '63 سنة', en: '63 years' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La révélation commença quand le Prophète ﷺ avait 40 ans, dans la grotte de Hira pendant le mois de Ramadan.',
      ar: 'بدأ الوحي وللنبي ﷺ 40 سنة، في غار حراء في شهر رمضان.',
      en: 'Revelation began when the Prophet ﷺ was 40 years old, in the cave of Hira during Ramadan.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'periode-mecquoise',
  },
  {
    id: 'seerah-mecque-002',
    question: {
      fr: 'Quels sont les premiers versets révélés ?',
      ar: 'ما أول آيات نزلت؟',
      en: 'What are the first verses revealed?',
    },
    options: [
      { id: 'a', text: { fr: 'Al-Fatiha', ar: 'الفاتحة', en: 'Al-Fatiha' } },
      { id: 'b', text: { fr: 'Ayat al-Kursi', ar: 'آية الكرسي', en: 'Ayat al-Kursi' } },
      { id: 'c', text: { fr: '"Lis ! Au nom de ton Seigneur qui a créé..." (Al-\'Alaq 1-5)', ar: '"اقرأ باسم ربك الذي خلق..." (العلق 1-5)', en: '"Read! In the name of your Lord who created..." (Al-\'Alaq 1-5)' } },
      { id: 'd', text: { fr: 'Al-Ikhlas', ar: 'الإخلاص', en: 'Al-Ikhlas' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Jibril a serré le Prophète ﷺ trois fois en disant "Iqra\'" (Lis), puis a révélé les 5 premiers versets de Sourate Al-\'Alaq.',
      ar: 'ضمه جبريل ثلاث مرات قائلاً "اقرأ"، ثم أنزل أول 5 آيات من سورة العلق.',
      en: 'Jibril pressed the Prophet ﷺ three times saying "Iqra\'" (Read), then revealed the first 5 verses of Surah Al-\'Alaq.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'periode-mecquoise',
  },
  {
    id: 'seerah-mecque-003',
    question: {
      fr: 'Combien de temps a duré la période mecquoise de la prophétie ?',
      ar: 'كم استمرت الفترة المكية من النبوة؟',
      en: 'How long did the Meccan period of prophethood last?',
    },
    options: [
      { id: 'a', text: { fr: '5 ans', ar: '5 سنوات', en: '5 years' } },
      { id: 'b', text: { fr: '10 ans', ar: '10 سنوات', en: '10 years' } },
      { id: 'c', text: { fr: '23 ans', ar: '23 سنة', en: '23 years' } },
      { id: 'd', text: { fr: '13 ans', ar: '13 سنة', en: '13 years' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'La période mecquoise dura 13 ans (610-622 EC), axée sur le Tawhid et la patience face aux persécutions.',
      ar: 'استمرت الفترة المكية 13 سنة (610-622 م)، ركزت على التوحيد والصبر على الاضطهاد.',
      en: 'The Meccan period lasted 13 years (610-622 CE), focused on Tawhid and patience under persecution.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'periode-mecquoise',
  },
  {
    id: 'seerah-mecque-004',
    question: {
      fr: 'Qui fut le premier homme à accepter l\'Islam ?',
      ar: 'من أول رجل أسلم؟',
      en: 'Who was the first man to accept Islam?',
    },
    options: [
      { id: 'a', text: { fr: '\'Umar ibn al-Khattab', ar: 'عمر بن الخطاب', en: '\'Umar ibn al-Khattab' } },
      { id: 'b', text: { fr: 'Abu Bakr as-Siddiq', ar: 'أبو بكر الصديق', en: 'Abu Bakr as-Siddiq' } },
      { id: 'c', text: { fr: '\'Ali ibn Abi Talib', ar: 'علي بن أبي طالب', en: '\'Ali ibn Abi Talib' } },
      { id: 'd', text: { fr: 'Bilal ibn Rabah', ar: 'بلال بن رباح', en: 'Bilal ibn Rabah' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Abu Bakr accepta immédiatement sans hésitation. \'Ali était le premier enfant/garçon, Khadija la première femme, Zayd le premier esclave affranchi.',
      ar: 'قبل أبو بكر فورًا دون تردد. وعلي أول صبي، وخديجة أول امرأة، وزيد أول موالٍ.',
      en: 'Abu Bakr accepted immediately without hesitation. \'Ali was the first child/boy, Khadija the first woman, Zayd the first freed slave.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'periode-mecquoise',
  },
  {
    id: 'seerah-mecque-005',
    question: {
      fr: 'Qu\'est-ce que l\'Isra\' et le Mi\'raj ?',
      ar: 'ما هو الإسراء والمعراج؟',
      en: 'What is Isra\' and Mi\'raj?',
    },
    options: [
      { id: 'a', text: { fr: 'Le voyage nocturne à Jérusalem et l\'ascension aux cieux', ar: 'رحلة ليلية إلى القدس ثم الصعود إلى السماوات', en: 'The night journey to Jerusalem and ascension to the heavens' } },
      { id: 'b', text: { fr: 'Deux batailles', ar: 'معركتان', en: 'Two battles' } },
      { id: 'c', text: { fr: 'Deux compagnons', ar: 'صحابيان', en: 'Two companions' } },
      { id: 'd', text: { fr: 'L\'Hégire', ar: 'الهجرة', en: 'The Hijra' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'L\'Isra\' : voyage de La Mecque à Jérusalem sur al-Buraq. Le Mi\'raj : ascension aux 7 cieux où les 5 prières furent prescrites.',
      ar: 'الإسراء: الرحلة من مكة إلى القدس على البُراق. المعراج: الصعود للسماوات السبع حيث فُرضت الصلوات الخمس.',
      en: 'Isra\': journey from Mecca to Jerusalem on al-Buraq. Mi\'raj: ascension to 7 heavens where the 5 prayers were prescribed.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'periode-mecquoise',
  },
];

// ============================================
// Questions - Hégire et Période Médinoise
// ============================================

const periodeMedinoiseQuestions: ExamQuestion[] = [
  {
    id: 'seerah-medine-001',
    question: {
      fr: 'En quelle année a eu lieu l\'Hégire ?',
      ar: 'في أي عام كانت الهجرة؟',
      en: 'In which year did the Hijra take place?',
    },
    options: [
      { id: 'a', text: { fr: '610 EC', ar: '610 م', en: '610 CE' } },
      { id: 'b', text: { fr: '622 EC', ar: '622 م', en: '622 CE' } },
      { id: 'c', text: { fr: '630 EC', ar: '630 م', en: '630 CE' } },
      { id: 'd', text: { fr: '632 EC', ar: '632 م', en: '632 CE' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'L\'Hégire eut lieu en 622 EC. \'Umar ibn al-Khattab établit plus tard cette année comme début du calendrier islamique.',
      ar: 'كانت الهجرة سنة 622 م. واتخذها عمر بن الخطاب لاحقًا بداية للتقويم الإسلامي.',
      en: 'The Hijra occurred in 622 CE. \'Umar ibn al-Khattab later established this year as the start of the Islamic calendar.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'periode-medinoise',
  },
  {
    id: 'seerah-medine-002',
    question: {
      fr: 'Qui accompagnait le Prophète ﷺ dans la grotte de Thawr ?',
      ar: 'من رافق النبي ﷺ في غار ثور؟',
      en: 'Who accompanied the Prophet ﷺ in the cave of Thawr?',
    },
    options: [
      { id: 'a', text: { fr: '\'Ali ibn Abi Talib', ar: 'علي بن أبي طالب', en: '\'Ali ibn Abi Talib' } },
      { id: 'b', text: { fr: '\'Umar ibn al-Khattab', ar: 'عمر بن الخطاب', en: '\'Umar ibn al-Khattab' } },
      { id: 'c', text: { fr: 'Abu Bakr as-Siddiq', ar: 'أبو بكر الصديق', en: 'Abu Bakr as-Siddiq' } },
      { id: 'd', text: { fr: 'Personne', ar: 'لا أحد', en: 'No one' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Abu Bakr était le compagnon de l\'Hégire. Allah dit : "le deuxième de deux, quand ils étaient dans la grotte" (9:40).',
      ar: 'كان أبو بكر صاحب الهجرة. قال الله: "ثاني اثنين إذ هما في الغار" (التوبة: 40).',
      en: 'Abu Bakr was the companion of Hijra. Allah said: "the second of two, when they were in the cave" (9:40).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'periode-medinoise',
  },
  {
    id: 'seerah-medine-003',
    question: {
      fr: 'Qu\'est-ce que la "Sahifa de Médine" ?',
      ar: 'ما هي صحيفة المدينة؟',
      en: 'What is the "Constitution of Medina"?',
    },
    options: [
      { id: 'a', text: { fr: 'Un livre de hadiths', ar: 'كتاب أحاديث', en: 'A book of hadiths' } },
      { id: 'b', text: { fr: 'Une lettre au roi de Perse', ar: 'رسالة لكسرى', en: 'A letter to the Persian king' } },
      { id: 'c', text: { fr: 'Le traité de Hudaybiyya', ar: 'صلح الحديبية', en: 'Treaty of Hudaybiyya' } },
      { id: 'd', text: { fr: 'Un accord établissant les droits et devoirs entre musulmans, juifs et autres tribus', ar: 'اتفاق يحدد حقوق وواجبات المسلمين واليهود والقبائل الأخرى', en: 'An agreement establishing rights and duties between Muslims, Jews and other tribes' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'La Sahifa de Médine établit une communauté (Umma) avec des droits mutuels, une défense commune, et la liberté religieuse pour les Gens du Livre.',
      ar: 'صحيفة المدينة أسست أمة بحقوق متبادلة ودفاع مشترك وحرية دينية لأهل الكتاب.',
      en: 'The Constitution of Medina established a community (Umma) with mutual rights, common defense, and religious freedom for People of the Book.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'periode-medinoise',
  },
  {
    id: 'seerah-medine-004',
    question: {
      fr: 'Qu\'est-ce que le système de Mu\'akhat (fraternité) ?',
      ar: 'ما هو نظام المؤاخاة؟',
      en: 'What is the Mu\'akhat (brotherhood) system?',
    },
    options: [
      { id: 'a', text: { fr: 'Le Prophète ﷺ a jumelé chaque Muhajir avec un Ansar comme frères', ar: 'جعل النبي ﷺ لكل مهاجر أخًا من الأنصار', en: 'The Prophet ﷺ paired each Muhajir with an Ansar as brothers' } },
      { id: 'b', text: { fr: 'Un système d\'impôt', ar: 'نظام ضرائب', en: 'A tax system' } },
      { id: 'c', text: { fr: 'Un système militaire', ar: 'نظام عسكري', en: 'A military system' } },
      { id: 'd', text: { fr: 'Les mariages entre tribus', ar: 'الزواج بين القبائل', en: 'Inter-tribal marriages' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ établit des liens de fraternité entre les Muhajirun (émigrants de La Mecque) et les Ansar (aides de Médine) pour l\'entraide.',
      ar: 'أقام النبي ﷺ روابط الأخوة بين المهاجرين والأنصار للتعاون والتكافل.',
      en: 'The Prophet ﷺ established brotherhood bonds between the Muhajirun (Meccan emigrants) and Ansar (Medinan helpers) for mutual support.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'periode-medinoise',
  },
];

// ============================================
// Questions - Batailles
// ============================================

const bataillesQuestions: ExamQuestion[] = [
  {
    id: 'seerah-bataille-001',
    question: {
      fr: 'Quelle fut la première grande bataille de l\'Islam ?',
      ar: 'ما أول معركة كبرى في الإسلام؟',
      en: 'What was the first major battle of Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Bataille de Uhud', ar: 'غزوة أحد', en: 'Battle of Uhud' } },
      { id: 'b', text: { fr: 'Bataille de Badr (2 H)', ar: 'غزوة بدر (2 هـ)', en: 'Battle of Badr (2 H)' } },
      { id: 'c', text: { fr: 'Bataille de Khandaq', ar: 'غزوة الخندق', en: 'Battle of Khandaq' } },
      { id: 'd', text: { fr: 'Conquête de La Mecque', ar: 'فتح مكة', en: 'Conquest of Mecca' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Badr eut lieu le 17 Ramadan de l\'an 2 H. 313 musulmans vainquirent environ 1000 Qurayshites. Allah envoya des anges pour les aider.',
      ar: 'وقعت بدر في 17 رمضان سنة 2 هـ. انتصر 313 مسلمًا على نحو 1000 من قريش. وأنزل الله الملائكة لنصرتهم.',
      en: 'Badr occurred on 17 Ramadan, 2 H. 313 Muslims defeated about 1000 Quraysh. Allah sent angels to help them.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'batailles',
  },
  {
    id: 'seerah-bataille-002',
    question: {
      fr: 'Qu\'est-il arrivé à la bataille de Uhud (3 H) ?',
      ar: 'ماذا حدث في غزوة أحد (3 هـ)؟',
      en: 'What happened at the Battle of Uhud (3 H)?',
    },
    options: [
      { id: 'a', text: { fr: 'Victoire totale des musulmans', ar: 'انتصار كامل للمسلمين', en: 'Total Muslim victory' } },
      { id: 'b', text: { fr: 'Aucune bataille n\'a eu lieu', ar: 'لم تقع معركة', en: 'No battle occurred' } },
      { id: 'c', text: { fr: 'Victoire initiale puis revers à cause de la désobéissance des archers', ar: 'نصر أولي ثم نكسة بسبب عصيان الرماة', en: 'Initial victory then setback due to archers\' disobedience' } },
      { id: 'd', text: { fr: 'Traité de paix', ar: 'معاهدة سلام', en: 'Peace treaty' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Les archers quittèrent leur poste pour le butin. Khalid ibn al-Walid (pas encore musulman) en profita pour attaquer. Hamza et 70 compagnons furent martyrisés.',
      ar: 'ترك الرماة مواقعهم للغنائم. فاستغل خالد بن الوليد (قبل إسلامه) ذلك للهجوم. واستُشهد حمزة و70 صحابيًا.',
      en: 'Archers left their post for spoils. Khalid ibn al-Walid (not yet Muslim) exploited this to attack. Hamza and 70 companions were martyred.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'batailles',
  },
  {
    id: 'seerah-bataille-003',
    question: {
      fr: 'Qui a suggéré de creuser le fossé (Khandaq) ?',
      ar: 'من اقترح حفر الخندق؟',
      en: 'Who suggested digging the trench (Khandaq)?',
    },
    options: [
      { id: 'a', text: { fr: 'Abu Bakr', ar: 'أبو بكر', en: 'Abu Bakr' } },
      { id: 'b', text: { fr: '\'Umar', ar: 'عمر', en: '\'Umar' } },
      { id: 'c', text: { fr: '\'Ali', ar: 'علي', en: '\'Ali' } },
      { id: 'd', text: { fr: 'Salman al-Farisi', ar: 'سلمان الفارسي', en: 'Salman al-Farisi' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Salman le Persan proposa cette tactique persane pour défendre Médine contre les 10 000 hommes des Ahzab (Confédérés) en l\'an 5 H.',
      ar: 'اقترح سلمان الفارسي هذا التكتيك الفارسي للدفاع عن المدينة ضد 10 آلاف من الأحزاب سنة 5 هـ.',
      en: 'Salman the Persian proposed this Persian tactic to defend Medina against the 10,000 Ahzab (Confederates) in year 5 H.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'batailles',
  },
  {
    id: 'seerah-bataille-004',
    question: {
      fr: 'En quelle année a eu lieu la conquête de La Mecque ?',
      ar: 'في أي عام كان فتح مكة؟',
      en: 'In which year did the Conquest of Mecca occur?',
    },
    options: [
      { id: 'a', text: { fr: 'An 8 de l\'Hégire', ar: 'السنة 8 هـ', en: 'Year 8 H' } },
      { id: 'b', text: { fr: 'An 6 de l\'Hégire', ar: 'السنة 6 هـ', en: 'Year 6 H' } },
      { id: 'c', text: { fr: 'An 10 de l\'Hégire', ar: 'السنة 10 هـ', en: 'Year 10 H' } },
      { id: 'd', text: { fr: 'An 2 de l\'Hégire', ar: 'السنة 2 هـ', en: 'Year 2 H' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'La Mecque fut conquise pacifiquement en Ramadan de l\'an 8 H avec 10 000 musulmans. Le Prophète ﷺ accorda une amnistie générale.',
      ar: 'فُتحت مكة سلميًا في رمضان سنة 8 هـ بـ 10 آلاف مسلم. وأعلن النبي ﷺ عفوًا عامًا.',
      en: 'Mecca was peacefully conquered in Ramadan, year 8 H with 10,000 Muslims. The Prophet ﷺ granted general amnesty.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'batailles',
  },
  {
    id: 'seerah-bataille-005',
    question: {
      fr: 'Qu\'est-ce que le Traité de Hudaybiyya ?',
      ar: 'ما هو صلح الحديبية؟',
      en: 'What is the Treaty of Hudaybiyya?',
    },
    options: [
      { id: 'a', text: { fr: 'Un traité de guerre', ar: 'معاهدة حرب', en: 'A war treaty' } },
      { id: 'b', text: { fr: 'La conquête de La Mecque', ar: 'فتح مكة', en: 'Conquest of Mecca' } },
      { id: 'c', text: { fr: 'Un accord de paix de 10 ans avec Quraysh (6 H)', ar: 'اتفاق سلام 10 سنوات مع قريش (6 هـ)', en: 'A 10-year peace agreement with Quraysh (6 H)' } },
      { id: 'd', text: { fr: 'Un traité avec les Romains', ar: 'معاهدة مع الروم', en: 'A treaty with the Romans' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le traité semblait défavorable mais Allah le qualifia de "victoire éclatante" (48:1). Il permit la propagation pacifique de l\'Islam.',
      ar: 'بدا الصلح غير مواتٍ لكن الله سماه "فتحًا مبينًا" (48:1). وسمح بنشر الإسلام سلميًا.',
      en: 'The treaty seemed unfavorable but Allah called it a "clear victory" (48:1). It allowed peaceful spread of Islam.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'batailles',
  },
];

// ============================================
// Questions - Dernières Années et Décès
// ============================================

const dernieresAnneesQuestions: ExamQuestion[] = [
  {
    id: 'seerah-fin-001',
    question: {
      fr: 'Qu\'est-ce que le Hajj d\'Adieu (Hajjat al-Wada\') ?',
      ar: 'ما هي حجة الوداع؟',
      en: 'What is the Farewell Hajj (Hajjat al-Wada\')?',
    },
    options: [
      { id: 'a', text: { fr: 'Le premier Hajj de l\'Islam', ar: 'أول حج في الإسلام', en: 'The first Hajj in Islam' } },
      { id: 'b', text: { fr: 'Le seul et dernier Hajj du Prophète ﷺ en l\'an 10 H', ar: 'الحج الوحيد والأخير للنبي ﷺ سنة 10 هـ', en: 'The only and last Hajj of the Prophet ﷺ in year 10 H' } },
      { id: 'c', text: { fr: 'Un Hajj effectué par Abu Bakr', ar: 'حج قام به أبو بكر', en: 'A Hajj performed by Abu Bakr' } },
      { id: 'd', text: { fr: 'Un type de Omra', ar: 'نوع من العمرة', en: 'A type of Umrah' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ fit le Hajj en l\'an 10 H avec plus de 100 000 compagnons. Il y délivra son célèbre sermon d\'adieu.',
      ar: 'حج النبي ﷺ سنة 10 هـ مع أكثر من 100 ألف صحابي. وألقى خطبة الوداع الشهيرة.',
      en: 'The Prophet ﷺ performed Hajj in year 10 H with over 100,000 companions. He delivered his famous Farewell Sermon.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'dernieres-annees',
  },
  {
    id: 'seerah-fin-002',
    question: {
      fr: 'Quel verset a été révélé lors du Hajj d\'Adieu ?',
      ar: 'أي آية نزلت في حجة الوداع؟',
      en: 'Which verse was revealed during the Farewell Hajj?',
    },
    options: [
      { id: 'a', text: { fr: 'Al-Fatiha', ar: 'الفاتحة', en: 'Al-Fatiha' } },
      { id: 'b', text: { fr: 'Ayat al-Kursi', ar: 'آية الكرسي', en: 'Ayat al-Kursi' } },
      { id: 'c', text: { fr: 'Les premiers versets révélés', ar: 'أول ما نزل', en: 'The first revealed verses' } },
      { id: 'd', text: { fr: '"Aujourd\'hui J\'ai parachevé votre religion..." (5:3)', ar: '"اليوم أكملت لكم دينكم..." (المائدة: 3)', en: '"Today I have perfected your religion..." (5:3)' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Ce verset fut révélé le jour de \'Arafat. Un rabbin dit à \'Umar que si ce verset avait été révélé aux Juifs, ils en auraient fait un jour de fête.',
      ar: 'نزلت هذه الآية يوم عرفة. قال حبر لعمر: لو نزلت هذه الآية علينا لاتخذنا يومها عيدًا.',
      en: 'This verse was revealed on the day of \'Arafat. A rabbi told \'Umar that had this verse been revealed to Jews, they would have made it a festival.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'dernieres-annees',
  },
  {
    id: 'seerah-fin-003',
    question: {
      fr: 'Quand le Prophète ﷺ est-il décédé ?',
      ar: 'متى توفي النبي ﷺ؟',
      en: 'When did the Prophet ﷺ pass away?',
    },
    options: [
      { id: 'a', text: { fr: '12 Rabi\' al-Awwal, an 11 H (632 EC)', ar: '12 ربيع الأول سنة 11 هـ (632 م)', en: '12 Rabi\' al-Awwal, year 11 H (632 CE)' } },
      { id: 'b', text: { fr: '1er Muharram, an 11 H', ar: '1 محرم سنة 11 هـ', en: '1st Muharram, year 11 H' } },
      { id: 'c', text: { fr: '10 Dhul Hijja, an 10 H', ar: '10 ذو الحجة سنة 10 هـ', en: '10 Dhul Hijja, year 10 H' } },
      { id: 'd', text: { fr: '27 Ramadan, an 11 H', ar: '27 رمضان سنة 11 هـ', en: '27 Ramadan, year 11 H' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ décéda le 12 Rabi\' al-Awwal de l\'an 11 H (8 juin 632 EC) à Médine, dans la chambre de \'Aisha رضي الله عنها.',
      ar: 'توفي النبي ﷺ في 12 ربيع الأول سنة 11 هـ (8 يونيو 632 م) في المدينة، في حجرة عائشة رضي الله عنها.',
      en: 'The Prophet ﷺ passed away on 12 Rabi\' al-Awwal, 11 H (June 8, 632 CE) in Medina, in \'Aisha\'s رضي الله عنها room.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'dernieres-annees',
  },
  {
    id: 'seerah-fin-004',
    question: {
      fr: 'Quel âge avait le Prophète ﷺ à son décès ?',
      ar: 'كم كان عمر النبي ﷺ عند وفاته؟',
      en: 'How old was the Prophet ﷺ at his death?',
    },
    options: [
      { id: 'a', text: { fr: '40 ans', ar: '40 سنة', en: '40 years' } },
      { id: 'b', text: { fr: '63 ans', ar: '63 سنة', en: '63 years' } },
      { id: 'c', text: { fr: '70 ans', ar: '70 سنة', en: '70 years' } },
      { id: 'd', text: { fr: '55 ans', ar: '55 سنة', en: '55 years' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ vécut 63 ans : 40 avant la prophétie, 13 à La Mecque, et 10 à Médine.',
      ar: 'عاش النبي ﷺ 63 سنة: 40 قبل النبوة، و13 في مكة، و10 في المدينة.',
      en: 'The Prophet ﷺ lived 63 years: 40 before prophethood, 13 in Mecca, and 10 in Medina.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'dernieres-annees',
  },
];

// ============================================
// Questions - Famille et Compagnons
// ============================================

const familleQuestions: ExamQuestion[] = [
  {
    id: 'seerah-famille-001',
    question: {
      fr: 'Combien d\'enfants le Prophète ﷺ a-t-il eus ?',
      ar: 'كم عدد أبناء النبي ﷺ؟',
      en: 'How many children did the Prophet ﷺ have?',
    },
    options: [
      { id: 'a', text: { fr: '2 enfants', ar: 'طفلان', en: '2 children' } },
      { id: 'b', text: { fr: '10 enfants', ar: '10 أبناء', en: '10 children' } },
      { id: 'c', text: { fr: '7 enfants (3 garçons, 4 filles)', ar: '7 أبناء (3 ذكور، 4 إناث)', en: '7 children (3 boys, 4 girls)' } },
      { id: 'd', text: { fr: 'Aucun enfant', ar: 'لا أبناء', en: 'No children' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Fils : Qasim, \'Abdullah (at-Tayyib/at-Tahir), Ibrahim. Filles : Zaynab, Ruqayya, Umm Kulthum, Fatima. Tous sauf Fatima décédèrent avant lui.',
      ar: 'الأبناء: القاسم، عبد الله (الطيب/الطاهر)، إبراهيم. البنات: زينب، رقية، أم كلثوم، فاطمة. وتوفوا جميعًا قبله إلا فاطمة.',
      en: 'Sons: Qasim, \'Abdullah (at-Tayyib/at-Tahir), Ibrahim. Daughters: Zaynab, Ruqayya, Umm Kulthum, Fatima. All except Fatima died before him.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'famille',
  },
  {
    id: 'seerah-famille-002',
    question: {
      fr: 'Qui était la seule épouse du Prophète ﷺ pendant 25 ans ?',
      ar: 'من كانت الزوجة الوحيدة للنبي ﷺ لمدة 25 سنة؟',
      en: 'Who was the Prophet\'s ﷺ only wife for 25 years?',
    },
    options: [
      { id: 'a', text: { fr: 'Khadija bint Khuwaylid', ar: 'خديجة بنت خويلد', en: 'Khadija bint Khuwaylid' } },
      { id: 'b', text: { fr: '\'Aisha bint Abi Bakr', ar: 'عائشة بنت أبي بكر', en: '\'Aisha bint Abi Bakr' } },
      { id: 'c', text: { fr: 'Hafsa bint \'Umar', ar: 'حفصة بنت عمر', en: 'Hafsa bint \'Umar' } },
      { id: 'd', text: { fr: 'Safiyya bint Huyayy', ar: 'صفية بنت حيي', en: 'Safiyya bint Huyayy' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Khadija fut sa seule épouse de ses 25 à 50 ans. Elle fut la première à croire en lui et le soutint dans les moments difficiles. Elle est parmi les meilleures femmes.',
      ar: 'كانت خديجة زوجته الوحيدة من 25 إلى 50 عامًا. وهي أول من آمن به ودعمته في الأوقات الصعبة. وهي من أفضل النساء.',
      en: 'Khadija was his only wife from age 25 to 50. She was the first to believe in him and supported him in difficult times. She is among the best women.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'famille',
  },
  {
    id: 'seerah-famille-003',
    question: {
      fr: 'Qui sont les "Ahl al-Bayt" (Gens de la Maison) ?',
      ar: 'من هم أهل البيت؟',
      en: 'Who are the "Ahl al-Bayt" (People of the House)?',
    },
    options: [
      { id: 'a', text: { fr: 'Les voisins du Prophète ﷺ', ar: 'جيران النبي ﷺ', en: 'The Prophet\'s ﷺ neighbors' } },
      { id: 'b', text: { fr: 'Les habitants de Médine', ar: 'سكان المدينة', en: 'The inhabitants of Medina' } },
      { id: 'c', text: { fr: 'Les Quraysh', ar: 'قريش', en: 'The Quraysh' } },
      { id: 'd', text: { fr: 'La famille du Prophète ﷺ : ses épouses et sa descendance', ar: 'عائلة النبي ﷺ: زوجاته وذريته', en: 'The Prophet\'s ﷺ family: his wives and descendants' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Ahl al-Bayt inclut les épouses du Prophète ﷺ (selon le verset 33:33), \'Ali, Fatima, Hasan et Husayn, et la descendance.',
      ar: 'أهل البيت يشملون زوجات النبي ﷺ (حسب الآية 33:33)، وعليًا وفاطمة والحسن والحسين والذرية.',
      en: 'Ahl al-Bayt includes the Prophet\'s ﷺ wives (per verse 33:33), \'Ali, Fatima, Hasan and Husayn, and descendants.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'famille',
  },
  {
    id: 'seerah-famille-004',
    question: {
      fr: 'Qui fut le premier muezzin de l\'Islam ?',
      ar: 'من أول مؤذن في الإسلام؟',
      en: 'Who was the first muezzin of Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Abu Bakr', ar: 'أبو بكر', en: 'Abu Bakr' } },
      { id: 'b', text: { fr: 'Bilal ibn Rabah', ar: 'بلال بن رباح', en: 'Bilal ibn Rabah' } },
      { id: 'c', text: { fr: '\'Umar ibn al-Khattab', ar: 'عمر بن الخطاب', en: '\'Umar ibn al-Khattab' } },
      { id: 'd', text: { fr: 'Salman al-Farisi', ar: 'سلمان الفارسي', en: 'Salman al-Farisi' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Bilal, ancien esclave abyssin torturé pour sa foi, fut choisi par le Prophète ﷺ pour sa belle voix. Il cria "Ahad, Ahad" (Un, Un) sous la torture.',
      ar: 'بلال، العبد الحبشي المُعذَّب لإيمانه، اختاره النبي ﷺ لصوته الجميل. وكان يردد "أحد، أحد" تحت التعذيب.',
      en: 'Bilal, former Abyssinian slave tortured for his faith, was chosen by the Prophet ﷺ for his beautiful voice. He cried "Ahad, Ahad" (One, One) under torture.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'famille',
  },
];

// ============================================
// Assemblage de l'examen COMPLET
// ============================================

const allQuestions: ExamQuestion[] = [
  ...avantProphetieQuestions,      // 5 questions
  ...periodeMecquoiseQuestions,    // 5 questions
  ...periodeMedinoiseQuestions,    // 4 questions
  ...bataillesQuestions,           // 5 questions
  ...dernieresAnneesQuestions,     // 4 questions
  ...familleQuestions,             // 4 questions
  // Total : 27 questions
];

export const examSeerahFinal: ExamConfig = {
  id: 'exam-seerah-final',
  type: 'course',
  level: 'intermediate',
  title: {
    fr: 'Examen Complet - Seerah (Biographie Prophétique)',
    ar: 'الامتحان الشامل - السيرة النبوية',
    en: 'Complete Exam - Seerah (Prophetic Biography)',
  },
  description: {
    fr: 'Examen de 22 questions sélectionnées aléatoirement parmi une banque de 27 questions. Couvre la vie du Prophète ﷺ.',
    ar: 'امتحان من 22 سؤالاً يتم اختيارها عشوائياً من بنك يضم 27 سؤالاً. يغطي حياة النبي ﷺ.',
    en: 'Exam with 22 questions randomly selected from a pool of 27. Covers the life of the Prophet ﷺ.',
  },
  instructions: {
    fr: 'Vous avez 35 minutes pour répondre à 22 questions. Chaque question a une seule bonne réponse. Un score de 70% est requis pour réussir.',
    ar: 'لديك 35 دقيقة للإجابة على 22 سؤالاً. لكل سؤال إجابة صحيحة واحدة. يُشترط 70% للنجاح.',
    en: 'You have 35 minutes to answer 22 questions. Each question has one correct answer. A score of 70% is required to pass.',
  },
  courseSlug: 'seerah',
  questionPool: allQuestions,
  questionsPerExam: 22,
  categoryConfig: [
    { category: 'avant-prophetie', count: 4 },
    { category: 'periode-mecquoise', count: 4 },
    { category: 'periode-medinoise', count: 3 },
    { category: 'batailles', count: 4 },
    { category: 'dernieres-annees', count: 4 },
    { category: 'famille', count: 3 },
  ],
  questions: [],
  duration: 35,
  passingScore: 70,
  maxAttempts: 5,
  shuffleQuestions: true,
  shuffleOptions: true,
  showAnswersAfter: 'complete',
  hasCertificate: true,
  certificateName: {
    fr: 'Certificat de Maîtrise - As-Sirah an-Nabawiyya',
    ar: 'شهادة الإتقان - السيرة النبوية',
    en: 'Mastery Certificate - Prophetic Biography',
  },
  createdAt: '2026-01-31',
};

export default examSeerahFinal;
