/**
 * Index des Examens
 * 
 * Ce fichier exporte tous les examens disponibles
 * et fournit des fonctions utilitaires.
 * 
 * Structure des examens :
 * - Fiqh Salat COMPLET : 70 questions, 50 par examen (toutes les prières)
 * - Fiqh Siyam COMPLET : 36 questions, 30 par examen (jeûne)
 * - Fiqh Zakat COMPLET : 25 questions, 20 par examen (aumône)
 * - Fiqh Hajj COMPLET : 26 questions, 22 par examen (pèlerinage)
 * - Aqeedah COMPLET : 28 questions, 24 par examen (croyance)
 * - Hadith COMPLET : 23 questions, 20 par examen (sciences du hadith)
 * - Seerah COMPLET : 27 questions, 22 par examen (biographie prophétique)
 * - Usul al-Fiqh COMPLET : 18 questions, 15 par examen (fondements du droit)
 * - Fiqh Muamalat COMPLET : 20 questions, 16 par examen (transactions)
 * - Fiqh Famille COMPLET : 19 questions, 15 par examen (droit familial)
 * - Histoire 4 Imams COMPLET : 24 questions, 20 par examen (biographies)
 */

// Types
export * from './types';

// Catégories
export * from './categories';

// Examens par cours - Fiqh Ibadaat
export { examSalatFinal } from './salat/exam-salat-final';
export { examSiyamFinal } from './siyam/exam-siyam-final';
export { examZakatFinal } from './zakat/exam-zakat-final';
export { examHajjFinal } from './hajj/exam-hajj-final';

// Examens par cours - Autres matières
export { examAqeedahFinal } from './aqeedah/exam-aqeedah-final';
export { examHadithFinal } from './hadith/exam-hadith-final';
export { examSeerahFinal } from './seerah/exam-seerah-final';

// Examens par cours - Usul et Fiqh avancé
export { examUsulFiqhFinal } from './usul-fiqh/exam-usul-fiqh-final';
export { examFiqhMuamalatFinal } from './fiqh-muamalat/exam-fiqh-muamalat-final';
export { examFiqhFamilleFinal } from './fiqh-famille/exam-fiqh-famille-final';

// Examens par cours - Histoire
export { examHistoryImamsFinal } from './history/exam-history-imams-final';

// Import pour le registre
import { examSalatFinal } from './salat/exam-salat-final';
import { examSiyamFinal } from './siyam/exam-siyam-final';
import { examZakatFinal } from './zakat/exam-zakat-final';
import { examHajjFinal } from './hajj/exam-hajj-final';
import { examAqeedahFinal } from './aqeedah/exam-aqeedah-final';
import { examHadithFinal } from './hadith/exam-hadith-final';
import { examSeerahFinal } from './seerah/exam-seerah-final';
import { examUsulFiqhFinal } from './usul-fiqh/exam-usul-fiqh-final';
import { examFiqhMuamalatFinal } from './fiqh-muamalat/exam-fiqh-muamalat-final';
import { examFiqhFamilleFinal } from './fiqh-famille/exam-fiqh-famille-final';
import { examHistoryImamsFinal } from './history/exam-history-imams-final';
import { ExamConfig, ExamLevel, ExamType } from './types';

// Registre de tous les examens
const allExams: ExamConfig[] = [
  // Fiqh Ibadaat
  examSalatFinal,        // Examen complet Salat (70 questions → 50 par examen)
  examSiyamFinal,        // Examen complet Jeûne (36 questions → 30 par examen)
  examZakatFinal,        // Examen complet Zakat (25 questions → 20 par examen)
  examHajjFinal,         // Examen complet Hajj (26 questions → 22 par examen)
  // Autres matières islamiques
  examAqeedahFinal,      // Examen complet Aqeedah (28 questions → 24 par examen)
  examHadithFinal,       // Examen complet Hadith (23 questions → 20 par examen)
  examSeerahFinal,       // Examen complet Seerah (27 questions → 22 par examen)
  // Usul et Fiqh avancé
  examUsulFiqhFinal,     // Examen complet Usul (18 questions → 15 par examen)
  examFiqhMuamalatFinal, // Examen complet Muamalat (20 questions → 16 par examen)
  examFiqhFamilleFinal,  // Examen complet Famille (19 questions → 15 par examen)
  // Histoire
  examHistoryImamsFinal, // Examen complet 4 Imams (24 questions → 20 par examen)
];

// ============================================
// Fonctions utilitaires
// ============================================

/**
 * Récupère tous les examens disponibles
 */
export function getAllExams(): ExamConfig[] {
  return allExams;
}

/**
 * Récupère un examen par son ID
 */
export function getExamById(id: string): ExamConfig | undefined {
  return allExams.find(exam => exam.id === id);
}

/**
 * Récupère les examens d'un cours
 */
export function getExamsByCourse(courseSlug: string): ExamConfig[] {
  return allExams.filter(exam => exam.courseSlug === courseSlug);
}

/**
 * Récupère les examens par type
 */
export function getExamsByType(type: ExamType): ExamConfig[] {
  return allExams.filter(exam => exam.type === type);
}

/**
 * Récupère les examens par niveau
 */
export function getExamsByLevel(level: ExamLevel): ExamConfig[] {
  return allExams.filter(exam => exam.level === level);
}

/**
 * Récupère les examens avec certificat
 */
export function getCertificationExams(): ExamConfig[] {
  return allExams.filter(exam => exam.hasCertificate);
}

/**
 * Statistiques des examens
 */
export function getExamStats() {
  return {
    total: allExams.length,
    byType: {
      lesson: allExams.filter(e => e.type === 'lesson').length,
      module: allExams.filter(e => e.type === 'module').length,
      course: allExams.filter(e => e.type === 'course').length,
      certification: allExams.filter(e => e.type === 'certification').length,
    },
    byLevel: {
      beginner: allExams.filter(e => e.level === 'beginner').length,
      intermediate: allExams.filter(e => e.level === 'intermediate').length,
      advanced: allExams.filter(e => e.level === 'advanced').length,
    },
    withCertificate: allExams.filter(e => e.hasCertificate).length,
    totalQuestions: allExams.reduce((sum, e) => sum + (e.questionsPerExam || e.questionPool?.length || e.questions?.length || 0), 0),
  };
}
