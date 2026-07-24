import Link from "next/link";

export function HealthDisclaimerNotice() {
  return (
    <aside className="legal-notice" aria-label="Health information notice">
      <strong>Health information notice</strong>
      <p>
        This content is for general educational purposes and is not medical
        advice. Speak with an appropriate healthcare professional before making
        decisions that may affect your health.{" "}
        <Link href="/health-disclaimer">Read the full disclaimer</Link>
      </p>
    </aside>
  );
}
