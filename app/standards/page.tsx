import {
  BadgeInfo,
  BookCheck,
  CircleAlert,
  FilePenLine,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { company } from "@/src/config/company";
import { Breadcrumbs } from "@/src/components/ui/breadcrumbs";
import { createMetadata } from "@/src/lib/metadata";

export const metadata = createMetadata(
  "Our Standards",
  "How VOLKOV approaches editorial independence, affiliate transparency, research, health claims and corrections.",
  "/standards",
);

const standards = [
  {
    title: "Editorial Independence",
    icon: Scale,
    text: "Commercial relationships must not determine editorial conclusions. We organize and qualify information according to its relevance for the reader, including limitations that may make a product or claim less persuasive.",
  },
  {
    title: "Affiliate Transparency",
    icon: BadgeInfo,
    text: "Potential commissions are disclosed near relevant links and decision points. A commission does not normally change the consumer's price and does not mean VOLKOV manufactures or guarantees a product.",
  },
  {
    title: "Research Standards",
    icon: BookCheck,
    text: "Objective statements should be traceable to appropriate sources and written at the strength the available context supports. We distinguish research about an ingredient from evidence about a finished product.",
  },
  {
    title: "Health Claims",
    icon: CircleAlert,
    text: "We do not publish unauthorized claims that a supplement diagnoses, treats, cures or prevents disease. Educational language must remain responsible without relying on a disclaimer to repair an exaggerated promise.",
  },
  {
    title: "Product Information",
    icon: ShieldCheck,
    text: "Some information may come from a manufacturer and can change. Readers should verify the current physical label. VOLKOV does not manufacture products, and inclusion does not establish effectiveness or suitability.",
  },
  {
    title: "Reviews and Rankings",
    icon: FilePenLine,
    text: "We do not use invented testimonials, false scores or rankings determined only by commission. Future comparisons must state their criteria and make relevant commercial relationships visible.",
  },
] as const;

export default function StandardsPage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero-dark">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Our Standards" }]}
        />
        <p className="eyebrow">OUR STANDARDS</p>
        <h1>EVIDENCE BEFORE HYPE.</h1>
        <p>
          A practical editorial framework for creating clear information,
          visible disclosures and properly qualified conclusions.
        </p>
      </section>
      <section className="standards-list">
        {standards.map((standard, index) => (
          <article key={standard.title}>
            <div>
              <span>0{index + 1}</span>
              <standard.icon aria-hidden="true" />
            </div>
            <h2>{standard.title}</h2>
            <p>{standard.text}</p>
          </article>
        ))}
      </section>
      <section className="corrections-callout">
        <div>
          <p className="eyebrow">CORRECTIONS</p>
          <h2>Accuracy includes the willingness to update.</h2>
        </div>
        <p>
          Readers can request a correction at{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>. We assess the
          source, significance and context of the request. Material errors are
          corrected promptly and the article&apos;s updated date is revised.
        </p>
      </section>
    </main>
  );
}
