/**
 * Page d'un examen spécifique
 */

import { Metadata } from 'next';
import { getExamById, getAllExamsLight } from '@/lib/data/exams';
import ExamPageClient from './ExamPageClient';

// ISR: Regénérer la page toutes les 24h
export const revalidate = 86400;

interface PageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const exam = getExamById(params.id);
  
  if (!exam) {
    return {
      title: 'Examen non trouvé | Rabbi Zidni Ilma',
    };
  }

  return {
    title: `${exam.title.fr} | Rabbi Zidni Ilma`,
    description: exam.description.fr,
  };
}

export async function generateStaticParams() {
  // Utiliser la version light pour la génération statique (plus rapide)
  const exams = getAllExamsLight();
  return exams.map((exam) => ({
    id: exam.id,
  }));
}

export default function ExamPage() {
  return <ExamPageClient />;
}
