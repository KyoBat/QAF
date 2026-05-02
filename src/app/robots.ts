import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.tahalearn.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/api/og'],
        disallow: ['/api/', '/private/', '/_next/'],
      },
      {
        // WhatsApp / Facebook link preview bot
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/api/og'],
        disallow: ['/api/', '/private/', '/_next/'],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/', '/api/og'],
        disallow: ['/api/', '/private/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
