import Link from "next/link";
import type { Insight } from "@/src/content/insights";

export function InsightCard({
  insight,
  priority = false,
}: {
  insight: Insight;
  priority?: boolean;
}) {
  return (
    <article className="insight-card">
      <Link href={`/insights/${insight.slug}`} className="insight-image">
        {/* Serve the local editorial asset directly because the Sites image
            optimizer is not available consistently in every worker request. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={insight.image}
          alt={insight.imageAlt}
          width="500"
          height="500"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
        />
        <span className="read-badge">READ</span>
      </Link>
      <div className="insight-meta">
        <span>{insight.category}</span>
        <span>{insight.readingTime}</span>
      </div>
      <h3>
        <Link href={`/insights/${insight.slug}`}>{insight.title}</Link>
      </h3>
      <p>{insight.summary}</p>
      <time dateTime={insight.updated}>
        Updated{" "}
        {new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC",
        }).format(new Date(`${insight.updated}T00:00:00Z`))}
      </time>
    </article>
  );
}
