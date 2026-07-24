import { ExternalLink } from "lucide-react";

export function SourceList({
  sources,
}: {
  sources: Array<{ title: string; url: string }>;
}) {
  return (
    <section className="source-list" aria-labelledby="sources-title">
      <h2 id="sources-title">Sources and further reading</h2>
      <ol>
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {source.title}
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
