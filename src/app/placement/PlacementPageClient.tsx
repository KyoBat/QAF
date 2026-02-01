'use client';

/**
 * Client Component pour la page de placement
 * Gère la détection de la langue du site
 */

import { useLocale } from '@/components/providers';
import PlacementExam from '@/components/quiz/PlacementExam';

export default function PlacementPageClient() {
  const { locale } = useLocale();
  
  // Mapper la locale du site vers le format attendu par PlacementExam
  const language = locale as 'fr' | 'ar' | 'en';
  
  return <PlacementExam language={language} />;
}
