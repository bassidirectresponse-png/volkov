import { LegalPageLayout } from "@/src/components/legal/legal-page-layout";
import { company, companyAddress } from "@/src/config/company";
import { createMetadata } from "@/src/lib/metadata";

export const metadata = createMetadata(
  "Privacy Policy",
  "How VOLKOV LTDA collects, uses, protects and retains personal data.",
  "/privacy-policy",
);

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      intro="This policy explains what data VOLKOV may receive, why it is used and which choices are available to you."
    >
      <h2>Controller</h2>
      <p>
        The controller responsible for this website is {company.legalName},
        CNPJ {company.taxId}, at the following address:
      </p>
      <address>
        {companyAddress.enUS.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </address>
      <p>
        Privacy inquiries can be sent to{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
      <h2>Data we may receive</h2>
      <p>
        We may receive information you submit through the contact form,
        including your name, email address, optional company, subject, message
        and consent. If the newsletter is enabled, we may process the email
        address, consent record and subscription status required to provide and
        manage it. Please do not submit health records or other sensitive data.
      </p>
      <p>
        Our hosting, security and delivery providers may process technical
        information such as IP address, browser type, device information,
        request time, referring page and security events. Necessary storage may
        remember privacy choices. Optional analytics or affiliate measurement
        is disabled until the relevant consent is given.
      </p>
      <h2>Purposes and legal bases</h2>
      <ul>
        <li>Respond to inquiries and correction requests.</li>
        <li>Operate, secure, diagnose and improve the website.</li>
        <li>Provide a requested newsletter and manage opt-in or unsubscribe.</li>
        <li>Measure aggregate usage or affiliate referrals after consent.</li>
        <li>Meet legal obligations and protect legitimate rights.</li>
      </ul>
      <p>
        Depending on the context, processing may rely on consent, steps
        requested before a contract, compliance with law or legitimate
        interests balanced against your rights. Consent can be withdrawn for
        future processing without affecting prior lawful processing.
      </p>
      <h2>Service providers, merchants and transfers</h2>
      <p>
        Hosting, email, security, analytics and affiliate technology providers
        may receive limited data needed to perform their services. Clicking an
        external link transfers you to an independent website governed by its
        own privacy policy. Providers may operate in other countries; where
        applicable, transfers should use appropriate contractual, legal and
        technical safeguards.
      </p>
      <h2>Retention and security</h2>
      <p>
        We retain information only for as long as reasonably necessary for the
        purpose collected, legal obligations, dispute resolution and security.
        We use proportionate organizational and technical safeguards, but no
        internet transmission or storage system can be guaranteed completely
        secure.
      </p>
      <h2>Your rights</h2>
      <p>
        Subject to applicable law—including Brazil&apos;s LGPD and, where
        relevant, the GDPR or U.S. state privacy laws—you may request
        confirmation, access, correction, deletion, portability, information
        about sharing, review of certain decisions, restriction, objection or
        withdrawal of consent. We may need to verify the request and may retain
        information when legally required.
      </p>
      <h2>Children</h2>
      <p>
        This website is intended for adults and is not directed to children. We
        do not knowingly seek personal information from children through
        editorial content or subscription forms.
      </p>
      <h2>Changes</h2>
      <p>
        We may update this policy as services, providers or legal requirements
        change. The updated date at the top identifies the current version.
      </p>
    </LegalPageLayout>
  );
}
