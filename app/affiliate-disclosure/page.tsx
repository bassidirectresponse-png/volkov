import { LegalPageLayout } from "@/src/components/legal/legal-page-layout";
import { company } from "@/src/config/company";
import { createMetadata } from "@/src/lib/metadata";

export const metadata = createMetadata(
  "Affiliate Disclosure",
  "How VOLKOV discloses and manages affiliate relationships.",
  "/affiliate-disclosure",
);

export default function AffiliateDisclosurePage() {
  return (
    <LegalPageLayout
      title="Affiliate Disclosure"
      intro="Transparency about compensation is part of the information—not a footnote to it."
    >
      <h2>How affiliate relationships work</h2>
      <p>
        {company.legalName} participates in affiliate marketing programs. This
        means that we may receive a commission when a reader clicks certain
        links and completes a qualifying purchase.
      </p>
      <p>
        The consumer does not normally pay an additional amount because of this
        commission. Affiliate compensation helps support our publishing
        activities, but it does not replace the need for independent research
        or professional healthcare guidance.
      </p>
      <h2>What a commercial relationship does not mean</h2>
      <p>
        Affiliate relationships do not mean that VOLKOV manufactures, owns,
        endorses without qualification or guarantees the products offered by
        third-party merchants. Unless expressly stated with reliable evidence,
        they also do not mean that VOLKOV officially represents a merchant,
        manufacturer or affiliate network.
      </p>
      <h2>Where disclosures appear</h2>
      <p>
        When affiliate links are present, a concise disclosure is placed near
        the beginning of the page and close to the first relevant action. It may
        also appear before comparisons, rankings or sponsored reviews. The
        disclosure is not confined to the footer.
      </p>
      <h2>Independent merchants</h2>
      <p>
        Purchases take place on third-party websites. Pricing, availability,
        payment processing, shipping, refunds, subscriptions and product
        support are managed by the merchant identified at the point of purchase.
        Review that merchant&apos;s terms and policies before ordering.
      </p>
      <h2>Questions</h2>
      <p>
        Questions about a disclosure can be sent to{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    </LegalPageLayout>
  );
}
