import { LegalPageLayout } from "@/src/components/legal/legal-page-layout";
import { company } from "@/src/config/company";
import { createMetadata } from "@/src/lib/metadata";

export const metadata = createMetadata(
  "Editorial Policy",
  "VOLKOV's editorial methodology, independence, sourcing and use of technology.",
  "/editorial-policy",
);

export default function EditorialPolicyPage() {
  return (
    <LegalPageLayout
      title="Editorial Policy"
      intro="Our editorial process is designed to keep evidence, limitations and commercial relationships visible."
    >
      <h2>Editorial and commercial separation</h2>
      <p>
        Editorial conclusions should not be changed to satisfy a merchant,
        advertiser or affiliate program. Compensation may influence which
        commercially available topics are considered, but it must not justify a
        false claim, conceal a limitation or determine a ranking by itself.
      </p>
      <h2>Sponsored and affiliate content</h2>
      <p>
        Sponsored content must be identified. Affiliate relationships are
        disclosed near relevant links and decisions. Disclosure does not convert
        a claim into evidence and does not imply ownership or official
        representation of a third party.
      </p>
      <h2>Methodology and sources</h2>
      <p>
        We begin with the consumer question, review available labels and product
        information, identify objective claims, seek relevant primary or
        authoritative context, and write conclusions at the strength supported.
        Sources should be traceable, current enough for the subject and fairly
        represented.
      </p>
      <h2>Authorship, conflicts and review</h2>
      <p>
        Articles may be attributed to the VOLKOV Editorial Team without implying
        medical credentials. We do not use false medical authorship or invented
        testimonials. Relevant conflicts and commercial relationships should be
        made visible, and published work is reviewed by a human editor.
      </p>
      <h2>Use of artificial intelligence</h2>
      <p>
        Artificial intelligence tools may assist with research organization,
        drafting or editing, but published content must undergo human review
        before publication. AI output is not treated as a source and does not
        replace source verification, editorial judgment or accountability.
      </p>
      <h2>Updates and corrections</h2>
      <p>
        We update content when material facts, labels, sources or context change.
        The updated date identifies the most recent editorial revision.
        Correction requests can be sent to{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    </LegalPageLayout>
  );
}
