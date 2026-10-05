import Link from "next/link";
import { ArrowRight, BarChart3, Check, CircleGauge, FileCheck2, Globe2, ShieldCheck } from "lucide-react";
import { company, companyAddress } from "@/src/config/company";
import { createMetadata } from "@/src/lib/metadata";

export const metadata = createMetadata(
  "About",
  "Learn how VOLKOV LTDA approaches responsible paid media operations and conversion strategy.",
  "/about",
);

const operatingSteps = [
  ["01", "Business context", "We learn the service, market, destination and operational realities before we recommend a media path."],
  ["02", "Measurement design", "We align the signals that matter: qualified demand, sales process feedback and sustainable unit economics."],
  ["03", "Controlled testing", "Campaign structure, creative angles and budgets are tested with clear ownership and documented changes."],
  ["04", "Compounding insight", "We use evidence from the media operation to improve the offer, funnel and follow-up system over time."],
];

const principles = [
  "No guaranteed account approval, lead volume, revenue or sales.",
  "No deceptive claims, hidden redirects or unclear data practices.",
  "No representation of, or affiliation with, advertising platforms.",
  "No work for unauthorized brands or misleading offers.",
];

export default function AboutPage() {
  return <main id="main-content" className="about-agency">
    <section className="about-hero">
      <div className="about-hero-grid" aria-hidden="true" />
      <div className="about-hero-orb" aria-hidden="true" />
      <div className="agency-shell about-hero-content">
        <nav className="about-crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span aria-current="page">About</span></nav>
        <p className="agency-kicker"><span /> ABOUT VOLKOV</p>
        <h1>Discipline is the<br /><em>growth advantage.</em></h1>
        <div className="about-hero-bottom"><p>VOLKOV is an independent Brazilian company supporting international businesses with paid media operations, conversion strategy and a more accountable way to scale demand.</p><Link href="/contact" className="agency-button agency-button-primary">Start a conversation <ArrowRight aria-hidden="true" /></Link></div>
      </div>
    </section>

    <section className="about-manifesto"><div className="agency-shell"><p className="agency-kicker">OUR POINT OF VIEW</p><div className="about-manifesto-grid"><h2>Growth works better when every decision has a <em>reason.</em></h2><div><p>We believe paid media should not be a black box. It is an operating system where strategy, creative, measurement and customer experience work together.</p><p>That is why we start with the business context—not a channel checklist—and stay close to the signals that make improvement possible.</p></div></div><div className="about-metrics" aria-label="VOLKOV operating focus"><article><Globe2 aria-hidden="true" /><span>MARKETS</span><strong>US & Europe</strong></article><article><BarChart3 aria-hidden="true" /><span>FOCUS</span><strong>Paid media systems</strong></article><article><CircleGauge aria-hidden="true" /><span>APPROACH</span><strong>Evidence over noise</strong></article></div></div></section>

    <section className="about-method"><div className="agency-shell"><div className="about-section-heading"><div><p className="agency-kicker">HOW WE OPERATE</p><h2>A repeatable system,<br />built for <em>real decisions.</em></h2></div><p>Every engagement moves through a clear operating sequence. It gives clients visibility without creating unnecessary complexity.</p></div><ol className="about-steps">{operatingSteps.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>

    <section className="about-boundaries"><div className="agency-shell about-boundaries-grid"><div><p className="agency-kicker">OPERATING BOUNDARIES</p><h2>Trust is not a statement.<br />It is a <em>standard.</em></h2><p>Clear boundaries protect the client, the audience and the integrity of the campaign. We maintain them from the initial review through ongoing operations.</p></div><div className="about-principles">{principles.map((principle) => <div key={principle}><Check aria-hidden="true" /><p>{principle}</p></div>)}</div></div></section>

    <section className="about-company agency-shell"><div className="about-company-heading"><p className="agency-kicker">COMPANY RECORD</p><h2>Built with an international<br /><em>operating mindset.</em></h2></div><div className="about-company-card"><div className="company-mark"><ShieldCheck aria-hidden="true" /></div><div className="company-record"><span>LEGAL ENTITY</span><strong>{company.legalName}</strong><span>CNPJ {company.taxId}</span></div><address>{companyAddress.enUS.map((line) => <span key={line}>{line}</span>)}</address><div className="company-contact"><a href={`mailto:${company.email}`}>{company.email}</a><a href={company.phone.href}>{company.phone.internationalDisplay}</a></div></div><div className="about-company-note"><FileCheck2 aria-hidden="true" /><p>Advertising platforms independently review accounts, campaigns, creatives and destinations under their own policies. VOLKOV does not claim platform affiliation, endorsement or sponsorship.</p></div></section>
  </main>;
}
