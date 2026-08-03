/**
 * Banque quotidienne — mosquée Ar-Rayane
 *
 * Chaque entrée pointe vers une leçon RÉELLE du site (courseSlug + lessonId).
 * Les titres ne sont pas recopiés ici : ils sont résolus depuis coursesData
 * au rendu, donc un renommage de leçon ne casse jamais l'affichage.
 *
 * La rotation parcourt la banque dans l'ordre, un jour = une entrée.
 * Ajouter une entrée à la fin allonge simplement le cycle.
 */

import type { DailyEntry } from './types'

export const dailyBank: DailyEntry[] = [
  // ─────────────────────────────────────────────────────────────
  // Hadiths — cours « Hadiths Essentiels pour le Musulman Contemporain »
  // ─────────────────────────────────────────────────────────────
  {
    id: 'hadith-niyyah',
    courseSlug: 'sciences-hadith',
    lessonId: 'lesson-001',
    kind: 'hadith',
    quote: {
      ar: '«إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى»',
      translation: {
        fr: "« Les actes ne valent que par les intentions, et chacun n'aura que ce qu'il a réellement eu comme intention. »",
        ar: '«إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى»',
        en: '"Actions are but by intentions, and every man shall have only that which he intended."',
      },
      source: {
        fr: 'Sahih al-Bukhari 1 — Sahih Muslim 1907',
        ar: 'صحيح البخاري ١ — صحيح مسلم ١٩٠٧',
        en: 'Sahih al-Bukhari 1 — Sahih Muslim 1907',
      },
    },
    question: {
      fr: "L'imam Ash-Shafi'i disait que ce hadith représente un tiers de la science. Pourquoi un seul hadith peut-il peser aussi lourd — et dans combien de chapitres du fiqh entre-t-il réellement ?",
      ar: 'قال الإمام الشافعي إنّ هذا الحديث ثُلثُ العلم. لماذا يزن حديثٌ واحد كلَّ هذا الوزن؟ وفي كم بابًا من أبواب الفقه يدخل فعلًا؟',
      en: "Imam Ash-Shafi'i said this hadith is one third of all knowledge. How can a single hadith carry that much weight — and how many chapters of fiqh does it actually enter into?",
    },
  },
  {
    id: 'hadith-ihsan',
    courseSlug: 'sciences-hadith',
    lessonId: 'lesson-002',
    kind: 'hadith',
    quote: {
      ar: '«أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ»',
      translation: {
        fr: "« C'est que tu adores Allah comme si tu Le voyais ; car si tu ne Le vois pas, Lui te voit. »",
        ar: '«أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ»',
        en: '"It is to worship Allah as though you see Him; for if you do not see Him, He surely sees you."',
      },
      source: {
        fr: 'Sahih Muslim 8 — hadith de Jibril',
        ar: 'صحيح مسلم ٨ — حديث جبريل',
        en: 'Sahih Muslim 8 — the hadith of Jibril',
      },
    },
    question: {
      fr: "Jibril عليه السلام est venu poser trois questions au Prophète ﷺ. Sauriez-vous nommer les trois degrés qu'elles distinguent — Islam, Iman, Ihsan — et dire à quoi chacun correspond dans votre journée ?",
      ar: 'جاء جبريل عليه السلام يسأل النبيَّ ﷺ ثلاثةَ أسئلة. أتستطيع أن تُسمِّي المراتب الثلاث التي فرَّقت بينها — الإسلام والإيمان والإحسان — وأين موضع كلٍّ منها في يومك؟',
      en: 'Jibril عليه السلام came with three questions for the Prophet ﷺ. Can you name the three levels they distinguish — Islam, Iman, Ihsan — and say where each one sits in your day?',
    },
  },
  {
    id: 'hadith-verifier',
    courseSlug: 'sciences-hadith',
    lessonId: 'lesson-003',
    kind: 'hadith',
    quote: {
      ar: '«كَفَى بِالْمَرْءِ كَذِبًا أَنْ يُحَدِّثَ بِكُلِّ مَا سَمِعَ»',
      translation: {
        fr: "« Il suffit à un homme, comme mensonge, de rapporter tout ce qu'il entend. »",
        ar: '«كَفَى بِالْمَرْءِ كَذِبًا أَنْ يُحَدِّثَ بِكُلِّ مَا سَمِعَ»',
        en: '"It is enough of a lie for a man to relate everything he hears."',
      },
      source: {
        fr: 'Sahih Muslim — introduction',
        ar: 'صحيح مسلم — المقدمة',
        en: 'Sahih Muslim — introduction',
      },
    },
    question: {
      fr: "Combien de messages avez-vous transféré cette semaine sans en vérifier la source ? Ce hadith visait déjà ce réflexe il y a quatorze siècles — que demandait-il exactement avant de transmettre ?",
      ar: 'كم رسالةً أعدتَ إرسالها هذا الأسبوع دون أن تتحقّق من مصدرها؟ هذا الحديث عالج هذه العادة قبل أربعة عشر قرنًا — فماذا كان يطلب بالضبط قبل النقل؟',
      en: 'How many messages did you forward this week without checking the source? This hadith addressed that reflex fourteen centuries ago — what exactly did it require before passing something on?',
    },
  },
  {
    id: 'hadith-ma-la-yanih',
    courseSlug: 'sciences-hadith',
    lessonId: 'lesson-004',
    kind: 'hadith',
    quote: {
      ar: '«مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ»',
      translation: {
        fr: "« Une des marques de la bonne pratique de l'Islam chez l'homme est qu'il délaisse ce qui ne le concerne pas. »",
        ar: '«مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ»',
        en: '"Part of the excellence of a person\'s Islam is his leaving what does not concern him."',
      },
      source: {
        fr: 'Sunan at-Tirmidhi 2317 — Sunan Ibn Majah 3976',
        ar: 'سنن الترمذي ٢٣١٧ — سنن ابن ماجه ٣٩٧٦',
        en: 'Sunan at-Tirmidhi 2317 — Sunan Ibn Majah 3976',
      },
    },
    question: {
      fr: "Où passe la frontière entre « ce qui me concerne » et « ce qui ne me concerne pas » ? Les savants ont donné un critère précis — le connaissez-vous ?",
      ar: 'أين يمرُّ الحدُّ بين ما يعنيني وما لا يعنيني؟ وضع العلماء ضابطًا دقيقًا لذلك — فهل تعرفه؟',
      en: 'Where exactly is the line between "what concerns me" and "what does not"? The scholars gave a precise criterion — do you know it?',
    },
  },
  {
    id: 'hadith-amr-mumin',
    courseSlug: 'sciences-hadith',
    lessonId: 'lesson-005',
    kind: 'hadith',
    quote: {
      ar: '«عَجَبًا لِأَمْرِ الْمُؤْمِنِ، إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ، وَلَيْسَ ذَاكَ لِأَحَدٍ إِلَّا لِلْمُؤْمِنِ»',
      translation: {
        fr: "« Étonnante est l'affaire du croyant : toute son affaire est un bien, et cela n'est donné à personne sinon au croyant. »",
        ar: '«عَجَبًا لِأَمْرِ الْمُؤْمِنِ، إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ، وَلَيْسَ ذَاكَ لِأَحَدٍ إِلَّا لِلْمُؤْمِنِ»',
        en: '"How wonderful is the affair of the believer: all his affairs are good, and that is for no one except the believer."',
      },
      source: {
        fr: 'Sahih Muslim 2999',
        ar: 'صحيح مسلم ٢٩٩٩',
        en: 'Sahih Muslim 2999',
      },
    },
    question: {
      fr: "Le hadith poursuit en citant deux situations opposées qui produisent pourtant le même résultat pour le croyant. Lesquelles — et qu'exige chacune de lui ?",
      ar: 'يتابع الحديث فيذكر حالتين متضادّتين تُثمران مع ذلك النتيجة نفسها للمؤمن. فما هما؟ وماذا تتطلّب كلُّ واحدة منه؟',
      en: 'The hadith goes on to name two opposite situations that nonetheless produce the same outcome for the believer. Which two — and what does each one require of him?',
    },
  },
  {
    id: 'hadith-gharib',
    courseSlug: 'sciences-hadith',
    lessonId: '006-etranger',
    kind: 'hadith',
    quote: {
      ar: '«كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ»',
      translation: {
        fr: "« Sois dans ce monde comme un étranger, ou comme un voyageur de passage. »",
        ar: '«كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ»',
        en: '"Be in this world as though you were a stranger, or a traveller passing through."',
      },
      source: {
        fr: 'Sahih al-Bukhari 6416',
        ar: 'صحيح البخاري ٦٤١٦',
        en: 'Sahih al-Bukhari 6416',
      },
    },
    question: {
      fr: "Ibn 'Umar رضي الله عنهما ajoutait à ce hadith un conseil sur le matin et le soir. Lequel — et pourquoi change-t-il complètement le rapport au temps qui reste ?",
      ar: 'كان ابن عمر رضي الله عنهما يُلحق بهذا الحديث وصيّةً عن الصباح والمساء. فما هي؟ ولماذا تُغيّر نظرتك إلى ما بقي من العمر؟',
      en: "Ibn 'Umar رضي الله عنهما used to add a piece of advice about morning and evening to this hadith. What was it — and why does it change how you see the time you have left?",
    },
  },
  {
    id: 'hadith-la-taghdab',
    courseSlug: 'sciences-hadith',
    lessonId: '007-colere',
    kind: 'hadith',
    quote: {
      ar: '«لَا تَغْضَبْ» فَرَدَّدَ مِرَارًا، قَالَ: «لَا تَغْضَبْ»',
      translation: {
        fr: "« Ne te mets pas en colère. » L'homme répéta sa demande plusieurs fois, et il ﷺ répondit à chaque fois : « Ne te mets pas en colère. »",
        ar: '«لَا تَغْضَبْ» فَرَدَّدَ مِرَارًا، قَالَ: «لَا تَغْضَبْ»',
        en: '"Do not become angry." The man repeated his request several times, and each time he ﷺ said: "Do not become angry."',
      },
      source: {
        fr: 'Sahih al-Bukhari 6116',
        ar: 'صحيح البخاري ٦١١٦',
        en: 'Sahih al-Bukhari 6116',
      },
    },
    question: {
      fr: "Un homme demande un conseil complet, et le Prophète ﷺ ne lui donne que deux mots — trois fois de suite. Que voulait-il lui faire comprendre, et quels gestes concrets la Sunna prescrit-elle au moment où la colère monte ?",
      ar: 'رجلٌ يطلب وصيّةً جامعة، فلا يُعطيه النبيُّ ﷺ إلّا كلمتين — ثلاث مرّات. ماذا أراد أن يُفهمه؟ وما الأعمال العمليّة التي أرشدت إليها السنّة عند اشتداد الغضب؟',
      en: 'A man asks for comprehensive advice, and the Prophet ﷺ gives him only two words — three times over. What was he making him understand, and what concrete steps does the Sunnah prescribe the moment anger rises?',
    },
  },
  {
    id: 'hadith-hubb-li-akhih',
    courseSlug: 'sciences-hadith',
    lessonId: '008-aimer-frere',
    kind: 'hadith',
    quote: {
      ar: '«لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ»',
      translation: {
        fr: "« Aucun de vous ne croit vraiment tant qu'il n'aime pas pour son frère ce qu'il aime pour lui-même. »",
        ar: '«لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ»',
        en: '"None of you truly believes until he loves for his brother what he loves for himself."',
      },
      source: {
        fr: 'Sahih al-Bukhari 13 — Sahih Muslim 45',
        ar: 'صحيح البخاري ١٣ — صحيح مسلم ٤٥',
        en: 'Sahih al-Bukhari 13 — Sahih Muslim 45',
      },
    },
    question: {
      fr: "« Ne croit pas » — s'agit-il d'une sortie de l'Islam ou d'autre chose ? Les savants ont tranché cette négation avec précision : que signifie-t-elle exactement ici ?",
      ar: '«لا يؤمن» — أهو نفيٌ لأصل الإيمان أم لكماله؟ حرّر العلماء هذا النفي تحريرًا دقيقًا: فما معناه هنا على وجه التحديد؟',
      en: '"Does not believe" — is this exclusion from Islam, or something else? The scholars settled this negation precisely: what does it actually mean here?',
    },
  },
  {
    id: 'hadith-lisan-yad',
    courseSlug: 'sciences-hadith',
    lessonId: '009-langue-main',
    kind: 'hadith',
    quote: {
      ar: '«الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ»',
      translation: {
        fr: "« Le musulman est celui dont les musulmans sont préservés de sa langue et de sa main. »",
        ar: '«الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ»',
        en: '"The Muslim is the one from whose tongue and hand the Muslims are safe."',
      },
      source: {
        fr: 'Sahih al-Bukhari 10 — Sahih Muslim 40',
        ar: 'صحيح البخاري ١٠ — صحيح مسلم ٤٠',
        en: 'Sahih al-Bukhari 10 — Sahih Muslim 40',
      },
    },
    question: {
      fr: "Pourquoi la langue est-elle citée AVANT la main, alors que la main semble capable de plus de dégâts ? La réponse des commentateurs change la façon de mesurer ses mots.",
      ar: 'لماذا قُدِّم اللسانُ على اليد مع أنّ اليد تبدو أقدرَ على الأذى؟ جوابُ الشُّرَّاح يُغيّر طريقةَ وزنك لكلامك.',
      en: 'Why is the tongue mentioned BEFORE the hand, when the hand seems capable of more damage? The commentators\' answer changes how you weigh your words.',
    },
  },
  {
    id: 'hadith-nasiha',
    courseSlug: 'sciences-hadith',
    lessonId: '010-nasiha',
    kind: 'hadith',
    quote: {
      ar: '«الدِّينُ النَّصِيحَةُ» قُلْنَا: لِمَنْ؟ قَالَ: «لِلَّهِ، وَلِكِتَابِهِ، وَلِرَسُولِهِ، وَلِأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ»',
      translation: {
        fr: "« La religion est le conseil sincère. » Nous dîmes : « Envers qui ? » Il dit : « Envers Allah, Son Livre, Son Messager, les responsables des musulmans et l'ensemble d'entre eux. »",
        ar: '«الدِّينُ النَّصِيحَةُ» قُلْنَا: لِمَنْ؟ قَالَ: «لِلَّهِ، وَلِكِتَابِهِ، وَلِرَسُولِهِ، وَلِأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ»',
        en: '"The religion is sincere counsel." We said: "To whom?" He said: "To Allah, His Book, His Messenger, the leaders of the Muslims, and their common folk."',
      },
      source: {
        fr: 'Sahih Muslim 55',
        ar: 'صحيح مسلم ٥٥',
        en: 'Sahih Muslim 55',
      },
    },
    question: {
      fr: "Le mot « nasiha » ne se traduit pas par « conseil » sans perte. Que recouvre-t-il réellement — et que signifie être sincère envers un Livre ?",
      ar: 'كلمة «النصيحة» لا تُترجَم بـ«الإرشاد» دون نقص. فما حقيقة معناها؟ وما معنى أن تكون ناصحًا لكتابٍ؟',
      en: 'The word "nasiha" cannot be rendered as "advice" without loss. What does it really cover — and what does it mean to be sincere towards a Book?',
    },
  },
  {
    id: 'hadith-tawakkul',
    courseSlug: 'sciences-hadith',
    lessonId: '011-tawakkul',
    kind: 'hadith',
    quote: {
      ar: '«لَوْ أَنَّكُمْ تَتَوَكَّلُونَ عَلَى اللَّهِ حَقَّ تَوَكُّلِهِ، لَرَزَقَكُمْ كَمَا يَرْزُقُ الطَّيْرَ، تَغْدُو خِمَاصًا وَتَرُوحُ بِطَانًا»',
      translation: {
        fr: "« Si vous placiez votre confiance en Allah comme elle doit l'être, Il vous accorderait votre subsistance comme Il l'accorde aux oiseaux : ils partent le ventre vide et reviennent le ventre plein. »",
        ar: '«لَوْ أَنَّكُمْ تَتَوَكَّلُونَ عَلَى اللَّهِ حَقَّ تَوَكُّلِهِ، لَرَزَقَكُمْ كَمَا يَرْزُقُ الطَّيْرَ، تَغْدُو خِمَاصًا وَتَرُوحُ بِطَانًا»',
        en: '"If you relied upon Allah as He truly should be relied upon, He would provide for you as He provides for the birds: they go out hungry in the morning and return full in the evening."',
      },
      source: {
        fr: 'Sunan at-Tirmidhi 2344 — Sunan Ibn Majah 4164',
        ar: 'سنن الترمذي ٢٣٤٤ — سنن ابن ماجه ٤١٦٤',
        en: 'Sunan at-Tirmidhi 2344 — Sunan Ibn Majah 4164',
      },
    },
    question: {
      fr: "L'oiseau ne reste pas au nid : il « part » chercher. Où se situe alors la limite entre le tawakkul et l'abandon des causes — et ce hadith autorise-t-il à ne rien faire ?",
      ar: 'الطيرُ لا يبقى في وكره، بل «يغدو» طلبًا للرزق. فأين الحدُّ بين التوكّل وتركِ الأخذ بالأسباب؟ وهل في الحديث حجّةٌ للقعود؟',
      en: 'The bird does not stay in the nest: it "goes out" to seek. So where is the line between tawakkul and abandoning the means — and does this hadith license doing nothing?',
    },
  },
  {
    id: 'hadith-qulub',
    courseSlug: 'sciences-hadith',
    lessonId: '012-coeur',
    kind: 'hadith',
    quote: {
      ar: '«إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ، وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ»',
      translation: {
        fr: "« Allah ne regarde ni vos apparences ni vos biens, mais Il regarde vos cœurs et vos actes. »",
        ar: '«إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ، وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ»',
        en: '"Allah does not look at your appearances or your wealth, but He looks at your hearts and your deeds."',
      },
      source: {
        fr: 'Sahih Muslim 2564',
        ar: 'صحيح مسلم ٢٥٦٤',
        en: 'Sahih Muslim 2564',
      },
    },
    question: {
      fr: "Le hadith mentionne les cœurs ET les actes — pas seulement les cœurs. Pourquoi cette précision ferme-t-elle la porte à ceux qui disent « l'essentiel est dans le cœur » ?",
      ar: 'ذكر الحديثُ القلوبَ والأعمالَ معًا لا القلوبَ وحدها. فلماذا تسدُّ هذه الزيادة البابَ على من يقول: «الإيمان في القلب» ويترك العمل؟',
      en: 'The hadith mentions hearts AND deeds — not hearts alone. Why does that addition close the door on those who say "what matters is in the heart"?',
    },
  },
  {
    id: 'hadith-bala',
    courseSlug: 'sciences-hadith',
    lessonId: '013-epreuves',
    kind: 'hadith',
    quote: {
      ar: '«مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلَا وَصَبٍ وَلَا هَمٍّ وَلَا حُزْنٍ وَلَا أَذًى وَلَا غَمٍّ، حَتَّى الشَّوْكَةِ يُشَاكُهَا، إِلَّا كَفَّرَ اللَّهُ بِهَا مِنْ خَطَايَاهُ»',
      translation: {
        fr: "« Nulle fatigue, maladie, souci, tristesse, nuisance ou affliction n'atteint le musulman — jusqu'à l'épine qui le pique — sans qu'Allah n'efface par cela une partie de ses péchés. »",
        ar: '«مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلَا وَصَبٍ وَلَا هَمٍّ وَلَا حُزْنٍ وَلَا أَذًى وَلَا غَمٍّ، حَتَّى الشَّوْكَةِ يُشَاكُهَا، إِلَّا كَفَّرَ اللَّهُ بِهَا مِنْ خَطَايَاهُ»',
        en: '"No fatigue, illness, anxiety, sorrow, harm or distress befalls a Muslim — even a thorn that pricks him — without Allah wiping away some of his sins by it."',
      },
      source: {
        fr: 'Sahih al-Bukhari 5641 — Sahih Muslim 2573',
        ar: 'صحيح البخاري ٥٦٤١ — صحيح مسلم ٢٥٧٣',
        en: 'Sahih al-Bukhari 5641 — Sahih Muslim 2573',
      },
    },
    question: {
      fr: "Le hadith énumère six termes différents là où on aurait pu en dire un seul. Chacun vise une souffrance précise — laquelle correspond à ce que vous portez en ce moment ?",
      ar: 'عدَّد الحديثُ ستّةَ ألفاظٍ حيث كان يكفي لفظٌ واحد. كلُّ لفظٍ يقصد نوعًا معيَّنًا من المعاناة — فأيُّها يُوافق ما تحمله أنت الآن؟',
      en: 'The hadith lists six distinct words where one would have sufficed. Each targets a specific kind of suffering — which one matches what you are carrying right now?',
    },
  },
  {
    id: 'hadith-taqwa',
    courseSlug: 'sciences-hadith',
    lessonId: '014-taqwa',
    kind: 'hadith',
    quote: {
      ar: '«اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ»',
      translation: {
        fr: "« Crains Allah où que tu sois, fais suivre la mauvaise action d'une bonne action qui l'effacera, et comporte-toi avec les gens avec un bon caractère. »",
        ar: '«اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ»',
        en: '"Fear Allah wherever you are, follow a bad deed with a good deed and it will erase it, and treat people with good character."',
      },
      source: {
        fr: 'Sunan at-Tirmidhi 1987',
        ar: 'سنن الترمذي ١٩٨٧',
        en: 'Sunan at-Tirmidhi 1987',
      },
    },
    question: {
      fr: "« Où que tu sois » — pourquoi cette précision, alors que la taqwa semble aller de soi ? Et le hadith couvre trois relations distinctes : sauriez-vous les nommer ?",
      ar: '«حيثما كنت» — لماذا هذا القيد والتقوى تبدو أمرًا بديهيًّا؟ ثمّ إنّ الحديث يجمع ثلاث علاقات متمايزة: أتستطيع تسميتها؟',
      en: '"Wherever you are" — why that qualifier, when taqwa seems self-evident? And the hadith covers three distinct relationships: can you name them?',
    },
  },
  {
    id: 'hadith-mudawama',
    courseSlug: 'sciences-hadith',
    lessonId: '015-constance',
    kind: 'hadith',
    quote: {
      ar: '«أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ»',
      translation: {
        fr: "« Les actes les plus aimés d'Allah sont les plus constants, même s'ils sont peu nombreux. »",
        ar: '«أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ»',
        en: '"The deeds most beloved to Allah are the most constant, even if they are few."',
      },
      source: {
        fr: 'Sahih al-Bukhari 6464 — Sahih Muslim 783',
        ar: 'صحيح البخاري ٦٤٦٤ — صحيح مسلم ٧٨٣',
        en: 'Sahih al-Bukhari 6464 — Sahih Muslim 783',
      },
    },
    question: {
      fr: "Beaucoup abandonnent leur wird au bout de deux semaines. Ce hadith explique pourquoi — et donne le critère pour choisir une pratique qu'on pourra vraiment tenir. Lequel ?",
      ar: 'كثيرون يتركون وِردَهم بعد أسبوعين. هذا الحديث يُبيّن السبب — ويضع ضابطًا لاختيار عملٍ تستطيع الاستمرار عليه حقًّا. فما هو؟',
      en: 'Many abandon their daily wird after two weeks. This hadith explains why — and gives the criterion for choosing a practice you can actually sustain. What is it?',
    },
  },

  // ─────────────────────────────────────────────────────────────
  // Leçons pratiques — fiqh de la salat et de la purification
  // ─────────────────────────────────────────────────────────────
  {
    id: 'salat-masbuq',
    courseSlug: 'bases-fiqh-ibadat-salat',
    lessonId: 'lesson-017',
    kind: 'lesson',
    question: {
      fr: "Vous arrivez à la mosquée pendant le rukū' de l'imam : cette rak'a compte-t-elle pour vous ? Et à partir de quel moment exact est-elle perdue ?",
      ar: 'تدخل المسجد والإمامُ راكع: هل تُحسب لك هذه الركعة؟ ومن أيِّ لحظةٍ بالضبط تفوتك؟',
      en: "You reach the mosque while the imam is in rukū': does that rak'ah count for you? And from exactly which moment is it lost?",
    },
  },
  {
    id: 'salat-jamaa',
    courseSlug: 'bases-fiqh-ibadat-salat',
    lessonId: 'lesson-018',
    kind: 'lesson',
    question: {
      fr: "Que faire si l'imam se trompe et que vous êtes le seul à vous en rendre compte ? La Sunna prévoit une réponse précise, différente pour les hommes et les femmes.",
      ar: 'ماذا تصنع إذا سها الإمامُ وكنتَ وحدَك من انتبه؟ في السنّة جوابٌ محدَّد، ويختلف بين الرجال والنساء.',
      en: 'What do you do if the imam makes a mistake and you are the only one who notices? The Sunnah gives a precise response — and it differs for men and women.',
    },
  },
  {
    id: 'salat-sahw',
    courseSlug: 'bases-fiqh-ibadat-salat',
    lessonId: 'lesson-016',
    kind: 'lesson',
    question: {
      fr: "Vous ne savez plus si vous avez prié trois ou quatre rak'a. Faut-il repartir de zéro, prendre le plus petit nombre, ou le plus grand — et la prosternation de l'oubli vient-elle avant ou après le salam ?",
      ar: 'شككتَ: أصلّيتَ ثلاثًا أم أربعًا؟ أتُعيد الصلاةَ من أوّلها، أم تبني على الأقلّ، أم على الأكثر؟ وهل سجودُ السهو قبل السلام أم بعده؟',
      en: "You lose track of whether you prayed three or four rak'ah. Do you start over, take the lower number, or the higher — and does the prostration of forgetfulness come before or after the salam?",
    },
  },
  {
    id: 'salat-khushu',
    courseSlug: 'bases-fiqh-ibadat-salat',
    lessonId: 'lesson-034',
    kind: 'lesson',
    question: {
      fr: "Votre esprit s'échappe dès le takbir et revient au salam. Ce n'est pas une fatalité : quelles causes concrètes les savants ont-ils identifiées, et par quoi commencer pour y remédier ?",
      ar: 'يشرد ذهنُك من التكبيرة ولا يعود إلّا عند السلام. ليس هذا قدرًا محتومًا: فما الأسباب العمليّة التي حدّدها العلماء؟ وبأيِّها تبدأ العلاج؟',
      en: 'Your mind wanders from the takbir and only returns at the salam. This is not inevitable: what concrete causes did the scholars identify, and where should you start fixing it?',
    },
  },
  {
    id: 'salat-erreurs',
    courseSlug: 'bases-fiqh-ibadat-salat',
    lessonId: 'lesson-033',
    kind: 'lesson',
    question: {
      fr: "Certaines erreurs de prière sont si répandues qu'on ne les remarque plus — et l'une d'elles peut invalider la salat. Combien en connaissez-vous ?",
      ar: 'بعض أخطاء الصلاة انتشرت حتّى صارت لا تُلحَظ — وأحدُها قد يُبطل الصلاة. فكم منها تعرف؟',
      en: 'Some prayer mistakes are so widespread that they go unnoticed — and one of them can invalidate the salat outright. How many can you name?',
    },
  },
  {
    id: 'salat-adhkar',
    courseSlug: 'bases-fiqh-ibadat-salat',
    lessonId: 'lesson-029',
    kind: 'lesson',
    question: {
      fr: "Entre les deux prosternations, entre le rukū' et la station debout : que disait exactement le Prophète ﷺ à chacun de ces moments ?",
      ar: 'بين السجدتين، وبين الركوع والقيام: ماذا كان يقول النبيُّ ﷺ في كلِّ موضعٍ من هذه المواضع بالضبط؟',
      en: "Between the two prostrations, between rukū' and standing: what exactly did the Prophet ﷺ say at each of these points?",
    },
  },
  {
    id: 'salat-nawafil',
    courseSlug: 'bases-fiqh-ibadat-salat',
    lessonId: 'lesson-028',
    kind: 'lesson',
    question: {
      fr: "Douze rak'a surérogatoires par jour, et une maison est bâtie pour vous au Paradis. Sauriez-vous dire lesquelles, et à quel moment de la journée chacune se place ?",
      ar: 'ثنتا عشرة ركعةً تطوّعًا في اليوم، ويُبنى لك بها بيتٌ في الجنّة. أتعرف أيَّها هي؟ وفي أيِّ وقتٍ من اليوم موضعُ كلٍّ منها؟',
      en: "Twelve voluntary rak'ah a day, and a house is built for you in Paradise. Can you say which ones they are, and where each falls in the day?",
    },
  },
  {
    id: 'tahara-wudu',
    courseSlug: 'bases-fiqh-ibadat-purification',
    lessonId: 'lesson-004',
    kind: 'lesson',
    question: {
      fr: "Dans le wudū', tout n'est pas au même niveau : certains gestes sont des obligations, d'autres des sunan. En oublier un seul du premier groupe annule la purification — lesquels sont-ils ?",
      ar: 'ليست أفعالُ الوضوء في مرتبةٍ واحدة: منها فرائضُ ومنها سُنن. وتركُ واحدٍ من الفرائض يُبطل الطهارة — فما هي؟',
      en: "In wudū', not everything carries the same weight: some acts are obligations, others sunan. Omitting a single one from the first group invalidates the purification — which are they?",
    },
  },
  {
    id: 'tahara-tayammum',
    courseSlug: 'bases-fiqh-ibadat-purification',
    lessonId: 'lesson-006',
    kind: 'lesson',
    question: {
      fr: "Pas d'eau, ou une eau qui aggraverait votre maladie : le tayammum devient permis. Mais sur quoi peut-on réellement le faire, et jusqu'à quand reste-t-il valable ?",
      ar: 'لا ماءَ، أو ماءٌ يزيد مرضَك: هنا يُشرع التيمّم. لكن على أيِّ شيءٍ يصحُّ فعلًا؟ وإلى متى يبقى صحيحًا؟',
      en: 'No water, or water that would worsen your illness: tayammum becomes permitted. But on what can it actually be performed, and how long does it remain valid?',
    },
  },
  {
    id: 'tahara-fitra',
    courseSlug: 'bases-fiqh-ibadat-purification',
    lessonId: 'fiqh-010-siwak-fitra',
    kind: 'lesson',
    question: {
      fr: "Le Prophète ﷺ a énuméré des actes appelés « sunan al-fitra ». Combien sont-ils, et y a-t-il un délai à ne pas dépasser pour certains d'entre eux ?",
      ar: 'عدَّ النبيُّ ﷺ أعمالًا سمّاها «سنن الفطرة». فكم عددها؟ وهل لبعضها وقتٌ لا يجوز تجاوزه؟',
      en: 'The Prophet ﷺ listed acts called "sunan al-fitra". How many are they, and is there a time limit not to be exceeded for some of them?',
    },
  },

  // ─────────────────────────────────────────────────────────────
  // Prières spéciales — situations de la vie réelle
  // ─────────────────────────────────────────────────────────────
  {
    id: 'khassa-voyageur',
    courseSlug: 'bases-fiqh-salawat-khassa',
    lessonId: 'lesson-019',
    kind: 'lesson',
    question: {
      fr: "À partir de quelle distance devient-on voyageur, et pendant combien de jours peut-on raccourcir sa prière une fois arrivé ? Deux questions que presque tout voyageur se pose trop tard.",
      ar: 'من أيِّ مسافةٍ تصير مسافرًا؟ وكم يومًا يجوز لك القصرُ بعد وصولك؟ سؤالان يطرحهما أكثرُ المسافرين بعد فوات الأوان.',
      en: 'From what distance do you become a traveller, and for how many days may you shorten your prayer once you arrive? Two questions most travellers ask too late.',
    },
  },
  {
    id: 'khassa-jumua',
    courseSlug: 'bases-fiqh-salawat-khassa',
    lessonId: 'lesson-021',
    kind: 'lesson',
    question: {
      fr: "Vous arrivez à la Jumu'a après le premier sermon, ou pendant la deuxième rak'a : que devez-vous prier exactement ? La réponse n'est pas la même dans les deux cas.",
      ar: 'وصلتَ إلى الجمعة بعد الخطبة الأولى، أو في الركعة الثانية: فماذا تُصلّي بالضبط؟ الجوابُ يختلف بين الحالتين.',
      en: "You arrive at Jumu'a after the first sermon, or during the second rak'ah: what exactly must you pray? The answer is not the same in both cases.",
    },
  },
  {
    id: 'khassa-janaza',
    courseSlug: 'bases-fiqh-salawat-khassa',
    lessonId: 'lesson-023',
    kind: 'lesson',
    question: {
      fr: "La prière funéraire n'a ni rukū' ni sujūd. Que dit-on alors après chacun des quatre takbir — et que faire si l'on rejoint la prière après le deuxième ?",
      ar: 'صلاةُ الجنازة بلا ركوعٍ ولا سجود. فماذا يُقال بعد كلِّ تكبيرةٍ من التكبيرات الأربع؟ وماذا تصنع إن أدركتَها بعد الثانية؟',
      en: "The funeral prayer has neither rukū' nor sujūd. What is said after each of the four takbirs — and what do you do if you join after the second?",
    },
  },
  {
    id: 'khassa-qada',
    courseSlug: 'bases-fiqh-salawat-khassa',
    lessonId: 'lesson-027',
    kind: 'lesson',
    question: {
      fr: "Des années de prières manquées : faut-il les rattraper dans l'ordre, toutes d'un coup, ou étalées ? Et que dit la Sunna sur celui qui s'est simplement endormi ?",
      ar: 'سنواتٌ من الصلوات الفائتة: أتُقضى مرتَّبةً، أم جملةً واحدة، أم مفرَّقة؟ وماذا في السنّة فيمن نام عنها فحسب؟',
      en: 'Years of missed prayers: must they be made up in order, all at once, or spread out? And what does the Sunnah say about someone who simply overslept?',
    },
  },

  // ─────────────────────────────────────────────────────────────
  // Invocations, zakat, jeûne, seerah
  // ─────────────────────────────────────────────────────────────
  {
    id: 'adhkar-sabah',
    courseSlug: 'invocations-quotidiennes',
    lessonId: 'lesson-001',
    kind: 'lesson',
    question: {
      fr: "Une seule invocation du matin protège, selon le hadith, jusqu'au soir. Laquelle — et combien de fois doit-elle être répétée ?",
      ar: 'ذكرٌ واحدٌ من أذكار الصباح يحفظ صاحبَه — كما في الحديث — إلى المساء. فما هو؟ وكم مرّةً يُقال؟',
      en: 'One single morning remembrance protects until evening, according to the hadith. Which one — and how many times must it be repeated?',
    },
  },
  {
    id: 'adhkar-apres-salat',
    courseSlug: 'invocations-salat',
    lessonId: 'adia-008',
    kind: 'lesson',
    question: {
      fr: "Après chaque prière obligatoire, un verset récité une fois ne laisse plus entre vous et le Paradis que la mort. Lequel — et connaissez-vous les dhikr qui l'accompagnent ?",
      ar: 'بعد كلِّ صلاةٍ مكتوبة، آيةٌ تُقرأ مرّةً واحدة لا يبقى بينك وبين الجنّة إلّا الموت. فما هي؟ وهل تعرف الأذكار التي تصحبها؟',
      en: 'After every obligatory prayer, one verse recited once leaves nothing between you and Paradise but death. Which verse — and do you know the adhkar that accompany it?',
    },
  },
  {
    id: 'zakat-beneficiaires',
    courseSlug: 'bases-fiqh-zakat',
    lessonId: 'lesson-035',
    kind: 'lesson',
    question: {
      fr: "Le Coran nomme huit catégories de bénéficiaires de la zakat — pas une de plus. Sauriez-vous les citer, et dire dans laquelle entre un endetté ?",
      ar: 'حصر القرآنُ مصارفَ الزكاة في ثمانية أصنافٍ لا تاسعَ لها. أتستطيع عدَّها؟ وفي أيِّها يدخل الغارم؟',
      en: 'The Quran names eight categories of zakat recipients — not one more. Can you list them, and say which one a person in debt falls under?',
    },
  },
  {
    id: 'zakat-calcul',
    courseSlug: 'bases-fiqh-zakat',
    lessonId: 'lesson-036',
    kind: 'lesson',
    question: {
      fr: "Votre épargne a varié toute l'année : sur quel montant calcule-t-on réellement la zakat, et à partir de quel seuil devient-elle obligatoire aujourd'hui ?",
      ar: 'تقلّب رصيدُك طوال العام: فعلى أيِّ مبلغٍ تُحسب الزكاة حقيقةً؟ ومن أيِّ نصابٍ تجب اليوم؟',
      en: 'Your savings fluctuated all year: on which amount is zakat actually calculated, and from what threshold does it become obligatory today?',
    },
  },
  {
    id: 'siyam-tatawwu',
    courseSlug: 'fiqh-siyam',
    lessonId: 'lesson-008',
    kind: 'lesson',
    question: {
      fr: "Le jeûne d'un seul jour peut effacer les péchés d'une année entière, et celui d'un autre jour de deux années. De quels jours s'agit-il ?",
      ar: 'صيامُ يومٍ واحدٍ يُكفّر سنةً كاملة، وصيامُ يومٍ آخرَ يُكفّر سنتين. فما هذان اليومان؟',
      en: 'Fasting a single day can expiate a whole year, and another day two years. Which days are these?',
    },
  },
  {
    id: 'siyam-mufattirat',
    courseSlug: 'fiqh-siyam',
    lessonId: 'lesson-004',
    kind: 'lesson',
    question: {
      fr: "Une injection, un collyre, un bain de bouche : lesquels rompent le jeûne et lesquels ne le rompent pas ? Le critère retenu par les savants est plus précis qu'on ne le croit.",
      ar: 'حقنةٌ، وقطرةُ عين، ومضمضة: أيُّها يُفطر وأيُّها لا يُفطر؟ الضابط الذي قرّره العلماء أدقُّ ممّا يُظنّ.',
      en: 'An injection, eye drops, rinsing the mouth: which break the fast and which do not? The criterion the scholars settled on is more precise than most assume.',
    },
  },
  {
    id: 'sahaba-mustadafin',
    courseSlug: 'les-compagnons-illustres',
    lessonId: 'lesson-007',
    kind: 'lesson',
    question: {
      fr: "Bilāl رضي الله عنه, écrasé sous une pierre en plein soleil, ne répétait qu'un seul mot. Lequel — et qu'est-il devenu ensuite auprès du Prophète ﷺ ?",
      ar: 'بلالٌ رضي الله عنه، تحت الصخرة في رمضاء مكّة، لم يكن يُردّد إلّا كلمةً واحدة. فما هي؟ وإلامَ صار بعدُ عند رسول الله ﷺ؟',
      en: 'Bilāl رضي الله عنه, crushed under a rock in the blazing sun, kept repeating one single word. Which one — and what did he later become beside the Prophet ﷺ?',
    },
  },
  {
    id: 'seerah-suivre',
    courseSlug: 'seerah-module-5',
    lessonId: 'seerah-030-suivre-prophete',
    kind: 'lesson',
    question: {
      fr: "Suivre le Prophète ﷺ, est-ce imiter chacun de ses gestes ? Les savants distinguent ce qui relève du culte de ce qui relève de l'habitude — où passe la ligne ?",
      ar: 'أَاتّباعُ النبيِّ ﷺ أن تُحاكيَ كلَّ فعلٍ فعله؟ فرَّق العلماءُ بين ما فعله تعبُّدًا وما فعله عادةً — فأين يمرُّ هذا الحدّ؟',
      en: 'Does following the Prophet ﷺ mean imitating every single thing he did? The scholars distinguish acts of worship from acts of habit — where does the line fall?',
    },
  },
  {
    id: 'aqeedah-tawhid',
    courseSlug: 'aqeedah-islamique',
    lessonId: 'lesson-014',
    kind: 'lesson',
    question: {
      fr: "Le tawhid se divise en catégories que tout musulman applique sans toujours les nommer. Quelles sont-elles, et laquelle fut le vrai point de rupture avec les Quraysh ?",
      ar: 'ينقسم التوحيدُ إلى أقسامٍ يعمل بها كلُّ مسلمٍ وإن لم يُسمِّها. فما هي؟ وأيُّها كان موضعَ الخلاف الحقيقيِّ مع قريش؟',
      en: 'Tawhid divides into categories every Muslim applies without always naming them. What are they, and which one was the real breaking point with Quraysh?',
    },
  },
  {
    id: 'famille-droits-epoux',
    courseSlug: 'fiqh-famille',
    lessonId: 'famille-005',
    kind: 'lesson',
    question: {
      fr: "Les droits des époux ne sont pas symétriques, mais ils sont réciproques. Quels sont ceux que la Shari'a impose à chacun — et lesquels sont le plus souvent oubliés ?",
      ar: 'حقوقُ الزوجين ليست متماثلةً، لكنّها متبادلة. فما الذي أوجبته الشريعةُ على كلٍّ منهما؟ وأيُّها أكثرُ ما يُنسى؟',
      en: 'Spousal rights are not symmetrical, but they are mutual. What does the Shari\'a require of each — and which of them are most often forgotten?',
    },
  },
]
