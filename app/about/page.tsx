import {
  Building2,
  CircleOff,
  FileCheck2,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import { company, companyAddress } from "@/src/config/company";
import { Breadcrumbs } from "@/src/components/ui/breadcrumbs";
import { createMetadata } from "@/src/lib/metadata";

export const metadata = createMetadata(
  "About",
  "Learn how VOLKOV LTDA approaches responsible paid media operations and conversion strategy.",
  "/about",
);

const process = [
  "Review the business, offer and market context",
  "Confirm the destination, measurement and campaign boundaries",
  "Design an accountable testing plan",
  "Operate campaigns with documented changes",
  "Use performance feedback to improve the system",
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero-sage">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
        <p className="eyebrow">ABOUT VOLKOV</p>
        <h1>DISCIPLINED BY DESIGN. CLEAR IN PRACTICE.</h1>
        <p>
          VOLKOV LTDA is an independent Brazilian company serving international
          clients with paid media operations and conversion strategy.
        </p>
      </section>
      <section className="statement-section">
        <span>Our purpose</span>
        <h2>Our goal is to help legitimate businesses make clearer, more accountable growth decisions.</h2>
      </section>
      <section className="process-section">
        <header>
          <p className="eyebrow">HOW WE WORK</p>
          <h2>A repeatable operating process.</h2>
        </header>
        <ol>
          {process.map((step, index) => (
            <li key={step}>
              <span>0{index + 1}</span>
              <strong>{step}</strong>
              {index === 0 ? <BarChart3 aria-hidden="true" /> : null}
              {index === 2 ? <ShieldCheck aria-hidden="true" /> : null}
              {index === 4 ? <FileCheck2 aria-hidden="true" /> : null}
            </li>
          ))}
        </ol>
      </section>
      <section className="split-section split-section-dark">
        <div>
          <p className="eyebrow">OPERATING BOUNDARIES</p>
          <h2>Transparency should never be optional.</h2>
        </div>
        <p>
          We work from a defined scope and communicate what the engagement does
          and does not include. Advertising platforms independently review
          accounts, campaigns, creatives and destinations under their own rules.
        </p>
      </section>
      <section className="not-list">
        <header>
          <CircleOff aria-hidden="true" />
          <p className="eyebrow">WHAT WE ARE NOT</p>
          <h2>Boundaries are part of trust.</h2>
        </header>
        <ul>
          <li>We do not guarantee account approval or advertising outcomes.</li>
          <li>We do not use deceptive claims or hidden data practices.</li>
          <li>We do not represent advertising platforms.</li>
          <li>We do not provide legal, tax or financial advice.</li>
          <li>We do not work with unauthorized brands or misleading offers.</li>
        </ul>
      </section>
      <section className="company-record">
        <div>
          <Building2 aria-hidden="true" />
          <p className="eyebrow">COMPANY RECORD</p>
          <h2>{company.legalName}</h2>
          <p>CNPJ {company.taxId}</p>
        </div>
        <address>
          {companyAddress.enUS.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </address>
        <div>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href={company.phone.href}>{company.phone.international}</a>
        </div>
      </section>
    </main>
  );
}
