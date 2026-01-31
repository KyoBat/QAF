/**
 * Examen Final - Fiqh de la Prière (Salat)
 * 
 * 40 questions QCM couvrant tous les aspects de la prière :
 * - Purification (Tahara) : 8 questions
 * - Ablutions (Wudu) : 8 questions
 * - Appel à la prière (Adhan/Iqama) : 4 questions
 * - La prière (Salat) : 12 questions
 * - Prosternation de l'oubli (Sujud Sahw) : 4 questions
 * - Prières surérogatoires : 4 questions
 */

import { ExamConfig, ExamQuestion } from '../types';

// ============================================
// Questions - Purification (Tahara)
// ============================================

const taharaQuestions: ExamQuestion[] = [
  {
    id: 'salat-tahara-001',
    question: {
      fr: 'Quelle est la définition de la "Tahara" en Islam ?',
      ar: 'ما تعريف الطهارة في الإسلام؟',
      en: 'What is the definition of "Tahara" in Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'La propreté du corps uniquement', ar: 'نظافة الجسد فقط', en: 'Body cleanliness only' } },
      { id: 'b', text: { fr: 'La douche quotidienne', ar: 'الاستحمام اليومي', en: 'Daily shower' } },
      { id: 'c', text: { fr: 'Le lavage des mains avant de manger', ar: 'غسل اليدين قبل الأكل', en: 'Washing hands before eating' } },
      { id: 'd', text: { fr: 'La purification rituelle du corps et des vêtements des impuretés', ar: 'التطهر الشرعي للبدن والثياب من النجاسات', en: 'Ritual purification of body and clothes from impurities' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'La Tahara est la purification rituelle qui permet de lever l\'état d\'impureté (hadath) ou d\'enlever les souillures (najasa).',
      ar: 'الطهارة هي التطهر الشرعي الذي يرفع الحدث أو يزيل النجاسة.',
      en: 'Tahara is the ritual purification that removes the state of impurity (hadath) or physical impurities (najasa).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'tahara',
  },
  {
    id: 'salat-tahara-002',
    question: {
      fr: 'Quels sont les deux types de Tahara ?',
      ar: 'ما نوعا الطهارة؟',
      en: 'What are the two types of Tahara?',
    },
    options: [
      { id: 'a', text: { fr: 'Tahara de l\'eau et Tahara du feu', ar: 'طهارة الماء وطهارة النار', en: 'Water Tahara and Fire Tahara' } },
      { id: 'b', text: { fr: 'Tahara obligatoire et Tahara recommandée', ar: 'طهارة واجبة وطهارة مستحبة', en: 'Obligatory Tahara and Recommended Tahara' } },
      { id: 'c', text: { fr: 'Tahara du Hadath et Tahara de la Najasa', ar: 'طهارة الحدث وطهارة النجاسة', en: 'Tahara from Hadath and Tahara from Najasa' } },
      { id: 'd', text: { fr: 'Grande Tahara et petite Tahara', ar: 'طهارة كبرى وطهارة صغرى', en: 'Major Tahara and Minor Tahara' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'La Tahara se divise en deux : purification du Hadath (état d\'impureté rituelle) par le wudu ou ghusl, et purification de la Najasa (impuretés physiques).',
      ar: 'الطهارة تنقسم إلى: طهارة الحدث بالوضوء أو الغسل، وطهارة النجاسة.',
      en: 'Tahara is divided into: purification from Hadath (ritual impurity) through wudu or ghusl, and purification from Najasa (physical impurities).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'tahara',
  },
  {
    id: 'salat-tahara-003',
    question: {
      fr: 'Qu\'est-ce que le "Hadath Akbar" (grande impureté) ?',
      ar: 'ما هو الحدث الأكبر؟',
      en: 'What is "Hadath Akbar" (major impurity)?',
    },
    options: [
      { id: 'a', text: { fr: 'L\'état de Janaba, les menstrues ou les lochies', ar: 'حالة الجنابة أو الحيض أو النفاس', en: 'State of Janaba, menstruation or postpartum bleeding' } },
      { id: 'b', text: { fr: 'L\'état après avoir uriné', ar: 'الحالة بعد التبول', en: 'State after urinating' } },
      { id: 'c', text: { fr: 'L\'état après avoir dormi', ar: 'الحالة بعد النوم', en: 'State after sleeping' } },
      { id: 'd', text: { fr: 'L\'état après avoir mangé de la viande', ar: 'الحالة بعد أكل اللحم', en: 'State after eating meat' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Hadath Akbar nécessite le Ghusl (bain rituel complet). Il inclut la Janaba, les menstrues et les lochies.',
      ar: 'الحدث الأكبر يوجب الغسل، ويشمل الجنابة والحيض والنفاس.',
      en: 'Hadath Akbar requires Ghusl (complete ritual bath). It includes Janaba, menstruation and postpartum bleeding.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'tahara',
  },
  {
    id: 'salat-tahara-004',
    question: {
      fr: 'Quel type d\'eau est valide pour la purification ?',
      ar: 'ما نوع الماء الصالح للتطهر؟',
      en: 'What type of water is valid for purification?',
    },
    options: [
      { id: 'a', text: { fr: 'Uniquement l\'eau de pluie', ar: 'ماء المطر فقط', en: 'Only rainwater' } },
      { id: 'b', text: { fr: 'L\'eau de Zamzam uniquement', ar: 'ماء زمزم فقط', en: 'Zamzam water only' } },
      { id: 'c', text: { fr: 'L\'eau chaude uniquement', ar: 'الماء الساخن فقط', en: 'Hot water only' } },
      { id: 'd', text: { fr: 'L\'eau pure (Tahur) qui n\'a pas changé de couleur, odeur ou goût', ar: 'الماء الطهور الذي لم يتغير لونه أو ريحه أو طعمه', en: 'Pure water (Tahur) unchanged in color, smell or taste' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'L\'eau Tahur (pure et purifiante) est celle qui garde ses caractéristiques naturelles sans changement de couleur, odeur ou goût par une impureté.',
      ar: 'الماء الطهور هو الباقي على صفاته الطبيعية دون تغير لونه أو ريحه أو طعمه بنجاسة.',
      en: 'Tahur water (pure and purifying) keeps its natural characteristics without change in color, smell or taste by impurity.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'tahara',
  },
  {
    id: 'salat-tahara-005',
    question: {
      fr: 'Parmi ces éléments, lequel est considéré comme une Najasa (impureté) ?',
      ar: 'أي من هذه العناصر يعتبر نجاسة؟',
      en: 'Which of these is considered Najasa (impurity)?',
    },
    options: [
      { id: 'a', text: { fr: 'La sueur', ar: 'العرق', en: 'Sweat' } },
      { id: 'b', text: { fr: 'Les larmes', ar: 'الدموع', en: 'Tears' } },
      { id: 'c', text: { fr: 'L\'urine', ar: 'البول', en: 'Urine' } },
      { id: 'd', text: { fr: 'La salive', ar: 'اللعاب', en: 'Saliva' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'L\'urine fait partie des impuretés (najassat) par consensus des savants, contrairement à la sueur, aux larmes et à la salive qui sont pures.',
      ar: 'البول من النجاسات بإجماع العلماء، بخلاف العرق والدموع واللعاب فهي طاهرة.',
      en: 'Urine is among impurities (najassat) by scholarly consensus, unlike sweat, tears and saliva which are pure.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'tahara',
  },
  {
    id: 'salat-tahara-006',
    question: {
      fr: 'Comment se purifie-t-on de l\'urine d\'un nourrisson garçon qui ne mange que du lait ?',
      ar: 'كيف يُطهَّر بول الغلام الرضيع الذي لم يأكل الطعام؟',
      en: 'How does one purify from the urine of an infant boy who only drinks milk?',
    },
    options: [
      { id: 'a', text: { fr: 'Obligatoirement par lavage complet', ar: 'بالغسل الكامل وجوباً', en: 'Necessarily by complete washing' } },
      { id: 'b', text: { fr: 'Par aspersion d\'eau (Nadh)', ar: 'بالنضح بالماء', en: 'By sprinkling water (Nadh)' } },
      { id: 'c', text: { fr: 'Elle n\'est pas impure', ar: 'ليست نجسة', en: 'It is not impure' } },
      { id: 'd', text: { fr: 'Par le Tayammum', ar: 'بالتيمم', en: 'By Tayammum' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Selon le hadith, l\'urine du nourrisson garçon qui ne mange pas encore est purifiée par simple aspersion d\'eau (nadh), tandis que celle de la fille nécessite un lavage.',
      ar: 'بحسب الحديث، بول الغلام الرضيع الذي لم يأكل الطعام يُطهَّر بالنضح، بينما بول الجارية يُغسل.',
      en: 'According to the hadith, the urine of an infant boy who doesn\'t eat yet is purified by sprinkling water (nadh), while a girl\'s requires washing.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'tahara',
  },
  {
    id: 'salat-tahara-007',
    question: {
      fr: 'Qu\'est-ce que l\'Istinja ?',
      ar: 'ما هو الاستنجاء؟',
      en: 'What is Istinja?',
    },
    options: [
      { id: 'a', text: { fr: 'Le nettoyage des parties intimes après avoir fait ses besoins avec de l\'eau', ar: 'تنظيف السبيلين بعد قضاء الحاجة بالماء', en: 'Cleaning private parts after relieving oneself with water' } },
      { id: 'b', text: { fr: 'Le lavage du corps entier', ar: 'غسل الجسم كله', en: 'Washing the entire body' } },
      { id: 'c', text: { fr: 'Le lavage des mains avant la prière', ar: 'غسل اليدين قبل الصلاة', en: 'Washing hands before prayer' } },
      { id: 'd', text: { fr: 'Le nettoyage des dents', ar: 'تنظيف الأسنان', en: 'Teeth cleaning' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'L\'Istinja est le nettoyage des parties intimes avec de l\'eau après avoir fait ses besoins. L\'Istijmar est le nettoyage avec des pierres ou du papier.',
      ar: 'الاستنجاء هو تنظيف السبيلين بالماء بعد قضاء الحاجة. والاستجمار هو التنظيف بالحجارة أو المناديل.',
      en: 'Istinja is cleaning private parts with water after relieving oneself. Istijmar is cleaning with stones or paper.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'tahara',
  },
  {
    id: 'salat-tahara-008',
    question: {
      fr: 'Quand le Tayammum (ablution sèche) est-il permis ?',
      ar: 'متى يُباح التيمم؟',
      en: 'When is Tayammum (dry ablution) permitted?',
    },
    options: [
      { id: 'a', text: { fr: 'Quand on est pressé', ar: 'عند الاستعجال', en: 'When in a hurry' } },
      { id: 'b', text: { fr: 'Uniquement en voyage', ar: 'في السفر فقط', en: 'Only when traveling' } },
      { id: 'c', text: { fr: 'Quand l\'eau est absente ou son usage est nuisible', ar: 'عند فقد الماء أو العجز عن استعماله', en: 'When water is absent or its use is harmful' } },
      { id: 'd', text: { fr: 'Quand l\'eau est froide', ar: 'عندما يكون الماء بارداً', en: 'When water is cold' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le Tayammum est permis en cas d\'absence d\'eau ou d\'incapacité à l\'utiliser (maladie, blessure, froid extrême sans moyen de chauffer).',
      ar: 'التيمم يُباح عند فقد الماء أو العجز عن استعماله بسبب مرض أو جرح أو برد شديد.',
      en: 'Tayammum is permitted when water is absent or one cannot use it (illness, injury, extreme cold without means to heat).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'tahara',
  },
];

// ============================================
// Questions - Ablutions (Wudu)
// ============================================

const wuduQuestions: ExamQuestion[] = [
  {
    id: 'salat-wudu-001',
    question: {
      fr: 'Combien y a-t-il de piliers (Arkan) du Wudu ?',
      ar: 'كم عدد أركان الوضوء؟',
      en: 'How many pillars (Arkan) does Wudu have?',
    },
    options: [
      { id: 'a', text: { fr: '6 piliers', ar: '6 أركان', en: '6 pillars' } },
      { id: 'b', text: { fr: '4 piliers', ar: '4 أركان', en: '4 pillars' } },
      { id: 'c', text: { fr: '3 piliers', ar: '3 أركان', en: '3 pillars' } },
      { id: 'd', text: { fr: '5 piliers', ar: '5 أركان', en: '5 pillars' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les 6 piliers du Wudu sont : 1) Laver le visage, 2) Laver les mains jusqu\'aux coudes, 3) Essuyer la tête, 4) Laver les pieds, 5) L\'ordre, 6) L\'enchaînement sans interruption.',
      ar: 'أركان الوضوء 6: غسل الوجه، غسل اليدين إلى المرفقين، مسح الرأس، غسل الرجلين، الترتيب، والموالاة.',
      en: 'The 6 pillars of Wudu are: 1) Washing face, 2) Washing hands to elbows, 3) Wiping head, 4) Washing feet, 5) Order, 6) Continuity.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'wudu',
  },
  {
    id: 'salat-wudu-002',
    question: {
      fr: 'Quelle est la première action recommandée (Sunna) au début du Wudu ?',
      ar: 'ما أول سنة في بداية الوضوء؟',
      en: 'What is the first recommended action (Sunna) at the beginning of Wudu?',
    },
    options: [
      { id: 'a', text: { fr: 'Laver les pieds', ar: 'غسل الرجلين', en: 'Washing feet' } },
      { id: 'b', text: { fr: 'Laver le visage', ar: 'غسل الوجه', en: 'Washing face' } },
      { id: 'c', text: { fr: 'Essuyer la tête', ar: 'مسح الرأس', en: 'Wiping head' } },
      { id: 'd', text: { fr: 'Dire Bismillah', ar: 'قول بسم الله', en: 'Saying Bismillah' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Dire "Bismillah" au début du Wudu est une Sunna mu\'akkada (fortement recommandée). Certains savants la considèrent obligatoire.',
      ar: 'قول "بسم الله" في بداية الوضوء سنة مؤكدة، وبعض العلماء يوجبها.',
      en: 'Saying "Bismillah" at the beginning of Wudu is a mu\'akkada Sunna (strongly recommended). Some scholars consider it obligatory.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'wudu',
  },
  {
    id: 'salat-wudu-003',
    question: {
      fr: 'Jusqu\'où doit-on laver les bras lors du Wudu ?',
      ar: 'إلى أين يجب غسل اليدين في الوضوء؟',
      en: 'How far should one wash the arms during Wudu?',
    },
    options: [
      { id: 'a', text: { fr: 'Jusqu\'aux poignets', ar: 'إلى الرسغين', en: 'Up to the wrists' } },
      { id: 'b', text: { fr: 'Jusqu\'aux épaules', ar: 'إلى الكتفين', en: 'Up to the shoulders' } },
      { id: 'c', text: { fr: 'Jusqu\'aux coudes inclus', ar: 'إلى المرفقين مع إدخالهما', en: 'Up to and including the elbows' } },
      { id: 'd', text: { fr: 'Juste les mains', ar: 'الكفين فقط', en: 'Just the hands' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Allah dit : "lavez vos visages et vos mains jusqu\'aux coudes" (5:6). Les coudes font partie de ce qui doit être lavé.',
      ar: 'قال الله تعالى: "وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ"، والمرافق داخلة في الغسل.',
      en: 'Allah says: "wash your faces and your hands up to the elbows" (5:6). The elbows are included in what must be washed.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'wudu',
  },
  {
    id: 'salat-wudu-004',
    question: {
      fr: 'Parmi les suivants, qu\'est-ce qui annule le Wudu ?',
      ar: 'أي مما يلي ينقض الوضوء؟',
      en: 'Which of the following invalidates Wudu?',
    },
    options: [
      { id: 'a', text: { fr: 'Manger de la viande de chameau', ar: 'أكل لحم الإبل', en: 'Eating camel meat' } },
      { id: 'b', text: { fr: 'Parler pendant le Wudu', ar: 'الكلام أثناء الوضوء', en: 'Speaking during Wudu' } },
      { id: 'c', text: { fr: 'Toucher le Mushaf', ar: 'لمس المصحف', en: 'Touching the Mushaf' } },
      { id: 'd', text: { fr: 'Réciter le Coran', ar: 'قراءة القرآن', en: 'Reciting Quran' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Selon le hadith rapporté par Muslim, manger de la viande de chameau annule le Wudu. C\'est l\'avis de l\'Imam Ahmad et d\'autres.',
      ar: 'بحسب الحديث في صحيح مسلم، أكل لحم الإبل ينقض الوضوء، وهو مذهب الإمام أحمد وغيره.',
      en: 'According to the hadith in Muslim, eating camel meat invalidates Wudu. This is the view of Imam Ahmad and others.',
    },
    points: 4,
    difficulty: 'hard',
    category: 'wudu',
  },
  {
    id: 'salat-wudu-005',
    question: {
      fr: 'Quel est le jugement du Wudu pour la prière ?',
      ar: 'ما حكم الوضوء للصلاة؟',
      en: 'What is the ruling on Wudu for prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'Sunna mu\'akkada', ar: 'سنة مؤكدة', en: 'Confirmed Sunna' } },
      { id: 'b', text: { fr: 'Mustahabb (recommandé)', ar: 'مستحب', en: 'Recommended' } },
      { id: 'c', text: { fr: 'Wajib (obligatoire) et condition de validité', ar: 'واجب وشرط لصحة الصلاة', en: 'Obligatory and condition for validity' } },
      { id: 'd', text: { fr: 'Mubah (permis)', ar: 'مباح', en: 'Permissible' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le Wudu est obligatoire et constitue une condition de validité de la prière. Le Prophète ﷺ a dit : "Allah n\'accepte pas la prière sans purification."',
      ar: 'الوضوء واجب وشرط لصحة الصلاة. قال النبي ﷺ: "لا يقبل الله صلاة بغير طهور."',
      en: 'Wudu is obligatory and a condition for prayer validity. The Prophet ﷺ said: "Allah does not accept prayer without purification."',
    },
    points: 2,
    difficulty: 'easy',
    category: 'wudu',
  },
  {
    id: 'salat-wudu-006',
    question: {
      fr: 'Que doit-on essuyer lors du masah (essuyage) de la tête ?',
      ar: 'ماذا يُمسح عند مسح الرأس؟',
      en: 'What should be wiped during the masah (wiping) of the head?',
    },
    options: [
      { id: 'a', text: { fr: 'Toute la tête avec les oreilles', ar: 'جميع الرأس مع الأذنين', en: 'The entire head including ears' } },
      { id: 'b', text: { fr: 'Seulement le front', ar: 'الجبهة فقط', en: 'Only the forehead' } },
      { id: 'c', text: { fr: 'Seulement le haut de la tête', ar: 'أعلى الرأس فقط', en: 'Only the top of the head' } },
      { id: 'd', text: { fr: 'Seulement l\'arrière de la tête', ar: 'مؤخرة الرأس فقط', en: 'Only the back of the head' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'La Sunna est d\'essuyer toute la tête de l\'avant vers l\'arrière puis revenir, et les oreilles font partie de la tête.',
      ar: 'السنة مسح جميع الرأس من الأمام إلى الخلف ثم العودة، والأذنان من الرأس.',
      en: 'The Sunna is to wipe the entire head from front to back and return, and the ears are part of the head.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'wudu',
  },
  {
    id: 'salat-wudu-007',
    question: {
      fr: 'Combien de fois le Prophète ﷺ lavait-il généralement chaque membre ?',
      ar: 'كم مرة كان النبي ﷺ يغسل كل عضو عادة؟',
      en: 'How many times did the Prophet ﷺ usually wash each limb?',
    },
    options: [
      { id: 'a', text: { fr: 'Une fois', ar: 'مرة واحدة', en: 'Once' } },
      { id: 'b', text: { fr: 'Deux fois', ar: 'مرتين', en: 'Twice' } },
      { id: 'c', text: { fr: 'Trois fois', ar: 'ثلاث مرات', en: 'Three times' } },
      { id: 'd', text: { fr: 'Quatre fois', ar: 'أربع مرات', en: 'Four times' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'La Sunna est de laver chaque membre trois fois. Une fois est le minimum obligatoire, et il est interdit de dépasser trois.',
      ar: 'السنة غسل كل عضو ثلاث مرات. والمرة الواحدة هي الحد الأدنى الواجب، ويحرم الزيادة على ثلاث.',
      en: 'The Sunna is to wash each limb three times. Once is the minimum obligation, and exceeding three is forbidden.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'wudu',
  },
  {
    id: 'salat-wudu-008',
    question: {
      fr: 'Que dit-on après avoir terminé le Wudu ?',
      ar: 'ماذا يُقال بعد الانتهاء من الوضوء؟',
      en: 'What is said after completing Wudu?',
    },
    options: [
      { id: 'a', text: { fr: 'Subhan Allah', ar: 'سبحان الله', en: 'Subhan Allah' } },
      { id: 'b', text: { fr: 'La hawla wa la quwwata illa billah', ar: 'لا حول ولا قوة إلا بالله', en: 'La hawla wa la quwwata illa billah' } },
      { id: 'c', text: { fr: 'Astaghfirullah', ar: 'أستغفر الله', en: 'Astaghfirullah' } },
      { id: 'd', text: { fr: 'Ash-hadu an la ilaha illa Allah...', ar: 'أشهد أن لا إله إلا الله...', en: 'Ash-hadu an la ilaha illa Allah...' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Quiconque fait le wudu puis dit : Ash-hadu an la ilaha illa Allah wahdahu la sharika lah, wa ash-hadu anna Muhammadan abduhu wa rasuluh..."',
      ar: 'قال النبي ﷺ: "من توضأ ثم قال: أشهد أن لا إله إلا الله وحده لا شريك له، وأشهد أن محمداً عبده ورسوله..."',
      en: 'The Prophet ﷺ said: "Whoever performs wudu then says: Ash-hadu an la ilaha illa Allah wahdahu la sharika lah, wa ash-hadu anna Muhammadan abduhu wa rasuluh..."',
    },
    points: 2,
    difficulty: 'easy',
    category: 'wudu',
  },
];

// ============================================
// Questions - Adhan et Iqama
// ============================================

const adhanQuestions: ExamQuestion[] = [
  {
    id: 'salat-adhan-001',
    question: {
      fr: 'Quel est le statut juridique de l\'Adhan pour les prières obligatoires ?',
      ar: 'ما حكم الأذان للصلوات المكتوبة؟',
      en: 'What is the legal status of Adhan for obligatory prayers?',
    },
    options: [
      { id: 'a', text: { fr: 'Obligatoire pour chaque individu (Fard Ayn)', ar: 'فرض عين', en: 'Individual obligation (Fard Ayn)' } },
      { id: 'b', text: { fr: 'Simplement recommandé', ar: 'مستحب فقط', en: 'Simply recommended' } },
      { id: 'c', text: { fr: 'Obligation communautaire (Fard Kifaya)', ar: 'فرض كفاية', en: 'Communal obligation (Fard Kifaya)' } },
      { id: 'd', text: { fr: 'Permis mais pas demandé', ar: 'مباح وغير مطلوب', en: 'Permissible but not required' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'L\'Adhan est un Fard Kifaya : si quelques-uns l\'accomplissent, l\'obligation tombe pour les autres. C\'est un symbole de l\'Islam.',
      ar: 'الأذان فرض كفاية: إذا قام به البعض سقط عن الباقين. وهو من شعائر الإسلام.',
      en: 'Adhan is Fard Kifaya: if some perform it, the obligation falls from others. It is a symbol of Islam.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'adhan',
  },
  {
    id: 'salat-adhan-002',
    question: {
      fr: 'Combien de fois dit-on "Allahu Akbar" au début de l\'Adhan ?',
      ar: 'كم مرة يُقال "الله أكبر" في بداية الأذان؟',
      en: 'How many times is "Allahu Akbar" said at the beginning of Adhan?',
    },
    options: [
      { id: 'a', text: { fr: '2 fois', ar: 'مرتين', en: '2 times' } },
      { id: 'b', text: { fr: '3 fois', ar: '3 مرات', en: '3 times' } },
      { id: 'c', text: { fr: '4 fois', ar: '4 مرات', en: '4 times' } },
      { id: 'd', text: { fr: '1 fois', ar: 'مرة واحدة', en: '1 time' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'L\'Adhan commence par "Allahu Akbar" répété 4 fois selon la Sunna authentique.',
      ar: 'الأذان يبدأ بـ "الله أكبر" مكررة 4 مرات حسب السنة الصحيحة.',
      en: 'The Adhan begins with "Allahu Akbar" repeated 4 times according to authentic Sunna.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'adhan',
  },
  {
    id: 'salat-adhan-003',
    question: {
      fr: 'Quelle phrase est ajoutée dans l\'Adhan du Fajr ?',
      ar: 'ما العبارة المضافة في أذان الفجر؟',
      en: 'What phrase is added in the Fajr Adhan?',
    },
    options: [
      { id: 'a', text: { fr: 'As-salatu khayrun min an-nawm', ar: 'الصلاة خير من النوم', en: 'As-salatu khayrun min an-nawm' } },
      { id: 'b', text: { fr: 'Allahu Akbar Kabira', ar: 'الله أكبر كبيرا', en: 'Allahu Akbar Kabira' } },
      { id: 'c', text: { fr: 'Hayya ala al-falah', ar: 'حي على الفلاح', en: 'Hayya ala al-falah' } },
      { id: 'd', text: { fr: 'Aucune phrase n\'est ajoutée', ar: 'لا تُضاف أي عبارة', en: 'No phrase is added' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: '"As-salatu khayrun min an-nawm" (La prière est meilleure que le sommeil) est ajoutée deux fois après "Hayya ala al-falah" dans l\'Adhan du Fajr.',
      ar: '"الصلاة خير من النوم" تُضاف مرتين بعد "حي على الفلاح" في أذان الفجر.',
      en: '"As-salatu khayrun min an-nawm" (Prayer is better than sleep) is added twice after "Hayya ala al-falah" in the Fajr Adhan.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'adhan',
  },
  {
    id: 'salat-adhan-004',
    question: {
      fr: 'Que doit dire l\'auditeur quand le muezzin dit "Hayya ala as-salah" ?',
      ar: 'ماذا يقول السامع عند قول المؤذن "حي على الصلاة"؟',
      en: 'What should the listener say when the muezzin says "Hayya ala as-salah"?',
    },
    options: [
      { id: 'a', text: { fr: 'Répéter "Hayya ala as-salah"', ar: 'يكرر "حي على الصلاة"', en: 'Repeat "Hayya ala as-salah"' } },
      { id: 'b', text: { fr: 'Subhan Allah', ar: 'سبحان الله', en: 'Subhan Allah' } },
      { id: 'c', text: { fr: 'Allahu Akbar', ar: 'الله أكبر', en: 'Allahu Akbar' } },
      { id: 'd', text: { fr: 'La hawla wa la quwwata illa billah', ar: 'لا حول ولا قوة إلا بالله', en: 'La hawla wa la quwwata illa billah' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Quand le muezzin dit "Hayya ala as-salah" ou "Hayya ala al-falah", on répond : "La hawla wa la quwwata illa billah".',
      ar: 'عند قول المؤذن "حي على الصلاة" أو "حي على الفلاح"، يُجاب: "لا حول ولا قوة إلا بالله".',
      en: 'When the muezzin says "Hayya ala as-salah" or "Hayya ala al-falah", one responds: "La hawla wa la quwwata illa billah".',
    },
    points: 3,
    difficulty: 'medium',
    category: 'adhan',
  },
];

// ============================================
// Questions - La Prière (Salat)
// ============================================

const salatQuestions: ExamQuestion[] = [
  {
    id: 'salat-salat-001',
    question: {
      fr: 'Combien de rak\'at compte la prière du Dhuhr ?',
      ar: 'كم عدد ركعات صلاة الظهر؟',
      en: 'How many rak\'at does the Dhuhr prayer have?',
    },
    options: [
      { id: 'a', text: { fr: '2 rak\'at', ar: 'ركعتان', en: '2 rak\'at' } },
      { id: 'b', text: { fr: '3 rak\'at', ar: '3 ركعات', en: '3 rak\'at' } },
      { id: 'c', text: { fr: '4 rak\'at', ar: '4 ركعات', en: '4 rak\'at' } },
      { id: 'd', text: { fr: '5 rak\'at', ar: '5 ركعات', en: '5 rak\'at' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'La prière du Dhuhr comporte 4 rak\'at. C\'est la même chose pour le Asr et le Isha.',
      ar: 'صلاة الظهر 4 ركعات، وكذلك العصر والعشاء.',
      en: 'The Dhuhr prayer has 4 rak\'at. Same for Asr and Isha.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'salat',
  },
  {
    id: 'salat-salat-002',
    question: {
      fr: 'Quels sont les piliers (Arkan) de la prière ?',
      ar: 'ما هي أركان الصلاة؟',
      en: 'What are the pillars (Arkan) of prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'Le Takbir, la lecture, le ruku, le sujud, et le tashahud final', ar: 'التكبير والقراءة والركوع والسجود والتشهد الأخير', en: 'Takbir, recitation, ruku, sujud, and final tashahud' } },
      { id: 'b', text: { fr: 'Seulement le ruku et le sujud', ar: 'الركوع والسجود فقط', en: 'Only ruku and sujud' } },
      { id: 'c', text: { fr: 'Seulement la récitation de la Fatiha', ar: 'قراءة الفاتحة فقط', en: 'Only reciting Al-Fatiha' } },
      { id: 'd', text: { fr: 'Le Wudu et la Qibla', ar: 'الوضوء والقبلة', en: 'Wudu and Qibla' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les piliers de la prière incluent : le Takbir d\'entrée, la station debout, la Fatiha, le Ruku, le Sujud, le Tashahud final, et le Taslim.',
      ar: 'أركان الصلاة تشمل: تكبيرة الإحرام، القيام، الفاتحة، الركوع، السجود، التشهد الأخير، والتسليم.',
      en: 'Prayer pillars include: opening Takbir, standing, Al-Fatiha, Ruku, Sujud, final Tashahud, and Taslim.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'salat',
  },
  {
    id: 'salat-salat-003',
    question: {
      fr: 'Quelle sourate est obligatoire dans chaque rak\'a ?',
      ar: 'أي سورة واجبة في كل ركعة؟',
      en: 'Which surah is obligatory in every rak\'a?',
    },
    options: [
      { id: 'a', text: { fr: 'Sourate Al-Ikhlas', ar: 'سورة الإخلاص', en: 'Surah Al-Ikhlas' } },
      { id: 'b', text: { fr: 'Sourate Al-Baqara', ar: 'سورة البقرة', en: 'Surah Al-Baqara' } },
      { id: 'c', text: { fr: 'Sourate Al-Fatiha', ar: 'سورة الفاتحة', en: 'Surah Al-Fatiha' } },
      { id: 'd', text: { fr: 'Sourate An-Nas', ar: 'سورة الناس', en: 'Surah An-Nas' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Pas de prière pour celui qui ne récite pas la Fatiha du Livre" (Bukhari et Muslim).',
      ar: 'قال النبي ﷺ: "لا صلاة لمن لم يقرأ بفاتحة الكتاب" (البخاري ومسلم).',
      en: 'The Prophet ﷺ said: "There is no prayer for one who does not recite the Opening of the Book" (Bukhari and Muslim).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'salat',
  },
  {
    id: 'salat-salat-004',
    question: {
      fr: 'Que dit-on dans le Ruku ?',
      ar: 'ماذا يُقال في الركوع؟',
      en: 'What is said in Ruku?',
    },
    options: [
      { id: 'a', text: { fr: 'Subhana Rabbi al-Adhim', ar: 'سبحان ربي العظيم', en: 'Subhana Rabbi al-Adhim' } },
      { id: 'b', text: { fr: 'Subhana Rabbi al-A\'la', ar: 'سبحان ربي الأعلى', en: 'Subhana Rabbi al-A\'la' } },
      { id: 'c', text: { fr: 'Allahu Akbar', ar: 'الله أكبر', en: 'Allahu Akbar' } },
      { id: 'd', text: { fr: 'Sami\'a Allahu liman hamidah', ar: 'سمع الله لمن حمده', en: 'Sami\'a Allahu liman hamidah' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Dans le Ruku, on dit "Subhana Rabbi al-Adhim" (Gloire à mon Seigneur le Très Grand) au moins une fois, et trois fois est la Sunna.',
      ar: 'في الركوع يُقال "سبحان ربي العظيم" مرة على الأقل، وثلاثاً هي السنة.',
      en: 'In Ruku, one says "Subhana Rabbi al-Adhim" (Glory to my Lord the Most Great) at least once, three times is the Sunna.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'salat',
  },
  {
    id: 'salat-salat-005',
    question: {
      fr: 'Que dit-on dans le Sujud ?',
      ar: 'ماذا يُقال في السجود؟',
      en: 'What is said in Sujud?',
    },
    options: [
      { id: 'a', text: { fr: 'Subhana Rabbi al-Adhim', ar: 'سبحان ربي العظيم', en: 'Subhana Rabbi al-Adhim' } },
      { id: 'b', text: { fr: 'Subhana Rabbi al-A\'la', ar: 'سبحان ربي الأعلى', en: 'Subhana Rabbi al-A\'la' } },
      { id: 'c', text: { fr: 'Rabbana atina', ar: 'ربنا آتنا', en: 'Rabbana atina' } },
      { id: 'd', text: { fr: 'La ilaha illa Allah', ar: 'لا إله إلا الله', en: 'La ilaha illa Allah' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Dans le Sujud, on dit "Subhana Rabbi al-A\'la" (Gloire à mon Seigneur le Très Haut). C\'est aussi un moment privilégié pour faire des invocations.',
      ar: 'في السجود يُقال "سبحان ربي الأعلى". وهو أيضاً وقت مفضل للدعاء.',
      en: 'In Sujud, one says "Subhana Rabbi al-A\'la" (Glory to my Lord the Most High). It is also a preferred time for supplication.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'salat',
  },
  {
    id: 'salat-salat-006',
    question: {
      fr: 'Combien de prosternations (sujud) y a-t-il dans chaque rak\'a ?',
      ar: 'كم عدد السجدات في كل ركعة؟',
      en: 'How many prostrations (sujud) are in each rak\'a?',
    },
    options: [
      { id: 'a', text: { fr: '1 prosternation', ar: 'سجدة واحدة', en: '1 prostration' } },
      { id: 'b', text: { fr: '4 prosternations', ar: '4 سجدات', en: '4 prostrations' } },
      { id: 'c', text: { fr: '3 prosternations', ar: '3 سجدات', en: '3 prostrations' } },
      { id: 'd', text: { fr: '2 prosternations', ar: 'سجدتان', en: '2 prostrations' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Chaque rak\'a comporte 2 prosternations (sujud) avec une pause assise (julsa) entre les deux.',
      ar: 'كل ركعة فيها سجدتان مع جلسة بينهما.',
      en: 'Each rak\'a has 2 prostrations (sujud) with a sitting pause (julsa) between them.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'salat',
  },
  {
    id: 'salat-salat-007',
    question: {
      fr: 'Quel est le premier acte obligatoire de la prière ?',
      ar: 'ما أول واجب في الصلاة؟',
      en: 'What is the first obligatory act of prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'Lever les mains', ar: 'رفع اليدين', en: 'Raising hands' } },
      { id: 'b', text: { fr: 'Réciter du\'a al-istiftah', ar: 'قراءة دعاء الاستفتاح', en: 'Reciting du\'a al-istiftah' } },
      { id: 'c', text: { fr: 'Dire "Allahu Akbar" (Takbirat al-Ihram)', ar: 'قول "الله أكبر" (تكبيرة الإحرام)', en: 'Saying "Allahu Akbar" (Takbirat al-Ihram)' } },
      { id: 'd', text: { fr: 'Réciter la Fatiha', ar: 'قراءة الفاتحة', en: 'Reciting Al-Fatiha' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Takbirat al-Ihram (dire Allahu Akbar) est le premier pilier et marque l\'entrée dans la prière. Sans elle, la prière n\'est pas valide.',
      ar: 'تكبيرة الإحرام هي الركن الأول وتُدخل في الصلاة. بدونها لا تصح الصلاة.',
      en: 'Takbirat al-Ihram (saying Allahu Akbar) is the first pillar and marks entry into prayer. Without it, prayer is invalid.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'salat',
  },
  {
    id: 'salat-salat-008',
    question: {
      fr: 'Vers quelle direction doit-on se tourner pour prier ?',
      ar: 'إلى أي اتجاه يجب التوجه للصلاة؟',
      en: 'Which direction should one face for prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'Vers l\'Est', ar: 'نحو الشرق', en: 'Towards the East' } },
      { id: 'b', text: { fr: 'Vers Jérusalem', ar: 'نحو القدس', en: 'Towards Jerusalem' } },
      { id: 'c', text: { fr: 'Vers la Qibla (La Mecque)', ar: 'نحو القبلة (مكة)', en: 'Towards the Qibla (Mecca)' } },
      { id: 'd', text: { fr: 'N\'importe quelle direction', ar: 'أي اتجاه', en: 'Any direction' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Se tourner vers la Qibla (la Ka\'ba à La Mecque) est une condition de validité de la prière pour celui qui en est capable.',
      ar: 'التوجه إلى القبلة (الكعبة في مكة) شرط لصحة الصلاة لمن يستطيع.',
      en: 'Facing the Qibla (the Ka\'ba in Mecca) is a condition for prayer validity for those who are able.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'salat',
  },
  {
    id: 'salat-salat-009',
    question: {
      fr: 'Quand le Tashahud (At-Tahiyyat) est-il obligatoire ?',
      ar: 'متى يكون التشهد (التحيات) واجباً؟',
      en: 'When is Tashahud (At-Tahiyyat) obligatory?',
    },
    options: [
      { id: 'a', text: { fr: 'Après chaque rak\'a', ar: 'بعد كل ركعة', en: 'After every rak\'a' } },
      { id: 'b', text: { fr: 'Seulement au milieu de la prière', ar: 'في وسط الصلاة فقط', en: 'Only in the middle of prayer' } },
      { id: 'c', text: { fr: 'À la fin de la prière (dernier Tashahud)', ar: 'في آخر الصلاة (التشهد الأخير)', en: 'At the end of prayer (final Tashahud)' } },
      { id: 'd', text: { fr: 'Jamais obligatoire', ar: 'لا يجب أبداً', en: 'Never obligatory' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le Tashahud final est un pilier de la prière. Le Tashahud du milieu (après 2 rak\'at dans les prières de 3-4 rak\'at) est un wajib (obligatoire mais non pilier).',
      ar: 'التشهد الأخير ركن من أركان الصلاة. والتشهد الأوسط (بعد الركعتين في صلاة 3-4 ركعات) واجب.',
      en: 'The final Tashahud is a pillar of prayer. The middle Tashahud (after 2 rak\'at in 3-4 rak\'at prayers) is wajib (obligatory but not a pillar).',
    },
    points: 3,
    difficulty: 'medium',
    category: 'salat',
  },
  {
    id: 'salat-salat-010',
    question: {
      fr: 'Comment termine-t-on la prière ?',
      ar: 'كيف تُختم الصلاة؟',
      en: 'How does one end the prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'Par le Taslim (As-salamu alaykum)', ar: 'بالتسليم (السلام عليكم)', en: 'With Taslim (As-salamu alaykum)' } },
      { id: 'b', text: { fr: 'Par le Takbir', ar: 'بالتكبير', en: 'With Takbir' } },
      { id: 'c', text: { fr: 'Par le Sujud', ar: 'بالسجود', en: 'With Sujud' } },
      { id: 'd', text: { fr: 'Par le Du\'a', ar: 'بالدعاء', en: 'With Du\'a' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Taslim (dire As-salamu alaykum wa rahmatullah à droite puis à gauche) est le dernier pilier de la prière.',
      ar: 'التسليم (قول السلام عليكم ورحمة الله يميناً ثم شمالاً) هو آخر أركان الصلاة.',
      en: 'The Taslim (saying As-salamu alaykum wa rahmatullah right then left) is the last pillar of prayer.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'salat',
  },
  {
    id: 'salat-salat-011',
    question: {
      fr: 'Qu\'est-ce qui annule la prière ?',
      ar: 'ما الذي يُبطل الصلاة؟',
      en: 'What invalidates the prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'Tousser involontairement', ar: 'السعال غير المتعمد', en: 'Coughing involuntarily' } },
      { id: 'b', text: { fr: 'Pleurer par crainte d\'Allah', ar: 'البكاء من خشية الله', en: 'Crying from fear of Allah' } },
      { id: 'c', text: { fr: 'Bouger légèrement', ar: 'الحركة الخفيفة', en: 'Slight movement' } },
      { id: 'd', text: { fr: 'Parler volontairement', ar: 'الكلام عمداً', en: 'Speaking deliberately' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Parler volontairement pendant la prière (autre que le dhikr prescrit) annule la prière par consensus des savants.',
      ar: 'الكلام عمداً في الصلاة (غير الذكر المشروع) يُبطلها بإجماع العلماء.',
      en: 'Speaking deliberately during prayer (other than prescribed dhikr) invalidates it by scholarly consensus.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'salat',
  },
  {
    id: 'salat-salat-012',
    question: {
      fr: 'Quelle est la condition concernant les vêtements pour la prière ?',
      ar: 'ما شرط اللباس للصلاة؟',
      en: 'What is the condition regarding clothing for prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'Porter des vêtements blancs', ar: 'لبس ثياب بيضاء', en: 'Wear white clothes' } },
      { id: 'b', text: { fr: 'Couvrir la \'awra avec des vêtements purs', ar: 'ستر العورة بثياب طاهرة', en: 'Cover the \'awra with pure clothes' } },
      { id: 'c', text: { fr: 'Porter des vêtements neufs', ar: 'لبس ثياب جديدة', en: 'Wear new clothes' } },
      { id: 'd', text: { fr: 'Aucune condition spécifique', ar: 'لا شرط محدد', en: 'No specific condition' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Couvrir la \'awra est une condition de validité de la prière. La \'awra de l\'homme est du nombril aux genoux, celle de la femme est tout le corps sauf le visage et les mains.',
      ar: 'ستر العورة شرط لصحة الصلاة. عورة الرجل من السرة إلى الركبة، وعورة المرأة كل الجسد إلا الوجه والكفين.',
      en: 'Covering the \'awra is a condition for prayer validity. Man\'s \'awra is from navel to knees, woman\'s is entire body except face and hands.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'salat',
  },
];

// ============================================
// Questions - Sujud Sahw
// ============================================

const sujudSahwQuestions: ExamQuestion[] = [
  {
    id: 'salat-sahw-001',
    question: {
      fr: 'Qu\'est-ce que le Sujud as-Sahw ?',
      ar: 'ما هو سجود السهو؟',
      en: 'What is Sujud as-Sahw?',
    },
    options: [
      { id: 'a', text: { fr: 'Deux prosternations pour compenser une erreur dans la prière', ar: 'سجدتان لتعويض خطأ في الصلاة', en: 'Two prostrations to compensate for a mistake in prayer' } },
      { id: 'b', text: { fr: 'Une prosternation de remerciement', ar: 'سجدة شكر', en: 'A prostration of thanks' } },
      { id: 'c', text: { fr: 'Les prosternations normales de la prière', ar: 'السجود العادي في الصلاة', en: 'Normal prostrations of prayer' } },
      { id: 'd', text: { fr: 'Une prosternation après la récitation du Coran', ar: 'سجدة بعد قراءة القرآن', en: 'A prostration after Quran recitation' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Sujud as-Sahw est deux prosternations effectuées pour compenser un oubli ou une erreur dans la prière (ajout, omission ou doute).',
      ar: 'سجود السهو سجدتان تُؤدَّيان لتعويض نسيان أو خطأ في الصلاة (زيادة أو نقصان أو شك).',
      en: 'Sujud as-Sahw is two prostrations performed to compensate for forgetfulness or error in prayer (addition, omission or doubt).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'sujud-sahw',
  },
  {
    id: 'salat-sahw-002',
    question: {
      fr: 'Quand fait-on le Sujud as-Sahw avant le Taslim ?',
      ar: 'متى يُسجد سجود السهو قبل السلام؟',
      en: 'When is Sujud as-Sahw performed before Taslim?',
    },
    options: [
      { id: 'a', text: { fr: 'En cas d\'ajout dans la prière', ar: 'في حالة الزيادة', en: 'In case of addition to prayer' } },
      { id: 'b', text: { fr: 'En cas d\'omission (Naqsan)', ar: 'في حالة النقصان', en: 'In case of omission (Naqsan)' } },
      { id: 'c', text: { fr: 'Toujours après le Taslim', ar: 'دائماً بعد السلام', en: 'Always after Taslim' } },
      { id: 'd', text: { fr: 'Jamais avant le Taslim', ar: 'أبداً قبل السلام', en: 'Never before Taslim' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'En cas d\'omission (oubli d\'un wajib comme le Tashahud du milieu), on fait le Sujud as-Sahw avant le Taslim selon l\'avis prépondérant.',
      ar: 'في حالة النقصان (نسيان واجب كالتشهد الأوسط)، يُسجد قبل السلام على القول الراجح.',
      en: 'In case of omission (forgetting a wajib like middle Tashahud), Sujud as-Sahw is done before Taslim according to the preponderant view.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'sujud-sahw',
  },
  {
    id: 'salat-sahw-003',
    question: {
      fr: 'Que fait-on si on doute du nombre de rak\'at effectuées ?',
      ar: 'ماذا يُفعل عند الشك في عدد الركعات؟',
      en: 'What should one do if unsure about the number of rak\'at performed?',
    },
    options: [
      { id: 'a', text: { fr: 'Recommencer la prière', ar: 'إعادة الصلاة', en: 'Restart the prayer' } },
      { id: 'b', text: { fr: 'Se baser sur le nombre le plus petit et compléter, puis faire Sujud as-Sahw', ar: 'البناء على الأقل والإتمام ثم سجود السهو', en: 'Base on the smaller number, complete, then do Sujud as-Sahw' } },
      { id: 'c', text: { fr: 'Se baser sur le nombre le plus grand', ar: 'البناء على الأكثر', en: 'Base on the larger number' } },
      { id: 'd', text: { fr: 'Ignorer le doute et terminer', ar: 'تجاهل الشك والانتهاء', en: 'Ignore the doubt and finish' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'En cas de doute, on se base sur ce qui est certain (le nombre le plus petit), on complète la prière, puis on fait le Sujud as-Sahw.',
      ar: 'عند الشك يُبنى على اليقين (العدد الأقل)، ويُكمل الصلاة، ثم يسجد سجود السهو.',
      en: 'When in doubt, one bases on certainty (smaller number), completes the prayer, then performs Sujud as-Sahw.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'sujud-sahw',
  },
  {
    id: 'salat-sahw-004',
    question: {
      fr: 'Si l\'imam fait une erreur et se prosterne pour l\'oubli, que doivent faire ceux qui prient derrière lui ?',
      ar: 'إذا أخطأ الإمام وسجد للسهو، ماذا يفعل المأمومون؟',
      en: 'If the imam makes a mistake and prostrates for forgetfulness, what should those praying behind him do?',
    },
    options: [
      { id: 'a', text: { fr: 'Ignorer le sujud de l\'imam', ar: 'تجاهل سجود الإمام', en: 'Ignore the imam\'s sujud' } },
      { id: 'b', text: { fr: 'Le suivre dans le Sujud as-Sahw', ar: 'متابعته في سجود السهو', en: 'Follow him in Sujud as-Sahw' } },
      { id: 'c', text: { fr: 'Faire leur propre Sujud séparément', ar: 'السجود منفردين', en: 'Do their own Sujud separately' } },
      { id: 'd', text: { fr: 'Quitter la prière', ar: 'الخروج من الصلاة', en: 'Leave the prayer' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les ma\'mumun (ceux qui prient derrière l\'imam) doivent suivre l\'imam dans le Sujud as-Sahw, que l\'erreur soit de l\'imam ou de leur part.',
      ar: 'المأمومون يتابعون الإمام في سجود السهو، سواء كان الخطأ من الإمام أو منهم.',
      en: 'The ma\'mumun (those praying behind the imam) must follow the imam in Sujud as-Sahw, whether the error is from the imam or themselves.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'sujud-sahw',
  },
];

// ============================================
// Questions - Prières Surérogatoires
// ============================================

const nawafilQuestions: ExamQuestion[] = [
  {
    id: 'salat-nawafil-001',
    question: {
      fr: 'Combien de rak\'at composent les Sunan Rawatib (prières régulières avant/après les prières obligatoires) ?',
      ar: 'كم عدد ركعات السنن الرواتب؟',
      en: 'How many rak\'at make up the Sunan Rawatib (regular prayers before/after obligatory prayers)?',
    },
    options: [
      { id: 'a', text: { fr: '10 rak\'at', ar: '10 ركعات', en: '10 rak\'at' } },
      { id: 'b', text: { fr: '8 rak\'at', ar: '8 ركعات', en: '8 rak\'at' } },
      { id: 'c', text: { fr: '12 rak\'at', ar: '12 ركعة', en: '12 rak\'at' } },
      { id: 'd', text: { fr: '14 rak\'at', ar: '14 ركعة', en: '14 rak\'at' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Les 12 rak\'at des Sunan Rawatib sont : 2 avant Fajr, 4 avant Dhuhr, 2 après Dhuhr, 2 après Maghrib, 2 après Isha.',
      ar: 'السنن الرواتب 12 ركعة: 2 قبل الفجر، 4 قبل الظهر، 2 بعد الظهر، 2 بعد المغرب، 2 بعد العشاء.',
      en: 'The 12 rak\'at of Sunan Rawatib are: 2 before Fajr, 4 before Dhuhr, 2 after Dhuhr, 2 after Maghrib, 2 after Isha.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'nawafil',
  },
  {
    id: 'salat-nawafil-002',
    question: {
      fr: 'Quelle est la meilleure des prières surérogatoires après les obligatoires ?',
      ar: 'ما أفضل صلاة التطوع بعد الفريضة؟',
      en: 'What is the best voluntary prayer after the obligatory ones?',
    },
    options: [
      { id: 'a', text: { fr: 'La prière de Duha', ar: 'صلاة الضحى', en: 'Duha prayer' } },
      { id: 'b', text: { fr: 'La prière de Tahajjud (prière de nuit)', ar: 'صلاة التهجد (قيام الليل)', en: 'Tahajjud (night prayer)' } },
      { id: 'c', text: { fr: 'La prière de l\'Eid', ar: 'صلاة العيد', en: 'Eid prayer' } },
      { id: 'd', text: { fr: 'La prière du Witr', ar: 'صلاة الوتر', en: 'Witr prayer' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "La meilleure prière après les prières obligatoires est la prière de nuit" (Muslim).',
      ar: 'قال النبي ﷺ: "أفضل الصلاة بعد الفريضة صلاة الليل" (مسلم).',
      en: 'The Prophet ﷺ said: "The best prayer after the obligatory prayers is the night prayer" (Muslim).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'nawafil',
  },
  {
    id: 'salat-nawafil-003',
    question: {
      fr: 'Quel est le nombre minimum et maximum de rak\'at pour le Witr ?',
      ar: 'ما أقل وأكثر ركعات الوتر؟',
      en: 'What is the minimum and maximum number of rak\'at for Witr?',
    },
    options: [
      { id: 'a', text: { fr: 'Minimum 1, maximum 11', ar: 'الحد الأدنى 1، الأقصى 11', en: 'Minimum 1, maximum 11' } },
      { id: 'b', text: { fr: 'Minimum 2, maximum 8', ar: 'الحد الأدنى 2، الأقصى 8', en: 'Minimum 2, maximum 8' } },
      { id: 'c', text: { fr: 'Minimum 3, maximum 9', ar: 'الحد الأدنى 3، الأقصى 9', en: 'Minimum 3, maximum 9' } },
      { id: 'd', text: { fr: 'Toujours 3 rak\'at', ar: 'دائماً 3 ركعات', en: 'Always 3 rak\'at' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Witr peut être d\'1 rak\'a (minimum) jusqu\'à 11 rak\'at. Le Prophète ﷺ a dit : "Le Witr est une rak\'a à la fin de la nuit" et il priait parfois 11 rak\'at.',
      ar: 'الوتر يمكن أن يكون ركعة واحدة (الحد الأدنى) إلى 11 ركعة. قال النبي ﷺ: "الوتر ركعة من آخر الليل" وكان يصلي أحياناً 11 ركعة.',
      en: 'Witr can be from 1 rak\'a (minimum) to 11 rak\'at. The Prophet ﷺ said: "Witr is one rak\'a at the end of the night" and sometimes prayed 11 rak\'at.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'nawafil',
  },
  {
    id: 'salat-nawafil-004',
    question: {
      fr: 'Quel est le jugement de la prière de Duha ?',
      ar: 'ما حكم صلاة الضحى؟',
      en: 'What is the ruling on Duha prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'Obligatoire', ar: 'واجبة', en: 'Obligatory' } },
      { id: 'b', text: { fr: 'Sunna mu\'akkada (fortement recommandée)', ar: 'سنة مؤكدة', en: 'Mu\'akkada Sunna (strongly recommended)' } },
      { id: 'c', text: { fr: 'Makruh (déconseillée)', ar: 'مكروهة', en: 'Makruh (disliked)' } },
      { id: 'd', text: { fr: 'Interdite', ar: 'محرمة', en: 'Forbidden' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La prière de Duha est une Sunna mu\'akkada. Le Prophète ﷺ la recommandait et y a exhorté Abu Hurayra et Abu Dharr.',
      ar: 'صلاة الضحى سنة مؤكدة. أوصى بها النبي ﷺ وحثّ عليها أبا هريرة وأبا ذر.',
      en: 'Duha prayer is a mu\'akkada Sunna. The Prophet ﷺ recommended it and urged Abu Hurayra and Abu Dharr to pray it.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'nawafil',
  },
];

// ============================================
// Import des questions de prières spéciales
// ============================================

import { allSpecialPrayersQuestions } from './questions-special-prayers';

// ============================================
// Assemblage de l'examen COMPLET
// ============================================

const allQuestions: ExamQuestion[] = [
  ...taharaQuestions,           // 8 questions - Purification
  ...wuduQuestions,             // 8 questions - Ablutions
  ...adhanQuestions,            // 4 questions - Adhan/Iqama
  ...salatQuestions,            // 12 questions - Prière de base
  ...sujudSahwQuestions,        // 4 questions - Prosternation de l'oubli
  ...nawafilQuestions,          // 4 questions - Prières surérogatoires
  ...allSpecialPrayersQuestions, // 30 questions - Prières spéciales
  // Total : 70 questions
];

export const examSalatFinal: ExamConfig = {
  id: 'exam-salat-final',
  type: 'course',
  level: 'intermediate',
  title: {
    fr: 'Examen Complet - Fiqh de la Prière',
    ar: 'الامتحان الشامل - فقه الصلاة',
    en: 'Complete Exam - Fiqh of Prayer',
  },
  description: {
    fr: 'Examen de 50 questions sélectionnées aléatoirement parmi une banque de 70+ questions. Chaque tentative présente des questions différentes pour une évaluation authentique.',
    ar: 'امتحان من 50 سؤالاً يتم اختيارها عشوائياً من بنك يضم أكثر من 70 سؤالاً. كل محاولة تقدم أسئلة مختلفة لتقييم حقيقي.',
    en: 'Exam with 50 questions randomly selected from a pool of 70+ questions. Each attempt presents different questions for authentic assessment.',
  },
  instructions: {
    fr: 'Vous avez 60 minutes pour répondre à 50 questions sélectionnées aléatoirement. Chaque question a une seule bonne réponse. Un score de 70% est requis pour réussir. Les questions changent à chaque tentative !',
    ar: 'لديك 60 دقيقة للإجابة على 50 سؤالاً يتم اختيارها عشوائياً. لكل سؤال إجابة صحيحة واحدة. يُشترط 70% للنجاح. الأسئلة تتغير في كل محاولة!',
    en: 'You have 60 minutes to answer 50 randomly selected questions. Each question has one correct answer. A score of 70% is required to pass. Questions change with each attempt!',
  },
  courseSlug: 'salat',
  
  // =============================================
  // SYSTÈME DE SÉLECTION ALÉATOIRE
  // =============================================
  // Banque de toutes les questions disponibles
  questionPool: allQuestions,
  
  // Nombre de questions à sélectionner pour chaque tentative
  questionsPerExam: 50,
  
  // Configuration par catégorie pour une couverture équilibrée
  // Garantit que chaque domaine est représenté proportionnellement
  categoryConfig: [
    // Tahara & Wudu - Fondamentaux (12 questions sur 16 disponibles)
    { category: 'tahara', count: 6 },
    { category: 'wudu', count: 6 },
    
    // Salat de base - Cœur de l'examen (8 questions sur 12 disponibles)
    { category: 'salat', count: 8 },
    
    // Adhan & Iqama (3 questions sur 4 disponibles)
    { category: 'adhan', count: 3 },
    
    // Sujud Sahw & Nawafil (5 questions sur 8 disponibles)
    { category: 'sujud-sahw', count: 3 },
    { category: 'nawafil', count: 2 },
    
    // Prières spéciales - Large couverture (22 questions sur 30 disponibles)
    { category: 'juma', count: 3 },    // Note: 'juma' dans les questions
    { category: 'janaza', count: 3 },
    { category: 'eid', count: 3 },
    { category: 'kusuf', count: 2 },
    { category: 'istisqa', count: 2 },
    { category: 'musafir', count: 3 },
    { category: 'marid', count: 2 },
    { category: 'tarawih', count: 2 },
  ],
  
  // Questions sera rempli dynamiquement par prepareExamQuestions()
  questions: [],
  
  duration: 60, // 60 minutes pour 50 questions
  passingScore: 70,
  maxAttempts: 5, // Plus de tentatives car questions différentes
  shuffleQuestions: true,
  shuffleOptions: true, // Mélanger aussi l'ordre des réponses
  showAnswersAfter: 'complete',
  hasCertificate: true,
  certificateName: {
    fr: 'Certificat de Maîtrise Complète - Fiqh as-Salat',
    ar: 'شهادة الإتقان الشامل - فقه الصلاة',
    en: 'Complete Mastery Certificate - Fiqh as-Salat',
  },
  createdAt: '2026-01-31',
};

export default examSalatFinal;
