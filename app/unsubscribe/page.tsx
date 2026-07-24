import { company } from "@/src/config/company";
import { createMetadata } from "@/src/lib/metadata";

export const metadata = createMetadata(
  "Unsubscribe",
  "Manage email preferences for VOLKOV.",
  "/unsubscribe",
);

export default function UnsubscribePage() {
  return (
    <main id="main-content" className="simple-message-page">
      <p className="eyebrow">EMAIL PREFERENCES</p>
      <h1>Newsletter delivery is not active.</h1>
      <p>
        VOLKOV is not currently sending a newsletter. If you received an email
        that appears to come from us and need help, contact{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    </main>
  );
}
