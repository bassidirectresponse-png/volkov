import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page">
      <span>404 / RESEARCH NOTE NOT FOUND</span>
      <h1>THIS PAGE IS OUT OF FRAME.</h1>
      <p>
        The address may have changed, or the information may no longer be part
        of our published library.
      </p>
      <Link className="button button-light" href="/">
        <ArrowLeft aria-hidden="true" /> Return home
      </Link>
    </main>
  );
}
