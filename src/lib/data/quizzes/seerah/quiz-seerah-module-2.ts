/**
 * Quiz Seerah - Module 2 : La Période Mecquoise
 * 
 * Ce quiz couvre la vie du Prophète ﷺ à La Mecque :
 * début de la révélation, persécution, miracles
 * 
 * Niveau : Débutant à Intermédiaire
 * Questions : 15
 */

import { Quiz, Question } from '../types';

const questions: Question[] = [
  // --- Questions Faciles (5) ---
  {
    id: 'seerah2-q001',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Où le Prophète ﷺ recevait-il la révélation au début ?',
      ar: 'أين كان النبي ﷺ يتلقى الوحي في البداية؟',
      en: 'Where did the Prophet ﷺ receive revelation at the beginning?',
    },
    options: [
      { id: 'a', text: { fr: 'À la Kaaba', ar: 'في الكعبة', en: 'At the Kaaba' } },
      { id: 'b', text: { fr: 'Dans la grotte de Hira', ar: 'في غار حراء', en: 'In the cave of Hira' } },
      { id: 'c', text: { fr: 'Dans la grotte de Thawr', ar: 'في غار ثور', en: 'In the cave of Thawr' } },
      { id: 'd', text: { fr: 'À Médine', ar: 'في المدينة', en: 'In Medina' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ se retirait dans la grotte de Hira sur le mont Nur pour méditer (tahannuth). C\'est là que Jibril lui apparut avec les premiers versets de sourate Al-\'Alaq.',
      ar: 'كان النبي ﷺ يتحنث في غار حراء بجبل النور. هناك ظهر له جبريل بأول آيات سورة العلق.',
      en: 'The Prophet ﷺ would retreat to the cave of Hira on Mount Nur to meditate (tahannuth). There Jibril appeared to him with the first verses of Surah Al-\'Alaq.',
    },
    reference: {
      courseSlug: 'seerah-module-2',
      lessonId: '001-revelation',
    },
    points: 10,
    tags: ['seerah', 'revelation', 'hira'],
  },
  {
    id: 'seerah2-q002',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quels sont les premiers versets révélés au Prophète ﷺ ?',
      ar: 'ما أول الآيات التي نزلت على النبي ﷺ؟',
      en: 'What were the first verses revealed to the Prophet ﷺ?',
    },
    options: [
      { id: 'a', text: { fr: 'Al-Fatiha', ar: 'الفاتحة', en: 'Al-Fatiha' } },
      { id: 'b', text: { fr: '"Iqra bismi Rabbik..." (Sourate Al-\'Alaq)', ar: '"اقرأ باسم ربك..." (سورة العلق)', en: '"Iqra bismi Rabbik..." (Surah Al-\'Alaq)' } },
      { id: 'c', text: { fr: 'Ayat al-Kursi', ar: 'آية الكرسي', en: 'Ayat al-Kursi' } },
      { id: 'd', text: { fr: 'Sourate Al-Ikhlas', ar: 'سورة الإخلاص', en: 'Surah Al-Ikhlas' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: '"Lis au nom de ton Seigneur qui a créé, créé l\'homme d\'une adhérence. Lis, et ton Seigneur est le plus Généreux, qui a enseigné par le calame..." (96:1-5). C\'était en Ramadan, la Nuit du Destin.',
      ar: '"اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ، خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ، اقْرَأْ وَرَبُّكَ الْأَكْرَمُ، الَّذِي عَلَّمَ بِالْقَلَمِ..." (96:1-5). كان في رمضان، ليلة القدر.',
      en: '"Read in the name of your Lord who created, created man from a clot. Read, and your Lord is most Generous, who taught by the pen..." (96:1-5). It was in Ramadan, the Night of Decree.',
    },
    reference: {
      courseSlug: 'seerah-module-2',
      lessonId: '001-revelation',
    },
    points: 10,
    tags: ['seerah', 'quran', 'alaq'],
  },
  {
    id: 'seerah2-q003',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Qui a consolé le Prophète ﷺ après la première révélation ?',
      ar: 'من طمأن النبي ﷺ بعد الوحي الأول؟',
      en: 'Who consoled the Prophet ﷺ after the first revelation?',
    },
    options: [
      { id: 'a', text: { fr: 'Abu Bakr', ar: 'أبو بكر', en: 'Abu Bakr' } },
      { id: 'b', text: { fr: 'Khadija bint Khuwaylid', ar: 'خديجة بنت خويلد', en: 'Khadija bint Khuwaylid' } },
      { id: 'c', text: { fr: 'Abu Talib', ar: 'أبو طالب', en: 'Abu Talib' } },
      { id: 'd', text: { fr: 'Omar ibn al-Khattab', ar: 'عمر بن الخطاب', en: 'Omar ibn al-Khattab' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Khadija رضي الله عنها rassura le Prophète ﷺ : "Allah ne te déshonorera jamais, car tu maintiens les liens de parenté, tu portes le fardeau des faibles, tu aides les démunis, tu honores l\'invité..."',
      ar: 'خديجة رضي الله عنها طمأنت النبي ﷺ: "كلا والله ما يخزيك الله أبداً، إنك لتصل الرحم، وتحمل الكَلّ، وتكسب المعدوم، وتقري الضيف..."',
      en: 'Khadija رضي الله عنها reassured the Prophet ﷺ: "Allah will never disgrace you, for you maintain family ties, bear burdens of the weak, help the destitute, honor the guest..."',
    },
    reference: {
      courseSlug: 'seerah-module-2',
      lessonId: '002-khadija',
    },
    points: 10,
    tags: ['seerah', 'khadija', 'revelation'],
  },
  {
    id: 'seerah2-q004',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'La Da\'wa (prédication) du Prophète ﷺ était secrète pendant les 3 premières années.',
      ar: 'كانت دعوة النبي ﷺ سرية خلال السنوات الثلاث الأولى.',
      en: 'The Prophet\'s ﷺ Da\'wa (preaching) was secret during the first 3 years.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'Pendant les 3 premières années, le Prophète ﷺ prêchait secrètement à ses proches. Puis Allah ordonna : "Avertis les gens de ta tribu les plus proches" (26:214), puis la da\'wa devint publique.',
      ar: 'خلال السنوات الثلاث الأولى، دعا النبي ﷺ المقربين سراً. ثم أمر الله: "وأنذر عشيرتك الأقربين" (26:214)، ثم صارت الدعوة جهرية.',
      en: 'During the first 3 years, the Prophet ﷺ preached secretly to close ones. Then Allah commanded: "Warn your closest kindred" (26:214), then da\'wa became public.',
    },
    reference: {
      courseSlug: 'seerah-module-2',
      lessonId: '003-dawa-secrète',
    },
    points: 10,
    tags: ['seerah', 'dawa', 'secret'],
  },
  {
    id: 'seerah2-q005',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quelle famille a le plus persécuté les premiers musulmans ?',
      ar: 'أي عائلة اضطهدت المسلمين الأوائل أكثر؟',
      en: 'Which family persecuted the early Muslims the most?',
    },
    options: [
      { id: 'a', text: { fr: 'Banu Hashim', ar: 'بنو هاشم', en: 'Banu Hashim' } },
      { id: 'b', text: { fr: 'Banu Makhzum (Abu Jahl)', ar: 'بنو مخزوم (أبو جهل)', en: 'Banu Makhzum (Abu Jahl)' } },
      { id: 'c', text: { fr: 'Banu Khazraj', ar: 'بنو الخزرج', en: 'Banu Khazraj' } },
      { id: 'd', text: { fr: 'Banu Thaqif', ar: 'بنو ثقيف', en: 'Banu Thaqif' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Abu Jahl (Amr ibn Hisham) du clan Banu Makhzum fut le pire ennemi de l\'Islam. Il tortura Bilal, Ammar et sa famille, et orchestra le boycott contre les musulmans.',
      ar: 'أبو جهل (عمرو بن هشام) من بني مخزوم كان أشد أعداء الإسلام. عذّب بلالاً وعماراً وأهله، ودبّر مقاطعة المسلمين.',
      en: 'Abu Jahl (Amr ibn Hisham) of Banu Makhzum clan was Islam\'s worst enemy. He tortured Bilal, Ammar and his family, and orchestrated the boycott against Muslims.',
    },
    reference: {
      courseSlug: 'seerah-module-2',
      lessonId: '004-persecution',
    },
    points: 10,
    tags: ['seerah', 'persecution', 'abu-jahl'],
  },

  // --- Questions Moyennes (6) ---
  {
    id: 'seerah2-q006',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qui était Waraqa ibn Nawfal et quel fut son rôle ?',
      ar: 'من هو ورقة بن نوفل وما دوره؟',
      en: 'Who was Waraqa ibn Nawfal and what was his role?',
    },
    options: [
      { id: 'a', text: { fr: 'Prêtre chrétien qui confirma la prophétie de Muhammad ﷺ', ar: 'راهب مسيحي أكد نبوة محمد ﷺ', en: 'Christian priest who confirmed Muhammad\'s ﷺ prophecy' } },
      { id: 'b', text: { fr: 'Chef des Quraysh', ar: 'زعيم قريش', en: 'Leader of Quraysh' } },
      { id: 'c', text: { fr: 'Premier ennemi de l\'Islam', ar: 'أول أعداء الإسلام', en: 'First enemy of Islam' } },
      { id: 'd', text: { fr: 'Roi d\'Abyssinie', ar: 'ملك الحبشة', en: 'King of Abyssinia' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Waraqa était le cousin de Khadija, un savant chrétien hanif. Il reconnut que l\'ange qui visita Muhammad ﷺ était le même Namus (Jibril) envoyé à Musa. Il mourut peu après, croyant en lui.',
      ar: 'ورقة كان ابن عم خديجة، عالم مسيحي حنيف. عرف أن الملَك الذي زار محمداً ﷺ هو نفس الناموس (جبريل) المرسل لموسى. توفي بعدها مؤمناً به.',
      en: 'Waraqa was Khadija\'s cousin, a Christian hanif scholar. He recognized that the angel who visited Muhammad ﷺ was the same Namus (Jibril) sent to Musa. He died shortly after, believing in him.',
    },
    reference: {
      courseSlug: 'seerah-module-2',
      lessonId: '002-waraqa',
    },
    points: 15,
    tags: ['seerah', 'waraqa', 'revelation'],
  },
  {
    id: 'seerah2-q007',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Pourquoi les musulmans ont-ils émigré en Abyssinie ?',
      ar: 'لماذا هاجر المسلمون إلى الحبشة؟',
      en: 'Why did Muslims emigrate to Abyssinia?',
    },
    options: [
      { id: 'a', text: { fr: 'Pour fuir la persécution, car le Négus était un roi juste', ar: 'للهروب من الاضطهاد، لأن النجاشي كان ملكاً عادلاً', en: 'To escape persecution, as the Negus was a just king' } },
      { id: 'b', text: { fr: 'Pour le commerce', ar: 'للتجارة', en: 'For trade' } },
      { id: 'c', text: { fr: 'Pour conquérir l\'Abyssinie', ar: 'لغزو الحبشة', en: 'To conquer Abyssinia' } },
      { id: 'd', text: { fr: 'Car c\'était un pays musulman', ar: 'لأنها كانت بلداً مسلماً', en: 'Because it was a Muslim country' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ dit : "Allez en Abyssinie car s\'y trouve un roi qui n\'opprime personne." Deux vagues : 1ère (11 personnes) et 2ème (83 hommes + femmes). Le Négus Ashama embrassa l\'Islam.',
      ar: 'قال النبي ﷺ: "اذهبوا إلى الحبشة فإن بها ملكاً لا يُظلم عنده أحد." موجتان: الأولى (11 شخصاً) والثانية (83 رجلاً + نساء). النجاشي أصحمة أسلم.',
      en: 'The Prophet ﷺ said: "Go to Abyssinia for there\'s a king under whom no one is oppressed." Two waves: 1st (11 people) and 2nd (83 men + women). Negus Ashama embraced Islam.',
    },
    reference: {
      courseSlug: 'seerah-module-2',
      lessonId: '005-hijra-abyssinie',
    },
    points: 15,
    tags: ['seerah', 'hijra', 'abyssinia'],
  },
  {
    id: 'seerah2-q008',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que "l\'Année de la Tristesse" (\'Am al-Huzn) ?',
      ar: 'ما هو "عام الحزن"؟',
      en: 'What is the "Year of Sorrow" (\'Am al-Huzn)?',
    },
    options: [
      { id: 'a', text: { fr: 'L\'année où Abu Talib et Khadija moururent (619)', ar: 'السنة التي توفي فيها أبو طالب وخديجة (619م)', en: 'Year when Abu Talib and Khadija died (619)' } },
      { id: 'b', text: { fr: 'L\'année de la bataille d\'Uhud', ar: 'سنة غزوة أحد', en: 'Year of Battle of Uhud' } },
      { id: 'c', text: { fr: 'L\'année de la Hijra', ar: 'سنة الهجرة', en: 'Year of Hijra' } },
      { id: 'd', text: { fr: 'L\'année de la conquête de La Mecque', ar: 'سنة فتح مكة', en: 'Year of Conquest of Mecca' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'En 619 (10e année de la prophétie), Abu Talib (protecteur politique du Prophète ﷺ) et Khadija (son épouse et soutien) moururent à quelques jours d\'intervalle. Ce fut une période très difficile.',
      ar: 'في 619م (السنة 10 من النبوة)، توفي أبو طالب (حامي النبي ﷺ السياسي) وخديجة (زوجته وسنده) بأيام قليلة. كانت فترة صعبة جداً.',
      en: 'In 619 (10th year of prophecy), Abu Talib (Prophet\'s ﷺ political protector) and Khadija (his wife and support) died within days. It was a very difficult period.',
    },
    reference: {
      courseSlug: 'seerah-module-2',
      lessonId: '006-am-huzn',
    },
    points: 15,
    tags: ['seerah', 'huzn', 'khadija', 'abu-talib'],
  },
  {
    id: 'seerah2-q009',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que l\'Isra\' et le Mi\'raj ?',
      ar: 'ما هو الإسراء والمعراج؟',
      en: 'What is the Isra\' and Mi\'raj?',
    },
    options: [
      { id: 'a', text: { fr: 'Voyage nocturne à Jérusalem (Isra\') puis ascension aux cieux (Mi\'raj)', ar: 'رحلة ليلية إلى القدس (الإسراء) ثم العروج للسماوات (المعراج)', en: 'Night journey to Jerusalem (Isra\') then ascension to heavens (Mi\'raj)' } },
      { id: 'b', text: { fr: 'La Hijra vers Médine', ar: 'الهجرة إلى المدينة', en: 'Hijra to Medina' } },
      { id: 'c', text: { fr: 'La conquête de La Mecque', ar: 'فتح مكة', en: 'Conquest of Mecca' } },
      { id: 'd', text: { fr: 'La bataille de Badr', ar: 'غزوة بدر', en: 'Battle of Badr' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ fut transporté de La Mecque à Al-Aqsa (Isra\'), puis monta aux 7 cieux où il rencontra les prophètes et reçut l\'obligation des 5 prières (réduites de 50). C\'était vers 621.',
      ar: 'نُقل النبي ﷺ من مكة إلى الأقصى (الإسراء)، ثم صعد للسماوات السبع حيث لقي الأنبياء وفُرضت الصلوات الخمس (مخففة من 50). كان ذلك حوالي 621م.',
      en: 'The Prophet ﷺ was transported from Mecca to Al-Aqsa (Isra\'), then ascended to 7 heavens where he met prophets and received the 5 prayer obligation (reduced from 50). It was around 621.',
    },
    reference: {
      courseSlug: 'seerah-module-2',
      lessonId: '007-isra-miraj',
    },
    points: 15,
    tags: ['seerah', 'isra', 'miraj'],
  },
  {
    id: 'seerah2-q010',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quel Sahabi confirma immédiatement l\'Isra\' wa Mi\'raj sans douter ?',
      ar: 'أي صحابي صدّق الإسراء والمعراج فوراً دون تردد؟',
      en: 'Which Sahabi immediately confirmed the Isra\' wa Mi\'raj without doubting?',
    },
    options: [
      { id: 'a', text: { fr: 'Omar ibn al-Khattab', ar: 'عمر بن الخطاب', en: 'Omar ibn al-Khattab' } },
      { id: 'b', text: { fr: 'Abu Bakr as-Siddiq', ar: 'أبو بكر الصديق', en: 'Abu Bakr as-Siddiq' } },
      { id: 'c', text: { fr: 'Ali ibn Abi Talib', ar: 'علي بن أبي طالب', en: 'Ali ibn Abi Talib' } },
      { id: 'd', text: { fr: 'Uthman ibn Affan', ar: 'عثمان بن عفان', en: 'Uthman ibn Affan' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Quand les mushrikun dirent à Abu Bakr que Muhammad prétendait avoir voyagé à Jérusalem en une nuit, il répondit : "S\'il l\'a dit, c\'est vrai." C\'est pour cela qu\'il fut nommé "As-Siddiq" (le Véridique).',
      ar: 'لما قال المشركون لأبي بكر إن محمداً يدّعي السفر للقدس في ليلة، قال: "إن كان قال فقد صدق." لذلك سُمي "الصديق".',
      en: 'When mushrikun told Abu Bakr that Muhammad claimed to have traveled to Jerusalem in one night, he said: "If he said it, it\'s true." That\'s why he was called "As-Siddiq" (the Truthful).',
    },
    reference: {
      courseSlug: 'seerah-module-2',
      lessonId: '007-isra-miraj',
    },
    points: 15,
    tags: ['seerah', 'isra', 'abu-bakr'],
  },
  {
    id: 'seerah2-q011',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que le "Boycott de Shi\'b Abi Talib" ?',
      ar: 'ما هي "مقاطعة شِعب أبي طالب"؟',
      en: 'What was the "Boycott of Shi\'b Abi Talib"?',
    },
    options: [
      { id: 'a', text: { fr: 'Siège économique et social de 3 ans contre les Banu Hashim', ar: 'حصار اقتصادي واجتماعي لـ 3 سنوات ضد بني هاشم', en: '3-year economic and social siege against Banu Hashim' } },
      { id: 'b', text: { fr: 'Bataille militaire', ar: 'معركة عسكرية', en: 'Military battle' } },
      { id: 'c', text: { fr: 'Accord de paix', ar: 'اتفاق سلام', en: 'Peace agreement' } },
      { id: 'd', text: { fr: 'Migration vers Médine', ar: 'هجرة إلى المدينة', en: 'Migration to Medina' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les Quraysh imposèrent un boycott total : pas de mariage, pas de commerce, pas de contact avec Banu Hashim et Banu Muttalib. Ils affichèrent le pacte dans la Kaaba. Après 3 ans, des Quraysh brisèrent le pacte.',
      ar: 'فرضت قريش مقاطعة شاملة: لا زواج، لا تجارة، لا تواصل مع بني هاشم وبني المطلب. علّقوا الصحيفة في الكعبة. بعد 3 سنوات، نقض بعض قريش العهد.',
      en: 'Quraysh imposed total boycott: no marriage, no trade, no contact with Banu Hashim and Banu Muttalib. They hung the pact in Kaaba. After 3 years, some Quraysh broke the pact.',
    },
    reference: {
      courseSlug: 'seerah-module-2',
      lessonId: '008-boycott',
    },
    points: 15,
    tags: ['seerah', 'boycott', 'quraysh'],
  },

  // --- Questions Difficiles (4) ---
  {
    id: 'seerah2-q012',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Que s\'est-il passé lors du voyage du Prophète ﷺ à Ta\'if ?',
      ar: 'ماذا حدث في رحلة النبي ﷺ إلى الطائف؟',
      en: 'What happened during the Prophet\'s ﷺ journey to Ta\'if?',
    },
    options: [
      { id: 'a', text: { fr: 'Il fut rejeté et lapidé par les habitants et les enfants', ar: 'رُفض ورُجم من السكان والصبيان', en: 'He was rejected and stoned by inhabitants and children' } },
      { id: 'b', text: { fr: 'Il fut accueilli triomphalement', ar: 'اُستُقبل استقبال الفاتحين', en: 'He was welcomed triumphantly' } },
      { id: 'c', text: { fr: 'Il conquit la ville', ar: 'فتح المدينة', en: 'He conquered the city' } },
      { id: 'd', text: { fr: 'Il resta plusieurs années', ar: 'بقي عدة سنوات', en: 'He stayed several years' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Après la mort d\'Abu Talib, le Prophète ﷺ chercha du soutien à Ta\'if. Les chefs de Thaqif le rejetèrent et envoyèrent les enfants le lapider. Ce fut le jour le plus dur de sa vie selon lui.',
      ar: 'بعد وفاة أبي طالب، سعى النبي ﷺ لإيجاد نصير في الطائف. رؤساء ثقيف رفضوه وأرسلوا الصبيان يرجمونه. قال إنه أشد يوم عليه.',
      en: 'After Abu Talib\'s death, the Prophet ﷺ sought support in Ta\'if. Thaqif leaders rejected him and sent children to stone him. He said it was his hardest day.',
    },
    reference: {
      courseSlug: 'seerah-module-2',
      lessonId: '009-taif',
    },
    points: 20,
    tags: ['seerah', 'taif', 'persecution'],
  },
  {
    id: 'seerah2-q013',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qui sont les premiers martyrs de l\'Islam ?',
      ar: 'من أول شهداء الإسلام؟',
      en: 'Who are the first martyrs of Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Sumayya bint Khayyat et son mari Yasir', ar: 'سمية بنت خياط وزوجها ياسر', en: 'Sumayya bint Khayyat and her husband Yasir' } },
      { id: 'b', text: { fr: 'Hamza ibn Abdul-Muttalib', ar: 'حمزة بن عبد المطلب', en: 'Hamza ibn Abdul-Muttalib' } },
      { id: 'c', text: { fr: 'Bilal ibn Rabah', ar: 'بلال بن رباح', en: 'Bilal ibn Rabah' } },
      { id: 'd', text: { fr: 'Mus\'ab ibn Umayr', ar: 'مصعب بن عمير', en: 'Mus\'ab ibn Umayr' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Sumayya fut tuée par Abu Jahl d\'un coup de lance - première martyre de l\'Islam. Son mari Yasir mourut aussi sous la torture. Leur fils Ammar survécut. Le Prophète ﷺ leur dit : "Patience, famille de Yasir, votre rendez-vous est le Paradis."',
      ar: 'قتلها أبو جهل بطعنة رمح - أول شهيدة في الإسلام. زوجها ياسر مات أيضاً تحت التعذيب. ابنهما عمار نجا. قال لهم النبي ﷺ: "صبراً آل ياسر، فإن موعدكم الجنة."',
      en: 'Sumayya was killed by Abu Jahl with a spear thrust - first martyr of Islam. Her husband Yasir also died under torture. Their son Ammar survived. Prophet ﷺ told them: "Patience, family of Yasir, your appointment is Paradise."',
    },
    reference: {
      courseSlug: 'seerah-module-2',
      lessonId: '004-persecution',
    },
    points: 20,
    tags: ['seerah', 'martyrs', 'sumayya'],
  },
  {
    id: 'seerah2-q014',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qu\'a récité Ja\'far ibn Abi Talib devant le Négus pour défendre l\'Islam ?',
      ar: 'ماذا تلا جعفر بن أبي طالب أمام النجاشي للدفاع عن الإسلام؟',
      en: 'What did Ja\'far ibn Abi Talib recite before the Negus to defend Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Le début de sourate Maryam (versets sur Isa/Marie)', ar: 'بداية سورة مريم (آيات عن عيسى/مريم)', en: 'Beginning of Surah Maryam (verses about Isa/Mary)' } },
      { id: 'b', text: { fr: 'Sourate Al-Fatiha', ar: 'سورة الفاتحة', en: 'Surah Al-Fatiha' } },
      { id: 'c', text: { fr: 'Sourate Al-Ikhlas', ar: 'سورة الإخلاص', en: 'Surah Al-Ikhlas' } },
      { id: 'd', text: { fr: 'Ayat al-Kursi', ar: 'آية الكرسي', en: 'Ayat al-Kursi' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Quand Quraysh envoya Amr ibn al-As réclamer les musulmans, Ja\'far expliqua l\'Islam et récita sourate Maryam. Le Négus pleura et dit : "Ceci et ce qu\'a apporté Issa viennent de la même source."',
      ar: 'لما أرسلت قريش عمرو بن العاص لاسترداد المسلمين، شرح جعفر الإسلام وتلا سورة مريم. بكى النجاشي وقال: "إن هذا والذي جاء به عيسى ليخرج من مشكاة واحدة."',
      en: 'When Quraysh sent Amr ibn al-As to reclaim Muslims, Ja\'far explained Islam and recited Surah Maryam. The Negus wept and said: "This and what Issa brought come from the same source."',
    },
    reference: {
      courseSlug: 'seerah-module-2',
      lessonId: '005-hijra-abyssinie',
    },
    points: 20,
    tags: ['seerah', 'jafar', 'negus'],
  },
  {
    id: 'seerah2-q015',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qui protégea le Prophète ﷺ lors de son retour de Ta\'if et comment ?',
      ar: 'من حمى النبي ﷺ عند عودته من الطائف وكيف؟',
      en: 'Who protected the Prophet ﷺ upon his return from Ta\'if and how?',
    },
    options: [
      { id: 'a', text: { fr: 'Mut\'im ibn \'Adi lui accorda sa protection (jiwar)', ar: 'مُطعم بن عَدي منحه جواره (الحماية)', en: 'Mut\'im ibn \'Adi granted him his protection (jiwar)' } },
      { id: 'b', text: { fr: 'Abu Jahl l\'accueillit', ar: 'أبو جهل استقبله', en: 'Abu Jahl welcomed him' } },
      { id: 'c', text: { fr: 'Il entra secrètement', ar: 'دخل سراً', en: 'He entered secretly' } },
      { id: 'd', text: { fr: 'Les Ansar vinrent le chercher', ar: 'الأنصار جاؤوا لإحضاره', en: 'The Ansar came to get him' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Mut\'im ibn \'Adi, bien que mushrik, accorda sa protection au Prophète ﷺ pour rentrer à La Mecque en sécurité. Le Prophète ﷺ n\'oublia jamais ce geste et dit après Badr : "Si Mut\'im était vivant et m\'avait demandé ces captifs, je les lui aurais donnés."',
      ar: 'مُطعم بن عدي، رغم كونه مشركاً، منح النبي ﷺ جواره ليدخل مكة بأمان. لم ينسَ النبي ﷺ هذا وقال بعد بدر: "لو كان المُطعم حياً ثم كلمني في هؤلاء النتنى لتركتهم له."',
      en: 'Mut\'im ibn \'Adi, though mushrik, granted the Prophet ﷺ his protection to enter Mecca safely. The Prophet ﷺ never forgot this and said after Badr: "If Mut\'im were alive and asked me for these captives, I would have given them to him."',
    },
    reference: {
      courseSlug: 'seerah-module-2',
      lessonId: '009-taif',
    },
    points: 20,
    tags: ['seerah', 'mutim', 'protection'],
  },
];

// ============================================
// Export du Quiz
// ============================================

export const quizSeerahModule2: Quiz = {
  id: 'quiz-seerah-module-2',
  type: 'module',
  courseSlug: 'seerah-module-2',
  title: {
    fr: 'Quiz : Seerah Module 2 - La Période Mecquoise',
    ar: 'اختبار: السيرة الوحدة 2 - الفترة المكية',
    en: 'Quiz: Seerah Module 2 - The Meccan Period',
  },
  description: {
    fr: 'Testez vos connaissances sur la vie du Prophète ﷺ à La Mecque : révélation, persécution, Isra\' Mi\'raj.',
    ar: 'اختبر معلوماتك عن حياة النبي ﷺ في مكة: الوحي، الاضطهاد، الإسراء والمعراج.',
    en: 'Test your knowledge of the Prophet\'s ﷺ life in Mecca: revelation, persecution, Isra\' Mi\'raj.',
  },
  instructions: {
    fr: 'Revivez les épreuves des premiers musulmans à La Mecque.',
    ar: 'عِش تجارب المسلمين الأوائل في مكة.',
    en: 'Relive the trials of early Muslims in Mecca.',
  },
  questions,
  duration: 12,
  passingScore: 70,
  maxAttempts: 3,
  shuffleQuestions: true,
  shuffleOptions: false,
  showCorrectAnswer: true,
  showExplanation: 'after_submit',
  allowReview: true,
  createdAt: '2026-01-31',
  updatedAt: '2026-01-31',
};

export default quizSeerahModule2;
