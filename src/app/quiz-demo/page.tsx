'use client';

import { useState } from 'react';
import { QuizPlayer } from '@/components/quiz';
import { quizSalatModule } from '@/lib/data/quizzes';
import { QuizResult } from '@/lib/data/quizzes/types';

// This is a demo page, should not be indexed
export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

type Locale = 'fr' | 'ar' | 'en';

export default function QuizDemoPage() {
  const [locale, setLocale] = useState<Locale>('fr');
  const [showQuiz, setShowQuiz] = useState(false);
  const [lastResult, setLastResult] = useState<QuizResult | null>(null);

  const handleComplete = (result: QuizResult) => {
    setLastResult(result);
    console.log('Quiz completed:', result);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Quiz Demo — Rabbi Zidni Ilma
          </h1>
          
          {/* Language selector */}
          <div className="flex items-center gap-2">
            {(['fr', 'en', 'ar'] as Locale[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  locale === lang
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-8">
        {!showQuiz ? (
          <div className="text-center p-8">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-lg">
                <span className="text-5xl">📝</span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {locale === 'ar'
                  ? 'اختبار وحدة الصلاة'
                  : locale === 'en'
                  ? 'Salat Module Quiz'
                  : 'Quiz du Module Salat'}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                {locale === 'ar'
                  ? 'اختبر معلوماتك حول أحكام الصلاة'
                  : locale === 'en'
                  ? 'Test your knowledge about prayer rulings'
                  : 'Testez vos connaissances sur les règles de la prière'}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {quizSalatModule.questions.length}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {locale === 'ar' ? 'سؤال' : locale === 'en' ? 'Questions' : 'Questions'}
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {quizSalatModule.duration}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {locale === 'ar' ? 'دقيقة' : locale === 'en' ? 'Minutes' : 'Minutes'}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowQuiz(true)}
                className="px-8 py-4 rounded-xl bg-primary-600 text-white font-medium text-lg hover:bg-primary-700 transition-colors shadow-lg"
              >
                {locale === 'ar'
                  ? 'ابدأ الاختبار'
                  : locale === 'en'
                  ? 'Start Quiz'
                  : 'Commencer le Quiz'}
              </button>

              {lastResult && (
                <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {locale === 'ar'
                      ? `آخر نتيجة: ${lastResult.percentage}%`
                      : locale === 'en'
                      ? `Last result: ${lastResult.percentage}%`
                      : `Dernier résultat : ${lastResult.percentage}%`}
                    {lastResult.passed ? ' ✅' : ' ❌'}
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <QuizPlayer
            quiz={quizSalatModule}
            locale={locale}
            onComplete={handleComplete}
            onExit={() => setShowQuiz(false)}
          />
        )}
      </main>
    </div>
  );
}
