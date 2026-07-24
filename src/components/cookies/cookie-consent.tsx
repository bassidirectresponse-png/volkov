"use client";

import { useEffect, useState } from "react";
import { CookieSettingsModal } from "./cookie-settings-modal";

export type CookiePreferences = {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  advertising: boolean;
};

const storageKey = "volkov-cookie-preferences";

const defaults: CookiePreferences = {
  necessary: true,
  preferences: false,
  analytics: false,
  advertising: false,
};

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaults);

  useEffect(() => {
    const hydrationTimer = window.setTimeout(() => {
      const stored = window.localStorage.getItem(storageKey);
      if (!stored) {
        setVisible(true);
      } else {
        try {
          setPreferences(JSON.parse(stored) as CookiePreferences);
        } catch {
          setVisible(true);
        }
      }
    }, 0);

    const openSettings = () => {
      setVisible(true);
      setCustomizing(true);
    };
    window.addEventListener("volkov:cookie-settings", openSettings);
    return () => {
      window.clearTimeout(hydrationTimer);
      window.removeEventListener("volkov:cookie-settings", openSettings);
    };
  }, []);

  function save(next: CookiePreferences) {
    window.localStorage.setItem(storageKey, JSON.stringify(next));
    setPreferences(next);
    setVisible(false);
    setCustomizing(false);
    window.dispatchEvent(
      new CustomEvent("volkov:cookie-consent", { detail: next }),
    );
  }

  if (!visible) return null;

  return (
    <>
      <section
        className="cookie-banner"
        aria-label="Cookie consent"
        aria-live="polite"
      >
        <div>
          <strong>Your privacy, clearly.</strong>
          <p>
            We use necessary storage to remember your choices. Analytics and
            affiliate measurement stay off unless you choose to enable them.
          </p>
        </div>
        <div className="cookie-actions">
          <button
            type="button"
            className="button button-outline-dark"
            onClick={() => save(defaults)}
          >
            Reject non-essential
          </button>
          <button
            type="button"
            className="button button-outline-dark"
            onClick={() => setCustomizing(true)}
          >
            Customize
          </button>
          <button
            type="button"
            className="button button-dark"
            onClick={() =>
              save({
                necessary: true,
                preferences: true,
                analytics: true,
                advertising: true,
              })
            }
          >
            Accept all
          </button>
        </div>
      </section>
      {customizing ? (
        <CookieSettingsModal
          initial={preferences}
          onCancel={() => setCustomizing(false)}
          onSave={save}
        />
      ) : null}
    </>
  );
}
