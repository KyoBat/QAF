/**
 * Quiz Seerah - Module 4 : La Période Médinoise (Partie 2)
 * 
 * Ce quiz couvre les événements majeurs après Badr et Uhud :
 * Khandaq, Hudaybiyya, Conquête de Khaybar, Expansion
 * 
 * Niveau : Intermédiaire
 * Questions : 15
 */

import { Quiz, Question } from '../types';

const questions: Question[] = [
  // --- Questions Faciles (5) ---
  {
    id: 'seerah4-q001',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quelle stratégie défensive fut utilisée lors de la bataille de Khandaq (Tranchée) ?',
      ar: 'ما الاستراتيجية الدفاعية المستخدمة في غزوة الخندق؟',
      en: 'What defensive strategy was used at the Battle of Khandaq (Trench)?',
    },
    options: [
      { id: 'a', text: { fr: 'Creuser un fossé autour de Médine', ar: 'حفر خندق حول المدينة', en: 'Digging a trench around Medina' } },
      { id: 'b', text: { fr: 'Construire des murs de pierre', ar: 'بناء جدران حجرية', en: 'Building stone walls' } },
      { id: 'c', text: { fr: 'Se cacher dans les montagnes', ar: 'الاختباء في الجبال', en: 'Hiding in the mountains' } },
      { id: 'd', text: { fr: 'Attaquer en premier', ar: 'الهجوم أولاً', en: 'Attacking first' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Sur suggestion de Salman al-Farisi, les musulmans creusèrent un khandaq (tranchée) au nord de Médine, là où il n\'y avait pas de protection naturelle. C\'était une tactique perse inconnue des Arabes.',
      ar: 'باقتراح سلمان الفارسي، حفر المسلمون خندقاً شمال المدينة حيث لا حماية طبيعية. كانت تكتيكاً فارسياً مجهولاً عند العرب.',
      en: 'On Salman al-Farisi\'s suggestion, Muslims dug a khandaq (trench) north of Medina where there was no natural protection. It was a Persian tactic unknown to Arabs.',
    },
    reference: {
      courseSlug: 'seerah-module-4',
      lessonId: '001-khandaq',
    },
    points: 10,
    tags: ['seerah', 'khandaq', 'battle'],
  },
  {
    id: 'seerah4-q002',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quelle tribu juive trahit les musulmans pendant Khandaq ?',
      ar: 'أي قبيلة يهودية خانت المسلمين في الخندق؟',
      en: 'Which Jewish tribe betrayed the Muslims during Khandaq?',
    },
    options: [
      { id: 'a', text: { fr: 'Banu Qaynuqa', ar: 'بنو قينقاع', en: 'Banu Qaynuqa' } },
      { id: 'b', text: { fr: 'Banu Nadir', ar: 'بنو النضير', en: 'Banu Nadir' } },
      { id: 'c', text: { fr: 'Banu Qurayza', ar: 'بنو قريظة', en: 'Banu Qurayza' } },
      { id: 'd', text: { fr: 'Aucune', ar: 'لا أحد', en: 'None' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Banu Qurayza, poussés par Huyayy ibn Akhtab (chef de Banu Nadir déjà exilé), rompirent le pacte en plein siège. Ils acceptèrent d\'attaquer Médine par l\'arrière, mais Allah sema la discorde entre les alliés.',
      ar: 'بنو قريظة، بتحريض حيي بن أخطب (زعيم بني النضير المنفي)، نقضوا العهد أثناء الحصار. وافقوا على مهاجمة المدينة من الخلف، لكن الله أوقع الفرقة بين الأحزاب.',
      en: 'Banu Qurayza, pushed by Huyayy ibn Akhtab (exiled Banu Nadir chief), broke the pact during siege. They agreed to attack Medina from behind, but Allah sowed discord among allies.',
    },
    reference: {
      courseSlug: 'seerah-module-4',
      lessonId: '002-qurayza',
    },
    points: 10,
    tags: ['seerah', 'qurayza', 'khandaq'],
  },
  {
    id: 'seerah4-q003',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'Le Traité de Hudaybiyya (6H) fut une victoire diplomatique majeure pour les musulmans.',
      ar: 'كانت صلح الحديبية (6هـ) نصراً دبلوماسياً كبيراً للمسلمين.',
      en: 'The Treaty of Hudaybiyya (6H) was a major diplomatic victory for Muslims.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'Allah l\'appela "Fath Mubin" (victoire éclatante - Sourate 48). Bien que les clauses semblaient défavorables, le traité : 1) reconnaissait l\'État musulman, 2) permit la Da\'wa libre, 3) mena à la conversion de milliers dont Khalid ibn al-Walid.',
      ar: 'سماه الله "فتحاً مبيناً" (سورة الفتح). رغم أن البنود بدت غير عادلة، الصلح: 1) اعترف بالدولة المسلمة، 2) أتاح الدعوة الحرة، 3) أدى لإسلام آلاف منهم خالد بن الوليد.',
      en: 'Allah called it "Fath Mubin" (clear victory - Surah 48). Though clauses seemed unfavorable, treaty: 1) recognized Muslim state, 2) allowed free Da\'wa, 3) led to conversion of thousands including Khalid ibn al-Walid.',
    },
    reference: {
      courseSlug: 'seerah-module-4',
      lessonId: '003-hudaybiyya',
    },
    points: 10,
    tags: ['seerah', 'hudaybiyya', 'treaty'],
  },
  {
    id: 'seerah4-q004',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quelle forteresse juive fut conquise en l\'an 7H ?',
      ar: 'أي حصن يهودي فُتح سنة 7هـ؟',
      en: 'Which Jewish fortress was conquered in 7H?',
    },
    options: [
      { id: 'a', text: { fr: 'Khaybar', ar: 'خيبر', en: 'Khaybar' } },
      { id: 'b', text: { fr: 'Jérusalem', ar: 'القدس', en: 'Jerusalem' } },
      { id: 'c', text: { fr: 'Damas', ar: 'دمشق', en: 'Damascus' } },
      { id: 'd', text: { fr: 'Taif', ar: 'الطائف', en: 'Taif' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Khaybar, à 150 km de Médine, abritait des Juifs expulsés (Banu Nadir) qui complotaient avec Quraysh. Le Prophète ﷺ confia l\'étendard à Ali qui conquit la forteresse de Qamus. Les Juifs restèrent contre moitié de leur récolte.',
      ar: 'خيبر، على بعد 150 كم من المدينة، آوت يهوداً منفيين (بني النضير) تآمروا مع قريش. أعطى النبي ﷺ الراية لعلي الذي فتح حصن القموص. بقي اليهود مقابل نصف محاصيلهم.',
      en: 'Khaybar, 150km from Medina, housed expelled Jews (Banu Nadir) who plotted with Quraysh. The Prophet ﷺ gave the banner to Ali who conquered Qamus fortress. Jews remained against half their harvest.',
    },
    reference: {
      courseSlug: 'seerah-module-4',
      lessonId: '004-khaybar',
    },
    points: 10,
    tags: ['seerah', 'khaybar', 'conquest'],
  },
  {
    id: 'seerah4-q005',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'En quelle année eut lieu la Conquête de La Mecque (Fath Makka) ?',
      ar: 'في أي سنة وقع فتح مكة؟',
      en: 'In what year did the Conquest of Mecca occur?',
    },
    options: [
      { id: 'a', text: { fr: '6H (627)', ar: '6هـ (627م)', en: '6H (627)' } },
      { id: 'b', text: { fr: '8H (630)', ar: '8هـ (630م)', en: '8H (630)' } },
      { id: 'c', text: { fr: '10H (632)', ar: '10هـ (632م)', en: '10H (632)' } },
      { id: 'd', text: { fr: '2H (624)', ar: '2هـ (624م)', en: '2H (624)' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Fath Makka eut lieu en Ramadan 8H. Quraysh avait rompu le traité en aidant Banu Bakr contre Banu Khuza\'a (alliés des musulmans). 10 000 musulmans entrèrent pacifiquement. Le Prophète ﷺ accorda l\'amnistie générale.',
      ar: 'فتح مكة وقع في رمضان 8هـ. قريش نقضت العهد بمساعدة بني بكر ضد خزاعة (حلفاء المسلمين). 10,000 مسلم دخلوا سلمياً. النبي ﷺ منح العفو العام.',
      en: 'Fath Makka occurred in Ramadan 8H. Quraysh broke treaty by helping Banu Bakr against Banu Khuza\'a (Muslim allies). 10,000 Muslims entered peacefully. The Prophet ﷺ granted general amnesty.',
    },
    reference: {
      courseSlug: 'seerah-module-4',
      lessonId: '005-fath-makka',
    },
    points: 10,
    tags: ['seerah', 'fath', 'makka'],
  },

  // --- Questions Moyennes (6) ---
  {
    id: 'seerah4-q006',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Combien de soldats composaient les "Ahzab" (Coalisés) à Khandaq ?',
      ar: 'كم عدد جنود "الأحزاب" في غزوة الخندق؟',
      en: 'How many soldiers made up the "Ahzab" (Confederates) at Khandaq?',
    },
    options: [
      { id: 'a', text: { fr: 'Environ 10 000', ar: 'حوالي 10,000', en: 'About 10,000' } },
      { id: 'b', text: { fr: 'Environ 3 000', ar: 'حوالي 3,000', en: 'About 3,000' } },
      { id: 'c', text: { fr: 'Environ 1 000', ar: 'حوالي 1,000', en: 'About 1,000' } },
      { id: 'd', text: { fr: 'Environ 30 000', ar: 'حوالي 30,000', en: 'About 30,000' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Quraysh (4000), Ghatafan (2000), Banu Sulaym et autres (4000) formèrent ~10 000 combattants. Face à eux : ~3000 musulmans. Le siège dura un mois. Allah envoya vent et froid qui dispersèrent les Ahzab.',
      ar: 'قريش (4000)، غطفان (2000)، بنو سليم وغيرهم (4000) شكّلوا ~10,000 مقاتل. في مقابلهم: ~3000 مسلم. الحصار استمر شهراً. أرسل الله ريحاً وبرداً فرّق الأحزاب.',
      en: 'Quraysh (4000), Ghatafan (2000), Banu Sulaym and others (4000) formed ~10,000 fighters. Facing them: ~3000 Muslims. Siege lasted a month. Allah sent wind and cold that scattered Ahzab.',
    },
    reference: {
      courseSlug: 'seerah-module-4',
      lessonId: '001-khandaq',
    },
    points: 15,
    tags: ['seerah', 'khandaq', 'ahzab'],
  },
  {
    id: 'seerah4-q007',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'arriva-t-il à Banu Qurayza après leur trahison ?',
      ar: 'ماذا حدث لبني قريظة بعد خيانتهم؟',
      en: 'What happened to Banu Qurayza after their betrayal?',
    },
    options: [
      { id: 'a', text: { fr: 'Jugés selon leur propre loi (Torah) par Sa\'d ibn Mu\'adh', ar: 'حُكم عليهم بشريعتهم (التوراة) من سعد بن معاذ', en: 'Judged by their own law (Torah) by Sa\'d ibn Mu\'adh' } },
      { id: 'b', text: { fr: 'Pardonnés et libérés', ar: 'عُفي عنهم وأُطلقوا', en: 'Pardoned and freed' } },
      { id: 'c', text: { fr: 'Exilés à Khaybar', ar: 'نُفوا إلى خيبر', en: 'Exiled to Khaybar' } },
      { id: 'd', text: { fr: 'Convertis de force', ar: 'أُكرهوا على الإسلام', en: 'Forced to convert' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les Qurayza choisirent Sa\'d ibn Mu\'adh comme arbitre. Il jugea selon Deutéronome 20:12-14 : les combattants seraient exécutés, femmes et enfants captifs. Le Prophète ﷺ dit : "Tu as jugé par le jugement d\'Allah."',
      ar: 'قريظة اختاروا سعد بن معاذ حكماً. حكم بحسب التثنية 20:12-14: المقاتلون يُقتلون، النساء والأطفال سبي. قال النبي ﷺ: "لقد حكمت بحكم الله."',
      en: 'Qurayza chose Sa\'d ibn Mu\'adh as arbiter. He judged per Deuteronomy 20:12-14: fighters executed, women and children captive. Prophet ﷺ said: "You have judged by Allah\'s judgment."',
    },
    reference: {
      courseSlug: 'seerah-module-4',
      lessonId: '002-qurayza',
    },
    points: 15,
    tags: ['seerah', 'qurayza', 'judgement'],
  },
  {
    id: 'seerah4-q008',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelle était la condition apparemment défavorable du Traité de Hudaybiyya ?',
      ar: 'ما الشرط الذي بدا غير عادل في صلح الحديبية؟',
      en: 'What was the seemingly unfavorable condition of Hudaybiyya Treaty?',
    },
    options: [
      { id: 'a', text: { fr: 'Rendre les convertis mecquois, mais pas l\'inverse', ar: 'إعادة المسلمين المكيين، لا العكس', en: 'Return Meccan converts, but not vice versa' } },
      { id: 'b', text: { fr: 'Payer un tribut à Quraysh', ar: 'دفع جزية لقريش', en: 'Pay tribute to Quraysh' } },
      { id: 'c', text: { fr: 'Ne jamais revenir à La Mecque', ar: 'عدم العودة لمكة أبداً', en: 'Never return to Mecca' } },
      { id: 'd', text: { fr: 'Abandonner l\'Islam', ar: 'التخلي عن الإسلام', en: 'Abandon Islam' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les musulmans convertis de La Mecque devaient être renvoyés, mais les apostats de Médine ne seraient pas rendus. Omar était furieux, mais Abu Bakr le calma. Allah révéla Sourate Al-Fath pour rassurer.',
      ar: 'المسلمون المهتدون في مكة يُردّون، لكن المرتدين من المدينة لا يُعادون. غضب عمر، لكن أبو بكر هدّأه. أنزل الله سورة الفتح للطمأنة.',
      en: 'Muslim converts from Mecca had to be returned, but apostates from Medina wouldn\'t be. Omar was furious, but Abu Bakr calmed him. Allah revealed Surah Al-Fath to reassure.',
    },
    reference: {
      courseSlug: 'seerah-module-4',
      lessonId: '003-hudaybiyya',
    },
    points: 15,
    tags: ['seerah', 'hudaybiyya', 'conditions'],
  },
  {
    id: 'seerah4-q009',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Que dit le Prophète ﷺ en entrant à La Mecque victorieux ?',
      ar: 'ماذا قال النبي ﷺ عند دخوله مكة منتصراً؟',
      en: 'What did the Prophet ﷺ say when entering Mecca victorious?',
    },
    options: [
      { id: 'a', text: { fr: '"Pas de reproche contre vous aujourd\'hui. Allez, vous êtes libres."', ar: '"لا تثريب عليكم اليوم. اذهبوا فأنتم الطلقاء."', en: '"No blame upon you today. Go, you are free."' } },
      { id: 'b', text: { fr: '"Vengeance sera prise"', ar: '"سنأخذ بالثأر"', en: '"Vengeance will be taken"' } },
      { id: 'c', text: { fr: '"Payez un tribut"', ar: '"ادفعوا الجزية"', en: '"Pay tribute"' } },
      { id: 'd', text: { fr: '"Convertissez-vous ou mourez"', ar: '"أسلموا أو موتوا"', en: '"Convert or die"' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Malgré 20 ans de persécution, le Prophète ﷺ pardonna comme Yusuf (عليه السلام) avait pardonné ses frères. Seuls quelques criminels de guerre furent exclus. Abu Sufyan, Hind et Ikrima (fils d\'Abu Jahl) embrassèrent l\'Islam.',
      ar: 'رغم 20 سنة من الاضطهاد، عفا النبي ﷺ كما عفا يوسف عليه السلام عن إخوته. فقط بعض مجرمي الحرب استُثنوا. أبو سفيان وهند وعكرمة (ابن أبي جهل) أسلموا.',
      en: 'Despite 20 years of persecution, the Prophet ﷺ forgave like Yusuf (AS) forgave his brothers. Only some war criminals were excluded. Abu Sufyan, Hind and Ikrima (son of Abu Jahl) embraced Islam.',
    },
    reference: {
      courseSlug: 'seerah-module-4',
      lessonId: '005-fath-makka',
    },
    points: 15,
    tags: ['seerah', 'fath', 'pardon'],
  },
  {
    id: 'seerah4-q010',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelle bataille eut lieu après la Conquête de La Mecque contre les Hawazin ?',
      ar: 'أي غزوة وقعت بعد فتح مكة ضد هوازن؟',
      en: 'Which battle occurred after Mecca\'s Conquest against Hawazin?',
    },
    options: [
      { id: 'a', text: { fr: 'Bataille de Hunayn', ar: 'غزوة حنين', en: 'Battle of Hunayn' } },
      { id: 'b', text: { fr: 'Bataille de Tabuk', ar: 'غزوة تبوك', en: 'Battle of Tabuk' } },
      { id: 'c', text: { fr: 'Bataille de Badr', ar: 'غزوة بدر', en: 'Battle of Badr' } },
      { id: 'd', text: { fr: 'Bataille de Mu\'ta', ar: 'غزوة مؤتة', en: 'Battle of Mu\'ta' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Hunayn (8H) : 12 000 musulmans contre 20 000 Hawazin/Thaqif. Les musulmans furent surpris par une embuscade et faillirent fuir. Le Prophète ﷺ resta ferme avec Abbas. Allah envoya des anges. Victoire totale.',
      ar: 'حنين (8هـ): 12,000 مسلم ضد 20,000 من هوازن/ثقيف. فوجئ المسلمون بكمين وكادوا يفرون. ثبت النبي ﷺ مع العباس. أنزل الله ملائكة. نصر كامل.',
      en: 'Hunayn (8H): 12,000 Muslims vs 20,000 Hawazin/Thaqif. Muslims were surprised by ambush and nearly fled. The Prophet ﷺ stood firm with Abbas. Allah sent angels. Total victory.',
    },
    reference: {
      courseSlug: 'seerah-module-4',
      lessonId: '006-hunayn',
    },
    points: 15,
    tags: ['seerah', 'hunayn', 'hawazin'],
  },
  {
    id: 'seerah4-q011',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'À quels rois le Prophète ﷺ envoya-t-il des lettres d\'invitation à l\'Islam ?',
      ar: 'إلى أي ملوك أرسل النبي ﷺ رسائل دعوة للإسلام؟',
      en: 'To which kings did the Prophet ﷺ send invitation letters to Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Héraclius (Byzance), Chosroes (Perse), Négus (Abyssinie), Muqawqis (Égypte)', ar: 'هرقل (الروم)، كسرى (فارس)، النجاشي (الحبشة)، المقوقس (مصر)', en: 'Heraclius (Byzantium), Khosrow (Persia), Negus (Abyssinia), Muqawqis (Egypt)' } },
      { id: 'b', text: { fr: 'Seulement aux rois arabes', ar: 'فقط للملوك العرب', en: 'Only to Arab kings' } },
      { id: 'c', text: { fr: 'Aucune lettre envoyée', ar: 'لم تُرسل رسائل', en: 'No letters sent' } },
      { id: 'd', text: { fr: 'Seulement à Quraysh', ar: 'فقط لقريش', en: 'Only to Quraysh' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'En 6H, le Prophète ﷺ envoya des messagers aux grands rois. Héraclius respecta la lettre, Chosroes la déchira (le Prophète prédit sa destruction), le Négus embrassa l\'Islam, Muqawqis envoya des cadeaux (dont Maria).',
      ar: 'في 6هـ، أرسل النبي ﷺ رسلاً للملوك الكبار. هرقل احترم الرسالة، كسرى مزّقها (وتنبأ النبي بهلاكه)، النجاشي أسلم، المقوقس أرسل هدايا (منها مارية).',
      en: 'In 6H, Prophet ﷺ sent messengers to great kings. Heraclius respected letter, Khosrow tore it (Prophet predicted his destruction), Negus embraced Islam, Muqawqis sent gifts (including Maria).',
    },
    reference: {
      courseSlug: 'seerah-module-4',
      lessonId: '007-letters',
    },
    points: 15,
    tags: ['seerah', 'letters', 'dawah'],
  },

  // --- Questions Difficiles (4) ---
  {
    id: 'seerah4-q012',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qui joua un rôle clé en divisant les Ahzab à Khandaq par la ruse ?',
      ar: 'من لعب دوراً محورياً في تفريق الأحزاب في الخندق بالخديعة؟',
      en: 'Who played a key role in dividing Ahzab at Khandaq through ruse?',
    },
    options: [
      { id: 'a', text: { fr: 'Nu\'aym ibn Mas\'ud (converti secret)', ar: 'نُعيم بن مسعود (مسلم سرّي)', en: 'Nu\'aym ibn Mas\'ud (secret convert)' } },
      { id: 'b', text: { fr: 'Khalid ibn al-Walid', ar: 'خالد بن الوليد', en: 'Khalid ibn al-Walid' } },
      { id: 'c', text: { fr: 'Abu Sufyan', ar: 'أبو سفيان', en: 'Abu Sufyan' } },
      { id: 'd', text: { fr: 'Huyayy ibn Akhtab', ar: 'حيي بن أخطب', en: 'Huyayy ibn Akhtab' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Nu\'aym, de Ghatafan, s\'était converti secrètement. Avec l\'accord du Prophète ﷺ ("La guerre est ruse"), il sema la discorde entre Quraysh et Banu Qurayza, chaque partie doutant de l\'autre.',
      ar: 'نعيم، من غطفان، أسلم سرّاً. بموافقة النبي ﷺ ("الحرب خدعة")، زرع الفرقة بين قريش وبني قريظة، كل طرف يشك في الآخر.',
      en: 'Nu\'aym, from Ghatafan, had secretly converted. With Prophet\'s ﷺ approval ("War is deceit"), he sowed discord between Quraysh and Banu Qurayza, each party doubting the other.',
    },
    reference: {
      courseSlug: 'seerah-module-4',
      lessonId: '001-khandaq',
    },
    points: 20,
    tags: ['seerah', 'khandaq', 'nuaym'],
  },
  {
    id: 'seerah4-q013',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle fut la première confrontation armée entre musulmans et l\'Empire romain ?',
      ar: 'ما أول مواجهة مسلحة بين المسلمين والإمبراطورية الرومانية؟',
      en: 'What was the first armed confrontation between Muslims and the Roman Empire?',
    },
    options: [
      { id: 'a', text: { fr: 'Bataille de Mu\'ta (8H)', ar: 'غزوة مؤتة (8هـ)', en: 'Battle of Mu\'ta (8H)' } },
      { id: 'b', text: { fr: 'Bataille de Yarmouk', ar: 'معركة اليرموك', en: 'Battle of Yarmouk' } },
      { id: 'c', text: { fr: 'Expédition de Tabuk', ar: 'غزوة تبوك', en: 'Tabuk Expedition' } },
      { id: 'd', text: { fr: 'Bataille de Qadisiyya', ar: 'معركة القادسية', en: 'Battle of Qadisiyya' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Mu\'ta (actuelle Jordanie) : 3000 musulmans contre 100 000+ Romains et Arabes. Zayd ibn Haritha, Ja\'far ibn Abi Talib et Abdullah ibn Rawaha tombèrent martyrs. Khalid ibn al-Walid prit le commandement et sauva l\'armée.',
      ar: 'مؤتة (الأردن حالياً): 3000 مسلم ضد 100,000+ من الروم والعرب. استُشهد زيد بن حارثة وجعفر بن أبي طالب وعبد الله بن رواحة. خالد بن الوليد تولى القيادة وأنقذ الجيش.',
      en: 'Mu\'ta (modern Jordan): 3000 Muslims vs 100,000+ Romans and Arabs. Zayd ibn Haritha, Ja\'far ibn Abi Talib and Abdullah ibn Rawaha fell martyrs. Khalid ibn al-Walid took command and saved the army.',
    },
    reference: {
      courseSlug: 'seerah-module-4',
      lessonId: '008-muta',
    },
    points: 20,
    tags: ['seerah', 'muta', 'rome'],
  },
  {
    id: 'seerah4-q014',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Pourquoi l\'expédition de Tabuk (9H) est-elle appelée "Ghazwat al-\'Usra" (l\'Expédition Difficile) ?',
      ar: 'لماذا سُميت غزوة تبوك (9هـ) "غزوة العسرة"؟',
      en: 'Why is Tabuk Expedition (9H) called "Ghazwat al-\'Usra" (Expedition of Hardship)?',
    },
    options: [
      { id: 'a', text: { fr: 'Chaleur extrême, récolte proche, longue distance, manque de ressources', ar: 'حر شديد، وقت الحصاد، مسافة طويلة، قلة الموارد', en: 'Extreme heat, harvest time, long distance, lack of resources' } },
      { id: 'b', text: { fr: 'Il y eut beaucoup de morts', ar: 'كثرة الشهداء', en: 'There were many deaths' } },
      { id: 'c', text: { fr: 'Les musulmans perdirent', ar: 'المسلمون خسروا', en: 'Muslims lost' } },
      { id: 'd', text: { fr: 'C\'était la première expédition', ar: 'كانت أول غزوة', en: 'It was the first expedition' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'L\'été brûlant, 700 km jusqu\'à la frontière byzantine, la période des récoltes de dattes, et le manque de montures. Les hypocrites refusèrent de participer. Ceux qui contribuèrent généreusement (Uthman, Abu Bakr) furent loués.',
      ar: 'صيف حارق، 700 كم للحدود البيزنطية، وقت حصاد التمور، وقلة الإبل. المنافقون رفضوا المشاركة. الذين ساهموا بسخاء (عثمان، أبو بكر) مُدحوا.',
      en: 'Scorching summer, 700km to Byzantine border, date harvest time, and lack of mounts. Hypocrites refused to participate. Those who contributed generously (Uthman, Abu Bakr) were praised.',
    },
    reference: {
      courseSlug: 'seerah-module-4',
      lessonId: '009-tabuk',
    },
    points: 20,
    tags: ['seerah', 'tabuk', 'usra'],
  },
  {
    id: 'seerah4-q015',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Que fit le Prophète ﷺ avec les 360 idoles de la Ka\'ba lors du Fath ?',
      ar: 'ماذا فعل النبي ﷺ بـ360 صنماً في الكعبة عند الفتح؟',
      en: 'What did the Prophet ﷺ do with the 360 idols of Ka\'ba at the Fath?',
    },
    options: [
      { id: 'a', text: { fr: 'Les détruisit en récitant : "La vérité est venue et le faux a disparu"', ar: 'حطّمها وهو يتلو: "جاء الحق وزهق الباطل"', en: 'Destroyed them reciting: "Truth has come and falsehood has vanished"' } },
      { id: 'b', text: { fr: 'Les laissa en place', ar: 'تركها في مكانها', en: 'Left them in place' } },
      { id: 'c', text: { fr: 'Les vendit', ar: 'باعها', en: 'Sold them' } },
      { id: 'd', text: { fr: 'Les donna aux Mecquois', ar: 'أعطاها للمكيين', en: 'Gave them to Meccans' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ fit le tawaf, puis avec un bâton renversa chaque idole en récitant : "جاء الحق وزهق الباطل إن الباطل كان زهوقاً" (Isra 17:81). Il ordonna aussi d\'effacer les images à l\'intérieur de la Ka\'ba.',
      ar: 'طاف النبي ﷺ، ثم بعصا أسقط كل صنم وهو يتلو: "جاء الحق وزهق الباطل إن الباطل كان زهوقاً" (الإسراء 81). أمر أيضاً بمحو الصور داخل الكعبة.',
      en: 'Prophet ﷺ did tawaf, then with a stick toppled each idol reciting: "Truth has come and falsehood has vanished. Indeed falsehood was bound to vanish" (Isra 17:81). He also ordered images inside Ka\'ba erased.',
    },
    reference: {
      courseSlug: 'seerah-module-4',
      lessonId: '005-fath-makka',
    },
    points: 20,
    tags: ['seerah', 'fath', 'idols'],
  },
];

// ============================================
// Export du Quiz
// ============================================

export const quizSeerahModule4: Quiz = {
  id: 'quiz-seerah-module-4',
  type: 'module',
  courseSlug: 'seerah-module-4',
  title: {
    fr: 'Quiz : Seerah Module 4 - Batailles et Conquêtes',
    ar: 'اختبار: السيرة الوحدة 4 - الغزوات والفتوحات',
    en: 'Quiz: Seerah Module 4 - Battles and Conquests',
  },
  description: {
    fr: 'Testez vos connaissances sur Khandaq, Hudaybiyya, Khaybar et la Conquête de La Mecque.',
    ar: 'اختبر معلوماتك عن الخندق، الحديبية، خيبر وفتح مكة.',
    en: 'Test your knowledge on Khandaq, Hudaybiyya, Khaybar and the Conquest of Mecca.',
  },
  instructions: {
    fr: 'Découvrez l\'expansion de l\'État islamique.',
    ar: 'اكتشف توسع الدولة الإسلامية.',
    en: 'Discover the expansion of the Islamic State.',
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

export default quizSeerahModule4;
