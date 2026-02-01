/**
 * Quiz Seerah - Module 5 : Les Dernières Années et l'Héritage
 * 
 * Ce quiz couvre la fin de la vie du Prophète ﷺ :
 * Hajjat al-Wada', maladie, décès et succession
 * 
 * Niveau : Intermédiaire à Avancé
 * Questions : 15
 */

import { Quiz, Question } from '../types';

const questions: Question[] = [
  // --- Questions Faciles (5) ---
  {
    id: 'seerah5-q001',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quelle année est connue comme "Année des Délégations" (\'Am al-Wufud) ?',
      ar: 'أي سنة عُرفت بـ"عام الوفود"؟',
      en: 'Which year is known as "Year of Delegations" (\'Am al-Wufud)?',
    },
    options: [
      { id: 'a', text: { fr: '9H - Des tribus de toute l\'Arabie vinrent embrasser l\'Islam', ar: '9هـ - قبائل من كل الجزيرة جاءت للإسلام', en: '9H - Tribes from all Arabia came to embrace Islam' } },
      { id: 'b', text: { fr: '1H - Après la Hijra', ar: '1هـ - بعد الهجرة', en: '1H - After Hijra' } },
      { id: 'c', text: { fr: '5H - Après Khandaq', ar: '5هـ - بعد الخندق', en: '5H - After Khandaq' } },
      { id: 'd', text: { fr: '2H - Après Badr', ar: '2هـ - بعد بدر', en: '2H - After Badr' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Après le Fath Makka (8H) et Hunayn, l\'Islam se répandit. En 9H, des délégations de tribus arabes (Thaqif, \'Abd al-Qays, Najran, etc.) vinrent pour embrasser l\'Islam ou négocier. Le Coran dit : "Les gens entrent en foule dans la religion d\'Allah" (110:2).',
      ar: 'بعد فتح مكة (8هـ) وحنين، انتشر الإسلام. في 9هـ، جاءت وفود من القبائل العربية (ثقيف، عبد القيس، نجران، إلخ) للإسلام أو التفاوض. قال تعالى: "ورأيت الناس يدخلون في دين الله أفواجاً" (110:2).',
      en: 'After Fath Makka (8H) and Hunayn, Islam spread. In 9H, delegations from Arab tribes (Thaqif, Abd al-Qays, Najran, etc.) came to embrace Islam or negotiate. Quran says: "People entering Allah\'s religion in multitudes" (110:2).',
    },
    reference: {
      courseSlug: 'seerah-module-5',
      lessonId: '001-wufud',
    },
    points: 10,
    tags: ['seerah', 'wufud', 'delegations'],
  },
  {
    id: 'seerah5-q002',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Comment s\'appelle le pèlerinage d\'adieu du Prophète ﷺ ?',
      ar: 'ما اسم حجة وداع النبي ﷺ؟',
      en: 'What is the name of the Prophet\'s ﷺ farewell pilgrimage?',
    },
    options: [
      { id: 'a', text: { fr: 'Hajjat al-Wada\' (حجة الوداع)', ar: 'حجة الوداع', en: 'Hajjat al-Wada\'' } },
      { id: 'b', text: { fr: 'Hajjat al-Islam', ar: 'حجة الإسلام', en: 'Hajjat al-Islam' } },
      { id: 'c', text: { fr: 'Hajj al-Akbar', ar: 'الحج الأكبر', en: 'Hajj al-Akbar' } },
      { id: 'd', text: { fr: 'Hajj al-Awwal', ar: 'الحج الأول', en: 'Hajj al-Awwal' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'En Dhul Hijja 10H, le Prophète ﷺ accomplit son unique Hajj complet. Plus de 100 000 pèlerins l\'accompagnèrent. Il enseigna les rites et prononça le célèbre Khutba d\'Arafat. Il décéda 3 mois plus tard.',
      ar: 'في ذي الحجة 10هـ، أدى النبي ﷺ حجته الكاملة الوحيدة. أكثر من 100,000 حاج رافقوه. علّم المناسك وألقى خطبة عرفة الشهيرة. توفي بعدها بـ3 أشهر.',
      en: 'In Dhul Hijja 10H, Prophet ﷺ performed his only complete Hajj. Over 100,000 pilgrims accompanied him. He taught rites and delivered famous Arafat Khutba. He died 3 months later.',
    },
    reference: {
      courseSlug: 'seerah-module-5',
      lessonId: '002-hajjat-wada',
    },
    points: 10,
    tags: ['seerah', 'hajj', 'wada'],
  },
  {
    id: 'seerah5-q003',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'Le Prophète ﷺ déclara lors de son dernier sermon : "J\'ai laissé parmi vous ce qui vous préservera de l\'égarement : le Livre d\'Allah."',
      ar: 'قال النبي ﷺ في خطبته الأخيرة: "تركت فيكم ما إن تمسكتم به لن تضلوا: كتاب الله."',
      en: 'The Prophet ﷺ declared in his final sermon: "I have left among you what will preserve you from error: the Book of Allah."',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'Dans le hadith de Muslim, il dit : "J\'ai laissé parmi vous le Livre d\'Allah, si vous vous y attachez, vous ne vous égarerez jamais." D\'autres narrations ajoutent "et ma Sunna" (Muwatta). Les deux sources sont complémentaires.',
      ar: 'في حديث مسلم قال: "تركت فيكم كتاب الله، إن تمسكتم به لن تضلوا أبداً." روايات أخرى تضيف "وسنتي" (الموطأ). المصدران متكاملان.',
      en: 'In Muslim\'s hadith, he said: "I left among you Book of Allah, if you hold to it you\'ll never go astray." Other narrations add "and my Sunna" (Muwatta). Both sources are complementary.',
    },
    reference: {
      courseSlug: 'seerah-module-5',
      lessonId: '002-hajjat-wada',
    },
    points: 10,
    tags: ['seerah', 'khutba', 'quran'],
  },
  {
    id: 'seerah5-q004',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'En quel mois et quelle année le Prophète ﷺ décéda-t-il ?',
      ar: 'في أي شهر وسنة توفي النبي ﷺ؟',
      en: 'In which month and year did the Prophet ﷺ pass away?',
    },
    options: [
      { id: 'a', text: { fr: 'Rabi\' al-Awwal 11H (Juin 632)', ar: 'ربيع الأول 11هـ (يونيو 632م)', en: 'Rabi\' al-Awwal 11H (June 632)' } },
      { id: 'b', text: { fr: 'Ramadan 10H', ar: 'رمضان 10هـ', en: 'Ramadan 10H' } },
      { id: 'c', text: { fr: 'Muharram 11H', ar: 'محرم 11هـ', en: 'Muharram 11H' } },
      { id: 'd', text: { fr: 'Dhul Hijja 10H', ar: 'ذو الحجة 10هـ', en: 'Dhul Hijja 10H' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ décéda le 12 Rabi\' al-Awwal 11H (8 Juin 632), un lundi, à l\'âge de 63 ans. Il fut enterré dans la chambre d\'Aisha, là où il mourut. Sa maladie dura environ 13 jours.',
      ar: 'توفي النبي ﷺ في 12 ربيع الأول 11هـ (8 يونيو 632م)، يوم الاثنين، عن 63 عاماً. دُفن في حجرة عائشة حيث مات. مرضه استمر حوالي 13 يوماً.',
      en: 'Prophet ﷺ passed away on 12 Rabi\' al-Awwal 11H (June 8, 632), a Monday, at age 63. He was buried in Aisha\'s room where he died. His illness lasted about 13 days.',
    },
    reference: {
      courseSlug: 'seerah-module-5',
      lessonId: '003-wafat',
    },
    points: 10,
    tags: ['seerah', 'wafat', 'death'],
  },
  {
    id: 'seerah5-q005',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Qui fut élu premier calife après le décès du Prophète ﷺ ?',
      ar: 'من انتُخب أول خليفة بعد وفاة النبي ﷺ؟',
      en: 'Who was elected first caliph after the Prophet\'s ﷺ death?',
    },
    options: [
      { id: 'a', text: { fr: 'Abu Bakr as-Siddiq', ar: 'أبو بكر الصديق', en: 'Abu Bakr as-Siddiq' } },
      { id: 'b', text: { fr: 'Omar ibn al-Khattab', ar: 'عمر بن الخطاب', en: 'Omar ibn al-Khattab' } },
      { id: 'c', text: { fr: 'Ali ibn Abi Talib', ar: 'علي بن أبي طالب', en: 'Ali ibn Abi Talib' } },
      { id: 'd', text: { fr: 'Uthman ibn Affan', ar: 'عثمان بن عفان', en: 'Uthman ibn Affan' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'À Saqifat Bani Sa\'ida, les Ansar et Muhajirun se réunirent. Omar proposa Abu Bakr, le plus proche compagnon du Prophète ﷺ. Le Prophète avait ordonné qu\'il dirige la prière pendant sa maladie, signe de son rang.',
      ar: 'في سقيفة بني ساعدة، اجتمع الأنصار والمهاجرون. عمر رشّح أبا بكر، أقرب صحابي للنبي ﷺ. النبي أمره بإمامة الصلاة في مرضه، دلالة على مكانته.',
      en: 'At Saqifat Bani Sa\'ida, Ansar and Muhajirun met. Omar proposed Abu Bakr, Prophet\'s ﷺ closest companion. Prophet had ordered him to lead prayer during illness, sign of his rank.',
    },
    reference: {
      courseSlug: 'seerah-module-5',
      lessonId: '004-khilafa',
    },
    points: 10,
    tags: ['seerah', 'khilafa', 'abu-bakr'],
  },

  // --- Questions Moyennes (6) ---
  {
    id: 'seerah5-q006',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quels principes fondamentaux le Prophète ﷺ énonça-t-il dans le Sermon d\'Arafat ?',
      ar: 'ما المبادئ الأساسية التي ذكرها النبي ﷺ في خطبة عرفة؟',
      en: 'What fundamental principles did the Prophet ﷺ state in the Arafat Sermon?',
    },
    options: [
      { id: 'a', text: { fr: 'Sacralité du sang/bien/honneur, abolition de l\'usure et vengeances, droits des femmes, égalité', ar: 'حرمة الدم/المال/العرض، إلغاء الربا والثأر، حقوق النساء، المساواة', en: 'Sanctity of blood/wealth/honor, abolition of usury and vendettas, women\'s rights, equality' } },
      { id: 'b', text: { fr: 'Seulement les rites du Hajj', ar: 'مناسك الحج فقط', en: 'Only Hajj rites' } },
      { id: 'c', text: { fr: 'Des lois commerciales', ar: 'قوانين تجارية', en: 'Commercial laws' } },
      { id: 'd', text: { fr: 'La succession politique', ar: 'الخلافة السياسية', en: 'Political succession' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Sermon d\'Arafat est considéré comme la première déclaration des droits de l\'homme. Il affirma : inviolabilité de la vie/bien/honneur, fin du système de vengeance, annulation du riba, bons traitements des femmes, égalité raciale.',
      ar: 'تُعتبر خطبة عرفة أول إعلان لحقوق الإنسان. أكد: حرمة النفس/المال/العرض، نهاية نظام الثأر، إلغاء الربا، حسن معاملة النساء، المساواة العرقية.',
      en: 'Arafat Sermon is considered first declaration of human rights. He affirmed: inviolability of life/wealth/honor, end of vendetta system, abolition of riba, good treatment of women, racial equality.',
    },
    reference: {
      courseSlug: 'seerah-module-5',
      lessonId: '002-hajjat-wada',
    },
    points: 15,
    tags: ['seerah', 'khutba', 'rights'],
  },
  {
    id: 'seerah5-q007',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quel verset fut révélé à Arafat pendant Hajjat al-Wada\' ?',
      ar: 'أي آية نزلت في عرفة أثناء حجة الوداع؟',
      en: 'Which verse was revealed at Arafat during Hajjat al-Wada\'?',
    },
    options: [
      { id: 'a', text: { fr: '"Aujourd\'hui J\'ai parachevé pour vous votre religion..." (5:3)', ar: '"اليوم أكملت لكم دينكم..." (5:3)', en: '"Today I have perfected your religion for you..." (5:3)' } },
      { id: 'b', text: { fr: '"Lis au nom de ton Seigneur" (96:1)', ar: '"اقرأ باسم ربك" (96:1)', en: '"Read in the name of your Lord" (96:1)' } },
      { id: 'c', text: { fr: 'Sourate Al-Fatiha', ar: 'سورة الفاتحة', en: 'Surah Al-Fatiha' } },
      { id: 'd', text: { fr: 'Ayat al-Kursi', ar: 'آية الكرسي', en: 'Ayat al-Kursi' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Ce verset (Al-Ma\'ida 5:3) fut révélé le jour d\'Arafat, un vendredi. Il signale l\'achèvement de la révélation. Un juif dit à Omar : "Si ce verset nous avait été révélé, nous aurions fait de ce jour une fête." Omar répondit : "C\'était deux fêtes : vendredi et Arafat."',
      ar: 'هذه الآية (المائدة 5:3) نزلت يوم عرفة، يوم الجمعة. تُشير لاكتمال الوحي. قال يهودي لعمر: "لو نزلت علينا لاتخذنا يومها عيداً." أجاب عمر: "كان عيدين: الجمعة وعرفة."',
      en: 'This verse (Al-Ma\'ida 5:3) was revealed on Arafat day, a Friday. It signals completion of revelation. A Jew told Omar: "If revealed to us, we\'d make it a feast." Omar replied: "It was two feasts: Friday and Arafat."',
    },
    reference: {
      courseSlug: 'seerah-module-5',
      lessonId: '002-hajjat-wada',
    },
    points: 15,
    tags: ['seerah', 'revelation', 'maida'],
  },
  {
    id: 'seerah5-q008',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quels furent les derniers mots du Prophète ﷺ ?',
      ar: 'ما آخر كلمات النبي ﷺ؟',
      en: 'What were the Prophet\'s ﷺ last words?',
    },
    options: [
      { id: 'a', text: { fr: '"Ar-Rafiq al-A\'la" (Le Compagnon Suprême - Allah)', ar: '"الرفيق الأعلى" (الله)', en: '"Ar-Rafiq al-A\'la" (The Supreme Companion - Allah)' } },
      { id: 'b', text: { fr: '"Prenez soin de la prière"', ar: '"حافظوا على الصلاة"', en: '"Take care of prayer"' } },
      { id: 'c', text: { fr: '"Ali est mon successeur"', ar: '"علي خليفتي"', en: '"Ali is my successor"' } },
      { id: 'd', text: { fr: '"La ilaha illa Allah"', ar: '"لا إله إلا الله"', en: '"La ilaha illa Allah"' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Aisha rapporte : le Prophète ﷺ leva son doigt et dit trois fois "Ar-Rafiq al-A\'la" puis sa main retomba. Jibril lui avait donné le choix entre rester sur terre ou rejoindre Allah. Il choisit Allah.',
      ar: 'روت عائشة: رفع النبي ﷺ إصبعه وقال ثلاثاً "الرفيق الأعلى" ثم سقطت يده. جبريل خيّره بين البقاء أو لقاء الله. اختار الله.',
      en: 'Aisha reported: Prophet ﷺ raised his finger and said thrice "Ar-Rafiq al-A\'la" then his hand fell. Jibril gave him choice between staying or meeting Allah. He chose Allah.',
    },
    reference: {
      courseSlug: 'seerah-module-5',
      lessonId: '003-wafat',
    },
    points: 15,
    tags: ['seerah', 'wafat', 'words'],
  },
  {
    id: 'seerah5-q009',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelle fut la réaction d\'Omar quand il apprit la mort du Prophète ﷺ ?',
      ar: 'ما ردة فعل عمر عندما علم بوفاة النبي ﷺ؟',
      en: 'What was Omar\'s reaction when he learned of the Prophet\'s ﷺ death?',
    },
    options: [
      { id: 'a', text: { fr: 'Il refusa d\'y croire et menaça ceux qui le disaient, jusqu\'au discours d\'Abu Bakr', ar: 'رفض تصديق ذلك وهدد من يقوله، حتى خطبة أبي بكر', en: 'He refused to believe it and threatened those who said so, until Abu Bakr\'s speech' } },
      { id: 'b', text: { fr: 'Il pleura silencieusement', ar: 'بكى بصمت', en: 'He cried silently' } },
      { id: 'c', text: { fr: 'Il annonça le califat immédiatement', ar: 'أعلن الخلافة فوراً', en: 'He announced caliphate immediately' } },
      { id: 'd', text: { fr: 'Il s\'enfuit de Médine', ar: 'فرّ من المدينة', en: 'He fled Medina' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Omar, sous le choc, dégaina son épée menaçant quiconque dirait que le Prophète ﷺ était mort. Abu Bakr arriva, vérifia, puis dit le fameux discours : "Quiconque adorait Muhammad, Muhammad est mort. Quiconque adore Allah, Allah est vivant et ne meurt jamais."',
      ar: 'عمر، مصدوماً، سلّ سيفه مهدداً من يقول بوفاة النبي ﷺ. جاء أبو بكر، تأكد، ثم ألقى الخطبة الشهيرة: "من كان يعبد محمداً فإن محمداً قد مات، ومن كان يعبد الله فإن الله حي لا يموت."',
      en: 'Omar, in shock, drew his sword threatening anyone who said Prophet ﷺ died. Abu Bakr came, verified, then delivered famous speech: "Whoever worshipped Muhammad, Muhammad has died. Whoever worships Allah, Allah is alive and never dies."',
    },
    reference: {
      courseSlug: 'seerah-module-5',
      lessonId: '003-wafat',
    },
    points: 15,
    tags: ['seerah', 'wafat', 'omar'],
  },
  {
    id: 'seerah5-q010',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que les "Guerres de l\'Apostasie" (Hurub ar-Ridda) ?',
      ar: 'ما هي "حروب الردة"؟',
      en: 'What were the "Wars of Apostasy" (Hurub ar-Ridda)?',
    },
    options: [
      { id: 'a', text: { fr: 'Campagnes d\'Abu Bakr contre les tribus qui refusèrent de payer la Zakat ou suivirent de faux prophètes', ar: 'حملات أبي بكر ضد القبائل التي رفضت الزكاة أو تبعت أنبياء كذبة', en: 'Abu Bakr\'s campaigns against tribes refusing Zakat or following false prophets' } },
      { id: 'b', text: { fr: 'Guerres contre les Romains', ar: 'حروب ضد الروم', en: 'Wars against Romans' } },
      { id: 'c', text: { fr: 'Conflits entre Sahaba', ar: 'صراعات بين الصحابة', en: 'Conflicts between Sahaba' } },
      { id: 'd', text: { fr: 'Conquête de l\'Égypte', ar: 'فتح مصر', en: 'Conquest of Egypt' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Après la mort du Prophète ﷺ, certaines tribus apostasièrent, refusèrent la Zakat ou suivirent de faux prophètes (Musaylima, Sajah). Abu Bakr dit : "Par Allah, je combattrai quiconque distingue la prière de la Zakat."',
      ar: 'بعد وفاة النبي ﷺ، ارتدت بعض القبائل، رفضت الزكاة أو تبعت أنبياء كذبة (مسيلمة، سجاح). قال أبو بكر: "والله لأقاتلن من فرّق بين الصلاة والزكاة."',
      en: 'After Prophet\'s ﷺ death, some tribes apostatized, refused Zakat or followed false prophets (Musaylima, Sajah). Abu Bakr said: "By Allah, I\'ll fight whoever distinguishes prayer from Zakat."',
    },
    reference: {
      courseSlug: 'seerah-module-5',
      lessonId: '005-ridda',
    },
    points: 15,
    tags: ['seerah', 'ridda', 'abu-bakr'],
  },
  {
    id: 'seerah5-q011',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Où est enterré le Prophète ﷺ ?',
      ar: 'أين دُفن النبي ﷺ؟',
      en: 'Where is the Prophet ﷺ buried?',
    },
    options: [
      { id: 'a', text: { fr: 'Dans la chambre d\'Aisha, devenue partie du Masjid an-Nabawi', ar: 'في حجرة عائشة، التي أصبحت جزءاً من المسجد النبوي', en: 'In Aisha\'s room, now part of Masjid an-Nabawi' } },
      { id: 'b', text: { fr: 'À La Mecque', ar: 'في مكة', en: 'In Mecca' } },
      { id: 'c', text: { fr: 'Au cimetière de Baqi\'', ar: 'في مقبرة البقيع', en: 'In Baqi\' cemetery' } },
      { id: 'd', text: { fr: 'À Jérusalem', ar: 'في القدس', en: 'In Jerusalem' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ fut enterré là où il mourut, dans la chambre d\'Aisha, selon le hadith : "Les prophètes sont enterrés là où ils meurent." Plus tard, Abu Bakr puis Omar furent enterrés à ses côtés.',
      ar: 'دُفن النبي ﷺ حيث مات، في حجرة عائشة، وفق الحديث: "الأنبياء يُدفنون حيث يموتون." لاحقاً، دُفن أبو بكر ثم عمر بجواره.',
      en: 'Prophet ﷺ was buried where he died, in Aisha\'s room, per hadith: "Prophets are buried where they die." Later, Abu Bakr then Omar were buried beside him.',
    },
    reference: {
      courseSlug: 'seerah-module-5',
      lessonId: '003-wafat',
    },
    points: 15,
    tags: ['seerah', 'burial', 'masjid'],
  },

  // --- Questions Difficiles (4) ---
  {
    id: 'seerah5-q012',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qui était Musaylima al-Kadhdhab et quel fut son sort ?',
      ar: 'من كان مسيلمة الكذاب وما مصيره؟',
      en: 'Who was Musaylima al-Kadhdhab and what was his fate?',
    },
    options: [
      { id: 'a', text: { fr: 'Faux prophète de Yamama, tué par Wahshi à la bataille de Yamama (12H)', ar: 'نبي كاذب من اليمامة، قتله وحشي في معركة اليمامة (12هـ)', en: 'False prophet of Yamama, killed by Wahshi at Battle of Yamama (12H)' } },
      { id: 'b', text: { fr: 'Chef de Quraysh converti', ar: 'زعيم قريش أسلم', en: 'Converted Quraysh chief' } },
      { id: 'c', text: { fr: 'Compagnon du Prophète ﷺ', ar: 'صحابي للنبي ﷺ', en: 'Companion of Prophet ﷺ' } },
      { id: 'd', text: { fr: 'Roi perse', ar: 'ملك فارسي', en: 'Persian king' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Musaylima prétendit être prophète dès le vivant du Prophète ﷺ. Il réunit 40 000 adeptes à Yamama. Khalid ibn al-Walid le combattit. Wahshi (qui avait tué Hamza) et Abu Dujana participèrent à le tuer. 1200+ Sahaba tombèrent martyrs, dont beaucoup de huffaz.',
      ar: 'ادعى مسيلمة النبوة في حياة النبي ﷺ. جمع 40,000 تابع في اليمامة. قاتله خالد بن الوليد. وحشي (قاتل حمزة) وأبو دجانة شاركا في قتله. استُشهد 1200+ صحابي، منهم كثير من الحفاظ.',
      en: 'Musaylima claimed prophethood during Prophet\'s ﷺ lifetime. Gathered 40,000 followers in Yamama. Khalid ibn al-Walid fought him. Wahshi (who killed Hamza) and Abu Dujana helped kill him. 1200+ Sahaba martyred, many huffaz.',
    },
    reference: {
      courseSlug: 'seerah-module-5',
      lessonId: '005-ridda',
    },
    points: 20,
    tags: ['seerah', 'musaylima', 'ridda'],
  },
  {
    id: 'seerah5-q013',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Pourquoi le Prophète ﷺ ne désigna-t-il pas explicitement de successeur ?',
      ar: 'لماذا لم يُعيّن النبي ﷺ خليفة صراحة؟',
      en: 'Why didn\'t the Prophet ﷺ explicitly designate a successor?',
    },
    options: [
      { id: 'a', text: { fr: 'La Oumma devait choisir par shura, et ses indications (Abu Bakr à la prière) suffirent', ar: 'الأمة تختار بالشورى، وإشاراته (أبو بكر للصلاة) كافية', en: 'Umma should choose by shura, and his hints (Abu Bakr for prayer) sufficed' } },
      { id: 'b', text: { fr: 'Il n\'y avait personne de qualifié', ar: 'لم يكن هناك مؤهل', en: 'There was no one qualified' } },
      { id: 'c', text: { fr: 'Il oublia', ar: 'نسي', en: 'He forgot' } },
      { id: 'd', text: { fr: 'L\'Islam interdit la succession', ar: 'الإسلام يمنع الخلافة', en: 'Islam forbids succession' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Ahl as-Sunna croient que le Prophète ﷺ donna des signes clairs (Abu Bakr pour la prière, "suivez ceux après moi : Abu Bakr et Omar") sans nomination formelle pour laisser la Shura. Les Sahaba comprirent et élurent Abu Bakr.',
      ar: 'أهل السنة يعتقدون أن النبي ﷺ أعطى إشارات واضحة (أبو بكر للصلاة، "اقتدوا باللذين من بعدي: أبي بكر وعمر") بلا تعيين رسمي لترك الشورى. الصحابة فهموا واختاروا أبا بكر.',
      en: 'Ahl as-Sunna believe Prophet ﷺ gave clear signs (Abu Bakr for prayer, "follow those after me: Abu Bakr and Omar") without formal appointment to leave Shura. Sahaba understood and elected Abu Bakr.',
    },
    reference: {
      courseSlug: 'seerah-module-5',
      lessonId: '004-khilafa',
    },
    points: 20,
    tags: ['seerah', 'khilafa', 'shura'],
  },
  {
    id: 'seerah5-q014',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle armée le Prophète ﷺ avait-il préparée juste avant sa mort ?',
      ar: 'أي جيش أعدّه النبي ﷺ قبل وفاته؟',
      en: 'Which army had the Prophet ﷺ prepared just before his death?',
    },
    options: [
      { id: 'a', text: { fr: 'L\'armée d\'Usama ibn Zayd vers la Syrie', ar: 'جيش أسامة بن زيد نحو الشام', en: 'Army of Usama ibn Zayd towards Syria' } },
      { id: 'b', text: { fr: 'L\'armée de Khalid vers l\'Irak', ar: 'جيش خالد نحو العراق', en: 'Army of Khalid towards Iraq' } },
      { id: 'c', text: { fr: 'L\'armée de Ali vers le Yémen', ar: 'جيش علي نحو اليمن', en: 'Army of Ali towards Yemen' } },
      { id: 'd', text: { fr: 'Aucune armée', ar: 'لا جيش', en: 'No army' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ nomma Usama (18 ans) pour venger son père Zayd, tué à Mu\'ta. Certains critiquèrent son jeune âge. Le Prophète ﷺ défendit Usama. Après sa mort, Abu Bakr insista pour envoyer cette armée malgré la crise de la Ridda.',
      ar: 'عيّن النبي ﷺ أسامة (18 سنة) للثأر لأبيه زيد المستشهد في مؤتة. انتقد بعضهم صغر سنه. دافع عنه النبي ﷺ. بعد وفاته، أصرّ أبو بكر على إرسال الجيش رغم أزمة الردة.',
      en: 'Prophet ﷺ appointed Usama (18) to avenge his father Zayd, killed at Mu\'ta. Some criticized his young age. Prophet ﷺ defended Usama. After his death, Abu Bakr insisted on sending this army despite Ridda crisis.',
    },
    reference: {
      courseSlug: 'seerah-module-5',
      lessonId: '006-usama',
    },
    points: 20,
    tags: ['seerah', 'usama', 'army'],
  },
  {
    id: 'seerah5-q015',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Combien d\'épouses le Prophète ﷺ laissa-t-il à son décès (Ummahat al-Mu\'minin) ?',
      ar: 'كم زوجة تركها النبي ﷺ عند وفاته (أمهات المؤمنين)؟',
      en: 'How many wives did the Prophet ﷺ leave at his death (Ummahat al-Mu\'minin)?',
    },
    options: [
      { id: 'a', text: { fr: '9 épouses', ar: '9 زوجات', en: '9 wives' } },
      { id: 'b', text: { fr: '4 épouses', ar: '4 زوجات', en: '4 wives' } },
      { id: 'c', text: { fr: '12 épouses', ar: '12 زوجة', en: '12 wives' } },
      { id: 'd', text: { fr: '2 épouses', ar: 'زوجتان', en: '2 wives' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Il laissa 9 épouses : Sawda, Aisha, Hafsa, Zaynab bint Khuzayma (décédée avant), Umm Salama, Zaynab bint Jahsh, Juwayriya, Umm Habiba, Safiyya, Maymuna. Khadija et Zaynab bint Khuzayma étaient décédées avant lui.',
      ar: 'ترك 9 زوجات: سودة، عائشة، حفصة، زينب بنت خزيمة (توفيت قبله)، أم سلمة، زينب بنت جحش، جويرية، أم حبيبة، صفية، ميمونة. خديجة وزينب بنت خزيمة توفيتا قبله.',
      en: 'He left 9 wives: Sawda, Aisha, Hafsa, Zaynab bint Khuzayma (died before), Umm Salama, Zaynab bint Jahsh, Juwayriya, Umm Habiba, Safiyya, Maymuna. Khadija and Zaynab bint Khuzayma died before him.',
    },
    reference: {
      courseSlug: 'seerah-module-5',
      lessonId: '007-wives',
    },
    points: 20,
    tags: ['seerah', 'wives', 'ummahat'],
  },
];

// ============================================
// Export du Quiz
// ============================================

export const quizSeerahModule5: Quiz = {
  id: 'quiz-seerah-module-5',
  type: 'module',
  courseSlug: 'seerah-module-5',
  title: {
    fr: 'Quiz : Seerah Module 5 - Les Dernières Années',
    ar: 'اختبار: السيرة الوحدة 5 - السنوات الأخيرة',
    en: 'Quiz: Seerah Module 5 - The Final Years',
  },
  description: {
    fr: 'Testez vos connaissances sur Hajjat al-Wada\', le décès du Prophète ﷺ et la succession.',
    ar: 'اختبر معلوماتك عن حجة الوداع، وفاة النبي ﷺ والخلافة.',
    en: 'Test your knowledge of Hajjat al-Wada\', Prophet\'s ﷺ death and succession.',
  },
  instructions: {
    fr: 'Découvrez les derniers moments et l\'héritage éternel.',
    ar: 'اكتشف اللحظات الأخيرة والإرث الخالد.',
    en: 'Discover the final moments and eternal legacy.',
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

export default quizSeerahModule5;
