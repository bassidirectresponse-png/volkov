import {
  Building2,
  CircleOff,
  FileCheck2,
  Search,
  ShieldCheck,
} from "lucide-react";
import { company, companyAddress } from "@/src/config/company";
import { Breadcrumbs } from "@/src/components/ui/breadcrumbs";
import { createMetadata } from "@/src/lib/metadata";

export const metadata = createMetadata(
  "About",
  "Learn how VOLKOV LTDA approaches digital publishing, performance marketing and responsible consumer education.",
  "/about",
);

const process = [
  "Research the topic",
  "Review available product information",
  "Identify important limitations and disclosures",
  "Write in clear consumer-friendly language",
  "Review and update content when necessary",
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero-sage">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
        <p className="eyebrow">ABOUT VOLKOV</p>
        <h1>INDEPENDENT BY STRUCTURE. CLEAR BY PRACTICE.</h1>
        <p>
          VOLKOV LTDA is an independent Brazilian company operating in digital
          publishing, performance marketing and consumer education.
        </p>
      </section>
      <section className="statement-section">
        <span>Our purpose</span>
        <h2>
          Our goal is to create clear, accessible content that helps adults make
          more informed decisions in the health and wellness market.
        </h2>
      </section>
      <section className="process-section">
        <header>
          <p className="eyebrow">HOW WE WORK</p>
          <h2>A repeatable editorial process.</h2>
        </header>
        <ol>
          {process.map((step, index) => (
            <li key={step}>
              <span>0{index + 1}</span>
              <strong>{step}</strong>
              {index === 0 ? <Search aria-hidden="true" /> : null}
              {index === 2 ? <ShieldCheck aria-hidden="true" /> : null}
              {index === 4 ? <FileCheck2 aria-hidden="true" /> : null}
            </li>
          ))}
        </ol>
      </section>
      <section className="split-section split-section-dark">
        <div>
          <p className="eyebrow">COMMERCIAL RELATIONSHIPS</p>
          <h2>Compensation should never be hidden.</h2>
        </div>
        <p>
          VOLKOV may receive commissions from third-party merchants when
          readers use selected links. Compensation does not change the price
          paid by the consumer. Commercial relationships are disclosed clearly
          wherever affiliate links are present.
        </p>
      </section>
      <section className="not-list">
        <header>
          <CircleOff aria-hidden="true" />
          <p className="eyebrow">WHAT WE ARE NOT</p>
          <h2>Boundaries are part of trust.</h2>
        </header>
        <ul>
          <li>We are not a medical clinic.</li>
          <li>We do not diagnose or treat health conditions.</li>
          <li>We do not manufacture the products mentioned.</li>
          <li>We do not guarantee individual results.</li>
          <li>We are not owned by merchants or affiliate networks.</li>
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
