/**
 * Quiz Histoire des 4 Imams
 * 
 * Ce quiz couvre la vie et les contributions des 4 grands imams
 * des écoles juridiques sunnites.
 * 
 * Niveau : Débutant à Intermédiaire
 * Questions : 15
 */

import { Quiz, Question } from '../types';

const questions: Question[] = [
  // --- Questions Faciles (5) ---
  {
    id: 'history-q001',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Combien y a-t-il d\'écoles juridiques (madhahib) principales dans le sunnisme ?',
      ar: 'كم عدد المذاهب الفقهية الرئيسية في السنة؟',
      en: 'How many main schools of jurisprudence (madhahib) are there in Sunni Islam?',
    },
    options: [
      { id: 'a', text: { fr: '2', ar: '٢', en: '2' } },
      { id: 'b', text: { fr: '3', ar: '٣', en: '3' } },
      { id: 'c', text: { fr: '4', ar: '٤', en: '4' } },
      { id: 'd', text: { fr: '5', ar: '٥', en: '5' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Les 4 écoles sont : Hanafi (Abu Hanifa), Maliki (Malik), Shafi\'i (Ash-Shafi\'i), et Hanbali (Ahmad ibn Hanbal). Elles sont toutes valides et reconnues.',
      ar: 'المذاهب الأربعة هي: الحنفي (أبو حنيفة)، والمالكي (مالك)، والشافعي (الشافعي)، والحنبلي (أحمد بن حنبل). وكلها معتبرة ومقبولة.',
      en: 'The 4 schools are: Hanafi (Abu Hanifa), Maliki (Malik), Shafi\'i (Ash-Shafi\'i), and Hanbali (Ahmad ibn Hanbal). They are all valid and recognized.',
    },
    reference: {
      courseSlug: 'les-4-grands-imams',
      lessonId: '001-introduction',
    },
    points: 10,
    tags: ['history', 'madhahib', 'fiqh'],
  },
  {
    id: 'history-q002',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Qui est le fondateur de l\'école Hanafi ?',
      ar: 'من مؤسس المذهب الحنفي؟',
      en: 'Who is the founder of the Hanafi school?',
    },
    options: [
      { id: 'a', text: { fr: 'Imam Malik', ar: 'الإمام مالك', en: 'Imam Malik' } },
      { id: 'b', text: { fr: 'Imam Ash-Shafi\'i', ar: 'الإمام الشافعي', en: 'Imam Ash-Shafi\'i' } },
      { id: 'c', text: { fr: 'Imam Abu Hanifa', ar: 'الإمام أبو حنيفة', en: 'Imam Abu Hanifa' } },
      { id: 'd', text: { fr: 'Imam Ahmad', ar: 'الإمام أحمد', en: 'Imam Ahmad' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Abu Hanifa an-Nu\'man (80-150 H / 699-767) est le fondateur de l\'école Hanafi, la plus ancienne et la plus répandue (Turquie, sous-continent indien, Asie centrale).',
      ar: 'أبو حنيفة النعمان (80-150 هـ / 699-767 م) مؤسس المذهب الحنفي، وهو أقدم المذاهب وأكثرها انتشاراً (تركيا، شبه القارة الهندية، آسيا الوسطى).',
      en: 'Abu Hanifa an-Nu\'man (80-150 H / 699-767) is the founder of the Hanafi school, the oldest and most widespread (Turkey, Indian subcontinent, Central Asia).',
    },
    reference: {
      courseSlug: 'les-4-grands-imams',
      lessonId: '002-abu-hanifa',
    },
    points: 10,
    tags: ['history', 'hanafi', 'abu-hanifa'],
  },
  {
    id: 'history-q003',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Dans quelle ville Imam Malik a-t-il vécu et enseigné ?',
      ar: 'في أي مدينة عاش الإمام مالك ودرّس؟',
      en: 'In which city did Imam Malik live and teach?',
    },
    options: [
      { id: 'a', text: { fr: 'Kufa', ar: 'الكوفة', en: 'Kufa' } },
      { id: 'b', text: { fr: 'Bagdad', ar: 'بغداد', en: 'Baghdad' } },
      { id: 'c', text: { fr: 'Médine', ar: 'المدينة', en: 'Medina' } },
      { id: 'd', text: { fr: 'Damas', ar: 'دمشق', en: 'Damascus' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Imam Malik (93-179 H) a vécu toute sa vie à Médine, la ville du Prophète ﷺ. C\'est pourquoi son madhab accorde une grande importance à la pratique des Médinois (\'Amal Ahl al-Madina).',
      ar: 'الإمام مالك (93-179 هـ) عاش طوال حياته في المدينة المنورة. ولذلك يُعطي مذهبه أهمية كبيرة لعمل أهل المدينة.',
      en: 'Imam Malik (93-179 H) lived his entire life in Medina, the city of the Prophet ﷺ. That\'s why his madhab gives great importance to the practice of the Medinans (\'Amal Ahl al-Madina).',
    },
    reference: {
      courseSlug: 'les-4-grands-imams',
      lessonId: '003-malik',
    },
    points: 10,
    tags: ['history', 'maliki', 'medina'],
  },
  {
    id: 'history-q004',
    type: 'single',
    difficulty: 'easy',
    question: {
      fr: 'Quel imam a écrit le célèbre livre "Ar-Risala" sur les fondements du fiqh ?',
      ar: 'أي إمام ألّف كتاب "الرسالة" الشهير في أصول الفقه؟',
      en: 'Which imam wrote the famous book "Ar-Risala" on the foundations of fiqh?',
    },
    options: [
      { id: 'a', text: { fr: 'Abu Hanifa', ar: 'أبو حنيفة', en: 'Abu Hanifa' } },
      { id: 'b', text: { fr: 'Malik', ar: 'مالك', en: 'Malik' } },
      { id: 'c', text: { fr: 'Ash-Shafi\'i', ar: 'الشافعي', en: 'Ash-Shafi\'i' } },
      { id: 'd', text: { fr: 'Ahmad', ar: 'أحمد', en: 'Ahmad' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Imam Ash-Shafi\'i (150-204 H) est considéré comme le fondateur de la science des Usul al-Fiqh (fondements du fiqh). Son livre "Ar-Risala" est le premier ouvrage systématique sur ce sujet.',
      ar: 'الإمام الشافعي (150-204 هـ) يُعتبر مؤسس علم أصول الفقه. كتابه "الرسالة" هو أول مؤلف منهجي في هذا العلم.',
      en: 'Imam Ash-Shafi\'i (150-204 H) is considered the founder of Usul al-Fiqh (foundations of fiqh). His book "Ar-Risala" is the first systematic work on this subject.',
    },
    reference: {
      courseSlug: 'les-4-grands-imams',
      lessonId: '004-shafii',
    },
    points: 10,
    tags: ['history', 'shafii', 'usul'],
  },
  {
    id: 'history-q005',
    type: 'boolean',
    difficulty: 'easy',
    question: {
      fr: 'Imam Ahmad ibn Hanbal a été emprisonné et torturé pour sa défense de la Sunna.',
      ar: 'الإمام أحمد بن حنبل سُجن وعُذّب دفاعاً عن السنة.',
      en: 'Imam Ahmad ibn Hanbal was imprisoned and tortured for his defense of the Sunnah.',
    },
    options: [
      { id: 'a', text: { fr: 'Vrai', ar: 'صحيح', en: 'True' } },
      { id: 'b', text: { fr: 'Faux', ar: 'خطأ', en: 'False' } },
    ],
    correctAnswer: true,
    explanation: {
      fr: 'Pendant la Mihna (inquisition mu\'tazilite), Imam Ahmad (164-241 H) a refusé de dire que le Coran était créé. Il fut emprisonné et flagellé mais n\'a jamais cédé. Il est devenu le symbole de la résistance pour la Sunna.',
      ar: 'خلال المحنة (الفتنة المعتزلية)، رفض الإمام أحمد (164-241 هـ) القول بخلق القرآن. سُجن وجُلد لكنه لم يتراجع. أصبح رمز المقاومة دفاعاً عن السنة.',
      en: 'During the Mihna (Mu\'tazilite inquisition), Imam Ahmad (164-241 H) refused to say the Quran was created. He was imprisoned and flogged but never yielded. He became a symbol of resistance for the Sunnah.',
    },
    reference: {
      courseSlug: 'les-4-grands-imams',
      lessonId: '005-ahmad',
    },
    points: 10,
    tags: ['history', 'hanbali', 'mihna'],
  },

  // --- Questions Moyennes (6) ---
  {
    id: 'history-q006',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quelle est la particularité de l\'école Hanafi en matière de méthodologie ?',
      ar: 'ما خصوصية المذهب الحنفي في المنهجية؟',
      en: 'What is distinctive about the Hanafi school\'s methodology?',
    },
    options: [
      { id: 'a', text: { fr: 'L\'utilisation extensive du Ra\'y (opinion raisonnée)', ar: 'الاستخدام الواسع للرأي', en: 'Extensive use of Ra\'y (reasoned opinion)' } },
      { id: 'b', text: { fr: 'Le rejet total du Qiyas', ar: 'رفض القياس كلياً', en: 'Total rejection of Qiyas' } },
      { id: 'c', text: { fr: 'L\'acceptation uniquement des hadiths mutawatir', ar: 'قبول الأحاديث المتواترة فقط', en: 'Acceptance only of mutawatir hadiths' } },
      { id: 'd', text: { fr: 'Le suivi aveugle des Compagnons', ar: 'التقليد الأعمى للصحابة', en: 'Blind following of Companions' } },
    ],
    correctAnswer: 0,
    explanation: {
      fr: 'L\'école Hanafi est connue pour l\'école de Ra\'y (opinion raisonnée), utilisant le Qiyas et l\'Istihsan. Abu Hanifa vivait à Kufa, loin de Médine, avec moins d\'accès direct aux hadiths, d\'où le recours au raisonnement.',
      ar: 'المذهب الحنفي معروف بمدرسة الرأي، يستخدم القياس والاستحسان. أبو حنيفة عاش في الكوفة، بعيداً عن المدينة، مع وصول أقل للأحاديث مباشرة، لذا اعتمد على الاجتهاد.',
      en: 'The Hanafi school is known for the school of Ra\'y (reasoned opinion), using Qiyas and Istihsan. Abu Hanifa lived in Kufa, far from Medina, with less direct access to hadiths, hence the reliance on reasoning.',
    },
    reference: {
      courseSlug: 'les-4-grands-imams',
      lessonId: '002-abu-hanifa',
    },
    points: 15,
    tags: ['history', 'hanafi', 'ray'],
  },
  {
    id: 'history-q007',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quel est le livre principal de l\'Imam Malik ?',
      ar: 'ما هو الكتاب الرئيسي للإمام مالك؟',
      en: 'What is Imam Malik\'s main book?',
    },
    options: [
      { id: 'a', text: { fr: 'Al-Umm', ar: 'الأم', en: 'Al-Umm' } },
      { id: 'b', text: { fr: 'Al-Muwatta\'', ar: 'الموطأ', en: 'Al-Muwatta\'' } },
      { id: 'c', text: { fr: 'Al-Musnad', ar: 'المسند', en: 'Al-Musnad' } },
      { id: 'd', text: { fr: 'Ar-Risala', ar: 'الرسالة', en: 'Ar-Risala' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Al-Muwatta\' ("Le Chemin Aplani") est le livre de Malik, le plus ancien recueil de hadith et de fiqh. Il contient des hadiths, des fatawa de Compagnons, et des pratiques des Médinois.',
      ar: 'الموطأ هو كتاب مالك، وهو أقدم مؤلف في الحديث والفقه. يحتوي على أحاديث وفتاوى الصحابة وعمل أهل المدينة.',
      en: 'Al-Muwatta\' ("The Well-Trodden Path") is Malik\'s book, the oldest compilation of hadith and fiqh. It contains hadiths, Companion fatwas, and Medinan practices.',
    },
    reference: {
      courseSlug: 'les-4-grands-imams',
      lessonId: '003-malik',
    },
    points: 15,
    tags: ['history', 'maliki', 'muwatta'],
  },
  {
    id: 'history-q008',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Qui fut le professeur d\'Imam Ash-Shafi\'i à Médine ?',
      ar: 'من كان شيخ الإمام الشافعي في المدينة؟',
      en: 'Who was Imam Ash-Shafi\'i\'s teacher in Medina?',
    },
    options: [
      { id: 'a', text: { fr: 'Abu Hanifa', ar: 'أبو حنيفة', en: 'Abu Hanifa' } },
      { id: 'b', text: { fr: 'Imam Malik', ar: 'الإمام مالك', en: 'Imam Malik' } },
      { id: 'c', text: { fr: 'Imam Ahmad', ar: 'الإمام أحمد', en: 'Imam Ahmad' } },
      { id: 'd', text: { fr: 'Sufyan ath-Thawri', ar: 'سفيان الثوري', en: 'Sufyan ath-Thawri' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Ash-Shafi\'i a étudié sous Imam Malik à Médine après avoir mémorisé Al-Muwatta\'. Il a ensuite étudié avec les élèves d\'Abu Hanifa en Irak, ce qui lui a permis de synthétiser les deux écoles.',
      ar: 'الشافعي درس على الإمام مالك في المدينة بعد أن حفظ الموطأ. ثم درس على تلاميذ أبي حنيفة في العراق، مما مكّنه من الجمع بين المدرستين.',
      en: 'Ash-Shafi\'i studied under Imam Malik in Medina after memorizing Al-Muwatta\'. He then studied with Abu Hanifa\'s students in Iraq, allowing him to synthesize both schools.',
    },
    reference: {
      courseSlug: 'les-4-grands-imams',
      lessonId: '004-shafii',
    },
    points: 15,
    tags: ['history', 'shafii', 'malik'],
  },
  {
    id: 'history-q009',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Pourquoi Imam Ahmad ibn Hanbal est-il plus connu comme muhaddith que comme faqih ?',
      ar: 'لماذا الإمام أحمد بن حنبل معروف كمحدث أكثر منه كفقيه؟',
      en: 'Why is Imam Ahmad ibn Hanbal better known as a muhaddith than as a faqih?',
    },
    options: [
      { id: 'a', text: { fr: 'Il n\'a jamais donné de fatawa', ar: 'لم يُفتِ أبداً', en: 'He never gave fatwas' } },
      { id: 'b', text: { fr: 'Son Musnad contient plus de 27 000 hadiths', ar: 'مسنده يحتوي أكثر من 27 ألف حديث', en: 'His Musnad contains over 27,000 hadiths' } },
      { id: 'c', text: { fr: 'Il détestait le fiqh', ar: 'كان يكره الفقه', en: 'He hated fiqh' } },
      { id: 'd', text: { fr: 'Son école a disparu', ar: 'مذهبه انقرض', en: 'His school disappeared' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Le Musnad d\'Ahmad est l\'une des plus grandes collections de hadiths avec plus de 27 000 narrations. Il préférait citer les hadiths plutôt que donner son opinion personnelle, d\'où sa réputation de muhaddith.',
      ar: 'مسند أحمد من أكبر مجموعات الحديث بأكثر من 27 ألف رواية. كان يُفضل ذكر الأحاديث على إبداء رأيه الشخصي، لذا اشتهر كمحدث.',
      en: 'Ahmad\'s Musnad is one of the largest hadith collections with over 27,000 narrations. He preferred citing hadiths over giving personal opinions, hence his reputation as a muhaddith.',
    },
    reference: {
      courseSlug: 'les-4-grands-imams',
      lessonId: '005-ahmad',
    },
    points: 15,
    tags: ['history', 'hanbali', 'musnad'],
  },
  {
    id: 'history-q010',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Quel calife a proposé à Imam Malik de faire d\'Al-Muwatta\' la loi officielle de l\'empire ?',
      ar: 'أي خليفة عرض على الإمام مالك جعل الموطأ قانوناً رسمياً للدولة؟',
      en: 'Which caliph proposed to Imam Malik to make Al-Muwatta\' the official law of the empire?',
    },
    options: [
      { id: 'a', text: { fr: 'Umar ibn Abd al-Aziz', ar: 'عمر بن عبد العزيز', en: 'Umar ibn Abd al-Aziz' } },
      { id: 'b', text: { fr: 'Al-Mansur et Harun ar-Rashid', ar: 'المنصور وهارون الرشيد', en: 'Al-Mansur and Harun ar-Rashid' } },
      { id: 'c', text: { fr: 'Al-Ma\'mun', ar: 'المأمون', en: 'Al-Ma\'mun' } },
      { id: 'd', text: { fr: 'Mu\'awiya', ar: 'معاوية', en: 'Mu\'awiya' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Les califes abbassides Al-Mansur et Harun ar-Rashid ont proposé de faire d\'Al-Muwatta\' la loi officielle. Malik a refusé, car les Compagnons s\'étaient dispersés et d\'autres régions avaient leur propre savoir.',
      ar: 'الخليفتان العباسيان المنصور وهارون الرشيد عرضا جعل الموطأ قانوناً رسمياً. رفض مالك لأن الصحابة تفرقوا ولكل منطقة علمها.',
      en: 'Abbasid caliphs Al-Mansur and Harun ar-Rashid proposed making Al-Muwatta\' the official law. Malik refused, as the Companions had dispersed and other regions had their own knowledge.',
    },
    reference: {
      courseSlug: 'les-4-grands-imams',
      lessonId: '003-malik',
    },
    points: 15,
    tags: ['history', 'maliki', 'muwatta'],
  },
  {
    id: 'history-q011',
    type: 'single',
    difficulty: 'medium',
    question: {
      fr: 'Où Imam Ash-Shafi\'i a-t-il passé les dernières années de sa vie ?',
      ar: 'أين قضى الإمام الشافعي السنوات الأخيرة من حياته؟',
      en: 'Where did Imam Ash-Shafi\'i spend the last years of his life?',
    },
    options: [
      { id: 'a', text: { fr: 'Médine', ar: 'المدينة', en: 'Medina' } },
      { id: 'b', text: { fr: 'Bagdad', ar: 'بغداد', en: 'Baghdad' } },
      { id: 'c', text: { fr: 'Égypte (Fustat/Le Caire)', ar: 'مصر (الفسطاط/القاهرة)', en: 'Egypt (Fustat/Cairo)' } },
      { id: 'd', text: { fr: 'Damas', ar: 'دمشق', en: 'Damascus' } },
    ],
    correctAnswer: 2,
    explanation: {
      fr: 'Ash-Shafi\'i a vécu ses dernières années en Égypte (199-204 H) où il a révisé son madhab (le "nouveau" madhab). Sa tombe se trouve au Caire et est encore visitée aujourd\'hui.',
      ar: 'عاش الشافعي سنواته الأخيرة في مصر (199-204 هـ) حيث راجع مذهبه (المذهب "الجديد"). قبره في القاهرة ولا يزال يُزار حتى اليوم.',
      en: 'Ash-Shafi\'i lived his last years in Egypt (199-204 H) where he revised his madhab (the "new" madhab). His grave is in Cairo and is still visited today.',
    },
    reference: {
      courseSlug: 'les-4-grands-imams',
      lessonId: '004-shafii',
    },
    points: 15,
    tags: ['history', 'shafii', 'egypt'],
  },

  // --- Questions Difficiles (4) ---
  {
    id: 'history-q012',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle était la position des 4 imams sur le suivi aveugle (taqlid) ?',
      ar: 'ما كان موقف الأئمة الأربعة من التقليد الأعمى؟',
      en: 'What was the position of the 4 imams on blind following (taqlid)?',
    },
    options: [
      { id: 'a', text: { fr: 'Ils l\'ont encouragé', ar: 'شجعوه', en: 'They encouraged it' } },
      { id: 'b', text: { fr: 'Ils l\'ont interdit et demandé de suivre les preuves', ar: 'نهوا عنه وأمروا باتباع الدليل', en: 'They forbade it and asked to follow evidence' } },
      { id: 'c', text: { fr: 'Ils n\'ont rien dit à ce sujet', ar: 'لم يتكلموا عنه', en: 'They said nothing about it' } },
      { id: 'd', text: { fr: 'Seul Malik l\'a interdit', ar: 'مالك فقط نهى عنه', en: 'Only Malik forbade it' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Tous les 4 imams ont dit : « Si le hadith est authentique, c\'est mon madhab » (Shafi\'i). « Ne prenez pas de ma parole ce qui contredit le Livre et la Sunna » (Abu Hanifa). Ils voulaient qu\'on suive les preuves, pas leurs personnes.',
      ar: 'كل الأئمة الأربعة قالوا: «إذا صح الحديث فهو مذهبي» (الشافعي). «دعوا قولي لكتاب الله وسنة رسوله» (أبو حنيفة). أرادوا اتباع الدليل لا أشخاصهم.',
      en: 'All 4 imams said: "If the hadith is authentic, it is my madhab" (Shafi\'i). "Leave my saying for Allah\'s Book and His Messenger\'s Sunnah" (Abu Hanifa). They wanted people to follow evidence, not their persons.',
    },
    reference: {
      courseSlug: 'les-4-grands-imams',
      lessonId: '006-methodology',
    },
    points: 20,
    tags: ['history', 'taqlid', 'methodology'],
  },
  {
    id: 'history-q013',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quel était le métier d\'Abu Hanifa avant de devenir savant à plein temps ?',
      ar: 'ما كانت مهنة أبي حنيفة قبل أن يتفرغ للعلم؟',
      en: 'What was Abu Hanifa\'s profession before becoming a full-time scholar?',
    },
    options: [
      { id: 'a', text: { fr: 'Forgeron', ar: 'حداد', en: 'Blacksmith' } },
      { id: 'b', text: { fr: 'Marchand de tissus/soie (khazzaz)', ar: 'تاجر أقمشة/حرير (خزّاز)', en: 'Silk/fabric merchant (khazzaz)' } },
      { id: 'c', text: { fr: 'Agriculteur', ar: 'مزارع', en: 'Farmer' } },
      { id: 'd', text: { fr: 'Scribe du calife', ar: 'كاتب الخليفة', en: 'Caliph\'s scribe' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'Abu Hanifa était un riche marchand de tissus et soie (khazzaz) à Kufa. Cette expérience commerciale a influencé son fiqh des transactions (mu\'amalat), très développé dans l\'école Hanafi.',
      ar: 'كان أبو حنيفة تاجراً غنياً للأقمشة والحرير (خزّاز) في الكوفة. هذه الخبرة التجارية أثرت على فقهه في المعاملات، المتطور جداً في المذهب الحنفي.',
      en: 'Abu Hanifa was a wealthy silk/fabric merchant (khazzaz) in Kufa. This commercial experience influenced his fiqh of transactions (mu\'amalat), very developed in the Hanafi school.',
    },
    reference: {
      courseSlug: 'les-4-grands-imams',
      lessonId: '002-abu-hanifa',
    },
    points: 20,
    tags: ['history', 'hanafi', 'biography'],
  },
  {
    id: 'history-q014',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Quelle épreuve (Mihna) Imam Ahmad a-t-il subi sous Al-Ma\'mun ?',
      ar: 'أي فتنة تعرض لها الإمام أحمد في عهد المأمون؟',
      en: 'What trial (Mihna) did Imam Ahmad undergo under Al-Ma\'mun?',
    },
    options: [
      { id: 'a', text: { fr: 'Accusé de corruption financière', ar: 'اتُّهم بالفساد المالي', en: 'Accused of financial corruption' } },
      { id: 'b', text: { fr: 'Forcé de dire que le Coran était créé', ar: 'أُجبر على القول بخلق القرآن', en: 'Forced to say the Quran was created' } },
      { id: 'c', text: { fr: 'Empêché d\'enseigner', ar: 'مُنع من التدريس', en: 'Prevented from teaching' } },
      { id: 'd', text: { fr: 'Exilé en Égypte', ar: 'نُفي إلى مصر', en: 'Exiled to Egypt' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'La Mihna était l\'inquisition mu\'tazilite où les savants étaient forcés d\'affirmer que le Coran était créé (position mu\'tazilite). Ahmad a refusé, affirmant que le Coran est la Parole incréée d\'Allah.',
      ar: 'المحنة كانت محاكمة معتزلية حيث أُجبر العلماء على القول بخلق القرآن (الموقف المعتزلي). رفض أحمد مؤكداً أن القرآن كلام الله غير مخلوق.',
      en: 'The Mihna was the Mu\'tazilite inquisition where scholars were forced to affirm the Quran was created (Mu\'tazilite position). Ahmad refused, affirming the Quran is Allah\'s uncreated Speech.',
    },
    reference: {
      courseSlug: 'les-4-grands-imams',
      lessonId: '005-ahmad',
    },
    points: 20,
    tags: ['history', 'hanbali', 'mihna'],
  },
  {
    id: 'history-q015',
    type: 'single',
    difficulty: 'hard',
    question: {
      fr: 'Pourquoi Ash-Shafi\'i a-t-il deux madhabs : l\'ancien (qadim) et le nouveau (jadid) ?',
      ar: 'لماذا للشافعي مذهبان: القديم والجديد؟',
      en: 'Why does Ash-Shafi\'i have two madhabs: the old (qadim) and the new (jadid)?',
    },
    options: [
      { id: 'a', text: { fr: 'Il a changé d\'avis sur tout', ar: 'غيّر رأيه في كل شيء', en: 'He changed his mind on everything' } },
      { id: 'b', text: { fr: 'En Égypte, il a accédé à de nouveaux hadiths et traditions', ar: 'في مصر اطلع على أحاديث وآثار جديدة', en: 'In Egypt, he accessed new hadiths and traditions' } },
      { id: 'c', text: { fr: 'Ses élèves ont inventé le "nouveau"', ar: 'تلاميذه اخترعوا "الجديد"', en: 'His students invented the "new"' } },
      { id: 'd', text: { fr: 'Pression politique', ar: 'ضغط سياسي', en: 'Political pressure' } },
    ],
    correctAnswer: 1,
    explanation: {
      fr: 'En Égypte, Ash-Shafi\'i a accédé aux hadiths et traditions égyptiens qu\'il ne connaissait pas en Irak. Il a révisé de nombreuses positions. Le "nouveau" madhab est généralement celui suivi, sauf exceptions.',
      ar: 'في مصر اطلع الشافعي على أحاديث وآثار مصرية لم يكن يعرفها في العراق. فراجع كثيراً من أقواله. المذهب "الجديد" هو المتبع عموماً إلا في مسائل.',
      en: 'In Egypt, Ash-Shafi\'i accessed Egyptian hadiths and traditions he didn\'t know in Iraq. He revised many positions. The "new" madhab is generally followed, with exceptions.',
    },
    reference: {
      courseSlug: 'les-4-grands-imams',
      lessonId: '004-shafii',
    },
    points: 20,
    tags: ['history', 'shafii', 'jadid'],
  },
];

// ============================================
// Export du Quiz
// ============================================

export const quizHistory4Imams: Quiz = {
  id: 'quiz-history-4-imams',
  type: 'module',
  courseSlug: 'les-4-grands-imams',
  title: {
    fr: 'Quiz : Les 4 Grands Imams',
    ar: 'اختبار: الأئمة الأربعة',
    en: 'Quiz: The 4 Great Imams',
  },
  description: {
    fr: 'Testez vos connaissances sur la vie et les contributions des 4 imams fondateurs des écoles juridiques.',
    ar: 'اختبر معلوماتك عن حياة ومساهمات الأئمة الأربعة مؤسسي المذاهب الفقهية.',
    en: 'Test your knowledge of the lives and contributions of the 4 imams who founded the schools of jurisprudence.',
  },
  instructions: {
    fr: 'Découvrez l\'histoire fascinante des savants qui ont structuré le fiqh islamique.',
    ar: 'اكتشف التاريخ المثير للعلماء الذين بنوا الفقه الإسلامي.',
    en: 'Discover the fascinating history of the scholars who structured Islamic fiqh.',
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

export default quizHistory4Imams;
