/**
 * Examen Final - Fiqh du Hajj (Pèlerinage)
 * 
 * 45 questions QCM couvrant tous les aspects du Hajj :
 * - Définition et statut
 * - Conditions et types (Ifrad, Tamattu', Qiran)
 * - Miqat et Ihram
 * - Rites du Hajj
 * - Omra
 * - Interdits et expiations
 */

import { ExamConfig, ExamQuestion } from '../types';

// ============================================
// Questions - Définition et Statut
// ============================================

const definitionQuestions: ExamQuestion[] = [
  {
    id: 'hajj-def-001',
    question: {
      fr: 'Qu\'est-ce que le Hajj ?',
      ar: 'ما هو الحج؟',
      en: 'What is Hajj?',
    },
    options: [
      { id: 'a', text: { fr: 'Une visite à Médine', ar: 'زيارة المدينة', en: 'A visit to Medina' } },
      { id: 'b', text: { fr: 'Le pèlerinage à La Mecque à des moments précis avec des rites spécifiques', ar: 'قصد مكة في وقت معين بأعمال مخصوصة', en: 'Pilgrimage to Mecca at specific times with specific rites' } },
      { id: 'c', text: { fr: 'Une prière spéciale', ar: 'صلاة خاصة', en: 'A special prayer' } },
      { id: 'd', text: { fr: 'Le jeûne du mois de Dhul Hijja', ar: 'صيام شهر ذي الحجة', en: 'Fasting the month of Dhul Hijja' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Hajj est le pèlerinage à La Mecque (Masjid al-Haram, Arafat, Mina, Muzdalifa) effectué pendant les mois du Hajj avec des rites précis.',
      ar: 'الحج هو قصد مكة (المسجد الحرام، عرفات، منى، مزدلفة) في أشهر الحج بأعمال مخصوصة.',
      en: 'Hajj is the pilgrimage to Mecca (Masjid al-Haram, Arafat, Mina, Muzdalifa) during Hajj months with specific rites.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'definition',
  },
  {
    id: 'hajj-def-002',
    question: {
      fr: 'Quel est le statut du Hajj en Islam ?',
      ar: 'ما حكم الحج في الإسلام؟',
      en: 'What is the ruling of Hajj in Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Sunna Mu\'akkada', ar: 'سنة مؤكدة', en: 'Confirmed Sunnah' } },
      { id: 'b', text: { fr: 'Obligatoire une fois dans la vie pour celui qui en a la capacité', ar: 'فرض مرة واحدة في العمر لمن استطاع', en: 'Obligatory once in lifetime for those able' } },
      { id: 'c', text: { fr: 'Recommandé chaque année', ar: 'مستحب كل عام', en: 'Recommended every year' } },
      { id: 'd', text: { fr: 'Permis mais pas encouragé', ar: 'مباح لكن غير مشجع', en: 'Permissible but not encouraged' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Hajj est le 5ème pilier de l\'Islam, obligatoire une seule fois dans la vie pour celui qui en a la capacité physique et financière.',
      ar: 'الحج هو الركن الخامس من أركان الإسلام، واجب مرة واحدة في العمر لمن استطاع إليه سبيلاً.',
      en: 'Hajj is the 5th pillar of Islam, obligatory once in a lifetime for those with physical and financial ability.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'definition',
  },
  {
    id: 'hajj-def-003',
    question: {
      fr: 'Quand le Hajj a-t-il été rendu obligatoire ?',
      ar: 'متى فُرض الحج؟',
      en: 'When was Hajj made obligatory?',
    },
    options: [
      { id: 'a', text: { fr: 'En l\'an 6 de l\'Hégire', ar: 'السنة السادسة للهجرة', en: 'In year 6 of Hijra' } },
      { id: 'b', text: { fr: 'En l\'an 9 de l\'Hégire', ar: 'السنة التاسعة للهجرة', en: 'In year 9 of Hijra' } },
      { id: 'c', text: { fr: 'Avant l\'Hégire', ar: 'قبل الهجرة', en: 'Before Hijra' } },
      { id: 'd', text: { fr: 'En l\'an 2 de l\'Hégire', ar: 'السنة الثانية للهجرة', en: 'In year 2 of Hijra' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Hajj a été rendu obligatoire en l\'an 9 de l\'Hégire, avec la révélation du verset : "Et c\'est un devoir envers Allah pour les gens qui en ont les moyens, d\'aller faire le pèlerinage."',
      ar: 'فُرض الحج في السنة التاسعة للهجرة، بنزول آية: "وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا."',
      en: 'Hajj was made obligatory in year 9 of Hijra, with the revelation: "And pilgrimage to the House is a duty unto Allah for mankind, for him who can find a way."',
    },
    points: 2,
    difficulty: 'medium',
    category: 'definition',
  },
  {
    id: 'hajj-def-004',
    question: {
      fr: 'Quels sont les mois du Hajj ?',
      ar: 'ما هي أشهر الحج؟',
      en: 'What are the months of Hajj?',
    },
    options: [
      { id: 'a', text: { fr: 'Ramadan, Shawwal, Dhul Qa\'da', ar: 'رمضان، شوال، ذو القعدة', en: 'Ramadan, Shawwal, Dhul Qa\'da' } },
      { id: 'b', text: { fr: 'Shawwal, Dhul Qa\'da, les 10 premiers jours de Dhul Hijja', ar: 'شوال، ذو القعدة، عشر ذي الحجة', en: 'Shawwal, Dhul Qa\'da, first 10 days of Dhul Hijja' } },
      { id: 'c', text: { fr: 'Muharram, Safar, Rabi\' al-Awwal', ar: 'محرم، صفر، ربيع الأول', en: 'Muharram, Safar, Rabi\' al-Awwal' } },
      { id: 'd', text: { fr: 'N\'importe quel mois', ar: 'أي شهر', en: 'Any month' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les mois du Hajj sont : Shawwal, Dhul Qa\'da, et les 10 premiers jours de Dhul Hijja (ou tout le mois selon certains).',
      ar: 'أشهر الحج هي: شوال، ذو القعدة، والعشر الأُوَل من ذي الحجة (أو الشهر كله عند بعضهم).',
      en: 'The Hajj months are: Shawwal, Dhul Qa\'da, and the first 10 days of Dhul Hijja (or the whole month according to some).',
    },
    points: 2,
    difficulty: 'medium',
    category: 'definition',
  },
];

// ============================================
// Questions - Conditions du Hajj
// ============================================

const conditionsQuestions: ExamQuestion[] = [
  {
    id: 'hajj-cond-001',
    question: {
      fr: 'Quelles sont les conditions d\'obligation du Hajj ?',
      ar: 'ما شروط وجوب الحج؟',
      en: 'What are the conditions for Hajj to be obligatory?',
    },
    options: [
      { id: 'a', text: { fr: 'Être riche uniquement', ar: 'أن يكون غنيًا فقط', en: 'Being rich only' } },
      { id: 'b', text: { fr: 'Islam, raison, puberté, liberté, capacité (Istita\'a)', ar: 'الإسلام، العقل، البلوغ، الحرية، الاستطاعة', en: 'Islam, sanity, puberty, freedom, ability (Istita\'a)' } },
      { id: 'c', text: { fr: 'Être marié', ar: 'أن يكون متزوجًا', en: 'Being married' } },
      { id: 'd', text: { fr: 'Avoir plus de 50 ans', ar: 'أن يكون عمره فوق 50 سنة', en: 'Being over 50 years' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les conditions sont : être musulman, sain d\'esprit, pubère, libre, et avoir la capacité (financière, physique, sécurité du chemin).',
      ar: 'الشروط هي: الإسلام، العقل، البلوغ، الحرية، والاستطاعة (المالية والبدنية وأمن الطريق).',
      en: 'Conditions are: being Muslim, sane, mature, free, and having ability (financial, physical, safe travel).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'conditions',
  },
  {
    id: 'hajj-cond-002',
    question: {
      fr: 'Que signifie "Istita\'a" (الاستطاعة) ?',
      ar: 'ما معنى الاستطاعة؟',
      en: 'What does "Istita\'a" mean?',
    },
    options: [
      { id: 'a', text: { fr: 'La volonté de voyager', ar: 'الرغبة في السفر', en: 'The desire to travel' } },
      { id: 'b', text: { fr: 'La capacité financière, physique et la sécurité du voyage', ar: 'القدرة المالية والبدنية وأمن الطريق', en: 'Financial, physical ability and travel safety' } },
      { id: 'c', text: { fr: 'La permission du gouvernement', ar: 'إذن الحكومة', en: 'Government permission' } },
      { id: 'd', text: { fr: 'Avoir un guide', ar: 'وجود مرشد', en: 'Having a guide' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'L\'Istita\'a inclut : les moyens financiers pour le voyage et les dépenses de la famille, la santé physique, et la sécurité du chemin.',
      ar: 'الاستطاعة تشمل: القدرة المالية للسفر ونفقة الأهل، والصحة البدنية، وأمن الطريق.',
      en: 'Istita\'a includes: financial means for travel and family expenses, physical health, and safe travel route.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'conditions',
  },
  {
    id: 'hajj-cond-003',
    question: {
      fr: 'Une femme peut-elle faire le Hajj sans Mahram ?',
      ar: 'هل يجوز للمرأة الحج بدون محرم؟',
      en: 'Can a woman perform Hajj without a Mahram?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, toujours', ar: 'نعم، دائمًا', en: 'Yes, always' } },
      { id: 'b', text: { fr: 'La majorité exige un Mahram ; certains permettent avec des femmes de confiance', ar: 'الجمهور يشترط المحرم؛ وبعضهم يجيز مع نساء ثقات', en: 'Majority requires Mahram; some allow with trustworthy women' } },
      { id: 'c', text: { fr: 'Non, jamais', ar: 'لا، أبدًا', en: 'No, never' } },
      { id: 'd', text: { fr: 'Seulement après 60 ans', ar: 'فقط بعد 60 سنة', en: 'Only after 60' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les Hanafis et Hanbalis exigent un Mahram. Les Malikis et Shafi\'is permettent le voyage avec un groupe de femmes de confiance.',
      ar: 'الحنفية والحنابلة يشترطون المحرم. والمالكية والشافعية يجيزون السفر مع رفقة نساء ثقات.',
      en: 'Hanafis and Hanbalis require a Mahram. Malikis and Shafi\'is permit travel with trustworthy women companions.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'conditions',
  },
  {
    id: 'hajj-cond-004',
    question: {
      fr: 'Peut-on accomplir le Hajj au nom d\'une personne décédée ?',
      ar: 'هل يجوز الحج عن الميت؟',
      en: 'Can Hajj be performed on behalf of a deceased person?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, jamais', ar: 'لا، أبدًا', en: 'No, never' } },
      { id: 'b', text: { fr: 'Oui, si la personne était capable et n\'a pas fait le Hajj', ar: 'نعم، إذا كان قادرًا ولم يحج', en: 'Yes, if the person was able and did not perform Hajj' } },
      { id: 'c', text: { fr: 'Seulement pour les parents', ar: 'للوالدين فقط', en: 'Only for parents' } },
      { id: 'd', text: { fr: 'Seulement pour les hommes', ar: 'للرجال فقط', en: 'Only for men' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Une femme a demandé au Prophète ﷺ : "Mon père est décédé sans avoir fait le Hajj. Puis-je le faire pour lui ?" Il a répondu : "Oui, fais le Hajj pour lui."',
      ar: 'سألت امرأة النبي ﷺ: "إن أبي أدركته فريضة الحج ولم يحج، أفأحج عنه؟" قال: "نعم، حجّي عنه."',
      en: 'A woman asked the Prophet ﷺ: "My father died without having performed Hajj. Can I perform it for him?" He said: "Yes, perform Hajj for him."',
    },
    points: 2,
    difficulty: 'medium',
    category: 'conditions',
  },
];

// ============================================
// Questions - Types de Hajj
// ============================================

const typesQuestions: ExamQuestion[] = [
  {
    id: 'hajj-types-001',
    question: {
      fr: 'Combien de types de Nusk (rites) y a-t-il pour le Hajj ?',
      ar: 'كم نوعًا من أنساك الحج؟',
      en: 'How many types of Nusk (rites) are there for Hajj?',
    },
    options: [
      { id: 'a', text: { fr: '2 types', ar: 'نوعان', en: '2 types' } },
      { id: 'b', text: { fr: '3 types : Ifrad, Tamattu\', Qiran', ar: '3 أنواع: الإفراد، التمتع، القِران', en: '3 types: Ifrad, Tamattu\', Qiran' } },
      { id: 'c', text: { fr: '5 types', ar: '5 أنواع', en: '5 types' } },
      { id: 'd', text: { fr: '1 seul type', ar: 'نوع واحد', en: '1 type only' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les 3 types sont : Ifrad (Hajj seul), Tamattu\' (Omra puis Hajj), Qiran (Omra et Hajj ensemble).',
      ar: 'الأنساك الثلاثة هي: الإفراد (الحج فقط)، التمتع (عمرة ثم حج)، القِران (عمرة وحج معًا).',
      en: 'The 3 types are: Ifrad (Hajj only), Tamattu\' (Umrah then Hajj), Qiran (Umrah and Hajj combined).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'types',
  },
  {
    id: 'hajj-types-002',
    question: {
      fr: 'Qu\'est-ce que le Hajj Tamattu\' ?',
      ar: 'ما هو حج التمتع؟',
      en: 'What is Hajj Tamattu\'?',
    },
    options: [
      { id: 'a', text: { fr: 'Faire le Hajj seul sans Omra', ar: 'أداء الحج وحده بدون عمرة', en: 'Performing Hajj alone without Umrah' } },
      { id: 'b', text: { fr: 'Faire la Omra, se désacraliser, puis entrer en Ihram pour le Hajj', ar: 'أداء العمرة ثم التحلل ثم الإحرام بالحج', en: 'Performing Umrah, exiting Ihram, then entering Ihram for Hajj' } },
      { id: 'c', text: { fr: 'Combiner Omra et Hajj dans le même Ihram', ar: 'الجمع بين العمرة والحج في إحرام واحد', en: 'Combining Umrah and Hajj in the same Ihram' } },
      { id: 'd', text: { fr: 'Faire le Hajj pour quelqu\'un d\'autre', ar: 'الحج عن شخص آخر', en: 'Performing Hajj for someone else' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Tamattu\' : on fait d\'abord la Omra, on se désacralise, puis on entre en Ihram pour le Hajj le 8 Dhul Hijja. Un sacrifice (Hady) est obligatoire.',
      ar: 'التمتع: أداء العمرة أولاً ثم التحلل، ثم الإحرام بالحج يوم 8 ذي الحجة. ويجب فيه الهدي.',
      en: 'Tamattu\': perform Umrah first, exit Ihram, then enter Ihram for Hajj on 8th Dhul Hijja. A sacrifice (Hady) is required.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'types',
  },
  {
    id: 'hajj-types-003',
    question: {
      fr: 'Qu\'est-ce que le Hajj Qiran ?',
      ar: 'ما هو حج القِران؟',
      en: 'What is Hajj Qiran?',
    },
    options: [
      { id: 'a', text: { fr: 'Faire le Hajj seul', ar: 'أداء الحج وحده', en: 'Performing Hajj alone' } },
      { id: 'b', text: { fr: 'Entrer en Ihram pour la Omra ET le Hajj ensemble, rester en Ihram', ar: 'الإحرام بالعمرة والحج معًا والبقاء في الإحرام', en: 'Enter Ihram for Umrah AND Hajj together, stay in Ihram' } },
      { id: 'c', text: { fr: 'Faire la Omra puis le Hajj séparément', ar: 'أداء العمرة ثم الحج منفصلين', en: 'Perform Umrah then Hajj separately' } },
      { id: 'd', text: { fr: 'Faire le Hajj deux fois', ar: 'أداء الحج مرتين', en: 'Performing Hajj twice' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Qiran : on entre en Ihram pour la Omra et le Hajj ensemble, on fait le Tawaf et le Sa\'y, et on reste en Ihram jusqu\'à la fin du Hajj.',
      ar: 'القِران: الإحرام بالعمرة والحج معًا، ويطوف ويسعى، ويبقى في الإحرام حتى نهاية الحج.',
      en: 'Qiran: enter Ihram for Umrah and Hajj together, perform Tawaf and Sa\'y, remain in Ihram until Hajj ends.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'types',
  },
  {
    id: 'hajj-types-004',
    question: {
      fr: 'Quel type de Hajj le Prophète ﷺ a-t-il recommandé ?',
      ar: 'أي أنواع الحج أوصى به النبي ﷺ؟',
      en: 'Which type of Hajj did the Prophet ﷺ recommend?',
    },
    options: [
      { id: 'a', text: { fr: 'Ifrad', ar: 'الإفراد', en: 'Ifrad' } },
      { id: 'b', text: { fr: 'Tamattu\'', ar: 'التمتع', en: 'Tamattu\'' } },
      { id: 'c', text: { fr: 'Qiran', ar: 'القِران', en: 'Qiran' } },
      { id: 'd', text: { fr: 'Aucun en particulier', ar: 'لا شيء بالتحديد', en: 'None in particular' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Si j\'avais su ce que je sais maintenant, je n\'aurais pas amené de sacrifice et j\'aurais fait le Tamattu\'." Il a ordonné à ses compagnons de faire le Tamattu\'.',
      ar: 'قال النبي ﷺ: "لو استقبلت من أمري ما استدبرت ما سقت الهدي ولتحللت." وأمر أصحابه بالتمتع.',
      en: 'The Prophet ﷺ said: "Had I known what I know now, I would not have brought the sacrifice and would have performed Tamattu\'." He ordered his companions to do Tamattu\'.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'types',
  },
];

// ============================================
// Questions - Ihram et Miqat
// ============================================

const ihramQuestions: ExamQuestion[] = [
  {
    id: 'hajj-ihram-001',
    question: {
      fr: 'Qu\'est-ce que le Miqat ?',
      ar: 'ما هو الميقات؟',
      en: 'What is Miqat?',
    },
    options: [
      { id: 'a', text: { fr: 'Le temps de la prière', ar: 'وقت الصلاة', en: 'Prayer time' } },
      { id: 'b', text: { fr: 'Le lieu où le pèlerin entre en état d\'Ihram', ar: 'المكان الذي يُحرم منه الحاج', en: 'The place where the pilgrim enters Ihram' } },
      { id: 'c', text: { fr: 'Le vêtement de l\'Ihram', ar: 'لباس الإحرام', en: 'The Ihram clothing' } },
      { id: 'd', text: { fr: 'La Ka\'ba', ar: 'الكعبة', en: 'The Ka\'ba' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Miqat est le lieu désigné où le pèlerin doit entrer en Ihram. Il y a 5 Miqat pour les différentes directions.',
      ar: 'الميقات هو المكان المحدد الذي يجب على الحاج الإحرام منه. وهناك 5 مواقيت للجهات المختلفة.',
      en: 'Miqat is the designated place where the pilgrim must enter Ihram. There are 5 Miqat for different directions.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'ihram',
  },
  {
    id: 'hajj-ihram-002',
    question: {
      fr: 'Quel est le Miqat pour les gens de Médine ?',
      ar: 'ما ميقات أهل المدينة؟',
      en: 'What is the Miqat for people of Medina?',
    },
    options: [
      { id: 'a', text: { fr: 'Dhul Hulaifa (Abyar Ali)', ar: 'ذو الحليفة (أبيار علي)', en: 'Dhul Hulaifa (Abyar Ali)' } },
      { id: 'b', text: { fr: 'Juhfa', ar: 'الجحفة', en: 'Juhfa' } },
      { id: 'c', text: { fr: 'Qarn al-Manazil', ar: 'قرن المنازل', en: 'Qarn al-Manazil' } },
      { id: 'd', text: { fr: 'Yalamlam', ar: 'يلملم', en: 'Yalamlam' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Dhul Hulaifa (aujourd\'hui Abyar Ali) est le Miqat le plus éloigné de La Mecque (environ 450 km), pour les gens venant de Médine.',
      ar: 'ذو الحليفة (اليوم أبيار علي) هو أبعد المواقيت عن مكة (حوالي 450 كم)، لأهل المدينة.',
      en: 'Dhul Hulaifa (today Abyar Ali) is the farthest Miqat from Mecca (about 450 km), for people coming from Medina.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'ihram',
  },
  {
    id: 'hajj-ihram-003',
    question: {
      fr: 'Quels sont les interdits de l\'Ihram pour les hommes ?',
      ar: 'ما محظورات الإحرام للرجال؟',
      en: 'What are the Ihram prohibitions for men?',
    },
    options: [
      { id: 'a', text: { fr: 'Seulement manger de la viande', ar: 'أكل اللحم فقط', en: 'Only eating meat' } },
      { id: 'b', text: { fr: 'Vêtements cousus, se parfumer, se couper les cheveux/ongles, rapports, chasser', ar: 'المخيط، الطيب، قص الشعر/الأظافر، الجماع، الصيد', en: 'Sewn clothes, perfume, cutting hair/nails, intimacy, hunting' } },
      { id: 'c', text: { fr: 'Parler aux femmes', ar: 'التحدث مع النساء', en: 'Talking to women' } },
      { id: 'd', text: { fr: 'Dormir la nuit', ar: 'النوم ليلاً', en: 'Sleeping at night' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les interdits incluent : porter des vêtements cousus, utiliser du parfum, se couper les cheveux/ongles, les rapports intimes, contracter mariage, chasser.',
      ar: 'المحظورات تشمل: لبس المخيط، استعمال الطيب، قص الشعر/الأظافر، الجماع، عقد النكاح، الصيد.',
      en: 'Prohibitions include: wearing sewn clothes, using perfume, cutting hair/nails, intimacy, marriage contract, hunting.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'ihram',
  },
  {
    id: 'hajj-ihram-004',
    question: {
      fr: 'Qu\'est-ce que la Talbiya ?',
      ar: 'ما هي التلبية؟',
      en: 'What is Talbiya?',
    },
    options: [
      { id: 'a', text: { fr: 'Une prière de deux unités', ar: 'صلاة ركعتين', en: 'A two-unit prayer' } },
      { id: 'b', text: { fr: '"Labbayk Allahumma Labbayk..." - Invocation prononcée en Ihram', ar: '"لبيك اللهم لبيك..." - دعاء يُردد في الإحرام', en: '"Labbayk Allahumma Labbayk..." - Invocation recited in Ihram' } },
      { id: 'c', text: { fr: 'Le sacrifice', ar: 'الذبيحة', en: 'The sacrifice' } },
      { id: 'd', text: { fr: 'Le Tawaf autour de la Ka\'ba', ar: 'الطواف حول الكعبة', en: 'Tawaf around Ka\'ba' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: '"Labbayk Allahumma Labbayk, Labbayka la sharika laka Labbayk, Innal hamda wan-ni\'mata laka wal-mulk, la sharika lak."',
      ar: '"لبيك اللهم لبيك، لبيك لا شريك لك لبيك، إن الحمد والنعمة لك والملك، لا شريك لك."',
      en: '"Labbayk Allahumma Labbayk, Labbayka la sharika laka Labbayk, Innal hamda wan-ni\'mata laka wal-mulk, la sharika lak."',
    },
    points: 2,
    difficulty: 'easy',
    category: 'ihram',
  },
];

// ============================================
// Questions - Rites du Hajj
// ============================================

const ritesQuestions: ExamQuestion[] = [
  {
    id: 'hajj-rites-001',
    question: {
      fr: 'Quel est le pilier (Rukn) le plus important du Hajj ?',
      ar: 'ما أهم ركن من أركان الحج؟',
      en: 'What is the most important pillar of Hajj?',
    },
    options: [
      { id: 'a', text: { fr: 'Le Tawaf', ar: 'الطواف', en: 'Tawaf' } },
      { id: 'b', text: { fr: 'Le Wuquf (station) à Arafat', ar: 'الوقوف بعرفة', en: 'Standing at Arafat' } },
      { id: 'c', text: { fr: 'Le Sa\'y', ar: 'السعي', en: 'Sa\'y' } },
      { id: 'd', text: { fr: 'Le jet de pierres', ar: 'رمي الجمرات', en: 'Stoning' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Le Hajj, c\'est Arafat." Sans le Wuquf à Arafat le 9 Dhul Hijja, le Hajj n\'est pas valide.',
      ar: 'قال النبي ﷺ: "الحج عرفة." وبدون الوقوف بعرفة في 9 ذي الحجة لا يصح الحج.',
      en: 'The Prophet ﷺ said: "Hajj is Arafat." Without standing at Arafat on 9th Dhul Hijja, Hajj is invalid.',
    },
    points: 3,
    difficulty: 'medium',
    category: 'rites',
  },
  {
    id: 'hajj-rites-002',
    question: {
      fr: 'Quand commence et finit le Wuquf à Arafat ?',
      ar: 'متى يبدأ وينتهي الوقوف بعرفة؟',
      en: 'When does standing at Arafat begin and end?',
    },
    options: [
      { id: 'a', text: { fr: 'Du Fajr au Dhuhr du 9 Dhul Hijja', ar: 'من الفجر إلى الظهر في 9 ذي الحجة', en: 'From Fajr to Dhuhr on 9th Dhul Hijja' } },
      { id: 'b', text: { fr: 'Du Zawaal (midi) du 9 au Fajr du 10 Dhul Hijja', ar: 'من زوال 9 إلى فجر 10 ذي الحجة', en: 'From Zawaal (noon) of 9th to Fajr of 10th Dhul Hijja' } },
      { id: 'c', text: { fr: 'Toute la journée du 10 Dhul Hijja', ar: 'طوال يوم 10 ذي الحجة', en: 'All day on 10th Dhul Hijja' } },
      { id: 'd', text: { fr: 'Du 8 au 10 Dhul Hijja', ar: 'من 8 إلى 10 ذي الحجة', en: 'From 8th to 10th Dhul Hijja' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Wuquf commence après le Zawaal (passage du soleil au zénith) le 9 Dhul Hijja et s\'étend jusqu\'à l\'aube du 10.',
      ar: 'الوقوف يبدأ بعد الزوال في 9 ذي الحجة ويمتد حتى فجر يوم 10.',
      en: 'Standing begins after Zawaal (sun passing zenith) on 9th Dhul Hijja and extends until dawn of 10th.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'rites',
  },
  {
    id: 'hajj-rites-003',
    question: {
      fr: 'Qu\'est-ce que Muzdalifa ?',
      ar: 'ما هي مزدلفة؟',
      en: 'What is Muzdalifa?',
    },
    options: [
      { id: 'a', text: { fr: 'Un marché à La Mecque', ar: 'سوق في مكة', en: 'A market in Mecca' } },
      { id: 'b', text: { fr: 'Le lieu entre Arafat et Mina où on passe la nuit après Arafat', ar: 'المكان بين عرفة ومنى حيث يُبات بعد عرفة', en: 'The place between Arafat and Mina where pilgrims spend the night after Arafat' } },
      { id: 'c', text: { fr: 'La colline de Safa', ar: 'جبل الصفا', en: 'Mount Safa' } },
      { id: 'd', text: { fr: 'Une mosquée à Médine', ar: 'مسجد في المدينة', en: 'A mosque in Medina' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Muzdalifa (aussi appelée Mash\'ar al-Haram) est où les pèlerins passent la nuit du 9 au 10 après avoir quitté Arafat, et y ramassent les cailloux pour le jet.',
      ar: 'مزدلفة (المشعر الحرام) حيث يبيت الحجاج ليلة 10 بعد الإفاضة من عرفة، ويجمعون منها الحصى للرمي.',
      en: 'Muzdalifa (also called Mash\'ar al-Haram) is where pilgrims spend the night of 10th after leaving Arafat, and collect pebbles for stoning.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'rites',
  },
  {
    id: 'hajj-rites-004',
    question: {
      fr: 'Quels sont les actes du jour du sacrifice (10 Dhul Hijja) ?',
      ar: 'ما هي أعمال يوم النحر (10 ذي الحجة)؟',
      en: 'What are the acts on the day of sacrifice (10 Dhul Hijja)?',
    },
    options: [
      { id: 'a', text: { fr: 'Seulement le Tawaf', ar: 'الطواف فقط', en: 'Only Tawaf' } },
      { id: 'b', text: { fr: 'Jet de Jamrat al-Aqaba, sacrifice, rasage, Tawaf al-Ifada', ar: 'رمي جمرة العقبة، النحر، الحلق، طواف الإفاضة', en: 'Stoning Jamrat al-Aqaba, sacrifice, shaving, Tawaf al-Ifada' } },
      { id: 'c', text: { fr: 'Wuquf à Arafat', ar: 'الوقوف بعرفة', en: 'Standing at Arafat' } },
      { id: 'd', text: { fr: 'Sa\'y uniquement', ar: 'السعي فقط', en: 'Sa\'y only' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le jour du sacrifice (Yawm an-Nahr) : 1) Jeter 7 cailloux à Jamrat al-Aqaba, 2) Sacrifier (Hady), 3) Se raser/raccourcir, 4) Tawaf al-Ifada. L\'ordre est Sunna.',
      ar: 'يوم النحر: 1) رمي جمرة العقبة 7 حصيات، 2) النحر (الهدي)، 3) الحلق/التقصير، 4) طواف الإفاضة. والترتيب سنة.',
      en: 'Day of Sacrifice: 1) Stone Jamrat al-Aqaba with 7 pebbles, 2) Sacrifice (Hady), 3) Shave/trim, 4) Tawaf al-Ifada. The order is Sunnah.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'rites',
  },
  {
    id: 'hajj-rites-005',
    question: {
      fr: 'Combien de jours dure le jet de pierres à Mina ?',
      ar: 'كم يوم يستمر رمي الجمرات في منى؟',
      en: 'How many days does stoning at Mina last?',
    },
    options: [
      { id: 'a', text: { fr: '1 jour (10 Dhul Hijja seulement)', ar: 'يوم واحد (10 ذي الحجة فقط)', en: '1 day (10th Dhul Hijja only)' } },
      { id: 'b', text: { fr: '3 ou 4 jours (10, 11, 12, et optionnellement 13)', ar: '3 أو 4 أيام (10، 11، 12، واختياريًا 13)', en: '3 or 4 days (10, 11, 12, and optionally 13)' } },
      { id: 'c', text: { fr: '7 jours', ar: '7 أيام', en: '7 days' } },
      { id: 'd', text: { fr: '2 jours', ar: 'يومان', en: '2 days' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le jet est : 10 (Jamra al-Aqaba seule), 11 et 12 (les 3 Jamarat), et optionnellement 13 si on reste (jours de Tashriq).',
      ar: 'الرمي: 10 (جمرة العقبة فقط)، 11 و12 (الجمرات الثلاث)، واختياريًا 13 لمن بقي (أيام التشريق).',
      en: 'Stoning is: 10th (Jamra al-Aqaba only), 11th and 12th (all 3 Jamarat), and optionally 13th if staying (days of Tashriq).',
    },
    points: 2,
    difficulty: 'medium',
    category: 'rites',
  },
  {
    id: 'hajj-rites-006',
    question: {
      fr: 'Qu\'est-ce que Tawaf al-Wada\' ?',
      ar: 'ما هو طواف الوداع؟',
      en: 'What is Tawaf al-Wada\'?',
    },
    options: [
      { id: 'a', text: { fr: 'Le Tawaf d\'arrivée', ar: 'طواف القدوم', en: 'Arrival Tawaf' } },
      { id: 'b', text: { fr: 'Le Tawaf d\'adieu avant de quitter La Mecque', ar: 'طواف الوداع قبل مغادرة مكة', en: 'Farewell Tawaf before leaving Mecca' } },
      { id: 'c', text: { fr: 'Le Tawaf de la Omra', ar: 'طواف العمرة', en: 'Umrah Tawaf' } },
      { id: 'd', text: { fr: 'Le Tawaf d\'Ifada', ar: 'طواف الإفاضة', en: 'Tawaf al-Ifada' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Tawaf al-Wada\' (adieu) est le dernier acte du pèlerin avant de quitter La Mecque. Il est obligatoire selon les Hanafis et Hanbalis.',
      ar: 'طواف الوداع هو آخر عمل للحاج قبل مغادرة مكة. وهو واجب عند الحنفية والحنابلة.',
      en: 'Tawaf al-Wada\' (farewell) is the pilgrim\'s last act before leaving Mecca. It is obligatory according to Hanafis and Hanbalis.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'rites',
  },
];

// ============================================
// Questions - Omra
// ============================================

const omraQuestions: ExamQuestion[] = [
  {
    id: 'hajj-omra-001',
    question: {
      fr: 'Quelle est la différence entre Hajj et Omra ?',
      ar: 'ما الفرق بين الحج والعمرة؟',
      en: 'What is the difference between Hajj and Umrah?',
    },
    options: [
      { id: 'a', text: { fr: 'Aucune différence', ar: 'لا فرق', en: 'No difference' } },
      { id: 'b', text: { fr: 'L\'Omra est plus courte et peut se faire toute l\'année ; le Hajj a des rites supplémentaires (Arafat, Mina, jet)', ar: 'العمرة أقصر ويمكن أداؤها طوال العام؛ الحج له أعمال إضافية (عرفة، منى، الرمي)', en: 'Umrah is shorter and can be done all year; Hajj has extra rites (Arafat, Mina, stoning)' } },
      { id: 'c', text: { fr: 'L\'Omra est plus longue', ar: 'العمرة أطول', en: 'Umrah is longer' } },
      { id: 'd', text: { fr: 'L\'Omra n\'inclut pas le Tawaf', ar: 'العمرة لا تشمل الطواف', en: 'Umrah does not include Tawaf' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'L\'Omra comprend : Ihram, Tawaf, Sa\'y, rasage. Le Hajj ajoute : Wuquf à Arafat, nuit à Muzdalifa, jet de pierres, jours à Mina.',
      ar: 'العمرة تشمل: الإحرام، الطواف، السعي، الحلق. والحج يُضيف: الوقوف بعرفة، المبيت بمزدلفة، الرمي، أيام منى.',
      en: 'Umrah includes: Ihram, Tawaf, Sa\'y, shaving. Hajj adds: standing at Arafat, night at Muzdalifa, stoning, days at Mina.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'omra',
  },
  {
    id: 'hajj-omra-002',
    question: {
      fr: 'Quel est le statut de l\'Omra ?',
      ar: 'ما حكم العمرة؟',
      en: 'What is the ruling of Umrah?',
    },
    options: [
      { id: 'a', text: { fr: 'Obligatoire chaque année', ar: 'واجبة كل عام', en: 'Obligatory every year' } },
      { id: 'b', text: { fr: 'Obligatoire une fois (Shafi\'i, Hanbali) ou Sunna Mu\'akkada (Hanafi, Maliki)', ar: 'واجبة مرة (الشافعي، الحنبلي) أو سنة مؤكدة (الحنفي، المالكي)', en: 'Obligatory once (Shafi\'i, Hanbali) or Confirmed Sunnah (Hanafi, Maliki)' } },
      { id: 'c', text: { fr: 'Interdite', ar: 'محرمة', en: 'Forbidden' } },
      { id: 'd', text: { fr: 'Détestable', ar: 'مكروهة', en: 'Disliked' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les Shafi\'is et Hanbalis la considèrent obligatoire une fois dans la vie. Les Hanafis et Malikis la considèrent Sunna Mu\'akkada.',
      ar: 'الشافعية والحنابلة يوجبونها مرة في العمر. والحنفية والمالكية يعتبرونها سنة مؤكدة.',
      en: 'Shafi\'is and Hanbalis consider it obligatory once in lifetime. Hanafis and Malikis consider it Confirmed Sunnah.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'omra',
  },
  {
    id: 'hajj-omra-003',
    question: {
      fr: 'Quels sont les piliers de l\'Omra ?',
      ar: 'ما أركان العمرة؟',
      en: 'What are the pillars of Umrah?',
    },
    options: [
      { id: 'a', text: { fr: 'Seulement le Tawaf', ar: 'الطواف فقط', en: 'Only Tawaf' } },
      { id: 'b', text: { fr: 'Ihram, Tawaf, Sa\'y', ar: 'الإحرام، الطواف، السعي', en: 'Ihram, Tawaf, Sa\'y' } },
      { id: 'c', text: { fr: 'Wuquf à Arafat', ar: 'الوقوف بعرفة', en: 'Standing at Arafat' } },
      { id: 'd', text: { fr: 'Le sacrifice', ar: 'الذبح', en: 'Sacrifice' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les piliers de l\'Omra sont : 1) Ihram au Miqat, 2) Tawaf autour de la Ka\'ba, 3) Sa\'y entre Safa et Marwa. Puis rasage/raccourcissement pour sortir de l\'Ihram.',
      ar: 'أركان العمرة: 1) الإحرام من الميقات، 2) الطواف حول الكعبة، 3) السعي بين الصفا والمروة. ثم الحلق/التقصير للتحلل.',
      en: 'Umrah pillars are: 1) Ihram at Miqat, 2) Tawaf around Ka\'ba, 3) Sa\'y between Safa and Marwa. Then shaving/trimming to exit Ihram.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'omra',
  },
  {
    id: 'hajj-omra-004',
    question: {
      fr: 'Peut-on faire l\'Omra pendant le Ramadan ?',
      ar: 'هل يجوز أداء العمرة في رمضان؟',
      en: 'Can Umrah be performed during Ramadan?',
    },
    options: [
      { id: 'a', text: { fr: 'Non, c\'est interdit', ar: 'لا، محرم', en: 'No, it is forbidden' } },
      { id: 'b', text: { fr: 'Oui, et elle équivaut à un Hajj en récompense', ar: 'نعم، وتعدل حجة في الأجر', en: 'Yes, and it equals Hajj in reward' } },
      { id: 'c', text: { fr: 'Seulement la première semaine', ar: 'فقط الأسبوع الأول', en: 'Only the first week' } },
      { id: 'd', text: { fr: 'Seulement pour les femmes', ar: 'للنساء فقط', en: 'Only for women' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Une Omra pendant le Ramadan équivaut à un Hajj" - ou "un Hajj avec moi."',
      ar: 'قال النبي ﷺ: "عمرة في رمضان تعدل حجة" - أو "حجة معي."',
      en: 'The Prophet ﷺ said: "An Umrah during Ramadan equals a Hajj" - or "a Hajj with me."',
    },
    points: 2,
    difficulty: 'easy',
    category: 'omra',
  },
];

// ============================================
// Assemblage de l'examen COMPLET
// ============================================

const allQuestions: ExamQuestion[] = [
  ...definitionQuestions,    // 4 questions
  ...conditionsQuestions,    // 4 questions
  ...typesQuestions,         // 4 questions
  ...ihramQuestions,         // 4 questions
  ...ritesQuestions,         // 6 questions
  ...omraQuestions,          // 4 questions
  // Total : 26 questions
];

export const examHajjFinal: ExamConfig = {
  id: 'exam-hajj-final',
  type: 'course',
  level: 'intermediate',
  title: {
    fr: 'Examen Complet - Fiqh du Hajj',
    ar: 'الامتحان الشامل - فقه الحج',
    en: 'Complete Exam - Fiqh of Hajj',
  },
  description: {
    fr: 'Examen de 22 questions sélectionnées aléatoirement parmi une banque de 26 questions. Couvre le Hajj et la Omra.',
    ar: 'امتحان من 22 سؤالاً يتم اختيارها عشوائياً من بنك يضم 26 سؤالاً. يغطي الحج والعمرة.',
    en: 'Exam with 22 questions randomly selected from a pool of 26. Covers Hajj and Umrah.',
  },
  instructions: {
    fr: 'Vous avez 35 minutes pour répondre à 22 questions. Chaque question a une seule bonne réponse. Un score de 70% est requis pour réussir.',
    ar: 'لديك 35 دقيقة للإجابة على 22 سؤالاً. لكل سؤال إجابة صحيحة واحدة. يُشترط 70% للنجاح.',
    en: 'You have 35 minutes to answer 22 questions. Each question has one correct answer. A score of 70% is required to pass.',
  },
  courseSlug: 'hajj',
  questionPool: allQuestions,
  questionsPerExam: 22,
  categoryConfig: [
    { category: 'definition', count: 3 },
    { category: 'conditions', count: 3 },
    { category: 'types', count: 3 },
    { category: 'ihram', count: 4 },
    { category: 'rites', count: 5 },
    { category: 'omra', count: 4 },
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
    fr: 'Certificat de Maîtrise - Fiqh al-Hajj',
    ar: 'شهادة الإتقان - فقه الحج',
    en: 'Mastery Certificate - Fiqh al-Hajj',
  },
  createdAt: '2026-01-31',
};

export default examHajjFinal;
