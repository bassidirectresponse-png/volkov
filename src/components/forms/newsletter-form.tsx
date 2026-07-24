"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { newsletterSchema } from "@/src/lib/validation";

export function NewsletterForm({ enabled }: { enabled: boolean }) {
  const [message, setMessage] = useState("");

  if (!enabled) {
    return (
      <div className="newsletter-disabled" aria-label="Newsletter coming soon">
        <p>
          Our email briefing is being prepared. In the meantime, explore the
          latest research notes in Insights.
        </p>
        <Link href="/insights" className="text-link">
          Read Insights <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    );
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const parsed = newsletterSchema.safeParse({
      email: data.get("email"),
      consent: data.get("consent") === "on",
      website: data.get("website"),
    });
    if (!parsed.success) {
      setMessage(parsed.error.issues[0]?.message || "Review your details.");
      return;
    }
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    const result = (await response.json()) as { message?: string };
    setMessage(result.message || "We could not process this request.");
    if (response.ok) form.reset();
  }

  return (
    <form className="newsletter-form" onSubmit={onSubmit} noValidate>
      <label>
        <span>Email address</span>
        <div>
          <input name="email" type="email" autoComplete="email" />
          <button type="submit" aria-label="Request newsletter subscription">
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </label>
      <label className="consent-field">
        <input type="checkbox" name="consent" />
        <span>
          I agree to receive educational emails from VOLKOV and understand that
          I can unsubscribe at any time.
        </span>
      </label>
      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      {message ? <p role="status">{message}</p> : null}
    </form>
  );
}
