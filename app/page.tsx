import Link from "next/link";
import { ArrowRight, BarChart3, Check, CircleGauge, Globe2, Layers3, LockKeyhole, MousePointer2, ShieldCheck, Sparkles } from "lucide-react";
import { createMetadata } from "@/src/lib/metadata";

export const metadata = createMetadata("Paid Media & Growth Operations", "Paid media strategy, campaign operations and conversion systems for local businesses and digital offers.");

const localBusinessItems = ["Google & Meta campaign operations", "Landing-page and lead-flow review", "Measurement, optimization and reporting"];
const offerItems = ["Launch and evergreen campaign support", "Creative testing and budget governance", "Dedicated traffic specialists alongside your team"];
const standards = [
  ["01", "Clear scope", "Every engagement starts with a documented service, geography, offer and approved destination."],
  ["02", "Responsible media", "We work within platform policies and do not use misleading claims, hidden redirects or prohibited targeting."],
  ["03", "Truthful reporting", "Performance is reported with context. Forecasts are not guarantees and past results are not promises."],
  ["04", "Privacy by design", "We use the minimum data needed for the agreed purpose and respect consent, opt-out and retention requirements."],
];

export default function Home() {
  return <main id="main-content" className="agency-home">
    <section className="agency-hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" /><div className="hero-glow hero-glow-one" aria-hidden="true" /><div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="agency-shell hero-content">
        <p className="agency-kicker"><span /> PAID MEDIA OPERATIONS · US & EUROPE</p>
        <h1 id="hero-title">Performance media,<br /><em>engineered</em> for momentum.</h1>
        <p className="hero-copy">VOLKOV helps local businesses and digital-offer teams build a more controlled path from paid attention to qualified demand.</p>
        <div className="hero-actions"><Link href="/contact" className="agency-button agency-button-primary">Discuss your growth plan <ArrowRight aria-hidden="true" /></Link><a href="#services" className="agency-button agency-button-quiet">Explore capabilities</a></div>
        <div className="hero-proof" aria-label="Operating principles"><span><Check aria-hidden="true" /> Strategy-led</span><span><Check aria-hidden="true" /> Policy-aware</span><span><Check aria-hidden="true" /> No outcome guarantees</span></div>
      </div>
      <div className="control-card" aria-label="Campaign operations illustration"><div className="control-card-top"><span>VOLKOV / CONTROL PLANE</span><i /></div><div className="control-metric"><b>ACTIVE</b><strong>Media systems</strong><span>US · EU · Digital offers</span></div><div className="control-graph"><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="control-footer"><span>01 / SIGNAL</span><span>02 / TEST</span><span>03 / LEARN</span></div></div>
    </section>

    <section className="agency-intro agency-shell"><p className="agency-kicker">A MORE DISCIPLINED WAY TO GROW</p><div className="intro-grid"><h2>Growth is not a channel.<br />It is a <em>system.</em></h2><div><p>Paid media works best when the campaign, the destination and the follow-up experience tell the same story. We bring these moving parts into one operating rhythm.</p><p>Our work is designed for teams that value clear decisions, compliant execution and a long-term view of performance.</p><a className="agency-text-link" href="#process">See the operating model <ArrowRight aria-hidden="true" /></a></div></div></section>

    <section className="services-section" id="services"><div className="agency-shell"><div className="section-heading"><div><p className="agency-kicker">CAPABILITIES</p><h2>Two growth environments.<br /><em>One specialist team.</em></h2></div><p>We adapt the operating model to the sales motion, market and level of internal support your business actually needs.</p></div><div className="service-grid"><article className="service-card service-card-local"><div className="service-icon"><Globe2 aria-hidden="true" /></div><p className="service-index">01 / LOCAL BUSINESS</p><h3>Demand systems for businesses serving real places.</h3><p>For service businesses in the United States and Europe that need a dependable, measurable paid-media operation.</p><ul>{localBusinessItems.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></article><article className="service-card service-card-offer"><div className="service-icon"><Layers3 aria-hidden="true" /></div><p className="service-index">02 / DIGITAL OFFERS</p><h3>Specialist traffic support for launches and infoproducts.</h3><p>For experts, creators and launch teams that want an experienced media team close to strategy and execution.</p><ul>{offerItems.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></article></div></div></section>

    <section className="process-section-agency" id="process"><div className="agency-shell"><div className="section-heading"><div><p className="agency-kicker">OPERATING MODEL</p><h2>From business context<br />to <em>better signals.</em></h2></div><p>No black boxes. We establish the scope first, activate with care, then use the feedback loop to make deliberate improvements.</p></div><ol className="process-list"><li><span>01</span><div><MousePointer2 aria-hidden="true" /><h3>Map the motion</h3><p>We understand your offer, market, destination, customer journey and the practical limits of your operation.</p></div></li><li><span>02</span><div><Sparkles aria-hidden="true" /><h3>Build the test plan</h3><p>Creative angles, media structure, measurement and budget controls are aligned before campaigns move.</p></div></li><li><span>03</span><div><BarChart3 aria-hidden="true" /><h3>Operate & learn</h3><p>We monitor delivery, analyze quality signals and make documented changes as evidence accumulates.</p></div></li><li><span>04</span><div><CircleGauge aria-hidden="true" /><h3>Improve the system</h3><p>Media insights become input for the offer, funnel and follow-up—so growth compounds beyond a single campaign.</p></div></li></ol></div></section>

    <section className="standards-section" id="standards"><div className="agency-shell standards-grid"><div><p className="agency-kicker">RESPONSIBLE GROWTH</p><h2>Trust is part of the<br /><em>performance model.</em></h2><p className="standards-lede">We build campaigns for legitimate businesses and real customer relationships. That means clear information, thoughtful targeting and a visible compliance boundary.</p><Link href="/privacy-policy" className="agency-text-link">Read our privacy policy <ArrowRight aria-hidden="true" /></Link></div><div className="standards-list">{standards.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="fit-section agency-shell"><div className="fit-copy"><p className="agency-kicker">ENGAGEMENT FIT</p><h2>Built for teams ready to make <em>better decisions.</em></h2><p>We are a strong fit when the business has a clear offer, a working destination and the capacity to handle demand responsibly.</p></div><div className="fit-panels"><article><ShieldCheck aria-hidden="true" /><h3>A good fit</h3><p>Established local services, serious digital offers and teams that welcome a transparent operating process.</p></article><article><LockKeyhole aria-hidden="true" /><h3>Not a fit</h3><p>Misleading claims, unauthorized brand use, hidden data practices or requests for guaranteed outcomes.</p></article></div></section>
    <section className="agency-cta"><div className="agency-shell"><p className="agency-kicker">START WITH CONTEXT</p><h2>Tell us where you want<br />the system to <em>go next.</em></h2><p>We will review your category, market, offer and current growth constraints before recommending a path.</p><Link href="/contact" className="agency-button agency-button-primary">Talk to the VOLKOV team <ArrowRight aria-hidden="true" /></Link></div></section>
  </main>;
}
