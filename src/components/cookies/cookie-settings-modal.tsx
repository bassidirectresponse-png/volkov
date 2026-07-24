"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { CookiePreferences } from "./cookie-consent";

export function CookieSettingsModal({
  initial,
  onCancel,
  onSave,
}: {
  initial: CookiePreferences;
  onCancel: () => void;
  onSave: (preferences: CookiePreferences) => void;
}) {
  const [value, setValue] = useState(initial);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCancel();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onCancel]);

  return (
    <div className="modal-backdrop" role="presentation">
      <section
        className="cookie-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-title"
      >
        <div className="modal-heading">
          <div>
            <p className="eyebrow">YOUR CHOICES</p>
            <h2 id="cookie-settings-title">Cookie settings</h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="icon-button icon-button-dark"
            onClick={onCancel}
            aria-label="Close cookie settings"
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <div className="cookie-options">
          <CookieToggle
            label="Strictly necessary"
            description="Required for security and to remember your privacy choices."
            checked
            disabled
            onChange={() => undefined}
          />
          <CookieToggle
            label="Preferences"
            description="Remember optional display and content preferences."
            checked={value.preferences}
            onChange={(preferences) =>
              setValue((current) => ({ ...current, preferences }))
            }
          />
          <CookieToggle
            label="Analytics"
            description="Help us understand aggregate site usage."
            checked={value.analytics}
            onChange={(analytics) =>
              setValue((current) => ({ ...current, analytics }))
            }
          />
          <CookieToggle
            label="Advertising and affiliate measurement"
            description="Measure referrals and qualifying affiliate activity."
            checked={value.advertising}
            onChange={(advertising) =>
              setValue((current) => ({ ...current, advertising }))
            }
          />
        </div>
        <button
          className="button button-dark"
          type="button"
          onClick={() => onSave(value)}
        >
          Save preferences
        </button>
      </section>
    </div>
  );
}

function CookieToggle({
  label,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="cookie-option">
      <span>
        <strong>{label}</strong>
        <small>{description}</small>
      </span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.target.checked)}
      />
    </label>
  );
}
