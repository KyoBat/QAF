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
      { id: 'a', text: { fr: 'La croyance en plusieurs dieux', ar: 'الإيمان بآلهة متعددة', en: 'Belief in multiple gods' } },
      { id: 'b', text: { fr: 'L\'affirmation de l\'unicité d\'Allah dans Sa seigneurie, Son adoration et Ses noms/attributs', ar: 'إفراد الله بالربوبية والعبادة والأسماء والصفات', en: 'Affirming Allah\'s oneness in Lordship, worship, and names/attributes' } },
      { id: 'c', text: { fr: 'Une prière spéciale', ar: 'صلاة خاصة', en: 'A special prayer' } },
      { id: 'd', text: { fr: 'Un type de jeûne', ar: 'نوع من الصيام', en: 'A type of fasting' } },
    ],
    correctAnswer: 1,
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
      { id: 'b', text: { fr: 'Croire qu\'Allah est le seul Créateur, Pourvoyeur et Souverain de l\'univers', ar: 'الإيمان بأن الله وحده الخالق الرازق المدبر', en: 'Believing Allah is the only Creator, Provider and Sovereign of the universe' } },
      { id: 'c', text: { fr: 'Connaître les noms d\'Allah', ar: 'معرفة أسماء الله', en: 'Knowing Allah\'s names' } },
      { id: 'd', text: { fr: 'Prier cinq fois par jour', ar: 'الصلاة خمس مرات يوميًا', en: 'Praying five times daily' } },
    ],
    correctAnswer: 1,
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
      { id: 'b', text: { fr: 'Associer des partenaires à Allah dans ce qui Lui est exclusif', ar: 'الإشراك بالله فيما هو خاص به', en: 'Associating partners with Allah in what is exclusive to Him' } },
      { id: 'c', text: { fr: 'Manquer une prière', ar: 'ترك صلاة', en: 'Missing a prayer' } },
      { id: 'd', text: { fr: 'Mentir', ar: 'الكذب', en: 'Lying' } },
    ],
    correctAnswer: 1,
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
      { id: 'a', text: { fr: 'Aucune différence', ar: 'لا فرق', en: 'No difference' } },
      { id: 'b', text: { fr: 'Le Shirk majeur exclut de l\'Islam ; le Shirk mineur est un grand péché mais n\'exclut pas', ar: 'الأكبر مُخرج من الملة؛ الأصغر ذنب كبير لكن لا يُخرج', en: 'Major Shirk takes one out of Islam; minor Shirk is a great sin but doesn\'t' } },
      { id: 'c', text: { fr: 'Le Shirk mineur est pire', ar: 'الأصغر أسوأ', en: 'Minor Shirk is worse' } },
      { id: 'd', text: { fr: 'Les deux sont mineurs', ar: 'كلاهما صغير', en: 'Both are minor' } },
    ],
    correctAnswer: 1,
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
      { id: 'b', text: { fr: '6 piliers', ar: '6 أركان', en: '6 pillars' } },
      { id: 'c', text: { fr: '4 piliers', ar: '4 أركان', en: '4 pillars' } },
      { id: 'd', text: { fr: '7 piliers', ar: '7 أركان', en: '7 pillars' } },
    ],
    correctAnswer: 1,
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
      { id: 'b', text: { fr: 'Hadith Jibril', ar: 'حديث جبريل', en: 'Hadith Jibril' } },
      { id: 'c', text: { fr: 'Hadith Qudsi', ar: 'الحديث القدسي', en: 'Hadith Qudsi' } },
      { id: 'd', text: { fr: 'Hadith du voyage nocturne', ar: 'حديث الإسراء', en: 'Hadith of the night journey' } },
    ],
    correctAnswer: 1,
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
      { id: 'a', text: { fr: 'Croire qu\'ils sont des dieux mineurs', ar: 'الاعتقاد بأنهم آلهة صغرى', en: 'Believing they are minor gods' } },
      { id: 'b', text: { fr: 'Croire qu\'ils sont des créatures de lumière qui obéissent parfaitement à Allah', ar: 'الإيمان بأنهم مخلوقون من نور يطيعون الله تمامًا', en: 'Believing they are creatures of light who perfectly obey Allah' } },
      { id: 'c', text: { fr: 'Croire qu\'ils ont un libre arbitre complet', ar: 'الاعتقاد بأن لهم إرادة حرة كاملة', en: 'Believing they have complete free will' } },
      { id: 'd', text: { fr: 'Croire qu\'ils sont des humains parfaits', ar: 'الاعتقاد بأنهم بشر كاملون', en: 'Believing they are perfect humans' } },
    ],
    correctAnswer: 1,
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
      { id: 'b', text: { fr: 'Torah, Zabur (Psaumes), Injil (Évangile), Coran', ar: 'التوراة، الزبور، الإنجيل، القرآن', en: 'Torah, Zabur (Psalms), Injil (Gospel), Quran' } },
      { id: 'c', text: { fr: 'Coran uniquement', ar: 'القرآن فقط', en: 'Quran only' } },
      { id: 'd', text: { fr: 'Torah et Coran uniquement', ar: 'التوراة والقرآن فقط', en: 'Torah and Quran only' } },
    ],
    correctAnswer: 1,
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
      { id: 'b', text: { fr: '25 prophètes', ar: '25 نبيًا', en: '25 prophets' } },
      { id: 'c', text: { fr: '50 prophètes', ar: '50 نبيًا', en: '50 prophets' } },
      { id: 'd', text: { fr: '100 prophètes', ar: '100 نبي', en: '100 prophets' } },
    ],
    correctAnswer: 1,
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
      { id: 'a', text: { fr: '50 noms', ar: '50 اسمًا', en: '50 names' } },
      { id: 'b', text: { fr: '99 noms', ar: '99 اسمًا', en: '99 names' } },
      { id: 'c', text: { fr: '100 noms', ar: '100 اسم', en: '100 names' } },
      { id: 'd', text: { fr: '1000 noms', ar: '1000 اسم', en: '1000 names' } },
    ],
    correctAnswer: 1,
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
      { id: 'b', text: { fr: 'Les affirmer sans les comparer aux créatures ni les déformer', ar: 'إثباتها بلا تشبيه ولا تحريف', en: 'Affirm them without comparing to creation or distorting' } },
      { id: 'c', text: { fr: 'Les interpréter métaphoriquement', ar: 'تأويلها مجازيًا', en: 'Interpret them metaphorically' } },
      { id: 'd', text: { fr: 'Les comparer aux attributs humains', ar: 'تشبيهها بصفات البشر', en: 'Compare them to human attributes' } },
    ],
    correctAnswer: 1,
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
      { id: 'b', text: { fr: 'Le Tout Miséricordieux (miséricorde englobante)', ar: 'ذو الرحمة الواسعة', en: 'The Most Merciful (encompassing mercy)' } },
      { id: 'c', text: { fr: 'Le Créateur', ar: 'الخالق', en: 'The Creator' } },
      { id: 'd', text: { fr: 'Le Pardonneur', ar: 'الغفور', en: 'The Forgiver' } },
    ],
    correctAnswer: 1,
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
      { id: 'a', text: { fr: 'Al-Fatiha 1:1', ar: 'الفاتحة 1:1', en: 'Al-Fatiha 1:1' } },
      { id: 'b', text: { fr: '"Il n\'y a rien qui Lui ressemble, et Il est l\'Audient, le Clairvoyant" (42:11)', ar: '"ليس كمثله شيء وهو السميع البصير" (42:11)', en: '"There is nothing like unto Him, and He is the Hearing, the Seeing" (42:11)' } },
      { id: 'c', text: { fr: 'An-Nas 114:1', ar: 'الناس 114:1', en: 'An-Nas 114:1' } },
      { id: 'd', text: { fr: 'Al-Baqara 2:1', ar: 'البقرة 2:1', en: 'Al-Baqara 2:1' } },
    ],
    correctAnswer: 1,
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
      { id: 'b', text: { fr: 'Deux anges (Munkar et Nakir) interrogent sur le Seigneur, la religion et le Prophète', ar: 'ملكان (منكر ونكير) يسألان عن الرب والدين والنبي', en: 'Two angels (Munkar and Nakir) question about Lord, religion and Prophet' } },
      { id: 'c', text: { fr: 'Réincarnation immédiate', ar: 'تناسخ فوري', en: 'Immediate reincarnation' } },
      { id: 'd', text: { fr: 'Jugement final immédiat', ar: 'الحساب النهائي فورًا', en: 'Immediate final judgment' } },
    ],
    correctAnswer: 1,
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
      { id: 'b', text: { fr: 'Dajjal, descente de \'Isa, Gog et Magog, lever du soleil de l\'ouest, fumée, etc.', ar: 'الدجال، نزول عيسى، يأجوج ومأجوج، طلوع الشمس من مغربها، الدخان، إلخ', en: 'Dajjal, descent of \'Isa, Gog and Magog, sun rising from west, smoke, etc.' } },
      { id: 'c', text: { fr: 'Aucun signe spécifique', ar: 'لا علامات محددة', en: 'No specific signs' } },
      { id: 'd', text: { fr: 'Seulement des signes scientifiques', ar: 'علامات علمية فقط', en: 'Only scientific signs' } },
    ],
    correctAnswer: 1,
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
      { id: 'a', text: { fr: 'Un livre de compte', ar: 'كتاب الحساب', en: 'A book of account' } },
      { id: 'b', text: { fr: 'Un pont au-dessus de l\'Enfer que tous devront traverser', ar: 'جسر فوق النار يمر عليه الجميع', en: 'A bridge over Hell that all must cross' } },
      { id: 'c', text: { fr: 'Une porte du Paradis', ar: 'باب من أبواب الجنة', en: 'A gate of Paradise' } },
      { id: 'd', text: { fr: 'Un ange', ar: 'ملَك', en: 'An angel' } },
    ],
    correctAnswer: 1,
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
      { id: 'b', text: { fr: 'Oui, ils existent déjà et sont éternels', ar: 'نعم، موجودتان الآن وأبديتان', en: 'Yes, they exist now and are eternal' } },
      { id: 'c', text: { fr: 'Seulement le Paradis existe', ar: 'الجنة فقط موجودة', en: 'Only Paradise exists' } },
      { id: 'd', text: { fr: 'On ne sait pas', ar: 'لا نعلم', en: 'We don\'t know' } },
    ],
    correctAnswer: 1,
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
      { id: 'b', text: { fr: 'Science (\'Ilm), Écriture (Kitaba), Volonté (Mashia), Création (Khalq)', ar: 'العلم، الكتابة، المشيئة، الخلق', en: 'Knowledge (\'Ilm), Writing (Kitaba), Will (Mashia), Creation (Khalq)' } },
      { id: 'c', text: { fr: 'Voir, entendre, parler, agir', ar: 'الرؤية، السمع، الكلام، الفعل', en: 'Seeing, hearing, speaking, acting' } },
      { id: 'd', text: { fr: 'Bon, mauvais, neutre, mixte', ar: 'خير، شر، محايد، مختلط', en: 'Good, bad, neutral, mixed' } },
    ],
    correctAnswer: 1,
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
      { id: 'a', text: { fr: 'Le Coran', ar: 'القرآن', en: 'The Quran' } },
      { id: 'b', text: { fr: 'La Table Gardée où tout est écrit depuis l\'éternité', ar: 'اللوح المحفوظ حيث كُتب كل شيء منذ الأزل', en: 'The Preserved Tablet where everything is written from eternity' } },
      { id: 'c', text: { fr: 'Un livre d\'histoire', ar: 'كتاب تاريخ', en: 'A history book' } },
      { id: 'd', text: { fr: 'Les Tables de Moise', ar: 'ألواح موسى', en: 'The Tablets of Moses' } },
    ],
    correctAnswer: 1,
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
      { id: 'b', text: { fr: 'Oui, l\'humain a une volonté et un choix dans les limites de la volonté d\'Allah', ar: 'نعم، للإنسان إرادة واختيار في حدود مشيئة الله', en: 'Yes, human has will and choice within the limits of Allah\'s will' } },
      { id: 'c', text: { fr: 'L\'humain a un libre arbitre total', ar: 'للإنسان إرادة حرة مطلقة', en: 'Human has total free will' } },
      { id: 'd', text: { fr: 'Cela dépend de la personne', ar: 'يعتمد على الشخص', en: 'It depends on the person' } },
    ],
    correctAnswer: 1,
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
      { id: 'b', text: { fr: 'La patience (Sabr) est obligatoire ; la satisfaction (Rida) est recommandée', ar: 'الصبر واجب؛ الرضا مستحب', en: 'Patience (Sabr) is obligatory; satisfaction (Rida) is recommended' } },
      { id: 'c', text: { fr: 'Les deux sont obligatoires', ar: 'كلاهما واجب', en: 'Both are obligatory' } },
      { id: 'd', text: { fr: 'Aucun des deux n\'est requis', ar: 'لا يُشترط أي منهما', en: 'Neither is required' } },
    ],
    correctAnswer: 1,
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
      { id: 'a', text: { fr: 'Aucune différence', ar: 'لا فرق', en: 'No difference' } },
      { id: 'b', text: { fr: 'Le Rasul reçoit une nouvelle législation ; le Nabi suit la législation précédente', ar: 'الرسول يأتي بشريعة جديدة؛ النبي يتبع الشريعة السابقة', en: 'Rasul receives new legislation; Nabi follows previous legislation' } },
      { id: 'c', text: { fr: 'Le Nabi est plus important', ar: 'النبي أهم', en: 'Nabi is more important' } },
      { id: 'd', text: { fr: 'Seuls les Arabes ont des Rasul', ar: 'العرب فقط لديهم رسل', en: 'Only Arabs have Rasul' } },
    ],
    correctAnswer: 1,
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
      { id: 'b', text: { fr: 'Muhammad ﷺ', ar: 'محمد ﷺ', en: 'Muhammad ﷺ' } },
      { id: 'c', text: { fr: 'Ibrahim', ar: 'إبراهيم', en: 'Ibrahim' } },
      { id: 'd', text: { fr: 'Il n\'y a pas de dernier prophète', ar: 'لا يوجد خاتم للنبيين', en: 'There is no last prophet' } },
    ],
    correctAnswer: 1,
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
      { id: 'b', text: { fr: 'Nuh, Ibrahim, Musa, \'Isa, Muhammad ﷺ', ar: 'نوح، إبراهيم، موسى، عيسى، محمد ﷺ', en: 'Nuh, Ibrahim, Musa, \'Isa, Muhammad ﷺ' } },
      { id: 'c', text: { fr: 'Adam, Idris, Nuh', ar: 'آدم، إدريس، نوح', en: 'Adam, Idris, Nuh' } },
      { id: 'd', text: { fr: 'Seulement Muhammad ﷺ', ar: 'محمد ﷺ فقط', en: 'Only Muhammad ﷺ' } },
    ],
    correctAnswer: 1,
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
      { id: 'a', text: { fr: 'Oui, ils sont comme tous les humains', ar: 'نعم، مثل بقية البشر', en: 'Yes, they are like all humans' } },
      { id: 'b', text: { fr: 'Ils sont protégés des grands péchés et de persister dans les petits ; des erreurs mineures sont possibles', ar: 'معصومون من الكبائر والإصرار على الصغائر؛ الزلات الصغيرة ممكنة', en: 'Protected from major sins and persisting in minor; small slips are possible' } },
      { id: 'c', text: { fr: 'Non, jamais aucune erreur', ar: 'لا، أبدًا', en: 'No, never any error' } },
      { id: 'd', text: { fr: 'Seulement Adam a péché', ar: 'آدم فقط أخطأ', en: 'Only Adam sinned' } },
    ],
    correctAnswer: 1,
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
      { id: 'b', text: { fr: 'Tous sont honorables ; on se tait sur leurs conflits et on demande pardon pour eux', ar: 'كلهم عدول؛ نسكت عن خلافاتهم ونستغفر لهم', en: 'All are honorable; we remain silent about their conflicts and seek forgiveness for them' } },
      { id: 'c', text: { fr: 'Certains sont bons, d\'autres mauvais', ar: 'بعضهم صالح وبعضهم سيء', en: 'Some are good, some are bad' } },
      { id: 'd', text: { fr: 'Ils n\'ont pas d\'importance particulière', ar: 'ليس لهم أهمية خاصة', en: 'They have no special importance' } },
    ],
    correctAnswer: 1,
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
      { id: 'b', text: { fr: 'Abu Bakr, \'Umar, \'Uthman, \'Ali', ar: 'أبو بكر، عمر، عثمان، علي', en: 'Abu Bakr, \'Umar, \'Uthman, \'Ali' } },
      { id: 'c', text: { fr: 'Hamza, Abbas, Abu Talib, Abu Lahab', ar: 'حمزة، العباس، أبو طالب، أبو لهب', en: 'Hamza, Abbas, Abu Talib, Abu Lahab' } },
      { id: 'd', text: { fr: 'Mu\'awiya, Yazid, Marwan, Abd al-Malik', ar: 'معاوية، يزيد، مروان، عبد الملك', en: 'Mu\'awiya, Yazid, Marwan, Abd al-Malik' } },
    ],
    correctAnswer: 1,
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
// Assemblage de l'examen COMPLET
// ============================================

