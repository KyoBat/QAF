import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Inter, Amiri } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/providers";
import { Header, Footer } from "@/components/layout";
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
  metadataBase: new URL("https://rabbi-zidni-ilma.vercel.app"),
  title: {
    default: "Rabbi Zidni Ilma - وَقُل رَّبِّ زِدْنِي عِلْمًا",
    template: "%s | Rabbi Zidni Ilma",
  },
  description: "Plateforme d'apprentissage des sciences islamiques : Tajweed, Fiqh, Aqeedah, Hadith, Seerah. Cours gratuits en français, arabe et anglais.",
  keywords: ["Islam", "Quran", "Coran", "Tajweed", "Fiqh", "Aqeedah", "Hadith", "Seerah", "Arabic", "Sciences islamiques", "Apprentissage", "Zad Academy"],
  authors: [{ name: "Zad Academy", url: "https://zadacademy.com" }],
  creator: "Zad Academy",
  publisher: "Zad Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["ar_SA", "en_US"],
    url: "https://rabbi-zidni-ilma.vercel.app",
    siteName: "Rabbi Zidni Ilma",
    title: "Rabbi Zidni Ilma - Sciences Islamiques",
    description: "Apprenez les sciences islamiques : Tajweed, Fiqh, Aqeedah, Hadith et Seerah. Cours gratuits multilingues.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rabbi Zidni Ilma - Plateforme d'apprentissage islamique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabbi Zidni Ilma - Sciences Islamiques",
    description: "Apprenez les sciences islamiques gratuitement",
    images: ["/og-image.png"],
    creator: "@zadacademy",
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
      { url: "/icons/icon-192x192.svg", sizes: "192x192", type: "image/svg+xml" },
    ],
    apple: "/icons/icon-192x192.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${amiri.variable} ${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Providers>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
