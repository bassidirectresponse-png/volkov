import { LegalPageLayout } from "@/src/components/legal/legal-page-layout";
import { company } from "@/src/config/company";
import { createMetadata } from "@/src/lib/metadata";

export const metadata = createMetadata(
  "Corrections Policy",
  "How to request a correction and how VOLKOV evaluates and records material updates.",
  "/corrections-policy",
);

export default function CorrectionsPolicyPage() {
  return (
    <LegalPageLayout
      title="Corrections Policy"
      intro="Clear publishing includes a clear path for challenging and correcting the record."
    >
      <h2>Submitting a correction</h2>
      <p>
        Send the article URL, the statement you believe is inaccurate, a concise
        explanation and any reliable supporting source to{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>. Please do not
        send sensitive health records or unnecessary personal data.
      </p>
      <h2>How requests are assessed</h2>
      <p>
        The editorial team reviews the published wording, cited material,
        significance of the issue and any newer authoritative information. A
        disagreement in opinion is not automatically a factual error, but
        unclear qualification or missing context may still warrant an update.
      </p>
      <h2>Material errors</h2>
      <p>
        If a material factual error is confirmed, we correct it as promptly as
        reasonably possible. The updated date is changed, and a note may be
        added when understanding the nature of the correction is important to
        readers.
      </p>
      <h2>Minor changes</h2>
      <p>
        Typographical, formatting and clarity improvements that do not change
        meaning may be made without a separate correction note. Substantive
        changes to conclusions, warnings, disclosures or attributed facts are
        treated more visibly.
      </p>
      <h2>No fee or retaliation</h2>
      <p>
        VOLKOV does not charge to review a good-faith correction request.
        Commercial status does not determine whether a supported correction is
        accepted.
      </p>
    </LegalPageLayout>
  );
}
