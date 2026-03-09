/**
 * Page HTML Sitemap - Aide à l'indexation Google
 */

import { coursesData } from '@/lib/data/courses-data'
import Link from 'next/link'
import { getAllExamsLight } from '@/lib/data/exams'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plan du Site',
  description: 'Plan du site TahaLearn avec tous les cours et leçons de sciences islamiques disponibles.',
  alternates: {
    canonical: 'https://www.tahalearn.com/sitemap-html',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function HtmlSitemapPage() {
  const publishedCourses = coursesData.filter(course => course.published)
  const exams = getAllExamsLight()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Plan du Site TahaLearn
      </h1>
      
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Pages principales */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary-600">
            Pages Principales
          </h2>
          <ul className="space-y-2">
            <li><Link href="/" className="text-blue-600 hover:underline">Accueil</Link></li>
            <li><Link href="/courses" className="text-blue-600 hover:underline">Tous les Cours</Link></li>
            <li><Link href="/exams" className="text-blue-600 hover:underline">Examens</Link></li>
            <li><Link href="/about" className="text-blue-600 hover:underline">À Propos</Link></li>
          </ul>
        </section>

        {/* Cours et Leçons */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary-600">
            Cours et Leçons ({publishedCourses.length} cours)
          </h2>
          
          {publishedCourses.map((course) => (
            <div key={course.id} className="mb-6 border-l-4 border-primary-200 pl-4">
              <h3 className="text-lg font-medium mb-2">
                <Link
                  href={`/courses/${course.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {course.title.fr}
                </Link>
                <span className="text-sm text-gray-500 ml-2">
                  ({course.lessons.length} leçons)
                </span>
              </h3>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                {course.lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <Link
                      href={`/courses/${course.slug}/lessons/${lesson.id}`}
                      className="text-blue-500 hover:underline text-sm"
                    >
                      {lesson.id} - {lesson.title.fr}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Examens */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary-600">
            Examens ({exams.length} examens)
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {exams.map((exam) => (
              <li key={exam.id}>
                <Link
                  href={`/exams/${exam.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {typeof exam.title === 'string' ? exam.title : exam.title.fr}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <section className="text-center text-gray-600 text-sm mt-12 pt-8 border-t">
          <p>
            Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}
          </p>
          <p className="mt-2">
            Total: {publishedCourses.length} cours, {' '}
            {publishedCourses.reduce((acc, course) => acc + course.lessons.length, 0)} leçons, {' '}
            {exams.length} examens
          </p>
        </section>

      </div>
    </div>
  )
}