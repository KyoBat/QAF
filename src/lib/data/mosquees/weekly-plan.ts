/**
 * Plan hebdomadaire — mosquée Ar-Rayane
 *
 * L'unité de la semaine est UNE LEÇON, pas un cours entier : c'est la seule
 * échelle qu'on finit en une fois, et la seule sur laquelle une question peut
 * être précise. Le parcours sert de fil rouge et de contexte, pas de bouton.
 *
 * Deux mécanismes, dans cet ordre de priorité :
 *
 * 1. LE CALENDRIER PRIME. Pendant certains mois hégiriens, un parcours
 *    s'impose (Ramadan → le jeûne, Dhul-Hijja → le pèlerinage…), même au
 *    milieu de la série. La série n'avance pas pendant ces semaines : elle
 *    reprend ensuite exactement où elle s'était arrêtée.
 *
 * 2. SINON, LA SÉRIE. L'ordre est délibéré : d'abord la aqida — c'est le
 *    point sur lequel il faut insister — puis les hadiths, puis le reste.
 *
 * Les parcours ne référencent que des ids de lesson-entries.ts : le contenu
 * est défini une seule fois, l'ordre de diffusion vit ici.
 */

import type { LocalizedText } from './types'

export interface Parcours {
  id: string
  /** Nom affiché en contexte : « Parcours Aqida · 3 / 6 » */
  name: LocalizedText
  /** Ids d'entrées de lesson-entries.ts, dans l'ordre de diffusion */
  entryIds: string[]
}

/**
 * Nombre de semaines pendant lesquelles la série passe AVANT le calendrier,
 * au tout début du planning.
 *
 * Sans cela, un mois imposé tombant juste après le lancement couperait la
 * aqida au bout d'une seule semaine — or c'est précisément le point sur
 * lequel on veut insister. Six semaines couvrent le parcours Aqida entier.
 * Mettre 0 pour que le calendrier prime dès la première semaine.
 */
export const PRIMING_SEQUENCE_WEEKS = 6

/**
 * La série, dans l'ordre. Chaque entrée = une semaine.
 * Aqida d'abord, hadiths ensuite, puis la pratique et l'histoire.
 */
export const parcoursSequence: Parcours[] = [
  {
    id: 'aqida',
    name: {
      fr: 'Parcours Aqida',
      ar: 'مسار العقيدة',
      en: 'Aqidah track',
    },
    entryIds: [
      'aqeedah-piliers-foi',
      'aqeedah-tawhid',
      'aqeedah-preuves',
      'aqeedah-sources',
      'aqeedah-caracteristiques',
      'aqeedah-deviation',
    ],
  },
  {
    id: 'hadith',
    name: {
      fr: 'Parcours Hadith',
      ar: 'مسار الحديث',
      en: 'Hadith track',
    },
    entryIds: [
      'hadith-niyyah',
      'hadith-ihsan',
      'hadith-la-taghdab',
      'hadith-hubb-li-akhih',
      'hadith-lisan-yad',
      'hadith-ma-la-yanih',
      'hadith-verifier',
      'hadith-nasiha',
      'hadith-qulub',
      'hadith-taqwa',
      'hadith-tawakkul',
      'hadith-amr-mumin',
      'hadith-bala',
      'hadith-gharib',
      'hadith-mudawama',
    ],
  },
  {
    id: 'tahara-salat',
    name: {
      fr: 'Parcours Purification et prière',
      ar: 'مسار الطهارة والصلاة',
      en: 'Purification and prayer track',
    },
    entryIds: [
      'tahara-wudu',
      'tahara-tayammum',
      'tahara-fitra',
      'salat-masbuq',
      'salat-jamaa',
      'salat-sahw',
      'salat-adhkar',
      'salat-khushu',
      'salat-erreurs',
      'salat-nawafil',
    ],
  },
  {
    id: 'salat-situations',
    name: {
      fr: 'Parcours Prières des situations',
      ar: 'مسار صلوات الأحوال',
      en: 'Prayers for life situations track',
    },
    entryIds: ['khassa-voyageur', 'khassa-jumua', 'khassa-janaza', 'khassa-qada'],
  },
  {
    id: 'adhkar',
    name: {
      fr: 'Parcours Invocations',
      ar: 'مسار الأذكار',
      en: 'Supplications track',
    },
    entryIds: ['adhkar-sabah', 'adhkar-apres-salat'],
  },
  {
    id: 'seerah-sahaba',
    name: {
      fr: 'Parcours Seerah et Compagnons',
      ar: 'مسار السيرة والصحابة',
      en: 'Seerah and Companions track',
    },
    entryIds: ['seerah-suivre', 'sahaba-mustadafin'],
  },
  {
    id: 'famille',
    name: {
      fr: 'Parcours Famille',
      ar: 'مسار الأسرة',
      en: 'Family track',
    },
    entryIds: ['famille-droits-epoux'],
  },
]

export interface SeasonalSlot {
  parcours: Parcours
  /** Pourquoi ce parcours maintenant — affiché à la place du rang dans la série */
  reason: LocalizedText
}

/**
 * Parcours imposés par le mois hégirien (1 = Muharram … 12 = Dhul-Hijja).
 * Un mois couvre 4 à 5 semaines : on tourne dans ses entrées pour que la
 * page ne reste pas figée. Les mois absents laissent la série avancer.
 */
