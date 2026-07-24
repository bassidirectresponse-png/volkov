"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("VOLKOV page error", error.digest || "unavailable");
  }, [error]);

  return (
    <main id="main-content" className="simple-message-page">
      <p className="eyebrow">TEMPORARY INTERRUPTION</p>
      <h1>We could not assemble this page.</h1>
      <p>No personal information has been displayed. Please try again.</p>
      <button className="button button-dark" type="button" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
