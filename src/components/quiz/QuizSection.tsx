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
}

export function QuizSection({ courseSlug, locale }: QuizSectionProps) {
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

  // Show quiz player if quiz is active
  if (activeQuiz) {
    return (
      <div className="mt-8">
        <QuizPlayer
          quiz={activeQuiz}
          locale={locale}
          onComplete={handleQuizComplete}
          onExit={() => setActiveQuiz(null)}
        />
      </div>
    );
  }

  return (
    <div className="mt-8" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
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
