import Image from "next/image";
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
        <Image
          src={insight.image}
          alt={insight.imageAlt}
          fill
          sizes="(max-width: 720px) 100vw, 50vw"
          priority={priority}
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
