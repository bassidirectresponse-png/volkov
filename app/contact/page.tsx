import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/src/components/forms/contact-form";
import { Breadcrumbs } from "@/src/components/ui/breadcrumbs";
import { company, companyAddress } from "@/src/config/company";
import { createMetadata } from "@/src/lib/metadata";

export const metadata = createMetadata(
  "Contact",
  "Contact VOLKOV LTDA to discuss paid media operations and growth support.",
  "/contact",
);

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero-beige">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        <p className="eyebrow">CONTACT VOLKOV</p>
        <h1>START WITH THE BUSINESS CONTEXT.</h1>
        <p>
          Tell us about your market, offer and the growth challenge you are
          working through. Please do not send payment details, access
          credentials or other sensitive information through this form.
        </p>
      </section>
      <section className="contact-layout">
        <div className="contact-details">
          <div>
            <strong>{company.legalName}</strong>
            <span>CNPJ {company.taxId}</span>
          </div>
          <address>
            <MapPin aria-hidden="true" />
            <span>
              {companyAddress.enUS.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </span>
          </address>
          <a href={`mailto:${company.email}`}>
            <Mail aria-hidden="true" />
            {company.email}
          </a>
          <a href={company.phone.href}>
            <Phone aria-hidden="true" />
            {company.phone.internationalDisplay}
          </a>
          <p>
            Response times depend on message volume. Contacting us does not
            create a client relationship or guarantee service availability.
          </p>
        </div>
        <div>
          <p className="eyebrow">SEND A MESSAGE</p>
          <h2>How can we help?</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
