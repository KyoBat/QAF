/**
 * Types pour le Système d'Examens Académiques
 * Rabbi Zidni Ilma
 */

// ============================================
// Types de base
// ============================================

export type ExamType = 
  | 'lesson'       // Quiz de leçon (5-10 questions)
  | 'module'       // Examen de module (15-20 questions)
  | 'course'       // Examen final de cours (30-50 questions)
  | 'certification'; // Certification thématique (50-75 questions)

export type ExamLevel = 'beginner' | 'intermediate' | 'advanced';

export type GradeType = 'gold' | 'silver' | 'bronze' | 'pass' | 'fail';

export interface LocalizedText {
  fr: string;
  ar: string;
  en: string;
}

// ============================================
// Question d'Examen
// ============================================

export interface ExamOption {
  id: string;
  text: LocalizedText;
}

export interface ExamQuestion {
  id: string;
  question: LocalizedText;
  options: ExamOption[];
  correctAnswer: number; // Index de la bonne réponse
  explanation: LocalizedText;
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string; // Sous-catégorie (ex: 'wudu', 'salat', 'tahara')
  timeLimit?: number; // Temps en secondes pour cette question (optionnel)
}

// ============================================
// Configuration d'Examen
// ============================================

/**
 * Configuration de sélection des questions par catégorie
 * Permet de spécifier combien de questions prendre par catégorie
 */
export interface CategoryQuestionConfig {
  category: string;
  count: number;       // Nombre de questions à sélectionner
  minEasy?: number;    // Minimum de questions faciles
  minMedium?: number;  // Minimum de questions moyennes
  minHard?: number;    // Minimum de questions difficiles
}

export interface ExamConfig {
  /** Identifiant unique */
  id: string;
  
  /** Type d'examen */
  type: ExamType;
  
  /** Niveau de difficulté */
  level: ExamLevel;
  
  /** Titre de l'examen */
  title: LocalizedText;
  
  /** Description */
  description: LocalizedText;
  
  /** Instructions avant l'examen */
  instructions: LocalizedText;
  
  /** Slug du cours associé */
  courseSlug?: string;
  
  /** ID du module (pour examen de module) */
  moduleId?: string;
  
  /** 
   * Banque complète de questions (Question Pool)
   * Contient TOUTES les questions possibles
   */
  questionPool: ExamQuestion[];
  
  /**
   * Nombre de questions à sélectionner pour l'examen
   * Si non défini, toutes les questions du pool sont utilisées
   */
  questionsPerExam?: number;
  
  /**
   * Configuration de sélection par catégorie
   * Permet d'équilibrer les questions par thème
   */
  categoryConfig?: CategoryQuestionConfig[];
  
  /** 
   * Questions fixes (toujours incluses)
   * @deprecated Use questionPool with selection
   */
  questions?: ExamQuestion[];
  
  /** Durée totale en minutes */
  duration: number;
  
  /** Score minimum pour réussir (pourcentage) */
  passingScore: number;
  
  /** Nombre maximum de tentatives */
  maxAttempts: number;
  
  /** Mélanger les questions */
  shuffleQuestions: boolean;
  
  /** Mélanger les options */
  shuffleOptions: boolean;
  
  /** Afficher les réponses après */
  showAnswersAfter: 'never' | 'submit' | 'complete';
  
  /** Certificat disponible */
  hasCertificate: boolean;
  
  /** Nom du certificat */
  certificateName?: LocalizedText;
  
  /** Date de création */
  createdAt: string;
}

// ============================================
// Résultat d'Examen
// ============================================

export interface ExamAnswer {
  questionId: string;
  selectedAnswer: number;
  isCorrect: boolean;
  points: number;
  timeSpent: number; // en secondes
}

export interface ExamResult {
  /** ID unique du résultat */
  id: string;
  
  /** ID de l'examen */
  examId: string;
  
  /** Date de passage */
  date: string;
  
  /** Durée effective (en secondes) */
  duration: number;
  
