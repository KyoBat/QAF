/**
 * Types pour le système de Quiz — Rabbi Zidni Ilma
 * 
 * Ce fichier définit tous les types TypeScript utilisés
 * pour le système de quiz de la plateforme.
 */

// ============================================
// Types de base
// ============================================

export type QuestionType = 
  | 'single'    // QCM avec 1 bonne réponse
  | 'multiple'  // QCM avec plusieurs bonnes réponses
  | 'boolean'   // Vrai/Faux
  | 'order'     // Remettre dans l'ordre
  | 'match'     // Associer des paires
  | 'fill';     // Texte à trous

export type QuizType = 
  | 'mini'       // Mini-quiz de leçon (3-5 questions)
  | 'module'     // Quiz de module (15-20 questions)
  | 'global'     // Quiz de niveau (30-75 questions)
  | 'placement'; // Test de placement initial

export type Difficulty = 'easy' | 'medium' | 'hard';

export type QuizLevel = 'beginner' | 'intermediate' | 'advanced';

export type MedalType = 'bronze' | 'silver' | 'gold' | 'none';

// ============================================
// Texte multilingue
// ============================================

export interface LocalizedText {
  fr: string;
  ar: string;
  en: string;
}

// ============================================
// Référence à une leçon
// ============================================

export interface LessonReference {
  courseSlug: string;
  lessonId: string;
  section?: string;
}

// ============================================
// Question
// ============================================

export interface QuizOption {
  id: string;
  text: LocalizedText;
}

export interface MatchPair {
  id: string;
  left: LocalizedText;
  right: LocalizedText;
}

export interface Question {
  /** Identifiant unique de la question */
  id: string;
  
  /** Type de question */
  type: QuestionType;
  
  /** Niveau de difficulté */
  difficulty: Difficulty;
  
  /** Catégorie (pour quiz de placement) */
  category?: 'aqeedah' | 'fiqh' | 'seerah' | 'quran' | 'hadith' | 'history';
  
  /** Texte de la question (trilingue) */
  question: LocalizedText;
  
  /** Options de réponse (pour single, multiple, boolean) */
  options?: QuizOption[];
  
  /** Éléments à ordonner (pour type 'order') */
  orderItems?: LocalizedText[];
  
  /** Paires à associer (pour type 'match') */
  matchPairs?: MatchPair[];
  
  /** Phrase à compléter (pour type 'fill') */
  fillTemplate?: LocalizedText;
  
  /** 
   * Réponse correcte
   * - single: index (number)
   * - multiple: indices (number[])
   * - boolean: true/false
   * - order: indices dans l'ordre correct (number[])
   * - match: paires d'IDs (string[][])
   * - fill: texte attendu (string)
   */
  correctAnswer: number | number[] | boolean | string | string[][];
  
  /** Explication après réponse (trilingue) */
  explanation: LocalizedText;
  
  /** Référence à la leçon source (optionnel pour les questions de placement) */
  reference?: LessonReference;
  
  /** Points attribués pour cette question */
  points: number;
  
  /** Temps limite en secondes (optionnel) */
  timeLimit?: number;
  
  /** Tags pour catégorisation */
  tags: string[];
  
  /** Indice optionnel (coûte des points) */
  hint?: LocalizedText;
}

// ============================================
// Quiz
// ============================================

export interface Quiz {
  /** Identifiant unique du quiz */
  id: string;
  
  /** Type de quiz */
  type: QuizType;
  
  /** Slug du cours associé (optionnel pour global) */
  courseSlug?: string;
  
  /** ID de la leçon associée (pour mini-quiz) */
  lessonId?: string;
  
  /** ID du module (pour quiz de module) */
  moduleId?: string;
  
  /** Titre du quiz (trilingue) */
  title: LocalizedText;
  
  /** Description du quiz (trilingue) */
  description: LocalizedText;
  
  /** Instructions avant de commencer (trilingue) */
  instructions: LocalizedText;
  
  /** Niveau de difficulté global */
  level?: QuizLevel;
  
  /** Durée estimée en minutes */
  duration: number;
  
  /** Score minimum pour réussir (0-100) */
  passingScore: number;
  
  /** Nombre maximum de tentatives */
  maxAttempts: number;
  
  /** Mélanger l'ordre des questions */
  shuffleQuestions: boolean;
  
