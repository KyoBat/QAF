/**
 * Quiz du Module Salat — Fiqh
 * 
 * Ce quiz couvre l'ensemble du module sur la prière (Salat)
 * incluant les conditions, piliers, obligations, sunnas et annulatifs.
 * 
 * Leçons couvertes : 011-034
 * Niveau : Débutant
 * Questions : 20
 */

import { Quiz, Question } from '../types';

// ============================================
// Questions du Quiz
// ============================================

const questions: Question[] = [
  // --- Questions Faciles (7) ---
  {
    id: 'salat-q001',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Combien de prières obligatoires le musulman doit-il accomplir chaque jour ?',
      ar: 'كم عدد الصلوات الواجبة التي يجب على المسلم أداؤها كل يوم؟',
      en: 'How many obligatory prayers must a Muslim perform each day?',
    },
    options: [
      { id: 'a', text: { fr: '3', ar: '٣', en: '3' } },
      { id: 'b', text: { fr: '4', ar: '٤', en: '4' } },
      { id: 'c', text: { fr: '5', ar: '٥', en: '5' } },
      { id: 'd', text: { fr: '7', ar: '٧', en: '7' } },
    ],
    correctAnswer: 2, // Index de 'c'
    explanation: {
      fr: 'Les cinq prières obligatoires sont : Fajr, Dhuhr, Asr, Maghrib et Isha. Elles ont été prescrites lors du voyage nocturne (Isra et Mi\'raj).',
      ar: 'الصلوات الخمس الواجبة هي: الفجر، الظهر، العصر، المغرب والعشاء. فُرضت في ليلة الإسراء والمعراج.',
      en: 'The five obligatory prayers are: Fajr, Dhuhr, Asr, Maghrib and Isha. They were prescribed during the Night Journey (Isra and Mi\'raj).',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '011-intro-salat',
    },
    points: 10,
    tags: ['salat', 'obligations', 'base'],
  },
  {
    id: 'salat-q002',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quelle est la première condition de validité de la prière ?',
      ar: 'ما هو الشرط الأول لصحة الصلاة؟',
      en: 'What is the first condition for the validity of prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'La pureté rituelle (Tahara)', ar: 'الطهارة', en: 'Ritual purity (Tahara)' } },
      { id: 'b', text: { fr: 'Être debout', ar: 'القيام', en: 'Standing' } },
      { id: 'c', text: { fr: 'Réciter le Coran', ar: 'قراءة القرآن', en: 'Reciting Quran' } },
      { id: 'd', text: { fr: 'L\'intention', ar: 'النية', en: 'The intention' } },
    ],
    correctAnswer: 0, // La pureté rituelle
    explanation: {
      fr: 'La pureté rituelle (Tahara) est la première condition de validité. Sans elle, la prière n\'est pas acceptée. Le Prophète ﷺ a dit : « Allah n\'accepte pas de prière sans purification. » [Muslim]',
      ar: 'الطهارة هي الشرط الأول للصحة. بدونها لا تُقبل الصلاة. قال النبي ﷺ: «لا يقبل الله صلاة بغير طهور» [مسلم]',
      en: 'Ritual purity (Tahara) is the first condition. Without it, prayer is not accepted. The Prophet ﷺ said: "Allah does not accept prayer without purification." [Muslim]',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '012-conditions-salat',
    },
    points: 10,
    tags: ['salat', 'conditions', 'tahara'],
  },
  {
    id: 'salat-q003',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'Le Takbir al-Ihram (Allahu Akbar d\'entrée) est un pilier de la prière.',
      ar: 'تكبيرة الإحرام ركن من أركان الصلاة.',
      en: 'The Takbir al-Ihram (opening Allahu Akbar) is a pillar of prayer.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'Le Takbir al-Ihram est bien un pilier (rukn). Sans lui, la prière ne commence pas. Le Prophète ﷺ a dit : « La clé de la prière est la purification, son entrée sacrée est le takbir. » [Abu Dawud 61, sahih]',
      ar: 'تكبيرة الإحرام ركن من أركان الصلاة. بدونها لا تبدأ الصلاة. قال النبي ﷺ: «مفتاح الصلاة الطهور، وتحريمها التكبير» [أبو داود ٦١، صحيح]',
      en: 'The Takbir al-Ihram is indeed a pillar (rukn). Without it, prayer does not begin. The Prophet ﷺ said: "The key to prayer is purification, its sacred beginning is the takbir." [Abu Dawud 61, sahih]',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '013-piliers-salat',
    },
    points: 10,
    tags: ['salat', 'piliers', 'takbir'],
  },
  {
    id: 'salat-q004',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quelle sourate doit-on obligatoirement réciter dans chaque rak\'a de la prière ?',
      ar: 'ما هي السورة التي يجب قراءتها في كل ركعة من الصلاة؟',
      en: 'Which surah must be recited in every rak\'a of the prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'Sourate Al-Ikhlas', ar: 'سورة الإخلاص', en: 'Surah Al-Ikhlas' } },
      { id: 'b', text: { fr: 'Sourate Al-Fatiha', ar: 'سورة الفاتحة', en: 'Surah Al-Fatiha' } },
      { id: 'c', text: { fr: 'Sourate Al-Kawthar', ar: 'سورة الكوثر', en: 'Surah Al-Kawthar' } },
      { id: 'd', text: { fr: 'Sourate An-Nas', ar: 'سورة الناس', en: 'Surah An-Nas' } },
    ],
    correctAnswer: 1, // Al-Fatiha
    explanation: {
      fr: 'Al-Fatiha est un pilier de la prière. Le Prophète ﷺ a dit : « Pas de prière pour celui qui ne récite pas l\'Ouverture du Livre. » [Bukhari 756]',
      ar: 'الفاتحة ركن من أركان الصلاة. قال النبي ﷺ: «لا صلاة لمن لم يقرأ بفاتحة الكتاب» [البخاري ٧٥٦]',
      en: 'Al-Fatiha is a pillar of prayer. The Prophet ﷺ said: "There is no prayer for the one who does not recite the Opening of the Book." [Bukhari 756]',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '013-piliers-salat',
    },
    points: 10,
    tags: ['salat', 'piliers', 'fatiha', 'recitation'],
  },
  {
    id: 'salat-q005',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Combien de rak\'at (unités) comporte la prière du Fajr ?',
      ar: 'كم عدد ركعات صلاة الفجر؟',
      en: 'How many rak\'at (units) does the Fajr prayer have?',
    },
    options: [
      { id: 'a', text: { fr: '2 rak\'at', ar: 'ركعتان', en: '2 rak\'at' } },
      { id: 'b', text: { fr: '3 rak\'at', ar: '٣ ركعات', en: '3 rak\'at' } },
      { id: 'c', text: { fr: '4 rak\'at', ar: '٤ ركعات', en: '4 rak\'at' } },
      { id: 'd', text: { fr: '1 rak\'a', ar: 'ركعة واحدة', en: '1 rak\'a' } },
    ],
    correctAnswer: 0, // 2 rak'at
    explanation: {
      fr: 'Le Fajr comporte 2 rak\'at obligatoires. C\'est la plus courte des prières obligatoires mais aussi l\'une des plus méritoires.',
      ar: 'صلاة الفجر ركعتان. وهي أقصر الصلوات المفروضة ولكنها من أفضلها.',
      en: 'Fajr has 2 obligatory rak\'at. It is the shortest obligatory prayer but also one of the most meritorious.',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '011-intro-salat',
    },
    points: 10,
    tags: ['salat', 'fajr', 'rakat', 'base'],
  },
  {
    id: 'salat-q006',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'La prière en groupe (Jama\'a) pour les hommes est une obligation communautaire (fard kifaya) selon certains savants.',
      ar: 'صلاة الجماعة للرجال فرض كفاية عند بعض العلماء.',
      en: 'Congregational prayer (Jama\'a) for men is a communal obligation (fard kifaya) according to some scholars.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'Il y a divergence savante sur ce point. Certains savants comme les Shafi\'ites considèrent que c\'est un fard kifaya, d\'autres comme Ibn Taymiyya un fard \'ayn. Tous s\'accordent sur son immense mérite (27 fois supérieur à la prière individuelle).',
      ar: 'هناك خلاف بين العلماء. يرى بعض العلماء كالشافعية أنها فرض كفاية، وآخرون كابن تيمية أنها فرض عين. يتفقون جميعاً على فضلها العظيم (٢٧ ضعفاً).',
      en: 'Scholars differ on this. Some like the Shafi\'is consider it fard kifaya, others like Ibn Taymiyya fard \'ayn. All agree on its immense merit (27 times greater than individual prayer).',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '018-salat-jamaa',
    },
    points: 10,
    tags: ['salat', 'jamaa', 'fiqh-khilaf'],
  },
  {
    id: 'salat-q007',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Vers quelle direction les musulmans se tournent-ils pour prier ?',
      ar: 'ما هي القبلة التي يتجه إليها المسلمون في الصلاة؟',
      en: 'In which direction do Muslims face when praying?',
    },
    options: [
      { id: 'a', text: { fr: 'Vers Jérusalem', ar: 'نحو القدس', en: 'Towards Jerusalem' } },
      { id: 'b', text: { fr: 'Vers La Mecque (la Ka\'ba)', ar: 'نحو مكة (الكعبة)', en: 'Towards Mecca (the Ka\'ba)' } },
      { id: 'c', text: { fr: 'Vers Médine', ar: 'نحو المدينة', en: 'Towards Medina' } },
      { id: 'd', text: { fr: 'N\'importe quelle direction', ar: 'أي اتجاه', en: 'Any direction' } },
    ],
    correctAnswer: 1, // La Mecque
    explanation: {
      fr: 'La Qibla est la direction de la Ka\'ba à La Mecque. C\'est une condition de validité de la prière (sauf cas d\'impossibilité). La Qibla a été changée de Jérusalem vers La Mecque environ 16 mois après l\'Hégire.',
      ar: 'القبلة هي اتجاه الكعبة في مكة. وهي شرط لصحة الصلاة (إلا في حالة العجز). تم تحويل القبلة من القدس إلى مكة بعد حوالي ١٦ شهراً من الهجرة.',
      en: 'The Qibla is the direction of the Ka\'ba in Mecca. It is a condition for prayer validity (except when impossible). The Qibla was changed from Jerusalem to Mecca about 16 months after the Hijra.',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '012-conditions-salat',
    },
    points: 10,
    tags: ['salat', 'qibla', 'conditions'],
  },

  // --- Questions Moyennes (8) ---
  {
    id: 'salat-q008',
    type: 'multiple',
    difficulty: 'medium',
    question: {
      fr: 'Quels sont les piliers (arkan) de la prière ? (Plusieurs réponses)',
      ar: 'ما هي أركان الصلاة؟ (إجابات متعددة)',
      en: 'What are the pillars (arkan) of prayer? (Multiple answers)',
    },
    options: [
      { id: 'a', text: { fr: 'Le Takbir d\'entrée (Ihram)', ar: 'تكبيرة الإحرام', en: 'The opening Takbir (Ihram)' } },
      { id: 'b', text: { fr: 'La récitation de la Fatiha', ar: 'قراءة الفاتحة', en: 'Recitation of Al-Fatiha' } },
      { id: 'c', text: { fr: 'Le premier Tashahhud', ar: 'التشهد الأول', en: 'The first Tashahhud' } },
      { id: 'd', text: { fr: 'Le Ruku\' (inclinaison)', ar: 'الركوع', en: 'The Ruku\' (bowing)' } },
      { id: 'e', text: { fr: 'La Sujud (prosternation)', ar: 'السجود', en: 'The Sujud (prostration)' } },
    ],
    correctAnswer: [0, 1, 3, 4], // a, b, d, e (pas le premier tashahhud qui est wajib)
    explanation: {
      fr: 'Les piliers incluent le Takbir al-Ihram, la Fatiha, le Ruku\', le Sujud, et d\'autres. Le premier Tashahhud est une obligation (wajib), non un pilier — si on l\'oublie, on fait la prosternation de l\'oubli.',
      ar: 'أركان الصلاة تشمل تكبيرة الإحرام والفاتحة والركوع والسجود وغيرها. التشهد الأول واجب وليس ركناً — إذا نُسي يُسجد للسهو.',
      en: 'Pillars include Takbir al-Ihram, Al-Fatiha, Ruku\', Sujud, and others. The first Tashahhud is an obligation (wajib), not a pillar — if forgotten, one performs prostration of forgetfulness.',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '013-piliers-salat',
    },
    points: 15,
    tags: ['salat', 'piliers', 'arkan'],
  },
  {
    id: 'salat-q009',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelle est la différence entre un pilier (rukn) et une obligation (wajib) de la prière ?',
      ar: 'ما الفرق بين الركن والواجب في الصلاة؟',
      en: 'What is the difference between a pillar (rukn) and an obligation (wajib) of prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'Aucune différence', ar: 'لا فرق', en: 'No difference' } },
      { id: 'b', text: { fr: 'Le pilier ne peut pas être compensé, l\'obligation peut être compensée par la prosternation de l\'oubli', ar: 'الركن لا يُجبر، والواجب يُجبر بسجود السهو', en: 'A pillar cannot be compensated, an obligation can be compensated by prostration of forgetfulness' } },
      { id: 'c', text: { fr: 'L\'obligation est plus importante que le pilier', ar: 'الواجب أهم من الركن', en: 'An obligation is more important than a pillar' } },
      { id: 'd', text: { fr: 'Le pilier est optionnel', ar: 'الركن اختياري', en: 'A pillar is optional' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Un pilier (rukn) est essentiel : s\'il est omis, la prière est invalide. Une obligation (wajib) est importante mais peut être compensée par la prosternation de l\'oubli (sujud al-sahw) si on l\'oublie.',
      ar: 'الركن أساسي: إذا تُرك بطلت الصلاة. الواجب مهم لكن يمكن جبره بسجود السهو إذا نُسي.',
      en: 'A pillar (rukn) is essential: if omitted, prayer is invalid. An obligation (wajib) is important but can be compensated by prostration of forgetfulness (sujud al-sahw) if forgotten.',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '014-obligations-salat',
    },
    points: 15,
    tags: ['salat', 'rukn', 'wajib', 'difference'],
  },
  {
    id: 'salat-q010',
    type: 'order',
    difficulty: 'medium',
    question: {
      fr: 'Remettez dans l\'ordre les mouvements d\'une rak\'a complète :',
      ar: 'رتب حركات الركعة الكاملة:',
      en: 'Put in order the movements of a complete rak\'a:',
    },
    orderItems: [
      { fr: 'Position debout et récitation de la Fatiha', ar: 'القيام وقراءة الفاتحة', en: 'Standing and reciting Al-Fatiha' },
      { fr: 'Inclinaison (Ruku\')', ar: 'الركوع', en: 'Bowing (Ruku\')' },
      { fr: 'Redressement du Ruku\'', ar: 'الاعتدال من الركوع', en: 'Rising from Ruku\'' },
      { fr: 'Première prosternation (Sujud)', ar: 'السجدة الأولى', en: 'First prostration (Sujud)' },
      { fr: 'Position assise entre les deux prosternations', ar: 'الجلوس بين السجدتين', en: 'Sitting between the two prostrations' },
      { fr: 'Seconde prosternation', ar: 'السجدة الثانية', en: 'Second prostration' },
    ],
    correctAnswer: [0, 1, 2, 3, 4, 5], // Déjà dans le bon ordre
    explanation: {
      fr: 'L\'ordre correct est : 1) Qiyam + Fatiha, 2) Ruku\', 3) Redressement, 4) Premier Sujud, 5) Jalsah (assis), 6) Second Sujud. L\'ordre est un pilier de la prière.',
      ar: 'الترتيب الصحيح: ١) القيام والفاتحة، ٢) الركوع، ٣) الاعتدال، ٤) السجدة الأولى، ٥) الجلسة، ٦) السجدة الثانية. الترتيب ركن من أركان الصلاة.',
      en: 'The correct order is: 1) Qiyam + Fatiha, 2) Ruku\', 3) Rising, 4) First Sujud, 5) Jalsah (sitting), 6) Second Sujud. The order is a pillar of prayer.',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '013-piliers-salat',
    },
    points: 20,
    tags: ['salat', 'piliers', 'ordre', 'raka'],
  },
  {
    id: 'salat-q011',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Que doit faire celui qui oublie le premier Tashahhud et se relève pour la troisième rak\'a ?',
      ar: 'ماذا يفعل من نسي التشهد الأول وقام للركعة الثالثة؟',
      en: 'What should one do if they forget the first Tashahhud and stand up for the third rak\'a?',
    },
    options: [
      { id: 'a', text: { fr: 'Recommencer la prière', ar: 'إعادة الصلاة', en: 'Restart the prayer' } },
      { id: 'b', text: { fr: 'Continuer et faire le Sujud al-Sahw avant le salam', ar: 'الاستمرار وسجود السهو قبل السلام', en: 'Continue and perform Sujud al-Sahw before the salam' } },
      { id: 'c', text: { fr: 'Revenir s\'asseoir immédiatement', ar: 'العودة للجلوس فوراً', en: 'Return to sitting immediately' } },
      { id: 'd', text: { fr: 'Rien, la prière est valide', ar: 'لا شيء، الصلاة صحيحة', en: 'Nothing, the prayer is valid' } },
    ],
    correctAnswer: 1, // Continuer et Sujud al-Sahw
    explanation: {
      fr: 'S\'il s\'est complètement relevé, il ne revient pas mais continue sa prière, puis fait le Sujud al-Sahw avant le salam. S\'il ne s\'est pas encore complètement relevé, il peut revenir.',
      ar: 'إذا استتم قائماً لا يرجع بل يستمر في صلاته ثم يسجد للسهو قبل السلام. أما إذا لم يستتم قائماً فيجوز له الرجوع.',
      en: 'If he has fully stood up, he does not return but continues his prayer, then performs Sujud al-Sahw before the salam. If he has not yet fully stood, he may return.',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '021-sujud-sahw',
    },
    points: 15,
    tags: ['salat', 'sujud-sahw', 'tashahhud', 'oubli'],
  },
  {
    id: 'salat-q012',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Combien de rak\'at comporte la prière du Witr au minimum ?',
      ar: 'ما أقل عدد ركعات صلاة الوتر؟',
      en: 'What is the minimum number of rak\'at for Witr prayer?',
    },
    options: [
      { id: 'a', text: { fr: '1 rak\'a', ar: 'ركعة واحدة', en: '1 rak\'a' } },
      { id: 'b', text: { fr: '2 rak\'at', ar: 'ركعتان', en: '2 rak\'at' } },
      { id: 'c', text: { fr: '3 rak\'at', ar: '٣ ركعات', en: '3 rak\'at' } },
      { id: 'd', text: { fr: '5 rak\'at', ar: '٥ ركعات', en: '5 rak\'at' } },
    ],
    correctAnswer: 0, // 1 rak'a
    explanation: {
      fr: 'Le minimum du Witr est 1 rak\'a. Le Prophète ﷺ a dit : « Le Witr est une rak\'a à la fin de la nuit. » [Muslim 752]. On peut aussi prier 3, 5, 7, 9 ou 11 rak\'at.',
      ar: 'أقل الوتر ركعة واحدة. قال النبي ﷺ: «الوتر ركعة من آخر الليل» [مسلم ٧٥٢]. ويجوز صلاته ٣ أو ٥ أو ٧ أو ٩ أو ١١ ركعة.',
      en: 'The minimum Witr is 1 rak\'a. The Prophet ﷺ said: "Witr is one rak\'a at the end of the night." [Muslim 752]. One can also pray 3, 5, 7, 9, or 11 rak\'at.',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '024-salat-witr',
    },
    points: 15,
    tags: ['salat', 'witr', 'nawafil'],
  },
  {
    id: 'salat-q013',
    type: 'match',
    difficulty: 'medium',
    question: {
      fr: 'Associez chaque prière à son nombre de rak\'at obligatoires :',
      ar: 'اربط كل صلاة بعدد ركعاتها الفرض:',
      en: 'Match each prayer with its obligatory rak\'at count:',
    },
    matchPairs: [
      { id: '1', left: { fr: 'Fajr', ar: 'الفجر', en: 'Fajr' }, right: { fr: '2', ar: '٢', en: '2' } },
      { id: '2', left: { fr: 'Dhuhr', ar: 'الظهر', en: 'Dhuhr' }, right: { fr: '4', ar: '٤', en: '4' } },
      { id: '3', left: { fr: 'Maghrib', ar: 'المغرب', en: 'Maghrib' }, right: { fr: '3', ar: '٣', en: '3' } },
    ],
    correctAnswer: [['1', '1'], ['2', '2'], ['3', '3']],
    explanation: {
      fr: 'Fajr = 2, Dhuhr = 4, Asr = 4, Maghrib = 3, Isha = 4. Au total : 17 rak\'at obligatoires par jour.',
      ar: 'الفجر = ٢، الظهر = ٤، العصر = ٤، المغرب = ٣، العشاء = ٤. المجموع: ١٧ ركعة فرض يومياً.',
      en: 'Fajr = 2, Dhuhr = 4, Asr = 4, Maghrib = 3, Isha = 4. Total: 17 obligatory rak\'at per day.',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '011-intro-salat',
    },
    points: 15,
    tags: ['salat', 'rakat', 'base'],
  },
  {
    id: 'salat-q014',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qui peut conduire la prière comme imam parmi les suivants ?',
      ar: 'من يصلح إماماً للصلاة من الآتي؟',
      en: 'Who among the following can lead the prayer as imam?',
    },
    options: [
      { id: 'a', text: { fr: 'Un enfant non pubère qui sait lire le Coran (pour prière surérogatoire)', ar: 'طفل غير بالغ يحسن قراءة القرآن (للنافلة)', en: 'A non-pubescent child who can read Quran (for voluntary prayer)' } },
      { id: 'b', text: { fr: 'Une personne qui ne parle pas arabe mais connaît la Fatiha', ar: 'شخص لا يتكلم العربية لكنه يحفظ الفاتحة', en: 'A person who doesn\'t speak Arabic but knows Al-Fatiha' } },
      { id: 'c', text: { fr: 'Un voyageur dirigeant des résidents', ar: 'مسافر يؤم مقيمين', en: 'A traveler leading residents' } },
      { id: 'd', text: { fr: 'Toutes les réponses sont possibles', ar: 'جميع الإجابات صحيحة', en: 'All answers are possible' } },
    ],
    correctAnswer: 3, // Toutes sont possibles
    explanation: {
      fr: 'Toutes ces situations sont permises : un enfant peut diriger une prière surérogatoire, un non-arabophone qui connaît les formules requises peut être imam, et un voyageur peut diriger des résidents (qui complètent ensuite leur prière).',
      ar: 'جميع هذه الحالات جائزة: يجوز للطفل إمامة النافلة، ويجوز لغير العربي إذا يحسن الفاتحة، ويجوز للمسافر إمامة المقيمين (يكملون صلاتهم بعده).',
      en: 'All these situations are allowed: a child can lead voluntary prayer, a non-Arabic speaker who knows the required formulas can be imam, and a traveler can lead residents (who then complete their prayer).',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '019-conditions-imam',
    },
    points: 15,
    tags: ['salat', 'imam', 'jamaa'],
  },
  {
    id: 'salat-q015',
    type: 'boolean',
    difficulty: 'medium',
    question: {
      fr: 'Le voyageur peut raccourcir (qasr) les prières de 4 rak\'at à 2 rak\'at.',
      ar: 'يجوز للمسافر قصر الصلوات الرباعية إلى ركعتين.',
      en: 'A traveler can shorten (qasr) 4 rak\'at prayers to 2 rak\'at.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'Le raccourcissement (qasr) est une facilité pour le voyageur. Dhuhr, Asr et Isha passent de 4 à 2 rak\'at. Fajr (2) et Maghrib (3) ne changent pas. Allah dit : « Si vous voyagez, nulle faute à vous de raccourcir la prière. » [4:101]',
      ar: 'القصر رخصة للمسافر. تصبح الظهر والعصر والعشاء ركعتين بدلاً من أربع. الفجر (٢) والمغرب (٣) لا يتغيران. قال تعالى: «وَإِذَا ضَرَبْتُمْ فِي الْأَرْضِ فَلَيْسَ عَلَيْكُمْ جُنَاحٌ أَن تَقْصُرُوا مِنَ الصَّلَاةِ» [٤:١٠١]',
      en: 'Shortening (qasr) is a concession for travelers. Dhuhr, Asr and Isha are reduced from 4 to 2 rak\'at. Fajr (2) and Maghrib (3) do not change. Allah says: "When you travel, there is no blame on you if you shorten the prayer." [4:101]',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '027-salat-voyage',
    },
    points: 15,
    tags: ['salat', 'voyage', 'qasr'],
  },

  // --- Questions Difficiles (5) ---
  {
    id: 'salat-q016',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Selon le hadith du « mal priant » (Hadith al-Musi\' fi Salatihi), quel élément a été spécifiquement mentionné comme obligatoire ?',
      ar: 'حسب حديث المسيء صلاته، ما الذي ذُكر بشكل خاص كواجب؟',
      en: 'According to the hadith of the "one who prayed badly" (Hadith al-Musi\' fi Salatihi), what was specifically mentioned as obligatory?',
    },
    options: [
      { id: 'a', text: { fr: 'La récitation du Tashahhud', ar: 'قراءة التشهد', en: 'Reciting the Tashahhud' } },
      { id: 'b', text: { fr: 'La Tuma\'nina (quiétude/immobilité) dans chaque position', ar: 'الطمأنينة في كل ركن', en: 'Tuma\'nina (tranquility/stillness) in each position' } },
      { id: 'c', text: { fr: 'La récitation d\'une sourate après la Fatiha', ar: 'قراءة سورة بعد الفاتحة', en: 'Reciting a surah after Al-Fatiha' } },
      { id: 'd', text: { fr: 'Le Qunut dans le Witr', ar: 'القنوت في الوتر', en: 'Qunut in Witr' } },
    ],
    correctAnswer: 1, // La Tuma'nina
    explanation: {
      fr: 'Dans ce hadith célèbre [Bukhari 757], le Prophète ﷺ a enseigné à un homme qui priait vite qu\'il devait observer la Tuma\'nina (quiétude, immobilité) dans chaque position : debout, incliné, prosterné. C\'est un pilier de la prière.',
      ar: 'في هذا الحديث الشهير [البخاري ٧٥٧]، علّم النبي ﷺ رجلاً كان يسرع في صلاته أنه يجب الطمأنينة في كل ركن: قائماً وراكعاً وساجداً. وهي ركن من أركان الصلاة.',
      en: 'In this famous hadith [Bukhari 757], the Prophet ﷺ taught a man who prayed hastily that he must observe Tuma\'nina (stillness) in each position: standing, bowing, prostrating. It is a pillar of prayer.',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '013-piliers-salat',
    },
    points: 20,
    tags: ['salat', 'tumanina', 'hadith', 'piliers'],
  },
  {
    id: 'salat-q017',
    type: 'multiple',
    difficulty: 'hard',
    question: {
      fr: 'Quels sont les annulatifs (mubtilat) de la prière ? (Plusieurs réponses)',
      ar: 'ما هي مبطلات الصلاة؟ (إجابات متعددة)',
      en: 'What invalidates (mubtilat) the prayer? (Multiple answers)',
    },
    options: [
      { id: 'a', text: { fr: 'Parler volontairement de choses étrangères à la prière', ar: 'الكلام العمد بغير ذكر الصلاة', en: 'Speaking intentionally about non-prayer matters' } },
      { id: 'b', text: { fr: 'Manger ou boire intentionnellement', ar: 'الأكل أو الشرب عمداً', en: 'Eating or drinking intentionally' } },
      { id: 'c', text: { fr: 'Tousser involontairement', ar: 'السعال غير المتعمد', en: 'Coughing involuntarily' } },
      { id: 'd', text: { fr: 'Rire aux éclats (qahqaha)', ar: 'القهقهة', en: 'Laughing out loud (qahqaha)' } },
      { id: 'e', text: { fr: 'Passer devant le prieur sans sutra', ar: 'المرور أمام المصلي بدون سترة', en: 'Passing in front of the one praying without sutra' } },
    ],
    correctAnswer: [0, 1, 3], // a, b, d (pas c ni e)
    explanation: {
      fr: 'Parler, manger/boire intentionnellement, et rire aux éclats annulent la prière. Tousser involontairement ne l\'annule pas. Le passage devant le prieur est interdit mais n\'annule pas la prière du prieur (selon la majorité).',
      ar: 'الكلام والأكل والشرب عمداً والقهقهة تبطل الصلاة. السعال غير المتعمد لا يبطلها. المرور أمام المصلي حرام لكنه لا يبطل صلاة المصلي (عند الجمهور).',
      en: 'Speaking, eating/drinking intentionally, and laughing out loud invalidate prayer. Involuntary coughing does not. Passing in front is prohibited but does not invalidate the prayer of the one praying (according to the majority).',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '016-annulatifs-salat',
    },
    points: 20,
    tags: ['salat', 'mubtilat', 'annulatifs'],
  },
  {
    id: 'salat-q018',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Si quelqu\'un doute avoir prié 3 ou 4 rak\'at, que doit-il faire ?',
      ar: 'إذا شك المصلي هل صلى ٣ أم ٤ ركعات، ماذا يفعل؟',
      en: 'If someone doubts whether they prayed 3 or 4 rak\'at, what should they do?',
    },
    options: [
      { id: 'a', text: { fr: 'Recommencer la prière', ar: 'إعادة الصلاة', en: 'Restart the prayer' } },
      { id: 'b', text: { fr: 'Se baser sur le nombre le plus élevé (4) et faire sujud al-sahw', ar: 'البناء على الأكثر (٤) والسجود للسهو', en: 'Base on the higher number (4) and do sujud al-sahw' } },
      { id: 'c', text: { fr: 'Se baser sur le nombre le plus bas (3), compléter et faire sujud al-sahw', ar: 'البناء على الأقل (٣) والإتمام والسجود للسهو', en: 'Base on the lower number (3), complete and do sujud al-sahw' } },
      { id: 'd', text: { fr: 'Continuer sans rien faire de plus', ar: 'الاستمرار دون شيء', en: 'Continue without doing anything more' } },
    ],
    correctAnswer: 2, // Se baser sur le minimum (yaqin)
    explanation: {
      fr: 'On se base sur le certain (yaqin), c\'est-à-dire le nombre minimum dont on est sûr. Le Prophète ﷺ a dit : « S\'il doute dans sa prière, qu\'il se base sur ce dont il est certain. » [Muslim 571]. Il prie donc la 4ème puis fait sujud al-sahw.',
      ar: 'يبني على اليقين وهو الأقل الذي يتأكد منه. قال النبي ﷺ: «إذا شك أحدكم في صلاته فليتحر الصواب» [مسلم ٥٧١]. فيصلي الركعة الرابعة ثم يسجد للسهو.',
      en: 'One bases on certainty (yaqin), meaning the minimum number one is sure of. The Prophet ﷺ said: "If one of you doubts in his prayer, let him seek what is correct." [Muslim 571]. So he prays the 4th rak\'a then performs sujud al-sahw.',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '021-sujud-sahw',
    },
    points: 20,
    tags: ['salat', 'doute', 'sujud-sahw', 'yaqin'],
  },
  {
    id: 'salat-q019',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quand le Sujud al-Sahw se fait-il APRÈS le salam (selon l\'école hanbalite) ?',
      ar: 'متى يكون سجود السهو بعد السلام (عند الحنابلة)؟',
      en: 'When is Sujud al-Sahw done AFTER the salam (according to the Hanbali school)?',
    },
    options: [
      { id: 'a', text: { fr: 'En cas d\'ajout (زيادة) dans la prière', ar: 'في حالة الزيادة في الصلاة', en: 'In case of addition (ziyada) in the prayer' } },
      { id: 'b', text: { fr: 'En cas d\'omission d\'un pilier', ar: 'في حالة ترك ركن', en: 'In case of omitting a pillar' } },
      { id: 'c', text: { fr: 'Toujours', ar: 'دائماً', en: 'Always' } },
      { id: 'd', text: { fr: 'Jamais, c\'est toujours avant', ar: 'أبداً، دائماً قبل السلام', en: 'Never, it\'s always before' } },
    ],
    correctAnswer: 0, // En cas d'ajout
    explanation: {
      fr: 'Selon les hanbalites : en cas d\'ajout (ex: 5 rak\'at au lieu de 4), on fait sujud après le salam. En cas d\'omission, on le fait avant le salam. C\'est basé sur différentes pratiques du Prophète ﷺ. Les malikites inversent cette règle.',
      ar: 'عند الحنابلة: في حالة الزيادة (مثل: ٥ ركعات بدل ٤) يسجد بعد السلام. في حالة النقص يسجد قبله. وهذا مبني على أحاديث مختلفة. والمالكية يعكسون هذه القاعدة.',
      en: 'According to Hanbalis: in case of addition (e.g., 5 rak\'at instead of 4), one prostrates after salam. In case of omission, before salam. This is based on different practices of the Prophet ﷺ. Malikis reverse this rule.',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '021-sujud-sahw',
    },
    points: 20,
    tags: ['salat', 'sujud-sahw', 'hanbali', 'fiqh-compare'],
  },
  {
    id: 'salat-q020',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Un retardataire (masbuq) arrive alors que l\'imam est en ruku\'. Que compte-t-il ?',
      ar: 'مسبوق أدرك الإمام في الركوع، ماذا يُحسب له؟',
      en: 'A latecomer (masbuq) arrives while the imam is in ruku\'. What does he count?',
    },
    options: [
      { id: 'a', text: { fr: 'Il a raté la rak\'a complète', ar: 'فاتته الركعة كاملة', en: 'He missed the complete rak\'a' } },
      { id: 'b', text: { fr: 'Il a attrapé la rak\'a s\'il fait le ruku\' avec l\'imam', ar: 'أدرك الركعة إذا ركع مع الإمام', en: 'He caught the rak\'a if he bows with the imam' } },
      { id: 'c', text: { fr: 'Il doit attendre la rak\'a suivante', ar: 'ينتظر الركعة التالية', en: 'He must wait for the next rak\'a' } },
      { id: 'd', text: { fr: 'Cela dépend s\'il a récité la Fatiha', ar: 'يعتمد على قراءته الفاتحة', en: 'It depends on whether he recited Al-Fatiha' } },
    ],
    correctAnswer: 1, // Il attrape la rak'a
    explanation: {
      fr: 'Selon la majorité des savants, celui qui attrape le ruku\' avec l\'imam a attrapé la rak\'a complète, basé sur le hadith : « Celui qui attrape le ruku\', a attrapé la rak\'a. » [Abu Dawud, hasan]. La Fatiha tombe pour lui car il est ma\'mum.',
      ar: 'عند جمهور العلماء، من أدرك الركوع مع الإمام فقد أدرك الركعة، بناءً على الحديث: «من أدرك الركوع فقد أدرك الركعة» [أبو داود، حسن]. وتسقط عنه الفاتحة لأنه مأموم.',
      en: 'According to the majority of scholars, whoever catches the ruku\' with the imam has caught the complete rak\'a, based on the hadith: "Whoever catches the ruku\' has caught the rak\'a." [Abu Dawud, hasan]. Al-Fatiha is waived for him as a follower.',
    },
    reference: {
      courseSlug: 'fiqh',
      lessonId: '020-suivre-imam',
    },
    points: 20,
    tags: ['salat', 'masbuq', 'jamaa', 'ruku'],
  },
];

