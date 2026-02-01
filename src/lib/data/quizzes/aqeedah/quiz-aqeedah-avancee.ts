/**
 * Quiz Aqeedah - Niveau Avancé
 * 
 * Ce quiz couvre les sujets avancés de la croyance islamique :
 * Attributs divins, Qadar, Iman vs Kufr, sectes historiques
 * 
 * Niveau : Avancé
 * Questions : 15
 */

import { Quiz, Question } from '../types';

const questions: Question[] = [
  // --- Questions Faciles (5) ---
  {
    id: 'aqeedah-adv-q001',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Comment Ahl as-Sunna traitent-ils les Attributs d\'Allah (Sifat) ?',
      ar: 'كيف يتعامل أهل السنة مع صفات الله؟',
      en: 'How do Ahl as-Sunna treat Allah\'s Attributes (Sifat)?',
    },
    options: [
      { id: 'a', text: { fr: 'Ils les affirment sans les interpréter ni les assimiler à la création', ar: 'يُثبتونها بلا تأويل ولا تشبيه بالمخلوقات', en: 'They affirm them without interpreting or likening to creation' } },
      { id: 'b', text: { fr: 'Ils les nient complètement', ar: 'ينفونها كلياً', en: 'They deny them completely' } },
      { id: 'c', text: { fr: 'Ils les interprètent métaphoriquement toujours', ar: 'يؤولونها مجازياً دائماً', en: 'They always interpret them metaphorically' } },
      { id: 'd', text: { fr: 'Ils les assimilent aux créatures', ar: 'يشبهونها بالمخلوقات', en: 'They liken them to creatures' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Ahl as-Sunna suivent le Ithbat bila Takyif (affirmer sans modaliser) : on affirme les Sifat comme le Coran et la Sunna les mentionnent, sans tashbih (ressemblance) ni ta\'til (négation).',
      ar: 'أهل السنة يتبعون الإثبات بلا تكييف: يُثبتون الصفات كما وردت في القرآن والسنة، بلا تشبيه ولا تعطيل.',
      en: 'Ahl as-Sunna follow Ithbat bila Takyif (affirm without modalizing): affirming Sifat as Quran and Sunna mention them, without tashbih (resemblance) or ta\'til (negation).',
    },
    reference: {
      courseSlug: 'aqeedah-avancee',
      lessonId: '001-sifat',
    },
    points: 10,
    tags: ['aqeedah', 'sifat', 'ahl-sunna'],
  },
  {
    id: 'aqeedah-adv-q002',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Que signifie "Al-Qadar" (القدر) en \'Aqida ?',
      ar: 'ما معنى "القدر" في العقيدة؟',
      en: 'What does "Al-Qadar" mean in \'Aqida?',
    },
    options: [
      { id: 'a', text: { fr: 'La prédestination divine / le décret d\'Allah', ar: 'التقدير الإلهي / قضاء الله', en: 'Divine predestination / Allah\'s decree' } },
      { id: 'b', text: { fr: 'Le libre-arbitre absolu', ar: 'الإرادة الحرة المطلقة', en: 'Absolute free will' } },
      { id: 'c', text: { fr: 'Le hasard', ar: 'الصدفة', en: 'Chance' } },
      { id: 'd', text: { fr: 'L\'effort humain seul', ar: 'الجهد البشري فقط', en: 'Human effort alone' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Qadar comprend 4 niveaux : 1) Al-\'Ilm (Science d\'Allah), 2) Al-Kitaba (L\'Écriture dans la Lawh al-Mahfuz), 3) Al-Mashi\'a (Volonté divine), 4) Al-Khalq (Création de toute chose).',
      ar: 'القدر يشمل 4 مراتب: 1) العلم (علم الله)، 2) الكتابة (في اللوح المحفوظ)، 3) المشيئة (إرادة الله)، 4) الخلق (خلق كل شيء).',
      en: 'Qadar includes 4 levels: 1) Al-\'Ilm (Allah\'s Knowledge), 2) Al-Kitaba (Writing in Lawh al-Mahfuz), 3) Al-Mashi\'a (Divine Will), 4) Al-Khalq (Creation of everything).',
    },
    reference: {
      courseSlug: 'aqeedah-avancee',
      lessonId: '002-qadar',
    },
    points: 10,
    tags: ['aqeedah', 'qadar', 'predestination'],
  },
  {
    id: 'aqeedah-adv-q003',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'Le Takfir (déclarer quelqu\'un mécréant) est une affaire grave qui nécessite des preuves et des conditions précises.',
      ar: 'التكفير (الحكم على شخص بالكفر) أمر خطير يتطلب أدلة وشروطاً دقيقة.',
      en: 'Takfir (declaring someone a disbeliever) is a serious matter requiring proofs and precise conditions.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'Le Takfir nécessite : 1) preuve claire de kufr, 2) absence d\'excuses (jahala, ikrah, ta\'wil), 3) établissement de la preuve (iqamat al-hujja). Le Prophète ﷺ a mis en garde contre le takfir à la légère.',
      ar: 'التكفير يتطلب: 1) دليل واضح على الكفر، 2) انتفاء الموانع (جهل، إكراه، تأويل)، 3) إقامة الحجة. حذّر النبي ﷺ من التكفير المتسرع.',
      en: 'Takfir requires: 1) clear proof of kufr, 2) absence of excuses (ignorance, coercion, misinterpretation), 3) establishing proof (iqamat al-hujja). The Prophet ﷺ warned against hasty takfir.',
    },
    reference: {
      courseSlug: 'aqeedah-avancee',
      lessonId: '003-takfir',
    },
    points: 10,
    tags: ['aqeedah', 'takfir', 'kufr'],
  },
  {
    id: 'aqeedah-adv-q004',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quelle est la position d\'Ahl as-Sunna sur les Sahaba ?',
      ar: 'ما موقف أهل السنة من الصحابة؟',
      en: 'What is Ahl as-Sunna\'s position on the Sahaba?',
    },
    options: [
      { id: 'a', text: { fr: 'Tous sont justes (\'udul), on ne critique aucun d\'eux', ar: 'كلهم عدول، لا ننتقد أحداً منهم', en: 'All are just (\'udul), we don\'t criticize any of them' } },
      { id: 'b', text: { fr: 'Seuls les 4 califes sont respectés', ar: 'فقط الخلفاء الأربعة يُحترمون', en: 'Only the 4 caliphs are respected' } },
      { id: 'c', text: { fr: 'On peut les critiquer librement', ar: 'يمكن انتقادهم بحرية', en: 'They can be freely criticized' } },
      { id: 'd', text: { fr: 'Certains étaient hypocrites', ar: 'بعضهم كانوا منافقين', en: 'Some were hypocrites' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Tous les Sahaba sont justes (\'adalah as-Sahaba). On s\'abstient de parler de leurs conflits (fitna), on invoque Allah pour eux (radiyallahu \'anhum), et on croit qu\'ils sont les meilleurs après les prophètes.',
      ar: 'جميع الصحابة عدول (عدالة الصحابة). نتوقف عن الخوض في خلافاتهم (الفتنة)، نترضى عنهم، ونؤمن بأنهم أفضل البشر بعد الأنبياء.',
      en: 'All Sahaba are just (\'adalah as-Sahaba). We refrain from discussing their conflicts (fitna), invoke Allah for them (radiyallahu \'anhum), and believe they are the best after prophets.',
    },
    reference: {
      courseSlug: 'aqeedah-avancee',
      lessonId: '004-sahaba',
    },
    points: 10,
    tags: ['aqeedah', 'sahaba', 'adalah'],
  },
  {
    id: 'aqeedah-adv-q005',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Qu\'est-ce que le "Shirk" (الشرك) ?',
      ar: 'ما هو الشرك؟',
      en: 'What is "Shirk"?',
    },
    options: [
      { id: 'a', text: { fr: 'Associer quoi que ce soit à Allah dans Sa divinité, seigneurie ou Noms/Attributs', ar: 'إشراك شيء مع الله في ألوهيته أو ربوبيته أو أسمائه وصفاته', en: 'Associating anything with Allah in His divinity, lordship or Names/Attributes' } },
      { id: 'b', text: { fr: 'Ne pas prier', ar: 'عدم الصلاة', en: 'Not praying' } },
      { id: 'c', text: { fr: 'Un péché mineur', ar: 'ذنب صغير', en: 'A minor sin' } },
      { id: 'd', text: { fr: 'Douter de l\'existence d\'Allah', ar: 'الشك في وجود الله', en: 'Doubting Allah\'s existence' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Le Shirk est le plus grand péché, impardonnable s\'il n\'y a pas de repentir. Il y a le Shirk Akbar (majeur = sort de l\'Islam) et le Shirk Asghar (mineur = riya\', etc.). Types : dans l\'adoration, l\'invocation, l\'obéissance absolue.',
      ar: 'الشرك أعظم الذنوب، لا يُغفر بلا توبة. منه الشرك الأكبر (يُخرج من الإسلام) والأصغر (الرياء، إلخ). أنواعه: في العبادة، الدعاء، الطاعة المطلقة.',
      en: 'Shirk is the greatest sin, unforgivable without repentance. There\'s Shirk Akbar (major = exits Islam) and Shirk Asghar (minor = riya\', etc.). Types: in worship, invocation, absolute obedience.',
    },
    reference: {
      courseSlug: 'aqeedah-avancee',
      lessonId: '005-shirk',
    },
    points: 10,
    tags: ['aqeedah', 'shirk', 'tawhid'],
  },

  // --- Questions Moyennes (6) ---
  {
    id: 'aqeedah-adv-q006',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que les "Mutashabihat" (المتشابهات) concernant les Attributs divins ?',
      ar: 'ما هي "المتشابهات" المتعلقة بالصفات الإلهية؟',
      en: 'What are "Mutashabihat" concerning Divine Attributes?',
    },
    options: [
      { id: 'a', text: { fr: 'Textes dont le sens apparent peut prêter à confusion (Main, Visage, Établissement...)', ar: 'نصوص ظاهرها قد يوهم التشبيه (اليد، الوجه، الاستواء...)', en: 'Texts whose apparent meaning may cause confusion (Hand, Face, Establishment...)' } },
      { id: 'b', text: { fr: 'Textes abrogés', ar: 'نصوص منسوخة', en: 'Abrogated texts' } },
      { id: 'c', text: { fr: 'Versets sur le halal/haram', ar: 'آيات الحلال والحرام', en: 'Verses on halal/haram' } },
      { id: 'd', text: { fr: 'Histoires des prophètes', ar: 'قصص الأنبياء', en: 'Stories of prophets' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les Mutashabihat sont affirmées selon deux approches : 1) Tafwid (déléguer le sens à Allah tout en affirmant l\'attribut), 2) Ta\'wil (interpréter selon des preuves). Les Salaf préféraient le Tafwid.',
      ar: 'المتشابهات تُثبت بمنهجين: 1) التفويض (تفويض المعنى لله مع إثبات الصفة)، 2) التأويل (تفسيرها بأدلة). السلف فضّلوا التفويض.',
      en: 'Mutashabihat are affirmed through two approaches: 1) Tafwid (delegating meaning to Allah while affirming attribute), 2) Ta\'wil (interpreting with proofs). Salaf preferred Tafwid.',
    },
    reference: {
      courseSlug: 'aqeedah-avancee',
      lessonId: '001-sifat',
    },
    points: 15,
    tags: ['aqeedah', 'mutashabihat', 'sifat'],
  },
  {
    id: 'aqeedah-adv-q007',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelle était l\'erreur des Mu\'tazila concernant les Attributs divins ?',
      ar: 'ما خطأ المعتزلة في الصفات الإلهية؟',
      en: 'What was the Mu\'tazila\'s error regarding Divine Attributes?',
    },
    options: [
      { id: 'a', text: { fr: 'Ils niaient les Attributs pour "préserver" le Tawhid (Ta\'til)', ar: 'نفوا الصفات لـ"حماية" التوحيد (التعطيل)', en: 'They denied Attributes to "preserve" Tawhid (Ta\'til)' } },
      { id: 'b', text: { fr: 'Ils affirmaient trop d\'Attributs', ar: 'أثبتوا صفات كثيرة جداً', en: 'They affirmed too many Attributes' } },
      { id: 'c', text: { fr: 'Ils les assimilaient aux créatures', ar: 'شبّهوها بالمخلوقات', en: 'They likened them to creatures' } },
      { id: 'd', text: { fr: 'Ils suivaient les Salaf', ar: 'اتبعوا السلف', en: 'They followed the Salaf' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les Mu\'tazila niaient les Sifat par peur du Tashbih, disant qu\'Allah est "\'Alim bila \'Ilm" (Savant sans Science). Ils élevaient la raison au-dessus des textes. Imam Ahmad les réfuta avec force.',
      ar: 'المعتزلة نفوا الصفات خوفاً من التشبيه، قالوا إن الله "عالم بلا علم". رفعوا العقل فوق النصوص. ردّ عليهم الإمام أحمد بقوة.',
      en: 'Mu\'tazila denied Sifat fearing Tashbih, saying Allah is "\'Alim bila \'Ilm" (Knowing without Knowledge). They elevated reason above texts. Imam Ahmad refuted them strongly.',
    },
    reference: {
      courseSlug: 'aqeedah-avancee',
      lessonId: '006-firaq',
    },
    points: 15,
    tags: ['aqeedah', 'mutazila', 'sifat'],
  },
  {
    id: 'aqeedah-adv-q008',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelle est la position d\'Ahl as-Sunna sur le Qadar et les actions humaines ?',
      ar: 'ما موقف أهل السنة من القدر وأفعال العباد؟',
      en: 'What is Ahl as-Sunna\'s position on Qadar and human actions?',
    },
    options: [
      { id: 'a', text: { fr: 'Allah crée les actes, l\'homme a un choix réel (kasb) et est responsable', ar: 'الله يخلق الأفعال، والإنسان له اختيار حقيقي (كسب) ومسؤول', en: 'Allah creates acts, man has real choice (kasb) and is responsible' } },
      { id: 'b', text: { fr: 'L\'homme crée ses propres actes (Mu\'tazila)', ar: 'الإنسان يخلق أفعاله (المعتزلة)', en: 'Man creates his own acts (Mu\'tazila)' } },
      { id: 'c', text: { fr: 'L\'homme est totalement contraint (Jabriyya)', ar: 'الإنسان مجبور تماماً (الجبرية)', en: 'Man is totally compelled (Jabriyya)' } },
      { id: 'd', text: { fr: 'Le Qadar n\'existe pas', ar: 'القدر غير موجود', en: 'Qadar doesn\'t exist' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Position médiane : Allah crée tout (y compris nos actes), mais l\'homme a une volonté réelle (irada) et un choix (ikhtiyar). Ni Jabr (contrainte totale) ni Tafwid (délégation totale). L\'homme est responsable de son kasb.',
      ar: 'الموقف الوسط: الله يخلق كل شيء (بما في ذلك أفعالنا)، لكن للإنسان إرادة حقيقية واختيار. لا جبر ولا تفويض. الإنسان مسؤول عن كسبه.',
      en: 'Middle position: Allah creates everything (including our acts), but man has real will (irada) and choice (ikhtiyar). Neither Jabr (total compulsion) nor Tafwid (total delegation). Man is responsible for his kasb.',
    },
    reference: {
      courseSlug: 'aqeedah-avancee',
      lessonId: '002-qadar',
    },
    points: 15,
    tags: ['aqeedah', 'qadar', 'kasb'],
  },
  {
    id: 'aqeedah-adv-q009',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelle est la position d\'Ahl as-Sunna sur l\'auteur du grand péché (Murtakib al-Kabira) ?',
      ar: 'ما موقف أهل السنة من مرتكب الكبيرة؟',
      en: 'What is Ahl as-Sunna\'s position on the perpetrator of major sin (Murtakib al-Kabira)?',
    },
    options: [
      { id: 'a', text: { fr: 'Croyant désobéissant, sous la volonté d\'Allah (pardon ou châtiment)', ar: 'مؤمن عاصٍ، تحت مشيئة الله (مغفرة أو عذاب)', en: 'Disobedient believer, under Allah\'s will (forgiveness or punishment)' } },
      { id: 'b', text: { fr: 'Mécréant (Khawarij)', ar: 'كافر (الخوارج)', en: 'Disbeliever (Khawarij)' } },
      { id: 'c', text: { fr: 'Ni croyant ni mécréant - Manzila (Mu\'tazila)', ar: 'لا مؤمن ولا كافر - منزلة (المعتزلة)', en: 'Neither believer nor disbeliever - Manzila (Mu\'tazila)' } },
      { id: 'd', text: { fr: 'Parfait croyant (Murji\'a extrêmes)', ar: 'مؤمن كامل (المرجئة الغلاة)', en: 'Perfect believer (extreme Murji\'a)' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Ahl as-Sunna : le pécheur reste croyant (iman imparfait), ne sort pas de l\'Islam par les grands péchés (sauf kufr). Il est sous la Mashia d\'Allah : soit pardonné, soit puni puis au Paradis (jamais éternellement en Enfer).',
      ar: 'أهل السنة: العاصي يبقى مؤمناً (إيمان ناقص)، لا يخرج من الإسلام بالكبائر (إلا الكفر). تحت مشيئة الله: إما يُغفر له أو يُعذب ثم الجنة (لا يخلد في النار أبداً).',
      en: 'Ahl as-Sunna: sinner remains believer (imperfect iman), doesn\'t exit Islam by major sins (except kufr). Under Allah\'s will: either forgiven or punished then Paradise (never eternally in Hell).',
    },
    reference: {
      courseSlug: 'aqeedah-avancee',
      lessonId: '007-kabira',
    },
    points: 15,
    tags: ['aqeedah', 'kabira', 'iman'],
  },
  {
    id: 'aqeedah-adv-q010',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que "Al-Wala\' wa al-Bara\'" (الولاء والبراء) ?',
      ar: 'ما هو "الولاء والبراء"؟',
      en: 'What is "Al-Wala\' wa al-Bara\'"?',
    },
    options: [
      { id: 'a', text: { fr: 'Loyauté envers les croyants et désaveu du kufr/shirk', ar: 'الموالاة للمؤمنين والتبرؤ من الكفر/الشرك', en: 'Loyalty to believers and disavowal of kufr/shirk' } },
      { id: 'b', text: { fr: 'Haine de tous les non-musulmans', ar: 'كراهية جميع غير المسلمين', en: 'Hatred of all non-Muslims' } },
      { id: 'c', text: { fr: 'Alliance politique uniquement', ar: 'تحالف سياسي فقط', en: 'Political alliance only' } },
      { id: 'd', text: { fr: 'Terme sans signification', ar: 'مصطلح بلا معنى', en: 'Meaningless term' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Al-Wala\' : amour, soutien, alliance avec les croyants. Al-Bara\' : désaveu du kufr et shirk (pas des personnes en soi). Cela n\'empêche pas la justice, la bonté et les bonnes relations avec les non-musulmans (birr, qist).',
      ar: 'الولاء: حب، نصرة، تحالف مع المؤمنين. البراء: التبرؤ من الكفر والشرك (لا من الأشخاص ذاتهم). لا يمنع هذا العدل واللطف والعلاقات الحسنة مع غير المسلمين (البر، القسط).',
      en: 'Al-Wala\': love, support, alliance with believers. Al-Bara\': disavowal of kufr and shirk (not people themselves). This doesn\'t prevent justice, kindness and good relations with non-Muslims (birr, qist).',
    },
    reference: {
      courseSlug: 'aqeedah-avancee',
      lessonId: '008-wala-bara',
    },
    points: 15,
    tags: ['aqeedah', 'wala', 'bara'],
  },
  {
    id: 'aqeedah-adv-q011',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Que signifie "La ilaha illa Allah" (لا إله إلا الله) dans son sens complet ?',
      ar: 'ما معنى "لا إله إلا الله" بشكل كامل؟',
      en: 'What does "La ilaha illa Allah" mean in its complete sense?',
    },
    options: [
      { id: 'a', text: { fr: 'Aucune divinité digne d\'adoration (ma\'bud bi-haqq) sauf Allah', ar: 'لا معبود بحق إلا الله', en: 'No deity worthy of worship (ma\'bud bi-haqq) except Allah' } },
      { id: 'b', text: { fr: 'Il n\'y a pas de créateur sauf Allah', ar: 'لا خالق إلا الله', en: 'There is no creator except Allah' } },
      { id: 'c', text: { fr: 'Allah existe', ar: 'الله موجود', en: 'Allah exists' } },
      { id: 'd', text: { fr: 'Phrase sans implications', ar: 'جملة بلا دلالات', en: 'Phrase without implications' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'La Kalima contient un Nafy (négation) et un Ithbat (affirmation) : Nafy de toute divinité fausse + Ithbat d\'Allah comme seul Ma\'bud (adoré). Elle implique Tawhid al-Uluhiyya, pas seulement Rububiyya.',
      ar: 'الكلمة تحتوي على نفي وإثبات: نفي كل معبود باطل + إثبات الله كمعبود وحيد. تستلزم توحيد الألوهية، لا الربوبية فقط.',
      en: 'The Kalima contains a Nafy (negation) and Ithbat (affirmation): Nafy of all false deities + Ithbat of Allah as sole Ma\'bud (worshipped). It implies Tawhid al-Uluhiyya, not just Rububiyya.',
    },
    reference: {
      courseSlug: 'aqeedah-avancee',
      lessonId: '009-kalima',
    },
    points: 15,
    tags: ['aqeedah', 'shahada', 'tawhid'],
  },

  // --- Questions Difficiles (4) ---
  {
    id: 'aqeedah-adv-q012',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelles sont les 7 conditions de validité de "La ilaha illa Allah" ?',
      ar: 'ما شروط "لا إله إلا الله" السبعة؟',
      en: 'What are the 7 conditions of validity of "La ilaha illa Allah"?',
    },
    options: [
      { id: 'a', text: { fr: 'Ilm, Yaqin, Qabul, Inqiyad, Sidq, Ikhlas, Mahabba', ar: 'العلم، اليقين، القبول، الانقياد، الصدق، الإخلاص، المحبة', en: 'Ilm, Yaqin, Qabul, Inqiyad, Sidq, Ikhlas, Mahabba' } },
      { id: 'b', text: { fr: '5 piliers de l\'Islam', ar: 'أركان الإسلام الخمسة', en: '5 pillars of Islam' } },
      { id: 'c', text: { fr: '6 piliers de l\'Iman', ar: 'أركان الإيمان الستة', en: '6 pillars of Iman' } },
      { id: 'd', text: { fr: 'Pas de conditions', ar: 'لا شروط', en: 'No conditions' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: '1) Al-\'Ilm (connaissance), 2) Al-Yaqin (certitude), 3) Al-Qabul (acceptation), 4) Al-Inqiyad (soumission), 5) As-Sidq (véracité), 6) Al-Ikhlas (sincérité), 7) Al-Mahabba (amour). L\'absence d\'une condition invalide la Shahada.',
      ar: '1) العلم، 2) اليقين، 3) القبول، 4) الانقياد، 5) الصدق، 6) الإخلاص، 7) المحبة. غياب أي شرط يُبطل الشهادة.',
      en: '1) Al-\'Ilm (knowledge), 2) Al-Yaqin (certainty), 3) Al-Qabul (acceptance), 4) Al-Inqiyad (submission), 5) As-Sidq (truthfulness), 6) Al-Ikhlas (sincerity), 7) Al-Mahabba (love). Missing any condition invalidates Shahada.',
    },
    reference: {
      courseSlug: 'aqeedah-avancee',
      lessonId: '009-kalima',
    },
    points: 20,
    tags: ['aqeedah', 'shahada', 'shurut'],
  },
  {
    id: 'aqeedah-adv-q013',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle est la différence entre Ash\'ariyya et l\'approche Athariyya/Salafiyya ?',
      ar: 'ما الفرق بين الأشعرية والمنهج الأثري/السلفي؟',
      en: 'What is the difference between Ash\'ariyya and the Athari/Salafi approach?',
    },
    options: [
      { id: 'a', text: { fr: 'Ash\'ari : utilise le kalam, limite les Sifat à 7. Athari : suit les textes sans ta\'wil systématique', ar: 'الأشعري: يستخدم الكلام، يحصر الصفات في 7. الأثري: يتبع النصوص بلا تأويل ممنهج', en: 'Ash\'ari: uses kalam, limits Sifat to 7. Athari: follows texts without systematic ta\'wil' } },
      { id: 'b', text: { fr: 'Aucune différence', ar: 'لا فرق', en: 'No difference' } },
      { id: 'c', text: { fr: 'Ash\'ari est hors de l\'Islam', ar: 'الأشعري خارج الإسلام', en: 'Ash\'ari is outside Islam' } },
      { id: 'd', text: { fr: 'Athari nie les Attributs', ar: 'الأثري ينفي الصفات', en: 'Athari denies Attributes' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Ash\'ariyya : affirme 7 Sifat (Hayat, \'Ilm, Qudra, Irada, Sam\', Basar, Kalam), fait ta\'wil des autres. Athariyya : affirme toutes les Sifat comme textes, sans ta\'wil ni tashbih. Les deux sont dans Ahl as-Sunna au sens large.',
      ar: 'الأشعرية: تُثبت 7 صفات (الحياة، العلم، القدرة، الإرادة، السمع، البصر، الكلام)، وتُؤوّل غيرها. الأثرية: تُثبت جميع الصفات كالنصوص، بلا تأويل ولا تشبيه. كلاهما من أهل السنة بالمعنى الواسع.',
      en: 'Ash\'ariyya: affirms 7 Sifat (Life, Knowledge, Power, Will, Hearing, Seeing, Speech), does ta\'wil of others. Athariyya: affirms all Sifat as texts, without ta\'wil or tashbih. Both are in Ahl as-Sunna broadly.',
    },
    reference: {
      courseSlug: 'aqeedah-avancee',
      lessonId: '006-firaq',
    },
    points: 20,
    tags: ['aqeedah', 'ashari', 'athari'],
  },
  {
    id: 'aqeedah-adv-q014',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle est la différence entre "Kufr Akbar" et "Kufr Asghar" ?',
      ar: 'ما الفرق بين "الكفر الأكبر" و"الكفر الأصغر"؟',
      en: 'What is the difference between "Kufr Akbar" and "Kufr Asghar"?',
    },
    options: [
      { id: 'a', text: { fr: 'Akbar = sort de l\'Islam. Asghar = péché grave mais ne fait pas sortir', ar: 'الأكبر = خروج من الإسلام. الأصغر = ذنب كبير لكن لا يُخرج', en: 'Akbar = exits Islam. Asghar = major sin but doesn\'t exit' } },
      { id: 'b', text: { fr: 'Ils sont identiques', ar: 'متماثلان', en: 'They are identical' } },
      { id: 'c', text: { fr: 'Asghar est pire', ar: 'الأصغر أسوأ', en: 'Asghar is worse' } },
      { id: 'd', text: { fr: 'Akbar concerne les enfants', ar: 'الأكبر يخص الأطفال', en: 'Akbar concerns children' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Kufr Akbar : apostasie, shirk, nier les fondements. Kufr Asghar : ingratitude, combattre un musulman (hadith), etc. Ex : "Insulter son lignage est du kufr" = Asghar. Seul le contexte détermine.',
      ar: 'الكفر الأكبر: الردة، الشرك، إنكار الأصول. الأصغر: كفران النعمة، قتال المسلم (حديث)، إلخ. مثال: "سباب المسلم فسوق وقتاله كفر" = أصغر. السياق يحدد.',
      en: 'Kufr Akbar: apostasy, shirk, denying fundamentals. Kufr Asghar: ingratitude, fighting a Muslim (hadith), etc. Ex: "Insulting one\'s lineage is kufr" = Asghar. Only context determines.',
    },
    reference: {
      courseSlug: 'aqeedah-avancee',
      lessonId: '010-kufr',
    },
    points: 20,
    tags: ['aqeedah', 'kufr', 'takfir'],
  },
  {
    id: 'aqeedah-adv-q015',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qu\'est-ce que "Al-Irja\'" (الإرجاء) et pourquoi est-ce problématique ?',
      ar: 'ما هو "الإرجاء" ولماذا يُعتبر إشكالياً؟',
      en: 'What is "Al-Irja\'" and why is it problematic?',
    },
    options: [
      { id: 'a', text: { fr: 'Dire que les actes ne font pas partie de l\'Iman, ce qui mène à négliger les œuvres', ar: 'القول بأن الأعمال ليست من الإيمان، مما يؤدي لإهمال العمل', en: 'Saying acts aren\'t part of Iman, leading to neglecting deeds' } },
      { id: 'b', text: { fr: 'Être trop strict', ar: 'التشدد المفرط', en: 'Being too strict' } },
      { id: 'c', text: { fr: 'Nier le Qadar', ar: 'إنكار القدر', en: 'Denying Qadar' } },
      { id: 'd', text: { fr: 'Adorer les saints', ar: 'عبادة الأولياء', en: 'Worshipping saints' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'Les Murji\'a disaient : l\'Iman = seulement croyance du cœur (ou + parole), les actes sont séparés. Conséquence : "la foi de Jibril = foi du pécheur". Ahl as-Sunna : l\'Iman = qawl + \'amal + i\'tiqad, augmente et diminue.',
      ar: 'المرجئة قالوا: الإيمان = التصديق فقط (أو + القول)، الأعمال منفصلة. النتيجة: "إيمان جبريل = إيمان العاصي". أهل السنة: الإيمان = قول + عمل + اعتقاد، يزيد وينقص.',
      en: 'Murji\'a said: Iman = only heart\'s belief (or + speech), deeds are separate. Consequence: "Jibril\'s faith = sinner\'s faith". Ahl as-Sunna: Iman = qawl + \'amal + i\'tiqad, increases and decreases.',
    },
    reference: {
      courseSlug: 'aqeedah-avancee',
      lessonId: '006-firaq',
    },
    points: 20,
    tags: ['aqeedah', 'murjia', 'iman'],
  },
];

// ============================================
// Export du Quiz
// ============================================

export const quizAqeedahAvancee: Quiz = {
  id: 'quiz-aqeedah-avancee',
  type: 'module',
  courseSlug: 'aqeedah-avancee',
  title: {
    fr: 'Quiz : Aqeedah Avancée',
    ar: 'اختبار: العقيدة المتقدمة',
    en: 'Quiz: Advanced Aqeedah',
  },
  description: {
    fr: 'Testez vos connaissances avancées en croyance islamique : Sifat, Qadar, sectes historiques.',
    ar: 'اختبر معلوماتك المتقدمة في العقيدة الإسلامية: الصفات، القدر، الفرق التاريخية.',
    en: 'Test your advanced knowledge of Islamic creed: Sifat, Qadar, historical sects.',
  },
  instructions: {
    fr: 'Approfondissez votre compréhension de la \'Aqida selon Ahl as-Sunna.',
    ar: 'عمّق فهمك للعقيدة وفق منهج أهل السنة.',
    en: 'Deepen your understanding of \'Aqida according to Ahl as-Sunna.',
  },
  questions,
  duration: 15,
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

export default quizAqeedahAvancee;
