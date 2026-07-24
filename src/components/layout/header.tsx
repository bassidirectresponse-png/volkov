"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/src/config/navigation";
import { MobileNavigation } from "./mobile-navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="VOLKOV home">
          VOLKOV
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryNavigation.slice(0, -1).map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={active ? "active" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link className="button button-light header-cta" href="/contact">
          Contact Us
        </Link>
        <MobileNavigation />
      </div>
    </header>
  );
}
