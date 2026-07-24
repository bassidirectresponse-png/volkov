import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { company, companyAddress } from "@/src/config/company";
import {
  legalNavigation,
  primaryNavigation,
} from "@/src/config/navigation";
import { CookieSettingsButton } from "@/src/components/cookies/cookie-settings-button";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-lede">
        <p>Conversation is part of clarity.</p>
        <h2>LET&apos;S CONNECT.</h2>
        <a className="footer-email" href={`mailto:${company.email}`}>
          {company.email}
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <div className="footer-grid">
        <div className="footer-company">
          <strong>{company.legalName}</strong>
          <span>CNPJ {company.taxId}</span>
          <address>
            {companyAddress.ptBR.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href={company.phone.href}>{company.phone.display}</a>
        </div>
        <nav aria-label="Company links">
          {primaryNavigation.slice(1).map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/products">Product Research</Link>
        </nav>
        <nav aria-label="Legal links">
          {legalNavigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <CookieSettingsButton />
        </nav>
      </div>
      <div className="footer-bottom">
        <p>
          VOLKOV publishes independent educational content and may receive
          compensation through affiliate relationships. VOLKOV does not provide
          medical advice and does not manufacture products that may be
          mentioned on this website.
        </p>
        <p>
          © {new Date().getFullYear()} {company.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
