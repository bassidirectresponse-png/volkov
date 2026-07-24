import { NewsletterForm } from "@/src/components/forms/newsletter-form";

export function NewsletterSection() {
  const enabled = process.env.NEWSLETTER_ENABLED === "true";

  return (
    <section className="newsletter-section">
      <div>
        <p className="eyebrow">A QUIETER INBOX</p>
        <h2>Wellness insights without the noise.</h2>
      </div>
      <NewsletterForm enabled={enabled} />
    </section>
  );
}