  /** Mélanger l'ordre des options */
  shuffleOptions: boolean;
  
  /** Quand afficher les explications */
  showExplanation: 'always' | 'after_submit' | 'after_complete' | 'never';
  
  /** Afficher la bonne réponse après erreur */
  showCorrectAnswer: boolean;
  
  /** Permettre la révision après soumission */
  allowReview?: boolean;
  
  /** Liste des questions */
  questions: Question[];
  
  /** Date de création */
  createdAt: string;
  
  /** Date de dernière mise à jour */
  updatedAt: string;
  
  /** Version du quiz */
  version?: string;
}

// ============================================
// Réponse utilisateur
// ============================================

export interface UserAnswer {
  questionId: string;
  userAnswer: number | number[] | boolean | string | string[][];
  isCorrect: boolean;
  pointsEarned: number;
  timeSpent: number; // secondes
  hintUsed: boolean;
}

// ============================================
// Résultat de quiz
// ============================================

export interface QuizResult {
  /** ID unique du résultat */
  id: string;
  
  /** ID du quiz */
  quizId: string;
  
  /** ID de l'utilisateur (ou ID local pour invités) */
  userId: string;
  
  /** Score obtenu (points) */
  score: number;
  
  /** Score maximum possible */
  maxScore: number;
  
  /** Pourcentage de réussite */
  percentage: number;
  
  /** Quiz réussi ou non */
  passed: boolean;
  
  /** Médaille obtenue */
  medal: MedalType;
  
  /** Temps total passé (secondes) */
  timeSpent: number;
  
  /** Réponses de l'utilisateur */
  answers: UserAnswer[];
  
  /** Date de complétion */
  completedAt: string;
  
  /** Numéro de la tentative */
  attemptNumber: number;
  
  /** ID du certificat (si généré) */
  certificateId?: string;
  
  /** XP gagnés */
  xpEarned: number;
}

// ============================================
// Certificat
// ============================================

export interface Certificate {
  /** ID unique du certificat */
  id: string;
  
  /** ID de l'utilisateur */
  userId: string;
  
  /** Nom de l'utilisateur */
  userName: LocalizedText;
  
  /** ID du quiz */
  quizId: string;
  
  /** Type de certificat */
  type: 'module' | 'level';
  
  /** Niveau (pour certificat de niveau) */
  level?: 1 | 2 | 3;
  
  /** Nom du cours (pour certificat de module) */
  courseName?: LocalizedText;
  
  /** Nom du module (pour certificat de module) */
  moduleName?: LocalizedText;
  
  /** Score obtenu */
  score: number;
  
  /** Médaille obtenue */
  medal: MedalType;
  
  /** Date d'émission */
  issuedAt: string;
  
  /** Date d'expiration (optionnel) */
  expiresAt?: string;
  
  /** Code de vérification unique */
  verificationCode: string;
  
  /** URL de vérification */
  verificationUrl: string;
}

// ============================================
// Progression utilisateur
// ============================================

export interface UserQuizProgress {
  userId: string;
  
  /** XP total accumulé */
  totalXp: number;
  
  /** Niveau actuel */
  currentLevel: number;
  
  /** Titre actuel */
  currentTitle: LocalizedText;
  
  /** Streak actuel (jours consécutifs) */
  currentStreak: number;
  
  /** Meilleur streak */
  bestStreak: number;
  
  /** Date du dernier quiz */
  lastQuizDate: string;
  
  /** Quiz complétés par cours */
  completedQuizzes: {
    courseSlug: string;
    quizIds: string[];
  }[];
  
  /** Badges obtenus */
  badges: Badge[];
  
  /** Certificats obtenus */
  certificates: string[]; // IDs des certificats
}

// ============================================
// Badge / Achievement
// ============================================

export interface Badge {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  icon: string;
  earnedAt: string;
  category: 'completion' | 'streak' | 'mastery' | 'special';
}

// ============================================
// Statistiques de quiz
// ============================================

export interface QuizStats {
  quizId: string;
  totalAttempts: number;
  uniqueUsers: number;
  averageScore: number;
  passRate: number;
  averageTimeSpent: number;
  questionStats: {
    questionId: string;
    correctRate: number;
    averageTime: number;
  }[];
}

// ============================================
// Configuration des niveaux et XP
// ============================================

