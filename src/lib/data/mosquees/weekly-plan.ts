/**
 * Plan hebdomadaire du cours mis en avant — mosquée Ar-Rayane
 *
 * Deux mécanismes, dans cet ordre de priorité :
 *
 * 1. LE CALENDRIER PRIME. Pendant certains mois hégiriens, un cours s'impose
 *    (Ramadan → le jeûne, Dhul-Hijja → le pèlerinage…), même au milieu de la
 *    série. La série n'avance pas pendant ces semaines : elle reprend ensuite
 *    exactement où elle s'était arrêtée.
 *
 * 2. SINON, LA SÉRIE. L'ordre est délibéré : d'abord la aqida — c'est le point
 *    sur lequel il faut insister — puis les sciences du hadith, puis le reste.
 *
 * Les cours affectés à un mois ne figurent pas dans la série : ils reviennent
 * chaque année à leur saison, sans faire doublon.
 */

import type { LocalizedText } from './types'

/**
 * Une phrase par cours : ce qu'on y trouve, formulé pour donner envie d'ouvrir.
 * Le titre et la description viennent déjà de coursesData — on ne les répète pas.
 */
export const courseHooks: Record<string, LocalizedText> = {
  // ── Aqida ───────────────────────────────────────────────────
  'aqeedah-islamique': {
    fr: "Ce que tout musulman doit croire, et surtout pourquoi : les piliers de la foi, les preuves de l'existence d'Allah et les catégories du tawhid.",
    ar: 'ما يجب على كلِّ مسلمٍ اعتقادُه، والأهمُّ: لماذا؟ أركان الإيمان، وأدلّة وجود الله، وأقسام التوحيد.',
    en: 'What every Muslim must believe — and above all why: the pillars of faith, the proofs of Allah\'s existence, and the categories of tawhid.',
  },
  'aqeedah-niveau-2': {
    fr: "Les questions qu'on n'ose pas poser : le destin, le libre arbitre, les grands péchés, et ce que devient le croyant qui faute.",
    ar: 'الأسئلة التي يُتحرَّج من طرحها: القدر، وحريّة الاختيار، والكبائر، ومآل المؤمن المذنب.',
    en: 'The questions people hesitate to ask: divine decree, free will, major sins, and what becomes of the believer who falls.',
  },
  'aqeedah-avancee': {
    fr: "Les noms et attributs d'Allah, la vie après la mort, les signes de l'Heure : la foi approfondie, textes à l'appui.",
    ar: 'أسماء الله وصفاته، والحياة الآخرة، وأشراط الساعة: تعميقٌ للإيمان بالأدلّة.',
    en: 'The names and attributes of Allah, the afterlife, the signs of the Hour: faith in depth, grounded in the texts.',
  },
  'sectes-refutations': {
    fr: "D'où viennent les courants qui ont divisé la Oumma, ce qu'ils avancent réellement, et comment y répondre sans invective.",
    ar: 'من أين نشأت الفرقُ التي فرَّقت الأمّة؟ وما حجّتها حقيقةً؟ وكيف يُردُّ عليها بلا تجريح؟',
    en: 'Where the currents that divided the Ummah came from, what they actually claim, and how to answer them without invective.',
  },

  // ── Sciences du hadith ──────────────────────────────────────
  'sciences-hadith': {
    fr: "Quinze hadiths qui suffisent à redresser une vie : l'intention, la colère, la langue, les épreuves, la constance.",
    ar: 'خمسة عشر حديثًا تكفي لتقويم حياةٍ كاملة: النيّة، والغضب، واللسان، والابتلاء، والمداومة.',
    en: 'Fifteen hadiths enough to set a life straight: intention, anger, the tongue, trials, and consistency.',
  },
  'mustalah-hadith': {
    fr: "Comment les savants ont trié le vrai du faux dans ce qu'on attribue au Prophète ﷺ — et comment vérifier vous-même un hadith reçu sur votre téléphone.",
    ar: 'كيف ميَّز العلماءُ الصحيحَ من الموضوع فيما يُنسب إلى النبيِّ ﷺ؟ وكيف تتحقَّق بنفسك من حديثٍ وصلك على هاتفك؟',
    en: 'How the scholars sifted the authentic from the false in what is attributed to the Prophet ﷺ — and how to check a hadith you receive on your phone.',
  },

  // ── Purification et prière ──────────────────────────────────
  'bases-fiqh-ibadat-purification': {
    fr: "La purification décide de la validité de la prière. Ce cours ferme les zones de doute : wudu, ghusl, tayammum, najassa.",
    ar: 'الطهارةُ شرطٌ لصحّة الصلاة. هذا الدرس يُغلق مواضع الشكّ: الوضوء، والغسل، والتيمّم، والنجاسة.',
    en: 'Purification decides whether the prayer is valid. This course closes the areas of doubt: wudu, ghusl, tayammum, najasa.',
  },
  'bases-fiqh-ibadat-salat': {
    fr: "Conditions, piliers, obligations, annulatifs — et les erreurs si répandues qu'on ne les remarque plus.",
    ar: 'الشروط والأركان والواجبات والمبطلات — والأخطاء التي شاعت حتّى لم تعد تُلحَظ.',
    en: 'Conditions, pillars, obligations, invalidators — and the mistakes so common they go unnoticed.',
  },
  'bases-fiqh-salawat-khassa': {
    fr: "Le voyage, la maladie, le vendredi, le funéraire, le rattrapage : les prières des situations où l'on hésite le plus.",
    ar: 'السفر، والمرض، والجمعة، والجنازة، والقضاء: صلواتُ المواضع التي يكثر فيها التردّد.',
    en: 'Travel, illness, Friday, funerals, making up prayers: the prayers of the situations people hesitate over most.',
  },
  'invocations-quotidiennes': {
    fr: "Les adhkar du matin, du soir, du sommeil et du réveil — avec ce que chacun protège exactement.",
    ar: 'أذكار الصباح والمساء والنوم والاستيقاظ — ومِمَّ يحفظ كلُّ ذكرٍ منها بالضبط.',
    en: 'The adhkar of morning, evening, sleep and waking — with exactly what each one protects against.',
  },
  'invocations-salat': {
    fr: "Ce que le Prophète ﷺ disait avant, pendant et après la prière — les formules exactes, souvent approximées.",
    ar: 'ما كان يقوله النبيُّ ﷺ قبل الصلاة وفيها وبعدها — بالألفاظ الثابتة، وكثيرًا ما تُروى بالمعنى.',
    en: 'What the Prophet ﷺ said before, during and after the prayer — the exact wordings, so often approximated.',
  },

  // ── Seerah ──────────────────────────────────────────────────
  'seerah-module-1': {
    fr: "L'Arabie avant la révélation, la naissance et la jeunesse du Prophète ﷺ : comprendre le monde dans lequel l'Islam est descendu.",
    ar: 'جزيرةُ العرب قبل الوحي، ومولدُ النبيِّ ﷺ وشبابُه: فهمُ العالم الذي نزل فيه الإسلام.',
    en: 'Arabia before the revelation, the birth and youth of the Prophet ﷺ: understanding the world Islam descended into.',
  },
  'seerah-module-2': {
    fr: "De la première révélation à la Hijra : les années mecquoises, la persécution, Ta'if et Al-Isra wal-Mi'raj.",
    ar: 'من الوحي الأوّل إلى الهجرة: السنواتُ المكّية، والاضطهاد، والطائف، والإسراء والمعراج.',
    en: 'From the first revelation to the Hijra: the Meccan years, the persecution, Ta\'if, and Al-Isra wal-Mi\'raj.',
  },
  'seerah-module-3': {
    fr: "Médine : comment une communauté persécutée est devenue un État en dix ans.",
    ar: 'المدينة: كيف صارت جماعةٌ مضطهَدة دولةً في عشر سنين.',
    en: 'Medina: how a persecuted community became a state in ten years.',
  },
  'seerah-module-4': {
    fr: "Les dernières années : la conquête de La Mecque, le pèlerinage d'adieu, et le départ du Prophète ﷺ.",
    ar: 'السنواتُ الأخيرة: فتحُ مكّة، وحجّةُ الوداع، ووفاةُ النبيِّ ﷺ.',
    en: 'The final years: the conquest of Mecca, the farewell pilgrimage, and the passing of the Prophet ﷺ.',
  },
  'seerah-module-5': {
    fr: "Ce que la Seerah change concrètement aujourd'hui : comment suivre l'exemple sans le caricaturer, et répondre aux accusations.",
    ar: 'ما تُغيّره السيرةُ عمليًّا اليوم: كيف نتّبع القدوة دون تكلُّف، وكيف نردُّ على الشُّبُهات.',
    en: 'What the Seerah changes concretely today: how to follow the example without caricaturing it, and how to answer accusations.',
  },

  // ── Histoire et figures ─────────────────────────────────────
  'les-compagnons-illustres': {
    fr: "Abu Bakr, 'Umar, 'Uthman, 'Ali, Bilal, Khalid : ceux qui ont porté l'Islam à leurs frais, et ce qu'il en reste pour nous.",
    ar: 'أبو بكر وعمر وعثمان وعليّ وبلال وخالد: الذين حملوا الإسلام بأنفسهم وأموالهم، وما بقي لنا من إرثهم.',
    en: 'Abu Bakr, \'Umar, \'Uthman, \'Ali, Bilal, Khalid: those who carried Islam at their own cost, and what remains of it for us.',
  },
  'femmes-heroiques-islam': {
    fr: "Khadija, 'Aisha, Fatima, Sumayya, Nusayba : les femmes sans qui l'histoire de l'Islam ne s'écrit pas.",
    ar: 'خديجة وعائشة وفاطمة وسُميّة ونُسيبة: نساءٌ لا يُكتب تاريخُ الإسلام بدونهنّ.',
    en: 'Khadija, \'Aisha, Fatima, Sumayya, Nusayba: the women without whom the history of Islam cannot be written.',
  },
  'les-4-grands-imams': {
    fr: "Abu Hanifa, Malik, Ash-Shafi'i, Ahmad : pourquoi quatre écoles, en quoi elles diffèrent, et pourquoi ce n'est pas une division.",
    ar: 'أبو حنيفة ومالك والشافعي وأحمد: لماذا أربعةُ مذاهب؟ وفيمَ تختلف؟ ولماذا ليس ذلك افتراقًا؟',
    en: 'Abu Hanifa, Malik, Ash-Shafi\'i, Ahmad: why four schools, how they differ, and why that is not division.',
  },
  'vies-des-savants': {
    fr: "Ce que les grands savants ont enduré pour transmettre ce que nous lisons aujourd'hui gratuitement.",
    ar: 'ما احتمله كبارُ العلماء لينقلوا إلينا ما نقرؤه اليوم مجّانًا.',
    en: 'What the great scholars endured to transmit what we read today for free.',
  },

  // ── Fondements et pratique ──────────────────────────────────
  'usul-al-fiqh': {
    fr: "Comment une règle est déduite du Coran et de la Sunna — pour cesser de subir les avis et commencer à les comprendre.",
    ar: 'كيف يُستنبط الحكمُ من الكتاب والسنّة — لتتوقّف عن تلقّي الأقوال وتبدأ في فهمها.',
    en: 'How a ruling is derived from Quran and Sunnah — to stop merely receiving verdicts and start understanding them.',
  },
  'fiqh-pratique': {
    fr: "Faut-il suivre un madhab ? Lequel ? Et que faire quand deux savants divergent sur une question qui vous concerne ?",
    ar: 'هل يلزمك اتّباعُ مذهب؟ وأيُّها؟ وماذا تصنع إذا اختلف عالمان في مسألةٍ تخصّك؟',
    en: 'Must you follow a madhab? Which one? And what do you do when two scholars differ on a question that affects you?',
  },
  'fiqh-famille': {
    fr: "Fiançailles, mariage, droits des époux, divorce, garde des enfants : le droit qui touche le plus de foyers.",
    ar: 'الخِطبة، والنكاح، وحقوق الزوجين، والطلاق، والحضانة: الفقهُ الذي يمسُّ أكثرَ البيوت.',
    en: 'Engagement, marriage, spousal rights, divorce, child custody: the law that touches the most households.',
  },
  'fiqh-muamalat': {
    fr: "Vente, crédit, riba, contrats, assurance : ce qui rend un revenu licite ou non, à l'époque des banques.",
    ar: 'البيع، والدَّين، والربا، والعقود، والتأمين: ما يجعل الكسبَ حلالًا أو حرامًا في زمن البنوك.',
    en: 'Sales, credit, riba, contracts, insurance: what makes an income lawful or not, in the age of banks.',
  },
  'invocations-situations-vie': {
    fr: "Le voyage, la maladie, la peur, la dette, la joie : une invocation prophétique pour chaque moment qui compte.",
    ar: 'السفر، والمرض، والخوف، والدَّين، والفرح: دعاءٌ نبويٌّ لكلِّ موضعٍ له وزن.',
    en: 'Travel, illness, fear, debt, joy: a prophetic supplication for each moment that counts.',
  },
  'invocations-spirituelles': {
    fr: "L'istighfar, le tawba, le dhikr du cœur : les invocations qui travaillent l'intérieur, pas seulement la langue.",
    ar: 'الاستغفار، والتوبة، وذكرُ القلب: الأدعيةُ التي تعمل في الباطن لا في اللسان وحده.',
    en: 'Istighfar, tawba, remembrance of the heart: the supplications that work on the inside, not the tongue alone.',
  },

  // ── Cours saisonniers ───────────────────────────────────────
  'fiqh-siyam': {
    fr: "Conditions, piliers, ce qui rompt le jeûne, dispenses, kaffara, Laylat al-Qadr et i'tikaf : le jeûne de bout en bout.",
    ar: 'الشروط والأركان والمفطّرات والرُّخَص والكفّارة وليلةُ القدر والاعتكاف: الصيامُ من أوّله إلى آخره.',
    en: 'Conditions, pillars, what breaks the fast, dispensations, kaffara, Laylat al-Qadr and i\'tikaf: fasting from end to end.',
  },
  'fiqh-hajj': {
    fr: "Ihram, miqat, tawaf, sa'i, Arafat, Muzdalifa, Mina, sacrifice : le pèlerinage étape par étape, sans rien supposer connu.",
    ar: 'الإحرام والمواقيت والطواف والسعي وعرفة ومزدلفة ومنى والهدي: الحجُّ خطوةً بخطوة، دون افتراض علمٍ سابق.',
    en: 'Ihram, miqat, tawaf, sa\'i, Arafat, Muzdalifa, Mina, sacrifice: the pilgrimage step by step, assuming nothing.',
  },
  'bases-fiqh-zakat': {
    fr: "Seuil, échéance, or, monnaie, commerce, bénéficiaires : calculer sa zakat sans approximation ni scrupule.",
    ar: 'النِّصاب، والحول، والذهب، والنقود، وعروض التجارة، والمصارف: حسابُ الزكاة بلا تقريبٍ ولا وسوسة.',
    en: 'Threshold, due date, gold, currency, trade goods, recipients: calculating your zakat without guesswork or anxiety.',
  },
}

