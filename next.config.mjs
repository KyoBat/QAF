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
      // Mustalah Hadith - Anciennes URLs lesson-XXX → Nouvelles URLs XXX-nom
      {
        source: '/courses/mustalah-hadith/lessons/lesson-001',
        destination: '/courses/mustalah-hadith/lessons/001-introduction',
        permanent: true,
      },
      {
        source: '/courses/mustalah-hadith/lessons/lesson-002',
        destination: '/courses/mustalah-hadith/lessons/002-classification',
        permanent: true,
      },
      {
        source: '/courses/mustalah-hadith/lessons/lesson-003',
        destination: '/courses/mustalah-hadith/lessons/003-isnad',
        permanent: true,
      },
      {
        source: '/courses/mustalah-hadith/lessons/lesson-004',
        destination: '/courses/mustalah-hadith/lessons/004-recueils',
        permanent: true,
      },
      {
        source: '/courses/mustalah-hadith/lessons/lesson-005',
        destination: '/courses/mustalah-hadith/lessons/005-verification',
        permanent: true,
      },
      {
        source: '/courses/mustalah-hadith/lessons/lesson-006',
        destination: '/courses/mustalah-hadith/lessons/006-mawdu',
        permanent: true,
      },
      {
        source: '/courses/mustalah-hadith/lessons/lesson-007',
        destination: '/courses/mustalah-hadith/lessons/007-femmes-savantes',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
