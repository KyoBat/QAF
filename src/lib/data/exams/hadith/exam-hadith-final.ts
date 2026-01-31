/**
 * Examen Final - Sciences du Hadith (Mustalah al-Hadith)
 * 
 * 32 questions QCM couvrant :
 * - Définitions et terminologie
 * - Classification des hadiths
 * - La chaîne de transmission (Isnad)
 * - Les savants du Hadith
 * - Les recueils majeurs
 * - Critique et authentification
 */

import { ExamConfig, ExamQuestion } from '../types';

// ============================================
// Questions - Définitions de base
// ============================================

const definitionsQuestions: ExamQuestion[] = [
  {
    id: 'hadith-def-001',
    question: {
      fr: 'Qu\'est-ce qu\'un Hadith ?',
      ar: 'ما هو الحديث؟',
      en: 'What is a Hadith?',
    },
    options: [
      { id: 'a', text: { fr: 'Un verset du Coran', ar: 'آية من القرآن', en: 'A verse of Quran' } },
      { id: 'b', text: { fr: 'Ce qui est attribué au Prophète ﷺ en parole, acte, approbation ou description', ar: 'ما أُضيف إلى النبي ﷺ من قول أو فعل أو تقرير أو صفة', en: 'What is attributed to the Prophet ﷺ in speech, action, approval, or description' } },
      { id: 'c', text: { fr: 'Les paroles des Compagnons uniquement', ar: 'أقوال الصحابة فقط', en: 'Companions\' sayings only' } },
      { id: 'd', text: { fr: 'Les commentaires du Coran', ar: 'تفاسير القرآن', en: 'Quran commentaries' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Hadith englobe les paroles, actes, approbations tacites (Taqrir) et descriptions physiques/morales du Prophète ﷺ.',
      ar: 'الحديث يشمل أقوال النبي ﷺ وأفعاله وتقريراته وصفاته الخَلقية والخُلقية.',
      en: 'Hadith encompasses the Prophet\'s ﷺ sayings, actions, tacit approvals (Taqrir), and physical/moral descriptions.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'definitions',
  },
  {
    id: 'hadith-def-002',
    question: {
      fr: 'Quelle est la différence entre Hadith et Sunna ?',
      ar: 'ما الفرق بين الحديث والسنة؟',
      en: 'What is the difference between Hadith and Sunnah?',
    },
    options: [
      { id: 'a', text: { fr: 'Aucune différence', ar: 'لا فرق', en: 'No difference' } },
      { id: 'b', text: { fr: 'Le Hadith est la narration ; la Sunna est la pratique/méthode du Prophète ﷺ', ar: 'الحديث هو الرواية؛ السنة هي الطريقة والمنهج', en: 'Hadith is the narration; Sunnah is the practice/method of the Prophet ﷺ' } },
      { id: 'c', text: { fr: 'La Sunna est plus importante', ar: 'السنة أهم', en: 'Sunnah is more important' } },
      { id: 'd', text: { fr: 'Le Hadith est pour les savants uniquement', ar: 'الحديث للعلماء فقط', en: 'Hadith is for scholars only' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Hadith est le texte rapporté. La Sunna est la voie/méthode du Prophète ﷺ dans la pratique. Les deux termes sont souvent utilisés de manière interchangeable.',
      ar: 'الحديث هو النص المروي. والسنة هي طريقة النبي ﷺ في العمل. وكثيرًا ما يُستخدم المصطلحان بالتبادل.',
      en: 'Hadith is the reported text. Sunnah is the Prophet\'s ﷺ way/method in practice. Both terms are often used interchangeably.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'definitions',
  },
  {
    id: 'hadith-def-003',
    question: {
      fr: 'Qu\'est-ce qu\'un Hadith Qudsi ?',
      ar: 'ما هو الحديث القدسي؟',
      en: 'What is a Hadith Qudsi?',
    },
    options: [
      { id: 'a', text: { fr: 'Un verset du Coran', ar: 'آية من القرآن', en: 'A verse of Quran' } },
      { id: 'b', text: { fr: 'Un hadith où le Prophète ﷺ rapporte les paroles d\'Allah avec ses propres mots', ar: 'حديث يروي فيه النبي ﷺ كلام الله بألفاظه', en: 'A hadith where the Prophet ﷺ reports Allah\'s words in his own words' } },
      { id: 'c', text: { fr: 'Un hadith inventé', ar: 'حديث موضوع', en: 'A fabricated hadith' } },
      { id: 'd', text: { fr: 'Un hadith faible', ar: 'حديث ضعيف', en: 'A weak hadith' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Hadith Qudsi (Divin) : le sens vient d\'Allah, mais les mots sont ceux du Prophète ﷺ. Il diffère du Coran qui est miraculeux dans sa formulation.',
      ar: 'الحديث القدسي: المعنى من الله، لكن اللفظ من النبي ﷺ. ويختلف عن القرآن الذي هو معجز بلفظه.',
      en: 'Hadith Qudsi (Divine): meaning is from Allah, but words are from the Prophet ﷺ. It differs from Quran which is miraculous in its wording.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'definitions',
  },
  {
    id: 'hadith-def-004',
    question: {
      fr: 'Quelles sont les deux parties d\'un hadith ?',
      ar: 'ما هما جزءا الحديث؟',
      en: 'What are the two parts of a hadith?',
    },
    options: [
      { id: 'a', text: { fr: 'Début et fin', ar: 'البداية والنهاية', en: 'Beginning and end' } },
      { id: 'b', text: { fr: 'Isnad (chaîne) et Matn (texte)', ar: 'الإسناد والمتن', en: 'Isnad (chain) and Matn (text)' } },
      { id: 'c', text: { fr: 'Question et réponse', ar: 'السؤال والجواب', en: 'Question and answer' } },
      { id: 'd', text: { fr: 'Arabe et traduction', ar: 'العربي والترجمة', en: 'Arabic and translation' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'L\'Isnad (ou Sanad) est la chaîne de transmetteurs. Le Matn est le contenu/texte du hadith. Les deux sont examinés pour l\'authentification.',
      ar: 'الإسناد (أو السند) هو سلسلة الرواة. والمتن هو نص الحديث. وكلاهما يُدرس للتصحيح.',
      en: 'Isnad (or Sanad) is the chain of narrators. Matn is the content/text of the hadith. Both are examined for authentication.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'definitions',
  },
];

// ============================================
// Questions - Classification des Hadiths
// ============================================

const classificationQuestions: ExamQuestion[] = [
  {
    id: 'hadith-class-001',
    question: {
      fr: 'Quels sont les 3 principaux niveaux d\'authenticité d\'un hadith ?',
      ar: 'ما المراتب الثلاث الرئيسية لصحة الحديث؟',
      en: 'What are the 3 main levels of hadith authenticity?',
    },
    options: [
      { id: 'a', text: { fr: 'Bon, moyen, mauvais', ar: 'جيد، متوسط، سيء', en: 'Good, medium, bad' } },
      { id: 'b', text: { fr: 'Sahih (authentique), Hasan (bon), Da\'if (faible)', ar: 'صحيح، حسن، ضعيف', en: 'Sahih (authentic), Hasan (good), Da\'if (weak)' } },
      { id: 'c', text: { fr: 'Ancien, nouveau, récent', ar: 'قديم، جديد، حديث', en: 'Old, new, recent' } },
      { id: 'd', text: { fr: 'Court, moyen, long', ar: 'قصير، متوسط، طويل', en: 'Short, medium, long' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Sahih : authentique (conditions remplies). Hasan : bon (narrateur à mémoire légèrement faible). Da\'if : faible (condition(s) manquante(s)). Il y a aussi Mawdu\' (forgé).',
      ar: 'صحيح: تتوفر فيه الشروط. حسن: راويه خف ضبطه قليلاً. ضعيف: اختل فيه شرط. وهناك الموضوع (المكذوب).',
      en: 'Sahih: authentic (conditions met). Hasan: good (narrator with slightly weak memory). Da\'if: weak (condition(s) missing). There is also Mawdu\' (fabricated).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'classification',
  },
  {
    id: 'hadith-class-002',
    question: {
      fr: 'Quelles sont les 5 conditions d\'un hadith Sahih ?',
      ar: 'ما شروط الحديث الصحيح الخمسة؟',
      en: 'What are the 5 conditions of a Sahih hadith?',
    },
    options: [
      { id: 'a', text: { fr: 'Chaîne connectée, narrateurs justes, précis, sans anomalie (Shudhudh), sans défaut caché (\'Illa)', ar: 'اتصال السند، عدالة الرواة، ضبطهم، عدم الشذوذ، عدم العلة', en: 'Connected chain, just narrators, precise, no anomaly, no hidden defect' } },
      { id: 'b', text: { fr: 'Long, arabe, ancien, connu, répété', ar: 'طويل، عربي، قديم، معروف، مكرر', en: 'Long, Arabic, old, known, repeated' } },
      { id: 'c', text: { fr: 'Rapporté par 5 personnes', ar: 'رواه 5 أشخاص', en: 'Reported by 5 people' } },
      { id: 'd', text: { fr: 'Dans Bukhari uniquement', ar: 'في البخاري فقط', en: 'In Bukhari only' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: '1) Ittisal as-Sanad (chaîne connectée), 2) \'Adalah (justice des narrateurs), 3) Dabt (précision), 4) \'Adam ash-Shudhudh (pas d\'anomalie), 5) \'Adam al-\'Illa (pas de défaut caché).',
      ar: '1) اتصال السند، 2) عدالة الرواة، 3) الضبط، 4) عدم الشذوذ، 5) عدم العلة.',
      en: '1) Connected chain, 2) Justice of narrators, 3) Precision, 4) No anomaly, 5) No hidden defect.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'classification',
  },
  {
    id: 'hadith-class-003',
    question: {
      fr: 'Qu\'est-ce qu\'un hadith Mutawatir ?',
      ar: 'ما هو الحديث المتواتر؟',
      en: 'What is a Mutawatir hadith?',
    },
    options: [
      { id: 'a', text: { fr: 'Un hadith rapporté par une seule personne', ar: 'حديث رواه شخص واحد', en: 'A hadith reported by one person' } },
      { id: 'b', text: { fr: 'Un hadith transmis par tant de narrateurs à chaque niveau que le mensonge est impossible', ar: 'حديث رواه عدد كبير في كل طبقة يستحيل تواطؤهم على الكذب', en: 'A hadith transmitted by so many narrators at each level that lying is impossible' } },
      { id: 'c', text: { fr: 'Un hadith faible', ar: 'حديث ضعيف', en: 'A weak hadith' } },
      { id: 'd', text: { fr: 'Un hadith de Médine uniquement', ar: 'حديث من المدينة فقط', en: 'A hadith from Medina only' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Mutawatir offre une certitude absolue (\'Ilm Yaqini) car transmis par un si grand nombre de personnes qu\'un complot de mensonge est inconcevable. Ex: "Celui qui ment sur moi..."',
      ar: 'المتواتر يفيد العلم اليقيني لأنه رواه جمع كبير يستحيل تواطؤهم على الكذب. مثل: "من كذب عليّ..."',
      en: 'Mutawatir provides absolute certainty because transmitted by so many people that a conspiracy to lie is inconceivable. Ex: "Whoever lies about me..."',
    },
    points: 2,
    difficulty: 'medium',
    category: 'classification',
  },
  {
    id: 'hadith-class-004',
    question: {
      fr: 'Qu\'est-ce qu\'un hadith Ahad ?',
      ar: 'ما هو حديث الآحاد؟',
      en: 'What is an Ahad hadith?',
    },
    options: [
      { id: 'a', text: { fr: 'Un hadith sur le Tawhid', ar: 'حديث عن التوحيد', en: 'A hadith about Tawhid' } },
      { id: 'b', text: { fr: 'Un hadith qui n\'atteint pas le niveau du Mutawatir', ar: 'حديث لم يبلغ درجة المتواتر', en: 'A hadith that does not reach the level of Mutawatir' } },
      { id: 'c', text: { fr: 'Un hadith inventé', ar: 'حديث مختلق', en: 'An invented hadith' } },
      { id: 'd', text: { fr: 'Un hadith du Coran', ar: 'حديث من القرآن', en: 'A hadith from Quran' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les hadiths Ahad (individuels) n\'ont pas le nombre de transmetteurs du Mutawatir. Ils se divisent en Mashhur (célèbre), \'Aziz (rare), Gharib (étrange).',
      ar: 'أحاديث الآحاد لا تبلغ عدد رواة المتواتر. وتنقسم إلى: مشهور، عزيز، غريب.',
      en: 'Ahad (individual) hadiths don\'t have Mutawatir\'s number of transmitters. They divide into Mashhur (famous), \'Aziz (rare), Gharib (strange).',
    },
    points: 2,
    difficulty: 'medium',
    category: 'classification',
  },
  {
    id: 'hadith-class-005',
    question: {
      fr: 'Qu\'est-ce qu\'un hadith Mawdu\' (forgé) ?',
      ar: 'ما هو الحديث الموضوع؟',
      en: 'What is a Mawdu\' (fabricated) hadith?',
    },
    options: [
      { id: 'a', text: { fr: 'Un hadith très authentique', ar: 'حديث صحيح جدًا', en: 'A very authentic hadith' } },
      { id: 'b', text: { fr: 'Un hadith inventé et faussement attribué au Prophète ﷺ', ar: 'حديث مكذوب مُختلق على النبي ﷺ', en: 'A hadith invented and falsely attributed to the Prophet ﷺ' } },
      { id: 'c', text: { fr: 'Un hadith court', ar: 'حديث قصير', en: 'A short hadith' } },
      { id: 'd', text: { fr: 'Un hadith répété', ar: 'حديث مكرر', en: 'A repeated hadith' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Mawdu\' est un mensonge sur le Prophète ﷺ. Il est strictement interdit de le rapporter sauf pour le dénoncer. "Celui qui ment sur moi..."',
      ar: 'الموضوع كذب على النبي ﷺ. ويحرم روايته إلا للتحذير منه. "من كذب عليّ متعمدًا..."',
      en: 'Mawdu\' is a lie about the Prophet ﷺ. It\'s strictly forbidden to report it except to denounce it. "Whoever lies about me..."',
    },
    points: 2,
    difficulty: 'easy',
    category: 'classification',
  },
];

// ============================================
// Questions - Isnad et Transmetteurs
// ============================================

const isnadQuestions: ExamQuestion[] = [
  {
    id: 'hadith-isnad-001',
    question: {
      fr: 'Qu\'est-ce que la \'Adalah (justice) d\'un narrateur ?',
      ar: 'ما هي عدالة الراوي؟',
      en: 'What is the \'Adalah (justice) of a narrator?',
    },
    options: [
      { id: 'a', text: { fr: 'Sa richesse', ar: 'غناه', en: 'His wealth' } },
      { id: 'b', text: { fr: 'Être musulman, majeur, sain d\'esprit, pieux, sans immoralité (Fisq)', ar: 'كونه مسلمًا بالغًا عاقلاً تقيًا غير فاسق', en: 'Being Muslim, adult, sane, pious, without immorality (Fisq)' } },
      { id: 'c', text: { fr: 'Être arabe', ar: 'أن يكون عربيًا', en: 'Being Arab' } },
      { id: 'd', text: { fr: 'Avoir beaucoup de hadiths', ar: 'كثرة الأحاديث', en: 'Having many hadiths' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La \'Adalah requiert l\'Islam, la maturité, la raison, la piété, l\'absence de Fisq (immoralité) et de Khawrum al-Muru\'a (atteinte à l\'honneur).',
      ar: 'العدالة تتطلب الإسلام، البلوغ، العقل، التقوى، عدم الفسق، وعدم خوارم المروءة.',
      en: '\'Adalah requires Islam, maturity, sanity, piety, absence of Fisq (immorality) and Khawrum al-Muru\'a (breach of dignity).',
    },
    points: 2,
    difficulty: 'medium',
    category: 'isnad',
  },
  {
    id: 'hadith-isnad-002',
    question: {
      fr: 'Qu\'est-ce que le Dabt (précision) d\'un narrateur ?',
      ar: 'ما هو ضبط الراوي؟',
      en: 'What is the Dabt (precision) of a narrator?',
    },
    options: [
      { id: 'a', text: { fr: 'Sa capacité à mémoriser et transmettre avec exactitude', ar: 'قدرته على الحفظ والنقل بدقة', en: 'His ability to memorize and transmit accurately' } },
      { id: 'b', text: { fr: 'Sa belle écriture', ar: 'جمال خطه', en: 'His beautiful handwriting' } },
      { id: 'c', text: { fr: 'Son âge', ar: 'عمره', en: 'His age' } },
      { id: 'd', text: { fr: 'Le nombre de ses étudiants', ar: 'عدد تلاميذه', en: 'Number of his students' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Dabt est de deux types : Dabt as-Sadr (mémorisation) et Dabt al-Kitab (écriture précise). Le narrateur doit transmettre exactement ce qu\'il a reçu.',
      ar: 'الضبط نوعان: ضبط الصدر (الحفظ) وضبط الكتاب (الكتابة). والراوي يجب أن ينقل بدقة ما تلقاه.',
      en: 'Dabt is two types: Dabt as-Sadr (memorization) and Dabt al-Kitab (writing). The narrator must transmit exactly what he received.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'isnad',
  },
  {
    id: 'hadith-isnad-003',
    question: {
      fr: 'Qu\'est-ce qu\'un hadith Mursal ?',
      ar: 'ما هو الحديث المرسل؟',
      en: 'What is a Mursal hadith?',
    },
    options: [
      { id: 'a', text: { fr: 'Un hadith très long', ar: 'حديث طويل جدًا', en: 'A very long hadith' } },
      { id: 'b', text: { fr: 'Un hadith où le Tabi\'i rapporte du Prophète ﷺ sans mentionner le Compagnon', ar: 'حديث رواه التابعي عن النبي ﷺ دون ذكر الصحابي', en: 'A hadith where a Tabi\'i reports from the Prophet ﷺ without mentioning the Companion' } },
      { id: 'c', text: { fr: 'Un hadith envoyé par courrier', ar: 'حديث أُرسل بالبريد', en: 'A hadith sent by mail' } },
      { id: 'd', text: { fr: 'Un hadith répété', ar: 'حديث مكرر', en: 'A repeated hadith' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Mursal est quand un Tabi\'i (successeur des Compagnons) dit "Le Prophète ﷺ a dit..." sans nommer le Compagnon. C\'est une forme de chaîne interrompue.',
      ar: 'المرسل هو أن يقول التابعي: "قال النبي ﷺ..." دون ذكر الصحابي. وهو نوع من انقطاع السند.',
      en: 'Mursal is when a Tabi\'i (Companion\'s successor) says "The Prophet ﷺ said..." without naming the Companion. It\'s a form of broken chain.',
    },
    points: 2,
    difficulty: 'hard',
    category: 'isnad',
  },
  {
    id: 'hadith-isnad-004',
    question: {
      fr: 'Qui sont les Tabi\'un ?',
      ar: 'من هم التابعون؟',
      en: 'Who are the Tabi\'un?',
    },
    options: [
      { id: 'a', text: { fr: 'Les Compagnons du Prophète ﷺ', ar: 'صحابة النبي ﷺ', en: 'Companions of the Prophet ﷺ' } },
      { id: 'b', text: { fr: 'La génération qui a rencontré les Compagnons en étant musulmans', ar: 'الجيل الذي لقي الصحابة وهم مسلمون', en: 'The generation that met the Companions while being Muslims' } },
      { id: 'c', text: { fr: 'Les érudits modernes', ar: 'العلماء المعاصرون', en: 'Modern scholars' } },
      { id: 'd', text: { fr: 'Les ennemis de l\'Islam', ar: 'أعداء الإسلام', en: 'Enemies of Islam' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les Tabi\'un (Successeurs) sont ceux qui ont rencontré au moins un Compagnon et sont morts musulmans. Exemples : Sa\'id ibn al-Musayyab, Hasan al-Basri.',
      ar: 'التابعون هم من لقوا صحابيًا واحدًا على الأقل وماتوا مسلمين. مثل: سعيد بن المسيب، الحسن البصري.',
      en: 'Tabi\'un (Successors) are those who met at least one Companion and died as Muslims. Examples: Sa\'id ibn al-Musayyab, Hasan al-Basri.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'isnad',
  },
];

// ============================================
// Questions - Recueils de Hadith
// ============================================

const recueilsQuestions: ExamQuestion[] = [
  {
    id: 'hadith-recueil-001',
    question: {
      fr: 'Quels sont les deux recueils les plus authentiques (Sahihayn) ?',
      ar: 'ما هما الصحيحان؟',
      en: 'What are the two most authentic collections (Sahihayn)?',
    },
    options: [
      { id: 'a', text: { fr: 'Muwatta et Musnad Ahmad', ar: 'الموطأ ومسند أحمد', en: 'Muwatta and Musnad Ahmad' } },
      { id: 'b', text: { fr: 'Sahih al-Bukhari et Sahih Muslim', ar: 'صحيح البخاري وصحيح مسلم', en: 'Sahih al-Bukhari and Sahih Muslim' } },
      { id: 'c', text: { fr: 'Sunan Abu Dawud et Sunan Tirmidhi', ar: 'سنن أبي داود وسنن الترمذي', en: 'Sunan Abu Dawud and Sunan Tirmidhi' } },
      { id: 'd', text: { fr: 'Sunan an-Nasa\'i et Sunan Ibn Majah', ar: 'سنن النسائي وسنن ابن ماجه', en: 'Sunan an-Nasa\'i and Sunan Ibn Majah' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Al-Bukhari (m. 256 H) et Muslim (m. 261 H) ont compilé les recueils les plus authentiques. La Ummah a accepté leurs conditions strictes.',
      ar: 'جمع البخاري (ت 256 هـ) ومسلم (ت 261 هـ) أصح الكتب. وقد تلقتهما الأمة بالقبول.',
      en: 'Al-Bukhari (d. 256 H) and Muslim (d. 261 H) compiled the most authentic collections. The Ummah accepted their strict conditions.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'recueils',
  },
  {
    id: 'hadith-recueil-002',
    question: {
      fr: 'Que sont les "Kutub as-Sitta" (Six Livres) ?',
      ar: 'ما هي الكتب الستة؟',
      en: 'What are the "Kutub as-Sitta" (Six Books)?',
    },
    options: [
      { id: 'a', text: { fr: 'Six volumes du Coran', ar: 'ستة مجلدات من القرآن', en: 'Six volumes of Quran' } },
      { id: 'b', text: { fr: 'Bukhari, Muslim, Abu Dawud, Tirmidhi, Nasa\'i, Ibn Majah', ar: 'البخاري، مسلم، أبو داود، الترمذي، النسائي، ابن ماجه', en: 'Bukhari, Muslim, Abu Dawud, Tirmidhi, Nasa\'i, Ibn Majah' } },
      { id: 'c', text: { fr: 'Six histoires de prophètes', ar: 'ست قصص أنبياء', en: 'Six prophet stories' } },
      { id: 'd', text: { fr: 'Six livres de Fiqh', ar: 'ستة كتب فقه', en: 'Six books of Fiqh' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les Six Livres sont les références principales du Hadith : Sahih Bukhari, Sahih Muslim, et les quatre Sunan (Abu Dawud, Tirmidhi, Nasa\'i, Ibn Majah).',
      ar: 'الكتب الستة هي المراجع الأساسية للحديث: صحيح البخاري، صحيح مسلم، والسنن الأربعة.',
      en: 'The Six Books are the main Hadith references: Sahih Bukhari, Sahih Muslim, and the four Sunan.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'recueils',
  },
  {
    id: 'hadith-recueil-003',
    question: {
      fr: 'Combien de hadiths contient Sahih al-Bukhari (avec répétitions) ?',
      ar: 'كم حديثًا في صحيح البخاري (مع التكرار)؟',
      en: 'How many hadiths does Sahih al-Bukhari contain (with repetitions)?',
    },
    options: [
      { id: 'a', text: { fr: 'Environ 1000', ar: 'حوالي 1000', en: 'About 1000' } },
      { id: 'b', text: { fr: 'Environ 7275', ar: 'حوالي 7275', en: 'About 7275' } },
      { id: 'c', text: { fr: 'Environ 50000', ar: 'حوالي 50000', en: 'About 50000' } },
      { id: 'd', text: { fr: 'Environ 100', ar: 'حوالي 100', en: 'About 100' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Sahih al-Bukhari contient environ 7275 hadiths avec répétitions (environ 2602 sans répétitions). Al-Bukhari les a sélectionnés parmi 600 000.',
      ar: 'يحتوي صحيح البخاري على نحو 7275 حديثًا بالتكرار (نحو 2602 بدون تكرار). اختارها البخاري من 600 ألف.',
      en: 'Sahih al-Bukhari contains about 7275 hadiths with repetitions (about 2602 without). Al-Bukhari selected them from 600,000.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'recueils',
  },
  {
    id: 'hadith-recueil-004',
    question: {
      fr: 'Quel est le plus ancien recueil de hadith connu ?',
      ar: 'ما أقدم كتاب حديث معروف؟',
      en: 'What is the oldest known hadith collection?',
    },
    options: [
      { id: 'a', text: { fr: 'Sahih Bukhari', ar: 'صحيح البخاري', en: 'Sahih Bukhari' } },
      { id: 'b', text: { fr: 'Al-Muwatta de l\'Imam Malik', ar: 'الموطأ للإمام مالك', en: 'Al-Muwatta of Imam Malik' } },
      { id: 'c', text: { fr: 'Musnad Ahmad', ar: 'مسند أحمد', en: 'Musnad Ahmad' } },
      { id: 'd', text: { fr: 'Sahih Muslim', ar: 'صحيح مسلم', en: 'Sahih Muslim' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Al-Muwatta de l\'Imam Malik (m. 179 H) est considéré comme le plus ancien recueil de hadith organisé qui nous soit parvenu.',
      ar: 'يُعد الموطأ للإمام مالك (ت 179 هـ) أقدم كتاب حديث مرتب وصل إلينا.',
      en: 'Al-Muwatta of Imam Malik (d. 179 H) is considered the oldest organized hadith collection that reached us.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'recueils',
  },
];

// ============================================
// Questions - Savants du Hadith
// ============================================

const savantsQuestions: ExamQuestion[] = [
  {
    id: 'hadith-savant-001',
    question: {
      fr: 'Qui est l\'Imam al-Bukhari ?',
      ar: 'من هو الإمام البخاري؟',
      en: 'Who is Imam al-Bukhari?',
    },
    options: [
      { id: 'a', text: { fr: 'Un Compagnon du Prophète ﷺ', ar: 'صحابي للنبي ﷺ', en: 'A Companion of the Prophet ﷺ' } },
      { id: 'b', text: { fr: 'Muhammad ibn Isma\'il (194-256 H), auteur du Sahih le plus authentique', ar: 'محمد بن إسماعيل (194-256 هـ)، مؤلف أصح كتاب بعد القرآن', en: 'Muhammad ibn Isma\'il (194-256 H), author of the most authentic Sahih' } },
      { id: 'c', text: { fr: 'Un savant contemporain', ar: 'عالم معاصر', en: 'A contemporary scholar' } },
      { id: 'd', text: { fr: 'Un fondateur d\'école juridique', ar: 'مؤسس مذهب فقهي', en: 'A founder of a jurisprudential school' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'L\'Imam al-Bukhari (Muhammad ibn Isma\'il, 194-256 H) est né à Bukhara. Son Sahih est considéré comme le livre le plus authentique après le Coran.',
      ar: 'الإمام البخاري (محمد بن إسماعيل، 194-256 هـ) وُلد في بخارى. وصحيحه أصح كتاب بعد القرآن.',
      en: 'Imam al-Bukhari (Muhammad ibn Isma\'il, 194-256 H) was born in Bukhara. His Sahih is considered the most authentic book after Quran.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'savants',
  },
  {
    id: 'hadith-savant-002',
    question: {
      fr: 'Qui est considéré comme "Amir al-Mu\'minin fil-Hadith" (Prince des Croyants en Hadith) ?',
      ar: 'من يُلقب بأمير المؤمنين في الحديث؟',
      en: 'Who is considered "Amir al-Mu\'minin fil-Hadith" (Prince of Believers in Hadith)?',
    },
    options: [
      { id: 'a', text: { fr: 'Imam Malik', ar: 'الإمام مالك', en: 'Imam Malik' } },
      { id: 'b', text: { fr: 'Imam al-Bukhari', ar: 'الإمام البخاري', en: 'Imam al-Bukhari' } },
      { id: 'c', text: { fr: 'Imam Ahmad', ar: 'الإمام أحمد', en: 'Imam Ahmad' } },
      { id: 'd', text: { fr: 'Imam Shafi\'i', ar: 'الإمام الشافعي', en: 'Imam Shafi\'i' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Al-Bukhari a reçu ce titre honorifique pour sa maîtrise exceptionnelle des sciences du hadith, sa mémoire prodigieuse et ses critères rigoureux.',
      ar: 'نال البخاري هذا اللقب لإتقانه علوم الحديث وذاكرته العجيبة ومعاييره الصارمة.',
      en: 'Al-Bukhari received this honorific title for his exceptional mastery of hadith sciences, prodigious memory, and rigorous criteria.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'savants',
  },
  {
    id: 'hadith-savant-003',
    question: {
      fr: 'Qu\'est-ce qu\'un "Hafidh" dans la science du hadith ?',
      ar: 'ما معنى "الحافظ" في علم الحديث؟',
      en: 'What is a "Hafidh" in hadith science?',
    },
    options: [
      { id: 'a', text: { fr: 'Quelqu\'un qui a mémorisé le Coran', ar: 'من حفظ القرآن', en: 'Someone who memorized the Quran' } },
      { id: 'b', text: { fr: 'Un savant qui a mémorisé au moins 100 000 hadiths avec leurs chaînes', ar: 'عالم حفظ 100 ألف حديث بأسانيدها على الأقل', en: 'A scholar who memorized at least 100,000 hadiths with their chains' } },
      { id: 'c', text: { fr: 'Un gardien de mosquée', ar: 'حارس المسجد', en: 'A mosque guardian' } },
      { id: 'd', text: { fr: 'Un étudiant en hadith', ar: 'طالب حديث', en: 'A hadith student' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les rangs sont : Talib (étudiant), Muhaddith (traditionniste), Hafidh (100 000+), Hujja (300 000+), Hakim (toute la Sunna avec défauts).',
      ar: 'المراتب: طالب، محدث، حافظ (100 ألف+)، حجة (300 ألف+)، حاكم (كل السنة بعللها).',
      en: 'Ranks are: Talib (student), Muhaddith (traditionist), Hafidh (100,000+), Hujja (300,000+), Hakim (entire Sunnah with defects).',
    },
    points: 3,
    difficulty: 'hard',
    category: 'savants',
  },
];

// ============================================
// Questions - Critique et Méthode
// ============================================

const critiqueQuestions: ExamQuestion[] = [
  {
    id: 'hadith-critique-001',
    question: {
      fr: 'Qu\'est-ce que le "Jarh wa Ta\'dil" ?',
      ar: 'ما هو الجرح والتعديل؟',
      en: 'What is "Jarh wa Ta\'dil"?',
    },
    options: [
      { id: 'a', text: { fr: 'La médecine prophétique', ar: 'الطب النبوي', en: 'Prophetic medicine' } },
      { id: 'b', text: { fr: 'La science de critique et d\'approbation des narrateurs', ar: 'علم نقد الرواة وتوثيقهم', en: 'The science of criticizing and approving narrators' } },
      { id: 'c', text: { fr: 'L\'explication du Coran', ar: 'تفسير القرآن', en: 'Quran explanation' } },
      { id: 'd', text: { fr: 'Les règles de grammaire', ar: 'قواعد النحو', en: 'Grammar rules' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Jarh (critique) : identifier les faiblesses d\'un narrateur. Ta\'dil (approbation) : confirmer sa fiabilité. C\'est essentiel pour authentifier les hadiths.',
      ar: 'الجرح: بيان ضعف الراوي. التعديل: إثبات ثقته. وهو أساسي لتصحيح الأحاديث.',
      en: 'Jarh (criticism): identifying a narrator\'s weaknesses. Ta\'dil (approval): confirming his reliability. Essential for authenticating hadiths.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'critique',
  },
  {
    id: 'hadith-critique-002',
    question: {
      fr: 'Pourquoi le système d\'Isnad est-il unique à l\'Islam ?',
      ar: 'لماذا نظام الإسناد فريد في الإسلام؟',
      en: 'Why is the Isnad system unique to Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Il n\'est pas unique', ar: 'ليس فريدًا', en: 'It is not unique' } },
      { id: 'b', text: { fr: 'Aucune autre civilisation n\'a développé un tel système de vérification des sources', ar: 'لم تطور أي حضارة أخرى نظامًا للتحقق من المصادر مثله', en: 'No other civilization developed such a source verification system' } },
      { id: 'c', text: { fr: 'Il a été copié des Grecs', ar: 'نُقل من اليونانيين', en: 'It was copied from the Greeks' } },
      { id: 'd', text: { fr: 'Il n\'est pas important', ar: 'ليس مهمًا', en: 'It is not important' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Ibn al-Mubarak a dit : "L\'Isnad fait partie de la religion ; sans l\'Isnad, quiconque dirait ce qu\'il veut."',
      ar: 'قال ابن المبارك: "الإسناد من الدين، ولولا الإسناد لقال من شاء ما شاء."',
      en: 'Ibn al-Mubarak said: "Isnad is part of the religion; without Isnad, anyone would say whatever they want."',
    },
    points: 2,
    difficulty: 'medium',
    category: 'critique',
  },
  {
    id: 'hadith-critique-003',
    question: {
      fr: 'Qu\'est-ce qu\'une "\'Illa" (défaut caché) dans un hadith ?',
      ar: 'ما هي العلة في الحديث؟',
      en: 'What is an "\'Illa" (hidden defect) in a hadith?',
    },
    options: [
      { id: 'a', text: { fr: 'Une faute de grammaire', ar: 'خطأ نحوي', en: 'A grammar mistake' } },
      { id: 'b', text: { fr: 'Un défaut subtil qui affecte l\'authenticité mais n\'apparaît qu\'aux experts', ar: 'خلل خفي يؤثر على الصحة لا يظهر إلا للمتخصصين', en: 'A subtle defect affecting authenticity that only appears to experts' } },
      { id: 'c', text: { fr: 'Un hadith court', ar: 'حديث قصير', en: 'A short hadith' } },
      { id: 'd', text: { fr: 'Un hadith ancien', ar: 'حديث قديم', en: 'An old hadith' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La \'Illa est un défaut subtil (comme une erreur de narrateur, une confusion de chaînes) que seuls les experts peuvent détecter. C\'est l\'aspect le plus difficile de la science du hadith.',
      ar: 'العلة خلل خفي (كخطأ راوٍ أو اختلاط أسانيد) لا يكتشفه إلا المتخصصون. وهو أصعب أوجه علم الحديث.',
      en: 'The \'Illa is a subtle defect (like narrator error, chain confusion) only experts can detect. It\'s the most difficult aspect of hadith science.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'critique',
  },
];

// ============================================
// Assemblage de l'examen COMPLET
// ============================================

const allQuestions: ExamQuestion[] = [
  ...definitionsQuestions,   // 4 questions
  ...classificationQuestions, // 5 questions
  ...isnadQuestions,         // 4 questions
  ...recueilsQuestions,      // 4 questions
  ...savantsQuestions,       // 3 questions
  ...critiqueQuestions,      // 3 questions
  // Total : 23 questions
];

export const examHadithFinal: ExamConfig = {
  id: 'exam-hadith-final',
  type: 'course',
  level: 'intermediate',
  title: {
    fr: 'Examen Complet - Sciences du Hadith',
    ar: 'الامتحان الشامل - علوم الحديث',
    en: 'Complete Exam - Hadith Sciences',
  },
  description: {
    fr: 'Examen de 20 questions sélectionnées aléatoirement parmi une banque de 23 questions. Couvre Mustalah al-Hadith.',
    ar: 'امتحان من 20 سؤالاً يتم اختيارها عشوائياً من بنك يضم 23 سؤالاً. يغطي مصطلح الحديث.',
    en: 'Exam with 20 questions randomly selected from a pool of 23. Covers Mustalah al-Hadith.',
  },
  instructions: {
    fr: 'Vous avez 30 minutes pour répondre à 20 questions. Chaque question a une seule bonne réponse. Un score de 70% est requis pour réussir.',
    ar: 'لديك 30 دقيقة للإجابة على 20 سؤالاً. لكل سؤال إجابة صحيحة واحدة. يُشترط 70% للنجاح.',
    en: 'You have 30 minutes to answer 20 questions. Each question has one correct answer. A score of 70% is required to pass.',
  },
  courseSlug: 'hadith',
  questionPool: allQuestions,
  questionsPerExam: 20,
  categoryConfig: [
    { category: 'definitions', count: 3 },
    { category: 'classification', count: 5 },
    { category: 'isnad', count: 4 },
    { category: 'recueils', count: 3 },
    { category: 'savants', count: 2 },
    { category: 'critique', count: 3 },
  ],
  questions: [],
  duration: 30,
  passingScore: 70,
  maxAttempts: 5,
  shuffleQuestions: true,
  shuffleOptions: true,
  showAnswersAfter: 'complete',
  hasCertificate: true,
  certificateName: {
    fr: 'Certificat de Maîtrise - Mustalah al-Hadith',
    ar: 'شهادة الإتقان - مصطلح الحديث',
    en: 'Mastery Certificate - Hadith Terminology',
  },
  createdAt: '2026-01-31',
};

export default examHadithFinal;
