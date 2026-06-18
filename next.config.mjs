/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisation des images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  
  // Compilation optimisée
  compiler: {
    // Supprimer console.log en production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Prévenir les pages dupliquées (trailing slash)
  trailingSlash: false,

  // Optimisations de performance
  compress: true, // Compression gzip
  poweredByHeader: false, // Retirer X-Powered-By header
  
  // Code splitting et tree-shaking optimisés
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  // Headers de cache pour les assets statiques
  async headers() {
    return [
      // Toutes les pages HTML : signaler aux bots qu'elles sont indexables
      {
        source: '/((?!api|_next/static|_next/image|favicon.ico|icons|images|fonts|sw.js|site.webmanifest).*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        ],
      },
      // Service Worker : ne pas indexer
      {
        source: '/sw.js',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex' },
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }
        ],
      },
      {
        source: '/icons/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ],
      },
    ];
  },

  // Redirections pour corriger les pages en double
  async redirects() {
    return [
      // Redirection non-www root → www + locale par défaut (1 seul saut)
      {
        source: '/',
        has: [{ type: 'host', value: 'tahalearn.com' }],
        destination: 'https://www.tahalearn.com/fr',
        permanent: true,
      },
      // Redirection non-www autres chemins → www (permanent 308)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'tahalearn.com' }],
        destination: 'https://www.tahalearn.com/:path*',
        permanent: true,
      },
      // ─── Legacy slug redirects (must come before the locale catch-all) ───
      {
        source: '/courses/bases-fiqh-ibadat',
        destination: '/fr/courses/bases-fiqh-ibadat-purification',
        permanent: true,
      },
      {
        source: '/courses/bases-fiqh-ibadat/lessons/:lessonId*',
        destination: '/fr/courses/bases-fiqh-ibadat-purification/lessons/:lessonId*',
        permanent: true,
      },
      { source: '/courses/mustalah-hadith/lessons/lesson-001', destination: '/fr/courses/mustalah-hadith/lessons/001-introduction', permanent: true },
      { source: '/courses/mustalah-hadith/lessons/lesson-002', destination: '/fr/courses/mustalah-hadith/lessons/002-classification', permanent: true },
      { source: '/courses/mustalah-hadith/lessons/lesson-003', destination: '/fr/courses/mustalah-hadith/lessons/003-isnad', permanent: true },
      { source: '/courses/mustalah-hadith/lessons/lesson-004', destination: '/fr/courses/mustalah-hadith/lessons/004-recueils', permanent: true },
      { source: '/courses/mustalah-hadith/lessons/lesson-005', destination: '/fr/courses/mustalah-hadith/lessons/005-verification', permanent: true },
      { source: '/courses/mustalah-hadith/lessons/lesson-006', destination: '/fr/courses/mustalah-hadith/lessons/006-mawdu', permanent: true },
      { source: '/courses/mustalah-hadith/lessons/lesson-007', destination: '/fr/courses/mustalah-hadith/lessons/007-femmes-savantes', permanent: true },
      // ─── Locale catch-all: redirect bare URLs to /fr/ for existing indexed pages ───
      { source: '/courses/:path*', destination: '/fr/courses/:path*', permanent: true },
      { source: '/about', destination: '/fr/about', permanent: true },
      { source: '/exams/:path*', destination: '/fr/exams/:path*', permanent: true },
      { source: '/exams', destination: '/fr/exams', permanent: true },
      { source: '/placement', destination: '/fr/placement', permanent: true },
    ];
  },
};

export default nextConfig;
