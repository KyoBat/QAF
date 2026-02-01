/**
 * Examen Final - Fiqh Muamalat (Transactions Islamiques)
 * 
 * 25 questions QCM couvrant :
 * - Principes généraux des transactions
 * - Vente (Bay') et ses conditions
 * - Riba (usure) et intérêts
 * - Contrats islamiques
 * - Finance islamique moderne
 * - Interdictions commerciales
 */

import { ExamConfig, ExamQuestion } from '../types';

// ============================================
// Questions - Principes Généraux
// ============================================

const principesQuestions: ExamQuestion[] = [
  {
    id: 'muamalat-principes-001',
    question: {
      fr: 'Quelle est la règle de base dans les transactions (Mu\'amalat) en Islam ?',
      ar: 'ما الأصل في المعاملات في الإسلام؟',
      en: 'What is the base rule in transactions (Mu\'amalat) in Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Tout est interdit sauf ce qui est explicitement permis', ar: 'الأصل التحريم إلا ما أُبيح', en: 'Everything is forbidden except what is explicitly permitted' } },
      { id: 'b', text: { fr: 'Tout est permis (Halal) sauf ce qui est explicitement interdit', ar: 'الأصل الإباحة إلا ما حُرّم', en: 'Everything is permissible (Halal) except what is explicitly forbidden' } },
      { id: 'c', text: { fr: 'Tout est obligatoire', ar: 'كل شيء واجب', en: 'Everything is obligatory' } },
      { id: 'd', text: { fr: 'Aucune règle particulière', ar: 'لا قاعدة خاصة', en: 'No particular rule' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le principe dans les transactions est la permission (الإباحة) contrairement aux adorations (\'Ibadat) où tout est interdit sauf ce qui est prescrit.',
      ar: 'الأصل في المعاملات الإباحة، على خلاف العبادات حيث الأصل التوقف حتى يرد الدليل.',
      en: 'The principle in transactions is permissibility (al-Ibaha) unlike worship (\'Ibadat) where everything is forbidden except what is prescribed.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'principes',
  },
  {
    id: 'muamalat-principes-002',
    question: {
      fr: 'Quel hadith établit le principe de "pas de préjudice" dans les transactions ?',
      ar: 'ما الحديث الذي يؤسس مبدأ "لا ضرر" في المعاملات؟',
      en: 'Which hadith establishes the "no harm" principle in transactions?',
    },
    options: [
      { id: 'a', text: { fr: '"Pas de préjudice ni de représailles" (لا ضرر ولا ضِرار)', ar: '"لا ضرر ولا ضِرار"', en: '"No harm and no reciprocal harm"' } },
      { id: 'b', text: { fr: '"Les actes ne valent que par les intentions"', ar: '"إنما الأعمال بالنيات"', en: '"Actions are by intentions"' } },
      { id: 'c', text: { fr: '"Le Halal est clair et le Haram est clair"', ar: '"الحلال بيّن والحرام بيّن"', en: '"Halal is clear and Haram is clear"' } },
      { id: 'd', text: { fr: '"La religion est le bon conseil"', ar: '"الدين النصيحة"', en: '"Religion is sincere advice"' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Ce hadith rapporté par Ibn Majah est un fondement majeur interdisant de nuire à autrui ou de se venger par un préjudice équivalent.',
      ar: 'هذا الحديث الذي رواه ابن ماجه أصل عظيم يحرم الإضرار بالغير أو المقابلة بضرر مثله.',
      en: 'This hadith reported by Ibn Majah is a major foundation prohibiting harming others or retaliating with equivalent harm.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'principes',
  },
  {
    id: 'muamalat-principes-003',
    question: {
      fr: 'Qu\'est-ce que le Rida (consentement mutuel) dans les contrats ?',
      ar: 'ما هو الرضا في العقود؟',
      en: 'What is Rida (mutual consent) in contracts?',
    },
    options: [
      { id: 'a', text: { fr: 'Une formalité optionnelle', ar: 'شكلية اختيارية', en: 'An optional formality' } },
      { id: 'b', text: { fr: 'La signature uniquement', ar: 'التوقيع فقط', en: 'Signature only' } },
      { id: 'c', text: { fr: 'Le consentement libre des deux parties, condition de validité essentielle', ar: 'موافقة الطرفين الحرة، شرط أساسي للصحة', en: 'Free consent of both parties, essential validity condition' } },
      { id: 'd', text: { fr: 'L\'accord du juge', ar: 'موافقة القاضي', en: 'Judge\'s agreement' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Allah dit : "sauf s\'il s\'agit d\'un commerce par consentement mutuel" (4:29). Le Rida invalide la contrainte (Ikrah).',
      ar: 'قال تعالى: "إِلَّا أَن تَكُونَ تِجَارَةً عَن تَرَاضٍ مِّنكُمْ" (النساء:29). والرضا ينفي الإكراه.',
      en: 'Allah says: "except it be a trade by mutual consent" (4:29). Rida invalidates coercion (Ikrah).',
    },
    points: 2,
    difficulty: 'medium',
    category: 'principes',
  },
];

// ============================================
// Questions - Vente (Bay')
// ============================================

const venteQuestions: ExamQuestion[] = [
  {
    id: 'muamalat-vente-001',
    question: {
      fr: 'Quels sont les piliers (Arkan) essentiels d\'une vente valide ?',
      ar: 'ما هي أركان البيع الصحيح؟',
      en: 'What are the essential pillars (Arkan) of a valid sale?',
    },
    options: [
      { id: 'a', text: { fr: 'Vendeur uniquement', ar: 'البائع فقط', en: 'Seller only' } },
      { id: 'b', text: { fr: 'Le témoin seulement', ar: 'الشاهد فقط', en: 'Witness only' } },
      { id: 'c', text: { fr: 'Le contrat écrit', ar: 'العقد المكتوب', en: 'Written contract' } },
      { id: 'd', text: { fr: 'Contractants (vendeur, acheteur), objet (Mabi\'), prix (Thaman), formule (Sighah)', ar: 'العاقدان (بائع، مشتري)، المبيع، الثمن، الصيغة', en: 'Contracting parties (seller, buyer), object (Mabi\'), price (Thaman), formula (Sighah)' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'La vente requiert 4 éléments : 1) Deux contractants capables, 2) Un bien existant et possédé, 3) Un prix connu, 4) Une offre et acceptation.',
      ar: 'يتطلب البيع 4 أركان: 1) عاقدان أهليان، 2) مبيع موجود مملوك، 3) ثمن معلوم، 4) إيجاب وقبول.',
      en: 'A sale requires 4 elements: 1) Two capable contracting parties, 2) An existing owned good, 3) A known price, 4) Offer and acceptance.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'vente',
  },
  {
    id: 'muamalat-vente-002',
    question: {
      fr: 'Qu\'est-ce que le Khiyar (option de rétractation) dans la vente ?',
      ar: 'ما هو الخيار في البيع؟',
      en: 'What is Khiyar (option to withdraw) in a sale?',
    },
    options: [
      { id: 'a', text: { fr: 'Une obligation de garder le bien', ar: 'وجوب الاحتفاظ بالسلعة', en: 'An obligation to keep the good' } },
      { id: 'b', text: { fr: 'Le droit de valider ou annuler le contrat pendant une période', ar: 'حق إمضاء العقد أو فسخه خلال مدة', en: 'The right to validate or cancel the contract during a period' } },
      { id: 'c', text: { fr: 'L\'augmentation du prix', ar: 'زيادة السعر', en: 'Price increase' } },
      { id: 'd', text: { fr: 'La vente forcée', ar: 'البيع القسري', en: 'Forced sale' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Types de Khiyar : Khiyar al-Majlis (séance), Khiyar ash-Shart (condition), Khiyar al-\'Ayb (défaut). Le Prophète ﷺ a dit : "Les deux parties ont le choix tant qu\'ils ne se sont pas séparés."',
      ar: 'أنواع الخيار: خيار المجلس، خيار الشرط، خيار العيب. قال ﷺ: "البيّعان بالخيار ما لم يتفرقا."',
      en: 'Types of Khiyar: Khiyar al-Majlis (session), Khiyar ash-Shart (condition), Khiyar al-\'Ayb (defect). The Prophet ﷺ said: "The two parties have the choice as long as they haven\'t separated."',
    },
    points: 2,
    difficulty: 'medium',
    category: 'vente',
  },
  {
    id: 'muamalat-vente-003',
    question: {
      fr: 'Qu\'est-ce que la vente Salam ?',
      ar: 'ما هو بيع السَّلَم؟',
      en: 'What is Salam sale?',
    },
    options: [
      { id: 'a', text: { fr: 'Paiement anticipé pour livraison future d\'un bien décrit précisément', ar: 'دفع مقدم لتسليم مستقبلي لسلعة موصوفة بدقة', en: 'Advance payment for future delivery of a precisely described good' } },
      { id: 'b', text: { fr: 'Vente au comptant immédiate', ar: 'بيع نقدي فوري', en: 'Immediate cash sale' } },
      { id: 'c', text: { fr: 'Vente de biens inconnus', ar: 'بيع سلع مجهولة', en: 'Sale of unknown goods' } },
      { id: 'd', text: { fr: 'Échange de monnaies', ar: 'صرف العملات', en: 'Currency exchange' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Salam est une exception à l\'interdiction de vendre ce qu\'on ne possède pas. Le bien doit être décrit (quantité, qualité, délai) et le prix payé intégralement.',
      ar: 'السَّلَم استثناء من تحريم بيع ما لا يُملك. يجب وصف السلعة (كمية، نوعية، أجل) ودفع الثمن كاملاً.',
      en: 'Salam is an exception to the prohibition of selling what one doesn\'t own. The good must be described (quantity, quality, delay) and price fully paid.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'vente',
  },
];

// ============================================
// Questions - Riba (Usure)
// ============================================

const ribaQuestions: ExamQuestion[] = [
  {
    id: 'muamalat-riba-001',
    question: {
      fr: 'Qu\'est-ce que le Riba ?',
      ar: 'ما هو الربا؟',
      en: 'What is Riba?',
    },
    options: [
      { id: 'a', text: { fr: 'Un type de commerce licite', ar: 'نوع من التجارة المباحة', en: 'A type of permissible trade' } },
      { id: 'b', text: { fr: 'Le profit commercial normal', ar: 'الربح التجاري العادي', en: 'Normal commercial profit' } },
      { id: 'c', text: { fr: 'L\'excédent injustifié dans un échange, interdit par Allah', ar: 'الزيادة غير المبررة في التبادل، حرّمها الله', en: 'Unjustified excess in an exchange, forbidden by Allah' } },
      { id: 'd', text: { fr: 'Une taxe gouvernementale', ar: 'ضريبة حكومية', en: 'A government tax' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Allah dit : "Ils ont dit : Le commerce est comme le Riba. Or Allah a rendu licite le commerce et a interdit le Riba" (2:275). Le Riba est un péché majeur.',
      ar: 'قال تعالى: "قَالُوا إِنَّمَا الْبَيْعُ مِثْلُ الرِّبَا وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا" (البقرة:275). والربا من الكبائر.',
      en: 'Allah says: "They said: Trade is like Riba. But Allah has permitted trade and forbidden Riba" (2:275). Riba is a major sin.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'riba',
  },
  {
    id: 'muamalat-riba-002',
    question: {
      fr: 'Quels sont les deux types principaux de Riba ?',
      ar: 'ما نوعا الربا الرئيسيان؟',
      en: 'What are the two main types of Riba?',
    },
    options: [
      { id: 'a', text: { fr: 'Riba Halal et Riba Haram', ar: 'ربا حلال وربا حرام', en: 'Halal Riba and Haram Riba' } },
      { id: 'b', text: { fr: 'Riba petit et Riba grand', ar: 'ربا صغير وربا كبير', en: 'Small Riba and big Riba' } },
      { id: 'c', text: { fr: 'Riba ancien et Riba moderne', ar: 'ربا قديم وربا حديث', en: 'Old Riba and new Riba' } },
      { id: 'd', text: { fr: 'Riba al-Fadl (excédent) et Riba an-Nasi\'ah (délai)', ar: 'ربا الفضل وربا النسيئة', en: 'Riba al-Fadl (excess) and Riba an-Nasi\'ah (delay)' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Riba al-Fadl : excédent dans l\'échange de biens ribawi identiques (or contre or avec différence). Riba an-Nasi\'ah : délai dans l\'échange ou intérêts sur prêts.',
      ar: 'ربا الفضل: زيادة في تبادل أموال ربوية متجانسة (ذهب بذهب مع فرق). ربا النسيئة: تأخير في التبادل أو فوائد على القروض.',
      en: 'Riba al-Fadl: excess in exchange of identical ribawi goods (gold for gold with difference). Riba an-Nasi\'ah: delay in exchange or interest on loans.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'riba',
  },
  {
    id: 'muamalat-riba-003',
    question: {
      fr: 'Quels sont les 6 biens "ribawi" mentionnés dans le hadith ?',
      ar: 'ما الأصناف الستة الربوية المذكورة في الحديث؟',
      en: 'What are the 6 "ribawi" items mentioned in the hadith?',
    },
    options: [
      { id: 'a', text: { fr: 'Voitures, maisons, terrains, bateaux, avions, trains', ar: 'سيارات، منازل، أراضٍ، سفن، طائرات، قطارات', en: 'Cars, houses, lands, boats, planes, trains' } },
      { id: 'b', text: { fr: 'Or, argent, blé, orge, dattes, sel', ar: 'الذهب، الفضة، البُر، الشعير، التمر، الملح', en: 'Gold, silver, wheat, barley, dates, salt' } },
      { id: 'c', text: { fr: 'Eau, air, feu, terre, bois, pierre', ar: 'ماء، هواء، نار، تراب، خشب، حجر', en: 'Water, air, fire, earth, wood, stone' } },
      { id: 'd', text: { fr: 'Vêtements, nourriture, logement, transport, santé, éducation', ar: 'ملابس، طعام، سكن، نقل، صحة، تعليم', en: 'Clothes, food, housing, transport, health, education' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "L\'or contre l\'or, l\'argent contre l\'argent, le blé contre le blé... égal pour égal, main à main."',
      ar: 'قال ﷺ: "الذهب بالذهب، والفضة بالفضة، والبُر بالبُر... مِثلاً بمِثل، يدًا بيد."',
      en: 'The Prophet ﷺ said: "Gold for gold, silver for silver, wheat for wheat... equal for equal, hand to hand."',
    },
    points: 2,
    difficulty: 'medium',
    category: 'riba',
  },
  {
    id: 'muamalat-riba-004',
    question: {
      fr: 'Les intérêts bancaires conventionnels sont-ils du Riba ?',
      ar: 'هل الفوائد البنكية التقليدية ربا؟',
      en: 'Are conventional bank interest rates Riba?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, selon le consensus des savants contemporains', ar: 'نعم، حسب إجماع العلماء المعاصرين', en: 'Yes, according to the consensus of contemporary scholars' } },
      { id: 'b', text: { fr: 'Non, car les banques sont modernes', ar: 'لا، لأن البنوك حديثة', en: 'No, because banks are modern' } },
      { id: 'c', text: { fr: 'Seulement au-dessus de 10%', ar: 'فقط فوق 10%', en: 'Only above 10%' } },
      { id: 'd', text: { fr: 'Ça dépend de l\'intention', ar: 'يعتمد على النية', en: 'It depends on intention' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les académies islamiques (Majma\' al-Fiqh, OCI) ont confirmé que tout intérêt prédéterminé sur prêt = Riba an-Nasi\'ah, peu importe le nom ou le taux.',
      ar: 'أكدت المجامع الفقهية (مجمع الفقه، منظمة التعاون) أن كل فائدة محددة مسبقًا على قرض = ربا النسيئة، مهما كان الاسم أو النسبة.',
      en: 'Islamic academies (Majma\' al-Fiqh, OIC) confirmed that any predetermined interest on loan = Riba an-Nasi\'ah, regardless of name or rate.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'riba',
  },
];

// ============================================
// Questions - Contrats Islamiques
// ============================================

const contratsQuestions: ExamQuestion[] = [
  {
    id: 'muamalat-contrats-001',
    question: {
      fr: 'Qu\'est-ce que le contrat Mudaraba ?',
      ar: 'ما هو عقد المضاربة؟',
      en: 'What is a Mudaraba contract?',
    },
    options: [
      { id: 'a', text: { fr: 'Un prêt avec intérêt', ar: 'قرض بفائدة', en: 'A loan with interest' } },
      { id: 'b', text: { fr: 'Location de maison', ar: 'إيجار منزل', en: 'House rental' } },
      { id: 'c', text: { fr: 'Partenariat où l\'un fournit le capital, l\'autre le travail ; profits partagés, pertes au capital', ar: 'شراكة يقدم أحدهما المال والآخر العمل؛ الربح مشترك والخسارة على رأس المال', en: 'Partnership where one provides capital, the other work; profits shared, losses on capital' } },
      { id: 'd', text: { fr: 'Vente à crédit', ar: 'بيع بالتقسيط', en: 'Credit sale' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le Rabb al-Mal (bailleur) apporte le capital, le Mudarib (gestionnaire) son expertise. Le ratio des profits est convenu, les pertes sont sur le capital.',
      ar: 'رب المال يقدم رأس المال، والمضارب يقدم خبرته. نسبة الأرباح متفق عليها، والخسائر على رأس المال.',
      en: 'Rabb al-Mal (funder) brings capital, Mudarib (manager) his expertise. Profit ratio is agreed, losses are on the capital.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'contrats',
  },
  {
    id: 'muamalat-contrats-002',
    question: {
      fr: 'Qu\'est-ce que le contrat Musharaka ?',
      ar: 'ما هو عقد المشاركة؟',
      en: 'What is a Musharaka contract?',
    },
    options: [
      { id: 'a', text: { fr: 'Un monopole', ar: 'احتكار', en: 'A monopoly' } },
      { id: 'b', text: { fr: 'Donation', ar: 'هبة', en: 'Donation' } },
      { id: 'c', text: { fr: 'Héritage', ar: 'ميراث', en: 'Inheritance' } },
      { id: 'd', text: { fr: 'Partenariat où tous apportent capital et/ou travail ; profits et pertes selon les parts', ar: 'شراكة يساهم فيها الجميع برأس مال و/أو عمل؛ أرباح وخسائر حسب الحصص', en: 'Partnership where all contribute capital and/or work; profits and losses according to shares' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Contrairement à Mudaraba, dans Musharaka tous les partenaires peuvent contribuer au capital ET au travail. C\'est un partenariat équitable.',
      ar: 'على خلاف المضاربة، في المشاركة يمكن لجميع الشركاء المساهمة برأس المال والعمل. وهي شراكة عادلة.',
      en: 'Unlike Mudaraba, in Musharaka all partners can contribute capital AND work. It\'s an equitable partnership.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'contrats',
  },
  {
    id: 'muamalat-contrats-003',
    question: {
      fr: 'Qu\'est-ce que le contrat Ijara ?',
      ar: 'ما هو عقد الإجارة؟',
      en: 'What is an Ijara contract?',
    },
    options: [
      { id: 'a', text: { fr: 'Vente définitive', ar: 'بيع نهائي', en: 'Final sale' } },
      { id: 'b', text: { fr: 'Location (d\'un bien ou d\'un service) contre un loyer déterminé', ar: 'إيجار (لعين أو خدمة) مقابل أجرة معلومة', en: 'Rental (of a good or service) for a determined rent' } },
      { id: 'c', text: { fr: 'Don gratuit', ar: 'هبة مجانية', en: 'Free gift' } },
      { id: 'd', text: { fr: 'Prêt d\'argent', ar: 'قرض مال', en: 'Money loan' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Ijara : le propriétaire (Mu\'jir) loue l\'usufruit au locataire (Musta\'jir). Le bien reste propriété du bailleur. Variante : Ijara wa Iqtina (location-vente).',
      ar: 'الإجارة: المؤجر يؤجر المنفعة للمستأجر. العين تبقى ملكًا للمؤجر. ومنها: الإجارة المنتهية بالتمليك.',
      en: 'Ijara: owner (Mu\'jir) rents usufruct to tenant (Musta\'jir). Good remains owner\'s property. Variant: Ijara wa Iqtina (lease-to-own).',
    },
    points: 2,
    difficulty: 'medium',
    category: 'contrats',
  },
  {
    id: 'muamalat-contrats-004',
    question: {
      fr: 'Qu\'est-ce que la Murabaha ?',
      ar: 'ما هي المرابحة؟',
      en: 'What is Murabaha?',
    },
    options: [
      { id: 'a', text: { fr: 'Vente avec déclaration du coût d\'achat + marge de profit connue', ar: 'بيع مع بيان ثمن الشراء + هامش ربح معلوم', en: 'Sale with disclosure of purchase cost + known profit margin' } },
      { id: 'b', text: { fr: 'Vente à perte', ar: 'بيع بخسارة', en: 'Sale at loss' } },
      { id: 'c', text: { fr: 'Échange sans argent', ar: 'تبادل بدون مال', en: 'Exchange without money' } },
      { id: 'd', text: { fr: 'Prêt à intérêt', ar: 'قرض بفائدة', en: 'Interest loan' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'La banque achète le bien, le possède réellement, puis le vend au client avec une marge déclarée. C\'est différent d\'un prêt car il y a possession réelle.',
      ar: 'البنك يشتري السلعة ويمتلكها فعليًا، ثم يبيعها للعميل بهامش معلن. تختلف عن القرض لوجود التملك الحقيقي.',
      en: 'Bank buys the good, actually owns it, then sells it to client with declared margin. Different from loan because of real ownership.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'contrats',
  },
];

// ============================================
// Questions - Interdictions Commerciales
// ============================================

const interdictionsQuestions: ExamQuestion[] = [
  {
    id: 'muamalat-interdit-001',
    question: {
      fr: 'Qu\'est-ce que le Gharar ?',
      ar: 'ما هو الغرر؟',
      en: 'What is Gharar?',
    },
    options: [
      { id: 'a', text: { fr: 'Un profit normal', ar: 'ربح عادي', en: 'Normal profit' } },
      { id: 'b', text: { fr: 'Une garantie', ar: 'ضمان', en: 'A warranty' } },
      { id: 'c', text: { fr: 'L\'incertitude excessive, le risque inconnu, l\'aléa dans le contrat', ar: 'الجهالة الفاحشة والمخاطرة المجهولة في العقد', en: 'Excessive uncertainty, unknown risk, hazard in contract' } },
      { id: 'd', text: { fr: 'Un contrat écrit', ar: 'عقد مكتوب', en: 'Written contract' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le Prophète ﷺ a interdit la vente avec Gharar. Ex: vendre le poisson dans l\'eau avant de le pêcher, vendre les fruits avant maturation.',
      ar: 'نهى النبي ﷺ عن بيع الغرر. مثال: بيع السمك في الماء قبل صيده، بيع الثمار قبل نضجها.',
      en: 'The Prophet ﷺ forbade sale with Gharar. Ex: selling fish in water before catching, selling fruits before ripening.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'interdictions',
  },
  {
    id: 'muamalat-interdit-002',
    question: {
      fr: 'Qu\'est-ce que le Maysir (jeu de hasard) ?',
      ar: 'ما هو الميسر (القمار)؟',
      en: 'What is Maysir (gambling)?',
    },
    options: [
      { id: 'a', text: { fr: 'Un commerce halal', ar: 'تجارة حلال', en: 'Halal commerce' } },
      { id: 'b', text: { fr: 'L\'investissement', ar: 'الاستثمار', en: 'Investment' } },
      { id: 'c', text: { fr: 'Le travail salarié', ar: 'العمل المأجور', en: 'Salaried work' } },
      { id: 'd', text: { fr: 'Toute transaction où le gain dépend du hasard, créant des gagnants et perdants', ar: 'كل معاملة يتوقف الربح فيها على الحظ، فتنتج رابحين وخاسرين', en: 'Any transaction where gain depends on chance, creating winners and losers' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Allah dit : "Le vin, le Maysir... sont une abomination, œuvre du Diable. Écartez-vous en" (5:90). Loteries, paris, spéculation pure sont Haram.',
      ar: 'قال تعالى: "الخمر والميسر... رجس من عمل الشيطان فاجتنبوه" (المائدة:90). اليانصيب والرهان والمضاربة المحضة حرام.',
      en: 'Allah says: "Wine, Maysir... are an abomination, Satan\'s work. Avoid them" (5:90). Lotteries, betting, pure speculation are Haram.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'interdictions',
  },
  {
    id: 'muamalat-interdit-003',
    question: {
      fr: 'Qu\'est-ce que l\'Ihtikar (monopole abusif) ?',
      ar: 'ما هو الاحتكار؟',
      en: 'What is Ihtikar (hoarding/monopoly)?',
    },
    options: [
      { id: 'a', text: { fr: 'Vendre à bas prix', ar: 'البيع بسعر منخفض', en: 'Selling at low price' } },
      { id: 'b', text: { fr: 'Stocker des produits essentiels pour créer une pénurie et augmenter les prix', ar: 'تخزين السلع الأساسية لإحداث ندرة ورفع الأسعار', en: 'Hoarding essential goods to create scarcity and raise prices' } },
      { id: 'c', text: { fr: 'Acheter en gros', ar: 'الشراء بالجملة', en: 'Buying wholesale' } },
      { id: 'd', text: { fr: 'Vendre à l\'étranger', ar: 'البيع للخارج', en: 'Selling abroad' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Celui qui fait l\'Ihtikar est un pécheur." (Muslim). Cela nuit à la communauté en privant les gens de nécessités.',
      ar: 'قال ﷺ: "المحتكر خاطئ." (مسلم). وهذا يضر بالمجتمع بحرمان الناس من الضروريات.',
      en: 'The Prophet ﷺ said: "The one who hoards is a sinner." (Muslim). This harms society by depriving people of necessities.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'interdictions',
  },
  {
    id: 'muamalat-interdit-004',
    question: {
      fr: 'La vente de ce qui est intrinsèquement Haram est-elle permise ?',
      ar: 'هل يجوز بيع ما هو حرام بذاته؟',
      en: 'Is selling what is intrinsically Haram permitted?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, le Prophète ﹠ a interdit la vente du vin, des idoles, du porc, des cadavres', ar: 'لا، حرّم النبي ﹠ بيع الخمر والأصنام والخنزير والميتة', en: 'No, the Prophet ﹠ forbade selling wine, idols, pork, dead animals' } },
      { id: 'b', text: { fr: 'Oui, si le profit va à la charité', ar: 'نعم، إذا ذهب الربح للصدقة', en: 'Yes, if profit goes to charity' } },
      { id: 'c', text: { fr: 'Seulement aux non-musulmans', ar: 'فقط لغير المسلمين', en: 'Only to non-Muslims' } },
      { id: 'd', text: { fr: 'Oui en petites quantités', ar: 'نعم بكميات صغيرة', en: 'Yes in small quantities' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: '"Quand Allah interdit quelque chose, Il en interdit aussi le prix." Cela inclut alcool, drogues, porc, objets d\'idolâtrie.',
      ar: '"إذا حرّم الله شيئًا حرّم ثمنه." ويشمل ذلك الخمر والمخدرات والخنزير وأدوات العبادة لغير الله.',
      en: '"When Allah forbids something, He also forbids its price." This includes alcohol, drugs, pork, objects of idolatry.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'interdictions',
  },
];

// ============================================
// Questions - Finance Islamique Moderne
// ============================================

const financeModerneQuestions: ExamQuestion[] = [
  {
    id: 'muamalat-finance-001',
    question: {
      fr: 'Qu\'est-ce qu\'un Sukuk ?',
      ar: 'ما هي الصكوك؟',
      en: 'What is a Sukuk?',
    },
    options: [
      { id: 'a', text: { fr: 'Une obligation conventionnelle avec intérêt', ar: 'سند تقليدي بفائدة', en: 'Conventional bond with interest' } },
      { id: 'b', text: { fr: 'Monnaie électronique', ar: 'عملة إلكترونية', en: 'Electronic currency' } },
      { id: 'c', text: { fr: 'Certificat d\'investissement représentant une part dans un actif réel', ar: 'شهادة استثمار تمثل حصة في أصل حقيقي', en: 'Investment certificate representing a share in a real asset' } },
      { id: 'd', text: { fr: 'Compte épargne', ar: 'حساب توفير', en: 'Savings account' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Contrairement aux obligations classiques basées sur l\'intérêt, les Sukuk représentent une propriété dans un actif tangible. Le rendement vient de l\'actif, non d\'un intérêt.',
      ar: 'على خلاف السندات التقليدية القائمة على الفائدة، تمثل الصكوك ملكية في أصل ملموس. العائد من الأصل لا من فائدة.',
      en: 'Unlike classical bonds based on interest, Sukuk represent ownership in a tangible asset. Return comes from the asset, not from interest.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'finance-moderne',
  },
  {
    id: 'muamalat-finance-002',
    question: {
      fr: 'Qu\'est-ce que le Takaful ?',
      ar: 'ما هو التكافل؟',
      en: 'What is Takaful?',
    },
    options: [
      { id: 'a', text: { fr: 'Assurance conventionnelle', ar: 'تأمين تقليدي', en: 'Conventional insurance' } },
      { id: 'b', text: { fr: 'Prêt bancaire', ar: 'قرض بنكي', en: 'Bank loan' } },
      { id: 'c', text: { fr: 'Jeu de hasard', ar: 'قمار', en: 'Gambling' } },
      { id: 'd', text: { fr: 'Assurance islamique basée sur la solidarité mutuelle et le partage des risques', ar: 'تأمين إسلامي قائم على التعاون والتضامن وتقاسم المخاطر', en: 'Islamic insurance based on mutual solidarity and risk sharing' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Takaful évite le Gharar et le Riba de l\'assurance classique. Les participants contribuent à un fonds commun ; l\'excédent est redistribué ou donné en charité.',
      ar: 'التكافل يتجنب الغرر والربا في التأمين التقليدي. المشتركون يساهمون في صندوق مشترك؛ والفائض يُوزع أو يُتصدق به.',
      en: 'Takaful avoids Gharar and Riba of classical insurance. Participants contribute to common fund; surplus is redistributed or given to charity.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'finance-moderne',
  },
];

// ============================================
// Questions - Contrats Spécifiques (NOUVEAU)
// ============================================

const contratsSpecifiquesQuestions: ExamQuestion[] = [
  {
    id: 'muamalat-contrat-spec-001',
    question: {
      fr: 'Qu\'est-ce que l\'Ijarah ?',
      ar: 'ما هي الإجارة؟',
      en: 'What is Ijarah?',
    },
    options: [
      { id: 'a', text: { fr: 'Un prêt avec intérêt', ar: 'قرض بفائدة', en: 'A loan with interest' } },
      { id: 'b', text: { fr: 'Un contrat de location (bail) permettant l\'usage d\'un bien contre paiement', ar: 'عقد إيجار يسمح بالانتفاع بشيء مقابل أجرة', en: 'A lease contract allowing use of an asset against payment' } },
      { id: 'c', text: { fr: 'Une vente à tempérament', ar: 'بيع بالتقسيط', en: 'Installment sale' } },
      { id: 'd', text: { fr: 'Un don', ar: 'هبة', en: 'A gift' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'L\'Ijarah est la location de l\'usufruit (Manfa\'a) d\'un bien. En finance islamique, elle sert de base à l\'Ijarah Muntahia bi-Tamlik (location avec promesse de vente).',
      ar: 'الإجارة عقد على المنفعة مقابل عوض. وفي التمويل الإسلامي تستخدم في الإجارة المنتهية بالتمليك.',
      en: 'Ijarah is renting the usufruct (Manfa\'a) of an asset. In Islamic finance, it\'s the basis for Ijarah Muntahia bi-Tamlik (lease-to-own).',
    },
    points: 2,
    difficulty: 'medium',
    category: 'contrats-specifiques',
  },
  {
    id: 'muamalat-contrat-spec-002',
    question: {
      fr: 'Qu\'est-ce que la Mudarabah ?',
      ar: 'ما هي المضاربة؟',
      en: 'What is Mudarabah?',
    },
    options: [
      { id: 'a', text: { fr: 'Un partenariat où l\'un apporte le capital (Rab al-Mal) et l\'autre le travail (Mudarib)', ar: 'شراكة يقدم فيها أحدهما المال (رب المال) والآخر العمل (المضارب)', en: 'A partnership where one provides capital (Rab al-Mal) and the other work (Mudarib)' } },
      { id: 'b', text: { fr: 'Un prêt bancaire', ar: 'قرض بنكي', en: 'Bank loan' } },
      { id: 'c', text: { fr: 'Une vente au comptant', ar: 'بيع نقدي', en: 'Cash sale' } },
      { id: 'd', text: { fr: 'Un don de charité', ar: 'صدقة', en: 'Charity donation' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Dans la Mudarabah, les profits sont partagés selon un ratio convenu ; les pertes sont supportées par le capital (sauf négligence du Mudarib).',
      ar: 'في المضاربة، الربح يُقسم حسب نسبة متفق عليها؛ والخسارة على رأس المال (إلا إن فرّط المضارب).',
      en: 'In Mudarabah, profits are shared per agreed ratio; losses are borne by capital (except if Mudarib is negligent).',
    },
    points: 2,
    difficulty: 'medium',
    category: 'contrats-specifiques',
  },
  {
    id: 'muamalat-contrat-spec-003',
    question: {
      fr: 'Qu\'est-ce que la Musharakah ?',
      ar: 'ما هي المشاركة؟',
      en: 'What is Musharakah?',
    },
    options: [
      { id: 'a', text: { fr: 'Un partenariat où tous les partenaires contribuent au capital ET peuvent participer à la gestion', ar: 'شراكة يساهم فيها كل الشركاء في رأس المال ويمكنهم المشاركة في الإدارة', en: 'A partnership where all partners contribute capital AND can participate in management' } },
      { id: 'b', text: { fr: 'Un prêt entre amis', ar: 'قرض بين أصدقاء', en: 'Loan between friends' } },
      { id: 'c', text: { fr: 'Une location', ar: 'إيجار', en: 'A rental' } },
      { id: 'd', text: { fr: 'Une vente interdite', ar: 'بيع محرم', en: 'A prohibited sale' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Contrairement à la Mudarabah, tous les partenaires apportent du capital dans la Musharakah. Profits et pertes sont partagés proportionnellement.',
      ar: 'على خلاف المضاربة، جميع الشركاء يساهمون برأس المال في المشاركة. والربح والخسارة يُقسمان بالنسبة.',
      en: 'Unlike Mudarabah, all partners contribute capital in Musharakah. Profits and losses are shared proportionally.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'contrats-specifiques',
  },
  {
    id: 'muamalat-contrat-spec-004',
    question: {
      fr: 'Qu\'est-ce que le Salam ?',
      ar: 'ما هو السَّلَم؟',
      en: 'What is Salam?',
    },
    options: [
      { id: 'a', text: { fr: 'La salutation islamique', ar: 'التحية الإسلامية', en: 'Islamic greeting' } },
      { id: 'b', text: { fr: 'Vente à livraison différée où le prix est payé d\'avance et le bien livré plus tard', ar: 'بيع بتسليم مؤجل حيث يُدفع الثمن مقدمًا والسلعة تُسلَّم لاحقًا', en: 'Forward sale where price is paid upfront and goods delivered later' } },
      { id: 'c', text: { fr: 'Vente au comptant', ar: 'بيع نقدي', en: 'Cash sale' } },
      { id: 'd', text: { fr: 'Troc', ar: 'مقايضة', en: 'Barter' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Salam est une exception au principe d\'interdiction de vendre ce qu\'on ne possède pas. Utilisé traditionnellement pour les récoltes agricoles.',
      ar: 'السَّلَم استثناء من منع بيع ما لا يملكه الشخص. استُخدم تقليديًا للمحاصيل الزراعية.',
      en: 'Salam is an exception to the principle of not selling what one doesn\'t possess. Traditionally used for agricultural crops.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'contrats-specifiques',
  },
  {
    id: 'muamalat-contrat-spec-005',
    question: {
      fr: 'Qu\'est-ce que l\'Istisna\' ?',
      ar: 'ما هو الاستصناع؟',
      en: 'What is Istisna\'?',
    },
    options: [
      { id: 'a', text: { fr: 'Contrat de fabrication sur mesure où le paiement et la livraison sont différés', ar: 'عقد تصنيع حسب الطلب حيث الثمن والتسليم مؤجلان', en: 'Custom manufacturing contract where payment and delivery are deferred' } },
      { id: 'b', text: { fr: 'Achat d\'un bien existant', ar: 'شراء سلعة موجودة', en: 'Buying an existing good' } },
      { id: 'c', text: { fr: 'Donation', ar: 'تبرع', en: 'Donation' } },
      { id: 'd', text: { fr: 'Prêt d\'argent', ar: 'إقراض مال', en: 'Money lending' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'L\'Istisna\' permet de commander une fabrication (bâtiment, bateau, machine). Contrairement au Salam, le paiement peut être échelonné.',
      ar: 'الاستصناع يسمح بطلب تصنيع (بناء، سفينة، آلة). على خلاف السلم، يمكن تقسيط الثمن.',
      en: 'Istisna\' allows ordering a manufacturing (building, ship, machine). Unlike Salam, payment can be installments.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'contrats-specifiques',
  },
];

// ============================================
// Questions - Finance Numérique Avancée (Phase 2)
// ============================================

const financeNumeriqueQuestions: ExamQuestion[] = [
  {
    id: 'muamalat-crypto-001',
    question: {
      fr: 'Qu\'est-ce que le "staking" de cryptomonnaies et quel est son statut en Islam ?',
      ar: 'ما هو "التخزين" (staking) للعملات الرقمية وما حكمه في الإسلام؟',
      en: 'What is cryptocurrency "staking" and what is its Islamic ruling?',
    },
    options: [
      { id: 'a', text: { fr: 'C\'est Halal sans condition', ar: 'حلال بلا شروط', en: 'Halal unconditionally' } },
      { id: 'b', text: { fr: 'Avis divergent : ressemble au Riba (prêt à intérêt) selon certains, ou à Ijarah (location de capital) selon d\'autres', ar: 'خلاف: يشبه الربا (قرض بفائدة) عند البعض، أو الإجارة (تأجير رأس مال) عند آخرين', en: 'Opinion differs: resembles Riba (interest loan) per some, or Ijarah (capital leasing) per others' } },
      { id: 'c', text: { fr: 'Toujours Haram', ar: 'دائما حرام', en: 'Always Haram' } },
      { id: 'd', text: { fr: 'N\'a aucun rapport avec la finance', ar: 'لا علاقة له بالتمويل', en: 'Unrelated to finance' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le staking verrouille des cryptos pour sécuriser la blockchain et générer des récompenses. Débat : 1) Haram si assimilé à un prêt productif d\'intérêts (Riba). 2) Halal si vu comme location de capital/service (Ijarah) ou partage de profits (Mudarabah). Conseil : éviter si doute (Shubha).',
      ar: 'التخزين (staking) يُقفل العملات لتأمين البلوكشين ويولد مكافآت. نقاش: ١) حرام إن شُبّه بقرض يولد فوائد (ربا). ٢) حلال إن رُئي كإيجار رأس مال/خدمة (إجارة) أو تقاسم أرباح (مضاربة). النصيحة: التجنب عند الشك (شبهة).',
      en: 'Staking locks cryptos to secure blockchain and generate rewards. Debate: 1) Haram if likened to interest-producing loan (Riba). 2) Halal if seen as capital/service leasing (Ijarah) or profit-sharing (Mudarabah). Advice: avoid if doubt (Shubha).',
    },
    points: 3,
    difficulty: 'hard',
    category: 'finance-numerique',
  },
  {
    id: 'muamalat-nft-001',
    question: {
      fr: 'Les NFTs (jetons non fongibles) d\'art numérique sont-ils Halal ?',
      ar: 'هل الـNFTs (رموز غير قابلة للاستبدال) للفن الرقمي حلال؟',
      en: 'Are NFTs (non-fungible tokens) of digital art Halal?',
    },
    options: [
      { id: 'a', text: { fr: 'Halal si le contenu est licite (pas d\'images interdites, gambling, musique illicite)', ar: 'حلال إن كان المحتوى مباحا (لا صور محرمة، قمار، موسيقى محرمة)', en: 'Halal if content is lawful (no forbidden images, gambling, illicit music)' } },
      { id: 'b', text: { fr: 'Toujours Haram car numérique', ar: 'دائما حرام لأنه رقمي', en: 'Always Haram as digital' } },
      { id: 'c', text: { fr: 'Halal sans restriction', ar: 'حلال بلا قيود', en: 'Halal without restriction' } },
      { id: 'd', text: { fr: 'Les NFTs n\'existent pas juridiquement', ar: 'الـNFTs غير موجودة قانونيا', en: 'NFTs don\'t exist legally' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les NFTs représentent la propriété d\'un actif numérique unique (art, collectible). Statut : 1) Halal si contenu licite et pas de spéculation excessive (Gharar). 2) Haram si contenu interdit (nudité, symboles religieux inappropriés, promotion de péchés). Principe : évaluer le contenu et l\'usage.',
      ar: 'الـNFTs تمثل ملكية أصل رقمي فريد (فن، مقتنى). الحكم: ١) حلال إن كان المحتوى مباحا وبدون مضاربة مفرطة (غرر). ٢) حرام إن كان المحتوى محرما (عري، رموز دينية غير لائقة، ترويج للمعاصي). المبدأ: تقييم المحتوى والاستخدام.',
      en: 'NFTs represent ownership of unique digital asset (art, collectible). Ruling: 1) Halal if content lawful and no excessive speculation (Gharar). 2) Haram if forbidden content (nudity, inappropriate religious symbols, sin promotion). Principle: evaluate content and use.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'finance-numerique',
  },
  {
    id: 'muamalat-gig-001',
    question: {
      fr: 'Travailler sur des plateformes de "gig economy" (Uber, Deliveroo, Fiverr) est-il Halal ?',
      ar: 'هل العمل على منصات "اقتصاد الوظائف المؤقتة" (Uber، Deliveroo، Fiverr) حلال؟',
      en: 'Is working on "gig economy" platforms (Uber, Deliveroo, Fiverr) Halal?',
    },
    options: [
      { id: 'a', text: { fr: 'Halal si le service fourni est licite et les conditions contractuelles claires (pas de Gharar)', ar: 'حلال إن كانت الخدمة المقدمة مباحة والشروط التعاقدية واضحة (بدون غرر)', en: 'Halal if service provided is lawful and contractual terms clear (no Gharar)' } },
      { id: 'b', text: { fr: 'Toujours Haram', ar: 'دائما حرام', en: 'Always Haram' } },
      { id: 'c', text: { fr: 'Halal uniquement pour Uber', ar: 'حلال فقط لـ Uber', en: 'Halal only for Uber' } },
      { id: 'd', text: { fr: 'Interdit car ce sont des entreprises occidentales', ar: 'محرم لأنها شركات غربية', en: 'Forbidden as Western companies' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Principe : Halal si 1) Le service est licite (pas livrer alcool/porc, pas transport vers lieux de péché). 2) Contrat clair (commission, modalités). 3) Pas d\'exploitation injuste. Attention : certaines plateformes ont des clauses abusives (vérifier Terms). Uber Eats : éviter commandes Haram.',
      ar: 'المبدأ: حلال إن ١) الخدمة مباحة (لا توصيل خمر/خنزير، لا نقل لأماكن معصية). ٢) العقد واضح (عمولة، شروط). ٣) بدون استغلال ظالم. تنبيه: بعض المنصات لها شروط تعسفية (تحقق من الشروط). Uber Eats: تجنب طلبات حرام.',
      en: 'Principle: Halal if 1) Service is lawful (not deliver alcohol/pork, not transport to sin places). 2) Contract clear (commission, terms). 3) No unjust exploitation. Caution: some platforms have abusive clauses (check Terms). Uber Eats: avoid Haram orders.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'finance-numerique',
  },
  {
    id: 'muamalat-defi-001',
    question: {
      fr: 'Qu\'est-ce que la DeFi (finance décentralisée) et quel est son défi principal en Islam ?',
      ar: 'ما هي DeFi (التمويل اللامركزي) وما التحدي الرئيسي في الإسلام؟',
      en: 'What is DeFi (decentralized finance) and what is its main Islamic challenge?',
    },
    options: [
      { id: 'a', text: { fr: 'Totalement Halal car sans banques', ar: 'حلال تماما لأنها بدون بنوك', en: 'Totally Halal as no banks' } },
      { id: 'b', text: { fr: 'Défi : beaucoup de protocoles impliquent des prêts à intérêts (Riba), leverage, et spéculation (Gharar)', ar: 'التحدي: كثير من البروتوكولات تتضمن قروضا بفوائد (ربا)، رافعة مالية، ومضاربة (غرر)', en: 'Challenge: many protocols involve interest loans (Riba), leverage, and speculation (Gharar)' } },
      { id: 'c', text: { fr: 'La DeFi n\'existe pas', ar: 'الـDeFi غير موجودة', en: 'DeFi doesn\'t exist' } },
      { id: 'd', text: { fr: 'C\'est seulement pour les non-musulmans', ar: 'فقط لغير المسلمين', en: 'Only for non-Muslims' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La DeFi utilise des smart contracts pour prêts, échanges sans intermédiaires. PROBLÈME : 1) Prêts avec APY (intérêts = Riba). 2) Leverage trading (dette multiplicatrice = Riba + Gharar). 3) Liquidations forcées injustes. SOLUTION : Attendre DeFi conforme Shariah (profit-sharing, pas intérêts).',
      ar: 'الـDeFi تستخدم عقودا ذكية للإقراض والتبادل بدون وسطاء. المشكلة: ١) قروض بـAPY (فوائد = ربا). ٢) التداول بالرافعة (دين مضاعف = ربا + غرر). ٣) تصفيات قسرية ظالمة. الحل: انتظار DeFi متوافقة مع الشريعة (تقاسم أرباح، لا فوائد).',
      en: 'DeFi uses smart contracts for loans, exchanges without intermediaries. PROBLEM: 1) Loans with APY (interest = Riba). 2) Leverage trading (multiplying debt = Riba + Gharar). 3) Unjust forced liquidations. SOLUTION: Wait for Shariah-compliant DeFi (profit-sharing, not interest).',
    },
    points: 3,
    difficulty: 'hard',
    category: 'finance-numerique',
  },
  {
    id: 'muamalat-dropship-001',
    question: {
      fr: 'Le dropshipping (vendre un produit qu\'on ne possède pas physiquement) est-il Halal ?',
      ar: 'هل الـdropshipping (بيع منتج لا تملكه ماديا) حلال؟',
      en: 'Is dropshipping (selling a product you don\'t physically own) Halal?',
    },
    options: [
      { id: 'a', text: { fr: 'Haram selon l\'avis majoritaire car on vend ce qu\'on ne possède pas', ar: 'حرام عند الجمهور لأنك تبيع ما لا تملك', en: 'Haram per majority as selling what you don\'t own' } },
      { id: 'b', text: { fr: 'Halal si on achète le produit AVANT de le vendre au client (modèle Murabaha)', ar: 'حلال إن اشتريت المنتج قبل بيعه للزبون (نموذج المرابحة)', en: 'Halal if buying product BEFORE selling to customer (Murabaha model)' } },
      { id: 'c', text: { fr: 'Toujours Halal', ar: 'دائما حلال', en: 'Always Halal' } },
      { id: 'd', text: { fr: 'Seulement pour les vêtements', ar: 'للملابس فقط', en: 'Only for clothes' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a interdit "vendre ce qu\'on ne possède pas" (Hadith Abu Hurayra). DROPSHIPPING CLASSIQUE (prendre commande → acheter → livrer) = Haram. SOLUTION HALAL : 1) Acheter le produit d\'abord, devenir propriétaire, puis vendre (Murabaha). 2) Agir comme agent (Wakalah) avec commission claire.',
      ar: 'نهى النبي ﷺ عن "بيع ما ليس عندك" (حديث أبي هريرة). الـDROPSHIPPING الكلاسيكي (أخذ طلب ← شراء ← توصيل) = حرام. الحل الحلال: ١) شراء المنتج أولا، امتلاكه، ثم بيعه (مرابحة). ٢) العمل كوكيل (وكالة) بعمولة واضحة.',
      en: 'The Prophet ﷺ forbade "selling what you don\'t own" (Abu Hurayra Hadith). CLASSIC DROPSHIPPING (take order → buy → deliver) = Haram. HALAL SOLUTION: 1) Buy product first, own it, then sell (Murabaha). 2) Act as agent (Wakalah) with clear commission.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'finance-numerique',
  },
];

// ============================================
// Assemblage de l'examen COMPLET
// ============================================

const allQuestions: ExamQuestion[] = [
  ...principesQuestions,           // 3 questions
  ...venteQuestions,               // 3 questions
  ...ribaQuestions,                // 4 questions
  ...contratsQuestions,            // 4 questions
  ...interdictionsQuestions,       // 4 questions
  ...financeModerneQuestions,      // 2 questions
  ...contratsSpecifiquesQuestions, // 5 questions
  ...financeNumeriqueQuestions,    // 5 questions (NOUVEAU Phase 2)
  // Total : 30 questions
];

export const examFiqhMuamalatFinal: ExamConfig = {
  id: 'exam-fiqh-muamalat-final',
  type: 'course',
  level: 'advanced',
  title: {
    fr: 'Examen Complet - Fiqh Muamalat',
    ar: 'الامتحان الشامل - فقه المعاملات',
    en: 'Complete Exam - Fiqh Muamalat',
  },
  description: {
    fr: 'Examen de 25 questions sélectionnées aléatoirement parmi une banque de 30 questions. Couvre les transactions islamiques incluant finance numérique moderne.',
    ar: 'امتحان من 25 سؤالاً يتم اختيارها عشوائياً من بنك يضم 30 سؤالاً. يغطي المعاملات الإسلامية بما في ذلك التمويل الرقمي الحديث.',
    en: 'Exam with 25 questions randomly selected from a pool of 30. Covers Islamic transactions including modern digital finance.',
  },
  instructions: {
    fr: 'Vous avez 35 minutes pour répondre à 25 questions. Chaque question a une seule bonne réponse. Un score de 70% est requis pour réussir.',
    ar: 'لديك 35 دقيقة للإجابة على 25 سؤالاً. لكل سؤال إجابة صحيحة واحدة. يُشترط 70% للنجاح.',
    en: 'You have 35 minutes to answer 25 questions. Each question has one correct answer. A score of 70% is required to pass.',
  },
  courseSlug: 'fiqh-muamalat',
  questionPool: allQuestions,
  questionsPerExam: 25,
  categoryConfig: [
    { category: 'principes', count: 2 },
    { category: 'vente', count: 3 },
    { category: 'riba', count: 3 },
    { category: 'contrats', count: 3 },
    { category: 'interdictions', count: 3 },
    { category: 'finance-moderne', count: 2 },
    { category: 'contrats-specifiques', count: 4 },
    { category: 'finance-numerique', count: 5 },
  ],
  questions: [],
  duration: 35,
  passingScore: 70,
  maxAttempts: 5,
  shuffleQuestions: true,
  shuffleOptions: true,
  showAnswersAfter: 'complete',
  hasCertificate: true,
  certificateName: {
    fr: 'Certificat de Maîtrise - Fiqh Muamalat',
    ar: 'شهادة الإتقان - فقه المعاملات',
    en: 'Mastery Certificate - Fiqh Muamalat',
  },
  createdAt: '2026-01-31',
};

export default examFiqhMuamalatFinal;
