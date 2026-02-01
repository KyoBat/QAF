/**
 * Examen Final - Histoire des 4 Imams
 * 
 * 32 questions QCM couvrant :
 * - Imam Abu Hanifa (80-150 H)
 * - Imam Malik ibn Anas (93-179 H)
 * - Imam ash-Shafi'i (150-204 H)
 * - Imam Ahmad ibn Hanbal (164-241 H)
 * - Leurs méthodologies et contributions
 */

import { ExamConfig, ExamQuestion } from '../types';

// ============================================
// Questions - Imam Abu Hanifa
// ============================================

const abuHanifaQuestions: ExamQuestion[] = [
  {
    id: 'imams-hanifa-001',
    question: {
      fr: 'Quel est le nom complet de l\'Imam Abu Hanifa ?',
      ar: 'ما الاسم الكامل للإمام أبي حنيفة؟',
      en: 'What is the full name of Imam Abu Hanifa?',
    },
    options: [
      { id: 'a', text: { fr: 'Muhammad ibn Idris', ar: 'محمد بن إدريس', en: 'Muhammad ibn Idris' } },
      { id: 'b', text: { fr: 'Nu\'man ibn Thabit ibn Zuta', ar: 'النعمان بن ثابت بن زوطا', en: 'Nu\'man ibn Thabit ibn Zuta' } },
      { id: 'c', text: { fr: 'Malik ibn Anas', ar: 'مالك بن أنس', en: 'Malik ibn Anas' } },
      { id: 'd', text: { fr: 'Ahmad ibn Muhammad', ar: 'أحمد بن محمد', en: 'Ahmad ibn Muhammad' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Abu Hanifa an-Nu\'man ibn Thabit (80-150 H / 699-767 CE) est né à Kufa. Son grand-père était persan.',
      ar: 'أبو حنيفة النعمان بن ثابت (80-150 هـ / 699-767 م) وُلد في الكوفة. وكان جده فارسيًا.',
      en: 'Abu Hanifa an-Nu\'man ibn Thabit (80-150 AH / 699-767 CE) was born in Kufa. His grandfather was Persian.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'abu-hanifa',
  },
  {
    id: 'imams-hanifa-002',
    question: {
      fr: 'Pourquoi Abu Hanifa est-il surnommé "Al-Imam al-A\'zam" (le Plus Grand Imam) ?',
      ar: 'لماذا لُقب أبو حنيفة بـ "الإمام الأعظم"؟',
      en: 'Why is Abu Hanifa nicknamed "Al-Imam al-A\'zam" (the Greatest Imam)?',
    },
    options: [
      { id: 'a', text: { fr: 'Pionnier du Fiqh systématique et de la méthodologie Ahl ar-Ra\'y', ar: 'رائد الفقه المنهجي ومنهج أهل الرأي', en: 'Pioneer of systematic Fiqh and Ahl ar-Ra\'y methodology' } },
      { id: 'b', text: { fr: 'Car il était le plus âgé', ar: 'لأنه كان الأكبر سنًا', en: 'Because he was the oldest' } },
      { id: 'c', text: { fr: 'Car il a compilé le plus de hadiths', ar: 'لأنه جمع أكثر الأحاديث', en: 'Because he compiled the most hadiths' } },
      { id: 'd', text: { fr: 'Car il était gouverneur', ar: 'لأنه كان حاكمًا', en: 'Because he was a governor' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Il fut le premier à organiser le Fiqh en chapitres (Kitab at-Tahara, Kitab as-Salat...). Il utilisait le Qiyas (analogie) et l\'Istihsan de manière méthodique.',
      ar: 'كان أول من رتّب الفقه في أبواب (كتاب الطهارة، كتاب الصلاة...). واستخدم القياس والاستحسان بشكل منهجي.',
      en: 'He was first to organize Fiqh in chapters (Kitab at-Tahara, Kitab as-Salat...). He used Qiyas (analogy) and Istihsan methodically.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'abu-hanifa',
  },
  {
    id: 'imams-hanifa-003',
    question: {
      fr: 'Quelle était la profession initiale d\'Abu Hanifa ?',
      ar: 'ما كانت مهنة أبي حنيفة الأولى؟',
      en: 'What was Abu Hanifa\'s initial profession?',
    },
    options: [
      { id: 'a', text: { fr: 'Agriculteur', ar: 'مزارع', en: 'Farmer' } },
      { id: 'b', text: { fr: 'Forgeron', ar: 'حداد', en: 'Blacksmith' } },
      { id: 'c', text: { fr: 'Marchand de tissus (Khazzaz)', ar: 'تاجر أقمشة (خزّاز)', en: 'Cloth merchant (Khazzaz)' } },
      { id: 'd', text: { fr: 'Soldat', ar: 'جندي', en: 'Soldier' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Il était un riche marchand de soie. Cette expérience commerciale a enrichi son Fiqh des Mu\'amalat (transactions).',
      ar: 'كان تاجرًا ثريًا في الحرير. وقد أثرت خبرته التجارية في فقهه للمعاملات.',
      en: 'He was a wealthy silk merchant. This business experience enriched his Fiqh of Mu\'amalat (transactions).',
    },
    points: 2,
    difficulty: 'medium',
    category: 'abu-hanifa',
  },
  {
    id: 'imams-hanifa-004',
    question: {
      fr: 'Qui sont les deux principaux élèves d\'Abu Hanifa qui ont codifié son école ?',
      ar: 'من أبرز تلميذَي أبي حنيفة اللذين دوّنا مذهبه؟',
      en: 'Who are the two main students of Abu Hanifa who codified his school?',
    },
    options: [
      { id: 'a', text: { fr: 'Bukhari et Muslim', ar: 'البخاري ومسلم', en: 'Bukhari and Muslim' } },
      { id: 'b', text: { fr: 'Ibn Taymiyya et Ibn Qayyim', ar: 'ابن تيمية وابن القيم', en: 'Ibn Taymiyya and Ibn Qayyim' } },
      { id: 'c', text: { fr: 'Nawawi et Ibn Hajar', ar: 'النووي وابن حجر', en: 'Nawawi and Ibn Hajar' } },
      { id: 'd', text: { fr: 'Abu Yusuf et Muhammad ash-Shaybani', ar: 'أبو يوسف ومحمد الشيباني', en: 'Abu Yusuf and Muhammad ash-Shaybani' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Abu Yusuf devint le premier Qadi al-Qudat (Grand Juge) et écrivit "Al-Kharaj". Ash-Shaybani écrivit les livres du Zahir ar-Riwaya.',
      ar: 'أبو يوسف صار أول قاضي القضاة وألف "الخراج". والشيباني ألف كتب ظاهر الرواية.',
      en: 'Abu Yusuf became first Qadi al-Qudat (Chief Judge) and wrote "Al-Kharaj". Ash-Shaybani wrote the Zahir ar-Riwaya books.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'abu-hanifa',
  },
];

// ============================================
// Questions - Imam Malik
// ============================================

const malikQuestions: ExamQuestion[] = [
  {
    id: 'imams-malik-001',
    question: {
      fr: 'Où l\'Imam Malik a-t-il vécu toute sa vie ?',
      ar: 'أين عاش الإمام مالك طوال حياته؟',
      en: 'Where did Imam Malik live his entire life?',
    },
    options: [
      { id: 'a', text: { fr: 'Bagdad', ar: 'بغداد', en: 'Baghdad' } },
      { id: 'b', text: { fr: 'Médine (al-Madinah al-Munawwarah)', ar: 'المدينة المنورة', en: 'Medina (al-Madinah al-Munawwarah)' } },
      { id: 'c', text: { fr: 'La Mecque', ar: 'مكة', en: 'Mecca' } },
      { id: 'd', text: { fr: 'Damas', ar: 'دمشق', en: 'Damascus' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Malik (93-179 H) est né, a vécu et est mort à Médine. C\'est pourquoi il valorisait tant la pratique des Médinois (\'Amal Ahl al-Madina).',
      ar: 'مالك (93-179 هـ) وُلد وعاش وتوفي في المدينة. ولذلك عظّم عمل أهل المدينة كمصدر تشريعي.',
      en: 'Malik (93-179 AH) was born, lived and died in Medina. That\'s why he valued the practice of Medinans (\'Amal Ahl al-Madina).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'malik',
  },
  {
    id: 'imams-malik-002',
    question: {
      fr: 'Quel est le livre majeur de l\'Imam Malik ?',
      ar: 'ما الكتاب الرئيسي للإمام مالك؟',
      en: 'What is Imam Malik\'s major book?',
    },
    options: [
      { id: 'a', text: { fr: 'Al-Muwatta\' (Le Chemin Aplani)', ar: 'الموطأ', en: 'Al-Muwatta\' (The Well-Trodden Path)' } },
      { id: 'b', text: { fr: 'Sahih Muslim', ar: 'صحيح مسلم', en: 'Sahih Muslim' } },
      { id: 'c', text: { fr: 'Al-Musnad', ar: 'المسند', en: 'Al-Musnad' } },
      { id: 'd', text: { fr: 'Ar-Risala', ar: 'الرسالة', en: 'Ar-Risala' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Al-Muwatta\' est le premier livre de Fiqh et de Hadith organisé par chapitres. Ash-Shafi\'i a dit : "Après le Coran, il n\'y a pas de livre plus bénéfique."',
      ar: 'الموطأ أول كتاب منظم في الفقه والحديث. قال الشافعي: "ما بعد القرآن كتاب أنفع من الموطأ."',
      en: 'Al-Muwatta\' is the first book of Fiqh and Hadith organized by chapters. Ash-Shafi\'i said: "After the Quran, there is no more beneficial book."',
    },
    points: 2,
    difficulty: 'easy',
    category: 'malik',
  },
  {
    id: 'imams-malik-003',
    question: {
      fr: 'Qu\'est-ce que le "\'Amal Ahl al-Madina" utilisé par Malik ?',
      ar: 'ما هو "عمل أهل المدينة" عند مالك؟',
      en: 'What is "\'Amal Ahl al-Madina" used by Malik?',
    },
    options: [
      { id: 'a', text: { fr: 'Les opinions des philosophes', ar: 'آراء الفلاسفة', en: 'Philosophers\' opinions' } },
      { id: 'b', text: { fr: 'Les rêves des pieux', ar: 'أحلام الصالحين', en: 'Dreams of the pious' } },
      { id: 'c', text: { fr: 'La pratique transmise des habitants de Médine, considérée comme preuve juridique', ar: 'العمل المتوارث لأهل المدينة، يُعتبر حجة شرعية', en: 'Transmitted practice of Medina\'s people, considered legal proof' } },
      { id: 'd', text: { fr: 'L\'opinion du calife', ar: 'رأي الخليفة', en: 'Caliph\'s opinion' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Malik considérait que la pratique continue des Médinois équivalait à des milliers de chaînes de transmission, car ils apprenaient de leurs pères qui apprenaient des Compagnons.',
      ar: 'رأى مالك أن العمل المتوارث في المدينة يعادل آلاف الأسانيد، إذ تعلموا من آبائهم عن الصحابة.',
      en: 'Malik considered that continuous practice of Medinans equaled thousands of chains, as they learned from fathers who learned from Companions.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'malik',
  },
  {
    id: 'imams-malik-004',
    question: {
      fr: 'Quelle épreuve l\'Imam Malik a-t-il subie pour avoir émis une fatwa ?',
      ar: 'ما المحنة التي تعرض لها الإمام مالك بسبب فتوى أفتاها؟',
      en: 'What trial did Imam Malik undergo for issuing a fatwa?',
    },
    options: [
      { id: 'a', text: { fr: 'Il a été exilé', ar: 'نُفي', en: 'He was exiled' } },
      { id: 'b', text: { fr: 'Il a été emprisonné à vie', ar: 'سُجن مدى الحياة', en: 'He was imprisoned for life' } },
      { id: 'c', text: { fr: 'Il n\'a subi aucune épreuve', ar: 'لم يتعرض لأي محنة', en: 'He underwent no trial' } },
      { id: 'd', text: { fr: 'Il a été fouetté et son bras fut disloqué', ar: 'جُلد وخُلعت كتفه', en: 'He was whipped and his arm was dislocated' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Pour sa fatwa sur la validité du divorce sous contrainte (le serment forcé n\'engage pas), le gouverneur abbasside l\'a fait fouetter. Malgré cela, il ne changea pas son avis.',
      ar: 'بسبب فتواه في طلاق المُكره (الحلف بالإكراه لا يلزم)، أمر الوالي العباسي بجلده. ورغم ذلك لم يُغير رأيه.',
      en: 'For his fatwa on divorce under duress (forced oath doesn\'t bind), the Abbasid governor had him whipped. Despite this, he didn\'t change his opinion.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'malik',
  },
];

// ============================================
// Questions - Imam ash-Shafi'i
// ============================================

const shafiQuestions: ExamQuestion[] = [
  {
    id: 'imams-shafi-001',
    question: {
      fr: 'Quelle est la particularité de la lignée de l\'Imam ash-Shafi\'i ?',
      ar: 'ما الذي يميز نسب الإمام الشافعي؟',
      en: 'What is special about Imam ash-Shafi\'i\'s lineage?',
    },
    options: [
      { id: 'a', text: { fr: 'Il était persan', ar: 'كان فارسيًا', en: 'He was Persian' } },
      { id: 'b', text: { fr: 'Il était Qurashite, descendant de \'Abd Manaf, ancêtre du Prophète ﷺ', ar: 'قرشي من نسل عبد مناف، جد النبي ﷺ', en: 'Qurashite, descendant of \'Abd Manaf, ancestor of Prophet ﷺ' } },
      { id: 'c', text: { fr: 'Il était yéménite', ar: 'كان يمنيًا', en: 'He was Yemeni' } },
      { id: 'd', text: { fr: 'Il était byzantin', ar: 'كان بيزنطيًا', en: 'He was Byzantine' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Muhammad ibn Idris ash-Shafi\'i (150-204 H) était Hashimite-Muttalibite, cousin éloigné du Prophète ﷺ. Né à Gaza, élevé à la Mecque.',
      ar: 'محمد بن إدريس الشافعي (150-204 هـ) هاشمي مطلبي، ابن عم بعيد للنبي ﷺ. وُلد في غزة ونشأ في مكة.',
      en: 'Muhammad ibn Idris ash-Shafi\'i (150-204 AH) was Hashimite-Muttalibite, distant cousin of Prophet ﷺ. Born in Gaza, raised in Mecca.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'shafi',
  },
  {
    id: 'imams-shafi-002',
    question: {
      fr: 'Quel livre fondamental ash-Shafi\'i a-t-il écrit pour codifier Usul al-Fiqh ?',
      ar: 'ما الكتاب الأساسي الذي ألفه الشافعي لتقنين أصول الفقه؟',
      en: 'What fundamental book did ash-Shafi\'i write to codify Usul al-Fiqh?',
    },
    options: [
      { id: 'a', text: { fr: 'Ar-Risala (L\'Épître)', ar: 'الرسالة', en: 'Ar-Risala (The Epistle)' } },
      { id: 'b', text: { fr: 'Al-Muwatta\'', ar: 'الموطأ', en: 'Al-Muwatta\'' } },
      { id: 'c', text: { fr: 'Al-Kharaj', ar: 'الخراج', en: 'Al-Kharaj' } },
      { id: 'd', text: { fr: 'Al-Ihya\'', ar: 'الإحياء', en: 'Al-Ihya\'' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Ar-Risala est le premier livre d\'Usul al-Fiqh de l\'histoire islamique. Il y expose les règles d\'interprétation des textes, le Qiyas, l\'Ijma\', etc.',
      ar: 'الرسالة أول كتاب في أصول الفقه في التاريخ الإسلامي. شرح فيه قواعد تفسير النصوص والقياس والإجماع وغيرها.',
      en: 'Ar-Risala is the first book of Usul al-Fiqh in Islamic history. He explains rules of text interpretation, Qiyas, Ijma\', etc.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'shafi',
  },
  {
    id: 'imams-shafi-003',
    question: {
      fr: 'Pourquoi parle-t-on du "Madhab ancien" et du "Madhab nouveau" chez Shafi\'i ?',
      ar: 'لماذا يُتحدث عن "المذهب القديم" و"المذهب الجديد" عند الشافعي؟',
      en: 'Why do we speak of "old school" and "new school" for Shafi\'i?',
    },
    options: [
      { id: 'a', text: { fr: 'Il a fondé deux écoles différentes', ar: 'أسس مذهبين مختلفين', en: 'He founded two different schools' } },
      { id: 'b', text: { fr: 'Ses élèves ont créé deux branches', ar: 'تلاميذه أنشأوا فرعين', en: 'His students created two branches' } },
      { id: 'c', text: { fr: 'Il a révisé ses opinions après avoir déménagé en Égypte (Qawl Qadim → Qawl Jadid)', ar: 'راجع آراءه بعد انتقاله إلى مصر (القول القديم ← القول الجديد)', en: 'He revised his opinions after moving to Egypt (Qawl Qadim → Qawl Jadid)' } },
      { id: 'd', text: { fr: 'C\'est une légende', ar: 'إنها أسطورة', en: 'It\'s a legend' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'En Irak (Bagdad) : avis anciens. En Égypte (dernières 5 années) : il révisa ~40% de ses avis en découvrant de nouvelles preuves. Le Jadid prévaut généralement.',
      ar: 'في العراق (بغداد): الأقوال القديمة. وفي مصر (آخر 5 سنوات): راجع ~40% من آرائه باكتشاف أدلة جديدة. والجديد هو المعتمد غالبًا.',
      en: 'In Iraq (Baghdad): old opinions. In Egypt (last 5 years): he revised ~40% of opinions upon discovering new evidence. The Jadid generally prevails.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'shafi',
  },
  {
    id: 'imams-shafi-004',
    question: {
      fr: 'De qui ash-Shafi\'i a-t-il principalement appris ?',
      ar: 'ممن تعلم الشافعي بشكل رئيسي؟',
      en: 'From whom did ash-Shafi\'i mainly learn?',
    },
    options: [
      { id: 'a', text: { fr: 'Ibn Hanbal', ar: 'ابن حنبل', en: 'Ibn Hanbal' } },
      { id: 'b', text: { fr: 'Uniquement des livres', ar: 'من الكتب فقط', en: 'Only from books' } },
      { id: 'c', text: { fr: 'Les philosophes grecs', ar: 'الفلاسفة اليونانيين', en: 'Greek philosophers' } },
      { id: 'd', text: { fr: 'Imam Malik à Médine et les élèves d\'Abu Hanifa en Irak', ar: 'الإمام مالك في المدينة وتلاميذ أبي حنيفة في العراق', en: 'Imam Malik in Medina and Abu Hanifa\'s students in Iraq' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Il mémorisa Al-Muwatta\' et étudia avec Malik pendant ~9 ans. Puis en Irak, il apprit d\'ash-Shaybani (élève d\'Abu Hanifa). Il synthétisa les deux écoles.',
      ar: 'حفظ الموطأ ودرس على يد مالك ~9 سنوات. ثم في العراق تعلم من الشيباني (تلميذ أبي حنيفة). فجمع بين المدرستين.',
      en: 'He memorized Al-Muwatta\' and studied with Malik for ~9 years. Then in Iraq, he learned from ash-Shaybani (Abu Hanifa\'s student). He synthesized both schools.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'shafi',
  },
];

// ============================================
// Questions - Imam Ahmad ibn Hanbal
// ============================================

const ahmadQuestions: ExamQuestion[] = [
  {
    id: 'imams-ahmad-001',
    question: {
      fr: 'Pour quelle épreuve l\'Imam Ahmad est-il célèbre ?',
      ar: 'بأي محنة اشتهر الإمام أحمد؟',
      en: 'For which trial is Imam Ahmad famous?',
    },
    options: [
      { id: 'a', text: { fr: 'Il a été exilé pour une question commerciale', ar: 'نُفي بسبب مسألة تجارية', en: 'He was exiled for a commercial issue' } },
      { id: 'b', text: { fr: 'La Mihna : il refusa de dire que le Coran est créé et fut emprisonné et torturé', ar: 'المحنة: رفض القول بخلق القرآن فسُجن وعُذب', en: 'The Mihna: he refused to say Quran is created and was imprisoned and tortured' } },
      { id: 'c', text: { fr: 'Il a été accusé de vol', ar: 'اتُّهم بالسرقة', en: 'He was accused of theft' } },
      { id: 'd', text: { fr: 'Il n\'a jamais subi d\'épreuve', ar: 'لم يتعرض لأي محنة', en: 'He never faced trial' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Sous les califes Ma\'mun, Mu\'tasim et Wathiq (218-232 H), Ahmad résista à la doctrine mu\'tazilite du Coran créé. Il fut battu et emprisonné ~2 ans.',
      ar: 'في عهد المأمون والمعتصم والواثق (218-232 هـ)، قاوم أحمد عقيدة خلق القرآن المعتزلية. ضُرب وسُجن ~سنتين.',
      en: 'Under caliphs Ma\'mun, Mu\'tasim and Wathiq (218-232 AH), Ahmad resisted Mu\'tazilite doctrine of created Quran. He was beaten and imprisoned ~2 years.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'ahmad',
  },
  {
    id: 'imams-ahmad-002',
    question: {
      fr: 'Quel est le livre majeur compilé par l\'Imam Ahmad ?',
      ar: 'ما الكتاب الرئيسي الذي جمعه الإمام أحمد؟',
      en: 'What is the major book compiled by Imam Ahmad?',
    },
    options: [
      { id: 'a', text: { fr: 'Al-Musnad (recueil de ~30,000 hadiths classés par Compagnon)', ar: 'المسند (جمع ~30,000 حديث مرتب بحسب الصحابي)', en: 'Al-Musnad (~30,000 hadiths classified by Companion)' } },
      { id: 'b', text: { fr: 'Sahih Ahmad', ar: 'صحيح أحمد', en: 'Sahih Ahmad' } },
      { id: 'c', text: { fr: 'Al-Muwatta\'', ar: 'الموطأ', en: 'Al-Muwatta\'' } },
      { id: 'd', text: { fr: 'Ar-Risala', ar: 'الرسالة', en: 'Ar-Risala' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Al-Musnad d\'Ahmad est le plus grand recueil de hadiths organisé par narrateur (Musnad = à chaîne remontante). Il contient des hadiths sahih, hasan et da\'if.',
      ar: 'مسند أحمد أكبر مجموعة حديثية مرتبة بحسب الراوي (مسند = متصل السند). ويحتوي أحاديث صحيحة وحسنة وضعيفة.',
      en: 'Ahmad\'s Musnad is largest hadith collection organized by narrator (Musnad = connected chain). It contains sahih, hasan and da\'if hadiths.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'ahmad',
  },
  {
    id: 'imams-ahmad-003',
    question: {
      fr: 'Quelle est la caractéristique méthodologique principale du Madhab Hanbali ?',
      ar: 'ما الخصيصة المنهجية الرئيسية للمذهب الحنبلي؟',
      en: 'What is the main methodological characteristic of Hanbali school?',
    },
    options: [
      { id: 'a', text: { fr: 'Utilisation massive du Ra\'y (opinion)', ar: 'استخدام مكثف للرأي', en: 'Extensive use of Ra\'y (opinion)' } },
      { id: 'b', text: { fr: 'Suivi des pratiques médinoises', ar: 'اتباع عمل أهل المدينة', en: 'Following Medinan practices' } },
      { id: 'c', text: { fr: 'Attachement strict aux textes (Nass) et avis des Compagnons ; réticence envers le Qiyas', ar: 'التمسك الشديد بالنصوص وآثار الصحابة؛ التحفظ على القياس', en: 'Strict adherence to texts (Nass) and Companions\' opinions; reluctance toward Qiyas' } },
      { id: 'd', text: { fr: 'Philosophie rationnelle', ar: 'الفلسفة العقلانية', en: 'Rational philosophy' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Ahmad préférait un hadith faible à un Qiyas. Il compilait les avis des Compagnons et évitait l\'Ijtihad personnel sauf nécessité.',
      ar: 'فضّل أحمد الحديث الضعيف على القياس. وجمع آثار الصحابة وتجنب الاجتهاد الشخصي إلا للضرورة.',
      en: 'Ahmad preferred weak hadith over Qiyas. He compiled Companions\' opinions and avoided personal Ijtihad except when necessary.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'ahmad',
  },
  {
    id: 'imams-ahmad-004',
    question: {
      fr: 'De qui l\'Imam Ahmad a-t-il principalement appris ?',
      ar: 'ممن تعلم الإمام أحمد بشكل رئيسي؟',
      en: 'From whom did Imam Ahmad mainly learn?',
    },
    options: [
      { id: 'a', text: { fr: 'Abu Hanifa', ar: 'أبي حنيفة', en: 'Abu Hanifa' } },
      { id: 'b', text: { fr: 'Ibn Hazm', ar: 'ابن حزم', en: 'Ibn Hazm' } },
      { id: 'c', text: { fr: 'Ghazali', ar: 'الغزالي', en: 'Ghazali' } },
      { id: 'd', text: { fr: 'Imam ash-Shafi\'i (et de nombreux Muhaddithin)', ar: 'الإمام الشافعي (وكثير من المحدثين)', en: 'Imam ash-Shafi\'i (and many Muhaddithin)' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Ahmad (164-241 H) fut élève d\'ash-Shafi\'i à Bagdad. Ash-Shafi\'i disait : "Je n\'ai pas quitté Bagdad sans laisser quelqu\'un de plus savant qu\'Ahmad."',
      ar: 'كان أحمد (164-241 هـ) تلميذًا للشافعي في بغداد. قال الشافعي: "ما خرجت من بغداد وتركت أحدًا أعلم من أحمد."',
      en: 'Ahmad (164-241 AH) was ash-Shafi\'i\'s student in Baghdad. Ash-Shafi\'i said: "I didn\'t leave Baghdad leaving anyone more knowledgeable than Ahmad."',
    },
    points: 2,
    difficulty: 'medium',
    category: 'ahmad',
  },
];

// ============================================
// Questions - Méthodologies Comparées
// ============================================

const methodesQuestions: ExamQuestion[] = [
  {
    id: 'imams-methodes-001',
    question: {
      fr: 'Quel Imam est considéré comme le fondateur de la science d\'Usul al-Fiqh ?',
      ar: 'من الإمام الذي يُعتبر مؤسس علم أصول الفقه؟',
      en: 'Which Imam is considered the founder of Usul al-Fiqh science?',
    },
    options: [
      { id: 'a', text: { fr: 'Abu Hanifa', ar: 'أبو حنيفة', en: 'Abu Hanifa' } },
      { id: 'b', text: { fr: 'Ash-Shafi\'i (avec Ar-Risala)', ar: 'الشافعي (بكتاب الرسالة)', en: 'Ash-Shafi\'i (with Ar-Risala)' } },
      { id: 'c', text: { fr: 'Malik', ar: 'مالك', en: 'Malik' } },
      { id: 'd', text: { fr: 'Ahmad', ar: 'أحمد', en: 'Ahmad' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Bien que les autres imams utilisaient des méthodes, Shafi\'i fut le premier à les codifier explicitement dans un traité dédié : Ar-Risala.',
      ar: 'رغم أن الأئمة الآخرين استخدموا المنهجيات، كان الشافعي أول من دوّنها صراحة في مؤلف مخصوص: الرسالة.',
      en: 'Although other imams used methods, Shafi\'i was first to codify them explicitly in a dedicated treatise: Ar-Risala.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'methodes',
  },
  {
    id: 'imams-methodes-002',
    question: {
      fr: 'Qu\'est-ce que l\'Istihsan utilisé par les Hanafis ?',
      ar: 'ما هو الاستحسان عند الحنفية؟',
      en: 'What is Istihsan used by Hanafis?',
    },
    options: [
      { id: 'a', text: { fr: 'Préférer une preuve plus forte ou l\'intérêt public à un Qiyas apparent', ar: 'ترجيح دليل أقوى أو مصلحة على قياس ظاهر', en: 'Preferring a stronger proof or public interest over apparent Qiyas' } },
      { id: 'b', text: { fr: 'Suivre ses préférences personnelles', ar: 'اتباع التفضيلات الشخصية', en: 'Following personal preferences' } },
      { id: 'c', text: { fr: 'Rejeter tous les hadiths', ar: 'رفض كل الأحاديث', en: 'Rejecting all hadiths' } },
      { id: 'd', text: { fr: 'Voter démocratiquement', ar: 'التصويت الديمقراطي', en: 'Democratic voting' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'L\'Istihsan permet d\'abandonner un Qiyas apparent pour un autre plus subtil, ou pour un Nass, Ijma\', ou Maslaha. Shafi\'i le critiquait ; Hanafis le défendaient.',
      ar: 'الاستحسان يسمح بترك قياس ظاهر لآخر أدق، أو لنص أو إجماع أو مصلحة. انتقده الشافعي؛ ودافع عنه الحنفية.',
      en: 'Istihsan allows leaving apparent Qiyas for subtler one, or for Nass, Ijma\', or Maslaha. Shafi\'i criticized it; Hanafis defended it.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'methodes',
  },
  {
    id: 'imams-methodes-003',
    question: {
      fr: 'Quel était le rapport entre les 4 Imams ?',
      ar: 'ما كانت العلاقة بين الأئمة الأربعة؟',
      en: 'What was the relationship between the 4 Imams?',
    },
    options: [
      { id: 'a', text: { fr: 'Ils se combattaient', ar: 'كانوا متعادين', en: 'They fought each other' } },
      { id: 'b', text: { fr: 'Ils ne se connaissaient pas', ar: 'لم يعرفوا بعضهم', en: 'They didn\'t know each other' } },
      { id: 'c', text: { fr: 'Respect mutuel ; les plus jeunes apprenaient des plus anciens', ar: 'احترام متبادل؛ تعلم المتأخرون من السابقين', en: 'Mutual respect; younger ones learned from elders' } },
      { id: 'd', text: { fr: 'Ils ont vécu à la même époque exactement', ar: 'عاشوا في نفس الحقبة تمامًا', en: 'They lived at the exact same time' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Shafi\'i étudia avec Malik. Ahmad étudia avec Shafi\'i. Abu Hanifa était le plus ancien. Ils se respectaient malgré leurs divergences.',
      ar: 'تعلم الشافعي على يد مالك. وتعلم أحمد على يد الشافعي. وكان أبو حنيفة الأقدم. واحترموا بعضهم رغم اختلافاتهم.',
      en: 'Shafi\'i studied with Malik. Ahmad studied with Shafi\'i. Abu Hanifa was the oldest. They respected each other despite differences.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'methodes',
  },
  {
    id: 'imams-methodes-004',
    question: {
      fr: 'Tous les 4 Imams ont-ils mis en garde contre le Taqlid aveugle ?',
      ar: 'هل حذّر الأئمة الأربعة جميعًا من التقليد الأعمى؟',
      en: 'Did all 4 Imams warn against blind Taqlid?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, ils voulaient être suivis absolument', ar: 'لا، أرادوا الاتباع المطلق', en: 'No, they wanted absolute following' } },
      { id: 'b', text: { fr: 'Seul Ahmad l\'a dit', ar: 'أحمد فقط قال ذلك', en: 'Only Ahmad said this' } },
      { id: 'c', text: { fr: 'Ils n\'ont rien dit à ce sujet', ar: 'لم يقولوا شيئًا في هذا', en: 'They said nothing about this' } },
      { id: 'd', text: { fr: 'Oui, chacun a dit : "Si le hadith est authentique, c\'est mon Madhab"', ar: 'نعم، كل منهم قال: "إذا صح الحديث فهو مذهبي"', en: 'Yes, each said: "If the hadith is authentic, it is my Madhab"' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Chaque Imam a explicitement dit qu\'on doit suivre la preuve, pas aveuglément son avis. Abu Hanifa : "Prenez d\'où nous avons pris." Malik : "Tout le monde peut être contredit sauf le Prophète ﷺ."',
      ar: 'كل إمام صرّح بوجوب اتباع الدليل لا التقليد الأعمى. أبو حنيفة: "خذوا من حيث أخذنا." مالك: "كل يُؤخذ من قوله ويُرد إلا صاحب هذا القبر ﷺ."',
      en: 'Each Imam explicitly said to follow evidence, not blindly his opinion. Abu Hanifa: "Take from where we took." Malik: "Everyone\'s words can be taken or left except the Prophet\'s ﷺ."',
    },
    points: 2,
    difficulty: 'medium',
    category: 'methodes',
  },
];

// ============================================
// Questions - Influence et Répartition Géographique
// ============================================

const influenceQuestions: ExamQuestion[] = [
  {
    id: 'imams-influence-001',
    question: {
      fr: 'Où le Madhab Hanafi est-il principalement suivi aujourd\'hui ?',
      ar: 'أين يُتبع المذهب الحنفي بشكل رئيسي اليوم؟',
      en: 'Where is the Hanafi school mainly followed today?',
    },
    options: [
      { id: 'a', text: { fr: 'Afrique du Nord', ar: 'شمال أفريقيا', en: 'North Africa' } },
      { id: 'b', text: { fr: 'Turquie, Asie centrale, sous-continent indien, Balkans', ar: 'تركيا، آسيا الوسطى، شبه القارة الهندية، البلقان', en: 'Turkey, Central Asia, Indian subcontinent, Balkans' } },
      { id: 'c', text: { fr: 'Indonésie uniquement', ar: 'إندونيسيا فقط', en: 'Indonesia only' } },
      { id: 'd', text: { fr: 'Arabie Saoudite', ar: 'السعودية', en: 'Saudi Arabia' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Hanafisme fut adopté par les empires ottoman et moghol. C\'est le Madhab le plus suivi numériquement (~30% des musulmans).',
      ar: 'تبنته الإمبراطوريتان العثمانية والمغولية. وهو المذهب الأكثر اتباعًا عدديًا (~30% من المسلمين).',
      en: 'Hanafism was adopted by Ottoman and Mughal empires. It\'s the most followed Madhab numerically (~30% of Muslims).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'influence',
  },
  {
    id: 'imams-influence-002',
    question: {
      fr: 'Où le Madhab Maliki est-il principalement suivi ?',
      ar: 'أين يُتبع المذهب المالكي بشكل رئيسي؟',
      en: 'Where is the Maliki school mainly followed?',
    },
    options: [
      { id: 'a', text: { fr: 'Afrique du Nord, Afrique de l\'Ouest, Espagne historique (Al-Andalus)', ar: 'شمال أفريقيا، غرب أفريقيا، الأندلس تاريخيًا', en: 'North Africa, West Africa, historical Spain (Al-Andalus)' } },
      { id: 'b', text: { fr: 'Pakistan et Inde', ar: 'باكستان والهند', en: 'Pakistan and India' } },
      { id: 'c', text: { fr: 'Iran', ar: 'إيران', en: 'Iran' } },
      { id: 'd', text: { fr: 'Japon', ar: 'اليابان', en: 'Japan' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Maroc, Algérie, Tunisie, Libye, Mali, Mauritanie, Sénégal... Al-Andalus était Maliki jusqu\'à la Reconquista.',
      ar: 'المغرب، الجزائر، تونس، ليبيا، مالي، موريتانيا، السنغال... وكانت الأندلس مالكية حتى سقوطها.',
      en: 'Morocco, Algeria, Tunisia, Libya, Mali, Mauritania, Senegal... Al-Andalus was Maliki until the Reconquista.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'influence',
  },
  {
    id: 'imams-influence-003',
    question: {
      fr: 'Où le Madhab Shafi\'i est-il principalement suivi ?',
      ar: 'أين يُتبع المذهب الشافعي بشكل رئيسي؟',
      en: 'Where is the Shafi\'i school mainly followed?',
    },
    options: [
      { id: 'a', text: { fr: 'Turquie', ar: 'تركيا', en: 'Turkey' } },
      { id: 'b', text: { fr: 'Europe uniquement', ar: 'أوروبا فقط', en: 'Europe only' } },
      { id: 'c', text: { fr: 'Asie du Sud-Est (Indonésie, Malaisie), Yémen, Égypte (partiellement), Somalie, Kurdistan', ar: 'جنوب شرق آسيا (إندونيسيا، ماليزيا)، اليمن، مصر (جزئيًا)، الصومال، كردستان', en: 'Southeast Asia (Indonesia, Malaysia), Yemen, Egypt (partially), Somalia, Kurdistan' } },
      { id: 'd', text: { fr: 'Amérique', ar: 'أمريكا', en: 'Americas' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'L\'Indonésie (plus grande population musulmane) est principalement Shafi\'i. Le Madhab s\'est répandu via les commerçants et les savants.',
      ar: 'إندونيسيا (أكبر دولة إسلامية سكانيًا) شافعية في الغالب. انتشر المذهب عبر التجار والعلماء.',
      en: 'Indonesia (largest Muslim population) is mainly Shafi\'i. The Madhab spread through merchants and scholars.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'influence',
  },
  {
    id: 'imams-influence-004',
    question: {
      fr: 'Où le Madhab Hanbali est-il principalement suivi ?',
      ar: 'أين يُتبع المذهب الحنبلي بشكل رئيسي؟',
      en: 'Where is the Hanbali school mainly followed?',
    },
    options: [
      { id: 'a', text: { fr: 'Indonésie', ar: 'إندونيسيا', en: 'Indonesia' } },
      { id: 'b', text: { fr: 'Maroc', ar: 'المغرب', en: 'Morocco' } },
      { id: 'c', text: { fr: 'Inde', ar: 'الهند', en: 'India' } },
      { id: 'd', text: { fr: 'Arabie Saoudite, Qatar, Émirats (officiellement)', ar: 'السعودية، قطر، الإمارات (رسميًا)', en: 'Saudi Arabia, Qatar, UAE (officially)' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Bien que numériquement le plus petit (~5%), le Hanbalisme est l\'école officielle de l\'Arabie Saoudite, influençant les deux lieux saints.',
      ar: 'رغم كونه الأصغر عدديًا (~5%)، الحنبلية هي المذهب الرسمي للسعودية، مما يؤثر على الحرمين الشريفين.',
      en: 'Though numerically smallest (~5%), Hanbalism is Saudi Arabia\'s official school, influencing the two holy sites.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'influence',
  },
];

// ============================================
// Questions - Ouvrages Principaux (NOUVEAU)
// ============================================

const ouvragesQuestions: ExamQuestion[] = [
  {
    id: 'imams-ouvrage-001',
    question: {
      fr: 'Quel est le principal ouvrage de l\'Imam Malik ?',
      ar: 'ما أهم مؤلفات الإمام مالك؟',
      en: 'What is Imam Malik\'s main book?',
    },
    options: [
      { id: 'a', text: { fr: 'Al-Muwatta (Le Chemin Aplani) - premier recueil de hadith et fiqh organisé', ar: 'الموطأ - أول مصنف في الحديث والفقه المنظم', en: 'Al-Muwatta (The Trodden Path) - first organized hadith and fiqh compilation' } },
      { id: 'b', text: { fr: 'Al-Umm', ar: 'الأم', en: 'Al-Umm' } },
      { id: 'c', text: { fr: 'Al-Musnad', ar: 'المسند', en: 'Al-Musnad' } },
      { id: 'd', text: { fr: 'Sahih Bukhari', ar: 'صحيح البخاري', en: 'Sahih Bukhari' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Al-Muwatta est le premier livre de Fiqh-Hadith compilé. Malik y travailla 40 ans. Il contient ~1700 hadiths et rapports des Compagnons.',
      ar: 'الموطأ أول كتاب جمع الفقه والحديث. عمل عليه مالك 40 سنة. يحتوي ~1700 حديث وأثر صحابي.',
      en: 'Al-Muwatta is the first compiled Fiqh-Hadith book. Malik worked on it 40 years. It contains ~1700 hadiths and Companion reports.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'ouvrages',
  },
  {
    id: 'imams-ouvrage-002',
    question: {
      fr: 'Quel est l\'ouvrage majeur de l\'Imam Shafi\'i en méthodologie (Usul) ?',
      ar: 'ما كتاب الإمام الشافعي الرئيسي في الأصول؟',
      en: 'What is Imam Shafi\'i\'s major book in methodology (Usul)?',
    },
    options: [
      { id: 'a', text: { fr: 'Al-Muwatta', ar: 'الموطأ', en: 'Al-Muwatta' } },
      { id: 'b', text: { fr: 'Ar-Risala - premier ouvrage de Usul al-Fiqh', ar: 'الرسالة - أول كتاب في أصول الفقه', en: 'Ar-Risala - first book of Usul al-Fiqh' } },
      { id: 'c', text: { fr: 'Al-Musnad', ar: 'المسند', en: 'Al-Musnad' } },
      { id: 'd', text: { fr: 'Al-Mudawwana', ar: 'المدونة', en: 'Al-Mudawwana' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Ar-Risala (L\'Épître) est le premier livre de Usul al-Fiqh, établissant les règles de dérivation des jugements juridiques.',
      ar: 'الرسالة أول كتاب في أصول الفقه، أسّس قواعد استنباط الأحكام الشرعية.',
      en: 'Ar-Risala (The Epistle) is the first book of Usul al-Fiqh, establishing rules for deriving legal rulings.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'ouvrages',
  },
  {
    id: 'imams-ouvrage-003',
    question: {
      fr: 'Quel est l\'ouvrage de l\'Imam Ahmad qui contient plus de 27 000 hadiths ?',
      ar: 'ما كتاب الإمام أحمد الذي يحتوي أكثر من 27000 حديث؟',
      en: 'What is Imam Ahmad\'s book containing over 27,000 hadiths?',
    },
    options: [
      { id: 'a', text: { fr: 'Al-Musnad (Le Recueil à chaînes continues)', ar: 'المسند', en: 'Al-Musnad (The Collection with continuous chains)' } },
      { id: 'b', text: { fr: 'Al-Umm', ar: 'الأم', en: 'Al-Umm' } },
      { id: 'c', text: { fr: 'Sahih Muslim', ar: 'صحيح مسلم', en: 'Sahih Muslim' } },
      { id: 'd', text: { fr: 'Al-Risala', ar: 'الرسالة', en: 'Al-Risala' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Al-Musnad contient des hadiths classés par Compagnon narrateur. C\'est une des plus grandes collections de hadiths.',
      ar: 'المسند يحتوي أحاديث مرتبة حسب الصحابي الراوي. وهو من أكبر مجموعات الحديث.',
      en: 'Al-Musnad contains hadiths classified by Companion narrator. It\'s one of the largest hadith collections.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'ouvrages',
  },
];

// ============================================
// Questions - Convergences et Divergences (NOUVEAU)
// ============================================

const convergenceDivergenceQuestions: ExamQuestion[] = [
  {
    id: 'imams-conv-001',
    question: {
      fr: 'Sur quoi les 4 Imams sont-ils unanimes ?',
      ar: 'ما الذي اتفق عليه الأئمة الأربعة؟',
      en: 'On what do the 4 Imams agree unanimously?',
    },
    options: [
      { id: 'a', text: { fr: 'Tous les détails du Fiqh', ar: 'كل تفاصيل الفقه', en: 'All Fiqh details' } },
      { id: 'b', text: { fr: 'Les fondements de l\'Islam (Aqeedah, piliers, interdits majeurs) et le respect mutuel des autres écoles', ar: 'أصول الإسلام (العقيدة، الأركان، المحرمات الكبرى) والاحترام المتبادل بين المذاهب', en: 'Foundations of Islam (Aqeedah, pillars, major prohibitions) and mutual respect between schools' } },
      { id: 'c', text: { fr: 'Rien du tout', ar: 'لا شيء', en: 'Nothing at all' } },
      { id: 'd', text: { fr: 'Uniquement les questions de prière', ar: 'مسائل الصلاة فقط', en: 'Only prayer issues' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les 4 Imams s\'accordent sur les Usul (fondements). Leurs divergences portent sur les Furu\' (branches), dues aux différentes méthodologies d\'Ijtihad.',
      ar: 'اتفق الأئمة الأربعة على الأصول. وخلافهم في الفروع، بسبب اختلاف مناهج الاجتهاد.',
      en: 'The 4 Imams agree on Usul (fundamentals). Their differences are in Furu\' (branches), due to different Ijtihad methodologies.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'convergence-divergence',
  },
  {
    id: 'imams-conv-002',
    question: {
      fr: 'Pourquoi les 4 Imams ont-ils parfois des avis différents ?',
      ar: 'لماذا تختلف آراء الأئمة الأربعة أحيانًا؟',
      en: 'Why do the 4 Imams sometimes have different opinions?',
    },
    options: [
      { id: 'a', text: { fr: 'Ils ne s\'aimaient pas', ar: 'لم يحب بعضهم بعضًا', en: 'They didn\'t like each other' } },
      { id: 'b', text: { fr: 'Différence dans les hadiths accessibles, interprétation des textes, et méthodologies (Ra\'y vs Athar)', ar: 'اختلاف الأحاديث المتاحة، تفسير النصوص، والمناهج (الرأي مقابل الأثر)', en: 'Differences in available hadiths, text interpretation, and methodologies (Ra\'y vs Athar)' } },
      { id: 'c', text: { fr: 'Un d\'eux avait tort', ar: 'أحدهم كان مخطئًا', en: 'One of them was wrong' } },
      { id: 'd', text: { fr: 'Rivalité politique', ar: 'منافسة سياسية', en: 'Political rivalry' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'L\'Ikhtilaf (divergence) est une miséricorde. Chaque Imam travaillait avec les hadiths qu\'il connaissait et sa compréhension des textes.',
      ar: 'الاختلاف رحمة. كل إمام عمل بالأحاديث التي بلغته وفهمه للنصوص.',
      en: 'Ikhtilaf (divergence) is a mercy. Each Imam worked with hadiths he knew and his understanding of texts.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'convergence-divergence',
  },
  {
    id: 'imams-conv-003',
    question: {
      fr: 'Quelle était l\'attitude des Imams envers leurs propres avis ?',
      ar: 'ما كان موقف الأئمة من آرائهم الخاصة؟',
      en: 'What was the Imams\' attitude towards their own opinions?',
    },
    options: [
      { id: 'a', text: { fr: 'Ils les considéraient infaillibles', ar: 'اعتبروها معصومة', en: 'They considered them infallible' } },
      { id: 'b', text: { fr: 'Humilité : "Si le hadith est authentique, c\'est mon madhab" - tous reconnaissaient pouvoir se tromper', ar: 'التواضع: "إذا صح الحديث فهو مذهبي" - كلهم أقرّوا بإمكانية خطئهم', en: 'Humility: "If the hadith is authentic, that is my madhab" - all acknowledged they could err' } },
      { id: 'c', text: { fr: 'Ils interdisaient de les critiquer', ar: 'منعوا انتقادهم', en: 'They forbade criticism of them' } },
      { id: 'd', text: { fr: 'Ils n\'acceptaient que leurs propres avis', ar: 'لم يقبلوا إلا آراءهم', en: 'They only accepted their own views' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'L\'Imam Shafi\'i disait : "Si vous trouvez dans mon livre ce qui contredit la Sunna, suivez la Sunna et délaissez mon avis."',
      ar: 'قال الشافعي: "إذا وجدتم في كتابي ما يخالف السنة، فخذوا بالسنة واتركوا قولي."',
      en: 'Imam Shafi\'i said: "If you find in my book what contradicts the Sunnah, follow the Sunnah and leave my opinion."',
    },
    points: 2,
    difficulty: 'medium',
    category: 'convergence-divergence',
  },
];

// ============================================
// Questions - Choisir un Madhab (NOUVEAU)
// ============================================

const choisirMadhabQuestions: ExamQuestion[] = [
  {
    id: 'imams-choisir-001',
    question: {
      fr: 'Est-il obligatoire de suivre un Madhab spécifique ?',
      ar: 'هل يجب اتباع مذهب معين؟',
      en: 'Is it obligatory to follow a specific Madhab?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, absolument obligatoire', ar: 'نعم، واجب حتمًا', en: 'Yes, absolutely obligatory' } },
      { id: 'b', text: { fr: 'Non, c\'est interdit', ar: 'لا، محرم', en: 'No, it\'s forbidden' } },
      { id: 'c', text: { fr: 'Recommandé pour le non-savant ; le savant peut faire Ijtihad dans les questions qu\'il maîtrise', ar: 'مستحب لغير العالم؛ والعالم يجتهد فيما يتقنه', en: 'Recommended for non-scholar; scholar can do Ijtihad in areas he masters' } },
      { id: 'd', text: { fr: 'Cela dépend du pays', ar: 'يعتمد على البلد', en: 'It depends on the country' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le Taqlid (suivre un madhab) est une facilité pour le non-spécialiste. Le Mujtahid suit la preuve, pas le madhab.',
      ar: 'التقليد (اتباع المذهب) تيسير لغير المتخصص. والمجتهد يتبع الدليل لا المذهب.',
      en: 'Taqlid (following a madhab) is a convenience for non-specialists. The Mujtahid follows evidence, not madhab.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'choisir-madhab',
  },
  {
    id: 'imams-choisir-002',
    question: {
      fr: 'Peut-on changer de Madhab ou prendre l\'avis d\'un autre Madhab parfois ?',
      ar: 'هل يجوز تغيير المذهب أو الأخذ برأي مذهب آخر أحيانًا؟',
      en: 'Can one change Madhab or take another Madhab\'s opinion sometimes?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, jamais', ar: 'لا، أبدًا', en: 'No, never' } },
      { id: 'b', text: { fr: 'Oui, en cas de besoin légitime et sans chercher les facilités (Tatabbu\' ar-Rukhas)', ar: 'نعم، عند الحاجة المشروعة ودون تتبع الرخص', en: 'Yes, for legitimate need and without seeking easy options (Tatabbu\' ar-Rukhas)' } },
      { id: 'c', text: { fr: 'Seulement après autorisation du gouvernement', ar: 'فقط بإذن الحكومة', en: 'Only with government permission' } },
      { id: 'd', text: { fr: 'Seulement les femmes peuvent changer', ar: 'النساء فقط يمكنهن التغيير', en: 'Only women can change' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Changer de madhab ou prendre un avis d\'un autre est permis. Interdit : chercher systématiquement l\'avis le plus facile (Tatabbu\' ar-Rukhas).',
      ar: 'تغيير المذهب أو الأخذ برأي مذهب آخر جائز. الممنوع: تتبع الرخص بشكل منهجي.',
      en: 'Changing madhab or taking another\'s opinion is permitted. Forbidden: systematically seeking easiest opinions (Tatabbu\' ar-Rukhas).',
    },
    points: 2,
    difficulty: 'medium',
    category: 'choisir-madhab',
  },
  {
    id: 'imams-choisir-003',
    question: {
      fr: 'Quel est le meilleur Madhab ?',
      ar: 'ما هو أفضل مذهب؟',
      en: 'Which is the best Madhab?',
    },
    options: [
      { id: 'a', text: { fr: 'Le Madhab Hanafi', ar: 'المذهب الحنفي', en: 'The Hanafi Madhab' } },
      { id: 'b', text: { fr: 'Le Madhab Shafi\'i', ar: 'المذهب الشافعي', en: 'The Shafi\'i Madhab' } },
      { id: 'c', text: { fr: 'Il n\'y a pas de "meilleur" - tous sont des interprétations valides basées sur le Coran et la Sunna', ar: 'لا يوجد "أفضل" - كلها تفسيرات صحيحة مبنية على الكتاب والسنة', en: 'There is no "best" - all are valid interpretations based on Quran and Sunnah' } },
      { id: 'd', text: { fr: 'Le Madhab Hanbali', ar: 'المذهب الحنبلي', en: 'The Hanbali Madhab' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Les 4 Madhabs sont tous sur la voie juste (Haqq). Leur Ikhtilaf est une richesse et une miséricorde pour la Umma.',
      ar: 'المذاهب الأربعة كلها على الحق. واختلافها ثروة ورحمة للأمة.',
      en: 'All 4 Madhabs are on the right path (Haqq). Their Ikhtilaf is richness and mercy for the Ummah.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'choisir-madhab',
  },
];

// ============================================
// Assemblage de l'examen COMPLET
// ============================================

const allQuestions: ExamQuestion[] = [
  ...abuHanifaQuestions,               // 4 questions
  ...malikQuestions,                   // 4 questions
  ...shafiQuestions,                   // 4 questions
  ...ahmadQuestions,                   // 4 questions
  ...methodesQuestions,                // 4 questions
  ...influenceQuestions,               // 4 questions
  ...ouvragesQuestions,                // 3 questions (NOUVEAU)
  ...convergenceDivergenceQuestions,   // 3 questions (NOUVEAU)
  ...choisirMadhabQuestions,           // 3 questions (NOUVEAU)
  // Total : 33 questions
];

export const examHistoryImamsFinal: ExamConfig = {
  id: 'exam-history-imams-final',
  type: 'course',
  level: 'intermediate',
  title: {
    fr: 'Examen Complet - Histoire des 4 Imams',
    ar: 'الامتحان الشامل - تاريخ الأئمة الأربعة',
    en: 'Complete Exam - History of the 4 Imams',
  },
  description: {
    fr: 'Examen de 26 questions sélectionnées aléatoirement parmi une banque de 33 questions. Couvre la vie et la méthodologie des 4 grands Imams.',
    ar: 'امتحان من 26 سؤالاً يتم اختيارها عشوائياً من بنك يضم 33 سؤالاً. يغطي حياة ومنهج الأئمة الأربعة الكبار.',
    en: 'Exam with 26 questions randomly selected from a pool of 33. Covers life and methodology of the 4 great Imams.',
  },
  instructions: {
    fr: 'Vous avez 40 minutes pour répondre à 26 questions. Chaque question a une seule bonne réponse. Un score de 70% est requis pour réussir.',
    ar: 'لديك 40 دقيقة للإجابة على 26 سؤالاً. لكل سؤال إجابة صحيحة واحدة. يُشترط 70% للنجاح.',
    en: 'You have 40 minutes to answer 26 questions. Each question has one correct answer. A score of 70% is required to pass.',
  },
  courseSlug: 'history-imams',
  questionPool: allQuestions,
  questionsPerExam: 26,
  categoryConfig: [
    { category: 'abu-hanifa', count: 3 },
    { category: 'malik', count: 3 },
    { category: 'shafi', count: 3 },
    { category: 'ahmad', count: 3 },
    { category: 'methodes', count: 4 },
    { category: 'influence', count: 3 },
    { category: 'ouvrages', count: 3 },
    { category: 'convergence-divergence', count: 2 },
    { category: 'choisir-madhab', count: 2 },
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
    fr: 'Certificat de Maîtrise - Histoire des 4 Imams',
    ar: 'شهادة الإتقان - تاريخ الأئمة الأربعة',
    en: 'Mastery Certificate - History of the 4 Imams',
  },
  createdAt: '2026-01-31',
};

export default examHistoryImamsFinal;
