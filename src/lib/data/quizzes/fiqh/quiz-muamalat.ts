/**
 * Quiz Fiqh - Muamalat (Transactions Commerciales)
 * 
 * Ce quiz couvre les règles des transactions en Islam :
 * vente, riba, contrats, partenariats
 * 
 * Niveau : Intermédiaire
 * Questions : 15
 */

import { Quiz, Question } from '../types';

const questions: Question[] = [
  // --- Questions Faciles (5) ---
  {
    id: 'muamalat-q001',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Que signifie "Mu\'amalat" (معاملات) ?',
      ar: 'ما معنى "المعاملات"؟',
      en: 'What does "Mu\'amalat" mean?',
    },
    options: [
      { id: 'a', text: { fr: 'Les actes d\'adoration', ar: 'العبادات', en: 'Acts of worship' } },
      { id: 'b', text: { fr: 'Les transactions et relations sociales', ar: 'المعاملات والعلاقات الاجتماعية', en: 'Transactions and social relations' } },
      { id: 'c', text: { fr: 'Les punitions légales', ar: 'العقوبات الشرعية', en: 'Legal punishments' } },
      { id: 'd', text: { fr: 'Les croyances', ar: 'العقائد', en: 'Beliefs' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les Mu\'amalat englobent les règles régissant les relations entre les personnes : commerce, contrats, mariages, héritages, etc. Contrairement aux \'ibadat (adoration d\'Allah).',
      ar: 'المعاملات تشمل الأحكام المنظمة للعلاقات بين الناس: التجارة، العقود، الزواج، الميراث، إلخ. بخلاف العبادات (عبادة الله).',
      en: 'Mu\'amalat encompass rules governing relations between people: commerce, contracts, marriages, inheritances, etc. Unlike \'ibadat (worship of Allah).',
    },
    reference: {
      courseSlug: 'fiqh-muamalat',
      lessonId: '001-introduction',
    },
    points: 10,
    tags: ['fiqh', 'muamalat', 'definition'],
  },
  {
    id: 'muamalat-q002',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Qu\'est-ce que le "Riba" (الربا) ?',
      ar: 'ما هو الربا؟',
      en: 'What is "Riba"?',
    },
    options: [
      { id: 'a', text: { fr: 'Le commerce licite', ar: 'التجارة الحلال', en: 'Lawful commerce' } },
      { id: 'b', text: { fr: 'L\'usure/intérêt prohibé', ar: 'الفائدة المحرمة', en: 'Prohibited usury/interest' } },
      { id: 'c', text: { fr: 'Le profit honnête', ar: 'الربح الشريف', en: 'Honest profit' } },
      { id: 'd', text: { fr: 'La zakat', ar: 'الزكاة', en: 'Zakat' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Riba est l\'augmentation injuste dans un échange. Allah dit : "Allah a permis le commerce et interdit le riba" (2:275). C\'est un des péchés majeurs unanimement interdits.',
      ar: 'الربا هو الزيادة غير المشروعة في المعاملة. قال تعالى: "وأحل الله البيع وحرم الربا" (2:275). هو من الكبائر المحرمة بالإجماع.',
      en: 'Riba is unjust increase in exchange. Allah says: "Allah has permitted trade and forbidden riba" (2:275). It\'s a major sin unanimously forbidden.',
    },
    reference: {
      courseSlug: 'fiqh-muamalat',
      lessonId: '002-riba',
    },
    points: 10,
    tags: ['fiqh', 'muamalat', 'riba'],
  },
  {
    id: 'muamalat-q003',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'Le commerce (Bay\') est permis en Islam tant qu\'il respecte les conditions de validité.',
      ar: 'البيع مباح في الإسلام ما دام يستوفي شروط الصحة.',
      en: 'Trade (Bay\') is permitted in Islam as long as it meets validity conditions.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'Le commerce est licite et même encouragé. Le Prophète ﷺ était commerçant. Les conditions incluent : consentement mutuel, capacité légale, objet licite et existant, prix connu.',
      ar: 'البيع مباح بل مندوب. النبي ﷺ كان تاجراً. الشروط: التراضي، الأهلية، المحل المباح الموجود، الثمن المعلوم.',
      en: 'Trade is permissible and even encouraged. The Prophet ﷺ was a merchant. Conditions include: mutual consent, legal capacity, lawful existing object, known price.',
    },
    reference: {
      courseSlug: 'fiqh-muamalat',
      lessonId: '003-bay',
    },
    points: 10,
    tags: ['fiqh', 'muamalat', 'bay'],
  },
  {
    id: 'muamalat-q004',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Qu\'est-ce que le "Gharar" (الغرر) ?',
      ar: 'ما هو الغرر؟',
      en: 'What is "Gharar"?',
    },
    options: [
      { id: 'a', text: { fr: 'La garantie', ar: 'الضمان', en: 'The guarantee' } },
      { id: 'b', text: { fr: 'L\'incertitude excessive / tromperie', ar: 'الجهالة المفرطة / الخداع', en: 'Excessive uncertainty / deception' } },
      { id: 'c', text: { fr: 'Le bénéfice', ar: 'الربح', en: 'The profit' } },
      { id: 'd', text: { fr: 'Le contrat', ar: 'العقد', en: 'The contract' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Gharar est l\'incertitude excessive ou le hasard dans une transaction. Ex : vendre un poisson non encore pêché. Le Prophète ﷺ a interdit la vente comportant du gharar.',
      ar: 'الغرر هو الجهالة المفرطة أو المخاطرة في المعاملة. مثال: بيع السمك في الماء. نهى النبي ﷺ عن بيع الغرر.',
      en: 'Gharar is excessive uncertainty or chance in a transaction. Ex: selling a fish not yet caught. The Prophet ﷺ forbade sales involving gharar.',
    },
    reference: {
      courseSlug: 'fiqh-muamalat',
      lessonId: '004-gharar',
    },
    points: 10,
    tags: ['fiqh', 'muamalat', 'gharar'],
  },
  {
    id: 'muamalat-q005',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'La règle de base dans les Mu\'amalat est :',
      ar: 'الأصل في المعاملات:',
      en: 'The default rule in Mu\'amalat is:',
    },
    options: [
      { id: 'a', text: { fr: 'Tout est interdit sauf ce qui est permis', ar: 'كل شيء حرام إلا ما أُبيح', en: 'Everything is forbidden except what is permitted' } },
      { id: 'b', text: { fr: 'Tout est permis sauf ce qui est interdit', ar: 'كل شيء مباح إلا ما حُرّم', en: 'Everything is permitted except what is forbidden' } },
      { id: 'c', text: { fr: 'Tout est obligatoire', ar: 'كل شيء واجب', en: 'Everything is obligatory' } },
      { id: 'd', text: { fr: 'Tout est détestable', ar: 'كل شيء مكروه', en: 'Everything is disliked' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Dans les Mu\'amalat, la base est la permission (ibaha). Tout contrat ou transaction est licite sauf s\'il contredit un texte (riba, gharar, haram, etc.).',
      ar: 'في المعاملات، الأصل الإباحة. كل عقد أو معاملة مباحة ما لم تخالف نصاً (ربا، غرر، حرام، إلخ).',
      en: 'In Mu\'amalat, the default is permission (ibaha). Every contract or transaction is lawful unless it contradicts a text (riba, gharar, haram, etc.).',
    },
    reference: {
      courseSlug: 'fiqh-muamalat',
      lessonId: '001-introduction',
    },
    points: 10,
    tags: ['fiqh', 'muamalat', 'qawaid'],
  },

  // --- Questions Moyennes (6) ---
  {
    id: 'muamalat-q006',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quels sont les deux types principaux de Riba ?',
      ar: 'ما نوعا الربا الرئيسيان؟',
      en: 'What are the two main types of Riba?',
    },
    options: [
      { id: 'a', text: { fr: 'Riba an-Nasi\'a (délai) et Riba al-Fadl (surplus)', ar: 'ربا النسيئة (التأجيل) وربا الفضل (الزيادة)', en: 'Riba an-Nasi\'a (delay) and Riba al-Fadl (excess)' } },
      { id: 'b', text: { fr: 'Riba Halal et Riba Haram', ar: 'ربا حلال وربا حرام', en: 'Riba Halal and Riba Haram' } },
      { id: 'c', text: { fr: 'Riba bancaire et Riba personnel', ar: 'ربا بنكي وربا شخصي', en: 'Bank Riba and personal Riba' } },
      { id: 'd', text: { fr: 'Riba majeur et Riba mineur', ar: 'ربا كبير وربا صغير', en: 'Major Riba and minor Riba' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Riba an-Nasi\'a : intérêt sur délai (prêt avec intérêt). Riba al-Fadl : échange inégal de même type (ex: 1kg or contre 1.1kg or). Les 6 produits ribawi : or, argent, blé, orge, dattes, sel.',
      ar: 'ربا النسيئة: فائدة التأجيل (القرض بفائدة). ربا الفضل: تبادل غير متساوٍ من نفس النوع (مثل: 1كغ ذهب بـ 1.1كغ ذهب). الأصناف الربوية الستة: الذهب، الفضة، القمح، الشعير، التمر، الملح.',
      en: 'Riba an-Nasi\'a: interest on delay (loan with interest). Riba al-Fadl: unequal exchange of same type (e.g., 1kg gold for 1.1kg gold). The 6 ribawi items: gold, silver, wheat, barley, dates, salt.',
    },
    reference: {
      courseSlug: 'fiqh-muamalat',
      lessonId: '002-riba',
    },
    points: 15,
    tags: ['fiqh', 'muamalat', 'riba'],
  },
  {
    id: 'muamalat-q007',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que le contrat "Murabaha" (المرابحة) ?',
      ar: 'ما هو عقد المرابحة؟',
      en: 'What is a "Murabaha" contract?',
    },
    options: [
      { id: 'a', text: { fr: 'Vente à prix coûtant + marge bénéficiaire déclarée', ar: 'بيع بسعر التكلفة + هامش ربح معلن', en: 'Sale at cost + declared profit margin' } },
      { id: 'b', text: { fr: 'Prêt avec intérêt', ar: 'قرض بفائدة', en: 'Loan with interest' } },
      { id: 'c', text: { fr: 'Don sans contrepartie', ar: 'هبة بلا مقابل', en: 'Gift without return' } },
      { id: 'd', text: { fr: 'Location pure', ar: 'إجارة بحتة', en: 'Pure rental' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'La Murabaha est une vente où le vendeur déclare le prix d\'achat et ajoute une marge connue. Ex : "J\'ai acheté cette voiture 10 000€, je te la vends 11 000€." Utilisée en finance islamique.',
      ar: 'المرابحة بيع يُصرّح فيه البائع بسعر الشراء ويضيف هامشاً معلوماً. مثال: "اشتريت هذه السيارة بـ 10,000€، أبيعك إياها بـ 11,000€." تُستخدم في التمويل الإسلامي.',
      en: 'Murabaha is a sale where seller declares purchase price and adds known margin. Ex: "I bought this car for €10,000, I sell it to you for €11,000." Used in Islamic finance.',
    },
    reference: {
      courseSlug: 'fiqh-muamalat',
      lessonId: '005-murabaha',
    },
    points: 15,
    tags: ['fiqh', 'muamalat', 'murabaha'],
  },
  {
    id: 'muamalat-q008',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que le contrat "Musharaka" (المشاركة) ?',
      ar: 'ما هو عقد المشاركة؟',
      en: 'What is a "Musharaka" contract?',
    },
    options: [
      { id: 'a', text: { fr: 'Partenariat où les parties partagent capital, profits et pertes', ar: 'شراكة تتقاسم فيها الأطراف رأس المال والأرباح والخسائر', en: 'Partnership where parties share capital, profits and losses' } },
      { id: 'b', text: { fr: 'Prêt à intérêt fixe', ar: 'قرض بفائدة ثابتة', en: 'Fixed interest loan' } },
      { id: 'c', text: { fr: 'Achat à tempérament', ar: 'شراء بالتقسيط', en: 'Installment purchase' } },
      { id: 'd', text: { fr: 'Garantie de remboursement', ar: 'ضمان السداد', en: 'Repayment guarantee' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'La Musharaka (partenariat) implique que chaque partie contribue au capital et partage les profits selon un ratio convenu. Les pertes sont réparties proportionnellement au capital investi.',
      ar: 'المشاركة تعني أن كل طرف يساهم برأس المال ويتقاسم الأرباح بنسبة متفق عليها. الخسائر توزع بنسبة رأس المال المستثمر.',
      en: 'Musharaka (partnership) means each party contributes capital and shares profits according to agreed ratio. Losses are distributed proportionally to invested capital.',
    },
    reference: {
      courseSlug: 'fiqh-muamalat',
      lessonId: '006-musharaka',
    },
    points: 15,
    tags: ['fiqh', 'muamalat', 'musharaka'],
  },
  {
    id: 'muamalat-q009',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que le contrat "Ijara" (الإجارة) ?',
      ar: 'ما هو عقد الإجارة؟',
      en: 'What is an "Ijara" contract?',
    },
    options: [
      { id: 'a', text: { fr: 'Location de bien ou de service', ar: 'إيجار عين أو خدمة', en: 'Leasing of property or service' } },
      { id: 'b', text: { fr: 'Vente définitive', ar: 'بيع نهائي', en: 'Final sale' } },
      { id: 'c', text: { fr: 'Don caritatif', ar: 'تبرع خيري', en: 'Charitable donation' } },
      { id: 'd', text: { fr: 'Prêt sans intérêt', ar: 'قرض بلا فائدة', en: 'Interest-free loan' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'L\'Ijara est un contrat de location où l\'usufruit (manfa\'a) d\'un bien ou d\'un service est transféré contre une rémunération. La propriété reste au bailleur. Ijara-wa-iqtina = location-vente.',
      ar: 'الإجارة عقد إيجار تُنقل فيه منفعة عين أو خدمة مقابل أجر. الملكية تبقى للمؤجر. الإجارة المنتهية بالتمليك = إيجار بيعي.',
      en: 'Ijara is a lease contract where usufruct (manfa\'a) of property or service is transferred for remuneration. Ownership stays with lessor. Ijara-wa-iqtina = lease-to-own.',
    },
    reference: {
      courseSlug: 'fiqh-muamalat',
      lessonId: '007-ijara',
    },
    points: 15,
    tags: ['fiqh', 'muamalat', 'ijara'],
  },
  {
    id: 'muamalat-q010',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce qu\'un "Qard Hasan" (قرض حسن) ?',
      ar: 'ما هو القرض الحسن؟',
      en: 'What is "Qard Hasan"?',
    },
    options: [
      { id: 'a', text: { fr: 'Prêt sans intérêt par générosité', ar: 'قرض بلا فائدة من باب الإحسان', en: 'Interest-free loan as act of kindness' } },
      { id: 'b', text: { fr: 'Prêt avec faible intérêt', ar: 'قرض بفائدة منخفضة', en: 'Loan with low interest' } },
      { id: 'c', text: { fr: 'Don définitif', ar: 'هبة نهائية', en: 'Final gift' } },
      { id: 'd', text: { fr: 'Investissement à risque', ar: 'استثمار محفوف بالمخاطر', en: 'Risky investment' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Qard Hasan est un prêt sans intérêt, acte de bienfaisance. L\'emprunteur rend le même montant. Le Coran l\'appelle "prêt à Allah" (2:245). Toute condition de surplus le transforme en riba.',
      ar: 'القرض الحسن قرض بلا فائدة، من أعمال البر. المقترض يرد نفس المبلغ. القرآن يسميه "إقراض الله" (2:245). أي شرط زيادة يحوله لربا.',
      en: 'Qard Hasan is an interest-free loan, an act of charity. Borrower returns same amount. Quran calls it "lending to Allah" (2:245). Any surplus condition turns it into riba.',
    },
    reference: {
      courseSlug: 'fiqh-muamalat',
      lessonId: '008-qard',
    },
    points: 15,
    tags: ['fiqh', 'muamalat', 'qard'],
  },
  {
    id: 'muamalat-q011',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Le "Khiyar" (الخيار) dans la vente signifie :',
      ar: '"الخيار" في البيع يعني:',
      en: '"Khiyar" (option) in sale means:',
    },
    options: [
      { id: 'a', text: { fr: 'Le droit d\'annuler la vente sous certaines conditions', ar: 'حق فسخ البيع بشروط معينة', en: 'Right to cancel sale under certain conditions' } },
      { id: 'b', text: { fr: 'Le choix du prix', ar: 'اختيار السعر', en: 'Choice of price' } },
      { id: 'c', text: { fr: 'L\'obligation d\'acheter', ar: 'وجوب الشراء', en: 'Obligation to buy' } },
      { id: 'd', text: { fr: 'La négociation infinie', ar: 'التفاوض اللانهائي', en: 'Infinite negotiation' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Types de Khiyar : 1) Khiyar al-Majlis (option de session), 2) Khiyar al-Shart (option conditionnelle), 3) Khiyar al-\'Ayb (option pour défaut). Ils protègent contre les transactions hâtives.',
      ar: 'أنواع الخيار: 1) خيار المجلس (قبل التفرق)، 2) خيار الشرط (بشرط متفق عليه)، 3) خيار العيب (للعيوب). تحمي من المعاملات المتسرعة.',
      en: 'Types of Khiyar: 1) Khiyar al-Majlis (session option), 2) Khiyar al-Shart (conditional option), 3) Khiyar al-\'Ayb (defect option). They protect against hasty transactions.',
    },
    reference: {
      courseSlug: 'fiqh-muamalat',
      lessonId: '009-khiyar',
    },
    points: 15,
    tags: ['fiqh', 'muamalat', 'khiyar'],
  },

  // --- Questions Difficiles (4) ---
  {
    id: 'muamalat-q012',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qu\'est-ce que le "Bay\' al-Salam" (بيع السلم) ?',
      ar: 'ما هو بيع السلم؟',
      en: 'What is "Bay\' al-Salam"?',
    },
    options: [
      { id: 'a', text: { fr: 'Paiement anticipé pour livraison future d\'un bien décrit', ar: 'دفع مقدم لتسليم مستقبلي لسلعة موصوفة', en: 'Advance payment for future delivery of described goods' } },
      { id: 'b', text: { fr: 'Vente au comptant', ar: 'بيع نقدي', en: 'Cash sale' } },
      { id: 'c', text: { fr: 'Échange de biens identiques', ar: 'مبادلة سلع متماثلة', en: 'Exchange of identical goods' } },
      { id: 'd', text: { fr: 'Location avec option d\'achat', ar: 'إيجار مع خيار الشراء', en: 'Lease with purchase option' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Salam est une exception au gharar : paiement complet immédiat pour un bien à livrer plus tard. Conditions : spécifier quantité, qualité, lieu et date de livraison. Utilisé en agriculture.',
      ar: 'السلم استثناء من الغرر: دفع كامل فوري لسلعة تُسلّم لاحقاً. الشروط: تحديد الكمية، النوعية، مكان وتاريخ التسليم. يُستخدم في الزراعة.',
      en: 'Salam is an exception to gharar: full immediate payment for goods to be delivered later. Conditions: specify quantity, quality, place and date of delivery. Used in agriculture.',
    },
    reference: {
      courseSlug: 'fiqh-muamalat',
      lessonId: '010-salam',
    },
    points: 20,
    tags: ['fiqh', 'muamalat', 'salam'],
  },
  {
    id: 'muamalat-q013',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qu\'est-ce que le "Mudaraba" (المضاربة) ?',
      ar: 'ما هو عقد المضاربة؟',
      en: 'What is "Mudaraba"?',
    },
    options: [
      { id: 'a', text: { fr: 'Partenariat capital + travail, pertes sur le capital', ar: 'شراكة مال + عمل، الخسارة على رأس المال', en: 'Capital + labor partnership, losses on capital' } },
      { id: 'b', text: { fr: 'Prêt à intérêt variable', ar: 'قرض بفائدة متغيرة', en: 'Variable interest loan' } },
      { id: 'c', text: { fr: 'Échange de devises', ar: 'صرف عملات', en: 'Currency exchange' } },
      { id: 'd', text: { fr: 'Vente à crédit', ar: 'بيع آجل', en: 'Credit sale' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Mudaraba : le Rabb al-Mal (investisseur) fournit le capital, le Mudarib (gestionnaire) fournit le travail. Profits partagés selon ratio convenu. Pertes : l\'investisseur perd son capital, le gestionnaire perd son effort.',
      ar: 'المضاربة: رب المال (المستثمر) يقدم رأس المال، المضارب (المدير) يقدم العمل. الأرباح توزع بنسبة متفق عليها. الخسائر: المستثمر يخسر ماله، المضارب يخسر جهده.',
      en: 'Mudaraba: Rabb al-Mal (investor) provides capital, Mudarib (manager) provides labor. Profits shared per agreed ratio. Losses: investor loses capital, manager loses effort.',
    },
    reference: {
      courseSlug: 'fiqh-muamalat',
      lessonId: '011-mudaraba',
    },
    points: 20,
    tags: ['fiqh', 'muamalat', 'mudaraba'],
  },
  {
    id: 'muamalat-q014',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Pourquoi la vente "Bay\' al-\'Ina" (بيع العينة) est-elle controversée ?',
      ar: 'لماذا بيع العينة مثير للجدل؟',
      en: 'Why is "Bay\' al-\'Ina" sale controversial?',
    },
    options: [
      { id: 'a', text: { fr: 'C\'est un stratagème (hila) pour contourner le riba', ar: 'هو حيلة للتحايل على الربا', en: 'It\'s a trick (hila) to circumvent riba' } },
      { id: 'b', text: { fr: 'Le prix est inconnu', ar: 'السعر مجهول', en: 'Price is unknown' } },
      { id: 'c', text: { fr: 'L\'objet n\'existe pas', ar: 'المحل غير موجود', en: 'Object doesn\'t exist' } },
      { id: 'd', text: { fr: 'Il n\'y a pas de consentement', ar: 'لا يوجد رضا', en: 'There\'s no consent' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Bay\' al-\'Ina : A vend à B à 120€ à terme, puis rachète au comptant à 100€. Résultat : B a 100€ maintenant et rendra 120€ = riba déguisé. Interdit par la majorité sauf Shafi\'is (forme vs intention).',
      ar: 'بيع العينة: أ يبيع لـ ب بـ 120€ آجلاً، ثم يشتريها نقداً بـ 100€. النتيجة: ب عنده 100€ الآن وسيرد 120€ = ربا مقنع. حرّمه الجمهور إلا الشافعية (الصورة vs النية).',
      en: 'Bay\' al-\'Ina: A sells to B at €120 deferred, then buys back at €100 cash. Result: B has €100 now and will repay €120 = disguised riba. Forbidden by majority except Shafi\'is (form vs intention).',
    },
    reference: {
      courseSlug: 'fiqh-muamalat',
      lessonId: '012-buyu-fasida',
    },
    points: 20,
    tags: ['fiqh', 'muamalat', 'ina', 'hila'],
  },
  {
    id: 'muamalat-q015',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelles sont les conditions de validité d\'un contrat (\'aqd) en Islam ?',
      ar: 'ما شروط صحة العقد في الإسلام؟',
      en: 'What are the validity conditions of a contract (\'aqd) in Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Parties capables, consentement, objet licite existant, cause valide', ar: 'أهلية الأطراف، الرضا، محل مباح موجود، سبب صحيح', en: 'Capable parties, consent, lawful existing object, valid cause' } },
      { id: 'b', text: { fr: 'Seulement un écrit', ar: 'الكتابة فقط', en: 'Only a written document' } },
      { id: 'c', text: { fr: 'Présence de témoins obligatoire', ar: 'وجود شهود واجب', en: 'Witnesses mandatory' } },
      { id: 'd', text: { fr: 'Approbation du gouvernement', ar: 'موافقة الحكومة', en: 'Government approval' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Conditions : 1) Al-\'Aqidayn (parties capables et consentantes), 2) Al-Ma\'qud \'alayh (objet existant, licite, déterminé, livrable), 3) Sigha (offre et acceptation concordantes), 4) Absence de vices (contrainte, erreur, dol).',
      ar: 'الشروط: 1) العاقدان (أهلية ورضا)، 2) المعقود عليه (موجود، مباح، معلوم، مقدور على تسليمه)، 3) الصيغة (إيجاب وقبول متوافقان)، 4) انتفاء العيوب (إكراه، غلط، تدليس).',
      en: 'Conditions: 1) Al-\'Aqidayn (capable consenting parties), 2) Al-Ma\'qud \'alayh (existing, lawful, known, deliverable object), 3) Sigha (matching offer and acceptance), 4) No defects (coercion, error, fraud).',
    },
    reference: {
      courseSlug: 'fiqh-muamalat',
      lessonId: '013-shurut-aqd',
    },
    points: 20,
    tags: ['fiqh', 'muamalat', 'aqd'],
  },
];

// ============================================
// Export du Quiz
// ============================================

export const quizMuamalat: Quiz = {
  id: 'quiz-fiqh-muamalat',
  type: 'module',
  courseSlug: 'fiqh-muamalat',
  title: {
    fr: 'Quiz : Fiqh al-Mu\'amalat (Transactions)',
    ar: 'اختبار: فقه المعاملات',
    en: 'Quiz: Fiqh al-Mu\'amalat (Transactions)',
  },
  description: {
    fr: 'Testez vos connaissances sur les transactions commerciales islamiques : riba, contrats, partenariats.',
    ar: 'اختبر معلوماتك عن المعاملات التجارية الإسلامية: الربا، العقود، الشراكات.',
    en: 'Test your knowledge of Islamic commercial transactions: riba, contracts, partnerships.',
  },
  instructions: {
    fr: 'Maîtrisez les règles du commerce halal et de la finance islamique.',
    ar: 'أتقن قواعد التجارة الحلال والتمويل الإسلامي.',
    en: 'Master the rules of halal commerce and Islamic finance.',
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

export default quizMuamalat;
