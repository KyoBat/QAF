import type { Metadata, Viewport } from "next";
import "./globals.css";

const SHARE_IMAGE_URL = "https://www.tahalearn.com/og-image.png";

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
    // Français
    "Islam", "Quran", "Coran", "Tajweed", "Fiqh", "Aqeedah", "Hadith", "Seerah", 
    "Sciences islamiques", "Apprentissage Islam", "Cours gratuits", "TahaLearn", 
    "Prière", "Salat", "Zakat", "Jeûne", "Ramadan", "Pèlerinage", "Hajj",
    "Histoire islamique", "Compagnons", "Sahaba", "Prophète Muhammad",
    "Éducation islamique", "Étude Islam", "Religion musulmane",
    // English
    "Islamic studies", "Learn Islam free", "Quran learning", "Islamic courses online",
    "Tajweed course", "Fiqh course", "Islamic history", "Prophet Muhammad biography",
    "Free Islamic education", "Hadith studies", "Aqeedah course",
    // العربية
    "تعلم الإسلام", "علوم شرعية", "دروس إسلامية مجانية", "تجويد القرآن",
    "فقه العبادات", "عقيدة", "سيرة نبوية", "أحاديث صحيحة",
    "تاريخ إسلامي", "طه للتعلم",
  ],
  authors: [{ name: "TahaLearn", url: "https://www.tahalearn.com" }],
  creator: "TahaLearn",
  publisher: "TahaLearn",
  applicationName: "TahaLearn",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.tahalearn.com",
    languages: {
      "fr-FR": "https://www.tahalearn.com",
      "ar-SA": "https://www.tahalearn.com",
      "en-US": "https://www.tahalearn.com",
      "x-default": "https://www.tahalearn.com",
    },
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
        url: SHARE_IMAGE_URL,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "TahaLearn - Plateforme d'apprentissage islamique gratuite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TahaLearn - Sciences Islamiques Gratuites",
    description: "Apprenez les sciences islamiques gratuitement avec cours en FR/AR/EN",
    images: [SHARE_IMAGE_URL],
    creator: "@tahalearn",
    site: "@tahalearn",
  },
  verification: {
    google: "qGxX55exC0cDNkEVe9uKGnUtrFVguLWpU80if3Pu3k0",
    // Bing: https://www.bing.com/webmasters → Ajouter ta propriété → copier le code
    // yandex: "YANDEX_VERIFICATION_CODE",
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

// Le layout racine est au-dessus du segment [lang] : il ne connaît pas la
// locale. Le <html lang/dir> est donc rendu par les layouts enfants via
// <DocumentShell> ([lang]/layout, sitemap-html/layout), ce qui garde la
// génération statique par locale. Ici on se contente de transmettre les
// enfants ; les exports metadata/viewport restent appliqués à tout l'arbre.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
