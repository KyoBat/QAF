/**
 * Quiz du Hajj (Pèlerinage)
 * 
 * Ce quiz couvre les règles du pèlerinage à La Mecque :
 * conditions, piliers, obligations, types de Hajj.
 * 
 * Leçons couvertes : 001-010
 * Niveau : Débutant à Intermédiaire
 * Questions : 15
 */

import { Quiz, Question } from '../types';

const questions: Question[] = [
  // --- Questions Faciles (5) ---
  {
    id: 'hajj-q001',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quel pilier de l\'Islam représente le Hajj ?',
      ar: 'أي ركن من أركان الإسلام يمثل الحج؟',
      en: 'Which pillar of Islam does Hajj represent?',
    },
    options: [
      { id: 'a', text: { fr: 'Le 3ème pilier', ar: 'الركن الثالث', en: 'The 3rd pillar' } },
      { id: 'b', text: { fr: 'Le 4ème pilier', ar: 'الركن الرابع', en: 'The 4th pillar' } },
      { id: 'c', text: { fr: 'Le 5ème pilier', ar: 'الركن الخامس', en: 'The 5th pillar' } },
      { id: 'd', text: { fr: 'Le 2ème pilier', ar: 'الركن الثاني', en: 'The 2nd pillar' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le Hajj est le 5ème pilier de l\'Islam, obligatoire une fois dans la vie pour celui qui en a les moyens. Allah dit : « Et c\'est un devoir envers Allah pour les gens qui en ont les moyens, d\'aller faire le pèlerinage de la Maison » [3:97].',
      ar: 'الحج هو الركن الخامس من أركان الإسلام، واجب مرة في العمر لمن استطاع. قال تعالى: {وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا} [آل عمران:97].',
      en: 'Hajj is the 5th pillar of Islam, obligatory once in a lifetime for those who are able. Allah says: "And [due] to Allah from the people is a pilgrimage to the House - for whoever is able to find thereto a way" [3:97].',
    },
    reference: {
      courseSlug: 'fiqh-hajj',
      lessonId: '001-introduction-hajj',
    },
    points: 10,
    tags: ['hajj', 'piliers', 'islam'],
  },
  {
    id: 'hajj-q002',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quel est le mois principal du Hajj ?',
      ar: 'ما هو الشهر الرئيسي للحج؟',
      en: 'What is the main month of Hajj?',
    },
    options: [
      { id: 'a', text: { fr: 'Ramadan', ar: 'رمضان', en: 'Ramadan' } },
      { id: 'b', text: { fr: 'Shawwal', ar: 'شوال', en: 'Shawwal' } },
      { id: 'c', text: { fr: 'Dhul Hijja', ar: 'ذو الحجة', en: 'Dhul Hijja' } },
      { id: 'd', text: { fr: 'Muharram', ar: 'محرم', en: 'Muharram' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le Hajj s\'accomplit du 8 au 13 Dhul Hijja. Le jour d\'Arafat (9 Dhul Hijja) est le pilier central du Hajj. Les mois du Hajj sont : Shawwal, Dhul Qa\'da et Dhul Hijja.',
      ar: 'الحج يُؤدى من 8 إلى 13 ذي الحجة. يوم عرفة (9 ذي الحجة) هو الركن الأساسي. أشهر الحج: شوال وذو القعدة وذو الحجة.',
      en: 'Hajj is performed from 8th to 13th Dhul Hijja. The Day of Arafat (9th Dhul Hijja) is the central pillar. The months of Hajj are: Shawwal, Dhul Qa\'da, and Dhul Hijja.',
    },
    reference: {
      courseSlug: 'fiqh-hajj',
      lessonId: '002-temps-hajj',
    },
    points: 10,
    tags: ['hajj', 'dhul-hijja', 'temps'],
  },
  {
    id: 'hajj-q003',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'L\'Ihram désigne le vêtement blanc porté par les pèlerins.',
      ar: 'الإحرام يعني اللباس الأبيض الذي يلبسه الحجاج.',
      en: 'Ihram refers to the white garment worn by pilgrims.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: false,
    explanation: {
      fr: 'L\'Ihram est d\'abord l\'intention d\'entrer dans les rites (niyyah), pas le vêtement. Le vêtement (deux pièces blanches pour l\'homme) est appelé « habits de l\'Ihram » mais l\'Ihram lui-même est un état spirituel.',
      ar: 'الإحرام هو أولاً النية للدخول في النسك، وليس اللباس. اللباس (قطعتان بيضاوان للرجل) يُسمى «ثياب الإحرام» لكن الإحرام نفسه حالة روحية.',
      en: 'Ihram is primarily the intention to enter the rites (niyyah), not the garment. The garment (two white pieces for men) is called "Ihram clothes" but Ihram itself is a spiritual state.',
    },
    reference: {
      courseSlug: 'fiqh-hajj',
      lessonId: '003-ihram',
    },
    points: 10,
    tags: ['hajj', 'ihram', 'definition'],
  },
  {
    id: 'hajj-q004',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Comment s\'appelle le rite de faire 7 tours autour de la Kaaba ?',
      ar: 'ما اسم الطواف حول الكعبة 7 أشواط؟',
      en: 'What is the name of the rite of walking 7 times around the Kaaba?',
    },
    options: [
      { id: 'a', text: { fr: 'Sa\'i', ar: 'السعي', en: 'Sa\'i' } },
      { id: 'b', text: { fr: 'Tawaf', ar: 'الطواف', en: 'Tawaf' } },
      { id: 'c', text: { fr: 'Wuquf', ar: 'الوقوف', en: 'Wuquf' } },
      { id: 'd', text: { fr: 'Ramy', ar: 'الرمي', en: 'Ramy' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Tawaf consiste à faire 7 tours autour de la Kaaba, en commençant par la Pierre Noire. C\'est un pilier du Hajj et de la \'Umra.',
      ar: 'الطواف هو 7 أشواط حول الكعبة، بدءاً من الحجر الأسود. وهو ركن من أركان الحج والعمرة.',
      en: 'Tawaf consists of 7 circuits around the Kaaba, starting from the Black Stone. It is a pillar of Hajj and \'Umra.',
    },
    reference: {
      courseSlug: 'fiqh-hajj',
      lessonId: '004-tawaf',
    },
    points: 10,
    tags: ['hajj', 'tawaf', 'kaaba'],
  },
  {
    id: 'hajj-q005',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'La \'Umra (petit pèlerinage) peut être accomplie :',
      ar: 'العمرة يمكن أداؤها:',
      en: 'Umra (minor pilgrimage) can be performed:',
    },
    options: [
      { id: 'a', text: { fr: 'Seulement pendant le Hajj', ar: 'فقط أثناء الحج', en: 'Only during Hajj' } },
      { id: 'b', text: { fr: 'Toute l\'année', ar: 'طوال السنة', en: 'All year round' } },
      { id: 'c', text: { fr: 'Seulement en Ramadan', ar: 'فقط في رمضان', en: 'Only in Ramadan' } },
      { id: 'd', text: { fr: 'Une fois par vie', ar: 'مرة واحدة في العمر', en: 'Once per lifetime' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La \'Umra peut être accomplie toute l\'année, contrairement au Hajj qui a des jours spécifiques. Elle est sunna mu\'akkada (fortement recommandée) selon la majorité.',
      ar: 'العمرة يمكن أداؤها طوال السنة، بخلاف الحج الذي له أيام محددة. وهي سنة مؤكدة عند الجمهور.',
      en: '\'Umra can be performed all year round, unlike Hajj which has specific days. It is sunna mu\'akkada (strongly recommended) according to the majority.',
    },
    reference: {
      courseSlug: 'fiqh-hajj',
      lessonId: '005-umra',
    },
    points: 10,
    tags: ['hajj', 'umra', 'temps'],
  },

  // --- Questions Moyennes (6) ---
  {
    id: 'hajj-q006',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quels sont les piliers (arkan) du Hajj ?',
      ar: 'ما هي أركان الحج؟',
      en: 'What are the pillars (arkan) of Hajj?',
    },
    options: [
      { id: 'a', text: { fr: 'Ihram, Tawaf, Sa\'i', ar: 'الإحرام والطواف والسعي', en: 'Ihram, Tawaf, Sa\'i' } },
      { id: 'b', text: { fr: 'Ihram, Wuquf à Arafat, Tawaf al-Ifada, Sa\'i', ar: 'الإحرام والوقوف بعرفة وطواف الإفاضة والسعي', en: 'Ihram, Standing at Arafat, Tawaf al-Ifada, Sa\'i' } },
      { id: 'c', text: { fr: 'Seulement Wuquf à Arafat', ar: 'الوقوف بعرفة فقط', en: 'Only Standing at Arafat' } },
      { id: 'd', text: { fr: 'Ramy al-Jamarat uniquement', ar: 'رمي الجمرات فقط', en: 'Ramy al-Jamarat only' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les 4 piliers du Hajj (école hanbalite) : 1) Ihram, 2) Wuquf à Arafat, 3) Tawaf al-Ifada, 4) Sa\'i. Si un pilier est omis, le Hajj est invalide et ne peut être compensé.',
      ar: 'أركان الحج الأربعة (المذهب الحنبلي): 1) الإحرام، 2) الوقوف بعرفة، 3) طواف الإفاضة، 4) السعي. إذا تُرك ركن بطل الحج ولا يُجبر.',
      en: 'The 4 pillars of Hajj (Hanbali school): 1) Ihram, 2) Standing at Arafat, 3) Tawaf al-Ifada, 4) Sa\'i. If a pillar is omitted, Hajj is invalid and cannot be compensated.',
    },
    reference: {
      courseSlug: 'fiqh-hajj',
      lessonId: '006-piliers-hajj',
    },
    points: 15,
    tags: ['hajj', 'piliers', 'arkan'],
  },
  {
    id: 'hajj-q007',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que le Wuquf à Arafat ?',
      ar: 'ما هو الوقوف بعرفة؟',
      en: 'What is the Standing at Arafat?',
    },
    options: [
      { id: 'a', text: { fr: 'Prier à la mosquée d\'Arafat', ar: 'الصلاة في مسجد عرفة', en: 'Praying at Arafat mosque' } },
      { id: 'b', text: { fr: 'Être présent à Arafat le 9 Dhul Hijja, même un instant', ar: 'التواجد في عرفة يوم 9 ذي الحجة ولو لحظة', en: 'Being present at Arafat on 9th Dhul Hijja, even for a moment' } },
      { id: 'c', text: { fr: 'Faire le Tawaf à Arafat', ar: 'الطواف في عرفة', en: 'Doing Tawaf at Arafat' } },
      { id: 'd', text: { fr: 'Dormir à Arafat', ar: 'النوم في عرفة', en: 'Sleeping at Arafat' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Wuquf est le pilier le plus important. Le Prophète ﷺ a dit : « Le Hajj, c\'est Arafat » [Ahmad, Tirmidhi, sahih]. Être présent à Arafat entre le déclin du soleil du 9 et l\'aube du 10 Dhul Hijja.',
      ar: 'الوقوف هو أعظم الأركان. قال النبي ﷺ: «الحج عرفة» [أحمد والترمذي، صحيح]. التواجد في عرفة من زوال الشمس يوم 9 إلى فجر يوم 10 ذي الحجة.',
      en: 'The Standing is the most important pillar. The Prophet ﷺ said: "Hajj is Arafat" [Ahmad, Tirmidhi, sahih]. Being present at Arafat between the decline of the sun on the 9th and dawn of the 10th Dhul Hijja.',
    },
    reference: {
      courseSlug: 'fiqh-hajj',
      lessonId: '007-arafat',
    },
    points: 15,
    tags: ['hajj', 'arafat', 'wuquf'],
  },
  {
    id: 'hajj-q008',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que le Sa\'i ?',
      ar: 'ما هو السعي؟',
      en: 'What is Sa\'i?',
    },
    options: [
      { id: 'a', text: { fr: 'Lancer des pierres sur les stèles', ar: 'رمي الجمرات', en: 'Throwing stones at the pillars' } },
      { id: 'b', text: { fr: 'Marcher 7 fois entre Safa et Marwa', ar: 'المشي 7 أشواط بين الصفا والمروة', en: 'Walking 7 times between Safa and Marwa' } },
      { id: 'c', text: { fr: 'Courir autour de la Kaaba', ar: 'الجري حول الكعبة', en: 'Running around the Kaaba' } },
      { id: 'd', text: { fr: 'Passer la nuit à Mina', ar: 'المبيت في منى', en: 'Spending the night at Mina' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Sa\'i commémore Hajar cherchant de l\'eau pour Ismail. On marche 7 fois entre Safa et Marwa (environ 450m chaque trajet). C\'est un pilier du Hajj et de la \'Umra.',
      ar: 'السعي يُخلد ذكرى هاجر وهي تبحث عن الماء لإسماعيل. نمشي 7 أشواط بين الصفا والمروة (حوالي 450م كل شوط). وهو ركن من أركان الحج والعمرة.',
      en: 'Sa\'i commemorates Hajar searching for water for Ismail. We walk 7 times between Safa and Marwa (about 450m each way). It is a pillar of Hajj and \'Umra.',
    },
    reference: {
      courseSlug: 'fiqh-hajj',
      lessonId: '008-sai',
    },
    points: 15,
    tags: ['hajj', 'sai', 'hajar'],
  },
  {
    id: 'hajj-q009',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quels sont les 3 types de Hajj ?',
      ar: 'ما هي أنواع الحج الثلاثة؟',
      en: 'What are the 3 types of Hajj?',
    },
    options: [
      { id: 'a', text: { fr: 'Ifrad, Tamattu\', Qiran', ar: 'الإفراد والتمتع والقِران', en: 'Ifrad, Tamattu\', Qiran' } },
      { id: 'b', text: { fr: 'Fard, Sunna, Nafila', ar: 'الفرض والسنة والنافلة', en: 'Fard, Sunna, Nafila' } },
      { id: 'c', text: { fr: 'Kabir, Saghir, Wasat', ar: 'الكبير والصغير والوسط', en: 'Kabir, Saghir, Wasat' } },
      { id: 'd', text: { fr: 'Mabrur, Maqbul, Mardud', ar: 'المبرور والمقبول والمردود', en: 'Mabrur, Maqbul, Mardud' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les 3 types : Ifrad (Hajj seul), Tamattu\' (\'Umra puis Hajj avec rupture d\'Ihram), Qiran (\'Umra et Hajj ensemble sans rupture). Tamattu\' est le plus facile et recommandé par le Prophète ﷺ.',
      ar: 'الأنواع الثلاثة: الإفراد (الحج فقط)، التمتع (العمرة ثم الحج مع التحلل)، القِران (العمرة والحج معاً بدون تحلل). التمتع أسهل وأوصى به النبي ﷺ.',
      en: 'The 3 types: Ifrad (Hajj only), Tamattu\' (\'Umra then Hajj with breaking Ihram), Qiran (\'Umra and Hajj together without breaking). Tamattu\' is easiest and recommended by the Prophet ﷺ.',
    },
    reference: {
      courseSlug: 'fiqh-hajj',
      lessonId: '001-introduction-hajj',
    },
    points: 15,
    tags: ['hajj', 'types', 'tamattu'],
  },
  {
    id: 'hajj-q010',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce qui est interdit pendant l\'état d\'Ihram ?',
      ar: 'ما المحظور في الإحرام؟',
      en: 'What is forbidden during the state of Ihram?',
    },
    options: [
      { id: 'a', text: { fr: 'Manger et boire', ar: 'الأكل والشرب', en: 'Eating and drinking' } },
      { id: 'b', text: { fr: 'Se couper les cheveux et les ongles', ar: 'قص الشعر والأظافر', en: 'Cutting hair and nails' } },
      { id: 'c', text: { fr: 'Marcher et parler', ar: 'المشي والكلام', en: 'Walking and talking' } },
      { id: 'd', text: { fr: 'Dormir', ar: 'النوم', en: 'Sleeping' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les interdits de l\'Ihram incluent : couper cheveux/ongles, parfum, chasse, relations intimes, mariage, vêtements cousus (pour l\'homme), se couvrir la tête (pour l\'homme).',
      ar: 'محظورات الإحرام تشمل: قص الشعر والأظافر، الطيب، الصيد، الجماع، النكاح، لبس المخيط (للرجل)، تغطية الرأس (للرجل).',
      en: 'Ihram prohibitions include: cutting hair/nails, perfume, hunting, intimate relations, marriage, sewn clothing (for men), covering the head (for men).',
    },
    reference: {
      courseSlug: 'fiqh-hajj',
      lessonId: '003-ihram',
    },
    points: 15,
    tags: ['hajj', 'ihram', 'interdits'],
  },
  {
    id: 'hajj-q011',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Que fait-on le jour de l\'Aïd al-Adha (10 Dhul Hijja) pendant le Hajj ?',
      ar: 'ماذا يُفعل يوم عيد الأضحى (10 ذي الحجة) في الحج؟',
      en: 'What is done on Eid al-Adha day (10th Dhul Hijja) during Hajj?',
    },
    options: [
      { id: 'a', text: { fr: 'Wuquf à Arafat', ar: 'الوقوف بعرفة', en: 'Standing at Arafat' } },
      { id: 'b', text: { fr: 'Ramy, sacrifice, rasage, Tawaf al-Ifada', ar: 'الرمي والذبح والحلق وطواف الإفاضة', en: 'Ramy, sacrifice, shaving, Tawaf al-Ifada' } },
      { id: 'c', text: { fr: 'Seulement le Tawaf d\'adieu', ar: 'طواف الوداع فقط', en: 'Only the farewell Tawaf' } },
      { id: 'd', text: { fr: 'Repos complet', ar: 'راحة كاملة', en: 'Complete rest' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le 10 Dhul Hijja (Yawm an-Nahr) est le jour le plus chargé : 1) Ramy de Jamrat al-Aqaba, 2) Sacrifice (hady), 3) Rasage/coupe de cheveux, 4) Tawaf al-Ifada. C\'est le premier jour de désacralisation.',
      ar: 'يوم 10 ذي الحجة (يوم النحر) أكثر الأيام ازدحاماً: 1) رمي جمرة العقبة، 2) الذبح (الهدي)، 3) الحلق أو التقصير، 4) طواف الإفاضة. وهو أول يوم للتحلل.',
      en: 'The 10th Dhul Hijja (Yawm an-Nahr) is the busiest day: 1) Ramy of Jamrat al-Aqaba, 2) Sacrifice (hady), 3) Shaving/cutting hair, 4) Tawaf al-Ifada. It is the first day of exiting Ihram.',
    },
    reference: {
      courseSlug: 'fiqh-hajj',
      lessonId: '009-yawm-nahr',
    },
    points: 15,
    tags: ['hajj', 'eid', 'nahr'],
  },

  // --- Questions Difficiles (4) ---
  {
    id: 'hajj-q012',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle est la différence entre un pilier (rukn) et une obligation (wajib) du Hajj ?',
      ar: 'ما الفرق بين الركن والواجب في الحج؟',
      en: 'What is the difference between a pillar (rukn) and an obligation (wajib) of Hajj?',
    },
    options: [
      { id: 'a', text: { fr: 'Aucune différence', ar: 'لا فرق', en: 'No difference' } },
      { id: 'b', text: { fr: 'Omettre un pilier invalide le Hajj, omettre un wajib nécessite un sacrifice', ar: 'ترك الركن يُبطل الحج، ترك الواجب يُوجب دماً', en: 'Omitting a pillar invalidates Hajj, omitting a wajib requires a sacrifice' } },
      { id: 'c', text: { fr: 'Les piliers sont facultatifs', ar: 'الأركان اختيارية', en: 'Pillars are optional' } },
      { id: 'd', text: { fr: 'Les obligations sont plus importantes', ar: 'الواجبات أهم', en: 'Obligations are more important' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Un pilier omis = Hajj invalide. Un wajib omis = Hajj valide mais nécessite une fidya (sacrifice). Ex: passer la nuit à Muzdalifa est wajib, si omis on doit sacrifier un mouton.',
      ar: 'ترك الركن = الحج باطل. ترك الواجب = الحج صحيح لكن يلزم فدية (ذبيحة). مثال: المبيت بمزدلفة واجب، إذا تُرك يجب ذبح شاة.',
      en: 'An omitted pillar = invalid Hajj. An omitted wajib = valid Hajj but requires a fidya (sacrifice). Ex: spending the night at Muzdalifa is wajib, if omitted one must sacrifice a sheep.',
    },
    reference: {
      courseSlug: 'fiqh-hajj',
      lessonId: '006-piliers-hajj',
    },
    points: 20,
    tags: ['hajj', 'rukn', 'wajib'],
  },
  {
    id: 'hajj-q013',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qu\'est-ce que le Tawaf al-Wada\' (d\'adieu) ?',
      ar: 'ما هو طواف الوداع؟',
      en: 'What is Tawaf al-Wada\' (farewell)?',
    },
    options: [
      { id: 'a', text: { fr: 'Un pilier obligatoire', ar: 'ركن واجب', en: 'An obligatory pillar' } },
      { id: 'b', text: { fr: 'Le dernier Tawaf avant de quitter La Mecque (wajib)', ar: 'آخر طواف قبل مغادرة مكة (واجب)', en: 'The last Tawaf before leaving Mecca (wajib)' } },
      { id: 'c', text: { fr: 'Optionnel (sunna)', ar: 'مستحب (سنة)', en: 'Optional (sunna)' } },
      { id: 'd', text: { fr: 'Réservé aux résidents de La Mecque', ar: 'خاص بأهل مكة', en: 'Reserved for Mecca residents' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Tawaf d\'adieu est wajib pour ceux qui quittent La Mecque. Le Prophète ﷺ a dit : « Que le dernier engagement de l\'un de vous soit avec la Maison » [Bukhari, Muslim]. Dispensé pour les femmes en menstrues.',
      ar: 'طواف الوداع واجب على من يغادر مكة. قال النبي ﷺ: «لا ينفرن أحد حتى يكون آخر عهده بالبيت» [البخاري، مسلم]. يُعفى منه الحائض.',
      en: 'The farewell Tawaf is wajib for those leaving Mecca. The Prophet ﷺ said: "Let no one leave until their last engagement is with the House" [Bukhari, Muslim]. Menstruating women are exempted.',
    },
    reference: {
      courseSlug: 'fiqh-hajj',
      lessonId: '010-tawaf-wada',
    },
    points: 20,
    tags: ['hajj', 'tawaf', 'wada'],
  },
  {
    id: 'hajj-q014',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qu\'est-ce que le Miqat ?',
      ar: 'ما هو الميقات؟',
      en: 'What is the Miqat?',
    },
    options: [
      { id: 'a', text: { fr: 'Un type de prière', ar: 'نوع من الصلاة', en: 'A type of prayer' } },
      { id: 'b', text: { fr: 'Le lieu désigné pour entrer en Ihram', ar: 'المكان المحدد للإحرام', en: 'The designated place to enter Ihram' } },
      { id: 'c', text: { fr: 'Le sacrifice du Hajj', ar: 'ذبيحة الحج', en: 'The Hajj sacrifice' } },
      { id: 'd', text: { fr: 'La tente à Mina', ar: 'الخيمة في منى', en: 'The tent at Mina' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les Mawaqit (pluriel) sont les lieux où le pèlerin doit entrer en Ihram. Il y en a 5 : Dhul Hulayfah (Médine), al-Juhfah (Syrie/Égypte), Qarn al-Manazil (Najd), Yalamlam (Yémen), Dhat Irq (Irak).',
      ar: 'المواقيت هي الأماكن التي يجب فيها الإحرام. وهي 5: ذو الحليفة (المدينة)، الجحفة (الشام/مصر)، قرن المنازل (نجد)، يلملم (اليمن)، ذات عرق (العراق).',
      en: 'The Mawaqit (plural) are places where the pilgrim must enter Ihram. There are 5: Dhul Hulayfah (Medina), al-Juhfah (Syria/Egypt), Qarn al-Manazil (Najd), Yalamlam (Yemen), Dhat Irq (Iraq).',
    },
    reference: {
      courseSlug: 'fiqh-hajj',
      lessonId: '003-ihram',
    },
    points: 20,
    tags: ['hajj', 'miqat', 'ihram'],
  },
  {
    id: 'hajj-q015',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quel est le sacrifice requis pour celui qui fait le Hajj Tamattu\' ?',
      ar: 'ما الذبيحة المطلوبة لمن يحج متمتعاً؟',
      en: 'What sacrifice is required for someone performing Hajj Tamattu\'?',
    },
    options: [
      { id: 'a', text: { fr: 'Aucun sacrifice', ar: 'لا ذبيحة', en: 'No sacrifice' } },
      { id: 'b', text: { fr: 'Un mouton/chèvre, ou à défaut jeûner 10 jours', ar: 'شاة، أو صيام 10 أيام عند العجز', en: 'A sheep/goat, or fasting 10 days if unable' } },
      { id: 'c', text: { fr: 'Obligatoirement un chameau', ar: 'بعير وجوباً', en: 'Obligatorily a camel' } },
      { id: 'd', text: { fr: 'Seulement une aumône', ar: 'صدقة فقط', en: 'Only charity' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Hady (sacrifice) est obligatoire pour Tamattu\' et Qiran. Si on ne peut pas, on jeûne 3 jours pendant le Hajj et 7 après le retour = 10 jours. Allah dit : « Celui qui n\'en trouve pas doit jeûner trois jours pendant le pèlerinage et sept à votre retour » [2:196].',
      ar: 'الهدي واجب للتمتع والقِران. إذا لم يستطع صام 3 أيام في الحج و7 بعد الرجوع = 10 أيام. قال تعالى: {فَمَن لَّمْ يَجِدْ فَصِيَامُ ثَلَاثَةِ أَيَّامٍ فِي الْحَجِّ وَسَبْعَةٍ إِذَا رَجَعْتُمْ} [البقرة:196].',
      en: 'The Hady (sacrifice) is obligatory for Tamattu\' and Qiran. If unable, fast 3 days during Hajj and 7 after return = 10 days. Allah says: "Whoever cannot find [a sacrifice] should fast three days during Hajj and seven when you return" [2:196].',
    },
    reference: {
      courseSlug: 'fiqh-hajj',
      lessonId: '009-yawm-nahr',
    },
    points: 20,
    tags: ['hajj', 'hady', 'tamattu'],
  },
];

// ============================================
// Export du Quiz
// ============================================

export const quizHajj: Quiz = {
  id: 'quiz-hajj-oumra',
  type: 'module',
  courseSlug: 'fiqh-hajj',
  title: {
    fr: 'Quiz : Le Pèlerinage (Hajj et \'Umra)',
    ar: 'اختبار: الحج والعمرة',
    en: 'Quiz: Pilgrimage (Hajj and \'Umra)',
  },
  description: {
    fr: 'Testez vos connaissances sur les rites du Hajj et de la \'Umra : piliers, obligations, et pratiques.',
    ar: 'اختبر معلوماتك عن مناسك الحج والعمرة: الأركان والواجبات والأعمال.',
    en: 'Test your knowledge of Hajj and \'Umra rites: pillars, obligations, and practices.',
  },
  instructions: {
    fr: 'Ce quiz vous aidera à maîtriser les règles du pèlerinage avant votre voyage.',
    ar: 'هذا الاختبار سيساعدك على إتقان أحكام الحج قبل سفرك.',
    en: 'This quiz will help you master the pilgrimage rules before your journey.',
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

export default quizHajj;
