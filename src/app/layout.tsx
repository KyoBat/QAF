import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Inter, Amiri } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "@/components/providers";
import { Header, Footer } from "@/components/layout";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo";
import { coursesData } from "@/lib/data/courses/index";

// Compute lightweight search data server-side to avoid bundling 12MB of course
// content into the client JS. Only slug/title/description + lesson id/title.
const commandCourses = coursesData
  .filter(c => c.published)
  .map(course => ({
    slug: course.slug,
    title: course.title,
    description: course.description,
    lessons: course.lessons.map(lesson => ({
      id: lesson.id,
      title: lesson.title,
    })),
  }));
import "./globals.css";

// Polices Google optimisées
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
});

// Polices locales (Geist pour le code)
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
});

// Viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#10b981" },
    { media: "(prefers-color-scheme: dark)", color: "#059669" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Metadata avec OpenGraph complet
export const metadata: Metadata = {
  metadataBase: new URL("https://www.tahalearn.com"),
  title: {
    default: "TahaLearn - وَقُل رَّبِّ زِدْنِي عِلْمًا | Plateforme d'Apprentissage des Sciences Islamiques Gratuite",
    template: "%s | TahaLearn",
  },
  description: "Apprenez les sciences islamiques gratuitement : Tajweed, Fiqh, Aqeedah, Seerah et Histoire. Cours en FR/AR/EN avec preuves du Coran et de la Sunna.",
  keywords: [
    "Islam", "Quran", "Coran", "Tajweed", "Fiqh", "Aqeedah", "Hadith", "Seerah", 
    "Sciences islamiques", "Apprentissage Islam", "Cours gratuits", "TahaLearn", 
    "Prière", "Salat", "Zakat", "Jeûne", "Ramadan", "Pèlerinage", "Hajj",
    "Histoire islamique", "Compagnons", "Sahaba", "Prophète Muhammad",
    "Éducation islamique", "Étude Islam", "Religion musulmane"
  ],
  authors: [{ name: "TahaLearn", url: "https://www.tahalearn.com" }],
  creator: "TahaLearn",
  publisher: "TahaLearn",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.tahalearn.com",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["ar_SA", "en_US"],
    url: "https://www.tahalearn.com",
    siteName: "TahaLearn",
    title: "TahaLearn - Plateforme d'Apprentissage des Sciences Islamiques Gratuite",
    description: "Apprenez les sciences islamiques gratuitement : Tajweed, Fiqh, Aqeedah, Seerah et Histoire. Cours en français, arabe et anglais avec preuves authentiques du Coran et de la Sunna.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TahaLearn - Plateforme d'apprentissage islamique gratuite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TahaLearn - Sciences Islamiques Gratuites",
    description: "Apprenez les sciences islamiques gratuitement avec cours en FR/AR/EN",
    images: ["/og-image.png"],
    creator: "@tahalearn",
    site: "@tahalearn",
  },
  verification: {
    google: "qGxX55exC0cDNkEVe9uKGnUtrFVguLWpU80if3Pu3k0",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.svg",
        color: "#10b981", // Votre couleur primaire (emerald-600)
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TahaLearn" />
      </head>
      <body
        className={`${inter.variable} ${amiri.variable} ${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Providers>
          <Header commandCourses={commandCourses} />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
