/**
 * JSON-LD Structured Data Components
 * Pour le SEO enrichi (Rich Snippets)
 */

import type { Course } from '@/lib/data/courses/types'

const BASE_URL = 'https://www.tahalearn.com'

// Schema.org Organization
export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'TahaLearn',
    alternateName: 'طه للتعلم',
    url: BASE_URL,
    logo: `${BASE_URL}/icons/icon-512x512.svg`,
    description: 'Plateforme gratuite d\'apprentissage des sciences islamiques',
    sameAs: [
      'https://twitter.com/tahalearn',
      'https://instagram.com/tahalearn',
      'https://facebook.com/tahalearn',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'tahalearnacademy@gmail.com',
      contactType: 'customer service',
      availableLanguage: ['French', 'Arabic', 'English'],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Schema.org WebSite (pour la recherche)
export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TahaLearn',
    alternateName: 'طه للتعلم',
    url: BASE_URL,
    description: 'Plateforme d\'apprentissage des sciences islamiques gratuite',
    inLanguage: ['fr', 'ar', 'en'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/courses?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Schema.org Course
export function CourseJsonLd({ course, locale = 'fr' }: { course: Course; locale?: string }) {
  const title = course.title[locale as keyof typeof course.title] || course.title.fr
  const description = course.description[locale as keyof typeof course.description] || course.description.fr

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: title,
    description: description,
    url: `${BASE_URL}/courses/${course.slug}`,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'TahaLearn',
      url: BASE_URL,
    },
    instructor: {
      '@type': 'Person',
      name: course.instructor,
    },
    courseCode: course.id,
    numberOfLessons: course.lessons.length,
    timeRequired: course.duration,
    educationalLevel: course.level === 'beginner' ? 'Beginner' : course.level === 'intermediate' ? 'Intermediate' : 'Advanced',
    inLanguage: ['fr', 'ar', 'en'],
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Online',
      courseWorkload: course.duration,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Schema.org BreadcrumbList
export function BreadcrumbJsonLd({ items }: { items: { name: string; url?: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${BASE_URL}${item.url}` : undefined,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Schema.org FAQPage (pour les pages avec FAQ)
export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