/**
 * La série, dans l'ordre. La aqida d'abord — c'est l'insistance voulue —
 * puis les sciences du hadith, puis le reste.
 * Les cours affectés à un mois hégirien en sont volontairement absents.
 */
export const courseSequence: string[] = [
  'aqeedah-islamique',
  'aqeedah-niveau-2',
  'aqeedah-avancee',
  'sectes-refutations',

  'sciences-hadith',
  'mustalah-hadith',

  'bases-fiqh-ibadat-purification',
  'bases-fiqh-ibadat-salat',
  'bases-fiqh-salawat-khassa',
  'invocations-quotidiennes',
  'invocations-salat',

  'seerah-module-4',
  'seerah-module-5',

  'les-compagnons-illustres',
  'femmes-heroiques-islam',
  'les-4-grands-imams',
  'vies-des-savants',

  'usul-al-fiqh',
  'fiqh-pratique',
  'fiqh-famille',
  'fiqh-muamalat',

  'invocations-situations-vie',
  'invocations-spirituelles',
]

/**
 * Nombre de semaines pendant lesquelles la série passe AVANT le calendrier,
 * au tout début du planning.
 *
 * Sans cela, un mois imposé tombant juste après le lancement couperait la
 * série de aqida au bout d'une seule semaine — or c'est précisément le point
 * sur lequel on veut insister. Ces quatre semaines couvrent les quatre cours
 * de aqida ; passé ce délai, le calendrier reprend la priorité pour toujours.
 * Mettre 0 pour que le calendrier prime dès la première semaine.
 */
