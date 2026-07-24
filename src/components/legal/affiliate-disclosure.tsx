import Link from "next/link";

export function AffiliateDisclosure() {
  return (
    <aside className="legal-notice legal-notice-sage" aria-label="Affiliate disclosure">
      <strong>Affiliate disclosure</strong>
      <p>
        VOLKOV may earn a commission from qualifying purchases made through
        links on this page, at no additional cost to you.{" "}
        <Link href="/affiliate-disclosure">How affiliate relationships work</Link>
      </p>
    </aside>
  );
}
