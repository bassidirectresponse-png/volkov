import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroSection } from "@/src/components/sections/hero-section";
import { WellnessInsights } from "@/src/components/sections/wellness-insights";
import { FeaturedStandards } from "@/src/components/sections/featured-standards";
import { CapabilitiesSection } from "@/src/components/sections/capabilities-section";
import { ExplodedViewAssembly } from "@/src/components/sections/exploded-view-assembly";
import { EditorialPrinciples } from "@/src/components/sections/editorial-principles";
import { NewsletterSection } from "@/src/components/sections/newsletter-section";
import { createMetadata } from "@/src/lib/metadata";

export const metadata = createMetadata(
  "Independent Wellness Research",
  "Independent wellness research, responsible product discovery and transparent consumer information from VOLKOV LTDA.",
);

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <section className="who-we-are" id="who-we-are">
        <p className="eyebrow">WHO WE ARE</p>
        <div className="who-grid">
          <h2>
            An independent publishing company built around <em>clearer</em>{" "}
            questions.
          </h2>
          <div>
            <p>
              VOLKOV LTDA is an independent digital publishing and performance
              marketing company registered in Brazil.
            </p>
            <p>
              We create educational content about wellness, everyday health
              habits, ingredient transparency and responsible consumer
              decision-making. We may also participate in affiliate programs
              and receive compensation when readers purchase products through
              selected links.
            </p>
            <aside>
              VOLKOV is not a medical provider, pharmacy, laboratory or product
              manufacturer.
            </aside>
            <Link className="text-link" href="/about">
              Read about our work <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <WellnessInsights />
      <FeaturedStandards />
      <CapabilitiesSection />
      <ExplodedViewAssembly />
      <EditorialPrinciples />
      <NewsletterSection />
    </main>
  );
}
