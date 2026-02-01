'use client';

/**
 * Page client pour un examen spécifique
 */

import { useParams } from 'next/navigation';
import { useLocale } from '@/components/providers';
import AcademicExam from '@/components/exam/AcademicExam';
import { getExamById } from '@/lib/data/exams';
import Link from 'next/link';

export default function ExamPageClient() {
  const params = useParams();
  const { locale } = useLocale();
  const language = locale as 'fr' | 'ar' | 'en';
  const examId = params.id as string;

  const exam = getExamById(examId);

  if (!exam) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-muted-foreground mb-6">
            {language === 'ar' 
              ? 'هذا الامتحان غير موجود' 
              : language === 'en' 
                ? 'This exam does not exist' 
                : 'Cet examen n\'existe pas'}
          </p>
          <Link
            href="/exams"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            {language === 'ar' 
              ? 'العودة للامتحانات' 
              : language === 'en' 
                ? 'Back to Exams' 
                : 'Retour aux examens'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <AcademicExam
      exam={exam}
      language={language}
      onComplete={(result) => {
        console.log('Exam completed:', result);
      }}
    />
  );
}
