'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Quiz, LocalizedText } from '@/lib/data/quizzes/types';
import { useQuizProgress } from '@/lib/hooks/useQuizProgress';
import { cn } from '@/lib/utils';

type Locale = 'fr' | 'ar' | 'en';

interface QuizCardProps {
  quiz: Quiz;
  locale: Locale;
  href?: string;
  onStart?: () => void;
}

function getText(text: LocalizedText, locale: Locale): string {
  return text[locale] || text.fr;
}

export function QuizCard({ quiz, locale, href, onStart }: QuizCardProps) {
  const { hasCompletedQuiz, progress } = useQuizProgress();
  const isRtl = locale === 'ar';
  const isCompleted = hasCompletedQuiz(quiz.id);

  // Find best result for this quiz
  const completedInfo = progress.completedQuizzes.find((c) =>
    c.quizIds.includes(quiz.id)
  );

  const getTypeLabel = () => {
    switch (quiz.type) {
      case 'mini':
        return { fr: 'Mini-Quiz', ar: 'اختبار قصير', en: 'Mini Quiz' }[locale];
      case 'module':
        return { fr: 'Quiz de Module', ar: 'اختبار الوحدة', en: 'Module Quiz' }[locale];
      case 'global':
        return { fr: 'Quiz Global', ar: 'اختبار شامل', en: 'Global Quiz' }[locale];
      default:
        return 'Quiz';
    }
  };

  const getTypeColor = () => {
    switch (quiz.type) {
      case 'mini':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'module':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'global':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const content = (
    <div
      className={cn(
        'relative p-5 rounded-2xl border transition-all',
        'bg-white dark:bg-gray-800',
        'border-gray-200 dark:border-gray-700',
        'hover:border-primary/50 dark:hover:border-primary',
        'hover:shadow-md cursor-pointer group'
      )}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Completed badge */}
      {isCompleted && (
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={cn('px-2 py-1 rounded-full text-xs font-medium', getTypeColor())}>
            {getTypeLabel()}
          </span>
          <span
            className={cn(
              'px-2 py-1 rounded-full text-xs font-medium',
              quiz.level === 'beginner'
                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                : quiz.level === 'intermediate'
                ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
            )}
          >
            {quiz.level === 'beginner'
              ? { fr: 'Débutant', ar: 'مبتدئ', en: 'Beginner' }[locale]
              : quiz.level === 'intermediate'
              ? { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' }[locale]
              : { fr: 'Avancé', ar: 'متقدم', en: 'Advanced' }[locale]}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary transition-colors">
        {getText(quiz.title, locale)}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
        {getText(quiz.description, locale)}
      </p>

      {/* Stats */}
      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-1">
          <span>❓</span>
          <span>
            {quiz.questions.length}{' '}
            {locale === 'ar' ? 'سؤال' : locale === 'en' ? 'questions' : 'questions'}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span>⏱</span>
          <span>{quiz.duration} min</span>
        </div>
        <div className="flex items-center gap-1">
          <span>🎯</span>
          <span>{quiz.passingScore}%</span>
        </div>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg
          className={cn('w-6 h-6 text-primary', isRtl && 'rotate-180')}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  if (onStart) {
    return <button onClick={onStart} className="w-full text-start">{content}</button>;
  }

  return content;
}

export default QuizCard;
