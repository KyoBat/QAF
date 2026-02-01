/**
 * Quiz Fiqh - Zakat (Aumône Légale)
 * 
 * Ce quiz couvre les règles de la zakat :
 * conditions, nisab, bénéficiaires, types de biens
 * 
 * Niveau : Débutant à Intermédiaire
 * Questions : 15
 */

import { Quiz, Question } from '../types';

const questions: Question[] = [
  // --- Questions Faciles (5) ---
  {
    id: 'zakat-q001',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'La Zakat est le combientième pilier de l\'Islam ?',
      ar: 'الزكاة هي الركن الكم من أركان الإسلام؟',
      en: 'Which pillar of Islam is Zakat?',
    },
    options: [
      { id: 'a', text: { fr: '2ème pilier', ar: 'الركن الثاني', en: '2nd pillar' } },
      { id: 'b', text: { fr: '3ème pilier', ar: 'الركن الثالث', en: '3rd pillar' } },
      { id: 'c', text: { fr: '4ème pilier', ar: 'الركن الرابع', en: '4th pillar' } },
      { id: 'd', text: { fr: '5ème pilier', ar: 'الركن الخامس', en: '5th pillar' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La Zakat est le 3ème pilier de l\'Islam : 1) Shahada, 2) Salat, 3) Zakat, 4) Siyam, 5) Hajj. Elle est mentionnée dans le Coran plus de 30 fois, souvent associée à la prière.',
      ar: 'الزكاة هي الركن الثالث من أركان الإسلام: 1) الشهادة، 2) الصلاة، 3) الزكاة، 4) الصيام، 5) الحج. ذُكرت في القرآن أكثر من 30 مرة، غالباً مقرونة بالصلاة.',
      en: 'Zakat is the 3rd pillar of Islam: 1) Shahada, 2) Salat, 3) Zakat, 4) Siyam, 5) Hajj. It\'s mentioned in the Quran over 30 times, often paired with prayer.',
    },
    reference: {
      courseSlug: 'bases-fiqh-zakat',
      lessonId: '001-introduction',
    },
    points: 10,
    tags: ['fiqh', 'zakat', 'pillars'],
  },
  {
    id: 'zakat-q002',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Que signifie le mot "Zakat" (زكاة) ?',
      ar: 'ما معنى كلمة "زكاة"؟',
      en: 'What does the word "Zakat" mean?',
    },
    options: [
      { id: 'a', text: { fr: 'Obligation', ar: 'واجب', en: 'Obligation' } },
      { id: 'b', text: { fr: 'Purification et croissance', ar: 'التطهير والنماء', en: 'Purification and growth' } },
      { id: 'c', text: { fr: 'Don volontaire', ar: 'تبرع طوعي', en: 'Voluntary gift' } },
      { id: 'd', text: { fr: 'Impôt gouvernemental', ar: 'ضريبة حكومية', en: 'Government tax' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Zakat vient de "zakâ" qui signifie purifier et faire croître. Elle purifie le cœur de l\'avarice, purifie la richesse, et fait croître les bénédictions et les récompenses.',
      ar: 'الزكاة من "زكا" بمعنى التطهير والنماء. تُطهر القلب من البخل، وتُطهر المال، وتُنمي البركات والأجور.',
      en: 'Zakat comes from "zakâ" meaning to purify and grow. It purifies the heart from greed, purifies wealth, and grows blessings and rewards.',
    },
    reference: {
      courseSlug: 'bases-fiqh-zakat',
      lessonId: '001-introduction',
    },
    points: 10,
    tags: ['fiqh', 'zakat', 'definition'],
  },
  {
    id: 'zakat-q003',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quel pourcentage de zakat doit-on payer sur l\'argent épargné ?',
      ar: 'ما نسبة الزكاة على المال المدخر؟',
      en: 'What percentage of zakat must be paid on saved money?',
    },
    options: [
      { id: 'a', text: { fr: '1%', ar: '1%', en: '1%' } },
      { id: 'b', text: { fr: '2.5% (1/40)', ar: '2.5% (ربع العشر)', en: '2.5% (1/40)' } },
      { id: 'c', text: { fr: '5%', ar: '5%', en: '5%' } },
      { id: 'd', text: { fr: '10%', ar: '10%', en: '10%' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La zakat sur l\'argent (or, argent, monnaie) est de 2.5%, soit 1/40 (rub\' al-\'ushr). Si vous avez 10 000€ épargnés pendant un an, vous payez 250€ de zakat.',
      ar: 'زكاة المال (الذهب، الفضة، النقود) 2.5%، أي ربع العشر (1/40). إذا كان لديك 10,000 درهم مدخرة لمدة سنة، تدفع 250 درهم زكاة.',
      en: 'Zakat on money (gold, silver, currency) is 2.5%, or 1/40 (rub\' al-\'ushr). If you have €10,000 saved for a year, you pay €250 zakat.',
    },
    reference: {
      courseSlug: 'bases-fiqh-zakat',
      lessonId: '002-nisab',
    },
    points: 10,
    tags: ['fiqh', 'zakat', 'percentage'],
  },
  {
    id: 'zakat-q004',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'La zakat n\'est obligatoire que si la richesse atteint le nisab et y reste pendant une année lunaire.',
      ar: 'الزكاة لا تجب إلا إذا بلغ المال النصاب وحال عليه الحول.',
      en: 'Zakat is only obligatory if wealth reaches the nisab and remains there for a lunar year.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'Les deux conditions principales sont : 1) Atteindre le nisab (seuil minimum), 2) Hawl (passage d\'une année lunaire). Pour les récoltes et minerais, le hawl n\'est pas requis.',
      ar: 'الشرطان الأساسيان: 1) بلوغ النصاب (الحد الأدنى)، 2) الحول (مرور سنة هجرية). للزروع والمعادن لا يُشترط الحول.',
      en: 'Two main conditions: 1) Reaching nisab (minimum threshold), 2) Hawl (passage of lunar year). For crops and minerals, hawl is not required.',
    },
    reference: {
      courseSlug: 'bases-fiqh-zakat',
      lessonId: '002-nisab',
    },
    points: 10,
    tags: ['fiqh', 'zakat', 'conditions'],
  },
  {
    id: 'zakat-q005',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Combien y a-t-il de catégories de bénéficiaires de la zakat ?',
      ar: 'كم عدد مصارف الزكاة؟',
      en: 'How many categories of zakat recipients are there?',
    },
    options: [
      { id: 'a', text: { fr: '4 catégories', ar: '4 أصناف', en: '4 categories' } },
      { id: 'b', text: { fr: '6 catégories', ar: '6 أصناف', en: '6 categories' } },
      { id: 'c', text: { fr: '8 catégories', ar: '8 أصناف', en: '8 categories' } },
      { id: 'd', text: { fr: '10 catégories', ar: '10 أصناف', en: '10 categories' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Allah a défini 8 catégories dans le Coran (9:60) : 1) Pauvres, 2) Nécessiteux, 3) Collecteurs, 4) Cœurs à gagner, 5) Affranchissement d\'esclaves, 6) Endettés, 7) Cause d\'Allah, 8) Voyageurs.',
      ar: 'حدد الله 8 أصناف في القرآن (9:60): 1) الفقراء، 2) المساكين، 3) العاملين عليها، 4) المؤلفة قلوبهم، 5) في الرقاب، 6) الغارمين، 7) في سبيل الله، 8) ابن السبيل.',
      en: 'Allah defined 8 categories in Quran (9:60): 1) Poor, 2) Needy, 3) Collectors, 4) Hearts to be reconciled, 5) Freeing slaves, 6) Debtors, 7) Allah\'s cause, 8) Travelers.',
    },
    reference: {
      courseSlug: 'bases-fiqh-zakat',
      lessonId: '003-beneficiaires',
    },
    points: 10,
    tags: ['fiqh', 'zakat', 'beneficiaries'],
  },

  // --- Questions Moyennes (6) ---
  {
    id: 'zakat-q006',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quel est le nisab de l\'or pour la zakat ?',
      ar: 'ما نصاب الذهب في الزكاة؟',
      en: 'What is the nisab for gold in zakat?',
    },
    options: [
      { id: 'a', text: { fr: '20 mithqals (~85 grammes)', ar: '20 مثقالاً (~85 غرام)', en: '20 mithqals (~85 grams)' } },
      { id: 'b', text: { fr: '100 grammes', ar: '100 غرام', en: '100 grams' } },
      { id: 'c', text: { fr: '200 grammes', ar: '200 غرام', en: '200 grams' } },
      { id: 'd', text: { fr: '50 grammes', ar: '50 غرام', en: '50 grams' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le nisab de l\'or est 20 mithqals (dinars), équivalent à environ 85 grammes d\'or pur. Si le prix de l\'or est 50€/g, le nisab serait ~4 250€. On utilise souvent le nisab d\'argent car plus bas.',
      ar: 'نصاب الذهب 20 مثقالاً (دينار)، أي حوالي 85 غرام من الذهب الخالص. إذا كان سعر الذهب 50€/غ، فالنصاب ~4,250€. غالباً يُستخدم نصاب الفضة لأنه أقل.',
      en: 'Gold nisab is 20 mithqals (dinars), equivalent to about 85 grams of pure gold. If gold price is €50/g, nisab would be ~€4,250. Silver nisab is often used as it\'s lower.',
    },
    reference: {
      courseSlug: 'bases-fiqh-zakat',
      lessonId: '002-nisab',
    },
    points: 15,
    tags: ['fiqh', 'zakat', 'nisab', 'gold'],
  },
  {
    id: 'zakat-q007',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelle est la différence entre "Faqir" et "Miskin" ?',
      ar: 'ما الفرق بين "الفقير" و"المسكين"؟',
      en: 'What is the difference between "Faqir" and "Miskin"?',
    },
    options: [
      { id: 'a', text: { fr: 'Faqir = n\'a rien, Miskin = a un peu mais insuffisant', ar: 'الفقير = لا يملك شيئاً، المسكين = يملك قليلاً لا يكفيه', en: 'Faqir = has nothing, Miskin = has a little but insufficient' } },
      { id: 'b', text: { fr: 'Ils sont identiques', ar: 'متماثلان', en: 'They are identical' } },
      { id: 'c', text: { fr: 'Miskin est plus pauvre que Faqir', ar: 'المسكين أفقر من الفقير', en: 'Miskin is poorer than Faqir' } },
      { id: 'd', text: { fr: 'Faqir = malade, Miskin = pauvre', ar: 'الفقير = مريض، المسكين = فقير', en: 'Faqir = sick, Miskin = poor' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Selon la majorité : Faqir = celui qui n\'a rien ou moins de la moitié de ses besoins. Miskin = celui qui a quelque chose mais pas assez (plus de la moitié mais insuffisant). Les Malikis inversent.',
      ar: 'عند الجمهور: الفقير = من لا يملك شيئاً أو أقل من نصف حاجته. المسكين = من يملك شيئاً لكن لا يكفيه (أكثر من النصف لكنه غير كافٍ). المالكية يعكسون.',
      en: 'According to majority: Faqir = one who has nothing or less than half needs. Miskin = one who has something but not enough (more than half but insufficient). Malikis reverse them.',
    },
    reference: {
      courseSlug: 'bases-fiqh-zakat',
      lessonId: '003-beneficiaires',
    },
    points: 15,
    tags: ['fiqh', 'zakat', 'faqir', 'miskin'],
  },
  {
    id: 'zakat-q008',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'La zakat est-elle obligatoire sur les bijoux en or portés par les femmes ?',
      ar: 'هل تجب الزكاة على حلي النساء الذهبية الملبوسة؟',
      en: 'Is zakat obligatory on gold jewelry worn by women?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui selon tous les savants', ar: 'نعم عند جميع العلماء', en: 'Yes according to all scholars' } },
      { id: 'b', text: { fr: 'Non selon tous les savants', ar: 'لا عند جميع العلماء', en: 'No according to all scholars' } },
      { id: 'c', text: { fr: 'Point de divergence entre les écoles', ar: 'مسألة خلافية بين المذاهب', en: 'Point of disagreement between schools' } },
      { id: 'd', text: { fr: 'Seulement sur les bijoux neufs', ar: 'فقط على الحلي الجديدة', en: 'Only on new jewelry' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Il y a divergence : les Hanafis disent oui (zakat obligatoire). Les Malikis, Shafi\'is et Hanbalis disent non pour les bijoux d\'usage personnel permis. Si c\'est excessif ou pour thésaurisation, la zakat est due.',
      ar: 'هناك خلاف: الحنفية يوجبون الزكاة. المالكية والشافعية والحنابلة لا يوجبونها على الحلي المباحة للاستعمال الشخصي. إذا كانت مفرطة أو للادخار، تجب الزكاة.',
      en: 'There\'s disagreement: Hanafis say yes (zakat obligatory). Malikis, Shafi\'is and Hanbalis say no for permissible personal jewelry. If excessive or for hoarding, zakat is due.',
    },
    reference: {
      courseSlug: 'bases-fiqh-zakat',
      lessonId: '004-types-biens',
    },
    points: 15,
    tags: ['fiqh', 'zakat', 'jewelry', 'khilaf'],
  },
  {
    id: 'zakat-q009',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Peut-on donner sa zakat à ses parents ou enfants ?',
      ar: 'هل يجوز إعطاء الزكاة للوالدين أو الأولاد؟',
      en: 'Can one give zakat to parents or children?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, c\'est même recommandé', ar: 'نعم، بل مستحب', en: 'Yes, it\'s even recommended' } },
      { id: 'b', text: { fr: 'Non, car on est responsable de leur entretien', ar: 'لا، لأن نفقتهم واجبة', en: 'No, because one is responsible for their maintenance' } },
      { id: 'c', text: { fr: 'Seulement aux parents', ar: 'للوالدين فقط', en: 'Only to parents' } },
      { id: 'd', text: { fr: 'Seulement aux enfants adultes', ar: 'للأولاد البالغين فقط', en: 'Only to adult children' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'On ne peut pas donner sa zakat aux personnes dont on est responsable de l\'entretien (usul = parents/grands-parents, furu\' = enfants/petits-enfants). La sadaqa volontaire leur est permise.',
      ar: 'لا يجوز إعطاء الزكاة لمن تجب نفقتهم (الأصول = الوالدين والأجداد، الفروع = الأولاد والأحفاد). الصدقة التطوعية لهم جائزة.',
      en: 'One cannot give zakat to those whose maintenance is obligatory (usul = parents/grandparents, furu\' = children/grandchildren). Voluntary sadaqa to them is permitted.',
    },
    reference: {
      courseSlug: 'bases-fiqh-zakat',
      lessonId: '003-beneficiaires',
    },
    points: 15,
    tags: ['fiqh', 'zakat', 'family'],
  },
  {
    id: 'zakat-q010',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quel est le taux de zakat sur les récoltes irriguées naturellement (pluie) ?',
      ar: 'ما نسبة زكاة الزروع المسقية بماء السماء؟',
      en: 'What is the zakat rate on crops irrigated naturally (rain)?',
    },
    options: [
      { id: 'a', text: { fr: '2.5%', ar: '2.5%', en: '2.5%' } },
      { id: 'b', text: { fr: '5%', ar: '5%', en: '5%' } },
      { id: 'c', text: { fr: '10% (\'ushr)', ar: '10% (العُشر)', en: '10% (\'ushr)' } },
      { id: 'd', text: { fr: '20%', ar: '20%', en: '20%' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Récoltes irriguées par la pluie/rivière : 10% (\'ushr). Récoltes irriguées artificiellement (puits, moteur) : 5% (nisf al-\'ushr). Le nisab est 5 awsuq (~653 kg de blé).',
      ar: 'الزروع المسقية بماء السماء/النهر: 10% (العُشر). المسقية بالآلات (الآبار، المحركات): 5% (نصف العُشر). النصاب 5 أوسق (~653 كغ قمح).',
      en: 'Crops irrigated by rain/river: 10% (\'ushr). Artificially irrigated (wells, motors): 5% (nisf al-\'ushr). Nisab is 5 awsuq (~653 kg of wheat).',
    },
    reference: {
      courseSlug: 'bases-fiqh-zakat',
      lessonId: '004-types-biens',
    },
    points: 15,
    tags: ['fiqh', 'zakat', 'crops'],
  },
  {
    id: 'zakat-q011',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que "Fi Sabilillah" (في سبيل الله) comme catégorie de zakat ?',
      ar: 'ما المقصود بـ"في سبيل الله" كمصرف للزكاة؟',
      en: 'What does "Fi Sabilillah" mean as a zakat category?',
    },
    options: [
      { id: 'a', text: { fr: 'Principalement le jihad défensif et les causes islamiques', ar: 'أساساً الجهاد الدفاعي والمشاريع الإسلامية', en: 'Primarily defensive jihad and Islamic causes' } },
      { id: 'b', text: { fr: 'Tout type de charité', ar: 'أي نوع من الصدقة', en: 'Any type of charity' } },
      { id: 'c', text: { fr: 'Construction de maisons', ar: 'بناء المنازل', en: 'Building houses' } },
      { id: 'd', text: { fr: 'Voyages personnels', ar: 'السفر الشخصي', en: 'Personal travel' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'La majorité limite "fi sabilillah" au jihad défensif. Certains savants contemporains l\'étendent à la da\'wa, l\'éducation islamique, et les projets humanitaires islamiques. Le sens ne doit pas être trop élargi.',
      ar: 'الجمهور يحصر "في سبيل الله" بالجهاد الدفاعي. بعض المعاصرين يوسعونه للدعوة والتعليم الإسلامي والمشاريع الإنسانية الإسلامية. لا ينبغي التوسع المفرط.',
      en: 'Majority limits "fi sabilillah" to defensive jihad. Some contemporary scholars extend it to da\'wa, Islamic education, and Islamic humanitarian projects. The meaning shouldn\'t be overly broadened.',
    },
    reference: {
      courseSlug: 'bases-fiqh-zakat',
      lessonId: '003-beneficiaires',
    },
    points: 15,
    tags: ['fiqh', 'zakat', 'sabilillah'],
  },

  // --- Questions Difficiles (4) ---
  {
    id: 'zakat-q012',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'La zakat est-elle due sur les marchandises commerciales (\'urud at-tijara) ?',
      ar: 'هل تجب الزكاة على عروض التجارة؟',
      en: 'Is zakat due on trade goods (\'urud at-tijara)?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, 2.5% de la valeur marchande si elle atteint le nisab', ar: 'نعم، 2.5% من القيمة السوقية إذا بلغت النصاب', en: 'Yes, 2.5% of market value if it reaches nisab' } },
      { id: 'b', text: { fr: 'Non, jamais', ar: 'لا، أبداً', en: 'No, never' } },
      { id: 'c', text: { fr: 'Seulement sur le profit', ar: 'على الربح فقط', en: 'Only on profit' } },
      { id: 'd', text: { fr: '10% comme les récoltes', ar: '10% مثل الزروع', en: '10% like crops' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les marchandises destinées à la vente sont soumises à la zakat : 2.5% de leur valeur marchande au jour de la zakat, si la valeur atteint le nisab et qu\'un an s\'est écoulé depuis l\'intention de commerce.',
      ar: 'عروض التجارة (البضائع المعدة للبيع) تجب فيها الزكاة: 2.5% من قيمتها السوقية يوم الزكاة، إذا بلغت النصاب وحال عليها الحول من نية التجارة.',
      en: 'Trade goods are subject to zakat: 2.5% of their market value on zakat day, if value reaches nisab and a year has passed since intention to trade.',
    },
    reference: {
      courseSlug: 'bases-fiqh-zakat',
      lessonId: '004-types-biens',
    },
    points: 20,
    tags: ['fiqh', 'zakat', 'trade'],
  },
  {
    id: 'zakat-q013',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle est la position sur le "tamlīk" (transfert de propriété) dans la zakat ?',
      ar: 'ما حكم "التمليك" (نقل الملكية) في الزكاة؟',
      en: 'What is the ruling on "tamlīk" (transfer of ownership) in zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'La zakat doit être donnée en propriété au bénéficiaire', ar: 'يجب تمليك الزكاة للمستحق', en: 'Zakat must be given as property to the recipient' } },
      { id: 'b', text: { fr: 'On peut payer des services avec la zakat', ar: 'يجوز دفع الخدمات من الزكاة', en: 'One can pay for services with zakat' } },
      { id: 'c', text: { fr: 'Le tamlīk n\'est pas nécessaire', ar: 'التمليك غير ضروري', en: 'Tamlīk is not necessary' } },
      { id: 'd', text: { fr: 'Seulement pour les pauvres', ar: 'للفقراء فقط', en: 'Only for the poor' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'La majorité exige le tamlīk : le bénéficiaire doit devenir propriétaire des biens. On ne peut pas payer le loyer directement ou offrir un repas (sauf s\'il prend possession). Certains contemporains assouplissent.',
      ar: 'الجمهور يشترط التمليك: يجب أن يصير المستحق مالكاً للزكاة. لا يجوز دفع الإيجار مباشرة أو تقديم وجبة (إلا إذا تملّكها). بعض المعاصرين يُخففون.',
      en: 'Majority requires tamlīk: recipient must become owner of the goods. One cannot pay rent directly or offer a meal (unless recipient takes possession). Some contemporaries are more flexible.',
    },
    reference: {
      courseSlug: 'bases-fiqh-zakat',
      lessonId: '005-conditions',
    },
    points: 20,
    tags: ['fiqh', 'zakat', 'tamlik'],
  },
  {
    id: 'zakat-q014',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Peut-on transférer la zakat vers un autre pays ?',
      ar: 'هل يجوز نقل الزكاة إلى بلد آخر؟',
      en: 'Can zakat be transferred to another country?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, jamais permis', ar: 'لا، ممنوع أبداً', en: 'No, never permitted' } },
      { id: 'b', text: { fr: 'Toujours permis sans restriction', ar: 'جائز دائماً بلا قيود', en: 'Always permitted without restriction' } },
      { id: 'c', text: { fr: 'L\'origine est de la donner localement, sauf besoin plus urgent ailleurs', ar: 'الأصل إخراجها محلياً، إلا لحاجة أشد في مكان آخر', en: 'Default is local, except for greater need elsewhere' } },
      { id: 'd', text: { fr: 'Seulement vers les pays musulmans', ar: 'لبلاد المسلمين فقط', en: 'Only to Muslim countries' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'La règle est de distribuer la zakat localement. Le transfert est permis si : les besoins locaux sont couverts, ou il y a un besoin plus urgent ailleurs (famine, guerre), ou des proches éligibles dans un autre pays.',
      ar: 'الأصل توزيع الزكاة محلياً. يجوز النقل إذا: استُغني محلياً، أو وُجدت حاجة أشد في مكان آخر (مجاعة، حرب)، أو وُجد أقارب مستحقون في بلد آخر.',
      en: 'Default is local distribution. Transfer is permitted if: local needs are covered, or there\'s greater need elsewhere (famine, war), or eligible relatives in another country.',
    },
    reference: {
      courseSlug: 'bases-fiqh-zakat',
      lessonId: '006-distribution',
    },
    points: 20,
    tags: ['fiqh', 'zakat', 'transfer'],
  },
  {
    id: 'zakat-q015',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle est la sanction pour celui qui refuse de payer la zakat ?',
      ar: 'ما حكم من يمتنع عن دفع الزكاة؟',
      en: 'What is the ruling on one who refuses to pay zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'Péché majeur ; si par déni, c\'est de la mécréance', ar: 'كبيرة؛ وإن كان جحوداً فهو كفر', en: 'Major sin; if by denial, it\'s disbelief' } },
      { id: 'b', text: { fr: 'Péché mineur seulement', ar: 'صغيرة فقط', en: 'Minor sin only' } },
      { id: 'c', text: { fr: 'Pas de sanction', ar: 'لا عقوبة', en: 'No sanction' } },
      { id: 'd', text: { fr: 'Seulement une amende', ar: 'غرامة فقط', en: 'Only a fine' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Refuser de payer par avarice = péché majeur, on prend de force. Nier son obligation = mécréance par consensus. Abu Bakr a combattu ceux qui refusaient la zakat après la mort du Prophète ﷺ.',
      ar: 'الامتناع بخلاً = كبيرة، تُؤخذ منه قهراً. جحود وجوبها = كفر بالإجماع. أبو بكر قاتل مانعي الزكاة بعد وفاة النبي ﷺ.',
      en: 'Refusing out of greed = major sin, taken by force. Denying its obligation = disbelief by consensus. Abu Bakr fought those who refused zakat after Prophet\'s ﷺ death.',
    },
    reference: {
      courseSlug: 'bases-fiqh-zakat',
      lessonId: '007-sanctions',
    },
    points: 20,
    tags: ['fiqh', 'zakat', 'hukm'],
  },
];

// ============================================
// Export du Quiz
// ============================================

export const quizZakat: Quiz = {
  id: 'quiz-fiqh-zakat',
  type: 'module',
  courseSlug: 'bases-fiqh-zakat',
  title: {
    fr: 'Quiz : La Zakat (Aumône Légale)',
    ar: 'اختبار: الزكاة',
    en: 'Quiz: Zakat (Obligatory Charity)',
  },
  description: {
    fr: 'Testez vos connaissances sur les règles de la zakat : conditions, nisab, bénéficiaires.',
    ar: 'اختبر معلوماتك عن أحكام الزكاة: الشروط، النصاب، المستحقون.',
    en: 'Test your knowledge of zakat rules: conditions, nisab, beneficiaries.',
  },
  instructions: {
    fr: 'Maîtrisez le 3ème pilier de l\'Islam qui purifie la richesse.',
    ar: 'أتقن الركن الثالث من الإسلام الذي يُطهر المال.',
    en: 'Master the 3rd pillar of Islam that purifies wealth.',
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

export default quizZakat;
