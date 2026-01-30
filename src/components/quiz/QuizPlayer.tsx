'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Quiz,
  Question,
  QuizResult as QuizResultType,
  UserAnswer,
  getMedal,
  calculateXp,
} from '@/lib/data/quizzes/types';
import { QuestionCard } from './QuestionCard';
import { QuizResult } from './QuizResult';
import { cn } from '@/lib/utils';

type Locale = 'fr' | 'ar' | 'en';

interface QuizPlayerProps {
  quiz: Quiz;
  locale: Locale;
  userId?: string;
  attemptNumber?: number;
  onComplete?: (result: QuizResultType) => void;
  onExit?: () => void;
}

type QuizState = 'intro' | 'playing' | 'result';

export function QuizPlayer({
  quiz,
  locale,
  userId = 'guest',
  attemptNumber = 1,
  onComplete,
  onExit,
}: QuizPlayerProps) {
  const [state, setState] = useState<QuizState>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<string, UserAnswer>>(new Map());
  const [questions, setQuestions] = useState<Question[]>([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [questionStartTime, setQuestionStartTime] = useState<number>(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [result, setResult] = useState<QuizResultType | null>(null);

  const isRtl = locale === 'ar';

  // Initialize questions (shuffle if needed)
  useEffect(() => {
    let orderedQuestions = [...quiz.questions];
    if (quiz.shuffleQuestions) {
      orderedQuestions = orderedQuestions.sort(() => Math.random() - 0.5);
    }
    setQuestions(orderedQuestions);
  }, [quiz]);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const getText = useCallback(
    (text: { fr: string; ar: string; en: string }) => text[locale] || text.fr,
    [locale]
  );

  const startQuiz = () => {
    setState('playing');
    setStartTime(Date.now());
    setQuestionStartTime(Date.now());
  };

  const handleAnswer = (answer: number | number[] | boolean | string | string[][]) => {
    if (!currentQuestion) return;

    const timeSpent = Math.round((Date.now() - questionStartTime) / 1000);
    const isCorrect = checkAnswer(currentQuestion, answer);
    const pointsEarned = isCorrect ? currentQuestion.points : 0;

    const userAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      userAnswer: answer,
      isCorrect,
      pointsEarned,
      timeSpent,
      hintUsed: false,
    };

    setAnswers((prev) => new Map(prev).set(currentQuestion.id, userAnswer));

    // Show explanation based on quiz settings
    if (quiz.showExplanation === 'always' || quiz.showExplanation === 'after_submit') {
      setShowExplanation(true);
    }
  };

  const checkAnswer = (
    question: Question,
    answer: number | number[] | boolean | string | string[][]
  ): boolean => {
    switch (question.type) {
      case 'single':
        return answer === question.correctAnswer;
      case 'multiple':
        const correctArr = question.correctAnswer as number[];
        const answerArr = answer as number[];
        return (
          correctArr.length === answerArr.length &&
          correctArr.every((v) => answerArr.includes(v))
        );
      case 'boolean':
        return answer === question.correctAnswer;
      case 'order':
        const correctOrder = question.correctAnswer as number[];
        const answerOrder = answer as number[];
        return JSON.stringify(correctOrder) === JSON.stringify(answerOrder);
      default:
        return false;
    }
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    setQuestionStartTime(Date.now());

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setShowExplanation(false);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const finishQuiz = () => {
    const totalTimeSpent = Math.round((Date.now() - startTime) / 1000);
    const answersArray = Array.from(answers.values());

    const score = answersArray.reduce((sum, a) => sum + a.pointsEarned, 0);
    const maxScore = questions.reduce((sum, q) => sum + q.points, 0);
    const percentage = Math.round((score / maxScore) * 100);
    const passed = percentage >= quiz.passingScore;
    const medal = getMedal(percentage, quiz.type);
    const xpEarned = calculateXp(quiz.type, percentage, passed);

    const quizResult: QuizResultType = {
      id: `result-${Date.now()}`,
      quizId: quiz.id,
      userId,
      score,
      maxScore,
      percentage,
      passed,
      medal,
      timeSpent: totalTimeSpent,
      answers: answersArray,
      completedAt: new Date().toISOString(),
      attemptNumber,
      xpEarned,
    };

    setResult(quizResult);
    setState('result');
    onComplete?.(quizResult);
  };

  const retryQuiz = () => {
    setAnswers(new Map());
    setCurrentIndex(0);
    setShowExplanation(false);
    setResult(null);
    setState('intro');
  };

  // Render intro screen
  if (state === 'intro') {
    return (
      <div
        className="max-w-2xl mx-auto p-6 text-center"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
            <span className="text-4xl">📝</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {getText(quiz.title)}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">{getText(quiz.description)}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <InfoCard
            icon="❓"
            label={locale === 'ar' ? 'أسئلة' : locale === 'en' ? 'Questions' : 'Questions'}
            value={questions.length.toString()}
          />
          <InfoCard
            icon="⏱"
            label={locale === 'ar' ? 'المدة' : locale === 'en' ? 'Duration' : 'Durée'}
            value={`${quiz.duration} min`}
          />
          <InfoCard
            icon="🎯"
            label={locale === 'ar' ? 'الحد الأدنى' : locale === 'en' ? 'Pass score' : 'Score min'}
            value={`${quiz.passingScore}%`}
          />
          <InfoCard
            icon="🔄"
            label={locale === 'ar' ? 'المحاولات' : locale === 'en' ? 'Attempts' : 'Tentatives'}
            value={`${attemptNumber}/${quiz.maxAttempts}`}
          />
        </div>

        <div
          className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-8 text-start"
        >
          <h3 className="font-medium text-amber-800 dark:text-amber-300 mb-2">
            {locale === 'ar' ? 'تعليمات' : locale === 'en' ? 'Instructions' : 'Instructions'}
          </h3>
          <p className="text-amber-700 dark:text-amber-400 text-sm">
            {getText(quiz.instructions)}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={startQuiz}
            className="px-8 py-3 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
          >
            {locale === 'ar' ? 'ابدأ الاختبار' : locale === 'en' ? 'Start Quiz' : 'Commencer le Quiz'}
          </button>
          {onExit && (
            <button
              onClick={onExit}
              className="px-8 py-3 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {locale === 'ar' ? 'إلغاء' : locale === 'en' ? 'Cancel' : 'Annuler'}
            </button>
          )}
        </div>
      </div>
    );
  }

  // Render result screen
  if (state === 'result' && result) {
    return (
      <div className="p-6">
        <QuizResult
          result={result}
          quiz={quiz}
          locale={locale}
          onRetry={attemptNumber < quiz.maxAttempts ? retryQuiz : undefined}
          onContinue={onExit}
        />
      </div>
    );
  }

  // Render playing screen
  return (
    <div className="max-w-3xl mx-auto p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {locale === 'ar'
              ? `السؤال ${currentIndex + 1} من ${questions.length}`
              : locale === 'en'
              ? `Question ${currentIndex + 1} of ${questions.length}`
              : `Question ${currentIndex + 1} sur ${questions.length}`}
          </span>
          {onExit && (
            <button
              onClick={onExit}
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {locale === 'ar' ? 'خروج' : locale === 'en' ? 'Exit' : 'Quitter'}
            </button>
          )}
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      {currentQuestion && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <QuestionCard
            question={currentQuestion}
            locale={locale}
            onAnswer={handleAnswer}
            showResult={showExplanation && quiz.showCorrectAnswer}
            userAnswer={answers.get(currentQuestion.id)?.userAnswer}
            disabled={showExplanation}
          />
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={prevQuestion}
          disabled={currentIndex === 0}
          className={cn(
            'px-6 py-2 rounded-xl font-medium transition-colors',
            currentIndex === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
          )}
        >
          {locale === 'ar' ? 'السابق' : locale === 'en' ? 'Previous' : 'Précédent'}
        </button>

        <div className="flex gap-2">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setShowExplanation(false);
                setCurrentIndex(index);
              }}
              className={cn(
                'w-8 h-8 rounded-full text-sm font-medium transition-colors',
                index === currentIndex
                  ? 'bg-primary-500 text-white'
                  : answers.has(questions[index]?.id)
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
              )}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {showExplanation ? (
          <button
            onClick={nextQuestion}
            className="px-6 py-2 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
          >
            {currentIndex === questions.length - 1
              ? locale === 'ar'
                ? 'إنهاء'
                : locale === 'en'
                ? 'Finish'
                : 'Terminer'
              : locale === 'ar'
              ? 'التالي'
              : locale === 'en'
              ? 'Next'
              : 'Suivant'}
          </button>
        ) : (
          <button
            onClick={() => {
              if (answers.has(currentQuestion?.id)) {
                if (quiz.showExplanation === 'after_submit') {
                  setShowExplanation(true);
                } else {
                  nextQuestion();
                }
              }
            }}
            disabled={!answers.has(currentQuestion?.id)}
            className={cn(
              'px-6 py-2 rounded-xl font-medium transition-colors',
              answers.has(currentQuestion?.id)
                ? 'bg-primary-600 text-white hover:bg-primary-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600'
            )}
          >
            {locale === 'ar' ? 'تأكيد' : locale === 'en' ? 'Confirm' : 'Confirmer'}
          </button>
        )}
      </div>
    </div>
  );
}

interface InfoCardProps {
  icon: string;
  label: string;
  value: string;
}

function InfoCard({ icon, label, value }: InfoCardProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <div className="font-bold text-lg text-gray-900 dark:text-white">{value}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
    </div>
  );
}

export default QuizPlayer;
