'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  UserQuizProgress,
  QuizResult,
  Badge,
  LocalizedText,
  getLevel,
  LEVEL_CONFIG,
} from '@/lib/data/quizzes/types';

const STORAGE_KEY = 'rabbi-zidni-ilma-quiz-progress';

// Default progress for new users
const getDefaultProgress = (): UserQuizProgress => ({
  userId: 'guest',
  totalXp: 0,
  currentLevel: 1,
  currentTitle: { fr: 'Étudiant Débutant', ar: 'طالب مبتدئ', en: 'Beginner Student' },
  currentStreak: 0,
  bestStreak: 0,
  lastQuizDate: '',
  completedQuizzes: [],
  badges: [],
  certificates: [],
});

// Badge definitions
const BADGE_DEFINITIONS: Record<string, Omit<Badge, 'earnedAt'>> = {
  'first-quiz': {
    id: 'first-quiz',
    name: { fr: 'Premier pas', ar: 'الخطوة الأولى', en: 'First Step' },
    description: { fr: 'Compléter votre premier quiz', ar: 'إكمال أول اختبار', en: 'Complete your first quiz' },
    icon: '🎯',
    category: 'completion',
  },
  'perfect-score': {
    id: 'perfect-score',
    name: { fr: 'Perfection', ar: 'الكمال', en: 'Perfection' },
    description: { fr: 'Obtenir 100% à un quiz', ar: 'الحصول على ١٠٠٪ في اختبار', en: 'Get 100% on a quiz' },
    icon: '⭐',
    category: 'mastery',
  },
  'streak-7': {
    id: 'streak-7',
    name: { fr: 'Assidu', ar: 'مواظب', en: 'Dedicated' },
    description: { fr: '7 jours consécutifs', ar: '٧ أيام متتالية', en: '7 consecutive days' },
    icon: '🔥',
    category: 'streak',
  },
  'streak-30': {
    id: 'streak-30',
    name: { fr: 'Persévérant', ar: 'مثابر', en: 'Persevering' },
    description: { fr: '30 jours consécutifs', ar: '٣٠ يوماً متتالياً', en: '30 consecutive days' },
    icon: '💪',
    category: 'streak',
  },
  'salat-master': {
    id: 'salat-master',
    name: { fr: 'Maître de la Salat', ar: 'متقن الصلاة', en: 'Salat Master' },
    description: { fr: 'Obtenir l\'or au quiz Salat', ar: 'الحصول على الذهبية في اختبار الصلاة', en: 'Get gold on Salat quiz' },
    icon: '🕌',
    category: 'mastery',
  },
  'level-5': {
    id: 'level-5',
    name: { fr: 'Étudiant Distingué', ar: 'طالب متميز', en: 'Distinguished Student' },
    description: { fr: 'Atteindre le niveau 5', ar: 'الوصول للمستوى ٥', en: 'Reach level 5' },
    icon: '🏅',
    category: 'completion',
  },
  'ten-quizzes': {
    id: 'ten-quizzes',
    name: { fr: 'Décathlon', ar: 'عشرة اختبارات', en: 'Decathlon' },
    description: { fr: 'Compléter 10 quizzes', ar: 'إكمال ١٠ اختبارات', en: 'Complete 10 quizzes' },
    icon: '🏆',
    category: 'completion',
  },
};

interface UseQuizProgressReturn {
  progress: UserQuizProgress;
  isLoading: boolean;
  
  // XP & Levels
  addXp: (amount: number) => void;
  getLevelInfo: () => { level: number; title: LocalizedText; xpToNext: number | null; progressPercent: number };
  
  // Quiz completion
  recordQuizResult: (result: QuizResult) => Badge[];
  hasCompletedQuiz: (quizId: string) => boolean;
  getQuizAttempts: (quizId: string) => number;
  
  // Streak
  updateStreak: () => void;
  
  // Badges
  getBadges: () => Badge[];
  hasBadge: (badgeId: string) => boolean;
  
  // Stats
  getTotalQuizzesCompleted: () => number;
  getAverageScore: () => number;
  
  // Reset
  resetProgress: () => void;
}

