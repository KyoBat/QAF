/**
 * Quiz Fiqh - Purification (Tahara)
 * 
 * Ce quiz couvre les règles de purification :
 * types d'eau, impuretés, ablutions, ghusl, tayammum
 * 
 * Niveau : Débutant à Intermédiaire
 * Questions : 15
 */

import { Quiz, Question } from '../types';

const questions: Question[] = [
  // --- Questions Faciles (5) ---
  {
    id: 'purif-q001',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Qu\'est-ce que la "Tahara" (الطهارة) en Islam ?',
      ar: 'ما هي "الطهارة" في الإسلام؟',
      en: 'What is "Tahara" in Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'La prière', ar: 'الصلاة', en: 'Prayer' } },
      { id: 'b', text: { fr: 'La purification rituelle et physique', ar: 'الطهارة الشرعية والحسية', en: 'Ritual and physical purification' } },
      { id: 'c', text: { fr: 'Le jeûne', ar: 'الصيام', en: 'Fasting' } },
      { id: 'd', text: { fr: 'L\'aumône', ar: 'الزكاة', en: 'Charity' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La Tahara comprend la purification de l\'impureté rituelle (hadath) par les ablutions ou le ghusl, et la purification des impuretés physiques (najasa) sur le corps, les vêtements et le lieu de prière.',
      ar: 'الطهارة تشمل التطهر من الحدث بالوضوء أو الغسل، والتطهر من النجاسة الحسية على البدن والثياب ومكان الصلاة.',
      en: 'Tahara includes purification from ritual impurity (hadath) through ablution or ghusl, and purification from physical impurities (najasa) on the body, clothes, and place of prayer.',
    },
    reference: {
      courseSlug: 'bases-fiqh-ibadat-purification',
      lessonId: '001-introduction',
    },
    points: 10,
    tags: ['fiqh', 'tahara', 'purification'],
  },
  {
    id: 'purif-q002',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Combien y a-t-il de types principaux d\'eau selon le fiqh ?',
      ar: 'كم نوعاً رئيسياً للماء في الفقه؟',
      en: 'How many main types of water are there according to fiqh?',
    },
    options: [
      { id: 'a', text: { fr: '2 types', ar: 'نوعان', en: '2 types' } },
      { id: 'b', text: { fr: '3 types', ar: '3 أنواع', en: '3 types' } },
      { id: 'c', text: { fr: '4 types', ar: '4 أنواع', en: '4 types' } },
      { id: 'd', text: { fr: '5 types', ar: '5 أنواع', en: '5 types' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les savants distinguent principalement 2 types : l\'eau pure et purifiante (tahur) qui permet la purification, et l\'eau impure (najas) qui ne peut pas être utilisée. Certains ajoutent l\'eau "tahir" (pure mais non purifiante).',
      ar: 'يميز العلماء نوعين رئيسيين: الماء الطهور الذي يصلح للتطهير، والماء النجس الذي لا يصلح. بعضهم يضيف الماء الطاهر (طاهر لكن غير مطهر).',
      en: 'Scholars distinguish mainly 2 types: pure and purifying water (tahur) suitable for purification, and impure water (najas) that cannot be used. Some add "tahir" water (pure but not purifying).',
    },
    reference: {
      courseSlug: 'bases-fiqh-ibadat-purification',
      lessonId: '002-tahara',
    },
    points: 10,
    tags: ['fiqh', 'water', 'tahara'],
  },
  {
    id: 'purif-q003',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Combien de membres doit-on laver obligatoirement lors du wudu ?',
      ar: 'كم عضواً يجب غسله في الوضوء؟',
      en: 'How many body parts must be washed during wudu?',
    },
    options: [
      { id: 'a', text: { fr: '3 membres', ar: '3 أعضاء', en: '3 parts' } },
      { id: 'b', text: { fr: '4 membres (+ essuyer la tête)', ar: '4 أعضاء (+ مسح الرأس)', en: '4 parts (+ wipe head)' } },
      { id: 'c', text: { fr: '5 membres', ar: '5 أعضاء', en: '5 parts' } },
      { id: 'd', text: { fr: '6 membres', ar: '6 أعضاء', en: '6 parts' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les 4 obligations du wudu selon le Coran (5:6) : 1) Laver le visage, 2) Laver les mains jusqu\'aux coudes, 3) Essuyer la tête, 4) Laver les pieds jusqu\'aux chevilles.',
      ar: 'فروض الوضوء الأربعة حسب القرآن (5:6): 1) غسل الوجه، 2) غسل اليدين إلى المرفقين، 3) مسح الرأس، 4) غسل الرجلين إلى الكعبين.',
      en: 'The 4 wudu obligations according to Quran (5:6): 1) Wash the face, 2) Wash hands to elbows, 3) Wipe the head, 4) Wash feet to ankles.',
    },
    reference: {
      courseSlug: 'bases-fiqh-ibadat-purification',
      lessonId: '004-wudu',
    },
    points: 10,
    tags: ['fiqh', 'wudu', 'ablutions'],
  },
  {
    id: 'purif-q004',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'Le sang en petite quantité annule le wudu selon toutes les écoles.',
      ar: 'الدم بكمية قليلة ينقض الوضوء عند جميع المذاهب.',
      en: 'A small amount of blood invalidates wudu according to all schools.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: false,
    explanation: {
      fr: 'Il y a divergence : les Hanafis et Hanbalis considèrent que le sang abondant annule le wudu. Les Malikis et Shafi\'is considèrent que le sang ne l\'annule pas, sauf s\'il provient des voies naturelles.',
      ar: 'هناك خلاف: الحنفية والحنابلة يرون أن الدم الكثير ينقض الوضوء. المالكية والشافعية يرون أن الدم لا ينقضه إلا من السبيلين.',
      en: 'There\'s disagreement: Hanafis and Hanbalis consider abundant blood invalidates wudu. Malikis and Shafi\'is consider blood doesn\'t invalidate it, except from natural passages.',
    },
    reference: {
      courseSlug: 'bases-fiqh-ibadat-purification',
      lessonId: '004-wudu',
    },
    points: 10,
    tags: ['fiqh', 'wudu', 'nawaqid'],
  },
  {
    id: 'purif-q005',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Qu\'est-ce que le "Ghusl" (الغسل) ?',
      ar: 'ما هو "الغسل"؟',
      en: 'What is "Ghusl"?',
    },
    options: [
      { id: 'a', text: { fr: 'Les petites ablutions', ar: 'الوضوء', en: 'Minor ablution' } },
      { id: 'b', text: { fr: 'Le bain rituel complet du corps', ar: 'غسل البدن كاملاً', en: 'Complete ritual bath of the body' } },
      { id: 'c', text: { fr: 'L\'ablution sèche', ar: 'التيمم', en: 'Dry ablution' } },
      { id: 'd', text: { fr: 'Le lavage des morts', ar: 'غسل الميت', en: 'Washing the dead' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Ghusl est le bain rituel complet obligatoire après : la janaba (rapports ou éjaculation), les menstrues, les lochies, et recommandé pour le vendredi, les deux Aïd, l\'Ihram.',
      ar: 'الغسل هو غسل البدن كاملاً، واجب بعد: الجنابة، الحيض، النفاس. ومستحب للجمعة والعيدين والإحرام.',
      en: 'Ghusl is the complete ritual bath, obligatory after: janaba (intercourse or ejaculation), menstruation, post-partum bleeding. Recommended for Friday, both Eids, Ihram.',
    },
    reference: {
      courseSlug: 'bases-fiqh-ibadat-purification',
      lessonId: '005-ghusl',
    },
    points: 10,
    tags: ['fiqh', 'ghusl', 'purification'],
  },

  // --- Questions Moyennes (6) ---
  {
    id: 'purif-q006',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelle est la différence entre "Hadath Akbar" et "Hadath Asghar" ?',
      ar: 'ما الفرق بين "الحدث الأكبر" و"الحدث الأصغر"؟',
      en: 'What is the difference between "Hadath Akbar" and "Hadath Asghar"?',
    },
    options: [
      { id: 'a', text: { fr: 'Akbar = nécessite ghusl, Asghar = nécessite wudu', ar: 'الأكبر = يوجب الغسل، الأصغر = يوجب الوضوء', en: 'Akbar = requires ghusl, Asghar = requires wudu' } },
      { id: 'b', text: { fr: 'Akbar = pour les hommes, Asghar = pour les femmes', ar: 'الأكبر = للرجال، الأصغر = للنساء', en: 'Akbar = for men, Asghar = for women' } },
      { id: 'c', text: { fr: 'Ils sont identiques', ar: 'متماثلان', en: 'They are identical' } },
      { id: 'd', text: { fr: 'Akbar = péché majeur, Asghar = péché mineur', ar: 'الأكبر = ذنب كبير، الأصغر = ذنب صغير', en: 'Akbar = major sin, Asghar = minor sin' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Hadath Akbar (grande impureté rituelle) : janaba, menstrues, lochies - nécessite le ghusl. Hadath Asghar (petite impureté) : ce qui sort des voies naturelles, sommeil profond, etc. - nécessite le wudu.',
      ar: 'الحدث الأكبر: الجنابة، الحيض، النفاس - يوجب الغسل. الحدث الأصغر: ما خرج من السبيلين، النوم العميق، إلخ - يوجب الوضوء.',
      en: 'Hadath Akbar (major ritual impurity): janaba, menstruation, postpartum - requires ghusl. Hadath Asghar (minor impurity): what exits from natural passages, deep sleep, etc. - requires wudu.',
    },
    reference: {
      courseSlug: 'bases-fiqh-ibadat-purification',
      lessonId: '002-tahara',
    },
    points: 15,
    tags: ['fiqh', 'hadath', 'purification'],
  },
  {
    id: 'purif-q007',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que le "Tayammum" et quand est-il permis ?',
      ar: 'ما هو "التيمم" ومتى يُباح؟',
      en: 'What is "Tayammum" and when is it permitted?',
    },
    options: [
      { id: 'a', text: { fr: 'Ablution avec du sable, toujours permis', ar: 'وضوء بالرمل، مباح دائماً', en: 'Ablution with sand, always permitted' } },
      { id: 'b', text: { fr: 'Ablution sèche avec terre pure, en cas d\'absence d\'eau ou d\'incapacité', ar: 'طهارة بالتراب الطاهر، عند فقد الماء أو العجز', en: 'Dry ablution with pure earth, when water is absent or unable to use' } },
      { id: 'c', text: { fr: 'Lavage avec de l\'huile', ar: 'غسل بالزيت', en: 'Washing with oil' } },
      { id: 'd', text: { fr: 'Prière sans ablution', ar: 'صلاة بدون طهارة', en: 'Prayer without ablution' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Tayammum est la purification avec de la terre pure (sa\'id tahir) quand l\'eau est absente, insuffisante, ou qu\'on ne peut l\'utiliser (maladie, froid extrême). On frappe la terre et on essuie le visage et les mains.',
      ar: 'التيمم طهارة بالصعيد الطاهر عند فقد الماء أو قلته أو العجز عن استعماله (مرض، برد شديد). يُضرب بالتراب ويُمسح الوجه والكفان.',
      en: 'Tayammum is purification with pure earth (sa\'id tahir) when water is absent, insufficient, or unable to use (illness, extreme cold). One strikes the earth and wipes face and hands.',
    },
    reference: {
      courseSlug: 'bases-fiqh-ibadat-purification',
      lessonId: '006-tayammum',
    },
    points: 15,
    tags: ['fiqh', 'tayammum', 'purification'],
  },
  {
    id: 'purif-q008',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelles sont les impuretés (najasa) sur lesquelles tous les savants s\'accordent ?',
      ar: 'ما النجاسات التي اتفق عليها العلماء؟',
      en: 'What are the impurities (najasa) upon which all scholars agree?',
    },
    options: [
      { id: 'a', text: { fr: 'Urine, excréments, sang menstruel, chair de porc, vin', ar: 'البول، الغائط، دم الحيض، لحم الخنزير، الخمر', en: 'Urine, feces, menstrual blood, pork, wine' } },
      { id: 'b', text: { fr: 'Seulement l\'urine et les excréments', ar: 'البول والغائط فقط', en: 'Only urine and feces' } },
      { id: 'c', text: { fr: 'Seulement le sang', ar: 'الدم فقط', en: 'Only blood' } },
      { id: 'd', text: { fr: 'Rien n\'est impur', ar: 'لا شيء نجس', en: 'Nothing is impure' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les najassat unanimes incluent : urine et excréments humains, sang menstruel, chair de porc et ses dérivés, vin (khamr). D\'autres font l\'objet de divergence (sang ordinaire, chien, etc.).',
      ar: 'النجاسات المتفق عليها: بول وغائط الإنسان، دم الحيض، لحم الخنزير ومشتقاته، الخمر. وهناك خلاف في غيرها (الدم العادي، الكلب، إلخ).',
      en: 'Unanimously agreed najassat include: human urine and feces, menstrual blood, pork and its derivatives, wine (khamr). Others are disputed (regular blood, dog, etc.).',
    },
    reference: {
      courseSlug: 'bases-fiqh-ibadat-purification',
      lessonId: '003-najassa',
    },
    points: 15,
    tags: ['fiqh', 'najasa', 'impurity'],
  },
  {
    id: 'purif-q009',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Comment purifie-t-on un vêtement souillé par de l\'urine ?',
      ar: 'كيف تُطهَّر الثياب المتنجسة بالبول؟',
      en: 'How does one purify clothing soiled by urine?',
    },
    options: [
      { id: 'a', text: { fr: 'En le séchant au soleil', ar: 'بتجفيفها في الشمس', en: 'By drying in the sun' } },
      { id: 'b', text: { fr: 'En le lavant à l\'eau jusqu\'à disparition de la trace', ar: 'بغسلها بالماء حتى زوال الأثر', en: 'By washing with water until trace disappears' } },
      { id: 'c', text: { fr: 'En le jetant', ar: 'بالتخلص منها', en: 'By throwing it away' } },
      { id: 'd', text: { fr: 'En récitant des invocations', ar: 'بالدعاء', en: 'By reciting invocations' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La purification de la najasa se fait par l\'eau. On lave jusqu\'à disparition de l\'odeur, la couleur et le goût de l\'impureté. Pour l\'urine de bébé garçon (non sevré), l\'aspersion suffit selon certains.',
      ar: 'تطهير النجاسة بالماء. يُغسل حتى زوال الرائحة واللون والطعم. بول الغلام الرضيع يكفي فيه النضح عند بعضهم.',
      en: 'Purification of najasa is done with water. One washes until smell, color, and taste disappear. For baby boy\'s urine (not weaned), sprinkling suffices according to some.',
    },
    reference: {
      courseSlug: 'bases-fiqh-ibadat-purification',
      lessonId: '003-najassa',
    },
    points: 15,
    tags: ['fiqh', 'najasa', 'purification'],
  },
  {
    id: 'purif-q010',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que le "Masah \'ala al-Khuffayn" (المسح على الخفين) ?',
      ar: 'ما هو "المسح على الخفين"؟',
      en: 'What is "Masah \'ala al-Khuffayn"?',
    },
    options: [
      { id: 'a', text: { fr: 'L\'essuyage sur les chaussettes/chaussures au lieu de laver les pieds', ar: 'المسح على الجوارب/الخفاف بدل غسل القدمين', en: 'Wiping over socks/shoes instead of washing feet' } },
      { id: 'b', text: { fr: 'Essuyer la tête', ar: 'مسح الرأس', en: 'Wiping the head' } },
      { id: 'c', text: { fr: 'Laver les mains', ar: 'غسل اليدين', en: 'Washing hands' } },
      { id: 'd', text: { fr: 'Le tayammum', ar: 'التيمم', en: 'Tayammum' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'C\'est la permission d\'essuyer sur les chaussettes épaisses (khuff) au lieu de laver les pieds lors du wudu. Conditions : les avoir mises en état de pureté. Durée : 1 jour pour résident, 3 jours pour voyageur.',
      ar: 'هو رخصة المسح على الجوارب الصفيقة (الخفاف) بدل غسل القدمين. شروطه: لبسها على طهارة. مدته: يوم للمقيم، ثلاثة أيام للمسافر.',
      en: 'It\'s the permission to wipe over thick socks (khuff) instead of washing feet during wudu. Conditions: wearing them in state of purity. Duration: 1 day for resident, 3 days for traveler.',
    },
    reference: {
      courseSlug: 'bases-fiqh-ibadat-purification',
      lessonId: '004-wudu',
    },
    points: 15,
    tags: ['fiqh', 'wudu', 'khuff'],
  },
  {
    id: 'purif-q011',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quels sont les piliers (arkan) obligatoires du ghusl ?',
      ar: 'ما هي أركان الغسل الواجبة؟',
      en: 'What are the obligatory pillars (arkan) of ghusl?',
    },
    options: [
      { id: 'a', text: { fr: 'Intention et lavage de tout le corps avec l\'eau', ar: 'النية وتعميم الماء على جميع البدن', en: 'Intention and washing entire body with water' } },
      { id: 'b', text: { fr: 'Faire le wudu d\'abord', ar: 'الوضوء أولاً', en: 'Doing wudu first' } },
      { id: 'c', text: { fr: 'Réciter des sourates', ar: 'قراءة السور', en: 'Reciting surahs' } },
      { id: 'd', text: { fr: 'Se frotter trois fois', ar: 'الدلك ثلاث مرات', en: 'Rubbing three times' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les piliers du ghusl sont : 1) La niyya (intention), 2) Faire parvenir l\'eau à tout le corps (y compris cheveux et peau). Le wudu avant est sunna, pas obligatoire.',
      ar: 'أركان الغسل: 1) النية، 2) تعميم الماء على جميع البدن (بما فيه الشعر والجلد). الوضوء قبله سنة لا واجب.',
      en: 'Ghusl pillars are: 1) Niyya (intention), 2) Making water reach entire body (including hair and skin). Wudu before is sunnah, not obligatory.',
    },
    reference: {
      courseSlug: 'bases-fiqh-ibadat-purification',
      lessonId: '005-ghusl',
    },
    points: 15,
    tags: ['fiqh', 'ghusl', 'arkan'],
  },

  // --- Questions Difficiles (4) ---
  {
    id: 'purif-q012',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle est la quantité minimale d\'eau (Qullatayn) qui ne devient pas impure par le contact avec une najasa ?',
      ar: 'ما هو الحد الأدنى من الماء (القُلَّتين) الذي لا ينجس بملاقاة النجاسة؟',
      en: 'What is the minimum quantity of water (Qullatayn) that doesn\'t become impure by contact with najasa?',
    },
    options: [
      { id: 'a', text: { fr: 'Environ 190-216 litres (selon les écoles)', ar: 'حوالي 190-216 لتراً (حسب المذاهب)', en: 'About 190-216 liters (according to schools)' } },
      { id: 'b', text: { fr: '1 litre', ar: 'لتر واحد', en: '1 liter' } },
      { id: 'c', text: { fr: '10 litres', ar: '10 لترات', en: '10 liters' } },
      { id: 'd', text: { fr: 'Aucune quantité minimale', ar: 'لا حد أدنى', en: 'No minimum quantity' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le hadith mentionne "Qullatayn" (deux jarres). Les savants ont estimé cela à environ 190-216 litres. Si l\'eau atteint cette quantité et que la najasa n\'a pas changé ses propriétés (couleur, odeur, goût), elle reste pure.',
      ar: 'الحديث يذكر "القُلَّتين". قدّرها العلماء بحوالي 190-216 لتراً. إذا بلغ الماء هذا القدر ولم تغير النجاسة أوصافه (اللون، الرائحة، الطعم)، يبقى طاهراً.',
      en: 'The hadith mentions "Qullatayn" (two large jars). Scholars estimated this at about 190-216 liters. If water reaches this quantity and najasa hasn\'t changed its properties (color, smell, taste), it remains pure.',
    },
    reference: {
      courseSlug: 'bases-fiqh-ibadat-purification',
      lessonId: '002-tahara',
    },
    points: 20,
    tags: ['fiqh', 'water', 'qullatayn'],
  },
  {
    id: 'purif-q013',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Selon les Malikis, quelle est la particularité concernant l\'eau utilisée (ma\' musta\'mal) ?',
      ar: 'عند المالكية، ما خصوصية الماء المستعمل؟',
      en: 'According to Malikis, what is the ruling on used water (ma\' musta\'mal)?',
    },
    options: [
      { id: 'a', text: { fr: 'Elle est impure', ar: 'نجس', en: 'It is impure' } },
      { id: 'b', text: { fr: 'Elle reste pure et purifiante (tahur)', ar: 'يبقى طاهراً مطهراً (طهور)', en: 'It remains pure and purifying (tahur)' } },
      { id: 'c', text: { fr: 'Elle est pure mais non purifiante', ar: 'طاهر غير مطهر', en: 'Pure but not purifying' } },
      { id: 'd', text: { fr: 'Elle devient automatiquement najas', ar: 'يصير نجساً تلقائياً', en: 'It automatically becomes najas' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les Malikis considèrent que l\'eau utilisée pour le wudu/ghusl reste tahur (pure et purifiante) tant qu\'elle n\'a pas changé de propriétés. Les Shafi\'is et Hanafis la considèrent tahir (pure mais non purifiante).',
      ar: 'المالكية يرون أن الماء المستعمل في الوضوء/الغسل يبقى طهوراً ما لم تتغير أوصافه. الشافعية والحنفية يعتبرونه طاهراً غير مطهر.',
      en: 'Malikis consider water used for wudu/ghusl remains tahur (pure and purifying) as long as its properties haven\'t changed. Shafi\'is and Hanafis consider it tahir (pure but not purifying).',
    },
    reference: {
      courseSlug: 'bases-fiqh-ibadat-purification',
      lessonId: '002-tahara',
    },
    points: 20,
    tags: ['fiqh', 'water', 'maliki'],
  },
  {
    id: 'purif-q014',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle est la différence entre l\'Istinja et l\'Istijmar ?',
      ar: 'ما الفرق بين الاستنجاء والاستجمار؟',
      en: 'What is the difference between Istinja and Istijmar?',
    },
    options: [
      { id: 'a', text: { fr: 'Istinja = eau, Istijmar = pierres/papier (min. 3 essuyages)', ar: 'الاستنجاء = الماء، الاستجمار = الحجارة/الورق (3 مسحات على الأقل)', en: 'Istinja = water, Istijmar = stones/paper (min. 3 wipes)' } },
      { id: 'b', text: { fr: 'Ils sont identiques', ar: 'متماثلان', en: 'They are identical' } },
      { id: 'c', text: { fr: 'Istijmar = eau, Istinja = pierres', ar: 'الاستجمار = الماء، الاستنجاء = الحجارة', en: 'Istijmar = water, Istinja = stones' } },
      { id: 'd', text: { fr: 'Istinja est pour les hommes', ar: 'الاستنجاء للرجال', en: 'Istinja is for men' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Istinja : nettoyage avec de l\'eau après avoir satisfait ses besoins. Istijmar : nettoyage avec des pierres, du papier ou équivalent (minimum 3 essuyages, nombre impair recommandé). Les deux sont permis, l\'eau est préférable.',
      ar: 'الاستنجاء: التنظيف بالماء بعد قضاء الحاجة. الاستجمار: التنظيف بالحجارة أو الورق أو ما شابه (3 مسحات على الأقل، الوتر مستحب). كلاهما جائز، والماء أفضل.',
      en: 'Istinja: cleaning with water after relieving oneself. Istijmar: cleaning with stones, paper or equivalent (minimum 3 wipes, odd number recommended). Both are permitted, water is preferable.',
    },
    reference: {
      courseSlug: 'bases-fiqh-ibadat-purification',
      lessonId: '009-istinja',
    },
    points: 20,
    tags: ['fiqh', 'istinja', 'istijmar'],
  },
  {
    id: 'purif-q015',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quand la femme en état de menstrues (hayd) peut-elle reprendre la prière ?',
      ar: 'متى تستأنف الحائض الصلاة؟',
      en: 'When can a menstruating woman resume prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'Dès la fin de l\'écoulement, même avant le ghusl', ar: 'فور انقطاع الدم، حتى قبل الغسل', en: 'As soon as bleeding stops, even before ghusl' } },
      { id: 'b', text: { fr: 'Après le ghusl obligatoire', ar: 'بعد الغسل الواجب', en: 'After the obligatory ghusl' } },
      { id: 'c', text: { fr: 'Après 7 jours dans tous les cas', ar: 'بعد 7 أيام في جميع الحالات', en: 'After 7 days in all cases' } },
      { id: 'd', text: { fr: 'Elle n\'a pas besoin de ghusl', ar: 'لا تحتاج للغسل', en: 'She doesn\'t need ghusl' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Après l\'arrêt des menstrues, la femme doit faire le ghusl avant de reprendre la prière. La durée minimale des règles est 1 jour (ou 3 selon certains), maximale 15 jours. Elle ne rattrape pas les prières manquées.',
      ar: 'بعد انقطاع الحيض، يجب على المرأة الاغتسال قبل استئناف الصلاة. أقل الحيض يوم (أو 3 عند بعضهم)، وأكثره 15 يوماً. لا تقضي الصلوات الفائتة.',
      en: 'After menstruation stops, a woman must perform ghusl before resuming prayer. Minimum menstruation is 1 day (or 3 according to some), maximum 15 days. She doesn\'t make up missed prayers.',
    },
    reference: {
      courseSlug: 'bases-fiqh-ibadat-purification',
      lessonId: '007-hayd-nifas',
    },
    points: 20,
    tags: ['fiqh', 'hayd', 'ghusl'],
  },
];

// ============================================
// Export du Quiz
// ============================================

export const quizPurification: Quiz = {
  id: 'quiz-fiqh-purification',
  type: 'module',
  courseSlug: 'bases-fiqh-ibadat-purification',
  title: {
    fr: 'Quiz : La Purification (Tahara)',
    ar: 'اختبار: الطهارة',
    en: 'Quiz: Purification (Tahara)',
  },
  description: {
    fr: 'Testez vos connaissances sur les règles de purification : wudu, ghusl, tayammum, impuretés.',
    ar: 'اختبر معلوماتك عن أحكام الطهارة: الوضوء، الغسل، التيمم، النجاسات.',
    en: 'Test your knowledge of purification rules: wudu, ghusl, tayammum, impurities.',
  },
  instructions: {
    fr: 'Maîtrisez les fondements de la purification, condition de la prière.',
    ar: 'أتقن أساسيات الطهارة، شرط الصلاة.',
    en: 'Master the foundations of purification, a condition for prayer.',
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

export default quizPurification;
