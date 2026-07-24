"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { contactSchema } from "@/src/lib/validation";
import { company } from "@/src/config/company";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; mailto?: boolean };

export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const input = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      subject: data.get("subject"),
      message: data.get("message"),
      consent: data.get("consent") === "on",
      website: data.get("website"),
    };

    const parsed = contactSchema.safeParse(input);
    if (!parsed.success) {
      setErrors(
        Object.fromEntries(
          parsed.error.issues.map((issue) => [
            String(issue.path[0]),
            issue.message,
          ]),
        ),
      );
      setState({
        status: "error",
        message: "Please review the highlighted fields.",
      });
      return;
    }

    setErrors({});
    setState({ status: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = (await response.json()) as {
        message?: string;
        fallback?: "mailto";
      };
      if (!response.ok) {
        setState({
          status: "error",
          message:
            result.message ||
            "We could not send your message. Please try email instead.",
          mailto: result.fallback === "mailto",
        });
        return;
      }
      form.reset();
      setState({
        status: "success",
        message: result.message || "Your message has been sent.",
      });
    } catch {
      setState({
        status: "error",
        message: "Connection interrupted. You can contact us directly by email.",
        mailto: true,
      });
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-grid">
        <Field
          id="name"
          label="Full name"
          autoComplete="name"
          error={errors.name}
        />
        <Field
          id="email"
          label="Email address"
          type="email"
          autoComplete="email"
          error={errors.email}
        />
        <Field
          id="company"
          label="Company"
          optional
          autoComplete="organization"
          error={errors.company}
        />
        <Field id="subject" label="Subject" error={errors.subject} />
      </div>
      <label className="field">
        <span>Message</span>
        <textarea
          name="message"
          id="message"
          rows={7}
          maxLength={5000}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <small id="message-error" className="field-error">
            {errors.message}
          </small>
        ) : null}
      </label>
      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="consent-field">
        <input
          type="checkbox"
          name="consent"
          aria-invalid={Boolean(errors.consent)}
        />
        <span>
          I agree that VOLKOV may use the information above to respond to this
          inquiry. Please do not include medical or other sensitive information.
        </span>
      </label>
      {errors.consent ? (
        <small className="field-error">{errors.consent}</small>
      ) : null}
      <div className="form-submit">
        <button
          className="button button-dark"
          type="submit"
          disabled={state.status === "submitting"}
        >
          {state.status === "submitting" ? (
            <>
              <LoaderCircle className="spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            <>
              Send message <ArrowUpRight aria-hidden="true" />
            </>
          )}
        </button>
        {state.status === "success" || state.status === "error" ? (
          <p
            className={`form-status form-status-${state.status}`}
            role="status"
          >
            {state.message}{" "}
            {state.status === "error" && state.mailto ? (
              <a href={`mailto:${company.email}`}>Email {company.email}</a>
            ) : null}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  optional,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="field">
      <span>
        {label} {optional ? <small>Optional</small> : null}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        maxLength={id === "email" ? 254 : 160}
      />
      {error ? (
        <small id={`${id}-error`} className="field-error">
          {error}
        </small>
      ) : null}
    </label>
  );
}