const allQuestions: ExamQuestion[] = [
  ...tawhidQuestions,    // 5 questions
  ...imanQuestions,      // 5 questions
  ...asmaQuestions,      // 4 questions
  ...akhiraQuestions,    // 4 questions
  ...qadarQuestions,     // 4 questions
  ...nubuwwahQuestions,  // 4 questions
  ...sahabaQuestions,    // 2 questions
  // Total : 28 questions
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
    fr: 'Examen de 24 questions sélectionnées aléatoirement parmi une banque de 28 questions. Couvre les fondements de la foi islamique.',
    ar: 'امتحان من 24 سؤالاً يتم اختيارها عشوائياً من بنك يضم 28 سؤالاً. يغطي أصول العقيدة الإسلامية.',
    en: 'Exam with 24 questions randomly selected from a pool of 28. Covers the foundations of Islamic creed.',
  },
  instructions: {
    fr: 'Vous avez 40 minutes pour répondre à 24 questions. Chaque question a une seule bonne réponse. Un score de 70% est requis pour réussir.',
    ar: 'لديك 40 دقيقة للإجابة على 24 سؤالاً. لكل سؤال إجابة صحيحة واحدة. يُشترط 70% للنجاح.',
    en: 'You have 40 minutes to answer 24 questions. Each question has one correct answer. A score of 70% is required to pass.',
  },
  courseSlug: 'aqeedah',
  questionPool: allQuestions,
  questionsPerExam: 24,
  categoryConfig: [
    { category: 'tawhid', count: 4 },
    { category: 'iman', count: 4 },
    { category: 'asma', count: 4 },
    { category: 'akhira', count: 4 },
    { category: 'qadar', count: 3 },
    { category: 'nubuwwah', count: 3 },
    { category: 'sahaba', count: 2 },
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
    fr: 'Certificat de Maîtrise - Al-\'Aqeedah al-Islamiyyah',
    ar: 'شهادة الإتقان - العقيدة الإسلامية',
    en: 'Mastery Certificate - Islamic Creed',
  },
  createdAt: '2026-01-31',
};

export default examAqeedahFinal;
