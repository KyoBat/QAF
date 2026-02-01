/**
 * Examen Final - Aqeedah (Croyance Islamique)
 * 
 * 40 questions QCM couvrant les fondements de la foi :
 * - Tawhid et ses catégories
 * - Arkan al-Iman (6 piliers de la foi)
 * - Noms et Attributs d'Allah
 * - Prophétie et Messagers
 * - Le Jour Dernier
 * - Le Destin (Qadar)
 */

import { ExamConfig, ExamQuestion } from '../types';

// ============================================
// Questions - Tawhid (Unicité d'Allah)
// ============================================

const tawhidQuestions: ExamQuestion[] = [
  {
    id: 'aqeedah-tawhid-001',
    question: {
      fr: 'Qu\'est-ce que le Tawhid ?',
      ar: 'ما هو التوحيد؟',
      en: 'What is Tawhid?',
    },
    options: [
      { id: 'a', text: { fr: 'L\'affirmation de l\'unicité d\'Allah dans Sa seigneurie, Son adoration et Ses noms/attributs', ar: 'إفراد الله بالربوبية والعبادة والأسماء والصفات', en: 'Affirming Allah\'s oneness in Lordship, worship, and names/attributes' } },
      { id: 'b', text: { fr: 'La croyance en plusieurs dieux', ar: 'الإيمان بآلهة متعددة', en: 'Belief in multiple gods' } },
      { id: 'c', text: { fr: 'Une prière spéciale', ar: 'صلاة خاصة', en: 'A special prayer' } },
      { id: 'd', text: { fr: 'Un type de jeûne', ar: 'نوع من الصيام', en: 'A type of fasting' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Tawhid est le fondement de l\'Islam : affirmer l\'unicité absolue d\'Allah dans Sa seigneurie (Rububiyyah), Son adoration (Uluhiyyah) et Ses noms/attributs (Asma\' wa Sifat).',
      ar: 'التوحيد هو أساس الإسلام: إفراد الله تعالى بالربوبية والألوهية والأسماء والصفات.',
      en: 'Tawhid is the foundation of Islam: affirming Allah\'s absolute oneness in Lordship, worship, and names/attributes.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'tawhid',
  },
  {
    id: 'aqeedah-tawhid-002',
    question: {
      fr: 'Quelles sont les trois catégories du Tawhid ?',
      ar: 'ما هي أقسام التوحيد الثلاثة؟',
      en: 'What are the three categories of Tawhid?',
    },
    options: [
      { id: 'a', text: { fr: 'Salat, Zakat, Hajj', ar: 'الصلاة، الزكاة، الحج', en: 'Salat, Zakat, Hajj' } },
      { id: 'b', text: { fr: 'Rububiyyah, Uluhiyyah, Asma\' wa Sifat', ar: 'الربوبية، الألوهية، الأسماء والصفات', en: 'Rububiyyah, Uluhiyyah, Asma\' wa Sifat' } },
      { id: 'c', text: { fr: 'Iman, Islam, Ihsan', ar: 'الإيمان، الإسلام، الإحسان', en: 'Iman, Islam, Ihsan' } },
      { id: 'd', text: { fr: 'Fard, Sunna, Nafl', ar: 'الفرض، السنة، النفل', en: 'Fard, Sunnah, Nafl' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: '1) Tawhid ar-Rububiyyah : Allah est le seul Créateur/Souverain. 2) Tawhid al-Uluhiyyah : Allah seul mérite l\'adoration. 3) Tawhid al-Asma\' wa Sifat : Les noms et attributs d\'Allah.',
      ar: '1) توحيد الربوبية: الله الخالق المدبر. 2) توحيد الألوهية: لا يُعبد إلا الله. 3) توحيد الأسماء والصفات: إثبات ما أثبته الله لنفسه.',
      en: '1) Tawhid ar-Rububiyyah: Allah is sole Creator/Sovereign. 2) Tawhid al-Uluhiyyah: Allah alone deserves worship. 3) Tawhid al-Asma\' wa Sifat: Allah\'s names and attributes.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'tawhid',
  },
  {
    id: 'aqeedah-tawhid-003',
    question: {
      fr: 'Qu\'est-ce que le Tawhid ar-Rububiyyah ?',
      ar: 'ما هو توحيد الربوبية؟',
      en: 'What is Tawhid ar-Rububiyyah?',
    },
    options: [
      { id: 'a', text: { fr: 'Adorer Allah seul', ar: 'عبادة الله وحده', en: 'Worshipping Allah alone' } },
      { id: 'b', text: { fr: 'Connaître les noms d\'Allah', ar: 'معرفة أسماء الله', en: 'Knowing Allah\'s names' } },
      { id: 'c', text: { fr: 'Croire qu\'Allah est le seul Créateur, Pourvoyeur et Souverain de l\'univers', ar: 'الإيمان بأن الله وحده الخالق الرازق المدبر', en: 'Believing Allah is the only Creator, Provider and Sovereign of the universe' } },
      { id: 'd', text: { fr: 'Prier cinq fois par jour', ar: 'الصلاة خمس مرات يوميًا', en: 'Praying five times daily' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Tawhid ar-Rububiyyah signifie reconnaître qu\'Allah seul est le Créateur, le Pourvoyeur (Razzaq), le Donneur de vie et de mort, et le Souverain de toute chose.',
      ar: 'توحيد الربوبية يعني الإقرار بأن الله وحده الخالق الرازق المحيي المميت المدبر لكل شيء.',
      en: 'Tawhid ar-Rububiyyah means acknowledging that Allah alone is the Creator, Provider, Giver of life and death, and Sovereign of all things.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'tawhid',
  },
  {
    id: 'aqeedah-tawhid-004',
    question: {
      fr: 'Qu\'est-ce que le Shirk ?',
      ar: 'ما هو الشرك؟',
      en: 'What is Shirk?',
    },
    options: [
      { id: 'a', text: { fr: 'Une bonne action', ar: 'عمل صالح', en: 'A good deed' } },
      { id: 'b', text: { fr: 'Manquer une prière', ar: 'ترك صلاة', en: 'Missing a prayer' } },
      { id: 'c', text: { fr: 'Mentir', ar: 'الكذب', en: 'Lying' } },
      { id: 'd', text: { fr: 'Associer des partenaires à Allah dans ce qui Lui est exclusif', ar: 'الإشراك بالله فيما هو خاص به', en: 'Associating partners with Allah in what is exclusive to Him' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Le Shirk est le plus grand péché en Islam. C\'est associer quoi que ce soit ou quiconque à Allah dans Ses droits exclusifs (adoration, seigneurie, noms/attributs).',
      ar: 'الشرك أعظم الذنوب في الإسلام. وهو الإشراك بالله في حقوقه الخاصة (العبادة، الربوبية، الأسماء والصفات).',
      en: 'Shirk is the greatest sin in Islam. It is associating anything or anyone with Allah in His exclusive rights (worship, lordship, names/attributes).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'tawhid',
  },
  {
    id: 'aqeedah-tawhid-005',
    question: {
      fr: 'Quelle est la différence entre le Shirk majeur (Akbar) et le Shirk mineur (Asghar) ?',
      ar: 'ما الفرق بين الشرك الأكبر والشرك الأصغر؟',
      en: 'What is the difference between major Shirk (Akbar) and minor Shirk (Asghar)?',
    },
    options: [
      { id: 'a', text: { fr: 'Le Shirk majeur exclut de l\'Islam ; le Shirk mineur est un grand péché mais n\'exclut pas', ar: 'الأكبر مُخرج من الملة؛ الأصغر ذنب كبير لكن لا يُخرج', en: 'Major Shirk takes one out of Islam; minor Shirk is a great sin but doesn\'t' } },
      { id: 'b', text: { fr: 'Aucune différence', ar: 'لا فرق', en: 'No difference' } },
      { id: 'c', text: { fr: 'Le Shirk mineur est pire', ar: 'الأصغر أسوأ', en: 'Minor Shirk is worse' } },
      { id: 'd', text: { fr: 'Les deux sont mineurs', ar: 'كلاهما صغير', en: 'Both are minor' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Shirk Akbar (adorer autre qu\'Allah) exclut de l\'Islam. Le Shirk Asghar (comme le Riya\' - ostentation) est un grand péché mais ne rend pas mécréant.',
      ar: 'الشرك الأكبر (عبادة غير الله) مُخرج من الإسلام. الشرك الأصغر (كالرياء) ذنب عظيم لكن لا يُخرج من الملة.',
      en: 'Shirk Akbar (worshipping other than Allah) takes one out of Islam. Shirk Asghar (like Riya\' - showing off) is a great sin but doesn\'t make one a disbeliever.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'tawhid',
  },
];

// ============================================
// Questions - Arkan al-Iman (Piliers de la Foi)
// ============================================

const imanQuestions: ExamQuestion[] = [
  {
    id: 'aqeedah-iman-001',
    question: {
      fr: 'Combien y a-t-il de piliers de la foi (Arkan al-Iman) ?',
      ar: 'كم عدد أركان الإيمان؟',
      en: 'How many pillars of faith (Arkan al-Iman) are there?',
    },
    options: [
      { id: 'a', text: { fr: '5 piliers', ar: '5 أركان', en: '5 pillars' } },
      { id: 'b', text: { fr: '4 piliers', ar: '4 أركان', en: '4 pillars' } },
      { id: 'c', text: { fr: '6 piliers', ar: '6 أركان', en: '6 pillars' } },
      { id: 'd', text: { fr: '7 piliers', ar: '7 أركان', en: '7 pillars' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Les 6 piliers sont : la foi en Allah, Ses anges, Ses livres, Ses messagers, le Jour Dernier, et le destin (bon et mauvais).',
      ar: 'أركان الإيمان الستة: الإيمان بالله، وملائكته، وكتبه، ورسله، واليوم الآخر، والقدر خيره وشره.',
      en: 'The 6 pillars are: belief in Allah, His angels, His books, His messengers, the Last Day, and destiny (good and bad).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'iman',
  },
  {
    id: 'aqeedah-iman-002',
    question: {
      fr: 'Dans quel hadith célèbre les 6 piliers de la foi sont-ils mentionnés ?',
      ar: 'في أي حديث شهير ذُكرت أركان الإيمان الستة؟',
      en: 'In which famous hadith are the 6 pillars of faith mentioned?',
    },
    options: [
      { id: 'a', text: { fr: 'Hadith des 40 Nawawi', ar: 'حديث الأربعين النووية', en: 'Hadith of 40 Nawawi' } },
      { id: 'b', text: { fr: 'Hadith Qudsi', ar: 'الحديث القدسي', en: 'Hadith Qudsi' } },
      { id: 'c', text: { fr: 'Hadith du voyage nocturne', ar: 'حديث الإسراء', en: 'Hadith of the night journey' } },
      { id: 'd', text: { fr: 'Hadith Jibril', ar: 'حديث جبريل', en: 'Hadith Jibril' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Le Hadith Jibril (rapporté par Muslim) est celui où l\'ange Jibril est venu interroger le Prophète ﷺ sur l\'Islam, l\'Iman et l\'Ihsan.',
      ar: 'حديث جبريل (رواه مسلم) هو الذي جاء فيه جبريل يسأل النبي ﷺ عن الإسلام والإيمان والإحسان.',
      en: 'Hadith Jibril (reported by Muslim) is where angel Jibril came to ask the Prophet ﷺ about Islam, Iman, and Ihsan.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'iman',
  },
  {
    id: 'aqeedah-iman-003',
    question: {
      fr: 'Que signifie croire aux anges ?',
      ar: 'ما معنى الإيمان بالملائكة؟',
      en: 'What does belief in angels mean?',
    },
    options: [
      { id: 'a', text: { fr: 'Croire qu\'ils sont des créatures de lumière qui obéissent parfaitement à Allah', ar: 'الإيمان بأنهم مخلوقون من نور يطيعون الله تمامًا', en: 'Believing they are creatures of light who perfectly obey Allah' } },
      { id: 'b', text: { fr: 'Croire qu\'ils sont des dieux mineurs', ar: 'الاعتقاد بأنهم آلهة صغرى', en: 'Believing they are minor gods' } },
      { id: 'c', text: { fr: 'Croire qu\'ils ont un libre arbitre complet', ar: 'الاعتقاد بأن لهم إرادة حرة كاملة', en: 'Believing they have complete free will' } },
      { id: 'd', text: { fr: 'Croire qu\'ils sont des humains parfaits', ar: 'الاعتقاد بأنهم بشر كاملون', en: 'Believing they are perfect humans' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les anges sont créés de lumière, ne désobéissent jamais à Allah, et ont des missions spécifiques (Jibril : révélation, Mikail : subsistance, etc.).',
      ar: 'الملائكة مخلوقون من نور، لا يعصون الله ما أمرهم، ولهم مهام محددة (جبريل: الوحي، ميكائيل: الرزق، إلخ).',
      en: 'Angels are created from light, never disobey Allah, and have specific missions (Jibril: revelation, Mikail: sustenance, etc.).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'iman',
  },
  {
    id: 'aqeedah-iman-004',
    question: {
      fr: 'Quels sont les 4 livres révélés mentionnés dans le Coran ?',
      ar: 'ما الكتب الأربعة المذكورة في القرآن؟',
      en: 'What are the 4 revealed books mentioned in the Quran?',
    },
    options: [
      { id: 'a', text: { fr: 'Bible, Coran, Védas, Torah', ar: 'الإنجيل، القرآن، الفيدا، التوراة', en: 'Bible, Quran, Vedas, Torah' } },
      { id: 'b', text: { fr: 'Coran uniquement', ar: 'القرآن فقط', en: 'Quran only' } },
      { id: 'c', text: { fr: 'Torah, Zabur (Psaumes), Injil (Évangile), Coran', ar: 'التوراة، الزبور، الإنجيل، القرآن', en: 'Torah, Zabur (Psalms), Injil (Gospel), Quran' } },
      { id: 'd', text: { fr: 'Torah et Coran uniquement', ar: 'التوراة والقرآن فقط', en: 'Torah and Quran only' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Torah (révélée à Musa), Zabur/Psaumes (à Dawud), Injil/Évangile (à \'Isa), Coran (à Muhammad ﷺ). Il y a aussi les Suhuf d\'Ibrahim et Musa.',
      ar: 'التوراة (لموسى)، الزبور (لداود)، الإنجيل (لعيسى)، القرآن (لمحمد ﷺ). وهناك أيضًا صحف إبراهيم وموسى.',
      en: 'Torah (to Musa), Zabur/Psalms (to Dawud), Injil/Gospel (to \'Isa), Quran (to Muhammad ﷺ). There are also Suhuf of Ibrahim and Musa.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'iman',
  },
  {
    id: 'aqeedah-iman-005',
    question: {
      fr: 'Combien de prophètes sont nommés dans le Coran ?',
      ar: 'كم نبيًا سُمّي في القرآن؟',
      en: 'How many prophets are named in the Quran?',
    },
    options: [
      { id: 'a', text: { fr: '10 prophètes', ar: '10 أنبياء', en: '10 prophets' } },
      { id: 'b', text: { fr: '50 prophètes', ar: '50 نبيًا', en: '50 prophets' } },
      { id: 'c', text: { fr: '100 prophètes', ar: '100 نبي', en: '100 prophets' } },
      { id: 'd', text: { fr: '25 prophètes', ar: '25 نبيًا', en: '25 prophets' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: '25 prophètes sont nommés dans le Coran, mais leur nombre total est beaucoup plus grand (124 000 selon certains hadiths).',
      ar: 'سُمّي في القرآن 25 نبيًا، لكن عددهم الإجمالي أكبر بكثير (124 ألفًا حسب بعض الأحاديث).',
      en: '25 prophets are named in the Quran, but their total number is much greater (124,000 according to some hadiths).',
    },
    points: 2,
    difficulty: 'medium',
    category: 'iman',
  },
];

// ============================================
// Questions - Asma' wa Sifat (Noms et Attributs)
// ============================================

const asmaQuestions: ExamQuestion[] = [
  {
    id: 'aqeedah-asma-001',
    question: {
      fr: 'Combien de noms d\'Allah sont mentionnés dans le hadith célèbre ?',
      ar: 'كم اسمًا لله ذُكر في الحديث الشهير؟',
      en: 'How many names of Allah are mentioned in the famous hadith?',
    },
    options: [
      { id: 'a', text: { fr: '99 noms', ar: '99 اسمًا', en: '99 names' } },
      { id: 'b', text: { fr: '50 noms', ar: '50 اسمًا', en: '50 names' } },
      { id: 'c', text: { fr: '100 noms', ar: '100 اسم', en: '100 names' } },
      { id: 'd', text: { fr: '1000 noms', ar: '1000 اسم', en: '1000 names' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Allah a 99 noms, cent moins un. Celui qui les apprend entrera au Paradis." Les noms d\'Allah sont en réalité illimités.',
      ar: 'قال النبي ﷺ: "إن لله تسعة وتسعين اسمًا، مائة إلا واحدًا، من أحصاها دخل الجنة." وأسماء الله في الحقيقة غير محدودة.',
      en: 'The Prophet ﷺ said: "Allah has 99 names, one hundred minus one. Whoever learns them will enter Paradise." Allah\'s names are actually unlimited.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'asma',
  },
  {
    id: 'aqeedah-asma-002',
    question: {
      fr: 'Quelle est la méthodologie correcte concernant les attributs d\'Allah ?',
      ar: 'ما المنهج الصحيح في صفات الله؟',
      en: 'What is the correct methodology regarding Allah\'s attributes?',
    },
    options: [
      { id: 'a', text: { fr: 'Les nier complètement', ar: 'نفيها بالكامل', en: 'Deny them completely' } },
      { id: 'b', text: { fr: 'Les interpréter métaphoriquement', ar: 'تأويلها مجازيًا', en: 'Interpret them metaphorically' } },
      { id: 'c', text: { fr: 'Les affirmer sans les comparer aux créatures ni les déformer', ar: 'إثباتها بلا تشبيه ولا تحريف', en: 'Affirm them without comparing to creation or distorting' } },
      { id: 'd', text: { fr: 'Les comparer aux attributs humains', ar: 'تشبيهها بصفات البشر', en: 'Compare them to human attributes' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'On affirme les attributs comme Allah et Son Messager les ont décrits, sans Takyif (demander comment), Tamthil (comparer), Ta\'til (nier) ou Tahrif (déformer).',
      ar: 'نُثبت الصفات كما وصفها الله ورسوله، بلا تكييف ولا تمثيل ولا تعطيل ولا تحريف.',
      en: 'We affirm attributes as Allah and His Messenger described them, without Takyif (asking how), Tamthil (comparing), Ta\'til (denying) or Tahrif (distorting).',
    },
    points: 3,
    difficulty: 'hard',
    category: 'asma',
  },
  {
    id: 'aqeedah-asma-003',
    question: {
      fr: 'Que signifie "Ar-Rahman" ?',
      ar: 'ما معنى "الرحمن"؟',
      en: 'What does "Ar-Rahman" mean?',
    },
    options: [
      { id: 'a', text: { fr: 'Le Tout-Puissant', ar: 'القدير', en: 'The Almighty' } },
      { id: 'b', text: { fr: 'Le Créateur', ar: 'الخالق', en: 'The Creator' } },
      { id: 'c', text: { fr: 'Le Pardonneur', ar: 'الغفور', en: 'The Forgiver' } },
      { id: 'd', text: { fr: 'Le Tout Miséricordieux (miséricorde englobante)', ar: 'ذو الرحمة الواسعة', en: 'The Most Merciful (encompassing mercy)' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Ar-Rahman indique une miséricorde vaste qui englobe toute la création. Ar-Rahim indique une miséricorde spéciale pour les croyants.',
      ar: 'الرحمن يدل على رحمة واسعة تشمل جميع الخلق. والرحيم يدل على رحمة خاصة بالمؤمنين.',
      en: 'Ar-Rahman indicates vast mercy encompassing all creation. Ar-Rahim indicates special mercy for believers.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'asma',
  },
  {
    id: 'aqeedah-asma-004',
    question: {
      fr: 'Quel verset résume parfaitement le Tawhid al-Asma\' wa Sifat ?',
      ar: 'أي آية تلخص توحيد الأسماء والصفات؟',
      en: 'Which verse perfectly summarizes Tawhid al-Asma\' wa Sifat?',
    },
    options: [
      { id: 'a', text: { fr: '"Il n\'y a rien qui Lui ressemble, et Il est l\'Audient, le Clairvoyant" (42:11)', ar: '"ليس كمثله شيء وهو السميع البصير" (42:11)', en: '"There is nothing like unto Him, and He is the Hearing, the Seeing" (42:11)' } },
      { id: 'b', text: { fr: 'Al-Fatiha 1:1', ar: 'الفاتحة 1:1', en: 'Al-Fatiha 1:1' } },
      { id: 'c', text: { fr: 'An-Nas 114:1', ar: 'الناس 114:1', en: 'An-Nas 114:1' } },
      { id: 'd', text: { fr: 'Al-Baqara 2:1', ar: 'البقرة 2:1', en: 'Al-Baqara 2:1' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Ce verset (Ash-Shura 42:11) affirme les attributs d\'Allah (Audient, Clairvoyant) tout en niant toute ressemblance avec la création.',
      ar: 'هذه الآية (الشورى 42:11) تُثبت صفات الله (السميع البصير) وتنفي أي مشابهة للخلق.',
      en: 'This verse (Ash-Shura 42:11) affirms Allah\'s attributes (Hearing, Seeing) while denying any similarity to creation.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'asma',
  },
];

// ============================================
// Questions - Al-Yawm al-Akhir (Jour Dernier)
// ============================================

const akhiraQuestions: ExamQuestion[] = [
  {
    id: 'aqeedah-akhira-001',
    question: {
      fr: 'Que se passe-t-il dans la tombe selon la croyance islamique ?',
      ar: 'ماذا يحدث في القبر حسب العقيدة الإسلامية؟',
      en: 'What happens in the grave according to Islamic belief?',
    },
    options: [
      { id: 'a', text: { fr: 'Rien, le corps dort', ar: 'لا شيء، الجسد نائم', en: 'Nothing, the body sleeps' } },
      { id: 'b', text: { fr: 'Réincarnation immédiate', ar: 'تناسخ فوري', en: 'Immediate reincarnation' } },
      { id: 'c', text: { fr: 'Deux anges (Munkar et Nakir) interrogent sur le Seigneur, la religion et le Prophète', ar: 'ملكان (منكر ونكير) يسألان عن الرب والدين والنبي', en: 'Two angels (Munkar and Nakir) question about Lord, religion and Prophet' } },
      { id: 'd', text: { fr: 'Jugement final immédiat', ar: 'الحساب النهائي فورًا', en: 'Immediate final judgment' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'La vie dans la tombe (Barzakh) inclut les questions des anges : Qui est ton Seigneur ? Quelle est ta religion ? Qui est ton prophète ? Le croyant répond correctement.',
      ar: 'الحياة في القبر (البرزخ) تتضمن سؤال الملائكة: من ربك؟ ما دينك؟ من نبيك؟ والمؤمن يجيب صوابًا.',
      en: 'Life in the grave (Barzakh) includes angels\' questions: Who is your Lord? What is your religion? Who is your prophet? The believer answers correctly.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'akhira',
  },
  {
    id: 'aqeedah-akhira-002',
    question: {
      fr: 'Quels sont les signes majeurs du Jour du Jugement ?',
      ar: 'ما علامات الساعة الكبرى؟',
      en: 'What are the major signs of the Day of Judgment?',
    },
    options: [
      { id: 'a', text: { fr: 'Seulement le lever du soleil de l\'ouest', ar: 'طلوع الشمس من مغربها فقط', en: 'Only the rising of the sun from the west' } },
      { id: 'b', text: { fr: 'Aucun signe spécifique', ar: 'لا علامات محددة', en: 'No specific signs' } },
      { id: 'c', text: { fr: 'Seulement des signes scientifiques', ar: 'علامات علمية فقط', en: 'Only scientific signs' } },
      { id: 'd', text: { fr: 'Dajjal, descente de \'Isa, Gog et Magog, lever du soleil de l\'ouest, fumée, etc.', ar: 'الدجال، نزول عيسى، يأجوج ومأجوج، طلوع الشمس من مغربها، الدخان، إلخ', en: 'Dajjal, descent of \'Isa, Gog and Magog, sun rising from west, smoke, etc.' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Les 10 signes majeurs incluent : le Dajjal, la descente de \'Isa, Ya\'juj et Ma\'juj, le lever du soleil de l\'ouest, la Bête, trois éclipses, la fumée, le feu.',
      ar: 'العلامات الكبرى العشر تشمل: الدجال، نزول عيسى، يأجوج ومأجوج، طلوع الشمس من مغربها، الدابة، 3 خسوفات، الدخان، النار.',
      en: 'The 10 major signs include: Dajjal, descent of \'Isa, Ya\'juj and Ma\'juj, sun rising from west, the Beast, three eclipses, smoke, fire.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'akhira',
  },
  {
    id: 'aqeedah-akhira-003',
    question: {
      fr: 'Qu\'est-ce que le Sirat ?',
      ar: 'ما هو الصراط؟',
      en: 'What is the Sirat?',
    },
    options: [
      { id: 'a', text: { fr: 'Un pont au-dessus de l\'Enfer que tous devront traverser', ar: 'جسر فوق النار يمر عليه الجميع', en: 'A bridge over Hell that all must cross' } },
      { id: 'b', text: { fr: 'Un livre de compte', ar: 'كتاب الحساب', en: 'A book of account' } },
      { id: 'c', text: { fr: 'Une porte du Paradis', ar: 'باب من أبواب الجنة', en: 'A gate of Paradise' } },
      { id: 'd', text: { fr: 'Un ange', ar: 'ملَك', en: 'An angel' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Sirat est un pont plus fin qu\'un cheveu et plus tranchant qu\'une épée. Les croyants le traverseront à des vitesses différentes selon leurs œuvres.',
      ar: 'الصراط جسر أدق من الشعرة وأحد من السيف. والمؤمنون يجتازونه بسرعات مختلفة حسب أعمالهم.',
      en: 'The Sirat is a bridge thinner than a hair and sharper than a sword. Believers will cross it at different speeds based on their deeds.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'akhira',
  },
  {
    id: 'aqeedah-akhira-004',
    question: {
      fr: 'Le Paradis et l\'Enfer sont-ils déjà créés ?',
      ar: 'هل الجنة والنار مخلوقتان الآن؟',
      en: 'Are Paradise and Hell already created?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, ils seront créés le Jour du Jugement', ar: 'لا، سيُخلقان يوم القيامة', en: 'No, they will be created on Judgment Day' } },
      { id: 'b', text: { fr: 'Seulement le Paradis existe', ar: 'الجنة فقط موجودة', en: 'Only Paradise exists' } },
      { id: 'c', text: { fr: 'Oui, ils existent déjà et sont éternels', ar: 'نعم، موجودتان الآن وأبديتان', en: 'Yes, they exist now and are eternal' } },
      { id: 'd', text: { fr: 'On ne sait pas', ar: 'لا نعلم', en: 'We don\'t know' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Selon Ahl as-Sunnah, le Paradis et l\'Enfer sont déjà créés, comme le prouvent de nombreux hadiths (Mi\'raj, etc.). Ils sont éternels.',
      ar: 'عند أهل السنة، الجنة والنار مخلوقتان الآن، كما دلت الأحاديث (المعراج، إلخ). وهما أبديتان.',
      en: 'According to Ahl as-Sunnah, Paradise and Hell are already created, as proven by many hadiths (Mi\'raj, etc.). They are eternal.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'akhira',
  },
];

// ============================================
// Questions - Al-Qadar (Le Destin)
// ============================================

const qadarQuestions: ExamQuestion[] = [
  {
    id: 'aqeedah-qadar-001',
    question: {
      fr: 'Quels sont les 4 niveaux de la croyance au Qadar (destin) ?',
      ar: 'ما مراتب الإيمان بالقدر الأربع؟',
      en: 'What are the 4 levels of belief in Qadar (destiny)?',
    },
    options: [
      { id: 'a', text: { fr: 'Prière, jeûne, aumône, pèlerinage', ar: 'الصلاة، الصيام، الزكاة، الحج', en: 'Prayer, fasting, charity, pilgrimage' } },
      { id: 'b', text: { fr: 'Voir, entendre, parler, agir', ar: 'الرؤية، السمع، الكلام، الفعل', en: 'Seeing, hearing, speaking, acting' } },
      { id: 'c', text: { fr: 'Bon, mauvais, neutre, mixte', ar: 'خير، شر، محايد، مختلط', en: 'Good, bad, neutral, mixed' } },
      { id: 'd', text: { fr: 'Science (\'Ilm), Écriture (Kitaba), Volonté (Mashia), Création (Khalq)', ar: 'العلم، الكتابة، المشيئة، الخلق', en: 'Knowledge (\'Ilm), Writing (Kitaba), Will (Mashia), Creation (Khalq)' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: '1) \'Ilm : Allah sait tout de l\'éternité. 2) Kitaba : Tout est écrit dans la Table Gardée. 3) Mashia : Rien ne se produit sans Sa volonté. 4) Khalq : Allah crée tout.',
      ar: '1) العلم: الله يعلم كل شيء أزلاً. 2) الكتابة: كل شيء مكتوب في اللوح المحفوظ. 3) المشيئة: لا يحدث شيء بدون إرادته. 4) الخلق: الله خالق كل شيء.',
      en: '1) \'Ilm: Allah knows everything eternally. 2) Kitaba: Everything is written in the Preserved Tablet. 3) Mashia: Nothing happens without His will. 4) Khalq: Allah creates everything.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'qadar',
  },
  {
    id: 'aqeedah-qadar-002',
    question: {
      fr: 'Qu\'est-ce que le Lawh al-Mahfuz ?',
      ar: 'ما هو اللوح المحفوظ؟',
      en: 'What is Lawh al-Mahfuz?',
    },
    options: [
      { id: 'a', text: { fr: 'La Table Gardée où tout est écrit depuis l\'éternité', ar: 'اللوح المحفوظ حيث كُتب كل شيء منذ الأزل', en: 'The Preserved Tablet where everything is written from eternity' } },
      { id: 'b', text: { fr: 'Le Coran', ar: 'القرآن', en: 'The Quran' } },
      { id: 'c', text: { fr: 'Un livre d\'histoire', ar: 'كتاب تاريخ', en: 'A history book' } },
      { id: 'd', text: { fr: 'Les Tables de Moise', ar: 'ألواح موسى', en: 'The Tablets of Moses' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Lawh al-Mahfuz (Table Gardée) contient le décret de tout ce qui fut, est et sera, 50 000 ans avant la création des cieux et de la terre.',
      ar: 'اللوح المحفوظ يحتوي على قدر كل ما كان ويكون وسيكون، قبل خلق السماوات والأرض بخمسين ألف سنة.',
      en: 'The Lawh al-Mahfuz (Preserved Tablet) contains the decree of everything that was, is, and will be, 50,000 years before creation of heavens and earth.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'qadar',
  },
  {
    id: 'aqeedah-qadar-003',
    question: {
      fr: 'L\'humain a-t-il un libre arbitre selon l\'Islam ?',
      ar: 'هل للإنسان إرادة حرة في الإسلام؟',
      en: 'Does the human have free will according to Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, tout est prédéterminé sans choix', ar: 'لا، كل شيء محدد بلا اختيار', en: 'No, everything is predetermined without choice' } },
      { id: 'b', text: { fr: 'L\'humain a un libre arbitre total', ar: 'للإنسان إرادة حرة مطلقة', en: 'Human has total free will' } },
      { id: 'c', text: { fr: 'Oui, l\'humain a une volonté et un choix dans les limites de la volonté d\'Allah', ar: 'نعم، للإنسان إرادة واختيار في حدود مشيئة الله', en: 'Yes, human has will and choice within the limits of Allah\'s will' } },
      { id: 'd', text: { fr: 'Cela dépend de la personne', ar: 'يعتمد على الشخص', en: 'It depends on the person' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'L\'Islam affirme les deux : Allah sait et décrète tout, ET l\'humain fait des choix réels pour lesquels il est responsable. Ces deux vérités ne se contredisent pas.',
      ar: 'الإسلام يُثبت كليهما: الله يعلم ويقدر كل شيء، والإنسان يختار اختيارات حقيقية يُحاسب عليها. ولا تعارض بينهما.',
      en: 'Islam affirms both: Allah knows and decrees everything, AND humans make real choices for which they are accountable. These two truths don\'t contradict.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'qadar',
  },
  {
    id: 'aqeedah-qadar-004',
    question: {
      fr: 'Doit-on être satisfait du Qadar (destin) ?',
      ar: 'هل يجب الرضا بالقدر؟',
      en: 'Should one be satisfied with Qadar (destiny)?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, on peut se plaindre à Allah', ar: 'لا، يجوز الشكوى لله', en: 'No, one can complain to Allah' } },
      { id: 'b', text: { fr: 'Les deux sont obligatoires', ar: 'كلاهما واجب', en: 'Both are obligatory' } },
      { id: 'c', text: { fr: 'Aucun des deux n\'est requis', ar: 'لا يُشترط أي منهما', en: 'Neither is required' } },
      { id: 'd', text: { fr: 'La patience (Sabr) est obligatoire ; la satisfaction (Rida) est recommandée', ar: 'الصبر واجب؛ الرضا مستحب', en: 'Patience (Sabr) is obligatory; satisfaction (Rida) is recommended' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Le Sabr (patience) face aux épreuves est obligatoire - se plaindre aux créatures est interdit. Le Rida (satisfaction du cœur) est un degré supérieur recommandé.',
      ar: 'الصبر على البلاء واجب - والتسخط والشكوى للمخلوقين حرام. والرضا (رضا القلب) درجة أعلى مستحبة.',
      en: 'Sabr (patience) in trials is obligatory - complaining to creation is forbidden. Rida (heart\'s satisfaction) is a higher recommended level.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'qadar',
  },
];

// ============================================
// Questions - Nubuwwah (Prophétie)
// ============================================

const nubuwwahQuestions: ExamQuestion[] = [
  {
    id: 'aqeedah-nubuwwah-001',
    question: {
      fr: 'Quelle est la différence entre un Nabi (prophète) et un Rasul (messager) ?',
      ar: 'ما الفرق بين النبي والرسول؟',
      en: 'What is the difference between a Nabi (prophet) and a Rasul (messenger)?',
    },
    options: [
      { id: 'a', text: { fr: 'Le Rasul reçoit une nouvelle législation ; le Nabi suit la législation précédente', ar: 'الرسول يأتي بشريعة جديدة؛ النبي يتبع الشريعة السابقة', en: 'Rasul receives new legislation; Nabi follows previous legislation' } },
      { id: 'b', text: { fr: 'Aucune différence', ar: 'لا فرق', en: 'No difference' } },
      { id: 'c', text: { fr: 'Le Nabi est plus important', ar: 'النبي أهم', en: 'Nabi is more important' } },
      { id: 'd', text: { fr: 'Seuls les Arabes ont des Rasul', ar: 'العرب فقط لديهم رسل', en: 'Only Arabs have Rasul' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Selon l\'avis le plus connu : le Rasul reçoit une révélation avec une nouvelle législation pour un peuple ; le Nabi reçoit une révélation mais suit une législation antérieure.',
      ar: 'على القول المشهور: الرسول يُوحى إليه بشريعة جديدة لقوم؛ والنبي يُوحى إليه لكنه يتبع شريعة سابقة.',
      en: 'According to the famous view: Rasul receives revelation with new legislation for a people; Nabi receives revelation but follows previous legislation.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'nubuwwah',
  },
  {
    id: 'aqeedah-nubuwwah-002',
    question: {
      fr: 'Qui est le dernier des prophètes ?',
      ar: 'من خاتم النبيين؟',
      en: 'Who is the last of the prophets?',
    },
    options: [
      { id: 'a', text: { fr: '\'Isa (Jésus)', ar: 'عيسى (يسوع)', en: '\'Isa (Jesus)' } },
      { id: 'b', text: { fr: 'Ibrahim', ar: 'إبراهيم', en: 'Ibrahim' } },
      { id: 'c', text: { fr: 'Muhammad ﷺ', ar: 'محمد ﷺ', en: 'Muhammad ﷺ' } },
      { id: 'd', text: { fr: 'Il n\'y a pas de dernier prophète', ar: 'لا يوجد خاتم للنبيين', en: 'There is no last prophet' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Muhammad ﷺ est le Sceau des Prophètes (Khatam an-Nabiyyin) comme mentionné dans le Coran (33:40). Il n\'y aura pas de prophète après lui.',
      ar: 'محمد ﷺ هو خاتم النبيين كما ذُكر في القرآن (33:40). ولا نبي بعده.',
      en: 'Muhammad ﷺ is the Seal of Prophets (Khatam an-Nabiyyin) as mentioned in Quran (33:40). There will be no prophet after him.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'nubuwwah',
  },
  {
    id: 'aqeedah-nubuwwah-003',
    question: {
      fr: 'Qui sont les "Ulu al-\'Azm" parmi les messagers ?',
      ar: 'من هم أولو العزم من الرسل؟',
      en: 'Who are the "Ulu al-\'Azm" among the messengers?',
    },
    options: [
      { id: 'a', text: { fr: 'Tous les 25 prophètes mentionnés dans le Coran', ar: 'كل الأنبياء الـ25 المذكورين في القرآن', en: 'All 25 prophets mentioned in Quran' } },
      { id: 'b', text: { fr: 'Adam, Idris, Nuh', ar: 'آدم، إدريس، نوح', en: 'Adam, Idris, Nuh' } },
      { id: 'c', text: { fr: 'Seulement Muhammad ﷺ', ar: 'محمد ﷺ فقط', en: 'Only Muhammad ﷺ' } },
      { id: 'd', text: { fr: 'Nuh, Ibrahim, Musa, \'Isa, Muhammad ﷺ', ar: 'نوح، إبراهيم، موسى، عيسى، محمد ﷺ', en: 'Nuh, Ibrahim, Musa, \'Isa, Muhammad ﷺ' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Les 5 messagers doués de fermeté (Ulu al-\'Azm) sont mentionnés dans le Coran (46:35) : Nuh, Ibrahim, Musa, \'Isa et Muhammad ﷺ.',
      ar: 'أولو العزم الخمسة مذكورون في القرآن (46:35): نوح، إبراهيم، موسى، عيسى، محمد ﷺ.',
      en: 'The 5 messengers of firm resolve (Ulu al-\'Azm) are mentioned in Quran (46:35): Nuh, Ibrahim, Musa, \'Isa and Muhammad ﷺ.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'nubuwwah',
  },
  {
    id: 'aqeedah-nubuwwah-004',
    question: {
      fr: 'Les prophètes peuvent-ils commettre des péchés ?',
      ar: 'هل يمكن للأنبياء أن يخطئوا؟',
      en: 'Can prophets commit sins?',
    },
    options: [
      { id: 'a', text: { fr: 'Ils sont protégés des grands péchés et de persister dans les petits ; des erreurs mineures sont possibles', ar: 'معصومون من الكبائر والإصرار على الصغائر؛ الزلات الصغيرة ممكنة', en: 'Protected from major sins and persisting in minor; small slips are possible' } },
      { id: 'b', text: { fr: 'Oui, ils sont comme tous les humains', ar: 'نعم، مثل بقية البشر', en: 'Yes, they are like all humans' } },
      { id: 'c', text: { fr: 'Non, jamais aucune erreur', ar: 'لا، أبدًا', en: 'No, never any error' } },
      { id: 'd', text: { fr: 'Seulement Adam a péché', ar: 'آدم فقط أخطأ', en: 'Only Adam sinned' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les prophètes sont protégés (Ma\'sum) des grands péchés et de la persistance dans les erreurs. Des erreurs mineures (Zallat) sont possibles mais ils se repentent immédiatement.',
      ar: 'الأنبياء معصومون من الكبائر والإصرار على الخطأ. والزلات الصغيرة ممكنة لكنهم يتوبون فورًا.',
      en: 'Prophets are protected (Ma\'sum) from major sins and persisting in errors. Minor slips (Zallat) are possible but they repent immediately.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'nubuwwah',
  },
];

// ============================================
// Questions Supplémentaires - Anges (Mala'ika)
// ============================================

const malaikaQuestions: ExamQuestion[] = [
  {
    id: 'aqeedah-malaika-001',
    question: {
      fr: 'De quoi les anges ont-ils été créés ?',
      ar: 'من ماذا خُلقت الملائكة؟',
      en: 'From what were the angels created?',
    },
    options: [
      { id: 'a', text: { fr: 'De lumière (Nur)', ar: 'من نور', en: 'From light (Nur)' } },
      { id: 'b', text: { fr: 'De feu', ar: 'من نار', en: 'From fire' } },
      { id: 'c', text: { fr: 'D\'argile', ar: 'من طين', en: 'From clay' } },
      { id: 'd', text: { fr: 'D\'eau', ar: 'من ماء', en: 'From water' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Les anges ont été créés de lumière, les djinns de feu sans fumée, et Adam de ce qui vous a été décrit" (Muslim).',
      ar: 'قال النبي ﷺ: "خُلقت الملائكة من نور، وخُلق الجان من مارج من نار، وخُلق آدم مما وُصف لكم" (مسلم).',
      en: 'The Prophet ﷺ said: "Angels were created from light, jinn from smokeless fire, and Adam from what was described to you" (Muslim).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'malaika',
  },
  {
    id: 'aqeedah-malaika-002',
    question: {
      fr: 'Quelle est la fonction principale de l\'ange Jibril عليه السلام ?',
      ar: 'ما الوظيفة الرئيسية لجبريل عليه السلام؟',
      en: 'What is the main function of Angel Jibril عليه السلام?',
    },
    options: [
      { id: 'a', text: { fr: 'Souffler dans la Trompe', ar: 'النفخ في الصور', en: 'Blowing the Trumpet' } },
      { id: 'b', text: { fr: 'Transmettre la Révélation aux Prophètes', ar: 'إبلاغ الوحي للأنبياء', en: 'Conveying Revelation to Prophets' } },
      { id: 'c', text: { fr: 'Faire descendre la pluie', ar: 'إنزال المطر', en: 'Bringing down rain' } },
      { id: 'd', text: { fr: 'Prendre les âmes', ar: 'قبض الأرواح', en: 'Taking souls' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Jibril (Gabriel) est l\'ange chargé de transmettre la Révélation d\'Allah aux Prophètes. Il est appelé "Ruh al-Qudus" (l\'Esprit Saint) et "ar-Ruh al-Amin" (l\'Esprit Fidèle).',
      ar: 'جبريل هو الملك المُكلّف بإبلاغ الوحي من الله للأنبياء. ويُسمى "روح القدس" و"الروح الأمين".',
      en: 'Jibril (Gabriel) is the angel tasked with conveying Allah\'s Revelation to Prophets. He is called "Ruh al-Qudus" (Holy Spirit) and "ar-Ruh al-Amin" (Trustworthy Spirit).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'malaika',
  },
  {
    id: 'aqeedah-malaika-003',
    question: {
      fr: 'Qui sont Munkar et Nakir ?',
      ar: 'من هما منكر ونكير؟',
      en: 'Who are Munkar and Nakir?',
    },
    options: [
      { id: 'a', text: { fr: 'Les anges gardiens (Hafaza)', ar: 'الملائكة الحفظة', en: 'Guardian angels' } },
      { id: 'b', text: { fr: 'Les anges qui portent le Trône', ar: 'الملائكة الذين يحملون العرش', en: 'Angels who carry the Throne' } },
      { id: 'c', text: { fr: 'Les deux anges qui interrogent dans la tombe', ar: 'الملكان اللذان يسألان في القبر', en: 'The two angels who question in the grave' } },
      { id: 'd', text: { fr: 'Les gardiens du Paradis', ar: 'خزنة الجنة', en: 'Guardians of Paradise' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Munkar et Nakir sont les deux anges qui interrogent le défunt dans sa tombe sur son Seigneur, sa religion et son Prophète. C\'est le début de l\'épreuve du Barzakh.',
      ar: 'منكر ونكير هما الملكان اللذان يسألان الميت في قبره عن ربه ودينه ونبيه. وهذا بداية فتنة البرزخ.',
      en: 'Munkar and Nakir are the two angels who question the deceased in the grave about their Lord, religion, and Prophet. This is the beginning of the trial of Barzakh.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'malaika',
  },
  {
    id: 'aqeedah-malaika-004',
    question: {
      fr: 'Quel ange est chargé de souffler dans la Trompe (as-Sur) le Jour du Jugement ?',
      ar: 'أي ملك مُكلّف بالنفخ في الصور يوم القيامة؟',
      en: 'Which angel is tasked with blowing the Trumpet on the Day of Judgment?',
    },
    options: [
      { id: 'a', text: { fr: 'Jibril', ar: 'جبريل', en: 'Jibril' } },
      { id: 'b', text: { fr: 'Mika\'il', ar: 'ميكائيل', en: 'Mika\'il' } },
      { id: 'c', text: { fr: 'Malik', ar: 'مالك', en: 'Malik' } },
      { id: 'd', text: { fr: 'Israfil', ar: 'إسرافيل', en: 'Israfil' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Israfil est l\'ange chargé de souffler dans la Trompe. Le premier souffle causera la mort de toutes les créatures, le second les ressuscitera pour le Jugement.',
      ar: 'إسرافيل هو الملك المُكلّف بالنفخ في الصور. النفخة الأولى تميت جميع الخلائق، والثانية تُحييهم للحساب.',
      en: 'Israfil is the angel tasked with blowing the Trumpet. The first blow will cause death of all creatures, the second will resurrect them for Judgment.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'malaika',
  },
];

// ============================================
// Questions Supplémentaires - Livres Révélés (Kutub)
// ============================================

const kutubQuestions: ExamQuestion[] = [
  {
    id: 'aqeedah-kutub-001',
    question: {
      fr: 'À quel Prophète la Torah (Tawrat) a-t-elle été révélée ?',
      ar: 'على أي نبي أُنزلت التوراة؟',
      en: 'To which Prophet was the Torah (Tawrat) revealed?',
    },
    options: [
      { id: 'a', text: { fr: 'Ibrahim عليه السلام', ar: 'إبراهيم عليه السلام', en: 'Ibrahim عليه السلام' } },
      { id: 'b', text: { fr: 'Dawud عليه السلام', ar: 'داود عليه السلام', en: 'Dawud عليه السلام' } },
      { id: 'c', text: { fr: 'Musa عليه السلام', ar: 'موسى عليه السلام', en: 'Musa عليه السلام' } },
      { id: 'd', text: { fr: '\'Isa عليه السلام', ar: 'عيسى عليه السلام', en: '\'Isa عليه السلام' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'La Torah (Tawrat) fut révélée à Musa (Moïse) عليه السلام pour guider les Enfants d\'Israël. Allah dit : "Nous avons fait descendre la Torah contenant guidance et lumière" (5:44).',
      ar: 'أُنزلت التوراة على موسى عليه السلام هداية لبني إسرائيل. قال الله: "إنا أنزلنا التوراة فيها هدى ونور" (المائدة: 44).',
      en: 'The Torah was revealed to Musa (Moses) عليه السلام to guide the Children of Israel. Allah says: "We sent down the Torah containing guidance and light" (5:44).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'kutub',
  },
  {
    id: 'aqeedah-kutub-002',
    question: {
      fr: 'Quel livre a été révélé à Dawud عليه السلام ?',
      ar: 'أي كتاب أُنزل على داود عليه السلام؟',
      en: 'Which book was revealed to Dawud عليه السلام?',
    },
    options: [
      { id: 'a', text: { fr: 'Le Zabur (Psaumes)', ar: 'الزبور', en: 'The Zabur (Psalms)' } },
      { id: 'b', text: { fr: 'L\'Injil', ar: 'الإنجيل', en: 'The Injil' } },
      { id: 'c', text: { fr: 'Les Suhuf', ar: 'الصحف', en: 'The Suhuf' } },
      { id: 'd', text: { fr: 'La Torah', ar: 'التوراة', en: 'The Torah' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Zabur (Psaumes) fut révélé à Dawud عليه السلام. Allah dit : "Et Nous avons donné le Zabur à Dawud" (4:163, 17:55).',
      ar: 'أُنزل الزبور على داود عليه السلام. قال الله: "وآتينا داود زبورًا" (النساء: 163، الإسراء: 55).',
      en: 'The Zabur (Psalms) was revealed to Dawud عليه السلام. Allah says: "And We gave Dawud the Zabur" (4:163, 17:55).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'kutub',
  },
  {
    id: 'aqeedah-kutub-003',
    question: {
      fr: 'Quelle est la position d\'Ahl as-Sunnah concernant les livres révélés antérieurs (Torah, Injil) ?',
      ar: 'ما موقف أهل السنة من الكتب السابقة (التوراة، الإنجيل)؟',
      en: 'What is Ahl as-Sunnah\'s position regarding previous revealed books (Torah, Injil)?',
    },
    options: [
      { id: 'a', text: { fr: 'Ils sont entièrement authentiques aujourd\'hui', ar: 'هي أصلية بالكامل اليوم', en: 'They are entirely authentic today' } },
      { id: 'b', text: { fr: 'Croire qu\'ils étaient des révélations d\'Allah, mais qu\'ils ont été altérés (Tahrif)', ar: 'الإيمان بأنها كانت وحيًا من الله لكنها حُرّفت', en: 'Believe they were Allah\'s revelations but have been altered (Tahrif)' } },
      { id: 'c', text: { fr: 'Les rejeter complètement', ar: 'رفضها كلياً', en: 'Reject them completely' } },
      { id: 'd', text: { fr: 'Ils sont équivalents au Coran', ar: 'هي مساوية للقرآن', en: 'They are equivalent to the Quran' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Nous croyons que la Torah et l\'Injil originaux étaient des révélations d\'Allah, mais qu\'ils ont subi des altérations (Tahrif) au fil du temps. Le Coran est le seul livre préservé intact.',
      ar: 'نؤمن بأن التوراة والإنجيل الأصليين كانا وحيًا من الله، لكنهما تعرضا للتحريف. والقرآن هو الكتاب الوحيد المحفوظ.',
      en: 'We believe the original Torah and Injil were Allah\'s revelations, but they have undergone alterations (Tahrif) over time. The Quran is the only book preserved intact.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'kutub',
  },
  {
    id: 'aqeedah-kutub-004',
    question: {
      fr: 'Quelle caractéristique unique distingue le Coran des autres livres révélés ?',
      ar: 'ما الخاصية الفريدة التي تميز القرآن عن الكتب السابقة؟',
      en: 'What unique characteristic distinguishes the Quran from other revealed books?',
    },
    options: [
      { id: 'a', text: { fr: 'Il est le plus long', ar: 'إنه الأطول', en: 'It is the longest' } },
      { id: 'b', text: { fr: 'Allah s\'est engagé à le préserver de toute altération', ar: 'تكفّل الله بحفظه من التحريف', en: 'Allah guaranteed to preserve it from any alteration' } },
      { id: 'c', text: { fr: 'Il n\'a pas été écrit', ar: 'لم يُكتب', en: 'It was not written' } },
      { id: 'd', text: { fr: 'Il a été révélé en une seule fois', ar: 'نزل دفعة واحدة', en: 'It was revealed all at once' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Allah dit : "C\'est Nous qui avons fait descendre le Rappel (Dhikr), et c\'est Nous qui en sommes les Gardiens" (15:9). Cette promesse divine n\'a été faite pour aucun autre livre.',
      ar: 'قال الله: "إنا نحن نزّلنا الذكر وإنا له لحافظون" (الحجر: 9). هذا الوعد الإلهي لم يُعطَ لأي كتاب آخر.',
      en: 'Allah says: "It is We who sent down the Reminder (Dhikr), and We will be its Guardian" (15:9). This divine promise was not made for any other book.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'kutub',
  },
];

// ============================================
// Questions Supplémentaires - Sahaba et Ahl al-Bayt
// ============================================

const sahabaQuestions: ExamQuestion[] = [
  {
    id: 'aqeedah-sahaba-001',
    question: {
      fr: 'Quelle est la position d\'Ahl as-Sunnah envers les Compagnons ?',
      ar: 'ما موقف أهل السنة من الصحابة؟',
      en: 'What is Ahl as-Sunnah\'s position towards the Companions?',
    },
    options: [
      { id: 'a', text: { fr: 'Ils peuvent être critiqués librement', ar: 'يجوز انتقادهم بحرية', en: 'They can be freely criticized' } },
      { id: 'b', text: { fr: 'Certains sont bons, d\'autres mauvais', ar: 'بعضهم صالح وبعضهم سيء', en: 'Some are good, some are bad' } },
      { id: 'c', text: { fr: 'Tous sont honorables ; on se tait sur leurs conflits et on demande pardon pour eux', ar: 'كلهم عدول؛ نسكت عن خلافاتهم ونستغفر لهم', en: 'All are honorable; we remain silent about their conflicts and seek forgiveness for them' } },
      { id: 'd', text: { fr: 'Ils n\'ont pas d\'importance particulière', ar: 'ليس لهم أهمية خاصة', en: 'They have no special importance' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Ahl as-Sunnah aiment tous les Compagnons, reconnaissent leur mérite, ne parlent pas en mal d\'eux, et demandent pardon pour eux comme ordonné dans le Coran (59:10).',
      ar: 'أهل السنة يحبون جميع الصحابة، ويُقرون بفضلهم، ولا يتكلمون فيهم بسوء، ويستغفرون لهم كما أمر القرآن (59:10).',
      en: 'Ahl as-Sunnah love all Companions, acknowledge their merit, don\'t speak ill of them, and seek forgiveness for them as ordered in Quran (59:10).',
    },
    points: 2,
    difficulty: 'medium',
    category: 'sahaba',
  },
  {
    id: 'aqeedah-sahaba-002',
    question: {
      fr: 'Qui sont les 4 califes bien guidés (Khulafa\' ar-Rashidun) ?',
      ar: 'من هم الخلفاء الراشدون الأربعة؟',
      en: 'Who are the 4 rightly guided caliphs (Khulafa\' ar-Rashidun)?',
    },
    options: [
      { id: 'a', text: { fr: 'Ali, Fatima, Hasan, Husayn', ar: 'علي، فاطمة، الحسن، الحسين', en: 'Ali, Fatima, Hasan, Husayn' } },
      { id: 'b', text: { fr: 'Hamza, Abbas, Abu Talib, Abu Lahab', ar: 'حمزة، العباس، أبو طالب، أبو لهب', en: 'Hamza, Abbas, Abu Talib, Abu Lahab' } },
      { id: 'c', text: { fr: 'Mu\'awiya, Yazid, Marwan, Abd al-Malik', ar: 'معاوية، يزيد، مروان، عبد الملك', en: 'Mu\'awiya, Yazid, Marwan, Abd al-Malik' } },
      { id: 'd', text: { fr: 'Abu Bakr, \'Umar, \'Uthman, \'Ali', ar: 'أبو بكر، عمر، عثمان، علي', en: 'Abu Bakr, \'Umar, \'Uthman, \'Ali' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Les 4 Khulafa\' ar-Rashidun par ordre : Abu Bakr as-Siddiq, \'Umar ibn al-Khattab, \'Uthman ibn \'Affan, \'Ali ibn Abi Talib (رضي الله عنهم).',
      ar: 'الخلفاء الراشدون الأربعة بالترتيب: أبو بكر الصديق، عمر بن الخطاب، عثمان بن عفان، علي بن أبي طالب (رضي الله عنهم).',
      en: 'The 4 Khulafa\' ar-Rashidun in order: Abu Bakr as-Siddiq, \'Umar ibn al-Khattab, \'Uthman ibn \'Affan, \'Ali ibn Abi Talib (may Allah be pleased with them).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'sahaba',
  },
];

// ============================================
// Questions - Défis Modernes (Athéisme, Laïcité, Science)
// ============================================

const defisModernesQuestions: ExamQuestion[] = [
  {
    id: 'aqeedah-moderne-001',
    question: {
      fr: 'Comment l\'Islam répond-il à l\'argument athée "Si Dieu existe, pourquoi le mal existe-t-il ?"',
      ar: 'كيف يرد الإسلام على حجة الإلحاد "إن كان الله موجوداً، لماذا يوجد الشر؟"',
      en: 'How does Islam respond to atheist argument "If God exists, why does evil exist?"',
    },
    options: [
      { id: 'a', text: { fr: 'Dieu n\'a pas créé le mal', ar: 'الله لم يخلق الشر', en: 'God did not create evil' } },
      { id: 'b', text: { fr: 'Libre arbitre + épreuve terrestre + justice Akhira - vie test pas paradis, mal nécessaire pour choix moral', ar: 'حرية الإرادة + ابتلاء دنيوي + عدل الآخرة - الحياة اختبار لا جنة، الشر ضروري للاختيار الأخلاقي', en: 'Free will + earthly test + Akhira justice - life is test not paradise, evil necessary for moral choice' } },
      { id: 'c', text: { fr: 'Le mal n\'existe pas réellement', ar: 'الشر غير موجود حقاً', en: 'Evil does not really exist' } },
      { id: 'd', text: { fr: 'Dieu ne peut contrôler le mal', ar: 'الله لا يستطيع السيطرة على الشر', en: 'God cannot control evil' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Réponse islamique : 1) Dunya = Dar al-Ibtila (demeure épreuve) pas Jannah - Coran 67:2 "Qui créa la mort et la vie pour vous tester qui de vous meilleur en oeuvre", 2) Libre arbitre nécessaire pour choix moral - sans possibilité mal, pas de mérite bien, 3) Mal apparent peut être bien caché - Coran 2:216 "Il se peut que vous détestiez chose qui est bien pour vous", 4) Justice absolue au Jour Jugement - opprimés vengés, oppresseurs punis. Souffrance terrestre temporaire vs éternité.',
      ar: 'الرد الإسلامي: 1) الدنيا = دار الابتلاء لا الجنة - القرآن 67:2 "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا"، 2) حرية الإرادة ضرورية للاختيار الأخلاقي - بدون إمكانية الشر، لا فضل للخير، 3) الشر الظاهر قد يكون خيراً خفياً - القرآن 2:216 "وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ"، 4) العدل المطلق يوم الحساب - المظلومون يُنتصف لهم، الظالمون يُعاقبون. المعاناة الدنيوية مؤقتة مقابل الأبدية.',
      en: 'Islamic response: 1) Dunya = Dar al-Ibtila (abode of test) not Jannah - Quran 67:2 "Who created death and life to test you which of you best in deed", 2) Free will necessary for moral choice - without possibility of evil, no merit in good, 3) Apparent evil may be hidden good - Quran 2:216 "Perhaps you hate thing which is good for you", 4) Absolute justice on Judgment Day - oppressed avenged, oppressors punished. Earthly suffering temporary vs eternity.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'defis-modernes',
  },
  {
    id: 'aqeedah-moderne-002',
    question: {
      fr: 'La science a-t-elle prouvé que Dieu n\'existe pas ?',
      ar: 'هل أثبت العلم أن الله غير موجود؟',
      en: 'Has science proven that God does not exist?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui - la science explique tout sans Dieu', ar: 'نعم - العلم يفسر كل شيء بدون الله', en: 'Yes - science explains everything without God' } },
      { id: 'b', text: { fr: 'Science ne peut prouver inexistence métaphysique - elle décrit "comment" pas "pourquoi ultime" ni "qui"', ar: 'العلم لا يستطيع إثبات عدم الوجود الميتافيزيقي - يصف "كيف" لا "لماذا النهائي" ولا "من"', en: 'Science cannot prove metaphysical nonexistence - it describes "how" not "ultimate why" nor "who"' } },
      { id: 'c', text: { fr: 'La science et la religion sont incompatibles', ar: 'العلم والدين غير متوافقين', en: 'Science and religion are incompatible' } },
      { id: 'd', text: { fr: 'Seuls les ignorants croient en Dieu', ar: 'فقط الجهلاء يؤمنون بالله', en: 'Only ignorant believe in God' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Science = méthode étudier phénomènes naturels observables. Limites : 1) Ne peut prouver existence/inexistence êtres métaphysiques (Dieu, anges, âme) hors champ observation, 2) Explique "comment univers fonctionne" (mécanismes) pas "pourquoi existe" (cause première) ni "qui l\'a créé", 3) Beaucoup savants croyants (Newton, Pasteur, Abdus Salam prix Nobel). Islam encourage science - Coran 20:114 "Dis : Mon Seigneur, accroît ma science". Science révèle magnificence création = preuve Créateur.',
      ar: 'العلم = منهج لدراسة الظواهر الطبيعية القابلة للملاحظة. الحدود: 1) لا يستطيع إثبات وجود/عدم وجود كائنات ميتافيزيقية (الله، الملائكة، الروح) خارج نطاق الملاحظة، 2) يشرح "كيف يعمل الكون" (الآليات) لا "لماذا موجود" (السبب الأول) ولا "من خلقه"، 3) كثير من العلماء مؤمنون (نيوتن، باستور، عبد السلام جائزة نوبل). الإسلام يشجع العلم - القرآن 20:114 "رَّبِّ زِدْنِي عِلْمًا". العلم يكشف عظمة الخلق = دليل الخالق.',
      en: 'Science = method studying observable natural phenomena. Limits: 1) Cannot prove existence/nonexistence of metaphysical beings (God, angels, soul) outside observation field, 2) Explains "how universe works" (mechanisms) not "why it exists" (first cause) nor "who created it", 3) Many believing scientists (Newton, Pasteur, Abdus Salam Nobel Prize). Islam encourages science - Quran 20:114 "Say: My Lord, increase me in knowledge". Science reveals creation magnificence = proof of Creator.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'defis-modernes',
  },
  {
    id: 'aqeedah-moderne-003',
    question: {
      fr: 'Le darwinisme (théorie évolution) est-il compatible avec l\'Islam ?',
      ar: 'هل الداروينية (نظرية التطور) متوافقة مع الإسلام؟',
      en: 'Is Darwinism (evolution theory) compatible with Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Totalement incompatible - tout Kufr', ar: 'غير متوافق تماماً - كله كفر', en: 'Totally incompatible - all Kufr' } },
      { id: 'b', text: { fr: 'Nuance : évolution espèces animales discutable ; Adam créé directement d\'argile (texte explicite Coran) - pas ancêtre simiesque', ar: 'دقيق: تطور الأنواع الحيوانية قابل للنقاش؛ آدم خُلق مباشرة من طين (نص قرآني صريح) - ليس من سلف قردي', en: 'Nuanced: animal species evolution debatable; Adam created directly from clay (explicit Quran text) - no simian ancestor' } },
      { id: 'c', text: { fr: 'Totalement compatible sans exception', ar: 'متوافق تماماً بلا استثناء', en: 'Totally compatible without exception' } },
      { id: 'd', text: { fr: 'L\'Islam rejette toute science', ar: 'الإسلام يرفض كل علم', en: 'Islam rejects all science' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Position nuancée : 1) Évolution espèces animales : débat savants - certains acceptent micro-évolution (adaptation), d\'autres macro-évolution (origine espèces), 2) Adam : consensus : créé DIRECTEMENT d\'argile par Allah sans ancêtre - Coran 3:59 "Certes, Isa auprès d\'Allah comme Adam qu\'Il créa de terre" + 15:26 "Nous créâmes homme d\'argile sonnante", 3) Savants musulmans (Ghazali) parlaient "gradation êtres" avant Darwin. Compatible SI : évolution = mécanisme créé par Allah SAUF origine humaine directe.',
      ar: 'الموقف الدقيق: 1) تطور الأنواع الحيوانية: خلاف العلماء - بعضهم يقبل التطور الصغير (التكيف)، آخرون التطور الكبير (أصل الأنواع)، 2) آدم: إجماع: خُلق مباشرة من طين بيد الله بلا سلف - القرآن 3:59 "إِنَّ مَثَلَ عِيسَىٰ عِندَ اللَّهِ كَمَثَلِ آدَمَ خَلَقَهُ مِن تُرَابٍ" + 15:26 "وَلَقَدْ خَلَقْنَا الْإِنسَانَ مِن صَلْصَالٍ"، 3) علماء مسلمون (الغزالي) تحدثوا عن "تدرج الكائنات" قبل داروين. متوافق إن: التطور = آلية خلقها الله ماعدا الأصل البشري المباشر.',
      en: 'Nuanced position: 1) Animal species evolution: scholars debate - some accept micro-evolution (adaptation), others macro-evolution (species origin), 2) Adam: consensus: created DIRECTLY from clay by Allah without ancestor - Quran 3:59 "Indeed, example of Isa with Allah like Adam He created from dust" + 15:26 "We created man from sounding clay", 3) Muslim scholars (Ghazali) spoke of "gradation of beings" before Darwin. Compatible IF: evolution = mechanism created by Allah EXCEPT direct human origin.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'defis-modernes',
  },
  {
    id: 'aqeedah-moderne-004',
    question: {
      fr: 'La laïcité (séparation religion/État) est-elle compatible avec l\'Islam ?',
      ar: 'هل العلمانية (فصل الدين عن الدولة) متوافقة مع الإسلام؟',
      en: 'Is secularism (separation religion/state) compatible with Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Totalement compatible - Islam = vie privée uniquement', ar: 'متوافقة تماماً - الإسلام = حياة خاصة فقط', en: 'Totally compatible - Islam = private life only' } },
      { id: 'b', text: { fr: 'Non - Islam = système complet (vie personnelle + sociale + politique) - séparation impossible selon majorité', ar: 'لا - الإسلام = نظام كامل (حياة شخصية + اجتماعية + سياسية) - الفصل مستحيل عند الجمهور', en: 'No - Islam = complete system (personal + social + political life) - separation impossible according to majority' } },
      { id: 'c', text: { fr: 'Oui - religion n\'a rien à voir avec politique', ar: 'نعم - الدين لا علاقة له بالسياسة', en: 'Yes - religion has nothing to do with politics' } },
      { id: 'd', text: { fr: 'Islam accepte n\'importe quel système politique', ar: 'الإسلام يقبل أي نظام سياسي', en: 'Islam accepts any political system' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Majorité savants : Islam ≠ seulement spiritualité mais Din wa Dawla (religion et État). Arguments : 1) Prophète ﷺ était chef spirituel ET politique (Médine), 2) Shariah couvre lois criminelles, civiles, économiques pas seulement prière, 3) Coran donne directives gouvernance - 4:58 "Allah vous ordonne rendre dépôts à ayants-droit et juger avec justice", 42:38 "leurs affaires par consultation (Shura)". Minorité moderniste (Ali Abdel Raziq) : séparation possible. Débat : théocratie ≠ obligatoire mais lois doivent respecter Shariah.',
      ar: 'جمهور العلماء: الإسلام ≠ روحانية فقط بل دين ودولة. الحجج: 1) النبي ﷺ كان قائداً روحياً وسياسياً (المدينة)، 2) الشريعة تشمل قوانين جنائية، مدنية، اقتصادية ليس فقط الصلاة، 3) القرآن يعطي توجيهات الحكم - 4:58 "إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ"، 42:38 "وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ". أقلية حداثية (علي عبد الرازق): الفصل ممكن. نقاش: الثيوقراطية ≠ واجبة لكن القوانين يجب أن تحترم الشريعة.',
      en: 'Majority scholars: Islam ≠ only spirituality but Din wa Dawla (religion and state). Arguments: 1) Prophet ﷺ was spiritual AND political leader (Medina), 2) Shariah covers criminal, civil, economic laws not only prayer, 3) Quran gives governance directives - 4:58 "Allah commands you render trusts to rightful owners and judge with justice", 42:38 "their affairs by consultation (Shura)". Modernist minority (Ali Abdel Raziq): separation possible. Debate: theocracy ≠ mandatory but laws must respect Shariah.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'defis-modernes',
  },
];

// ============================================
// PHASE 3B - Questions Défis Modernes (Suite)
// ============================================

const defisModernesSuiteQuestions: ExamQuestion[] = [
  {
    id: 'aqeedah-moderne-005',
    question: {
      fr: 'Quelles sont les preuves rationnelles de l\'existence d\'Allah selon la tradition islamique ?',
      ar: 'ما هي البراهين العقلية على وجود الله في التقليد الإسلامي؟',
      en: 'What are the rational proofs for Allah\'s existence according to Islamic tradition?',
    },
    options: [
      { id: 'a', text: { fr: 'Aucune - foi aveugle uniquement', ar: 'لا شيء - الإيمان الأعمى فقط', en: 'None - blind faith only' } },
      { id: 'b', text: { fr: 'Fitrah innée + Argument causalité/Cause Première + Ordre cosmique/Design intelligent + Nécessité morale absolue', ar: 'الفطرة الفطرية + حجة السببية/السبب الأول + النظام الكوني/التصميم الذكي + الضرورة الأخلاقية المطلقة', en: 'Innate Fitrah + Causality Argument/First Cause + Cosmic Order/Intelligent Design + Absolute Moral Necessity' } },
      { id: 'c', text: { fr: 'Seulement l\'observation scientifique', ar: 'فقط المراقبة العلمية', en: 'Only scientific observation' } },
      { id: 'd', text: { fr: 'Aucune preuve nécessaire', ar: 'لا حاجة لأي دليل', en: 'No proof needed' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: '4 preuves classiques : 1) FITRAH : disposition innée reconnaître Créateur - Coran 30:30 "Fitrah Allah sur laquelle Il créa hommes" + Hadith "tout nouveau-né naît sur Fitrah" (Bukhari), 2) CAUSALITÉ : tout existant a cause → univers a cause → Cause Première incréée = Allah ; savants Kalam (Ghazali, Ibn Sina) argument cosmologique, 3) ORDRE/DESIGN : complexité précision univers (constantes physiques, ADN, écosystèmes) = preuve Concepteur intelligent - Coran 3:190 "Dans création cieux terre...signes doués intelligence", 4) MORALITÉ : valeurs morales objectives (bien/mal absolus) nécessitent Législateur moral transcendant. Raison + Révélation complémentaires.',
      ar: '4 براهين كلاسيكية: 1) الفطرة: الاستعداد الفطري لمعرفة الخالق - القرآن 30:30 "فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا" + حديث "كل مولود يولد على الفطرة" (البخاري)، 2) السببية: كل موجود له سبب → الكون له سبب → السبب الأول غير المخلوق = الله؛ علماء الكلام (الغزالي، ابن سينا) الحجة الكونية، 3) النظام/التصميم: تعقيد ودقة الكون (الثوابت الفيزيائية، الحمض النووي، النظم البيئية) = دليل المصمم الذكي - القرآن 3:190 "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ...لَآيَاتٍ لِّأُولِي الْأَلْبَابِ"، 4) الأخلاق: القيم الأخلاقية الموضوعية (الخير/الشر المطلق) تتطلب مشرّعاً أخلاقياً متعالياً. العقل + الوحي متكاملان.',
      en: '4 classical proofs: 1) FITRAH: innate disposition recognizing Creator - Quran 30:30 "Allah\'s Fitrah upon which He created mankind" + Hadith "every child born on Fitrah" (Bukhari), 2) CAUSALITY: every existent has cause → universe has cause → First Uncreated Cause = Allah; Kalam scholars (Ghazali, Ibn Sina) cosmological argument, 3) ORDER/DESIGN: complexity precision of universe (physical constants, DNA, ecosystems) = proof of Intelligent Designer - Quran 3:190 "In creation heavens earth...signs for people of understanding", 4) MORALITY: objective moral values (absolute good/evil) require transcendent Moral Legislator. Reason + Revelation complementary.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'defis-modernes',
  },
  {
    id: 'aqeedah-moderne-006',
    question: {
      fr: 'Quelle est la position islamique sur l\'agnosticisme (dire "on ne peut pas savoir si Dieu existe") ?',
      ar: 'ما هو الموقف الإسلامي من اللاأدرية (القول "لا يمكننا معرفة ما إذا كان الله موجوداً")؟',
      en: 'What is the Islamic position on agnosticism (saying "we cannot know if God exists")?',
    },
    options: [
      { id: 'a', text: { fr: 'Position acceptable et humble', ar: 'موقف مقبول ومتواضع', en: 'Acceptable and humble position' } },
      { id: 'b', text: { fr: 'Rejetée - connaissance Allah possible ET OBLIGATOIRE via raison (Fitrah, causalité) ET révélation (Messagers)', ar: 'مرفوض - معرفة الله ممكنة وواجبة عبر العقل (الفطرة، السببية) والوحي (الرسل)', en: 'Rejected - knowledge of Allah possible AND OBLIGATORY via reason (Fitrah, causality) AND revelation (Messengers)' } },
      { id: 'c', text: { fr: 'Encouragée par l\'Islam', ar: 'مشجعة في الإسلام', en: 'Encouraged by Islam' } },
      { id: 'd', text: { fr: 'Équivalente à l\'athéisme', ar: 'معادلة للإلحاد', en: 'Equivalent to atheism' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Islam rejette agnosticisme : 1) CONNAISSANCE POSSIBLE : Allah donna facultés raison (\'Aql) + Fitrah disposition innée + preuves création univers - Coran 51:20-21 "Dans terre signes pour convaincus. Et en vous-mêmes. N\'observez-vous pas?", 2) CONNAISSANCE OBLIGATOIRE : première obligation islamique = Ma\'rifatullah connaissance Allah - Shahada témoignage foi fondée connaissance "Je témoigne qu\'il n\'y a divinité qu\'Allah", 3) MESSAGERS envoyés : Allah n\'abandonna pas humanité ignorance - Coran 4:165 "Messagers annonciateurs et avertisseurs afin qu\'après Messagers hommes n\'aient argument contre Allah", 4) Suspension jugement = rejeter preuves évidentes → Coran 7:179 "Ils ont coeurs ne comprennent pas". Doute sincère temporaire ≠ agnosticisme permanent dogmatique.',
      ar: 'الإسلام يرفض اللاأدرية: 1) المعرفة ممكنة: الله أعطى ملكة العقل + الفطرة الاستعداد الفطري + أدلة خلق الكون - القرآن 51:20-21 "وَفِي الْأَرْضِ آيَاتٌ لِّلْمُوقِنِينَ. وَفِي أَنفُسِكُمْ ۚ أَفَلَا تُبْصِرُونَ"، 2) المعرفة واجبة: أول واجب إسلامي = معرفة الله - الشهادة شهادة الإيمان مبنية على المعرفة "أشهد أن لا إله إلا الله"، 3) الرسل مُرسَلون: الله لم يترك البشرية في الجهل - القرآن 4:165 "رُّسُلًا مُّبَشِّرِينَ وَمُنذِرِينَ لِئَلَّا يَكُونَ لِلنَّاسِ عَلَى اللَّهِ حُجَّةٌ بَعْدَ الرُّسُلِ"، 4) تعليق الحكم = رفض الأدلة الواضحة → القرآن 7:179 "لَهُمْ قُلُوبٌ لَّا يَفْقَهُونَ بِهَا". الشك الصادق المؤقت ≠ اللاأدرية الدائمة العقائدية.',
      en: 'Islam rejects agnosticism: 1) KNOWLEDGE POSSIBLE: Allah gave faculty of reason (\'Aql) + Fitrah innate disposition + proofs in creation - Quran 51:20-21 "In earth signs for those certain. And in yourselves. Do you not see?", 2) KNOWLEDGE OBLIGATORY: first Islamic obligation = Ma\'rifatullah knowledge of Allah - Shahada testimony based on knowledge "I testify no deity except Allah", 3) MESSENGERS sent: Allah did not abandon humanity to ignorance - Quran 4:165 "Messengers bringers of good news and warners so that after Messengers mankind have no argument against Allah", 4) Suspending judgment = rejecting evident proofs → Quran 7:179 "They have hearts understand not". Sincere temporary doubt ≠ permanent dogmatic agnosticism.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'defis-modernes',
  },
  {
    id: 'aqeedah-moderne-007',
    question: {
      fr: 'Comment l\'Islam répond-il au "New Atheism" (Dawkins, Harris, Hitchens) ?',
      ar: 'كيف يرد الإسلام على "الإلحاد الجديد" (دوكينز، هاريس، هيتشنز)؟',
      en: 'How does Islam respond to "New Atheism" (Dawkins, Harris, Hitchens)?',
    },
    options: [
      { id: 'a', text: { fr: 'Islam ignore ces arguments', ar: 'الإسلام يتجاهل هذه الحجج', en: 'Islam ignores these arguments' } },
      { id: 'b', text: { fr: 'Réfutations : 1) "Religion = mal" (confond textes vs comportements humains), 2) "Foi aveugle" (Islam exige raison + preuves), 3) "Science remplace Dieu" (catégories différentes), 4) Moralité objective impossible sans Créateur', ar: 'الردود: 1) "الدين = شر" (يخلط بين النصوص والسلوكيات البشرية)، 2) "الإيمان الأعمى" (الإسلام يتطلب العقل + الأدلة)، 3) "العلم يحل محل الله" (فئات مختلفة)، 4) الأخلاق الموضوعية مستحيلة بدون خالق', en: 'Refutations: 1) "Religion = evil" (confuses texts vs human behaviors), 2) "Blind faith" (Islam requires reason + evidence), 3) "Science replaces God" (different categories), 4) Objective morality impossible without Creator' } },
      { id: 'c', text: { fr: 'Accepte leurs critiques entièrement', ar: 'يقبل انتقاداتهم بالكامل', en: 'Accepts their critiques entirely' } },
      { id: 'd', text: { fr: 'Rejette toute discussion rationnelle', ar: 'يرفض أي نقاش عقلاني', en: 'Rejects all rational discussion' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Réponses islamiques : 1) "RELIGION = MAL" (Dawkins "Dieu délire") : confond TEXTES révélés parfaits VS APPLICATIONS humaines imparfaites - violences historiques ≠ preuve fausseté doctrine ; athéisme aussi causa génocides (Staline, Mao) ; Islam condamne terrorisme viole Shariah, 2) "FOI AVEUGLE" : faux pour Islam - Coran ordonne réflexion 700+ versets science/raison "N\'observent-ils pas?", Prophète "Cherchez science jusqu\'en Chine", Islam encourage débat rationnel Munazara, 3) "SCIENCE REMPLACE DIEU" (Dawkins) : erreur catégorie - science explique COMMENT (mécanismes), religion répond POURQUOI (sens, finalité, moralité) ; beaucoup scientifiques croyants, 4) MORALITÉ sans Dieu : New Atheism ne peut fonder moralité objective absolue - relativisme moral logiquement incohérent.',
      ar: 'الردود الإسلامية: 1) "الدين = شر" (دوكينز "وهم الإله"): يخلط بين النصوص الموحاة الكاملة والتطبيقات البشرية الناقصة - العنف التاريخي ≠ دليل زيف العقيدة؛ الإلحاد أيضاً سبب إبادات (ستالين، ماو)؛ الإسلام يدين الإرهاب الذي يخالف الشريعة، 2) "الإيمان الأعمى": خاطئ للإسلام - القرآن يأمر بالتفكير 700+ آية علم/عقل "أَفَلَا يَنظُرُونَ"، النبي ﷺ "اطلبوا العلم ولو في الصين"، الإسلام يشجع الجدال العقلاني المناظرة، 3) "العلم يحل محل الله" (دوكينز): خطأ في الفئة - العلم يشرح كيف (الآليات)، الدين يجيب لماذا (المعنى، الغاية، الأخلاق)؛ كثير من العلماء مؤمنون، 4) الأخلاق بدون الله: الإلحاد الجديد لا يستطيع تأسيس أخلاق موضوعية مطلقة - النسبية الأخلاقية غير متسقة منطقياً.',
      en: 'Islamic responses: 1) "RELIGION = EVIL" (Dawkins "God Delusion"): confuses perfect revealed TEXTS vs imperfect human APPLICATIONS - historical violence ≠ proof doctrine false; atheism also caused genocides (Stalin, Mao); Islam condemns terrorism violating Shariah, 2) "BLIND FAITH": false for Islam - Quran commands reflection 700+ verses science/reason "Do they not observe?", Prophet "Seek knowledge even in China", Islam encourages rational debate Munazara, 3) "SCIENCE REPLACES GOD" (Dawkins): category error - science explains HOW (mechanisms), religion answers WHY (meaning, purpose, morality); many believing scientists, 4) MORALITY without God: New Atheism cannot ground objective absolute morality - moral relativism logically incoherent.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'defis-modernes',
  },
  {
    id: 'aqeedah-moderne-008',
    question: {
      fr: 'Quelle est la position islamique sur le relativisme moral (toute moralité est subjective/culturelle) ?',
      ar: 'ما هو الموقف الإسلامي من النسبية الأخلاقية (كل الأخلاق ذاتية/ثقافية)؟',
      en: 'What is the Islamic position on moral relativism (all morality is subjective/cultural)?',
    },
    options: [
      { id: 'a', text: { fr: 'Islam accepte - chacun sa vérité', ar: 'الإسلام يقبل - لكل حقيقته', en: 'Islam accepts - each has their truth' } },
      { id: 'b', text: { fr: 'Rejette totalement - valeurs morales ABSOLUES fondées Tawhid : Allah = source moralité objective transcendante', ar: 'يرفض تماماً - القيم الأخلاقية مطلقة مؤسسة على التوحيد: الله = مصدر الأخلاق الموضوعية المتعالية', en: 'Totally rejects - ABSOLUTE moral values founded on Tawhid: Allah = source of objective transcendent morality' } },
      { id: 'c', text: { fr: 'Indifférent à la question morale', ar: 'غير مبالٍ بالمسألة الأخلاقية', en: 'Indifferent to moral question' } },
      { id: 'd', text: { fr: 'Moralité changeable selon époque', ar: 'الأخلاق قابلة للتغيير حسب العصر', en: 'Morality changeable according to era' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Islam rejette relativisme moral absolument : 1) TAWHID = FONDEMENT : Allah = Créateur sagesse parfaite définit Halal/Haram bien/mal objectifs universels - Coran 16:90 "Allah ordonne justice, bienfaisance...interdit turpitude, blâmable, transgression" ; moralité ≠ invention humaine mais Révélation divine, 2) FITRAH : conscience morale innée universelle - tous reconnaissent certains actes absolument mauvais (meurtre innocent, torture enfant, trahison) indépendamment culture, 3) CONSÉQUENCES relativisme : rend impossible condamner injustice (esclavage, génocide = "acceptables leur culture"?!) - absurde ; Nuremberg jugea nazis crimes objectifs, 4) Islam ≠ rigidité aveugle : distingue a) Principes immuables (\'Aqidah, interdictions majeures Zina/Khamr/Riba), b) Applications flexibles (Ijtihad, Maslaha bien commun, \'Urf coutume) selon contexte. Shariah = moralité objective + sagesse contextuelle.',
      ar: 'الإسلام يرفض النسبية الأخلاقية مطلقاً: 1) التوحيد = الأساس: الله = الخالق ذو الحكمة الكاملة يحدد الحلال/الحرام الخير/الشر الموضوعي العالمي - القرآن 16:90 "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ...وَيَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ وَالْبَغْيِ"؛ الأخلاق ≠ اختراع بشري بل وحي إلهي، 2) الفطرة: الضمير الأخلاقي الفطري العالمي - الكل يعترف أن بعض الأفعال شريرة مطلقاً (قتل البريء، تعذيب الطفل، الخيانة) بغض النظر عن الثقافة، 3) عواقب النسبية: تجعل من المستحيل إدانة الظلم (العبودية، الإبادة = "مقبولة في ثقافتهم"?!) - عبث؛ نورمبرغ حاكمت النازيين بجرائم موضوعية، 4) الإسلام ≠ جمود أعمى: يميز بين أ) المبادئ الثابتة (العقيدة، المحرمات الكبرى الزنا/الخمر/الربا)، ب) التطبيقات المرنة (الاجتهاد، المصلحة، العُرف) حسب السياق. الشريعة = الأخلاق الموضوعية + الحكمة السياقية.',
      en: 'Islam rejects moral relativism absolutely: 1) TAWHID = FOUNDATION: Allah = Creator perfect wisdom defines Halal/Haram objective universal good/evil - Quran 16:90 "Allah commands justice, goodness...forbids indecency, wrongdoing, transgression"; morality ≠ human invention but divine Revelation, 2) FITRAH: universal innate moral conscience - all recognize certain acts absolutely evil (innocent murder, child torture, betrayal) regardless culture, 3) CONSEQUENCES relativism: makes impossible condemn injustice (slavery, genocide = "acceptable their culture"?!) - absurd; Nuremberg judged Nazis objective crimes, 4) Islam ≠ blind rigidity: distinguishes a) Immutable principles (\'Aqidah, major prohibitions Zina/Khamr/Riba), b) Flexible applications (Ijtihad, Maslaha common good, \'Urf custom) according context. Shariah = objective morality + contextual wisdom.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'defis-modernes',
  },
];

// ============================================
// PHASE 3B - Questions Extrémisme et Takfir
// ============================================

const extremismeTakfirQuestions: ExamQuestion[] = [
  {
    id: 'aqeedah-takfir-001',
    question: {
      fr: 'Qu\'est-ce que le Takfir et quelles sont les conditions strictes avant d\'excommunier un musulman ?',
      ar: 'ما هو التكفير وما هي الشروط الصارمة قبل تكفير المسلم؟',
      en: 'What is Takfir and what are the strict conditions before excommunicating a Muslim?',
    },
    options: [
      { id: 'a', text: { fr: 'Tout péché majeur justifie Takfir', ar: 'كل ذنب كبير يبرر التكفير', en: 'Every major sin justifies Takfir' } },
      { id: 'b', text: { fr: 'Takfir = déclarer Kafir (mécréant). Conditions STRICTES : 1) Kufr Akbar majeur explicite (nier Allah/Prophète/Coran), 2) Preuve claire (pas ambiguïté), 3) Connaissance obligatoire prouvée, 4) Pas contrainte/ignorance, 5) Pas interprétation erronée sincère (Ta\'wil)', ar: 'التكفير = إعلان الكفر. الشروط الصارمة: 1) كفر أكبر صريح (إنكار الله/النبي/القرآن)، 2) دليل واضح (لا غموض)، 3) العلم الواجب مثبت، 4) لا إكراه/جهل، 5) لا تأويل خاطئ صادق', en: 'Takfir = declaring Kafir (disbeliever). STRICT conditions: 1) Major explicit Kufr Akbar (denying Allah/Prophet/Quran), 2) Clear proof (no ambiguity), 3) Obligatory knowledge proven, 4) No coercion/ignorance, 5) No sincere erroneous interpretation (Ta\'wil)' } },
      { id: 'c', text: { fr: 'Tout le monde peut faire Takfir', ar: 'الجميع يمكنهم التكفير', en: 'Everyone can do Takfir' } },
      { id: 'd', text: { fr: 'Takfir interdit dans tous les cas', ar: 'التكفير محرم في جميع الحالات', en: 'Takfir forbidden in all cases' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Takfir extrêmement grave Islam - Hadith "Qui dit frère \'Tu es Kafir\', si faux retourne sur accusateur" (Bukhari). 5 CONDITIONS strictes Ahl Sunnah : 1) KUFR AKBAR EXPLICITE : acte/parole sortant Islam définitivement - nier Tawhid, insulter Allah/Prophète, rejeter obligation connue religion nécessairement (Salat, Zakat) ; péché majeur seul (Zina, vol) ≠ Kufr position Murji\'ah correcte vs Khawarij excommuniaient pécheurs, 2) PREUVE CLAIRE : texte Coran/Sunna sans ambiguïté + Ijma\' consensus savants, 3) CONNAISSANCE : personne SAVAIT obligation rejetée - ignorant excusé si nouvellement musulman/isolé, 4) PAS CONTRAINTE : Ikrah contraint physiquement excusé Coran 16:106 "sauf contraint coeur tranquille foi", 5) PAS TA\'WIL : interprétation erronée SINCÈRE excusée si raisonnement possible. Takfir = compétence savants qualifiés UNIQUEMENT pas individus.',
      ar: 'التكفير خطير جداً في الإسلام - حديث "من قال لأخيه يا كافر فقد باء بها أحدهما" (البخاري). 5 شروط صارمة أهل السنة: 1) كفر أكبر صريح: فعل/قول يخرج من الإسلام نهائياً - إنكار التوحيد، إهانة الله/النبي، رفض فريضة معلومة بالضرورة (الصلاة، الزكاة)؛ الذنب الكبير وحده (الزنا، السرقة) ≠ كفر موقف المرجئة صحيح ضد الخوارج الذين كفروا العصاة، 2) دليل واضح: نص قرآن/سنة بلا غموض + إجماع العلماء، 3) العلم: الشخص كان يعلم بالفريضة المرفوضة - الجاهل معذور إن حديث الإسلام/معزول، 4) لا إكراه: المُكره بالقوة معذور القرآن 16:106 "إِلَّا مَنْ أُكْرِهَ وَقَلْبُهُ مُطْمَئِنٌّ بِالْإِيمَانِ"، 5) لا تأويل: التفسير الخاطئ الصادق معذور إن كان الاستدلال ممكناً. التكفير = اختصاص العلماء المؤهلين فقط ليس الأفراد.',
      en: 'Takfir extremely serious Islam - Hadith "Whoever says to brother \'You are Kafir\', if false returns upon accuser" (Bukhari). 5 STRICT conditions Ahl Sunnah: 1) MAJOR EXPLICIT KUFR: act/speech exiting Islam definitively - denying Tawhid, insulting Allah/Prophet, rejecting known obligation necessarily (Salat, Zakat); major sin alone (Zina, theft) ≠ Kufr position Murji\'ah correct vs Khawarij excommunicated sinners, 2) CLEAR PROOF: Quran/Sunnah text without ambiguity + Ijma\' scholars consensus, 3) KNOWLEDGE: person KNEW rejected obligation - ignorant excused if newly Muslim/isolated, 4) NO COERCION: Ikrah physically coerced excused Quran 16:106 "except coerced heart tranquil faith", 5) NO TA\'WIL: SINCERE erroneous interpretation excused if reasoning possible. Takfir = competence qualified scholars ONLY not individuals.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'extremisme-takfir',
  },
  {
    id: 'aqeedah-takfir-002',
    question: {
      fr: 'Qui étaient les Khawarij (Kharidjites) et pourquoi sont-ils rejetés par Ahl as-Sunnah ?',
      ar: 'من كانت الخوارج ولماذا رفضهم أهل السنة؟',
      en: 'Who were the Khawarij (Kharijites) and why are they rejected by Ahl as-Sunnah?',
    },
    options: [
      { id: 'a', text: { fr: 'Groupe pieux modèle à suivre', ar: 'جماعة تقية نموذج يُحتذى', en: 'Pious group model to follow' } },
      { id: 'b', text: { fr: 'Secte extrémiste : Takfir facile pécheurs majeurs, tuèrent Ali RA, rejetèrent arbitrage Tahkim. Prophète ﷺ : "chiens Enfer", "sortent Islam comme flèche gibier"', ar: 'فرقة متطرفة: تكفير سهل للعصاة، قتلوا علياً رضي الله عنه، رفضوا التحكيم. النبي ﷺ: "كلاب النار"، "يمرقون من الإسلام كما يمرق السهم من الرمية"', en: 'Extremist sect: easy Takfir of sinners, killed Ali RA, rejected arbitration Tahkim. Prophet ﷺ: "dogs of Hell", "exit Islam like arrow from game"' } },
      { id: 'c', text: { fr: 'Les compagnons du Prophète', ar: 'صحابة النبي', en: 'Companions of the Prophet' } },
      { id: 'd', text: { fr: 'Savants respectés de Médine', ar: 'علماء محترمون من المدينة', en: 'Respected scholars of Medina' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Khawarij = première secte déviante Islam (37H après bataille Siffin). DOCTRINES : 1) TAKFIR FACILE : péché majeur = Kufr Akbar (Ali accepta arbitrage = Kafir selon eux) - contredit consensus Ahl Sunnah péché ≠ Kufr sauf Istihلال rendre licite, 2) EXTRÉMISME : assassinèrent Ali ibn Abi Talib RA (4ème Calife Rashidun), déclarèrent Kafir Othman, Mu\'awiya, Sahabas, 3) REJET TAHKIM : "La Hukm illa lillah jugement qu\'à Allah" interprétèrent mal → refusèrent arbitrage humain légitime ; Prophète ﷺ décrivit : "récitent Coran ne dépasse pas gorges" (apparence piété, coeur dévié), "âge jeune, foolish minds" (Muslim), "tuez-les car sang récompense Jour Jugement" (Bukhari). DANGER : littéralisme sans science, Takfir hâtif, violence contre musulmans. État Islamique/Al-Qaida héritage Khawarij moderne.',
      ar: 'الخوارج = أول فرقة منحرفة في الإسلام (37هـ بعد معركة صفين). العقائد: 1) التكفير السهل: الذنب الكبير = كفر أكبر (علي قبل التحكيم = كافر عندهم) - يخالف إجماع أهل السنة الذنب ≠ كفر إلا الاستحلال، 2) التطرف: اغتالوا علي بن أبي طالب رضي الله عنه (الخليفة الراشد الرابع)، كفّروا عثمان ومعاوية والصحابة، 3) رفض التحكيم: "لا حكم إلا لله" فسروها خطأً → رفضوا التحكيم البشري المشروع؛ النبي ﷺ وصفهم: "يقرؤون القرآن لا يجاوز حناجرهم" (مظهر التقوى، قلب منحرف)، "سفهاء الأحلام" (مسلم)، "اقتلوهم فإن في قتلهم أجراً يوم القيامة" (البخاري). الخطر: الحرفية بلا علم، التكفير المتسرع، العنف ضد المسلمين. الدولة الإسلامية/القاعدة إرث الخوارج الحديث.',
      en: 'Khawarij = first deviant sect Islam (37H after battle Siffin). DOCTRINES: 1) EASY TAKFIR: major sin = Kufr Akbar (Ali accepted arbitration = Kafir according them) - contradicts Ahl Sunnah consensus sin ≠ Kufr except Istihlal making lawful, 2) EXTREMISM: assassinated Ali ibn Abi Talib RA (4th Rightly-Guided Caliph), declared Kafir Othman, Mu\'awiya, Companions, 3) REJECTION TAHKIM: "La Hukm illa lillah judgment only to Allah" misinterpreted → refused legitimate human arbitration; Prophet ﷺ described: "recite Quran not pass throats" (appearance piety, heart deviated), "young age, foolish minds" (Muslim), "kill them for their blood reward Day Judgment" (Bukhari). DANGER: literalism without knowledge, hasty Takfir, violence against Muslims. Islamic State/Al-Qaeda modern Khawarij legacy.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'extremisme-takfir',
  },
  {
    id: 'aqeedah-takfir-003',
    question: {
      fr: 'Le terrorisme au nom de l\'Islam est-il conforme à la Shariah ?',
      ar: 'هل الإرهاب باسم الإسلام متوافق مع الشريعة؟',
      en: 'Is terrorism in the name of Islam conforming to Shariah?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui - Jihad justifie tout', ar: 'نعم - الجهاد يبرر كل شيء', en: 'Yes - Jihad justifies everything' } },
      { id: 'b', text: { fr: 'Non absolument - contraire Shariah : sanctité vie innocente, interdiction Fasad corruption terre, tuer femmes/enfants/non-combattants Haram', ar: 'لا مطلقاً - مخالف للشريعة: حرمة الدم البريء، تحريم الفساد في الأرض، قتل النساء/الأطفال/غير المحاربين حرام', en: 'No absolutely - contrary Shariah: sanctity innocent life, prohibition Fasad corruption earth, killing women/children/non-combatants Haram' } },
      { id: 'c', text: { fr: 'Dépend du contexte', ar: 'يعتمد على السياق', en: 'Depends on context' } },
      { id: 'd', text: { fr: 'Islam encourage violence aveugle', ar: 'الإسلام يشجع العنف الأعمى', en: 'Islam encourages blind violence' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Terrorisme = HARAM catégoriquement. Preuves : 1) SANCTITÉ VIE : Coran 5:32 "quiconque tue âme...comme tué humanité entière" ; 6:151 "ne tuez pas âme qu\'Allah interdit sauf droit" → civils innocents protégés, 2) INTERDICTION FASAD : Coran 5:33 "ceux font guerre Allah et Messager, sèment corruption terre" méritent punition sévère → terrorisme = corruption pas Jihad, 3) RÈGLES JIHAD : Abu Bakr ordonna armée : "Ne tuez pas enfant, vieillard, femme. Ne brûlez pas palmiers. Ne coupez pas arbre fruitier" (Malik) ; Prophète interdit tuer moines/prêtres, détruire lieux culte, 4) TRAHISON SÉCURITÉ : terroristes souvent profitent confiance citoyenneté/résidence pays cible = Ghadr trahison Haram - Prophète "Qui trahit, portera étendard trahison Jour Jugement", 5) CONSENSUS : Conseil Fiqh Islamique, Al-Azhar, savants mondiaux condamnèrent unanimement terrorisme. Jihad défensif légitime ≠ violence aveugle civils.',
      ar: 'الإرهاب = حرام قطعاً. الأدلة: 1) حرمة الدم: القرآن 5:32 "مَن قَتَلَ نَفْسًا...فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا"؛ 6:151 "وَلَا تَقْتُلُوا النَّفْسَ الَّتِي حَرَّمَ اللَّهُ إِلَّا بِالْحَقِّ" → المدنيون الأبرياء محميون، 2) تحريم الفساد: القرآن 5:33 "إِنَّمَا جَزَاءُ الَّذِينَ يُحَارِبُونَ اللَّهَ وَرَسُولَهُ وَيَسْعَوْنَ فِي الْأَرْضِ فَسَادًا" يستحقون عقوبة شديدة → الإرهاب = فساد ليس جهاداً، 3) قواعد الجهاد: أبو بكر أمر الجيش: "لا تقتلوا طفلاً ولا شيخاً ولا امرأة. لا تحرقوا نخلاً. لا تقطعوا شجرة مثمرة" (مالك)؛ النبي حرم قتل الرهبان/القساوسة، تدمير دور العبادة، 4) خيانة الأمان: الإرهابيون غالباً يستغلون ثقة المواطنة/الإقامة في البلد المستهدف = غدر خيانة حرام - النبي "من غدر، يحمل لواء غدره يوم القيامة"، 5) الإجماع: مجلس الفقه الإسلامي، الأزهر، علماء العالم أدانوا بالإجماع الإرهاب. الجهاد الدفاعي المشروع ≠ العنف الأعمى ضد المدنيين.',
      en: 'Terrorism = HARAM categorically. Proofs: 1) SANCTITY LIFE: Quran 5:32 "whoever kills soul...as if killed all humanity"; 6:151 "do not kill soul Allah forbade except by right" → innocent civilians protected, 2) PROHIBITION FASAD: Quran 5:33 "those wage war Allah and Messenger, spread corruption earth" deserve severe punishment → terrorism = corruption not Jihad, 3) JIHAD RULES: Abu Bakr ordered army: "Do not kill child, old man, woman. Do not burn palm trees. Do not cut fruit tree" (Malik); Prophet forbade killing monks/priests, destroying places worship, 4) BETRAYAL SECURITY: terrorists often exploit trust citizenship/residence target country = Ghadr betrayal Haram - Prophet "Whoever betrays, will carry banner betrayal Day Judgment", 5) CONSENSUS: Islamic Fiqh Council, Al-Azhar, worldwide scholars unanimously condemned terrorism. Legitimate defensive Jihad ≠ blind violence civilians.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'extremisme-takfir',
  },
  {
    id: 'aqeedah-takfir-004',
    question: {
      fr: 'Quelle est la différence entre Jihad défensif et Jihad offensif selon les savants ?',
      ar: 'ما الفرق بين الجهاد الدفاعي والجهاد الهجومي عند العلماء؟',
      en: 'What is the difference between defensive Jihad and offensive Jihad according to scholars?',
    },
    options: [
      { id: 'a', text: { fr: 'Aucune différence - même statut', ar: 'لا فرق - نفس الحكم', en: 'No difference - same ruling' } },
      { id: 'b', text: { fr: 'Défensif : Fard \'Ayn (obligatoire individuel) si terre musulmane attaquée. Offensif : débat - majorité Fard Kifaya (collectif) conditions strictes (Calife, capacité, sécurité musulmans)', ar: 'الدفاعي: فرض عين (واجب فردي) إن هوجمت أرض مسلمة. الهجومي: خلاف - الجمهور فرض كفاية (جماعي) بشروط صارمة (خليفة، قدرة، أمان مسلمين)', en: 'Defensive: Fard \'Ayn (individual obligation) if Muslim land attacked. Offensive: debate - majority Fard Kifaya (collective) strict conditions (Caliph, capacity, Muslim safety)' } },
      { id: 'c', text: { fr: 'Jihad toujours interdit', ar: 'الجهاد محرم دائماً', en: 'Jihad always forbidden' } },
      { id: 'd', text: { fr: 'Jihad offensif seul valable', ar: 'الجهاد الهجومي وحده صحيح', en: 'Offensive Jihad alone valid' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Distinction cruciale Fiqh : 1) JIHAD DÉFENSIF : si terre musulmane/musulmans attaqués → FARD \'AYN obligation individuelle chaque musulman capable défendre - Coran 2:190 "Combattez sentier Allah ceux vous combattent" ; pas besoin permission parents/créanciers ; consensus obligatoire (Palestine, Tchétchénie ex.), 2) JIHAD OFFENSIF : expansion Islam/protéger Da\'wah prédication - débat : a) Majorité classique (4 écoles) : Fard Kifaya obligation collective communauté, CONDITIONS : autorité légitime (Calife/Imam), capacité militaire suffisante, sécurité musulmans garantie, b) Modernistes (Qaradawi, Ramadan) : offensif abrogé par 2:256 "Nulle contrainte religion" → Jihad défensif uniquement légitime aujourd\'hui. MODERNE : absence Califat consensus + traités internationaux signés États musulmans = Jihad offensif non-applicable ; défense légitime si agression.',
      ar: 'التمييز الحاسم في الفقه: 1) الجهاد الدفاعي: إن هوجمت أرض مسلمة/مسلمون → فرض عين واجب فردي على كل مسلم قادر الدفاع - القرآن 2:190 "وَقَاتِلُوا فِي سَبِيلِ اللَّهِ الَّذِينَ يُقَاتِلُونَكُمْ"؛ لا حاجة لإذن الوالدين/الدائنين؛ إجماع على الوجوب (فلسطين، الشيشان مثلاً)، 2) الجهاد الهجومي: توسيع الإسلام/حماية الدعوة - خلاف: أ) الجمهور الكلاسيكي (المذاهب الأربعة): فرض كفاية واجب جماعي على الأمة، الشروط: سلطة شرعية (خليفة/إمام)، قدرة عسكرية كافية، أمان المسلمين مضمون، ب) الحداثيون (القرضاوي، رمضان): الهجومي منسوخ بـ 2:256 "لَا إِكْرَاهَ فِي الدِّينِ" → الجهاد الدفاعي فقط شرعي اليوم. الحديث: غياب الخلافة بالإجماع + المعاهدات الدولية الموقعة من الدول الإسلامية = الجهاد الهجومي غير قابل للتطبيق؛ الدفاع مشروع إن وقع اعتداء.',
      en: 'Crucial Fiqh distinction: 1) DEFENSIVE JIHAD: if Muslim land/Muslims attacked → FARD \'AYN individual obligation every capable Muslim defend - Quran 2:190 "Fight in way Allah those who fight you"; no need permission parents/creditors; consensus obligatory (Palestine, Chechnya ex.), 2) OFFENSIVE JIHAD: expand Islam/protect Da\'wah preaching - debate: a) Classical majority (4 schools): Fard Kifaya collective obligation community, CONDITIONS: legitimate authority (Caliph/Imam), sufficient military capacity, Muslim safety guaranteed, b) Modernists (Qaradawi, Ramadan): offensive abrogated by 2:256 "No compulsion religion" → defensive Jihad only legitimate today. MODERN: absence consensus Caliphate + international treaties signed Muslim states = offensive Jihad non-applicable; legitimate defense if aggression.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'extremisme-takfir',
  },
  {
    id: 'aqeedah-takfir-005',
    question: {
      fr: 'Quelle est la position de l\'Ahl as-Sunnah sur la Bay\'ah (allégeance) au Calife ?',
      ar: 'ما موقف أهل السنة من البيعة للخليفة؟',
      en: 'What is the position of Ahl as-Sunnah on Bay\'ah (allegiance) to the Caliph?',
    },
    options: [
      { id: 'a', text: { fr: 'Bay\'ah interdite dans Islam', ar: 'البيعة محرمة في الإسلام', en: 'Bay\'ah forbidden in Islam' } },
      { id: 'b', text: { fr: 'Obligatoire SI Califat légitime existe (conditions : Quraysh, compétence, justice, Shura). Absence moderne : pas Bay\'ah à individus autoproclamés = Fitna', ar: 'واجبة إن وُجدت خلافة شرعية (شروط: قريش، الكفاءة، العدل، الشورى). الغياب الحديث: لا بيعة لأفراد منصبين أنفسهم = فتنة', en: 'Obligatory IF legitimate Caliphate exists (conditions: Quraysh, competence, justice, Shura). Modern absence: no Bay\'ah to self-proclaimed individuals = Fitna' } },
      { id: 'c', text: { fr: 'Tout le monde peut déclarer Califat', ar: 'الجميع يمكنهم إعلان الخلافة', en: 'Everyone can declare Caliphate' } },
      { id: 'd', text: { fr: 'Bay\'ah uniquement pour groupes terroristes', ar: 'البيعة فقط للجماعات الإرهابية', en: 'Bay\'ah only for terrorist groups' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Ahl Sunnah : Bay\'ah = serment allégeance au dirigeant musulman légitime. 1) CALIFAT LÉGITIME : Conditions strictes : a) QURAYSH : majorité (sauf Khawarij) exigent Calife de tribu Quraysh - Hadith "Imams de Quraysh" (Bukhari), b) COMPÉTENCE : science Shariah, capacité gouverner protéger musulmans, c) JUSTICE : ne commet pas péché majeur ouvertement (Fisq Zahir) ni oppression flagrante, d) SHURA : consultation Ahl al-Hall wa al-\'Aqd décisionnaires communauté, 2) OBÉISSANCE : après Bay\'ah → Wajib obéir sauf ordre Haram explicite - Prophète "Pas obéissance créature désobéissance Créateur" (Ahmad) ; rébellion permise SI Kufr Bawah manifeste (apostasie claire) avec preuves, 3) MODERNE : Califat n\'existe pas depuis 1924 (Ottomans) → CONSENSUS savants contemporains : pas Bay\'ah à groupes autoproclamés (ISIS, Al-Qaida) = Fitna division + violence illégitime. Musulmans obéissent gouvernements actuels si n\'ordonnent pas Haram.',
      ar: 'أهل السنة: البيعة = قسم الولاء للحاكم المسلم الشرعي. 1) الخلافة الشرعية: شروط صارمة: أ) قريش: الجمهور (إلا الخوارج) يشترطون الخليفة من قبيلة قريش - حديث "الأئمة من قريش" (البخاري)، ب) الكفاءة: علم بالشريعة، قدرة على الحكم وحماية المسلمين، ج) العدالة: لا يرتكب ذنباً كبيراً علناً (الفسق الظاهر) ولا ظلماً فاضحاً، د) الشورى: استشارة أهل الحل والعقد من صناع القرار في الأمة، 2) الطاعة: بعد البيعة → واجب الطاعة إلا في أمر حرام صريح - النبي "لا طاعة لمخلوق في معصية الخالق" (أحمد)؛ الخروج جائز إن كفر بواح (ردة واضحة) مع الأدلة، 3) الحديث: الخلافة غير موجودة منذ 1924 (العثمانيون) → إجماع العلماء المعاصرين: لا بيعة للجماعات المنصبة أنفسها (داعش، القاعدة) = فتنة انقسام + عنف غير شرعي. المسلمون يطيعون الحكومات الحالية إن لم تأمر بحرام.',
      en: 'Ahl Sunnah: Bay\'ah = oath allegiance to legitimate Muslim ruler. 1) LEGITIMATE CALIPHATE: Strict conditions: a) QURAYSH: majority (except Khawarij) require Caliph from Quraysh tribe - Hadith "Imams from Quraysh" (Bukhari), b) COMPETENCE: Shariah knowledge, capability govern protect Muslims, c) JUSTICE: not commit major sin openly (Fisq Zahir) nor flagrant oppression, d) SHURA: consultation Ahl al-Hall wa al-\'Aqd decision-makers community, 2) OBEDIENCE: after Bay\'ah → Wajib obey except explicit Haram order - Prophet "No obedience creature in disobedience Creator" (Ahmad); rebellion permitted IF manifest Kufr Bawah (clear apostasy) with proofs, 3) MODERN: Caliphate not exist since 1924 (Ottomans) → CONSENSUS contemporary scholars: no Bay\'ah to self-proclaimed groups (ISIS, Al-Qaeda) = Fitna division + illegitimate violence. Muslims obey current governments if not order Haram.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'extremisme-takfir',
  },
  {
    id: 'aqeedah-takfir-006',
    question: {
      fr: 'Quelle est la position islamique sur la Bid\'ah (innovation religieuse) ?',
      ar: 'ما الموقف الإسلامي من البدعة (الابتكار الديني)؟',
      en: 'What is the Islamic position on Bid\'ah (religious innovation)?',
    },
    options: [
      { id: 'a', text: { fr: 'Toute Bid\'ah est Kufr', ar: 'كل بدعة كفر', en: 'Every Bid\'ah is Kufr' } },
      { id: 'b', text: { fr: 'Débat : Majorité (Malik/Shafi\'i) : Bid\'ah = ajout religion non-existant Prophète/Sahaba. Divise : Bid\'ah Hasana (bonne si conforme Shariah) vs Dalalah (égarement). Salafi : toute Bid\'ah égarement', ar: 'خلاف: الجمهور (مالك/الشافعي): البدعة = إضافة دينية غير موجودة زمن النبي/الصحابة. تنقسم: بدعة حسنة (جيدة إن وافقت الشريعة) مقابل ضلالة. السلفي: كل بدعة ضلالة', en: 'Debate: Majority (Malik/Shafi\'i): Bid\'ah = religious addition non-existent Prophet/Sahaba time. Divides: Bid\'ah Hasana (good if conforms Shariah) vs Dalalah (misguidance). Salafi: every Bid\'ah misguidance' } },
      { id: 'c', text: { fr: 'Bid\'ah toujours recommandée', ar: 'البدعة دائماً مستحبة', en: 'Bid\'ah always recommended' } },
      { id: 'd', text: { fr: 'Aucune règle sur Bid\'ah', ar: 'لا قاعدة عن البدعة', en: 'No rule on Bid\'ah' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'DÉFINITION : Bid\'ah = innovation religieuse non-existante temps Prophète ﷺ/Sahaba introduite après. Hadith "Toute Bid\'ah égarement" (Muslim). DÉBAT : 1) POSITION MALIKI/SHAFI\'I : Bid\'ah divisée : a) BID\'AH HASANA : innovation BONNE si conforme principes Shariah généraux (Maslaha bien commun) - exemples : compilation Coran livre unique (Abu Bakr), ajout 2ème Adhan Jumu\'ah (Othman), Tarawih 20 unités organisé (Omar) ; Omar dit "Ni\'mat al-Bid\'ah quelle belle innovation!" (Bukhari), célébration Mawlid (débat), b) BID\'AH DALALAH/SAYYI\'AH : égarement - contredit texte clair OU ajoute \'Ibadah obligatoire OU mène Shirk ; exemples : invoquer morts demander aide (Shirk), nier Qadar (Qadarites), Mut\'ah Chiite, 2) POSITION SALAFI/HANBALI stricte : TOUTE Bid\'ah égarement sans exception - argument : Hadith catégorique "toute Bid\'ah", pratiques Sahaba = exceptions pas Bid\'ah. CONSENSUS : Bid\'ah \'Aqidah (doctrine) TOUJOURS rejetée.',
      ar: 'التعريف: البدعة = ابتكار ديني غير موجود زمن النبي ﷺ/الصحابة أُدخل بعدهم. حديث "كل بدعة ضلالة" (مسلم). الخلاف: 1) موقف المالكي/الشافعي: البدعة تنقسم: أ) البدعة الحسنة: ابتكار جيد إن وافق مبادئ الشريعة العامة (المصلحة) - أمثلة: جمع القرآن في مصحف واحد (أبو بكر)، إضافة الأذان الثاني للجمعة (عثمان)، تراويح 20 ركعة منظمة (عمر)؛ عمر قال "نعمت البدعة هذه!" (البخاري)، الاحتفال بالمولد النبوي (خلاف)، ب) البدعة الضلالة/السيئة: انحراف - يخالف نصاً صريحاً أو يضيف عبادة واجبة أو يؤدي للشرك؛ أمثلة: دعاء الأموات طلب المساعدة (شرك)، إنكار القدر (القدرية)، المتعة الشيعية، 2) الموقف السلفي/الحنبلي الصارم: كل بدعة ضلالة بلا استثناء - الحجة: الحديث قاطع "كل بدعة"، ممارسات الصحابة = استثناءات ليست بدعة. الإجماع: بدعة العقيدة (الاعتقاد) مرفوضة دائماً.',
      en: 'DEFINITION: Bid\'ah = religious innovation non-existent Prophet ﷺ/Sahaba time introduced after. Hadith "Every Bid\'ah misguidance" (Muslim). DEBATE: 1) MALIKI/SHAFI\'I POSITION: Bid\'ah divided: a) BID\'AH HASANA: GOOD innovation if conforms general Shariah principles (Maslaha common good) - examples: Quran compilation single book (Abu Bakr), adding 2nd Jumu\'ah Adhan (Othman), Tarawih 20 units organized (Omar); Omar said "Ni\'mat al-Bid\'ah what beautiful innovation!" (Bukhari), Mawlid celebration (debate), b) BID\'AH DALALAH/SAYYI\'AH: misguidance - contradicts clear text OR adds obligatory \'Ibadah OR leads Shirk; examples: invoking dead asking help (Shirk), denying Qadar (Qadarites), Shia Mut\'ah, 2) STRICT SALAFI/HANBALI POSITION: EVERY Bid\'ah misguidance without exception - argument: categorical Hadith "every Bid\'ah", Sahaba practices = exceptions not Bid\'ah. CONSENSUS: \'Aqidah Bid\'ah (doctrine) ALWAYS rejected.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'extremisme-takfir',
  },
];

// ============================================
// PHASE 3B - Questions Soufisme
// ============================================

const soufismeQuestions: ExamQuestion[] = [
  {
    id: 'aqeedah-soufisme-001',
    question: {
      fr: 'Quelle est la position islamique sur le Tawassul (intercession via personnes pieuses) ?',
      ar: 'ما الموقف الإسلامي من التوسل (الاستشفاع عبر الأتقياء)؟',
      en: 'What is the Islamic position on Tawassul (intercession via pious people)?',
    },
    options: [
      { id: 'a', text: { fr: 'Permis sans restriction - invoquer morts directement', ar: 'جائز بلا قيد - دعاء الأموات مباشرة', en: 'Permitted without restriction - invoke dead directly' } },
      { id: 'b', text: { fr: 'Débat : Tawassul par VIVANT présent permis. Tawassul mort/absent : Salafi = Shirk Akbar ; Traditionnel (Hanafi/Maliki) = permis si pas adoration directe mais demande Allah via honneur pieux', ar: 'خلاف: التوسل بالحي الحاضر جائز. التوسل بالميت/الغائب: السلفي = شرك أكبر؛ التقليدي (حنفي/مالكي) = جائز إن لم يكن عبادة مباشرة بل سؤال الله بجاه التقي', en: 'Debate: Tawassul via LIVING present permitted. Tawassul dead/absent: Salafi = Shirk Akbar; Traditional (Hanafi/Maliki) = permitted if not direct worship but asking Allah via honor of pious' } },
      { id: 'c', text: { fr: 'Tout Tawassul est Halal', ar: 'كل التوسل حلال', en: 'All Tawassul is Halal' } },
      { id: 'd', text: { fr: 'Tout Tawassul est Shirk', ar: 'كل التوسل شرك', en: 'All Tawassul is Shirk' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'DÉBAT COMPLEXE : 1) TAWASSUL PERMIS consensus : a) Par NOMS/ATTRIBUTS Allah - Du\'a "Ô Allah, par Ta miséricorde accorde-moi", b) Par ACTIONS PROPRES - "Ô Allah, par ma foi en Toi exauce-moi", c) Par DU\'A VIVANT PRÉSENT - demander personne pieuse vivante "fais Du\'a pour moi" ; Sahaba demandaient Prophète ﷺ intercéder, 2) TAWASSUL CONTROVERSÉ : invoquer MORTS/ABSENTS "Ô Prophète accorde-moi" : a) POSITION SALAFI : SHIRK AKBAR si appelle mort directement car Du\'a = \'Ibadah adoration Coran 40:60 "Invoquez-Moi J\'exauce" ; mort n\'entend pas 35:22 "Tu ne fais entendre qui dans tombes", b) POSITION TRADITIONNELLE (Hanafi/Maliki/Ash\'ari) : permis si INTENTION demander Allah par HONNEUR/STATUT pieux ("Ô Allah par rang Prophète exauce") pas adoration mort ; pratique Sahaba Omar demanda pluie via Al-\'Abbas oncle Prophète après sa mort. CLEF : éviter équivoque Shubha - invoquer Allah directement toujours sûr.',
      ar: 'خلاف معقد: 1) التوسل الجائز بالإجماع: أ) بأسماء/صفات الله - الدعاء "اللهم برحمتك ارزقني"، ب) بأعمال النفس - "اللهم بإيماني بك استجب لي"، ج) بدعاء الحي الحاضر - طلب شخص تقي حي "ادعُ لي"؛ الصحابة طلبوا النبي ﷺ يشفع، 2) التوسل المختلف فيه: دعاء الأموات/الغائبين "يا نبي ارزقني": أ) الموقف السلفي: شرك أكبر إن دعا الميت مباشرة لأن الدعاء = عبادة القرآن 40:60 "ادْعُونِي أَسْتَجِبْ لَكُمْ"؛ الميت لا يسمع 35:22 "فَإِنَّكَ لَا تُسْمِعُ مَن فِي الْقُبُورِ"، ب) الموقف التقليدي (حنفي/مالكي/أشعري): جائز إن كانت النية سؤال الله بجاه/منزلة التقي ("اللهم بمنزلة النبي استجب") ليس عبادة الميت؛ ممارسة الصحابة عمر استسقى بالعباس عم النبي بعد وفاته. المفتاح: تجنب الشبهة - دعاء الله مباشرة دائماً آمن.',
      en: 'COMPLEX DEBATE: 1) TAWASSUL PERMITTED consensus: a) Via NAMES/ATTRIBUTES Allah - Du\'a "O Allah, by Your mercy grant me", b) Via OWN ACTIONS - "O Allah, by my faith in You answer me", c) Via DU\'A LIVING PRESENT - asking living pious person "make Du\'a for me"; Sahaba asked Prophet ﷺ intercede, 2) TAWASSUL CONTROVERSIAL: invoking DEAD/ABSENT "O Prophet grant me": a) SALAFI POSITION: SHIRK AKBAR if calls dead directly because Du\'a = \'Ibadah worship Quran 40:60 "Call Me I answer"; dead do not hear 35:22 "You cannot make hear those in graves", b) TRADITIONAL POSITION (Hanafi/Maliki/Ash\'ari): permitted if INTENTION asking Allah via HONOR/STATUS pious ("O Allah by rank Prophet answer") not worshiping dead; Sahaba practice Omar asked rain via Al-\'Abbas Prophet uncle after his death. KEY: avoid ambiguity Shubha - invoking Allah directly always safe.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'soufisme',
  },
  {
    id: 'aqeedah-soufisme-002',
    question: {
      fr: 'Quelle est la position islamique sur le Mawlid (célébration naissance du Prophète ﷺ) ?',
      ar: 'ما الموقف الإسلامي من المولد النبوي (الاحتفال بميلاد النبي ﷺ)؟',
      en: 'What is the Islamic position on Mawlid (celebrating Prophet\'s ﷺ birth)?',
    },
    options: [
      { id: 'a', text: { fr: 'Obligatoire Wajib dans Islam', ar: 'واجب في الإسلام', en: 'Obligatory Wajib in Islam' } },
      { id: 'b', text: { fr: 'Débat : Bid\'ah (non-existant temps Sahaba). Permis si : rappel Seerah, Salawat, charité, sans mixité/musique Haram. Ibn Taymiyyah/Salafis : Bid\'ah rejetée. Shafi\'is/Malikis modernes : Bid\'ah Hasana acceptable', ar: 'خلاف: بدعة (غير موجود زمن الصحابة). جائز إن: ذكر السيرة، الصلاة على النبي، الصدقة، بلا اختلاط/موسيقى حرام. ابن تيمية/السلفيون: بدعة مرفوضة. الشافعية/المالكية المحدثون: بدعة حسنة مقبولة', en: 'Debate: Bid\'ah (non-existent Sahaba time). Permitted if: Seerah remembrance, Salawat, charity, without mixity/Haram music. Ibn Taymiyyah/Salafis: rejected Bid\'ah. Shafi\'is/Malikis modern: acceptable Bid\'ah Hasana' } },
      { id: 'c', text: { fr: 'Shirk Akbar unanimement', ar: 'شرك أكبر بالإجماع', en: 'Shirk Akbar unanimously' } },
      { id: 'd', text: { fr: 'Sahaba célébraient chaque année', ar: 'الصحابة احتفلوا كل سنة', en: 'Sahaba celebrated every year' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'DÉBAT HISTORIQUE : 1) ORIGINE : Mawlid commença 6ème siècle Hijri Fatimides Égypte puis popularisé Saladin ; non-célébré temps Prophète ﷺ, Sahaba, Salaf Salih = BID\'AH innovation, 2) POSITION IBN TAYMIYYAH/SALAFI : Bid\'ah rejetée - argument : a) "Meilleur générations n\'ont pas fait" (si bien, Sahaba auraient fait), b) Prophète interdit "n\'exagérez pas mon sujet comme Chrétiens exagérèrent Isa", c) Risque innovation mène excès (certains invoquent Prophète comme Chrétiens prient Jésus = Ghuluww exagération), 3) POSITION SHAFI\'I/MALIKI MODERNE (Suyuti, Qaradawi) : Bid\'ah Hasana PERMISE si : a) CONTENU licite : récit Seerah, lecture Coran, Salawat bénédictions sur Prophète, charité, b) PAS violations Shariah : mixité hommes/femmes, musique instruments Haram, danses, exagération statut Prophète au-delà humain, c) INTENTION : amour Prophète + réjouissance naissance miséricorde humanité Coran 21:107 "Nous t\'envoyâmes que miséricorde mondes". CONSENSUS : célébrer ≠ \'Ibadah obligatoire, modération requise.',
      ar: 'خلاف تاريخي: 1) الأصل: المولد بدأ القرن السادس الهجري الفاطميون مصر ثم انتشر بصلاح الدين؛ لم يُحتفل به زمن النبي ﷺ، الصحابة، السلف الصالح = بدعة، 2) موقف ابن تيمية/السلفي: بدعة مرفوضة - الحجة: أ) "خير القرون لم يفعلوا" (لو كان خيراً لفعله الصحابة)، ب) النبي نهى "لا تطروني كما أطرت النصارى ابن مريم"، ج) خطر البدعة تؤدي للغلو (بعضهم يدعو النبي كما المسيحيون يصلون لعيسى = غلو)، 3) موقف الشافعي/المالكي الحديث (السيوطي، القرضاوي): بدعة حسنة جائزة إن: أ) المحتوى مباح: سرد السيرة، قراءة القرآن، الصلاة على النبي، الصدقة، ب) لا مخالفات للشريعة: الاختلاط، الموسيقى الآلات الحرام، الرقص، المبالغة في منزلة النبي فوق البشر، ج) النية: محبة النبي + الفرح بميلاد رحمة البشرية القرآن 21:107 "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ". الإجماع: الاحتفال ≠ عبادة واجبة، الاعتدال مطلوب.',
      en: 'HISTORICAL DEBATE: 1) ORIGIN: Mawlid began 6th Hijri century Fatimids Egypt then popularized Saladin; not celebrated Prophet ﷺ, Sahaba, Salaf Salih time = BID\'AH innovation, 2) IBN TAYMIYYAH/SALAFI POSITION: rejected Bid\'ah - argument: a) "Best generations did not do" (if good, Sahaba would have done), b) Prophet forbade "do not exaggerate my matter like Christians exaggerated Isa", c) Risk innovation leads excess (some invoke Prophet like Christians pray Jesus = Ghuluww exaggeration), 3) MODERN SHAFI\'I/MALIKI POSITION (Suyuti, Qaradawi): Bid\'ah Hasana PERMITTED if: a) LICIT CONTENT: Seerah recitation, Quran reading, Salawat blessings on Prophet, charity, b) NO Shariah violations: men/women mixity, Haram instrument music, dances, exaggerating Prophet status beyond human, c) INTENTION: Prophet love + rejoicing birth mercy humanity Quran 21:107 "We sent you only mercy worlds". CONSENSUS: celebrating ≠ obligatory \'Ibadah, moderation required.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'soufisme',
  },
  {
    id: 'aqeedah-soufisme-003',
    question: {
      fr: 'Quelle est la position islamique sur la visite des tombes et l\'invocation des morts ?',
      ar: 'ما الموقف الإسلامي من زيارة القبور ودعاء الأموات؟',
      en: 'What is the Islamic position on visiting graves and invoking the dead?',
    },
    options: [
      { id: 'a', text: { fr: 'Visite tombes et invocation morts toujours permises', ar: 'زيارة القبور ودعاء الأموات دائماً مباحة', en: 'Visiting graves and invoking dead always permitted' } },
      { id: 'b', text: { fr: 'VISITE tombes : Sunnah rappel mort/Akhira, Du\'a POUR morts. INVOQUER morts (demander aide/intercession) : Shirk Akbar majorité - mort impuissant, Allah Seul exauce', ar: 'زيارة القبور: سنة للتذكير بالموت/الآخرة، الدعاء للأموات. دعاء الأموات (طلب المساعدة/الشفاعة): شرك أكبر عند الجمهور - الميت عاجز، الله وحده يستجيب', en: 'VISITING graves: Sunnah reminder death/Akhira, Du\'a FOR dead. INVOKING dead (asking help/intercession): Shirk Akbar majority - dead powerless, Allah Alone answers' } },
      { id: 'c', text: { fr: 'Visite tombes totalement interdite', ar: 'زيارة القبور محرمة تماماً', en: 'Visiting graves totally forbidden' } },
      { id: 'd', text: { fr: 'Morts peuvent exaucer prières', ar: 'الأموات يمكنهم إجابة الدعاء', en: 'Dead can answer prayers' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'DISTINCTION CRITIQUE : 1) VISITE TOMBES = SUNNAH : Prophète ﷺ "J\'interdisais visite tombes, maintenant visitez-les car elles rappellent Akhira" (Muslim) ; ÉTIQUETTE : a) Du\'a POUR mort "As-Salamu \'alaykum habitants tombes croyants...qu\'Allah pardonne nous et vous", b) Rappel mort/humilité/préparation Akhira, c) PAS s\'asseoir/marcher sur tombes (Makruh), 2) INVOQUER MORTS = SHIRK : demander mort "Ô Prophète guéris-moi" ou "Ô Wali accorde-moi enfant" = SHIRK AKBAR majorité : a) Coran 35:13-14 "ceux invoquez en dehors Allah...ne vous entendent pas si entendaient ne répondraient pas Jour Jugement désavoueront votre association", b) Du\'a = \'Ibadah adoration exclusive Allah 40:60 "Invoquez-Moi J\'exauce", c) Mort = MAYYIT impuissant ne possède rien n\'entend pas invocations ; Prophète vivant entendait mais mort non, 3) EXCEPTION : Salat/Salam sur Prophète ﷺ spécial transmis par anges. RÈGLE : invoquer ALLAH pour mort permis, invoquer MORT directement Shirk.',
      ar: 'التمييز الحاسم: 1) زيارة القبور = سنة: النبي ﷺ "كنت نهيتكم عن زيارة القبور، ألا فزوروها فإنها تذكركم الآخرة" (مسلم)؛ الآداب: أ) الدعاء للميت "السلام عليكم أهل الديار من المؤمنين...يرحم الله المستقدمين منا ومنكم"، ب) تذكر الموت/التواضع/الاستعداد للآخرة، ج) لا الجلوس/المشي على القبور (مكروه)، 2) دعاء الأموات = شرك: سؤال الميت "يا نبي اشفني" أو "يا ولي ارزقني ولداً" = شرك أكبر عند الجمهور: أ) القرآن 35:13-14 "وَالَّذِينَ تَدْعُونَ مِن دُونِ اللَّهِ...لَا يَسْمَعُونَ دُعَاءَكُمْ وَلَوْ سَمِعُوا مَا اسْتَجَابُوا لَكُمْ وَيَوْمَ الْقِيَامَةِ يَكْفُرُونَ بِشِرْكِكُمْ"، ب) الدعاء = عبادة خاصة بالله 40:60 "ادْعُونِي أَسْتَجِبْ لَكُمْ"، ج) الميت = عاجز لا يملك شيئاً لا يسمع الدعاء؛ النبي حياً كان يسمع لكن بعد الموت لا، 3) استثناء: الصلاة/السلام على النبي ﷺ خاصة تُبلّغ بالملائكة. القاعدة: دعاء الله للميت جائز، دعاء الميت مباشرة شرك.',
      en: 'CRITICAL DISTINCTION: 1) VISITING GRAVES = SUNNAH: Prophet ﷺ "I forbade you visit graves, now visit them for they remind Akhira" (Muslim); ETIQUETTE: a) Du\'a FOR dead "Peace upon you inhabitants graves believers...may Allah forgive us and you", b) Reminder death/humility/preparation Akhira, c) NOT sit/walk on graves (Makruh), 2) INVOKING DEAD = SHIRK: asking dead "O Prophet heal me" or "O Wali grant me child" = SHIRK AKBAR majority: a) Quran 35:13-14 "those you invoke besides Allah...do not hear you if heard would not respond Day Judgment will disavow your association", b) Du\'a = \'Ibadah worship exclusive Allah 40:60 "Call Me I answer", c) Dead = MAYYIT powerless possesses nothing does not hear invocations; Prophet alive heard but dead no, 3) EXCEPTION: Salat/Salam upon Prophet ﷺ special transmitted by angels. RULE: invoking ALLAH for dead permitted, invoking DEAD directly Shirk.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'soufisme',
  },
  {
    id: 'aqeedah-soufisme-004',
    question: {
      fr: 'Quelle est la position sur le Dhikr collectif à voix haute pratiqué par certaines Tariqas soufies ?',
      ar: 'ما الموقف من الذكر الجماعي بصوت عالٍ الذي تمارسه بعض الطرق الصوفية؟',
      en: 'What is the position on collective Dhikr aloud practiced by some Sufi Tariqas?',
    },
    options: [
      { id: 'a', text: { fr: 'Unanimement obligatoire Wajib', ar: 'واجب بالإجماع', en: 'Unanimously obligatory Wajib' } },
      { id: 'b', text: { fr: 'Débat : Hanafi/Shafi\'i permettent si pas perturbation/innovations (danses excessives, cris) ; Salafi préfèrent individuel silencieux - argument : Sahaba faisaient Dhikr calmement', ar: 'خلاف: الحنفي/الشافعي يجيزون إن لم يكن إزعاج/بدع (رقصات مفرطة، صراخ)؛ السلفي يفضل الفردي الخفي - الحجة: الصحابة ذكروا بهدوء', en: 'Debate: Hanafi/Shafi\'i permit if no disturbance/innovations (excessive dances, screaming); Salafi prefer individual silent - argument: Sahaba did Dhikr calmly' } },
      { id: 'c', text: { fr: 'Shirk Akbar consensus', ar: 'شرك أكبر بالإجماع', en: 'Shirk Akbar consensus' } },
      { id: 'd', text: { fr: 'Seule forme Dhikr valide', ar: 'الشكل الوحيد الصحيح للذكر', en: 'Only valid Dhikr form' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'DÉBAT MÉTHODOLOGIQUE : 1) DHIKR = FONDEMENT : rappel Allah Coran 33:41 "Ô croyants invoquez Allah invocation abondante" - SUNNAH fortement recommandée tous musulmans ; formules : Subhanallah, Alhamdulillah, Allahu Akbar, La ilaha illallah, Istighfar, 2) POSITION HANAFI/SHAFI\'I/MALIKI traditionnelle : Dhikr COLLECTIF À VOIX HAUTE permis si : a) CONTENU licite : noms Allah, formules prophétiques authentiques, pas inventions, b) PAS perturbation : pas crier excessivement déranger mosquée/voisins, c) PAS innovations extrêmes : danses tournoyantes violentes (Derviches tourneurs débat), automutilation (Rifai frappent corps = Haram), états extatiques perdre conscience, d) PREUVES : Prophète encouragea Dhikr voix audible certaines occasions ; Omar entendit Dhikr Abu Musa voix haute loua (Bukhari), 3) POSITION SALAFI : préfèrent Dhikr INDIVIDUEL SILENCIEUX : a) Coran 7:205 "Invoque Seigneur en toi-même humilité crainte, voix modérée", b) Sahaba faisaient Dhikr généralement calme pas cérémonies organisées, c) Dhikr collectif ritualisé = Bid\'ah innovation non-existante Salaf, 4) CONSENSUS : Dhikr licite quelle que forme si respecte Shariah, excès évités.',
      ar: 'خلاف منهجي: 1) الذكر = أساس: ذكر الله القرآن 33:41 "يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا" - سنة مستحبة لكل المسلمين؛ الصيغ: سبحان الله، الحمد لله، الله أكبر، لا إله إلا الله، الاستغفار، 2) الموقف الحنفي/الشافعي/المالكي التقليدي: الذكر الجماعي بصوت عالٍ جائز إن: أ) المحتوى مباح: أسماء الله، صيغ نبوية صحيحة، لا اختراعات، ب) لا إزعاج: لا الصراخ المفرط إزعاج المسجد/الجيران، ج) لا بدع متطرفة: الرقصات الدورانية العنيفة (الدراويش الدوارون خلاف)، إيذاء النفس (الرفاعيون يضربون الجسم = حرام)، الحالات النشوية فقدان الوعي، د) الأدلة: النبي شجع الذكر بصوت مسموع بعض المناسبات؛ عمر سمع ذكر أبي موسى بصوت عالٍ فأثنى عليه (البخاري)، 3) الموقف السلفي: يفضل الذكر الفردي الخفي: أ) القرآن 7:205 "وَاذْكُر رَّبَّكَ فِي نَفْسِكَ تَضَرُّعًا وَخِيفَةً وَدُونَ الْجَهْرِ"، ب) الصحابة ذكروا عموماً بهدوء ليس احتفالات منظمة، ج) الذكر الجماعي الطقسي = بدعة غير موجودة عند السلف، 4) الإجماع: الذكر مباح أي شكل إن احترم الشريعة، تُجنب المبالغات.',
      en: 'METHODOLOGICAL DEBATE: 1) DHIKR = FOUNDATION: Allah remembrance Quran 33:41 "O believers remember Allah abundant remembrance" - SUNNAH highly recommended all Muslims; formulas: Subhanallah, Alhamdulillah, Allahu Akbar, La ilaha illallah, Istighfar, 2) HANAFI/SHAFI\'I/MALIKI traditional POSITION: COLLECTIVE DHIKR ALOUD permitted if: a) LICIT CONTENT: Allah names, authentic prophetic formulas, not inventions, b) NO disturbance: not scream excessively disturb mosque/neighbors, c) NO extreme innovations: violent whirling dances (Whirling Dervishes debate), self-mutilation (Rifai strike bodies = Haram), ecstatic states losing consciousness, d) PROOFS: Prophet encouraged Dhikr audible voice certain occasions; Omar heard Dhikr Abu Musa loud voice praised (Bukhari), 3) SALAFI POSITION: prefer INDIVIDUAL SILENT DHIKR: a) Quran 7:205 "Remember Lord in yourself humility fear, moderate voice", b) Sahaba did Dhikr generally calm not organized ceremonies, c) Ritualized collective Dhikr = Bid\'ah innovation non-existent Salaf, 4) CONSENSUS: Dhikr licit whatever form if respects Shariah, excesses avoided.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'soufisme',
  },
  {
    id: 'aqeedah-soufisme-005',
    question: {
      fr: 'Quelle est la différence entre Tariqas soufies orthodoxes et déviations extrêmes ?',
      ar: 'ما الفرق بين الطرق الصوفية الأرثوذكسية والانحرافات المتطرفة؟',
      en: 'What is the difference between orthodox Sufi Tariqas and extreme deviations?',
    },
    options: [
      { id: 'a', text: { fr: 'Toutes Tariqas sont orthodoxes', ar: 'كل الطرق أرثوذكسية', en: 'All Tariqas are orthodox' } },
      { id: 'b', text: { fr: 'ORTHODOXES (Qadiriyya, Naqshbandiyya) : Tazkiyah purification âme, Dhikr, respect Shariah stricte. DÉVIATIONS : Hulul/Ittihad (union divine = Shirk), invoquer Shaykh comme Allah, négliger Salat/Siyam', ar: 'الأرثوذكسية (القادرية، النقشبندية): تزكية النفس، الذكر، احترام الشريعة صارم. الانحرافات: الحلول/الاتحاد (الاتحاد الإلهي = شرك)، دعاء الشيخ كالله، إهمال الصلاة/الصيام', en: 'ORTHODOX (Qadiriyya, Naqshbandiyya): Tazkiyah soul purification, Dhikr, strict Shariah respect. DEVIATIONS: Hulul/Ittihad (divine union = Shirk), invoking Shaykh like Allah, neglecting Salat/Siyam' } },
      { id: 'c', text: { fr: 'Toutes Tariqas sont Shirk', ar: 'كل الطرق شرك', en: 'All Tariqas are Shirk' } },
      { id: 'd', text: { fr: 'Shariah non-applicable aux Soufis', ar: 'الشريعة غير واجبة على الصوفية', en: 'Shariah not applicable to Sufis' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'SOUFISME = SPECTRE large : 1) ORTHODOXE (Tasawwuf Sunni) : EXEMPLES - Qadiriyya (Abdul Qadir Jilani), Naqshbandiyya, Shadhiliyya ; PRATIQUES : a) TAZKIYAH purification âme combattre nafs désirs bas, b) DHIKR abondant noms Allah avec adab respect, c) ADAB prophétique : amour Prophète ﷺ sans exagération, d) RESPECT SHARIAH STRICTE : Salat, Siyam, Zakat obligatoires ; Shaykh guide spirituel enseigne Coran/Sunnah, e) \'ILMIYYAH : savants respectés (Ghazali "Ihya Ulum ad-Din", Nawawi, Ibn Ataillah) combinaient Fiqh + Tasawwuf ; consensus : soufisme authentique = Ihsan excellence adoration Hadith Jibril "adorer Allah comme Le voir", 2) DÉVIATIONS EXTRÊMES (rejetées Ahl Sunnah) : a) HULUL/ITTIHAD : croire union/incarnation divine ("Je suis Allah" Hallaj exécuté) = SHIRK AKBAR, b) WAHDAT AL-WUJUD mal compris : panthéisme "tout est Dieu" (Ibn Arabi controversé), c) INVOQUER SHAYKH : demander Shaykh mort "Ô Shaykh accorde-moi" = Shirk ; orthodoxes invoquent Allah uniquement, d) NÉGLIGER SHARIAH : "arrivé à Haqiqah vérité, Shariah plus nécessaire" = KUFR ; Coran 33:21 "Prophète modèle excellent", e) PRATIQUES interdites : danses/musique Haram, états extatiques perdre raison, automutilation. CLEF : soufisme = moyen purification spirituelle SI conforme Coran/Sunnah.',
      ar: 'التصوف = طيف واسع: 1) الأرثوذكسي (التصوف السني): أمثلة - القادرية (عبد القادر الجيلاني)، النقشبندية، الشاذلية؛ الممارسات: أ) التزكية تطهير النفس مجاهدة النفس الأمارة، ب) الذكر الوفير لأسماء الله بأدب، ج) الأدب النبوي: محبة النبي ﷺ بلا غلو، د) احترام الشريعة صارم: الصلاة، الصيام، الزكاة واجبة؛ الشيخ المرشد الروحي يعلم القرآن/السنة، هـ) العلمية: علماء محترمون (الغزالي "إحياء علوم الدين"، النووي، ابن عطاء الله) جمعوا الفقه + التصوف؛ إجماع: التصوف الأصيل = الإحسان إتقان العبادة حديث جبريل "أن تعبد الله كأنك تراه"، 2) الانحرافات المتطرفة (مرفوضة أهل السنة): أ) الحلول/الاتحاد: الاعتقاد بالاتحاد/التجسد الإلهي ("أنا الله" الحلاج أُعدم) = شرك أكبر، ب) وحدة الوجود المفهومة خطأً: وحدة الأديان "كل شيء هو الله" (ابن عربي مثير جدل)، ج) دعاء الشيخ: سؤال الشيخ الميت "يا شيخ ارزقني" = شرك؛ الأرثوذكس يدعون الله فقط، د) إهمال الشريعة: "وصلت إلى الحقيقة، الشريعة لم تعد ضرورية" = كفر؛ القرآن 33:21 "لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ"، هـ) الممارسات المحرمة: الرقصات/الموسيقى الحرام، الحالات النشوية فقدان العقل، إيذاء النفس. المفتاح: التصوف = وسيلة التطهير الروحي إن وافق القرآن/السنة.',
      en: 'SUFISM = broad SPECTRUM: 1) ORTHODOX (Tasawwuf Sunni): EXAMPLES - Qadiriyya (Abdul Qadir Jilani), Naqshbandiyya, Shadhiliyya; PRACTICES: a) TAZKIYAH soul purification combat nafs base desires, b) ABUNDANT DHIKR Allah names with adab respect, c) PROPHETIC ADAB: Prophet ﷺ love without exaggeration, d) STRICT SHARIAH RESPECT: Salat, Siyam, Zakat obligatory; Shaykh spiritual guide teaches Quran/Sunnah, e) \'ILMIYYAH: respected scholars (Ghazali "Ihya Ulum ad-Din", Nawawi, Ibn Ataillah) combined Fiqh + Tasawwuf; consensus: authentic Sufism = Ihsan excellence worship Hadith Jibril "worship Allah as if you see Him", 2) EXTREME DEVIATIONS (rejected Ahl Sunnah): a) HULUL/ITTIHAD: believing divine union/incarnation ("I am Allah" Hallaj executed) = SHIRK AKBAR, b) WAHDAT AL-WUJUD misunderstood: pantheism "all is God" (Ibn Arabi controversial), c) INVOKING SHAYKH: asking dead Shaykh "O Shaykh grant me" = Shirk; orthodox invoke Allah only, d) NEGLECTING SHARIAH: "reached Haqiqah truth, Shariah no longer necessary" = KUFR; Quran 33:21 "Prophet excellent model", e) FORBIDDEN practices: Haram dances/music, ecstatic states losing reason, self-mutilation. KEY: Sufism = means spiritual purification IF conforms Quran/Sunnah.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'soufisme',
  },
];

// ============================================
// PHASE 3B - Questions Sectes Théologiques
// ============================================

const sectesTheologiquesQuestions: ExamQuestion[] = [
  {
    id: 'aqeedah-sectes-001',
    question: {
      fr: 'Qui étaient les Mu\'tazilites et pourquoi ont-ils été rejetés par Ahl as-Sunnah ?',
      ar: 'من كانت المعتزلة ولماذا رفضهم أهل السنة؟',
      en: 'Who were the Mu\'tazilites and why were they rejected by Ahl as-Sunnah?',
    },
    options: [
      { id: 'a', text: { fr: 'Groupe orthodoxe principal Islam', ar: 'جماعة أرثوذكسية رئيسية في الإسلام', en: 'Main orthodox group Islam' } },
      { id: 'b', text: { fr: 'Rationalistes extrêmes : raison AVANT révélation, Coran créé (pas Kalam Allah), nient attributs divins (anthropomorphisme). Rejetés car priorité \'Aql sur Naql', ar: 'عقلانيون متطرفون: العقل قبل الوحي، القرآن مخلوق (ليس كلام الله)، ينكرون الصفات الإلهية (التشبيه). رُفضوا لأولوية العقل على النقل', en: 'Extreme rationalists: reason BEFORE revelation, Quran created (not Kalam Allah), deny divine attributes (anthropomorphism). Rejected for \'Aql priority over Naql' } },
      { id: 'c', text: { fr: 'Fondateurs Ahl Sunnah', ar: 'مؤسسو أهل السنة', en: 'Founders Ahl Sunnah' } },
      { id: 'd', text: { fr: 'Compagnons du Prophète', ar: 'صحابة النبي', en: 'Companions of Prophet' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: '5 PRINCIPES Mu\'tazilah (\'Ilm al-Kalam rationaliste) : 1) \'ADL JUSTICE : Allah OBLIGÉ faire justice selon raison humaine - Ahl Sunnah : Allah fait ce veut, définit Lui-même bien/mal pas obligé, 2) TAWHID extrême : NÉGATION attributs divins (Vue, Ouïe, Main) car "ressemblance créatures" - Ahl Sunnah : "Allah a attributs sans comment (Bila Kayf) ni ressemblance (Bila Tashbih)" Coran 42:11 "Rien semblable Lui et Il Audient Voyant", 3) CORAN CRÉÉ : Kalam Allah créé temporel pas éternel - Ahl Sunnah : Coran Kalam Allah INCRÉÉ éternel attribut divin ; Mihnah Inquisition \'Abbasside (218H) tortura savants (Imam Ahmad refusa dire Coran créé - emprisonné), 4) RAISON > RÉVÉLATION : \'Aql juge Wahiy si raison contredit texte, interprétation métaphorique - Ahl Sunnah : Révélation source première, raison comprend pas juge, 5) MANZILAH BAYNA MANZILATAYN : pécheur majeur ni Mu\'min ni Kafir = "position intermédiaire" - Ahl Sunnah : pécheur musulman désobéissant pas Kafir. REJET : priorité raison affaiblit autorité textes.',
      ar: '5 أصول المعتزلة (علم الكلام العقلاني): 1) العدل: الله ملزم بالعدل حسب العقل البشري - أهل السنة: الله يفعل ما يشاء، يحدد هو الخير/الشر لا ملزم، 2) التوحيد المتطرف: إنكار الصفات الإلهية (البصر، السمع، اليد) لأنها "تشبيه بالمخلوقات" - أهل السنة: "لله صفات بلا كيف ولا تشبيه" القرآن 42:11 "لَيْسَ كَمِثْلِهِ شَيْءٌ ۖ وَهُوَ السَّمِيعُ الْبَصِيرُ"، 3) القرآن مخلوق: كلام الله مخلوق زماني ليس أزلياً - أهل السنة: القرآن كلام الله غير مخلوق أزلي صفة إلهية؛ المحنة التفتيش العباسي (218هـ) عذب العلماء (الإمام أحمد رفض القول بخلق القرآن - سُجن)، 4) العقل > الوحي: العقل يحكم على الوحي إن خالف العقل النص، التأويل المجازي - أهل السنة: الوحي المصدر الأول، العقل يفهم لا يحكم، 5) المنزلة بين المنزلتين: العاصي الكبير لا مؤمن ولا كافر = "منزلة وسطى" - أهل السنة: العاصي مسلم عاصٍ ليس كافراً. الرفض: أولوية العقل تضعف سلطة النصوص.',
      en: '5 MU\'TAZILITE PRINCIPLES (rationalist \'Ilm al-Kalam): 1) \'ADL JUSTICE: Allah OBLIGATED to do justice according human reason - Ahl Sunnah: Allah does what He wills, defines Himself good/evil not obligated, 2) EXTREME TAWHID: DENIAL divine attributes (Sight, Hearing, Hand) because "resemblance creatures" - Ahl Sunnah: "Allah has attributes without how (Bila Kayf) nor resemblance (Bila Tashbih)" Quran 42:11 "Nothing like Him and He All-Hearing All-Seeing", 3) QURAN CREATED: Allah\'s Kalam created temporal not eternal - Ahl Sunnah: Quran Allah\'s Kalam UNCREATED eternal divine attribute; Mihnah Inquisition \'Abbasid (218H) tortured scholars (Imam Ahmad refused say Quran created - imprisoned), 4) REASON > REVELATION: \'Aql judges Wahiy if reason contradicts text, metaphorical interpretation - Ahl Sunnah: Revelation primary source, reason understands not judges, 5) MANZILAH BAYNA MANZILATAYN: major sinner neither Mu\'min nor Kafir = "intermediary position" - Ahl Sunnah: sinner Muslim disobedient not Kafir. REJECTION: reason priority weakens texts authority.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'sectes-theologiques',
  },
  {
    id: 'aqeedah-sectes-002',
    question: {
      fr: 'Quelle est la différence entre école Ash\'arite et école Atharite sur les attributs d\'Allah ?',
      ar: 'ما الفرق بين المدرسة الأشعرية والأثرية في صفات الله؟',
      en: 'What is the difference between Ash\'arite and Atharite school on Allah\'s attributes?',
    },
    options: [
      { id: 'a', text: { fr: 'Aucune différence - identiques', ar: 'لا فرق - متطابقتان', en: 'No difference - identical' } },
      { id: 'b', text: { fr: 'ASH\'ARI : attributs "Main/Istiwa" interprétés métaphoriquement (Ta\'wil : Main = Puissance, Istiwa = Domination). ATHARI : Bila Kayf sans interprétation - affirmer attributs textuellement sans demander comment', ar: 'الأشعري: الصفات "اليد/الاستواء" تُفسّر مجازياً (التأويل: اليد = القدرة، الاستواء = الهيمنة). الأثري: بلا كيف بلا تأويل - إثبات الصفات نصياً بلا السؤال كيف', en: 'ASH\'ARI: attributes "Hand/Istiwa" interpreted metaphorically (Ta\'wil: Hand = Power, Istiwa = Domination). ATHARI: Bila Kayf without interpretation - affirm attributes textually without asking how' } },
      { id: 'c', text: { fr: 'Ash\'ari nie tous attributs', ar: 'الأشعري ينكر كل الصفات', en: 'Ash\'ari denies all attributes' } },
      { id: 'd', text: { fr: 'Athari anthropomorphiste total', ar: 'الأثري مشبّه كامل', en: 'Athari total anthropomorphist' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: '2 ÉCOLES orthodoxes Ahl Sunnah : 1) ASH\'ARISME (Abu al-Hasan al-Ash\'ari 324H) : MODÉRÉ entre Mu\'tazilah/Salaf : a) ATTRIBUTS ESSENTIELS (Sifat Dhatiyyah) : Vie, Science, Puissance, Volonté, Ouïe, Vue, Parole = RÉELS pas métaphores, b) ATTRIBUTS "PROBLÉMATIQUES" : "Yad Main", "Istiwa établissement Trône", "Wajh Visage" → interprétation métaphorique TA\'WIL : Main = Puissance/Bienfaisance, Istiwa = Domination/Contrôle (pas asseoir physique), Wajh = Essence, c) RAISON : éviter Tashbih anthropomorphisme corporel ; Coran 42:11 "Rien semblable Lui", d) MAJORITÉ : Shafi\'is, Malikis, Hanafis suivent Ash\'arisme/Maturidisme similaire, 2) ATHARISME (Salaf Salih - Ahmad ibn Hanbal, Ibn Taymiyyah) : LITTÉRALISME MODÉRÉ : a) BILA KAYF : affirmer attributs COMME VENUS textes SANS demander COMMENT ni INTERPRÉTER métaphoriquement - "Main" = Main Allah différente mains créatures sans savoir comment, b) BILA TASHBIH : refuser ressemblance créatures, c) TAFWID : déléguer connaissance modalité à Allah seul, d) ARGUMENT : Sahaba récitaient versets attributs sans Ta\'wil ; Ta\'wil ouvre porte négation. CONSENSUS : REJETER anthropomorphisme corporel ET négation attributs (Mu\'tazilah).',
      ar: 'مدرستان أرثوذكسيتان أهل السنة: 1) الأشعرية (أبو الحسن الأشعري 324هـ): معتدل بين المعتزلة/السلف: أ) الصفات الذاتية: الحياة، العلم، القدرة، الإرادة، السمع، البصر، الكلام = حقيقية ليست مجازات، ب) الصفات "الإشكالية": "يد"، "استوى على العرش"، "وجه" → التأويل المجازي: اليد = القدرة/الإنعام، الاستواء = الهيمنة/السيطرة (ليس جلوساً مادياً)، الوجه = الذات، ج) السبب: تجنب التشبيه الجسماني؛ القرآن 42:11 "لَيْسَ كَمِثْلِهِ شَيْءٌ"، د) الأغلبية: الشافعية، المالكية، الحنفية يتبعون الأشعرية/الماتريدية المشابهة، 2) الأثرية (السلف الصالح - أحمد بن حنبل، ابن تيمية): الحرفية المعتدلة: أ) بلا كيف: إثبات الصفات كما جاءت في النصوص بلا السؤال كيف ولا التأويل المجازي - "يد" = يد الله مختلفة عن أيدي المخلوقات بلا معرفة كيف، ب) بلا تشبيه: رفض التشبيه بالمخلوقات، ج) التفويض: تفويض معرفة الكيفية لله وحده، د) الحجة: الصحابة تلوا آيات الصفات بلا تأويل؛ التأويل يفتح باب النفي. الإجماع: رفض التشبيه الجسماني ونفي الصفات (المعتزلة).',
      en: '2 ORTHODOX schools Ahl Sunnah: 1) ASH\'ARISM (Abu al-Hasan al-Ash\'ari 324H): MODERATE between Mu\'tazilah/Salaf: a) ESSENTIAL ATTRIBUTES (Sifat Dhatiyyah): Life, Knowledge, Power, Will, Hearing, Sight, Speech = REAL not metaphors, b) "PROBLEMATIC" ATTRIBUTES: "Yad Hand", "Istiwa establishment Throne", "Wajh Face" → metaphorical interpretation TA\'WIL: Hand = Power/Beneficence, Istiwa = Domination/Control (not physical sitting), Wajh = Essence, c) REASON: avoid Tashbih corporeal anthropomorphism; Quran 42:11 "Nothing like Him", d) MAJORITY: Shafi\'is, Malikis, Hanafis follow Ash\'arism/similar Maturidism, 2) ATHARISM (Salaf Salih - Ahmad ibn Hanbal, Ibn Taymiyyah): MODERATE LITERALISM: a) BILA KAYF: affirm attributes AS CAME texts WITHOUT asking HOW nor INTERPRETING metaphorically - "Hand" = Allah\'s Hand different creatures\' hands without knowing how, b) BILA TASHBIH: refuse resemblance creatures, c) TAFWID: delegate knowledge modality to Allah alone, d) ARGUMENT: Sahaba recited attributes verses without Ta\'wil; Ta\'wil opens door negation. CONSENSUS: REJECT corporeal anthropomorphism AND attributes negation (Mu\'tazilah).',
    },
    points: 3,
    difficulty: 'hard',
    category: 'sectes-theologiques',
  },
  {
    id: 'aqeedah-sectes-003',
    question: {
      fr: 'Qui étaient les Qadarites et quelle était leur croyance rejetée ?',
      ar: 'من كانت القدرية وما كان معتقدهم المرفوض؟',
      en: 'Who were the Qadarites and what was their rejected belief?',
    },
    options: [
      { id: 'a', text: { fr: 'Croyaient Qadar prédestination stricte', ar: 'آمنوا بالقدر المطلق', en: 'Believed strict Qadar predestination' } },
      { id: 'b', text: { fr: 'NIAIENT Qadar - libre arbitre ABSOLU humain, Allah ne créa pas actes serviteurs. Prophète ﷺ : "Majus de cette Ummah" (zoroastriens dualistes). Rejetés car négation Qadar = Kufr', ar: 'أنكروا القدر - حرية إرادة مطلقة للإنسان، الله لم يخلق أفعال العباد. النبي ﷺ: "مجوس هذه الأمة" (زرادشتيون ثنائيون). رُفضوا لأن إنكار القدر = كفر', en: 'DENIED Qadar - ABSOLUTE human free will, Allah did not create servants acts. Prophet ﷺ: "Majus of this Ummah" (dualist Zoroastrians). Rejected because Qadar denial = Kufr' } },
      { id: 'c', text: { fr: 'Groupe orthodoxe principal', ar: 'جماعة أرثوذكسية رئيسية', en: 'Main orthodox group' } },
      { id: 'd', text: { fr: 'Croyaient au Jabriyyah fatalisme', ar: 'آمنوا بالجبرية', en: 'Believed in Jabriyyah fatalism' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'QADARIYYAH (1er siècle Hijri) = négateurs Qadar : 1) CROYANCE : HOMME CRÉE SES ACTES - libre arbitre absolu indépendant Allah ; Allah ne créa pas actes bien/mal humains, connaît pas futur (connaissance après événement) sinon pas libre arbitre ; argument : "comment Allah punit actes qu\'Il créa?" → injustice, 2) RÉFUTATION Ahl Sunnah : a) CORAN : 37:96 "Allah vous créa et ce que vous faites", 54:49 "Toute chose Nous créâmes selon mesure", 8:17 "Tu ne lanças pas quand lançais mais Allah lança", b) HADITH : "Deux groupes Ummah n\'auront part [Islam] : Qadariyyah et Murji\'ah" (Abu Dawud) ; "Qadariyyah sont Majus zoroastriens cette Ummah" (Ahmad) car dualisme - créateur bien (homme) + créateur mal (homme), c) IMAN : croire 6 piliers Qadar OBLIGATOIRE : \'Ilm connaissance éternelle Allah, Kitabah écriture Lawh Mahfuz, Mashi\'ah volonté Allah toute chose, Khalq création tous actes, 3) POSITION AHL SUNNAH : ÉQUILIBRE : Allah créa actes serviteurs (Khalq) ET homme a Kasb acquisition/choix responsabilité - pas contradiction ; destinée écrite mais homme ne connaît pas donc agit librement responsable. Qadarites nièrent Qadar = sortir Islam selon majorité.',
      ar: 'القدرية (القرن الأول الهجري) = منكرو القدر: 1) المعتقد: الإنسان يخلق أفعاله - حرية إرادة مطلقة مستقلة عن الله؛ الله لم يخلق أفعال الخير/الشر البشرية، لا يعلم المستقبل (المعرفة بعد الحدث) وإلا لا حرية إرادة؛ الحجة: "كيف يعاقب الله على أفعال خلقها؟" → ظلم، 2) الرد أهل السنة: أ) القرآن: 37:96 "وَاللَّهُ خَلَقَكُمْ وَمَا تَعْمَلُونَ"، 54:49 "إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ"، 8:17 "وَمَا رَمَيْتَ إِذْ رَمَيْتَ وَلَٰكِنَّ اللَّهَ رَمَىٰ"، ب) الحديث: "صنفان من أمتي ليس لهم نصيب: القدرية والمرجئة" (أبو داود)؛ "القدرية مجوس هذه الأمة" (أحمد) لأن الثنائية - خالق الخير (الإنسان) + خالق الشر (الإنسان)، ج) الإيمان: الإيمان بأركان القدر الستة واجب: العلم الأزلي لله، الكتابة في اللوح المحفوظ، المشيئة إرادة الله لكل شيء، الخلق خلق جميع الأفعال، 3) موقف أهل السنة: التوازن: الله خلق أفعال العباد (الخلق) والإنسان له الكسب الاختيار/المسؤولية - لا تناقض؛ القدر مكتوب لكن الإنسان لا يعلمه فيتصرف بحرية مسؤولاً. القدرية أنكروا القدر = الخروج من الإسلام عند الجمهور.',
      en: 'QADARIYYAH (1st Hijri century) = Qadar deniers: 1) BELIEF: MAN CREATES HIS ACTS - absolute free will independent Allah; Allah did not create human good/evil acts, does not know future (knowledge after event) otherwise no free will; argument: "how Allah punish acts He created?" → injustice, 2) AHL SUNNAH REFUTATION: a) QURAN: 37:96 "Allah created you and what you do", 54:49 "Everything We created according measure", 8:17 "You did not throw when threw but Allah threw", b) HADITH: "Two groups Ummah have no share: Qadariyyah and Murji\'ah" (Abu Dawud); "Qadariyyah are Majus Zoroastrians this Ummah" (Ahmad) because dualism - creator good (man) + creator evil (man), c) IMAN: believing 6 Qadar pillars OBLIGATORY: \'Ilm Allah\'s eternal knowledge, Kitabah writing Lawh Mahfuz, Mashi\'ah Allah\'s will everything, Khalq creation all acts, 3) AHL SUNNAH POSITION: BALANCE: Allah created servants acts (Khalq) AND man has Kasb acquisition/choice responsibility - no contradiction; destiny written but man does not know so acts freely responsible. Qadarites denied Qadar = exiting Islam according majority.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'sectes-theologiques',
  },
  {
    id: 'aqeedah-sectes-004',
    question: {
      fr: 'Qui était Jahm ibn Safwan et quelle était sa doctrine déviante (Jahmiyyah) ?',
      ar: 'من كان جهم بن صفوان وما كانت عقيدته المنحرفة (الجهمية)؟',
      en: 'Who was Jahm ibn Safwan and what was his deviant doctrine (Jahmiyyah)?',
    },
    options: [
      { id: 'a', text: { fr: 'Savant orthodoxe respecté', ar: 'عالم أرثوذكسي محترم', en: 'Respected orthodox scholar' } },
      { id: 'b', text: { fr: 'Négation TOUS attributs Allah (Noms ≠ attributs réels) + Jabr fatalisme absolu (homme pas libre) + Panthéisme (Allah = partout matériellement). Unanimement rejeté = proche Kufr', ar: 'إنكار جميع صفات الله (الأسماء ≠ صفات حقيقية) + الجبر المطلق (الإنسان لا حرية) + وحدة الوجود (الله = في كل مكان مادياً). مرفوض بالإجماع = قريب من الكفر', en: 'Negation ALL Allah attributes (Names ≠ real attributes) + Jabr absolute fatalism (man not free) + Pantheism (Allah = everywhere materially). Unanimously rejected = close to Kufr' } },
      { id: 'c', text: { fr: 'Fondateur Ahl Sunnah', ar: 'مؤسس أهل السنة', en: 'Founder Ahl Sunnah' } },
      { id: 'd', text: { fr: 'Compagnon du Prophète', ar: 'صحابي', en: 'Companion of Prophet' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'JAHMIYYAH (Jahm ibn Safwan mort 128H exécuté hérésie) = EXTRÉMISME négation : 4 DOCTRINES déviantes : 1) TA\'TIL : NÉGATION TOTALE attributs Allah - Allah n\'a PAS Science, Puissance, Volonté, Vie, Ouïe, Vue réelles ; "Noms" sont étiquettes vides pas réalités ; conséquence : Allah = néant abstrait ≠ Être réel (proche athéisme) ; Ahl Sunnah : Coran 42:11 "Rien semblable Lui et Il Audient Voyant" prouve attributs réels, 2) JABR ABSOLU : homme = robot zéro libre arbitre ; actes forcés totalement par Allah comme pierre tombe ; conséquence : responsabilité impossible, récompense/punition injustes ; Ibn Taymiyyah réfuta : Coran ordonne/interdit implique capacité choisir, 3) PANTHÉISME (Hulul) : Allah présent PARTOUT matériellement - dans arbres, pierres, créatures ; contredit Coran 11:7 "Trône sur eau" (séparation Créateur/création), 4) IMAN = simple connaissance coeur : actes/paroles PAS partie foi (proche Murji\'ah) ; Ahl Sunnah : Iman = croyance coeur + parole langue + actes membres. CONSENSUS : Jahmiyyah = Kufr selon beaucoup savants (Ahmad ibn Hanbal) car négation Noms/Attributs contredit Coran entier ; secte éteinte mais doctrines influencèrent déviations ultérieures.',
      ar: 'الجهمية (جهم بن صفوان توفي 128هـ أُعدم للزندقة) = التطرف في النفي: 4 عقائد منحرفة: 1) التعطيل: النفي الكامل لصفات الله - الله ليس له علم، قدرة، إرادة، حياة، سمع، بصر حقيقية؛ "الأسماء" مجرد ألقاب فارغة لا حقائق؛ النتيجة: الله = عدم مجرد ≠ كائن حقيقي (قريب من الإلحاد)؛ أهل السنة: القرآن 42:11 "لَيْسَ كَمِثْلِهِ شَيْءٌ ۖ وَهُوَ السَّمِيعُ الْبَصِيرُ" يثبت الصفات الحقيقية، 2) الجبر المطلق: الإنسان = آلة صفر حرية إرادة؛ الأفعال مُجبَرة كلياً من الله كحجر يسقط؛ النتيجة: المسؤولية مستحيلة، الثواب/العقاب ظلم؛ ابن تيمية رد: القرآن يأمر/ينهى يعني القدرة على الاختيار، 3) وحدة الوجود (الحلول): الله موجود في كل مكان مادياً - في الأشجار، الحجارة، المخلوقات؛ يخالف القرآن 11:7 "عَرْشُهُ عَلَى الْمَاءِ" (انفصال الخالق/الخلق)، 4) الإيمان = مجرد المعرفة بالقلب: الأعمال/الأقوال ليست جزءاً من الإيمان (قريب من المرجئة)؛ أهل السنة: الإيمان = اعتقاد القلب + قول اللسان + عمل الجوارح. الإجماع: الجهمية = كفر عند كثير من العلماء (أحمد بن حنبل) لأن نفي الأسماء/الصفات يخالف القرآن كله؛ فرقة منقرضة لكن العقائد أثرت على انحرافات لاحقة.',
      en: 'JAHMIYYAH (Jahm ibn Safwan died 128H executed heresy) = EXTREMISM negation: 4 DEVIANT doctrines: 1) TA\'TIL: TOTAL NEGATION Allah attributes - Allah has NOT real Knowledge, Power, Will, Life, Hearing, Sight; "Names" are empty labels not realities; consequence: Allah = abstract nothingness ≠ real Being (close atheism); Ahl Sunnah: Quran 42:11 "Nothing like Him and He All-Hearing All-Seeing" proves real attributes, 2) ABSOLUTE JABR: man = robot zero free will; acts totally forced by Allah like stone falls; consequence: responsibility impossible, reward/punishment unjust; Ibn Taymiyyah refuted: Quran commands/forbids implies capacity choose, 3) PANTHEISM (Hulul): Allah present EVERYWHERE materially - in trees, stones, creatures; contradicts Quran 11:7 "Throne upon water" (separation Creator/creation), 4) IMAN = simple heart knowledge: acts/words NOT part faith (close Murji\'ah); Ahl Sunnah: Iman = heart belief + tongue speech + limbs acts. CONSENSUS: Jahmiyyah = Kufr according many scholars (Ahmad ibn Hanbal) because Names/Attributes negation contradicts entire Quran; extinct sect but doctrines influenced later deviations.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'sectes-theologiques',
  },
  {
    id: 'aqeedah-sectes-005',
    question: {
      fr: 'Qui étaient les Murji\'ah et quelle était leur erreur concernant la foi (Iman) ?',
      ar: 'من كانت المرجئة وما كان خطؤهم في مسألة الإيمان؟',
      en: 'Who were the Murji\'ah and what was their error concerning faith (Iman)?',
    },
    options: [
      { id: 'a', text: { fr: 'Disaient Iman = croyance coeur uniquement, actes PAS partie foi. Conséquence : pécheur majeur reste Mu\'min complet même abandonne Salat. Rejetés car actes essentiels Iman', ar: 'قالوا الإيمان = اعتقاد القلب فقط، الأعمال ليست جزءاً من الإيمان. النتيجة: العاصي الكبير يبقى مؤمناً كاملاً حتى لو ترك الصلاة. رُفضوا لأن الأعمال أساسية للإيمان', en: 'Said Iman = heart belief only, acts NOT part faith. Consequence: major sinner remains complete Mu\'min even abandons Salat. Rejected because acts essential to Iman' } },
      { id: 'b', text: { fr: 'Disaient actes plus importants que croyance', ar: 'قالوا الأعمال أهم من العقيدة', en: 'Said acts more important than belief' } },
      { id: 'c', text: { fr: 'Groupe orthodoxe principal', ar: 'جماعة أرثوذكسية رئيسية', en: 'Main orthodox group' } },
      { id: 'd', text: { fr: 'Niaient existence Iman', ar: 'أنكروا وجود الإيمان', en: 'Denied existence of Iman' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'MURJI\'AH (littéralement "reporteurs" - reportent jugement pécheurs à Allah) 2ème siècle Hijri : ERREUR IMAN : 1) DÉFINITION FAUSSE : Iman = Tasdiq croyance/conviction coeur UNIQUEMENT ; actes membres (Salat, Zakat, Siyam) + parole langue (Shahada) ≠ PARTIE Iman mais "preuves externes" ; conséquence DANGEREUSE : pécheur majeur (abandonne Salat, commet Zina) reste MU\'MIN COMPLET Iman parfait tant que coeur croit - aucune diminution foi, 2) RÉFUTATION AHL SUNNAH : a) CORAN : 49:14 "Bédouins dirent \'nous avons cru\'. Dis : \'vous n\'avez pas cru mais dites nous sommes soumis\'" - foi ≠ simple parole, 2:8 "Parmi gens qui disent \'nous croyons Allah\' mais ne sont pas croyants" ; 9:11 "s\'ils se repentent, accomplissent Salat, acquittent Zakat alors vos frères en religion" - actes condition fraternité foi, b) HADITH : "Iman 70+ branches : meilleure La ilaha illallah, plus basse ôter nuisance chemin" (Muslim) ; "Iman augmente et diminue" - actes affectent foi, c) CONSENSUS SAHABA : personne abandonnant Salat volontairement sans excuse ≠ Mu\'min complet (débat Kafir ou Fasiq grand pécheur), 3) POSITION AHL SUNNAH : Iman = TROIS piliers INSÉPARABLES : croyance coeur + parole langue + actes membres ; Iman AUGMENTE obéissance et DIMINUE désobéissance. Murji\'ah dangereux car encourage laxisme religieux.',
      ar: 'المرجئة (حرفياً "المؤخرون" - يؤخرون حكم العصاة إلى الله) القرن الثاني الهجري: خطأ الإيمان: 1) التعريف الخاطئ: الإيمان = التصديق الاعتقاد/القناعة بالقلب فقط؛ أعمال الجوارح (الصلاة، الزكاة، الصيام) + قول اللسان (الشهادة) ≠ جزء من الإيمان بل "أدلة خارجية"؛ النتيجة الخطيرة: العاصي الكبير (يترك الصلاة، يزني) يبقى مؤمناً كاملاً بإيمان تام طالما القلب يؤمن - لا نقص في الإيمان، 2) الرد أهل السنة: أ) القرآن: 49:14 "قَالَتِ الْأَعْرَابُ آمَنَّا ۖ قُل لَّمْ تُؤْمِنُوا وَلَٰكِن قُولُوا أَسْلَمْنَا" - الإيمان ≠ مجرد القول، 2:8 "وَمِنَ النَّاسِ مَن يَقُولُ آمَنَّا بِاللَّهِ...وَمَا هُم بِمُؤْمِنِينَ"؛ 9:11 "فَإِن تَابُوا وَأَقَامُوا الصَّلَاةَ وَآتَوُا الزَّكَاةَ فَإِخْوَانُكُمْ فِي الدِّينِ" - الأعمال شرط الأخوة الإيمانية، ب) الحديث: "الإيمان بضع وسبعون شعبة: أعلاها لا إله إلا الله، وأدناها إماطة الأذى عن الطريق" (مسلم)؛ "الإيمان يزيد وينقص" - الأعمال تؤثر على الإيمان، ج) إجماع الصحابة: من ترك الصلاة عمداً بلا عذر ≠ مؤمن كامل (خلاف كافر أو فاسق)، 3) موقف أهل السنة: الإيمان = ثلاثة أركان متلازمة: اعتقاد القلب + قول اللسان + عمل الجوارح؛ الإيمان يزيد بالطاعة وينقص بالمعصية. المرجئة خطير لأنه يشجع التساهل الديني.',
      en: 'MURJI\'AH (literally "postponers" - postpone judgment sinners to Allah) 2nd Hijri century: IMAN ERROR: 1) FALSE DEFINITION: Iman = Tasdiq belief/conviction heart ONLY; limbs acts (Salat, Zakat, Siyam) + tongue speech (Shahada) ≠ PART Iman but "external proofs"; DANGEROUS consequence: major sinner (abandons Salat, commits Zina) remains COMPLETE MU\'MIN perfect Iman as long as heart believes - no faith decrease, 2) AHL SUNNAH REFUTATION: a) QURAN: 49:14 "Bedouins said \'we believed\'. Say: \'you have not believed but say we submitted\'" - faith ≠ simple word, 2:8 "Among people who say \'we believe Allah\' but are not believers"; 9:11 "if they repent, establish Salat, give Zakat then your brothers in religion" - acts condition faith brotherhood, b) HADITH: "Iman 70+ branches: highest La ilaha illallah, lowest remove harm from path" (Muslim); "Iman increases and decreases" - acts affect faith, c) SAHABA CONSENSUS: person abandoning Salat voluntarily without excuse ≠ complete Mu\'min (debate Kafir or Fasiq major sinner), 3) AHL SUNNAH POSITION: Iman = THREE INSEPARABLE pillars: heart belief + tongue speech + limbs acts; Iman INCREASES obedience and DECREASES disobedience. Murji\'ah dangerous because encourages religious laxity.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'sectes-theologiques',
  },
  {
    id: 'aqeedah-sectes-006',
    question: {
      fr: 'Quelles sont les principales différences entre Sunnisme et Chiisme Imamite (Twelvers) ?',
      ar: 'ما الفروق الرئيسية بين السنة والشيعة الإمامية (الاثني عشرية)؟',
      en: 'What are the main differences between Sunnism and Imami Shiism (Twelvers)?',
    },
    options: [
      { id: 'a', text: { fr: 'Aucune différence - identiques', ar: 'لا فرق - متطابقان', en: 'No difference - identical' } },
      { id: 'b', text: { fr: 'CHIITES : 12 Imams infaillibles (Ali→Mahdi caché 874), Taqiyya dissimulation foi permise, rejettent majorité Sahaba (Abu Bakr/Omar/Aisha), sources Hadith différentes. DIFFÉRENCES MAJEURES \'Aqidah et Fiqh', ar: 'الشيعة: 12 إماماً معصوماً (علي→المهدي المختفي 874)، التقية إخفاء الإيمان جائزة، يرفضون أغلبية الصحابة (أبو بكر/عمر/عائشة)، مصادر الحديث مختلفة. فروقات كبرى في العقيدة والفقه', en: 'SHIITES: 12 infallible Imams (Ali→Mahdi hidden 874), Taqiyya faith dissimulation permitted, reject majority Sahaba (Abu Bakr/Omar/Aisha), different Hadith sources. MAJOR differences \'Aqidah and Fiqh' } },
      { id: 'c', text: { fr: 'Différence uniquement politique', ar: 'فرق سياسي فقط', en: 'Political difference only' } },
      { id: 'd', text: { fr: 'Chiites suivent exactement mêmes Hadiths', ar: 'الشيعة يتبعون نفس الأحاديث تماماً', en: 'Shiites follow exactly same Hadiths' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: '7 DIFFÉRENCES MAJEURES Sunnisme vs Chiisme Imamite : 1) IMAMAH : CHIITES : 12 Imams INFAILLIBLES (Ma\'sum) désignés divinement succession Ali → Hassan → Hussayn... → 12ème Mahdi Muhammad al-Mahdi "caché" depuis 874 reviendra fin temps ; Imamat = pilier foi essentiel ; SUNNITES : Califes élus/désignés humainement, NON infaillibles, compétence + justice + Shura, 4 Califes Rashidun (Abu Bakr, Omar, Othman, Ali) tous légitimes, 2) SAHABA : CHIITES : majorité Sahabas apostasièrent après mort Prophète sauf Ali + famille (Ahl Bayt) + quelques fidèles ; rejettent Abu Bakr/Omar/Aisha ; SUNNITES : TOUS Sahaba \'Udul justes honorés Coran 9:100 "premiers Muhajiroun Ansar...Allah agrée eux", 3) SOURCES : CHIITES : Coran + Hadith rapportés par 12 Imams + Ahl Bayt uniquement (collections Kafi, Man La Yahduruhu al-Faqih) ; SUNNITES : Coran + Hadith Bukhari Muslim etc. via Sahaba fiables, 4) TAQIYYA : CHIITES : dissimulation foi PERMISE si danger (dire croire Sunnisme cacher Chiisme) ; SUNNITES : Taqiyya limitée contrainte mort/torture grave uniquement, 5) FIQH : différences prière (mains, Turbah argile Karbala), Mut\'ah mariage temporaire (Chiites Halal, Sunnites Haram), héritage, 6) \'ASHURA : CHIITES : deuil intense Hussayn martyr Karbala (autoflagellation débat) ; SUNNITES : jeûne recommandé pas deuil ritualisé, 7) MAHDI : CHIITES : déjà né 869 caché réapparaîtra ; SUNNITES : viendra futur pas encore né. DIVERGENCES théologiques ET juridiques profondes.',
      ar: '7 فروق كبرى السنة مقابل الشيعة الإمامية: 1) الإمامة: الشيعة: 12 إماماً معصوماً (معصوم) معيّنون إلهياً خلافة علي → حسن → حسين... → 12 المهدي محمد المهدي "مختفٍ" منذ 874 سيعود نهاية الزمان؛ الإمامة = ركن إيمان أساسي؛ السنة: الخلفاء منتخبون/معيّنون بشرياً، غير معصومين، الكفاءة + العدل + الشورى، 4 خلفاء راشدون (أبو بكر، عمر، عثمان، علي) كلهم شرعيون، 2) الصحابة: الشيعة: أغلب الصحابة ارتدوا بعد موت النبي إلا علي + أهل البيت + قلة مخلصة؛ يرفضون أبا بكر/عمر/عائشة؛ السنة: كل الصحابة عدول محترمون القرآن 9:100 "وَالسَّابِقُونَ الْأَوَّلُونَ مِنَ الْمُهَاجِرِينَ وَالْأَنصَارِ...رَّضِيَ اللَّهُ عَنْهُمْ"، 3) المصادر: الشيعة: القرآن + الحديث المروي عن 12 إماماً + أهل البيت فقط (مجموعات الكافي، من لا يحضره الفقيه)؛ السنة: القرآن + الحديث البخاري مسلم إلخ عبر صحابة ثقات، 4) التقية: الشيعة: إخفاء الإيمان جائز إن خطر (قول الإيمان بالسنة إخفاء التشيع)؛ السنة: التقية محدودة للإكراه الموت/التعذيب الشديد فقط، 5) الفقه: اختلافات الصلاة (الأيدي، التربة الحسينية من كربلاء)، المتعة الزواج المؤقت (الشيعة حلال، السنة حرام)، الميراث، 6) عاشوراء: الشيعة: حداد مكثف الحسين شهيد كربلاء (الجلد الذاتي خلاف)؛ السنة: صيام مستحب لا حداد طقسي، 7) المهدي: الشيعة: وُلد بالفعل 869 مختفٍ سيظهر؛ السنة: سيأتي في المستقبل لم يولد بعد. اختلافات لاهوتية وقانونية عميقة.',
      en: '7 MAJOR DIFFERENCES Sunnism vs Imami Shiism: 1) IMAMAH: SHIITES: 12 INFALLIBLE Imams (Ma\'sum) divinely appointed succession Ali → Hassan → Hussayn... → 12th Mahdi Muhammad al-Mahdi "hidden" since 874 will return end times; Imamate = essential faith pillar; SUNNITES: Caliphs elected/appointed humanly, NOT infallible, competence + justice + Shura, 4 Rightly-Guided Caliphs (Abu Bakr, Omar, Othman, Ali) all legitimate, 2) SAHABA: SHIITES: majority Companions apostatized after Prophet death except Ali + family (Ahl Bayt) + few faithful; reject Abu Bakr/Omar/Aisha; SUNNITES: ALL Sahaba \'Udul just honored Quran 9:100 "first Muhajiroun Ansar...Allah pleased with them", 3) SOURCES: SHIITES: Quran + Hadith reported by 12 Imams + Ahl Bayt only (collections Kafi, Man La Yahduruhu al-Faqih); SUNNITES: Quran + Hadith Bukhari Muslim etc. via reliable Sahaba, 4) TAQIYYA: SHIITES: faith dissimulation PERMITTED if danger (say believe Sunnism hide Shiism); SUNNITES: Taqiyya limited coercion death/severe torture only, 5) FIQH: prayer differences (hands, Turbah Karbala clay), Mut\'ah temporary marriage (Shiites Halal, Sunnites Haram), inheritance, 6) \'ASHURA: SHIITES: intense mourning Hussayn martyr Karbala (self-flagellation debate); SUNNITES: recommended fasting not ritualized mourning, 7) MAHDI: SHIITES: already born 869 hidden will reappear; SUNNITES: will come future not yet born. Profound theological AND juridical divergences.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'sectes-theologiques',
  },
];

// ============================================
// PHASE 3B - Questions Eschatologie Détaillée
// ============================================

const eschatologieQuestions: ExamQuestion[] = [
  {
    id: 'aqeedah-eschatologie-001',
    question: {
      fr: 'Quelle est la différence entre Signes de l\'Heure Mineurs et Signes Majeurs ?',
      ar: 'ما الفرق بين أشراط الساعة الصغرى والكبرى؟',
      en: 'What is the difference between Minor and Major Signs of the Hour?',
    },
    options: [
      { id: 'a', text: { fr: 'Aucune différence - même catégorie', ar: 'لا فرق - نفس الفئة', en: 'No difference - same category' } },
      { id: 'b', text: { fr: 'MINEURS : décadence morale/sociale graduelle (déjà apparus) - ignorance, Riba, nudité, désobéissance parents. MAJEURS : événements surnaturels cosmiques imminence Heure - Dajjal, Mahdi, Isa, Ya\'juj Ma\'juj, Soleil levant ouest', ar: 'الصغرى: الانحطاط الأخلاقي/الاجتماعي التدريجي (ظهر بالفعل) - الجهل، الربا، العري، عقوق الوالدين. الكبرى: أحداث خارقة كونية قرب الساعة - الدجال، المهدي، عيسى، يأجوج ومأجوج، الشمس من المغرب', en: 'MINOR: gradual moral/social decline (already appeared) - ignorance, Riba, nudity, parent disobedience. MAJOR: supernatural cosmic events Hour imminence - Dajjal, Mahdi, Isa, Ya\'juj Ma\'juj, Sun rising west' } },
      { id: 'c', text: { fr: 'Majeurs = moins importants', ar: 'الكبرى = أقل أهمية', en: 'Major = less important' } },
      { id: 'd', text: { fr: 'Tous signes déjà passés', ar: 'كل العلامات مضت', en: 'All signs already passed' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: '2 CATÉGORIES Ashrat as-Sa\'ah Signes Heure : 1) SIGNES MINEURS (Sughra) : MULTIPLES graduels DÉJÀ APPARUS majorité : a) Mission Prophète ﷺ et mort, b) Décadence morale : ignorance religieuse répandue, consommation alcool normalisée, Zina fornication ouverte, Riba usure généralisée, c) Changements sociaux : femmes habillées mais nues (vêtements révélateurs), désobéissance parents \'Uquq, servante engendre maîtresse (enfants dominent parents), d) Construction excessive : Bédouins nus-pieds rivalisent hauteur bâtiments (tours Golfe!), e) Proximité temps : année comme mois, mois comme semaine, f) Faux prophètes : 30 menteurs prétendant prophétie (Musaylimah, Sajjah historiques + modernes) ; beaucoup RÉALISÉS indiquent proximité, 2) SIGNES MAJEURS (Kubra) : 10 ÉVÉNEMENTS SURNATURELS séquence rapide précèdent Heure IMMÉDIATEMENT : 1) MAHDI apparition, 2) DAJJAL Antéchrist, 3) Descente ISA Jésus, 4) YA\'JUJ MA\'JUJ Gog Magog, 5) 3 EFFONDREMENTS terre (Orient, Occident, Arabie), 6) FUMÉE épaisse couvre terre, 7) SOLEIL lève OUEST (porte repentir ferme), 8) BÊTE parle hommes, 9) FEU Yémen pousse gens Sham, 10) Destruction KA\'BAH. Prophète "Signes comme perles collier cassé tombent rapidement" (Tirmidhi).',
      ar: 'فئتان أشراط الساعة: 1) العلامات الصغرى (الصغرى): متعددة تدريجية ظهرت أغلبها: أ) بعثة النبي ﷺ ووفاته، ب) الانحطاط الأخلاقي: الجهل الديني المنتشر، شرب الخمر طبيعي، الزنا علني، الربا معمم، ج) التغييرات الاجتماعية: النساء كاسيات عاريات (ملابس كاشفة)، عقوق الوالدين، الأمة تلد ربتها (الأبناء يسيطرون على الآباء)، د) البناء المفرط: البدو الحفاة يتطاولون في البنيان (أبراج الخليج!)، هـ) قرب الزمان: السنة كشهر، الشهر كأسبوع، و) الأنبياء الكذبة: 30 كذاباً يدعون النبوة (مسيلمة، سجاح تاريخياً + معاصرون)؛ كثير تحقق يدل على القرب، 2) العلامات الكبرى (الكبرى): 10 أحداث خارقة متسلسلة سريعة تسبق الساعة مباشرة: 1) ظهور المهدي، 2) الدجال المسيح الدجال، 3) نزول عيسى، 4) يأجوج ومأجوج، 5) 3 خسوفات الأرض (المشرق، المغرب، الجزيرة العربية)، 6) الدخان الكثيف يغطي الأرض، 7) الشمس تطلع من المغرب (باب التوبة يُغلق)، 8) الدابة تكلم الناس، 9) نار من اليمن تسوق الناس إلى الشام، 10) هدم الكعبة. النبي "العلامات كحبات العقد المنفرط تتساقط سريعاً" (الترمذي).',
      en: '2 CATEGORIES Ashrat as-Sa\'ah Signs Hour: 1) MINOR SIGNS (Sughra): MULTIPLE gradual ALREADY APPEARED majority: a) Prophet ﷺ mission and death, b) Moral decay: widespread religious ignorance, alcohol consumption normalized, open Zina fornication, generalized Riba usury, c) Social changes: women dressed but naked (revealing clothes), parent disobedience \'Uquq, slave-girl births her master (children dominate parents), d) Excessive construction: barefoot Bedouins compete building heights (Gulf towers!), e) Time proximity: year like month, month like week, f) False prophets: 30 liars claiming prophecy (historical Musaylimah, Sajjah + modern); many REALIZED indicate proximity, 2) MAJOR SIGNS (Kubra): 10 SUPERNATURAL EVENTS rapid sequence precede Hour IMMEDIATELY: 1) MAHDI appearance, 2) DAJJAL Antichrist, 3) ISA Jesus descent, 4) YA\'JUJ MA\'JUJ Gog Magog, 5) 3 EARTH SINKHOLES (East, West, Arabia), 6) SMOKE thick covers earth, 7) SUN rises WEST (repentance door closes), 8) BEAST speaks to people, 9) FIRE Yemen drives people Sham, 10) KA\'BAH destruction. Prophet "Signs like necklace beads broken fall rapidly" (Tirmidhi).',
    },
    points: 3,
    difficulty: 'hard',
    category: 'eschatologie',
  },
  {
    id: 'aqeedah-eschatologie-002',
    question: {
      fr: 'Quelle est la différence entre croyance sunnite et chiite sur le Mahdi ?',
      ar: 'ما الفرق بين عقيدة السنة والشيعة في المهدي؟',
      en: 'What is the difference between Sunni and Shia belief about the Mahdi?',
    },
    options: [
      { id: 'a', text: { fr: 'Identiques - même croyance', ar: 'متطابقة - نفس المعتقد', en: 'Identical - same belief' } },
      { id: 'b', text: { fr: 'SUNNITES : Mahdi viendra fin temps (pas encore né), homme ordinaire descendant Fatima, établira justice avant Dajjal. CHIITES : Mahdi = 12ème Imam Muhammad al-Mahdi né 869, caché depuis 874 en Occultation, reviendra', ar: 'السنة: المهدي سيأتي نهاية الزمان (لم يولد بعد)، رجل عادي من نسل فاطمة، يملأ الأرض عدلاً قبل الدجال. الشيعة: المهدي = الإمام الثاني عشر محمد المهدي وُلد 869، مختفٍ منذ 874 في الغيبة، سيعود', en: 'SUNNITES: Mahdi will come end times (not yet born), ordinary man Fatima descendant, will establish justice before Dajjal. SHIITES: Mahdi = 12th Imam Muhammad al-Mahdi born 869, hidden since 874 in Occultation, will return' } },
      { id: 'c', text: { fr: 'Sunnites ne croient pas Mahdi', ar: 'السنة لا يؤمنون بالمهدي', en: 'Sunnites do not believe Mahdi' } },
      { id: 'd', text: { fr: 'Chiites disent Mahdi déjà mort', ar: 'الشيعة يقولون المهدي مات', en: 'Shiites say Mahdi already dead' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'MAHDI - divergence MAJEURE : 1) CROYANCE SUNNITE : a) VIENDRA FIN TEMPS : homme pas encore né apparaîtra avant Dajjal/retour Isa, b) DESCENDANT PROPHÈTE : de lignée Fatima fille Prophète via Hassan ou Hussayn, c) NOM : Muhammad ibn Abdullah (même nom Prophète), d) MISSION : remplira terre justice après tyrannie ; gouvernera 7-9 ans selon Hadiths ; unifiera musulmans ; préparera venue Dajjal puis Isa descendra tuera Dajjal, e) STATUT : homme ORDINAIRE pieux pas Prophète ni infaillible ; peut se tromper, f) HADITHS : Sahih (Abu Dawud, Tirmidhi, Ibn Majah) "Mahdi de ma famille" ; débat authenticité certains Hadiths mais majorité acceptent concept, 2) CROYANCE CHIITE IMAMITE : a) IDENTITÉ : Muhammad ibn Hassan al-\'Askari = 12ème IMAM succession Ali, b) NAISSANCE : 869 CE Samarra Irak, c) OCCULTATION : DISPARU 874 âge 5 ans en "Ghaybah Kubra Grande Occultation" - VIVANT caché par Allah attend ordre réapparaître, d) RETOUR : reviendra fin temps établir gouvernement mondial justice Wilayat al-Faqih, e) STATUT : INFAILLIBLE Ma\'sum comme tous Imams ; connaît Ghayb invisible ; PILIER FOI essentiel croyance 12ème Imam obligatoire salut. DIFFÉRENCE : Sunnites attendent homme futur, Chiites croient personne spécifique née vivante cachée 1150+ ans.',
      ar: 'المهدي - اختلاف كبير: 1) عقيدة السنة: أ) سيأتي نهاية الزمان: رجل لم يولد بعد يظهر قبل الدجال/عودة عيسى، ب) نسل النبي: من سلالة فاطمة بنت النبي عبر الحسن أو الحسين، ج) الاسم: محمد بن عبد الله (نفس اسم النبي)، د) المهمة: يملأ الأرض عدلاً بعد جور؛ يحكم 7-9 سنوات حسب الأحاديث؛ يوحد المسلمين؛ يمهد لقدوم الدجال ثم عيسى ينزل يقتل الدجال، هـ) المنزلة: رجل عادي تقي ليس نبياً ولا معصوماً؛ يمكن أن يخطئ، و) الأحاديث: صحيحة (أبو داود، الترمذي، ابن ماجه) "المهدي من أهل بيتي"؛ خلاف في صحة بعض الأحاديث لكن الأغلبية تقبل المفهوم، 2) عقيدة الشيعة الإمامية: أ) الهوية: محمد بن الحسن العسكري = الإمام الثاني عشر خلافة علي، ب) الميلاد: 869م سامراء العراق، ج) الغيبة: اختفى 874 عمر 5 سنوات في "الغيبة الكبرى" - حي مختفٍ بقدرة الله ينتظر الأمر بالظهور، د) العودة: سيعود نهاية الزمان يقيم حكومة عالمية عدل ولاية الفقيه، هـ) المنزلة: معصوم كل الأئمة؛ يعلم الغيب؛ ركن إيمان أساسي الإيمان بالإمام الثاني عشر واجب للخلاص. الفرق: السنة ينتظرون رجلاً مستقبلياً، الشيعة يؤمنون بشخص محدد وُلد حي مختفٍ 1150+ سنة.',
      en: 'MAHDI - MAJOR divergence: 1) SUNNI BELIEF: a) WILL COME END TIMES: man not yet born will appear before Dajjal/Isa return, b) PROPHET DESCENDANT: from Fatima Prophet daughter lineage via Hassan or Hussayn, c) NAME: Muhammad ibn Abdullah (same name Prophet), d) MISSION: will fill earth justice after tyranny; will govern 7-9 years according Hadiths; will unify Muslims; will prepare Dajjal coming then Isa will descend kill Dajjal, e) STATUS: ORDINARY pious man not Prophet nor infallible; can err, f) HADITHS: Sahih (Abu Dawud, Tirmidhi, Ibn Majah) "Mahdi from my family"; debate authenticity some Hadiths but majority accept concept, 2) IMAMI SHIA BELIEF: a) IDENTITY: Muhammad ibn Hassan al-\'Askari = 12th IMAM succession Ali, b) BIRTH: 869 CE Samarra Iraq, c) OCCULTATION: DISAPPEARED 874 age 5 years in "Ghaybah Kubra Great Occultation" - ALIVE hidden by Allah awaits order reappear, d) RETURN: will return end times establish world government justice Wilayat al-Faqih, e) STATUS: INFALLIBLE Ma\'sum like all Imams; knows Ghayb unseen; ESSENTIAL FAITH PILLAR belief 12th Imam obligatory salvation. DIFFERENCE: Sunnites await future man, Shiites believe specific person born alive hidden 1150+ years.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'eschatologie',
  },
  {
    id: 'aqeedah-eschatologie-003',
    question: {
      fr: 'Qui est le Dajjal (Antéchrist) et quelles sont ses caractéristiques selon les Hadiths ?',
      ar: 'من هو الدجال (المسيح الدجال) وما صفاته حسب الأحاديث؟',
      en: 'Who is the Dajjal (Antichrist) and what are his characteristics according to Hadiths?',
    },
    options: [
      { id: 'a', text: { fr: 'Symbole métaphorique uniquement', ar: 'رمز مجازي فقط', en: 'Metaphorical symbol only' } },
      { id: 'b', text: { fr: 'INDIVIDU RÉEL : borgne oeil droit, "Kafir" كافر écrit front (lu par croyants), pouvoirs surnaturels (pluie, résurrection apparente), séduira masses 40 jours. Tué par Isa عليه السلام lance Lydda Palestine', ar: 'فرد حقيقي: أعور العين اليمنى، "كافر" مكتوب على جبهته (يقرؤه المؤمنون)، قوى خارقة (مطر، إحياء ظاهري)، يفتن الجماهير 40 يوماً. يقتله عيسى عليه السلام بالرمح في اللد فلسطين', en: 'REAL INDIVIDUAL: blind right eye, "Kafir" كافر written forehead (read by believers), supernatural powers (rain, apparent resurrection), will seduce masses 40 days. Killed by Isa عليه السلام spear Lydda Palestine' } },
      { id: 'c', text: { fr: 'Simple système politique futur', ar: 'مجرد نظام سياسي مستقبلي', en: 'Simple future political system' } },
      { id: 'd', text: { fr: 'Déjà apparu et mort', ar: 'ظهر بالفعل ومات', en: 'Already appeared and died' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'DAJJAL = PLUS GRANDE ÉPREUVE Fitnah humanité : 1) IDENTITÉ : INDIVIDU RÉEL pas symbole - Prophète ﷺ avertit constamment "Aucun Prophète sans avertir Ummah sur Dajjal borgne menteur" (Bukhari), 2) APPARENCE : a) BORGNE oeil DROIT - oeil gauche proéminent comme raisin flottant, b) FRONT : كـافـر "K-F-R Kafir" ÉCRIT visible croyants alphabétisés/illettrés pas mécréants, c) LARGE physique - cheveux bouclés, teint rougeâtre, d) Entre yeux large, 3) POUVOIRS SURNATURELS (épreuve) : a) Ordonne ciel pleuvoir → pluie tombe, terre produit végétation, b) Ordonne terre sécheresse → désert, c) Trésor terre le suit comme abeilles, d) "Ressuscite" morts apparemment (illusion/Djinn Shaytan aide?), e) PARADIS/ENFER : montre vision "Paradis" réellement Enfer vice versa, 4) DURÉE : 40 JOURS sur terre : 1er jour = 1 an, 2ème = 1 mois, 3ème = 1 semaine, reste 37 = jours normaux ; commence Orient (Ispahan Iran Hadith) conquiert monde sauf Mecque/Médine protégées anges, 5) SÉDUCTION : majorité humanité suivra - promet richesse, menace pauvreté ; faibles Iman trompés ; Prophète "Récitez 10 premiers versets Surah Kahf protection Dajjal" (Muslim), 6) MORT : ISA عليه السلام descend minaret blanc Damas, poursuit Dajjal, tue LANCE (pas épée) porte Ludd/Lydda Palestine ; Dajjal fond comme sel eau.',
      ar: 'الدجال = أعظم فتنة للبشرية: 1) الهوية: فرد حقيقي ليس رمزاً - النبي ﷺ حذّر باستمرار "ما من نبي إلا وقد أنذر أمته الدجال الأعور الكذاب" (البخاري)، 2) المظهر: أ) أعور العين اليمنى - العين اليسرى بارزة كعنبة طافية، ب) الجبهة: كـافـر "ك-ف-ر كافر" مكتوب يراه المؤمنون متعلمون/أميون لا الكفار، ج) ضخم الجسم - شعر مجعد، بشرة محمرة، د) بين العينين واسع، 3) القوى الخارقة (الفتنة): أ) يأمر السماء تمطر → تمطر، الأرض تنبت، ب) يأمر الأرض بالجفاف → صحراء، ج) كنز الأرض يتبعه كالنحل، د) "يحيي" الموتى ظاهرياً (خيال/مساعدة جن شيطان؟)، هـ) الجنة/النار: يُري رؤية "جنة" حقيقة نار والعكس، 4) المدة: 40 يوماً على الأرض: اليوم الأول = سنة، الثاني = شهر، الثالث = أسبوع، الباقي 37 = أيام عادية؛ يبدأ من الشرق (أصفهان إيران الحديث) يفتح العالم إلا مكة/المدينة محميتان بالملائكة، 5) الفتنة: أغلبية البشرية ستتبعه - يَعِد بالغنى، يهدد بالفقر؛ ضعاف الإيمان يُخدعون؛ النبي "من حفظ عشر آيات من أول سورة الكهف عُصم من الدجال" (مسلم)، 6) الموت: عيسى عليه السلام ينزل المنارة البيضاء دمشق، يطارد الدجال، يقتله بالرمح (ليس السيف) باب لُدّ فلسطين؛ الدجال يذوب كالملح في الماء.',
      en: 'DAJJAL = GREATEST TRIAL Fitnah humanity: 1) IDENTITY: REAL INDIVIDUAL not symbol - Prophet ﷺ constantly warned "No Prophet without warning Ummah about one-eyed lying Dajjal" (Bukhari), 2) APPEARANCE: a) BLIND RIGHT eye - left eye protruding like floating grape, b) FOREHEAD: كـافـر "K-F-R Kafir" WRITTEN visible to believers literate/illiterate not disbelievers, c) LARGE physique - curly hair, reddish complexion, d) Between eyes wide, 3) SUPERNATURAL POWERS (trial): a) Commands sky rain → rain falls, earth produces vegetation, b) Commands earth drought → desert, c) Earth treasure follows him like bees, d) "Resurrects" dead apparently (illusion/Jinn Shaytan help?), e) PARADISE/HELL: shows vision "Paradise" actually Hell vice versa, 4) DURATION: 40 DAYS on earth: 1st day = 1 year, 2nd = 1 month, 3rd = 1 week, remaining 37 = normal days; starts East (Isfahan Iran Hadith) conquers world except Mecca/Medina protected by angels, 5) SEDUCTION: majority humanity will follow - promises wealth, threatens poverty; weak Iman deceived; Prophet "Recite 10 first verses Surah Kahf protection Dajjal" (Muslim), 6) DEATH: ISA عليه السلام descends white minaret Damascus, pursues Dajjal, kills SPEAR (not sword) gate Ludd/Lydda Palestine; Dajjal melts like salt water.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'eschatologie',
  },
  {
    id: 'aqeedah-eschatologie-004',
    question: {
      fr: 'Quelle sera la mission du Prophète Isa عليه السلام lors de son retour à la fin des temps ?',
      ar: 'ما ستكون مهمة النبي عيسى عليه السلام عند عودته نهاية الزمان؟',
      en: 'What will be the mission of Prophet Isa عليه السلام upon his return at end times?',
    },
    options: [
      { id: 'a', text: { fr: 'Apporter nouvelle Shariah et Prophétie', ar: 'يأتي بشريعة جديدة ونبوة', en: 'Bring new Shariah and Prophecy' } },
      { id: 'b', text: { fr: 'Descendra vivant (jamais mort), tuera Dajjal lance Lydda, brisera croix (abolir Christianisme), abolira Jizyah, règnera 40 ans selon Shariah Muhammad ﷺ, priera derrière Mahdi, mourra musulman enterré Médine', ar: 'ينزل حياً (لم يمت)، يقتل الدجال بالرمح في اللد، يكسر الصليب (إلغاء المسيحية)، يُلغي الجزية، يحكم 40 سنة بشريعة محمد ﷺ، يصلي خلف المهدي، يموت مسلماً يُدفن في المدينة', en: 'Will descend alive (never died), will kill Dajjal spear Lydda, will break cross (abolish Christianity), will abolish Jizyah, will rule 40 years according Shariah Muhammad ﷺ, will pray behind Mahdi, will die Muslim buried Medina' } },
      { id: 'c', text: { fr: 'Convertir monde au Christianisme', ar: 'يحول العالم للمسيحية', en: 'Convert world to Christianity' } },
      { id: 'd', text: { fr: 'Être témoin sans agir', ar: 'يكون شاهداً بلا فعل', en: 'Be witness without acting' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: '10 MISSIONS Isa عليه السلام retour : 1) DESCENTE VIVANTE : descendra VIVANT ciel (jamais mort Coran 4:157-158 "ils ne l\'ont ni tué ni crucifié...Allah l\'éleva vers Lui") sur minaret blanc EST Damas Syrie ; 2 anges soutiennent bras ; vêtements teints safran, mains sur ailes anges (Muslim), 2) APPARENCE : homme taille moyenne, teint rougeâtre blanc, cheveux lisses humides comme sortant bain, 3) TUER DAJJAL : poursuivra Antéchrist jusqu\'à porte Ludd/Lydda Palestine, tuera LANCE (souffle Isa fondra Dajjal comme plomb feu) ; Hadith "Dajjal fondra comme sel eau voyant Isa" (Muslim), 4) BRISER CROIX : abolira Christianisme prouvant FAUSSETÉ Trinité/divinité Jésus - Isa témoignera "jamais dit adorer moi mais adorer Allah" Coran 5:116-117, 5) ABOLIR JIZYAH : taxe non-musulmans abolie car 2 choix uniquement : Islam ou mort (Dhimmah période terminée), 6) RÉGNER 40 ANS : gouvernera selon SHARIAH MUHAMMAD ﷺ pas nouvelle loi - Muhammad ﷺ dernier Prophète ; Isa disciple/suiveur Shariah Islam, 7) PRIER DERRIÈRE MAHDI : arrivera Fajr, Mahdi reculera diriger prière, Isa dira "avance toi Imam désigné" - honorer Ummah Muhammad (Muslim), 8) MARIAGE ENFANTS : se mariera aura enfants vie normale juste, 9) YA\'JUJ MA\'JUJ : Allah détruira armées Gog Magog (vers nuque) temps Isa, 10) MORT : mourra musulman après 40 ans paix prospérité terre, enterré Médine tombe vide à côté Muhammad ﷺ et Abu Bakr Omar. CLEF : Isa ≠ Prophète nouveau mais SUIVEUR Shariah Muhammad.',
      ar: '10 مهام عيسى عليه السلام العودة: 1) النزول حياً: ينزل حياً من السماء (لم يمت أبداً القرآن 4:157-158 "وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ...بَل رَّفَعَهُ اللَّهُ إِلَيْهِ") على المنارة البيضاء شرق دمشق سوريا؛ ملكان يسندان ذراعيه؛ ثياب مصبوغة زعفران، يداه على أجنحة ملكين (مسلم)، 2) المظهر: رجل متوسط الطول، لونه أحمر أبيض، شعر أملس رطب كأنه خرج من الحمام، 3) قتل الدجال: يطارد المسيح الدجال حتى باب لُدّ فلسطين، يقتله بالرمح (نفَس عيسى يُذيب الدجال كالرصاص في النار)؛ حديث "الدجال يذوب كالملح في الماء رؤية عيسى" (مسلم)، 4) كسر الصليب: يُلغي المسيحية بإثبات بطلان الثالوث/ألوهية يسوع - عيسى يشهد "لم أقل أبداً اعبدوني بل اعبدوا الله" القرآن 5:116-117، 5) إلغاء الجزية: ضريبة غير المسلمين تُلغى لأن خياران فقط: الإسلام أو الموت (فترة الذمة انتهت)، 6) الحكم 40 سنة: يحكم بشريعة محمد ﷺ لا قانون جديد - محمد ﷺ آخر نبي؛ عيسى تابع/متبع لشريعة الإسلام، 7) الصلاة خلف المهدي: يصل صلاة الفجر، المهدي يتراجع ليقود، عيسى يقول "تقدم أنت الإمام المعين" - تكريم أمة محمد (مسلم)، 8) الزواج والأولاد: يتزوج وينجب أطفالاً حياة عادية عادلة، 9) يأجوج ومأجوج: الله يدمر جيوش جوج ماجوج (دود في الرقاب) زمن عيسى، 10) الموت: يموت مسلماً بعد 40 سنة سلام ورخاء الأرض، يُدفن في المدينة القبر الفارغ بجوار محمد ﷺ وأبي بكر وعمر. المفتاح: عيسى ≠ نبي جديد بل تابع لشريعة محمد.',
      en: '10 MISSIONS Isa عليه السلام return: 1) LIVING DESCENT: will descend ALIVE from sky (never died Quran 4:157-158 "they neither killed nor crucified him...Allah raised him to Him") on white minaret EAST Damascus Syria; 2 angels supporting arms; saffron-dyed clothes, hands on angels wings (Muslim), 2) APPEARANCE: medium height man, reddish white complexion, straight wet hair as if exiting bath, 3) KILL DAJJAL: will pursue Antichrist to gate Ludd/Lydda Palestine, will kill SPEAR (Isa breath will melt Dajjal like lead in fire); Hadith "Dajjal will melt like salt water seeing Isa" (Muslim), 4) BREAK CROSS: will abolish Christianity proving FALSITY Trinity/Jesus divinity - Isa will testify "never said worship me but worship Allah" Quran 5:116-117, 5) ABOLISH JIZYAH: non-Muslim tax abolished because 2 choices only: Islam or death (Dhimmah period ended), 6) RULE 40 YEARS: will govern according SHARIAH MUHAMMAD ﷺ not new law - Muhammad ﷺ last Prophet; Isa disciple/follower Shariah Islam, 7) PRAY BEHIND MAHDI: will arrive Fajr, Mahdi will step back lead prayer, Isa will say "advance you designated Imam" - honor Ummah Muhammad (Muslim), 8) MARRIAGE CHILDREN: will marry have children normal just life, 9) YA\'JUJ MA\'JUJ: Allah will destroy Gog Magog armies (worms in necks) time Isa, 10) DEATH: will die Muslim after 40 years peace prosperity earth, buried Medina empty grave beside Muhammad ﷺ and Abu Bakr Omar. KEY: Isa ≠ new Prophet but FOLLOWER Shariah Muhammad.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'eschatologie',
  },
];

// ============================================
// Assemblage de l'examen COMPLET
// ============================================

const allQuestions: ExamQuestion[] = [
  ...tawhidQuestions,                // 5 questions
  ...imanQuestions,                  // 5 questions
  ...asmaQuestions,                  // 4 questions
  ...akhiraQuestions,                // 4 questions
  ...qadarQuestions,                 // 4 questions
  ...nubuwwahQuestions,              // 4 questions
  ...malaikaQuestions,               // 4 questions
  ...kutubQuestions,                 // 4 questions
  ...sahabaQuestions,                // 2 questions
  ...defisModernesQuestions,         // 4 questions (Phase 3A)
  ...defisModernesSuiteQuestions,    // 4 questions (Phase 3B)
  ...extremismeTakfirQuestions,      // 6 questions (Phase 3B)
  ...soufismeQuestions,              // 5 questions (Phase 3B)
  ...sectesTheologiquesQuestions,    // 6 questions (Phase 3B)
  ...eschatologieQuestions,          // 4 questions (Phase 3B)
  // Total : 65 questions (36 initial + 29 Phase 3 complet)
];

export const examAqeedahFinal: ExamConfig = {
  id: 'exam-aqeedah-final',
  type: 'course',
  level: 'intermediate',
  title: {
    fr: 'Examen Complet - Aqeedah (Croyance)',
    ar: 'الامتحان الشامل - العقيدة',
    en: 'Complete Exam - Aqeedah (Creed)',
  },
  description: {
    fr: 'Examen de 55 questions sélectionnées aléatoirement parmi une banque de 65 questions. Couvre les fondements de la foi islamique classique, défis contemporains, sectes théologiques, et eschatologie détaillée.',
    ar: 'امتحان من 55 سؤالاً يتم اختيارها عشوائياً من بنك يضم 65 سؤالاً. يغطي أصول العقيدة الإسلامية الكلاسيكية، التحديات المعاصرة، الفرق الكلامية، والأخرويات التفصيلية.',
    en: 'Exam with 55 questions randomly selected from a pool of 65. Covers classical Islamic creed foundations, contemporary challenges, theological sects, and detailed eschatology.',
  },
  instructions: {
    fr: 'Vous avez 80 minutes pour répondre à 55 questions. Chaque question a une seule bonne réponse. Un score de 70% est requis pour réussir.',
    ar: 'لديك 80 دقيقة للإجابة على 55 سؤالاً. لكل سؤال إجابة صحيحة واحدة. يُشترط 70% للنجاح.',
    en: 'You have 80 minutes to answer 55 questions. Each question has one correct answer. A score of 70% is required to pass.',
  },
  courseSlug: 'aqeedah',
  questionPool: allQuestions,
  questionsPerExam: 55,
  categoryConfig: [
    { category: 'tawhid', count: 4 },
    { category: 'iman', count: 4 },
    { category: 'asma', count: 3 },
    { category: 'akhira', count: 3 },
    { category: 'qadar', count: 3 },
    { category: 'nubuwwah', count: 3 },
    { category: 'malaika', count: 3 },
    { category: 'kutub', count: 3 },
    { category: 'sahaba', count: 2 },
    { category: 'defis-modernes', count: 7 },
    { category: 'extremisme-takfir', count: 6 },
    { category: 'soufisme', count: 5 },
    { category: 'sectes-theologiques', count: 5 },
    { category: 'eschatologie', count: 4 },
  ],
  questions: [],
  duration: 80,
  passingScore: 70,
  maxAttempts: 5,
  shuffleQuestions: true,
  shuffleOptions: true,
  showAnswersAfter: 'complete',
  hasCertificate: true,
  certificateName: {
    fr: 'Certificat de Maîtrise - Al-\'Aqeedah al-Islamiyyah',
    ar: 'شهادة الإتقان - العقيدة الإسلامية',
    en: 'Mastery Certificate - Islamic Creed',
  },
  createdAt: '2026-01-31',
};

export default examAqeedahFinal;
