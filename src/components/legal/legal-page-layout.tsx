import type { ReactNode } from "react";
import { Breadcrumbs } from "@/src/components/ui/breadcrumbs";
import { LastUpdated } from "@/src/components/ui/last-updated";

export function LegalPageLayout({
  title,
  intro,
  updated = "2026-07-24",
  children,
}: {
  title: string;
  intro: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <main id="main-content" className="legal-page">
      <div className="legal-hero">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />
        <p className="eyebrow">LEGAL &amp; TRANSPARENCY</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <LastUpdated date={updated} />
      </div>
      <article className="legal-content">{children}</article>
    </main>
  );
}
