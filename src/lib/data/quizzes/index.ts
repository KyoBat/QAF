/**
 * Index des Quizzes
 * 
 * Ce fichier exporte tous les quizzes disponibles
 * et fournit des fonctions utilitaires pour les récupérer.
 */

// Types
export * from './types';

// Quizzes par cours
export { quizSalatModule } from './fiqh/quiz-salat-module';

// ============================================
// Fonctions utilitaires
// ============================================

import { Quiz } from './types';
import { quizSalatModule } from './fiqh/quiz-salat-module';

// Registre de tous les quizzes
const allQuizzes: Quiz[] = [
  quizSalatModule,
  // Ajouter les nouveaux quizzes ici
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
