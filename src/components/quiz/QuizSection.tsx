'use client';

import { useState } from 'react';
import { Quiz, LocalizedText } from '@/lib/data/quizzes/types';
import { getQuizzesByCourse } from '@/lib/data/quizzes';
import { QuizCard } from './QuizCard';
import { QuizPlayer } from './QuizPlayer';
import { useQuizProgress } from '@/lib/hooks/useQuizProgress';
import { cn } from '@/lib/utils';

type Locale = 'fr' | 'ar' | 'en';

interface QuizSectionProps {
  courseSlug: string;
  locale: Locale;
  compact?: boolean; // Mode compact pour la sidebar
}

export function QuizSection({ courseSlug, locale, compact = false }: QuizSectionProps) {
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const { recordQuizResult, updateStreak } = useQuizProgress();
  
  const isRtl = locale === 'ar';
  const quizzes = getQuizzesByCourse(courseSlug);

  // No quizzes for this course
  if (quizzes.length === 0) {
    return null;
  }

  const handleQuizComplete = (result: Parameters<typeof recordQuizResult>[0]) => {
    recordQuizResult(result);
    updateStreak();
  };

  // Show quiz player if quiz is active (fullscreen modal style for compact)
  if (activeQuiz) {
    return (
      <div className={cn(
        compact 
          ? 'fixed inset-0 z-50 bg-background overflow-auto' 
          : 'mt-8'
      )}>
        {/* Header with back button (compact/fullscreen mode only) */}
        {compact && (
          <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border">
            <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
              <button
                onClick={() => setActiveQuiz(null)}
                className={cn(
                  'flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors',
                  isRtl && 'flex-row-reverse'
                )}
              >
                <span className={isRtl ? 'rotate-180' : ''}>←</span>
                <span>
                  {locale === 'ar' ? 'العودة للدورة' : locale === 'en' ? 'Back to course' : 'Retour au cours'}
                </span>
              </button>
              <span className="text-sm text-muted-foreground">
                {activeQuiz.title[locale]}
              </span>
            </div>
          </div>
        )}
        
        <QuizPlayer
          quiz={activeQuiz}
          locale={locale}
          onComplete={handleQuizComplete}
          onExit={() => setActiveQuiz(null)}
        />
      </div>
    );
  }

  // Compact mode for sidebar
  if (compact) {
    const quiz = quizzes[0]; // Show first quiz in compact mode
    return (
      <div dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">📝</span>
          <h3 className={cn(
            'font-semibold text-foreground',
            isRtl && 'font-arabic'
          )}>
            {locale === 'ar' ? 'اختبار متاح' : locale === 'en' ? 'Quiz Available' : 'Quiz disponible'}
          </h3>
        </div>
        
        <div className="p-3 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/20">
          <p className={cn(
            'font-medium text-sm text-foreground mb-2',
            isRtl && 'font-arabic'
          )}>
            {quiz.title[locale]}
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
            <span>❓ {quiz.questions.length}</span>
            <span>⏱ {quiz.duration} min</span>
          </div>
          <button
            onClick={() => setActiveQuiz(quiz)}
            className="w-full py-2 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            {locale === 'ar' ? 'ابدأ الاختبار' : locale === 'en' ? 'Start Quiz' : 'Commencer'}
          </button>
        </div>
        
        {quizzes.length > 1 && (
          <p className="text-xs text-muted-foreground mt-2 text-center">
            +{quizzes.length - 1} {locale === 'ar' ? 'اختبارات أخرى' : locale === 'en' ? 'more quizzes' : 'autres quiz'}
          </p>
        )}
      </div>
    );
  }

  // Full mode (mobile / main content)
  return (
    <div className="mt-8" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
          <span className="text-xl">📝</span>
        </div>
        <div>
          <h2 className={cn(
            'text-xl font-bold text-gray-900 dark:text-white',
            isRtl && 'font-arabic'
          )}>
            {locale === 'ar' ? 'اختبر معلوماتك' : locale === 'en' ? 'Test Your Knowledge' : 'Testez vos connaissances'}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {locale === 'ar'
              ? `${quizzes.length} اختبار متاح`
              : locale === 'en'
              ? `${quizzes.length} quiz${quizzes.length > 1 ? 'zes' : ''} available`
              : `${quizzes.length} quiz disponible${quizzes.length > 1 ? 's' : ''}`}
          </p>
        </div>
      </div>

      {/* Quiz Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            quiz={quiz}
            locale={locale}
            onStart={() => setActiveQuiz(quiz)}
          />
        ))}
      </div>

      {/* Encouragement message */}
      <div className="mt-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
        <p className="text-sm text-amber-800 dark:text-amber-300">
          {locale === 'ar'
            ? '💡 أكمل الدروس قبل محاولة الاختبار للحصول على أفضل النتائج!'
            : locale === 'en'
            ? '💡 Complete the lessons before attempting the quiz for best results!'
            : '💡 Complétez les leçons avant de tenter le quiz pour de meilleurs résultats !'}
        </p>
      </div>
    </div>
  );
}

export default QuizSection;