export const PRIMING_SEQUENCE_WEEKS = 4

export interface SeasonalSlot {
  /**
   * Cours du mois, dans l'ordre. Un mois hégirien couvre 4 à 5 semaines :
   * on tourne dans cette liste pour que la page ne reste pas figée.
   * Le premier est le cours principal du mois.
   */
  courseSlugs: string[]
  /** Pourquoi ces cours maintenant — affiché à la place du rang dans la série */
  reason: LocalizedText
}

/**
 * Cours imposés par le mois hégirien (1 = Muharram … 12 = Dhul-Hijja).
 * Les mois absents laissent la série avancer normalement.
 */
export const seasonalPlan: Record<number, SeasonalSlot> = {
  1: {
    courseSlugs: ['seerah-module-3', 'les-compagnons-illustres'],
    reason: {
      fr: "Nous sommes en Muharram, le mois qui ouvre l'année de la Hijra : le moment de revoir comment Médine est née.",
      ar: 'نحن في المحرَّم، الشهرُ الذي يفتتح عامَ الهجرة: وقتُ مراجعة كيف قامت المدينة.',
      en: 'We are in Muharram, the month that opens the year of the Hijra: the time to revisit how Medina was born.',
    },
  },
  3: {
    courseSlugs: ['seerah-module-1', 'seerah-module-2', 'seerah-module-4'],
    reason: {
      fr: "Nous sommes en Rabi' al-Awwal, le mois de la naissance du Prophète ﷺ : revenons au monde dans lequel il est venu.",
      ar: 'نحن في ربيع الأوّل، شهرِ مولد النبيِّ ﷺ: فلنعد إلى العالم الذي بُعث فيه.',
      en: 'We are in Rabi\' al-Awwal, the month of the Prophet\'s ﷺ birth: let us return to the world he came into.',
    },
  },
  7: {
    courseSlugs: ['seerah-module-2', 'bases-fiqh-ibadat-salat'],
    reason: {
      fr: "Nous sommes en Rajab, le mois d'Al-Isra wal-Mi'raj : le voyage nocturne et ce qu'il a établi pour toujours.",
      ar: 'نحن في رجب، شهرِ الإسراء والمعراج: الرحلةُ الليليّة وما ثبت بها إلى الأبد.',
      en: 'We are in Rajab, the month of Al-Isra wal-Mi\'raj: the night journey and what it established for all time.',
    },
  },
  8: {
    courseSlugs: ['fiqh-siyam', 'invocations-quotidiennes'],
    reason: {
      fr: "Nous sommes en Sha'ban : Ramadan est le mois prochain. C'est maintenant qu'on révise les règles, pas le premier jour du jeûne.",
      ar: 'نحن في شعبان: ورمضانُ في الشهر القادم. الآن تُراجَع الأحكام، لا في أوّل يومٍ من الصيام.',
      en: 'We are in Sha\'ban: Ramadan is next month. Now is when you review the rulings — not on the first day of fasting.',
    },
  },
  9: {
    courseSlugs: ['fiqh-siyam', 'invocations-spirituelles', 'bases-fiqh-zakat'],
    reason: {
      fr: "Nous sommes en Ramadan : ce qui rompt le jeûne, ce qui ne le rompt pas, les dispenses, Laylat al-Qadr et l'i'tikaf.",
      ar: 'نحن في رمضان: ما يُفطر وما لا يُفطر، والرُّخَص، وليلةُ القدر، والاعتكاف.',
      en: 'We are in Ramadan: what breaks the fast, what does not, the dispensations, Laylat al-Qadr and i\'tikaf.',
    },
  },
  10: {
    courseSlugs: ['bases-fiqh-zakat', 'fiqh-siyam'],
    reason: {
      fr: "Nous sommes en Shawwal, juste après la zakat al-fitr : le bon moment pour mettre à plat le calcul de sa zakat annuelle.",
      ar: 'نحن في شوّال، عقِبَ زكاة الفطر: الوقتُ المناسب لضبط حساب زكاة المال السنويّة.',
      en: 'We are in Shawwal, just after zakat al-fitr: the right moment to settle the calculation of your annual zakat.',
    },
  },
  11: {
    courseSlugs: ['fiqh-hajj'],
    reason: {
      fr: "Nous sommes en Dhul-Qa'da, mois sacré et veille de la saison du Hajj : les rites, avant le départ.",
      ar: 'نحن في ذي القعدة، شهرٌ حرامٌ وعتبةُ موسم الحجّ: المناسك قبل السفر.',
      en: 'We are in Dhul-Qa\'da, a sacred month on the eve of the Hajj season: the rites, before departure.',
    },
  },
  12: {
    courseSlugs: ['fiqh-hajj', 'fiqh-siyam'],
    reason: {
      fr: "Nous sommes en Dhul-Hijja : Arafat, Muzdalifa, Mina et le sacrifice — même sans partir, ces jours-là se vivent.",
      ar: 'نحن في ذي الحجّة: عرفة ومزدلفة ومنى والهدي — وحتّى إن لم تحجّ، فهذه أيّامٌ تُعاش.',
      en: 'We are in Dhul-Hijja: Arafat, Muzdalifa, Mina and the sacrifice — even without travelling, these days are lived.',
    },
  },
}
