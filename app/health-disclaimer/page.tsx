import { LegalPageLayout } from "@/src/components/legal/legal-page-layout";
import { company } from "@/src/config/company";
import { createMetadata } from "@/src/lib/metadata";

export const metadata = createMetadata(
  "Health Disclaimer",
  "Important limitations on health and wellness information published by VOLKOV.",
  "/health-disclaimer",
);

export default function HealthDisclaimerPage() {
  return (
    <LegalPageLayout
      title="Health Disclaimer"
      intro="General information can support better questions, but it cannot replace individual care."
    >
      <h2>Educational information only</h2>
      <p>
        The information published by VOLKOV is provided for general educational
        and informational purposes only. It is not medical advice and is not
        intended to replace consultation, diagnosis or treatment by a qualified
        healthcare professional.
      </p>
      <p>
        Always speak with an appropriate healthcare professional before starting
        a supplement, changing your diet, changing medication or making
        decisions that may affect your health.
      </p>
      <h2>Individual circumstances</h2>
      <p>
        Individual experiences vary. VOLKOV does not guarantee that any product,
        ingredient or wellness practice will produce a specific result.
        Professional guidance is especially important when medications,
        pregnancy, breastfeeding, preexisting conditions, allergies, planned
        surgery or previous adverse reactions are involved.
      </p>
      <h2>Interactions and adverse events</h2>
      <p>
        Supplements and dietary ingredients may interact with medicines, other
        supplements, laboratory tests or procedures. Stop using a product and
        seek appropriate help if you develop a concerning reaction. If you
        believe you are experiencing a medical emergency, contact your local
        emergency services immediately.
      </p>
      <h2>Changing information</h2>
      <p>
        Formulas, labels, warnings, regulations and scientific understanding can
        change. Verify the current physical label and merchant information
        before use or purchase. Publication on this site does not establish that
        a product is safe, effective or appropriate for you.
      </p>
      <h2>Contact</h2>
      <p>
        For questions about this disclaimer, email{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>. VOLKOV cannot
        provide personal medical advice through email or the contact form.
      </p>
    </LegalPageLayout>
  );
}
