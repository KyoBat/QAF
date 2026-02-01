/**
 * Page de la liste des examens disponibles
 */

import { Metadata } from 'next';
import ExamsPageClient from './ExamsPageClient';

export const metadata: Metadata = {
  title: 'Examens | Rabbi Zidni Ilma',
  description: 'Passez vos examens et obtenez vos certificats en sciences islamiques.',
};

export default function ExamsPage() {
  return <ExamsPageClient />;
}
