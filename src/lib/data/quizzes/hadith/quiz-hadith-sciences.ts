/**
 * Quiz Sciences du Hadith
 * 
 * Ce quiz couvre les sciences du hadith :
 * terminologie, classification, chaîne de transmission, critique
 * 
 * Niveau : Débutant à Intermédiaire
 * Questions : 15
 */

import { Quiz, Question } from '../types';

const questions: Question[] = [
  // --- Questions Faciles (5) ---
  {
    id: 'hadith-q001',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Qu\'est-ce qu\'un hadith ?',
      ar: 'ما هو الحديث؟',
      en: 'What is a hadith?',
    },
    options: [
      { id: 'a', text: { fr: 'Un verset du Coran', ar: 'آية من القرآن', en: 'A verse from the Quran' } },
      { id: 'b', text: { fr: 'Les paroles, actes ou approbations du Prophète ﷺ', ar: 'أقوال وأفعال وتقريرات النبي ﷺ', en: 'The sayings, actions, or approvals of the Prophet ﷺ' } },
      { id: 'c', text: { fr: 'Un poème arabe ancien', ar: 'شعر عربي قديم', en: 'An ancient Arabic poem' } },
      { id: 'd', text: { fr: 'Une loi islamique', ar: 'قانون إسلامي', en: 'An Islamic law' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le hadith (ou Sunna) comprend tout ce qui est rapporté du Prophète ﷺ : ses paroles (qawl), ses actes (fi\'l), ses approbations tacites (taqrir), et même ses caractéristiques physiques et morales.',
      ar: 'الحديث (أو السنة) يشمل كل ما رُوي عن النبي ﷺ: أقواله وأفعاله وتقريراته، وحتى صفاته الخَلقية والخُلقية.',
      en: 'Hadith (or Sunnah) includes everything reported from the Prophet ﷺ: his sayings (qawl), actions (fi\'l), tacit approvals (taqrir), and even his physical and moral characteristics.',
    },
    reference: {
      courseSlug: 'sciences-hadith',
      lessonId: '001-introduction',
    },
    points: 10,
    tags: ['hadith', 'definition', 'sunna'],
  },
  {
    id: 'hadith-q002',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quelles sont les deux parties d\'un hadith ?',
      ar: 'ما هما جزءا الحديث؟',
      en: 'What are the two parts of a hadith?',
    },
    options: [
      { id: 'a', text: { fr: 'Introduction et conclusion', ar: 'مقدمة وخاتمة', en: 'Introduction and conclusion' } },
      { id: 'b', text: { fr: 'Isnad (chaîne) et Matn (texte)', ar: 'الإسناد والمتن', en: 'Isnad (chain) and Matn (text)' } },
      { id: 'c', text: { fr: 'Question et réponse', ar: 'سؤال وجواب', en: 'Question and answer' } },
      { id: 'd', text: { fr: 'Titre et contenu', ar: 'عنوان ومحتوى', en: 'Title and content' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Un hadith a deux parties : 1) Isnad (السند) - la chaîne de transmetteurs du hadith, 2) Matn (المتن) - le texte/contenu du hadith lui-même. Les deux sont étudiés pour vérifier l\'authenticité.',
      ar: 'للحديث جزءان: 1) الإسناد - سلسلة رواة الحديث، 2) المتن - نص الحديث ذاته. كلاهما يُدرس للتحقق من الصحة.',
      en: 'A hadith has two parts: 1) Isnad (السند) - the chain of narrators, 2) Matn (المتن) - the text/content of the hadith itself. Both are studied to verify authenticity.',
    },
    reference: {
      courseSlug: 'sciences-hadith',
      lessonId: '002-structure',
    },
    points: 10,
    tags: ['hadith', 'isnad', 'matn'],
  },
  {
    id: 'hadith-q003',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quel est le recueil de hadiths le plus authentique selon la majorité des savants ?',
      ar: 'ما هو أصح كتب الحديث عند جمهور العلماء؟',
      en: 'What is the most authentic hadith collection according to most scholars?',
    },
    options: [
      { id: 'a', text: { fr: 'Sunan Abu Dawud', ar: 'سنن أبي داود', en: 'Sunan Abu Dawud' } },
      { id: 'b', text: { fr: 'Sahih al-Bukhari', ar: 'صحيح البخاري', en: 'Sahih al-Bukhari' } },
      { id: 'c', text: { fr: 'Muwatta Malik', ar: 'موطأ مالك', en: 'Muwatta Malik' } },
      { id: 'd', text: { fr: 'Musnad Ahmad', ar: 'مسند أحمد', en: 'Musnad Ahmad' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Sahih al-Bukhari, compilé par l\'Imam al-Bukhari (194-256 H), est considéré comme le livre le plus authentique après le Coran. Il a sélectionné environ 7 275 hadiths sur plus de 600 000 qu\'il connaissait.',
      ar: 'صحيح البخاري، جمعه الإمام البخاري (194-256 هـ)، يُعتبر أصح كتاب بعد القرآن. اختار حوالي 7275 حديثاً من أكثر من 600 ألف حديث يحفظها.',
      en: 'Sahih al-Bukhari, compiled by Imam al-Bukhari (194-256 H), is considered the most authentic book after the Quran. He selected about 7,275 hadiths from over 600,000 he knew.',
    },
    reference: {
      courseSlug: 'sciences-hadith',
      lessonId: '003-collections',
    },
    points: 10,
    tags: ['hadith', 'bukhari', 'sahih'],
  },
  {
    id: 'hadith-q004',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'Un hadith "Da\'if" (faible) peut être utilisé pour les bonnes œuvres (fada\'il al-a\'mal) selon certains savants.',
      ar: 'الحديث "الضعيف" يمكن استخدامه في فضائل الأعمال عند بعض العلماء.',
      en: 'A "Da\'if" (weak) hadith can be used for virtuous deeds (fada\'il al-a\'mal) according to some scholars.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'Selon certains savants (comme Ibn Hajar), un hadith Da\'if peut être utilisé pour encourager les bonnes œuvres, à 3 conditions : 1) Il n\'est pas très faible, 2) Il y a une base dans la Sharia, 3) On ne croit pas fermement qu\'il vient du Prophète ﷺ.',
      ar: 'عند بعض العلماء (مثل ابن حجر)، الحديث الضعيف يُستعمل في الترغيب بشروط: 1) ليس شديد الضعف، 2) له أصل في الشريعة، 3) لا يُعتقد ثبوته عن النبي ﷺ.',
      en: 'According to some scholars (like Ibn Hajar), a Da\'if hadith can be used to encourage good deeds, with 3 conditions: 1) It\'s not very weak, 2) There\'s a basis in Sharia, 3) One doesn\'t firmly believe it\'s from the Prophet ﷺ.',
    },
    reference: {
      courseSlug: 'sciences-hadith',
      lessonId: '004-classification',
    },
    points: 10,
    tags: ['hadith', 'daif', 'fadail'],
  },
  {
    id: 'hadith-q005',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Combien y a-t-il de recueils dans les "Kutub as-Sitta" (Six Livres) ?',
      ar: 'كم كتاباً في "الكتب الستة"؟',
      en: 'How many collections are in the "Kutub as-Sitta" (Six Books)?',
    },
    options: [
      { id: 'a', text: { fr: '4', ar: '٤', en: '4' } },
      { id: 'b', text: { fr: '5', ar: '٥', en: '5' } },
      { id: 'c', text: { fr: '6', ar: '٦', en: '6' } },
      { id: 'd', text: { fr: '9', ar: '٩', en: '9' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Les Kutub as-Sitta (6 livres canoniques) sont : Sahih al-Bukhari, Sahih Muslim, Sunan Abu Dawud, Sunan at-Tirmidhi, Sunan an-Nasa\'i, et Sunan Ibn Majah.',
      ar: 'الكتب الستة (الكتب القانونية): صحيح البخاري، صحيح مسلم، سنن أبي داود، سنن الترمذي، سنن النسائي، وسنن ابن ماجه.',
      en: 'The Kutub as-Sitta (6 canonical books) are: Sahih al-Bukhari, Sahih Muslim, Sunan Abu Dawud, Sunan at-Tirmidhi, Sunan an-Nasa\'i, and Sunan Ibn Majah.',
    },
    reference: {
      courseSlug: 'sciences-hadith',
      lessonId: '003-collections',
    },
    points: 10,
    tags: ['hadith', 'sitta', 'collections'],
  },

  // --- Questions Moyennes (6) ---
  {
    id: 'hadith-q006',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce qu\'un hadith "Mutawatir" ?',
      ar: 'ما هو الحديث "المتواتر"؟',
      en: 'What is a "Mutawatir" hadith?',
    },
    options: [
      { id: 'a', text: { fr: 'Un hadith rapporté par un seul narrateur', ar: 'حديث رواه راوٍ واحد', en: 'A hadith reported by only one narrator' } },
      { id: 'b', text: { fr: 'Un hadith transmis par tant de narrateurs à chaque niveau qu\'il est impossible qu\'ils aient conspiré pour mentir', ar: 'حديث رواه جمع كبير في كل طبقة يستحيل تواطؤهم على الكذب', en: 'A hadith transmitted by so many narrators at each level that it\'s impossible they conspired to lie' } },
      { id: 'c', text: { fr: 'Un hadith fabriqué', ar: 'حديث موضوع', en: 'A fabricated hadith' } },
      { id: 'd', text: { fr: 'Un hadith avec chaîne brisée', ar: 'حديث منقطع السند', en: 'A hadith with broken chain' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Mutawatir signifie un hadith rapporté par un si grand nombre de narrateurs à chaque niveau de transmission qu\'il est inconcevable qu\'ils aient tous menti ou fait erreur. Il donne une certitude absolue (\'ilm yaqini).',
      ar: 'المتواتر حديث رواه جمع كثير في كل طبقة يستحيل تواطؤهم على الكذب. يُفيد العلم اليقيني القاطع.',
      en: 'Mutawatir means a hadith reported by such a large number of narrators at each level of transmission that it\'s inconceivable they all lied or erred. It gives absolute certainty (\'ilm yaqini).',
    },
    reference: {
      courseSlug: 'sciences-hadith',
      lessonId: '004-classification',
    },
    points: 15,
    tags: ['hadith', 'mutawatir', 'classification'],
  },
  {
    id: 'hadith-q007',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce qu\'un hadith "Ahad" ?',
      ar: 'ما هو حديث "الآحاد"؟',
      en: 'What is an "Ahad" hadith?',
    },
    options: [
      { id: 'a', text: { fr: 'Un hadith qui n\'atteint pas le niveau de Mutawatir', ar: 'حديث لم يبلغ درجة المتواتر', en: 'A hadith that doesn\'t reach the level of Mutawatir' } },
      { id: 'b', text: { fr: 'Un hadith rapporté par un seul Compagnon', ar: 'حديث رواه صحابي واحد', en: 'A hadith reported by only one Companion' } },
      { id: 'c', text: { fr: 'Un hadith fabriqué', ar: 'حديث موضوع', en: 'A fabricated hadith' } },
      { id: 'd', text: { fr: 'Un hadith du Coran', ar: 'حديث من القرآن', en: 'A hadith from the Quran' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Ahad désigne tout hadith qui n\'atteint pas le niveau de Mutawatir. Il comprend : Mashhur (célèbre, 3+ narrateurs), \'Aziz (2 narrateurs minimum), et Gharib (1 narrateur à un niveau). Il donne une probabilité, pas une certitude absolue.',
      ar: 'الآحاد كل حديث لم يبلغ حد التواتر. يشمل: المشهور (3+ رواة)، العزيز (راويان على الأقل)، والغريب (راوٍ واحد في طبقة). يُفيد الظن لا اليقين القاطع.',
      en: 'Ahad refers to any hadith that doesn\'t reach Mutawatir level. It includes: Mashhur (famous, 3+ narrators), \'Aziz (minimum 2 narrators), and Gharib (1 narrator at a level). It gives probability, not absolute certainty.',
    },
    reference: {
      courseSlug: 'sciences-hadith',
      lessonId: '004-classification',
    },
    points: 15,
    tags: ['hadith', 'ahad', 'classification'],
  },
  {
    id: 'hadith-q008',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelles sont les 5 conditions pour qu\'un hadith soit "Sahih" (authentique) ?',
      ar: 'ما هي الشروط الخمسة لصحة الحديث؟',
      en: 'What are the 5 conditions for a hadith to be "Sahih" (authentic)?',
    },
    options: [
      { id: 'a', text: { fr: 'Chaîne continue, narrateurs justes et précis, pas d\'anomalie ni de défaut caché', ar: 'اتصال السند، عدالة الرواة وضبطهم، انتفاء الشذوذ والعلة', en: 'Continuous chain, just & precise narrators, no anomaly or hidden defect' } },
      { id: 'b', text: { fr: 'Écrit par un Compagnon', ar: 'كتبه صحابي', en: 'Written by a Companion' } },
      { id: 'c', text: { fr: 'Mentionné dans le Coran', ar: 'مذكور في القرآن', en: 'Mentioned in the Quran' } },
      { id: 'd', text: { fr: 'Rapporté par Bukhari seulement', ar: 'رواه البخاري فقط', en: 'Reported by Bukhari only' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les 5 conditions du Sahih : 1) Ittisaal as-Sanad (chaîne continue), 2) \'Adaalat ar-Ruwaat (narrateurs justes), 3) Dabt ar-Ruwaat (narrateurs précis), 4) \'Adam ash-Shudhudh (pas d\'anomalie), 5) \'Adam al-\'Illa (pas de défaut caché).',
      ar: 'شروط الصحة الخمسة: 1) اتصال السند، 2) عدالة الرواة، 3) ضبط الرواة، 4) انتفاء الشذوذ، 5) انتفاء العلة القادحة.',
      en: 'The 5 Sahih conditions: 1) Ittisaal as-Sanad (continuous chain), 2) \'Adaalat ar-Ruwaat (just narrators), 3) Dabt ar-Ruwaat (precise narrators), 4) \'Adam ash-Shudhudh (no anomaly), 5) \'Adam al-\'Illa (no hidden defect).',
    },
    reference: {
      courseSlug: 'sciences-hadith',
      lessonId: '005-sahih-conditions',
    },
    points: 15,
    tags: ['hadith', 'sahih', 'conditions'],
  },
  {
    id: 'hadith-q009',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce qu\'un hadith "Hasan" ?',
      ar: 'ما هو الحديث "الحسن"؟',
      en: 'What is a "Hasan" hadith?',
    },
    options: [
      { id: 'a', text: { fr: 'Un hadith avec un défaut majeur', ar: 'حديث به علة قادحة', en: 'A hadith with a major defect' } },
      { id: 'b', text: { fr: 'Un hadith qui remplit les conditions du Sahih mais avec des narrateurs de précision légèrement inférieure', ar: 'حديث توفرت فيه شروط الصحة لكن رواته أخف ضبطاً', en: 'A hadith meeting Sahih conditions but with slightly less precise narrators' } },
      { id: 'c', text: { fr: 'Un hadith fabriqué', ar: 'حديث موضوع', en: 'A fabricated hadith' } },
      { id: 'd', text: { fr: 'Un hadith du Coran', ar: 'حديث من القرآن', en: 'A hadith from the Quran' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Hasan (bon) est un hadith qui remplit toutes les conditions du Sahih, mais certains narrateurs ont une précision (dabt) légèrement inférieure. Il est accepté comme preuve en fiqh, juste après le Sahih.',
      ar: 'الحسن حديث توفرت فيه شروط الصحة، لكن بعض رواته أخف ضبطاً. يُقبل حجة في الفقه، بعد الصحيح مباشرة.',
      en: 'Hasan (good) is a hadith meeting all Sahih conditions, but some narrators have slightly less precision (dabt). It\'s accepted as evidence in fiqh, right after Sahih.',
    },
    reference: {
      courseSlug: 'sciences-hadith',
      lessonId: '004-classification',
    },
    points: 15,
    tags: ['hadith', 'hasan', 'classification'],
  },
  {
    id: 'hadith-q010',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce qu\'un hadith "Mursal" ?',
      ar: 'ما هو الحديث "المرسل"؟',
      en: 'What is a "Mursal" hadith?',
    },
    options: [
      { id: 'a', text: { fr: 'Un hadith où un Tabi\'i rapporte directement du Prophète ﷺ sans mentionner le Compagnon', ar: 'حديث يرويه التابعي عن النبي ﷺ دون ذكر الصحابي', en: 'A hadith where a Tabi\'i reports directly from the Prophet ﷺ without mentioning the Companion' } },
      { id: 'b', text: { fr: 'Un hadith très authentique', ar: 'حديث صحيح جداً', en: 'A very authentic hadith' } },
      { id: 'c', text: { fr: 'Un hadith envoyé par écrit', ar: 'حديث مُرسل كتابةً', en: 'A hadith sent in writing' } },
      { id: 'd', text: { fr: 'Un hadith long', ar: 'حديث طويل', en: 'A long hadith' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Mursal est quand un Tabi\'i (successeur des Compagnons) dit "Le Prophète ﷺ a dit..." sans mentionner le Compagnon intermédiaire. C\'est considéré comme faible par la majorité car on ne connaît pas le narrateur omis.',
      ar: 'المرسل هو أن يقول التابعي "قال النبي ﷺ..." دون ذكر الصحابي. يُعتبر ضعيفاً عند الجمهور لأن الراوي المحذوف مجهول.',
      en: 'Mursal is when a Tabi\'i (successor of Companions) says "The Prophet ﷺ said..." without mentioning the Companion intermediary. It\'s considered weak by the majority since the omitted narrator is unknown.',
    },
    reference: {
      courseSlug: 'sciences-hadith',
      lessonId: '006-defects',
    },
    points: 15,
    tags: ['hadith', 'mursal', 'defects'],
  },
  {
    id: 'hadith-q011',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qui a compilé Sahih Muslim ?',
      ar: 'من جمع صحيح مسلم؟',
      en: 'Who compiled Sahih Muslim?',
    },
    options: [
      { id: 'a', text: { fr: 'Imam al-Bukhari', ar: 'الإمام البخاري', en: 'Imam al-Bukhari' } },
      { id: 'b', text: { fr: 'Imam Muslim ibn al-Hajjaj', ar: 'الإمام مسلم بن الحجاج', en: 'Imam Muslim ibn al-Hajjaj' } },
      { id: 'c', text: { fr: 'Imam Abu Dawud', ar: 'الإمام أبو داود', en: 'Imam Abu Dawud' } },
      { id: 'd', text: { fr: 'Imam Ahmad', ar: 'الإمام أحمد', en: 'Imam Ahmad' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Sahih Muslim a été compilé par Imam Muslim ibn al-Hajjaj an-Naysaburi (204-261 H). Il était l\'élève d\'al-Bukhari. Son Sahih est considéré comme le 2e livre le plus authentique après Sahih al-Bukhari.',
      ar: 'جمع صحيح مسلم الإمام مسلم بن الحجاج النيسابوري (204-261 هـ). كان تلميذ البخاري. صحيحه يُعتبر ثاني أصح كتاب بعد صحيح البخاري.',
      en: 'Sahih Muslim was compiled by Imam Muslim ibn al-Hajjaj an-Naysaburi (204-261 H). He was al-Bukhari\'s student. His Sahih is considered the 2nd most authentic book after Sahih al-Bukhari.',
    },
    reference: {
      courseSlug: 'sciences-hadith',
      lessonId: '003-collections',
    },
    points: 15,
    tags: ['hadith', 'muslim', 'collections'],
  },

  // --- Questions Difficiles (4) ---
  {
    id: 'hadith-q012',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qu\'est-ce qu\'un hadith "Mawdu\'" (موضوع) ?',
      ar: 'ما هو الحديث "الموضوع"؟',
      en: 'What is a "Mawdu\'" hadith?',
    },
    options: [
      { id: 'a', text: { fr: 'Un hadith authentique', ar: 'حديث صحيح', en: 'An authentic hadith' } },
      { id: 'b', text: { fr: 'Un hadith fabriqué/inventé attribué faussement au Prophète ﷺ', ar: 'حديث مختلق/مكذوب منسوب زوراً للنبي ﷺ', en: 'A fabricated/invented hadith falsely attributed to the Prophet ﷺ' } },
      { id: 'c', text: { fr: 'Un hadith avec un sujet particulier', ar: 'حديث في موضوع معين', en: 'A hadith with a particular subject' } },
      { id: 'd', text: { fr: 'Un hadith placé dans un livre', ar: 'حديث موضوع في كتاب', en: 'A hadith placed in a book' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Mawdu\' (fabriqué) est un hadith inventé et faussement attribué au Prophète ﷺ. C\'est le pire type de hadith. Il est interdit de le rapporter sauf pour le dénoncer. Les signes incluent : contenu absurde, narrateur connu comme menteur.',
      ar: 'الموضوع حديث مختلق منسوب زوراً للنبي ﷺ. هو أسوأ أنواع الحديث. يحرم روايته إلا للتحذير منه. علاماته: متن منكر، راوٍ معروف بالكذب.',
      en: 'Mawdu\' (fabricated) is an invented hadith falsely attributed to the Prophet ﷺ. It\'s the worst type of hadith. It\'s forbidden to report it except to denounce it. Signs include: absurd content, narrator known as a liar.',
    },
    reference: {
      courseSlug: 'sciences-hadith',
      lessonId: '007-fabricated',
    },
    points: 20,
    tags: ['hadith', 'mawdu', 'fabricated'],
  },
  {
    id: 'hadith-q013',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qu\'est-ce que "Jarh wa Ta\'dil" (الجرح والتعديل) ?',
      ar: 'ما هو "الجرح والتعديل"؟',
      en: 'What is "Jarh wa Ta\'dil"?',
    },
    options: [
      { id: 'a', text: { fr: 'La science de la récitation coranique', ar: 'علم تلاوة القرآن', en: 'The science of Quranic recitation' } },
      { id: 'b', text: { fr: 'La science de la critique et de la validation des narrateurs', ar: 'علم نقد الرواة وتوثيقهم', en: 'The science of criticizing and validating narrators' } },
      { id: 'c', text: { fr: 'L\'étude du fiqh', ar: 'دراسة الفقه', en: 'The study of fiqh' } },
      { id: 'd', text: { fr: 'La médecine islamique', ar: 'الطب الإسلامي', en: 'Islamic medicine' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Jarh wa Ta\'dil est la science de l\'évaluation des narrateurs. Jarh = critiquer un narrateur pour ses défauts (mensonge, mauvaise mémoire). Ta\'dil = valider sa fiabilité. C\'est essentiel pour classer les hadiths.',
      ar: 'الجرح والتعديل علم تقييم الرواة. الجرح = نقد الراوي لعيوبه (كذب، سوء حفظ). التعديل = توثيق موثوقيته. أساسي لتصنيف الأحاديث.',
      en: 'Jarh wa Ta\'dil is the science of narrator evaluation. Jarh = criticizing a narrator for defects (lying, poor memory). Ta\'dil = validating his reliability. It\'s essential for classifying hadiths.',
    },
    reference: {
      courseSlug: 'sciences-hadith',
      lessonId: '008-narrator-criticism',
    },
    points: 20,
    tags: ['hadith', 'jarh', 'tadil'],
  },
  {
    id: 'hadith-q014',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle est la différence entre "Hadith Qudsi" et "Hadith Nabawi" ?',
      ar: 'ما الفرق بين "الحديث القدسي" و"الحديث النبوي"؟',
      en: 'What is the difference between "Hadith Qudsi" and "Hadith Nabawi"?',
    },
    options: [
      { id: 'a', text: { fr: 'Qudsi = paroles d\'Allah rapportées par le Prophète ﷺ (hors Coran), Nabawi = paroles du Prophète ﷺ', ar: 'القدسي = كلام الله يرويه النبي ﷺ (غير القرآن)، النبوي = كلام النبي ﷺ', en: 'Qudsi = Allah\'s words reported by Prophet ﷺ (not Quran), Nabawi = Prophet\'s ﷺ words' } },
      { id: 'b', text: { fr: 'Ils sont identiques', ar: 'متماثلان', en: 'They are identical' } },
      { id: 'c', text: { fr: 'Qudsi = du Coran', ar: 'القدسي = من القرآن', en: 'Qudsi = from Quran' } },
      { id: 'd', text: { fr: 'Nabawi = plus authentique', ar: 'النبوي = أصح', en: 'Nabawi = more authentic' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Hadith Qudsi (sacré) : le Prophète ﷺ rapporte des paroles d\'Allah (hors Coran), ex: "قال الله تعالى". Le sens vient d\'Allah, les mots du Prophète ﷺ. Hadith Nabawi : les propres paroles du Prophète ﷺ.',
      ar: 'الحديث القدسي: النبي ﷺ يروي كلام الله (غير القرآن)، مثل: "قال الله تعالى". المعنى من الله، اللفظ من النبي ﷺ. الحديث النبوي: كلام النبي ﷺ الخاص.',
      en: 'Hadith Qudsi (sacred): the Prophet ﷺ reports Allah\'s words (not Quran), e.g., "Allah said". The meaning is from Allah, the words from the Prophet ﷺ. Hadith Nabawi: the Prophet\'s ﷺ own words.',
    },
    reference: {
      courseSlug: 'sciences-hadith',
      lessonId: '009-types',
    },
    points: 20,
    tags: ['hadith', 'qudsi', 'nabawi'],
  },
  {
    id: 'hadith-q015',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qu\'est-ce qu\'un "Isnad \'Aali" (إسناد عالٍ) et pourquoi est-il préféré ?',
      ar: 'ما هو "الإسناد العالي" ولماذا يُفضَّل؟',
      en: 'What is an "Isnad \'Aali" (high chain) and why is it preferred?',
    },
    options: [
      { id: 'a', text: { fr: 'Un isnad avec peu de narrateurs entre le compilateur et le Prophète ﷺ - moins de risque d\'erreur', ar: 'إسناد بعدد قليل من الرواة بين المصنف والنبي ﷺ - أقل احتمال للخطأ', en: 'An isnad with few narrators between the compiler and Prophet ﷺ - less chance of error' } },
      { id: 'b', text: { fr: 'Un isnad très long', ar: 'إسناد طويل جداً', en: 'A very long isnad' } },
      { id: 'c', text: { fr: 'Un isnad avec des narrateurs célèbres', ar: 'إسناد برواة مشهورين', en: 'An isnad with famous narrators' } },
      { id: 'd', text: { fr: 'Un isnad écrit en arabe classique', ar: 'إسناد بالعربية الفصحى', en: 'An isnad in classical Arabic' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Isnad \'Aali = chaîne courte avec peu d\'intermédiaires entre le compilateur et le Prophète ﷺ. Il est préféré car : moins de maillons = moins de chances d\'erreur ou de défaut. L\'opposé est Isnad Naazil (chaîne basse/longue).',
      ar: 'الإسناد العالي = سلسلة قصيرة بعدد قليل من الرواة بين المصنف والنبي ﷺ. يُفضَّل لأن: قلة الحلقات = أقل احتمال للخطأ أو العلة. عكسه الإسناد النازل (الطويل).',
      en: 'Isnad \'Aali = short chain with few intermediaries between the compiler and Prophet ﷺ. It\'s preferred because: fewer links = less chance of error or defect. The opposite is Isnad Naazil (low/long chain).',
    },
    reference: {
      courseSlug: 'sciences-hadith',
      lessonId: '010-isnad-types',
    },
    points: 20,
    tags: ['hadith', 'isnad', 'aali'],
  },
];

// ============================================
// Export du Quiz
// ============================================

export const quizHadithSciences: Quiz = {
  id: 'quiz-hadith-sciences',
  type: 'module',
  courseSlug: 'sciences-hadith',
  title: {
    fr: 'Quiz : Sciences du Hadith',
    ar: 'اختبار: علوم الحديث',
    en: 'Quiz: Hadith Sciences',
  },
  description: {
    fr: 'Testez vos connaissances sur la terminologie, la classification et la critique des hadiths.',
    ar: 'اختبر معلوماتك عن مصطلح الحديث وتصنيفه ونقده.',
    en: 'Test your knowledge of hadith terminology, classification, and criticism.',
  },
  instructions: {
    fr: 'Comprenez les fondements de la science qui protège la Sunna du Prophète ﷺ.',
    ar: 'افهم أسس العلم الذي يحفظ سنة النبي ﷺ.',
    en: 'Understand the foundations of the science that protects the Prophet\'s ﷺ Sunnah.',
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

export default quizHadithSciences;
