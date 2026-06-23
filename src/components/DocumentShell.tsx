import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo";
import { fontVariables } from "@/app/fonts";

/**
 * Coque HTML du document (server component).
 *
 * En App Router, seule une coque par requête peut rendre <html>/<body>.
 * Le layout racine étant au-dessus du segment [lang], il ne connaît pas la
 * locale ; on rend donc <html lang/dir> depuis les layouts qui la connaissent
 * statiquement ([lang]/layout et sitemap-html/layout), ce qui préserve la
 * génération statique (pas d'API dynamique comme headers()).
 */
export function DocumentShell({
  lang,
  dir,
  children,
}: {
  lang: string;
  dir: "ltr" | "rtl";
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TahaLearn" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        <meta name="content-language" content="fr, ar, en" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${fontVariables} antialiased min-h-screen flex flex-col font-sans`}
        suppressHydrationWarning
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator && !/bot|crawl|spider|slurp|googlebot|bingbot|yandex/i.test(navigator.userAgent)) {
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
