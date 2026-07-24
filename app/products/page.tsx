import { Breadcrumbs } from "@/src/components/ui/breadcrumbs";
import { EmptyProductsState } from "@/src/components/ui/empty-products-state";
import { AffiliateDisclosure } from "@/src/components/legal/affiliate-disclosure";
import { createMetadata } from "@/src/lib/metadata";

export const metadata = createMetadata(
  "Product Research",
  "VOLKOV product research will be published only after editorial and compliance review.",
  "/products",
);

export default function ProductsPage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero-taupe">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Product Research" }]}
        />
        <p className="eyebrow">PRODUCT RESEARCH</p>
        <h1>REVIEW FIRST. PUBLISH SECOND.</h1>
        <p>
          Product coverage belongs here only after its information,
          disclosures and claims have passed editorial and compliance review.
        </p>
      </section>
      <div className="section-shell products-content">
        <AffiliateDisclosure />
        <EmptyProductsState />
      </div>
    </main>
  );
}
