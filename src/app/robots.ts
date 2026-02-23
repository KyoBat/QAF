import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.tahalearn.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/courses/',
          '/courses/*/lessons/*',
          '/exams/',
          '/about',
        ],
        disallow: [
          '/api/', 
          '/private/',
          '/_next/',
          '/admin/',
        ],
      },
      // Règle spéciale pour Googlebot - plus permissive
      {
        userAgent: 'Googlebot',
        allow: ['/', '/courses/', '/courses/*/lessons/*'],
        disallow: ['/api/', '/private/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
