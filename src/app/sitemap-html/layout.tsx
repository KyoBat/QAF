import { DocumentShell } from "@/components/DocumentShell";

// Page sitemap HTML francophone : le layout racine ne rend plus <html>,
// donc cette route fournit sa propre coque (lang="fr").
export default function SitemapHtmlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DocumentShell lang="fr" dir="ltr">
      {children}
    </DocumentShell>
  );
}
