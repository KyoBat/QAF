/**
 * Examen Final - Fiqh Famille (Droit de la Famille Islamique)
 * 
 * 24 questions QCM couvrant :
 * - Le mariage (Nikah)
 * - Les droits conjugaux
 * - Le divorce (Talaq)
 * - La garde des enfants (Hadana)
 * - L'héritage (Mirath)
 * - La parenté et la filiation
 */

import { ExamConfig, ExamQuestion } from '../types';

// ============================================
// Questions - Mariage (Nikah)
// ============================================

const mariageQuestions: ExamQuestion[] = [
  {
    id: 'famille-mariage-001',
    question: {
      fr: 'Quels sont les piliers (Arkan) du contrat de mariage ?',
      ar: 'ما هي أركان عقد النكاح؟',
      en: 'What are the pillars (Arkan) of the marriage contract?',
    },
    options: [
      { id: 'a', text: { fr: 'Uniquement l\'amour', ar: 'الحب فقط', en: 'Only love' } },
      { id: 'b', text: { fr: 'Les deux époux, le Wali (tuteur), les témoins, l\'offre et l\'acceptation (Ijab wa Qabul)', ar: 'الزوجان، الولي، الشهود، الإيجاب والقبول', en: 'The two spouses, the Wali (guardian), witnesses, offer and acceptance (Ijab wa Qabul)' } },
      { id: 'c', text: { fr: 'La dot uniquement', ar: 'المهر فقط', en: 'Dowry only' } },
      { id: 'd', text: { fr: 'La fête de mariage', ar: 'حفل الزفاف', en: 'Wedding party' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a dit : "Pas de mariage sans tuteur" et "Pas de mariage sans témoins". L\'Ijab wa Qabul exprime le consentement mutuel.',
      ar: 'قال ﷺ: "لا نكاح إلا بولي" و"لا نكاح إلا بشاهدين." والإيجاب والقبول يعبران عن الرضا المتبادل.',
      en: 'The Prophet ﷺ said: "No marriage without a guardian" and "No marriage without witnesses." Ijab wa Qabul expresses mutual consent.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'mariage',
  },
  {
    id: 'famille-mariage-002',
    question: {
      fr: 'Qu\'est-ce que le Mahr (dot) ?',
      ar: 'ما هو المهر؟',
      en: 'What is the Mahr (dowry)?',
    },
    options: [
      { id: 'a', text: { fr: 'Un droit obligatoire de l\'épouse, don du mari comme marque d\'honneur', ar: 'حق واجب للزوجة، عطية من الزوج إكرامًا لها', en: 'An obligatory right of the wife, gift from husband as a mark of honor' } },
      { id: 'b', text: { fr: 'Un cadeau optionnel de la femme au mari', ar: 'هدية اختيارية من الزوجة للزوج', en: 'An optional gift from wife to husband' } },
      { id: 'c', text: { fr: 'Le prix d\'achat de la femme', ar: 'ثمن شراء المرأة', en: 'The purchase price of the woman' } },
      { id: 'd', text: { fr: 'Un impôt gouvernemental', ar: 'ضريبة حكومية', en: 'A government tax' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Allah dit : "Et donnez aux femmes leur mahr de plein gré" (4:4). Le Mahr appartient exclusivement à l\'épouse et ne peut être repris.',
      ar: 'قال تعالى: "وَآتُوا النِّسَاءَ صَدُقَاتِهِنَّ نِحْلَةً" (النساء:4). والمهر ملك خالص للزوجة لا يُسترد.',
      en: 'Allah says: "And give women their mahr graciously" (4:4). Mahr belongs exclusively to the wife and cannot be reclaimed.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'mariage',
  },
  {
    id: 'famille-mariage-003',
    question: {
      fr: 'Quel est le rôle du Wali (tuteur) dans le mariage selon les écoles ?',
      ar: 'ما دور الولي في النكاح عند المذاهب؟',
      en: 'What is the role of Wali (guardian) in marriage according to schools?',
    },
    options: [
      { id: 'a', text: { fr: 'Il n\'a aucun rôle', ar: 'لا دور له', en: 'He has no role' } },
      { id: 'b', text: { fr: 'Il décide seul du mariage', ar: 'يقرر الزواج بمفرده', en: 'He decides marriage alone' } },
      { id: 'c', text: { fr: 'Condition de validité (Shafi\'i, Hanbali, Maliki) ou recommandé (Hanafi pour la femme majeure)', ar: 'شرط صحة (الشافعية والحنابلة والمالكية) أو مستحب (الحنفية للبالغة)', en: 'Validity condition (Shafi\'i, Hanbali, Maliki) or recommended (Hanafi for adult woman)' } },
      { id: 'd', text: { fr: 'Il paie la dot', ar: 'يدفع المهر', en: 'He pays the dowry' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'La majorité exige le Wali. Les Hanafis permettent à la femme majeure de se marier seule mais recommandent le Wali. Le Wali ne peut refuser sans raison valable.',
      ar: 'الجمهور يشترط الولي. والحنفية يجيزون للبالغة الزواج بنفسها لكن يستحب الولي. ولا يحق للولي العضل بلا مسوّغ.',
      en: 'Majority requires Wali. Hanafis allow adult woman to marry herself but recommend Wali. Wali cannot refuse without valid reason.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'mariage',
  },
  {
    id: 'famille-mariage-004',
    question: {
      fr: 'Quelles femmes sont interdites en mariage de manière permanente ?',
      ar: 'من المحرمات في النكاح تحريمًا مؤبدًا؟',
      en: 'Which women are permanently forbidden in marriage?',
    },
    options: [
      { id: 'a', text: { fr: 'Aucune restriction', ar: 'لا قيود', en: 'No restrictions' } },
      { id: 'b', text: { fr: 'Seulement les sœurs', ar: 'الأخوات فقط', en: 'Only sisters' } },
      { id: 'c', text: { fr: 'Seulement les mères', ar: 'الأمهات فقط', en: 'Only mothers' } },
      { id: 'd', text: { fr: 'Mères, filles, sœurs, tantes, nièces, mères/filles d\'épouses, belles-filles, mères allaitantes, sœurs de lait', ar: 'الأمهات، البنات، الأخوات، العمات، الخالات، بنات الأخ، بنات الأخت، أمهات الزوجات، الربائب، المرضعات، أخوات الرضاعة', en: 'Mothers, daughters, sisters, aunts, nieces, wives\' mothers/daughters, stepdaughters, nursing mothers, milk sisters' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Sourate An-Nisa (4:23) détaille les Mahram permanentes : par le sang (nasab), par allaitement (rada\'a), par alliance (musahara).',
      ar: 'سورة النساء (4:23) تفصل المحارم المؤبدة: بالنسب، والرضاع، والمصاهرة.',
      en: 'Surah An-Nisa (4:23) details permanent Mahram: by blood (nasab), by nursing (rada\'a), by marriage (musahara).',
    },
    points: 3,
    difficulty: 'hard',
    category: 'mariage',
  },
];

// ============================================
// Questions - Droits Conjugaux
// ============================================

const droitsConjugauxQuestions: ExamQuestion[] = [
  {
    id: 'famille-droits-001',
    question: {
      fr: 'Qu\'est-ce que la Nafaqa (entretien) ?',
      ar: 'ما هي النفقة؟',
      en: 'What is Nafaqa (maintenance)?',
    },
    options: [
      { id: 'a', text: { fr: 'Un cadeau optionnel', ar: 'هدية اختيارية', en: 'An optional gift' } },
      { id: 'b', text: { fr: 'L\'obligation du mari de subvenir aux besoins de sa femme : nourriture, logement, vêtements', ar: 'واجب الزوج في توفير حاجات زوجته: طعام، سكن، كسوة', en: 'Husband\'s obligation to provide for wife: food, housing, clothing' } },
      { id: 'c', text: { fr: 'L\'argent que la femme donne au mari', ar: 'المال الذي تعطيه الزوجة للزوج', en: 'Money wife gives to husband' } },
      { id: 'd', text: { fr: 'Le salaire du travail', ar: 'راتب العمل', en: 'Work salary' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Allah dit : "Que celui qui a les moyens dépense de ses moyens" (65:7). La Nafaqa est proportionnelle aux moyens du mari et inclut les soins médicaux.',
      ar: 'قال تعالى: "لِيُنفِقْ ذُو سَعَةٍ مِّن سَعَتِهِ" (الطلاق:7). والنفقة بحسب قدرة الزوج وتشمل العلاج.',
      en: 'Allah says: "Let him who has abundance spend of his abundance" (65:7). Nafaqa is proportional to husband\'s means and includes medical care.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'droits',
  },
  {
    id: 'famille-droits-002',
    question: {
      fr: 'Quels sont les droits de l\'épouse sur son mari ?',
      ar: 'ما حقوق الزوجة على زوجها؟',
      en: 'What are the wife\'s rights over her husband?',
    },
    options: [
      { id: 'a', text: { fr: 'Mahr, Nafaqa (entretien), bon traitement (Mu\'ashara bil Ma\'ruf), équité entre coépouses', ar: 'المهر، النفقة، المعاشرة بالمعروف، العدل بين الزوجات', en: 'Mahr, Nafaqa (maintenance), good treatment (Mu\'ashara bil Ma\'ruf), equity between co-wives' } },
      { id: 'b', text: { fr: 'Aucun droit', ar: 'لا حقوق', en: 'No rights' } },
      { id: 'c', text: { fr: 'Seulement de l\'argent', ar: 'المال فقط', en: 'Only money' } },
      { id: 'd', text: { fr: 'Le droit de le quitter sans raison', ar: 'حق تركه بلا سبب', en: 'Right to leave without reason' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: '"Et vivez avec elles selon les convenances" (4:19). Le Prophète ﷺ a dit : "Le meilleur d\'entre vous est le meilleur envers sa famille."',
      ar: '"وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ" (النساء:19). وقال ﷺ: "خيركم خيركم لأهله."',
      en: '"And live with them in kindness" (4:19). The Prophet ﷺ said: "The best of you is the best to his family."',
    },
    points: 2,
    difficulty: 'easy',
    category: 'droits',
  },
  {
    id: 'famille-droits-003',
    question: {
      fr: 'L\'homme peut-il avoir plus d\'une épouse ? Sous quelles conditions ?',
      ar: 'هل يجوز للرجل التعدد؟ بأي شروط؟',
      en: 'Can a man have more than one wife? Under what conditions?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, sans limite ni condition', ar: 'نعم، بلا حد ولا شرط', en: 'Yes, without limit or condition' } },
      { id: 'b', text: { fr: 'Totalement interdit', ar: 'محرم تمامًا', en: 'Totally forbidden' } },
      { id: 'c', text: { fr: 'Jusqu\'à 4 maximum, avec obligation d\'équité et capacité d\'entretien', ar: 'حتى 4 كحد أقصى، مع وجوب العدل والقدرة على الإنفاق', en: 'Up to 4 maximum, with obligation of equity and ability to maintain' } },
      { id: 'd', text: { fr: 'Seulement en temps de guerre', ar: 'في الحرب فقط', en: 'Only in wartime' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: '"Épousez celles qui vous plaisent : deux, trois ou quatre. Si vous craignez de ne pas être équitables, alors une seule" (4:3).',
      ar: '"فَانكِحُوا مَا طَابَ لَكُم مِّنَ النِّسَاءِ مَثْنَىٰ وَثُلَاثَ وَرُبَاعَ فَإِنْ خِفْتُمْ أَلَّا تَعْدِلُوا فَوَاحِدَةً" (النساء:3).',
      en: '"Marry those that please you of women: two, three or four. If you fear you cannot be just, then only one" (4:3).',
    },
    points: 2,
    difficulty: 'medium',
    category: 'droits',
  },
];

// ============================================
// Questions - Divorce (Talaq)
// ============================================

const divorceQuestions: ExamQuestion[] = [
  {
    id: 'famille-divorce-001',
    question: {
      fr: 'Quel est le statut du divorce (Talaq) en Islam ?',
      ar: 'ما حكم الطلاق في الإسلام؟',
      en: 'What is the ruling of divorce (Talaq) in Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Totalement interdit', ar: 'محرم تمامًا', en: 'Totally forbidden' } },
      { id: 'b', text: { fr: 'Recommandé', ar: 'مستحب', en: 'Recommended' } },
      { id: 'c', text: { fr: 'Obligatoire après dispute', ar: 'واجب بعد الخلاف', en: 'Obligatory after dispute' } },
      { id: 'd', text: { fr: 'Permis mais détesté ; "la chose licite la plus détestée d\'Allah"', ar: 'مباح لكنه مكروه؛ "أبغض الحلال إلى الله الطلاق"', en: 'Permissible but disliked; "the most hated permissible thing to Allah"' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Le divorce est un dernier recours après médiation. Le Prophète ﷺ a dit : "أَبْغَضُ الحَلَالِ إِلَى اللَّهِ الطَّلَاقُ" (rapporté par Abu Dawud).',
      ar: 'الطلاق ملاذ أخير بعد الإصلاح. قال ﷺ: "أَبْغَضُ الحَلَالِ إِلَى اللَّهِ الطَّلَاقُ" (رواه أبو داود).',
      en: 'Divorce is a last resort after mediation. The Prophet ﷺ said: "The most hated permissible thing to Allah is divorce" (Abu Dawud).',
    },
    points: 2,
    difficulty: 'easy',
    category: 'divorce',
  },
  {
    id: 'famille-divorce-002',
    question: {
      fr: 'Qu\'est-ce que la \'Idda (période d\'attente) ?',
      ar: 'ما هي العدة؟',
      en: 'What is \'Idda (waiting period)?',
    },
    options: [
      { id: 'a', text: { fr: 'Vacances après le mariage', ar: 'إجازة بعد الزواج', en: 'Vacation after marriage' } },
      { id: 'b', text: { fr: 'Période obligatoire avant qu\'une femme divorcée/veuve puisse se remarier', ar: 'فترة إلزامية قبل أن تتمكن المطلقة/الأرملة من الزواج', en: 'Mandatory period before a divorced/widowed woman can remarry' } },
      { id: 'c', text: { fr: 'Période de fiançailles', ar: 'فترة الخطوبة', en: 'Engagement period' } },
      { id: 'd', text: { fr: 'Temps de réflexion du mari', ar: 'وقت تفكير الزوج', en: 'Husband\'s reflection time' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: '\'Idda divorcée : 3 cycles menstruels (ou 3 mois si ménopausée). \'Idda veuve : 4 mois et 10 jours. \'Idda enceinte : jusqu\'à l\'accouchement.',
      ar: 'عدة المطلقة: 3 حيضات (أو 3 أشهر للآيسة). عدة الأرملة: 4 أشهر و10 أيام. عدة الحامل: حتى الوضع.',
      en: '\'Idda divorced: 3 menstrual cycles (or 3 months if menopausal). \'Idda widow: 4 months and 10 days. \'Idda pregnant: until delivery.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'divorce',
  },
  {
    id: 'famille-divorce-003',
    question: {
      fr: 'Qu\'est-ce que le Khul\' ?',
      ar: 'ما هو الخُلع؟',
      en: 'What is Khul\'?',
    },
    options: [
      { id: 'a', text: { fr: 'Séparation à l\'initiative de la femme en échange d\'une compensation (généralement le Mahr)', ar: 'فسخ بطلب الزوجة مقابل عوض (عادةً المهر)', en: 'Separation initiated by wife in exchange for compensation (usually the Mahr)' } },
      { id: 'b', text: { fr: 'Divorce prononcé par le mari', ar: 'طلاق من الزوج', en: 'Divorce pronounced by husband' } },
      { id: 'c', text: { fr: 'Annulation par le juge', ar: 'فسخ من القاضي', en: 'Annulment by judge' } },
      { id: 'd', text: { fr: 'Séparation temporaire', ar: 'انفصال مؤقت', en: 'Temporary separation' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Khul\' permet à la femme de racheter sa liberté. Le Prophète ﷺ a ordonné à Thabit ibn Qays de reprendre son jardin (Mahr) et de divorcer sa femme qui le demandait.',
      ar: 'الخلع يتيح للمرأة افتداء نفسها. أمر النبي ﷺ ثابت بن قيس بأخذ حديقته (المهر) وتطليق زوجته التي طلبت ذلك.',
      en: 'Khul\' allows wife to ransom her freedom. The Prophet ﷺ ordered Thabit ibn Qays to take back his garden (Mahr) and divorce his wife who requested it.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'divorce',
  },
  {
    id: 'famille-divorce-004',
    question: {
      fr: 'Combien de Talaq (divorces) sont révocables ?',
      ar: 'كم طلقة يمكن الرجوع فيها؟',
      en: 'How many Talaq (divorces) are revocable?',
    },
    options: [
      { id: 'a', text: { fr: 'Aucun', ar: 'لا شيء', en: 'None' } },
      { id: 'b', text: { fr: 'Les 3 sont révocables', ar: 'الثلاث رجعيات', en: 'All 3 are revocable' } },
      { id: 'c', text: { fr: 'Les 2 premiers sont révocables pendant la \'Idda ; le 3ème est définitif', ar: 'الطلقتان الأوليان رجعيتان خلال العدة؛ والثالثة بائنة', en: 'First 2 are revocable during \'Idda; the 3rd is final' } },
      { id: 'd', text: { fr: 'Seulement le 3ème', ar: 'الثالثة فقط', en: 'Only the 3rd' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: '"Le divorce est permis deux fois ; ensuite, c\'est soit la reprise avec bonté, soit la libération avec bienfaisance" (2:229). Après 3, elle ne lui est plus licite sans Tahlil.',
      ar: '"الطَّلَاقُ مَرَّتَانِ فَإِمْسَاكٌ بِمَعْرُوفٍ أَوْ تَسْرِيحٌ بِإِحْسَانٍ" (البقرة:229). وبعد الثالثة لا تحل له إلا بعد التحليل.',
      en: '"Divorce is twice; then either retain with kindness or release with beneficence" (2:229). After 3, she\'s not lawful without Tahlil.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'divorce',
  },
];

// ============================================
// Questions - Garde des Enfants (Hadana)
// ============================================

const hadanaQuestions: ExamQuestion[] = [
  {
    id: 'famille-hadana-001',
    question: {
      fr: 'À qui revient la garde (Hadana) des enfants en bas âge après un divorce ?',
      ar: 'لمن حضانة الأطفال الصغار بعد الطلاق؟',
      en: 'Who gets custody (Hadana) of young children after divorce?',
    },
    options: [
      { id: 'a', text: { fr: 'Toujours au père', ar: 'دائمًا للأب', en: 'Always to the father' } },
      { id: 'b', text: { fr: 'À l\'État', ar: 'للدولة', en: 'To the State' } },
      { id: 'c', text: { fr: 'Tirage au sort', ar: 'القرعة', en: 'Drawing lots' } },
      { id: 'd', text: { fr: 'Priorité à la mère, puis aux femmes de sa famille, selon l\'intérêt de l\'enfant', ar: 'الأولوية للأم، ثم لقريباتها، حسب مصلحة الطفل', en: 'Priority to mother, then to women of her family, according to child\'s interest' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Le Prophète ﷺ a dit à une femme : "Tu as plus droit à lui tant que tu ne te remaries pas." L\'ordre : mère, grand-mère maternelle, puis paternelle...',
      ar: 'قال ﷺ لامرأة: "أنتِ أحق به ما لم تَنكحي." والترتيب: الأم، ثم جدة الأم، ثم جدة الأب...',
      en: 'The Prophet ﷺ told a woman: "You have more right to him as long as you don\'t remarry." Order: mother, maternal grandmother, then paternal...',
    },
    points: 2,
    difficulty: 'medium',
    category: 'hadana',
  },
  {
    id: 'famille-hadana-002',
    question: {
      fr: 'Jusqu\'à quel âge la mère garde-t-elle la Hadana selon les différentes écoles ?',
      ar: 'حتى أي سن تبقى الحضانة للأم حسب المذاهب؟',
      en: 'Until what age does mother keep Hadana according to different schools?',
    },
    options: [
      { id: 'a', text: { fr: 'Toujours jusqu\'à 18 ans', ar: 'دائمًا حتى 18 سنة', en: 'Always until 18' } },
      { id: 'b', text: { fr: 'Varie : 7-9 ans (Hanafi), puberté (Shafi\'i), âge de discernement avec choix possible', ar: 'يختلف: 7-9 سنوات (الحنفية)، البلوغ (الشافعية)، سن التمييز مع التخيير', en: 'Varies: 7-9 years (Hanafi), puberty (Shafi\'i), age of discernment with choice option' } },
      { id: 'c', text: { fr: 'Jamais', ar: 'أبدًا', en: 'Never' } },
      { id: 'd', text: { fr: 'Seulement 1 an', ar: 'سنة واحدة فقط', en: 'Only 1 year' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les écoles diffèrent. L\'essentiel est l\'intérêt supérieur de l\'enfant (Maslaha). Le père garde la Wilaya (autorité légale) et doit payer la Nafaqa dans tous les cas.',
      ar: 'تختلف المذاهب. الأساس مصلحة الطفل الفُضلى. الأب يحتفظ بالولاية ويجب عليه النفقة في كل الأحوال.',
      en: 'Schools differ. Essential is child\'s best interest (Maslaha). Father keeps Wilaya (legal authority) and must pay Nafaqa in all cases.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'hadana',
  },
];

// ============================================
// Questions - Héritage (Mirath)
// ============================================

const heritageQuestions: ExamQuestion[] = [
  {
    id: 'famille-heritage-001',
    question: {
      fr: 'Qu\'est-ce que le Fard (part fixe) dans l\'héritage ?',
      ar: 'ما هو الفرض في الميراث؟',
      en: 'What is Fard (fixed share) in inheritance?',
    },
    options: [
      { id: 'a', text: { fr: 'Part déterminée par le Coran : 1/2, 1/4, 1/8, 2/3, 1/3, 1/6', ar: 'حصة محددة بالقرآن: 1/2، 1/4، 1/8، 2/3، 1/3، 1/6', en: 'Share determined by Quran: 1/2, 1/4, 1/8, 2/3, 1/3, 1/6' } },
      { id: 'b', text: { fr: 'Une part décidée par le défunt', ar: 'حصة يقررها المتوفى', en: 'A share decided by the deceased' } },
      { id: 'c', text: { fr: 'Partage égal entre tous', ar: 'تقسيم متساوٍ بين الجميع', en: 'Equal share among all' } },
      { id: 'd', text: { fr: 'Décision du juge', ar: 'قرار القاضي', en: 'Judge\'s decision' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les 6 Furud (parts fixes) sont détaillées dans Sourate An-Nisa (4:11-12). Les Dhawu al-Furud (héritiers à part fixe) ont priorité.',
      ar: 'الفروض الستة مفصلة في سورة النساء (4:11-12). وأصحاب الفروض لهم الأولوية.',
      en: 'The 6 Furud (fixed shares) are detailed in Surah An-Nisa (4:11-12). Dhawu al-Furud (fixed share heirs) have priority.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'heritage',
  },
  {
    id: 'famille-heritage-002',
    question: {
      fr: 'Quelle est la part de la fille unique ?',
      ar: 'ما نصيب البنت الوحيدة؟',
      en: 'What is the share of an only daughter?',
    },
    options: [
      { id: 'a', text: { fr: 'Rien', ar: 'لا شيء', en: 'Nothing' } },
      { id: 'b', text: { fr: 'Tout', ar: 'كل شيء', en: 'Everything' } },
      { id: 'c', text: { fr: 'La moitié (1/2)', ar: 'النصف', en: 'Half (1/2)' } },
      { id: 'd', text: { fr: 'Un quart', ar: 'الربع', en: 'One quarter' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: '"Si elle est seule, à elle la moitié" (4:11). S\'il y a 2 filles ou plus, elles partagent les 2/3.',
      ar: '"وَإِن كَانَتْ وَاحِدَةً فَلَهَا النِّصْفُ" (النساء:11). وإن كانتا اثنتين فأكثر فلهن الثلثان.',
      en: '"If she is alone, to her is half" (4:11). If 2 daughters or more, they share 2/3.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'heritage',
  },
  {
    id: 'famille-heritage-003',
    question: {
      fr: 'Quelle est la règle "للذكر مثل حظ الأنثيين" ?',
      ar: 'ما هي قاعدة "للذكر مثل حظ الأنثيين"؟',
      en: 'What is the rule "for the male, the share of two females"?',
    },
    options: [
      { id: 'a', text: { fr: 'Le fils hérite toujours le double de la fille', ar: 'الابن يرث دائمًا ضعف البنت', en: 'Son always inherits double the daughter' } },
      { id: 'b', text: { fr: 'La fille hérite le double', ar: 'البنت ترث الضعف', en: 'Daughter inherits double' } },
      { id: 'c', text: { fr: 'Ils héritent également', ar: 'يرثون بالتساوي', en: 'They inherit equally' } },
      { id: 'd', text: { fr: 'Quand fils et filles héritent ensemble comme \'Asaba, le fils a le double de la fille', ar: 'عندما يرث الأبناء والبنات معًا تعصيبًا، للذكر مثل حظ الأنثيين', en: 'When sons and daughters inherit together as \'Asaba, son gets double the daughter' } },
    ],
    correctAnswer: 3,
    explanation: {
      fr: 'Cette règle s\'applique aux enfants héritant ensemble. Note : Dans d\'autres cas, femmes et hommes héritent également (ex: parents du défunt : 1/6 chacun).',
      ar: 'هذه القاعدة للأبناء الذين يرثون معًا. ملاحظة: في حالات أخرى يرث الرجال والنساء بالتساوي (مثل: أبوي المتوفى: 1/6 لكل منهما).',
      en: 'This rule applies to children inheriting together. Note: In other cases, men and women inherit equally (ex: deceased\'s parents: 1/6 each).',
    },
    points: 3,
    difficulty: 'hard',
    category: 'heritage',
  },
  {
    id: 'famille-heritage-004',
    question: {
      fr: 'Qu\'est-ce que la Wasiyya (testament) et sa limite ?',
      ar: 'ما هي الوصية وحدها؟',
      en: 'What is Wasiyya (bequest) and its limit?',
    },
    options: [
      { id: 'a', text: { fr: 'On peut léguer tout son patrimoine', ar: 'يمكن وصية كل التركة', en: 'One can bequeath entire estate' } },
      { id: 'b', text: { fr: 'Maximum 1/3 du patrimoine, et pas aux héritiers légaux', ar: 'حد أقصى الثلث، ولا للورثة الشرعيين', en: 'Maximum 1/3 of estate, and not to legal heirs' } },
      { id: 'c', text: { fr: 'Aucune limite', ar: 'لا حد', en: 'No limit' } },
      { id: 'd', text: { fr: 'Seulement aux non-musulmans', ar: 'فقط لغير المسلمين', en: 'Only to non-Muslims' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a dit à Sa\'d : "Le tiers, et le tiers c\'est beaucoup." La Wasiyya ne peut favoriser un héritier au détriment des autres.',
      ar: 'قال ﷺ لسعد: "الثُّلُثُ، والثُّلُثُ كَثِيرٌ." والوصية لا تجوز لوارث.',
      en: 'The Prophet ﷺ told Sa\'d: "One-third, and one-third is much." Wasiyya cannot favor an heir over others.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'heritage',
  },
];

// ============================================
// Questions - Filiation et Allaitement
// ============================================

const filiationQuestions: ExamQuestion[] = [
  {
    id: 'famille-filiation-001',
    question: {
      fr: 'Combien de tétées établissent la parenté de lait (Rada\'a) ?',
      ar: 'كم رضعة تُثبت حرمة الرضاع؟',
      en: 'How many breastfeedings establish milk kinship (Rada\'a)?',
    },
    options: [
      { id: 'a', text: { fr: '5 tétées avérées (avis de la majorité basé sur hadith Aisha)', ar: '5 رضعات معلومات (قول الجمهور بناءً على حديث عائشة)', en: '5 confirmed feedings (majority view based on Aisha\'s hadith)' } },
      { id: 'b', text: { fr: 'Une seule suffit', ar: 'رضعة واحدة تكفي', en: 'One is enough' } },
      { id: 'c', text: { fr: '10 tétées', ar: '10 رضعات', en: '10 feedings' } },
      { id: 'd', text: { fr: 'Aucune limite', ar: 'لا حد', en: 'No limit' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Aisha رضي الله عنها rapporte que le Coran mentionna 10 puis fut réduit à 5 tétées avérées (Muslim). Les Hanafis disent que toute tétée suffit.',
      ar: 'روت عائشة رضي الله عنها أن القرآن ذكر 10 ثم نُسخ إلى 5 رضعات معلومات (مسلم). والحنفية يقولون أي رضعة تكفي.',
      en: 'Aisha رضي الله عنها narrated that Quran mentioned 10 then was reduced to 5 confirmed feedings (Muslim). Hanafis say any feeding suffices.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'filiation',
  },
  {
    id: 'famille-filiation-002',
    question: {
      fr: 'L\'adoption (Tabanni) dans le sens occidental est-elle permise en Islam ?',
      ar: 'هل التبني بالمفهوم الغربي جائز في الإسلام؟',
      en: 'Is adoption (Tabanni) in the Western sense permitted in Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui, totalement permise', ar: 'نعم، جائز تمامًا', en: 'Yes, totally permitted' } },
      { id: 'b', text: { fr: 'Seulement pour les orphelins', ar: 'للأيتام فقط', en: 'Only for orphans' } },
      { id: 'c', text: { fr: 'Non pour la filiation fictive ; Oui pour la Kafala (prise en charge sans changer la filiation)', ar: 'لا للنسب الوهمي؛ نعم للكفالة (الرعاية دون تغيير النسب)', en: 'No for fictitious lineage; Yes for Kafala (care without changing lineage)' } },
      { id: 'd', text: { fr: 'Seulement pour les garçons', ar: 'للذكور فقط', en: 'Only for boys' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: '"Attribuez-les à leurs pères" (33:5). Zaid ibn Haritha fut appelé "fils de Muhammad" avant l\'interdiction. La Kafala (parrainage) est très méritoire.',
      ar: '"ادْعُوهُمْ لِآبَائِهِمْ" (الأحزاب:5). كان زيد يُدعى "زيد بن محمد" قبل النهي. والكفالة (الرعاية) من أفضل الأعمال.',
      en: '"Call them by their fathers" (33:5). Zaid ibn Haritha was called "son of Muhammad" before prohibition. Kafala (sponsorship) is highly meritorious.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'filiation',
  },
];

// ============================================
// Questions - 'Iddah (Période d'attente) - NOUVEAU
// ============================================

const iddahQuestions: ExamQuestion[] = [
  {
    id: 'famille-iddah-001',
    question: {
      fr: 'Qu\'est-ce que la \'Iddah ?',
      ar: 'ما هي العدة؟',
      en: 'What is the \'Iddah?',
    },
    options: [
      { id: 'a', text: { fr: 'Période d\'attente obligatoire après divorce ou décès du mari avant remariage', ar: 'فترة انتظار واجبة بعد الطلاق أو وفاة الزوج قبل الزواج مجددًا', en: 'Mandatory waiting period after divorce or husband\'s death before remarriage' } },
      { id: 'b', text: { fr: 'Le temps des fiançailles', ar: 'فترة الخطوبة', en: 'Engagement period' } },
      { id: 'c', text: { fr: 'La cérémonie de mariage', ar: 'حفل الزفاف', en: 'Wedding ceremony' } },
      { id: 'd', text: { fr: 'La période de grossesse', ar: 'فترة الحمل', en: 'Pregnancy period' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'La \'Iddah protège la lignée (savoir si la femme est enceinte) et donne un temps de réflexion. Elle est obligatoire par le Coran.',
      ar: 'العدة تحمي النسب (معرفة إن كانت المرأة حاملاً) وتعطي فرصة للتفكير. وهي واجبة بنص القرآن.',
      en: 'The \'Iddah protects lineage (knowing if woman is pregnant) and gives time for reflection. It\'s obligatory by Quran.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'iddah',
  },
  {
    id: 'famille-iddah-002',
    question: {
      fr: 'Quelle est la durée de la \'Iddah pour une femme divorcée qui a des menstruations ?',
      ar: 'كم مدة عدة المطلقة التي تحيض؟',
      en: 'What is the \'Iddah duration for a divorced woman who menstruates?',
    },
    options: [
      { id: 'a', text: { fr: 'Un mois', ar: 'شهر واحد', en: 'One month' } },
      { id: 'b', text: { fr: 'Trois cycles menstruels (Quru\')', ar: 'ثلاثة قروء', en: 'Three menstrual cycles (Quru\')' } },
      { id: 'c', text: { fr: 'Six mois', ar: 'ستة أشهر', en: 'Six months' } },
      { id: 'd', text: { fr: 'Un an', ar: 'سنة', en: 'One year' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Allah dit : "Les femmes divorcées observeront un délai d\'attente de trois Quru\'" (2:228). Les savants divergent si Quru\' = menstruation ou pureté.',
      ar: 'قال تعالى: "وَالْمُطَلَّقَاتُ يَتَرَبَّصْنَ بِأَنفُسِهِنَّ ثَلَاثَةَ قُرُوءٍ" (البقرة:228). اختلف العلماء: هل القرء الحيض أم الطهر.',
      en: 'Allah says: "Divorced women shall wait for three Quru\'" (2:228). Scholars differ if Quru\' = menstruation or purity.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'iddah',
  },
  {
    id: 'famille-iddah-003',
    question: {
      fr: 'Quelle est la \'Iddah d\'une veuve (mari décédé) ?',
      ar: 'ما عدة المتوفى عنها زوجها؟',
      en: 'What is the \'Iddah for a widow (husband deceased)?',
    },
    options: [
      { id: 'a', text: { fr: 'Trois mois', ar: 'ثلاثة أشهر', en: 'Three months' } },
      { id: 'b', text: { fr: 'Pas de \'Iddah', ar: 'لا عدة', en: 'No \'Iddah' } },
      { id: 'c', text: { fr: 'Quatre mois et dix jours', ar: 'أربعة أشهر وعشرة أيام', en: 'Four months and ten days' } },
      { id: 'd', text: { fr: 'Un an', ar: 'سنة كاملة', en: 'One year' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: '"Celles dont les maris décèdent observeront une période de quatre mois et dix jours" (2:234). La veuve enceinte attend jusqu\'à l\'accouchement.',
      ar: '"وَالَّذِينَ يُتَوَفَّوْنَ مِنكُمْ... يَتَرَبَّصْنَ بِأَنفُسِهِنَّ أَرْبَعَةَ أَشْهُرٍ وَعَشْرًا" (البقرة:234). والحامل تنتظر حتى تضع.',
      en: '"Those whose husbands die... shall wait for four months and ten days" (2:234). A pregnant widow waits until delivery.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'iddah',
  },
];

// ============================================
// Questions - Khul' (Demande de divorce par la femme) - NOUVEAU
// ============================================

const khulQuestions: ExamQuestion[] = [
  {
    id: 'famille-khul-001',
    question: {
      fr: 'Qu\'est-ce que le Khul\' ?',
      ar: 'ما هو الخلع؟',
      en: 'What is Khul\'?',
    },
    options: [
      { id: 'a', text: { fr: 'Divorce à l\'initiative de la femme en restituant une compensation (souvent le Mahr)', ar: 'طلاق بطلب الزوجة مقابل تعويض (غالبًا المهر)', en: 'Divorce initiated by wife by returning compensation (often the Mahr)' } },
      { id: 'b', text: { fr: 'Divorce à l\'initiative du mari', ar: 'طلاق بطلب الزوج', en: 'Divorce initiated by husband' } },
      { id: 'c', text: { fr: 'Annulation du mariage par le juge', ar: 'فسخ العقد من القاضي', en: 'Marriage annulment by judge' } },
      { id: 'd', text: { fr: 'Séparation temporaire', ar: 'انفصال مؤقت', en: 'Temporary separation' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Khul\' permet à la femme de demander la séparation si elle ne peut plus vivre avec son mari. Elle restitue généralement le Mahr ou une partie.',
      ar: 'الخلع يسمح للمرأة بطلب الانفصال إذا تعذرت العشرة. وتردّ عادةً المهر أو جزءًا منه.',
      en: 'Khul\' allows the wife to request separation if she cannot live with her husband. She usually returns the Mahr or part of it.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'khul',
  },
  {
    id: 'famille-khul-002',
    question: {
      fr: 'Le consentement du mari est-il nécessaire pour le Khul\' ?',
      ar: 'هل موافقة الزوج ضرورية للخلع؟',
      en: 'Is the husband\'s consent necessary for Khul\'?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui absolument, il peut refuser indéfiniment', ar: 'نعم تمامًا، ويمكنه الرفض للأبد', en: 'Yes absolutely, he can refuse indefinitely' } },
      { id: 'b', text: { fr: 'Non, la femme décide seule', ar: 'لا، المرأة تقرر وحدها', en: 'No, woman decides alone' } },
      { id: 'c', text: { fr: 'Avis majoritaire : oui ; mais le juge peut l\'ordonner si le mari abuse (avis Hanbali et pratique moderne)', ar: 'الجمهور: نعم؛ لكن القاضي يأمر به إذا تعسف الزوج (قول الحنابلة والممارسة الحديثة)', en: 'Majority: yes; but judge can order it if husband abuses (Hanbali view and modern practice)' } },
      { id: 'd', text: { fr: 'Uniquement devant témoins', ar: 'أمام الشهود فقط', en: 'Only before witnesses' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'L\'Islam protège la femme du maintien forcé dans un mariage nuisible. Si le mari refuse sans raison, le juge peut prononcer le Khul\'.',
      ar: 'الإسلام يحمي المرأة من البقاء في زواج مضر. إذا رفض الزوج بلا سبب، يحكم القاضي بالخلع.',
      en: 'Islam protects women from being kept in harmful marriages. If husband refuses without reason, judge can pronounce Khul\'.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'khul',
  },
];

// ============================================
// Questions - Types de Talaq (Divorce) - NOUVEAU
// ============================================

const typeTalaqQuestions: ExamQuestion[] = [
  {
    id: 'famille-talaq-type-001',
    question: {
      fr: 'Quelle est la différence entre Talaq Raj\'i et Talaq Ba\'in ?',
      ar: 'ما الفرق بين الطلاق الرجعي والبائن؟',
      en: 'What is the difference between Talaq Raj\'i and Talaq Ba\'in?',
    },
    options: [
      { id: 'a', text: { fr: 'Aucune différence', ar: 'لا فرق', en: 'No difference' } },
      { id: 'b', text: { fr: 'Raj\'i : le mari peut reprendre sa femme pendant la \'Iddah sans nouveau contrat ; Ba\'in : nouveau contrat requis', ar: 'الرجعي: يمكن للزوج مراجعة زوجته في العدة دون عقد جديد؛ البائن: يتطلب عقدًا جديدًا', en: 'Raj\'i: husband can take wife back during \'Iddah without new contract; Ba\'in: new contract required' } },
      { id: 'c', text: { fr: 'Raj\'i est interdit', ar: 'الرجعي محرم', en: 'Raj\'i is forbidden' } },
      { id: 'd', text: { fr: 'Ba\'in n\'existe pas', ar: 'البائن غير موجود', en: 'Ba\'in doesn\'t exist' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Après le 1er ou 2ème divorce (Raj\'i), le mari peut reprendre sa femme. Après le 3ème (Ba\'in Kubra), elle doit épouser un autre puis divorcer avant de revenir.',
      ar: 'بعد الطلاق الأول أو الثاني (الرجعي)، يمكن للزوج المراجعة. بعد الثالث (البائن الكبرى)، يجب أن تتزوج آخر ثم تطلق قبل العودة.',
      en: 'After 1st or 2nd divorce (Raj\'i), husband can take wife back. After 3rd (Ba\'in Kubra), she must marry another then divorce before returning.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'divorce-types',
  },
  {
    id: 'famille-talaq-type-002',
    question: {
      fr: 'Qu\'est-ce que le Talaq Sunni (selon la Sunna) ?',
      ar: 'ما هو الطلاق السني؟',
      en: 'What is Talaq Sunni (according to Sunnah)?',
    },
    options: [
      { id: 'a', text: { fr: 'Prononcer 3 divorces d\'un coup', ar: 'إيقاع ثلاث طلقات دفعة واحدة', en: 'Pronouncing 3 divorces at once' } },
      { id: 'b', text: { fr: 'Divorcer pendant les menstrues', ar: 'الطلاق أثناء الحيض', en: 'Divorcing during menstruation' } },
      { id: 'c', text: { fr: 'Un seul divorce pendant la pureté (sans rapport), puis laisser passer la \'Iddah', ar: 'طلقة واحدة في طهر لم يمسها فيه، ثم تركها حتى تنقضي العدة', en: 'One divorce during purity (without intercourse), then let \'Iddah pass' } },
      { id: 'd', text: { fr: 'Divorcer en colère', ar: 'الطلاق في الغضب', en: 'Divorcing in anger' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le divorce selon la Sunna laisse une porte ouverte à la réconciliation. Prononcer les 3 à la fois (Talaq Bid\'i) est blâmable et irrévocable.',
      ar: 'الطلاق السني يترك مجالاً للمراجعة. إيقاع الثلاث دفعة واحدة (الطلاق البدعي) مذموم وبائن.',
      en: 'Sunnah divorce leaves room for reconciliation. Pronouncing all 3 at once (Talaq Bid\'i) is blameworthy and irrevocable.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'divorce-types',
  },
];

// ============================================
// Questions - Mariage Moderne
// ============================================

const mariageModerneQuestions: ExamQuestion[] = [
  {
    id: 'famille-mariage-moderne-001',
    question: {
      fr: 'Un mariage contracté via Skype/vidéoconférence est-il valide en Islam ?',
      ar: 'هل الزواج عبر سكايب أو مؤتمر الفيديو صحيح في الإسلام؟',
      en: 'Is a marriage contracted via Skype/videoconference valid in Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Totalement interdit dans toutes les écoles', ar: 'محرم تماماً في جميع المذاهب', en: 'Completely forbidden in all schools' } },
      { id: 'b', text: { fr: 'Valide selon majorité si témoins entendent Ijab wa Qabul en direct et identifient les époux', ar: 'صحيح عند الجمهور إذا سمع الشهود الإيجاب والقبول مباشرة وتعرفوا على الزوجين', en: 'Valid according to majority if witnesses hear Ijab wa Qabul live and identify spouses' } },
      { id: 'c', text: { fr: 'Valide uniquement si les époux sont dans la même ville', ar: 'صحيح فقط إذا كان الزوجان في نفس المدينة', en: 'Valid only if spouses are in same city' } },
      { id: 'd', text: { fr: 'Nécessite présence physique obligatoire sans exception', ar: 'يتطلب الحضور الجسدي الإلزامي بلا استثناء', en: 'Requires mandatory physical presence without exception' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les savants contemporains (Al-Qaradawi, Conseil Fiqh Europe) considèrent le mariage par vidéoconférence valide si les conditions sont remplies : identification claire, témoins entendent en temps réel, Wali présent. La présence physique n\'est pas explicitement exigée par les textes.',
      ar: 'يرى علماء معاصرون (القرضاوي، المجلس الأوروبي للإفتاء) صحة الزواج بالفيديو إذا توفرت الشروط: التعرف الواضح، سماع الشهود المباشر، حضور الولي. الحضور الجسدي ليس شرطاً صريحاً في النصوص.',
      en: 'Contemporary scholars (Al-Qaradawi, European Council for Fatwa) consider videoconference marriage valid if conditions met: clear identification, witnesses hear live, Wali present. Physical presence not explicitly required by texts.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'mariage-moderne',
  },
  {
    id: 'famille-mariage-moderne-002',
    question: {
      fr: 'Le mariage d\'un musulman avec une femme des Gens du Livre (Kitabiya : juive/chrétienne) est-il permis ?',
      ar: 'هل يجوز زواج المسلم من كتابية (يهودية/مسيحية)؟',
      en: 'Is a Muslim man\'s marriage to a woman of People of the Book (Kitabiya: Jewish/Christian) permitted?',
    },
    options: [
      { id: 'a', text: { fr: 'Interdit absolument', ar: 'محرم مطلقاً', en: 'Absolutely forbidden' } },
      { id: 'b', text: { fr: 'Permis selon Coran (5:5) mais déconseillé par majorité savants si risque enfants', ar: 'جائز بنص القرآن (5:5) لكن مكروه عند الجمهور إن خيف على الأولاد', en: 'Permitted by Quran (5:5) but disliked by majority scholars if risk to children' } },
      { id: 'c', text: { fr: 'Permis uniquement en terre non-musulmane', ar: 'جائز فقط في بلاد غير المسلمين', en: 'Permitted only in non-Muslim lands' } },
      { id: 'd', text: { fr: 'Permis mais elle doit se convertir avant le mariage', ar: 'جائز لكن يجب أن تسلم قبل الزواج', en: 'Permitted but she must convert before marriage' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Allah dit : "Il vous est permis d\'épouser les femmes vertueuses parmi les croyantes et celles des Gens du Livre" (5:5). Cependant, Omar ibn al-Khattab déconseilla fortement cette pratique par crainte que les enfants soient élevés dans autre religion. Majorité savants contemporains le permettent légalement mais le déconseillent pratiquement.',
      ar: 'قال تعالى: "وَالْمُحْصَنَاتُ مِنَ الْمُؤْمِنَاتِ وَالْمُحْصَنَاتُ مِنَ الَّذِينَ أُوتُوا الْكِتَابَ" (المائدة:5). لكن عمر بن الخطاب كره ذلك خوفاً على الأولاد. جمهور العلماء المعاصرين يجيزونه شرعاً ويكرهونه عملياً.',
      en: 'Allah says: "Chaste women from believers and from People of the Book are permitted to you" (5:5). However, Umar ibn al-Khattab strongly discouraged this practice fearing children raised in another religion. Majority contemporary scholars permit legally but discourage practically.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'mariage-moderne',
  },
  {
    id: 'famille-mariage-moderne-003',
    question: {
      fr: 'Qu\'est-ce que le Nikah al-Mut\'ah (mariage temporaire) et quelle est sa position en Islam sunnite ?',
      ar: 'ما هو نكاح المتعة وما حكمه في الإسلام السني؟',
      en: 'What is Nikah al-Mut\'ah (temporary marriage) and what is its position in Sunni Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Permis selon toutes les écoles sunnites', ar: 'جائز عند جميع المذاهب السنية', en: 'Permitted by all Sunni schools' } },
      { id: 'b', text: { fr: 'Permis temporairement puis abrogé définitivement par le Prophète à Khaybar/Awtas - Haram selon consensus sunnite', ar: 'أُبيح مؤقتاً ثم حُرّم نهائياً في خيبر/أوطاس - حرام بإجماع السنة', en: 'Temporarily permitted then definitively abrogated by Prophet at Khaybar/Awtas - Haram by Sunni consensus' } },
      { id: 'c', text: { fr: 'Valide pour voyageurs uniquement', ar: 'صحيح للمسافرين فقط', en: 'Valid for travelers only' } },
      { id: 'd', text: { fr: 'Recommandé pour éviter la fornication', ar: 'مستحب لتجنب الزنا', en: 'Recommended to avoid fornication' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ autorisa temporairement Mut\'ah lors de certaines expéditions, puis l\'interdit définitivement. Ali rapporte : "Le Messager d\'Allah a interdit le Mut\'ah et la viande d\'âne domestique le jour de Khaybar" (Bukhari, Muslim). C\'est Haram selon consensus Ahl as-Sunnah. Les Chiites imamites le permettent encore.',
      ar: 'أذن النبي ﷺ بالمتعة مؤقتاً في بعض الغزوات ثم حرمها نهائياً. روى علي: "نهى رسول الله عن متعة النساء ولحوم الحمر الأهلية يوم خيبر" (البخاري، مسلم). حرام بإجماع أهل السنة. الشيعة الإمامية يجيزونها.',
      en: 'Prophet ﷺ temporarily allowed Mut\'ah during some expeditions then forbade it definitively. Ali reported: "Messenger of Allah forbade Mut\'ah and domestic donkey meat on day of Khaybar" (Bukhari, Muslim). Haram by Ahl as-Sunnah consensus. Imami Shias still permit it.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'mariage-moderne',
  },
  {
    id: 'famille-mariage-moderne-004',
    question: {
      fr: 'Une condition dans le contrat de mariage stipulant que la femme peut continuer ses études/travail est-elle valide ?',
      ar: 'هل شرط في عقد الزواج يسمح للزوجة بمواصلة الدراسة/العمل صحيح؟',
      en: 'Is a condition in marriage contract stipulating wife can continue studies/work valid?',
    },
    options: [
      { id: 'a', text: { fr: 'Invalide - l\'homme a droit absolu d\'empêcher sa femme de sortir', ar: 'باطل - للرجل الحق المطلق في منع زوجته من الخروج', en: 'Invalid - man has absolute right to prevent wife from leaving' } },
      { id: 'b', text: { fr: 'Valide et contraignante selon majorité (Hanbali, Maliki moderne) - marie femme "telle qu\'elle est"', ar: 'صحيح وملزم عند الجمهور (الحنابلة، المالكية المعاصرة) - يتزوجها "كما هي"', en: 'Valid and binding according to majority (Hanbali, modern Maliki) - marries woman "as she is"' } },
      { id: 'c', text: { fr: 'Valide uniquement si la famille de l\'épouse l\'exige', ar: 'صحيح فقط إذا طلبت عائلة الزوجة', en: 'Valid only if wife\'s family demands it' } },
      { id: 'd', text: { fr: 'Le mariage entier devient nul si cette condition est incluse', ar: 'الزواج كله يبطل إن وُضع هذا الشرط', en: 'Entire marriage becomes void if this condition included' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Ibn Taymiyyah (Hanbali) et savants contemporains valident les conditions qui ne contredisent pas essence du mariage. Le Prophète ﷺ dit : "Les conditions les plus dignes d\'être respectées sont celles du contrat de mariage" (Bukhari). Si l\'homme accepte consciemment cette condition, il est lié. Certains Hanafis classiques rejetaient mais opinion moderne dominante valide.',
      ar: 'ابن تيمية (الحنبلي) والعلماء المعاصرون يصححون الشروط التي لا تناقض جوهر الزواج. قال ﷺ: "أحق الشروط أن توفوا بها ما استحللتم به الفروج" (البخاري). إن قبل الرجل الشرط عن وعي فهو ملزم. بعض الحنفية القدامى رفضوا لكن الرأي المعاصر السائد يصحح.',
      en: 'Ibn Taymiyyah (Hanbali) and contemporary scholars validate conditions not contradicting marriage essence. Prophet ﷺ said: "Most worthy conditions to fulfill are those of marriage contract" (Bukhari). If man consciously accepts this condition, he\'s bound. Some classical Hanafis rejected but dominant modern opinion validates.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'mariage-moderne',
  },
  {
    id: 'famille-mariage-moderne-005',
    question: {
      fr: 'Le mariage forcé (Ijbar) sans consentement de la femme est-il valide ?',
      ar: 'هل الزواج بالإجبار بدون رضا المرأة صحيح؟',
      en: 'Is forced marriage (Ijbar) without woman\'s consent valid?',
    },
    options: [
      { id: 'a', text: { fr: 'Valide si le père décide pour sa fille vierge', ar: 'صحيح إن قرر الأب لابنته البكر', en: 'Valid if father decides for virgin daughter' } },
      { id: 'b', text: { fr: 'Invalide - Le Prophète a annulé un mariage forcé et dit "la vierge doit être consultée"', ar: 'باطل - النبي فسخ نكاح مُكرَهة وقال "البكر تُستأذن"', en: 'Invalid - Prophet annulled forced marriage and said "virgin must be consulted"' } },
      { id: 'c', text: { fr: 'Valide uniquement pour femmes mineures', ar: 'صحيح فقط للقاصرات', en: 'Valid only for minor females' } },
      { id: 'd', text: { fr: 'Valide si les deux familles sont d\'accord', ar: 'صحيح إن وافقت العائلتان', en: 'Valid if both families agree' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ dit : "La femme précédemment mariée ne sera pas mariée sans qu\'on lui demande son ordre, et la vierge ne sera pas mariée sans qu\'on lui demande sa permission" (Bukhari, Muslim). Il annula le mariage d\'une fille venue se plaindre d\'avoir été mariée de force par son père. Le consentement est OBLIGATOIRE. Certains juristes classiques permettaient Ijbar pour vierge mais c\'est rejeté par consensus moderne.',
      ar: 'قال ﷺ: "لا تُنكح الأيم حتى تُستأمر، ولا تُنكح البكر حتى تُستأذن" (البخاري، مسلم). وفسخ زواج فتاة جاءت تشكو أن أباها زوجها مُكرهة. الرضا واجب. بعض الفقهاء القدامى أجازوا الإجبار للبكر لكن مرفوض بإجماع معاصر.',
      en: 'Prophet ﷺ said: "Previously married woman shall not be married without asking her command, and virgin shall not be married without asking her permission" (Bukhari, Muslim). He annulled marriage of girl who complained father married her by force. Consent MANDATORY. Some classical jurists allowed Ijbar for virgin but rejected by modern consensus.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'mariage-moderne',
  },
  {
    id: 'famille-mariage-moderne-006',
    question: {
      fr: 'Un mariage contracté uniquement pour obtenir la nationalité/visa (mariage blanc) est-il valide ?',
      ar: 'هل الزواج لمجرد الحصول على الجنسية/التأشيرة (زواج المصلحة) صحيح؟',
      en: 'Is a marriage contracted solely to obtain nationality/visa (sham marriage) valid?',
    },
    options: [
      { id: 'a', text: { fr: 'Valide si les piliers formels sont remplis même si intention cachée', ar: 'صحيح إن توفرت الأركان الظاهرة ولو كانت النية خفية', en: 'Valid if formal pillars met even if hidden intention' } },
      { id: 'b', text: { fr: 'Haram et invalide si l\'intention n\'est PAS de fonder une vraie famille - tromperie et fraude', ar: 'حرام وباطل إن لم تكن النية تأسيس أسرة حقيقية - خداع وغش', en: 'Haram and invalid if intention NOT to establish real family - deception and fraud' } },
      { id: 'c', text: { fr: 'Permis car le mariage protège de la fornication', ar: 'جائز لأن الزواج يحفظ من الزنا', en: 'Permitted as marriage protects from fornication' } },
      { id: 'd', text: { fr: 'Valide uniquement si la dot est payée', ar: 'صحيح فقط إن دُفع المهر', en: 'Valid only if dowry paid' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le mariage en Islam exige Niyyah (intention) sincère de fonder une famille, vivre ensemble, se soutenir mutuellement. Un "mariage blanc" où les époux n\'ont aucune intention de cohabitation réelle est : 1) Fraude/tromperie (Haram), 2) Violation lois du pays (Haram), 3) Profanation institution sacrée. Majorité savants contemporains (ECFR, Qaradawi) le déclarent invalide car manque l\'intention essentielle.',
      ar: 'الزواج في الإسلام يتطلب نية صادقة لتأسيس أسرة، العيش معاً، الدعم المتبادل. "زواج المصلحة" حيث لا نية للزوجين بالسكن الحقيقي: 1) غش وخداع (حرام)، 2) انتهاك قوانين البلد (حرام)، 3) امتهان مؤسسة مقدسة. جمهور العلماء المعاصرين (المجلس الأوروبي، القرضاوي) يحكمون ببطلانه لفقدان النية الجوهرية.',
      en: 'Marriage in Islam requires sincere Niyyah (intention) to establish family, live together, support mutually. A "sham marriage" where spouses have no intention of real cohabitation is: 1) Fraud/deception (Haram), 2) Violation of country laws (Haram), 3) Desecration of sacred institution. Majority contemporary scholars (ECFR, Qaradawi) declare it invalid for lacking essential intention.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'mariage-moderne',
  },
  {
    id: 'famille-mariage-moderne-007',
    question: {
      fr: 'Une grande différence d\'âge (par exemple homme 60 ans, femme 20 ans) rend-elle le mariage invalide ?',
      ar: 'هل فارق السن الكبير (مثلاً رجل 60 سنة، امرأة 20 سنة) يُبطل الزواج؟',
      en: 'Does a large age difference (e.g., man 60 years, woman 20 years) invalidate marriage?',
    },
    options: [
      { id: 'a', text: { fr: 'Interdit si différence >20 ans', ar: 'محرم إن كان الفارق >20 سنة', en: 'Forbidden if difference >20 years' } },
      { id: 'b', text: { fr: 'Valide légalement si consentement libre - aucune limite d\'âge dans Shariah', ar: 'صحيح شرعاً بالرضا الحر - لا حد للسن في الشريعة', en: 'Legally valid with free consent - no age limit in Shariah' } },
      { id: 'c', text: { fr: 'Invalide automatiquement', ar: 'باطل تلقائياً', en: 'Automatically invalid' } },
      { id: 'd', text: { fr: 'Permis uniquement si la femme est veuve', ar: 'جائز فقط إن كانت المرأة أرملة', en: 'Permitted only if woman is widow' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Il n\'y a aucune interdiction textuelle sur la différence d\'âge dans le mariage islamique. Le Prophète ﷺ épousa Khadija (40 ans) alors qu\'il avait 25 ans, puis Aisha (jeune) quand il était âgé. Tant que : 1) Consentement libre et éclairé, 2) Capacité juridique (majorité), 3) Pas d\'exploitation, le mariage est valide. Cependant, le concept de Kafaa (compatibilité) recommande proximité d\'âge pour harmonie.',
      ar: 'لا يوجد نص يحرم فارق السن في الزواج الإسلامي. تزوج النبي ﷺ خديجة (40 سنة) وهو ابن 25، ثم عائشة (صغيرة) وهو كبير. طالما: 1) رضا حر ومستنير، 2) أهلية قانونية (بلوغ)، 3) لا استغلال، فالزواج صحيح. لكن مفهوم الكفاءة يستحب تقارب السن للانسجام.',
      en: 'There\'s no textual prohibition on age difference in Islamic marriage. Prophet ﷺ married Khadija (40 years) when he was 25, then Aisha (young) when he was older. As long as: 1) Free informed consent, 2) Legal capacity (maturity), 3) No exploitation, marriage is valid. However, concept of Kafaa (compatibility) recommends age proximity for harmony.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'mariage-moderne',
  },
  {
    id: 'famille-mariage-moderne-008',
    question: {
      fr: 'Qu\'est-ce que le principe de Kafaa (Kafa\'ah) dans le mariage et est-il obligatoire ?',
      ar: 'ما هو مبدأ الكفاءة في الزواج وهل هو واجب؟',
      en: 'What is the principle of Kafaa (Kafa\'ah) in marriage and is it mandatory?',
    },
    options: [
      { id: 'a', text: { fr: 'Egalité richesse obligatoire - mariage invalide sinon', ar: 'مساواة الثروة واجبة - الزواج باطل إن لم تتحقق', en: 'Wealth equality mandatory - marriage invalid otherwise' } },
      { id: 'b', text: { fr: 'Compatibilité sociale/économique/religieuse - recommandée (Mandub) pas obligatoire, droit de la famille refuser', ar: 'التوافق الاجتماعي/الاقتصادي/الديني - مستحب لا واجب، للأسرة حق الرفض', en: 'Social/economic/religious compatibility - recommended (Mandub) not mandatory, family right to refuse' } },
      { id: 'c', text: { fr: 'Egalité raciale stricte obligatoire', ar: 'المساواة العرقية الصارمة واجبة', en: 'Strict racial equality mandatory' } },
      { id: 'd', text: { fr: 'Aucune pertinence en Islam', ar: 'لا علاقة له بالإسلام', en: 'No relevance in Islam' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Kafaa signifie "compatibilité" entre époux. Majorité juristes (Shafi\'i, Hanbali, Maliki) la considèrent Mandub (recommandée) pour harmonie, non condition validité. Critères traditionnels : religion (piété), lignage, profession, liberté (vs esclavage historique). Le Prophète ﷺ dit : "Si vient à vous quelqu\'un dont vous agréez la religion et le comportement, mariez-le" (Tirmidhi). La femme adulte peut renoncer à Kafaa. Certains Hanafis donnent à la famille droit d\'objection si absence Kafaa.',
      ar: 'الكفاءة تعني "التوافق" بين الزوجين. جمهور الفقهاء (الشافعية، الحنابلة، المالكية) يعتبرونها مستحبة للانسجام، لا شرط صحة. المعايير التقليدية: الدين (التقوى)، النسب، المهنة، الحرية (ضد الرق تاريخياً). قال ﷺ: "إذا جاءكم من ترضون دينه وخلقه فزوجوه" (الترمذي). المرأة البالغة يمكنها التنازل عن الكفاءة. بعض الحنفية يعطون العائلة حق الاعتراض إن فُقدت الكفاءة.',
      en: 'Kafaa means "compatibility" between spouses. Majority jurists (Shafi\'i, Hanbali, Maliki) consider it Mandub (recommended) for harmony, not validity condition. Traditional criteria: religion (piety), lineage, profession, freedom (vs historical slavery). Prophet ﷺ said: "If someone whose religion and behavior you approve comes to you, marry him" (Tirmidhi). Adult woman can waive Kafaa. Some Hanafis give family right to object if Kafaa absent.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'mariage-moderne',
  },
];

// ============================================
// Questions - Droits de la Femme & Violences
// ============================================

const droitsFemmeModerneQuestions: ExamQuestion[] = [
  {
    id: 'famille-femme-001',
    question: {
      fr: 'Quelle est la position de l\'Islam sur la violence conjugale ?',
      ar: 'ما موقف الإسلام من العنف الزوجي؟',
      en: 'What is Islam\'s position on domestic violence?',
    },
    options: [
      { id: 'a', text: { fr: 'Permise en cas de désobéissance majeure', ar: 'مباحة في حال العصيان الكبير', en: 'Permitted in case of major disobedience' } },
      { id: 'b', text: { fr: 'Haram absolument - Le Prophète dit "Ne frappez pas les servantes d\'Allah" et "Les meilleurs d\'entre vous sont les meilleurs envers leurs femmes"', ar: 'حرام مطلقاً - قال النبي "لا تضربوا إماء الله" و"خيركم خيركم لنسائه"', en: 'Absolutely Haram - Prophet said "Do not strike Allah\'s maidservants" and "Best among you are best to their wives"' } },
      { id: 'c', text: { fr: 'Permise si légère et sans blessure', ar: 'مباحة إن كانت خفيفة وبلا إصابة', en: 'Permitted if light and without injury' } },
      { id: 'd', text: { fr: 'Obligatoire pour corriger l\'épouse', ar: 'واجبة لتقويم الزوجة', en: 'Mandatory to correct wife' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ n\'a JAMAIS frappé une femme/servante de sa vie (Aisha, Muslim). Il dit : "Ne frappez pas les servantes d\'Allah" puis quand Omar vint se plaindre que femmes prenaient dessus, il dit réticent "Alors frappez" mais ajouta "et ceux qui le font ne sont pas les meilleurs d\'entre vous" (Abu Dawud). Le verset 4:34 "Daraba" est réinterprété par savants contemporains comme "séparation" ou "tape symbolique" (Siwak). Violence conjugale = Haram absolu, divorce justifié.',
      ar: 'النبي ﷺ لم يضرب امرأة/خادمة قط في حياته (عائشة، مسلم). قال: "لا تضربوا إماء الله" ثم لما جاء عمر يشكو أن النساء استعلين قال متردداً "فاضربوهن" لكن أضاف "وليس أولئك بخياركم" (أبو داود). آية 4:34 "واضربوهن" يعيد تفسيرها علماء معاصرون ك"الهجر" أو "لمسة رمزية" (السواك). العنف الزوجي = حرام مطلق، والطلاق مبرر.',
      en: 'Prophet ﷺ NEVER struck a woman/servant in his life (Aisha, Muslim). He said: "Do not strike Allah\'s maidservants" then when Umar came complaining women taking over, he reluctantly said "Then strike them" but added "and those who do are not best among you" (Abu Dawud). Verse 4:34 "Daraba" reinterpreted by contemporary scholars as "separation" or "symbolic tap" (Siwak). Domestic violence = absolutely Haram, divorce justified.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'droits-femme',
  },
  {
    id: 'famille-femme-002',
    question: {
      fr: 'Une femme mariée a-t-elle le droit de travailler/étudier sans permission de son mari ?',
      ar: 'هل للمرأة المتزوجة الحق في العمل/الدراسة بدون إذن زوجها؟',
      en: 'Does a married woman have the right to work/study without her husband\'s permission?',
    },
    options: [
      { id: 'a', text: { fr: 'Non jamais - la femme doit obéissance absolue', ar: 'لا أبداً - المرأة يجب عليها الطاعة المطلقة', en: 'No never - woman owes absolute obedience' } },
      { id: 'b', text: { fr: 'Débat : Hanafi/Maliki classiques exigent permission ; savants contemporains permettent si pas négligence devoirs conjugaux', ar: 'خلاف: الحنفية/المالكية الكلاسيكيون يشترطون الإذن؛ علماء معاصرون يجيزون إن لم تقصر في الواجبات الزوجية', en: 'Debate: Classical Hanafi/Maliki require permission; contemporary scholars permit if no neglect of marital duties' } },
      { id: 'c', text: { fr: 'Oui sans aucune restriction', ar: 'نعم بلا أي قيد', en: 'Yes without any restriction' } },
      { id: 'd', text: { fr: 'Permis uniquement si elle gagne plus que lui', ar: 'جائز فقط إن كانت تكسب أكثر منه', en: 'Permitted only if she earns more than him' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Question débattue. Position classique (Hanafi/Maliki) : Mari peut empêcher si travail interfère devoirs foyer. Position moderne (Qaradawi, ECFR, féministes musulmanes) : Femme a droit inhérent au travail/éducation tant qu\'elle ne néglige pas enfants/foyer gravement. Khadija (épouse Prophète) était commerçante prospère. Si condition "travail permis" était dans contrat mariage, elle devient contraignante. Equilibre entre droits épouse et harmonie familiale.',
      ar: 'مسألة خلافية. الموقف الكلاسيكي (حنفي/مالكي): للزوج منعها إن تعارض العمل مع واجبات البيت. الموقف المعاصر (القرضاوي، المجلس الأوروبي، النسويات المسلمات): للمرأة حق أصيل في العمل/التعليم طالما لا تقصر في الأولاد/البيت تقصيراً فاحشاً. خديجة (زوج النبي) كانت تاجرة ناجحة. إن كان شرط "العمل مباح" في عقد الزواج، صار ملزماً. توازن بين حقوق الزوجة وانسجام الأسرة.',
      en: 'Debated issue. Classical position (Hanafi/Maliki): Husband can prevent if work interferes household duties. Modern position (Qaradawi, ECFR, Muslim feminists): Woman has inherent right to work/education as long as not severely neglecting children/home. Khadija (Prophet\'s wife) was prosperous merchant. If condition "work permitted" was in marriage contract, it becomes binding. Balance between wife rights and family harmony.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'droits-femme',
  },
  {
    id: 'famille-femme-003',
    question: {
      fr: 'Qu\'est-ce que le Nushuz (نشوز) et comment est-il défini dans l\'Islam contemporain ?',
      ar: 'ما هو النشوز وكيف يُعرَّف في الإسلام المعاصر؟',
      en: 'What is Nushuz and how is it defined in contemporary Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Toute sortie de la maison sans permission', ar: 'أي خروج من البيت بدون إذن', en: 'Any leaving house without permission' } },
      { id: 'b', text: { fr: 'Rebellion grave : abandon du lit conjugal sans raison, refus devoirs essentiels - NE justifie JAMAIS violence', ar: 'التمرد الجسيم: هجر الفراش بلا سبب، رفض الواجبات الأساسية - لا يبرر العنف أبداً', en: 'Grave rebellion: abandoning marital bed without reason, refusing essential duties - NEVER justifies violence' } },
      { id: 'c', text: { fr: 'Travailler sans permission', ar: 'العمل بدون إذن', en: 'Working without permission' } },
      { id: 'd', text: { fr: 'Parler à d\'autres hommes', ar: 'الحديث مع رجال آخرين', en: 'Speaking to other men' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Nushuz (Coran 4:34) traditionnellement = désobéissance grave de l\'épouse. Réinterprétation contemporaine : rébellion manifeste contre fondements du mariage (abandon prolongé du foyer sans raison, refus délibéré relations conjugales sans cause valable). IMPORTANT : 1) Nushuz peut aussi s\'appliquer au mari (4:128), 2) Etapes : conseil, séparation lit, médiation (pas violence), 3) Violence physique = Haram selon consensus moderne, 4) Femme a droit Khul\' (divorce) si vie devient insupportable.',
      ar: 'النشوز (القرآن 4:34) تقليدياً = عصيان جسيم من الزوجة. إعادة التفسير المعاصر: التمرد الصريح ضد أسس الزواج (الهجران المطول للبيت بلا سبب، الرفض المتعمد للعلاقة الزوجية بلا عذر). مهم: 1) النشوز ينطبق على الزوج أيضاً (4:128)، 2) الخطوات: الوعظ، هجر الفراش، التحكيم (لا عنف)، 3) العنف الجسدي = حرام بالإجماع المعاصر، 4) للمرأة حق الخلع إن صارت الحياة لا تطاق.',
      en: 'Nushuz (Quran 4:34) traditionally = grave disobedience by wife. Contemporary reinterpretation: manifest rebellion against marriage foundations (prolonged abandonment of home without reason, deliberate refusal of conjugal relations without valid cause). IMPORTANT: 1) Nushuz can also apply to husband (4:128), 2) Steps: advice, bed separation, mediation (not violence), 3) Physical violence = Haram by modern consensus, 4) Woman has right to Khul\' (divorce) if life becomes unbearable.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'droits-femme',
  },
  {
    id: 'famille-femme-004',
    question: {
      fr: 'Le viol conjugal existe-t-il en droit islamique ?',
      ar: 'هل الاغتصاب الزوجي موجود في الفقه الإسلامي؟',
      en: 'Does marital rape exist in Islamic jurisprudence?',
    },
    options: [
      { id: 'a', text: { fr: 'Non - la femme doit obéissance absolue dans le lit', ar: 'لا - المرأة يجب عليها الطاعة المطلقة في الفراش', en: 'No - woman owes absolute obedience in bed' } },
      { id: 'b', text: { fr: 'Oui selon consensus savants contemporains - forcer l\'épouse = violence/oppression (Zulm) Haram', ar: 'نعم بإجماع العلماء المعاصرين - إجبار الزوجة = عنف/ظلم حرام', en: 'Yes according to contemporary scholars consensus - forcing wife = violence/oppression (Zulm) Haram' } },
      { id: 'c', text: { fr: 'Permis si elle refuse sans raison valable', ar: 'مباح إن رفضت بلا عذر شرعي', en: 'Permitted if she refuses without valid reason' } },
      { id: 'd', text: { fr: 'Concept occidental non applicable en Islam', ar: 'مفهوم غربي لا ينطبق على الإسلام', en: 'Western concept not applicable to Islam' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Position moderne (IIIT, Qaradawi, savants Azhar) : Forcer sexuellement l\'épouse = Zulm (oppression) + Udwan (agression) = Haram. Arguments : 1) Coran dit "cohabitez avec elles convenablement" (4:19) - violence n\'est PAS "convenable", 2) Prophète ﷺ dit "Aucun de vous ne doit tomber sur sa femme comme une bête" (Ibn Majah), 3) Relations conjugales basées sur Mawaddah (affection) et Rahmah (miséricorde) pas contrainte. Femme a excuses valables : maladie, menstrues, Nifas, état psychologique.',
      ar: 'الموقف المعاصر (المعهد العالمي، القرضاوي، علماء الأزهر): إجبار الزوجة جنسياً = ظلم + عدوان = حرام. الحجج: 1) القرآن يقول "وعاشروهن بالمعروف" (4:19) - العنف ليس "بالمعروف"، 2) النبي ﷺ قال "لا يقعن أحدكم على امرأته كما تقع البهيمة" (ابن ماجه)، 3) العلاقة الزوجية مبنية على المودة والرحمة لا الإجبار. للمرأة أعذار شرعية: المرض، الحيض، النفاس، الحالة النفسية.',
      en: 'Modern position (IIIT, Qaradawi, Azhar scholars): Sexually forcing wife = Zulm (oppression) + Udwan (aggression) = Haram. Arguments: 1) Quran says "live with them in kindness" (4:19) - violence is NOT "kindness", 2) Prophet ﷺ said "None of you should fall upon his wife like an animal" (Ibn Majah), 3) Marital relations based on Mawaddah (affection) and Rahmah (mercy) not coercion. Wife has valid excuses: illness, menstruation, Nifas, psychological state.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'droits-femme',
  },
  {
    id: 'famille-femme-005',
    question: {
      fr: 'Le harcèlement psychologique ou l\'abus économique (priver l\'épouse de Nafaqah) sont-ils permis ?',
      ar: 'هل التحرش النفسي أو الإساءة الاقتصادية (حرمان الزوجة من النفقة) مباح؟',
      en: 'Are psychological harassment or economic abuse (depriving wife of Nafaqah) permitted?',
    },
    options: [
      { id: 'a', text: { fr: 'Permis pour corriger la femme', ar: 'مباح لتقويم المرأة', en: 'Permitted to correct woman' } },
      { id: 'b', text: { fr: 'Haram - Nafaqah est DROIT obligatoire de l\'épouse ; abus psychologique = Zulm', ar: 'حرام - النفقة حق واجب للزوجة؛ الإساءة النفسية = ظلم', en: 'Haram - Nafaqah is MANDATORY right of wife; psychological abuse = Zulm' } },
      { id: 'c', text: { fr: 'Permis si la femme est désobéissante', ar: 'مباح إن كانت المرأة عاصية', en: 'Permitted if woman is disobedient' } },
      { id: 'd', text: { fr: 'Aucune règle sur ce sujet', ar: 'لا حكم في هذا الموضوع', en: 'No ruling on this subject' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Nafaqah (pension alimentaire : nourriture, logement, habillement) est DROIT obligatoire (Wajib) de l\'épouse selon Coran 2:233, 65:6 "Que celui qui a les moyens dépense selon ses moyens". Priver l\'épouse de Nafaqah = péché grave (Kabira), elle peut demander divorce judiciaire (Tatliq). Abus psychologique (insultes, humiliation, isolation, menaces) = Zulm (oppression) interdit. Le Prophète ﷺ dit : "Le croyant ne doit pas détester la croyante ; s\'il déteste un trait, il en aimera un autre" (Muslim).',
      ar: 'النفقة (الطعام، المسكن، الكسوة) حق واجب للزوجة بنص القرآن 2:233، 65:6 "لينفق ذو سعة من سعته". حرمان الزوجة من النفقة = كبيرة، ولها طلب التطليق القضائي. الإساءة النفسية (الشتم، الإذلال، العزل، التهديد) = ظلم محرم. قال ﷺ: "لا يفرك مؤمن مؤمنة، إن كره منها خلقاً رضي منها آخر" (مسلم).',
      en: 'Nafaqah (maintenance: food, housing, clothing) is MANDATORY (Wajib) right of wife per Quran 2:233, 65:6 "Let man of means spend according to his means". Depriving wife of Nafaqah = grave sin (Kabira), she can seek judicial divorce (Tatliq). Psychological abuse (insults, humiliation, isolation, threats) = Zulm (oppression) forbidden. Prophet ﷺ said: "Believer should not hate believing woman; if he dislikes one trait, he\'ll like another" (Muslim).',
    },
    points: 2,
    difficulty: 'medium',
    category: 'droits-femme',
  },
  {
    id: 'famille-femme-006',
    question: {
      fr: 'Une femme peut-elle demander le divorce si elle est malheureuse (sans violence physique) ?',
      ar: 'هل يمكن للمرأة طلب الطلاق إن كانت تعيسة (بدون عنف جسدي)؟',
      en: 'Can a woman request divorce if she is unhappy (without physical violence)?',
    },
    options: [
      { id: 'a', text: { fr: 'Non - elle doit rester quel que soit son état', ar: 'لا - يجب عليها البقاء مهما كان حالها', en: 'No - she must stay regardless of her state' } },
      { id: 'b', text: { fr: 'Oui via Khul\' (divorce par compensation) - rend la dot et se libère', ar: 'نعم عبر الخلع - ترد المهر وتتحرر', en: 'Yes via Khul\' (compensatory divorce) - returns dowry and frees herself' } },
      { id: 'c', text: { fr: 'Uniquement si mari accepte gracieusement', ar: 'فقط إن وافق الزوج طواعية', en: 'Only if husband graciously agrees' } },
      { id: 'd', text: { fr: 'Jamais permis selon toutes les écoles', ar: 'غير مباح أبداً عند جميع المذاهب', en: 'Never permitted according to all schools' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Khul\' (خلع) est le divorce demandé par la femme en rendant la dot. Preuves : 1) Femme de Thabit ibn Qays vint au Prophète ﷺ dire "je ne reproche rien à Thabit sur religion/comportement mais je déteste la mécréance en Islam (rester mariée détestant mari)" - il ordonna Khul\' (Bukhari), 2) Ibn Abbas dit : "Epouse de Thabit rendit le jardin (dot) et il divorça d\'elle". Selon majorité, Khul\' valide même si mari refuse (juge peut l\'imposer). Femme n\'a pas besoin justifier raison si rend dot.',
      ar: 'الخلع طلاق تطلبه المرأة بإرجاع المهر. الأدلة: 1) جاءت امرأة ثابت بن قيس للنبي ﷺ قائلة "لا أعتب على ثابت في دين ولا خلق ولكن أكره الكفر في الإسلام (البقاء متزوجة كارهة لزوجها)" - فأمر بالخلع (البخاري)، 2) ابن عباس قال: "ردت زوجة ثابت الحديقة (المهر) فطلقها". عند الجمهور، الخلع صحيح ولو رفض الزوج (القاضي يفرضه). المرأة لا تحتاج تبرير السبب إن ردت المهر.',
      en: 'Khul\' is divorce requested by woman by returning dowry. Proofs: 1) Wife of Thabit ibn Qays came to Prophet ﷺ saying "I don\'t blame Thabit in religion/behavior but I hate disbelief in Islam (staying married hating husband)" - he ordered Khul\' (Bukhari), 2) Ibn Abbas said: "Thabit\'s wife returned garden (dowry) and he divorced her". According to majority, Khul\' valid even if husband refuses (judge can impose). Woman need not justify reason if returns dowry.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'droits-femme',
  },
  {
    id: 'famille-femme-007',
    question: {
      fr: 'Une femme mariée conserve-t-elle le droit de propriété sur ses biens personnels et revenus ?',
      ar: 'هل تحتفظ المرأة المتزوجة بحق الملكية على أموالها الشخصية ودخلها؟',
      en: 'Does a married woman retain property rights over her personal assets and income?',
    },
    options: [
      { id: 'a', text: { fr: 'Non - tous ses biens passent au mari', ar: 'لا - جميع أموالها تنتقل للزوج', en: 'No - all her assets transfer to husband' } },
      { id: 'b', text: { fr: 'Oui absolument - indépendance financière totale, elle n\'a AUCUNE obligation de dépenser pour la maison', ar: 'نعم تماماً - استقلال مالي كامل، لا التزام عليها بالإنفاق على البيت', en: 'Yes absolutely - total financial independence, she has NO obligation to spend on household' } },
      { id: 'c', text: { fr: 'Seulement ce qu\'elle avait avant le mariage', ar: 'فقط ما كانت تملكه قبل الزواج', en: 'Only what she had before marriage' } },
      { id: 'd', text: { fr: 'Le mari décide comment elle utilise son argent', ar: 'الزوج يقرر كيف تستخدم مالها', en: 'Husband decides how she uses her money' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Un des droits les plus forts de la femme musulmane : indépendance financière TOTALE. Preuves : 1) Coran 4:32 "Les hommes ont part de ce qu\'ils ont acquis, les femmes ont part de ce qu\'elles ont acquis", 2) Khadija (épouse Prophète) possédait et gérait sa fortune, 3) La Nafaqah (pension) est OBLIGATION du mari uniquement, la femme n\'a AUCUNE obligation légale de contribuer aux dépenses ménagères même riche. Si elle le fait, c\'est Sadaqah (charité) de sa part. Elle garde dot, héritage, salaire.',
      ar: 'من أقوى حقوق المرأة المسلمة: الاستقلال المالي الكامل. الأدلة: 1) القرآن 4:32 "لِلرِّجَالِ نَصِيبٌ مِمَّا اكْتَسَبُوا وَلِلنِّسَاءِ نَصِيبٌ مِمَّا اكْتَسَبْنَ"، 2) خديجة (زوج النبي) ملكت وأدارت ثروتها، 3) النفقة التزام على الزوج فقط، المرأة لا التزام شرعي عليها بالمساهمة في نفقات البيت ولو كانت غنية. إن فعلت فهو صدقة منها. تحتفظ بالمهر والميراث والراتب.',
      en: 'One of Muslim woman\'s strongest rights: TOTAL financial independence. Proofs: 1) Quran 4:32 "Men have portion of what they earned, women have portion of what they earned", 2) Khadija (Prophet\'s wife) owned and managed her fortune, 3) Nafaqah (maintenance) is husband\'s OBLIGATION alone, woman has NO legal obligation to contribute to household expenses even if rich. If she does, it\'s Sadaqah (charity) from her. She keeps dowry, inheritance, salary.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'droits-femme',
  },
];

// ============================================
// Questions - Divorce Moderne
// ============================================

const divorceModerneQuestions: ExamQuestion[] = [
  {
    id: 'famille-divorce-moderne-001',
    question: {
      fr: 'Un divorce prononcé par SMS, WhatsApp ou email est-il valide ?',
      ar: 'هل الطلاق المرسل عبر رسالة نصية أو واتساب أو بريد إلكتروني صحيح؟',
      en: 'Is a divorce pronounced by SMS, WhatsApp or email valid?',
    },
    options: [
      { id: 'a', text: { fr: 'Invalide automatiquement - doit être oral', ar: 'باطل تلقائياً - يجب أن يكون شفهياً', en: 'Automatically invalid - must be oral' } },
      { id: 'b', text: { fr: 'Valide selon Hanafis si intention claire ; autres écoles exigent témoins/présence', ar: 'صحيح عند الحنفية إن كانت النية واضحة؛ المذاهب الأخرى تشترط الشهود/الحضور', en: 'Valid according to Hanafis if clear intention; other schools require witnesses/presence' } },
      { id: 'c', text: { fr: 'Valide uniquement si les deux époux sont d\'accord', ar: 'صحيح فقط إن وافق الزوجان', en: 'Valid only if both spouses agree' } },
      { id: 'd', text: { fr: 'Permis uniquement pour Talaq Raj\'i', ar: 'مباح فقط للطلاق الرجعي', en: 'Permitted only for Talaq Raj\'i' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Débat entre écoles : Hanafis : divorce par écrit (y compris électronique) valide si intention prouvée - "parole prononcée compte, parole écrite compte aussi". Malikis/Shafi\'is/Hanbalis : préfèrent témoins et oralité. Savants contemporains (Azhar, ECFR) : valide avec précautions - 1) Message clair sans ambiguïté (pas sous colère/blague), 2) Vérification identité expéditeur, 3) Conseil : éviter et privilégier procédure normale avec témoins/médiateurs.',
      ar: 'خلاف بين المذاهب: الحنفية: الطلاق بالكتابة (بما فيها الإلكتروني) صحيح إن ثبتت النية - "اللفظ المنطوق معتبر، المكتوب كذلك". المالكية/الشافعية/الحنابلة: يفضلون الشهود والشفاهة. علماء معاصرون (الأزهر، المجلس الأوروبي): صحيح باحتياطات - 1) رسالة واضحة بلا غموض (ليس تحت غضب/مزاح)، 2) تحقق من هوية المرسل، 3) نصيحة: تجنب وافضل الإجراء العادي مع شهود/وسطاء.',
      en: 'Debate between schools: Hanafis: divorce by writing (including electronic) valid if intention proven - "spoken word counts, written word counts too". Malikis/Shafi\'is/Hanbalis: prefer witnesses and orality. Contemporary scholars (Azhar, ECFR): valid with precautions - 1) Clear message without ambiguity (not under anger/joke), 2) Verification of sender identity, 3) Advice: avoid and favor normal procedure with witnesses/mediators.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'divorce-moderne',
  },
  {
    id: 'famille-divorce-moderne-002',
    question: {
      fr: 'Le "Triple Talaq" (prononcer 3 divorces en une fois) est-il valide et définitif ?',
      ar: 'هل "الطلاق الثلاثي" (النطق بثلاث طلقات دفعة واحدة) صحيح ونهائي؟',
      en: 'Is "Triple Talaq" (pronouncing 3 divorces at once) valid and final?',
    },
    options: [
      { id: 'a', text: { fr: 'Valide et compte comme 3 selon Hanafis ; compte comme 1 seul selon Malikis/modernistes', ar: 'صحيح ويعد 3 عند الحنفية؛ يعد طلقة واحدة عند المالكية/الحداثيين', en: 'Valid and counts as 3 according to Hanafis; counts as 1 according to Malikis/modernists' } },
      { id: 'b', text: { fr: 'Invalide absolument', ar: 'باطل مطلقاً', en: 'Absolutely invalid' } },
      { id: 'c', text: { fr: 'Permis uniquement en colère', ar: 'مباح فقط في الغضب', en: 'Permitted only in anger' } },
      { id: 'd', text: { fr: 'Recommandé pour clarté', ar: 'مستحب للوضوح', en: 'Recommended for clarity' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Triple Talaq = Bid\'ah (blâmable) mais débat sur effet : Hanafis classiques : compte comme 3 divorces irrévocables (femme doit épouser autre puis divorcer pour retour - Tahlil). Malikis/Ibn Taymiyyah/savants modernistes : compte comme 1 seul divorce révocable - argument : à l\'époque du Prophète ﷺ et Abu Bakr, Triple Talaq comptait comme 1 ; Omar le compta comme 3 pour punir abus. Inde/Pakistan interdisent Triple Talaq instantané (réforme 2017-2019). Consensus : pratique détestable, éviter absolument.',
      ar: 'الطلاق الثلاثي = بدعة (مكروه) لكن خلاف في الأثر: الحنفية الكلاسيكية: يعد 3 طلقات بائنة (المرأة يجب أن تتزوج غيره ثم تطلق للرجوع - التحليل). المالكية/ابن تيمية/علماء الحداثة: يعد طلقة واحدة رجعية - الحجة: في عهد النبي ﷺ وأبي بكر، الطلاق الثلاثي عُد واحدة؛ عمر عده ثلاثاً لمعاقبة المتعسفين. الهند/باكستان حظرتا الطلاق الثلاثي الفوري (إصلاح 2017-2019). إجماع: ممارسة مذمومة، تجنبها مطلقاً.',
      en: 'Triple Talaq = Bid\'ah (blameworthy) but debate on effect: Classical Hanafis: counts as 3 irrevocable divorces (woman must marry another then divorce to return - Tahlil). Malikis/Ibn Taymiyyah/modernist scholars: counts as 1 revocable divorce - argument: in Prophet\'s ﷺ and Abu Bakr time, Triple Talaq counted as 1; Umar counted it as 3 to punish abuse. India/Pakistan banned instant Triple Talaq (2017-2019 reform). Consensus: detestable practice, avoid absolutely.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'divorce-moderne',
  },
  {
    id: 'famille-divorce-moderne-003',
    question: {
      fr: 'Un homme peut-il divorcer sans aucune raison ?',
      ar: 'هل يمكن للرجل أن يطلق بدون أي سبب؟',
      en: 'Can a man divorce without any reason?',
    },
    options: [
      { id: 'a', text: { fr: 'Haram absolument', ar: 'حرام مطلقاً', en: 'Absolutely Haram' } },
      { id: 'b', text: { fr: 'Makruh (détestable) mais légalement valide - "le plus détesté des licites auprès d\'Allah"', ar: 'مكروه لكن صحيح قانوناً - "أبغض الحلال إلى الله"', en: 'Makruh (detestable) but legally valid - "most detested of permissibles to Allah"' } },
      { id: 'c', text: { fr: 'Recommandé pour tester la femme', ar: 'مستحب لاختبار المرأة', en: 'Recommended to test woman' } },
      { id: 'd', text: { fr: 'Obligatoire si mésentente légère', ar: 'واجب إن كان خلاف بسيط', en: 'Mandatory if minor disagreement' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ dit : "Parmi les choses licites, la plus détestée d\'Allah est le divorce" (Abu Dawud). Statut juridique : Divorce sans raison valable = Makruh Tahrimi (fortement détestable) mais VALIDE légalement. Raisons valables : incompatibilité grave, Nushuz persistant, violence de l\'épouse, non-respect devoirs essentiels. Islam encourage réconciliation : Coran 4:35 "Si vous craignez désaccord, envoyez arbitre de sa famille et arbitre de sa famille". Divorcer sur coup de tête/colère = péché mais effectif.',
      ar: 'قال ﷺ: "أبغض الحلال إلى الله الطلاق" (أبو داود). الحكم الشرعي: الطلاق بلا سبب وجيه = مكروه تحريمي (مكروه شديداً) لكن صحيح قانوناً. الأسباب الوجيهة: عدم التوافق الجسيم، النشوز المستمر، عنف الزوجة، عدم احترام الواجبات الأساسية. الإسلام يشجع المصالحة: القرآن 4:35 "فابعثوا حكماً من أهله وحكماً من أهلها". الطلاق اندفاعاً/غضباً = إثم لكن نافذ.',
      en: 'Prophet ﷺ said: "Among lawful things, most detested to Allah is divorce" (Abu Dawud). Legal status: Divorce without valid reason = Makruh Tahrimi (strongly detestable) but legally VALID. Valid reasons: grave incompatibility, persistent Nushuz, wife\'s violence, non-respect of essential duties. Islam encourages reconciliation: Quran 4:35 "If you fear discord, send arbitrator from his family and arbitrator from her family". Divorcing impulsively/angrily = sin but effective.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'divorce-moderne',
  },
  {
    id: 'famille-divorce-moderne-004',
    question: {
      fr: 'Quelle est la durée de la \'Iddah (délai de viduité) pour une femme enceinte divorcée ?',
      ar: 'ما مدة العدة للمرأة الحامل المطلقة؟',
      en: 'What is the duration of \'Iddah (waiting period) for a pregnant divorced woman?',
    },
    options: [
      { id: 'a', text: { fr: '3 mois comme toutes les femmes', ar: 'ثلاثة أشهر كجميع النساء', en: '3 months like all women' } },
      { id: 'b', text: { fr: 'Jusqu\'à l\'accouchement - Coran 65:4 "Celles qui sont enceintes leur terme est l\'accouchement"', ar: 'حتى الوضع - القرآن 65:4 "وأولات الأحمال أجلهن أن يضعن حملهن"', en: 'Until childbirth - Quran 65:4 "Those who are pregnant their term is delivery"' } },
      { id: 'c', text: { fr: '40 jours après accouchement', ar: '40 يوماً بعد الوضع', en: '40 days after childbirth' } },
      { id: 'd', text: { fr: 'Aucune \'Iddah pour femme enceinte', ar: 'لا عدة للمرأة الحامل', en: 'No \'Iddah for pregnant woman' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Allah dit clairement : "Et celles qui sont enceintes, leur terme est qu\'elles accouchent" (65:4). Peu importe combien de temps (1 jour ou 9 mois après divorce), dès accouchement la \'Iddah se termine. Exception : si veuvage (mari décédé), elle attend le PLUS LONG entre 4 mois 10 jours OU accouchement (majorité). Sagesse : s\'assurer paternité, laisser temps réconciliation (Talaq Raj\'i), respecter période deuil.',
      ar: 'قال تعالى: "وَأُولَاتُ الْأَحْمَالِ أَجَلُهُنَّ أَن يَضَعْنَ حَمْلَهُنَّ" (الطلاق:4). لا يهم المدة (يوم أو 9 أشهر بعد الطلاق)، بمجرد الوضع تنتهي العدة. استثناء: إن كانت أرملة (الزوج مات)، تنتظر الأطول بين 4 أشهر و10 أيام أو الوضع (الجمهور). الحكمة: التأكد من النسب، إتاحة وقت للمراجعة (الطلاق الرجعي)، احترام فترة الحداد.',
      en: 'Allah says clearly: "And those who are pregnant, their term is that they deliver their burden" (65:4). No matter how long (1 day or 9 months after divorce), as soon as childbirth \'Iddah ends. Exception: if widowed (husband died), she waits LONGER between 4 months 10 days OR childbirth (majority). Wisdom: ensure paternity, allow time reconciliation (Talaq Raj\'i), respect mourning period.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'divorce-moderne',
  },
  {
    id: 'famille-divorce-moderne-005',
    question: {
      fr: 'La pension alimentaire (Nafaqah) après divorce est-elle obligatoire ?',
      ar: 'هل النفقة بعد الطلاق واجبة؟',
      en: 'Is maintenance (Nafaqah) after divorce mandatory?',
    },
    options: [
      { id: 'a', text: { fr: 'Non - toute obligation cesse au divorce', ar: 'لا - تنتهي جميع الالتزامات بالطلاق', en: 'No - all obligations cease at divorce' } },
      { id: 'b', text: { fr: 'Oui pendant \'Iddah obligatoire ; après \'Iddah : débat (non selon majorité, oui si enfants/besoin)', ar: 'نعم خلال العدة واجب؛ بعد العدة: خلاف (لا عند الجمهور، نعم إن كان أولاد/حاجة)', en: 'Yes during \'Iddah mandatory; after \'Iddah: debate (no according to majority, yes if children/need)' } },
      { id: 'c', text: { fr: 'Uniquement si le mari veut', ar: 'فقط إن أراد الزوج', en: 'Only if husband wants' } },
      { id: 'd', text: { fr: 'Obligatoire à vie', ar: 'واجبة مدى الحياة', en: 'Mandatory for life' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Pendant \'Iddah : Nafaqah OBLIGATOIRE (nourriture, logement) - Coran 65:6 "Logez-les où vous logez selon vos moyens". Après \'Iddah : Débat. Majorité classique : obligation cesse sauf si enfants en garde (Hadana). Position moderne/réformiste : si ex-épouse dans besoin/incapable travailler, pension peut être imposée judiciairement (principe Maslaha). Pension enfants : TOUJOURS obligatoire jusqu\'à maturité/indépendance.',
      ar: 'خلال العدة: النفقة واجبة (طعام، سكن) - القرآن 65:6 "أَسْكِنُوهُنَّ مِنْ حَيْثُ سَكَنتُم مِّن وُجْدِكُمْ". بعد العدة: خلاف. الجمهور الكلاسيكي: ينتهي الالتزام إلا إن كان أطفال في الحضانة. الموقف الحديث/الإصلاحي: إن كانت المطلقة محتاجة/عاجزة عن العمل، يمكن فرض النفقة قضائياً (مبدأ المصلحة). نفقة الأطفال: واجبة دائماً حتى البلوغ/الاستقلال.',
      en: 'During \'Iddah: Nafaqah MANDATORY (food, housing) - Quran 65:6 "Lodge them where you lodge according to your means". After \'Iddah: Debate. Classical majority: obligation ceases except if children in custody (Hadana). Modern/reformist position: if ex-wife in need/unable to work, maintenance can be imposed judicially (Maslaha principle). Children maintenance: ALWAYS mandatory until maturity/independence.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'divorce-moderne',
  },
  {
    id: 'famille-divorce-moderne-006',
    question: {
      fr: 'Qu\'est-ce que le Tatliq (divorce judiciaire) et quand peut-il être prononcé ?',
      ar: 'ما هو التطليق القضائي ومتى يمكن النطق به؟',
      en: 'What is Tatliq (judicial divorce) and when can it be pronounced?',
    },
    options: [
      { id: 'a', text: { fr: 'N\'existe pas en Islam', ar: 'غير موجود في الإسلام', en: 'Does not exist in Islam' } },
      { id: 'b', text: { fr: 'Divorce imposé par juge si préjudice grave (violence, non-Nafaqah, absence prolongée, impuissance)', ar: 'طلاق يفرضه القاضي إن كان ضرر جسيم (عنف، عدم نفقة، غياب مطول، عجز)', en: 'Divorce imposed by judge if grave harm (violence, no-Nafaqah, prolonged absence, impotence)' } },
      { id: 'c', text: { fr: 'Uniquement si les deux consentent', ar: 'فقط إن وافق الطرفان', en: 'Only if both consent' } },
      { id: 'd', text: { fr: 'Réservé aux couples non-musulmans', ar: 'مخصص للأزواج غير المسلمين', en: 'Reserved for non-Muslim couples' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Tatliq = divorce prononcé par juge islamique si femme prouve préjudice. Bases : 1) Malikis : permettent Tatliq pour Darar (préjudice) - violence, insultes graves, non-paiement Nafaqah, 2) Hanafis : si mari absent >4 ans/impuissant/ne subvient pas, juge peut divorcer, 3) Moderne : tribunaux musulmans (Maroc, Tunisie, Egypte) codifient raisons Tatliq. Procédure : plainte, enquête, tentative réconciliation, puis Tatliq si échec. Protection essentielle pour femme piégée dans mariage toxique.',
      ar: 'التطليق = طلاق ينطق به القاضي الشرعي إن أثبتت المرأة الضرر. الأسس: 1) المالكية: يجيزون التطليق للضرر - العنف، الإهانات الجسيمة، عدم دفع النفقة، 2) الحنفية: إن غاب الزوج >4 سنوات/عاجز/لا ينفق، للقاضي التطليق، 3) الحداثة: المحاكم المسلمة (المغرب، تونس، مصر) تقنن أسباب التطليق. الإجراء: شكوى، تحقيق، محاولة صلح، ثم التطليق إن فشلت. حماية جوهرية للمرأة المحاصرة في زواج سام.',
      en: 'Tatliq = divorce pronounced by Islamic judge if woman proves harm. Bases: 1) Malikis: allow Tatliq for Darar (harm) - violence, grave insults, non-payment Nafaqah, 2) Hanafis: if husband absent >4 years/impotent/doesn\'t provide, judge can divorce, 3) Modern: Muslim courts (Morocco, Tunisia, Egypt) codify Tatliq reasons. Procedure: complaint, investigation, reconciliation attempt, then Tatliq if failure. Essential protection for woman trapped in toxic marriage.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'divorce-moderne',
  },
];

// ============================================
// Questions - Procréation & Bioéthique
// ============================================

const procreationBioethiqueQuestions: ExamQuestion[] = [
  {
    id: 'famille-bioe-001',
    question: {
      fr: 'La FIV (Fécondation In Vitro) / PMA est-elle permise en Islam ?',
      ar: 'هل التلقيح الاصطناعي/المساعدة على الإنجاب مباح في الإسلام؟',
      en: 'Is IVF (In Vitro Fertilization) / ART permitted in Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Haram absolument - interférence dans création divine', ar: 'حرام مطلقاً - تدخل في الخلق الإلهي', en: 'Absolutely Haram - interference in divine creation' } },
      { id: 'b', text: { fr: 'Halal si sperme mari + ovule femme + utérus femme (couple marié) ; Haram si donneur externe', ar: 'حلال إن كان حيوان منوي الزوج + بويضة الزوجة + رحم الزوجة (زوجان متزوجان)؛ حرام إن كان متبرع خارجي', en: 'Halal if husband sperm + wife egg + wife uterus (married couple); Haram if external donor' } },
      { id: 'c', text: { fr: 'Permis avec n\'importe quel donneur', ar: 'مباح مع أي متبرع', en: 'Permitted with any donor' } },
      { id: 'd', text: { fr: 'Recommandé pour tous les couples', ar: 'مستحب لجميع الأزواج', en: 'Recommended for all couples' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Consensus savants contemporains (OCI, Azhar, Qaradawi) : FIV/PMA Halal SI conditions : 1) Couple LÉGALEMENT marié, 2) Sperme du mari + ovule de l\'épouse + utérus de l\'épouse, 3) Traitement médical nécessaire (infertilité). HARAM si : donneur sperme/ovule externe (Zina génétique, confusion filiation), GPA (autre femme porte), après divorce/décès mari. Argument : traitement médical permis (Prophète ﷺ : "Soignez-vous") tant que Halal.',
      ar: 'إجماع العلماء المعاصرين (منظمة التعاون الإسلامي، الأزهر، القرضاوي): التلقيح الاصطناعي حلال بشروط: 1) زوجان متزوجان شرعاً، 2) حيوان منوي الزوج + بويضة الزوجة + رحم الزوجة، 3) علاج طبي ضروري (عقم). حرام إن: متبرع حيوان منوي/بويضة خارجي (زنا جيني، اختلاط أنساب)، أم بديلة (امرأة أخرى تحمل)، بعد طلاق/وفاة الزوج. الحجة: العلاج الطبي مباح (النبي ﷺ: "تداووا") طالما حلال.',
      en: 'Contemporary scholars consensus (OIC, Azhar, Qaradawi): IVF/ART Halal IF conditions: 1) Couple LEGALLY married, 2) Husband sperm + wife egg + wife uterus, 3) Necessary medical treatment (infertility). HARAM if: external sperm/egg donor (genetic Zina, lineage confusion), surrogacy (another woman carries), after divorce/husband death. Argument: medical treatment permitted (Prophet ﷺ: "Seek treatment") as long as Halal.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'procreation',
  },
  {
    id: 'famille-bioe-002',
    question: {
      fr: 'La GPA (Gestation Pour Autrui / mère porteuse) est-elle permise ?',
      ar: 'هل الأم البديلة (حمل امرأة أخرى) مباح؟',
      en: 'Is surrogacy (gestational carrier) permitted?',
    },
    options: [
      { id: 'a', text: { fr: 'Halal si la porteuse est de la famille', ar: 'حلال إن كانت الحامل من العائلة', en: 'Halal if carrier is from family' } },
      { id: 'b', text: { fr: 'Haram selon consensus - confusion filiation (qui est la mère ?), exploitation femmes', ar: 'حرام بالإجماع - اختلاط نسب (من الأم؟)، استغلال النساء', en: 'Haram by consensus - lineage confusion (who is mother?), women exploitation' } },
      { id: 'c', text: { fr: 'Permis avec contrat écrit', ar: 'مباح بعقد مكتوب', en: 'Permitted with written contract' } },
      { id: 'd', text: { fr: 'Recommandé pour couples infertiles', ar: 'مستحب للأزواج العقيمة', en: 'Recommended for infertile couples' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'GPA = Haram selon consensus (OCI, IIFA, tous conseils Fiqh) : 1) Confusion filiation : Coran 58:2 "Leurs mères sont seulement celles qui les ont enfantés" - qui est mère légale ? Génétique ou gestationnelle ? 2) Exploitation/marchandisation corps féminin, 3) Relations sexuelles interdites si insémination naturelle, 4) Problèmes juridiques custody/héritage. Alternative islamique : adoption partielle (Kafala) où enfant garde nom biologique mais famille d\'accueil l\'élève.',
      ar: 'الأم البديلة = حرام بالإجماع (منظمة التعاون الإسلامي، مجمع الفقه الإسلامي، جميع مجالس الفقه): 1) اختلاط النسب: القرآن 58:2 "إِنْ أُمَّهَاتُهُمْ إِلَّا اللَّائِي وَلَدْنَهُمْ" - من الأم الشرعية؟ الجينية أم الحامل؟ 2) استغلال/تسليع جسد المرأة، 3) علاقات جنسية محرمة إن كان التلقيح طبيعياً، 4) مشاكل قانونية (حضانة/ميراث). البديل الإسلامي: التبني الجزئي (الكفالة) حيث يحتفظ الطفل باسمه البيولوجي لكن العائلة المستقبلة تربيه.',
      en: 'Surrogacy = Haram by consensus (OIC, IIFA, all Fiqh councils): 1) Lineage confusion: Quran 58:2 "Their mothers are only those who gave them birth" - who is legal mother? Genetic or gestational? 2) Exploitation/commodification of female body, 3) Forbidden sexual relations if natural insemination, 4) Legal problems custody/inheritance. Islamic alternative: partial adoption (Kafala) where child keeps biological name but foster family raises.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'procreation',
  },
  {
    id: 'famille-bioe-003',
    question: {
      fr: 'La contraception est-elle permise en Islam ?',
      ar: 'هل منع الحمل مباح في الإسلام؟',
      en: 'Is contraception permitted in Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Haram - empêcher naissance = tuer', ar: 'حرام - منع الولادة = قتل', en: 'Haram - preventing birth = killing' } },
      { id: 'b', text: { fr: 'Permis temporairement avec accord couple pour raisons valables (santé, finances, espacement)', ar: 'مباح مؤقتاً باتفاق الزوجين لأسباب وجيهة (صحة، مال، تباعد)', en: 'Permitted temporarily with couple consent for valid reasons (health, finances, spacing)' } },
      { id: 'c', text: { fr: 'Obligatoire pour limiter population', ar: 'واجب لتحديد السكان', en: 'Mandatory to limit population' } },
      { id: 'd', text: { fr: 'Permis uniquement après 10 enfants', ar: 'مباح فقط بعد 10 أطفال', en: 'Permitted only after 10 children' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Contraception permise selon majorité écoles (Hanafi, Maliki, Shafi\'i, Hanbali) avec nuances : 1) Preuves : \'Azl (coït interrompu) pratiqué temps Prophète ﷺ qui ne l\'interdit pas (Bukhari, Muslim), 2) Conditions : accord mutuel couple, raisons valables (santé mère, situation financière, espacement naissances), temporaire pas permanent/définitif, 3) Méthodes : pilule, préservatif, DIU permis ; stérilisation débat (Haram si permanente selon majorité sauf nécessité médicale). Enfants = bénédiction mais planification responsable permise.',
      ar: 'منع الحمل مباح عند جمهور المذاهب (حنفي، مالكي، شافعي، حنبلي) بضوابط: 1) الأدلة: العزل (الانسحاب) مورس في عهد النبي ﷺ ولم ينهَ عنه (البخاري، مسلم)، 2) الشروط: اتفاق متبادل بين الزوجين، أسباب وجيهة (صحة الأم، الوضع المالي، تباعد الولادات)، مؤقت لا دائم/نهائي، 3) الطرق: الحبوب، الواقي، اللولب مباح؛ التعقيم خلاف (حرام إن كان دائماً عند الجمهور إلا لضرورة طبية). الأولاد = بركة لكن التخطيط المسؤول مباح.',
      en: 'Contraception permitted according to majority schools (Hanafi, Maliki, Shafi\'i, Hanbali) with nuances: 1) Proofs: \'Azl (coitus interruptus) practiced in Prophet\'s ﷺ time who didn\'t forbid it (Bukhari, Muslim), 2) Conditions: mutual couple consent, valid reasons (mother health, financial situation, birth spacing), temporary not permanent/definitive, 3) Methods: pill, condom, IUD permitted; sterilization debate (Haram if permanent according to majority except medical necessity). Children = blessing but responsible planning permitted.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'procreation',
  },
  {
    id: 'famille-bioe-004',
    question: {
      fr: 'L\'avortement est-il permis en Islam ?',
      ar: 'هل الإجهاض مباح في الإسلام؟',
      en: 'Is abortion permitted in Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Permis à tout moment de la grossesse', ar: 'مباح في أي وقت من الحمل', en: 'Permitted at any time of pregnancy' } },
      { id: 'b', text: { fr: 'Avant 120 jours (insufflation âme) : permis si raison valable ; Après 120 jours : Haram sauf danger mère', ar: 'قبل 120 يوماً (نفخ الروح): مباح بسبب وجيه؛ بعد 120 يوماً: حرام إلا خطر على الأم', en: 'Before 120 days (soul ensoulment): permitted if valid reason; After 120 days: Haram except mother danger' } },
      { id: 'c', text: { fr: 'Haram absolument à tous les stades', ar: 'حرام مطلقاً في جميع المراحل', en: 'Absolutely Haram at all stages' } },
      { id: 'd', text: { fr: 'Choix personnel de la femme uniquement', ar: 'اختيار شخصي للمرأة فقط', en: 'Woman personal choice only' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Position nuancée basée sur Hadith "âme insufflée après 120 jours" (Bukhari, Muslim) : Avant 120 jours : Débat - Hanafis/certains Malikis : Makruh mais permis si raison sérieuse (malformation grave détectée, santé mère, viol, inceste). Shafi\'is/Hanbalis : plus restrictifs. Après 120 jours (4 mois) : Haram selon consensus SAUF danger vie mère (priorité vie existante sur potentielle). Raisons futiles (sexe bébé, finances) = Haram à tous stades. Avortement ≠ droit absolu mais ≠ interdit absolu.',
      ar: 'موقف دقيق مبني على حديث "نفخ الروح بعد 120 يوماً" (البخاري، مسلم): قبل 120 يوماً: خلاف - الحنفية/بعض المالكية: مكروه لكن مباح بسبب جدي (تشوه خطير مكتشف، صحة الأم، اغتصاب، سفاح). الشافعية/الحنابلة: أكثر تشدداً. بعد 120 يوماً (4 أشهر): حرام بالإجماع إلا خطر حياة الأم (أولوية الحياة الموجودة على المحتملة). أسباب تافهة (جنس الطفل، المال) = حرام في جميع المراحل. الإجهاض ≠ حق مطلق لكن ≠ حرام مطلق.',
      en: 'Nuanced position based on Hadith "soul ensouled after 120 days" (Bukhari, Muslim): Before 120 days: Debate - Hanafis/some Malikis: Makruh but permitted if serious reason (grave malformation detected, mother health, rape, incest). Shafi\'is/Hanbalis: more restrictive. After 120 days (4 months): Haram by consensus EXCEPT mother life danger (priority existing life over potential). Futile reasons (baby sex, finances) = Haram at all stages. Abortion ≠ absolute right but ≠ absolute prohibition.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'procreation',
  },
  {
    id: 'famille-bioe-005',
    question: {
      fr: 'Les tests ADN de paternité sont-ils permis en Islam ?',
      ar: 'هل اختبارات الحمض النووي للأبوة مباحة في الإسلام؟',
      en: 'Are DNA paternity tests permitted in Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Haram - remettre en question filiation = péché', ar: 'حرام - التشكيك في النسب = إثم', en: 'Haram - questioning lineage = sin' } },
      { id: 'b', text: { fr: 'Permis si nécessité légale/médicale ; interdit pour simple suspicion sans preuve', ar: 'مباح إن كانت ضرورة قانونية/طبية؛ محرم للشك البسيط بلا دليل', en: 'Permitted if legal/medical necessity; forbidden for simple suspicion without proof' } },
      { id: 'c', text: { fr: 'Obligatoire pour tous les nouveaux-nés', ar: 'واجب لجميع المواليد الجدد', en: 'Mandatory for all newborns' } },
      { id: 'd', text: { fr: 'Permis uniquement après divorce', ar: 'مباح فقط بعد الطلاق', en: 'Permitted only after divorce' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Position équilibrée : Tests ADN PERMIS si : 1) Nécessité légale (litige inheritance, doute légitime avec indice Qarinah), 2) Besoin médical (maladies génétiques), 3) Cas adoption/enfants trouvés identifier famille biologique. INTERDIT si : simple suspicion sans fondement (détruit familles), espionnage épouse sans cause. Argument : Islam interdit accuser fornication (Qadhf) sans 4 témoins mais si preuve scientifique disponible, utiliser pour établir vérité. Coran encourage justice : "Soyez fermes dans équité, témoins pour Allah" (4:135).',
      ar: 'موقف متوازن: اختبارات الحمض النووي مباحة إن: 1) ضرورة قانونية (نزاع إرث، شك شرعي بقرينة)، 2) حاجة طبية (أمراض وراثية)، 3) حالات تبني/أطفال لقطاء لتحديد العائلة البيولوجية. محرمة إن: شك بسيط بلا أساس (يهدم الأسر)، تجسس على الزوجة بلا سبب. الحجة: الإسلام يحرم اتهام الزنا (القذف) بدون 4 شهود لكن إن توفر دليل علمي، يُستخدم لإثبات الحق. القرآن يشجع العدل: "كُونُوا قَوَّامِينَ بِالْقِسْطِ شُهَدَاءَ لِلَّهِ" (4:135).',
      en: 'Balanced position: DNA tests PERMITTED if: 1) Legal necessity (inheritance dispute, legitimate doubt with Qarinah indicator), 2) Medical need (genetic diseases), 3) Adoption/foundling cases to identify biological family. FORBIDDEN if: simple suspicion without foundation (destroys families), spying on wife without cause. Argument: Islam forbids accusing fornication (Qadhf) without 4 witnesses but if scientific proof available, use to establish truth. Quran encourages justice: "Be firm in equity, witnesses for Allah" (4:135).',
    },
    points: 3,
    difficulty: 'hard',
    category: 'procreation',
  },
  {
    id: 'famille-bioe-006',
    question: {
      fr: 'L\'adoption pleine (enfant prend nom adoptant) est-elle permise en Islam ?',
      ar: 'هل التبني الكامل (الطفل يأخذ اسم المتبني) مباح في الإسلام؟',
      en: 'Is full adoption (child takes adopter name) permitted in Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Permise comme en Occident', ar: 'مباحة كما في الغرب', en: 'Permitted as in West' } },
      { id: 'b', text: { fr: 'Interdite - Kafala (parrainage) permise : élever enfant mais garde nom biologique', ar: 'محرمة - الكفالة مباحة: تربية الطفل لكن يحتفظ باسمه البيولوجي', en: 'Forbidden - Kafala (sponsorship) permitted: raise child but keeps biological name' } },
      { id: 'c', text: { fr: 'Obligatoire pour orphelins', ar: 'واجبة للأيتام', en: 'Mandatory for orphans' } },
      { id: 'd', text: { fr: 'Permise uniquement entre membres famille', ar: 'مباحة فقط بين أفراد العائلة', en: 'Permitted only between family members' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Adoption pleine = HARAM. Preuves : 1) Coran 33:4-5 "Il (Allah) n\'a pas fait de vos enfants adoptifs vos propres enfants...Appelez-les du nom de leurs pères", 2) Raisons : préserver filiation/identité, éviter confusion héritage, règles Mahram (enfant adopté adulte ≠ Mahram pour mère adoptive). Solution islamique : KAFALA (كفالة) = parrainage où famille élève/aime enfant mais : il garde nom parents biologiques, héritage via Wasiyya (1/3 max) pas automatique, règles Hijab/Mahram appliquées. Prophète ﷺ éleva Zayd mais après révélation, Zayd redevint "ibn Haritha" pas "ibn Muhammad".',
      ar: 'التبني الكامل = حرام. الأدلة: 1) القرآن 33:4-5 "مَا جَعَلَ أَدْعِيَاءَكُمْ أَبْنَاءَكُمْ...ادْعُوهُمْ لِآبَائِهِمْ"، 2) الأسباب: حفظ النسب/الهوية، تجنب اختلاط الميراث، قواعد المحرمية (الطفل المتبنى البالغ ≠ محرم للأم المتبنية). الحل الإسلامي: الكفالة حيث العائلة تربي/تحب الطفل لكن: يحتفظ باسم والديه البيولوجيين، الإرث عبر الوصية (ثلث كحد أقصى) ليس تلقائياً، قواعد الحجاب/المحرمية تُطبق. النبي ﷺ ربى زيداً لكن بعد الوحي، عاد زيد "ابن حارثة" ليس "ابن محمد".',
      en: 'Full adoption = HARAM. Proofs: 1) Quran 33:4-5 "He (Allah) has not made your adopted sons your real sons...Call them by their fathers\' names", 2) Reasons: preserve lineage/identity, avoid inheritance confusion, Mahram rules (adult adopted child ≠ Mahram for adoptive mother). Islamic solution: KAFALA (sponsorship) where family raises/loves child but: keeps biological parents name, inheritance via Wasiyya (1/3 max) not automatic, Hijab/Mahram rules applied. Prophet ﷺ raised Zayd but after revelation, Zayd became "ibn Haritha" not "ibn Muhammad".',
    },
    points: 2,
    difficulty: 'medium',
    category: 'procreation',
  },
  {
    id: 'famille-bioe-007',
    question: {
      fr: 'Le Hadith controversé sur "l\'allaitement de l\'adulte" (pour créer Mahramiyyah) est-il applicable ?',
      ar: 'هل الحديث المثير للجدل عن "رضاعة الكبير" (لخلق المحرمية) قابل للتطبيق؟',
      en: 'Is the controversial Hadith on adult breastfeeding (to create Mahramiyyah) applicable?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui - recommandé pour créer Mahram entre collègues', ar: 'نعم - مستحب لخلق المحرمية بين الزملاء', en: 'Yes - recommended to create Mahram between colleagues' } },
      { id: 'b', text: { fr: 'Non selon majorité - Hadith Sahla (femme allaita homme adulte) abrogé/cas spécial ; allaitement ne crée Mahram QUE si enfant <2 ans', ar: 'لا عند الجمهور - حديث سهلة (امرأة أرضعت رجلاً بالغاً) منسوخ/حالة خاصة؛ الرضاعة تخلق محرمية فقط إن كان الطفل <2 سنة', en: 'No according to majority - Sahla Hadith (woman breastfed adult man) abrogated/special case; breastfeeding creates Mahram ONLY if child <2 years' } },
      { id: 'c', text: { fr: 'Obligatoire dans toutes situations de mixité', ar: 'واجب في جميع حالات الاختلاط', en: 'Mandatory in all mixed situations' } },
      { id: 'd', text: { fr: 'Permis uniquement entre époux', ar: 'مباح فقط بين الزوجين', en: 'Permitted only between spouses' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Hadith : Sahla (épouse Abu Hudhayfah) vint au Prophète ﷺ : "Salim (fils adoptif devenu adulte) entre chez nous, je sens gêne de Abu Hudhayfah" - Prophète dit "Allaite-le 5 fois" pour créer Mahramiyyah (Muslim). MAIS majorité savants (Aisha exceptée) : 1) Cas spécial/abrogé - ne s\'applique qu\'à Salim, 2) Règle générale : allaitement crée Mahram SI enfant <2 ans (Coran 2:233), après 2 ans ineffectif, 3) Allaiter adulte = inapproprié/contraire Hijab. Position actuelle : rejeté sauf Zahiris. Solution mixité : barrières physiques/comportementales pas "allaitement adulte".',
      ar: 'الحديث: جاءت سهلة (زوجة أبي حذيفة) للنبي ﷺ: "سالم (ابن بالتبني صار بالغاً) يدخل علينا، أشعر بحرج من أبي حذيفة" - قال النبي "أرضعيه خمساً" لخلق المحرمية (مسلم). لكن جمهور العلماء (ماعدا عائشة): 1) حالة خاصة/منسوخة - تنطبق على سالم فقط، 2) القاعدة العامة: الرضاعة تخلق محرمية إن كان الطفل <2 سنة (القرآن 2:233)، بعد سنتين لا أثر، 3) إرضاع البالغ = غير لائق/مخالف للحجاب. الموقف الحالي: مرفوض إلا الظاهرية. حل الاختلاط: حواجز جسدية/سلوكية ليس "إرضاع البالغ".',
      en: 'Hadith: Sahla (wife of Abu Hudhayfah) came to Prophet saying Salim (adoptive son became adult) enters upon us, I feel embarrassment from Abu Hudhayfah - Prophet said Breastfeed him 5 times to create Mahramiyyah (Muslim). BUT majority scholars (except Aisha): 1) Special case/abrogated - applies only to Salim, 2) General rule: breastfeeding creates Mahram IF child under 2 years (Quran 2:233), after 2 years ineffective, 3) Breastfeeding adult = inappropriate/contrary to Hijab. Current position: rejected except Zahiris. Mixing solution: physical/behavioral barriers not adult breastfeeding.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'procreation',
  },
  {
    id: 'famille-bioe-008',
    question: {
      fr: 'La garde (Hadana) d\'enfants peut-elle être accordée à une mère non-musulmane après divorce ?',
      ar: 'هل يمكن منح حضانة الأطفال لأم غير مسلمة بعد الطلاق؟',
      en: 'Can custody (Hadana) of children be granted to a non-Muslim mother after divorce?',
    },
    options: [
      { id: 'a', text: { fr: 'Non jamais - elle doit se convertir', ar: 'لا أبداً - يجب أن تسلم', en: 'No never - she must convert' } },
      { id: 'b', text: { fr: 'Débat : Hanafis/Malikis permettent si enfant jeune (<7 ans) et pas risque apostasie ; Shafi\'is refusent', ar: 'خلاف: الحنفية/المالكية يجيزون إن كان الطفل صغيراً (<7 سنوات) ولا خطر ردة؛ الشافعية يرفضون', en: 'Debate: Hanafis/Malikis allow if child young (<7 years) and no apostasy risk; Shafi\'is refuse' } },
      { id: 'c', text: { fr: 'Permis sans condition', ar: 'مباح بلا شرط', en: 'Permitted unconditionally' } },
      { id: 'd', text: { fr: 'Interdit même si elle est Kitabiya', ar: 'محرم حتى إن كانت كتابية', en: 'Forbidden even if she is Kitabiya' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Question sensible avec débat : Hanafis : Mère non-musulmane (Kitabiya : juive/chrétienne) peut garder enfant jeune (<7 ans garçon, puberté fille) SI pas risque qu\'elle élève enfant hors Islam. Argument : lien maternel primordial jeune âge. Malikis : similaire mais critère = intérêt enfant (Maslaha). Shafi\'is/Hanbalis : refusent généralement - crainte éducation non-islamique. Moderne : tribunaux islamiques évaluent cas par cas (comportement mère, garanties éducation religieuse père). Priorité = bien-être enfant.',
      ar: 'مسألة حساسة بخلاف: الحنفية: الأم غير المسلمة (كتابية: يهودية/مسيحية) يمكنها حضانة الطفل الصغير (<7 سنوات ولد، البلوغ بنت) إن لم يكن خطر تنشئته خارج الإسلام. الحجة: الرابط الأمومي جوهري في الصغر. المالكية: مماثل لكن المعيار = مصلحة الطفل. الشافعية/الحنابلة: يرفضون غالباً - خوف التربية غير الإسلامية. الحداثة: المحاكم الإسلامية تقيّم حالة بحالة (سلوك الأم، ضمانات التعليم الديني للأب). الأولوية = رفاهية الطفل.',
      en: 'Sensitive issue with debate: Hanafis: Non-Muslim mother (Kitabiya: Jewish/Christian) can keep young child (<7 years boy, puberty girl) IF no risk she raises child outside Islam. Argument: maternal bond essential young age. Malikis: similar but criterion = child interest (Maslaha). Shafi\'is/Hanbalis: generally refuse - fear non-Islamic education. Modern: Islamic courts evaluate case by case (mother behavior, guarantees father religious education). Priority = child well-being.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'procreation',
  },
];

// ============================================
// Questions - Héritage Avancé
// ============================================

const heritageAvanceQuestions: ExamQuestion[] = [
  {
    id: 'famille-heritage-avance-001',
    question: {
      fr: 'Si un défunt laisse des dettes, que se passe-t-il pour l\'héritage ?',
      ar: 'إن ترك المتوفى ديوناً، ماذا يحدث للإرث؟',
      en: 'If deceased leaves debts, what happens to inheritance?',
    },
    options: [
      { id: 'a', text: { fr: 'Héritage partagé d\'abord, dettes ignorées', ar: 'الإرث يُقسّم أولاً، الديون تُتجاهل', en: 'Inheritance divided first, debts ignored' } },
      { id: 'b', text: { fr: 'Dettes payées EN PREMIER avant tout partage - ordre : frais funéraires, dettes, wasiyya (1/3), puis héritage', ar: 'الديون تُدفع أولاً قبل أي قسمة - الترتيب: مصاريف الدفن، الديون، الوصية (ثلث)، ثم الإرث', en: 'Debts paid FIRST before any division - order: funeral costs, debts, wasiyya (1/3), then inheritance' } },
      { id: 'c', text: { fr: 'Héritiers choisissent s\'ils paient', ar: 'الورثة يختارون إن كانوا يدفعون', en: 'Heirs choose if they pay' } },
      { id: 'd', text: { fr: 'Uniquement dettes envers Allah (Zakat impayée)', ar: 'فقط الديون لله (زكاة غير مدفوعة)', en: 'Only debts to Allah (unpaid Zakat)' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Ordre STRICT de distribution patrimoine défunt (Coran 4:11-12, Hadith) : 1) Frais funéraires/lavage/linceul (modestes), 2) DETTES envers humains (prêts, salaires) ET envers Allah (Zakat, Kaffarah, Hajj dû), 3) Wasiyya (testament) MAX 1/3 patrimoine restant, 4) ENSUITE seulement partage héritage selon parts Coran. Si dettes > patrimoine, pas d\'héritage du tout (héritiers ne sont PAS responsables dettes excédentaires sauf volontaires). Hadith : "Dette du croyant est attachée à son âme jusqu\'à payée" (Tirmidhi).',
      ar: 'الترتيب الصارم لتوزيع تركة المتوفى (القرآن 4:11-12، الحديث): 1) مصاريف الدفن/الغسل/الكفن (معتدلة)، 2) الديون للبشر (قروض، رواتب) ولله (زكاة، كفارات، حج واجب)، 3) الوصية بحد أقصى ثلث التركة المتبقية، 4) ثم فقط قسمة الإرث حسب الحصص القرآنية. إن كانت الديون > التركة، لا إرث إطلاقاً (الورثة ليسوا مسؤولين عن الديون الفائضة إلا تطوعاً). الحديث: "نفس المؤمن مرهونة بدينه حتى يُقضى عنه" (الترمذي).',
      en: 'STRICT order of deceased estate distribution (Quran 4:11-12, Hadith): 1) Funeral costs/washing/shroud (modest), 2) DEBTS to humans (loans, wages) AND to Allah (Zakat, Kaffarah, due Hajj), 3) Wasiyya (will) MAX 1/3 remaining estate, 4) THEN only inheritance division according to Quran shares. If debts > estate, no inheritance at all (heirs are NOT responsible for excess debts unless voluntary). Hadith: "Believer\'s soul is held hostage by his debt until paid" (Tirmidhi).',
    },
    points: 2,
    difficulty: 'medium',
    category: 'heritage-avance',
  },
  {
    id: 'famille-heritage-avance-002',
    question: {
      fr: 'Pourquoi la femme hérite-t-elle la moitié de l\'homme dans l\'Islam ?',
      ar: 'لماذا ترث المرأة نصف الرجل في الإسلام؟',
      en: 'Why does woman inherit half of man in Islam?',
    },
    options: [
      { id: 'a', text: { fr: 'Car elle vaut moins', ar: 'لأنها أقل قيمة', en: 'Because she is worth less' } },
      { id: 'b', text: { fr: 'Contexte : homme a OBLIGATIONS financières (Mahr, Nafaqah famille) ; femme GARDE tout son argent - équilibre responsabilités', ar: 'السياق: الرجل عليه التزامات مالية (مهر، نفقة العائلة)؛ المرأة تحتفظ بكل مالها - توازن المسؤوليات', en: 'Context: man has financial OBLIGATIONS (Mahr, family Nafaqah); woman KEEPS all her money - responsibility balance' } },
      { id: 'c', text: { fr: 'Pour punir les femmes', ar: 'لمعاقبة النساء', en: 'To punish women' } },
      { id: 'd', text: { fr: 'Règle applicable dans tous les cas', ar: 'قاعدة تنطبق في جميع الحالات', en: 'Rule applicable in all cases' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Règle "2:1" PAS universelle (seulement frères/sœurs, enfants si fils ET filles). Contexte économique : 1) HOMME : obligations Mahr (dot), Nafaqah (pension épouse+enfants), héritage va aux CHARGES familiales, 2) FEMME : aucune obligation dépenser sur famille, garde 100% salaire/héritage/dot pour ELLE. Donc homme hérite 2x mais DÉPENSE 2x ; femme hérite 1x mais GARDE 1x = ÉQUILIBRE. Cas où femme hérite ÉGAL/PLUS : mère+père (si enfants présents mère 1/6 = père 1/6), fille unique (1/2) vs frère défunt (0). Principe = justice distributive pas égalitarisme aveugle.',
      ar: 'قاعدة "2:1" ليست شاملة (فقط إخوة/أخوات، أولاد إن كان أبناء وبنات). السياق الاقتصادي: 1) الرجل: التزامات المهر، النفقة (زوجة+أولاد)، الإرث يذهب للأعباء العائلية، 2) المرأة: لا التزام بالإنفاق على العائلة، تحتفظ ب100% راتب/إرث/مهر لها. إذن الرجل يرث 2× لكن ينفق 2×؛ المرأة ترث 1× لكن تحتفظ 1× = التوازن. حالات المرأة ترث مساوياً/أكثر: الأم+الأب (إن كان أولاد الأم 1/6 = الأب 1/6)، البنت الوحيدة (نصف) مقابل أخ المتوفى (0). المبدأ = العدالة التوزيعية لا المساواة العمياء.',
      en: 'Rule "2:1" NOT universal (only siblings, children if sons AND daughters). Economic context: 1) MAN: obligations Mahr (dowry), Nafaqah (wife+children maintenance), inheritance goes to family BURDENS, 2) WOMAN: no obligation spend on family, keeps 100% salary/inheritance/dowry for HERSELF. So man inherits 2x but SPENDS 2x; woman inherits 1x but KEEPS 1x = BALANCE. Cases where woman inherits EQUAL/MORE: mother+father (if children present mother 1/6 = father 1/6), only daughter (1/2) vs deceased brother (0). Principle = distributive justice not blind egalitarianism.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'heritage-avance',
  },
  {
    id: 'famille-heritage-avance-003',
    question: {
      fr: 'Un enfant adopté (Kafala) hérite-t-il automatiquement ?',
      ar: 'هل الطفل المتبنى (الكفالة) يرث تلقائياً؟',
      en: 'Does an adopted child (Kafala) inherit automatically?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui comme enfant biologique', ar: 'نعم كالطفل البيولوجي', en: 'Yes like biological child' } },
      { id: 'b', text: { fr: 'Non - MAIS parents adoptifs peuvent lui léguer via Wasiyya (testament) jusqu\'à 1/3 patrimoine', ar: 'لا - لكن الوالدان بالكفالة يمكنهما الإيصاء له بحد أقصى ثلث التركة', en: 'No - BUT adoptive parents can bequeath via Wasiyya (will) up to 1/3 estate' } },
      { id: 'c', text: { fr: 'Oui mais moitié des enfants biologiques', ar: 'نعم لكن نصف الأولاد البيولوجيين', en: 'Yes but half of biological children' } },
      { id: 'd', text: { fr: 'Interdit de lui léguer quoi que ce soit', ar: 'محرم الإيصاء له بأي شيء', en: 'Forbidden to bequeath anything to him' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Héritage islamique basé sur LIEN DE SANG (Nasab) uniquement - Coran 33:5 "Appelez-les du nom de leurs pères". Enfant Kafala (élevé mais pas lien sanguin) : 1) N\'hérite PAS automatiquement, 2) Parents peuvent (devraient moralement) faire Wasiyya (testament) lui léguant jusqu\'à 1/3 patrimoine MAX (Hadith : "Le tiers et le tiers c\'est beaucoup"), 3) Wasiyya ne peut excéder 1/3 ni aller à héritier légal (sauf accord autres). Alternative : dons de son vivant (Hibah) sans limite. Sagesse : préserver droits héritiers légitimes tout en permettant générosité.',
      ar: 'الإرث الإسلامي مبني على صلة الدم (النسب) فقط - القرآن 33:5 "ادْعُوهُمْ لِآبَائِهِمْ". الطفل بالكفالة (مُربى لكن لا صلة دم): 1) لا يرث تلقائياً، 2) الوالدان يمكنهما (يجب أخلاقياً) الوصية له بحد أقصى ثلث التركة (الحديث: "الثلث والثلث كثير")، 3) الوصية لا تتجاوز الثلث ولا لوارث شرعي (إلا بموافقة الآخرين). البديل: هبات في الحياة (هبة) بلا حد. الحكمة: حفظ حقوق الورثة الشرعيين مع السماح بالكرم.',
      en: 'Islamic inheritance based on BLOOD TIE (Nasab) only - Quran 33:5 "Call them by their fathers\' names". Kafala child (raised but no blood link): 1) Does NOT inherit automatically, 2) Parents can (should morally) make Wasiyya (will) bequeathing him up to 1/3 estate MAX (Hadith: "Third and third is much"), 3) Wasiyya cannot exceed 1/3 nor go to legal heir (except others\' agreement). Alternative: lifetime gifts (Hibah) no limit. Wisdom: preserve legitimate heirs rights while allowing generosity.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'heritage-avance',
  },
  {
    id: 'famille-heritage-avance-004',
    question: {
      fr: 'Un non-musulman peut-il hériter d\'un musulman ?',
      ar: 'هل يمكن لغير المسلم أن يرث من مسلم؟',
      en: 'Can a non-Muslim inherit from a Muslim?',
    },
    options: [
      { id: 'a', text: { fr: 'Oui sans restriction', ar: 'نعم بلا قيد', en: 'Yes without restriction' } },
      { id: 'b', text: { fr: 'Non selon majorité - Hadith "Le musulman n\'hérite pas du mécréant ni le mécréant du musulman" ; MAIS Wasiyya (1/3) possible', ar: 'لا عند الجمهور - حديث "لا يرث المسلم الكافر ولا الكافر المسلم"؛ لكن الوصية (ثلث) ممكنة', en: 'No according to majority - Hadith "Muslim does not inherit from disbeliever nor disbeliever from Muslim"; BUT Wasiyya (1/3) possible' } },
      { id: 'c', text: { fr: 'Oui mais moitié de part musulman', ar: 'نعم لكن نصف حصة المسلم', en: 'Yes but half of Muslim share' } },
      { id: 'd', text: { fr: 'Uniquement si converti avant décès', ar: 'فقط إن أسلم قبل الوفاة', en: 'Only if converted before death' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Règle stricte : Le Prophète ﷺ dit : "Le musulman n\'hérite pas du mécréant (Kafir) ni le mécréant du musulman" (Bukhari, Muslim). Majorité (Hanafi, Maliki, Shafi\'i, Hanbali) : différence religion = empêchement (Mani\') absolu héritage. Exception : Mu\'adh ibn Jabal rapporte certains Sahaba permettaient musulman hériter de non-musulman (pas inverse) mais opinion minoritaire. SOLUTION : parent musulman peut faire Wasiyya (testament) léguant jusqu\'à 1/3 à parent non-musulman. Sagesse : éviter richesses musulmanes aller à ennemis Islam (historique) ; moderne : débat réforme.',
      ar: 'القاعدة الصارمة: قال النبي ﷺ: "لا يرث المسلم الكافر ولا الكافر المسلم" (البخاري، مسلم). الجمهور (حنفي، مالكي، شافعي، حنبلي): اختلاف الدين = مانع مطلق للإرث. استثناء: معاذ بن جبل روى بعض الصحابة أجازوا المسلم يرث غير المسلم (لا العكس) لكن رأي أقلية. الحل: الوالد المسلم يمكنه الوصية بحد أقصى ثلث لقريب غير مسلم. الحكمة: تجنب انتقال ثروات المسلمين لأعداء الإسلام (تاريخياً)؛ الحداثة: نقاش إصلاح.',
      en: 'Strict rule: Prophet ﷺ said: "Muslim does not inherit from disbeliever (Kafir) nor disbeliever from Muslim" (Bukhari, Muslim). Majority (Hanafi, Maliki, Shafi\'i, Hanbali): religious difference = absolute impediment (Mani\') inheritance. Exception: Mu\'adh ibn Jabal reports some Sahaba allowed Muslim inherit from non-Muslim (not reverse) but minority opinion. SOLUTION: Muslim parent can make Wasiyya (will) bequeathing up to 1/3 to non-Muslim relative. Wisdom: avoid Muslim wealth going to Islam enemies (historical); modern: reform debate.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'heritage-avance',
  },
  {
    id: 'famille-heritage-avance-005',
    question: {
      fr: 'Qu\'est-ce que la Wasiyya (testament) et quelles sont ses limites ?',
      ar: 'ما هي الوصية وما حدودها؟',
      en: 'What is Wasiyya (will) and what are its limits?',
    },
    options: [
      { id: 'a', text: { fr: 'Testament libre sans limite', ar: 'وصية حرة بلا حد', en: 'Free will without limit' } },
      { id: 'b', text: { fr: 'MAX 1/3 patrimoine ; ne peut aller à héritier légal (sauf accord) ; priorité : dettes > wasiyya > héritage', ar: 'بحد أقصى ثلث التركة؛ لا يمكن لوارث شرعي (إلا بموافقة)؛ الأولوية: ديون > وصية > إرث', en: 'MAX 1/3 estate; cannot go to legal heir (except agreement); priority: debts > wasiyya > inheritance' } },
      { id: 'c', text: { fr: 'Interdit en Islam', ar: 'محرم في الإسلام', en: 'Forbidden in Islam' } },
      { id: 'd', text: { fr: 'Obligatoire pour tous', ar: 'واجب على الجميع', en: 'Mandatory for all' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Wasiyya (وصية) = testament léguant biens après mort. Règles : 1) LIMITE : MAX 1/3 patrimoine après paiement dettes - Hadith : Sa\'d ibn Abi Waqqas voulut léguer 2/3, Prophète ﷺ refusa, accepta 1/3 et dit "le tiers et le tiers c\'est beaucoup" (Bukhari), 2) Ne peut aller à HÉRITIER légal (fils, fille, épouse...) - "Pas de wasiyya pour héritier" (hadith) SAUF si autres héritiers acceptent après décès, 3) Usages : enfant adopté, œuvres charité, parent non-musulman, ami proche. Recommandée (Mandub) si dettes/droits à clarifier, obligatoire (Wajib) si dépôts/dettes non documentés.',
      ar: 'الوصية = إيصاء بأموال بعد الموت. القواعد: 1) الحد: بحد أقصى ثلث التركة بعد سداد الديون - حديث: أراد سعد بن أبي وقاص الإيصاء بالثلثين، رفض النبي ﷺ، قبل الثلث وقال "الثلث والثلث كثير" (البخاري)، 2) لا يمكن لوارث شرعي (ابن، بنت، زوجة...) - "لا وصية لوارث" (حديث) إلا إن قبل الورثة الآخرون بعد الوفاة، 3) الاستخدامات: طفل متبنى، أعمال خيرية، قريب غير مسلم، صديق مقرب. مستحبة إن كانت ديون/حقوق لتوضيح، واجبة إن كانت ودائع/ديون غير موثقة.',
      en: 'Wasiyya = will bequeathing assets after death. Rules: 1) LIMIT: MAX 1/3 estate after paying debts - Hadith: Sa\'d ibn Abi Waqqas wanted to bequeath 2/3, Prophet ﷺ refused, accepted 1/3 and said "third and third is much" (Bukhari), 2) Cannot go to legal HEIR (son, daughter, wife...) - "No wasiyya for heir" (hadith) EXCEPT if other heirs accept after death, 3) Uses: adopted child, charity works, non-Muslim relative, close friend. Recommended (Mandub) if debts/rights to clarify, mandatory (Wajib) if deposits/undocumented debts.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'heritage-avance',
  },
  {
    id: 'famille-heritage-avance-006',
    question: {
      fr: 'Qu\'est-ce que le principe de \'Awl dans l\'héritage islamique ?',
      ar: 'ما هو مبدأ العول في الإرث الإسلامي؟',
      en: 'What is the principle of \'Awl in Islamic inheritance?',
    },
    options: [
      { id: 'a', text: { fr: 'Donner plus aux femmes', ar: 'إعطاء المزيد للنساء', en: 'Giving more to women' } },
      { id: 'b', text: { fr: 'Ajustement mathématique si total parts héritiers >100% - réduire proportionnellement toutes parts', ar: 'تعديل رياضي إن كان مجموع حصص الورثة >100% - تخفيض متناسب لجميع الحصص', en: 'Mathematical adjustment if total heirs shares >100% - proportionally reduce all shares' } },
      { id: 'c', text: { fr: 'Annuler l\'héritage', ar: 'إلغاء الإرث', en: 'Canceling inheritance' } },
      { id: 'd', text: { fr: 'Priorité aux hommes', ar: 'أولوية للرجال', en: 'Priority to men' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: '\'Awl (عول) = situation rare où parts Coran totalisent >100%. Exemple : Homme meurt laissant épouse (1/4), 2 sœurs germaines (2/3), sœur utérine (1/6) → 1/4 + 2/3 + 1/6 = 13/12 >1 ! Solution \'Awl (introduite par Omar ibn al-Khattab) : augmenter dénominateur proportionnellement (de 12 à 13) et réduire toutes parts également → épouse 3/13, sœurs germaines 8/13, sœur utérine 2/13. Principe : partager perte équitablement entre tous héritiers. Rare (5-6 cas seulement en Fiqh). Nécessite expert calcul Faraid (science parts héréditaires).',
      ar: 'العول = حالة نادرة حيث مجموع الحصص القرآنية >100%. مثال: رجل مات تاركاً زوجة (ربع)، أختين شقيقتين (ثلثان)، أخت لأم (سدس) → 1/4 + 2/3 + 1/6 = 13/12 >1 ! حل العول (أدخله عمر بن الخطاب): زيادة المقام تناسبياً (من 12 إلى 13) وتخفيض جميع الحصص بالتساوي → الزوجة 3/13، الشقيقتان 8/13، الأخت لأم 2/13. المبدأ: توزيع الخسارة بالتساوي بين جميع الورثة. نادر (5-6 حالات فقط في الفقه). يحتاج خبير حساب الفرائض (علم الحصص الإرثية).',
      en: '\'Awl = rare situation where Quran shares total >100%. Example: Man dies leaving wife (1/4), 2 full sisters (2/3), uterine sister (1/6) → 1/4 + 2/3 + 1/6 = 13/12 >1! \'Awl solution (introduced by Umar ibn al-Khattab): increase denominator proportionally (from 12 to 13) and reduce all shares equally → wife 3/13, full sisters 8/13, uterine sister 2/13. Principle: share loss equitably among all heirs. Rare (only 5-6 cases in Fiqh). Requires expert calculation Faraid (hereditary shares science).',
    },
    points: 3,
    difficulty: 'hard',
    category: 'heritage-avance',
  },
  {
    id: 'famille-heritage-avance-007',
    question: {
      fr: 'Comment l\'héritage d\'un hermaphrodite (Khuntha) est-il calculé en Fiqh classique ?',
      ar: 'كيف يُحسب إرث الخنثى في الفقه الكلاسيكي؟',
      en: 'How is inheritance of hermaphrodite (Khuntha) calculated in classical Fiqh?',
    },
    options: [
      { id: 'a', text: { fr: 'Toujours comme homme', ar: 'دائماً كرجل', en: 'Always as man' } },
      { id: 'b', text: { fr: 'Toujours comme femme', ar: 'دائماً كامرأة', en: 'Always as woman' } },
      { id: 'c', text: { fr: 'Si organes ambigus : calculer 2 scénarios (homme/femme), prendre moyenne OU attendre développement puberté', ar: 'إن كانت الأعضاء غامضة: حساب سيناريوهين (رجل/امرأة)، أخذ المتوسط أو انتظار البلوغ', en: 'If ambiguous organs: calculate 2 scenarios (man/woman), take average OR wait puberty development' } },
      { id: 'd', text: { fr: 'Ne peut hériter', ar: 'لا يمكنه الإرث', en: 'Cannot inherit' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Khuntha (خنثى) = personne avec organes génitaux ambigus. Fiqh classique distingue : 1) Khuntha Ghayr Mushkil (non-problématique) : signes dominants clairs (urination, pilosité, caractères sexuels secondaires puberté) → traiter selon sexe dominant, 2) Khuntha Mushkil (problématique) : totalement ambigu. Solutions : a) Attendre puberté pour clarification (menstruation → femme, barbe/érection → homme), b) Si reste ambigu : calculer héritage dans 2 scénarios (part homme, part femme), prendre MOINDRE des deux (protéger droits autres héritiers) OU moyenne. Cas extrêmement rare. Moderne : tests génétiques (XX/XY) aident décision.',
      ar: 'الخنثى = شخص بأعضاء تناسلية غامضة. الفقه الكلاسيكي يميز: 1) خنثى غير مشكل: علامات سائدة واضحة (التبول، الشعر، صفات جنسية ثانوية بالبلوغ) → معاملته حسب الجنس السائد، 2) خنثى مشكل: غامض تماماً. الحلول: أ) انتظار البلوغ للتوضيح (حيض → أنثى، لحية/انتصاب → ذكر)، ب) إن بقي غامضاً: حساب الإرث في سيناريوهين (حصة رجل، حصة امرأة)، أخذ الأقل (حماية حقوق الورثة الآخرين) أو المتوسط. حالة نادرة جداً. الحداثة: الاختبارات الجينية (XX/XY) تساعد القرار.',
      en: 'Khuntha = person with ambiguous genital organs. Classical Fiqh distinguishes: 1) Khuntha Ghayr Mushkil (non-problematic): clear dominant signs (urination, body hair, secondary sexual characteristics at puberty) → treat according to dominant sex, 2) Khuntha Mushkil (problematic): totally ambiguous. Solutions: a) Wait puberty for clarification (menstruation → female, beard/erection → male), b) If remains ambiguous: calculate inheritance in 2 scenarios (man share, woman share), take LESSER of two (protect other heirs rights) OR average. Extremely rare case. Modern: genetic tests (XX/XY) help decision.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'heritage-avance',
  },
];

// ============================================
// Assemblage de l'examen COMPLET
// ============================================

const allQuestions: ExamQuestion[] = [
  ...mariageQuestions,                    // 4 questions
  ...droitsConjugauxQuestions,            // 3 questions
  ...divorceQuestions,                    // 4 questions
  ...hadanaQuestions,                     // 2 questions
  ...heritageQuestions,                   // 4 questions
  ...filiationQuestions,                  // 2 questions
  ...iddahQuestions,                      // 3 questions
  ...khulQuestions,                       // 2 questions
  ...typeTalaqQuestions,                  // 2 questions
  ...mariageModerneQuestions,             // 8 questions (NOUVEAU Phase 3)
  ...droitsFemmeModerneQuestions,         // 7 questions (NOUVEAU Phase 3)
  ...divorceModerneQuestions,             // 6 questions (NOUVEAU Phase 3)
  ...procreationBioethiqueQuestions,      // 8 questions (NOUVEAU Phase 3)
  ...heritageAvanceQuestions,             // 7 questions (NOUVEAU Phase 3)
  // Total : 62 questions (26 initial + 36 Phase 3)
];

export const examFiqhFamilleFinal: ExamConfig = {
  id: 'exam-fiqh-famille-final',
  type: 'course',
  level: 'advanced',
  title: {
    fr: 'Examen Complet - Fiqh Famille',
    ar: 'الامتحان الشامل - فقه الأسرة',
    en: 'Complete Exam - Fiqh Family',
  },
  description: {
    fr: 'Examen de 50 questions sélectionnées aléatoirement parmi une banque de 62 questions. Couvre le droit de la famille islamique classique et moderne : mariage, droits conjugaux, divorce, procréation bioéthique, héritage.',
    ar: 'امتحان من 50 سؤالاً يتم اختيارها عشوائياً من بنك يضم 62 سؤالاً. يغطي فقه الأسرة الكلاسيكي والحديث: الزواج، الحقوق الزوجية، الطلاق، الإنجاب والأخلاق الحيوية، الإرث.',
    en: 'Exam with 50 questions randomly selected from a pool of 62. Covers classical and modern Islamic family law: marriage, marital rights, divorce, procreation bioethics, inheritance.',
  },
  instructions: {
    fr: 'Vous avez 70 minutes pour répondre à 50 questions. Chaque question a une seule bonne réponse. Un score de 70% est requis pour réussir.',
    ar: 'لديك 70 دقيقة للإجابة على 50 سؤالاً. لكل سؤال إجابة صحيحة واحدة. يُشترط 70% للنجاح.',
    en: 'You have 70 minutes to answer 50 questions. Each question has one correct answer. A score of 70% is required to pass.',
  },
  courseSlug: 'fiqh-famille',
  questionPool: allQuestions,
  questionsPerExam: 50,
  categoryConfig: [
    { category: 'mariage', count: 4 },
    { category: 'droits', count: 3 },
    { category: 'divorce', count: 4 },
    { category: 'hadana', count: 2 },
    { category: 'heritage', count: 4 },
    { category: 'filiation', count: 2 },
    { category: 'iddah', count: 3 },
    { category: 'khul', count: 2 },
    { category: 'divorce-types', count: 2 },
    { category: 'mariage-moderne', count: 6 },
    { category: 'droits-femme', count: 5 },
    { category: 'divorce-moderne', count: 4 },
    { category: 'procreation', count: 6 },
    { category: 'heritage-avance', count: 3 },
  ],
  questions: [],
  duration: 70,
  passingScore: 70,
  maxAttempts: 5,
  shuffleQuestions: true,
  shuffleOptions: true,
  showAnswersAfter: 'complete',
  hasCertificate: true,
  certificateName: {
    fr: 'Certificat de Maîtrise - Fiqh Famille',
    ar: 'شهادة الإتقان - فقه الأسرة',
    en: 'Mastery Certificate - Fiqh Family',
  },
  createdAt: '2026-01-31',
};

export default examFiqhFamilleFinal;
