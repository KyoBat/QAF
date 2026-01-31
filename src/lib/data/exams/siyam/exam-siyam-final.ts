/**
 * Examen Final - Fiqh du Jeûne (Siyam)
 * 
 * 60 questions QCM couvrant tous les aspects du jeûne :
 * - Définition et statut du jeûne
 * - Conditions et piliers
 * - Annulatifs du jeûne
 * - Dispenses et rattrapage
 * - Jeûne surérogatoire
 * - Ramadan spécificités
 */

import { ExamConfig, ExamQuestion } from '../types';

// ============================================
// Questions - Définition et Statut
// ============================================

const definitionQuestions: ExamQuestion[] = [
  {
    id: 'siyam-def-001',
    question: {
      fr: 'Quelle est la définition du Siyam (jeûne) en Islam ?',
      ar: 'ما تعريف الصيام في الإسلام؟',
      en: 'What is the definition of Siyam (fasting) in Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'S\'abstenir de manger uniquement', ar: 'الامتناع عن الأكل فقط', en: 'Abstaining from eating only' } },
      { id: 'b', text: { fr: 'Jeûner les jours pairs du mois', ar: 'صيام الأيام الزوجية من الشهر', en: 'Fasting even days of the month' } },
      { id: 'c', text: { fr: 'Ne pas manger du lever au coucher du soleil', ar: 'عدم الأكل من شروق الشمس إلى غروبها', en: 'Not eating from sunrise to sunset' } },
      { id: 'd', text: { fr: 'S\'abstenir de manger, boire et rapports intimes du Fajr au Maghrib avec intention', ar: 'الإمساك عن الأكل والشرب والجماع من الفجر إلى المغرب مع النية', en: 'Abstaining from eating, drinking and intimacy from Fajr to Maghrib with intention' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Le Siyam est l\'abstention de tout ce qui rompt le jeûne (manger, boire, rapports) depuis l\'aube (Fajr) jusqu\'au coucher du soleil (Maghrib), avec l\'intention de jeûner.',
      ar: 'الصيام هو الإمساك عن المفطرات من طلوع الفجر إلى غروب الشمس مع النية.',
      en: 'Siyam is abstaining from all that breaks the fast from dawn to sunset, with the intention to fast.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'definition',
  },
  {
    id: 'siyam-def-002',
    question: {
      fr: 'Quel est le statut du jeûne du mois de Ramadan ?',
      ar: 'ما حكم صيام شهر رمضان؟',
      en: 'What is the ruling on fasting the month of Ramadan?',
    },
    options: [
      { id: 'a', text: { fr: 'Sunna Mu\'akkada', ar: 'سنة مؤكدة', en: 'Confirmed Sunnah' } },
      { id: 'b', text: { fr: 'Recommandé', ar: 'مستحب', en: 'Recommended' } },
      { id: 'c', text: { fr: 'Obligatoire (Fard)', ar: 'فرض', en: 'Obligatory (Fard)' } },
      { id: 'd', text: { fr: 'Permis', ar: 'مباح', en: 'Permissible' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le jeûne de Ramadan est le 4ème pilier de l\'Islam, obligatoire pour tout musulman pubère, sain d\'esprit et capable.',
      ar: 'صيام رمضان هو الركن الرابع من أركان الإسلام، فرض على كل مسلم بالغ عاقل قادر.',
      en: 'Fasting Ramadan is the 4th pillar of Islam, obligatory for every mature, sane and capable Muslim.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'definition',
  },
  {
    id: 'siyam-def-003',
    question: {
      fr: 'Quand le jeûne de Ramadan a-t-il été prescrit ?',
      ar: 'متى فُرض صيام رمضان؟',
      en: 'When was Ramadan fasting prescribed?',
    },
    options: [
      { id: 'a', text: { fr: 'La 2ème année de l\'Hégire', ar: 'السنة الثانية للهجرة', en: 'The 2nd year of Hijra' } },
      { id: 'b', text: { fr: 'La 1ère année de l\'Hégire', ar: 'السنة الأولى للهجرة', en: 'The 1st year of Hijra' } },
      { id: 'c', text: { fr: 'Avant l\'Hégire à La Mecque', ar: 'قبل الهجرة في مكة', en: 'Before Hijra in Mecca' } },
      { id: 'd', text: { fr: 'La 5ème année de l\'Hégire', ar: 'السنة الخامسة للهجرة', en: 'The 5th year of Hijra' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le jeûne de Ramadan a été prescrit en l\'an 2 de l\'Hégire, avant la bataille de Badr.',
      ar: 'فُرض صيام رمضان في السنة الثانية للهجرة، قبل غزوة بدر.',
      en: 'Ramadan fasting was prescribed in the 2nd year of Hijra, before the Battle of Badr.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'definition',
  },
  {
    id: 'siyam-def-004',
    question: {
      fr: 'Comment détermine-t-on le début du mois de Ramadan ?',
      ar: 'كيف يُحدد بداية شهر رمضان؟',
      en: 'How is the beginning of Ramadan determined?',
    },
    options: [
      { id: 'a', text: { fr: 'Par le calendrier solaire', ar: 'بالتقويم الشمسي', en: 'By the solar calendar' } },
      { id: 'b', text: { fr: 'À une date fixe chaque année', ar: 'في تاريخ ثابت كل عام', en: 'On a fixed date every year' } },
      { id: 'c', text: { fr: 'Par les calculs astronomiques uniquement', ar: 'بالحسابات الفلكية فقط', en: 'By astronomical calculations only' } },
      { id: 'd', text: { fr: 'Par la vision du croissant ou en complétant Cha\'ban à 30 jours', ar: 'برؤية الهلال أو بإكمال شعبان ثلاثين يومًا', en: 'By sighting the crescent or completing Sha\'ban to 30 days' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Jeûnez à sa vision et rompez à sa vision, et si le temps est couvert, complétez Cha\'ban à 30 jours."',
      ar: 'قال النبي ﷺ: "صوموا لرؤيته وأفطروا لرؤيته، فإن غُمّ عليكم فأكملوا عدة شعبان ثلاثين."',
      en: 'The Prophet ﷺ said: "Fast when you see it and break fast when you see it, and if it is cloudy, complete Sha\'ban to 30 days."',
    },
    points: 2,
    difficulty: 'easy',
    category: 'definition',
  },
  {
    id: 'siyam-def-005',
    question: {
      fr: 'Quel verset coranique prescrit le jeûne de Ramadan ?',
      ar: 'ما الآية القرآنية التي تفرض صيام رمضان؟',
      en: 'Which Quranic verse prescribes Ramadan fasting?',
    },
    options: [
      { id: 'a', text: { fr: 'Sourate Al-Baqara, verset 183', ar: 'سورة البقرة، الآية 183', en: 'Surah Al-Baqara, verse 183' } },
      { id: 'b', text: { fr: 'Sourate Al-Imran, verset 50', ar: 'سورة آل عمران، الآية 50', en: 'Surah Al-Imran, verse 50' } },
      { id: 'c', text: { fr: 'Sourate An-Nisa, verset 103', ar: 'سورة النساء، الآية 103', en: 'Surah An-Nisa, verse 103' } },
      { id: 'd', text: { fr: 'Sourate Al-Ma\'ida, verset 6', ar: 'سورة المائدة، الآية 6', en: 'Surah Al-Ma\'ida, verse 6' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: '"Ô vous qui avez cru ! Le jeûne vous a été prescrit comme il a été prescrit à ceux qui vous ont précédés, afin que vous atteigniez la piété." (2:183)',
      ar: '"يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ" (البقرة: 183)',
      en: '"O you who believe! Fasting is prescribed for you as it was prescribed for those before you, that you may attain piety." (2:183)',
    },
    points: 3,
    difficulty: 'medium',
    category: 'definition',
  },
];

// ============================================
// Questions - Conditions et Piliers
// ============================================

const conditionsQuestions: ExamQuestion[] = [
  {
    id: 'siyam-cond-001',
    question: {
      fr: 'Quelles sont les conditions d\'obligation du jeûne ?',
      ar: 'ما شروط وجوب الصيام؟',
      en: 'What are the conditions for fasting to be obligatory?',
    },
    options: [
      { id: 'a', text: { fr: 'Être musulman uniquement', ar: 'أن يكون مسلمًا فقط', en: 'Being Muslim only' } },
      { id: 'b', text: { fr: 'Être âgé de plus de 40 ans', ar: 'أن يكون عمره فوق 40 سنة', en: 'Being over 40 years old' } },
      { id: 'c', text: { fr: 'Islam, puberté, raison, capacité', ar: 'الإسلام، البلوغ، العقل، القدرة', en: 'Islam, puberty, sanity, ability' } },
      { id: 'd', text: { fr: 'Avoir accompli le Hajj', ar: 'أن يكون قد حج', en: 'Having performed Hajj' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le jeûne est obligatoire pour tout musulman, pubère, sain d\'esprit et capable (non malade, non voyageur).',
      ar: 'الصيام واجب على كل مسلم بالغ عاقل قادر (غير مريض ولا مسافر).',
      en: 'Fasting is obligatory for every Muslim who is mature, sane, and able (not sick or traveling).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'conditions',
  },
  {
    id: 'siyam-cond-002',
    question: {
      fr: 'Quels sont les piliers (Arkan) du jeûne ?',
      ar: 'ما أركان الصيام؟',
      en: 'What are the pillars (Arkan) of fasting?',
    },
    options: [
      { id: 'a', text: { fr: 'L\'intention et l\'abstention des annulatifs du Fajr au Maghrib', ar: 'النية والإمساك عن المفطرات من الفجر إلى المغرب', en: 'Intention and abstaining from invalidators from Fajr to Maghrib' } },
      { id: 'b', text: { fr: 'Manger le Suhur et prier Tarawih', ar: 'أكل السحور وصلاة التراويح', en: 'Eating Suhur and praying Tarawih' } },
      { id: 'c', text: { fr: 'Lire le Coran et faire le Dhikr', ar: 'قراءة القرآن والذكر', en: 'Reading Quran and making Dhikr' } },
      { id: 'd', text: { fr: 'Payer la Zakat et faire l\'Iftar', ar: 'دفع الزكاة والإفطار', en: 'Paying Zakat and breaking fast' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les deux piliers du jeûne sont : 1) L\'intention (Niyya) avant l\'aube, 2) L\'abstention de tout ce qui rompt le jeûne du Fajr au Maghrib.',
      ar: 'ركنا الصيام هما: 1) النية قبل الفجر، 2) الإمساك عن المفطرات من الفجر إلى المغرب.',
      en: 'The two pillars of fasting are: 1) Intention before dawn, 2) Abstaining from invalidators from Fajr to Maghrib.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'conditions',
  },
  {
    id: 'siyam-cond-003',
    question: {
      fr: 'Quand doit-on formuler l\'intention (Niyya) pour le jeûne obligatoire ?',
      ar: 'متى يجب تبييت النية للصيام الواجب؟',
      en: 'When should the intention for obligatory fasting be made?',
    },
    options: [
      { id: 'a', text: { fr: 'Avant l\'aube (Fajr)', ar: 'قبل طلوع الفجر', en: 'Before dawn (Fajr)' } },
      { id: 'b', text: { fr: 'Au moment de l\'Iftar', ar: 'عند الإفطار', en: 'At the time of Iftar' } },
      { id: 'c', text: { fr: 'À midi', ar: 'عند الظهر', en: 'At noon' } },
      { id: 'd', text: { fr: 'Au début du mois seulement', ar: 'في أول الشهر فقط', en: 'At the beginning of the month only' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'L\'intention du jeûne obligatoire doit être formulée la nuit, avant l\'aube. Le Prophète ﷺ a dit : "Celui qui n\'a pas formulé l\'intention de jeûner avant l\'aube n\'a pas de jeûne."',
      ar: 'يجب تبييت النية للصيام الواجب ليلاً قبل الفجر. قال النبي ﷺ: "من لم يُبيّت الصيام قبل الفجر فلا صيام له."',
      en: 'The intention for obligatory fasting must be made at night, before dawn. The Prophet ﷺ said: "Whoever does not intend to fast before Fajr has no fast."',
    },
    points: 2,
    difficulty: 'medium',
    category: 'conditions',
  },
  {
    id: 'siyam-cond-004',
    question: {
      fr: 'Un enfant de 10 ans doit-il jeûner Ramadan ?',
      ar: 'هل يجب على طفل عمره 10 سنوات صيام رمضان؟',
      en: 'Must a 10-year-old child fast Ramadan?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, c\'est obligatoire', ar: 'نعم، واجب عليه', en: 'Yes, it is obligatory' } },
      { id: 'b', text: { fr: 'Seulement les 10 premiers jours', ar: 'فقط العشرة الأيام الأولى', en: 'Only the first 10 days' } },
      { id: 'c', text: { fr: 'Il est interdit de le faire jeûner', ar: 'يحرم تصويمه', en: 'It is forbidden to make him fast' } },
      { id: 'd', text: { fr: 'Non, mais il est recommandé de l\'habituer', ar: 'لا، لكن يُستحب تعويده', en: 'No, but it is recommended to accustom him' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Le jeûne n\'est pas obligatoire avant la puberté, mais les parents sont encouragés à habituer leurs enfants progressivement.',
      ar: 'الصيام لا يجب قبل البلوغ، لكن يُستحب للوالدين تعويد أطفالهم تدريجيًا.',
      en: 'Fasting is not obligatory before puberty, but parents are encouraged to gradually accustom their children.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'conditions',
  },
  {
    id: 'siyam-cond-005',
    question: {
      fr: 'Quel est le temps de l\'abstention (Imsak) ?',
      ar: 'ما وقت الإمساك؟',
      en: 'What is the time of abstention (Imsak)?',
    },
    options: [
      { id: 'a', text: { fr: 'Du lever du soleil au coucher', ar: 'من شروق الشمس إلى غروبها', en: 'From sunrise to sunset' } },
      { id: 'b', text: { fr: 'De minuit à midi', ar: 'من منتصف الليل إلى الظهر', en: 'From midnight to noon' } },
      { id: 'c', text: { fr: 'De l\'aube vraie (Fajr Sadiq) au coucher du soleil', ar: 'من الفجر الصادق إلى غروب الشمس', en: 'From true dawn (Fajr Sadiq) to sunset' } },
      { id: 'd', text: { fr: 'Du Dhuhr au Isha', ar: 'من الظهر إلى العشاء', en: 'From Dhuhr to Isha' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'L\'abstention commence à l\'aube vraie (Fajr Sadiq) et se termine au coucher du soleil, comme indiqué dans le verset : "...jusqu\'à ce que le fil blanc se distingue du fil noir de l\'aube"',
      ar: 'يبدأ الإمساك من طلوع الفجر الصادق وينتهي بغروب الشمس، كما في الآية: "...حَتَّىٰ يَتَبَيَّنَ لَكُمُ الْخَيْطُ الْأَبْيَضُ مِنَ الْخَيْطِ الْأَسْوَدِ مِنَ الْفَجْرِ"',
      en: 'Abstention begins at true dawn and ends at sunset, as stated in the verse: "...until the white thread becomes distinct from the black thread of dawn"',
    },
    points: 2,
    difficulty: 'medium',
    category: 'conditions',
  },
];

// ============================================
// Questions - Annulatifs du Jeûne
// ============================================

const annulatifsQuestions: ExamQuestion[] = [
  {
    id: 'siyam-anul-001',
    question: {
      fr: 'Lequel de ces actes annule le jeûne ?',
      ar: 'أي من هذه الأفعال يُبطل الصيام؟',
      en: 'Which of these acts invalidates fasting?',
    },
    options: [
      { id: 'a', text: { fr: 'Manger ou boire volontairement', ar: 'الأكل أو الشرب عمدًا', en: 'Eating or drinking deliberately' } },
      { id: 'b', text: { fr: 'Se brosser les dents avec du Siwak', ar: 'استخدام السواك', en: 'Brushing teeth with Siwak' } },
      { id: 'c', text: { fr: 'Prendre une douche', ar: 'الاستحمام', en: 'Taking a shower' } },
      { id: 'd', text: { fr: 'Utiliser du parfum', ar: 'استخدام العطر', en: 'Using perfume' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Manger ou boire volontairement annule le jeûne. Le Siwak, la douche et le parfum ne l\'annulent pas.',
      ar: 'الأكل أو الشرب عمدًا يُبطل الصيام. السواك والاستحمام والعطر لا تُبطله.',
      en: 'Eating or drinking deliberately invalidates fasting. Siwak, showering and perfume do not.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'annulatifs',
  },
  {
    id: 'siyam-anul-002',
    question: {
      fr: 'Que doit faire celui qui mange par oubli pendant le jeûne ?',
      ar: 'ماذا يفعل من أكل ناسيًا وهو صائم؟',
      en: 'What should one who eats forgetfully while fasting do?',
    },
    options: [
      { id: 'a', text: { fr: 'Son jeûne est annulé, il doit le rattraper', ar: 'بطل صومه ويجب قضاؤه', en: 'His fast is invalid, he must make it up' } },
      { id: 'b', text: { fr: 'Il doit recommencer le mois entier', ar: 'يجب أن يُعيد الشهر كله', en: 'He must restart the entire month' } },
      { id: 'c', text: { fr: 'Il doit payer une Kaffara', ar: 'عليه كفارة', en: 'He must pay Kaffara' } },
      { id: 'd', text: { fr: 'Son jeûne est valide, il continue normalement', ar: 'صومه صحيح ويستمر', en: 'His fast is valid, he continues normally' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Celui qui oublie qu\'il jeûne et mange ou boit, qu\'il complète son jeûne, car c\'est Allah qui l\'a nourri et abreuvé."',
      ar: 'قال النبي ﷺ: "من نسي وهو صائم فأكل أو شرب فليتم صومه، فإنما أطعمه الله وسقاه."',
      en: 'The Prophet ﷺ said: "Whoever forgets while fasting and eats or drinks, let him complete his fast, for Allah has fed and given him drink."',
    },
    points: 3,
    difficulty: 'medium',
    category: 'annulatifs',
  },
  {
    id: 'siyam-anul-003',
    question: {
      fr: 'Les rapports intimes pendant la journée de Ramadan nécessitent :',
      ar: 'الجماع في نهار رمضان يوجب:',
      en: 'Intimate relations during Ramadan daytime require:',
    },
    options: [
      { id: 'a', text: { fr: 'Uniquement le rattrapage du jour', ar: 'قضاء اليوم فقط', en: 'Only making up the day' } },
      { id: 'b', text: { fr: 'Rien, c\'est permis', ar: 'لا شيء، فهو جائز', en: 'Nothing, it is permissible' } },
      { id: 'c', text: { fr: 'Le rattrapage ET la Kaffara (expiation)', ar: 'القضاء والكفارة', en: 'Making up AND Kaffara (expiation)' } },
      { id: 'd', text: { fr: 'Seulement le repentir', ar: 'التوبة فقط', en: 'Only repentance' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Les rapports intimes volontaires pendant la journée de Ramadan obligent : le rattrapage du jour + la Kaffara (affranchir un esclave, ou jeûner 2 mois consécutifs, ou nourrir 60 pauvres).',
      ar: 'الجماع العمد في نهار رمضان يوجب: القضاء + الكفارة (عتق رقبة، أو صيام شهرين متتابعين، أو إطعام 60 مسكينًا).',
      en: 'Voluntary intimate relations during Ramadan daytime require: making up the day + Kaffara (freeing a slave, or fasting 2 consecutive months, or feeding 60 poor people).',
    },
    points: 3,
    difficulty: 'hard',
    category: 'annulatifs',
  },
  {
    id: 'siyam-anul-004',
    question: {
      fr: 'Le vomissement volontaire annule-t-il le jeûne ?',
      ar: 'هل القيء العمد يُبطل الصيام؟',
      en: 'Does deliberate vomiting invalidate fasting?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, il annule le jeûne', ar: 'نعم، يُبطل الصيام', en: 'Yes, it invalidates fasting' } },
      { id: 'b', text: { fr: 'Non, jamais', ar: 'لا، أبدًا', en: 'No, never' } },
      { id: 'c', text: { fr: 'Seulement si c\'est après Dhuhr', ar: 'فقط إذا كان بعد الظهر', en: 'Only if it is after Dhuhr' } },
      { id: 'd', text: { fr: 'Seulement pour les femmes', ar: 'للنساء فقط', en: 'Only for women' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Celui qui est pris de vomissement n\'a pas à rattraper, mais celui qui vomit volontairement doit rattraper."',
      ar: 'قال النبي ﷺ: "من ذرعه القيء فليس عليه قضاء، ومن استقاء عمدًا فليقضِ."',
      en: 'The Prophet ﷺ said: "Whoever is overcome by vomiting does not have to make up, but whoever vomits deliberately must make up."',
    },
    points: 2,
    difficulty: 'medium',
    category: 'annulatifs',
  },
  {
    id: 'siyam-anul-005',
    question: {
      fr: 'Les injections (piqûres) pendant le jeûne :',
      ar: 'الحقن (الإبر) أثناء الصيام:',
      en: 'Injections during fasting:',
    },
    options: [
      { id: 'a', text: { fr: 'Annulent toujours le jeûne', ar: 'تُبطل الصيام دائمًا', en: 'Always invalidate fasting' } },
      { id: 'b', text: { fr: 'Annulent seulement si faites avant Dhuhr', ar: 'تُبطل فقط إذا كانت قبل الظهر', en: 'Invalidate only if done before Dhuhr' } },
      { id: 'c', text: { fr: 'N\'annulent jamais le jeûne', ar: 'لا تُبطل الصيام أبدًا', en: 'Never invalidate fasting' } },
      { id: 'd', text: { fr: 'Les nutritives annulent, les médicinales non nutritives sont tolérées', ar: 'المغذية تُبطل، والدوائية غير المغذية لا تُبطل', en: 'Nutritive ones invalidate, non-nutritive medicinal ones are tolerated' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Les injections nutritives (sérum, glucose) annulent le jeûne car elles nourrissent le corps. Les injections médicinales non nutritives (insuline, vaccins) sont tolérées selon la majorité des savants.',
      ar: 'الحقن المغذية (المحاليل، الجلوكوز) تُبطل الصيام لأنها تُغذي الجسم. أما الحقن الدوائية غير المغذية (الأنسولين، اللقاحات) فمباحة عند جمهور العلماء.',
      en: 'Nutritive injections (IV fluids, glucose) invalidate fasting as they nourish the body. Non-nutritive medicinal injections (insulin, vaccines) are tolerated according to most scholars.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'annulatifs',
  },
  {
    id: 'siyam-anul-006',
    question: {
      fr: 'Le saignement de nez annule-t-il le jeûne ?',
      ar: 'هل نزيف الأنف يُبطل الصيام؟',
      en: 'Does nosebleed invalidate fasting?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, toujours', ar: 'نعم، دائمًا', en: 'Yes, always' } },
      { id: 'b', text: { fr: 'Non, il n\'annule pas le jeûne', ar: 'لا، لا يُبطل الصيام', en: 'No, it does not invalidate fasting' } },
      { id: 'c', text: { fr: 'Seulement si c\'est abondant', ar: 'فقط إذا كان كثيرًا', en: 'Only if it is abundant' } },
      { id: 'd', text: { fr: 'Seulement pour les hommes', ar: 'للرجال فقط', en: 'Only for men' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le saignement de nez, les saignements de gencives ou tout saignement involontaire n\'annule pas le jeûne.',
      ar: 'نزيف الأنف أو اللثة أو أي نزيف غير إرادي لا يُبطل الصيام.',
      en: 'Nosebleed, gum bleeding or any involuntary bleeding does not invalidate fasting.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'annulatifs',
  },
  {
    id: 'siyam-anul-007',
    question: {
      fr: 'Avaler sa salive pendant le jeûne :',
      ar: 'بلع الريق أثناء الصيام:',
      en: 'Swallowing saliva during fasting:',
    },
    options: [
      { id: 'a', text: { fr: 'Annule le jeûne', ar: 'يُبطل الصيام', en: 'Invalidates fasting' } },
      { id: 'b', text: { fr: 'Est permis et n\'annule pas', ar: 'جائز ولا يُبطل', en: 'Is permissible and does not invalidate' } },
      { id: 'c', text: { fr: 'Est détestable (Makruh)', ar: 'مكروه', en: 'Is disliked (Makruh)' } },
      { id: 'd', text: { fr: 'N\'est permis qu\'avant Dhuhr', ar: 'لا يجوز إلا قبل الظهر', en: 'Is only permissible before Dhuhr' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Avaler sa propre salive est naturel et n\'annule pas le jeûne. C\'est une chose dont on ne peut se passer.',
      ar: 'بلع الريق أمر طبيعي ولا يُبطل الصيام، لأنه مما لا يمكن الاحتراز منه.',
      en: 'Swallowing one\'s own saliva is natural and does not invalidate fasting. It is something unavoidable.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'annulatifs',
  },
  {
    id: 'siyam-anul-008',
    question: {
      fr: 'Quels sont les annulatifs du jeûne qui nécessitent le rattrapage uniquement ?',
      ar: 'ما المفطرات التي توجب القضاء فقط؟',
      en: 'Which invalidators require only making up?',
    },
    options: [
      { id: 'a', text: { fr: 'Les rapports intimes', ar: 'الجماع', en: 'Intimate relations' } },
      { id: 'b', text: { fr: 'Dormir toute la journée', ar: 'النوم طوال اليوم', en: 'Sleeping all day' } },
      { id: 'c', text: { fr: 'Manger, boire volontairement, vomissement volontaire', ar: 'الأكل والشرب عمدًا، والقيء العمد', en: 'Eating, drinking deliberately, deliberate vomiting' } },
      { id: 'd', text: { fr: 'Médire (Ghiba)', ar: 'الغيبة', en: 'Backbiting' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Manger ou boire volontairement et le vomissement volontaire nécessitent le rattrapage (Qada) sans Kaffara. Seul le rapport intime nécessite le rattrapage ET la Kaffara.',
      ar: 'الأكل أو الشرب عمدًا والقيء العمد يوجبان القضاء فقط. أما الجماع فيوجب القضاء والكفارة.',
      en: 'Eating or drinking deliberately and deliberate vomiting require only making up (Qada). Only intimate relations require both making up AND Kaffara.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'annulatifs',
  },
];

// ============================================
// Questions - Dispenses et Rattrapage
// ============================================

const dispensesQuestions: ExamQuestion[] = [
  {
    id: 'siyam-disp-001',
    question: {
      fr: 'Qui est dispensé du jeûne de Ramadan ?',
      ar: 'من يُباح له الفطر في رمضان؟',
      en: 'Who is exempted from fasting Ramadan?',
    },
    options: [
      { id: 'a', text: { fr: 'Le voyageur, le malade, la femme enceinte/allaitante, le vieillard incapable', ar: 'المسافر، المريض، الحامل والمرضع، الشيخ الكبير العاجز', en: 'The traveler, the sick, pregnant/nursing woman, the incapable elderly' } },
      { id: 'b', text: { fr: 'Les étudiants pendant les examens', ar: 'الطلاب أثناء الامتحانات', en: 'Students during exams' } },
      { id: 'c', text: { fr: 'Les travailleurs manuels', ar: 'العمال اليدويون', en: 'Manual workers' } },
      { id: 'd', text: { fr: 'Personne n\'est dispensé', ar: 'لا أحد معذور', en: 'No one is exempted' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le voyageur et le malade peuvent rompre et rattraper plus tard. Le vieillard incapable nourrit un pauvre par jour (Fidya).',
      ar: 'المسافر والمريض يُفطران ويقضيان. أما الشيخ الكبير العاجز فيُطعم مسكينًا عن كل يوم (الفدية).',
      en: 'The traveler and sick person can break fast and make up later. The incapable elderly feeds a poor person daily (Fidya).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'dispenses',
  },
  {
    id: 'siyam-disp-002',
    question: {
      fr: 'Quelle est la distance minimale du voyage permettant la rupture ?',
      ar: 'ما المسافة التي تُبيح الفطر للمسافر؟',
      en: 'What is the minimum travel distance allowing breaking fast?',
    },
    options: [
      { id: 'a', text: { fr: 'Environ 80 km (distance du raccourcissement de la prière)', ar: 'حوالي 80 كم (مسافة القصر)', en: 'About 80 km (prayer shortening distance)' } },
      { id: 'b', text: { fr: '10 km', ar: '10 كم', en: '10 km' } },
      { id: 'c', text: { fr: '500 km', ar: '500 كم', en: '500 km' } },
      { id: 'd', text: { fr: 'Aucune distance minimale', ar: 'لا حد أدنى للمسافة', en: 'No minimum distance' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'C\'est la même distance que celle permettant le raccourcissement de la prière, estimée à environ 80-85 km par la majorité des savants.',
      ar: 'هي نفس مسافة قصر الصلاة، وتُقدر بحوالي 80-85 كم عند جمهور العلماء.',
      en: 'It is the same distance that allows shortening prayer, estimated at about 80-85 km by most scholars.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'dispenses',
  },
  {
    id: 'siyam-disp-003',
    question: {
      fr: 'Que doit faire une femme en période de menstrues ?',
      ar: 'ماذا تفعل المرأة الحائض؟',
      en: 'What should a menstruating woman do?',
    },
    options: [
      { id: 'a', text: { fr: 'Elle doit jeûner quand même', ar: 'تصوم على أي حال', en: 'She must fast anyway' } },
      { id: 'b', text: { fr: 'Elle paie la Fidya seulement', ar: 'تدفع الفدية فقط', en: 'She pays Fidya only' } },
      { id: 'c', text: { fr: 'Elle peut choisir de jeûner ou non', ar: 'لها الخيار أن تصوم أو لا', en: 'She can choose to fast or not' } },
      { id: 'd', text: { fr: 'Il lui est interdit de jeûner et elle rattrape après Ramadan', ar: 'يحرم عليها الصيام وتقضي بعد رمضان', en: 'Fasting is forbidden and she makes up after Ramadan' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Le jeûne est interdit pendant les menstrues (il n\'est pas valide). La femme doit obligatoirement rattraper ces jours après Ramadan.',
      ar: 'يحرم الصيام أثناء الحيض (لا يصح). ويجب على المرأة قضاء هذه الأيام بعد رمضان.',
      en: 'Fasting is forbidden during menstruation (it is invalid). The woman must make up these days after Ramadan.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'dispenses',
  },
  {
    id: 'siyam-disp-004',
    question: {
      fr: 'Qu\'est-ce que la Fidya ?',
      ar: 'ما هي الفدية؟',
      en: 'What is Fidya?',
    },
    options: [
      { id: 'a', text: { fr: 'Jeûner deux mois consécutifs', ar: 'صيام شهرين متتابعين', en: 'Fasting two consecutive months' } },
      { id: 'b', text: { fr: 'Une somme d\'argent fixe', ar: 'مبلغ مالي ثابت', en: 'A fixed sum of money' } },
      { id: 'c', text: { fr: 'Nourrir un pauvre pour chaque jour non jeûné', ar: 'إطعام مسكين عن كل يوم أُفطر', en: 'Feeding a poor person for each day not fasted' } },
      { id: 'd', text: { fr: 'Une prière spéciale', ar: 'صلاة خاصة', en: 'A special prayer' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'La Fidya consiste à nourrir un pauvre (un repas) pour chaque jour non jeûné. Elle est due par celui qui ne peut pas jeûner ni rattraper (vieillard, malade chronique).',
      ar: 'الفدية هي إطعام مسكين (وجبة) عن كل يوم أُفطر. وتجب على من لا يستطيع الصوم ولا القضاء (كالشيخ الكبير والمريض مرضًا مزمنًا).',
      en: 'Fidya consists of feeding a poor person (one meal) for each day not fasted. It is due from those who cannot fast or make up (elderly, chronically ill).',
    },
    points: 2,
    difficulty: 'medium',
    category: 'dispenses',
  },
  {
    id: 'siyam-disp-005',
    question: {
      fr: 'Une femme enceinte qui craint pour son fœtus doit :',
      ar: 'الحامل التي تخاف على جنينها:',
      en: 'A pregnant woman who fears for her fetus must:',
    },
    options: [
      { id: 'a', text: { fr: 'Rompre et rattraper plus tard (certains ajoutent la Fidya)', ar: 'تُفطر وتقضي لاحقًا (وبعضهم يوجب الفدية أيضًا)', en: 'Break fast and make up later (some add Fidya)' } },
      { id: 'b', text: { fr: 'Jeûner obligatoirement', ar: 'تصوم وجوبًا', en: 'Fast obligatorily' } },
      { id: 'c', text: { fr: 'Payer la Kaffara seulement', ar: 'تدفع الكفارة فقط', en: 'Pay Kaffara only' } },
      { id: 'd', text: { fr: 'Ne rien faire', ar: 'لا شيء عليها', en: 'Do nothing' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Si elle craint pour elle ou son fœtus, elle rompt et rattrape. Certains savants ajoutent la Fidya si c\'est par crainte pour le fœtus uniquement.',
      ar: 'إذا خافت على نفسها أو جنينها تُفطر وتقضي. وبعض العلماء يوجب الفدية إذا كان الخوف على الجنين فقط.',
      en: 'If she fears for herself or fetus, she breaks and makes up. Some scholars add Fidya if fear is only for the fetus.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'dispenses',
  },
  {
    id: 'siyam-disp-006',
    question: {
      fr: 'Quand doit-on rattraper les jours manqués de Ramadan ?',
      ar: 'متى يجب قضاء أيام رمضان الفائتة؟',
      en: 'When must the missed Ramadan days be made up?',
    },
    options: [
      { id: 'a', text: { fr: 'Dans les 10 jours suivants', ar: 'خلال 10 أيام بعده', en: 'Within the next 10 days' } },
      { id: 'b', text: { fr: 'N\'importe quand dans sa vie', ar: 'في أي وقت من حياته', en: 'Anytime in one\'s life' } },
      { id: 'c', text: { fr: 'Dans les 5 ans', ar: 'خلال 5 سنوات', en: 'Within 5 years' } },
      { id: 'd', text: { fr: 'Avant le Ramadan suivant', ar: 'قبل رمضان التالي', en: 'Before the next Ramadan' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'On peut rattraper tout au long de l\'année, mais il est préférable de le faire le plus tôt possible et obligatoire avant le Ramadan suivant.',
      ar: 'يمكن القضاء طوال السنة، لكن يُستحب التعجيل ويجب قبل رمضان التالي.',
      en: 'One can make up throughout the year, but it is preferable to do so as soon as possible and obligatory before the next Ramadan.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'dispenses',
  },
];

// ============================================
// Questions - Jeûne Surérogatoire
// ============================================

const naflQuestions: ExamQuestion[] = [
  {
    id: 'siyam-nafl-001',
    question: {
      fr: 'Quels jours est-il recommandé de jeûner ?',
      ar: 'أي الأيام يُستحب صيامها؟',
      en: 'Which days is it recommended to fast?',
    },
    options: [
      { id: 'a', text: { fr: 'Tous les dimanches', ar: 'كل أحد', en: 'Every Sunday' } },
      { id: 'b', text: { fr: 'Le premier jour de chaque mois', ar: 'أول يوم من كل شهر', en: 'The first day of each month' } },
      { id: 'c', text: { fr: 'Les lundis et jeudis, les jours blancs (13, 14, 15)', ar: 'الاثنين والخميس، والأيام البيض (13، 14، 15)', en: 'Mondays and Thursdays, the white days (13, 14, 15)' } },
      { id: 'd', text: { fr: 'Uniquement en hiver', ar: 'في الشتاء فقط', en: 'Only in winter' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le Prophète ﷺ jeûnait les lundis et jeudis et a recommandé les 3 jours blancs (13, 14, 15 de chaque mois lunaire).',
      ar: 'كان النبي ﷺ يصوم الاثنين والخميس وأوصى بصيام الأيام البيض (13، 14، 15 من كل شهر قمري).',
      en: 'The Prophet ﷺ fasted Mondays and Thursdays and recommended the 3 white days (13, 14, 15 of each lunar month).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'nafl',
  },
  {
    id: 'siyam-nafl-002',
    question: {
      fr: 'Quel est le meilleur jeûne surérogatoire ?',
      ar: 'ما أفضل صيام التطوع؟',
      en: 'What is the best voluntary fasting?',
    },
    options: [
      { id: 'a', text: { fr: 'Jeûner un jour sur deux (jeûne de Dawud)', ar: 'صيام يوم وإفطار يوم (صيام داود)', en: 'Fasting every other day (fasting of Dawud)' } },
      { id: 'b', text: { fr: 'Jeûner tous les jours', ar: 'صيام كل يوم', en: 'Fasting every day' } },
      { id: 'c', text: { fr: 'Jeûner une fois par mois', ar: 'صيام مرة في الشهر', en: 'Fasting once a month' } },
      { id: 'd', text: { fr: 'Jeûner uniquement l\'été', ar: 'الصيام في الصيف فقط', en: 'Fasting only in summer' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ a dit que le meilleur jeûne est celui de Dawud (عليه السلام) : jeûner un jour et rompre un jour.',
      ar: 'قال النبي ﷺ إن أفضل الصيام صيام داود عليه السلام: يصوم يومًا ويُفطر يومًا.',
      en: 'The Prophet ﷺ said the best fasting is that of Dawud (AS): fasting one day and breaking the next.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'nafl',
  },
  {
    id: 'siyam-nafl-003',
    question: {
      fr: 'Quel est le mérite du jeûne d\'Achura (10 Muharram) ?',
      ar: 'ما فضل صيام عاشوراء (10 محرم)؟',
      en: 'What is the merit of fasting Ashura (10 Muharram)?',
    },
    options: [
      { id: 'a', text: { fr: 'Il expie les péchés de l\'année passée', ar: 'يُكفّر ذنوب السنة الماضية', en: 'It expiates sins of the past year' } },
      { id: 'b', text: { fr: 'Il double les récompenses', ar: 'يُضاعف الحسنات', en: 'It doubles rewards' } },
      { id: 'c', text: { fr: 'Il est interdit', ar: 'محرّم', en: 'It is forbidden' } },
      { id: 'd', text: { fr: 'Il n\'a pas de mérite particulier', ar: 'ليس له فضل خاص', en: 'It has no special merit' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Le jeûne d\'Achura expie les péchés de l\'année passée." Il est recommandé de jeûner aussi le 9 pour se différencier des Juifs.',
      ar: 'قال النبي ﷺ: "صيام عاشوراء يُكفّر السنة الماضية." ويُستحب صيام التاسع معه مخالفةً لليهود.',
      en: 'The Prophet ﷺ said: "Fasting Ashura expiates the past year\'s sins." It is recommended to also fast the 9th to differ from the Jews.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'nafl',
  },
  {
    id: 'siyam-nafl-004',
    question: {
      fr: 'Quel est le mérite du jeûne du jour d\'Arafat (9 Dhul Hijja) ?',
      ar: 'ما فضل صيام يوم عرفة (9 ذي الحجة)؟',
      en: 'What is the merit of fasting the Day of Arafat (9 Dhul Hijja)?',
    },
    options: [
      { id: 'a', text: { fr: 'Il expie les péchés de l\'année passée et de l\'année à venir', ar: 'يُكفّر ذنوب السنة الماضية والسنة القادمة', en: 'It expiates sins of the past year and the coming year' } },
      { id: 'b', text: { fr: 'Il n\'a pas de mérite', ar: 'ليس له فضل', en: 'It has no merit' } },
      { id: 'c', text: { fr: 'Il est interdit', ar: 'محرّم', en: 'It is forbidden' } },
      { id: 'd', text: { fr: 'Il expie les grands péchés', ar: 'يُكفّر الكبائر', en: 'It expiates major sins' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Le jeûne du jour d\'Arafat, j\'espère qu\'Allah expie les péchés de l\'année passée et de l\'année à venir." (pour les non-pèlerins)',
      ar: 'قال النبي ﷺ: "صيام يوم عرفة أحتسب على الله أن يُكفّر السنة التي قبله والسنة التي بعده." (لغير الحاج)',
      en: 'The Prophet ﷺ said: "Fasting the day of Arafat, I hope Allah will expiate the past year and coming year." (for non-pilgrims)',
    },
    points: 2,
    difficulty: 'medium',
    category: 'nafl',
  },
  {
    id: 'siyam-nafl-005',
    question: {
      fr: 'Quels jours est-il interdit de jeûner ?',
      ar: 'أي الأيام يحرم صيامها؟',
      en: 'Which days is it forbidden to fast?',
    },
    options: [
      { id: 'a', text: { fr: 'Les vendredis', ar: 'أيام الجمعة', en: 'Fridays' } },
      { id: 'b', text: { fr: 'Les deux jours de l\'Aïd et les jours de Tashriq', ar: 'يومي العيدين وأيام التشريق', en: 'The two Eid days and the days of Tashriq' } },
      { id: 'c', text: { fr: 'Les lundis', ar: 'أيام الاثنين', en: 'Mondays' } },
      { id: 'd', text: { fr: 'Le jour d\'Arafat', ar: 'يوم عرفة', en: 'The day of Arafat' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Il est interdit de jeûner : Aïd al-Fitr, Aïd al-Adha, et les 3 jours de Tashriq (11, 12, 13 Dhul Hijja). Ce sont des jours de fête et de manger.',
      ar: 'يحرم صيام: عيد الفطر، عيد الأضحى، وأيام التشريق الثلاثة (11، 12، 13 ذي الحجة). فهي أيام عيد وأكل.',
      en: 'It is forbidden to fast: Eid al-Fitr, Eid al-Adha, and the 3 days of Tashriq (11, 12, 13 Dhul Hijja). These are days of celebration and eating.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'nafl',
  },
  {
    id: 'siyam-nafl-006',
    question: {
      fr: 'Quel est le statut du jeûne des 6 jours de Shawwal ?',
      ar: 'ما حكم صيام ستة أيام من شوال؟',
      en: 'What is the ruling on fasting 6 days of Shawwal?',
    },
    options: [
      { id: 'a', text: { fr: 'Obligatoire', ar: 'واجب', en: 'Obligatory' } },
      { id: 'b', text: { fr: 'Sunna recommandée', ar: 'سنة مستحبة', en: 'Recommended Sunnah' } },
      { id: 'c', text: { fr: 'Interdit', ar: 'محرّم', en: 'Forbidden' } },
      { id: 'd', text: { fr: 'Détestable', ar: 'مكروه', en: 'Disliked' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Celui qui jeûne Ramadan puis le fait suivre de 6 jours de Shawwal, c\'est comme s\'il avait jeûné toute l\'année."',
      ar: 'قال النبي ﷺ: "من صام رمضان ثم أتبعه ستًا من شوال كان كصيام الدهر."',
      en: 'The Prophet ﷺ said: "Whoever fasts Ramadan then follows it with 6 days of Shawwal, it is as if he fasted the entire year."',
    },
    points: 2,
    difficulty: 'easy',
    category: 'nafl',
  },
];

// ============================================
// Questions - Ramadan Spécificités
// ============================================

const ramadanQuestions: ExamQuestion[] = [
  {
    id: 'siyam-ram-001',
    question: {
      fr: 'Qu\'est-ce que le Suhur ?',
      ar: 'ما هو السحور؟',
      en: 'What is Suhur?',
    },
    options: [
      { id: 'a', text: { fr: 'Le repas de la rupture du jeûne', ar: 'وجبة الإفطار', en: 'The meal to break the fast' } },
      { id: 'b', text: { fr: 'Le repas pris avant l\'aube', ar: 'الوجبة قبل الفجر', en: 'The meal taken before dawn' } },
      { id: 'c', text: { fr: 'Une prière nocturne', ar: 'صلاة الليل', en: 'A night prayer' } },
      { id: 'd', text: { fr: 'L\'aumône de Ramadan', ar: 'صدقة رمضان', en: 'Ramadan charity' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Suhur est le repas pris avant l\'aube pour se préparer au jeûne. Le Prophète ﷺ a dit : "Prenez le Suhur, car dans le Suhur il y a bénédiction."',
      ar: 'السحور هو الوجبة قبل الفجر للاستعداد للصيام. قال النبي ﷺ: "تسحروا فإن في السحور بركة."',
      en: 'Suhur is the pre-dawn meal to prepare for fasting. The Prophet ﷺ said: "Have Suhur, for in Suhur there is blessing."',
    },
    points: 2,
    difficulty: 'easy',
    category: 'ramadan',
  },
  {
    id: 'siyam-ram-002',
    question: {
      fr: 'Avec quoi est-il Sunna de rompre le jeûne ?',
      ar: 'بماذا يُسنّ الإفطار؟',
      en: 'With what is it Sunnah to break the fast?',
    },
    options: [
      { id: 'a', text: { fr: 'Du pain', ar: 'خبز', en: 'Bread' } },
      { id: 'b', text: { fr: 'Des dattes fraîches, sinon sèches, sinon de l\'eau', ar: 'رُطَب، فإن لم يجد فتمر، فإن لم يجد فماء', en: 'Fresh dates, otherwise dried dates, otherwise water' } },
      { id: 'c', text: { fr: 'Du lait', ar: 'حليب', en: 'Milk' } },
      { id: 'd', text: { fr: 'N\'importe quel fruit', ar: 'أي فاكهة', en: 'Any fruit' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ rompait avec des Rutab (dattes fraîches), sinon des Tamr (dattes sèches), sinon de l\'eau.',
      ar: 'كان النبي ﷺ يُفطر على رُطَب، فإن لم يجد فتمر، فإن لم يجد فماء.',
      en: 'The Prophet ﷺ would break fast with Rutab (fresh dates), or Tamr (dried dates), otherwise water.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'ramadan',
  },
  {
    id: 'siyam-ram-003',
    question: {
      fr: 'Qu\'est-ce que Laylat al-Qadr ?',
      ar: 'ما هي ليلة القدر؟',
      en: 'What is Laylat al-Qadr?',
    },
    options: [
      { id: 'a', text: { fr: 'La première nuit de Ramadan', ar: 'أول ليلة من رمضان', en: 'The first night of Ramadan' } },
      { id: 'b', text: { fr: 'La nuit où le Coran a été révélé, meilleure que mille mois', ar: 'الليلة التي أُنزل فيها القرآن، خير من ألف شهر', en: 'The night when Quran was revealed, better than a thousand months' } },
      { id: 'c', text: { fr: 'La nuit de l\'Aïd', ar: 'ليلة العيد', en: 'The night of Eid' } },
      { id: 'd', text: { fr: 'Le 15ème jour de Ramadan', ar: 'اليوم 15 من رمضان', en: 'The 15th day of Ramadan' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Laylat al-Qadr est la nuit où le Coran a commencé à être révélé. Allah dit : "La nuit d\'Al-Qadr est meilleure que mille mois." Elle se trouve dans les 10 dernières nuits impaires.',
      ar: 'ليلة القدر هي الليلة التي أُنزل فيها القرآن. قال تعالى: "لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ". وهي في العشر الأواخر من رمضان في الوتر.',
      en: 'Laylat al-Qadr is the night when Quran began to be revealed. Allah says: "The Night of Al-Qadr is better than a thousand months." It is in the last 10 odd nights.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'ramadan',
  },
  {
    id: 'siyam-ram-004',
    question: {
      fr: 'Qu\'est-ce que Zakat al-Fitr ?',
      ar: 'ما هي زكاة الفطر؟',
      en: 'What is Zakat al-Fitr?',
    },
    options: [
      { id: 'a', text: { fr: 'La Zakat annuelle sur les biens', ar: 'الزكاة السنوية على المال', en: 'Annual Zakat on wealth' } },
      { id: 'b', text: { fr: 'Une aumône obligatoire à la fin de Ramadan pour purifier le jeûne', ar: 'صدقة واجبة في نهاية رمضان لتطهير الصيام', en: 'An obligatory charity at the end of Ramadan to purify fasting' } },
      { id: 'c', text: { fr: 'Un don volontaire', ar: 'تبرع طوعي', en: 'A voluntary donation' } },
      { id: 'd', text: { fr: 'L\'aumône pour les voyageurs', ar: 'صدقة للمسافرين', en: 'Charity for travelers' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Zakat al-Fitr est une aumône obligatoire (un Saa de nourriture) à donner avant la prière de l\'Aïd pour purifier le jeûne des paroles vaines.',
      ar: 'زكاة الفطر صدقة واجبة (صاع من طعام) تُخرج قبل صلاة العيد لتطهير الصيام من اللغو والرفث.',
      en: 'Zakat al-Fitr is an obligatory charity (one Saa of food) given before Eid prayer to purify fasting from idle talk.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'ramadan',
  },
  {
    id: 'siyam-ram-005',
    question: {
      fr: 'Combien vaut un Saa pour Zakat al-Fitr ?',
      ar: 'كم يساوي الصاع في زكاة الفطر؟',
      en: 'How much is one Saa for Zakat al-Fitr?',
    },
    options: [
      { id: 'a', text: { fr: 'Environ 2,5 à 3 kg de nourriture', ar: 'حوالي 2.5 إلى 3 كجم من الطعام', en: 'About 2.5 to 3 kg of food' } },
      { id: 'b', text: { fr: '500 grammes', ar: '500 غرام', en: '500 grams' } },
      { id: 'c', text: { fr: '10 kg', ar: '10 كجم', en: '10 kg' } },
      { id: 'd', text: { fr: '100 dirhams', ar: '100 درهم', en: '100 dirhams' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Un Saa équivaut à 4 Mudd (poignées) du Prophète ﷺ, soit environ 2,5 à 3 kg de la nourriture courante du pays.',
      ar: 'الصاع يساوي 4 أمداد نبوية، أي حوالي 2.5 إلى 3 كجم من قوت البلد.',
      en: 'One Saa equals 4 Mudd (handfuls) of the Prophet ﷺ, about 2.5 to 3 kg of the country\'s staple food.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'ramadan',
  },
  {
    id: 'siyam-ram-006',
    question: {
      fr: 'Quand est-il recommandé de hâter l\'Iftar ?',
      ar: 'متى يُستحب تعجيل الإفطار؟',
      en: 'When is it recommended to hasten breaking fast?',
    },
    options: [
      { id: 'a', text: { fr: 'Une heure après le Maghrib', ar: 'بعد المغرب بساعة', en: 'One hour after Maghrib' } },
      { id: 'b', text: { fr: 'Dès le coucher du soleil', ar: 'عند غروب الشمس مباشرة', en: 'As soon as the sun sets' } },
      { id: 'c', text: { fr: 'Après la prière de Tarawih', ar: 'بعد صلاة التراويح', en: 'After Tarawih prayer' } },
      { id: 'd', text: { fr: 'À minuit', ar: 'عند منتصف الليل', en: 'At midnight' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Les gens ne cesseront d\'être dans le bien tant qu\'ils hâteront la rupture du jeûne."',
      ar: 'قال النبي ﷺ: "لا يزال الناس بخير ما عجّلوا الفطر."',
      en: 'The Prophet ﷺ said: "People will remain in goodness as long as they hasten breaking the fast."',
    },
    points: 2,
    difficulty: 'easy',
    category: 'ramadan',
  },
];

// ============================================
// Assemblage de l'examen COMPLET
// ============================================

const allQuestions: ExamQuestion[] = [
  ...definitionQuestions,     // 5 questions
  ...conditionsQuestions,     // 5 questions
  ...annulatifsQuestions,     // 8 questions
  ...dispensesQuestions,      // 6 questions
  ...naflQuestions,           // 6 questions
  ...ramadanQuestions,        // 6 questions
  // Total : 36 questions
];

export const examSiyamFinal: ExamConfig = {
  id: 'exam-siyam-final',
  type: 'course',
  level: 'intermediate',
  title: {
    fr: 'Examen Complet - Fiqh du Jeûne',
    ar: 'الامتحان الشامل - فقه الصيام',
    en: 'Complete Exam - Fiqh of Fasting',
  },
  description: {
    fr: 'Examen de 30 questions sélectionnées aléatoirement parmi une banque de 36 questions. Couvre tous les aspects du jeûne : définition, conditions, annulatifs, dispenses, et jeûne surérogatoire.',
    ar: 'امتحان من 30 سؤالاً يتم اختيارها عشوائياً من بنك يضم 36 سؤالاً. يغطي جميع جوانب الصيام: التعريف، الشروط، المفطرات، الرخص، وصيام التطوع.',
    en: 'Exam with 30 questions randomly selected from a pool of 36. Covers all aspects of fasting: definition, conditions, invalidators, exemptions, and voluntary fasting.',
  },
  instructions: {
    fr: 'Vous avez 45 minutes pour répondre à 30 questions. Chaque question a une seule bonne réponse. Un score de 70% est requis pour réussir.',
    ar: 'لديك 45 دقيقة للإجابة على 30 سؤالاً. لكل سؤال إجابة صحيحة واحدة. يُشترط 70% للنجاح.',
    en: 'You have 45 minutes to answer 30 questions. Each question has one correct answer. A score of 70% is required to pass.',
  },
  courseSlug: 'siyam',
  questionPool: allQuestions,
  questionsPerExam: 30,
  categoryConfig: [
    { category: 'definition', count: 4 },
    { category: 'conditions', count: 4 },
    { category: 'annulatifs', count: 7 },
    { category: 'dispenses', count: 5 },
    { category: 'nafl', count: 5 },
    { category: 'ramadan', count: 5 },
  ],
  questions: [],
  duration: 45,
  passingScore: 70,
  maxAttempts: 5,
  shuffleQuestions: true,
  shuffleOptions: true,
  showAnswersAfter: 'complete',
  hasCertificate: true,
  certificateName: {
    fr: 'Certificat de Maîtrise - Fiqh as-Siyam',
    ar: 'شهادة الإتقان - فقه الصيام',
    en: 'Mastery Certificate - Fiqh as-Siyam',
  },
  createdAt: '2026-01-31',
};

export default examSiyamFinal;
