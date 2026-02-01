/**
 * Examen Final - Fiqh de la Zakat
 * 
 * 40 questions QCM couvrant tous les aspects de la Zakat :
 * - Définition et statut
 * - Conditions d'obligation
 * - Biens soumis à la Zakat
 * - Nisab et taux
 * - Bénéficiaires (Asnaf)
 * - Zakat al-Fitr
 */

import { ExamConfig, ExamQuestion } from '../types';

// ============================================
// Questions - Définition et Statut
// ============================================

const definitionQuestions: ExamQuestion[] = [
  {
    id: 'zakat-def-001',
    question: {
      fr: 'Quelle est la signification linguistique de "Zakat" ?',
      ar: 'ما معنى الزكاة لغةً؟',
      en: 'What is the linguistic meaning of "Zakat"?',
    },
    options: [
      { id: 'a', text: { fr: 'La purification et l\'accroissement', ar: 'التطهير والنماء', en: 'Purification and growth' } },
      { id: 'b', text: { fr: 'L\'impôt', ar: 'الضريبة', en: 'Tax' } },
      { id: 'c', text: { fr: 'Le partage', ar: 'المشاركة', en: 'Sharing' } },
      { id: 'd', text: { fr: 'L\'obligation', ar: 'الوجوب', en: 'Obligation' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Zakat vient de "Zakaa" qui signifie purifier et croître. Elle purifie les biens et les fait croître en bénédiction.',
      ar: 'الزكاة من "زكا" أي طهّر ونما. فهي تُطهر المال وتُنميه بالبركة.',
      en: 'Zakat comes from "Zakaa" meaning to purify and grow. It purifies wealth and increases it in blessing.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'definition',
  },
  {
    id: 'zakat-def-002',
    question: {
      fr: 'Quel est le statut de la Zakat en Islam ?',
      ar: 'ما حكم الزكاة في الإسلام؟',
      en: 'What is the ruling of Zakat in Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Sunna Mu\'akkada', ar: 'سنة مؤكدة', en: 'Confirmed Sunnah' } },
      { id: 'b', text: { fr: 'Recommandée', ar: 'مستحبة', en: 'Recommended' } },
      { id: 'c', text: { fr: 'Obligatoire - 3ème pilier de l\'Islam', ar: 'فرض - الركن الثالث من أركان الإسلام', en: 'Obligatory - 3rd pillar of Islam' } },
      { id: 'd', text: { fr: 'Permise', ar: 'مباحة', en: 'Permissible' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'La Zakat est le 3ème pilier de l\'Islam, obligatoire par le Coran, la Sunna et le consensus des savants.',
      ar: 'الزكاة هي الركن الثالث من أركان الإسلام، واجبة بالقرآن والسنة وإجماع العلماء.',
      en: 'Zakat is the 3rd pillar of Islam, obligatory by Quran, Sunnah and scholarly consensus.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'definition',
  },
  {
    id: 'zakat-def-003',
    question: {
      fr: 'Quel verset coranique mentionne les bénéficiaires de la Zakat ?',
      ar: 'ما الآية القرآنية التي تذكر مصارف الزكاة؟',
      en: 'Which Quranic verse mentions the recipients of Zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'Sourate At-Tawba, verset 60', ar: 'سورة التوبة، الآية 60', en: 'Surah At-Tawba, verse 60' } },
      { id: 'b', text: { fr: 'Sourate Al-Baqara, verset 183', ar: 'سورة البقرة، الآية 183', en: 'Surah Al-Baqara, verse 183' } },
      { id: 'c', text: { fr: 'Sourate An-Nisa, verset 36', ar: 'سورة النساء، الآية 36', en: 'Surah An-Nisa, verse 36' } },
      { id: 'd', text: { fr: 'Sourate Al-Ma\'ida, verset 55', ar: 'سورة المائدة، الآية 55', en: 'Surah Al-Ma\'ida, verse 55' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: '"Les aumônes (Sadaqat) sont destinées aux pauvres, aux indigents, à ceux qui y travaillent..." (At-Tawba 60)',
      ar: '"إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا..." (التوبة: 60)',
      en: '"The alms are only for the poor, the needy, those who collect them..." (At-Tawba 60)',
    },
    points: 3,
    difficulty: 'medium',
    category: 'definition',
  },
  {
    id: 'zakat-def-004',
    question: {
      fr: 'Que dit le Prophète ﷺ sur celui qui refuse de payer la Zakat ?',
      ar: 'ماذا قال النبي ﷺ فيمن يمنع الزكاة؟',
      en: 'What did the Prophet ﷺ say about one who refuses to pay Zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'C\'est un péché mineur', ar: 'إنه ذنب صغير', en: 'It is a minor sin' } },
      { id: 'b', text: { fr: 'Il n\'y a pas de conséquence', ar: 'لا عقوبة', en: 'There is no consequence' } },
      { id: 'c', text: { fr: 'Il doit faire des bonnes actions supplémentaires', ar: 'عليه أعمال صالحة إضافية', en: 'He must do extra good deeds' } },
      { id: 'd', text: { fr: 'Son argent sera transformé en serpent le Jour du Jugement', ar: 'يُحول ماله إلى ثعبان يوم القيامة', en: 'His money will become a serpent on Judgment Day' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Le Prophète ﷺ a décrit que l\'argent dont on n\'a pas payé la Zakat sera transformé en serpent chauve qui s\'enroulera autour de son cou.',
      ar: 'وصف النبي ﷺ أن المال الذي لم تُؤدَّ زكاته سيُحول إلى شجاع أقرع يطوّقه يوم القيامة.',
      en: 'The Prophet ﷺ described that wealth from which Zakat was not paid will become a bald serpent coiling around one\'s neck.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'definition',
  },
];

// ============================================
// Questions - Conditions d'Obligation
// ============================================

const conditionsQuestions: ExamQuestion[] = [
  {
    id: 'zakat-cond-001',
    question: {
      fr: 'Quelles sont les conditions d\'obligation de la Zakat ?',
      ar: 'ما شروط وجوب الزكاة؟',
      en: 'What are the conditions for Zakat to be obligatory?',
    },
    options: [
      { id: 'a', text: { fr: 'Islam, liberté, possession du Nisab, passage d\'une année lunaire (Hawl)', ar: 'الإسلام، الحرية، ملك النصاب، مرور الحول', en: 'Islam, freedom, owning Nisab, passage of lunar year (Hawl)' } },
      { id: 'b', text: { fr: 'Être riche uniquement', ar: 'أن يكون غنيًا فقط', en: 'Being rich only' } },
      { id: 'c', text: { fr: 'Être marié et avoir des enfants', ar: 'أن يكون متزوجًا وله أولاد', en: 'Being married with children' } },
      { id: 'd', text: { fr: 'Avoir plus de 40 ans', ar: 'أن يكون عمره فوق 40 سنة', en: 'Being over 40 years old' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les conditions sont : être musulman, libre, posséder le Nisab (seuil minimum) et qu\'une année lunaire soit passée sur cette possession.',
      ar: 'الشروط هي: الإسلام، الحرية، ملك النصاب، ومرور حول قمري على هذا الملك.',
      en: 'Conditions are: being Muslim, free, owning the Nisab (minimum threshold), and a lunar year passing on that possession.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'conditions',
  },
  {
    id: 'zakat-cond-002',
    question: {
      fr: 'Qu\'est-ce que le Nisab ?',
      ar: 'ما هو النصاب؟',
      en: 'What is the Nisab?',
    },
    options: [
      { id: 'a', text: { fr: 'Le pourcentage de Zakat à payer', ar: 'نسبة الزكاة الواجبة', en: 'The percentage of Zakat to pay' } },
      { id: 'b', text: { fr: 'La date de paiement', ar: 'تاريخ الدفع', en: 'The payment date' } },
      { id: 'c', text: { fr: 'Le seuil minimum de richesse rendant la Zakat obligatoire', ar: 'الحد الأدنى من المال الذي تجب فيه الزكاة', en: 'The minimum threshold of wealth making Zakat obligatory' } },
      { id: 'd', text: { fr: 'Le type de bien', ar: 'نوع المال', en: 'The type of wealth' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le Nisab est le seuil minimum de richesse (équivalent à 85g d\'or ou 595g d\'argent) au-dessus duquel la Zakat devient obligatoire.',
      ar: 'النصاب هو الحد الأدنى من المال (ما يعادل 85 غرام ذهب أو 595 غرام فضة) الذي تجب فيه الزكاة.',
      en: 'Nisab is the minimum wealth threshold (equivalent to 85g gold or 595g silver) above which Zakat becomes obligatory.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'conditions',
  },
  {
    id: 'zakat-cond-003',
    question: {
      fr: 'Qu\'est-ce que le Hawl (حول) ?',
      ar: 'ما هو الحول؟',
      en: 'What is Hawl?',
    },
    options: [
      { id: 'a', text: { fr: 'Le mois de paiement', ar: 'شهر الدفع', en: 'The month of payment' } },
      { id: 'b', text: { fr: 'La bénédiction sur les biens', ar: 'البركة في المال', en: 'The blessing on wealth' } },
      { id: 'c', text: { fr: 'Le montant total à payer', ar: 'المبلغ الإجمالي للدفع', en: 'The total amount to pay' } },
      { id: 'd', text: { fr: 'L\'écoulement d\'une année lunaire complète sur la possession du Nisab', ar: 'مرور سنة قمرية كاملة على ملك النصاب', en: 'The passage of a complete lunar year on owning the Nisab' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Le Hawl est la condition que les biens atteignant le Nisab doivent rester en possession du propriétaire pendant une année lunaire complète.',
      ar: 'الحول هو شرط بقاء المال البالغ النصاب في ملك صاحبه سنة قمرية كاملة.',
      en: 'Hawl is the condition that wealth reaching Nisab must remain in the owner\'s possession for a complete lunar year.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'conditions',
  },
  {
    id: 'zakat-cond-004',
    question: {
      fr: 'La Zakat est-elle obligatoire sur l\'argent des enfants mineurs ?',
      ar: 'هل تجب الزكاة في مال الطفل الصغير؟',
      en: 'Is Zakat obligatory on the wealth of minor children?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, le tuteur doit la payer en leur nom (avis majoritaire)', ar: 'نعم، يُخرجها الولي عنهم (قول الجمهور)', en: 'Yes, the guardian must pay on their behalf (majority view)' } },
      { id: 'b', text: { fr: 'Non, jamais', ar: 'لا، أبدًا', en: 'No, never' } },
      { id: 'c', text: { fr: 'Seulement s\'ils sont orphelins', ar: 'فقط إذا كانوا يتامى', en: 'Only if they are orphans' } },
      { id: 'd', text: { fr: 'Seulement après 10 ans', ar: 'فقط بعد 10 سنوات', en: 'Only after 10 years' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Selon la majorité des savants, la Zakat est obligatoire sur les biens des enfants et des personnes mentalement incapables, et le tuteur doit la payer.',
      ar: 'عند جمهور العلماء تجب الزكاة في مال الطفل والمجنون، ويُخرجها عنهم وليّهم.',
      en: 'According to most scholars, Zakat is obligatory on the wealth of children and the mentally incapable, and the guardian must pay it.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'conditions',
  },
];

// ============================================
// Questions - Biens soumis à la Zakat
// ============================================

const biensQuestions: ExamQuestion[] = [
  {
    id: 'zakat-biens-001',
    question: {
      fr: 'Lesquels de ces biens sont soumis à la Zakat ?',
      ar: 'أي من هذه الأموال تجب فيها الزكاة؟',
      en: 'Which of these assets are subject to Zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'Vêtements personnels', ar: 'الملابس الشخصية', en: 'Personal clothing' } },
      { id: 'b', text: { fr: 'La maison d\'habitation', ar: 'بيت السكن', en: 'The residence' } },
      { id: 'c', text: { fr: 'Or, argent, argent liquide, marchandises commerciales', ar: 'الذهب، الفضة، النقود، عروض التجارة', en: 'Gold, silver, cash, trade goods' } },
      { id: 'd', text: { fr: 'La voiture personnelle', ar: 'السيارة الشخصية', en: 'The personal car' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'La Zakat est obligatoire sur : l\'or, l\'argent, l\'argent liquide, les marchandises commerciales, le bétail, et les récoltes agricoles.',
      ar: 'تجب الزكاة في: الذهب، الفضة، النقود، عروض التجارة، الأنعام، والزروع والثمار.',
      en: 'Zakat is obligatory on: gold, silver, cash, trade goods, livestock, and agricultural produce.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'biens',
  },
  {
    id: 'zakat-biens-002',
    question: {
      fr: 'Quel est le Nisab de l\'or ?',
      ar: 'ما نصاب الذهب؟',
      en: 'What is the Nisab for gold?',
    },
    options: [
      { id: 'a', text: { fr: '20 grammes', ar: '20 غرام', en: '20 grams' } },
      { id: 'b', text: { fr: '1 kilogramme', ar: '1 كيلوغرام', en: '1 kilogram' } },
      { id: 'c', text: { fr: '100 grammes', ar: '100 غرام', en: '100 grams' } },
      { id: 'd', text: { fr: '85 grammes (20 Mithqal)', ar: '85 غرام (20 مثقالاً)', en: '85 grams (20 Mithqal)' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Le Nisab de l\'or est de 20 Mithqal, soit environ 85 grammes d\'or pur.',
      ar: 'نصاب الذهب 20 مثقالاً، أي حوالي 85 غرام من الذهب الخالص.',
      en: 'The Nisab for gold is 20 Mithqal, approximately 85 grams of pure gold.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'biens',
  },
  {
    id: 'zakat-biens-003',
    question: {
      fr: 'Quel est le Nisab de l\'argent (métal) ?',
      ar: 'ما نصاب الفضة؟',
      en: 'What is the Nisab for silver?',
    },
    options: [
      { id: 'a', text: { fr: '595 grammes (200 Dirhams)', ar: '595 غرام (200 درهم)', en: '595 grams (200 Dirhams)' } },
      { id: 'b', text: { fr: '100 grammes', ar: '100 غرام', en: '100 grams' } },
      { id: 'c', text: { fr: '1 kilogramme', ar: '1 كيلوغرام', en: '1 kilogram' } },
      { id: 'd', text: { fr: '50 grammes', ar: '50 غرام', en: '50 grams' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Nisab de l\'argent est de 200 Dirhams, soit environ 595 grammes d\'argent pur.',
      ar: 'نصاب الفضة 200 درهم، أي حوالي 595 غرام من الفضة الخالصة.',
      en: 'The Nisab for silver is 200 Dirhams, approximately 595 grams of pure silver.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'biens',
  },
  {
    id: 'zakat-biens-004',
    question: {
      fr: 'Quel est le taux de Zakat sur l\'or, l\'argent et l\'argent liquide ?',
      ar: 'ما نسبة الزكاة في الذهب والفضة والنقود؟',
      en: 'What is the Zakat rate on gold, silver and cash?',
    },
    options: [
      { id: 'a', text: { fr: '5%', ar: '5%', en: '5%' } },
      { id: 'b', text: { fr: '10%', ar: '10%', en: '10%' } },
      { id: 'c', text: { fr: '2.5% (un quart du dixième)', ar: '2.5% (ربع العشر)', en: '2.5% (one quarter of one tenth)' } },
      { id: 'd', text: { fr: '20%', ar: '20%', en: '20%' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le taux est de 2.5% (ربع العشر - un quart du dixième). Sur 1000€, on paie 25€ de Zakat.',
      ar: 'النسبة هي 2.5% (ربع العشر). فعلى 1000 يُدفع 25 زكاة.',
      en: 'The rate is 2.5% (one quarter of one tenth). On 1000€, you pay 25€ Zakat.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'biens',
  },
  {
    id: 'zakat-biens-005',
    question: {
      fr: 'Les bijoux en or portés par les femmes sont-ils soumis à la Zakat ?',
      ar: 'هل تجب الزكاة في حلي الذهب الملبوسة؟',
      en: 'Are gold jewelry worn by women subject to Zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, toujours', ar: 'نعم، دائمًا', en: 'Yes, always' } },
      { id: 'b', text: { fr: 'Non, jamais', ar: 'لا، أبدًا', en: 'No, never' } },
      { id: 'c', text: { fr: 'Les savants ont divergé : certains disent oui, d\'autres non', ar: 'اختلف العلماء: بعضهم قال نعم وبعضهم قال لا', en: 'Scholars differed: some say yes, others no' } },
      { id: 'd', text: { fr: 'Seulement si plus de 1 kg', ar: 'فقط إذا كان أكثر من 1 كجم', en: 'Only if more than 1 kg' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'C\'est une question de divergence entre les savants. Les Hanafis obligent la Zakat, tandis que la majorité (Malikis, Shafi\'is, Hanbalis) l\'exempte pour l\'usage personnel modéré.',
      ar: 'هذه مسألة خلافية. الحنفية يوجبون الزكاة، بينما الجمهور (المالكية والشافعية والحنابلة) يُعفون الحلي المباحة المعتادة.',
      en: 'This is a matter of scholarly difference. Hanafis require Zakat, while the majority (Malikis, Shafi\'is, Hanbalis) exempt moderate personal jewelry.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'biens',
  },
  {
    id: 'zakat-biens-006',
    question: {
      fr: 'Comment calcule-t-on la Zakat sur les marchandises commerciales ?',
      ar: 'كيف تُحسب زكاة عروض التجارة؟',
      en: 'How is Zakat on trade goods calculated?',
    },
    options: [
      { id: 'a', text: { fr: 'Sur le prix d\'achat', ar: 'على سعر الشراء', en: 'On the purchase price' } },
      { id: 'b', text: { fr: 'On ne paie pas de Zakat sur le commerce', ar: 'لا زكاة في التجارة', en: 'No Zakat on trade' } },
      { id: 'c', text: { fr: 'Sur le profit uniquement', ar: 'على الربح فقط', en: 'On profit only' } },
      { id: 'd', text: { fr: 'Sur la valeur marchande actuelle à la fin de l\'année', ar: 'على القيمة السوقية الحالية عند حولان الحول', en: 'On current market value at the end of the year' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'On évalue les marchandises à leur valeur marchande actuelle à la fin de l\'année lunaire, puis on paie 2.5% si elles atteignent le Nisab.',
      ar: 'تُقوّم البضائع بقيمتها السوقية الحالية عند حولان الحول، ثم يُدفع 2.5% إذا بلغت النصاب.',
      en: 'Goods are valued at their current market value at the end of the lunar year, then 2.5% is paid if they reach the Nisab.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'biens',
  },
];

// ============================================
// Questions - Bénéficiaires (Asnaf)
// ============================================

const beneficiairesQuestions: ExamQuestion[] = [
  {
    id: 'zakat-benef-001',
    question: {
      fr: 'Combien de catégories de bénéficiaires de la Zakat sont mentionnées dans le Coran ?',
      ar: 'كم صنفًا من أصناف الزكاة ذُكر في القرآن؟',
      en: 'How many categories of Zakat recipients are mentioned in the Quran?',
    },
    options: [
      { id: 'a', text: { fr: '8 catégories', ar: '8 أصناف', en: '8 categories' } },
      { id: 'b', text: { fr: '5 catégories', ar: '5 أصناف', en: '5 categories' } },
      { id: 'c', text: { fr: '10 catégories', ar: '10 أصناف', en: '10 categories' } },
      { id: 'd', text: { fr: '12 catégories', ar: '12 صنفًا', en: '12 categories' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Coran mentionne 8 catégories dans At-Tawba 60 : les pauvres, les indigents, les collecteurs, les cœurs à réconcilier, l\'affranchissement, les endettés, le sentier d\'Allah, le voyageur.',
      ar: 'ذكر القرآن 8 أصناف في التوبة 60: الفقراء، المساكين، العاملين عليها، المؤلفة قلوبهم، في الرقاب، الغارمين، في سبيل الله، ابن السبيل.',
      en: 'Quran mentions 8 categories in At-Tawba 60: the poor, needy, collectors, those whose hearts are to be reconciled, freeing slaves, debtors, in Allah\'s cause, travelers.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'beneficiaires',
  },
  {
    id: 'zakat-benef-002',
    question: {
      fr: 'Quelle est la différence entre "Faqir" (pauvre) et "Miskin" (indigent) ?',
      ar: 'ما الفرق بين الفقير والمسكين؟',
      en: 'What is the difference between "Faqir" (poor) and "Miskin" (needy)?',
    },
    options: [
      { id: 'a', text: { fr: 'Aucune différence', ar: 'لا فرق بينهما', en: 'No difference' } },
      { id: 'b', text: { fr: 'Le Miskin est un voyageur', ar: 'المسكين هو المسافر', en: 'Miskin is a traveler' } },
      { id: 'c', text: { fr: 'Le Faqir n\'a rien, le Miskin a quelque chose mais insuffisant', ar: 'الفقير لا يملك شيئًا، والمسكين يملك شيئًا لا يكفيه', en: 'Faqir has nothing, Miskin has something but insufficient' } },
      { id: 'd', text: { fr: 'Le Faqir est un étudiant', ar: 'الفقير هو الطالب', en: 'Faqir is a student' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Selon l\'avis majoritaire, le Faqir est celui qui n\'a rien ou presque, tandis que le Miskin a quelque chose mais ne couvre pas ses besoins essentiels.',
      ar: 'عند الجمهور، الفقير من لا يملك شيئًا أو يملك القليل، والمسكين يملك شيئًا لكنه لا يكفي حاجاته الأساسية.',
      en: 'According to the majority, Faqir has nothing or very little, while Miskin has something but not enough for basic needs.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'beneficiaires',
  },
  {
    id: 'zakat-benef-003',
    question: {
      fr: 'Qui sont "Al-Mu\'allafatu Qulubuhum" (المؤلفة قلوبهم) ?',
      ar: 'من هم المؤلفة قلوبهم؟',
      en: 'Who are "Al-Mu\'allafatu Qulubuhum"?',
    },
    options: [
      { id: 'a', text: { fr: 'Les savants', ar: 'العلماء', en: 'Scholars' } },
      { id: 'b', text: { fr: 'Les femmes veuves', ar: 'الأرامل', en: 'Widows' } },
      { id: 'c', text: { fr: 'Les orphelins', ar: 'الأيتام', en: 'Orphans' } },
      { id: 'd', text: { fr: 'Ceux dont on veut gagner les cœurs à l\'Islam ou les affermir', ar: 'من يُراد تأليف قلوبهم للإسلام أو تثبيتهم', en: 'Those whose hearts are to be reconciled to Islam or strengthened' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Ce sont ceux qu\'on souhaite attirer vers l\'Islam (nouveaux convertis, sympathisants) ou dont on veut affermir la foi.',
      ar: 'هم من يُراد تقريبهم إلى الإسلام (كالمسلمين الجدد) أو تثبيت إيمانهم.',
      en: 'They are those one wishes to attract to Islam (new converts, sympathizers) or whose faith one wants to strengthen.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'beneficiaires',
  },
  {
    id: 'zakat-benef-004',
    question: {
      fr: 'Que signifie "Fi Sabilillah" (في سبيل الله) parmi les bénéficiaires ?',
      ar: 'ما معنى "في سبيل الله" من مصارف الزكاة؟',
      en: 'What does "Fi Sabilillah" mean among Zakat recipients?',
    },
    options: [
      { id: 'a', text: { fr: 'Principalement le Jihad et la défense de l\'Islam (avis classique)', ar: 'أساسًا الجهاد والدفاع عن الإسلام (القول التقليدي)', en: 'Mainly Jihad and defense of Islam (classical view)' } },
      { id: 'b', text: { fr: 'Toute bonne œuvre', ar: 'كل عمل خير', en: 'Any good deed' } },
      { id: 'c', text: { fr: 'Uniquement la construction de mosquées', ar: 'بناء المساجد فقط', en: 'Only building mosques' } },
      { id: 'd', text: { fr: 'Le pèlerinage', ar: 'الحج', en: 'Pilgrimage' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'L\'avis classique limite cela au Jihad. Certains savants contemporains l\'élargissent aux activités de da\'wa et d\'éducation islamique.',
      ar: 'القول التقليدي يحصره في الجهاد. وبعض العلماء المعاصرين يوسعونه ليشمل الدعوة والتعليم الإسلامي.',
      en: 'The classical view limits it to Jihad. Some contemporary scholars expand it to da\'wa and Islamic education.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'beneficiaires',
  },
  {
    id: 'zakat-benef-005',
    question: {
      fr: 'Peut-on donner la Zakat à ses parents ou à ses enfants ?',
      ar: 'هل يجوز إعطاء الزكاة للوالدين أو الأولاد؟',
      en: 'Can Zakat be given to one\'s parents or children?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, ils sont prioritaires', ar: 'نعم، هم أولى', en: 'Yes, they are prioritary' } },
      { id: 'b', text: { fr: 'Seulement les parents', ar: 'الوالدين فقط', en: 'Only parents' } },
      { id: 'c', text: { fr: 'Non, car on a l\'obligation de les entretenir (Nafaqa)', ar: 'لا، لأن نفقتهم واجبة', en: 'No, because one is obligated to support them (Nafaqa)' } },
      { id: 'd', text: { fr: 'Seulement les enfants', ar: 'الأولاد فقط', en: 'Only children' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'On ne peut pas donner la Zakat à ceux qu\'on a l\'obligation légale d\'entretenir (ascendants, descendants, épouse). On doit les aider de sa Nafaqa.',
      ar: 'لا يجوز إعطاء الزكاة لمن تجب نفقتهم (الأصول والفروع والزوجة). يجب إعالتهم من النفقة الواجبة.',
      en: 'Zakat cannot be given to those one is legally obligated to support (ascendants, descendants, wife). They should be helped from one\'s Nafaqa.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'beneficiaires',
  },
  {
    id: 'zakat-benef-006',
    question: {
      fr: 'Qui est "Ibn as-Sabil" (ابن السبيل) ?',
      ar: 'من هو ابن السبيل؟',
      en: 'Who is "Ibn as-Sabil"?',
    },
    options: [
      { id: 'a', text: { fr: 'Un orphelin', ar: 'يتيم', en: 'An orphan' } },
      { id: 'b', text: { fr: 'Un étudiant', ar: 'طالب', en: 'A student' } },
      { id: 'c', text: { fr: 'Un commerçant', ar: 'تاجر', en: 'A merchant' } },
      { id: 'd', text: { fr: 'Un voyageur à court de moyens, même s\'il est riche dans son pays', ar: 'مسافر انقطعت به السُبُل، حتى لو كان غنيًا في بلده', en: 'A stranded traveler, even if rich in his homeland' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Ibn as-Sabil est le voyageur qui se trouve à court de moyens pour continuer son voyage, même s\'il est riche dans son pays d\'origine.',
      ar: 'ابن السبيل هو المسافر الذي انقطعت به السُّبُل ولا يجد ما يُوصله إلى بلده، حتى لو كان غنيًا في وطنه.',
      en: 'Ibn as-Sabil is a traveler who is stranded and cannot continue his journey, even if he is wealthy in his homeland.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'beneficiaires',
  },
];

// ============================================
// Questions - Zakat al-Fitr
// ============================================

const zakatFitrQuestions: ExamQuestion[] = [
  {
    id: 'zakat-fitr-001',
    question: {
      fr: 'Quand Zakat al-Fitr a-t-elle été prescrite ?',
      ar: 'متى فُرضت زكاة الفطر؟',
      en: 'When was Zakat al-Fitr prescribed?',
    },
    options: [
      { id: 'a', text: { fr: 'En l\'an 1 de l\'Hégire', ar: 'السنة الأولى للهجرة', en: 'In year 1 of Hijra' } },
      { id: 'b', text: { fr: 'En l\'an 2 de l\'Hégire, avec le jeûne de Ramadan', ar: 'السنة الثانية للهجرة، مع صيام رمضان', en: 'In year 2 of Hijra, with Ramadan fasting' } },
      { id: 'c', text: { fr: 'En l\'an 9 de l\'Hégire', ar: 'السنة التاسعة للهجرة', en: 'In year 9 of Hijra' } },
      { id: 'd', text: { fr: 'Avant l\'Hégire', ar: 'قبل الهجرة', en: 'Before Hijra' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Zakat al-Fitr a été prescrite en l\'an 2 de l\'Hégire, la même année que le jeûne de Ramadan.',
      ar: 'فُرضت زكاة الفطر في السنة الثانية للهجرة، نفس السنة التي فُرض فيها صيام رمضان.',
      en: 'Zakat al-Fitr was prescribed in year 2 of Hijra, the same year Ramadan fasting was prescribed.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'zakat-fitr',
  },
  {
    id: 'zakat-fitr-002',
    question: {
      fr: 'Sur qui est obligatoire Zakat al-Fitr ?',
      ar: 'على من تجب زكاة الفطر؟',
      en: 'On whom is Zakat al-Fitr obligatory?',
    },
    options: [
      { id: 'a', text: { fr: 'Uniquement sur les riches', ar: 'الأغنياء فقط', en: 'Only on the rich' } },
      { id: 'b', text: { fr: 'Sur tout musulman qui possède plus que sa nourriture du jour de l\'Aïd', ar: 'على كل مسلم يملك ما يزيد عن قوت يوم العيد', en: 'On every Muslim who has more than his food for Eid day' } },
      { id: 'c', text: { fr: 'Uniquement sur les hommes', ar: 'الرجال فقط', en: 'Only on men' } },
      { id: 'd', text: { fr: 'Uniquement sur ceux qui ont jeûné', ar: 'من صام فقط', en: 'Only on those who fasted' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Zakat al-Fitr est obligatoire sur tout musulman (homme, femme, enfant) qui possède plus que sa nourriture et celle de sa famille le jour de l\'Aïd.',
      ar: 'زكاة الفطر واجبة على كل مسلم (رجل، امرأة، طفل) يملك ما يزيد عن قوته وقوت عياله يوم العيد.',
      en: 'Zakat al-Fitr is obligatory on every Muslim (man, woman, child) who has more than his and his family\'s food for Eid day.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'zakat-fitr',
  },
  {
    id: 'zakat-fitr-003',
    question: {
      fr: 'Quelle est la quantité de Zakat al-Fitr par personne ?',
      ar: 'ما مقدار زكاة الفطر للفرد؟',
      en: 'What is the amount of Zakat al-Fitr per person?',
    },
    options: [
      { id: 'a', text: { fr: '1 Saa (environ 2,5-3 kg) de nourriture', ar: 'صاع واحد (حوالي 2.5-3 كجم) من الطعام', en: '1 Saa (about 2.5-3 kg) of food' } },
      { id: 'b', text: { fr: '10 kg de nourriture', ar: '10 كجم من الطعام', en: '10 kg of food' } },
      { id: 'c', text: { fr: '500 grammes', ar: '500 غرام', en: '500 grams' } },
      { id: 'd', text: { fr: '2.5% de ses revenus', ar: '2.5% من دخله', en: '2.5% of income' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'La quantité est d\'un Saa (environ 2,5-3 kg) de la nourriture courante du pays (blé, riz, dattes...) par personne.',
      ar: 'المقدار صاع واحد (حوالي 2.5-3 كجم) من قوت البلد (قمح، أرز، تمر...) عن كل فرد.',
      en: 'The amount is one Saa (about 2.5-3 kg) of the country\'s staple food (wheat, rice, dates...) per person.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'zakat-fitr',
  },
  {
    id: 'zakat-fitr-004',
    question: {
      fr: 'Quand doit-on payer Zakat al-Fitr ?',
      ar: 'متى يجب إخراج زكاة الفطر؟',
      en: 'When should Zakat al-Fitr be paid?',
    },
    options: [
      { id: 'a', text: { fr: 'N\'importe quand pendant Ramadan', ar: 'في أي وقت من رمضان', en: 'Anytime during Ramadan' } },
      { id: 'b', text: { fr: 'Avant la prière de l\'Aïd (préférable : 1-2 jours avant)', ar: 'قبل صلاة العيد (يُستحب: قبلها بيوم أو يومين)', en: 'Before Eid prayer (preferred: 1-2 days before)' } },
      { id: 'c', text: { fr: 'Après la prière de l\'Aïd', ar: 'بعد صلاة العيد', en: 'After Eid prayer' } },
      { id: 'd', text: { fr: 'Le 15ème jour de Ramadan', ar: 'في اليوم 15 من رمضان', en: 'On the 15th of Ramadan' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le temps obligatoire est avant la prière de l\'Aïd. Il est permis de l\'avancer d\'un ou deux jours. La retarder après la prière la transforme en sadaqa ordinaire.',
      ar: 'الوقت الواجب قبل صلاة العيد. ويجوز تقديمها بيوم أو يومين. وتأخيرها بعد الصلاة يجعلها صدقة عادية.',
      en: 'The obligatory time is before Eid prayer. It is permissible to pay 1-2 days earlier. Delaying after prayer makes it ordinary charity.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'zakat-fitr',
  },
  {
    id: 'zakat-fitr-005',
    question: {
      fr: 'Quelle est la sagesse de Zakat al-Fitr ?',
      ar: 'ما الحكمة من زكاة الفطر؟',
      en: 'What is the wisdom behind Zakat al-Fitr?',
    },
    options: [
      { id: 'a', text: { fr: 'Augmenter ses richesses', ar: 'زيادة الثروة', en: 'Increasing wealth' } },
      { id: 'b', text: { fr: 'Purifier le jeûne et nourrir les pauvres le jour de l\'Aïd', ar: 'تطهير الصيام وإطعام المساكين يوم العيد', en: 'Purifying fasting and feeding the poor on Eid' } },
      { id: 'c', text: { fr: 'Payer une dette à Allah', ar: 'سداد دين لله', en: 'Paying a debt to Allah' } },
      { id: 'd', text: { fr: 'Obtenir des récompenses doubles', ar: 'الحصول على أجر مضاعف', en: 'Getting double rewards' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Ibn Abbas (رضي الله عنه) dit : "Le Prophète ﷺ a prescrit Zakat al-Fitr comme purification du jeûne des paroles futiles et comme nourriture pour les pauvres."',
      ar: 'قال ابن عباس رضي الله عنه: "فرض رسول الله ﷺ زكاة الفطر طُهرة للصائم من اللغو والرفث، وطُعمة للمساكين."',
      en: 'Ibn Abbas (RA) said: "The Prophet ﷺ prescribed Zakat al-Fitr as purification of fasting from idle talk and as food for the poor."',
    },
    points: 2,
    difficulty: 'easy',
    category: 'zakat-fitr',
  },
];

// ============================================
// Questions - Actifs Financiers Modernes
// ============================================

const modernFinanceQuestions: ExamQuestion[] = [
  {
    id: 'zakat-modern-001',
    question: {
      fr: 'Doit-on payer la Zakat sur les actions en bourse ?',
      ar: 'هل تجب الزكاة على الأسهم في البورصة؟',
      en: 'Must one pay Zakat on stock market shares?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, jamais', ar: 'لا، أبدا', en: 'No, never' } },
      { id: 'b', text: { fr: 'Oui, sur la valeur marchande si elles atteignent le Nisab et passent un an', ar: 'نعم، على القيمة السوقية إن بلغت النصاب ومر عليها حول', en: 'Yes, on market value if reaching Nisab and one year passes' } },
      { id: 'c', text: { fr: 'Uniquement sur les dividendes', ar: 'على الأرباح فقط', en: 'Only on dividends' } },
      { id: 'd', text: { fr: 'Seulement si vendues', ar: 'فقط إذا بيعت', en: 'Only if sold' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Oui, on paie 2,5% sur la valeur marchande totale des actions si elles atteignent le Nisab (environ 85g d\'or) et qu\'un an lunaire passe. Cela inclut les actions et leur valeur actuelle.',
      ar: 'نعم، تُدفع 2.5% على القيمة السوقية الكلية للأسهم إن بلغت النصاب (حوالي 85غ من الذهب) ومر عليها حول قمري. يشمل الأسهم وقيمتها الحالية.',
      en: 'Yes, pay 2.5% on total market value of shares if reaching Nisab (about 85g gold) and lunar year passes. Includes shares and their current value.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'modern-finance',
  },
  {
    id: 'zakat-modern-002',
    question: {
      fr: 'Comment calculer la Zakat sur un bien immobilier locatif ?',
      ar: 'كيف تُحسب الزكاة على العقار المُؤجَّر؟',
      en: 'How to calculate Zakat on rental property?',
    },
    options: [
      { id: 'a', text: { fr: 'Sur la valeur totale du bien (prix d\'achat)', ar: 'على القيمة الكلية للعقار (سعر الشراء)', en: 'On total property value (purchase price)' } },
      { id: 'b', text: { fr: 'Pas de Zakat sur l\'immobilier', ar: 'لا زكاة على العقارات', en: 'No Zakat on real estate' } },
      { id: 'c', text: { fr: 'Uniquement sur le revenu locatif net après déduction des charges', ar: 'على دخل الإيجار الصافي فقط بعد خصم المصاريف', en: 'Only on net rental income after expenses' } },
      { id: 'd', text: { fr: 'Sur 10% du prix du bien', ar: 'على 10% من سعر العقار', en: 'On 10% of property price' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Pour un bien locatif (non destiné à la vente), on paie la Zakat uniquement sur le revenu locatif net épargné pendant un an, pas sur la valeur du bien lui-même.',
      ar: 'للعقار المُؤجَّر (غير المُعد للبيع)، تُدفع الزكاة على دخل الإيجار الصافي المُدَّخَر لمدة عام فقط، وليس على قيمة العقار نفسه.',
      en: 'For rental property (not for sale), pay Zakat only on net rental income saved for a year, not on property value itself.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'modern-finance',
  },
  {
    id: 'zakat-modern-003',
    question: {
      fr: 'Doit-on payer la Zakat sur les fonds de retraite (401k, pension) ?',
      ar: 'هل تجب الزكاة على صناديق التقاعد؟',
      en: 'Must one pay Zakat on retirement funds (401k, pension)?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, car l\'argent est bloqué', ar: 'لا، لأن المال محجوز', en: 'No, because money is locked' } },
      { id: 'b', text: { fr: 'Oui, si accessible même avec pénalité', ar: 'نعم، إن كان قابلا للسحب حتى مع غرامة', en: 'Yes, if accessible even with penalty' } },
      { id: 'c', text: { fr: 'Seulement après la retraite', ar: 'بعد التقاعد فقط', en: 'Only after retirement' } },
      { id: 'd', text: { fr: 'Jamais de Zakat sur les pensions', ar: 'لا زكاة على المعاشات أبدا', en: 'Never Zakat on pensions' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Deux avis : 1) Oui chaque année si vous avez le contrôle (même théorique) du montant. 2) Non tant que bloqué, mais on paie une Zakat cumulative à la réception. L\'avis majoritaire contemporain favorise l\'option 1.',
      ar: 'رأيان: ١) نعم كل عام إن كان لك سيطرة (حتى نظرية) على المبلغ. ٢) لا طالما محجوز، لكن تُدفع زكاة تراكمية عند الاستلام. الرأي المعاصر الراجح يفضل الخيار ١.',
      en: 'Two opinions: 1) Yes annually if you have (even theoretical) control of amount. 2) No while locked, but pay cumulative Zakat upon receipt. Majority contemporary opinion favors option 1.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'modern-finance',
  },
  {
    id: 'zakat-modern-004',
    question: {
      fr: 'La Zakat est-elle due sur les cryptomonnaies (Bitcoin, Ethereum) ?',
      ar: 'هل تجب الزكاة على العملات الرقمية (بيتكوين، إيثيريوم)؟',
      en: 'Is Zakat due on cryptocurrencies (Bitcoin, Ethereum)?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, car ce n\'est pas de la monnaie réelle', ar: 'لا، لأنها ليست عملة حقيقية', en: 'No, as it\'s not real currency' } },
      { id: 'b', text: { fr: 'Oui, traitée comme de l\'or/argent : 2,5% de la valeur si Nisab et un an', ar: 'نعم، تُعامل كالذهب/الفضة: 2.5% من القيمة إن بلغت النصاب ومر حول', en: 'Yes, treated like gold/silver: 2.5% of value if Nisab and one year' } },
      { id: 'c', text: { fr: 'Uniquement si convertie en monnaie fiduciaire', ar: 'فقط إذا حُولت لعملة ورقية', en: 'Only if converted to fiat currency' } },
      { id: 'd', text: { fr: '10% de Zakat', ar: '10% زكاة', en: '10% Zakat' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Selon l\'avis majoritaire des savants contemporains, les cryptomonnaies sont soumises à la Zakat comme l\'or : 2,5% de leur valeur marchande si elles atteignent le Nisab et qu\'un an passe.',
      ar: 'عند أغلب العلماء المعاصرين، العملات الرقمية تخضع للزكاة كالذهب: 2.5% من قيمتها السوقية إن بلغت النصاب ومر عليها حول.',
      en: 'According to majority of contemporary scholars, cryptocurrencies are subject to Zakat like gold: 2.5% of their market value if reaching Nisab and one year passes.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'modern-finance',
  },
  {
    id: 'zakat-modern-005',
    question: {
      fr: 'Un ETF (fonds indiciel coté) d\'or physique, comment calculer la Zakat ?',
      ar: 'صندوق ETF للذهب الفعلي، كيف تُحسب الزكاة؟',
      en: 'A physical gold ETF, how to calculate Zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'Pas de Zakat sur les ETF', ar: 'لا زكاة على صناديق ETF', en: 'No Zakat on ETFs' } },
      { id: 'b', text: { fr: 'Comme la Zakat sur l\'or : 2,5% si 85g et un an', ar: 'كزكاة الذهب: 2.5% إن بلغ 85غ ومر حول', en: 'Like gold Zakat: 2.5% if 85g and one year' } },
      { id: 'c', text: { fr: '5% de Zakat', ar: '5% زكاة', en: '5% Zakat' } },
      { id: 'd', text: { fr: 'Seulement lors de la vente', ar: 'عند البيع فقط', en: 'Only upon sale' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Un ETF adossé à de l\'or physique (où vous possédez réellement de l\'or) est soumis à la Zakat de l\'or : 2,5% si vous possédez l\'équivalent de 85g d\'or et qu\'un an passe.',
      ar: 'صندوق ETF مدعوم بالذهب الفعلي (حيث تملك فعليا ذهبا) يخضع لزكاة الذهب: 2.5% إن ملكت ما يعادل 85غ من الذهب ومر حول.',
      en: 'A physical gold-backed ETF (where you actually own gold) is subject to gold Zakat: 2.5% if you own equivalent of 85g gold and one year passes.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'modern-finance',
  },
  {
    id: 'zakat-modern-006',
    question: {
      fr: 'Les obligations (bonds) sont-elles soumises à la Zakat ?',
      ar: 'هل السندات (bonds) تخضع للزكاة؟',
      en: 'Are bonds subject to Zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, les obligations sont interdites en Islam (Riba)', ar: 'لا، السندات محرمة في الإسلام (ربا)', en: 'No, bonds are forbidden in Islam (Riba)' } },
      { id: 'b', text: { fr: 'Oui, 2,5% sur la valeur', ar: 'نعم، 2.5% على القيمة', en: 'Yes, 2.5% on value' } },
      { id: 'c', text: { fr: 'Dépend du type d\'obligation', ar: 'حسب نوع السند', en: 'Depends on bond type' } },
      { id: 'd', text: { fr: 'Zakat seulement sur les intérêts qu\'on donne en charité', ar: 'زكاة على الفوائد التي تُعطى صدقة فقط', en: 'Zakat only on interest given to charity' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les obligations conventionnelles avec intérêts sont du Riba (usure) interdit en Islam. On ne peut les posséder. Si quelqu\'un en possède, il doit s\'en débarrasser et donner les intérêts en charité (pas de Zakat dessus car argent illicite).',
      ar: 'السندات التقليدية بالفوائد هي ربا محرم في الإسلام. لا يجوز امتلاكها. إن امتلكها أحد، يجب التخلص منها وإعطاء الفوائد صدقة (لا زكاة عليها لأنها مال حرام).',
      en: 'Conventional interest-bearing bonds are Riba (usury) forbidden in Islam. Cannot own them. If someone owns them, must dispose and give interest to charity (no Zakat on it as illicit wealth).',
    },
    points: 3,
    difficulty: 'medium',
    category: 'modern-finance',
  },
  {
    id: 'zakat-modern-007',
    question: {
      fr: 'Un compte d\'épargne avec intérêts (Riba), comment gérer la Zakat ?',
      ar: 'حساب توفير بفوائد (ربا)، كيف تُدار الزكاة؟',
      en: 'A savings account with interest (Riba), how to manage Zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'Zakat sur le capital seulement (2,5%), donner les intérêts en charité séparément', ar: 'زكاة على رأس المال فقط (2.5%)، إعطاء الفوائد صدقة منفصلة', en: 'Zakat on principal only (2.5%), give interest to charity separately' } },
      { id: 'b', text: { fr: 'Zakat sur capital + intérêts', ar: 'زكاة على رأس المال + الفوائد', en: 'Zakat on principal + interest' } },
      { id: 'c', text: { fr: 'Pas de Zakat car argent illicite', ar: 'لا زكاة لأنه مال حرام', en: 'No Zakat as illicit wealth' } },
      { id: 'd', text: { fr: '5% de Zakat', ar: '5% زكاة', en: '5% Zakat' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Payez 2,5% de Zakat sur votre capital licite. Les intérêts (Riba) doivent être donnés intégralement en charité aux pauvres (sans intention de récompense). Idéalement, utilisez des comptes sans intérêts.',
      ar: 'ادفع 2.5% زكاة على رأس مالك الحلال. الفوائد (الربا) يجب إعطاؤها كاملة صدقة للفقراء (بدون نية الأجر). من الأفضل استعمال حسابات بدون فوائد.',
      en: 'Pay 2.5% Zakat on your lawful principal. Interest (Riba) must be given entirely to charity for poor (without intention of reward). Ideally, use interest-free accounts.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'modern-finance',
  },
  {
    id: 'zakat-modern-008',
    question: {
      fr: 'Les NFTs (jetons non fongibles) sont-ils soumis à la Zakat ?',
      ar: 'هل الـNFTs (رموز غير قابلة للاستبدال) تخضع للزكاة؟',
      en: 'Are NFTs (non-fungible tokens) subject to Zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, ce n\'est pas un bien Zakatable', ar: 'لا، ليس مالا قابلا للزكاة', en: 'No, not Zakatable wealth' } },
      { id: 'b', text: { fr: 'Oui, si détenus pour la vente : 2,5% de la valeur marchande', ar: 'نعم، إن احتُفظ بها للبيع: 2.5% من القيمة السوقية', en: 'Yes, if held for sale: 2.5% of market value' } },
      { id: 'c', text: { fr: 'Zakat de 10%', ar: 'زكاة 10%', en: 'Zakat of 10%' } },
      { id: 'd', text: { fr: 'Uniquement après vente', ar: 'بعد البيع فقط', en: 'Only after sale' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Si les NFTs sont détenus comme investissement pour la revente, ils sont traités comme des biens commerciaux : Zakat de 2,5% sur leur valeur marchande si Nisab atteint. Si usage personnel (collection), pas de Zakat.',
      ar: 'إن احتُفظ بالـNFTs كاستثمار لإعادة البيع، تُعامل كسلع تجارية: زكاة 2.5% على قيمتها السوقية إن بلغت النصاب. إن كانت للاستعمال الشخصي (مجموعة)، فلا زكاة.',
      en: 'If NFTs held as investment for resale, treated as trade goods: 2.5% Zakat on market value if Nisab reached. If personal use (collection), no Zakat.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'modern-finance',
  },
  {
    id: 'zakat-modern-009',
    question: {
      fr: 'Un prêt étudiant (dette) réduit-il le montant Zakatable ?',
      ar: 'هل قرض الطالب (دين) يُقلل المبلغ الزكوي؟',
      en: 'Does a student loan (debt) reduce Zakatable amount?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, on déduit toutes les dettes', ar: 'نعم، تُخصم كل الديون', en: 'Yes, deduct all debts' } },
      { id: 'b', text: { fr: 'Non, les dettes à long terme ne se déduisent pas selon l\'avis majoritaire', ar: 'لا، الديون طويلة الأجل لا تُخصم عند الجمهور', en: 'No, long-term debts don\'t deduct per majority' } },
      { id: 'c', text: { fr: 'Seulement 50% de la dette', ar: '50% من الدين فقط', en: 'Only 50% of debt' } },
      { id: 'd', text: { fr: 'Dépend du pays', ar: 'حسب البلد', en: 'Depends on country' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Deux avis : Majoritaire = les dettes à long terme (prêt étudiant, hypothèque) ne se déduisent pas de la Zakat car non exigibles immédiatement. Minoritaire (Hanafis) = on déduit toutes les dettes. L\'avis répandu est de ne pas déduire les dettes à long terme.',
      ar: 'رأيان: الجمهور = الديون طويلة الأجل (قرض طالب، رهن عقاري) لا تُخصم من الزكاة لأنها غير مستحقة فورا. الأقلية (الحنفية) = تُخصم كل الديون. الرأي الشائع عدم خصم الديون طويلة الأجل.',
      en: 'Two opinions: Majority = long-term debts (student loan, mortgage) don\'t deduct from Zakat as not immediately due. Minority (Hanafis) = deduct all debts. Common opinion is not deducting long-term debts.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'modern-finance',
  },
  {
    id: 'zakat-modern-010',
    question: {
      fr: 'Les fonds d\'investissement Halal (Shariah-compliant), quelle Zakat ?',
      ar: 'صناديق الاستثمار الحلال (المتوافقة مع الشريعة)، ما الزكاة؟',
      en: 'Halal investment funds (Shariah-compliant), what Zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'Pas de Zakat car c\'est un fonds', ar: 'لا زكاة لأنه صندوق', en: 'No Zakat as it\'s a fund' } },
      { id: 'b', text: { fr: '2,5% sur la valeur totale de vos parts si Nisab et un an', ar: '2.5% على القيمة الكلية لحصصك إن بلغت النصاب ومر حول', en: '2.5% on total value of your shares if Nisab and one year' } },
      { id: 'c', text: { fr: 'Seulement sur les dividendes', ar: 'على الأرباح فقط', en: 'Only on dividends' } },
      { id: 'd', text: { fr: '10% de Zakat', ar: '10% زكاة', en: '10% Zakat' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Pour les fonds Halal, payez 2,5% Zakat sur la valeur marchande totale de vos parts si elles atteignent le Nisab et qu\'un an passe. C\'est comme des actions individuelles regroupées.',
      ar: 'لصناديق الاستثمار الحلال، ادفع 2.5% زكاة على القيمة السوقية الكلية لحصصك إن بلغت النصاب ومر حول. مثل أسهم فردية مجمّعة.',
      en: 'For Halal funds, pay 2.5% Zakat on total market value of your shares if reaching Nisab and one year passes. Like individual stocks grouped together.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'modern-finance',
  },
  {
    id: 'zakat-modern-011',
    question: {
      fr: 'Un bien immobilier acheté pour la revente (investissement), quelle Zakat ?',
      ar: 'عقار مُشترى لإعادة البيع (استثمار)، ما الزكاة؟',
      en: 'A property bought for resale (investment), what Zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'Pas de Zakat sur l\'immobilier', ar: 'لا زكاة على العقارات', en: 'No Zakat on real estate' } },
      { id: 'b', text: { fr: '2,5% sur la valeur marchande actuelle du bien chaque année', ar: '2.5% على القيمة السوقية الحالية للعقار كل عام', en: '2.5% on current market value of property each year' } },
      { id: 'c', text: { fr: 'Seulement lors de la vente', ar: 'عند البيع فقط', en: 'Only upon sale' } },
      { id: 'd', text: { fr: '10% sur le profit', ar: '10% على الربح', en: '10% on profit' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Un bien immobilier détenu pour la revente (\'Urud at-Tijarah) est soumis à la Zakat : 2,5% sur sa valeur marchande estimée chaque année, comme un stock commercial.',
      ar: 'العقار المُحتفَظ به لإعادة البيع (عروض التجارة) يخضع للزكاة: 2.5% على قيمته السوقية المقدرة كل عام، كمخزون تجاري.',
      en: 'Property held for resale (\'Urud at-Tijarah) is subject to Zakat: 2.5% on its estimated market value each year, like commercial inventory.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'modern-finance',
  },
  {
    id: 'zakat-modern-012',
    question: {
      fr: 'Les points de fidélité ou miles aériens ont-ils une Zakat ?',
      ar: 'هل نقاط الولاء أو الأميال الجوية عليها زكاة؟',
      en: 'Do loyalty points or air miles have Zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, 2,5% de leur valeur', ar: 'نعم، 2.5% من قيمتها', en: 'Yes, 2.5% of their value' } },
      { id: 'b', text: { fr: 'Non, car ils n\'ont pas de valeur monétaire garantie et ne sont pas transférables', ar: 'لا، لأنها ليس لها قيمة نقدية مضمونة وغير قابلة للتحويل', en: 'No, as they have no guaranteed monetary value and aren\'t transferable' } },
      { id: 'c', text: { fr: 'Uniquement si convertis en argent', ar: 'فقط إذا حُولت لمال', en: 'Only if converted to money' } },
      { id: 'd', text: { fr: 'Zakat de 10%', ar: 'زكاة 10%', en: 'Zakat of 10%' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les points de fidélité/miles n\'ont généralement pas de Zakat car : 1) pas de valeur monétaire garantie, 2) non transférables, 3) peuvent expirer. Cependant, si convertis en argent ou biens, alors Zakat applicable.',
      ar: 'نقاط الولاء/الأميال عموما ليس عليها زكاة لأن: ١) ليس لها قيمة نقدية مضمونة، ٢) غير قابلة للتحويل، ٣) قد تنتهي صلاحيتها. لكن إن حُولت لمال أو سلع، فالزكاة واجبة.',
      en: 'Loyalty points/miles generally have no Zakat as: 1) no guaranteed monetary value, 2) non-transferable, 3) may expire. However, if converted to cash or goods, then Zakat applicable.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'modern-finance',
  },
];

// ============================================
// Questions - Production Agricole (Zakat az-Zur'ū)
// ============================================

const agricultureQuestions: ExamQuestion[] = [
  {
    id: 'zakat-agri-001',
    question: {
      fr: 'Quel est le taux de Zakat sur les récoltes irriguées naturellement (pluie, rivière) ?',
      ar: 'ما نسبة زكاة المحاصيل المروية طبيعيا (مطر، نهر)؟',
      en: 'What is the Zakat rate on crops naturally irrigated (rain, river)?',
    },
    options: [
      { id: 'a', text: { fr: '2,5%', ar: '2.5%', en: '2.5%' } },
      { id: 'b', text: { fr: '5%', ar: '5%', en: '5%' } },
      { id: 'c', text: { fr: '10% (Al-\'Ushr)', ar: '10% (العُشر)', en: '10% (Al-\'Ushr)' } },
      { id: 'd', text: { fr: '20%', ar: '20%', en: '20%' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Ce qui est irrigué par la pluie, les rivières ou les sources souterraines : un dixième (10%)" (Bukhari). C\'est Al-\'Ushr.',
      ar: 'قال النبي ﷺ: "فيما سقت السماء والأنهار والعيون العشر" (البخاري). هو العُشر (10%).',
      en: 'The Prophet ﷺ said: "What is watered by rain, rivers or springs: one-tenth (10%)" (Bukhari). It\'s Al-\'Ushr.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'agriculture',
  },
  {
    id: 'zakat-agri-002',
    question: {
      fr: 'Quel est le taux de Zakat sur les récoltes irriguées artificiellement (pompes, puits) ?',
      ar: 'ما نسبة زكاة المحاصيل المروية صناعيا (مضخات، آبار)؟',
      en: 'What is the Zakat rate on crops artificially irrigated (pumps, wells)?',
    },
    options: [
      { id: 'a', text: { fr: '10%', ar: '10%', en: '10%' } },
      { id: 'b', text: { fr: '5% (Nisf al-\'Ushr)', ar: '5% (نصف العُشر)', en: '5% (Nisf al-\'Ushr)' } },
      { id: 'c', text: { fr: '2,5%', ar: '2.5%', en: '2.5%' } },
      { id: 'd', text: { fr: 'Pas de Zakat', ar: 'لا زكاة', en: 'No Zakat' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Et ce qui est irrigué par l\'effort (irrigation artificielle) : un demi-dixième (5%)" (Bukhari). C\'est Nisf al-\'Ushr, car l\'agriculteur a des coûts.',
      ar: 'قال النبي ﷺ: "وفيما سُقي بالنضح نصف العشر" (البخاري). هو نصف العُشر (5%)، لأن المزارع تحمل تكاليف.',
      en: 'The Prophet ﷺ said: "And what is irrigated by effort (artificial irrigation): half-tenth (5%)" (Bukhari). It\'s Nisf al-\'Ushr, as farmer has costs.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'agriculture',
  },
  {
    id: 'zakat-agri-003',
    question: {
      fr: 'Quel est le Nisab pour la Zakat agricole ?',
      ar: 'ما نصاب زكاة الزروع؟',
      en: 'What is the Nisab for agricultural Zakat?',
    },
    options: [
      { id: 'a', text: { fr: '85 grammes d\'or', ar: '85 غرام ذهب', en: '85 grams of gold' } },
      { id: 'b', text: { fr: 'Pas de Nisab', ar: 'لا نصاب', en: 'No Nisab' } },
      { id: 'c', text: { fr: '5 Wasq (environ 653 kg)', ar: '5 أوسق (حوالي 653 كغ)', en: '5 Wasq (about 653 kg)' } },
      { id: 'd', text: { fr: '1000 kg', ar: '1000 كغ', en: '1000 kg' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Il n\'y a pas de Sadaqa (Zakat) sur moins de 5 Wasq" (Bukhari). 1 Wasq = 60 Sa\' = environ 130 kg. Donc 5 Wasq ≈ 653 kg de grains/dattes.',
      ar: 'قال النبي ﷺ: "ليس فيما دون خمسة أوسق صدقة" (البخاري). 1 وسق = 60 صاعا = حوالي 130 كغ. إذن 5 أوسق ≈ 653 كغ من الحبوب/التمور.',
      en: 'The Prophet ﷺ said: "There is no Sadaqa on less than 5 Wasq" (Bukhari). 1 Wasq = 60 Sa\' = about 130 kg. So 5 Wasq ≈ 653 kg of grains/dates.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'agriculture',
  },
  {
    id: 'zakat-agri-004',
    question: {
      fr: 'Quels types de cultures sont soumis à la Zakat agricole ?',
      ar: 'ما أنواع المحاصيل الخاضعة لزكاة الزروع؟',
      en: 'What types of crops are subject to agricultural Zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'Uniquement le blé', ar: 'القمح فقط', en: 'Only wheat' } },
      { id: 'b', text: { fr: 'Les céréales (blé, orge, riz), les dattes, les raisins secs, et tout aliment de base stockable', ar: 'الحبوب (قمح، شعير، أرز)، التمور، الزبيب، وكل طعام أساسي قابل للتخزين', en: 'Grains (wheat, barley, rice), dates, raisins, and all storable staple food' } },
      { id: 'c', text: { fr: 'Uniquement les fruits', ar: 'الفواكه فقط', en: 'Only fruits' } },
      { id: 'd', text: { fr: 'Toutes les cultures sans exception', ar: 'كل المحاصيل بلا استثناء', en: 'All crops without exception' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La Zakat agricole s\'applique aux céréales (blé, orge, riz, maïs), légumineuses (lentilles, pois chiches), dattes, raisins secs. Condition : aliment de base stockable qui se pèse (non périssable rapidement).',
      ar: 'زكاة الزروع تُطبق على الحبوب (قمح، شعير، أرز، ذرة)، البقوليات (عدس، حمص)، التمور، الزبيب. الشرط: طعام أساسي قابل للتخزين ويُكال (غير قابل للتلف السريع).',
      en: 'Agricultural Zakat applies to grains (wheat, barley, rice, corn), legumes (lentils, chickpeas), dates, raisins. Condition: storable staple food that is measured (not quickly perishable).',
    },
    points: 3,
    difficulty: 'medium',
    category: 'agriculture',
  },
  {
    id: 'zakat-agri-005',
    question: {
      fr: 'Les légumes (tomates, concombres) sont-ils soumis à la Zakat agricole ?',
      ar: 'هل الخضروات (طماطم، خيار) تخضع لزكاة الزروع؟',
      en: 'Are vegetables (tomatoes, cucumbers) subject to agricultural Zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, 10%', ar: 'نعم، 10%', en: 'Yes, 10%' } },
      { id: 'b', text: { fr: 'Non selon l\'avis majoritaire car périssables et non stockables', ar: 'لا عند الجمهور لأنها قابلة للتلف وغير قابلة للتخزين', en: 'No per majority as perishable and not storable' } },
      { id: 'c', text: { fr: 'Seulement les tomates', ar: 'الطماطم فقط', en: 'Only tomatoes' } },
      { id: 'd', text: { fr: 'Oui, mais 2,5%', ar: 'نعم، لكن 2.5%', en: 'Yes, but 2.5%' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Selon l\'avis majoritaire, les légumes frais ne sont pas soumis à la Zakat agricole car périssables et non stockables. Cependant, si vendus, leur revenu net épargné un an est soumis à Zakat (2,5%).',
      ar: 'عند الجمهور، الخضروات الطازجة لا تخضع لزكاة الزروع لأنها قابلة للتلف وغير قابلة للتخزين. لكن إن بيعت، فدخلها الصافي المُدَّخَر لعام يخضع للزكاة (2.5%).',
      en: 'Per majority, fresh vegetables aren\'t subject to agricultural Zakat as perishable and not storable. However, if sold, their net income saved for a year is subject to Zakat (2.5%).',
    },
    points: 3,
    difficulty: 'hard',
    category: 'agriculture',
  },
  {
    id: 'zakat-agri-006',
    question: {
      fr: 'Quand la Zakat agricole doit-elle être payée ?',
      ar: 'متى تُدفع زكاة الزروع؟',
      en: 'When must agricultural Zakat be paid?',
    },
    options: [
      { id: 'a', text: { fr: 'Après un an lunaire', ar: 'بعد حول قمري', en: 'After one lunar year' } },
      { id: 'b', text: { fr: 'Au moment de la récolte', ar: 'وقت الحصاد', en: 'At harvest time' } },
      { id: 'c', text: { fr: 'En fin d\'année fiscale', ar: 'في نهاية السنة المالية', en: 'At end of fiscal year' } },
      { id: 'd', text: { fr: 'Pendant Ramadan', ar: 'في رمضان', en: 'During Ramadan' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La Zakat agricole est due immédiatement au moment de la récolte. Allah dit : "Et donnez-en l\'aumône le jour de sa récolte" (6:141). Pas besoin d\'attendre un an comme pour l\'argent.',
      ar: 'زكاة الزروع واجبة فورا وقت الحصاد. قال الله: "وَآتُوا حَقَّهُ يَوْمَ حَصَادِهِ" (6:141). لا حاجة لانتظار حول كالمال.',
      en: 'Agricultural Zakat is due immediately at harvest. Allah says: "And give its due on the day of its harvest" (6:141). No need to wait a year like for money.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'agriculture',
  },
  {
    id: 'zakat-agri-007',
    question: {
      fr: 'L\'huile d\'olive est-elle soumise à la Zakat agricole ?',
      ar: 'هل زيت الزيتون يخضع لزكاة الزروع؟',
      en: 'Is olive oil subject to agricultural Zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, jamais', ar: 'لا، أبدا', en: 'No, never' } },
      { id: 'b', text: { fr: 'Oui selon certains savants : 10% ou 5% selon irrigation, si Nisab atteint', ar: 'نعم عند بعض العلماء: 10% أو 5% حسب الري، إن بلغ النصاب', en: 'Yes per some scholars: 10% or 5% per irrigation, if Nisab reached' } },
      { id: 'c', text: { fr: 'Seulement 2,5%', ar: '2.5% فقط', en: 'Only 2.5%' } },
      { id: 'd', text: { fr: 'Uniquement en Palestine', ar: 'في فلسطين فقط', en: 'Only in Palestine' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Avis divergent. Certains (Malikis, Hanbalis) appliquent la Zakat agricole sur l\'huile d\'olive (10%/5%) si Nisab (653 kg d\'olives ou équivalent huile). D\'autres non car pas explicitement mentionné dans les Hadiths.',
      ar: 'خلاف في الرأي. البعض (المالكية، الحنابلة) يُطبقون زكاة الزروع على زيت الزيتون (10%/5%) إن بلغ النصاب (653 كغ زيتون أو ما يعادله زيتا). البعض لا لعدم ذكره صراحة في الأحاديث.',
      en: 'Opinion differs. Some (Malikis, Hanbalis) apply agricultural Zakat on olive oil (10%/5%) if Nisab (653 kg olives or equivalent oil). Others no as not explicitly mentioned in Hadiths.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'agriculture',
  },
  {
    id: 'zakat-agri-008',
    question: {
      fr: 'Un agriculteur avec irrigation mixte (50% pluie, 50% pompage), quel taux ?',
      ar: 'مزارع بري مختلط (50% مطر، 50% ضخ)، ما النسبة؟',
      en: 'A farmer with mixed irrigation (50% rain, 50% pumping), what rate?',
    },
    options: [
      { id: 'a', text: { fr: '10%', ar: '10%', en: '10%' } },
      { id: 'b', text: { fr: '5%', ar: '5%', en: '5%' } },
      { id: 'c', text: { fr: '7,5% (moyenne)', ar: '7.5% (متوسط)', en: '7.5% (average)' } },
      { id: 'd', text: { fr: 'On prend le taux dominant (ici 7,5% car égalité)', ar: 'يُؤخذ السائد (هنا 7.5% للتساوي)', en: 'Take dominant rate (here 7.5% as equal)' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'En cas d\'irrigation mixte à parts égales, l\'avis majoritaire est de prendre la moyenne : (10% + 5%) / 2 = 7,5%. Si l\'un prédomine, on prend son taux.',
      ar: 'في حال الري المختلط بنسب متساوية، الرأي الراجح أخذ المتوسط: (10% + 5%) / 2 = 7.5%. إن غلب أحدهما، يُؤخذ معدله.',
      en: 'In case of equally mixed irrigation, majority opinion is taking average: (10% + 5%) / 2 = 7.5%. If one predominates, take its rate.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'agriculture',
  },
  {
    id: 'zakat-agri-009',
    question: {
      fr: 'Les serres agricoles modernes (greenhouses) avec irrigation automatique, quel taux ?',
      ar: 'البيوت البلاستيكية الحديثة بري أوتوماتيكي، ما النسبة؟',
      en: 'Modern greenhouses with automatic irrigation, what rate?',
    },
    options: [
      { id: 'a', text: { fr: '10%', ar: '10%', en: '10%' } },
      { id: 'b', text: { fr: '5% car irrigation artificielle coûteuse', ar: '5% لأن الري الصناعي مكلف', en: '5% as artificial irrigation is costly' } },
      { id: 'c', text: { fr: 'Pas de Zakat agricole, seulement 2,5% sur le revenu net', ar: 'لا زكاة زروع، فقط 2.5% على الدخل الصافي', en: 'No agricultural Zakat, only 2.5% on net income' } },
      { id: 'd', text: { fr: '15%', ar: '15%', en: '15%' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les serres avec irrigation artificielle (pompes, systèmes automatisés) ont un coût élevé donc taux de 5% (Nisf al-\'Ushr). Les coûts d\'infrastructure et d\'énergie justifient le taux réduit.',
      ar: 'البيوت البلاستيكية بالري الصناعي (مضخات، أنظمة آلية) لها تكلفة عالية فنسبتها 5% (نصف العُشر). تكاليف البنية التحتية والطاقة تُبرر النسبة المُخفضة.',
      en: 'Greenhouses with artificial irrigation (pumps, automated systems) have high cost so rate of 5% (Nisf al-\'Ushr). Infrastructure and energy costs justify reduced rate.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'agriculture',
  },
  {
    id: 'zakat-agri-010',
    question: {
      fr: 'Doit-on déduire les coûts de production de la Zakat agricole ?',
      ar: 'هل تُخصم تكاليف الإنتاج من زكاة الزروع؟',
      en: 'Should production costs be deducted from agricultural Zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, on déduit tous les coûts', ar: 'نعم، تُخصم كل التكاليف', en: 'Yes, deduct all costs' } },
      { id: 'b', text: { fr: 'Non, on paie sur la récolte brute selon l\'avis majoritaire', ar: 'لا، تُدفع على المحصول الإجمالي عند الجمهور', en: 'No, pay on gross harvest per majority' } },
      { id: 'c', text: { fr: 'Seulement 50% des coûts', ar: '50% من التكاليف فقط', en: 'Only 50% of costs' } },
      { id: 'd', text: { fr: 'Dépend du type de culture', ar: 'حسب نوع المحصول', en: 'Depends on crop type' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'L\'avis majoritaire : on paie la Zakat sur la récolte brute sans déduire les coûts. Le taux réduit (5%) pour irrigation artificielle compense déjà les coûts. Avis minoritaire (Abu Hanifa) permet déduction des dettes agricoles.',
      ar: 'الرأي الراجح: تُدفع الزكاة على المحصول الإجمالي دون خصم التكاليف. النسبة المخفضة (5%) للري الصناعي تُعوض التكاليف. رأي أقلية (أبو حنيفة) يُجيز خصم الديون الزراعية.',
      en: 'Majority opinion: pay Zakat on gross harvest without deducting costs. Reduced rate (5%) for artificial irrigation already compensates costs. Minority opinion (Abu Hanifa) permits deducting agricultural debts.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'agriculture',
  },
];

// ============================================
// Questions - Bétail (Zakat al-An'ām)
// ============================================

const livestockQuestions: ExamQuestion[] = [
  {
    id: 'zakat-livestock-001',
    question: {
      fr: 'Quel est le Nisab minimum pour la Zakat sur les ovins (moutons/chèvres) ?',
      ar: 'ما النصاب الأدنى لزكاة الغنم (الأغنام/الماعز)؟',
      en: 'What is the minimum Nisab for Zakat on ovines (sheep/goats)?',
    },
    options: [
      { id: 'a', text: { fr: '5 têtes', ar: '5 رؤوس', en: '5 heads' } },
      { id: 'b', text: { fr: '30 têtes', ar: '30 رأسا', en: '30 heads' } },
      { id: 'c', text: { fr: '40 têtes', ar: '40 رأسا', en: '40 heads' } },
      { id: 'd', text: { fr: '100 têtes', ar: '100 رأس', en: '100 heads' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Pour 40 à 120 moutons/chèvres : 1 mouton". Donc le Nisab est 40 têtes. Moins de 40 : pas de Zakat.',
      ar: 'قال النبي ﷺ: "في 40 إلى 120 من الغنم شاة واحدة". إذن النصاب 40 رأسا. أقل من 40: لا زكاة.',
      en: 'The Prophet ﷺ said: "For 40 to 120 sheep/goats: 1 sheep". So Nisab is 40 heads. Less than 40: no Zakat.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'livestock',
  },
  {
    id: 'zakat-livestock-002',
    question: {
      fr: 'Combien de Zakat pour 60 moutons pâturant librement (Sa\'ima) ?',
      ar: 'كم زكاة 60 خروفا سائمة؟',
      en: 'How much Zakat for 60 freely grazing sheep (Sa\'ima)?',
    },
    options: [
      { id: 'a', text: { fr: '1 mouton', ar: 'شاة واحدة', en: '1 sheep' } },
      { id: 'b', text: { fr: '2 moutons', ar: 'شاتان', en: '2 sheep' } },
      { id: 'c', text: { fr: '3 moutons', ar: '3 شياه', en: '3 sheep' } },
      { id: 'd', text: { fr: 'Pas de Zakat', ar: 'لا زكاة', en: 'No Zakat' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'De 40 à 120 moutons : 1 mouton en Zakat. Donc pour 60 têtes, on donne 1 mouton d\'au moins 1 an (Jadha\' pour ovins, Thaniyy pour caprins).',
      ar: 'من 40 إلى 120 خروفا: شاة واحدة في الزكاة. إذن ل60 رأسا، تُعطى شاة واحدة بعمر سنة على الأقل (جذع للضأن، ثني للماعز).',
      en: 'From 40 to 120 sheep: 1 sheep in Zakat. So for 60 heads, give 1 sheep at least 1 year old (Jadha\' for sheep, Thaniyy for goats).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'livestock',
  },
  {
    id: 'zakat-livestock-003',
    question: {
      fr: 'Quelle est la condition "Sa\'ima" pour la Zakat du bétail ?',
      ar: 'ما شرط "السائمة" لزكاة الأنعام؟',
      en: 'What is the "Sa\'ima" condition for livestock Zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'Le bétail doit être blanc', ar: 'يجب أن تكون بيضاء', en: 'Livestock must be white' } },
      { id: 'b', text: { fr: 'Le bétail doit paître librement la majeure partie de l\'année, non nourri par le propriétaire', ar: 'يجب أن ترعى حرة معظم السنة، غير مُعلّفة من المالك', en: 'Livestock must graze freely most of year, not fed by owner' } },
      { id: 'c', text: { fr: 'Le bétail doit avoir plus de 5 ans', ar: 'يجب أن يكون عمرها أكثر من 5 سنوات', en: 'Livestock must be over 5 years old' } },
      { id: 'd', text: { fr: 'Le bétail doit être mâle', ar: 'يجب أن يكون ذكرا', en: 'Livestock must be male' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Sa\'ima = bétail qui paît librement dans les pâturages naturels la plupart de l\'année sans que le propriétaire ne le nourrisse. Si nourri constamment (Ma\'lufa), certains disent pas de Zakat, d\'autres oui.',
      ar: 'السائمة = الأنعام التي ترعى حرة في المراعي الطبيعية معظم السنة دون أن يُعلّفها المالك. إن كانت معلوفة دائما، البعض يقول لا زكاة، والبعض نعم.',
      en: 'Sa\'ima = livestock grazing freely in natural pastures most of year without owner feeding it. If constantly fed (Ma\'lufa), some say no Zakat, others yes.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'livestock',
  },
  {
    id: 'zakat-livestock-004',
    question: {
      fr: 'Quel est le Nisab pour les bovins (vaches, buffles) ?',
      ar: 'ما النصاب للبقر (الأبقار، الجاموس)؟',
      en: 'What is the Nisab for cattle (cows, buffalo)?',
    },
    options: [
      { id: 'a', text: { fr: '5 têtes', ar: '5 رؤوس', en: '5 heads' } },
      { id: 'b', text: { fr: '10 têtes', ar: '10 رؤوس', en: '10 heads' } },
      { id: 'c', text: { fr: '30 têtes', ar: '30 رأسا', en: '30 heads' } },
      { id: 'd', text: { fr: '40 têtes', ar: '40 رأسا', en: '40 heads' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le Prophète ﷺ a établi : pour 30 bovins : 1 Tabi\' (veau d\'1 an), pour 40 bovins : 1 Musinna (vache de 2 ans). Le Nisab est donc 30 têtes.',
      ar: 'النبي ﷺ حدد: ل30 بقرة: تبيع أو تبيعة (عجل عمره سنة)، ل40 بقرة: مُسنة (بقرة عمرها سنتان). إذن النصاب 30 رأسا.',
      en: 'The Prophet ﷺ established: for 30 cattle: 1 Tabi\' (1-year calf), for 40 cattle: 1 Musinna (2-year cow). So Nisab is 30 heads.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'livestock',
  },
  {
    id: 'zakat-livestock-005',
    question: {
      fr: 'Combien de Zakat pour 50 vaches Sa\'ima ?',
      ar: 'كم زكاة 50 بقرة سائمة؟',
      en: 'How much Zakat for 50 Sa\'ima cows?',
    },
    options: [
      { id: 'a', text: { fr: '1 Tabi\' (veau d\'1 an)', ar: 'تبيع واحد (عجل عمره سنة)', en: '1 Tabi\' (1-year calf)' } },
      { id: 'b', text: { fr: '1 Musinna (vache de 2 ans)', ar: 'مُسنة واحدة (بقرة عمرها سنتان)', en: '1 Musinna (2-year cow)' } },
      { id: 'c', text: { fr: '2 Musinna', ar: 'مُسنتان', en: '2 Musinna' } },
      { id: 'd', text: { fr: '1 Tabi\' + 1 Musinna', ar: 'تبيع + مُسنة', en: '1 Tabi\' + 1 Musinna' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'De 40 à 59 bovins : 1 Musinna (vache de 2 ans). Donc pour 50 vaches, on donne 1 Musinna. À 60, cela change (2 Tabi\').',
      ar: 'من 40 إلى 59 بقرة: مُسنة واحدة (بقرة عمرها سنتان). إذن ل50 بقرة، تُعطى مُسنة واحدة. عند 60، يتغير (تبيعان).',
      en: 'From 40 to 59 cattle: 1 Musinna (2-year cow). So for 50 cows, give 1 Musinna. At 60, it changes (2 Tabi\').',
    },
    points: 3,
    difficulty: 'medium',
    category: 'livestock',
  },
  {
    id: 'zakat-livestock-006',
    question: {
      fr: 'Quel est le Nisab pour les chameaux ?',
      ar: 'ما النصاب للإبل؟',
      en: 'What is the Nisab for camels?',
    },
    options: [
      { id: 'a', text: { fr: '3 têtes', ar: '3 رؤوس', en: '3 heads' } },
      { id: 'b', text: { fr: '5 têtes', ar: '5 رؤوس', en: '5 heads' } },
      { id: 'c', text: { fr: '10 têtes', ar: '10 رؤوس', en: '10 heads' } },
      { id: 'd', text: { fr: '40 têtes', ar: '40 رأسا', en: '40 heads' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a établi : pour 5 à 9 chameaux : 1 mouton. Le Nisab est donc 5 chameaux. Moins de 5 : pas de Zakat.',
      ar: 'النبي ﷺ حدد: من 5 إلى 9 من الإبل: شاة واحدة. إذن النصاب 5 من الإبل. أقل من 5: لا زكاة.',
      en: 'The Prophet ﷺ established: for 5 to 9 camels: 1 sheep. So Nisab is 5 camels. Less than 5: no Zakat.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'livestock',
  },
  {
    id: 'zakat-livestock-007',
    question: {
      fr: 'Les poulets de ferme industrielle sont-ils soumis à la Zakat du bétail ?',
      ar: 'هل الدجاج الصناعي يخضع لزكاة الأنعام؟',
      en: 'Are industrial farm chickens subject to livestock Zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, comme les moutons', ar: 'نعم، كالأغنام', en: 'Yes, like sheep' } },
      { id: 'b', text: { fr: 'Non, la Zakat du bétail concerne chameaux, bovins et ovins uniquement selon le Hadith', ar: 'لا، زكاة الأنعام خاصة بالإبل والبقر والغنم حسب الحديث', en: 'No, livestock Zakat concerns camels, cattle and ovines only per Hadith' } },
      { id: 'c', text: { fr: 'Oui, mais 10%', ar: 'نعم، لكن 10%', en: 'Yes, but 10%' } },
      { id: 'd', text: { fr: 'Seulement les œufs', ar: 'البيض فقط', en: 'Only eggs' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La Zakat du bétail (An\'am) s\'applique uniquement aux trois types mentionnés dans le Hadith : chameaux, bovins (vaches/buffles), ovins (moutons/chèvres). La volaille est considérée comme biens commerciaux (\'Urud) : 2,5% sur valeur.',
      ar: 'زكاة الأنعام تُطبق فقط على الأنواع الثلاثة المذكورة في الحديث: الإبل، البقر، الغنم (أغنام/ماعز). الدواجن تُعتبر عروض تجارة: 2.5% على القيمة.',
      en: 'Livestock Zakat (An\'am) applies only to three types mentioned in Hadith: camels, cattle (cows/buffalo), ovines (sheep/goats). Poultry considered trade goods (\'Urud): 2.5% on value.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'livestock',
  },
  {
    id: 'zakat-livestock-008',
    question: {
      fr: 'Un éleveur de vaches laitières commerciales qui les nourrit constamment, quelle Zakat ?',
      ar: 'مُربي أبقار حليب تجارية يُعلّفها دائما، ما الزكاة؟',
      en: 'A dairy farmer who constantly feeds commercial cows, what Zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'Zakat du bétail normale (Musinna)', ar: 'زكاة الأنعام العادية (مُسنة)', en: 'Normal livestock Zakat (Musinna)' } },
      { id: 'b', text: { fr: 'Pas de Zakat car Ma\'lufa (nourries)', ar: 'لا زكاة لأنها معلوفة', en: 'No Zakat as Ma\'lufa (fed)' } },
      { id: 'c', text: { fr: 'Considérées comme biens commerciaux : 2,5% sur valeur des vaches + valeur du lait vendu épargné', ar: 'تُعتبر سلع تجارية: 2.5% على قيمة الأبقار + قيمة الحليب المبيع المُدَّخَر', en: 'Considered trade goods: 2.5% on value of cows + value of sold milk saved' } },
      { id: 'd', text: { fr: 'Zakat de 10%', ar: 'زكاة 10%', en: 'Zakat of 10%' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Les vaches laitières commerciales constamment nourries (Ma\'lufa) sont considérées comme biens commerciaux (\'Urud at-Tijarah) : Zakat de 2,5% sur leur valeur marchande + le revenu du lait épargné, si Nisab atteint et un an passe.',
      ar: 'أبقار الحليب التجارية المُعلّفة دائما (معلوفة) تُعتبر عروض تجارة: زكاة 2.5% على قيمتها السوقية + دخل الحليب المُدَّخَر، إن بلغ النصاب ومر حول.',
      en: 'Commercial dairy cows constantly fed (Ma\'lufa) considered trade goods (\'Urud at-Tijarah): 2.5% Zakat on their market value + saved milk income, if Nisab reached and year passes.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'livestock',
  },
  {
    id: 'zakat-livestock-009',
    question: {
      fr: 'Les chevaux sont-ils soumis à la Zakat du bétail ?',
      ar: 'هل الخيل تخضع لزكاة الأنعام؟',
      en: 'Are horses subject to livestock Zakat?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, comme les chameaux', ar: 'نعم، كالإبل', en: 'Yes, like camels' } },
      { id: 'b', text: { fr: 'Non selon l\'avis majoritaire, sauf s\'ils sont pour le commerce', ar: 'لا عند الجمهور، إلا إن كانت للتجارة', en: 'No per majority, unless for trade' } },
      { id: 'c', text: { fr: 'Zakat de 5%', ar: 'زكاة 5%', en: 'Zakat of 5%' } },
      { id: 'd', text: { fr: 'Uniquement les chevaux arabes', ar: 'الخيل العربية فقط', en: 'Only Arabian horses' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Pas de Zakat sur les chevaux selon l\'avis majoritaire car non mentionnés dans le Hadith des An\'am. Exception : chevaux destinés à la vente (commerce) : 2,5% sur leur valeur comme biens commerciaux.',
      ar: 'لا زكاة على الخيل عند الجمهور لأنها غير مذكورة في حديث الأنعام. الاستثناء: خيل معدة للبيع (تجارة): 2.5% على قيمتها كعروض تجارة.',
      en: 'No Zakat on horses per majority as not mentioned in An\'am Hadith. Exception: horses intended for sale (trade): 2.5% on their value as trade goods.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'livestock',
  },
  {
    id: 'zakat-livestock-010',
    question: {
      fr: 'Combien de Zakat pour 120 moutons exactement ?',
      ar: 'كم زكاة 120 خروفا بالضبط؟',
      en: 'How much Zakat for exactly 120 sheep?',
    },
    options: [
      { id: 'a', text: { fr: '1 mouton', ar: 'شاة واحدة', en: '1 sheep' } },
      { id: 'b', text: { fr: '2 moutons', ar: 'شاتان', en: '2 sheep' } },
      { id: 'c', text: { fr: '3 moutons', ar: '3 شياه', en: '3 sheep' } },
      { id: 'd', text: { fr: '120 est une transition : 1 ou 2 selon interprétation', ar: '120 انتقال: شاة أو شاتان حسب التفسير', en: '120 is transition: 1 or 2 per interpretation' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Hadith dit : "De 40 à 120 : 1 mouton. De 121 à 200 : 2 moutons". Donc exactement 120 = 1 mouton. À partir de 121, c\'est 2 moutons.',
      ar: 'الحديث: "من 40 إلى 120: شاة. من 121 إلى 200: شاتان". إذن 120 بالضبط = شاة واحدة. من 121، شاتان.',
      en: 'Hadith says: "From 40 to 120: 1 sheep. From 121 to 200: 2 sheep". So exactly 120 = 1 sheep. From 121, it\'s 2 sheep.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'livestock',
  },
];

// ============================================
// Assemblage de l'examen COMPLET
// ============================================

const allQuestions: ExamQuestion[] = [
  ...definitionQuestions,       // 4 questions
  ...conditionsQuestions,       // 4 questions
  ...biensQuestions,            // 6 questions
  ...beneficiairesQuestions,    // 6 questions
  ...zakatFitrQuestions,        // 5 questions
  ...modernFinanceQuestions,    // 12 questions
  ...agricultureQuestions,      // 10 questions
  ...livestockQuestions,        // 10 questions
  // Total : 57 questions
];

export const examZakatFinal: ExamConfig = {
  id: 'exam-zakat-final',
  type: 'course',
  level: 'intermediate',
  title: {
    fr: 'Examen Complet - Fiqh de la Zakat',
    ar: 'الامتحان الشامل - فقه الزكاة',
    en: 'Complete Exam - Fiqh of Zakat',
  },
  description: {
    fr: 'Examen de 50 questions sélectionnées aléatoirement parmi une banque de 57 questions. Couvre la Zakat sur les biens, Zakat al-Fitr, actifs financiers modernes, production agricole et bétail.',
    ar: 'امتحان من 50 سؤالاً يتم اختيارها عشوائياً من بنك يضم 57 سؤالاً. يغطي زكاة المال، زكاة الفطر، الأصول المالية الحديثة، الإنتاج الزراعي والأنعام.',
    en: 'Exam with 50 questions randomly selected from a pool of 57. Covers Zakat on wealth, Zakat al-Fitr, modern financial assets, agricultural produce and livestock.',
  },
  instructions: {
    fr: 'Vous avez 60 minutes pour répondre à 50 questions. Chaque question a une seule bonne réponse. Un score de 70% est requis pour réussir.',
    ar: 'لديك 60 دقيقة للإجابة على 50 سؤالاً. لكل سؤال إجابة صحيحة واحدة. يُشترط 70% للنجاح.',
    en: 'You have 60 minutes to answer 50 questions. Each question has one correct answer. A score of 70% is required to pass.',
  },
  courseSlug: 'zakat',
  questionPool: allQuestions,
  questionsPerExam: 50,
  categoryConfig: [
    { category: 'definition', count: 3 },
    { category: 'conditions', count: 3 },
    { category: 'biens', count: 5 },
    { category: 'beneficiaires', count: 5 },
    { category: 'zakat-fitr', count: 4 },
    { category: 'modern-finance', count: 10 },
    { category: 'agriculture', count: 8 },
    { category: 'livestock', count: 8 },
  ],
  questions: [],
  duration: 60,
  passingScore: 70,
  maxAttempts: 5,
  shuffleQuestions: true,
  shuffleOptions: true,
  showAnswersAfter: 'complete',
  hasCertificate: true,
  certificateName: {
    fr: 'Certificat de Maîtrise - Fiqh az-Zakat',
    ar: 'شهادة الإتقان - فقه الزكاة',
    en: 'Mastery Certificate - Fiqh az-Zakat',
  },
  createdAt: '2026-01-31',
};

export default examZakatFinal;
