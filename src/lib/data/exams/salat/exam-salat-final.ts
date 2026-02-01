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
// Questions - Ghusl (Ablutions Majeures)
// ============================================

const ghuslQuestions: ExamQuestion[] = [
  {
    id: 'salat-ghusl-001',
    question: {
      fr: 'Quelle est la définition du Ghusl en Islam ?',
      ar: 'ما تعريف الغسل في الإسلام؟',
      en: 'What is the definition of Ghusl in Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Laver uniquement les mains et le visage', ar: 'غسل اليدين والوجه فقط', en: 'Washing only hands and face' } },
      { id: 'b', text: { fr: 'Le bain rituel complet du corps pour se purifier du Hadath Akbar', ar: 'الاغتسال الكامل للجسم للتطهر من الحدث الأكبر', en: 'Complete ritual bathing of the body to purify from major impurity' } },
      { id: 'c', text: { fr: 'Se doucher tous les vendredis', ar: 'الاستحمام كل جمعة', en: 'Showering every Friday' } },
      { id: 'd', text: { fr: 'Laver les parties intimes uniquement', ar: 'غسل العورة فقط', en: 'Washing private parts only' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Ghusl est l\'ablution majeure qui consiste à laver tout le corps avec de l\'eau pure dans l\'intention de lever l\'état de Hadath Akbar (grande impureté).',
      ar: 'الغسل هو الطهارة الكبرى التي تشمل تعميم البدن بالماء الطاهر بنية رفع الحدث الأكبر.',
      en: 'Ghusl is the major ablution involving washing the entire body with pure water with the intention of removing major ritual impurity.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'ghusl',
  },
  {
    id: 'salat-ghusl-002',
    question: {
      fr: 'Quelles sont les situations qui obligent le Ghusl ?',
      ar: 'ما الحالات التي توجب الغسل؟',
      en: 'What are the situations that make Ghusl obligatory?',
    },
    options: [
      { id: 'a', text: { fr: 'Uniquement après les rapports intimes', ar: 'بعد الجماع فقط', en: 'Only after sexual intercourse' } },
      { id: 'b', text: { fr: 'La Janaba, fin des menstrues, fin des lochies, conversion à l\'Islam', ar: 'الجنابة، انتهاء الحيض، انتهاء النفاس، الدخول في الإسلام', en: 'Janaba, end of menstruation, end of postpartum bleeding, converting to Islam' } },
      { id: 'c', text: { fr: 'Uniquement le vendredi pour la prière', ar: 'يوم الجمعة للصلاة فقط', en: 'Only on Friday for prayer' } },
      { id: 'd', text: { fr: 'Après chaque sommeil', ar: 'بعد كل نوم', en: 'After every sleep' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Ghusl est obligatoire dans 4 cas : la Janaba (émission de sperme ou rapports), fin des menstrues, fin des lochies, et pour celui qui se convertit à l\'Islam.',
      ar: 'يجب الغسل في أربع حالات: الجنابة، وانتهاء الحيض، وانتهاء النفاس، والدخول في الإسلام.',
      en: 'Ghusl is obligatory in 4 cases: Janaba (seminal emission or intercourse), end of menstruation, end of postpartum bleeding, and for one converting to Islam.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'ghusl',
  },
  {
    id: 'salat-ghusl-003',
    question: {
      fr: 'Quels sont les piliers (Arkān) obligatoires du Ghusl ?',
      ar: 'ما أركان الغسل الواجبة؟',
      en: 'What are the obligatory pillars (Arkān) of Ghusl?',
    },
    options: [
      { id: 'a', text: { fr: 'Uniquement l\'intention', ar: 'النية فقط', en: 'Only the intention' } },
      { id: 'b', text: { fr: 'L\'intention et faire couler l\'eau sur tout le corps', ar: 'النية وتعميم الماء على جميع البدن', en: 'Intention and pouring water over entire body' } },
      { id: 'c', text: { fr: 'Laver trois fois uniquement', ar: 'الغسل ثلاث مرات فقط', en: 'Washing three times only' } },
      { id: 'd', text: { fr: 'Utiliser du savon obligatoirement', ar: 'استعمال الصابون وجوبا', en: 'Using soap obligatorily' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les deux piliers obligatoires du Ghusl sont : 1) l\'intention (Niyyah) de lever le Hadath Akbar, 2) faire parvenir l\'eau à tout le corps, y compris les cheveux et la peau.',
      ar: 'ركنا الغسل الواجبان: ١) النية لرفع الحدث الأكبر، ٢) تعميم البدن بالماء بما في ذلك الشعر والبشرة.',
      en: 'The two obligatory pillars of Ghusl are: 1) intention to remove major impurity, 2) water reaching the entire body including hair and skin.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'ghusl',
  },
  {
    id: 'salat-ghusl-004',
    question: {
      fr: 'Comment effectuer le Ghusl complet selon la Sunna du Prophète ﷺ ?',
      ar: 'كيف يُؤدى الغسل الكامل على سنة النبي ﷺ؟',
      en: 'How to perform complete Ghusl according to the Prophet\'s ﷺ Sunnah?',
    },
    options: [
      { id: 'a', text: { fr: 'Se jeter dans une piscine avec l\'intention', ar: 'القفز في المسبح مع النية', en: 'Jumping into a pool with intention' } },
      { id: 'b', text: { fr: 'Wudu complet, puis verser l\'eau sur la tête 3 fois, puis le côté droit, puis le gauche', ar: 'وضوء كامل، ثم إفاضة الماء على الرأس ٣ مرات، ثم الجانب الأيمن، ثم الأيسر', en: 'Complete wudu, then pour water over head 3 times, then right side, then left' } },
      { id: 'c', text: { fr: 'Laver uniquement les parties intimes', ar: 'غسل العورة فقط', en: 'Washing only private parts' } },
      { id: 'd', text: { fr: 'Prendre une douche rapide sans ordre', ar: 'الاستحمام السريع بدون ترتيب', en: 'Quick shower without order' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La méthode complète : 1) Intention, 2) Laver parties intimes, 3) Wudu complet, 4) Verser eau sur tête 3 fois en massant racines, 5) Côté droit du corps, 6) Côté gauche.',
      ar: 'الطريقة الكاملة: ١) النية، ٢) غسل الفرج، ٣) الوضوء الكامل، ٤) إفاضة الماء على الرأس ٣ مرات مع تخليل الشعر، ٥) الشق الأيمن، ٦) الشق الأيسر.',
      en: 'Complete method: 1) Intention, 2) Wash private parts, 3) Complete wudu, 4) Pour water over head 3x massaging roots, 5) Right side, 6) Left side.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'ghusl',
  },
  {
    id: 'salat-ghusl-005',
    question: {
      fr: 'Une femme doit-elle défaire ses tresses pour le Ghusl de Janaba ?',
      ar: 'هل يجب على المرأة نقض ضفائرها للغسل من الجنابة؟',
      en: 'Must a woman undo her braids for Ghusl from Janaba?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, toujours obligatoire', ar: 'نعم، واجب دائما', en: 'Yes, always obligatory' } },
      { id: 'b', text: { fr: 'Non, il suffit de verser l\'eau sur la tête sans défaire', ar: 'لا، يكفي إفاضة الماء على الرأس دون نقض', en: 'No, pouring water over head without undoing is sufficient' } },
      { id: 'c', text: { fr: 'Uniquement pour le Ghusl des menstrues, pas la Janaba', ar: 'فقط لغسل الحيض، وليس الجنابة', en: 'Only for menstrual Ghusl, not Janaba' } },
      { id: 'd', text: { fr: 'Elle doit toujours raser ses cheveux', ar: 'يجب عليها حلق شعرها دائما', en: 'She must always shave her hair' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Pour le Ghusl de Janaba, la femme n\'a pas besoin de défaire ses tresses selon le Hadith de Umm Salama. Il suffit de verser 3 poignées d\'eau sur la tête. Pour les menstrues, certains savants recommandent de défaire.',
      ar: 'لغسل الجنابة، لا يجب على المرأة نقض ضفائرها حسب حديث أم سلمة. يكفي ثلاث حثيات على الرأس. أما للحيض فيُستحب النقض عند بعض العلماء.',
      en: 'For Janaba Ghusl, a woman need not undo braids according to Hadith of Umm Salama. Three handfuls over head suffice. For menstruation, some scholars recommend undoing.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'ghusl',
  },
  {
    id: 'salat-ghusl-006',
    question: {
      fr: 'Peut-on faire le Ghusl et le Wudu en une seule fois avec une seule intention ?',
      ar: 'هل يمكن الغسل والوضوء معا بنية واحدة؟',
      en: 'Can one combine Ghusl and Wudu in one act with one intention?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, il faut toujours faire le Wudu séparément après', ar: 'لا، يجب الوضوء منفصلا بعده دائما', en: 'No, must always do wudu separately after' } },
      { id: 'b', text: { fr: 'Oui, le Ghusl avec intention dispense du Wudu', ar: 'نعم، الغسل بالنية يُغني عن الوضوء', en: 'Yes, Ghusl with intention suffices for wudu' } },
      { id: 'c', text: { fr: 'Uniquement pour le Ghusl du vendredi', ar: 'فقط لغسل الجمعة', en: 'Only for Friday Ghusl' } },
      { id: 'd', text: { fr: 'Uniquement si on récite des invocations', ar: 'فقط إذا قرأ الأدعية', en: 'Only if reciting supplications' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Ghusl complet avec l\'intention de lever le Hadath dispense du Wudu selon l\'avis majoritaire. Cependant, faire le Wudu d\'abord est la Sunna recommandée.',
      ar: 'الغسل الكامل بنية رفع الحدث يُجزئ عن الوضوء عند جمهور العلماء. ولكن البدء بالوضوء هو السنة المستحبة.',
      en: 'Complete Ghusl with intention to remove impurity suffices for wudu according to majority opinion. However, doing wudu first is recommended Sunnah.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'ghusl',
  },
  {
    id: 'salat-ghusl-007',
    question: {
      fr: 'Quelle est la règle concernant les vernis à ongles lors du Ghusl ?',
      ar: 'ما حكم طلاء الأظافر عند الغسل؟',
      en: 'What is the ruling regarding nail polish during Ghusl?',
    },
    options: [
      { id: 'a', text: { fr: 'Pas de problème, il peut rester', ar: 'لا مشكلة، يمكن أن يبقى', en: 'No problem, it can remain' } },
      { id: 'b', text: { fr: 'Il doit être enlevé car il empêche l\'eau d\'atteindre l\'ongle', ar: 'يجب إزالته لأنه يمنع وصول الماء للظفر', en: 'Must be removed as it prevents water reaching the nail' } },
      { id: 'c', text: { fr: 'Uniquement les femmes peuvent le garder', ar: 'النساء فقط يمكنهن إبقاءه', en: 'Only women can keep it' } },
      { id: 'd', text: { fr: 'Il suffit de mouiller par-dessus', ar: 'يكفي التبليل فوقه', en: 'Wetting over it suffices' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le vernis à ongles forme une barrière imperméable qui empêche l\'eau d\'atteindre l\'ongle, ce qui invalide le Ghusl. Il doit être complètement enlevé avant le Ghusl ou le Wudu.',
      ar: 'طلاء الأظافر يُشكل طبقة عازلة تمنع وصول الماء للظفر، مما يُبطل الغسل. يجب إزالته بالكامل قبل الغسل أو الوضوء.',
      en: 'Nail polish forms an impermeable barrier preventing water from reaching the nail, invalidating Ghusl. It must be completely removed before Ghusl or wudu.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'ghusl',
  },
  {
    id: 'salat-ghusl-008',
    question: {
      fr: 'Un homme en état de Janaba peut-il toucher le Coran ?',
      ar: 'هل يجوز للجنب مس المصحف؟',
      en: 'Can a person in state of Janaba touch the Quran?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, sans aucune restriction', ar: 'نعم، دون أي قيد', en: 'Yes, without any restriction' } },
      { id: 'b', text: { fr: 'Non, il doit d\'abord faire le Ghusl', ar: 'لا، يجب عليه الغسل أولا', en: 'No, must first perform Ghusl' } },
      { id: 'c', text: { fr: 'Uniquement s\'il porte des gants', ar: 'فقط إذا لبس القفازات', en: 'Only if wearing gloves' } },
      { id: 'd', text: { fr: 'Uniquement pour l\'enseignement', ar: 'فقط للتعليم', en: 'Only for teaching' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Il est interdit de toucher le Coran en état de Janaba selon le verset "Ne le touchent que les purifiés" (56:79) et le consensus des savants. Le Ghusl est obligatoire avant.',
      ar: 'يحرم مس المصحف للجنب لقوله تعالى "لا يمسه إلا المطهرون" وإجماع العلماء. يجب الغسل قبل ذلك.',
      en: 'Touching Quran in state of Janaba is forbidden according to verse "None touch it except the purified" (56:79) and scholarly consensus. Ghusl is obligatory first.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'ghusl',
  },
  {
    id: 'salat-ghusl-009',
    question: {
      fr: 'Quelle est la différence entre le Ghusl obligatoire et le Ghusl recommandé ?',
      ar: 'ما الفرق بين الغسل الواجب والغسل المستحب؟',
      en: 'What is the difference between obligatory and recommended Ghusl?',
    },
    options: [
      { id: 'a', text: { fr: 'Pas de différence, tous les Ghusl sont obligatoires', ar: 'لا فرق، كل الأغسال واجبة', en: 'No difference, all Ghusl are obligatory' } },
      { id: 'b', text: { fr: 'Le Ghusl obligatoire (Janaba, menstrues) est condition pour la prière, le recommandé (vendredi, Eid) est Sunna', ar: 'الواجب (جنابة، حيض) شرط للصلاة، المستحب (جمعة، عيد) سنة', en: 'Obligatory (Janaba, menses) is condition for prayer, recommended (Friday, Eid) is Sunnah' } },
      { id: 'c', text: { fr: 'Uniquement la température de l\'eau', ar: 'فقط درجة حرارة الماء', en: 'Only water temperature' } },
      { id: 'd', text: { fr: 'Le nombre de fois qu\'on se lave', ar: 'عدد مرات الغسل', en: 'Number of times washing' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Ghusl obligatoire (Janaba, fin menstrues/lochies) est condition de validité de la prière et du Tawaf. Le Ghusl recommandé (vendredi, Eid, Ihram) est Sunna mais pas obligatoire.',
      ar: 'الغسل الواجب (جنابة، انتهاء حيض/نفاس) شرط لصحة الصلاة والطواف. الغسل المستحب (جمعة، عيد، إحرام) سنة وليس واجبا.',
      en: 'Obligatory Ghusl (Janaba, end of menses/postpartum) is condition for valid prayer and Tawaf. Recommended Ghusl (Friday, Eid, Ihram) is Sunnah but not obligatory.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'ghusl',
  },
  {
    id: 'salat-ghusl-010',
    question: {
      fr: 'Si une personne se baigne dans la mer ou une rivière avec l\'intention du Ghusl, est-ce valide ?',
      ar: 'إذا اغتسل شخص في البحر أو النهر بنية الغسل، هل يصح؟',
      en: 'If someone bathes in the sea or river with intention of Ghusl, is it valid?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, il faut utiliser une douche obligatoirement', ar: 'لا، يجب استعمال الدش وجوبا', en: 'No, must use a shower obligatorily' } },
      { id: 'b', text: { fr: 'Oui, c\'est valide si tout le corps est immergé avec l\'intention', ar: 'نعم، يصح إذا غُمر كامل الجسم مع النية', en: 'Yes, valid if entire body is immersed with intention' } },
      { id: 'c', text: { fr: 'Uniquement dans l\'eau douce, pas dans la mer', ar: 'في الماء العذب فقط، وليس البحر', en: 'Only in fresh water, not in sea' } },
      { id: 'd', text: { fr: 'Uniquement en été', ar: 'في الصيف فقط', en: 'Only in summer' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Ghusl est valide dans la mer, rivière ou tout plan d\'eau pure, à condition que tout le corps soit immergé ou mouillé avec l\'intention de se purifier du Hadath Akbar.',
      ar: 'يصح الغسل في البحر أو النهر أو أي ماء طاهر، بشرط أن يُغمر الجسم كاملا أو يُبلل مع النية لرفع الحدث الأكبر.',
      en: 'Ghusl is valid in sea, river or any pure water body, provided entire body is immersed or wetted with intention to remove major impurity.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'ghusl',
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
// Questions - Prière en Congrégation (Jamā'ah)
// ============================================

const congregationQuestions: ExamQuestion[] = [
  {
    id: 'salat-congregation-001',
    question: {
      fr: 'Quelle est la récompense de la prière en congrégation comparée à la prière seul ?',
      ar: 'ما أجر صلاة الجماعة مقارنة بصلاة المنفرد؟',
      en: 'What is the reward of congregational prayer compared to praying alone?',
    },
    options: [
      { id: 'a', text: { fr: 'Deux fois plus', ar: 'ضعفان', en: 'Twice as much' } },
      { id: 'b', text: { fr: 'Dix fois plus', ar: 'عشرة أضعاف', en: 'Ten times more' } },
      { id: 'c', text: { fr: '27 fois plus selon un hadith, 25 fois selon un autre', ar: '٢٧ درجة في حديث و٢٥ درجة في آخر', en: '27 times according to one hadith, 25 times according to another' } },
      { id: 'd', text: { fr: '100 fois plus', ar: 'مائة ضعف', en: '100 times more' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "La prière en commun est supérieure à la prière de l\'homme seul de vingt-sept degrés" (Bukhari), et dans une autre version "vingt-cinq degrés" (Muslim).',
      ar: 'قال النبي ﷺ: "صلاة الجماعة تفضل صلاة الفذ بسبع وعشرين درجة" (البخاري)، وفي رواية "بخمس وعشرين درجة" (مسلم).',
      en: 'The Prophet ﷺ said: "Prayer in congregation is superior to the prayer of a person alone by twenty-seven degrees" (Bukhari), and in another version "twenty-five degrees" (Muslim).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'congregation',
  },
  {
    id: 'salat-congregation-002',
    question: {
      fr: 'Si vous rejoignez la prière pendant le Ruku (inclinaison), comptez-vous cette Rak\'ah ?',
      ar: 'إذا أدركت الصلاة في الركوع، هل تُحسب الركعة؟',
      en: 'If you join prayer during Ruku (bowing), does this Rak\'ah count?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, vous avez manqué cette Rak\'ah', ar: 'لا، فاتتك هذه الركعة', en: 'No, you missed this Rak\'ah' } },
      { id: 'b', text: { fr: 'Oui, si vous rejoignez l\'imam avant qu\'il ne se relève du Ruku', ar: 'نعم، إذا أدركت الإمام قبل أن يرفع من الركوع', en: 'Yes, if you join imam before he rises from Ruku' } },
      { id: 'c', text: { fr: 'Uniquement pour Fajr', ar: 'لصلاة الفجر فقط', en: 'Only for Fajr' } },
      { id: 'd', text: { fr: 'Uniquement si vous récitez Al-Fatiha', ar: 'فقط إذا قرأت الفاتحة', en: 'Only if you recited Al-Fatiha' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Selon le Hadith : "Celui qui rattrape le Ruku a rattrapé la Rak\'ah". Si vous arrivez alors que l\'imam est encore en Ruku et que vous faites le Takbir et le Ruku avant qu\'il ne se relève, la Rak\'ah est comptée.',
      ar: 'في الحديث: "من أدرك الركوع فقد أدرك الركعة". إذا وصلت والإمام في الركوع وكبّرت وركعت قبل أن يرفع، تُحتسب الركعة.',
      en: 'According to Hadith: "Whoever catches the Ruku has caught the Rak\'ah". If you arrive while imam is still in Ruku and make Takbir and Ruku before he rises, the Rak\'ah counts.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'congregation',
  },
  {
    id: 'salat-congregation-003',
    question: {
      fr: 'Que doit faire un Ma\'mum (fidèle) s\'il remarque que l\'Imam a oublié une prosternation ?',
      ar: 'ماذا يفعل المأموم إذا لاحظ أن الإمام نسي سجدة؟',
      en: 'What should a Ma\'mum (follower) do if he notices the Imam forgot a prostration?',
    },
    options: [
      { id: 'a', text: { fr: 'Il doit immédiatement crier "Subhanallah !"', ar: 'يجب أن يصرخ "سبحان الله!" فورا', en: 'Must immediately shout "Subhanallah!"' } },
      { id: 'b', text: { fr: 'Il doit dire "Subhanallah" pour les hommes, et taper des mains pour les femmes', ar: 'يقول "سبحان الله" للرجال، والتصفيق للنساء', en: 'Say "Subhanallah" for men, clap hands for women' } },
      { id: 'c', text: { fr: 'Il ne doit rien faire, l\'imam fera Sujud Sahw', ar: 'لا يفعل شيئا، الإمام سيسجد للسهو', en: 'Do nothing, imam will do Sujud Sahw' } },
      { id: 'd', text: { fr: 'Il doit quitter la prière et recommencer seul', ar: 'يترك الصلاة ويعيدها منفردا', en: 'Must leave prayer and restart alone' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Le Tasbih (dire Subhanallah) est pour les hommes, et le Tasfiq (frapper des mains) est pour les femmes" quand l\'imam fait une erreur pendant la prière.',
      ar: 'قال النبي ﷺ: "التسبيح للرجال والتصفيق للنساء" عند خطأ الإمام في الصلاة.',
      en: 'The Prophet ﷺ said: "Tasbih (saying Subhanallah) is for men, and Tasfiq (clapping hands) is for women" when the imam makes an error during prayer.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'congregation',
  },
  {
    id: 'salat-congregation-004',
    question: {
      fr: 'Quel est l\'ordre des rangées dans la mosquée selon la Sunna ?',
      ar: 'ما ترتيب الصفوف في المسجد حسب السنة؟',
      en: 'What is the order of rows in the mosque according to Sunnah?',
    },
    options: [
      { id: 'a', text: { fr: 'Hommes devant, enfants au milieu, femmes derrière', ar: 'الرجال أمام، الأطفال وسط، النساء خلف', en: 'Men front, children middle, women back' } },
      { id: 'b', text: { fr: 'Tout le monde peut se mélanger', ar: 'الجميع يمكن أن يختلطوا', en: 'Everyone can mix' } },
      { id: 'c', text: { fr: 'Les plus âgés devant uniquement', ar: 'الأكبر سنا أمام فقط', en: 'Eldest in front only' } },
      { id: 'd', text: { fr: 'Les femmes devant, les hommes derrière', ar: 'النساء أمام، الرجال خلف', en: 'Women front, men back' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ a ordonné : "Que les hommes se placent devant, puis les enfants, puis les femmes". Les meilleurs rangs des hommes sont les premiers, les meilleurs rangs des femmes sont les derniers.',
      ar: 'أمر النبي ﷺ: "ليلني منكم أولو الأحلام والنهى"، وقال: "خير صفوف الرجال أولها وشرها آخرها، وخير صفوف النساء آخرها وشرها أولها".',
      en: 'The Prophet ﷺ ordered: "Let men stand in front, then boys, then women". The best rows for men are the first, the best rows for women are the last.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'congregation',
  },
  {
    id: 'salat-congregation-005',
    question: {
      fr: 'Si vous arrivez à la prière de Maghrib alors que l\'imam est dans la 3ème Rak\'ah, combien de Rak\'ah devez-vous rattraper ?',
      ar: 'إذا وصلت لصلاة المغرب والإمام في الركعة الثالثة، كم ركعة تقضي؟',
      en: 'If you arrive at Maghrib prayer while imam is in 3rd Rak\'ah, how many Rak\'ah must you make up?',
    },
    options: [
      { id: 'a', text: { fr: '1 Rak\'ah', ar: 'ركعة واحدة', en: '1 Rak\'ah' } },
      { id: 'b', text: { fr: '2 Rak\'ah', ar: 'ركعتان', en: '2 Rak\'ah' } },
      { id: 'c', text: { fr: '3 Rak\'ah complètes', ar: '٣ ركعات كاملة', en: '3 complete Rak\'ah' } },
      { id: 'd', text: { fr: 'Aucune, vous avez manqué la prière', ar: 'لا شيء، فاتتك الصلاة', en: 'None, you missed the prayer' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Si vous rejoignez l\'imam dans la 3ème Rak\'ah de Maghrib, vous avez prié 1 Rak\'ah avec lui. Après son Salam, vous vous levez et complétez 2 Rak\'ah (les 1ère et 2ème que vous avez manquées).',
      ar: 'إذا أدركت الإمام في الركعة الثالثة من المغرب، صليت معه ركعة واحدة. بعد سلامه، تقوم وتقضي ركعتين (الأولى والثانية اللتين فاتتاك).',
      en: 'If you join imam in 3rd Rak\'ah of Maghrib, you prayed 1 Rak\'ah with him. After his Salam, you stand and complete 2 Rak\'ah (the 1st and 2nd you missed).',
    },
    points: 3,
    difficulty: 'hard',
    category: 'congregation',
  },
  {
    id: 'salat-congregation-006',
    question: {
      fr: 'Peut-on prier en congrégation chez soi avec sa famille ?',
      ar: 'هل يجوز الصلاة جماعة في البيت مع العائلة؟',
      en: 'Can one pray in congregation at home with family?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, la congrégation n\'est valide qu\'à la mosquée', ar: 'لا، الجماعة لا تصح إلا في المسجد', en: 'No, congregation is valid only at mosque' } },
      { id: 'b', text: { fr: 'Oui, c\'est permis et récompensé, mais la mosquée est meilleure', ar: 'نعم، جائز ومأجور، لكن المسجد أفضل', en: 'Yes, it\'s permitted and rewarded, but mosque is better' } },
      { id: 'c', text: { fr: 'Uniquement pour les femmes', ar: 'للنساء فقط', en: 'Only for women' } },
      { id: 'd', text: { fr: 'Uniquement pendant le confinement', ar: 'فقط وقت الحجر', en: 'Only during lockdown' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Prier en congrégation à la maison est permis et récompensé. Le Prophète ﷺ priait parfois en famille chez lui. Cependant, la prière à la mosquée a une récompense supérieure (27 fois) pour les hommes.',
      ar: 'صلاة الجماعة في البيت جائزة ومأجورة. كان النبي ﷺ يصلي أحيانا بأهله في البيت. لكن صلاة المسجد أعظم أجرا (٢٧ درجة) للرجال.',
      en: 'Praying in congregation at home is permitted and rewarded. The Prophet ﷺ sometimes prayed with his family at home. However, mosque prayer has greater reward (27 times) for men.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'congregation',
  },
  {
    id: 'salat-congregation-007',
    question: {
      fr: 'Où doit se tenir un enfant qui prie en congrégation avec un adulte ?',
      ar: 'أين يقف الطفل الذي يصلي جماعة مع بالغ؟',
      en: 'Where should a child stand when praying in congregation with an adult?',
    },
    options: [
      { id: 'a', text: { fr: 'Devant l\'adulte', ar: 'أمام البالغ', en: 'In front of adult' } },
      { id: 'b', text: { fr: 'À droite de l\'adulte', ar: 'على يمين البالغ', en: 'To the right of adult' } },
      { id: 'c', text: { fr: 'Derrière l\'adulte', ar: 'خلف البالغ', en: 'Behind adult' } },
      { id: 'd', text: { fr: 'N\'importe où', ar: 'في أي مكان', en: 'Anywhere' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Un enfant se place à droite de l\'adulte (imam) comme Ibn Abbas l\'a fait avec le Prophète ﷺ. Si plusieurs personnes, l\'enfant peut se mettre dans le rang avec les adultes.',
      ar: 'يقف الطفل على يمين البالغ (الإمام) كما فعل ابن عباس مع النبي ﷺ. إن كانوا أكثر، يقف الطفل في الصف مع البالغين.',
      en: 'A child stands to the right of the adult (imam) as Ibn Abbas did with the Prophet ﷺ. If multiple people, child can stand in row with adults.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'congregation',
  },
  {
    id: 'salat-congregation-008',
    question: {
      fr: 'Si l\'imam prolonge la prière et vous devez partir urgemment, que faire ?',
      ar: 'إذا أطال الإمام وتحتاج للمغادرة بشدة، ماذا تفعل؟',
      en: 'If imam prolongs prayer and you urgently need to leave, what to do?',
    },
    options: [
      { id: 'a', text: { fr: 'Rester absolument jusqu\'à la fin', ar: 'البقاء حتما إلى النهاية', en: 'Must stay until the end' } },
      { id: 'b', text: { fr: 'Formuler l\'intention de se séparer et terminer seul votre prière', ar: 'نية المفارقة وإتمام صلاتك منفردا', en: 'Intend to separate and complete your prayer alone' } },
      { id: 'c', text: { fr: 'Sortir immédiatement sans rien faire', ar: 'الخروج فورا دون شيء', en: 'Leave immediately without doing anything' } },
      { id: 'd', text: { fr: 'Taper des pieds pour attirer l\'attention', ar: 'الدق بالأرجل لجلب الانتباه', en: 'Stomp feet to get attention' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'En cas de nécessité urgente, vous pouvez formuler l\'intention de vous séparer de l\'imam (Niyyat al-Mufaraqah) et terminer votre prière seul, puis faire le Salam.',
      ar: 'عند الضرورة الملحة، يمكنك نية المفارقة للإمام وإتمام صلاتك منفردا، ثم السلام.',
      en: 'In case of urgent necessity, you can intend to separate from imam (Niyyat al-Mufaraqah) and complete your prayer alone, then make Salam.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'congregation',
  },
  {
    id: 'salat-congregation-009',
    question: {
      fr: 'Les femmes doivent-elles obligatoirement prier à la mosquée ?',
      ar: 'هل يجب على النساء الصلاة في المسجد؟',
      en: 'Must women obligatorily pray at the mosque?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, obligatoire comme pour les hommes', ar: 'نعم، واجب كالرجال', en: 'Yes, obligatory like men' } },
      { id: 'b', text: { fr: 'Non, leur prière à la maison est meilleure selon la Sunna', ar: 'لا، صلاتهن في البيت أفضل حسب السنة', en: 'No, their prayer at home is better according to Sunnah' } },
      { id: 'c', text: { fr: 'Uniquement le vendredi', ar: 'يوم الجمعة فقط', en: 'Only on Friday' } },
      { id: 'd', text: { fr: 'Uniquement pendant Ramadan', ar: 'في رمضان فقط', en: 'Only during Ramadan' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Ne les empêchez pas d\'aller aux mosquées, mais leurs maisons sont meilleures pour elles". Les femmes peuvent aller à la mosquée, mais leur prière à domicile a plus de mérite.',
      ar: 'قال النبي ﷺ: "لا تمنعوا إماء الله مساجد الله، وبيوتهن خير لهن". يجوز للنساء الذهاب للمسجد، لكن صلاتهن في البيت أفضل.',
      en: 'The Prophet ﷺ said: "Do not prevent the female servants of Allah from the mosques of Allah, but their houses are better for them". Women may go to mosque, but their home prayer has more merit.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'congregation',
  },
  {
    id: 'salat-congregation-010',
    question: {
      fr: 'Peut-on suivre un imam en prière à travers un écran vidéo (prière virtuelle) ?',
      ar: 'هل يمكن متابعة الإمام عبر شاشة فيديو (صلاة افتراضية)؟',
      en: 'Can one follow an imam through a video screen (virtual prayer)?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, c\'est équivalent à la mosquée', ar: 'نعم، مثل المسجد', en: 'Yes, equivalent to mosque' } },
      { id: 'b', text: { fr: 'Non selon l\'avis majoritaire, la congrégation exige la présence physique dans le même lieu', ar: 'لا عند الجمهور، الجماعة تتطلب التواجد الفعلي في نفس المكان', en: 'No according to majority, congregation requires physical presence in same place' } },
      { id: 'c', text: { fr: 'Uniquement pour le Tarawih', ar: 'للتراويح فقط', en: 'Only for Tarawih' } },
      { id: 'd', text: { fr: 'Uniquement pendant les pandémies', ar: 'فقط أثناء الأوبئة', en: 'Only during pandemics' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Selon l\'avis majoritaire des savants contemporains, la prière en congrégation nécessite d\'être physiquement au même endroit que l\'imam. Suivre via écran ne compte pas comme congrégation valide.',
      ar: 'عند جمهور العلماء المعاصرين، صلاة الجماعة تتطلب التواجد الفعلي مع الإمام. المتابعة عبر الشاشة لا تُعد جماعة صحيحة.',
      en: 'According to majority of contemporary scholars, congregational prayer requires physical presence in same place as imam. Following via screen doesn\'t count as valid congregation.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'congregation',
  },
];

// ============================================
// Questions - Annulatifs de la Prière (Mubṭilāt)
// ============================================

const invalidatorsQuestions: ExamQuestion[] = [
  {
    id: 'salat-invalidators-001',
    question: {
      fr: 'Qu\'arrive-t-il si vous parlez intentionnellement pendant la prière ?',
      ar: 'ماذا يحدث إذا تكلمت عمدا أثناء الصلاة؟',
      en: 'What happens if you speak intentionally during prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'Rien, vous continuez normalement', ar: 'لا شيء، تستمر عاديا', en: 'Nothing, continue normally' } },
      { id: 'b', text: { fr: 'La prière est annulée et doit être refaite', ar: 'تبطل الصلاة ويجب إعادتها', en: 'Prayer is invalidated and must be redone' } },
      { id: 'c', text: { fr: 'Vous faites Sujud Sahw seulement', ar: 'تسجد للسهو فقط', en: 'You only do Sujud Sahw' } },
      { id: 'd', text: { fr: 'Vous répétez la Rak\'ah', ar: 'تعيد الركعة', en: 'You repeat the Rak\'ah' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Parler intentionnellement de paroles humaines (non-Quran, non-Dhikr) invalide la prière. Le Prophète ﷺ a dit : "Cette prière ne convient à aucune parole des humains".',
      ar: 'الكلام عمدا بكلام الناس (غير القرآن والذكر) يُبطل الصلاة. قال النبي ﷺ: "إن هذه الصلاة لا يصلح فيها شيء من كلام الناس".',
      en: 'Intentionally speaking human speech (non-Quran, non-Dhikr) invalidates prayer. The Prophet ﷺ said: "This prayer is not suitable for any speech of humans".',
    },
    points: 2,
    difficulty: 'easy',
    category: 'invalidators',
  },
  {
    id: 'salat-invalidators-002',
    question: {
      fr: 'Si vous mangez ou buvez intentionnellement pendant la prière, qu\'arrive-t-il ?',
      ar: 'إذا أكلت أو شربت عمدا في الصلاة، ماذا يحدث؟',
      en: 'If you eat or drink intentionally during prayer, what happens?',
    },
    options: [
      { id: 'a', text: { fr: 'La prière est annulée', ar: 'تبطل الصلاة', en: 'Prayer is invalidated' } },
      { id: 'b', text: { fr: 'Rien si c\'est de l\'eau uniquement', ar: 'لا شيء إن كان ماء فقط', en: 'Nothing if it\'s only water' } },
      { id: 'c', text: { fr: 'Sujud Sahw suffit', ar: 'سجود السهو يكفي', en: 'Sujud Sahw suffices' } },
      { id: 'd', text: { fr: 'Vous devez faire une aumône', ar: 'عليك صدقة', en: 'You must give charity' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Manger ou boire intentionnellement annule la prière par consensus. Cependant, si c\'est par oubli, la prière reste valide selon le Hadith de Abu Hurayra.',
      ar: 'الأكل أو الشرب عمدا يُبطل الصلاة بالإجماع. لكن إن كان سهوا، فالصلاة صحيحة حسب حديث أبي هريرة.',
      en: 'Eating or drinking intentionally invalidates prayer by consensus. However, if done forgetfully, prayer remains valid according to Hadith of Abu Hurayra.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'invalidators',
  },
  {
    id: 'salat-invalidators-003',
    question: {
      fr: 'Le rire à voix haute (Qahqaha) pendant la prière a quel effet ?',
      ar: 'الضحك بصوت (القهقهة) أثناء الصلاة له أي أثر؟',
      en: 'Laughing aloud (Qahqaha) during prayer has what effect?',
    },
    options: [
      { id: 'a', text: { fr: 'Rien, c\'est permis', ar: 'لا شيء، مباح', en: 'Nothing, it\'s permitted' } },
      { id: 'b', text: { fr: 'Annule la prière et le Wudu selon les Hanafis', ar: 'يُبطل الصلاة والوضوء عند الحنفية', en: 'Invalidates prayer and wudu according to Hanafis' } },
      { id: 'c', text: { fr: 'Annule seulement la Rak\'ah en cours', ar: 'يُبطل الركعة الحالية فقط', en: 'Invalidates only current Rak\'ah' } },
      { id: 'd', text: { fr: 'Nécessite une longue prosternation', ar: 'يتطلب سجدة طويلة', en: 'Requires a long prostration' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le rire à voix haute (Qahqaha) annule la prière selon tous les madhabs, et annule aussi le Wudu selon les Hanafis. Le sourire (Tabassum) sans son n\'annule pas.',
      ar: 'الضحك بصوت (القهقهة) يُبطل الصلاة عند كل المذاهب، ويُبطل الوضوء أيضا عند الحنفية. التبسم بدون صوت لا يُبطل.',
      en: 'Loud laughter (Qahqaha) invalidates prayer according to all madhabs, and also invalidates wudu according to Hanafis. Smiling (Tabassum) without sound doesn\'t invalidate.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'invalidators',
  },
  {
    id: 'salat-invalidators-004',
    question: {
      fr: 'Quel type de mouvement excessif annule la prière ?',
      ar: 'أي نوع من الحركة الكثيرة يُبطل الصلاة؟',
      en: 'What type of excessive movement invalidates prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'Tout mouvement quel qu\'il soit', ar: 'أي حركة كانت', en: 'Any movement whatsoever' } },
      { id: 'b', text: { fr: 'Trois mouvements consécutifs sans rapport avec la prière', ar: 'ثلاث حركات متتالية ليست من جنس الصلاة', en: 'Three consecutive movements not related to prayer' } },
      { id: 'c', text: { fr: 'Uniquement courir', ar: 'الجري فقط', en: 'Only running' } },
      { id: 'd', text: { fr: 'Gratter sa tête une fois', ar: 'حك الرأس مرة واحدة', en: 'Scratching head once' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Selon la majorité des savants, trois mouvements consécutifs sans lien avec la prière l\'invalident. Le Prophète ﷺ a fait un ou deux mouvements, indiquant que c\'est acceptable.',
      ar: 'عند جمهور العلماء، ثلاث حركات متتالية ليست من الصلاة تُبطلها. فعل النبي ﷺ حركة أو حركتين، مما يدل على جوازها.',
      en: 'According to majority of scholars, three consecutive movements unrelated to prayer invalidate it. The Prophet ﷺ made one or two movements, indicating they\'re acceptable.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'invalidators',
  },
  {
    id: 'salat-invalidators-005',
    question: {
      fr: 'Se détourner complètement de la Qibla pendant la prière a quel effet ?',
      ar: 'الانحراف الكامل عن القبلة أثناء الصلاة له أي أثر؟',
      en: 'Turning completely away from Qibla during prayer has what effect?',
    },
    options: [
      { id: 'a', text: { fr: 'Rien, on peut prier dans toutes les directions', ar: 'لا شيء، يمكن الصلاة لأي اتجاه', en: 'Nothing, can pray in any direction' } },
      { id: 'b', text: { fr: 'Annule la prière selon l\'avis majoritaire', ar: 'يُبطل الصلاة عند الجمهور', en: 'Invalidates prayer according to majority opinion' } },
      { id: 'c', text: { fr: 'Permis si c\'est par erreur', ar: 'مباح إن كان خطأ', en: 'Permitted if by mistake' } },
      { id: 'd', text: { fr: 'Nécessite seulement Sujud Sahw', ar: 'يتطلب سجود السهو فقط', en: 'Requires only Sujud Sahw' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Se détourner intentionnellement et complètement de la Qibla annule la prière. Une légère déviation (moins de 45°) est tolérée. Si par erreur et on se corrige immédiatement, la prière reste valide.',
      ar: 'الانحراف عمدا وكليا عن القبلة يُبطل الصلاة. الانحراف الطفيف (أقل من ٤٥°) مغتفر. إن كان خطأ وتم التصحيح فورا، الصلاة صحيحة.',
      en: 'Intentionally and completely turning from Qibla invalidates prayer. Slight deviation (less than 45°) is tolerated. If by mistake and corrected immediately, prayer remains valid.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'invalidators',
  },
  {
    id: 'salat-invalidators-006',
    question: {
      fr: 'Si votre Wudu se rompt pendant la prière, que devez-vous faire ?',
      ar: 'إذا انتقض وضوءك أثناء الصلاة، ماذا تفعل؟',
      en: 'If your wudu breaks during prayer, what should you do?',
    },
    options: [
      { id: 'a', text: { fr: 'Continuer la prière normalement', ar: 'الاستمرار في الصلاة عاديا', en: 'Continue prayer normally' } },
      { id: 'b', text: { fr: 'Sortir discrètement, refaire le Wudu, et recommencer la prière', ar: 'الخروج بهدوء، إعادة الوضوء، وإعادة الصلاة', en: 'Exit discreetly, redo wudu, and restart prayer' } },
      { id: 'c', text: { fr: 'Faire Sujud Sahw à la fin', ar: 'سجود السهو في النهاية', en: 'Do Sujud Sahw at end' } },
      { id: 'd', text: { fr: 'Terminer puis refaire le Wudu après', ar: 'إنهاء ثم إعادة الوضوء بعد', en: 'Finish then redo wudu after' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Si le Wudu se rompt pendant la prière (flatulence, besoin urgent), vous devez sortir de la prière, refaire le Wudu, puis reprendre la prière depuis le début.',
      ar: 'إذا انتقض الوضوء في الصلاة (ريح، حاجة ملحة)، يجب الخروج من الصلاة، وإعادة الوضوء، ثم إعادة الصلاة من البداية.',
      en: 'If wudu breaks during prayer (flatulence, urgent need), you must exit prayer, redo wudu, then restart prayer from beginning.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'invalidators',
  },
  {
    id: 'salat-invalidators-007',
    question: {
      fr: 'Ajouter intentionnellement un Rukn (pilier) comme une 5ème Rak\'ah dans une prière de 4, qu\'arrive-t-il ?',
      ar: 'زيادة ركن عمدا كركعة خامسة في صلاة رباعية، ماذا يحدث؟',
      en: 'Intentionally adding a Rukn (pillar) like a 5th Rak\'ah in a 4-Rak\'ah prayer, what happens?',
    },
    options: [
      { id: 'a', text: { fr: 'La prière est annulée', ar: 'تبطل الصلاة', en: 'Prayer is invalidated' } },
      { id: 'b', text: { fr: 'On fait Sujud Sahw et la prière est valide', ar: 'سجود السهو والصلاة صحيحة', en: 'Do Sujud Sahw and prayer is valid' } },
      { id: 'c', text: { fr: 'On considère la 5ème comme prière surérogatoire', ar: 'تُعتبر الخامسة نافلة', en: 'Consider 5th as voluntary prayer' } },
      { id: 'd', text: { fr: 'Rien, on continue normalement', ar: 'لا شيء، نستمر عاديا', en: 'Nothing, continue normally' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Ajouter intentionnellement un pilier (Rukn) annule la prière. Si c\'est par oubli, on s\'assoit au 4ème Tashahhud détecté, fait Salam, puis Sujud Sahw.',
      ar: 'زيادة ركن عمدا تُبطل الصلاة. إن كان سهوا، يجلس في التشهد الرابع المُلاحَظ، يُسلّم، ثم يسجد للسهو.',
      en: 'Intentionally adding a pillar (Rukn) invalidates prayer. If by forgetfulness, sit at detected 4th Tashahhud, make Salam, then Sujud Sahw.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'invalidators',
  },
  {
    id: 'salat-invalidators-008',
    question: {
      fr: 'Découvrir sa Awra (partie à couvrir) pendant la prière invalide-t-elle la prière ?',
      ar: 'كشف العورة أثناء الصلاة هل يُبطل الصلاة؟',
      en: 'Uncovering one\'s Awra during prayer does it invalidate prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, aucun effet', ar: 'لا، لا أثر', en: 'No, no effect' } },
      { id: 'b', text: { fr: 'Oui, si c\'est intentionnel ou pour un temps long', ar: 'نعم، إن كان عمدا أو لزمن طويل', en: 'Yes, if intentional or for long time' } },
      { id: 'c', text: { fr: 'Seulement pour les femmes', ar: 'للنساء فقط', en: 'Only for women' } },
      { id: 'd', text: { fr: 'Uniquement le vendredi', ar: 'يوم الجمعة فقط', en: 'Only on Friday' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Découvrir la Awra intentionnellement ou pour un temps long invalide la prière, car couvrir la Awra est une condition de validité. Si accidentel et bref, on se couvre et continue.',
      ar: 'كشف العورة عمدا أو لزمن طويل يُبطل الصلاة، لأن ستر العورة شرط لصحتها. إن كان عرضيا وقصيرا، يُغطى ويستمر.',
      en: 'Intentionally or for long time uncovering Awra invalidates prayer, as covering Awra is condition of validity. If accidental and brief, cover and continue.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'invalidators',
  },
];

// ============================================
// Assemblage de l'examen COMPLET
// ============================================

const allQuestions: ExamQuestion[] = [
  ...taharaQuestions,           // 8 questions - Purification
  ...ghuslQuestions,            // 10 questions - Ghusl (Ablutions majeures)  
  ...wuduQuestions,             // 8 questions - Ablutions
  ...adhanQuestions,            // 4 questions - Adhan/Iqama
  ...salatQuestions,            // 12 questions - Prière de base
  ...congregationQuestions,     // 10 questions - Prière en congrégation
  ...invalidatorsQuestions,     // 8 questions - Annulatifs de la prière
  ...sujudSahwQuestions,        // 4 questions - Prosternation de l'oubli
  ...nawafilQuestions,          // 4 questions - Prières surérogatoires
  ...allSpecialPrayersQuestions, // 30 questions - Prières spéciales
  // Total : 98 questions
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
    fr: 'Examen de 68 questions sélectionnées aléatoirement parmi une banque de 98 questions. Couvre Tahara, Ghusl, Wudu, Congrégation, Annulatifs et toutes les prières. Chaque tentative présente des questions différentes pour une évaluation authentique.',
    ar: 'امتحان من 68 سؤالاً يتم اختيارها عشوائياً من بنك يضم 98 سؤالاً. يغطي الطهارة، الغسل، الوضوء، الجماعة، المبطلات وجميع الصلوات. كل محاولة تقدم أسئلة مختلفة لتقييم حقيقي.',
    en: 'Exam with 68 questions randomly selected from a pool of 98 questions. Covers Tahara, Ghusl, Wudu, Congregation, Invalidators and all prayers. Each attempt presents different questions for authentic assessment.',
  },
  instructions: {
    fr: 'Vous avez 70 minutes pour répondre à 68 questions sélectionnées aléatoirement. Chaque question a une seule bonne réponse. Un score de 70% est requis pour réussir. Les questions changent à chaque tentative !',
    ar: 'لديك 70 دقيقة للإجابة على 68 سؤالاً يتم اختيارها عشوائياً. لكل سؤال إجابة صحيحة واحدة. يُشترط 70% للنجاح. الأسئلة تتغير في كل محاولة!',
    en: 'You have 70 minutes to answer 68 randomly selected questions. Each question has one correct answer. A score of 70% is required to pass. Questions change with each attempt!',
  },
  courseSlug: 'salat',
  
  // =============================================
  // SYSTÈME DE SÉLECTION ALÉATOIRE
  // =============================================
  // Banque de toutes les questions disponibles
  questionPool: allQuestions,
  
  // Nombre de questions à sélectionner pour chaque tentative
  questionsPerExam: 68,
  
  // Configuration par catégorie pour une couverture équilibrée
  // Garantit que chaque domaine est représenté proportionnellement
  categoryConfig: [
    // Tahara, Ghusl & Wudu - Fondamentaux (18 questions sur 26 disponibles)
    { category: 'tahara', count: 6 },
    { category: 'ghusl', count: 6 },
    { category: 'wudu', count: 6 },
    
    // Salat de base - Cœur de l'examen (8 questions sur 12 disponibles)
    { category: 'salat', count: 8 },
    
    // Adhan & Iqama (3 questions sur 4 disponibles)
    { category: 'adhan', count: 3 },
    
    // Congrégation & Annulatifs - Pratique avancée (10 questions sur 18 disponibles)
    { category: 'congregation', count: 5 },
    { category: 'invalidators', count: 5 },
    
    // Sujud Sahw & Nawafil (5 questions sur 8 disponibles)
    { category: 'sujud-sahw', count: 3 },
    { category: 'nawafil', count: 2 },
    
    // Prières spéciales - Large couverture (22 questions sur 30 disponibles)
    { category: 'juma', count: 3 },
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
  
  duration: 70, // 70 minutes pour 68 questions
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
