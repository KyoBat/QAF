/**
 * Quiz Histoire - Les Compagnons Illustres (As-Sahaba)
 * 
 * Ce quiz couvre la vie et les mérites des Compagnons du Prophète ﷺ
 * 
 * Niveau : Débutant à Intermédiaire
 * Questions : 15
 */

import { Quiz, Question } from '../types';

const questions: Question[] = [
  // --- Questions Faciles (5) ---
  {
    id: 'sahaba-q001',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Qui est le premier homme à avoir embrassé l\'Islam ?',
      ar: 'من أول رجل أسلم؟',
      en: 'Who was the first man to embrace Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Omar ibn al-Khattab', ar: 'عمر بن الخطاب', en: 'Omar ibn al-Khattab' } },
      { id: 'b', text: { fr: 'Abu Bakr as-Siddiq', ar: 'أبو بكر الصديق', en: 'Abu Bakr as-Siddiq' } },
      { id: 'c', text: { fr: 'Ali ibn Abi Talib', ar: 'علي بن أبي طالب', en: 'Ali ibn Abi Talib' } },
      { id: 'd', text: { fr: 'Uthman ibn Affan', ar: 'عثمان بن عفان', en: 'Uthman ibn Affan' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Abu Bakr as-Siddiq fut le premier homme libre adulte à embrasser l\'Islam. Ali fut le premier enfant, Khadija la première femme, et Zayd le premier esclave affranchi.',
      ar: 'أبو بكر الصديق أول رجل حر بالغ أسلم. علي أول صبي، خديجة أول امرأة، وزيد أول مولى.',
      en: 'Abu Bakr as-Siddiq was the first free adult man to embrace Islam. Ali was the first child, Khadija the first woman, and Zayd the first freed slave.',
    },
    reference: {
      courseSlug: 'les-compagnons-illustres',
      lessonId: '001-abu-bakr',
    },
    points: 10,
    tags: ['history', 'sahaba', 'abu-bakr'],
  },
  {
    id: 'sahaba-q002',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quel surnom fut donné à Omar ibn al-Khattab ?',
      ar: 'ما لقب عمر بن الخطاب؟',
      en: 'What title was given to Omar ibn al-Khattab?',
    },
    options: [
      { id: 'a', text: { fr: 'As-Siddiq (le Véridique)', ar: 'الصديق', en: 'As-Siddiq (the Truthful)' } },
      { id: 'b', text: { fr: 'Al-Faruq (le Discernant)', ar: 'الفاروق', en: 'Al-Faruq (the Discerner)' } },
      { id: 'c', text: { fr: 'Dhu an-Nurayn (aux Deux Lumières)', ar: 'ذو النورين', en: 'Dhu an-Nurayn (of Two Lights)' } },
      { id: 'd', text: { fr: 'Asadullah (Lion d\'Allah)', ar: 'أسد الله', en: 'Asadullah (Lion of Allah)' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Omar reçut le titre "Al-Faruq" car il distinguait clairement le vrai du faux. Son Islam fut une victoire pour les musulmans car il défendait ouvertement la foi.',
      ar: 'لُقب عمر بـ"الفاروق" لأنه كان يفرّق بين الحق والباطل. كان إسلامه فتحاً للمسلمين إذ جهر بالإسلام.',
      en: 'Omar received the title "Al-Faruq" because he clearly distinguished truth from falsehood. His Islam was a victory as he openly defended the faith.',
    },
    reference: {
      courseSlug: 'les-compagnons-illustres',
      lessonId: '002-omar',
    },
    points: 10,
    tags: ['history', 'sahaba', 'omar'],
  },
  {
    id: 'sahaba-q003',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Pourquoi Uthman ibn Affan est-il surnommé "Dhu an-Nurayn" ?',
      ar: 'لماذا لُقب عثمان بن عفان بـ"ذي النورين"؟',
      en: 'Why is Uthman ibn Affan called "Dhu an-Nurayn"?',
    },
    options: [
      { id: 'a', text: { fr: 'Il a financé deux expéditions', ar: 'موّل غزوتين', en: 'He financed two expeditions' } },
      { id: 'b', text: { fr: 'Il a épousé deux filles du Prophète ﷺ', ar: 'تزوج ابنتي النبي ﷺ', en: 'He married two daughters of the Prophet ﷺ' } },
      { id: 'c', text: { fr: 'Il a construit deux mosquées', ar: 'بنى مسجدين', en: 'He built two mosques' } },
      { id: 'd', text: { fr: 'Il avait deux sources de lumière', ar: 'كان له نوران', en: 'He had two sources of light' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Uthman épousa Ruqayya, puis après sa mort, Umm Kulthum, toutes deux filles du Prophète ﷺ. Aucun autre homme n\'a épousé deux filles d\'un prophète.',
      ar: 'تزوج عثمان رقية، ثم بعد وفاتها أم كلثوم، وكلتاهما ابنتا النبي ﷺ. لم يتزوج أحد بابنتي نبي غيره.',
      en: 'Uthman married Ruqayya, then after her death, Umm Kulthum, both daughters of the Prophet ﷺ. No other man married two daughters of a prophet.',
    },
    reference: {
      courseSlug: 'les-compagnons-illustres',
      lessonId: '003-uthman',
    },
    points: 10,
    tags: ['history', 'sahaba', 'uthman'],
  },
  {
    id: 'sahaba-q004',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'Ali ibn Abi Talib était le cousin et le gendre du Prophète ﷺ.',
      ar: 'علي بن أبي طالب كان ابن عم النبي ﷺ وصهره.',
      en: 'Ali ibn Abi Talib was the cousin and son-in-law of the Prophet ﷺ.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'Ali était le fils d\'Abu Talib, oncle paternel du Prophète ﷺ (donc son cousin). Il épousa Fatima, fille du Prophète ﷺ, devenant ainsi son gendre.',
      ar: 'علي ابن أبي طالب عم النبي ﷺ (فهو ابن عمه). تزوج فاطمة بنت النبي ﷺ، فصار صهره.',
      en: 'Ali was the son of Abu Talib, the Prophet\'s ﷺ paternal uncle (thus his cousin). He married Fatima, the Prophet\'s ﷺ daughter, becoming his son-in-law.',
    },
    reference: {
      courseSlug: 'les-compagnons-illustres',
      lessonId: '004-ali',
    },
    points: 10,
    tags: ['history', 'sahaba', 'ali'],
  },
  {
    id: 'sahaba-q005',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Combien de Compagnons font partie des "Dix Promis au Paradis" (Al-\'Ashara al-Mubashsharun) ?',
      ar: 'كم عدد العشرة المبشرين بالجنة؟',
      en: 'How many Companions are among the "Ten Promised Paradise"?',
    },
    options: [
      { id: 'a', text: { fr: '4', ar: '4', en: '4' } },
      { id: 'b', text: { fr: '7', ar: '7', en: '7' } },
      { id: 'c', text: { fr: '10', ar: '10', en: '10' } },
      { id: 'd', text: { fr: '12', ar: '12', en: '12' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Les 10 sont : Abu Bakr, Omar, Uthman, Ali, Talha, Zubayr, Abdurrahman ibn Awf, Sa\'d ibn Abi Waqqas, Said ibn Zayd, Abu Ubayda ibn al-Jarrah.',
      ar: 'العشرة: أبو بكر، عمر، عثمان، علي، طلحة، الزبير، عبد الرحمن بن عوف، سعد بن أبي وقاص، سعيد بن زيد، أبو عبيدة بن الجراح.',
      en: 'The 10 are: Abu Bakr, Omar, Uthman, Ali, Talha, Zubayr, Abdurrahman ibn Awf, Sa\'d ibn Abi Waqqas, Said ibn Zayd, Abu Ubayda ibn al-Jarrah.',
    },
    reference: {
      courseSlug: 'les-compagnons-illustres',
      lessonId: '005-dix-promis',
    },
    points: 10,
    tags: ['history', 'sahaba', 'ashara'],
  },

  // --- Questions Moyennes (6) ---
  {
    id: 'sahaba-q006',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quel Compagnon est surnommé "Sayfullah" (Épée d\'Allah) ?',
      ar: 'من الصحابي الملقب بـ"سيف الله"؟',
      en: 'Which Companion is called "Sayfullah" (Sword of Allah)?',
    },
    options: [
      { id: 'a', text: { fr: 'Ali ibn Abi Talib', ar: 'علي بن أبي طالب', en: 'Ali ibn Abi Talib' } },
      { id: 'b', text: { fr: 'Khalid ibn al-Walid', ar: 'خالد بن الوليد', en: 'Khalid ibn al-Walid' } },
      { id: 'c', text: { fr: 'Hamza ibn Abdul-Muttalib', ar: 'حمزة بن عبد المطلب', en: 'Hamza ibn Abdul-Muttalib' } },
      { id: 'd', text: { fr: 'Sa\'d ibn Abi Waqqas', ar: 'سعد بن أبي وقاص', en: 'Sa\'d ibn Abi Waqqas' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Khalid ibn al-Walid reçut ce titre du Prophète ﷺ après la bataille de Mu\'ta (8H). Il n\'a jamais perdu une bataille, que ce soit avant ou après son Islam.',
      ar: 'خالد بن الوليد لقّبه النبي ﷺ بهذا اللقب بعد غزوة مؤتة (8هـ). لم يُهزم في معركة قط، سواء قبل إسلامه أو بعده.',
      en: 'Khalid ibn al-Walid received this title from the Prophet ﷺ after the Battle of Mu\'ta (8H). He never lost a battle, whether before or after his Islam.',
    },
    reference: {
      courseSlug: 'les-compagnons-illustres',
      lessonId: '006-khalid',
    },
    points: 15,
    tags: ['history', 'sahaba', 'khalid'],
  },
  {
    id: 'sahaba-q007',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quel Compagnon est "Amin al-Umma" (le Dépositaire de la Communauté) ?',
      ar: 'من الصحابي "أمين الأمة"؟',
      en: 'Which Companion is "Amin al-Umma" (Trustee of the Ummah)?',
    },
    options: [
      { id: 'a', text: { fr: 'Bilal ibn Rabah', ar: 'بلال بن رباح', en: 'Bilal ibn Rabah' } },
      { id: 'b', text: { fr: 'Abu Ubayda ibn al-Jarrah', ar: 'أبو عبيدة بن الجراح', en: 'Abu Ubayda ibn al-Jarrah' } },
      { id: 'c', text: { fr: 'Muadh ibn Jabal', ar: 'معاذ بن جبل', en: 'Muadh ibn Jabal' } },
      { id: 'd', text: { fr: 'Abdullah ibn Mas\'ud', ar: 'عبد الله بن مسعود', en: 'Abdullah ibn Mas\'ud' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Abu Ubayda ibn al-Jarrah fut appelé ainsi par le Prophète ﷺ. Il dirigea les armées en Syrie et mourut durant la peste d\'Amwas en 18H.',
      ar: 'أبو عبيدة بن الجراح لقّبه النبي ﷺ بذلك. قاد الجيوش في الشام وتوفي في طاعون عمواس سنة 18هـ.',
      en: 'Abu Ubayda ibn al-Jarrah was called this by the Prophet ﷺ. He led armies in Syria and died during the Plague of Amwas in 18H.',
    },
    reference: {
      courseSlug: 'les-compagnons-illustres',
      lessonId: '007-abu-ubayda',
    },
    points: 15,
    tags: ['history', 'sahaba', 'abu-ubayda'],
  },
  {
    id: 'sahaba-q008',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qui était le premier muezzin de l\'Islam ?',
      ar: 'من أول مؤذن في الإسلام؟',
      en: 'Who was the first muezzin of Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Abdullah ibn Umm Maktum', ar: 'عبد الله بن أم مكتوم', en: 'Abdullah ibn Umm Maktum' } },
      { id: 'b', text: { fr: 'Bilal ibn Rabah', ar: 'بلال بن رباح', en: 'Bilal ibn Rabah' } },
      { id: 'c', text: { fr: 'Salman al-Farisi', ar: 'سلمان الفارسي', en: 'Salman al-Farisi' } },
      { id: 'd', text: { fr: 'Ammar ibn Yasir', ar: 'عمار بن ياسر', en: 'Ammar ibn Yasir' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Bilal ibn Rabah, esclave abyssin affranchi par Abu Bakr, fut choisi pour sa voix magnifique. Il lança le premier adhan depuis le toit de la Kaaba après la conquête de La Mecque.',
      ar: 'بلال بن رباح، العبد الحبشي الذي أعتقه أبو بكر، اختير لجمال صوته. أذّن من فوق الكعبة بعد فتح مكة.',
      en: 'Bilal ibn Rabah, an Abyssinian slave freed by Abu Bakr, was chosen for his beautiful voice. He gave the first adhan from atop the Kaaba after the conquest of Mecca.',
    },
    reference: {
      courseSlug: 'les-compagnons-illustres',
      lessonId: '008-bilal',
    },
    points: 15,
    tags: ['history', 'sahaba', 'bilal'],
  },
  {
    id: 'sahaba-q009',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quel Compagnon a suggéré l\'idée de creuser une tranchée à la bataille de Khandaq ?',
      ar: 'من الصحابي الذي اقترح حفر الخندق في غزوة الخندق؟',
      en: 'Which Companion suggested digging the trench at the Battle of Khandaq?',
    },
    options: [
      { id: 'a', text: { fr: 'Abu Dharr al-Ghifari', ar: 'أبو ذر الغفاري', en: 'Abu Dharr al-Ghifari' } },
      { id: 'b', text: { fr: 'Salman al-Farisi', ar: 'سلمان الفارسي', en: 'Salman al-Farisi' } },
      { id: 'c', text: { fr: 'Hudhayfa ibn al-Yaman', ar: 'حذيفة بن اليمان', en: 'Hudhayfa ibn al-Yaman' } },
      { id: 'd', text: { fr: 'Amr ibn al-As', ar: 'عمرو بن العاص', en: 'Amr ibn al-As' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Salman al-Farisi, d\'origine persane, connaissait cette tactique militaire utilisée en Perse. Le Prophète ﷺ dit à son sujet : "Salman est des nôtres, les Ahl al-Bayt."',
      ar: 'سلمان الفارسي، من أصل فارسي، عرف هذا الأسلوب العسكري المستخدم في فارس. قال النبي ﷺ: "سلمان منا أهل البيت."',
      en: 'Salman al-Farisi, of Persian origin, knew this military tactic used in Persia. The Prophet ﷺ said about him: "Salman is from us, the Ahl al-Bayt."',
    },
    reference: {
      courseSlug: 'les-compagnons-illustres',
      lessonId: '009-salman',
    },
    points: 15,
    tags: ['history', 'sahaba', 'salman'],
  },
  {
    id: 'sahaba-q010',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qui est surnommé "Sayyid al-Qurra\'" (le Maître des Récitateurs) ?',
      ar: 'من الملقب بـ"سيد القراء"؟',
      en: 'Who is called "Sayyid al-Qurra\'" (Master of Reciters)?',
    },
    options: [
      { id: 'a', text: { fr: 'Zayd ibn Thabit', ar: 'زيد بن ثابت', en: 'Zayd ibn Thabit' } },
      { id: 'b', text: { fr: 'Ubayy ibn Ka\'b', ar: 'أُبي بن كعب', en: 'Ubayy ibn Ka\'b' } },
      { id: 'c', text: { fr: 'Abdullah ibn Abbas', ar: 'عبد الله بن عباس', en: 'Abdullah ibn Abbas' } },
      { id: 'd', text: { fr: 'Abu Musa al-Ash\'ari', ar: 'أبو موسى الأشعري', en: 'Abu Musa al-Ash\'ari' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Ubayy ibn Ka\'b était le meilleur récitateur parmi les Compagnons. Le Prophète ﷺ lui dit : "Allah m\'a ordonné de te réciter sourate Al-Bayyina."',
      ar: 'أُبي بن كعب كان أقرأ الصحابة. قال له النبي ﷺ: "إن الله أمرني أن أقرأ عليك سورة البينة."',
      en: 'Ubayy ibn Ka\'b was the best reciter among Companions. The Prophet ﷺ told him: "Allah ordered me to recite Surah Al-Bayyina to you."',
    },
    reference: {
      courseSlug: 'les-compagnons-illustres',
      lessonId: '010-ubayy',
    },
    points: 15,
    tags: ['history', 'sahaba', 'ubayy'],
  },
  {
    id: 'sahaba-q011',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quel Compagnon est appelé "Hibr al-Umma" (le Savant de la Communauté) ?',
      ar: 'من الصحابي الملقب بـ"حبر الأمة"؟',
      en: 'Which Companion is called "Hibr al-Umma" (Scholar of the Ummah)?',
    },
    options: [
      { id: 'a', text: { fr: 'Abdullah ibn Omar', ar: 'عبد الله بن عمر', en: 'Abdullah ibn Omar' } },
      { id: 'b', text: { fr: 'Abdullah ibn Abbas', ar: 'عبد الله بن عباس', en: 'Abdullah ibn Abbas' } },
      { id: 'c', text: { fr: 'Abdullah ibn Mas\'ud', ar: 'عبد الله بن مسعود', en: 'Abdullah ibn Mas\'ud' } },
      { id: 'd', text: { fr: 'Abdullah ibn Amr', ar: 'عبد الله بن عمرو', en: 'Abdullah ibn Amr' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Abdullah ibn Abbas, cousin du Prophète ﷺ, reçut cette invocation : "Ô Allah, enseigne-lui le Livre et la sagesse." Il devint le plus grand exégète (mufassir) parmi les Sahaba.',
      ar: 'عبد الله بن عباس، ابن عم النبي ﷺ، دعا له: "اللهم فقّهه في الدين وعلّمه التأويل." صار أعلم الصحابة بالتفسير.',
      en: 'Abdullah ibn Abbas, Prophet\'s ﷺ cousin, received this supplication: "O Allah, teach him the Book and wisdom." He became the greatest exegete among Sahaba.',
    },
    reference: {
      courseSlug: 'les-compagnons-illustres',
      lessonId: '011-ibn-abbas',
    },
    points: 15,
    tags: ['history', 'sahaba', 'ibn-abbas'],
  },

  // --- Questions Difficiles (4) ---
  {
    id: 'sahaba-q012',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qui a compilé le Coran en un seul Mushaf sous Abu Bakr ?',
      ar: 'من جمع القرآن في مصحف واحد في عهد أبي بكر؟',
      en: 'Who compiled the Quran into one Mushaf under Abu Bakr?',
    },
    options: [
      { id: 'a', text: { fr: 'Ubayy ibn Ka\'b', ar: 'أُبي بن كعب', en: 'Ubayy ibn Ka\'b' } },
      { id: 'b', text: { fr: 'Zayd ibn Thabit', ar: 'زيد بن ثابت', en: 'Zayd ibn Thabit' } },
      { id: 'c', text: { fr: 'Abdullah ibn Mas\'ud', ar: 'عبد الله بن مسعود', en: 'Abdullah ibn Mas\'ud' } },
      { id: 'd', text: { fr: 'Ali ibn Abi Talib', ar: 'علي بن أبي طالب', en: 'Ali ibn Abi Talib' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Zayd ibn Thabit fut chargé de cette mission après la bataille de Yamama où beaucoup de huffaz moururent. Il était le scribe personnel du Prophète ﷺ et connaissait l\'ordre des versets.',
      ar: 'كُلّف زيد بن ثابت بهذه المهمة بعد معركة اليمامة حيث استشهد كثير من الحفاظ. كان كاتب الوحي وعرف ترتيب الآيات.',
      en: 'Zayd ibn Thabit was tasked after the Battle of Yamama where many huffaz died. He was the Prophet\'s ﷺ personal scribe and knew the order of verses.',
    },
    reference: {
      courseSlug: 'les-compagnons-illustres',
      lessonId: '012-zayd',
    },
    points: 20,
    tags: ['history', 'sahaba', 'zayd', 'quran'],
  },
  {
    id: 'sahaba-q013',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quel Compagnon est connu comme "Sahib Sirr Rasulillah" (Confident du Secret du Messager) ?',
      ar: 'من الصحابي المعروف بـ"صاحب سر رسول الله"؟',
      en: 'Which Companion is known as "Keeper of the Prophet\'s Secret"?',
    },
    options: [
      { id: 'a', text: { fr: 'Abu Hurayra', ar: 'أبو هريرة', en: 'Abu Hurayra' } },
      { id: 'b', text: { fr: 'Anas ibn Malik', ar: 'أنس بن مالك', en: 'Anas ibn Malik' } },
      { id: 'c', text: { fr: 'Hudhayfa ibn al-Yaman', ar: 'حذيفة بن اليمان', en: 'Hudhayfa ibn al-Yaman' } },
      { id: 'd', text: { fr: 'Abu Ayyub al-Ansari', ar: 'أبو أيوب الأنصاري', en: 'Abu Ayyub al-Ansari' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Hudhayfa ibn al-Yaman connaissait les noms des hypocrites que le Prophète ﷺ lui avait confiés. Omar le consultait pour savoir s\'il était sur la liste des hypocrites.',
      ar: 'حذيفة بن اليمان عرف أسماء المنافقين التي أسرّها له النبي ﷺ. كان عمر يستشيره ليعرف هل هو من المنافقين.',
      en: 'Hudhayfa ibn al-Yaman knew the names of hypocrites the Prophet ﷺ confided to him. Omar would consult him to know if he was on the hypocrites\' list.',
    },
    reference: {
      courseSlug: 'les-compagnons-illustres',
      lessonId: '013-hudhayfa',
    },
    points: 20,
    tags: ['history', 'sahaba', 'hudhayfa'],
  },
  {
    id: 'sahaba-q014',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle Sahabiyya rapporta le plus de hadiths parmi les femmes ?',
      ar: 'من أكثر الصحابيات رواية للحديث؟',
      en: 'Which female Companion narrated the most hadiths?',
    },
    options: [
      { id: 'a', text: { fr: 'Khadija bint Khuwaylid', ar: 'خديجة بنت خويلد', en: 'Khadija bint Khuwaylid' } },
      { id: 'b', text: { fr: 'Fatima bint Muhammad', ar: 'فاطمة بنت محمد', en: 'Fatima bint Muhammad' } },
      { id: 'c', text: { fr: 'Aisha bint Abi Bakr', ar: 'عائشة بنت أبي بكر', en: 'Aisha bint Abi Bakr' } },
      { id: 'd', text: { fr: 'Hafsa bint Omar', ar: 'حفصة بنت عمر', en: 'Hafsa bint Omar' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Aisha rapporta 2 210 hadiths, ce qui fait d\'elle le 4e plus grand rapporteur après Abu Hurayra, Ibn Omar et Anas. Elle était une savante de référence que les Sahaba consultaient.',
      ar: 'عائشة روت 2,210 حديث، مما يجعلها رابع أكثر الرواة بعد أبي هريرة وابن عمر وأنس. كانت مرجعاً علمياً يستشيرها الصحابة.',
      en: 'Aisha narrated 2,210 hadiths, making her the 4th greatest narrator after Abu Hurayra, Ibn Omar and Anas. She was a scholarly reference whom Sahaba consulted.',
    },
    reference: {
      courseSlug: 'les-compagnons-illustres',
      lessonId: '014-aisha',
    },
    points: 20,
    tags: ['history', 'sahaba', 'aisha'],
  },
  {
    id: 'sahaba-q015',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quel est le mérite des Ansar selon le Prophète ﷺ ?',
      ar: 'ما فضل الأنصار عند النبي ﷺ؟',
      en: 'What is the merit of the Ansar according to the Prophet ﷺ?',
    },
    options: [
      { id: 'a', text: { fr: '"Les aimer est signe de foi, les haïr est signe d\'hypocrisie"', ar: '"حبهم إيمان وبغضهم نفاق"', en: '"Loving them is faith, hating them is hypocrisy"' } },
      { id: 'b', text: { fr: '"Ils sont les meilleurs après les Muhajirun"', ar: '"هم أفضل بعد المهاجرين"', en: '"They are the best after the Muhajirun"' } },
      { id: 'c', text: { fr: '"Ils entreront au Paradis en premier"', ar: '"يدخلون الجنة أولاً"', en: '"They will enter Paradise first"' } },
      { id: 'd', text: { fr: '"Ils n\'auront pas de compte le Jour du Jugement"', ar: '"لا حساب عليهم يوم القيامة"', en: '"They will have no reckoning on Judgment Day"' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ dit : "Le signe de la foi est l\'amour des Ansar, et le signe de l\'hypocrisie est la haine des Ansar." (Bukhari) Les Ansar accueillirent les Muhajirun et partagèrent leurs biens.',
      ar: 'قال النبي ﷺ: "آية الإيمان حب الأنصار، وآية النفاق بغض الأنصار." (البخاري) الأنصار آووا المهاجرين وقاسموهم أموالهم.',
      en: 'The Prophet ﷺ said: "The sign of faith is love for the Ansar, and the sign of hypocrisy is hatred for the Ansar." (Bukhari) The Ansar sheltered the Muhajirun and shared their wealth.',
    },
    reference: {
      courseSlug: 'les-compagnons-illustres',
      lessonId: '015-ansar',
    },
    points: 20,
    tags: ['history', 'sahaba', 'ansar'],
  },
];

// ============================================
// Export du Quiz
// ============================================

export const quizCompagnons: Quiz = {
  id: 'quiz-history-compagnons',
  type: 'module',
  courseSlug: 'les-compagnons-illustres',
  title: {
    fr: 'Quiz : Les Compagnons Illustres',
    ar: 'اختبار: الصحابة الكرام',
    en: 'Quiz: The Illustrious Companions',
  },
  description: {
    fr: 'Testez vos connaissances sur les Compagnons du Prophète ﷺ : leur vie, mérites et contributions.',
    ar: 'اختبر معلوماتك عن صحابة النبي ﷺ: حياتهم، فضائلهم وإسهاماتهم.',
    en: 'Test your knowledge of the Prophet\'s ﷺ Companions: their lives, merits and contributions.',
  },
  instructions: {
    fr: 'Découvrez ceux qui ont transmis l\'Islam à travers les générations.',
    ar: 'تعرّف على من نقلوا الإسلام عبر الأجيال.',
    en: 'Discover those who transmitted Islam through generations.',
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

export default quizCompagnons;