export const seasonalPlan: Record<number, SeasonalSlot> = {
  1: {
    reason: {
      fr: "Nous sommes en Muharram, le mois qui ouvre l'année de la Hijra : le moment de revoir comment Médine est née.",
      ar: 'نحن في المحرَّم، الشهرُ الذي يفتتح عامَ الهجرة: وقتُ مراجعة كيف قامت المدينة.',
      en: 'We are in Muharram, the month that opens the year of the Hijra: the time to revisit how Medina was born.',
    },
    parcours: {
      id: 'muharram',
      name: { fr: 'La Hijra', ar: 'الهجرة', en: 'The Hijra' },
      entryIds: ['seerah-mouakhat', 'seerah-constitution'],
    },
  },
  3: {
    reason: {
      fr: "Nous sommes en Rabi' al-Awwal, le mois de la naissance du Prophète ﷺ : revenons au monde dans lequel il est venu.",
      ar: 'نحن في ربيع الأوّل، شهرِ مولد النبيِّ ﷺ: فلنعد إلى العالم الذي بُعث فيه.',
      en: "We are in Rabi' al-Awwal, the month of the Prophet's ﷺ birth: let us return to the world he came into.",
    },
    parcours: {
      id: 'rabi-awwal',
      name: { fr: 'La naissance du Prophète ﷺ', ar: 'مولد النبيِّ ﷺ', en: "The Prophet's ﷺ birth" },
      entryIds: ['seerah-naissance', 'seerah-arabie', 'seerah-khadija'],
    },
  },
  7: {
    reason: {
      fr: "Nous sommes en Rajab, le mois d'Al-Isra wal-Mi'raj : le voyage nocturne, et la prière qui en est descendue.",
      ar: 'نحن في رجب، شهرِ الإسراء والمعراج: الرحلةُ الليليّة، والصلاةُ التي نزلت فيها.',
      en: "We are in Rajab, the month of Al-Isra wal-Mi'raj: the night journey, and the prayer that came down from it.",
    },
    parcours: {
      id: 'rajab',
      name: { fr: "Al-Isra wal-Mi'raj", ar: 'الإسراء والمعراج', en: "Al-Isra wal-Mi'raj" },
      entryIds: ['seerah-isra', 'salat-khushu', 'salat-nawafil'],
    },
  },
  8: {
    reason: {
      fr: "Nous sommes en Sha'ban : Ramadan est le mois prochain. C'est maintenant qu'on révise les règles, pas le premier jour du jeûne.",
      ar: 'نحن في شعبان: ورمضانُ في الشهر القادم. الآن تُراجَع الأحكام، لا في أوّل يومٍ من الصيام.',
      en: "We are in Sha'ban: Ramadan is next month. Now is when you review the rulings — not on the first day of fasting.",
    },
    parcours: {
      id: 'shaban',
      name: { fr: 'Préparer Ramadan', ar: 'الاستعداد لرمضان', en: 'Preparing for Ramadan' },
      entryIds: ['siyam-mufattirat', 'siyam-tatawwu'],
    },
  },
  9: {
    reason: {
      fr: "Nous sommes en Ramadan : ce qui rompt le jeûne, ce qui ne le rompt pas, et la nuit qui vaut mille mois.",
      ar: 'نحن في رمضان: ما يُفطر وما لا يُفطر، والليلةُ التي خيرٌ من ألف شهر.',
      en: 'We are in Ramadan: what breaks the fast, what does not, and the night worth a thousand months.',
    },
    parcours: {
      id: 'ramadan',
      name: { fr: 'Ramadan', ar: 'رمضان', en: 'Ramadan' },
      entryIds: ['siyam-mufattirat', 'siyam-laylat-al-qadr', 'siyam-tatawwu', 'adhkar-sabah'],
    },
  },
  10: {
    reason: {
      fr: "Nous sommes en Shawwal, juste après la zakat al-fitr : le bon moment pour mettre à plat le calcul de sa zakat annuelle.",
      ar: 'نحن في شوّال، عقِبَ زكاة الفطر: الوقتُ المناسب لضبط حساب زكاة المال السنويّة.',
      en: 'We are in Shawwal, just after zakat al-fitr: the right moment to settle the calculation of your annual zakat.',
    },
    parcours: {
      id: 'shawwal',
      name: { fr: 'La zakat', ar: 'الزكاة', en: 'Zakat' },
      entryIds: ['zakat-beneficiaires', 'zakat-calcul'],
    },
  },
  11: {
    reason: {
      fr: "Nous sommes en Dhul-Qa'da, mois sacré et veille de la saison du Hajj : les rites, avant le départ.",
      ar: 'نحن في ذي القعدة، شهرٌ حرامٌ وعتبةُ موسم الحجّ: المناسك قبل السفر.',
      en: "We are in Dhul-Qa'da, a sacred month on the eve of the Hajj season: the rites, before departure.",
    },
    parcours: {
      id: 'dhul-qada',
      name: { fr: 'Le pèlerinage', ar: 'الحجّ', en: 'The pilgrimage' },
      entryIds: ['hajj-ihram-miqat', 'hajj-tawaf-sai'],
    },
  },
  12: {
    reason: {
      fr: "Nous sommes en Dhul-Hijja : Arafat, le sacrifice, et les dix jours les plus aimés d'Allah — même sans partir, ces jours-là se vivent.",
      ar: 'نحن في ذي الحجّة: عرفة، والهدي، والعشرُ الأحبُّ إلى الله — وحتّى إن لم تحجّ، فهذه أيّامٌ تُعاش.',
      en: 'We are in Dhul-Hijja: Arafat, the sacrifice, and the ten days most beloved to Allah — even without travelling, these days are lived.',
    },
    parcours: {
      id: 'dhul-hijja',
      name: { fr: 'Arafat et le sacrifice', ar: 'عرفة والهدي', en: 'Arafat and the sacrifice' },
      entryIds: ['hajj-arafat', 'siyam-tatawwu', 'hajj-ihram-miqat'],
    },
  },
}
