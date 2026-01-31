/**
 * Questions - Prières Spéciales (الصلوات الخاصة)
 * 
 * Couvre :
 * - Prière du Vendredi (صلاة الجمعة) : 5 questions
 * - Prière funéraire (صلاة الجنازة) : 5 questions
 * - Prières des fêtes (صلاة العيدين) : 4 questions
 * - Prière de l'éclipse (صلاة الكسوف) : 3 questions
 * - Prière pour la pluie (صلاة الاستسقاء) : 2 questions
 * - Prière du voyageur (صلاة المسافر) : 5 questions
 * - Prière du malade (صلاة المريض) : 3 questions
 * - Tarawih et prières de nuit : 3 questions
 * 
 * Total : 30 questions
 */

import { ExamQuestion } from '../types';

// ============================================
// PRIÈRE DU VENDREDI (صلاة الجمعة)
// ============================================

export const jumuaQuestions: ExamQuestion[] = [
  {
    id: 'salat-juma-001',
    question: {
      fr: 'La prière du vendredi (Jumu\'a) est-elle obligatoire pour tous les musulmans ?',
      ar: 'هل صلاة الجمعة واجبة على جميع المسلمين؟',
      en: 'Is the Friday prayer (Jumu\'a) obligatory for all Muslims?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, pour tous sans exception', ar: 'نعم، للجميع بلا استثناء', en: 'Yes, for everyone without exception' } },
      { id: 'b', text: { fr: 'Obligatoire pour les hommes adultes résidents, pas pour les femmes, enfants, voyageurs et malades', ar: 'واجبة على الرجال البالغين المقيمين، لا على النساء والأطفال والمسافرين والمرضى', en: 'Obligatory for adult resident men, not for women, children, travelers and sick' } },
      { id: 'c', text: { fr: 'Seulement recommandée (sunna)', ar: 'سنة مستحبة فقط', en: 'Only recommended (sunna)' } },
      { id: 'd', text: { fr: 'Obligatoire uniquement pour les imams', ar: 'واجبة على الأئمة فقط', en: 'Obligatory only for imams' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La Jumu\'a est fard \'ayn pour les hommes musulmans adultes, libres, résidents et en bonne santé. Les femmes peuvent y assister mais ce n\'est pas obligatoire pour elles.',
      ar: 'الجمعة فرض عين على الرجال المسلمين البالغين الأحرار المقيمين الأصحاء. للنساء الحضور لكنها ليست واجبة عليهن.',
      en: 'Jumu\'a is fard \'ayn for adult, free, resident, healthy Muslim men. Women may attend but it is not obligatory for them.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'juma',
  },
  {
    id: 'salat-juma-002',
    question: {
      fr: 'Combien de rakaat compte la prière du vendredi ?',
      ar: 'كم عدد ركعات صلاة الجمعة؟',
      en: 'How many rakaat does the Friday prayer have?',
    },
    options: [
      { id: 'a', text: { fr: '4 rakaat comme Dhuhr', ar: '4 ركعات كالظهر', en: '4 rakaat like Dhuhr' } },
      { id: 'b', text: { fr: '2 rakaat', ar: 'ركعتان', en: '2 rakaat' } },
      { id: 'c', text: { fr: '3 rakaat', ar: '3 ركعات', en: '3 rakaat' } },
      { id: 'd', text: { fr: '1 rakat avec un long sujud', ar: 'ركعة واحدة بسجود طويل', en: '1 rakat with long sujud' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La prière du vendredi comporte 2 rakaat précédées de deux khutbah (sermons). Elle remplace la prière de Dhuhr ce jour-là.',
      ar: 'صلاة الجمعة ركعتان تسبقهما خطبتان. وهي تحل محل صلاة الظهر في ذلك اليوم.',
      en: 'The Friday prayer has 2 rakaat preceded by two khutbah (sermons). It replaces Dhuhr prayer on that day.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'juma',
  },
  {
    id: 'salat-juma-003',
    question: {
      fr: 'Quel est le nombre minimum de personnes pour établir la Jumu\'a selon la majorité des savants ?',
      ar: 'ما أقل عدد لانعقاد الجمعة عند جمهور العلماء؟',
      en: 'What is the minimum number of people to establish Jumu\'a according to the majority of scholars?',
    },
    options: [
      { id: 'a', text: { fr: '2 personnes', ar: 'شخصان', en: '2 people' } },
      { id: 'b', text: { fr: '3 personnes', ar: '3 أشخاص', en: '3 people' } },
      { id: 'c', text: { fr: '12 personnes', ar: '12 شخصاً', en: '12 people' } },
      { id: 'd', text: { fr: '40 personnes', ar: '40 شخصاً', en: '40 people' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'La majorité (Shafi\'ites et Hanbalis) exigent 40 personnes. Les Malikites disent 12, les Hanafis 3 avec l\'imam. Il y a divergence.',
      ar: 'الجمهور (الشافعية والحنابلة) يشترطون 40. المالكية 12، والحنفية 3 مع الإمام. المسألة فيها خلاف.',
      en: 'Majority (Shafi\'is and Hanbalis) require 40. Malikis say 12, Hanafis 3 with imam. There is disagreement.',
    },
    points: 4,
    difficulty: 'hard',
    category: 'juma',
  },
  {
    id: 'salat-juma-004',
    question: {
      fr: 'Que doit faire celui qui arrive pendant la khutbah du vendredi ?',
      ar: 'ماذا يفعل من دخل أثناء خطبة الجمعة؟',
      en: 'What should one do when arriving during the Friday khutbah?',
    },
    options: [
      { id: 'a', text: { fr: 'S\'asseoir directement et écouter', ar: 'يجلس مباشرة ويستمع', en: 'Sit directly and listen' } },
      { id: 'b', text: { fr: 'Prier deux rakaat légères (tahiyyat al-masjid) puis s\'asseoir', ar: 'يصلي ركعتين خفيفتين (تحية المسجد) ثم يجلس', en: 'Pray two light rakaat (tahiyyat al-masjid) then sit' } },
      { id: 'c', text: { fr: 'Attendre dehors que la khutbah finisse', ar: 'ينتظر خارجاً حتى تنتهي الخطبة', en: 'Wait outside until khutbah ends' } },
      { id: 'd', text: { fr: 'Saluer les gens autour de lui', ar: 'يسلم على من حوله', en: 'Greet people around him' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a dit à celui qui s\'est assis sans prier : "Lève-toi et prie deux rakaat, et fais-les légères."',
      ar: 'قال النبي ﷺ لمن جلس دون أن يصلي: "قم فصل ركعتين وتجوز فيهما."',
      en: 'The Prophet ﷺ said to one who sat without praying: "Stand up and pray two rakaat, and make them light."',
    },
    points: 3,
    difficulty: 'medium',
    category: 'juma',
  },
  {
    id: 'salat-juma-005',
    question: {
      fr: 'Quelle est la règle concernant le fait de parler pendant la khutbah ?',
      ar: 'ما حكم الكلام أثناء الخطبة؟',
      en: 'What is the ruling on speaking during the khutbah?',
    },
    options: [
      { id: 'a', text: { fr: 'Permis à voix basse', ar: 'جائز بصوت منخفض', en: 'Allowed in a low voice' } },
      { id: 'b', text: { fr: 'Interdit (haram) et annule la récompense', ar: 'حرام ويُبطل الأجر', en: 'Forbidden (haram) and nullifies reward' } },
      { id: 'c', text: { fr: 'Makruh seulement', ar: 'مكروه فقط', en: 'Only makruh' } },
      { id: 'd', text: { fr: 'Permis si c\'est pour commander le bien', ar: 'جائز إذا كان للأمر بالمعروف', en: 'Allowed if for enjoining good' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Si tu dis à ton compagnon \'Tais-toi\' pendant que l\'imam prêche, tu as commis une futilité."',
      ar: 'قال النبي ﷺ: "إذا قلت لصاحبك أنصت والإمام يخطب فقد لغوت."',
      en: 'The Prophet ﷺ said: "If you tell your companion \'Be quiet\' while the imam is preaching, you have committed an idle act."',
    },
    points: 2,
    difficulty: 'easy',
    category: 'juma',
  },
];

// ============================================
// PRIÈRE FUNÉRAIRE (صلاة الجنازة)
// ============================================

export const janazaQuestions: ExamQuestion[] = [
  {
    id: 'salat-janaza-001',
    question: {
      fr: 'Quel est le statut juridique de la prière funéraire (salat al-janaza) ?',
      ar: 'ما حكم صلاة الجنازة؟',
      en: 'What is the legal status of the funeral prayer (salat al-janaza)?',
    },
    options: [
      { id: 'a', text: { fr: 'Obligatoire pour chaque musulman (fard \'ayn)', ar: 'فرض عين على كل مسلم', en: 'Obligatory for every Muslim (fard \'ayn)' } },
      { id: 'b', text: { fr: 'Obligation communautaire (fard kifaya)', ar: 'فرض كفاية', en: 'Communal obligation (fard kifaya)' } },
      { id: 'c', text: { fr: 'Sunna mu\'akkada', ar: 'سنة مؤكدة', en: 'Confirmed sunna' } },
      { id: 'd', text: { fr: 'Recommandée (mustahabb)', ar: 'مستحبة', en: 'Recommended (mustahabb)' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La prière funéraire est fard kifaya : si un groupe suffisant l\'accomplit, l\'obligation est levée pour les autres.',
      ar: 'صلاة الجنازة فرض كفاية: إذا قام بها من يكفي سقطت عن الباقين.',
      en: 'Funeral prayer is fard kifaya: if a sufficient group performs it, the obligation is lifted from others.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'janaza',
  },
  {
    id: 'salat-janaza-002',
    question: {
      fr: 'Combien de takbirat y a-t-il dans la prière funéraire ?',
      ar: 'كم عدد التكبيرات في صلاة الجنازة؟',
      en: 'How many takbirat are there in the funeral prayer?',
    },
    options: [
      { id: 'a', text: { fr: '2 takbirat', ar: 'تكبيرتان', en: '2 takbirat' } },
      { id: 'b', text: { fr: '3 takbirat', ar: '3 تكبيرات', en: '3 takbirat' } },
      { id: 'c', text: { fr: '4 takbirat', ar: '4 تكبيرات', en: '4 takbirat' } },
      { id: 'd', text: { fr: '5 takbirat', ar: '5 تكبيرات', en: '5 takbirat' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'La prière funéraire comporte 4 takbirat : après la 1ère on récite la Fatiha, après la 2ème les salutations sur le Prophète, après la 3ème l\'invocation pour le défunt, après la 4ème on fait le taslim.',
      ar: 'صلاة الجنازة 4 تكبيرات: بعد الأولى الفاتحة، بعد الثانية الصلاة على النبي، بعد الثالثة الدعاء للميت، بعد الرابعة التسليم.',
      en: 'Funeral prayer has 4 takbirat: after 1st recite Fatiha, after 2nd salutations on Prophet, after 3rd supplication for deceased, after 4th taslim.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'janaza',
  },
  {
    id: 'salat-janaza-003',
    question: {
      fr: 'La prière funéraire contient-elle du ruku\' et du sujud ?',
      ar: 'هل تتضمن صلاة الجنازة ركوعاً وسجوداً؟',
      en: 'Does the funeral prayer include ruku\' and sujud?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, comme toute prière', ar: 'نعم، كأي صلاة', en: 'Yes, like any prayer' } },
      { id: 'b', text: { fr: 'Non, elle se fait entièrement debout', ar: 'لا، تُؤدى قياماً بالكامل', en: 'No, it is performed entirely standing' } },
      { id: 'c', text: { fr: 'Seulement le ruku\'', ar: 'الركوع فقط', en: 'Only ruku\'' } },
      { id: 'd', text: { fr: 'Seulement le sujud', ar: 'السجود فقط', en: 'Only sujud' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La prière funéraire ne comporte ni ruku\' ni sujud. Elle se fait entièrement debout avec les 4 takbirat.',
      ar: 'صلاة الجنازة ليس فيها ركوع ولا سجود. تُؤدى قياماً بالكامل مع 4 تكبيرات.',
      en: 'Funeral prayer has no ruku\' or sujud. It is performed entirely standing with 4 takbirat.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'janaza',
  },
  {
    id: 'salat-janaza-004',
    question: {
      fr: 'Où l\'imam se place-t-il pour prier sur un homme décédé ?',
      ar: 'أين يقف الإمام للصلاة على الرجل الميت؟',
      en: 'Where does the imam stand to pray over a deceased man?',
    },
    options: [
      { id: 'a', text: { fr: 'Au niveau de la tête', ar: 'عند الرأس', en: 'At the head' } },
      { id: 'b', text: { fr: 'Au niveau de la poitrine/milieu du corps', ar: 'عند الصدر/وسط الجسد', en: 'At the chest/middle of body' } },
      { id: 'c', text: { fr: 'Au niveau des pieds', ar: 'عند القدمين', en: 'At the feet' } },
      { id: 'd', text: { fr: 'N\'importe où', ar: 'في أي مكان', en: 'Anywhere' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'L\'imam se place au niveau de la poitrine pour l\'homme et au niveau du milieu du corps pour la femme selon la sunna.',
      ar: 'يقف الإمام عند صدر الرجل ووسط المرأة حسب السنة.',
      en: 'The imam stands at the chest for a man and at the middle for a woman according to the sunna.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'janaza',
  },
  {
    id: 'salat-janaza-005',
    question: {
      fr: 'Peut-on prier la salat al-janaza sur un absent (salat al-gha\'ib) ?',
      ar: 'هل يجوز الصلاة على الغائب؟',
      en: 'Can one pray funeral prayer for an absent person (salat al-gha\'ib)?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, ce n\'est pas permis', ar: 'لا، غير جائز', en: 'No, it is not permitted' } },
      { id: 'b', text: { fr: 'Oui, c\'est permis selon plusieurs savants, comme le fit le Prophète pour le Négus', ar: 'نعم، جائز عند كثير من العلماء، كما فعل النبي للنجاشي', en: 'Yes, permitted according to many scholars, as the Prophet did for the Negus' } },
      { id: 'c', text: { fr: 'Seulement pour les prophètes', ar: 'للأنبياء فقط', en: 'Only for prophets' } },
      { id: 'd', text: { fr: 'Seulement pour les savants', ar: 'للعلماء فقط', en: 'Only for scholars' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a prié sur le Négus (roi d\'Abyssinie) en son absence. Les savants divergent sur la généralisation de cette pratique.',
      ar: 'صلى النبي ﷺ على النجاشي غائباً. والعلماء يختلفون في تعميم هذا الحكم.',
      en: 'The Prophet ﷺ prayed over the Negus (King of Abyssinia) in absentia. Scholars differ on generalizing this practice.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'janaza',
  },
];

// ============================================
// PRIÈRES DES FÊTES (صلاة العيدين)
// ============================================

export const eidQuestions: ExamQuestion[] = [
  {
    id: 'salat-eid-001',
    question: {
      fr: 'Combien de takbirat supplémentaires y a-t-il dans chaque rakat de la prière de l\'Aïd ?',
      ar: 'كم عدد التكبيرات الزائدة في كل ركعة من صلاة العيد؟',
      en: 'How many extra takbirat are there in each rakat of Eid prayer?',
    },
    options: [
      { id: 'a', text: { fr: '3 dans la première, 3 dans la deuxième', ar: '3 في الأولى، 3 في الثانية', en: '3 in the first, 3 in the second' } },
      { id: 'b', text: { fr: '7 dans la première (après takbirat al-ihram), 5 dans la deuxième', ar: '7 في الأولى (بعد تكبيرة الإحرام)، 5 في الثانية', en: '7 in the first (after takbirat al-ihram), 5 in the second' } },
      { id: 'c', text: { fr: '5 dans la première, 7 dans la deuxième', ar: '5 في الأولى، 7 في الثانية', en: '5 in the first, 7 in the second' } },
      { id: 'd', text: { fr: 'Pas de takbirat supplémentaires', ar: 'لا تكبيرات زائدة', en: 'No extra takbirat' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Selon la majorité : 7 takbirat dans la 1ère rakat (après takbirat al-ihram et avant la récitation), et 5 dans la 2ème (après s\'être relevé).',
      ar: 'عند الجمهور: 7 تكبيرات في الركعة الأولى (بعد تكبيرة الإحرام وقبل القراءة)، و5 في الثانية (بعد القيام).',
      en: 'According to majority: 7 takbirat in 1st rakat (after takbirat al-ihram and before recitation), and 5 in 2nd (after standing).',
    },
    points: 3,
    difficulty: 'medium',
    category: 'eid',
  },
  {
    id: 'salat-eid-002',
    question: {
      fr: 'Quand la prière de l\'Aïd al-Fitr est-elle accomplie ?',
      ar: 'متى تُؤدى صلاة عيد الفطر؟',
      en: 'When is Eid al-Fitr prayer performed?',
    },
    options: [
      { id: 'a', text: { fr: 'Après le lever du soleil jusqu\'à son zénith', ar: 'بعد طلوع الشمس إلى زوالها', en: 'After sunrise until its zenith' } },
      { id: 'b', text: { fr: 'À l\'heure de Fajr', ar: 'في وقت الفجر', en: 'At Fajr time' } },
      { id: 'c', text: { fr: 'À l\'heure de Dhuhr', ar: 'في وقت الظهر', en: 'At Dhuhr time' } },
      { id: 'd', text: { fr: 'Après Maghrib', ar: 'بعد المغرب', en: 'After Maghrib' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'La prière de l\'Aïd s\'accomplit après le lever du soleil (environ 15-20 min après) jusqu\'au zénith. Elle est retardée pour l\'Aïd al-Fitr et avancée pour l\'Aïd al-Adha.',
      ar: 'تُؤدى صلاة العيد بعد طلوع الشمس (بحوالي 15-20 دقيقة) إلى الزوال. تُؤخر في الفطر وتُقدم في الأضحى.',
      en: 'Eid prayer is performed after sunrise (about 15-20 min after) until zenith. It is delayed for Eid al-Fitr and advanced for Eid al-Adha.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'eid',
  },
  {
    id: 'salat-eid-003',
    question: {
      fr: 'La khutbah de l\'Aïd est-elle avant ou après la prière ?',
      ar: 'هل خطبة العيد قبل الصلاة أم بعدها؟',
      en: 'Is the Eid khutbah before or after the prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'Avant la prière comme le vendredi', ar: 'قبل الصلاة كالجمعة', en: 'Before prayer like Friday' } },
      { id: 'b', text: { fr: 'Après la prière', ar: 'بعد الصلاة', en: 'After the prayer' } },
      { id: 'c', text: { fr: 'Il n\'y a pas de khutbah', ar: 'لا توجد خطبة', en: 'There is no khutbah' } },
      { id: 'd', text: { fr: 'Deux khutbah : une avant et une après', ar: 'خطبتان: واحدة قبل وواحدة بعد', en: 'Two khutbah: one before and one after' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Contrairement au vendredi, la khutbah de l\'Aïd vient APRÈS la prière et n\'est pas obligatoire d\'y assister.',
      ar: 'بخلاف الجمعة، خطبة العيد تأتي بعد الصلاة وحضورها غير واجب.',
      en: 'Unlike Friday, the Eid khutbah comes AFTER the prayer and attending it is not obligatory.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'eid',
  },
  {
    id: 'salat-eid-004',
    question: {
      fr: 'Quel est le statut juridique de la prière de l\'Aïd ?',
      ar: 'ما حكم صلاة العيد؟',
      en: 'What is the legal status of Eid prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'Fard \'ayn selon les Hanafis, sunna mu\'akkada selon les autres', ar: 'فرض عين عند الحنفية، سنة مؤكدة عند غيرهم', en: 'Fard \'ayn for Hanafis, sunna mu\'akkada for others' } },
      { id: 'b', text: { fr: 'Sunna seulement pour tous', ar: 'سنة فقط للجميع', en: 'Sunna only for everyone' } },
      { id: 'c', text: { fr: 'Fard kifaya pour tous', ar: 'فرض كفاية للجميع', en: 'Fard kifaya for everyone' } },
      { id: 'd', text: { fr: 'Mustahabb', ar: 'مستحب', en: 'Mustahabb' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les Hanafis considèrent la prière de l\'Aïd comme wajib (obligation individuelle). La majorité (Malikites, Shafi\'ites, Hanbalis) la considèrent comme sunna mu\'akkada.',
      ar: 'يعتبر الحنفية صلاة العيد واجباً (فرض عين). الجمهور (المالكية والشافعية والحنابلة) يعتبرونها سنة مؤكدة.',
      en: 'Hanafis consider Eid prayer wajib (individual obligation). Majority (Malikis, Shafi\'is, Hanbalis) consider it sunna mu\'akkada.',
    },
    points: 4,
    difficulty: 'hard',
    category: 'eid',
  },
];

// ============================================
// PRIÈRE DE L'ÉCLIPSE (صلاة الكسوف)
// ============================================

export const kusufQuestions: ExamQuestion[] = [
  {
    id: 'salat-kusuf-001',
    question: {
      fr: 'Comment s\'appelle la prière lors d\'une éclipse solaire et lunaire ?',
      ar: 'ما اسم الصلاة عند كسوف الشمس وخسوف القمر؟',
      en: 'What is the name of the prayer during solar and lunar eclipse?',
    },
    options: [
      { id: 'a', text: { fr: 'Salat al-Kusuf (solaire) et Salat al-Khusuf (lunaire)', ar: 'صلاة الكسوف (للشمس) وصلاة الخسوف (للقمر)', en: 'Salat al-Kusuf (solar) and Salat al-Khusuf (lunar)' } },
      { id: 'b', text: { fr: 'Salat al-Ayat', ar: 'صلاة الآيات', en: 'Salat al-Ayat' } },
      { id: 'c', text: { fr: 'Salat al-Khawf', ar: 'صلاة الخوف', en: 'Salat al-Khawf' } },
      { id: 'd', text: { fr: 'Salat al-Hajah', ar: 'صلاة الحاجة', en: 'Salat al-Hajah' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Kusuf désigne l\'éclipse solaire, Khusuf l\'éclipse lunaire. Les deux prières sont similaires dans leur description.',
      ar: 'الكسوف للشمس، والخسوف للقمر. والصلاتان متشابهتان في الصفة.',
      en: 'Kusuf refers to solar eclipse, Khusuf to lunar eclipse. Both prayers are similar in description.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'kusuf',
  },
  {
    id: 'salat-kusuf-002',
    question: {
      fr: 'Quelle est la particularité de la prière de l\'éclipse ?',
      ar: 'ما الذي يميز صلاة الكسوف؟',
      en: 'What is the particularity of the eclipse prayer?',
    },
    options: [
      { id: 'a', text: { fr: '2 rakaat normales', ar: 'ركعتان عاديتان', en: '2 normal rakaat' } },
      { id: 'b', text: { fr: '2 rakaat avec 2 ruku\' et 2 qiyam dans chaque rakat', ar: 'ركعتان بركوعين وقيامين في كل ركعة', en: '2 rakaat with 2 ruku\' and 2 qiyam in each rakat' } },
      { id: 'c', text: { fr: '4 rakaat normales', ar: '4 ركعات عادية', en: '4 normal rakaat' } },
      { id: 'd', text: { fr: 'Prière silencieuse uniquement', ar: 'صلاة سرية فقط', en: 'Silent prayer only' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La prière de l\'éclipse comporte 2 rakaat, mais chaque rakat a 2 qiyam et 2 ruku\' (donc 4 ruku\' au total), avec une récitation longue.',
      ar: 'صلاة الكسوف ركعتان، لكن في كل ركعة قيامان وركوعان (أي 4 ركوعات إجمالاً)، مع قراءة طويلة.',
      en: 'Eclipse prayer has 2 rakaat, but each rakat has 2 qiyam and 2 ruku\' (so 4 ruku\' total), with long recitation.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'kusuf',
  },
  {
    id: 'salat-kusuf-003',
    question: {
      fr: 'Quel est le statut juridique de la prière de l\'éclipse ?',
      ar: 'ما حكم صلاة الكسوف؟',
      en: 'What is the legal status of eclipse prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'Fard \'ayn', ar: 'فرض عين', en: 'Fard \'ayn' } },
      { id: 'b', text: { fr: 'Sunna mu\'akkada', ar: 'سنة مؤكدة', en: 'Sunna mu\'akkada' } },
      { id: 'c', text: { fr: 'Mustahabb', ar: 'مستحب', en: 'Mustahabb' } },
      { id: 'd', text: { fr: 'Mubah', ar: 'مباح', en: 'Mubah' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La prière de l\'éclipse est sunna mu\'akkada selon la majorité des savants. Le Prophète ﷺ l\'a accomplie et recommandée.',
      ar: 'صلاة الكسوف سنة مؤكدة عند جمهور العلماء. وقد أداها النبي ﷺ وأوصى بها.',
      en: 'Eclipse prayer is sunna mu\'akkada according to majority of scholars. The Prophet ﷺ performed it and recommended it.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'kusuf',
  },
];

// ============================================
// PRIÈRE POUR LA PLUIE (صلاة الاستسقاء)
// ============================================

export const istisqaQuestions: ExamQuestion[] = [
  {
    id: 'salat-istisqa-001',
    question: {
      fr: 'Qu\'est-ce que Salat al-Istisqa\' ?',
      ar: 'ما هي صلاة الاستسقاء؟',
      en: 'What is Salat al-Istisqa\'?',
    },
    options: [
      { id: 'a', text: { fr: 'Prière pour demander la pluie', ar: 'صلاة طلب الغيث والمطر', en: 'Prayer to ask for rain' } },
      { id: 'b', text: { fr: 'Prière pour remercier après la pluie', ar: 'صلاة الشكر بعد المطر', en: 'Prayer of thanks after rain' } },
      { id: 'c', text: { fr: 'Prière pour arrêter la pluie', ar: 'صلاة لإيقاف المطر', en: 'Prayer to stop rain' } },
      { id: 'd', text: { fr: 'Prière de l\'aube', ar: 'صلاة الفجر', en: 'Dawn prayer' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Salat al-Istisqa\' est une prière accomplie en cas de sécheresse pour demander à Allah d\'envoyer la pluie.',
      ar: 'صلاة الاستسقاء تُؤدى عند الجفاف لطلب الغيث من الله.',
      en: 'Salat al-Istisqa\' is a prayer performed during drought to ask Allah to send rain.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'istisqa',
  },
  {
    id: 'salat-istisqa-002',
    question: {
      fr: 'Que fait l\'imam avec son manteau (rida\') pendant la prière d\'Istisqa\' ?',
      ar: 'ماذا يفعل الإمام بردائه في صلاة الاستسقاء؟',
      en: 'What does the imam do with his cloak (rida\') during Istisqa\' prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'Il le retire', ar: 'يخلعه', en: 'He removes it' } },
      { id: 'b', text: { fr: 'Il le retourne (partie droite à gauche)', ar: 'يقلبه (اليمين إلى اليسار)', en: 'He reverses it (right side to left)' } },
      { id: 'c', text: { fr: 'Il le donne aux pauvres', ar: 'يعطيه للفقراء', en: 'He gives it to the poor' } },
      { id: 'd', text: { fr: 'Il le mouille', ar: 'يبلله', en: 'He wets it' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a retourné son manteau pendant l\'istisqa\' comme signe d\'espoir que l\'état (sécheresse) se retourne.',
      ar: 'قلب النبي ﷺ رداءه في الاستسقاء تفاؤلاً بتحول الحال.',
      en: 'The Prophet ﷺ reversed his cloak during istisqa\' as a sign of hope that the situation (drought) would turn.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'istisqa',
  },
];

// ============================================
// PRIÈRE DU VOYAGEUR (صلاة المسافر)
// ============================================

export const musafirQuestions: ExamQuestion[] = [
  {
    id: 'salat-musafir-001',
    question: {
      fr: 'Qu\'est-ce que le "Qasr" (raccourcissement) de la prière ?',
      ar: 'ما هو قصر الصلاة؟',
      en: 'What is "Qasr" (shortening) of prayer?',
    },
    options: [
      { id: 'a', text: { fr: 'Prier plus vite', ar: 'الصلاة بسرعة', en: 'Praying faster' } },
      { id: 'b', text: { fr: 'Réduire les prières de 4 rakaat à 2 rakaat en voyage', ar: 'تقليل الصلوات ذات 4 ركعات إلى ركعتين في السفر', en: 'Reducing 4 rakaat prayers to 2 rakaat during travel' } },
      { id: 'c', text: { fr: 'Combiner deux prières', ar: 'الجمع بين صلاتين', en: 'Combining two prayers' } },
      { id: 'd', text: { fr: 'Prier assis', ar: 'الصلاة جالساً', en: 'Praying seated' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Qasr est de raccourcir les prières de Dhuhr, Asr et Isha de 4 à 2 rakaat. Fajr (2) et Maghrib (3) ne sont pas raccourcies.',
      ar: 'القصر هو تقليل الظهر والعصر والعشاء من 4 إلى 2 ركعة. الفجر (2) والمغرب (3) لا تُقصران.',
      en: 'Qasr is shortening Dhuhr, Asr and Isha from 4 to 2 rakaat. Fajr (2) and Maghrib (3) are not shortened.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'musafir',
  },
  {
    id: 'salat-musafir-002',
    question: {
      fr: 'Qu\'est-ce que le "Jam\'" (regroupement) des prières ?',
      ar: 'ما هو جمع الصلوات؟',
      en: 'What is "Jam\'" (combining) of prayers?',
    },
    options: [
      { id: 'a', text: { fr: 'Fusionner deux prières en une seule', ar: 'دمج صلاتين في واحدة', en: 'Merging two prayers into one' } },
      { id: 'b', text: { fr: 'Prier deux prières successivement dans le temps de l\'une d\'elles', ar: 'صلاة صلاتين متتاليتين في وقت إحداهما', en: 'Praying two prayers successively in the time of one of them' } },
      { id: 'c', text: { fr: 'Prier avec la famille', ar: 'الصلاة مع العائلة', en: 'Praying with family' } },
      { id: 'd', text: { fr: 'Prier en groupe', ar: 'الصلاة جماعة', en: 'Praying in congregation' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Jam\' est de combiner Dhuhr+Asr ou Maghrib+Isha dans le temps de l\'une des deux, chacune complète avec son adhan et iqama.',
      ar: 'الجمع هو صلاة الظهر والعصر أو المغرب والعشاء في وقت إحداهما، كل منهما كاملة بأذانها وإقامتها.',
      en: 'Jam\' is combining Dhuhr+Asr or Maghrib+Isha in the time of one of them, each complete with its adhan and iqama.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'musafir',
  },
  {
    id: 'salat-musafir-003',
    question: {
      fr: 'Quelle est la distance minimale pour raccourcir la prière selon les Malikites ?',
      ar: 'ما أقل مسافة لقصر الصلاة عند المالكية؟',
      en: 'What is the minimum distance to shorten prayer according to Malikis?',
    },
    options: [
      { id: 'a', text: { fr: 'N\'importe quelle distance', ar: 'أي مسافة', en: 'Any distance' } },
      { id: 'b', text: { fr: 'Environ 80-90 km (4 burud)', ar: 'حوالي 80-90 كم (4 بُرُد)', en: 'About 80-90 km (4 burud)' } },
      { id: 'c', text: { fr: '30 km', ar: '30 كم', en: '30 km' } },
      { id: 'd', text: { fr: '150 km', ar: '150 كم', en: '150 km' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les 4 écoles s\'accordent sur environ 80-90 km (4 burud ou 16 farsakh) comme distance minimale pour le Qasr.',
      ar: 'تتفق المذاهب الأربعة على حوالي 80-90 كم (4 بُرُد أو 16 فرسخاً) كأدنى مسافة للقصر.',
      en: 'The 4 schools agree on about 80-90 km (4 burud or 16 farsakh) as minimum distance for Qasr.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'musafir',
  },
  {
    id: 'salat-musafir-004',
    question: {
      fr: 'Quelles prières peuvent être combinées (Jam\') ?',
      ar: 'أي الصلوات يمكن جمعها؟',
      en: 'Which prayers can be combined (Jam\')?',
    },
    options: [
      { id: 'a', text: { fr: 'Toutes les prières', ar: 'جميع الصلوات', en: 'All prayers' } },
      { id: 'b', text: { fr: 'Dhuhr avec Asr, et Maghrib avec Isha', ar: 'الظهر مع العصر، والمغرب مع العشاء', en: 'Dhuhr with Asr, and Maghrib with Isha' } },
      { id: 'c', text: { fr: 'Fajr avec Dhuhr', ar: 'الفجر مع الظهر', en: 'Fajr with Dhuhr' } },
      { id: 'd', text: { fr: 'Isha avec Fajr', ar: 'العشاء مع الفجر', en: 'Isha with Fajr' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Seules Dhuhr+Asr et Maghrib+Isha peuvent être combinées. Fajr reste toujours isolée.',
      ar: 'يُجمع فقط الظهر مع العصر والمغرب مع العشاء. الفجر تبقى منفردة دائماً.',
      en: 'Only Dhuhr+Asr and Maghrib+Isha can be combined. Fajr always remains separate.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'musafir',
  },
  {
    id: 'salat-musafir-005',
    question: {
      fr: 'Combien de jours peut-on raccourcir la prière si on s\'établit temporairement ?',
      ar: 'كم يوماً يمكن قصر الصلاة إذا أقام المسافر مؤقتاً؟',
      en: 'How many days can one shorten prayer if temporarily staying?',
    },
    options: [
      { id: 'a', text: { fr: '3 jours selon les Hanafis, 4 jours selon les Malikites et Shafi\'ites', ar: '3 أيام عند الحنفية، 4 أيام عند المالكية والشافعية', en: '3 days for Hanafis, 4 days for Malikis and Shafi\'is' } },
      { id: 'b', text: { fr: 'Indéfiniment', ar: 'إلى ما لا نهاية', en: 'Indefinitely' } },
      { id: 'c', text: { fr: '1 jour seulement', ar: 'يوم واحد فقط', en: '1 day only' } },
      { id: 'd', text: { fr: '7 jours pour tous', ar: '7 أيام للجميع', en: '7 days for everyone' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Il y a divergence : Hanafis disent 15 jours, Malikites/Shafi\'ites 4 jours. Au-delà, on prie complètement.',
      ar: 'فيها خلاف: الحنفية 15 يوماً، المالكية/الشافعية 4 أيام. بعدها يُتم المسافر صلاته.',
      en: 'There is disagreement: Hanafis say 15 days, Malikis/Shafi\'is 4 days. Beyond that, one prays in full.',
    },
    points: 4,
    difficulty: 'hard',
    category: 'musafir',
  },
];

// ============================================
// PRIÈRE DU MALADE (صلاة المريض)
// ============================================

export const maridQuestions: ExamQuestion[] = [
  {
    id: 'salat-marid-001',
    question: {
      fr: 'Comment prie une personne qui ne peut pas se tenir debout ?',
      ar: 'كيف يُصلي من لا يستطيع القيام؟',
      en: 'How does a person who cannot stand pray?',
    },
    options: [
      { id: 'a', text: { fr: 'La prière est dispensée', ar: 'تسقط عنه الصلاة', en: 'Prayer is waived' } },
      { id: 'b', text: { fr: 'Assis, puis couché si nécessaire, puis par signes', ar: 'جالساً، ثم مستلقياً إن لزم، ثم بالإشارة', en: 'Sitting, then lying if needed, then by gestures' } },
      { id: 'c', text: { fr: 'Uniquement en retard jusqu\'à guérison', ar: 'بالتأخير فقط حتى الشفاء', en: 'Only delayed until recovery' } },
      { id: 'd', text: { fr: 'Quelqu\'un d\'autre prie à sa place', ar: 'يصلي عنه غيره', en: 'Someone else prays for him' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Prie debout, si tu ne peux pas alors assis, si tu ne peux pas alors sur le côté."',
      ar: 'قال النبي ﷺ: "صل قائماً، فإن لم تستطع فقاعداً، فإن لم تستطع فعلى جنب."',
      en: 'The Prophet ﷺ said: "Pray standing, if you cannot then sitting, if you cannot then on your side."',
    },
    points: 2,
    difficulty: 'easy',
    category: 'marid',
  },
  {
    id: 'salat-marid-002',
    question: {
      fr: 'Si un malade ne peut faire ni ruku\' ni sujud, que fait-il ?',
      ar: 'إذا لم يستطع المريض الركوع والسجود ماذا يفعل؟',
      en: 'If a sick person cannot do ruku\' or sujud, what does he do?',
    },
    options: [
      { id: 'a', text: { fr: 'Il les omet complètement', ar: 'يتركهما تماماً', en: 'He omits them completely' } },
      { id: 'b', text: { fr: 'Il les fait par inclinaison de la tête (plus prononcée pour le sujud)', ar: 'يومئ برأسه (أكثر للسجود)', en: 'He gestures with his head (more for sujud)' } },
      { id: 'c', text: { fr: 'Quelqu\'un l\'aide à se prosterner', ar: 'يساعده أحد على السجود', en: 'Someone helps him prostrate' } },
      { id: 'd', text: { fr: 'Il reporte la prière', ar: 'يؤخر الصلاة', en: 'He postpones prayer' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le malade incapable fait le ruku\' et le sujud par signe de la tête, l\'inclinaison étant plus prononcée pour le sujud.',
      ar: 'المريض العاجز يومئ برأسه للركوع والسجود، ويكون إيماؤه للسجود أخفض.',
      en: 'The incapable sick person gestures with his head for ruku\' and sujud, the gesture being lower for sujud.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'marid',
  },
  {
    id: 'salat-marid-003',
    question: {
      fr: 'La prière est-elle dispensée pour un malade en pleine conscience ?',
      ar: 'هل تسقط الصلاة عن المريض الواعي؟',
      en: 'Is prayer waived for a conscious sick person?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, s\'il est très malade', ar: 'نعم، إذا كان مريضاً جداً', en: 'Yes, if very sick' } },
      { id: 'b', text: { fr: 'Non, jamais tant qu\'il est conscient', ar: 'لا، أبداً ما دام واعياً', en: 'No, never as long as conscious' } },
      { id: 'c', text: { fr: 'Oui, après 3 jours de maladie', ar: 'نعم، بعد 3 أيام من المرض', en: 'Yes, after 3 days of illness' } },
      { id: 'd', text: { fr: 'Selon l\'avis du médecin', ar: 'حسب رأي الطبيب', en: 'According to doctor\'s opinion' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La prière n\'est jamais dispensée pour un musulman conscient. Même incapable de bouger, il prie par les yeux ou le cœur.',
      ar: 'لا تسقط الصلاة عن المسلم الواعي أبداً. حتى لو عجز عن الحركة، يصلي بعينيه أو قلبه.',
      en: 'Prayer is never waived for a conscious Muslim. Even if unable to move, he prays with his eyes or heart.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'marid',
  },
];

// ============================================
// TARAWIH ET PRIÈRES DE NUIT
// ============================================

export const tarawihQuestions: ExamQuestion[] = [
  {
    id: 'salat-tarawih-001',
    question: {
      fr: 'Combien de rakaat compte la prière de Tarawih ?',
      ar: 'كم عدد ركعات صلاة التراويح؟',
      en: 'How many rakaat does Tarawih prayer have?',
    },
    options: [
      { id: 'a', text: { fr: '8 rakaat obligatoirement', ar: '8 ركعات وجوباً', en: '8 rakaat obligatorily' } },
      { id: 'b', text: { fr: '20 rakaat obligatoirement', ar: '20 ركعة وجوباً', en: '20 rakaat obligatorily' } },
      { id: 'c', text: { fr: 'Flexible : 8, 20 ou plus selon les écoles, c\'est sunna mu\'akkada', ar: 'مرنة: 8 أو 20 أو أكثر حسب المذاهب، سنة مؤكدة', en: 'Flexible: 8, 20 or more according to schools, it is sunna mu\'akkada' } },
      { id: 'd', text: { fr: '4 rakaat seulement', ar: '4 ركعات فقط', en: '4 rakaat only' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le nombre est flexible. 8 ou 11 rakaat sont authentiques du Prophète. 20 rakaat sont pratiquées depuis l\'époque de Omar. C\'est une sunna mu\'akkada.',
      ar: 'العدد مرن. 8 أو 11 ركعة ثابتة عن النبي. و20 ركعة من عهد عمر. وهي سنة مؤكدة.',
      en: 'The number is flexible. 8 or 11 rakaat are authentic from the Prophet. 20 rakaat practiced since Omar\'s time. It is sunna mu\'akkada.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'tarawih',
  },
  {
    id: 'salat-tarawih-002',
    question: {
      fr: 'Quand prie-t-on la prière de Witr ?',
      ar: 'متى تُصلى صلاة الوتر؟',
      en: 'When is Witr prayer performed?',
    },
    options: [
      { id: 'a', text: { fr: 'Avant Isha', ar: 'قبل العشاء', en: 'Before Isha' } },
      { id: 'b', text: { fr: 'Après Isha et avant Fajr', ar: 'بعد العشاء وقبل الفجر', en: 'After Isha and before Fajr' } },
      { id: 'c', text: { fr: 'Après Fajr', ar: 'بعد الفجر', en: 'After Fajr' } },
      { id: 'd', text: { fr: 'À n\'importe quelle heure', ar: 'في أي وقت', en: 'At any time' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Witr se prie après Isha jusqu\'à l\'aube (Fajr). Il est recommandé de le faire en dernière prière de la nuit.',
      ar: 'الوتر يُصلى بعد العشاء حتى الفجر. ويُستحب أن يكون آخر صلاة الليل.',
      en: 'Witr is prayed after Isha until dawn (Fajr). It is recommended to be the last night prayer.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'tarawih',
  },
  {
    id: 'salat-tarawih-003',
    question: {
      fr: 'Quel est le nombre minimal de rakaat pour le Witr ?',
      ar: 'ما أقل عدد لركعات الوتر؟',
      en: 'What is the minimum number of rakaat for Witr?',
    },
    options: [
      { id: 'a', text: { fr: '1 rakat', ar: 'ركعة واحدة', en: '1 rakat' } },
      { id: 'b', text: { fr: '2 rakaat', ar: 'ركعتان', en: '2 rakaat' } },
      { id: 'c', text: { fr: '3 rakaat', ar: '3 ركعات', en: '3 rakaat' } },
      { id: 'd', text: { fr: '5 rakaat', ar: '5 ركعات', en: '5 rakaat' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le minimum du Witr est 1 rakat. Le Prophète ﷺ a dit : "Le Witr est une rakat à la fin de la nuit."',
      ar: 'أقل الوتر ركعة واحدة. قال النبي ﷺ: "الوتر ركعة من آخر الليل."',
      en: 'The minimum of Witr is 1 rakat. The Prophet ﷺ said: "Witr is one rakat at the end of the night."',
    },
    points: 2,
    difficulty: 'easy',
    category: 'tarawih',
  },
];

// ============================================
// EXPORT TOUTES LES QUESTIONS SPÉCIALES
// ============================================

export const allSpecialPrayersQuestions: ExamQuestion[] = [
  ...jumuaQuestions,
  ...janazaQuestions,
  ...eidQuestions,
  ...kusufQuestions,
  ...istisqaQuestions,
  ...musafirQuestions,
  ...maridQuestions,
  ...tarawihQuestions,
];

export default allSpecialPrayersQuestions;
