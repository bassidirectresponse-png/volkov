import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { wellnessTopics } from "@/src/content/wellness";
import { insights } from "@/src/content/insights";
import { Breadcrumbs } from "@/src/components/ui/breadcrumbs";
import { InsightCard } from "@/src/components/ui/insight-card";
import { createMetadata } from "@/src/lib/metadata";

export const metadata = createMetadata(
  "Wellness Topics",
  "Explore responsible wellness education about supplement labels, ingredients, healthy habits and consumer protection.",
  "/wellness",
);

export default function WellnessPage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero-blue">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Wellness Topics" }]}
        />
        <p className="eyebrow">WELLNESS TOPICS</p>
        <h1>BETTER CONTEXT FOR EVERYDAY DECISIONS.</h1>
        <p>
          Responsible wellness starts with understandable information,
          reasonable expectations and the confidence to ask better questions.
        </p>
      </section>
      <section className="topic-grid section-shell">
        {wellnessTopics.map((topic, index) => (
          <article key={topic.title}>
            <div>
              <span>0{index + 1}</span>
              <topic.icon aria-hidden="true" />
            </div>
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
            <Link href="/insights">
              Explore related insights <ArrowUpRight aria-hidden="true" />
            </Link>
          </article>
        ))}
      </section>
      <section className="section-shell related-insights">
        <header>
          <p className="eyebrow">START HERE</p>
          <h2>Foundational reading</h2>
        </header>
        <div className="insights-grid insights-grid-compact">
          {insights.slice(0, 3).map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
      </section>
    </main>
  );
}
