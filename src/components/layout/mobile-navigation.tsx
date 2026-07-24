"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { primaryNavigation } from "@/src/config/navigation";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.classList.add("menu-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="mobile-navigation">
      <button
        className="icon-button"
        type="button"
        aria-label="Open navigation"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
      >
        <Menu aria-hidden="true" />
      </button>
      {open ? (
        <div className="mobile-menu-backdrop" role="presentation">
          <nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile navigation"
          >
            <div className="mobile-menu-top">
              <span className="wordmark">VOLKOV</span>
              <button
                ref={closeButton}
                className="icon-button icon-button-dark"
                type="button"
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
              >
                <X aria-hidden="true" />
              </button>
            </div>
            <div className="mobile-menu-links">
              {primaryNavigation.map((item, index) => (
                <Link
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  <span>0{index + 1}</span>
                  {item.label}
                </Link>
              ))}
            </div>
            <p>
              Independent wellness research and transparent consumer
              information.
            </p>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
