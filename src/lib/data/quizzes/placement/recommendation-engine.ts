/**
 * Système de Recommandation de Cours
 * 
 * Analyse les résultats du quiz de placement et recommande
 * des cours adaptés au niveau de l'étudiant.
 */

import { Quiz } from '../types';

// ============================================
// Types pour le système de recommandation
// ============================================

export interface CategoryScore {
  category: string;
  score: number;
  maxScore: number;
  percentage: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  questionsAnswered: number;
  correctAnswers: number;
}

export interface PlacementResult {
  overallScore: number;
  overallPercentage: number;
  overallLevel: 'beginner' | 'intermediate' | 'advanced';
  categoryScores: CategoryScore[];
  strengths: string[];
  weaknesses: string[];
  recommendedCourses: CourseRecommendation[];
  learningPath: LearningPath;
}

export interface CourseRecommendation {
  courseSlug: string;
  title: {
    fr: string;
    ar: string;
    en: string;
  };
  priority: 'high' | 'medium' | 'low';
  reason: {
    fr: string;
    ar: string;
    en: string;
  };
  category: string;
  estimatedDuration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface LearningPath {
  name: {
    fr: string;
    ar: string;
    en: string;
  };
  description: {
    fr: string;
    ar: string;
    en: string;
  };
  phases: LearningPhase[];
}

export interface LearningPhase {
  order: number;
  name: {
    fr: string;
    ar: string;
    en: string;
  };
  courses: string[]; // courseSlug[]
  duration: string;
  objectives: {
    fr: string[];
    ar: string[];
    en: string[];
  };
}

// ============================================
// Catalogue des cours disponibles
// ============================================

const coursesCatalog: CourseRecommendation[] = [
  // Aqeedah
  {
    courseSlug: 'aqeedah-islamique',
    title: {
      fr: 'Les Fondements de la Foi',
      ar: 'أصول الإيمان',
      en: 'Foundations of Faith',
    },
    priority: 'high',
    reason: {
      fr: 'Base essentielle de la croyance islamique',
      ar: 'أساس العقيدة الإسلامية',
      en: 'Essential foundation of Islamic belief',
    },
    category: 'aqeedah',
    estimatedDuration: '4 semaines',
    difficulty: 'beginner',
  },
  {
    courseSlug: 'aqeedah-avancee',
    title: {
      fr: 'Aqeedah Avancée',
      ar: 'العقيدة المتقدمة',
      en: 'Advanced Aqeedah',
    },
    priority: 'medium',
    reason: {
      fr: 'Approfondissement des questions de croyance',
      ar: 'تعميق مسائل العقيدة',
      en: 'Deepening creed issues',
    },
    category: 'aqeedah',
    estimatedDuration: '6 semaines',
    difficulty: 'advanced',
  },

  // Fiqh
  {
    courseSlug: 'bases-fiqh-ibadat-purification',
    title: {
      fr: 'La Purification (Tahara)',
      ar: 'الطهارة',
      en: 'Purification (Tahara)',
    },
    priority: 'high',
    reason: {
      fr: 'Prérequis pour la prière',
      ar: 'شرط للصلاة',
      en: 'Prerequisite for prayer',
    },
    category: 'fiqh',
    estimatedDuration: '2 semaines',
    difficulty: 'beginner',
  },
  {
    courseSlug: 'bases-fiqh-ibadat-salat',
    title: {
      fr: 'La Prière (Salat)',
      ar: 'الصلاة',
      en: 'Prayer (Salat)',
    },
    priority: 'high',
    reason: {
      fr: 'Pilier fondamental de l\'Islam',
      ar: 'ركن أساسي في الإسلام',
      en: 'Fundamental pillar of Islam',
    },
    category: 'fiqh',
    estimatedDuration: '4 semaines',
    difficulty: 'beginner',
  },
  {
    courseSlug: 'fiqh-siyam',
    title: {
      fr: 'Le Jeûne (Siyam)',
      ar: 'الصيام',
      en: 'Fasting (Siyam)',
    },
    priority: 'medium',
    reason: {
      fr: 'Comprendre les règles du Ramadan',
      ar: 'فهم أحكام رمضان',
      en: 'Understanding Ramadan rules',
    },
    category: 'fiqh',
    estimatedDuration: '2 semaines',
    difficulty: 'beginner',
  },
  {
    courseSlug: 'bases-fiqh-zakat',
    title: {
      fr: 'La Zakat',
      ar: 'الزكاة',
      en: 'Zakat',
    },
    priority: 'medium',
    reason: {
      fr: 'Pilier de solidarité sociale',
      ar: 'ركن التكافل الاجتماعي',
      en: 'Pillar of social solidarity',
    },
    category: 'fiqh',
    estimatedDuration: '2 semaines',
    difficulty: 'intermediate',
  },
  {
    courseSlug: 'fiqh-hajj',
    title: {
      fr: 'Le Hajj et la Omra',
      ar: 'الحج والعمرة',
      en: 'Hajj and Umrah',
    },
    priority: 'low',
    reason: {
      fr: 'Le cinquième pilier de l\'Islam',
      ar: 'الركن الخامس من أركان الإسلام',
      en: 'The fifth pillar of Islam',
    },
    category: 'fiqh',
    estimatedDuration: '3 semaines',
    difficulty: 'intermediate',
  },
  {
    courseSlug: 'usul-al-fiqh',
    title: {
      fr: 'Fondements du Fiqh (Usul)',
      ar: 'أصول الفقه',
      en: 'Foundations of Fiqh (Usul)',
    },
    priority: 'low',
    reason: {
      fr: 'Comprendre la méthodologie juridique',
      ar: 'فهم منهجية الفقه',
      en: 'Understanding legal methodology',
    },
    category: 'fiqh',
    estimatedDuration: '6 semaines',
    difficulty: 'advanced',
  },
  {
    courseSlug: 'fiqh-muamalat',
    title: {
      fr: 'Transactions Islamiques',
      ar: 'فقه المعاملات',
      en: 'Islamic Transactions',
    },
    priority: 'low',
    reason: {
      fr: 'Commerce et finance islamique',
      ar: 'التجارة والمالية الإسلامية',
      en: 'Islamic commerce and finance',
    },
    category: 'fiqh',
    estimatedDuration: '4 semaines',
    difficulty: 'advanced',
  },

  // Seerah
  {
    courseSlug: 'seerah-module-1',
    title: {
      fr: 'Seerah - Avant la Révélation',
      ar: 'السيرة - قبل الوحي',
      en: 'Seerah - Before Revelation',
    },
    priority: 'high',
    reason: {
      fr: 'Contexte et naissance du Prophète ﷺ',
      ar: 'سياق وولادة النبي ﷺ',
      en: 'Context and birth of Prophet ﷺ',
    },
    category: 'seerah',
    estimatedDuration: '3 semaines',
    difficulty: 'beginner',
  },
  {
    courseSlug: 'seerah-module-2',
    title: {
      fr: 'Seerah - Période Mecquoise',
      ar: 'السيرة - الفترة المكية',
      en: 'Seerah - Meccan Period',
    },
    priority: 'high',
    reason: {
      fr: 'La révélation et les premiers musulmans',
      ar: 'الوحي والمسلمون الأوائل',
      en: 'Revelation and early Muslims',
    },
    category: 'seerah',
    estimatedDuration: '3 semaines',
    difficulty: 'beginner',
  },
  {
    courseSlug: 'seerah-module-3',
    title: {
      fr: 'Seerah - Hijra et Médine',
      ar: 'السيرة - الهجرة والمدينة',
      en: 'Seerah - Hijra and Medina',
    },
    priority: 'medium',
    reason: {
      fr: 'L\'établissement de l\'État islamique',
      ar: 'تأسيس الدولة الإسلامية',
      en: 'Establishment of Islamic State',
    },
    category: 'seerah',
    estimatedDuration: '3 semaines',
    difficulty: 'intermediate',
  },
  {
    courseSlug: 'seerah-module-4',
    title: {
      fr: 'Seerah - Batailles et Conquêtes',
      ar: 'السيرة - الغزوات والفتوحات',
      en: 'Seerah - Battles and Conquests',
    },
    priority: 'medium',
    reason: {
      fr: 'Les grandes batailles et la victoire',
      ar: 'الغزوات الكبرى والنصر',
      en: 'Major battles and victory',
    },
    category: 'seerah',
    estimatedDuration: '3 semaines',
    difficulty: 'intermediate',
  },
  {
    courseSlug: 'seerah-module-5',
    title: {
      fr: 'Seerah - Dernières Années',
      ar: 'السيرة - السنوات الأخيرة',
      en: 'Seerah - Final Years',
    },
    priority: 'medium',
    reason: {
      fr: 'L\'héritage éternel du Prophète ﷺ',
      ar: 'إرث النبي ﷺ الخالد',
      en: 'Prophet\'s ﷺ eternal legacy',
    },
    category: 'seerah',
    estimatedDuration: '3 semaines',
    difficulty: 'intermediate',
  },

  // Quran/Tajweed
  {
    courseSlug: 'introduction-tajweed',
    title: {
      fr: 'Introduction au Tajweed',
      ar: 'مقدمة في التجويد',
      en: 'Introduction to Tajweed',
    },
    priority: 'high',
    reason: {
      fr: 'Réciter le Coran correctement',
      ar: 'تلاوة القرآن بشكل صحيح',
      en: 'Recite Quran correctly',
    },
    category: 'quran',
    estimatedDuration: '6 semaines',
    difficulty: 'beginner',
  },

  // Hadith
  {
    courseSlug: 'sciences-hadith',
    title: {
      fr: 'Sciences du Hadith',
      ar: 'علوم الحديث',
      en: 'Hadith Sciences',
    },
    priority: 'medium',
    reason: {
      fr: 'Comprendre l\'authentification des hadiths',
      ar: 'فهم تصحيح الأحاديث',
      en: 'Understanding hadith authentication',
    },
    category: 'hadith',
    estimatedDuration: '4 semaines',
    difficulty: 'intermediate',
  },

  // Histoire
  {
    courseSlug: 'les-4-grands-imams',
    title: {
      fr: 'Les 4 Grands Imams',
      ar: 'الأئمة الأربعة',
      en: 'The 4 Great Imams',
    },
    priority: 'medium',
    reason: {
      fr: 'Découvrir les fondateurs des madhahib',
      ar: 'التعرف على مؤسسي المذاهب',
      en: 'Discover madhahib founders',
    },
    category: 'history',
    estimatedDuration: '4 semaines',
    difficulty: 'intermediate',
  },
  {
    courseSlug: 'les-compagnons-illustres',
    title: {
      fr: 'Les Compagnons Illustres',
      ar: 'الصحابة الكرام',
      en: 'The Noble Companions',
    },
    priority: 'high',
    reason: {
      fr: 'Modèles à suivre dans la foi',
      ar: 'قدوات في الإيمان',
      en: 'Role models in faith',
    },
    category: 'history',
    estimatedDuration: '4 semaines',
    difficulty: 'beginner',
  },
];

// ============================================
// Fonction de calcul du niveau
// ============================================

function calculateLevel(percentage: number): 'beginner' | 'intermediate' | 'advanced' {
  if (percentage < 40) return 'beginner';
  if (percentage < 70) return 'intermediate';
  return 'advanced';
}

// ============================================
// Fonction d'analyse des résultats
// ============================================

export interface QuizAnswer {
  questionId: string;
  selectedAnswer: number;
  isCorrect: boolean;
  points: number;
  category?: string;
}

export function analyzeResults(answers: QuizAnswer[]): PlacementResult {
  // Grouper par catégorie
  const categories = ['aqeedah', 'fiqh', 'seerah', 'quran', 'hadith', 'history'];
  const categoryScores: CategoryScore[] = [];

  let totalScore = 0;
  let totalMaxScore = 0;

  for (const category of categories) {
    const categoryAnswers = answers.filter(a => a.category === category);
    const correct = categoryAnswers.filter(a => a.isCorrect).length;
    const score = categoryAnswers.reduce((sum, a) => sum + (a.isCorrect ? a.points : 0), 0);
    const maxScore = categoryAnswers.reduce((sum, a) => sum + a.points, 0);
    const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;

    categoryScores.push({
      category,
      score,
      maxScore,
      percentage,
      level: calculateLevel(percentage),
      questionsAnswered: categoryAnswers.length,
      correctAnswers: correct,
    });

    totalScore += score;
    totalMaxScore += maxScore;
  }

  const overallPercentage = totalMaxScore > 0 ? (totalScore / totalMaxScore) * 100 : 0;
  const overallLevel = calculateLevel(overallPercentage);

  // Identifier forces et faiblesses
  const sortedCategories = [...categoryScores].sort((a, b) => b.percentage - a.percentage);
  const strengths = sortedCategories.filter(c => c.percentage >= 60).map(c => c.category);
  const weaknesses = sortedCategories.filter(c => c.percentage < 50).map(c => c.category);

  // Générer les recommandations
  const recommendedCourses = generateRecommendations(categoryScores, overallLevel);

  // Créer le parcours d'apprentissage
  const learningPath = generateLearningPath(categoryScores, overallLevel, weaknesses);

  return {
    overallScore: totalScore,
    overallPercentage,
    overallLevel,
    categoryScores,
    strengths,
    weaknesses,
    recommendedCourses,
    learningPath,
  };
}

// ============================================
// Génération des recommandations
// ============================================

function generateRecommendations(
  categoryScores: CategoryScore[],
  _overallLevel: 'beginner' | 'intermediate' | 'advanced'
): CourseRecommendation[] {
  const recommendations: CourseRecommendation[] = [];

  for (const catScore of categoryScores) {
    // Filtrer les cours de cette catégorie
    const categoryCourses = coursesCatalog.filter(c => c.category === catScore.category);

    for (const course of categoryCourses) {
      // Adapter la priorité selon le niveau
      let priority = course.priority;

      // Si faible dans une catégorie, augmenter la priorité des cours débutants
      if (catScore.percentage < 50 && course.difficulty === 'beginner') {
        priority = 'high';
      }

      // Si moyen, recommander les cours intermédiaires
      if (catScore.percentage >= 50 && catScore.percentage < 70 && course.difficulty === 'intermediate') {
        priority = 'high';
      }

      // Si fort, recommander les cours avancés
      if (catScore.percentage >= 70 && course.difficulty === 'advanced') {
        priority = 'high';
      }

      recommendations.push({
        ...course,
        priority,
      });
    }
  }

  // Trier par priorité
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  return recommendations.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
}

// ============================================
// Génération du parcours d'apprentissage
// ============================================

function generateLearningPath(
  categoryScores: CategoryScore[],
  overallLevel: 'beginner' | 'intermediate' | 'advanced',
  weaknesses: string[]
): LearningPath {
  const phases: LearningPhase[] = [];

  if (overallLevel === 'beginner') {
    // Parcours débutant
    phases.push({
      order: 1,
      name: {
        fr: 'Phase 1 : Les Fondamentaux',
        ar: 'المرحلة 1: الأساسيات',
        en: 'Phase 1: Fundamentals',
      },
      courses: ['aqeedah-islamique', 'bases-fiqh-ibadat-purification', 'bases-fiqh-ibadat-salat'],
      duration: '6-8 semaines',
      objectives: {
        fr: ['Maîtriser les bases de la croyance', 'Apprendre la purification', 'Maîtriser la prière'],
        ar: ['إتقان أساسيات العقيدة', 'تعلم الطهارة', 'إتقان الصلاة'],
        en: ['Master basics of belief', 'Learn purification', 'Master prayer'],
      },
    });

    phases.push({
      order: 2,
      name: {
        fr: 'Phase 2 : Connaissance du Prophète ﷺ',
        ar: 'المرحلة 2: معرفة النبي ﷺ',
        en: 'Phase 2: Knowing the Prophet ﷺ',
      },
      courses: ['seerah-module-1', 'seerah-module-2', 'les-compagnons-illustres'],
      duration: '8-10 semaines',
      objectives: {
        fr: ['Découvrir la vie du Prophète ﷺ', 'Connaître les Compagnons', 'S\'inspirer de leur exemple'],
        ar: ['اكتشاف سيرة النبي ﷺ', 'معرفة الصحابة', 'الاقتداء بهم'],
        en: ['Discover Prophet\'s ﷺ life', 'Know the Companions', 'Be inspired by their example'],
      },
    });

    phases.push({
      order: 3,
      name: {
        fr: 'Phase 3 : Approfondissement',
        ar: 'المرحلة 3: التعمق',
        en: 'Phase 3: Deepening',
      },
      courses: ['introduction-tajweed', 'fiqh-siyam', 'bases-fiqh-zakat'],
      duration: '6-8 semaines',
      objectives: {
        fr: ['Améliorer la récitation du Coran', 'Maîtriser le jeûne', 'Comprendre la Zakat'],
        ar: ['تحسين تلاوة القرآن', 'إتقان الصيام', 'فهم الزكاة'],
        en: ['Improve Quran recitation', 'Master fasting', 'Understand Zakat'],
      },
    });

  } else if (overallLevel === 'intermediate') {
    // Parcours intermédiaire
    phases.push({
      order: 1,
      name: {
        fr: 'Phase 1 : Renforcement des bases',
        ar: 'المرحلة 1: تعزيز الأساسيات',
        en: 'Phase 1: Strengthening foundations',
      },
      courses: weaknesses.includes('aqeedah') ? ['aqeedah-islamique'] : [],
      duration: '2-4 semaines',
      objectives: {
        fr: ['Consolider les points faibles identifiés'],
        ar: ['تقوية نقاط الضعف المحددة'],
        en: ['Strengthen identified weak points'],
      },
    });

    phases.push({
      order: 2,
      name: {
        fr: 'Phase 2 : Niveau Intermédiaire',
        ar: 'المرحلة 2: المستوى المتوسط',
        en: 'Phase 2: Intermediate Level',
      },
      courses: ['seerah-module-3', 'seerah-module-4', 'sciences-hadith', 'fiqh-hajj'],
      duration: '10-12 semaines',
      objectives: {
        fr: ['Approfondir la Seerah', 'Découvrir les sciences du hadith', 'Étudier le Hajj'],
        ar: ['تعميق السيرة', 'اكتشاف علوم الحديث', 'دراسة الحج'],
        en: ['Deepen Seerah', 'Discover hadith sciences', 'Study Hajj'],
      },
    });

    phases.push({
      order: 3,
      name: {
        fr: 'Phase 3 : Spécialisation',
        ar: 'المرحلة 3: التخصص',
        en: 'Phase 3: Specialization',
      },
      courses: ['les-4-grands-imams', 'aqeedah-avancee'],
      duration: '8-10 semaines',
      objectives: {
        fr: ['Connaître les 4 imams', 'Approfondir la croyance'],
        ar: ['معرفة الأئمة الأربعة', 'تعميق العقيدة'],
        en: ['Know the 4 imams', 'Deepen creed'],
      },
    });

  } else {
    // Parcours avancé
    phases.push({
      order: 1,
      name: {
        fr: 'Phase 1 : Approfondissement Avancé',
        ar: 'المرحلة 1: التعمق المتقدم',
        en: 'Phase 1: Advanced Deepening',
      },
      courses: ['aqeedah-avancee', 'usul-al-fiqh'],
      duration: '10-12 semaines',
      objectives: {
        fr: ['Maîtriser la croyance avancée', 'Comprendre les Usul al-Fiqh'],
        ar: ['إتقان العقيدة المتقدمة', 'فهم أصول الفقه'],
        en: ['Master advanced creed', 'Understand Usul al-Fiqh'],
      },
    });

    phases.push({
      order: 2,
      name: {
        fr: 'Phase 2 : Sciences Avancées',
        ar: 'المرحلة 2: العلوم المتقدمة',
        en: 'Phase 2: Advanced Sciences',
      },
      courses: ['fiqh-muamalat', 'sciences-hadith'],
      duration: '8-10 semaines',
      objectives: {
        fr: ['Maîtriser les transactions', 'Approfondir les sciences du hadith'],
        ar: ['إتقان المعاملات', 'تعميق علوم الحديث'],
        en: ['Master transactions', 'Deepen hadith sciences'],
      },
    });

    phases.push({
      order: 3,
      name: {
        fr: 'Phase 3 : Excellence',
        ar: 'المرحلة 3: التميز',
        en: 'Phase 3: Excellence',
      },
      courses: ['les-4-grands-imams', 'seerah-module-5'],
      duration: '6-8 semaines',
      objectives: {
        fr: ['Étudier les méthodologies des imams', 'Compléter l\'étude de la Seerah'],
        ar: ['دراسة مناهج الأئمة', 'إكمال دراسة السيرة'],
        en: ['Study imams\' methodologies', 'Complete Seerah study'],
      },
    });
  }

  // Filtrer les phases vides
  const validPhases = phases.filter(p => p.courses.length > 0);

  return {
    name: {
      fr: overallLevel === 'beginner' ? 'Parcours Débutant' : 
          overallLevel === 'intermediate' ? 'Parcours Intermédiaire' : 'Parcours Avancé',
      ar: overallLevel === 'beginner' ? 'مسار المبتدئ' : 
          overallLevel === 'intermediate' ? 'المسار المتوسط' : 'المسار المتقدم',
      en: overallLevel === 'beginner' ? 'Beginner Path' : 
          overallLevel === 'intermediate' ? 'Intermediate Path' : 'Advanced Path',
    },
    description: {
      fr: 'Un parcours personnalisé basé sur vos résultats d\'évaluation.',
      ar: 'مسار مخصص بناءً على نتائج تقييمك.',
      en: 'A personalized path based on your evaluation results.',
    },
    phases: validPhases,
  };
}

// ============================================
// Fonction utilitaire pour afficher le niveau
// ============================================

export const levelLabels = {
  beginner: {
    fr: 'Débutant',
    ar: 'مبتدئ',
    en: 'Beginner',
  },
  intermediate: {
    fr: 'Intermédiaire',
    ar: 'متوسط',
    en: 'Intermediate',
  },
  advanced: {
    fr: 'Avancé',
    ar: 'متقدم',
    en: 'Advanced',
  },
};

export const categoryLabels = {
  aqeedah: {
    fr: 'Croyance (Aqeedah)',
    ar: 'العقيدة',
    en: 'Creed (Aqeedah)',
  },
  fiqh: {
    fr: 'Jurisprudence (Fiqh)',
    ar: 'الفقه',
    en: 'Jurisprudence (Fiqh)',
  },
  seerah: {
    fr: 'Biographie Prophétique',
    ar: 'السيرة النبوية',
    en: 'Prophetic Biography',
  },
  quran: {
    fr: 'Coran & Tajweed',
    ar: 'القرآن والتجويد',
    en: 'Quran & Tajweed',
  },
  hadith: {
    fr: 'Sciences du Hadith',
    ar: 'علوم الحديث',
    en: 'Hadith Sciences',
  },
  history: {
    fr: 'Histoire Islamique',
    ar: 'التاريخ الإسلامي',
    en: 'Islamic History',
  },
};
