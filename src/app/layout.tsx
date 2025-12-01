import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "@/components/providers";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rabbi Zidni Ilma - وَقُل رَّبِّ زِدْنِي عِلْمًا",
  description: "Plateforme d'apprentissage des sciences islamiques - Islamic Sciences Learning Platform",
  keywords: ["Islam", "Quran", "Tajweed", "Fiqh", "Aqeedah", "Hadith", "Seerah", "Arabic"],
  authors: [{ name: "Zad Academy" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
