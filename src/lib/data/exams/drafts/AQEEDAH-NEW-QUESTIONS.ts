/**
 * NOUVELLES QUESTIONS AQEEDAH (+29 questions)
 * À INTÉGRER dans exam-aqeedah-final.ts
 * 
 * Total après intégration: 65 questions (36 actuelles + 29 nouvelles)
 */

import { ExamQuestion } from '../types';

// ============================================
// 1. DÉFIS MODERNES: ATHÉISME/LAÏCITÉ (8 questions)
// ============================================

const defisModernesQuestions: ExamQuestion[] = [
  {
    id: 'aqeedah-moderne-001',
    question: {
      fr: 'Comment l\'Islam répond-il à l\'argument athée "Si Dieu existe, pourquoi le mal/la souffrance?"',
      ar: 'كيف يرد الإسلام على حجة الملحدين "إذا كان الله موجودًا، لماذا الشر/المعاناة؟"',
      en: 'How does Islam respond to the atheist argument "If God exists, why evil/suffering?"',
    },
    options: [
      {
        id: 'a',
        text: {
          fr: 'Libre arbitre + épreuve: la vie terrestre = test; mal causé par choix humains OU épreuve pour élever degré spirituel; Dieu compatissant mais pas obligé d\'intervenir',
          ar: 'الإرادة الحرة + الابتلاء: الحياة الدنيا = اختبار؛ الشر ناتج عن اختيارات بشرية أو ابتلاء لرفع الدرجة الروحية؛ الله رحيم لكن غير ملزم بالتدخل',
          en: 'Free will + trial: earthly life = test; evil caused by human choices OR trial to elevate spiritual degree; God compassionate but not obliged to intervene',
        },
      },
      { id: 'b', text: { fr: 'Allah ne peut empêcher le mal', ar: 'الله لا يستطيع منع الشر', en: 'Allah cannot prevent evil' } },
      { id: 'c', text: { fr: 'Le mal est une illusion', ar: 'الشر وهم', en: 'Evil is an illusion' } },
      { id: 'd', text: { fr: 'Pas de réponse islamique', ar: 'لا إجابة إسلامية', en: 'No Islamic answer' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: '1) Mal moral (guerres, injustice) = conséquence libre arbitre humain. Allah donne liberté + responsabilité. 2) Mal naturel (maladie, catastrophe) = épreuve (67:2 "pour éprouver qui agit le mieux"). Le Paradis compense infiniment. 3) Souffrance révèle patience, compassion, repentir. Sans épreuve, pas de croissance spirituelle. La vie n\'est pas le Paradis - elle est le chemin vers lui.',
      ar: '1) الشر الأخلاقي (حروب، ظلم) = نتيجة الإرادة البشرية الحرة. الله أعطى الحرية + المسؤولية. 2) الشر الطبيعي (مرض، كارثة) = ابتلاء (67:2 "ليبلوكم أيكم أحسن عملاً"). والجنة تعوض تعويضًا لا نهائيًا. 3) المعاناة تُظهر الصبر والرحمة والتوبة. بلا ابتلاء، لا نمو روحي. الدنيا ليست الجنة - بل الطريق إليها.',
      en: '1) Moral evil (wars, injustice) = consequence of human free will. Allah gave freedom + responsibility. 2) Natural evil (disease, disaster) = trial (67:2 "to test which of you does best in deed"). Paradise compensates infinitely. 3) Suffering reveals patience, compassion, repentance. Without trial, no spiritual growth. Life isn\'t Paradise - it\'s the path to it.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'defis-modernes',
  },
  {
    id: 'aqeedah-moderne-002',
    question: {
      fr: 'Comment répondre à l\'affirmation "La science prouve que Dieu n\'existe pas"?',
      ar: 'كيف نرد على القول "العلم يثبت أن الله غير موجود"؟',
      en: 'How to respond to the claim "Science proves God doesn\'t exist"?',
    },
    options: [
      {
        id: 'a',
        text: {
          fr: 'La science ne peut prouver/réfuter l\'existence métaphysique: science = observation naturelle; Dieu = au-delà du naturel (transcendant). Confusion catégorielle.',
          ar: 'العلم لا يمكنه إثبات/دحض الوجود الميتافيزيقي: العلم = ملاحظة طبيعية؛ الله = ما وراء الطبيعة (متعالٍ). خلط في الفئات.',
          en: 'Science cannot prove/refute metaphysical existence: science = natural observation; God = beyond natural (transcendent). Category confusion.',
        },
      },
      { id: 'b', text: { fr: 'La science a effectivement prouvé l\'inexistence de Dieu', ar: 'العلم أثبت فعلاً عدم وجود الله', en: 'Science has actually proven God\'s non-existence' } },
      { id: 'c', text: { fr: 'La foi et la science sont incompatibles', ar: 'الإيمان والعلم متناقضان', en: 'Faith and science are incompatible' } },
      { id: 'd', text: { fr: 'Ignorer la science', ar: 'تجاهل العلم', en: 'Ignore science' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'La science étudie le "comment" (mécanismes naturels), pas le "pourquoi" (but, origine première). L\'existence d\'un Créateur transcendant est une question métaphysique/philosophique, pas empirique. La méthode scientifique ne peut tester ce qui est au-delà de la nature. Beaucoup de scientifiques croyants (Newton, Pasteur, Abdus Salam - Prix Nobel). Le Big Bang, réglage fin de l\'univers (fine-tuning) → arguments POUR un Créateur selon plusieurs scientifiques.',
      ar: 'العلم يدرس "الكيف" (الآليات الطبيعية)، لا "الغاية" (الهدف، الأصل الأول). ووجود خالق متعالٍ مسألة ميتافيزيقية/فلسفية، لا تجريبية. والمنهج العلمي لا يمكنه اختبار ما وراء الطبيعة. والكثير من العلماء المؤمنين (نيوتن، باستور، عبد السلام - نوبل). والانفجار الكبير، الضبط الدقيق للكون → حجج للخالق عند علماء كثيرين.',
      en: 'Science studies "how" (natural mechanisms), not "why" (purpose, first origin). Existence of transcendent Creator is metaphysical/philosophical question, not empirical. Scientific method cannot test what is beyond nature. Many believing scientists (Newton, Pasteur, Abdus Salam - Nobel Prize). Big Bang, universe fine-tuning → arguments FOR Creator according to several scientists.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'defis-modernes',
  },
  {
    id: 'aqeedah-moderne-003',
    question: {
      fr: 'Le darwinisme (évolution) est-il compatible avec l\'Islam?',
      ar: 'هل الدارونية (التطور) متوافقة مع الإسلام؟',
      en: 'Is Darwinism (evolution) compatible with Islam?',
    },
    options: [
      {
        id: 'a',
        text: {
          fr: 'Débat: Évolution animale = permise; Adam créé directement par Allah (pas d\'ancêtre commun avec singes) selon consensus',
          ar: 'نقاش: تطور الحيوانات = مقبول؛ آدم خُلق مباشرة بواسطة الله (لا جد مشترك مع القرود) بالإجماع',
          en: 'Debate: Animal evolution = permitted; Adam created directly by Allah (no common ancestor with apes) by consensus',
        },
      },
      { id: 'b', text: { fr: 'Totalement compatible sans restriction', ar: 'متوافق تمامًا بلا قيود', en: 'Fully compatible without restriction' } },
      { id: 'c', text: { fr: 'Totalement rejeté', ar: 'مرفوض تمامًا', en: 'Totally rejected' } },
      { id: 'd', text: { fr: 'Pas d\'opinion islamique', ar: 'لا رأي إسلامي', en: 'No Islamic opinion' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Savants modernes (Yasir Qadhi, Hamza Tzortzis) acceptent évolution pour animaux (processus créé par Allah comme toutes lois naturelles). Mais Adam عليه السلام créé directement de terre (Coran 3:59 "comme \'Isa, de poussière"), pas d\'ancêtre singe. Débat si corps humain post-Adam peut avoir évolué, mais origine adamique directe = consensus. La Fitrah (nature primordiale) humaine unique (responsabilité morale, conscience) ≠ animaux.',
      ar: 'يقبل علماء معاصرون (ياسر قاضي، حمزة تزورتزس) التطور للحيوانات (عملية خلقها الله كسائر القوانين الطبيعية). لكن آدم عليه السلام خُلق مباشرة من تراب (القرآن 3:59 "كمثل عيسى، من تراب")، لا جد قرد. ونقاش إن كان الجسم البشري بعد آدم تطور، لكن الأصل الآدمي المباشر = إجماع. والفطرة البشرية فريدة (المسؤولية الأخلاقية، الوعي) ≠ الحيوانات.',
      en: 'Modern scholars (Yasir Qadhi, Hamza Tzortzis) accept evolution for animals (process created by Allah like all natural laws). But Adam عليه السلام created directly from earth (Quran 3:59 "like \'Isa, from dust"), no ape ancestor. Debate if human body post-Adam could have evolved, but direct Adamic origin = consensus. Human Fitrah (primordial nature) unique (moral responsibility, consciousness) ≠ animals.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'defis-modernes',
  },
  {
    id: 'aqeedah-moderne-004',
    question: {
      fr: 'Quelle est la position islamique sur la laïcité (séparation religion/État)?',
      ar: 'ما الموقف الإسلامي من العلمانية (فصل الدين عن الدولة)؟',
      en: 'What is Islamic position on secularism (separation religion/State)?',
    },
    options: [
      {
        id: 'a',
        text: {
          fr: 'Incompatible avec Islam complet: l\'Islam = système global (individu + société); mais coexistence pacifique + respect lois du pays de résidence si pas contraire à Wajibat',
          ar: 'غير متوافق مع الإسلام الكامل: الإسلام = نظام شامل (فرد + مجتمع)؛ لكن التعايش السلمي + احترام قوانين بلد الإقامة إذا لم تخالف الواجبات',
          en: 'Incompatible with complete Islam: Islam = comprehensive system (individual + society); but peaceful coexistence + respect laws of country of residence if not contrary to obligations',
        },
      },
      { id: 'b', text: { fr: 'Totalement compatible', ar: 'متوافق تمامًا', en: 'Fully compatible' } },
      { id: 'c', text: { fr: 'L\'Islam est purement spirituel', ar: 'الإسلام روحي فقط', en: 'Islam is purely spiritual' } },
      { id: 'd', text: { fr: 'Obligation de conflit permanent', ar: 'واجب الصراع الدائم', en: 'Obligation of permanent conflict' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'L\'Islam n\'est pas "clergé vs État" (pas de clergé en Islam). Mais la Shariah couvre culte (\'Ibadat) + transactions (Mu\'amalat) + gouvernance (Siyasa). Idéalement: loi islamique dans société musulmane. En minorité musulmane: respecter loi du pays sauf si force à Haram majeur (abandon Islam, Zina, etc.). Coran 4:59 "obéissez à Allah, Messager, détenteurs d\'autorité". Coexistence pacifique possible (Charte de Médine = exemple historique).',
      ar: 'الإسلام ليس "كهنوت ضد دولة" (لا كهنوت في الإسلام). لكن الشريعة تشمل العبادات + المعاملات + السياسة. المثالي: قانون إسلامي في مجتمع مسلم. في الأقلية المسلمة: احترام قانون البلد إلا إذا أجبر على حرام كبير (ترك الإسلام، الزنا، إلخ). القرآن 4:59 "أطيعوا الله والرسول وأولي الأمر". والتعايش السلمي ممكن (وثيقة المدينة = مثال تاريخي).',
      en: 'Islam isn\'t "clergy vs State" (no clergy in Islam). But Shariah covers worship (\'Ibadat) + transactions (Mu\'amalat) + governance (Siyasa). Ideally: Islamic law in Muslim society. As Muslim minority: respect country\'s law except if forces major Haram (abandon Islam, Zina, etc.). Quran 4:59 "obey Allah, Messenger, those in authority". Peaceful coexistence possible (Medina Charter = historical example).',
    },
    points: 3,
    difficulty: 'hard',
    category: 'defis-modernes',
  },
  {
    id: 'aqeedah-moderne-005',
    question: {
      fr: 'Quelle est la preuve rationnelle de l\'existence d\'Allah selon l\'Islam?',
      ar: 'ما الدليل العقلي على وجود الله في الإسلام؟',
      en: 'What is the rational proof of Allah\'s existence according to Islam?',
    },
    options: [
      {
        id: 'a',
        text: {
          fr: 'Fitrah (disposition naturelle à croire) + Contingence (univers créé nécessite Créateur non-créé) + Ordre cosmique (design intentionnel)',
          ar: 'الفطرة + الحدوث (الكون المخلوق يحتاج خالقًا غير مخلوق) + النظام الكوني (تصميم هادف)',
          en: 'Fitrah (natural disposition to believe) + Contingency (created universe requires uncreated Creator) + Cosmic order (intentional design)',
        },
      },
      { id: 'b', text: { fr: 'Aucune preuve, seulement foi aveugle', ar: 'لا دليل، فقط إيمان أعمى', en: 'No proof, only blind faith' } },
      { id: 'c', text: { fr: 'Uniquement le Coran', ar: 'القرآن فقط', en: 'Only the Quran' } },
      { id: 'd', text: { fr: 'Uniquement les miracles', ar: 'المعجزات فقط', en: 'Only miracles' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: '1) Fitrah (30:30): tout humain naît avec reconnaissance innée d\'un Créateur. 2) Argument cosmologique (Huduth): tout créé/contingent a une cause → chaîne remonte à Cause Première nécessaire et éternelle (Allah). 3) Argument téléologique: ordre/complexité/réglage fin univers → Designer intelligent (Coran 50:6-8). 4) Argument moral: conscience morale universelle → Législateur moral transcendant. L\'Islam combine révélation ET raison.',
      ar: '1) الفطرة (30:30): كل إنسان يولد بإقرار فطري بالخالق. 2) برهان الحدوث: كل مخلوق/حادث له سبب → السلسلة تصل إلى السبب الأول الواجب الأزلي (الله). 3) برهان النظام: النظام/التعقيد/الضبط الدقيق للكون → مصمم عاقل (القرآن 50:6-8). 4) البرهان الأخلاقي: الضمير الأخلاقي العالمي → مشرّع أخلاقي متعالٍ. والإسلام يجمع الوحي والعقل.',
      en: '1) Fitrah (30:30): every human born with innate recognition of Creator. 2) Cosmological argument (Huduth): everything created/contingent has cause → chain leads to necessary and eternal First Cause (Allah). 3) Teleological argument: order/complexity/fine-tuning of universe → intelligent Designer (Quran 50:6-8). 4) Moral argument: universal moral conscience → transcendent moral Legislator. Islam combines revelation AND reason.',
    },
    points: 2,
    difficulty: 'easy',
    category: 'defis-modernes',
  },
  {
    id: 'aqeedah-moderne-006',
    question: {
      fr: 'Quelle est la position islamique sur l\'agnosticisme ("je ne sais pas si Dieu existe")?',
      ar: 'ما الموقف الإسلامي من اللاأدرية ("لا أدري إن كان الله موجودًا")؟',
      en: 'What is Islamic position on agnosticism ("I don\'t know if God exists")?',
    },
    options: [
      {
        id: 'a',
        text: {
          fr: 'Rejeté: la connaissance d\'Allah est accessible par Fitrah, raison, révélation; agnosticisme = refus de chercher, pas neutralité',
          ar: 'مرفوض: معرفة الله متاحة بالفطرة والعقل والوحي؛ اللاأدرية = رفض البحث، لا الحياد',
          en: 'Rejected: knowledge of Allah accessible by Fitrah, reason, revelation; agnosticism = refusal to search, not neutrality',
        },
      },
      { id: 'b', text: { fr: 'Position acceptable', ar: 'موقف مقبول', en: 'Acceptable position' } },
      { id: 'c', text: { fr: 'Meilleure que l\'athéisme', ar: 'أفضل من الإلحاد', en: 'Better than atheism' } },
      { id: 'd', text: { fr: 'Équivalent au Tawhid', ar: 'مساوٍ للتوحيد', en: 'Equivalent to Tawhid' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Coran 7:172 (pacte pré-éternel "Ne suis-Je pas votre Seigneur? Ils dirent: Certes oui"). La Fitrah + preuves rationnelles (contingence, ordre cosmique) + révélations (Coran miraculeux) rendent connaissance d\'Allah possible et accessible. L\'agnosticisme est souvent excuse pour éviter responsabilité morale/religieuse. Douter de l\'Évident (Allah) après examen sincère = comparable au Kufr. Le musulman doit avoir certitude (Yaqin), pas doute.',
      ar: 'القرآن 7:172 (الميثاق الأزلي "ألست بربكم قالوا بلى"). والفطرة + الأدلة العقلية (الحدوث، النظام الكوني) + الوحي (القرآن المعجز) تجعل معرفة الله ممكنة ومتاحة. واللاأدرية غالبًا عذر لتجنب المسؤولية الأخلاقية/الدينية. والشك في الواضح (الله) بعد البحث الصادق = كالكفر. والمسلم يجب أن يملك اليقين، لا الشك.',
      en: 'Quran 7:172 (pre-eternal covenant "Am I not your Lord? They said: Yes indeed"). Fitrah + rational proofs (contingency, cosmic order) + revelations (miraculous Quran) make knowledge of Allah possible and accessible. Agnosticism often excuse to avoid moral/religious responsibility. Doubting the Evident (Allah) after sincere examination = comparable to Kufr. Muslim must have certainty (Yaqin), not doubt.',
    },
    points: 2,
    difficulty: 'medium',
    category: 'defis-modernes',
  },
  {
    id: 'aqeedah-moderne-007',
    question: {
      fr: 'Qu\'est-ce que le "New Atheism" et quelles sont ses principales erreurs selon savants musulmans?',
      ar: 'ما هي "الإلحاد الجديد" وما أبرز أخطائه عند العلماء المسلمين؟',
      en: 'What is "New Atheism" and what are its main errors according to Muslim scholars?',
    },
    options: [
      {
        id: 'a',
        text: {
          fr: 'Mouvement réductionniste (Dawkins, Hitchens): réduit religion à superstition, ignore dimension spirituelle/morale/civilisationnelle; confond pratiques culturelles avec Islam authentique',
          ar: 'حركة اختزالية (داوكنز، هيتشنز): تختزل الدين في الخرافة، تتجاهل البعد الروحي/الأخلاقي/الحضاري؛ تخلط بين الممارسات الثقافية والإسلام الأصيل',
          en: 'Reductionist movement (Dawkins, Hitchens): reduces religion to superstition, ignores spiritual/moral/civilizational dimension; confuses cultural practices with authentic Islam',
        },
      },
      { id: 'b', text: { fr: 'Un mouvement scientifique objectif', ar: 'حركة علمية موضوعية', en: 'An objective scientific movement' } },
      { id: 'c', text: { fr: 'La vraie science', ar: 'العلم الحقيقي', en: 'True science' } },
      { id: 'd', text: { fr: 'N\'existe pas', ar: 'غير موجود', en: 'Doesn\'t exist' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'New Atheism (post-2001, Dawkins, Hitchens, Harris) attaque violemment religion. Réponses musulmanes (Hamza Tzortzis, Subboor Ahmad): 1) Confond culture/islam (critiquent "islam" = pratiques culturelles corrompues). 2) Ignore bienfaits civilisationnels islam (âge d\'or scientifique, droits humains précurseurs, etc.). 3) Réduit humain à matière (nie spiritualité, libre arbitre, morale objective). 4) Double standard (critique islam, silence sur violence séculière: colonialisme, guerres mondiales).',
      ar: 'الإلحاد الجديد (بعد 2001، داوكنز، هيتشنز، هاريس) يهاجم الدين بعنف. ردود مسلمة (حمزة تزورتزس، صبور أحمد): 1) يخلط الثقافة/الإسلام (ينتقدون "الإسلام" = ممارسات ثقافية فاسدة). 2) يتجاهل المنافع الحضارية للإسلام (العصر الذهبي العلمي، حقوق الإنسان الرائدة، إلخ). 3) يختزل الإنسان في المادة (ينكر الروحانية، الإرادة الحرة، الأخلاق الموضوعية). 4) ازدواجية معايير (ينتقد الإسلام، يصمت عن العنف العلماني: الاستعمار، الحروب العالمية).',
      en: 'New Atheism (post-2001, Dawkins, Hitchens, Harris) violently attacks religion. Muslim responses (Hamza Tzortzis, Subboor Ahmad): 1) Confuses culture/islam (criticizes "islam" = corrupt cultural practices). 2) Ignores Islamic civilizational benefits (scientific golden age, pioneering human rights, etc.). 3) Reduces human to matter (denies spirituality, free will, objective morality). 4) Double standard (criticizes islam, silent on secular violence: colonialism, world wars).',
    },
    points: 3,
    difficulty: 'hard',
    category: 'defis-modernes',
  },
  {
    id: 'aqeedah-moderne-008',
    question: {
      fr: 'Comment l\'Islam répond-il au relativisme moral ("Aucune vérité morale absolue")?',
      ar: 'كيف يرد الإسلام على النسبية الأخلاقية ("لا حقيقة أخلاقية مطلقة")؟',
      en: 'How does Islam respond to moral relativism ("No absolute moral truth")?',
    },
    options: [
      {
        id: 'a',
        text: {
          fr: 'Valeurs morales objectives révélées par Allah; bien/mal transcendent cultures (justice, honnêteté, compassion = universels)',
          ar: 'القيم الأخلاقية الموضوعية موحاة من الله؛ الخير/الشر يتجاوزان الثقافات (العدل، الصدق، الرحمة = عالميون)',
          en: 'Objective moral values revealed by Allah; good/evil transcend cultures (justice, honesty, compassion = universal)',
        },
      },
      { id: 'b', text: { fr: 'L\'Islam accepte le relativisme total', ar: 'الإسلام يقبل النسبية المطلقة', en: 'Islam accepts total relativism' } },
      { id: 'c', text: { fr: 'Chaque époque crée sa morale', ar: 'كل عصر يخلق أخلاقه', en: 'Each era creates its morality' } },
      { id: 'd', text: { fr: 'Pas de position islamique', ar: 'لا موقف إسلامي', en: 'No Islamic position' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le relativisme moral mène au chaos éthique (si tout est relatif, rien n\'est vraiment mal: esclavage, génocide deviennent "relatifs"?). L\'Islam affirme valeurs absolues révélées par Allah: Tawhid, justice (\'Adl), dignité humaine (Karama), véracité (Sidq), compassion (Rahma), etc. Ces valeurs ne changent pas selon époques/cultures (mais applications FIQH peuvent évoluer selon contexte: Maslaha, \'Urf). La morale objective nécessite Législateur moral transcendant (Allah).',
      ar: 'النسبية الأخلاقية تؤدي للفوضى الأخلاقية (إذا كان كل شيء نسبيًا، لا شيء سيئ حقاً: العبودية، الإبادة تصبح "نسبية"؟). والإسلام يؤكد القيم المطلقة الموحاة من الله: التوحيد، العدل، الكرامة الإنسانية، الصدق، الرحمة، إلخ. وهذه القيم لا تتغير بالعصور/الثقافات (لكن تطبيقات الفقه قد تتطور بالسياق: المصلحة، العرف). والأخلاق الموضوعية تحتاج مُشرّعًا أخلاقيًا متعاليًا (الله).',
      en: 'Moral relativism leads to ethical chaos (if everything relative, nothing truly wrong: slavery, genocide become "relative"?). Islam affirms absolute values revealed by Allah: Tawhid, justice (\'Adl), human dignity (Karama), truthfulness (Sidq), compassion (Rahma), etc. These values don\'t change by eras/cultures (but FIQH applications can evolve by context: Maslaha, \'Urf). Objective morality requires transcendent moral Legislator (Allah).',
    },
    points: 3,
    difficulty: 'hard',
    category: 'defis-modernes',
  },
];

// ============================================
// 2. EXTRÉMISME & TAKFIR (6 questions)
// ============================================

const extremismeTakfirQuestions: ExamQuestion[] = [
  {
    id: 'aqeedah-extremisme-001',
    question: {
      fr: 'Qu\'est-ce que le Takfir et quelles sont ses conditions strictes?',
      ar: 'ما هو التكفير وما شروطه الصارمة؟',
      en: 'What is Takfir and what are its strict conditions?',
    },
    options: [
      {
        id: 'a',
        text: {
          fr: 'Excommunication (déclarer musulman mécréant); conditions: 1) Acte/parole de Kufr MAJEUR clair, 2) Preuve établie, 3) Pas d\'ignorance/contrainte/interprétation, 4) Par savants qualifiés UNIQUEMENT',
          ar: 'التكفير (إخراج المسلم من الإسلام)؛ شروطه: 1) فعل/قول كفري كبير واضح، 2) ثبوت الدليل، 3) انتفاء الجهل/الإكراه/التأويل، 4) من العلماء المؤهلين فقط',
          en: 'Excommunication (declaring Muslim disbeliever); conditions: 1) Act/word of MAJOR clear Kufr, 2) Established proof, 3) No ignorance/coercion/interpretation, 4) By qualified scholars ONLY',
        },
      },
      { id: 'b', text: { fr: 'Déclarer mécréant tout pécheur', ar: 'تكفير كل عاصٍ', en: 'Declaring disbeliever every sinner' } },
      { id: 'c', text: { fr: 'Permis pour tout musulman', ar: 'مباح لكل مسلم', en: 'Permitted for every Muslim' } },
      { id: 'd', text: { fr: 'Interdit absolument', ar: 'حرام مطلقًا', en: 'Absolutely forbidden' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Takfir injustifié est péché MAJEUR. Hadith: "Si quelqu\'un traite son frère de Kafir, l\'un d\'eux le devient" (Bukhari). Takfir = domaine savants qualifiés, après vérification minutieuse. Conditions: 1) Acte/parole annulant islam (nier pilier fondamental, se moquer Allah/Prophète). 2) Preuve irréfutable. 3) Personne consciente (pas ignorante de règle), libre (pas forcée), sans interprétation valable (Shubha). 4) Décision par savants, pas individus. Grands péchés (Zina, alcool) ≠ Kufr automatique.',
      ar: 'التكفير الظالم إثم كبير. والحديث: "من قال لأخيه يا كافر فقد باء بها أحدهما" (البخاري). والتكفير = مجال العلماء المؤهلين، بعد تحقيق دقيق. والشروط: 1) فعل/قول ناقض للإسلام (إنكار ركن أساسي، السخرية من الله/الرسول). 2) دليل قاطع. 3) الشخص واعٍ (غير جاهل بالحكم)، حر (غير مُكره)، بلا تأويل صحيح (شبهة). 4) قرار من العلماء، لا الأفراد. والكبائر (الزنا، الخمر) ≠ كفر تلقائي.',
      en: 'Unjust Takfir is MAJOR sin. Hadith: "Whoever calls his brother Kafir, one of them becomes it" (Bukhari). Takfir = domain of qualified scholars, after thorough verification. Conditions: 1) Act/word nullifying islam (denying fundamental pillar, mocking Allah/Prophet). 2) Irrefutable proof. 3) Conscious person (not ignorant of ruling), free (not forced), without valid interpretation (Shubha). 4) Decision by scholars, not individuals. Major sins (Zina, alcohol) ≠ automatic Kufr.',
    },
    points: 3,
    difficulty: 'hard',
    category: 'extremisme-takfir',
  },
  // ... (continuer avec les 5 autres questions de cette catégorie)
];

// ... (continuer avec les 3 autres catégories: soufisme, sectes-theologie, eschatologie-detaillee)

export const nouveauxQuestionsAqeedah = [
  ...defisModernesQuestions,
  ...extremismeTakfirQuestions,
  // ... + 3 autres catégories à compléter
];
