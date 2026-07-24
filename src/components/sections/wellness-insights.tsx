import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { insights } from "@/src/content/insights";
import { InsightCard } from "@/src/components/ui/insight-card";
import { SectionHeading } from "@/src/components/ui/section-heading";

export function WellnessInsights() {
  return (
    <section className="insights-section">
      <div className="section-shell">
        <SectionHeading
          eyebrow="THE EDITORIAL DESK"
          title="WELLNESS INSIGHTS"
          body="Practical frameworks for reading labels, questioning claims and making more informed decisions."
        />
        <div className="insights-grid">
          {insights.map((insight, index) => (
            <InsightCard key={insight.slug} insight={insight} priority={index < 2} />
          ))}
        </div>
        <Link href="/insights" className="text-link section-link">
          Browse every insight <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