// ============================================
// Configuration du Quiz
// ============================================

export const quizSalatModule: Quiz = {
  id: 'quiz-fiqh-salat-module',
  type: 'module',
  courseSlug: 'fiqh',
  moduleId: 'salat',
  title: {
    fr: 'Quiz du Module Salat',
    ar: 'اختبار وحدة الصلاة',
    en: 'Salat Module Quiz',
  },
  description: {
    fr: 'Testez vos connaissances sur la prière : conditions, piliers, obligations, sunnas, annulatifs et cas particuliers.',
    ar: 'اختبر معلوماتك عن الصلاة: شروطها وأركانها وواجباتها وسننها ومبطلاتها والحالات الخاصة.',
    en: 'Test your knowledge on prayer: conditions, pillars, obligations, sunnas, invalidators and special cases.',
  },
  instructions: {
    fr: 'Ce quiz contient 20 questions de difficulté variée. Lisez chaque question attentivement. Vous avez le droit à 2 tentatives. Bonne chance !',
    ar: 'يحتوي هذا الاختبار على ٢٠ سؤالاً متفاوتة الصعوبة. اقرأ كل سؤال بعناية. لديك محاولتان. بالتوفيق!',
    en: 'This quiz contains 20 questions of varying difficulty. Read each question carefully. You have 2 attempts. Good luck!',
  },
  level: 'beginner',
  duration: 25, // minutes
  passingScore: 70,
  maxAttempts: 2,
  shuffleQuestions: true,
  shuffleOptions: true,
  showExplanation: 'after_submit',
  showCorrectAnswer: true,
  questions,
  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: '1.0.0',
};

export default quizSalatModule;
