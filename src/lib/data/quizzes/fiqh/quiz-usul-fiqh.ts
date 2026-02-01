/**
 * Quiz Fiqh - Usul al-Fiqh (Fondements de la Jurisprudence)
 * 
 * Ce quiz couvre les bases de la méthodologie juridique islamique :
 * sources du droit, types de preuves, règles d'interprétation
 * 
 * Niveau : Intermédiaire à Avancé
 * Questions : 15
 */

import { Quiz, Question } from '../types';

const questions: Question[] = [
  // --- Questions Faciles (5) ---
  {
    id: 'usul-q001',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Que signifie "Usul al-Fiqh" (أصول الفقه) ?',
      ar: 'ما معنى "أصول الفقه"؟',
      en: 'What does "Usul al-Fiqh" mean?',
    },
    options: [
      { id: 'a', text: { fr: 'Les branches de la jurisprudence', ar: 'فروع الفقه', en: 'The branches of jurisprudence' } },
      { id: 'b', text: { fr: 'Les fondements/principes de la jurisprudence', ar: 'أصول/قواعد الفقه', en: 'The foundations/principles of jurisprudence' } },
      { id: 'c', text: { fr: 'Les opinions des savants', ar: 'آراء العلماء', en: 'The opinions of scholars' } },
      { id: 'd', text: { fr: 'Les rituels d\'adoration', ar: 'شعائر العبادات', en: 'The rituals of worship' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Usul al-Fiqh est la science qui étudie les preuves globales (adilla kulliyya) et les règles méthodologiques pour déduire les jugements juridiques des textes.',
      ar: 'أصول الفقه هو العلم الذي يدرس الأدلة الكلية والقواعد المنهجية لاستنباط الأحكام الشرعية من النصوص.',
      en: 'Usul al-Fiqh is the science that studies global proofs (adilla kulliyya) and methodological rules for deriving legal rulings from texts.',
    },
    reference: {
      courseSlug: 'usul-al-fiqh',
      lessonId: '001-introduction',
    },
    points: 10,
    tags: ['usul', 'fiqh', 'definition'],
  },
  {
    id: 'usul-q002',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quelles sont les 4 sources principales (adilla) du droit islamique selon la majorité ?',
      ar: 'ما الأدلة الأربعة الأساسية في الفقه الإسلامي عند الجمهور؟',
      en: 'What are the 4 main sources (adilla) of Islamic law according to the majority?',
    },
    options: [
      { id: 'a', text: { fr: 'Coran, Sunna, Ijma\', Qiyas', ar: 'القرآن، السنة، الإجماع، القياس', en: 'Quran, Sunna, Ijma\', Qiyas' } },
      { id: 'b', text: { fr: 'Coran, Sunna, Aql, Maslaha', ar: 'القرآن، السنة، العقل، المصلحة', en: 'Quran, Sunna, Reason, Maslaha' } },
      { id: 'c', text: { fr: 'Coran, Hadith, Fatwa, Ijtihad', ar: 'القرآن، الحديث، الفتوى، الاجتهاد', en: 'Quran, Hadith, Fatwa, Ijtihad' } },
      { id: 'd', text: { fr: 'Coran, Tafsir, Fiqh, Kalam', ar: 'القرآن، التفسير، الفقه، الكلام', en: 'Quran, Tafsir, Fiqh, Kalam' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les 4 sources principales sont : 1) Le Coran (source première), 2) La Sunna (pratique du Prophète ﷺ), 3) L\'Ijma\' (consensus des savants), 4) Le Qiyas (analogie juridique).',
      ar: 'الأدلة الأربعة: 1) القرآن (المصدر الأول)، 2) السنة (فعل النبي ﷺ)، 3) الإجماع (اتفاق العلماء)، 4) القياس (الاستدلال بالمثل).',
      en: 'The 4 main sources: 1) Quran (primary source), 2) Sunna (Prophet\'s ﷺ practice), 3) Ijma\' (scholarly consensus), 4) Qiyas (juridical analogy).',
    },
    reference: {
      courseSlug: 'usul-al-fiqh',
      lessonId: '002-sources',
    },
    points: 10,
    tags: ['usul', 'fiqh', 'sources'],
  },
  {
    id: 'usul-q003',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quels sont les 5 statuts légaux (al-ahkam al-khamsa) en fiqh ?',
      ar: 'ما الأحكام التكليفية الخمسة في الفقه؟',
      en: 'What are the 5 legal rulings (al-ahkam al-khamsa) in fiqh?',
    },
    options: [
      { id: 'a', text: { fr: 'Wajib, Haram, Sunnah, Makruh, Mubah', ar: 'واجب، حرام، سنة، مكروه، مباح', en: 'Wajib, Haram, Sunnah, Makruh, Mubah' } },
      { id: 'b', text: { fr: 'Fard, Wajib, Mustahabb, Makruh, Haram', ar: 'فرض، واجب، مستحب، مكروه، حرام', en: 'Fard, Wajib, Mustahabb, Makruh, Haram' } },
      { id: 'c', text: { fr: 'Halal, Haram, Makruh, Mashbuh, Mubah', ar: 'حلال، حرام، مكروه، مشبوه، مباح', en: 'Halal, Haram, Makruh, Mashbuh, Mubah' } },
      { id: 'd', text: { fr: 'Wajib, Mandub, Mubah, Makruh, Haram', ar: 'واجب، مندوب، مباح، مكروه، حرام', en: 'Wajib, Mandub, Mubah, Makruh, Haram' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Les 5 statuts sont : 1) Wajib (obligatoire), 2) Mandub/Mustahabb (recommandé), 3) Mubah (permis), 4) Makruh (déconseillé), 5) Haram (interdit).',
      ar: 'الأحكام الخمسة: 1) واجب (فرض)، 2) مندوب/مستحب، 3) مباح، 4) مكروه، 5) حرام.',
      en: 'The 5 rulings: 1) Wajib (obligatory), 2) Mandub/Mustahabb (recommended), 3) Mubah (permissible), 4) Makruh (disliked), 5) Haram (forbidden).',
    },
    reference: {
      courseSlug: 'usul-al-fiqh',
      lessonId: '003-ahkam',
    },
    points: 10,
    tags: ['usul', 'fiqh', 'ahkam'],
  },
  {
    id: 'usul-q004',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'Le Qiyas (analogie) permet de déduire un jugement nouveau à partir d\'un cas similaire déjà traité dans les textes.',
      ar: 'القياس يسمح باستنباط حكم جديد من حالة مماثلة معالجة في النصوص.',
      en: 'Qiyas (analogy) allows deriving a new ruling from a similar case already treated in the texts.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'Le Qiyas est l\'extension d\'un jugement de l\'asl (cas original) au far\' (nouveau cas) à cause d\'une \'illa (cause juridique) commune. Ex : l\'interdiction du vin étendue à toute substance enivrante.',
      ar: 'القياس هو تعدية حكم الأصل إلى الفرع بسبب العلة المشتركة. مثال: تحريم الخمر يمتد لكل مسكر.',
      en: 'Qiyas extends a ruling from the asl (original case) to the far\' (new case) due to a common \'illa (legal cause). Ex: wine prohibition extended to all intoxicants.',
    },
    reference: {
      courseSlug: 'usul-al-fiqh',
      lessonId: '004-qiyas',
    },
    points: 10,
    tags: ['usul', 'fiqh', 'qiyas'],
  },
  {
    id: 'usul-q005',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Qu\'est-ce que l\'Ijma\' (الإجماع) ?',
      ar: 'ما هو الإجماع؟',
      en: 'What is Ijma\'?',
    },
    options: [
      { id: 'a', text: { fr: 'L\'opinion d\'un seul savant', ar: 'رأي عالم واحد', en: 'The opinion of one scholar' } },
      { id: 'b', text: { fr: 'L\'accord unanime des mujtahids d\'une époque', ar: 'اتفاق المجتهدين في عصر', en: 'Unanimous agreement of mujtahids of an era' } },
      { id: 'c', text: { fr: 'La majorité des musulmans', ar: 'أغلبية المسلمين', en: 'The majority of Muslims' } },
      { id: 'd', text: { fr: 'L\'opinion des 4 imams uniquement', ar: 'رأي الأئمة الأربعة فقط', en: 'The opinion of the 4 imams only' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'L\'Ijma\' est l\'accord unanime des mujtahids (savants qualifiés) de la Umma après le Prophète ﷺ sur une question juridique. C\'est une preuve contraignante car "ma Umma ne s\'accorde pas sur une erreur".',
      ar: 'الإجماع هو اتفاق المجتهدين من الأمة بعد النبي ﷺ على حكم شرعي. هو حجة لأن "أمتي لا تجتمع على ضلالة".',
      en: 'Ijma\' is the unanimous agreement of mujtahids (qualified scholars) of the Ummah after the Prophet ﷺ on a legal matter. It\'s binding proof because "my Ummah won\'t unite on error".',
    },
    reference: {
      courseSlug: 'usul-al-fiqh',
      lessonId: '005-ijma',
    },
    points: 10,
    tags: ['usul', 'fiqh', 'ijma'],
  },

  // --- Questions Moyennes (6) ---
  {
    id: 'usul-q006',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quels sont les 4 piliers (arkan) du Qiyas ?',
      ar: 'ما أركان القياس الأربعة؟',
      en: 'What are the 4 pillars (arkan) of Qiyas?',
    },
    options: [
      { id: 'a', text: { fr: 'Asl, Far\', \'Illa, Hukm', ar: 'الأصل، الفرع، العلة، الحكم', en: 'Asl, Far\', \'Illa, Hukm' } },
      { id: 'b', text: { fr: 'Nass, Ijma\', Qiyas, Ijtihad', ar: 'النص، الإجماع، القياس، الاجتهاد', en: 'Nass, Ijma\', Qiyas, Ijtihad' } },
      { id: 'c', text: { fr: 'Dalil, Hujja, Burhan, \'Aql', ar: 'الدليل، الحجة، البرهان، العقل', en: 'Dalil, Hujja, Burhan, \'Aql' } },
      { id: 'd', text: { fr: 'Kitab, Sunna, Qawl, Fi\'l', ar: 'الكتاب، السنة، القول، الفعل', en: 'Kitab, Sunna, Qawl, Fi\'l' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les 4 piliers sont : 1) Asl (cas original avec texte), 2) Far\' (nouveau cas à résoudre), 3) \'Illa (cause juridique commune), 4) Hukm (jugement à transférer).',
      ar: 'أركان القياس: 1) الأصل (الحالة المنصوصة)، 2) الفرع (الحالة الجديدة)، 3) العلة (السبب المشترك)، 4) الحكم (الحكم المنقول).',
      en: 'The 4 pillars: 1) Asl (original case with text), 2) Far\' (new case to resolve), 3) \'Illa (common legal cause), 4) Hukm (ruling to transfer).',
    },
    reference: {
      courseSlug: 'usul-al-fiqh',
      lessonId: '004-qiyas',
    },
    points: 15,
    tags: ['usul', 'fiqh', 'qiyas', 'arkan'],
  },
  {
    id: 'usul-q007',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelle est la différence entre "Nass" et "Zahir" dans l\'interprétation des textes ?',
      ar: 'ما الفرق بين "النص" و"الظاهر" في تفسير النصوص؟',
      en: 'What is the difference between "Nass" and "Zahir" in text interpretation?',
    },
    options: [
      { id: 'a', text: { fr: 'Nass = sens clair et unique, Zahir = sens apparent mais avec possibilité d\'autre sens', ar: 'النص = معنى واضح واحد، الظاهر = معنى راجح مع احتمال غيره', en: 'Nass = clear unique meaning, Zahir = apparent meaning with other possibility' } },
      { id: 'b', text: { fr: 'Ils sont synonymes', ar: 'مترادفان', en: 'They are synonymous' } },
      { id: 'c', text: { fr: 'Nass = Coran, Zahir = Sunna', ar: 'النص = القرآن، الظاهر = السنة', en: 'Nass = Quran, Zahir = Sunna' } },
      { id: 'd', text: { fr: 'Zahir est plus fort que Nass', ar: 'الظاهر أقوى من النص', en: 'Zahir is stronger than Nass' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Nass : texte dont le sens est catégorique, n\'admet qu\'une interprétation. Zahir : sens apparent et probable, mais accepte un autre sens (marjuh). Le Nass l\'emporte sur le Zahir.',
      ar: 'النص: لفظ قاطع الدلالة لا يحتمل إلا معنى واحداً. الظاهر: معنى راجح لكنه يحتمل معنى مرجوحاً. النص مقدم على الظاهر.',
      en: 'Nass: text with categorical meaning, admits only one interpretation. Zahir: apparent probable meaning, but accepts another (marjuh) sense. Nass prevails over Zahir.',
    },
    reference: {
      courseSlug: 'usul-al-fiqh',
      lessonId: '006-dalalat',
    },
    points: 15,
    tags: ['usul', 'fiqh', 'nass', 'zahir'],
  },
  {
    id: 'usul-q008',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que l\'"Istihsan" (الاستحسان) ?',
      ar: 'ما هو الاستحسان؟',
      en: 'What is "Istihsan"?',
    },
    options: [
      { id: 'a', text: { fr: 'Délaisser le qiyas apparent pour une preuve plus forte ou intérêt', ar: 'ترك القياس الظاهر لدليل أقوى أو مصلحة', en: 'Leaving apparent qiyas for stronger proof or benefit' } },
      { id: 'b', text: { fr: 'Suivre ses préférences personnelles', ar: 'اتباع الرغبات الشخصية', en: 'Following personal preferences' } },
      { id: 'c', text: { fr: 'Rejeter complètement le qiyas', ar: 'رفض القياس كلياً', en: 'Completely rejecting qiyas' } },
      { id: 'd', text: { fr: 'Toujours choisir l\'opinion la plus facile', ar: 'اختيار الرأي الأسهل دائماً', en: 'Always choosing the easiest opinion' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'L\'Istihsan est principalement utilisé par les Hanafis et Malikis. C\'est l\'abandon du qiyas apparent pour un autre plus subtil, un texte, un ijma\', ou la maslaha. Ash-Shafi\'i le critiqua.',
      ar: 'الاستحسان يستخدمه الحنفية والمالكية. هو العدول عن القياس الظاهر لقياس خفي أو نص أو إجماع أو مصلحة. انتقده الشافعي.',
      en: 'Istihsan is mainly used by Hanafis and Malikis. It\'s abandoning apparent qiyas for a subtler one, a text, ijma\', or maslaha. Ash-Shafi\'i criticized it.',
    },
    reference: {
      courseSlug: 'usul-al-fiqh',
      lessonId: '007-istihsan',
    },
    points: 15,
    tags: ['usul', 'fiqh', 'istihsan'],
  },
  {
    id: 'usul-q009',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que "Al-Maslaha al-Mursala" (المصلحة المرسلة) ?',
      ar: 'ما هي المصلحة المرسلة؟',
      en: 'What is "Al-Maslaha al-Mursala"?',
    },
    options: [
      { id: 'a', text: { fr: 'Intérêt ni validé ni invalidé spécifiquement par les textes', ar: 'مصلحة لم يشهد لها الشرع بالاعتبار ولا بالإلغاء', en: 'Interest neither validated nor invalidated by texts' } },
      { id: 'b', text: { fr: 'Intérêt explicitement mentionné dans le Coran', ar: 'مصلحة منصوص عليها في القرآن', en: 'Interest explicitly mentioned in Quran' } },
      { id: 'c', text: { fr: 'Intérêt interdit par la Sunna', ar: 'مصلحة نهت عنها السنة', en: 'Interest forbidden by Sunna' } },
      { id: 'd', text: { fr: 'L\'intérêt personnel du mufti', ar: 'المصلحة الشخصية للمفتي', en: 'Personal interest of the mufti' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'La Maslaha Mursala est un intérêt réel non traité par les textes mais conforme aux objectifs de la Sharia. Les Malikis l\'utilisent beaucoup. Conditions : ne pas contredire un texte, être réelle et générale.',
      ar: 'المصلحة المرسلة مصلحة حقيقية لم تُعالج بنص لكنها تتوافق مع مقاصد الشريعة. المالكية يستخدمونها كثيراً. شروطها: ألا تعارض نصاً، وأن تكون حقيقية وعامة.',
      en: 'Maslaha Mursala is a real interest not addressed by texts but conforming to Sharia objectives. Malikis use it extensively. Conditions: not contradict a text, be real and general.',
    },
    reference: {
      courseSlug: 'usul-al-fiqh',
      lessonId: '008-maslaha',
    },
    points: 15,
    tags: ['usul', 'fiqh', 'maslaha'],
  },
  {
    id: 'usul-q010',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que le "Nasikh wa al-Mansukh" (الناسخ والمنسوخ) ?',
      ar: 'ما هو الناسخ والمنسوخ؟',
      en: 'What is "Nasikh wa al-Mansukh"?',
    },
    options: [
      { id: 'a', text: { fr: 'L\'abrogation d\'un jugement antérieur par un jugement postérieur', ar: 'إلغاء حكم سابق بحكم لاحق', en: 'Abrogation of an earlier ruling by a later one' } },
      { id: 'b', text: { fr: 'La contradiction entre deux textes', ar: 'التناقض بين نصين', en: 'Contradiction between two texts' } },
      { id: 'c', text: { fr: 'La copie du Coran', ar: 'نسخ القرآن', en: 'Copying the Quran' } },
      { id: 'd', text: { fr: 'L\'interprétation métaphorique', ar: 'التفسير المجازي', en: 'Metaphorical interpretation' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Naskh est le remplacement d\'un jugement antérieur par un jugement postérieur. Ex : le changement de la qibla de Jérusalem vers La Mecque. Seul Allah peut abroger Ses jugements par révélation.',
      ar: 'النسخ هو رفع حكم سابق بحكم لاحق. مثال: تحويل القبلة من القدس إلى مكة. الله وحده ينسخ أحكامه بالوحي.',
      en: 'Naskh is replacing an earlier ruling with a later one. Ex: changing qibla from Jerusalem to Mecca. Only Allah can abrogate His rulings through revelation.',
    },
    reference: {
      courseSlug: 'usul-al-fiqh',
      lessonId: '009-naskh',
    },
    points: 15,
    tags: ['usul', 'fiqh', 'naskh'],
  },
  {
    id: 'usul-q011',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Que signifie la règle "Al-Asl fi al-Ashya\' al-Ibaha" ?',
      ar: 'ما معنى قاعدة "الأصل في الأشياء الإباحة"؟',
      en: 'What does the rule "Al-Asl fi al-Ashya\' al-Ibaha" mean?',
    },
    options: [
      { id: 'a', text: { fr: 'La base des choses est la permission (sauf preuve contraire)', ar: 'الأصل في الأشياء الإباحة (ما لم يرد دليل التحريم)', en: 'The default for things is permission (unless proven otherwise)' } },
      { id: 'b', text: { fr: 'Tout est interdit sauf ce qui est permis', ar: 'كل شيء حرام إلا ما أُبيح', en: 'Everything is forbidden except what is permitted' } },
      { id: 'c', text: { fr: 'La base est l\'obligation', ar: 'الأصل الوجوب', en: 'The default is obligation' } },
      { id: 'd', text: { fr: 'Seul le halal explicite est permis', ar: 'فقط الحلال الصريح مباح', en: 'Only explicit halal is permitted' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Dans les mu\'amalat (transactions), la règle est la permission tant qu\'il n\'y a pas de preuve d\'interdiction. Contrairement aux \'ibadat où la règle est : interdiction sauf preuve de légitimité.',
      ar: 'في المعاملات، الأصل الإباحة ما لم يرد دليل التحريم. بخلاف العبادات حيث الأصل المنع إلا بدليل على المشروعية.',
      en: 'In mu\'amalat (transactions), the default is permission unless there\'s proof of prohibition. Unlike \'ibadat where the rule is: forbidden unless proven legitimate.',
    },
    reference: {
      courseSlug: 'usul-al-fiqh',
      lessonId: '010-qawaid',
    },
    points: 15,
    tags: ['usul', 'fiqh', 'qawaid'],
  },

  // --- Questions Difficiles (4) ---
  {
    id: 'usul-q012',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle est la différence entre "\'Amm" et "Khass" ?',
      ar: 'ما الفرق بين "العام" و"الخاص"؟',
      en: 'What is the difference between "\'Amm" and "Khass"?',
    },
    options: [
      { id: 'a', text: { fr: '\'Amm = énoncé général, Khass = énoncé particulier qui restreint le général', ar: 'العام = لفظ شامل، الخاص = لفظ يقيّد العام', en: '\'Amm = general statement, Khass = particular statement restricting the general' } },
      { id: 'b', text: { fr: 'Ils sont synonymes', ar: 'مترادفان', en: 'They are synonymous' } },
      { id: 'c', text: { fr: '\'Amm = Coran, Khass = hadith', ar: 'العام = القرآن، الخاص = الحديث', en: '\'Amm = Quran, Khass = hadith' } },
      { id: 'd', text: { fr: 'Le \'Amm est toujours abrogé', ar: 'العام دائماً منسوخ', en: '\'Amm is always abrogated' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le \'Amm englobe tous les individus sans exception. Le Khass spécifie certains éléments. Ex : "Tuez les mushrikin" (\'amm) est restreint par l\'exception des dhimmis (khass). C\'est le takhsis.',
      ar: 'العام يشمل جميع الأفراد. الخاص يحدد بعض العناصر. مثال: "اقتلوا المشركين" (عام) يُخصص باستثناء أهل الذمة (خاص). هذا هو التخصيص.',
      en: '\'Amm encompasses all individuals. Khass specifies certain elements. Ex: "Kill mushrikin" (\'amm) is restricted by the exception of dhimmis (khass). This is takhsis.',
    },
    reference: {
      courseSlug: 'usul-al-fiqh',
      lessonId: '011-alfaz',
    },
    points: 20,
    tags: ['usul', 'fiqh', 'amm', 'khass'],
  },
  {
    id: 'usul-q013',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelles sont les conditions (shurut) pour être mujtahid ?',
      ar: 'ما شروط المجتهد؟',
      en: 'What are the conditions (shurut) to be a mujtahid?',
    },
    options: [
      { id: 'a', text: { fr: 'Maîtrise de l\'arabe, connaissance du Coran/Sunna, usul al-fiqh, maqasid, ijma\'', ar: 'إتقان العربية، معرفة القرآن/السنة، أصول الفقه، المقاصد، الإجماع', en: 'Arabic mastery, Quran/Sunna knowledge, usul al-fiqh, maqasid, ijma\'' } },
      { id: 'b', text: { fr: 'Être arabe et masculin', ar: 'أن يكون عربياً وذكراً', en: 'Being Arab and male' } },
      { id: 'c', text: { fr: 'Avoir un diplôme universitaire', ar: 'حمل شهادة جامعية', en: 'Having a university degree' } },
      { id: 'd', text: { fr: 'Être suivi par beaucoup de gens', ar: 'أن يتبعه كثير من الناس', en: 'Being followed by many people' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le mujtahid doit maîtriser : l\'arabe (nahw, sarf, balagha), le Coran et la Sunna (et leur \'ulum), les usul al-fiqh, les maqasid, les consensus établis, la logique. Il doit aussi être intègre (\'adl).',
      ar: 'المجتهد يجب أن يتقن: العربية (نحو، صرف، بلاغة)، القرآن والسنة (وعلومهما)، أصول الفقه، المقاصد، الإجماع، المنطق. ويشترط العدالة.',
      en: 'Mujtahid must master: Arabic (nahw, sarf, balagha), Quran and Sunna (and their sciences), usul al-fiqh, maqasid, established consensuses, logic. Also must be upright (\'adl).',
    },
    reference: {
      courseSlug: 'usul-al-fiqh',
      lessonId: '012-ijtihad',
    },
    points: 20,
    tags: ['usul', 'fiqh', 'mujtahid'],
  },
  {
    id: 'usul-q014',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quels sont les 5 objectifs universels (Maqasid al-Sharia) ?',
      ar: 'ما المقاصد الخمس الكلية للشريعة؟',
      en: 'What are the 5 universal objectives (Maqasid al-Sharia)?',
    },
    options: [
      { id: 'a', text: { fr: 'Religion, vie, raison, descendance, biens', ar: 'الدين، النفس، العقل، النسل، المال', en: 'Religion, life, intellect, progeny, property' } },
      { id: 'b', text: { fr: 'Prière, jeûne, zakat, hajj, shahada', ar: 'الصلاة، الصيام، الزكاة، الحج، الشهادة', en: 'Prayer, fasting, zakat, hajj, shahada' } },
      { id: 'c', text: { fr: 'Justice, paix, liberté, égalité, fraternité', ar: 'العدل، السلام، الحرية، المساواة، الأخوة', en: 'Justice, peace, freedom, equality, brotherhood' } },
      { id: 'd', text: { fr: 'Halal, haram, makruh, mubah, wajib', ar: 'الحلال، الحرام، المكروه، المباح، الواجب', en: 'Halal, haram, makruh, mubah, wajib' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les 5 nécessités (daruriyyat) que la Sharia protège : 1) Din (religion), 2) Nafs (vie), 3) \'Aql (raison), 4) Nasl (lignée), 5) Mal (biens). Ash-Shatibi les a systématisés dans al-Muwafaqat.',
      ar: 'الضروريات الخمس التي تحفظها الشريعة: 1) الدين، 2) النفس، 3) العقل، 4) النسل، 5) المال. الشاطبي نظّمها في الموافقات.',
      en: 'The 5 necessities (daruriyyat) Sharia protects: 1) Din (religion), 2) Nafs (life), 3) \'Aql (intellect), 4) Nasl (lineage), 5) Mal (property). Ash-Shatibi systematized them in al-Muwafaqat.',
    },
    reference: {
      courseSlug: 'usul-al-fiqh',
      lessonId: '013-maqasid',
    },
    points: 20,
    tags: ['usul', 'fiqh', 'maqasid'],
  },
  {
    id: 'usul-q015',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qu\'est-ce que "Sadd al-Dhara\'i\'" (سد الذرائع) ?',
      ar: 'ما هو سد الذرائع؟',
      en: 'What is "Sadd al-Dhara\'i\'"?',
    },
    options: [
      { id: 'a', text: { fr: 'Bloquer les moyens menant au haram, même s\'ils sont en soi licites', ar: 'منع الوسائل المفضية للحرام وإن كانت في ذاتها مباحة', en: 'Blocking means leading to haram, even if themselves permissible' } },
      { id: 'b', text: { fr: 'Fermer les portes des mosquées', ar: 'إغلاق أبواب المساجد', en: 'Closing mosque doors' } },
      { id: 'c', text: { fr: 'Interdire tout ce qui est douteux', ar: 'تحريم كل مشتبه', en: 'Forbidding everything doubtful' } },
      { id: 'd', text: { fr: 'Abolir le qiyas', ar: 'إلغاء القياس', en: 'Abolishing qiyas' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Sadd al-Dhara\'i\' (bloquer les prétextes) interdit ce qui est licite en soi mais mène généralement au haram. Les Malikis et Hanbalis l\'utilisent beaucoup. Ex : interdire la khalwa (tête-à-tête) même sans intention.',
      ar: 'سد الذرائع يمنع المباح في ذاته إذا كان يفضي غالباً للحرام. المالكية والحنابلة يستخدمونه كثيراً. مثال: منع الخلوة بالأجنبية ولو بلا نية.',
      en: 'Sadd al-Dhara\'i\' (blocking pretexts) forbids what is intrinsically permissible but generally leads to haram. Malikis and Hanbalis use it extensively. Ex: forbidding khalwa (seclusion) even without intention.',
    },
    reference: {
      courseSlug: 'usul-al-fiqh',
      lessonId: '014-dharai',
    },
    points: 20,
    tags: ['usul', 'fiqh', 'dharai'],
  },
];

// ============================================
// Export du Quiz
// ============================================

export const quizUsulFiqh: Quiz = {
  id: 'quiz-usul-fiqh',
  type: 'module',
  courseSlug: 'usul-al-fiqh',
  title: {
    fr: 'Quiz : Usul al-Fiqh (Fondements de la Jurisprudence)',
    ar: 'اختبار: أصول الفقه',
    en: 'Quiz: Usul al-Fiqh (Principles of Jurisprudence)',
  },
  description: {
    fr: 'Testez vos connaissances sur les sources du droit islamique et les règles méthodologiques.',
    ar: 'اختبر معلوماتك عن مصادر الفقه الإسلامي والقواعد المنهجية.',
    en: 'Test your knowledge of Islamic law sources and methodological rules.',
  },
  instructions: {
    fr: 'Maîtrisez la science qui permet de comprendre comment les savants déduisent les jugements.',
    ar: 'أتقن العلم الذي يُفهم به كيف يستنبط العلماء الأحكام.',
    en: 'Master the science that explains how scholars derive rulings.',
  },
  questions,
  duration: 15,
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

export default quizUsulFiqh;
