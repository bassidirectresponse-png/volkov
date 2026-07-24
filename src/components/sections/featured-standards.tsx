import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FeaturedStandards() {
  return (
    <section className="featured-standards">
      <div className="standard-number">01 / 04</div>
      <div>
        <p className="eyebrow">OUR STANDARD</p>
        <h2>EVIDENCE BEFORE HYPE.</h2>
      </div>
      <div className="standard-copy">
        <p>
          Health and wellness information should be understandable, properly
          qualified and presented without exaggerated promises. Our editorial
          process prioritizes clarity, transparency and responsible
          communication.
        </p>
        <Link className="button button-dark" href="/standards">
          See Our Editorial Standards <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
