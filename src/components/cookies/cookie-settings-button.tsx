"use client";

export function CookieSettingsButton() {
  return (
    <button
      className="footer-link-button"
      type="button"
      onClick={() => window.dispatchEvent(new Event("volkov:cookie-settings"))}
    >
      Cookie Settings
    </button>
  );
}
