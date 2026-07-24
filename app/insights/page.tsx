import { Breadcrumbs } from "@/src/components/ui/breadcrumbs";
import { InsightCard } from "@/src/components/ui/insight-card";
import { insights } from "@/src/content/insights";
import { createMetadata } from "@/src/lib/metadata";

export const metadata = createMetadata(
  "Insights",
  "Educational wellness insights from the VOLKOV Editorial Team.",
  "/insights",
);

export default function InsightsPage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero-light">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />
        <p className="eyebrow">VOLKOV INSIGHTS</p>
        <h1>READ PAST THE HEADLINE.</h1>
        <p>
          Clear, educational frameworks for evaluating wellness information
          without pressure, diagnosis or exaggerated promises.
        </p>
      </section>
      <section className="section-shell insights-index">
        <div className="insights-grid">
          {insights.map((insight, index) => (
            <InsightCard key={insight.slug} insight={insight} priority={index < 2} />
          ))}
        </div>
      </section>
    </main>
  );
}
