import localFont from "next/font/local";
import { Inter, Amiri } from "next/font/google";

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

/** Variables CSS de toutes les polices, à appliquer sur <body>. */
export const fontVariables = `${inter.variable} ${amiri.variable} ${geistSans.variable} ${geistMono.variable}`;
