'use client';

import ExamDashboard from '@/components/exam/ExamDashboard';
import { useLocale } from '@/components/providers';

export default function ExamsPageClient() {
  const { locale } = useLocale();
  
  return <ExamDashboard language={locale} />;
}