  /** Réponses données */
  answers: ExamAnswer[];
  
  /** Score total */
  totalScore: number;
  
  /** Score maximum possible */
  maxScore: number;
  
  /** Pourcentage */
  percentage: number;
  
  /** Note obtenue */
  grade: GradeType;
  
  /** Réussi ou non */
  passed: boolean;
  
  /** Numéro de tentative */
  attemptNumber: number;
  
  /** Analyse par catégorie */
  categoryScores: Record<string, {
    correct: number;
    total: number;
    percentage: number;
  }>;
}

// ============================================
// Système de Notation
// ============================================

export const gradeThresholds: Record<GradeType, { min: number; max: number }> = {
  gold: { min: 90, max: 100 },
  silver: { min: 75, max: 89 },
  bronze: { min: 60, max: 74 },
  pass: { min: 50, max: 59 },
  fail: { min: 0, max: 49 },
};

export const gradeLabels: Record<GradeType, LocalizedText> = {
  gold: {
    fr: 'Excellence (Mumtaz)',
    ar: 'ممتاز',
    en: 'Excellence (Mumtaz)',
  },
  silver: {
    fr: 'Très Bien (Jayyid Jiddan)',
    ar: 'جيد جداً',
    en: 'Very Good (Jayyid Jiddan)',
  },
  bronze: {
    fr: 'Bien (Jayyid)',
    ar: 'جيد',
    en: 'Good (Jayyid)',
  },
  pass: {
    fr: 'Passable (Maqbul)',
    ar: 'مقبول',
    en: 'Pass (Maqbul)',
  },
  fail: {
    fr: 'Échec',
    ar: 'راسب',
    en: 'Fail',
  },
};

export const gradeEmojis: Record<GradeType, string> = {
  gold: '🥇',
  silver: '🥈',
  bronze: '🥉',
  pass: '📜',
  fail: '❌',
};

export const gradeColors: Record<GradeType, string> = {
  gold: 'from-yellow-400 to-amber-500',
  silver: 'from-gray-300 to-gray-400',
  bronze: 'from-orange-400 to-orange-600',
  pass: 'from-blue-400 to-blue-500',
  fail: 'from-red-400 to-red-500',
};

// ============================================
// Fonctions utilitaires
// ============================================

