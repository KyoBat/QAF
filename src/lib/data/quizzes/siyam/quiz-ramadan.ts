/**
 * Quiz du Jeûne (Siyam) — Ramadan
 * 
 * Ce quiz couvre les règles du jeûne du mois de Ramadan :
 * conditions, piliers, annulatifs, dispenses.
 * 
 * Leçons couvertes : 001-011
 * Niveau : Débutant
 * Questions : 15
 */

import { Quiz, Question } from '../types';

const questions: Question[] = [
  // --- Questions Faciles (5) ---
  {
    id: 'siyam-q001',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quel mois est obligatoire de jeûner pour les musulmans ?',
      ar: 'أي شهر يجب على المسلمين صيامه؟',
      en: 'Which month is obligatory to fast for Muslims?',
    },
    options: [
      { id: 'a', text: { fr: 'Shaban', ar: 'شعبان', en: 'Shaban' } },
      { id: 'b', text: { fr: 'Ramadan', ar: 'رمضان', en: 'Ramadan' } },
      { id: 'c', text: { fr: 'Muharram', ar: 'محرم', en: 'Muharram' } },
      { id: 'd', text: { fr: 'Dhul Hijja', ar: 'ذو الحجة', en: 'Dhul Hijja' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le jeûne du mois de Ramadan est le 4ème pilier de l\'Islam. Allah dit : « Ô vous qui croyez ! Le jeûne vous est prescrit... le mois de Ramadan » [2:183-185].',
      ar: 'صيام رمضان هو الركن الرابع من أركان الإسلام. قال تعالى: {يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ... شَهْرُ رَمَضَانَ} [البقرة:183-185].',
      en: 'Fasting Ramadan is the 4th pillar of Islam. Allah says: "O you who believe! Fasting is prescribed for you... the month of Ramadan" [2:183-185].',
    },
    reference: {
      courseSlug: 'fiqh-siyam',
      lessonId: '001-introduction-siyam',
    },
    points: 10,
    tags: ['siyam', 'ramadan', 'piliers'],
  },
  {
    id: 'siyam-q002',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'À quel moment commence le jeûne quotidien ?',
      ar: 'متى يبدأ الصيام اليومي؟',
      en: 'When does the daily fast begin?',
    },
    options: [
      { id: 'a', text: { fr: 'Au coucher du soleil', ar: 'عند غروب الشمس', en: 'At sunset' } },
      { id: 'b', text: { fr: 'À l\'aube (Fajr)', ar: 'عند الفجر', en: 'At dawn (Fajr)' } },
      { id: 'c', text: { fr: 'À midi', ar: 'عند الظهر', en: 'At noon' } },
      { id: 'd', text: { fr: 'Après Isha', ar: 'بعد العشاء', en: 'After Isha' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le jeûne commence à l\'aube (Fajr) et se termine au coucher du soleil (Maghrib). Allah dit : « Mangez et buvez jusqu\'à ce que se distingue le fil blanc du fil noir de l\'aube » [2:187].',
      ar: 'يبدأ الصيام من الفجر وينتهي عند غروب الشمس (المغرب). قال تعالى: {وَكُلُوا وَاشْرَبُوا حَتَّىٰ يَتَبَيَّنَ لَكُمُ الْخَيْطُ الْأَبْيَضُ مِنَ الْخَيْطِ الْأَسْوَدِ مِنَ الْفَجْرِ} [البقرة:187].',
      en: 'Fasting begins at dawn (Fajr) and ends at sunset (Maghrib). Allah says: "Eat and drink until the white thread becomes distinct from the black thread of dawn" [2:187].',
    },
    reference: {
      courseSlug: 'fiqh-siyam',
      lessonId: '002-horaires-siyam',
    },
    points: 10,
    tags: ['siyam', 'fajr', 'horaires'],
  },
  {
    id: 'siyam-q003',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'L\'intention (niyyah) est obligatoire pour le jeûne du Ramadan.',
      ar: 'النية واجبة لصيام رمضان.',
      en: 'The intention (niyyah) is obligatory for Ramadan fasting.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'L\'intention est un pilier du jeûne. Le Prophète ﷺ a dit : « Celui qui n\'a pas formé l\'intention de jeûner avant l\'aube n\'a pas de jeûne » [Abu Dawud, sahih].',
      ar: 'النية ركن من أركان الصيام. قال النبي ﷺ: «من لم يُبيِّت الصيام من الليل فلا صيام له» [أبو داود، صحيح].',
      en: 'The intention is a pillar of fasting. The Prophet ﷺ said: "Whoever does not intend to fast before dawn has no fast" [Abu Dawud, sahih].',
    },
    reference: {
      courseSlug: 'fiqh-siyam',
      lessonId: '003-piliers-siyam',
    },
    points: 10,
    tags: ['siyam', 'niyyah', 'piliers'],
  },
  {
    id: 'siyam-q004',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Comment s\'appelle le repas pris avant l\'aube pendant le Ramadan ?',
      ar: 'ما اسم الوجبة التي تُؤكل قبل الفجر في رمضان؟',
      en: 'What is the meal eaten before dawn during Ramadan called?',
    },
    options: [
      { id: 'a', text: { fr: 'Iftar', ar: 'الإفطار', en: 'Iftar' } },
      { id: 'b', text: { fr: 'Suhur', ar: 'السحور', en: 'Suhur' } },
      { id: 'c', text: { fr: 'Tarawih', ar: 'التراويح', en: 'Tarawih' } },
      { id: 'd', text: { fr: 'Qiyam', ar: 'القيام', en: 'Qiyam' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Suhur est le repas pré-aube, fortement recommandé. Le Prophète ﷺ a dit : « Prenez le suhur car il y a une bénédiction (baraka) » [Bukhari, Muslim].',
      ar: 'السحور هو وجبة ما قبل الفجر، وهو مستحب. قال النبي ﷺ: «تسحروا فإن في السحور بركة» [البخاري، مسلم].',
      en: 'Suhur is the pre-dawn meal, strongly recommended. The Prophet ﷺ said: "Take suhur for there is blessing (baraka) in it" [Bukhari, Muslim].',
    },
    reference: {
      courseSlug: 'fiqh-siyam',
      lessonId: '004-sunnas-siyam',
    },
    points: 10,
    tags: ['siyam', 'suhur', 'sunna'],
  },
  {
    id: 'siyam-q005',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'Le voyageur est autorisé à ne pas jeûner pendant le Ramadan.',
      ar: 'يُباح للمسافر الإفطار في رمضان.',
      en: 'The traveler is allowed not to fast during Ramadan.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'Le voyageur a une dispense. Allah dit : « Et quiconque est malade ou en voyage, alors un nombre égal d\'autres jours » [2:185]. Il peut choisir de jeûner ou rattraper plus tard.',
      ar: 'للمسافر رخصة. قال تعالى: {وَمَن كَانَ مَرِيضًا أَوْ عَلَىٰ سَفَرٍ فَعِدَّةٌ مِّنْ أَيَّامٍ أُخَرَ} [البقرة:185]. له الخيار بين الصيام أو القضاء لاحقاً.',
      en: 'The traveler has a dispensation. Allah says: "And whoever is ill or on a journey, then an equal number of other days" [2:185]. They may choose to fast or make up later.',
    },
    reference: {
      courseSlug: 'fiqh-siyam',
      lessonId: '006-dispenses-siyam',
    },
    points: 10,
    tags: ['siyam', 'voyage', 'dispense'],
  },

  // --- Questions Moyennes (6) ---
  {
    id: 'siyam-q006',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Lequel de ces actes N\'ANNULE PAS le jeûne ?',
      ar: 'أي من هذه الأفعال لا يُبطل الصيام؟',
      en: 'Which of these acts does NOT invalidate the fast?',
    },
    options: [
      { id: 'a', text: { fr: 'Manger volontairement', ar: 'الأكل عمداً', en: 'Eating intentionally' } },
      { id: 'b', text: { fr: 'Boire de l\'eau par oubli', ar: 'شرب الماء نسياناً', en: 'Drinking water by forgetfulness' } },
      { id: 'c', text: { fr: 'Vomir volontairement', ar: 'التقيؤ عمداً', en: 'Vomiting intentionally' } },
      { id: 'd', text: { fr: 'Relations intimes', ar: 'الجماع', en: 'Intimate relations' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Manger ou boire par oubli n\'annule pas le jeûne. Le Prophète ﷺ a dit : « S\'il mange ou boit par oubli, qu\'il complète son jeûne, car c\'est Allah qui l\'a nourri » [Bukhari, Muslim].',
      ar: 'الأكل أو الشرب نسياناً لا يبطل الصيام. قال النبي ﷺ: «إذا نسي فأكل وشرب فليتم صومه، فإنما أطعمه الله وسقاه» [البخاري، مسلم].',
      en: 'Eating or drinking by forgetfulness does not invalidate the fast. The Prophet ﷺ said: "If he forgets and eats or drinks, let him complete his fast, for Allah has fed him" [Bukhari, Muslim].',
    },
    reference: {
      courseSlug: 'fiqh-siyam',
      lessonId: '005-annulatifs-siyam',
    },
    points: 15,
    tags: ['siyam', 'annulatifs', 'oubli'],
  },
  {
    id: 'siyam-q007',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelle est l\'expiation (kaffara) pour avoir rompu le jeûne par relations intimes ?',
      ar: 'ما كفارة إفساد الصيام بالجماع؟',
      en: 'What is the expiation (kaffara) for breaking the fast through intimate relations?',
    },
    options: [
      { id: 'a', text: { fr: 'Jeûner un jour de plus', ar: 'صيام يوم إضافي', en: 'Fast one more day' } },
      { id: 'b', text: { fr: 'Affranchir un esclave, ou jeûner 2 mois, ou nourrir 60 pauvres', ar: 'عتق رقبة أو صيام شهرين أو إطعام 60 مسكيناً', en: 'Free a slave, or fast 2 months, or feed 60 poor' } },
      { id: 'c', text: { fr: 'Faire une aumône quelconque', ar: 'أي صدقة', en: 'Give any charity' } },
      { id: 'd', text: { fr: 'Pas d\'expiation requise', ar: 'لا كفارة', en: 'No expiation required' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La kaffara est sévère : affranchir un esclave (aujourd\'hui impossible), sinon jeûner 2 mois consécutifs, sinon nourrir 60 pauvres. C\'est le hadith de l\'homme qui a eu des relations en Ramadan [Bukhari, Muslim].',
      ar: 'الكفارة مغلظة: عتق رقبة (غير ممكن اليوم)، فإن لم يستطع فصيام شهرين متتابعين، فإن لم يستطع فإطعام 60 مسكيناً. هذا من حديث الرجل الذي جامع في رمضان [البخاري، مسلم].',
      en: 'The kaffara is severe: free a slave (now impossible), otherwise fast 2 consecutive months, otherwise feed 60 poor. This is from the hadith of the man who had relations in Ramadan [Bukhari, Muslim].',
    },
    reference: {
      courseSlug: 'fiqh-siyam',
      lessonId: '007-kaffara-siyam',
    },
    points: 15,
    tags: ['siyam', 'kaffara', 'expiation'],
  },
  {
    id: 'siyam-q008',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelle est la prière nocturne spécifique au mois de Ramadan ?',
      ar: 'ما هي الصلاة الليلية الخاصة بشهر رمضان؟',
      en: 'What is the night prayer specific to Ramadan?',
    },
    options: [
      { id: 'a', text: { fr: 'Salat al-Istikhara', ar: 'صلاة الاستخارة', en: 'Salat al-Istikhara' } },
      { id: 'b', text: { fr: 'Salat at-Tarawih', ar: 'صلاة التراويح', en: 'Salat at-Tarawih' } },
      { id: 'c', text: { fr: 'Salat al-Janaza', ar: 'صلاة الجنازة', en: 'Salat al-Janaza' } },
      { id: 'd', text: { fr: 'Salat al-Kusuf', ar: 'صلاة الكسوف', en: 'Salat al-Kusuf' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Tarawih est la prière nocturne de Ramadan, une sunna mu\'akkada. Le Prophète ﷺ a dit : « Celui qui prie le Ramadan avec foi et espoir de récompense, ses péchés passés seront pardonnés » [Bukhari].',
      ar: 'التراويح هي صلاة الليل في رمضان، وهي سنة مؤكدة. قال النبي ﷺ: «من قام رمضان إيماناً واحتساباً غُفر له ما تقدم من ذنبه» [البخاري].',
      en: 'Tarawih is the night prayer of Ramadan, a confirmed sunnah. The Prophet ﷺ said: "Whoever prays in Ramadan with faith and seeking reward, his past sins will be forgiven" [Bukhari].',
    },
    reference: {
      courseSlug: 'fiqh-siyam',
      lessonId: '008-tarawih',
    },
    points: 15,
    tags: ['siyam', 'tarawih', 'qiyam'],
  },
  {
    id: 'siyam-q009',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que Laylat al-Qadr ?',
      ar: 'ما هي ليلة القدر؟',
      en: 'What is Laylat al-Qadr?',
    },
    options: [
      { id: 'a', text: { fr: 'La première nuit de Ramadan', ar: 'أول ليلة في رمضان', en: 'The first night of Ramadan' } },
      { id: 'b', text: { fr: 'Une nuit meilleure que mille mois', ar: 'ليلة خير من ألف شهر', en: 'A night better than a thousand months' } },
      { id: 'c', text: { fr: 'La nuit de l\'Aïd', ar: 'ليلة العيد', en: 'The night of Eid' } },
      { id: 'd', text: { fr: 'La nuit du 15 Shaban', ar: 'ليلة النصف من شعبان', en: 'The night of 15th Shaban' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Laylat al-Qadr est dans les 10 dernières nuits de Ramadan, probablement les nuits impaires. Allah dit : « La nuit d\'al-Qadr est meilleure que mille mois » [97:3]. Le Coran y fut révélé.',
      ar: 'ليلة القدر في العشر الأواخر من رمضان، غالباً في الليالي الوترية. قال تعالى: {لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ} [القدر:3]. فيها أُنزل القرآن.',
      en: 'Laylat al-Qadr is in the last 10 nights of Ramadan, likely on odd nights. Allah says: "The Night of Decree is better than a thousand months" [97:3]. The Quran was revealed in it.',
    },
    reference: {
      courseSlug: 'fiqh-siyam',
      lessonId: '009-laylat-qadr',
    },
    points: 15,
    tags: ['siyam', 'laylat-qadr', 'ramadan'],
  },
  {
    id: 'siyam-q010',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Que doit faire une femme qui a ses menstrues pendant le Ramadan ?',
      ar: 'ماذا تفعل المرأة الحائض في رمضان؟',
      en: 'What should a woman with her period do during Ramadan?',
    },
    options: [
      { id: 'a', text: { fr: 'Continuer à jeûner', ar: 'تستمر في الصيام', en: 'Continue fasting' } },
      { id: 'b', text: { fr: 'Rompre et rattraper les jours après le Ramadan', ar: 'تفطر وتقضي الأيام بعد رمضان', en: 'Break fast and make up days after Ramadan' } },
      { id: 'c', text: { fr: 'Payer une compensation financière seulement', ar: 'تدفع فدية مالية فقط', en: 'Pay financial compensation only' } },
      { id: 'd', text: { fr: 'Le jeûne n\'est pas valide mais pas de rattrapage', ar: 'الصيام غير صحيح ولا قضاء', en: 'Fasting is invalid but no make-up' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La femme en menstrues ne jeûne pas (haram de jeûner), mais doit rattraper les jours manqués. Aisha (رضي الله عنها) a dit : « Nous devions rattraper le jeûne mais pas la prière » [Bukhari, Muslim].',
      ar: 'الحائض لا تصوم (يحرم عليها)، لكن تقضي الأيام الفائتة. قالت عائشة (رضي الله عنها): «كنا نُؤمر بقضاء الصوم ولا نُؤمر بقضاء الصلاة» [البخاري، مسلم].',
      en: 'A menstruating woman does not fast (haram to fast), but must make up the days. Aisha (رضي الله عنها) said: "We were commanded to make up fasting but not prayer" [Bukhari, Muslim].',
    },
    reference: {
      courseSlug: 'fiqh-siyam',
      lessonId: '006-dispenses-siyam',
    },
    points: 15,
    tags: ['siyam', 'hayd', 'femmes'],
  },
  {
    id: 'siyam-q011',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelle est la Zakat al-Fitr ?',
      ar: 'ما هي زكاة الفطر؟',
      en: 'What is Zakat al-Fitr?',
    },
    options: [
      { id: 'a', text: { fr: 'Un impôt annuel sur la richesse', ar: 'ضريبة سنوية على المال', en: 'An annual tax on wealth' } },
      { id: 'b', text: { fr: 'Une aumône obligatoire à la fin du Ramadan', ar: 'صدقة واجبة في نهاية رمضان', en: 'An obligatory charity at the end of Ramadan' } },
      { id: 'c', text: { fr: 'Un don volontaire', ar: 'تبرع طوعي', en: 'A voluntary donation' } },
      { id: 'd', text: { fr: 'Un sacrifice animal', ar: 'ذبيحة', en: 'An animal sacrifice' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Zakat al-Fitr est obligatoire avant la prière de l\'Aïd, un sa\' (≈2,5-3kg) de nourriture par personne. Elle purifie le jeûneur et aide les pauvres à célébrer l\'Aïd [Abu Dawud].',
      ar: 'زكاة الفطر واجبة قبل صلاة العيد، صاع (≈2,5-3 كغ) من الطعام عن كل شخص. تُطهر الصائم وتُعين الفقراء على الاحتفال بالعيد [أبو داود].',
      en: 'Zakat al-Fitr is obligatory before Eid prayer, a sa\' (≈2.5-3kg) of food per person. It purifies the fasting person and helps the poor celebrate Eid [Abu Dawud].',
    },
    reference: {
      courseSlug: 'fiqh-siyam',
      lessonId: '010-zakat-fitr',
    },
    points: 15,
    tags: ['siyam', 'zakat', 'fitr'],
  },

  // --- Questions Difficiles (4) ---
  {
    id: 'siyam-q012',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle est la règle pour une personne très âgée incapable de jeûner ?',
      ar: 'ما حكم الشيخ الكبير العاجز عن الصيام؟',
      en: 'What is the ruling for an elderly person unable to fast?',
    },
    options: [
      { id: 'a', text: { fr: 'Doit jeûner quand même', ar: 'يجب عليه الصيام', en: 'Must fast anyway' } },
      { id: 'b', text: { fr: 'Rien du tout', ar: 'لا شيء عليه', en: 'Nothing at all' } },
      { id: 'c', text: { fr: 'Nourrir un pauvre par jour manqué (fidya)', ar: 'إطعام مسكين عن كل يوم (فدية)', en: 'Feed a poor person for each day missed (fidya)' } },
      { id: 'd', text: { fr: 'Jeûner la moitié des jours', ar: 'صيام نصف الأيام', en: 'Fast half the days' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le très âgé ou le malade chronique qui ne peut pas jeûner ni rattraper paie la fidya : nourrir un pauvre par jour. Ibn Abbas a cité : « Pour ceux qui peuvent difficilement jeûner, une compensation : nourrir un pauvre » [2:184].',
      ar: 'الشيخ الكبير أو المريض المزمن الذي لا يستطيع الصيام ولا القضاء يدفع الفدية: إطعام مسكين عن كل يوم. قرأ ابن عباس: {وَعَلَى الَّذِينَ يُطِيقُونَهُ فِدْيَةٌ طَعَامُ مِسْكِينٍ} [البقرة:184].',
      en: 'The very elderly or chronically ill who cannot fast or make up pays fidya: feed a poor person per day. Ibn Abbas cited: "For those who can only fast with difficulty, a compensation: feeding a poor person" [2:184].',
    },
    reference: {
      courseSlug: 'fiqh-siyam',
      lessonId: '006-dispenses-siyam',
    },
    points: 20,
    tags: ['siyam', 'fidya', 'dispense'],
  },
  {
    id: 'siyam-q013',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Le jeûne des 6 jours de Shawwal après le Ramadan est :',
      ar: 'صيام الست من شوال بعد رمضان:',
      en: 'Fasting the 6 days of Shawwal after Ramadan is:',
    },
    options: [
      { id: 'a', text: { fr: 'Obligatoire', ar: 'واجب', en: 'Obligatory' } },
      { id: 'b', text: { fr: 'Interdit', ar: 'حرام', en: 'Forbidden' } },
      { id: 'c', text: { fr: 'Fortement recommandé (sunna mu\'akkada)', ar: 'سنة مؤكدة', en: 'Strongly recommended (sunna mu\'akkada)' } },
      { id: 'd', text: { fr: 'Makruh (détesté)', ar: 'مكروه', en: 'Makruh (disliked)' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Les 6 jours de Shawwal sont sunna. Le Prophète ﷺ a dit : « Celui qui jeûne le Ramadan puis le fait suivre de six jours de Shawwal, c\'est comme s\'il avait jeûné l\'année entière » [Muslim].',
      ar: 'الست من شوال سنة. قال النبي ﷺ: «من صام رمضان ثم أتبعه ستاً من شوال كان كصيام الدهر» [مسلم].',
      en: 'The 6 days of Shawwal are sunnah. The Prophet ﷺ said: "Whoever fasts Ramadan then follows it with six days of Shawwal, it is as if he fasted the entire year" [Muslim].',
    },
    reference: {
      courseSlug: 'fiqh-siyam',
      lessonId: '011-jeunes-sunna',
    },
    points: 20,
    tags: ['siyam', 'shawwal', 'sunna'],
  },
  {
    id: 'siyam-q014',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Que faire si on mange après l\'aube en pensant qu\'il fait encore nuit ?',
      ar: 'ماذا لو أكل بعد الفجر ظاناً أن الليل باقٍ؟',
      en: 'What if one eats after dawn thinking it is still night?',
    },
    options: [
      { id: 'a', text: { fr: 'Le jeûne est valide, pas de rattrapage', ar: 'الصوم صحيح ولا قضاء', en: 'Fast is valid, no make-up' } },
      { id: 'b', text: { fr: 'Doit rattraper ce jour (qada\')', ar: 'يجب قضاء هذا اليوم', en: 'Must make up this day (qada\')' } },
      { id: 'c', text: { fr: 'Doit payer kaffara', ar: 'يجب دفع الكفارة', en: 'Must pay kaffara' } },
      { id: 'd', text: { fr: 'Continuer comme si de rien', ar: 'يستمر كأن شيئاً لم يكن', en: 'Continue as if nothing happened' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Selon la majorité des savants, si on mange après l\'aube par erreur, on doit rattraper ce jour. L\'erreur excuse le péché mais n\'annule pas l\'obligation du rattrapage. C\'est par précaution pour le jeûne obligatoire.',
      ar: 'عند جمهور العلماء، إذا أكل بعد الفجر خطأً يجب قضاء هذا اليوم. الخطأ يعفي من الإثم لكن لا يُسقط وجوب القضاء. وهذا احتياطاً للصوم الواجب.',
      en: 'According to the majority of scholars, if one eats after dawn by mistake, they must make up this day. The mistake excuses the sin but does not cancel the obligation of make-up. This is out of precaution for obligatory fasting.',
    },
    reference: {
      courseSlug: 'fiqh-siyam',
      lessonId: '005-annulatifs-siyam',
    },
    points: 20,
    tags: ['siyam', 'erreur', 'qada'],
  },
  {
    id: 'siyam-q015',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quel est le meilleur moment pour rompre le jeûne (iftar) ?',
      ar: 'ما أفضل وقت للإفطار؟',
      en: 'What is the best time to break the fast (iftar)?',
    },
    options: [
      { id: 'a', text: { fr: 'Attendre 15 minutes après le coucher du soleil', ar: 'الانتظار 15 دقيقة بعد الغروب', en: 'Wait 15 minutes after sunset' } },
      { id: 'b', text: { fr: 'Dès le coucher du soleil (ta\'jil)', ar: 'فور غروب الشمس (التعجيل)', en: 'As soon as the sun sets (ta\'jil)' } },
      { id: 'c', text: { fr: 'Après la prière du Maghrib', ar: 'بعد صلاة المغرب', en: 'After Maghrib prayer' } },
      { id: 'd', text: { fr: 'Quand on a très faim', ar: 'عند الجوع الشديد', en: 'When very hungry' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Se hâter de rompre le jeûne (ta\'jil) est sunna. Le Prophète ﷺ a dit : « Les gens ne cesseront d\'être dans le bien tant qu\'ils se hâteront de rompre le jeûne » [Bukhari, Muslim].',
      ar: 'تعجيل الفطر سنة. قال النبي ﷺ: «لا يزال الناس بخير ما عجّلوا الفطر» [البخاري، مسلم].',
      en: 'Hastening to break the fast (ta\'jil) is sunnah. The Prophet ﷺ said: "People will remain in goodness as long as they hasten to break the fast" [Bukhari, Muslim].',
    },
    reference: {
      courseSlug: 'fiqh-siyam',
      lessonId: '004-sunnas-siyam',
    },
    points: 20,
    tags: ['siyam', 'iftar', 'sunna'],
  },
];

// ============================================
// Export du Quiz
// ============================================

export const quizSiyamRamadan: Quiz = {
  id: 'quiz-siyam-ramadan',
  type: 'module',
  courseSlug: 'fiqh-siyam',
  title: {
    fr: 'Quiz : Le Jeûne du Ramadan',
    ar: 'اختبار: صيام رمضان',
    en: 'Quiz: Ramadan Fasting',
  },
  description: {
    fr: 'Testez vos connaissances sur les règles du jeûne : conditions, annulatifs, dispenses et pratiques recommandées.',
    ar: 'اختبر معلوماتك عن أحكام الصيام: الشروط والمبطلات والرخص والسنن.',
    en: 'Test your knowledge of fasting rules: conditions, invalidators, dispensations, and recommended practices.',
  },
  instructions: {
    fr: 'Répondez à chaque question. Les explications vous aideront à mieux comprendre le fiqh du jeûne.',
    ar: 'أجب على كل سؤال. الشروحات ستساعدك على فهم فقه الصيام بشكل أفضل.',
    en: 'Answer each question. The explanations will help you better understand the fiqh of fasting.',
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
  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
};

export default quizSiyamRamadan;
