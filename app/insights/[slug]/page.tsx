import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { insights, getInsight } from "@/src/content/insights";
import { Breadcrumbs } from "@/src/components/ui/breadcrumbs";
import { EditorialBadge } from "@/src/components/ui/editorial-badge";
import { LastUpdated } from "@/src/components/ui/last-updated";
import { SourceList } from "@/src/components/ui/source-list";
import { HealthDisclaimerNotice } from "@/src/components/legal/health-disclaimer-notice";
import { createMetadata } from "@/src/lib/metadata";
import { breadcrumbJsonLd } from "@/src/lib/structured-data";
import { company } from "@/src/config/company";

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return createMetadata(
    insight.title,
    insight.summary,
    `/insights/${insight.slug}`,
  );
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const related = insights
    .filter((item) => item.slug !== insight.slug)
    .slice(0, 3);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: insight.title, path: `/insights/${insight.slug}` },
  ]);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.summary,
    datePublished: insight.published,
    dateModified: insight.updated,
    author: { "@type": "Organization", name: "VOLKOV Editorial Team" },
    publisher: { "@type": "Organization", name: company.legalName },
    mainEntityOfPage: new URL(
      `/insights/${insight.slug}`,
      company.siteUrl,
    ).toString(),
  };

  return (
    <main id="main-content" className="article-page">
      <article>
        <header className="article-hero">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: insight.title },
            ]}
          />
          <p className="eyebrow">{insight.category}</p>
          <h1>{insight.title}</h1>
          <p className="article-summary">{insight.summary}</p>
          <div className="article-byline">
            <EditorialBadge />
            <span>{insight.readingTime}</span>
            <LastUpdated date={insight.updated} />
          </div>
        </header>
        <div className="article-body">
          <aside className="article-rail">
            <span>ON THIS PAGE</span>
            <ol>
              {insight.sections.map((section) => (
                <li key={section.heading}>
                  <a href={`#${slugify(section.heading)}`}>{section.heading}</a>
                </li>
              ))}
            </ol>
          </aside>
          <div className="article-prose">
            {insight.sections.map((section) => (
              <section id={slugify(section.heading)} key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
            <SourceList sources={insight.sources} />
            <HealthDisclaimerNotice />
          </div>
        </div>
      </article>
      <section className="related-article-links">
        <header>
          <p className="eyebrow">CONTINUE READING</p>
          <h2>Related insights</h2>
        </header>
        <div>
          {related.map((item) => (
            <Link key={item.slug} href={`/insights/${item.slug}`}>
              <span>{item.category}</span>
              <strong>{item.title}</strong>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </div>
        <Link href="/insights" className="text-link">
          <ArrowLeft aria-hidden="true" /> Back to all Insights
        </Link>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumb, articleJsonLd]).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
    </main>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
