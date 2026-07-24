import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { AffiliateDisclosure } from "@/src/components/legal/affiliate-disclosure";
import { ExternalPurchaseNotice } from "@/src/components/legal/external-purchase-notice";
import { insights, getInsight } from "@/src/content/insights";

test("affiliate and external purchase notices are explicit", () => {
  const disclosure = renderToStaticMarkup(<AffiliateDisclosure />);
  const purchase = renderToStaticMarkup(<ExternalPurchaseNotice />);
  assert.match(disclosure, /may earn a commission/i);
  assert.match(disclosure, /no additional cost/i);
  assert.match(purchase, /independent third-party website/i);
  assert.match(purchase, /billing, shipping, refunds/i);
});

test("all six editorial slugs resolve and include sources", () => {
  assert.equal(insights.length, 6);
  for (const insight of insights) {
    assert.equal(getInsight(insight.slug)?.title, insight.title);
    assert.ok(insight.sections.length >= 5);
    assert.ok(insight.sources.length >= 2);
  }
  assert.equal(getInsight("missing"), undefined);
});

test("cookie consent has balanced choices and reduced motion has a fallback", async () => {
  const [cookies, styles, exploded] = await Promise.all([
    readFile(
      new URL(
        "../src/components/cookies/cookie-consent.tsx",
        import.meta.url,
      ),
      "utf8",
    ),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(
      new URL(
        "../src/components/sections/exploded-view-assembly.tsx",
        import.meta.url,
      ),
      "utf8",
    ),
  ]);
  assert.match(cookies, /Accept all/);
  assert.match(cookies, /Reject non-essential/);
  assert.match(cookies, /Customize/);
  assert.match(styles, /prefers-reduced-motion:\s*reduce/);
  assert.match(exploded, /useReducedMotion/);
  assert.match(exploded, /StaticAssembly/);
});