export function useQuizProgress(): UseQuizProgressReturn {
  const [progress, setProgress] = useState<UserQuizProgress>(getDefaultProgress());
  const [isLoading, setIsLoading] = useState(true);

  // Load progress from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setProgress(parsed);
      }
    } catch (error) {
      console.error('Failed to load quiz progress:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      } catch (error) {
        console.error('Failed to save quiz progress:', error);
      }
    }
  }, [progress, isLoading]);

  // Add XP and update level
  const addXp = useCallback((amount: number) => {
    setProgress((prev) => {
      const newXp = prev.totalXp + amount;
      const levelInfo = getLevel(newXp);
      
      return {
        ...prev,
        totalXp: newXp,
        currentLevel: levelInfo.level,
        currentTitle: levelInfo.title,
      };
    });
  }, []);

  // Get current level info with progress
  const getLevelInfo = useCallback(() => {
    const levelInfo = getLevel(progress.totalXp);
    const currentLevelConfig = LEVEL_CONFIG.levels.find((l) => l.level === levelInfo.level);
    const nextLevelConfig = LEVEL_CONFIG.levels.find((l) => l.level === levelInfo.level + 1);
    
    let progressPercent = 100;
    if (nextLevelConfig && currentLevelConfig) {
      const xpInCurrentLevel = progress.totalXp - currentLevelConfig.xpRequired;
      const xpNeededForNext = nextLevelConfig.xpRequired - currentLevelConfig.xpRequired;
      progressPercent = Math.min(100, Math.round((xpInCurrentLevel / xpNeededForNext) * 100));
    }

    return {
      level: levelInfo.level,
      title: levelInfo.title,
      xpToNext: levelInfo.nextLevelXp ? levelInfo.nextLevelXp - progress.totalXp : null,
      progressPercent,
    };
  }, [progress.totalXp]);

  // Award a badge
  const awardBadge = useCallback((badgeId: string): Badge | null => {
    const badgeDef = BADGE_DEFINITIONS[badgeId];
    if (!badgeDef) return null;

    // Check if already has badge
    if (progress.badges.some((b) => b.id === badgeId)) {
      return null;
    }

    const badge: Badge = {
      ...badgeDef,
      earnedAt: new Date().toISOString(),
    };

    setProgress((prev) => ({
      ...prev,
      badges: [...prev.badges, badge],
    }));

    return badge;
  }, [progress.badges]);

  // Record a quiz result and check for new badges
  const recordQuizResult = useCallback((result: QuizResult): Badge[] => {
    const newBadges: Badge[] = [];

    setProgress((prev) => {
      // Update completed quizzes
      const existingCourse = prev.completedQuizzes.find(
        (c) => c.courseSlug === result.quizId.split('-')[1]
      );
      
      let completedQuizzes = [...prev.completedQuizzes];
      if (existingCourse) {
        if (!existingCourse.quizIds.includes(result.quizId)) {
          completedQuizzes = completedQuizzes.map((c) =>
            c.courseSlug === existingCourse.courseSlug
              ? { ...c, quizIds: [...c.quizIds, result.quizId] }
              : c
          );
        }
      } else {
        const courseSlug = result.quizId.split('-')[1] || 'general';
        completedQuizzes.push({
          courseSlug,
          quizIds: [result.quizId],
        });
      }

      // Update XP
      const newXp = prev.totalXp + result.xpEarned;
      const levelInfo = getLevel(newXp);

      return {
        ...prev,
        totalXp: newXp,
        currentLevel: levelInfo.level,
        currentTitle: levelInfo.title,
        completedQuizzes,
        lastQuizDate: new Date().toISOString().split('T')[0],
      };
    });

    // Check for badges after state update
    setTimeout(() => {
      // First quiz badge
      const totalQuizzes = progress.completedQuizzes.reduce(
        (sum, c) => sum + c.quizIds.length,
        0
      );
      
      if (totalQuizzes === 0) {
        const badge = awardBadge('first-quiz');
        if (badge) newBadges.push(badge);
      }

      // Perfect score badge
      if (result.percentage === 100) {
        const badge = awardBadge('perfect-score');
        if (badge) newBadges.push(badge);
      }

      // Salat master badge
      if (result.quizId.includes('salat') && result.medal === 'gold') {
        const badge = awardBadge('salat-master');
        if (badge) newBadges.push(badge);
      }

      // 10 quizzes badge
      if (totalQuizzes + 1 >= 10) {
        const badge = awardBadge('ten-quizzes');
        if (badge) newBadges.push(badge);
      }

      // Level 5 badge
      const newLevel = getLevel(progress.totalXp + result.xpEarned);
      if (newLevel.level >= 5 && progress.currentLevel < 5) {
        const badge = awardBadge('level-5');
        if (badge) newBadges.push(badge);
      }
    }, 0);

    return newBadges;
  }, [progress, awardBadge]);

  // Check if a quiz has been completed
  const hasCompletedQuiz = useCallback((quizId: string): boolean => {
    return progress.completedQuizzes.some((c) => c.quizIds.includes(quizId));
  }, [progress.completedQuizzes]);

  // Get number of attempts for a quiz
  const getQuizAttempts = useCallback((quizId: string): number => {
    return progress.completedQuizzes.reduce(
      (count, c) => count + c.quizIds.filter((id) => id === quizId).length,
      0
    );
  }, [progress.completedQuizzes]);

  // Update streak
  const updateStreak = useCallback(() => {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    setProgress((prev) => {
      if (prev.lastQuizDate === today) {
        // Already updated today
        return prev;
      }

      let newStreak = 1;
      if (prev.lastQuizDate === yesterday) {
        // Consecutive day
        newStreak = prev.currentStreak + 1;
      }

      const newBestStreak = Math.max(prev.bestStreak, newStreak);

      return {
        ...prev,
        currentStreak: newStreak,
        bestStreak: newBestStreak,
        lastQuizDate: today,
      };
    });

    // Check streak badges
    setTimeout(() => {
      if (progress.currentStreak + 1 >= 7) {
        awardBadge('streak-7');
      }
      if (progress.currentStreak + 1 >= 30) {
        awardBadge('streak-30');
      }
    }, 0);
  }, [progress.currentStreak, progress.lastQuizDate, awardBadge]);

  // Get all badges
  const getBadges = useCallback(() => progress.badges, [progress.badges]);

  // Check if has a specific badge
  const hasBadge = useCallback(
    (badgeId: string) => progress.badges.some((b) => b.id === badgeId),
    [progress.badges]
  );

  // Get total quizzes completed
  const getTotalQuizzesCompleted = useCallback(() => {
    return progress.completedQuizzes.reduce((sum, c) => sum + c.quizIds.length, 0);
  }, [progress.completedQuizzes]);

  // Get average score (placeholder - would need to store scores)
  const getAverageScore = useCallback(() => {
    // This would need stored results to calculate properly
    return 0;
  }, []);

  // Reset all progress
  const resetProgress = useCallback(() => {
    setProgress(getDefaultProgress());
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    progress,
    isLoading,
    addXp,
    getLevelInfo,
    recordQuizResult,
    hasCompletedQuiz,
    getQuizAttempts,
    updateStreak,
    getBadges,
    hasBadge,
    getTotalQuizzesCompleted,
    resetProgress,
    getAverageScore,
  };
}

export default useQuizProgress;
