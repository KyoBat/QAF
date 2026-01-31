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
// Assemblage de l'examen COMPLET
// ============================================

const allQuestions: ExamQuestion[] = [
  ...definitionQuestions,     // 4 questions
  ...conditionsQuestions,     // 4 questions
  ...biensQuestions,          // 6 questions
  ...beneficiairesQuestions,  // 6 questions
  ...zakatFitrQuestions,      // 5 questions
  // Total : 25 questions
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
    fr: 'Examen de 20 questions sélectionnées aléatoirement parmi une banque de 25 questions. Couvre la Zakat sur les biens et Zakat al-Fitr.',
    ar: 'امتحان من 20 سؤالاً يتم اختيارها عشوائياً من بنك يضم 25 سؤالاً. يغطي زكاة المال وزكاة الفطر.',
    en: 'Exam with 20 questions randomly selected from a pool of 25. Covers Zakat on wealth and Zakat al-Fitr.',
  },
  instructions: {
    fr: 'Vous avez 30 minutes pour répondre à 20 questions. Chaque question a une seule bonne réponse. Un score de 70% est requis pour réussir.',
    ar: 'لديك 30 دقيقة للإجابة على 20 سؤالاً. لكل سؤال إجابة صحيحة واحدة. يُشترط 70% للنجاح.',
    en: 'You have 30 minutes to answer 20 questions. Each question has one correct answer. A score of 70% is required to pass.',
  },
  courseSlug: 'zakat',
  questionPool: allQuestions,
  questionsPerExam: 20,
  categoryConfig: [
    { category: 'definition', count: 3 },
    { category: 'conditions', count: 3 },
    { category: 'biens', count: 5 },
    { category: 'beneficiaires', count: 5 },
    { category: 'zakat-fitr', count: 4 },
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
    fr: 'Certificat de Maîtrise - Fiqh az-Zakat',
    ar: 'شهادة الإتقان - فقه الزكاة',
    en: 'Mastery Certificate - Fiqh az-Zakat',
  },
  createdAt: '2026-01-31',
};

export default examZakatFinal;
