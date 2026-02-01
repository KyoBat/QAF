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
// Assemblage de l'examen COMPLET
// ============================================

const allQuestions: ExamQuestion[] = [
  ...mariageQuestions,         // 4 questions
  ...droitsConjugauxQuestions, // 3 questions
  ...divorceQuestions,         // 4 questions
  ...hadanaQuestions,          // 2 questions
  ...heritageQuestions,        // 4 questions
  ...filiationQuestions,       // 2 questions
  ...iddahQuestions,           // 3 questions (NOUVEAU)
  ...khulQuestions,            // 2 questions (NOUVEAU)
  ...typeTalaqQuestions,       // 2 questions (NOUVEAU)
  // Total : 26 questions
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
    fr: 'Examen de 20 questions sélectionnées aléatoirement parmi une banque de 26 questions. Couvre le droit de la famille islamique.',
    ar: 'امتحان من 20 سؤالاً يتم اختيارها عشوائياً من بنك يضم 26 سؤالاً. يغطي فقه الأسرة.',
    en: 'Exam with 20 questions randomly selected from a pool of 26. Covers Islamic family law.',
  },
  instructions: {
    fr: 'Vous avez 35 minutes pour répondre à 20 questions. Chaque question a une seule bonne réponse. Un score de 70% est requis pour réussir.',
    ar: 'لديك 35 دقيقة للإجابة على 20 سؤالاً. لكل سؤال إجابة صحيحة واحدة. يُشترط 70% للنجاح.',
    en: 'You have 35 minutes to answer 20 questions. Each question has one correct answer. A score of 70% is required to pass.',
  },
  courseSlug: 'fiqh-famille',
  questionPool: allQuestions,
  questionsPerExam: 20,
  categoryConfig: [
    { category: 'mariage', count: 3 },
    { category: 'droits', count: 2 },
    { category: 'divorce', count: 3 },
    { category: 'hadana', count: 2 },
    { category: 'heritage', count: 3 },
    { category: 'filiation', count: 2 },
    { category: 'iddah', count: 2 },
    { category: 'khul', count: 2 },
    { category: 'divorce-types', count: 1 },
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
    fr: 'Certificat de Maîtrise - Fiqh Famille',
    ar: 'شهادة الإتقان - فقه الأسرة',
    en: 'Mastery Certificate - Fiqh Family',
  },
  createdAt: '2026-01-31',
};

export default examFiqhFamilleFinal;
