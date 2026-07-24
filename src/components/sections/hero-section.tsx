import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { AmbientOrbs } from "./ambient-orbs";

export function HeroSection() {
  return (
    <section className="hero">
      <AmbientOrbs />
      <div className="hero-content">
        <p className="hero-kicker">
          Independent research · Responsible discovery · Transparent information
        </p>
        <h1>
          HEALTH,
          <br />
          <span>CLEARLY.</span>
        </h1>
        <div className="hero-copy">
          <p className="hero-subtitle">
            Independent wellness research, responsible product discovery and
            transparent consumer information.
          </p>
          <p>
            VOLKOV is a Brazilian digital publishing and performance marketing
            company focused on helping adults navigate health and wellness
            information with greater clarity.
          </p>
          <div className="button-row">
            <Link className="button button-light" href="/insights">
              Explore Our Insights <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link className="button button-ghost" href="/about">
              Learn About VOLKOV
            </Link>
          </div>
        </div>
      </div>
      <a href="#who-we-are" className="scroll-cue" aria-label="Scroll to learn more">
        <ArrowDown aria-hidden="true" />
        Scroll to examine
      </a>
    </section>
  );
}
