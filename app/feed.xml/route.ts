import { insights } from "@/src/content/insights";
import { company } from "@/src/config/company";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = insights
    .map(
      (insight) => `
        <item>
          <title>${escapeXml(insight.title)}</title>
          <link>${company.siteUrl}/insights/${insight.slug}</link>
          <guid>${company.siteUrl}/insights/${insight.slug}</guid>
          <pubDate>${new Date(insight.published).toUTCString()}</pubDate>
          <description>${escapeXml(insight.summary)}</description>
        </item>`,
    )
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>VOLKOV Insights</title>
        <link>${company.siteUrl}/insights</link>
        <description>Independent wellness research and transparent consumer information.</description>
        <language>en-us</language>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
