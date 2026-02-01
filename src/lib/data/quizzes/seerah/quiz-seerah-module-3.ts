/**
 * Quiz Seerah - Module 3 : La Période Médinoise (Partie 1)
 * 
 * Ce quiz couvre la Hijra et les premières années à Médine :
 * Hijra, Constitution de Médine, premières batailles
 * 
 * Niveau : Intermédiaire
 * Questions : 15
 */

import { Quiz, Question } from '../types';

const questions: Question[] = [
  // --- Questions Faciles (5) ---
  {
    id: 'seerah3-q001',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'En quelle année eut lieu la Hijra (Hégire) vers Médine ?',
      ar: 'في أي سنة وقعت الهجرة إلى المدينة؟',
      en: 'In what year did the Hijra to Medina occur?',
    },
    options: [
      { id: 'a', text: { fr: '610 après J.-C.', ar: '610م', en: '610 CE' } },
      { id: 'b', text: { fr: '622 après J.-C.', ar: '622م', en: '622 CE' } },
      { id: 'c', text: { fr: '630 après J.-C.', ar: '630م', en: '630 CE' } },
      { id: 'd', text: { fr: '632 après J.-C.', ar: '632م', en: '632 CE' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La Hijra eut lieu en 622. Cette date marque le début du calendrier islamique (hijri). Le mois de Muharram fut choisi comme premier mois par Omar lors de son califat.',
      ar: 'وقعت الهجرة عام 622م. هذا التاريخ يُمثل بداية التقويم الإسلامي (الهجري). اختار عمر شهر محرم ليكون أول الشهور في خلافته.',
      en: 'The Hijra occurred in 622 CE. This date marks the beginning of the Islamic (hijri) calendar. The month of Muharram was chosen as the first month by Omar during his caliphate.',
    },
    reference: {
      courseSlug: 'seerah-module-3',
      lessonId: '001-hijra',
    },
    points: 10,
    tags: ['seerah', 'hijra', 'date'],
  },
  {
    id: 'seerah3-q002',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Dans quelle grotte le Prophète ﷺ et Abu Bakr se cachèrent-ils pendant la Hijra ?',
      ar: 'في أي غار اختبأ النبي ﷺ وأبو بكر أثناء الهجرة؟',
      en: 'In which cave did the Prophet ﷺ and Abu Bakr hide during the Hijra?',
    },
    options: [
      { id: 'a', text: { fr: 'La grotte de Hira', ar: 'غار حراء', en: 'Cave of Hira' } },
      { id: 'b', text: { fr: 'La grotte de Thawr', ar: 'غار ثور', en: 'Cave of Thawr' } },
      { id: 'c', text: { fr: 'La grotte de Safa', ar: 'غار الصفا', en: 'Cave of Safa' } },
      { id: 'd', text: { fr: 'La grotte de Uhud', ar: 'غار أحد', en: 'Cave of Uhud' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Ils restèrent 3 jours dans la grotte de Thawr au sud de La Mecque. Allah envoya une araignée tisser sa toile et une colombe nicher à l\'entrée. Le Prophète ﷺ dit à Abu Bakr : "Que penses-tu de deux dont Allah est le troisième ?"',
      ar: 'بقيا 3 أيام في غار ثور جنوب مكة. أرسل الله عنكبوتاً نسجت خيوطها وحمامة باضت عند المدخل. قال النبي ﷺ لأبي بكر: "ما ظنك باثنين الله ثالثهما؟"',
      en: 'They stayed 3 days in Thawr cave south of Mecca. Allah sent a spider to weave its web and a dove to nest at the entrance. The Prophet ﷺ told Abu Bakr: "What do you think of two whose third is Allah?"',
    },
    reference: {
      courseSlug: 'seerah-module-3',
      lessonId: '001-hijra',
    },
    points: 10,
    tags: ['seerah', 'hijra', 'thawr'],
  },
  {
    id: 'seerah3-q003',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quel était l\'ancien nom de Médine ?',
      ar: 'ما الاسم القديم للمدينة؟',
      en: 'What was the old name of Medina?',
    },
    options: [
      { id: 'a', text: { fr: 'Yathrib', ar: 'يثرب', en: 'Yathrib' } },
      { id: 'b', text: { fr: 'Taif', ar: 'الطائف', en: 'Taif' } },
      { id: 'c', text: { fr: 'Tabuk', ar: 'تبوك', en: 'Tabuk' } },
      { id: 'd', text: { fr: 'Khaybar', ar: 'خيبر', en: 'Khaybar' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Yathrib était le nom pré-islamique. Le Prophète ﷺ l\'appela "Al-Madina" (la Ville) ou "Taybah/Taba" (la Bonne). Il interdit d\'utiliser le nom Yathrib.',
      ar: 'يثرب كان الاسم قبل الإسلام. سماها النبي ﷺ "المدينة" أو "طيبة/طابة". نهى عن تسميتها يثرب.',
      en: 'Yathrib was the pre-Islamic name. The Prophet ﷺ called it "Al-Madina" (the City) or "Taybah/Taba" (the Good). He forbade using the name Yathrib.',
    },
    reference: {
      courseSlug: 'seerah-module-3',
      lessonId: '002-medine',
    },
    points: 10,
    tags: ['seerah', 'medina', 'yathrib'],
  },
  {
    id: 'seerah3-q004',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'La première chose que le Prophète ﷺ fit à Médine fut de construire une mosquée.',
      ar: 'أول ما فعله النبي ﷺ في المدينة كان بناء مسجد.',
      en: 'The first thing the Prophet ﷺ did in Medina was to build a mosque.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'Le Prophète ﷺ construisit d\'abord la mosquée de Quba (première mosquée de l\'Islam), puis la Mosquée du Prophète (Al-Masjid an-Nabawi) à Médine, sur le terrain où s\'agenouilla sa chamelle.',
      ar: 'بنى النبي ﷺ أولاً مسجد قباء (أول مسجد في الإسلام)، ثم المسجد النبوي في المدينة، في المكان الذي بركت فيه ناقته.',
      en: 'The Prophet ﷺ first built Quba Mosque (first mosque in Islam), then the Prophet\'s Mosque (Al-Masjid an-Nabawi) in Medina, on the land where his camel knelt.',
    },
    reference: {
      courseSlug: 'seerah-module-3',
      lessonId: '003-masjid',
    },
    points: 10,
    tags: ['seerah', 'masjid', 'quba'],
  },
  {
    id: 'seerah3-q005',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quelle fut la première grande bataille de l\'Islam ?',
      ar: 'ما أول غزوة كبرى في الإسلام؟',
      en: 'What was the first major battle of Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Bataille d\'Uhud', ar: 'غزوة أحد', en: 'Battle of Uhud' } },
      { id: 'b', text: { fr: 'Bataille de Badr', ar: 'غزوة بدر', en: 'Battle of Badr' } },
      { id: 'c', text: { fr: 'Bataille de Khandaq', ar: 'غزوة الخندق', en: 'Battle of Khandaq' } },
      { id: 'd', text: { fr: 'Bataille de Hunayn', ar: 'غزوة حنين', en: 'Battle of Hunayn' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La bataille de Badr eut lieu le 17 Ramadan de l\'an 2H (624). 313 musulmans affrontèrent ~1000 Quraysh. Allah envoya des anges pour les aider. Ce fut une victoire décisive.',
      ar: 'وقعت غزوة بدر في 17 رمضان سنة 2هـ (624م). 313 مسلماً واجهوا ~1000 من قريش. أنزل الله الملائكة لنصرتهم. كان نصراً حاسماً.',
      en: 'Battle of Badr occurred on 17 Ramadan 2H (624). 313 Muslims faced ~1000 Quraysh. Allah sent angels to help them. It was a decisive victory.',
    },
    reference: {
      courseSlug: 'seerah-module-3',
      lessonId: '004-badr',
    },
    points: 10,
    tags: ['seerah', 'badr', 'battle'],
  },

  // --- Questions Moyennes (6) ---
  {
    id: 'seerah3-q006',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que la "Muwakhat" (المؤاخاة) établie à Médine ?',
      ar: 'ما هي "المؤاخاة" التي أُقيمت في المدينة؟',
      en: 'What was the "Muwakhat" established in Medina?',
    },
    options: [
      { id: 'a', text: { fr: 'Fraternité entre Muhajirun et Ansar', ar: 'الإخاء بين المهاجرين والأنصار', en: 'Brotherhood between Muhajirun and Ansar' } },
      { id: 'b', text: { fr: 'Traité avec les Juifs', ar: 'معاهدة مع اليهود', en: 'Treaty with the Jews' } },
      { id: 'c', text: { fr: 'Alliance militaire', ar: 'تحالف عسكري', en: 'Military alliance' } },
      { id: 'd', text: { fr: 'Système fiscal', ar: 'نظام ضريبي', en: 'Tax system' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ jumela chaque Muhajir (émigrant) avec un Ansari (habitant de Médine). Les Ansar partagèrent leurs maisons, biens et même proposèrent de divorcer pour offrir une épouse. Ex : Abdurrahman ibn Awf et Sa\'d ibn Rabi\'.',
      ar: 'آخى النبي ﷺ بين كل مهاجر وأنصاري. الأنصار تقاسموا بيوتهم وأموالهم وعرضوا الطلاق لتزويجهم. مثال: عبد الرحمن بن عوف وسعد بن الربيع.',
      en: 'The Prophet ﷺ paired each Muhajir (emigrant) with an Ansari (Medina resident). Ansar shared their homes, wealth and even offered to divorce to provide wives. Ex: Abdurrahman ibn Awf and Sa\'d ibn Rabi\'.',
    },
    reference: {
      courseSlug: 'seerah-module-3',
      lessonId: '005-muwakhat',
    },
    points: 15,
    tags: ['seerah', 'muwakhat', 'ansar'],
  },
  {
    id: 'seerah3-q007',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que la "Sahifa al-Madina" (Constitution de Médine) ?',
      ar: 'ما هي "صحيفة المدينة"؟',
      en: 'What is the "Sahifa al-Madina" (Constitution of Medina)?',
    },
    options: [
      { id: 'a', text: { fr: 'Charte établissant les droits et devoirs de tous les habitants', ar: 'ميثاق يحدد حقوق وواجبات جميع السكان', en: 'Charter establishing rights and duties of all inhabitants' } },
      { id: 'b', text: { fr: 'Déclaration de guerre', ar: 'إعلان حرب', en: 'Declaration of war' } },
      { id: 'c', text: { fr: 'Contrat commercial', ar: 'عقد تجاري', en: 'Commercial contract' } },
      { id: 'd', text: { fr: 'Liste des musulmans', ar: 'قائمة المسلمين', en: 'List of Muslims' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'La Sahifa (vers 622) est considérée comme la première constitution écrite. Elle définissait : l\'unité des croyants, la liberté religieuse des Juifs, la défense commune, la justice, et la souveraineté de la loi islamique pour les musulmans.',
      ar: 'الصحيفة (حوالي 622م) تُعتبر أول دستور مكتوب. حددت: وحدة المؤمنين، حرية اليهود الدينية، الدفاع المشترك، العدل، وسيادة الشريعة للمسلمين.',
      en: 'The Sahifa (around 622) is considered the first written constitution. It defined: unity of believers, religious freedom for Jews, common defense, justice, and sovereignty of Islamic law for Muslims.',
    },
    reference: {
      courseSlug: 'seerah-module-3',
      lessonId: '006-sahifa',
    },
    points: 15,
    tags: ['seerah', 'sahifa', 'constitution'],
  },
  {
    id: 'seerah3-q008',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qui fut tué par le Prophète ﷺ en duel lors de Badr ?',
      ar: 'من قتله النبي ﷺ في مبارزة يوم بدر؟',
      en: 'Whom did the Prophet ﷺ kill in duel at Badr?',
    },
    options: [
      { id: 'a', text: { fr: 'Abu Jahl', ar: 'أبو جهل', en: 'Abu Jahl' } },
      { id: 'b', text: { fr: 'Ubayy ibn Khalaf', ar: 'أُبي بن خلف', en: 'Ubayy ibn Khalaf' } },
      { id: 'c', text: { fr: 'Personne - il ne combattit pas en duel à Badr', ar: 'لا أحد - لم يبارز في بدر', en: 'No one - he didn\'t duel at Badr' } },
      { id: 'd', text: { fr: 'Utba ibn Rabi\'a', ar: 'عتبة بن ربيعة', en: 'Utba ibn Rabi\'a' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le Prophète ﷺ commandait et faisait des invocations depuis une hutte. Les duels opposèrent : Hamza vs Utba, Ali vs Walid, Ubayda vs Shayba. Abu Jahl fut tué par Mu\'adh et Mu\'awwidh (fils d\'Afra).',
      ar: 'النبي ﷺ كان يقود ويدعو من العريش. المبارزات: حمزة vs عتبة، علي vs الوليد، عبيدة vs شيبة. أبو جهل قتله معاذ ومعوذ (ابنا عفراء).',
      en: 'The Prophet ﷺ commanded and made supplications from a shelter. Duels were: Hamza vs Utba, Ali vs Walid, Ubayda vs Shayba. Abu Jahl was killed by Mu\'adh and Mu\'awwidh (sons of Afra).',
    },
    reference: {
      courseSlug: 'seerah-module-3',
      lessonId: '004-badr',
    },
    points: 15,
    tags: ['seerah', 'badr', 'duel'],
  },
  {
    id: 'seerah3-q009',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelle erreur stratégique causa des pertes à Uhud ?',
      ar: 'ما الخطأ الاستراتيجي الذي سبب خسائر في أحد؟',
      en: 'What strategic error caused losses at Uhud?',
    },
    options: [
      { id: 'a', text: { fr: 'Les archers quittèrent leur position pour le butin', ar: 'الرماة تركوا مواقعهم للغنيمة', en: 'Archers left their position for booty' } },
      { id: 'b', text: { fr: 'Les musulmans étaient trop nombreux', ar: 'المسلمون كانوا كثيرين جداً', en: 'Muslims were too numerous' } },
      { id: 'c', text: { fr: 'Le Prophète ﷺ était absent', ar: 'النبي ﷺ كان غائباً', en: 'The Prophet ﷺ was absent' } },
      { id: 'd', text: { fr: 'Il n\'y avait pas de plan', ar: 'لم تكن هناك خطة', en: 'There was no plan' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Prophète ﷺ avait posté 50 archers sur le mont Aynayn avec ordre de ne pas bouger. Quand les musulmans semblaient gagner, la plupart descendirent pour le butin. Khalid ibn al-Walid (alors ennemi) les contourna.',
      ar: 'وضع النبي ﷺ 50 رامياً على جبل عينين بأمر ألا يتحركوا. لما بدا أن المسلمين انتصروا، نزل أكثرهم للغنائم. خالد بن الوليد (حينها عدو) التف عليهم.',
      en: 'The Prophet ﷺ posted 50 archers on Mount Aynayn with orders not to move. When Muslims seemed to be winning, most descended for booty. Khalid ibn al-Walid (then enemy) outflanked them.',
    },
    reference: {
      courseSlug: 'seerah-module-3',
      lessonId: '007-uhud',
    },
    points: 15,
    tags: ['seerah', 'uhud', 'archers'],
  },
  {
    id: 'seerah3-q010',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quel Sahabi défendit seul le Prophète ﷺ à Uhud ?',
      ar: 'أي صحابي دافع عن النبي ﷺ وحده في أحد؟',
      en: 'Which Sahabi defended the Prophet ﷺ alone at Uhud?',
    },
    options: [
      { id: 'a', text: { fr: 'Abu Bakr', ar: 'أبو بكر', en: 'Abu Bakr' } },
      { id: 'b', text: { fr: 'Talha ibn Ubaydillah', ar: 'طلحة بن عبيد الله', en: 'Talha ibn Ubaydillah' } },
      { id: 'c', text: { fr: 'Abu Sufyan', ar: 'أبو سفيان', en: 'Abu Sufyan' } },
      { id: 'd', text: { fr: 'Amr ibn al-As', ar: 'عمرو بن العاص', en: 'Amr ibn al-As' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Talha ibn Ubaydillah protégea le Prophète ﷺ de son corps, recevant plus de 70 blessures. Sa main fut paralysée. Le Prophète ﷺ dit : "Celui qui veut voir un martyr vivant, qu\'il regarde Talha."',
      ar: 'طلحة بن عبيد الله حمى النبي ﷺ بجسده، أُصيب بأكثر من 70 جرحاً. شُلّت يده. قال النبي ﷺ: "من سره أن ينظر إلى شهيد يمشي على وجه الأرض فلينظر إلى طلحة."',
      en: 'Talha ibn Ubaydillah protected the Prophet ﷺ with his body, receiving over 70 wounds. His hand was paralyzed. The Prophet ﷺ said: "Whoever wants to see a living martyr, let him look at Talha."',
    },
    reference: {
      courseSlug: 'seerah-module-3',
      lessonId: '007-uhud',
    },
    points: 15,
    tags: ['seerah', 'uhud', 'talha'],
  },
  {
    id: 'seerah3-q011',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Que signifie le terme "Ansar" (الأنصار) ?',
      ar: 'ما معنى "الأنصار"؟',
      en: 'What does the term "Ansar" mean?',
    },
    options: [
      { id: 'a', text: { fr: 'Les Auxiliaires / Partisans (de Médine)', ar: 'المناصرون / الداعمون (من المدينة)', en: 'The Helpers / Supporters (from Medina)' } },
      { id: 'b', text: { fr: 'Les Émigrés (de La Mecque)', ar: 'المهاجرون (من مكة)', en: 'The Emigrants (from Mecca)' } },
      { id: 'c', text: { fr: 'Les Guerriers', ar: 'المحاربون', en: 'The Warriors' } },
      { id: 'd', text: { fr: 'Les Savants', ar: 'العلماء', en: 'The Scholars' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les Ansar sont les habitants de Médine (tribus Aws et Khazraj) qui accueillirent le Prophète ﷺ et les Muhajirun. Ils partagèrent tout avec eux. Leur mérite est immense dans le Coran et la Sunna.',
      ar: 'الأنصار هم سكان المدينة (قبيلتا الأوس والخزرج) الذين استقبلوا النبي ﷺ والمهاجرين. شاركوهم كل شيء. فضلهم عظيم في القرآن والسنة.',
      en: 'The Ansar are Medina\'s inhabitants (tribes Aws and Khazraj) who welcomed the Prophet ﷺ and Muhajirun. They shared everything with them. Their merit is immense in Quran and Sunna.',
    },
    reference: {
      courseSlug: 'seerah-module-3',
      lessonId: '002-medine',
    },
    points: 15,
    tags: ['seerah', 'ansar', 'medina'],
  },

  // --- Questions Difficiles (4) ---
  {
    id: 'seerah3-q012',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qu\'était "Bay\'at al-\'Aqaba" (Serments d\'Allégeance d\'Aqaba) ?',
      ar: 'ما هي "بيعة العقبة"؟',
      en: 'What were the "Bay\'at al-\'Aqaba" (Pledges of Aqaba)?',
    },
    options: [
      { id: 'a', text: { fr: 'Serments des Médinois avant la Hijra (2 : 1ère avec 12, 2ème avec 73)', ar: 'بيعات أهل المدينة قبل الهجرة (اثنتان: الأولى 12، الثانية 73)', en: 'Pledges by Medinans before Hijra (2: 1st with 12, 2nd with 73)' } },
      { id: 'b', text: { fr: 'Traité avec Quraysh', ar: 'معاهدة مع قريش', en: 'Treaty with Quraysh' } },
      { id: 'c', text: { fr: 'Alliance avec les Juifs', ar: 'تحالف مع اليهود', en: 'Alliance with Jews' } },
      { id: 'd', text: { fr: 'Serment de guerre', ar: 'بيعة حرب', en: 'War pledge' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: '1ère Aqaba (621) : 12 hommes prêtèrent serment (pas de vol, fornication, infanticide, mensonge). 2ème Aqaba (622) : 73 hommes + 2 femmes jurèrent de protéger le Prophète ﷺ comme leurs propres familles.',
      ar: 'العقبة الأولى (621م): 12 رجلاً بايعوا (لا سرقة، لا زنا، لا قتل أولاد، لا افتراء). العقبة الثانية (622م): 73 رجلاً + امرأتان أقسموا على حماية النبي ﷺ كأهلهم.',
      en: '1st Aqaba (621): 12 men pledged (no theft, fornication, infanticide, slander). 2nd Aqaba (622): 73 men + 2 women swore to protect the Prophet ﷺ like their own families.',
    },
    reference: {
      courseSlug: 'seerah-module-3',
      lessonId: '008-aqaba',
    },
    points: 20,
    tags: ['seerah', 'aqaba', 'bayah'],
  },
  {
    id: 'seerah3-q013',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle tribu juive fut expulsée après Badr pour avoir comploté ?',
      ar: 'أي قبيلة يهودية أُجليت بعد بدر لتآمرها؟',
      en: 'Which Jewish tribe was expelled after Badr for plotting?',
    },
    options: [
      { id: 'a', text: { fr: 'Banu Qaynuqa', ar: 'بنو قينقاع', en: 'Banu Qaynuqa' } },
      { id: 'b', text: { fr: 'Banu Nadir', ar: 'بنو النضير', en: 'Banu Nadir' } },
      { id: 'c', text: { fr: 'Banu Qurayza', ar: 'بنو قريظة', en: 'Banu Qurayza' } },
      { id: 'd', text: { fr: 'Banu Thaqif', ar: 'بنو ثقيف', en: 'Banu Thaqif' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Banu Qaynuqa, orfèvres, rompirent le pacte après Badr. Ils furent assiégés et expulsés (2H). Banu Nadir (4H) après complot d\'assassinat, puis Banu Qurayza (5H) après trahison pendant Khandaq.',
      ar: 'بنو قينقاع، الصاغة، نقضوا العهد بعد بدر. حُوصروا وأُجلوا (2هـ). بنو النضير (4هـ) بعد محاولة اغتيال، ثم بنو قريظة (5هـ) بعد خيانتهم في الخندق.',
      en: 'Banu Qaynuqa, goldsmiths, broke the pact after Badr. They were besieged and expelled (2H). Banu Nadir (4H) after assassination plot, then Banu Qurayza (5H) after treason during Khandaq.',
    },
    reference: {
      courseSlug: 'seerah-module-3',
      lessonId: '009-yahud',
    },
    points: 20,
    tags: ['seerah', 'qaynuqa', 'jews'],
  },
  {
    id: 'seerah3-q014',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Combien de prisonniers Quraysh y eut-il à Badr et que fit le Prophète ﷺ ?',
      ar: 'كم عدد أسرى قريش في بدر وماذا فعل بهم النبي ﷺ؟',
      en: 'How many Quraysh prisoners were there at Badr and what did the Prophet ﷺ do?',
    },
    options: [
      { id: 'a', text: { fr: '70 prisonniers - libérés contre rançon ou enseignement de la lecture', ar: '70 أسيراً - أُطلقوا مقابل فدية أو تعليم القراءة', en: '70 prisoners - freed for ransom or teaching reading' } },
      { id: 'b', text: { fr: 'Tous exécutés', ar: 'أُعدموا جميعاً', en: 'All executed' } },
      { id: 'c', text: { fr: 'Réduits en esclavage', ar: 'استُعبدوا', en: 'Enslaved' } },
      { id: 'd', text: { fr: 'Libérés sans conditions', ar: 'أُطلقوا بلا شروط', en: 'Freed unconditionally' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: '70 mushrikun furent capturés. Le Prophète ﷺ consulta : Abu Bakr suggéra la rançon, Omar l\'exécution. Il choisit la rançon (1000-4000 dirhams) ou l\'enseignement de 10 enfants musulmans à lire.',
      ar: '70 مشركاً أُسروا. استشار النبي ﷺ: أبو بكر اقترح الفداء، عمر القتل. اختار الفداء (1000-4000 درهم) أو تعليم 10 أطفال مسلمين القراءة.',
      en: '70 mushrikun were captured. The Prophet ﷺ consulted: Abu Bakr suggested ransom, Omar execution. He chose ransom (1000-4000 dirhams) or teaching 10 Muslim children to read.',
    },
    reference: {
      courseSlug: 'seerah-module-3',
      lessonId: '004-badr',
    },
    points: 20,
    tags: ['seerah', 'badr', 'prisoners'],
  },
  {
    id: 'seerah3-q015',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qui était le chef des hypocrites (Munafiqun) à Médine ?',
      ar: 'من كان رأس المنافقين في المدينة؟',
      en: 'Who was the chief of hypocrites (Munafiqun) in Medina?',
    },
    options: [
      { id: 'a', text: { fr: 'Abdullah ibn Ubayy ibn Salul', ar: 'عبد الله بن أُبي بن سلول', en: 'Abdullah ibn Ubayy ibn Salul' } },
      { id: 'b', text: { fr: 'Abu Sufyan', ar: 'أبو سفيان', en: 'Abu Sufyan' } },
      { id: 'c', text: { fr: 'Huyayy ibn Akhtab', ar: 'حيي بن أخطب', en: 'Huyayy ibn Akhtab' } },
      { id: 'd', text: { fr: 'Ka\'b ibn al-Ashraf', ar: 'كعب بن الأشرف', en: 'Ka\'b ibn al-Ashraf' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Ibn Ubayy allait être couronné roi de Médine avant l\'arrivée du Prophète ﷺ. Il fit semblant d\'embrasser l\'Islam par dépit. Il causa beaucoup de tort : retrait à Uhud (avec 300 hommes), calomnie d\'Aisha (Ifk).',
      ar: 'ابن أُبي كان سيُتوّج ملكاً على المدينة قبل قدوم النبي ﷺ. أظهر الإسلام حقداً. سبّب أضراراً كثيرة: انسحب في أحد (مع 300 رجل)، حادثة الإفك على عائشة.',
      en: 'Ibn Ubayy was about to be crowned king of Medina before the Prophet\'s ﷺ arrival. He pretended to embrace Islam out of spite. He caused much harm: withdrew at Uhud (with 300 men), slandered Aisha (Ifk).',
    },
    reference: {
      courseSlug: 'seerah-module-3',
      lessonId: '010-munafiqun',
    },
    points: 20,
    tags: ['seerah', 'munafiqun', 'ibn-ubayy'],
  },
];

// ============================================
// Export du Quiz
// ============================================

export const quizSeerahModule3: Quiz = {
  id: 'quiz-seerah-module-3',
  type: 'module',
  courseSlug: 'seerah-module-3',
  title: {
    fr: 'Quiz : Seerah Module 3 - La Période Médinoise (Partie 1)',
    ar: 'اختبار: السيرة الوحدة 3 - الفترة المدنية (الجزء 1)',
    en: 'Quiz: Seerah Module 3 - The Medinan Period (Part 1)',
  },
  description: {
    fr: 'Testez vos connaissances sur la Hijra, l\'établissement à Médine et les premières batailles.',
    ar: 'اختبر معلوماتك عن الهجرة، التأسيس في المدينة والغزوات الأولى.',
    en: 'Test your knowledge of Hijra, establishment in Medina and early battles.',
  },
  instructions: {
    fr: 'Explorez la naissance de l\'État islamique à Médine.',
    ar: 'استكشف نشأة الدولة الإسلامية في المدينة.',
    en: 'Explore the birth of the Islamic State in Medina.',
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

export default quizSeerahModule3;
