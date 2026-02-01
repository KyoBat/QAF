/**
 * Index des Quizzes
 * 
 * Ce fichier exporte tous les quizzes disponibles
 * et fournit des fonctions utilitaires pour les récupérer.
 */

// Types
export * from './types';

// Quizzes par cours - Fiqh
export { quizSalatModule } from './fiqh/quiz-salat-module';
import quizPurification from './fiqh/quiz-purification';
export { quizPurification };
import quizZakat from './fiqh/quiz-zakat';
export { quizZakat };
import quizUsulFiqh from './fiqh/quiz-usul-fiqh';
export { quizUsulFiqh };
import quizMuamalat from './fiqh/quiz-muamalat';
export { quizMuamalat };

// Quizzes - Aqeedah
import quizFondementsFoi from './aqeedah/quiz-fondements-foi';
export { quizFondementsFoi };
import quizAqeedahAvancee from './aqeedah/quiz-aqeedah-avancee';
export { quizAqeedahAvancee };

// Quizzes - Siyam (Jeûne)
import quizRamadan from './siyam/quiz-ramadan';
export { quizRamadan };

// Quizzes - Hajj
import quizHajjOumra from './hajj/quiz-hajj-oumra';
export { quizHajjOumra };

// Quizzes - Histoire des 4 Imams
import quizHistory4Imams from './history/quiz-4-imams';
export { quizHistory4Imams };
import quizCompagnons from './history/quiz-compagnons';
export { quizCompagnons };

// Quizzes - Seerah
import quizSeerahModule1 from './seerah/quiz-seerah-module-1';
export { quizSeerahModule1 };
import quizSeerahModule2 from './seerah/quiz-seerah-module-2';
export { quizSeerahModule2 };
import quizSeerahModule3 from './seerah/quiz-seerah-module-3';
export { quizSeerahModule3 };
import quizSeerahModule4 from './seerah/quiz-seerah-module-4';
export { quizSeerahModule4 };
import quizSeerahModule5 from './seerah/quiz-seerah-module-5';
export { quizSeerahModule5 };

// Quizzes - Tajweed
import quizTajweed from './tajweed/quiz-tajweed-basics';
export { quizTajweed };

// Quizzes - Hadith Sciences
import quizHadithSciences from './hadith/quiz-hadith-sciences';
export { quizHadithSciences };

// Quizzes - Placement (Évaluation de niveau)
import { quizPlacement, allPlacementQuestions } from './placement/quiz-placement';
export { quizPlacement, allPlacementQuestions };

// Recommendation Engine
export * from './placement/recommendation-engine';

// ============================================
// Fonctions utilitaires
// ============================================

import { Quiz } from './types';
import { quizSalatModule } from './fiqh/quiz-salat-module';

// Registre de tous les quizzes
const allQuizzes: Quiz[] = [
  // Fiqh
  quizSalatModule,
  quizPurification,
  quizZakat,
  quizUsulFiqh,
  quizMuamalat,
  // Aqeedah
  quizFondementsFoi,
  quizAqeedahAvancee,
  // Siyam
  quizRamadan,
  // Hajj
  quizHajjOumra,
  // Histoire
  quizHistory4Imams,
  quizCompagnons,
  // Seerah
  quizSeerahModule1,
  quizSeerahModule2,
  quizSeerahModule3,
  quizSeerahModule4,
  quizSeerahModule5,
  // Tajweed
  quizTajweed,
  // Hadith
  quizHadithSciences,
  // Placement
  quizPlacement,
];

/**
 * Récupère tous les quizzes disponibles
 */
export function getAllQuizzes(): Quiz[] {
  return allQuizzes;
}

/**
 * Récupère un quiz par son ID
 */
export function getQuizById(id: string): Quiz | undefined {
  return allQuizzes.find(quiz => quiz.id === id);
}

/**
 * Récupère tous les quizzes d'un cours
 */
export function getQuizzesByCourse(courseSlug: string): Quiz[] {
  return allQuizzes.filter(quiz => quiz.courseSlug === courseSlug);
}

/**
 * Récupère les quizzes par type
 */
export function getQuizzesByType(type: Quiz['type']): Quiz[] {
  return allQuizzes.filter(quiz => quiz.type === type);
}

/**
 * Récupère le quiz d'une leçon spécifique (mini-quiz)
 */
export function getMiniQuizByLesson(courseSlug: string, lessonId: string): Quiz | undefined {
  return allQuizzes.find(
    quiz => quiz.type === 'mini' && quiz.courseSlug === courseSlug && quiz.lessonId === lessonId
  );
}

/**
 * Récupère le quiz d'un module spécifique
 */
export function getModuleQuiz(courseSlug: string, moduleId: string): Quiz | undefined {
  return allQuizzes.find(
    quiz => quiz.type === 'module' && quiz.courseSlug === courseSlug && quiz.moduleId === moduleId
  );
}

/**
 * Récupère les quizzes globaux par niveau
 */
export function getGlobalQuizzes(): Quiz[] {
  return allQuizzes.filter(quiz => quiz.type === 'global');
}

/**
 * Statistiques rapides sur les quizzes
 */
export function getQuizStats() {
  const stats = {
    total: allQuizzes.length,
    byCourse: {} as Record<string, number>,
    byType: {
      mini: 0,
      module: 0,
      global: 0,
      placement: 0,
    },
    totalQuestions: 0,
  };

  for (const quiz of allQuizzes) {
    // Par cours
    if (quiz.courseSlug) {
      stats.byCourse[quiz.courseSlug] = (stats.byCourse[quiz.courseSlug] || 0) + 1;
    }
    
    // Par type
    stats.byType[quiz.type]++;
    
    // Total questions
    stats.totalQuestions += quiz.questions.length;
  }

  return stats;
}
