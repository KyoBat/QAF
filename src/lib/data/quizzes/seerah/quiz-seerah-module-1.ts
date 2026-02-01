/**
 * Quiz Seerah - Module 1 : De la naissance à la Révélation
 * 
 * Ce quiz couvre la période mecquoise avant la prophétie :
 * naissance, enfance, jeunesse du Prophète ﷺ
 * 
 * Niveau : Débutant à Intermédiaire
 * Questions : 15
 */

import { Quiz, Question } from '../types';

const questions: Question[] = [
  // --- Questions Faciles (5) ---
  {
    id: 'seerah1-q001',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'En quelle année le Prophète ﷺ est-il né ?',
      ar: 'في أي عام وُلد النبي ﷺ؟',
      en: 'In which year was the Prophet ﷺ born?',
    },
    options: [
      { id: 'a', text: { fr: '550 ap. J.-C.', ar: '550 م', en: '550 CE' } },
      { id: 'b', text: { fr: '570 ap. J.-C. (Année de l\'Éléphant)', ar: '570 م (عام الفيل)', en: '570 CE (Year of the Elephant)' } },
      { id: 'c', text: { fr: '590 ap. J.-C.', ar: '590 م', en: '590 CE' } },
      { id: 'd', text: { fr: '600 ap. J.-C.', ar: '600 م', en: '600 CE' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ est né l\'Année de l\'Éléphant (570 ap. J.-C.), l\'année où Abraha a tenté d\'attaquer la Ka\'ba avec des éléphants. Allah a détruit son armée avec des oiseaux (Sourate Al-Fil).',
      ar: 'وُلد النبي ﷺ عام الفيل (570 م)، العام الذي حاول فيه أبرهة مهاجمة الكعبة بالفيلة. أهلك الله جيشه بالطير (سورة الفيل).',
      en: 'The Prophet ﷺ was born in the Year of the Elephant (570 CE), the year Abraha attempted to attack the Ka\'ba with elephants. Allah destroyed his army with birds (Surah Al-Fil).',
    },
    reference: {
      courseSlug: 'seerah-module-1',
      lessonId: '001-naissance',
    },
    points: 10,
    tags: ['seerah', 'naissance', 'elephant'],
  },
  {
    id: 'seerah1-q002',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quel était le nom du père du Prophète ﷺ ?',
      ar: 'ما اسم والد النبي ﷺ؟',
      en: 'What was the name of the Prophet\'s ﷺ father?',
    },
    options: [
      { id: 'a', text: { fr: 'Abu Talib', ar: 'أبو طالب', en: 'Abu Talib' } },
      { id: 'b', text: { fr: 'Abdullah', ar: 'عبد الله', en: 'Abdullah' } },
      { id: 'c', text: { fr: 'Abd al-Muttalib', ar: 'عبد المطلب', en: 'Abd al-Muttalib' } },
      { id: 'd', text: { fr: 'Hamza', ar: 'حمزة', en: 'Hamza' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le père du Prophète ﷺ était Abdullah ibn Abd al-Muttalib. Il est décédé avant la naissance du Prophète ﷺ, faisant de lui un orphelin de naissance.',
      ar: 'كان والد النبي ﷺ عبد الله بن عبد المطلب. توفي قبل ولادة النبي ﷺ، مما جعله يتيماً منذ ولادته.',
      en: 'The Prophet\'s ﷺ father was Abdullah ibn Abd al-Muttalib. He died before the Prophet\'s ﷺ birth, making him an orphan from birth.',
    },
    reference: {
      courseSlug: 'seerah-module-1',
      lessonId: '001-naissance',
    },
    points: 10,
    tags: ['seerah', 'famille', 'abdullah'],
  },
  {
    id: 'seerah1-q003',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Qui était la nourrice bédouine du Prophète ﷺ ?',
      ar: 'من كانت مرضعة النبي ﷺ البدوية؟',
      en: 'Who was the Prophet\'s ﷺ Bedouin wet nurse?',
    },
    options: [
      { id: 'a', text: { fr: 'Khadija', ar: 'خديجة', en: 'Khadija' } },
      { id: 'b', text: { fr: 'Halima as-Sa\'diyya', ar: 'حليمة السعدية', en: 'Halima as-Sa\'diyya' } },
      { id: 'c', text: { fr: 'Fatima', ar: 'فاطمة', en: 'Fatima' } },
      { id: 'd', text: { fr: 'Amina', ar: 'آمنة', en: 'Amina' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Halima as-Sa\'diyya était la nourrice bédouine qui a allaité et élevé le Prophète ﷺ dans le désert. C\'est chez elle qu\'a eu lieu l\'incident de l\'ouverture de la poitrine (shaqq as-sadr).',
      ar: 'حليمة السعدية كانت المرضعة البدوية التي أرضعت وربت النبي ﷺ في الصحراء. عندها حدثت حادثة شق الصدر.',
      en: 'Halima as-Sa\'diyya was the Bedouin wet nurse who nursed and raised the Prophet ﷺ in the desert. It was with her that the chest-opening incident (shaqq as-sadr) occurred.',
    },
    reference: {
      courseSlug: 'seerah-module-1',
      lessonId: '002-enfance',
    },
    points: 10,
    tags: ['seerah', 'halima', 'enfance'],
  },
  {
    id: 'seerah1-q004',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'À quel âge la mère du Prophète ﷺ, Amina, est-elle décédée ?',
      ar: 'في أي عمر توفيت أم النبي ﷺ آمنة؟',
      en: 'At what age did the Prophet\'s ﷺ mother, Amina, die?',
    },
    options: [
      { id: 'a', text: { fr: 'À sa naissance', ar: 'عند ولادته', en: 'At his birth' } },
      { id: 'b', text: { fr: '6 ans', ar: '6 سنوات', en: '6 years old' } },
      { id: 'c', text: { fr: '10 ans', ar: '10 سنوات', en: '10 years old' } },
      { id: 'd', text: { fr: '12 ans', ar: '12 سنة', en: '12 years old' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Amina est décédée quand le Prophète ﷺ avait 6 ans, sur le chemin du retour de Médine (où elle avait visité la famille de son mari). Il a été confié à son grand-père Abd al-Muttalib.',
      ar: 'توفيت آمنة عندما كان النبي ﷺ في السادسة من عمره، في طريق العودة من المدينة (حيث زارت عائلة زوجها). كُفل جده عبد المطلب.',
      en: 'Amina died when the Prophet ﷺ was 6 years old, on the return journey from Medina (where she had visited her husband\'s family). He was then placed under his grandfather Abd al-Muttalib.',
    },
    reference: {
      courseSlug: 'seerah-module-1',
      lessonId: '002-enfance',
    },
    points: 10,
    tags: ['seerah', 'amina', 'orphelin'],
  },
  {
    id: 'seerah1-q005',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'Le Prophète ﷺ était surnommé "Al-Amin" (Le Digne de Confiance) avant même la Révélation.',
      ar: 'النبي ﷺ كان يُلقب بـ"الأمين" حتى قبل البعثة.',
      en: 'The Prophet ﷺ was nicknamed "Al-Amin" (The Trustworthy) even before the Revelation.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'Même avant la prophétie, Muhammad ﷺ était connu pour son honnêteté et sa fiabilité. Les Qurayshites lui confiaient leurs biens. Ce surnom "Al-Amin" témoigne de son caractère noble dès la jeunesse.',
      ar: 'حتى قبل النبوة، كان محمد ﷺ معروفاً بصدقه وأمانته. كان قريش يودعون عنده أماناتهم. لقب "الأمين" يشهد على أخلاقه النبيلة منذ الشباب.',
      en: 'Even before prophethood, Muhammad ﷺ was known for his honesty and reliability. The Quraysh would entrust him with their valuables. The nickname "Al-Amin" testifies to his noble character from youth.',
    },
    reference: {
      courseSlug: 'seerah-module-1',
      lessonId: '003-jeunesse',
    },
    points: 10,
    tags: ['seerah', 'amin', 'caractère'],
  },

  // --- Questions Moyennes (6) ---
  {
    id: 'seerah1-q006',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qui a pris soin du Prophète ﷺ après la mort de son grand-père Abd al-Muttalib ?',
      ar: 'من تولى رعاية النبي ﷺ بعد وفاة جده عبد المطلب؟',
      en: 'Who took care of the Prophet ﷺ after his grandfather Abd al-Muttalib\'s death?',
    },
    options: [
      { id: 'a', text: { fr: 'Son oncle Abu Lahab', ar: 'عمه أبو لهب', en: 'His uncle Abu Lahab' } },
      { id: 'b', text: { fr: 'Son oncle Abu Talib', ar: 'عمه أبو طالب', en: 'His uncle Abu Talib' } },
      { id: 'c', text: { fr: 'Son oncle Hamza', ar: 'عمه حمزة', en: 'His uncle Hamza' } },
      { id: 'd', text: { fr: 'Un étranger', ar: 'غريب', en: 'A stranger' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Après la mort d\'Abd al-Muttalib (quand le Prophète ﷺ avait 8 ans), son oncle Abu Talib l\'a pris en charge. Abu Talib l\'a protégé tout au long de sa vie, même après le début de la prophétie.',
      ar: 'بعد وفاة عبد المطلب (عندما كان النبي ﷺ في الثامنة)، تولى عمه أبو طالب رعايته. حماه أبو طالب طوال حياته، حتى بعد بداية النبوة.',
      en: 'After Abd al-Muttalib\'s death (when the Prophet ﷺ was 8), his uncle Abu Talib took charge. Abu Talib protected him throughout his life, even after the start of prophethood.',
    },
    reference: {
      courseSlug: 'seerah-module-1',
      lessonId: '002-enfance',
    },
    points: 15,
    tags: ['seerah', 'abu-talib', 'tutelle'],
  },
  {
    id: 'seerah1-q007',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quel moine chrétien a reconnu les signes de la prophétie chez le jeune Muhammad ﷺ ?',
      ar: 'أي راهب مسيحي تعرف على علامات النبوة في الفتى محمد ﷺ؟',
      en: 'Which Christian monk recognized the signs of prophethood in the young Muhammad ﷺ?',
    },
    options: [
      { id: 'a', text: { fr: 'Waraqa ibn Nawfal', ar: 'ورقة بن نوفل', en: 'Waraqa ibn Nawfal' } },
      { id: 'b', text: { fr: 'Bahira', ar: 'بحيرى', en: 'Bahira' } },
      { id: 'c', text: { fr: 'Salman al-Farisi', ar: 'سلمان الفارسي', en: 'Salman al-Farisi' } },
      { id: 'd', text: { fr: 'An-Najashi', ar: 'النجاشي', en: 'An-Najashi' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le moine Bahira, lors d\'un voyage commercial en Syrie avec Abu Talib, a reconnu les signes prophétiques chez Muhammad ﷺ (environ 12 ans). Il a conseillé à Abu Talib de le protéger.',
      ar: 'الراهب بحيرى، خلال رحلة تجارية إلى الشام مع أبي طالب، تعرف على علامات النبوة في محمد ﷺ (حوالي 12 سنة). نصح أبا طالب بحمايته.',
      en: 'The monk Bahira, during a trading journey to Syria with Abu Talib, recognized prophetic signs in Muhammad ﷺ (around 12 years old). He advised Abu Talib to protect him.',
    },
    reference: {
      courseSlug: 'seerah-module-1',
      lessonId: '003-jeunesse',
    },
    points: 15,
    tags: ['seerah', 'bahira', 'signes'],
  },
  {
    id: 'seerah1-q008',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quel était le métier du Prophète ﷺ dans sa jeunesse ?',
      ar: 'ما كانت مهنة النبي ﷺ في شبابه؟',
      en: 'What was the Prophet\'s ﷺ profession in his youth?',
    },
    options: [
      { id: 'a', text: { fr: 'Agriculteur', ar: 'مزارع', en: 'Farmer' } },
      { id: 'b', text: { fr: 'Forgeron', ar: 'حداد', en: 'Blacksmith' } },
      { id: 'c', text: { fr: 'Berger puis commerçant', ar: 'راعٍ ثم تاجر', en: 'Shepherd then merchant' } },
      { id: 'd', text: { fr: 'Scribe', ar: 'كاتب', en: 'Scribe' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Le Prophète ﷺ a d\'abord été berger (comme tous les prophètes), puis il est devenu commerçant, gérant les caravanes de Khadija avec grande honnêteté et succès.',
      ar: 'كان النبي ﷺ أولاً راعياً (مثل كل الأنبياء)، ثم أصبح تاجراً، يدير قوافل خديجة بأمانة كبيرة ونجاح.',
      en: 'The Prophet ﷺ was first a shepherd (like all prophets), then became a merchant, managing Khadija\'s caravans with great honesty and success.',
    },
    reference: {
      courseSlug: 'seerah-module-1',
      lessonId: '003-jeunesse',
    },
    points: 15,
    tags: ['seerah', 'métier', 'berger'],
  },
  {
    id: 'seerah1-q009',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'À quel âge le Prophète ﷺ a-t-il épousé Khadija ?',
      ar: 'في أي عمر تزوج النبي ﷺ خديجة؟',
      en: 'At what age did the Prophet ﷺ marry Khadija?',
    },
    options: [
      { id: 'a', text: { fr: '20 ans', ar: '20 سنة', en: '20 years old' } },
      { id: 'b', text: { fr: '25 ans', ar: '25 سنة', en: '25 years old' } },
      { id: 'c', text: { fr: '30 ans', ar: '30 سنة', en: '30 years old' } },
      { id: 'd', text: { fr: '40 ans', ar: '40 سنة', en: '40 years old' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Prophète ﷺ a épousé Khadija à 25 ans. Elle avait environ 40 ans et était une femme d\'affaires prospère. Elle fut sa première épouse et la première à croire en sa prophétie.',
      ar: 'تزوج النبي ﷺ خديجة في سن 25. كان عمرها حوالي 40 سنة وكانت سيدة أعمال ناجحة. كانت زوجته الأولى وأول من آمن به.',
      en: 'The Prophet ﷺ married Khadija at 25. She was around 40 and was a successful businesswoman. She was his first wife and the first to believe in his prophethood.',
    },
    reference: {
      courseSlug: 'seerah-module-1',
      lessonId: '004-mariage-khadija',
    },
    points: 15,
    tags: ['seerah', 'khadija', 'mariage'],
  },
  {
    id: 'seerah1-q010',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qu\'est-ce que le "Hilf al-Fudul" (Pacte des Vertueux) ?',
      ar: 'ما هو "حلف الفضول"؟',
      en: 'What was the "Hilf al-Fudul" (Pact of the Virtuous)?',
    },
    options: [
      { id: 'a', text: { fr: 'Une alliance commerciale', ar: 'تحالف تجاري', en: 'A commercial alliance' } },
      { id: 'b', text: { fr: 'Un pacte pour défendre les opprimés à La Mecque', ar: 'ميثاق لنصرة المظلومين في مكة', en: 'A pact to defend the oppressed in Mecca' } },
      { id: 'c', text: { fr: 'Un traité de paix avec Médine', ar: 'معاهدة سلام مع المدينة', en: 'A peace treaty with Medina' } },
      { id: 'd', text: { fr: 'Une alliance militaire', ar: 'تحالف عسكري', en: 'A military alliance' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Hilf al-Fudul était un pacte formé à La Mecque pour défendre les opprimés et rendre justice. Le Prophète ﷺ y a participé étant jeune et l\'a toujours valorisé, même après la prophétie.',
      ar: 'حلف الفضول كان ميثاقاً أُسس في مكة لنصرة المظلومين وإقامة العدل. شارك فيه النبي ﷺ شاباً وظل يفتخر به حتى بعد النبوة.',
      en: 'Hilf al-Fudul was a pact formed in Mecca to defend the oppressed and establish justice. The Prophet ﷺ participated in it as a young man and always valued it, even after prophethood.',
    },
    reference: {
      courseSlug: 'seerah-module-1',
      lessonId: '003-jeunesse',
    },
    points: 15,
    tags: ['seerah', 'hilf-fudul', 'justice'],
  },
  {
    id: 'seerah1-q011',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quel rôle le Prophète ﷺ a-t-il joué dans la reconstruction de la Ka\'ba ?',
      ar: 'ما الدور الذي لعبه النبي ﷺ في إعادة بناء الكعبة؟',
      en: 'What role did the Prophet ﷺ play in the reconstruction of the Ka\'ba?',
    },
    options: [
      { id: 'a', text: { fr: 'Il a financé la reconstruction', ar: 'موّل إعادة البناء', en: 'He financed the reconstruction' } },
      { id: 'b', text: { fr: 'Il a résolu le conflit sur le placement de la Pierre Noire', ar: 'حل النزاع حول وضع الحجر الأسود', en: 'He resolved the conflict over placing the Black Stone' } },
      { id: 'c', text: { fr: 'Il a refusé de participer', ar: 'رفض المشاركة', en: 'He refused to participate' } },
      { id: 'd', text: { fr: 'Il a dessiné les plans', ar: 'رسم المخططات', en: 'He drew the plans' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Lors de la reconstruction de la Ka\'ba (environ 35 ans), les tribus se disputaient l\'honneur de replacer la Pierre Noire. Le Prophète ﷺ a proposé de la placer sur un tissu porté par toutes les tribus, évitant un conflit sanglant.',
      ar: 'عند إعادة بناء الكعبة (حوالي 35 سنة)، تنازعت القبائل على شرف وضع الحجر الأسود. اقترح النبي ﷺ وضعه على قماش تحمله كل القبائل، فتجنب صراعاً دموياً.',
      en: 'During the Ka\'ba reconstruction (around age 35), tribes disputed the honor of replacing the Black Stone. The Prophet ﷺ proposed placing it on a cloth carried by all tribes, avoiding a bloody conflict.',
    },
    reference: {
      courseSlug: 'seerah-module-1',
      lessonId: '005-pierre-noire',
    },
    points: 15,
    tags: ['seerah', 'kaaba', 'pierre-noire'],
  },

  // --- Questions Difficiles (4) ---
  {
    id: 'seerah1-q012',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qu\'est-ce que l\'incident de "Shaqq as-Sadr" (ouverture de la poitrine) ?',
      ar: 'ما هي حادثة "شق الصدر"؟',
      en: 'What was the "Shaqq as-Sadr" (chest opening) incident?',
    },
    options: [
      { id: 'a', text: { fr: 'Une opération chirurgicale normale', ar: 'عملية جراحية عادية', en: 'A normal surgical operation' } },
      { id: 'b', text: { fr: 'Des anges ont ouvert sa poitrine et purifié son cœur', ar: 'فتح الملائكة صدره وطهّروا قلبه', en: 'Angels opened his chest and purified his heart' } },
      { id: 'c', text: { fr: 'Une maladie d\'enfance', ar: 'مرض في الطفولة', en: 'A childhood illness' } },
      { id: 'd', text: { fr: 'Une métaphore poétique', ar: 'استعارة شعرية', en: 'A poetic metaphor' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Chez Halima, les anges Jibril ont ouvert la poitrine du jeune Muhammad ﷺ, extrait son cœur, ôté la part du Shaytan, et l\'ont lavé avec l\'eau de Zamzam. Cet événement s\'est répété avant l\'Isra\' et Mi\'raj.',
      ar: 'عند حليمة، فتح جبريل والملائكة صدر الفتى محمد ﷺ، أخرجوا قلبه، نزعوا حظ الشيطان، وغسلوه بماء زمزم. تكرر هذا قبل الإسراء والمعراج.',
      en: 'At Halima\'s, angels including Jibril opened young Muhammad\'s ﷺ chest, extracted his heart, removed Satan\'s portion, and washed it with Zamzam water. This event was repeated before Isra\' and Mi\'raj.',
    },
    reference: {
      courseSlug: 'seerah-module-1',
      lessonId: '002-enfance',
    },
    points: 20,
    tags: ['seerah', 'shaqq-sadr', 'miracle'],
  },
  {
    id: 'seerah1-q013',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Pourquoi les Quraysh envoyaient-ils leurs enfants chez les Bédouins ?',
      ar: 'لماذا كان قريش يرسلون أطفالهم إلى البادية؟',
      en: 'Why did the Quraysh send their children to the Bedouins?',
    },
    options: [
      { id: 'a', text: { fr: 'Par manque de moyens', ar: 'لقلة الإمكانيات', en: 'Due to lack of means' } },
      { id: 'b', text: { fr: 'Pour apprendre l\'arabe pur, l\'endurance et la liberté du désert', ar: 'لتعلم العربية الفصحى والصبر وحرية الصحراء', en: 'To learn pure Arabic, endurance, and desert freedom' } },
      { id: 'c', text: { fr: 'Par tradition sans raison', ar: 'تقليد بلا سبب', en: 'Tradition without reason' } },
      { id: 'd', text: { fr: 'Pour éviter les maladies', ar: 'لتجنب الأمراض', en: 'To avoid diseases' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les nobles de La Mecque envoyaient leurs enfants chez les Bédouins pour : 1) Apprendre l\'arabe pur (fasih), 2) Développer l\'endurance physique, 3) S\'éloigner des maladies urbaines, 4) Acquérir les valeurs bédouines (courage, hospitalité).',
      ar: 'أشراف مكة يرسلون أطفالهم للبادية: 1) تعلم العربية الفصيحة، 2) تنمية الصبر البدني، 3) الابتعاد عن أمراض المدن، 4) اكتساب قيم البادية (الشجاعة، الكرم).',
      en: 'Meccan nobles sent their children to Bedouins to: 1) Learn pure Arabic (fasih), 2) Develop physical endurance, 3) Avoid urban diseases, 4) Acquire Bedouin values (courage, hospitality).',
    },
    reference: {
      courseSlug: 'seerah-module-1',
      lessonId: '002-enfance',
    },
    points: 20,
    tags: ['seerah', 'badiya', 'education'],
  },
  {
    id: 'seerah1-q014',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle guerre a eu lieu quand le Prophète ﷺ était adolescent ?',
      ar: 'أي حرب حدثت عندما كان النبي ﷺ مراهقاً؟',
      en: 'Which war occurred when the Prophet ﷺ was a teenager?',
    },
    options: [
      { id: 'a', text: { fr: 'La guerre de Badr', ar: 'غزوة بدر', en: 'Battle of Badr' } },
      { id: 'b', text: { fr: 'La guerre d\'Uhud', ar: 'غزوة أحد', en: 'Battle of Uhud' } },
      { id: 'c', text: { fr: 'La guerre de Fijar (Harb al-Fijar)', ar: 'حرب الفجار', en: 'War of Fijar (Harb al-Fijar)' } },
      { id: 'd', text: { fr: 'La conquête de La Mecque', ar: 'فتح مكة', en: 'Conquest of Mecca' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Harb al-Fijar (Guerre Sacrilège) a eu lieu quand le Prophète ﷺ avait environ 14-15 ans. C\'était une guerre entre Quraysh et Hawazin. Le Prophète ﷺ y a participé en ramassant les flèches pour ses oncles.',
      ar: 'حرب الفجار وقعت عندما كان النبي ﷺ في حوالي 14-15 سنة. كانت بين قريش وهوازن. شارك النبي ﷺ بجمع السهام لأعمامه.',
      en: 'Harb al-Fijar (Sacrilegious War) occurred when the Prophet ﷺ was about 14-15 years old. It was between Quraysh and Hawazin. The Prophet ﷺ participated by collecting arrows for his uncles.',
    },
    reference: {
      courseSlug: 'seerah-module-1',
      lessonId: '003-jeunesse',
    },
    points: 20,
    tags: ['seerah', 'fijar', 'guerre'],
  },
  {
    id: 'seerah1-q015',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Qu\'est-ce que la "Hanifiyya" que le Prophète ﷺ pratiquait avant la Révélation ?',
      ar: 'ما هي "الحنيفية" التي كان النبي ﷺ يتبعها قبل البعثة؟',
      en: 'What was the "Hanifiyya" that the Prophet ﷺ practiced before the Revelation?',
    },
    options: [
      { id: 'a', text: { fr: 'L\'idolâtrie des Quraysh', ar: 'عبادة أصنام قريش', en: 'Quraysh idol worship' } },
      { id: 'b', text: { fr: 'Le christianisme', ar: 'المسيحية', en: 'Christianity' } },
      { id: 'c', text: { fr: 'Le monothéisme pur d\'Ibrahim, sans idolâtrie', ar: 'التوحيد الخالص لإبراهيم، بدون شرك', en: 'Pure monotheism of Ibrahim, without idolatry' } },
      { id: 'd', text: { fr: 'Le judaïsme', ar: 'اليهودية', en: 'Judaism' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'La Hanifiyya était la religion originelle d\'Ibrahim : le monothéisme pur. Le Prophète ﷺ n\'a jamais adoré d\'idoles. Il méditait dans la grotte de Hira, cherchant la vérité. D\'autres Hunafa\' existaient comme Waraqa ibn Nawfal.',
      ar: 'الحنيفية كانت دين إبراهيم الأصلي: التوحيد الخالص. النبي ﷺ لم يعبد صنماً قط. كان يتعبد في غار حراء باحثاً عن الحق. وُجد حنفاء آخرون مثل ورقة بن نوفل.',
      en: 'Hanifiyya was Ibrahim\'s original religion: pure monotheism. The Prophet ﷺ never worshipped idols. He would meditate in the cave of Hira, seeking truth. Other Hunafa\' existed like Waraqa ibn Nawfal.',
    },
    reference: {
      courseSlug: 'seerah-module-1',
      lessonId: '003-jeunesse',
    },
    points: 20,
    tags: ['seerah', 'hanifiyya', 'tawhid'],
  },
];

// ============================================
// Export du Quiz
// ============================================

export const quizSeerahModule1: Quiz = {
  id: 'quiz-seerah-module-1',
  type: 'module',
  courseSlug: 'seerah-module-1',
  title: {
    fr: 'Quiz : De la Naissance à la Révélation',
    ar: 'اختبار: من الميلاد إلى البعثة',
    en: 'Quiz: From Birth to Revelation',
  },
  description: {
    fr: 'Testez vos connaissances sur l\'enfance et la jeunesse du Prophète ﷺ avant la prophétie.',
    ar: 'اختبر معلوماتك عن طفولة وشباب النبي ﷺ قبل النبوة.',
    en: 'Test your knowledge of the Prophet\'s ﷺ childhood and youth before prophethood.',
  },
  instructions: {
    fr: 'Découvrez les événements qui ont façonné le futur Messager d\'Allah ﷺ.',
    ar: 'اكتشف الأحداث التي شكّلت رسول الله ﷺ المستقبلي.',
    en: 'Discover the events that shaped the future Messenger of Allah ﷺ.',
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

export default quizSeerahModule1;
