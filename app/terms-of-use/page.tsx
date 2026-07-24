import { LegalPageLayout } from "@/src/components/legal/legal-page-layout";
import { company } from "@/src/config/company";
import { createMetadata } from "@/src/lib/metadata";

export const metadata = createMetadata(
  "Terms of Use",
  "Terms governing access to and use of the VOLKOV website.",
  "/terms-of-use",
);

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Use"
      intro="These terms define the informational purpose and practical limits of this website."
    >
      <h2>Acceptance and audience</h2>
      <p>
        By using this website, you agree to these terms and applicable law. The
        website is intended for adults. If you do not agree, do not continue to
        use it.
      </p>
      <h2>Informational purpose</h2>
      <p>
        VOLKOV publishes general educational information. Content is not medical
        advice, diagnosis or treatment and does not create a professional,
        fiduciary or healthcare relationship. Information may become outdated
        and should be checked against current labels, sources and professional
        guidance.
      </p>
      <h2>Permitted use and intellectual property</h2>
      <p>
        You may access the website for lawful personal or business evaluation.
        You may not interfere with operation, attempt unauthorized access,
        misrepresent our content, remove notices or reproduce substantial
        portions for commercial use without permission. Original site content,
        design and presentation are protected by applicable intellectual
        property law.
      </p>
      <h2>External links, affiliates and purchases</h2>
      <p>
        Some links lead to independent third parties and may be affiliate links.
        A commission may be earned from a qualifying purchase. Purchases are
        completed on third-party sites: the merchant manages pricing, billing,
        delivery, refunds, subscriptions, product support and its own terms.
        VOLKOV is not the merchant or manufacturer unless a page explicitly and
        accurately states otherwise.
      </p>
      <h2>Third-party information and no warranties</h2>
      <p>
        Product details may originate with a manufacturer or merchant and can
        change. Although we aim for clarity and reasonable accuracy, the website
        is provided on an as-available basis without guarantees of completeness,
        uninterrupted availability, fitness for a particular purpose or a
        specific outcome.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, VOLKOV is not liable for
        indirect or consequential loss arising from reliance on general
        information, third-party sites or independent transactions. Nothing in
        these terms excludes liability that cannot lawfully be excluded or
        limits non-waivable consumer rights.
      </p>
      <h2>Changes, availability and governing law</h2>
      <p>
        We may modify, suspend or update the website and these terms. The current
        version is identified by its updated date. These terms are governed by
        Brazilian law, subject to mandatory consumer and jurisdictional rights
        that apply to a particular user.
      </p>
      <h2>Contact</h2>
      <p>
        Questions may be sent to{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    </LegalPageLayout>
  );
}
