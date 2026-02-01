/**
 * Quiz Fondements de la Foi — Aqeedah Niveau 1
 * 
 * Ce quiz couvre les bases de la croyance islamique :
 * piliers de la foi, Tawhid, sources de la croyance.
 * 
 * Leçons couvertes : 001-014
 * Niveau : Débutant
 * Questions : 15
 */

import { Quiz, Question } from '../types';

const questions: Question[] = [
  // --- Questions Faciles (5) ---
  {
    id: 'aqeedah-q001',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Combien y a-t-il de piliers de la foi (arkan al-iman) ?',
      ar: 'كم عدد أركان الإيمان؟',
      en: 'How many pillars of faith (arkan al-iman) are there?',
    },
    options: [
      { id: 'a', text: { fr: '5', ar: '٥', en: '5' } },
      { id: 'b', text: { fr: '6', ar: '٦', en: '6' } },
      { id: 'c', text: { fr: '7', ar: '٧', en: '7' } },
      { id: 'd', text: { fr: '4', ar: '٤', en: '4' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les 6 piliers de la foi sont : la foi en Allah, Ses anges, Ses livres, Ses messagers, le Jour Dernier et le destin (bon et mauvais). C\'est le hadith de Jibril [Muslim].',
      ar: 'أركان الإيمان ستة: الإيمان بالله وملائكته وكتبه ورسله واليوم الآخر والقدر خيره وشره. وهذا من حديث جبريل [مسلم].',
      en: 'The 6 pillars of faith are: belief in Allah, His angels, His books, His messengers, the Last Day, and destiny (good and bad). This is from the hadith of Jibril [Muslim].',
    },
    reference: {
      courseSlug: 'aqeedah-islamique',
      lessonId: '001-introduction',
    },
    points: 10,
    tags: ['aqeedah', 'iman', 'piliers'],
  },
  {
    id: 'aqeedah-q002',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quelles sont les deux sources principales de la croyance islamique ?',
      ar: 'ما هما المصدران الرئيسيان للعقيدة الإسلامية؟',
      en: 'What are the two main sources of Islamic creed?',
    },
    options: [
      { id: 'a', text: { fr: 'Le Coran et la raison', ar: 'القرآن والعقل', en: 'The Quran and reason' } },
      { id: 'b', text: { fr: 'Le Coran et la Sunna', ar: 'القرآن والسنة', en: 'The Quran and Sunnah' } },
      { id: 'c', text: { fr: 'La Sunna et le consensus', ar: 'السنة والإجماع', en: 'Sunnah and consensus' } },
      { id: 'd', text: { fr: 'Les savants et la tradition', ar: 'العلماء والتقليد', en: 'Scholars and tradition' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Coran et la Sunna authentique sont les deux sources de la croyance. Allah dit : « Obéissez à Allah et obéissez au Messager » [4:59]. Les autres sources (ijma\', qiyas) sont secondaires.',
      ar: 'القرآن والسنة الصحيحة هما مصدرا العقيدة. قال تعالى: {أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ} [النساء:59]. المصادر الأخرى (الإجماع والقياس) ثانوية.',
      en: 'The Quran and authentic Sunnah are the two sources of creed. Allah says: "Obey Allah and obey the Messenger" [4:59]. Other sources (ijma\', qiyas) are secondary.',
    },
    reference: {
      courseSlug: 'aqeedah-islamique',
      lessonId: '011-sources-aqeedah',
    },
    points: 10,
    tags: ['aqeedah', 'sources', 'quran', 'sunna'],
  },
  {
    id: 'aqeedah-q003',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'Le Tawhid signifie l\'unicité d\'Allah dans Sa seigneurie, Son adoration et Ses noms.',
      ar: 'التوحيد يعني إفراد الله بالربوبية والألوهية والأسماء والصفات.',
      en: 'Tawhid means the oneness of Allah in His lordship, worship, and names.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'Le Tawhid comprend trois catégories : Rububiyyah (seigneurie), Uluhiyyah (adoration) et Asma wa Sifat (noms et attributs). C\'est la base de la croyance islamique.',
      ar: 'التوحيد يشمل ثلاثة أقسام: الربوبية والألوهية والأسماء والصفات. وهو أساس العقيدة الإسلامية.',
      en: 'Tawhid includes three categories: Rububiyyah (lordship), Uluhiyyah (worship), and Asma wa Sifat (names and attributes). It is the foundation of Islamic creed.',
    },
    reference: {
      courseSlug: 'aqeedah-islamique',
      lessonId: '014-arkan-tawhid',
    },
    points: 10,
    tags: ['aqeedah', 'tawhid'],
  },
  {
    id: 'aqeedah-q004',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quel est le premier pilier de l\'Islam ?',
      ar: 'ما هو الركن الأول من أركان الإسلام؟',
      en: 'What is the first pillar of Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'La prière (Salat)', ar: 'الصلاة', en: 'Prayer (Salat)' } },
      { id: 'b', text: { fr: 'L\'attestation de foi (Shahada)', ar: 'الشهادة', en: 'Testimony of faith (Shahada)' } },
      { id: 'c', text: { fr: 'Le jeûne (Siyam)', ar: 'الصيام', en: 'Fasting (Siyam)' } },
      { id: 'd', text: { fr: 'L\'aumône (Zakat)', ar: 'الزكاة', en: 'Alms (Zakat)' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La Shahada (Lā ilāha illa Allāh, Muḥammadun rasūl Allāh) est le premier pilier. C\'est la porte d\'entrée dans l\'Islam et le fondement du Tawhid.',
      ar: 'الشهادة (لا إله إلا الله محمد رسول الله) هي الركن الأول. وهي باب الدخول في الإسلام وأساس التوحيد.',
      en: 'The Shahada (Lā ilāha illa Allāh, Muḥammadun rasūl Allāh) is the first pillar. It is the gateway to Islam and the foundation of Tawhid.',
    },
    reference: {
      courseSlug: 'aqeedah-islamique',
      lessonId: '001-introduction',
    },
    points: 10,
    tags: ['aqeedah', 'islam', 'shahada'],
  },
  {
    id: 'aqeedah-q005',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'Les anges sont créés de lumière et ne désobéissent jamais à Allah.',
      ar: 'الملائكة مخلوقون من نور ولا يعصون الله أبداً.',
      en: 'Angels are created from light and never disobey Allah.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : « Les anges ont été créés de lumière » [Muslim]. Allah dit : « Ils ne désobéissent pas à Allah en ce qu\'Il leur commande » [66:6].',
      ar: 'قال النبي ﷺ: «خُلقت الملائكة من نور» [مسلم]. وقال تعالى: {لَا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ} [التحريم:6].',
      en: 'The Prophet ﷺ said: "Angels were created from light" [Muslim]. Allah says: "They do not disobey Allah in what He commands them" [66:6].',
    },
    reference: {
      courseSlug: 'aqeedah-islamique',
      lessonId: '005-anges',
    },
    points: 10,
    tags: ['aqeedah', 'anges', 'malaika'],
  },

  // --- Questions Moyennes (6) ---
  {
    id: 'aqeedah-q006',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que le Tawhid ar-Rububiyyah ?',
      ar: 'ما هو توحيد الربوبية؟',
      en: 'What is Tawhid ar-Rububiyyah?',
    },
    options: [
      { id: 'a', text: { fr: 'Adorer Allah seul', ar: 'عبادة الله وحده', en: 'Worshipping Allah alone' } },
      { id: 'b', text: { fr: 'Reconnaître Allah comme seul Créateur et Maître', ar: 'الإقرار بأن الله وحده الخالق والمدبر', en: 'Recognizing Allah as sole Creator and Master' } },
      { id: 'c', text: { fr: 'Affirmer les noms et attributs d\'Allah', ar: 'إثبات أسماء الله وصفاته', en: 'Affirming Allah\'s names and attributes' } },
      { id: 'd', text: { fr: 'Suivre la Sunna du Prophète', ar: 'اتباع سنة النبي', en: 'Following the Prophet\'s Sunnah' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Tawhid ar-Rububiyyah = reconnaître qu\'Allah seul crée, possède, gère l\'univers. Même les polythéistes de Quraysh reconnaissaient cela, mais cela ne suffit pas — il faut aussi l\'Uluhiyyah (adoration).',
      ar: 'توحيد الربوبية = الإقرار بأن الله وحده الخالق المالك المدبر. حتى مشركو قريش كانوا يقرون بهذا، لكنه لا يكفي — لا بد من الألوهية (العبادة).',
      en: 'Tawhid ar-Rububiyyah = recognizing that Allah alone creates, owns, and manages the universe. Even the polytheists of Quraysh acknowledged this, but it is not sufficient — Uluhiyyah (worship) is also required.',
    },
    reference: {
      courseSlug: 'aqeedah-islamique',
      lessonId: '014-arkan-tawhid',
    },
    points: 15,
    tags: ['aqeedah', 'tawhid', 'rububiyyah'],
  },
  {
    id: 'aqeedah-q007',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelle est la différence entre Islam, Iman et Ihsan ?',
      ar: 'ما الفرق بين الإسلام والإيمان والإحسان؟',
      en: 'What is the difference between Islam, Iman, and Ihsan?',
    },
    options: [
      { id: 'a', text: { fr: 'Ce sont des synonymes', ar: 'هي مترادفات', en: 'They are synonyms' } },
      { id: 'b', text: { fr: 'Islam = actes, Iman = croyance, Ihsan = excellence', ar: 'الإسلام = الأعمال، الإيمان = العقيدة، الإحسان = الإتقان', en: 'Islam = acts, Iman = belief, Ihsan = excellence' } },
      { id: 'c', text: { fr: 'Seuls les prophètes atteignent l\'Ihsan', ar: 'الأنبياء فقط يبلغون الإحسان', en: 'Only prophets reach Ihsan' } },
      { id: 'd', text: { fr: 'L\'Iman est facultatif', ar: 'الإيمان اختياري', en: 'Iman is optional' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Dans le hadith de Jibril : Islam = 5 piliers (actes extérieurs), Iman = 6 piliers (croyance du cœur), Ihsan = « adorer Allah comme si tu Le voyais » (excellence spirituelle).',
      ar: 'في حديث جبريل: الإسلام = 5 أركان (الأعمال الظاهرة)، الإيمان = 6 أركان (عقيدة القلب)، الإحسان = «أن تعبد الله كأنك تراه» (الإتقان الروحي).',
      en: 'In the hadith of Jibril: Islam = 5 pillars (external acts), Iman = 6 pillars (belief of heart), Ihsan = "worship Allah as if you see Him" (spiritual excellence).',
    },
    reference: {
      courseSlug: 'aqeedah-islamique',
      lessonId: '001-introduction',
    },
    points: 15,
    tags: ['aqeedah', 'islam', 'iman', 'ihsan'],
  },
  {
    id: 'aqeedah-q008',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Combien de livres révélés sont mentionnés dans le Coran ?',
      ar: 'كم عدد الكتب المنزلة المذكورة في القرآن؟',
      en: 'How many revealed books are mentioned in the Quran?',
    },
    options: [
      { id: 'a', text: { fr: '3 (Torah, Évangile, Coran)', ar: '٣ (التوراة والإنجيل والقرآن)', en: '3 (Torah, Gospel, Quran)' } },
      { id: 'b', text: { fr: '4 (+ Psaumes/Zabur)', ar: '٤ (+ الزبور)', en: '4 (+ Psalms/Zabur)' } },
      { id: 'c', text: { fr: '5 (+ Feuillets d\'Ibrahim)', ar: '٥ (+ صحف إبراهيم)', en: '5 (+ Scrolls of Ibrahim)' } },
      { id: 'd', text: { fr: '2 seulement', ar: '٢ فقط', en: 'Only 2' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: '5 sont nommés : Torah (Musa), Zabur (Dawud), Injil (Isa), Suhuf Ibrahim, et le Coran (Muhammad ﷺ). Nous croyons aussi aux autres livres non mentionnés.',
      ar: '٥ مذكورة بالاسم: التوراة (موسى)، الزبور (داود)، الإنجيل (عيسى)، صحف إبراهيم، والقرآن (محمد ﷺ). ونؤمن أيضاً بالكتب الأخرى غير المذكورة.',
      en: '5 are named: Torah (Musa), Zabur (Dawud), Injil (Isa), Scrolls of Ibrahim, and Quran (Muhammad ﷺ). We also believe in other unnamed books.',
    },
    reference: {
      courseSlug: 'aqeedah-islamique',
      lessonId: '006-livres',
    },
    points: 15,
    tags: ['aqeedah', 'livres', 'kutub'],
  },
  {
    id: 'aqeedah-q009',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelle est la preuve rationnelle la plus simple de l\'existence d\'Allah ?',
      ar: 'ما هو أبسط دليل عقلي على وجود الله؟',
      en: 'What is the simplest rational proof of Allah\'s existence?',
    },
    options: [
      { id: 'a', text: { fr: 'L\'argument cosmologique (tout a une cause)', ar: 'الدليل الكوني (كل شيء له سبب)', en: 'Cosmological argument (everything has a cause)' } },
      { id: 'b', text: { fr: 'Le consensus des savants', ar: 'إجماع العلماء', en: 'Consensus of scholars' } },
      { id: 'c', text: { fr: 'Les miracles scientifiques', ar: 'الإعجاز العلمي', en: 'Scientific miracles' } },
      { id: 'd', text: { fr: 'La tradition familiale', ar: 'التقليد العائلي', en: 'Family tradition' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'L\'argument cosmologique : l\'univers existe, donc il a un Créateur. Allah dit : « Ont-ils été créés de rien, ou sont-ils eux-mêmes les créateurs ? » [52:35]. C\'est la fitrah naturelle.',
      ar: 'الدليل الكوني: الكون موجود، إذن له خالق. قال تعالى: {أَمْ خُلِقُوا مِنْ غَيْرِ شَيْءٍ أَمْ هُمُ الْخَالِقُونَ} [الطور:35]. وهذه هي الفطرة الطبيعية.',
      en: 'Cosmological argument: the universe exists, so it has a Creator. Allah says: "Were they created from nothing, or are they the creators?" [52:35]. This is natural fitrah.',
    },
    reference: {
      courseSlug: 'aqeedah-islamique',
      lessonId: '010-preuves-existence-allah',
    },
    points: 15,
    tags: ['aqeedah', 'preuves', 'allah'],
  },
  {
    id: 'aqeedah-q010',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelle est une cause majeure de déviation en matière de croyance ?',
      ar: 'ما هو سبب رئيسي للانحراف في العقيدة؟',
      en: 'What is a major cause of deviation in creed?',
    },
    options: [
      { id: 'a', text: { fr: 'Suivre le Coran et la Sunna', ar: 'اتباع القرآن والسنة', en: 'Following Quran and Sunnah' } },
      { id: 'b', text: { fr: 'Donner la priorité à la raison sur la révélation', ar: 'تقديم العقل على الوحي', en: 'Prioritizing reason over revelation' } },
      { id: 'c', text: { fr: 'Étudier avec des savants', ar: 'الدراسة عند العلماء', en: 'Studying with scholars' } },
      { id: 'd', text: { fr: 'Lire les livres de hadith', ar: 'قراءة كتب الحديث', en: 'Reading hadith books' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Donner la priorité à la raison humaine limitée sur la révélation divine conduit à la déviation. Les Mu\'tazilites et philosophes ont dévié ainsi. La raison doit être guidée par la révélation.',
      ar: 'تقديم العقل البشري المحدود على الوحي الإلهي يؤدي إلى الانحراف. المعتزلة والفلاسفة انحرفوا بهذا. العقل يجب أن يُرشد بالوحي.',
      en: 'Prioritizing limited human reason over divine revelation leads to deviation. The Mu\'tazilites and philosophers deviated this way. Reason must be guided by revelation.',
    },
    reference: {
      courseSlug: 'aqeedah-islamique',
      lessonId: '013-causes-deviation',
    },
    points: 15,
    tags: ['aqeedah', 'deviation', 'raison'],
  },
  {
    id: 'aqeedah-q011',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quel ange est chargé de la révélation ?',
      ar: 'أي ملك مكلف بالوحي؟',
      en: 'Which angel is responsible for revelation?',
    },
    options: [
      { id: 'a', text: { fr: 'Mikail', ar: 'ميكائيل', en: 'Mikail' } },
      { id: 'b', text: { fr: 'Israfil', ar: 'إسرافيل', en: 'Israfil' } },
      { id: 'c', text: { fr: 'Jibril', ar: 'جبريل', en: 'Jibril' } },
      { id: 'd', text: { fr: 'Malik', ar: 'مالك', en: 'Malik' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Jibril (عليه السلام) est l\'ange de la révélation. Il a transmis le Coran au Prophète ﷺ. Allah dit : « Dis : Quiconque est ennemi de Jibril... c\'est lui qui l\'a fait descendre sur ton cœur » [2:97].',
      ar: 'جبريل (عليه السلام) هو ملك الوحي. نزل بالقرآن على النبي ﷺ. قال تعالى: {قُلْ مَن كَانَ عَدُوًّا لِّجِبْرِيلَ فَإِنَّهُ نَزَّلَهُ عَلَىٰ قَلْبِكَ} [البقرة:97].',
      en: 'Jibril (عليه السلام) is the angel of revelation. He transmitted the Quran to the Prophet ﷺ. Allah says: "Say: Whoever is an enemy of Jibril... it is he who brought it down upon your heart" [2:97].',
    },
    reference: {
      courseSlug: 'aqeedah-islamique',
      lessonId: '005-anges',
    },
    points: 15,
    tags: ['aqeedah', 'anges', 'jibril'],
  },

  // --- Questions Difficiles (4) ---
  {
    id: 'aqeedah-q012',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle est la position correcte concernant les noms et attributs d\'Allah ?',
      ar: 'ما هو الموقف الصحيح من أسماء الله وصفاته؟',
      en: 'What is the correct position regarding Allah\'s names and attributes?',
    },
    options: [
      { id: 'a', text: { fr: 'Les nier (ta\'til)', ar: 'نفيها (التعطيل)', en: 'Deny them (ta\'til)' } },
      { id: 'b', text: { fr: 'Les comparer aux créatures (tashbih)', ar: 'تشبيهها بالمخلوقات (التشبيه)', en: 'Compare them to creatures (tashbih)' } },
      { id: 'c', text: { fr: 'Les affirmer sans les comparer ni les nier (ithbat)', ar: 'إثباتها بلا تشبيه ولا تعطيل (الإثبات)', en: 'Affirm them without comparison or denial (ithbat)' } },
      { id: 'd', text: { fr: 'Les interpréter métaphoriquement (ta\'wil)', ar: 'تأويلها مجازياً (التأويل)', en: 'Interpret them metaphorically (ta\'wil)' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Ahl as-Sunnah affirme les noms et attributs d\'Allah tels qu\'Il Se les est attribués, sans tashbih (ressemblance), ni ta\'til (négation), ni takyif (demander "comment"). « Il n\'y a rien qui Lui ressemble » [42:11].',
      ar: 'أهل السنة يثبتون أسماء الله وصفاته كما وصف بها نفسه، بلا تشبيه ولا تعطيل ولا تكييف. {لَيْسَ كَمِثْلِهِ شَيْءٌ} [الشورى:11].',
      en: 'Ahl as-Sunnah affirms Allah\'s names and attributes as He described Himself, without tashbih (resemblance), ta\'til (denial), or takyif (asking "how"). "There is nothing like Him" [42:11].',
    },
    reference: {
      courseSlug: 'aqeedah-islamique',
      lessonId: '012-caracteristiques-aqeedah',
    },
    points: 20,
    tags: ['aqeedah', 'asma', 'sifat'],
  },
  {
    id: 'aqeedah-q013',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle est la croyance correcte concernant le destin (al-Qadar) ?',
      ar: 'ما هي العقيدة الصحيحة في القدر؟',
      en: 'What is the correct belief regarding destiny (al-Qadar)?',
    },
    options: [
      { id: 'a', text: { fr: 'L\'homme n\'a aucun libre arbitre (jabr)', ar: 'الإنسان ليس له إرادة (الجبر)', en: 'Man has no free will (jabr)' } },
      { id: 'b', text: { fr: 'L\'homme crée ses propres actes indépendamment (qadariyyah)', ar: 'الإنسان يخلق أفعاله مستقلاً (القدرية)', en: 'Man creates his own acts independently (qadariyyah)' } },
      { id: 'c', text: { fr: 'Allah a tout décrété mais l\'homme a une volonté et un choix', ar: 'الله قدر كل شيء لكن للإنسان إرادة واختيار', en: 'Allah decreed everything but man has will and choice' } },
      { id: 'd', text: { fr: 'Le destin n\'existe pas', ar: 'القدر غير موجود', en: 'Destiny does not exist' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Ahl as-Sunnah : Allah a tout décrété (\'ilm, kitaba, mashi\'a, khalq), mais l\'homme a une volonté réelle et est responsable de ses choix. Ni jabr (fatalisme) ni qadariyyah (libre arbitre absolu).',
      ar: 'أهل السنة: الله قدر كل شيء (العلم والكتابة والمشيئة والخلق)، لكن للإنسان إرادة حقيقية وهو مسؤول عن اختياراته. لا جبر ولا قدرية.',
      en: 'Ahl as-Sunnah: Allah decreed everything (\'ilm, kitaba, mashi\'a, khalq), but man has real will and is responsible for his choices. Neither jabr (fatalism) nor qadariyyah (absolute free will).',
    },
    reference: {
      courseSlug: 'aqeedah-islamique',
      lessonId: '009-destin',
    },
    points: 20,
    tags: ['aqeedah', 'qadar', 'destin'],
  },
  {
    id: 'aqeedah-q014',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Pourquoi les polythéistes de Quraysh n\'étaient-ils pas musulmans malgré leur croyance en Allah comme Créateur ?',
      ar: 'لماذا لم يكن مشركو قريش مسلمين رغم إيمانهم بالله خالقاً؟',
      en: 'Why were the polytheists of Quraysh not Muslims despite believing in Allah as Creator?',
    },
    options: [
      { id: 'a', text: { fr: 'Ils ne priaient pas', ar: 'لم يكونوا يصلون', en: 'They did not pray' } },
      { id: 'b', text: { fr: 'Ils associaient d\'autres à Allah dans l\'adoration', ar: 'أشركوا غير الله في العبادة', en: 'They associated others with Allah in worship' } },
      { id: 'c', text: { fr: 'Ils ne croyaient pas aux anges', ar: 'لم يؤمنوا بالملائكة', en: 'They did not believe in angels' } },
      { id: 'd', text: { fr: 'Ils ne parlaient pas arabe', ar: 'لم يتكلموا العربية', en: 'They did not speak Arabic' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les Quraysh reconnaissaient Allah comme Créateur (Rububiyyah) mais adoraient des idoles comme intermédiaires (shirk dans l\'Uluhiyyah). Le Tawhid ar-Rububiyyah seul ne suffit pas — l\'Uluhiyyah est essentielle.',
      ar: 'قريش أقروا بالله خالقاً (الربوبية) لكنهم عبدوا الأصنام وسطاء (شرك في الألوهية). توحيد الربوبية وحده لا يكفي — الألوهية ضرورية.',
      en: 'Quraysh acknowledged Allah as Creator (Rububiyyah) but worshipped idols as intermediaries (shirk in Uluhiyyah). Tawhid ar-Rububiyyah alone is insufficient — Uluhiyyah is essential.',
    },
    reference: {
      courseSlug: 'aqeedah-islamique',
      lessonId: '014-arkan-tawhid',
    },
    points: 20,
    tags: ['aqeedah', 'tawhid', 'shirk'],
  },
  {
    id: 'aqeedah-q015',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quel est le sceau des prophètes (khatam an-nabiyyin) ?',
      ar: 'من هو خاتم النبيين؟',
      en: 'Who is the seal of the prophets (khatam an-nabiyyin)?',
    },
    options: [
      { id: 'a', text: { fr: 'Ibrahim (عليه السلام)', ar: 'إبراهيم (عليه السلام)', en: 'Ibrahim (عليه السلام)' } },
      { id: 'b', text: { fr: 'Musa (عليه السلام)', ar: 'موسى (عليه السلام)', en: 'Musa (عليه السلام)' } },
      { id: 'c', text: { fr: 'Isa (عليه السلام)', ar: 'عيسى (عليه السلام)', en: 'Isa (عليه السلام)' } },
      { id: 'd', text: { fr: 'Muhammad ﷺ', ar: 'محمد ﷺ', en: 'Muhammad ﷺ' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Muhammad ﷺ est le dernier prophète. Allah dit : « Muhammad n\'est le père d\'aucun de vos hommes, mais le Messager d\'Allah et le sceau des prophètes » [33:40]. Aucun prophète après lui.',
      ar: 'محمد ﷺ هو آخر الأنبياء. قال تعالى: {مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ وَلَٰكِن رَّسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ} [الأحزاب:40]. لا نبي بعده.',
      en: 'Muhammad ﷺ is the last prophet. Allah says: "Muhammad is not the father of any of your men, but the Messenger of Allah and the seal of the prophets" [33:40]. No prophet after him.',
    },
    reference: {
      courseSlug: 'aqeedah-islamique',
      lessonId: '007-prophetes',
    },
    points: 20,
    tags: ['aqeedah', 'prophetes', 'khatam'],
  },
];

// ============================================
// Export du Quiz
// ============================================

export const quizAqeedahFondements: Quiz = {
  id: 'quiz-aqeedah-fondements',
  type: 'module',
  courseSlug: 'aqeedah-islamique',
  title: {
    fr: 'Quiz : Fondements de la Foi',
    ar: 'اختبار: أصول الإيمان',
    en: 'Quiz: Foundations of Faith',
  },
  description: {
    fr: 'Testez vos connaissances sur les piliers de la foi, le Tawhid et les bases de la croyance islamique.',
    ar: 'اختبر معلوماتك عن أركان الإيمان والتوحيد وأساسيات العقيدة الإسلامية.',
    en: 'Test your knowledge of the pillars of faith, Tawhid, and the fundamentals of Islamic creed.',
  },
  instructions: {
    fr: 'Répondez à chaque question en choisissant la meilleure réponse. Prenez le temps de lire les explications pour approfondir votre compréhension.',
    ar: 'أجب على كل سؤال باختيار أفضل إجابة. خذ وقتك في قراءة الشروحات لتعميق فهمك.',
    en: 'Answer each question by choosing the best answer. Take time to read the explanations to deepen your understanding.',
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
  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
};

export default quizAqeedahFondements;