export const LEVEL_CONFIG = {
  levels: [
    { level: 1, xpRequired: 0, title: { fr: 'Étudiant Débutant', ar: 'طالب مبتدئ', en: 'Beginner Student' } },
    { level: 2, xpRequired: 100, title: { fr: 'Étudiant Actif', ar: 'طالب نشيط', en: 'Active Student' } },
    { level: 3, xpRequired: 300, title: { fr: 'Étudiant Assidu', ar: 'طالب مجتهد', en: 'Diligent Student' } },
    { level: 4, xpRequired: 600, title: { fr: 'Étudiant Avancé', ar: 'طالب متقدم', en: 'Advanced Student' } },
    { level: 5, xpRequired: 1000, title: { fr: 'Étudiant Distingué', ar: 'طالب متميز', en: 'Distinguished Student' } },
    { level: 6, xpRequired: 1500, title: { fr: 'Étudiant Excellent', ar: 'طالب متفوق', en: 'Excellent Student' } },
    { level: 7, xpRequired: 2500, title: { fr: 'Étudiant Savant', ar: 'طالب عالم', en: 'Scholar Student' } },
    { level: 8, xpRequired: 4000, title: { fr: 'Faqih Débutant', ar: 'فقيه مبتدئ', en: 'Beginner Faqih' } },
    { level: 9, xpRequired: 6000, title: { fr: 'Faqih', ar: 'فقيه', en: 'Faqih' } },
    { level: 10, xpRequired: 10000, title: { fr: 'Savant', ar: 'عالم', en: 'Scholar' } },
  ],
  xpRewards: {
    miniQuizComplete: 10,
    miniQuizPerfect: 15,
    moduleQuizPass: 50,
    moduleQuizGold: 75,
    globalLevel1: 200,
    globalLevel2: 400,
    globalLevel3: 800,
    streak7Days: 100,
    streak30Days: 500,
  },
} as const;

// ============================================
// Configuration des médailles
// ============================================

export const MEDAL_CONFIG = {
  mini: {
    gold: 95,
    silver: 80,
    bronze: 60,
  },
  module: {
    gold: 95,
    silver: 85,
    bronze: 70,
  },
  global: {
    gold: 95,
    silver: 85,
    bronze: 70,
  },
} as const;

// ============================================
// Fonctions utilitaires
// ============================================

/**
 * Calcule la médaille obtenue en fonction du pourcentage
 */
export function getMedal(percentage: number, quizType: QuizType): MedalType {
  const config = MEDAL_CONFIG[quizType === 'mini' ? 'mini' : quizType === 'module' ? 'module' : 'global'];
  
  if (percentage >= config.gold) return 'gold';
  if (percentage >= config.silver) return 'silver';
  if (percentage >= config.bronze) return 'bronze';
  return 'none';
}

/**
 * Calcule le niveau en fonction des XP
 */
export function getLevel(xp: number): { level: number; title: LocalizedText; nextLevelXp: number | null } {
  const levels = LEVEL_CONFIG.levels;
  
  for (let i = levels.length - 1; i >= 0; i--) {
    if (xp >= levels[i].xpRequired) {
      return {
        level: levels[i].level,
        title: levels[i].title,
        nextLevelXp: i < levels.length - 1 ? levels[i + 1].xpRequired : null,
      };
    }
  }
  
  return {
    level: 1,
    title: levels[0].title,
    nextLevelXp: levels[1].xpRequired,
  };
}

/**
 * Génère un code de vérification unique pour un certificat
 */
export function generateVerificationCode(quizId: string, userId: string): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  const prefix = quizId.substring(0, 4).toUpperCase();
  return `RZI-${prefix}-${timestamp}-${random}`;
}

/**
 * Calcule les XP gagnés pour un quiz
 */
export function calculateXp(quizType: QuizType, percentage: number, passed: boolean): number {
  const rewards = LEVEL_CONFIG.xpRewards;
  
  if (!passed) return 0;
  
  switch (quizType) {
    case 'mini':
      return percentage === 100 ? rewards.miniQuizPerfect : rewards.miniQuizComplete;
    case 'module':
      return percentage >= 95 ? rewards.moduleQuizGold : rewards.moduleQuizPass;
    case 'global':
      // Déterminé par le niveau du quiz global
      return rewards.globalLevel1; // À ajuster selon le niveau
    default:
      return 0;
  }
}
