/**
 * Quiz Tajweed - Bases de la Récitation Coranique
 * 
 * Ce quiz couvre les règles fondamentales du tajweed :
 * lettres, makhaarij, règles de nun et mim, madd
 * 
 * Niveau : Débutant à Intermédiaire
 * Questions : 15
 */

import { Quiz, Question } from '../types';

const questions: Question[] = [
  // --- Questions Faciles (5) ---
  {
    id: 'tajweed-q001',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Que signifie "Tajweed" ?',
      ar: 'ما معنى "التجويد"؟',
      en: 'What does "Tajweed" mean?',
    },
    options: [
      { id: 'a', text: { fr: 'Réciter rapidement', ar: 'القراءة السريعة', en: 'Reading quickly' } },
      { id: 'b', text: { fr: 'Embellir et perfectionner la récitation', ar: 'تحسين وإتقان القراءة', en: 'Beautifying and perfecting recitation' } },
      { id: 'c', text: { fr: 'Mémoriser le Coran', ar: 'حفظ القرآن', en: 'Memorizing the Quran' } },
      { id: 'd', text: { fr: 'Traduire le Coran', ar: 'ترجمة القرآن', en: 'Translating the Quran' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Tajweed vient de "jawwada" (جوّد) qui signifie améliorer, embellir. C\'est la science de réciter le Coran en donnant à chaque lettre son droit (haqq) et ses caractéristiques (sifat).',
      ar: 'التجويد من "جوّد" أي حسّن وأتقن. هو علم قراءة القرآن بإعطاء كل حرف حقه ومستحقه من الصفات.',
      en: 'Tajweed comes from "jawwada" which means to improve, beautify. It\'s the science of reciting the Quran by giving each letter its right (haqq) and characteristics (sifat).',
    },
    reference: {
      courseSlug: 'introduction-tajweed',
      lessonId: '001-introduction',
    },
    points: 10,
    tags: ['tajweed', 'definition', 'basics'],
  },
  {
    id: 'tajweed-q002',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Combien de lettres y a-t-il dans l\'alphabet arabe ?',
      ar: 'كم حرفاً في الأبجدية العربية؟',
      en: 'How many letters are there in the Arabic alphabet?',
    },
    options: [
      { id: 'a', text: { fr: '26', ar: '٢٦', en: '26' } },
      { id: 'b', text: { fr: '28', ar: '٢٨', en: '28' } },
      { id: 'c', text: { fr: '29', ar: '٢٩', en: '29' } },
      { id: 'd', text: { fr: '30', ar: '٣٠', en: '30' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'L\'alphabet arabe contient 28 lettres (ou 29 si on compte le hamza ء comme lettre distincte). Chaque lettre a un point d\'articulation (makhraj) et des caractéristiques (sifat) spécifiques.',
      ar: 'الأبجدية العربية تحتوي 28 حرفاً (أو 29 إذا اعتبرنا الهمزة حرفاً مستقلاً). لكل حرف مخرج وصفات خاصة.',
      en: 'The Arabic alphabet contains 28 letters (or 29 if counting hamza ء as a distinct letter). Each letter has a specific articulation point (makhraj) and characteristics (sifat).',
    },
    reference: {
      courseSlug: 'introduction-tajweed',
      lessonId: '001-introduction',
    },
    points: 10,
    tags: ['tajweed', 'alphabet', 'huruf'],
  },
  {
    id: 'tajweed-q003',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Qu\'est-ce qu\'un "makhraj" (مخرج) ?',
      ar: 'ما هو "المخرج"؟',
      en: 'What is a "makhraj"?',
    },
    options: [
      { id: 'a', text: { fr: 'Une sortie de mosquée', ar: 'مخرج المسجد', en: 'A mosque exit' } },
      { id: 'b', text: { fr: 'Le point d\'articulation d\'une lettre', ar: 'موضع نطق الحرف', en: 'The articulation point of a letter' } },
      { id: 'c', text: { fr: 'Un type de pause', ar: 'نوع من الوقف', en: 'A type of pause' } },
      { id: 'd', text: { fr: 'Une voyelle longue', ar: 'حركة طويلة', en: 'A long vowel' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Makhraj (pl. makhaarij) est l\'endroit dans la bouche/gorge d\'où sort le son de la lettre. Il y a 5 zones principales : gorge (halq), langue (lisan), lèvres (shafatayn), cavité nasale (khayshum), et bouche (jawf).',
      ar: 'المخرج (ج. مخارج) هو موضع خروج صوت الحرف في الفم/الحلق. هناك 5 مناطق رئيسية: الحلق، اللسان، الشفتين، الخيشوم، والجوف.',
      en: 'Makhraj (pl. makhaarij) is the place in the mouth/throat where a letter\'s sound originates. There are 5 main areas: throat (halq), tongue (lisan), lips (shafatayn), nasal cavity (khayshum), and mouth (jawf).',
    },
    reference: {
      courseSlug: 'introduction-tajweed',
      lessonId: '002-makhaarij',
    },
    points: 10,
    tags: ['tajweed', 'makhraj', 'articulation'],
  },
  {
    id: 'tajweed-q004',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'Apprendre le tajweed est une obligation (fard) pour réciter le Coran correctement.',
      ar: 'تعلم التجويد فرض لقراءة القرآن بشكل صحيح.',
      en: 'Learning tajweed is an obligation (fard) to recite the Quran correctly.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'Selon les savants, appliquer le tajweed est fard \'ayn (obligation individuelle) car changer une lettre peut changer le sens. Allah dit : "Récite le Coran lentement et distinctement" (73:4).',
      ar: 'عند العلماء تطبيق التجويد فرض عين لأن تغيير حرف قد يغير المعنى. قال الله: "ورتل القرآن ترتيلاً" (73:4).',
      en: 'According to scholars, applying tajweed is fard \'ayn (individual obligation) because changing a letter can change the meaning. Allah says: "Recite the Quran slowly and distinctly" (73:4).',
    },
    reference: {
      courseSlug: 'introduction-tajweed',
      lessonId: '001-introduction',
    },
    points: 10,
    tags: ['tajweed', 'hukm', 'fard'],
  },
  {
    id: 'tajweed-q005',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quelles sont les trois voyelles courtes (harakaat) en arabe ?',
      ar: 'ما هي الحركات الثلاث القصيرة في العربية؟',
      en: 'What are the three short vowels (harakaat) in Arabic?',
    },
    options: [
      { id: 'a', text: { fr: 'Alif, Waw, Ya', ar: 'ألف، واو، ياء', en: 'Alif, Waw, Ya' } },
      { id: 'b', text: { fr: 'Fatha, Kasra, Damma', ar: 'فتحة، كسرة، ضمة', en: 'Fatha, Kasra, Damma' } },
      { id: 'c', text: { fr: 'Sukun, Shadda, Tanwin', ar: 'سكون، شدة، تنوين', en: 'Sukun, Shadda, Tanwin' } },
      { id: 'd', text: { fr: 'Madd, Qalqala, Ghunna', ar: 'مد، قلقلة، غنة', en: 'Madd, Qalqala, Ghunna' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les 3 voyelles courtes sont : Fatha (ـَ) son "a", Kasra (ـِ) son "i", Damma (ـُ) son "u". Elles durent 1 temps (haraka). Leurs versions longues utilisent Alif, Ya, Waw.',
      ar: 'الحركات الثلاث القصيرة: الفتحة (ـَ) صوت "أ"، الكسرة (ـِ) صوت "إ"، الضمة (ـُ) صوت "أُ". تدوم حركة واحدة. نظائرها الطويلة تستخدم الألف والياء والواو.',
      en: 'The 3 short vowels are: Fatha (ـَ) "a" sound, Kasra (ـِ) "i" sound, Damma (ـُ) "u" sound. They last 1 beat (haraka). Their long versions use Alif, Ya, Waw.',
    },
    reference: {
      courseSlug: 'introduction-tajweed',
      lessonId: '001-introduction',
    },
    points: 10,
    tags: ['tajweed', 'harakaat', 'vowels'],
  },

  // --- Questions Moyennes (6) ---
  {
    id: 'tajweed-q006',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que "Idghaam" (إدغام) ?',
      ar: 'ما هو "الإدغام"؟',
      en: 'What is "Idghaam"?',
    },
    options: [
      { id: 'a', text: { fr: 'Prolonger une voyelle', ar: 'إطالة الحركة', en: 'Prolonging a vowel' } },
      { id: 'b', text: { fr: 'Fusionner/assimiler une lettre dans la suivante', ar: 'دمج حرف في الذي يليه', en: 'Merging/assimilating a letter into the next one' } },
      { id: 'c', text: { fr: 'Cacher une lettre', ar: 'إخفاء حرف', en: 'Hiding a letter' } },
      { id: 'd', text: { fr: 'Prononcer clairement', ar: 'النطق الواضح', en: 'Pronouncing clearly' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Idghaam signifie fusionner/assimiler le nun sakin ou tanwin dans la lettre suivante. Il y a Idghaam avec ghunna (يرملون - YRNMWN sauf L et R) et sans ghunna (L et R uniquement).',
      ar: 'الإدغام يعني إدماج النون الساكنة أو التنوين في الحرف التالي. هناك إدغام بغنة (يرملون ما عدا ل و ر) وبدون غنة (ل و ر فقط).',
      en: 'Idghaam means merging/assimilating nun sakin or tanwin into the following letter. There\'s Idghaam with ghunna (YRNMWN letters except L and R) and without ghunna (L and R only).',
    },
    reference: {
      courseSlug: 'introduction-tajweed',
      lessonId: '003-nun-rules',
    },
    points: 15,
    tags: ['tajweed', 'idghaam', 'nun-sakin'],
  },
  {
    id: 'tajweed-q007',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que "Ikhfaa" (إخفاء) ?',
      ar: 'ما هو "الإخفاء"؟',
      en: 'What is "Ikhfaa"?',
    },
    options: [
      { id: 'a', text: { fr: 'Prononcer clairement le nun', ar: 'النطق الواضح للنون', en: 'Pronouncing nun clearly' } },
      { id: 'b', text: { fr: 'Convertir le nun en mim', ar: 'تحويل النون إلى ميم', en: 'Converting nun to mim' } },
      { id: 'c', text: { fr: 'Cacher le nun avec une nasalisation légère', ar: 'إخفاء النون مع غنة خفيفة', en: 'Hiding nun with a light nasalization' } },
      { id: 'd', text: { fr: 'Fusionner le nun complètement', ar: 'دمج النون بالكامل', en: 'Merging nun completely' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Ikhfaa (cacher) s\'applique quand nun sakin/tanwin est suivi par une des 15 lettres d\'Ikhfaa. Le nun est "caché" - ni prononcé clairement ni fusionné, avec une ghunna de 2 temps.',
      ar: 'الإخفاء يُطبق عندما تأتي النون الساكنة/التنوين قبل إحدى حروف الإخفاء الـ15. النون "يُخفى" - لا يُظهر ولا يُدغم، مع غنة بمقدار حركتين.',
      en: 'Ikhfaa (hiding) applies when nun sakin/tanwin is followed by one of the 15 Ikhfaa letters. The nun is "hidden" - neither pronounced clearly nor merged, with a 2-beat ghunna.',
    },
    reference: {
      courseSlug: 'introduction-tajweed',
      lessonId: '003-nun-rules',
    },
    points: 15,
    tags: ['tajweed', 'ikhfaa', 'nun-sakin'],
  },
  {
    id: 'tajweed-q008',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que "Qalqala" (قلقلة) ?',
      ar: 'ما هي "القلقلة"؟',
      en: 'What is "Qalqala"?',
    },
    options: [
      { id: 'a', text: { fr: 'Une vibration/rebond sur les lettres ق ط ب ج د', ar: 'اهتزاز/نبرة على حروف قطب جد', en: 'A vibration/bounce on letters ق ط ب ج د' } },
      { id: 'b', text: { fr: 'Une pause obligatoire', ar: 'وقف إجباري', en: 'A mandatory pause' } },
      { id: 'c', text: { fr: 'Un allongement de voyelle', ar: 'إطالة الحركة', en: 'A vowel elongation' } },
      { id: 'd', text: { fr: 'Une nasalisation', ar: 'غنة', en: 'A nasalization' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Qalqala (secousse) est un léger rebond/écho sur les 5 lettres قطب جد quand elles portent sukun. Elle est plus forte en fin de mot (qalqala kubra) et légère au milieu (qalqala sughra).',
      ar: 'القلقلة (الاضطراب) هي نبرة/صدى خفيف على حروف قطب جد عندما تكون ساكنة. أقوى في آخر الكلمة (كبرى) وأخف في وسطها (صغرى).',
      en: 'Qalqala (shaking) is a slight bounce/echo on the 5 letters قطب جد when they have sukun. It\'s stronger at word end (qalqala kubra) and lighter in the middle (qalqala sughra).',
    },
    reference: {
      courseSlug: 'introduction-tajweed',
      lessonId: '002-makhaarij',
    },
    points: 15,
    tags: ['tajweed', 'qalqala', 'sifaat'],
  },
  {
    id: 'tajweed-q009',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelle est la durée du "Madd Tabee\'i" (مد طبيعي) ?',
      ar: 'ما مدة "المد الطبيعي"؟',
      en: 'What is the duration of "Madd Tabee\'i"?',
    },
    options: [
      { id: 'a', text: { fr: '1 temps', ar: 'حركة واحدة', en: '1 beat' } },
      { id: 'b', text: { fr: '2 temps (harakatayn)', ar: 'حركتان', en: '2 beats (harakatayn)' } },
      { id: 'c', text: { fr: '4 temps', ar: '4 حركات', en: '4 beats' } },
      { id: 'd', text: { fr: '6 temps', ar: '6 حركات', en: '6 beats' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Madd Tabee\'i (naturel/originel) dure 2 temps (harakatayn). C\'est l\'allongement de base sur Alif après fatha, Waw sakin après damma, ou Ya sakin après kasra, sans hamza/sukun après.',
      ar: 'المد الطبيعي يدوم حركتين. هو الإطالة الأساسية على الألف بعد فتحة، الواو الساكنة بعد ضمة، أو الياء الساكنة بعد كسرة، بدون همزة/سكون بعدها.',
      en: 'Madd Tabee\'i (natural/original) lasts 2 beats (harakatayn). It\'s the basic elongation on Alif after fatha, Waw sakin after damma, or Ya sakin after kasra, without hamza/sukun after.',
    },
    reference: {
      courseSlug: 'introduction-tajweed',
      lessonId: '003-nun-rules',
    },
    points: 15,
    tags: ['tajweed', 'madd', 'tabii'],
  },
  {
    id: 'tajweed-q010',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que "Iqlab" (إقلاب) ?',
      ar: 'ما هو "الإقلاب"؟',
      en: 'What is "Iqlab"?',
    },
    options: [
      { id: 'a', text: { fr: 'Convertir le nun sakin en mim devant la lettre ب', ar: 'تحويل النون الساكنة إلى ميم قبل حرف ب', en: 'Converting nun sakin to mim before letter ب' } },
      { id: 'b', text: { fr: 'Fusionner deux lettres identiques', ar: 'دمج حرفين متماثلين', en: 'Merging two identical letters' } },
      { id: 'c', text: { fr: 'Retourner à la première lettre', ar: 'الرجوع للحرف الأول', en: 'Returning to the first letter' } },
      { id: 'd', text: { fr: 'Prononcer clairement', ar: 'الإظهار', en: 'Pronouncing clearly' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Iqlab (conversion) s\'applique quand nun sakin/tanwin est suivi par ب. Le nun devient mim (car mim et ba ont le même makhraj - les lèvres) avec une ghunna de 2 temps. Ex: من بعد → مم بعد.',
      ar: 'الإقلاب يُطبق عندما تأتي النون الساكنة/التنوين قبل ب. تتحول النون إلى ميم (لأن الميم والباء لهما نفس المخرج - الشفتان) مع غنة بمقدار حركتين.',
      en: 'Iqlab (conversion) applies when nun sakin/tanwin is followed by ب. The nun becomes mim (as mim and ba share the same makhraj - lips) with a 2-beat ghunna. Ex: من بعد → مم بعد.',
    },
    reference: {
      courseSlug: 'introduction-tajweed',
      lessonId: '003-nun-rules',
    },
    points: 15,
    tags: ['tajweed', 'iqlab', 'nun-sakin'],
  },
  {
    id: 'tajweed-q011',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que "Izhar" (إظهار) ?',
      ar: 'ما هو "الإظهار"؟',
      en: 'What is "Izhar"?',
    },
    options: [
      { id: 'a', text: { fr: 'Cacher la lettre', ar: 'إخفاء الحرف', en: 'Hiding the letter' } },
      { id: 'b', text: { fr: 'Prononcer clairement le nun devant les lettres de gorge', ar: 'النطق الواضح للنون قبل حروف الحلق', en: 'Pronouncing nun clearly before throat letters' } },
      { id: 'c', text: { fr: 'Fusionner les lettres', ar: 'دمج الحروف', en: 'Merging letters' } },
      { id: 'd', text: { fr: 'Allonger la voyelle', ar: 'إطالة الحركة', en: 'Elongating the vowel' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Izhar (manifestation claire) s\'applique quand nun sakin/tanwin est suivi par une des 6 lettres de gorge : ء هـ ع ح غ خ. Le nun est prononcé clairement, sans ghunna supplémentaire.',
      ar: 'الإظهار يُطبق عندما تأتي النون الساكنة/التنوين قبل أحد حروف الحلق الستة: ء هـ ع ح غ خ. النون يُنطق بوضوح، بدون غنة زائدة.',
      en: 'Izhar (clear pronunciation) applies when nun sakin/tanwin is followed by one of the 6 throat letters: ء هـ ع ح غ خ. The nun is pronounced clearly, without extra ghunna.',
    },
    reference: {
      courseSlug: 'introduction-tajweed',
      lessonId: '003-nun-rules',
    },
    points: 15,
    tags: ['tajweed', 'izhar', 'nun-sakin'],
  },

  // --- Questions Difficiles (4) ---
  {
    id: 'tajweed-q012',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle est la différence entre "Tafkhim" et "Tarqiq" ?',
      ar: 'ما الفرق بين "التفخيم" و"الترقيق"؟',
      en: 'What is the difference between "Tafkhim" and "Tarqiq"?',
    },
    options: [
      { id: 'a', text: { fr: 'Tafkhim = son épais/lourd, Tarqiq = son fin/léger', ar: 'التفخيم = صوت غليظ، الترقيق = صوت رقيق', en: 'Tafkhim = thick/heavy sound, Tarqiq = thin/light sound' } },
      { id: 'b', text: { fr: 'Tafkhim = court, Tarqiq = long', ar: 'التفخيم = قصير، الترقيق = طويل', en: 'Tafkhim = short, Tarqiq = long' } },
      { id: 'c', text: { fr: 'Tafkhim = nasalisé, Tarqiq = non nasalisé', ar: 'التفخيم = بغنة، الترقيق = بدون غنة', en: 'Tafkhim = nasalized, Tarqiq = not nasalized' } },
      { id: 'd', text: { fr: 'Ils sont synonymes', ar: 'مترادفان', en: 'They are synonyms' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Tafkhim (emphase) donne un son épais/lourd - appliqué aux lettres d\'emphase (خص ضغط قظ + ر et ل dans certains cas). Tarqiq donne un son fin/léger - pour les autres lettres.',
      ar: 'التفخيم يُعطي صوتاً غليظاً - يُطبق على حروف الاستعلاء (خص ضغط قظ + ر و ل في حالات). الترقيق يُعطي صوتاً رقيقاً - لباقي الحروف.',
      en: 'Tafkhim (emphasis) gives a thick/heavy sound - applied to emphatic letters (خص ضغط قظ + ر and ل in some cases). Tarqiq gives a thin/light sound - for other letters.',
    },
    reference: {
      courseSlug: 'introduction-tajweed',
      lessonId: '002-makhaarij',
    },
    points: 20,
    tags: ['tajweed', 'tafkhim', 'tarqiq'],
  },
  {
    id: 'tajweed-q013',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quand la lettre "ر" (Ra) est-elle prononcée avec Tafkhim (emphase) ?',
      ar: 'متى تُنطق حرف "الراء" بالتفخيم؟',
      en: 'When is the letter "ر" (Ra) pronounced with Tafkhim (emphasis)?',
    },
    options: [
      { id: 'a', text: { fr: 'Toujours', ar: 'دائماً', en: 'Always' } },
      { id: 'b', text: { fr: 'Jamais', ar: 'أبداً', en: 'Never' } },
      { id: 'c', text: { fr: 'Quand elle a fatha/damma, ou sukun après fatha/damma', ar: 'عندما عليها فتحة/ضمة، أو ساكنة بعد فتحة/ضمة', en: 'When it has fatha/damma, or sukun after fatha/damma' } },
      { id: 'd', text: { fr: 'Seulement en début de mot', ar: 'فقط في بداية الكلمة', en: 'Only at word beginning' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Ra a Tafkhim quand : 1) Elle a fatha ou damma (رَ رُ), 2) Elle a sukun après fatha/damma (أَرْض، قُرْآن), 3) Elle a sukun après kasra accidentel avec lettre d\'emphase après. Sinon, Tarqiq.',
      ar: 'الراء مفخمة عندما: 1) عليها فتحة أو ضمة (رَ رُ)، 2) ساكنة بعد فتحة/ضمة (أَرْض، قُرْآن)، 3) ساكنة بعد كسرة عارضة مع حرف استعلاء بعدها. وإلا فمرققة.',
      en: 'Ra has Tafkhim when: 1) It has fatha or damma (رَ رُ), 2) It has sukun after fatha/damma (أَرْض، قُرْآن), 3) It has sukun after accidental kasra with emphatic letter after. Otherwise, Tarqiq.',
    },
    reference: {
      courseSlug: 'introduction-tajweed',
      lessonId: '002-makhaarij',
    },
    points: 20,
    tags: ['tajweed', 'ra', 'tafkhim'],
  },
  {
    id: 'tajweed-q014',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Combien de durées possibles y a-t-il pour "Madd Muttasil" (مد متصل) ?',
      ar: 'كم مدة ممكنة لـ"المد المتصل"؟',
      en: 'How many possible durations are there for "Madd Muttasil"?',
    },
    options: [
      { id: 'a', text: { fr: '2 temps seulement', ar: 'حركتان فقط', en: '2 beats only' } },
      { id: 'b', text: { fr: '4 ou 5 temps (selon la riwaya)', ar: '4 أو 5 حركات (حسب الرواية)', en: '4 or 5 beats (according to riwaya)' } },
      { id: 'c', text: { fr: '6 temps obligatoire', ar: '6 حركات إجبارياً', en: '6 beats mandatory' } },
      { id: 'd', text: { fr: 'Variable selon le lecteur', ar: 'متغير حسب القارئ', en: 'Variable according to reader' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Madd Muttasil (connecté) - quand hamza suit madd dans le même mot (ex: جَاءَ، سُوءٌ) - dure 4 ou 5 temps selon la riwaya. Pour Hafs \'an Asim, c\'est généralement 4 ou 5 temps.',
      ar: 'المد المتصل - عندما تأتي همزة بعد حرف المد في نفس الكلمة (مثل: جَاءَ، سُوءٌ) - مدته 4 أو 5 حركات حسب الرواية. لحفص عن عاصم، عادة 4 أو 5 حركات.',
      en: 'Madd Muttasil (connected) - when hamza follows madd letter in same word (e.g., جَاءَ، سُوءٌ) - lasts 4 or 5 beats depending on riwaya. For Hafs \'an Asim, it\'s usually 4 or 5 beats.',
    },
    reference: {
      courseSlug: 'introduction-tajweed',
      lessonId: '003-nun-rules',
    },
    points: 20,
    tags: ['tajweed', 'madd', 'muttasil'],
  },
  {
    id: 'tajweed-q015',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qu\'est-ce que "Ghunna" (غنة) et quelle est sa durée standard ?',
      ar: 'ما هي "الغنة" وما مدتها القياسية؟',
      en: 'What is "Ghunna" and what is its standard duration?',
    },
    options: [
      { id: 'a', text: { fr: 'Un son de gorge, 1 temps', ar: 'صوت حلقي، حركة واحدة', en: 'A throat sound, 1 beat' } },
      { id: 'b', text: { fr: 'Une nasalisation, 2 temps (harakatayn)', ar: 'غنة أنفية، حركتان', en: 'A nasalization, 2 beats (harakatayn)' } },
      { id: 'c', text: { fr: 'Un allongement, 4 temps', ar: 'إطالة، 4 حركات', en: 'An elongation, 4 beats' } },
      { id: 'd', text: { fr: 'Un rebond, 3 temps', ar: 'نبرة، 3 حركات', en: 'A bounce, 3 beats' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Ghunna est un son nasal produit dans le khayshum (cavité nasale). Elle apparaît naturellement avec ن et م, et dure 2 temps (harakatayn) dans Idghaam, Ikhfaa, et Iqlab.',
      ar: 'الغنة صوت أنفي يخرج من الخيشوم (تجويف الأنف). تظهر طبيعياً مع النون والميم، ومدتها حركتان في الإدغام والإخفاء والإقلاب.',
      en: 'Ghunna is a nasal sound produced in the khayshum (nasal cavity). It appears naturally with ن and م, and lasts 2 beats (harakatayn) in Idghaam, Ikhfaa, and Iqlab.',
    },
    reference: {
      courseSlug: 'introduction-tajweed',
      lessonId: '003-nun-rules',
    },
    points: 20,
    tags: ['tajweed', 'ghunna', 'nun-mim'],
  },
];

// ============================================
// Export du Quiz
// ============================================

export const quizTajweed: Quiz = {
  id: 'quiz-tajweed-basics',
  type: 'module',
  courseSlug: 'introduction-tajweed',
  title: {
    fr: 'Quiz : Bases du Tajweed',
    ar: 'اختبار: أساسيات التجويد',
    en: 'Quiz: Tajweed Basics',
  },
  description: {
    fr: 'Testez vos connaissances sur les règles fondamentales de récitation du Coran.',
    ar: 'اختبر معلوماتك عن القواعد الأساسية لتلاوة القرآن.',
    en: 'Test your knowledge of the fundamental rules of Quran recitation.',
  },
  instructions: {
    fr: 'Maîtrisez les makhaarij, les règles de nun/mim, et les types de madd.',
    ar: 'أتقن المخارج وأحكام النون والميم وأنواع المد.',
    en: 'Master the makhaarij, nun/mim rules, and types of madd.',
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

export default quizTajweed;