export function calculateGrade(percentage: number): GradeType {
  if (percentage >= 90) return 'gold';
  if (percentage >= 75) return 'silver';
  if (percentage >= 60) return 'bronze';
  if (percentage >= 50) return 'pass';
  return 'fail';
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export function generateResultId(): string {
  return `result-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// ============================================
// Système de sélection aléatoire des questions
// ============================================

/**
 * Mélange un tableau de manière aléatoire (Fisher-Yates)
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Sélectionne des questions aléatoires depuis le pool
 * en évitant les questions déjà vues
 */
export function selectRandomQuestions(
  pool: ExamQuestion[],
  count: number,
  seenQuestionIds: string[] = [],
  categoryConfig?: CategoryQuestionConfig[]
): ExamQuestion[] {
  // Filtrer les questions déjà vues si possible
  let availableQuestions = pool.filter(q => !seenQuestionIds.includes(q.id));
  
  // Si pas assez de questions non vues, réutiliser le pool complet
  if (availableQuestions.length < count) {
    console.warn('Pas assez de nouvelles questions, réutilisation du pool complet');
    availableQuestions = [...pool];
  }
  
  // Si configuration par catégorie, sélectionner équitablement
  if (categoryConfig && categoryConfig.length > 0) {
    return selectByCategory(availableQuestions, categoryConfig);
  }
  
  // Sinon, sélection aléatoire simple
  const shuffled = shuffleArray(availableQuestions);
  return shuffled.slice(0, count);
}

/**
 * Sélectionne des questions par catégorie avec équilibrage
 */
function selectByCategory(
  pool: ExamQuestion[],
  config: CategoryQuestionConfig[]
): ExamQuestion[] {
  const selected: ExamQuestion[] = [];
  
  for (const categoryConf of config) {
    const categoryQuestions = pool.filter(q => q.category === categoryConf.category);
    
    if (categoryQuestions.length === 0) {
      console.warn(`Aucune question pour la catégorie: ${categoryConf.category}`);
      continue;
    }
    
    // Sélection avec équilibre de difficulté si spécifié
    let toSelect: ExamQuestion[] = [];
    
    if (categoryConf.minEasy || categoryConf.minMedium || categoryConf.minHard) {
      const easy = shuffleArray(categoryQuestions.filter(q => q.difficulty === 'easy'));
      const medium = shuffleArray(categoryQuestions.filter(q => q.difficulty === 'medium'));
      const hard = shuffleArray(categoryQuestions.filter(q => q.difficulty === 'hard'));
      
      // Ajouter le minimum de chaque difficulté
      toSelect.push(...easy.slice(0, categoryConf.minEasy || 0));
      toSelect.push(...medium.slice(0, categoryConf.minMedium || 0));
      toSelect.push(...hard.slice(0, categoryConf.minHard || 0));
      
      // Compléter avec des questions aléatoires si nécessaire
      const remaining = categoryConf.count - toSelect.length;
      if (remaining > 0) {
        const usedIds = new Set(toSelect.map(q => q.id));
        const others = shuffleArray(categoryQuestions.filter(q => !usedIds.has(q.id)));
        toSelect.push(...others.slice(0, remaining));
      }
    } else {
      // Sélection aléatoire simple
      toSelect = shuffleArray(categoryQuestions).slice(0, categoryConf.count);
    }
    
    selected.push(...toSelect);
  }
  
  // Mélanger l'ordre final
  return shuffleArray(selected);
}

/**
 * Récupère les IDs des questions déjà posées depuis localStorage
 */
export function getSeenQuestionIds(examId: string): string[] {
  if (typeof window === 'undefined') return [];
  
  const key = `rabbi-zidni-exam-seen-${examId}`;
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

/**
 * Sauvegarde les IDs des questions posées
 */
export function saveSeenQuestionIds(examId: string, questionIds: string[]): void {
  if (typeof window === 'undefined') return;
  
  const key = `rabbi-zidni-exam-seen-${examId}`;
  const existing = getSeenQuestionIds(examId);
  const combinedSet = new Set([...existing, ...questionIds]);
  const combined = Array.from(combinedSet);
  
  try {
    localStorage.setItem(key, JSON.stringify(combined));
  } catch (e) {
    console.error('Erreur sauvegarde questions vues:', e);
  }
}

/**
 * Réinitialise les questions vues (pour un nouveau cycle)
 */
export function resetSeenQuestions(examId: string): void {
  if (typeof window === 'undefined') return;
  
  const key = `rabbi-zidni-exam-seen-${examId}`;
  localStorage.removeItem(key);
}

/**
 * Prépare les questions pour un examen donné
 * - Sélectionne aléatoirement depuis le pool
 * - Évite les questions déjà vues
 * - Mélange l'ordre
 */
export function prepareExamQuestions(exam: ExamConfig): ExamQuestion[] {
  // Utiliser le pool ou les questions fixes
  const pool = exam.questionPool || exam.questions || [];
  
  if (pool.length === 0) {
    console.error('Aucune question dans l\'examen:', exam.id);
    return [];
  }
  
  // Nombre de questions à sélectionner
  const count = exam.questionsPerExam || pool.length;
  
  // Questions déjà vues
  const seenIds = getSeenQuestionIds(exam.id);
  
  // Sélectionner les questions
  let selected = selectRandomQuestions(pool, count, seenIds, exam.categoryConfig);
  
  // Mélanger les options si configuré
  if (exam.shuffleOptions) {
    selected = selected.map(q => ({
      ...q,
      options: shuffleArray(q.options),
      // Recalculer l'index de la bonne réponse après mélange
      // Note: On doit tracker l'option correcte par son ID
    }));
  }
  
  return selected;
}
