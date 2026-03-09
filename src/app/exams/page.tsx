/**
 * Page de la liste des examens disponibles
 */

import { Metadata } from 'next';
import ExamsPageClient from './ExamsPageClient';
import { BreadcrumbJsonLd } from '@/components/seo';

// ISR: Regénérer la page toutes les 6 heures
export const revalidate = 21600;

export const metadata: Metadata = {
  title: 'Examens et Certifications',
  description: 'Testez vos connaissances en sciences islamiques et obtenez vos certificats. Examens gratuits avec correction instantanée.',
  keywords: ['Examen islamique', 'Certificat sciences islamiques', 'Quiz Islam', 'Test Tajweed', 'Test Fiqh', 'Évaluation TahaLearn'],
  alternates: {
    canonical: 'https://www.tahalearn.com/exams',
  },
  openGraph: {
    title: 'Examens et Certifications',
    description: 'Testez vos connaissances et obtenez vos certificats en sciences islamiques.',
    url: 'https://www.tahalearn.com/exams',
    siteName: 'TahaLearn',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TahaLearn - Examens',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Examens et Certifications | TahaLearn',
    description: 'Testez vos connaissances en sciences islamiques.',
    images: ['/og-image.png'],
  },
};

export default function ExamsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: '/' },
        { name: 'Examens', url: '/exams' },
      ]} />
      <ExamsPageClient />
    </>
  );
}
