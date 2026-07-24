"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BookOpen, Search, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/src/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface CinematicHeroProps
  extends React.HTMLAttributes<HTMLElement> {
  brandName?: string;
  tagline?: string;
  cardHeading?: string;
  cardDescription?: string;
  imageSrc?: string;
}

const evidencePoints = [
  {
    icon: Search,
    label: "Examine the claim",
    detail: "Purpose, evidence and limits",
  },
  {
    icon: BookOpen,
    label: "Read the context",
    detail: "Labels, sources and uncertainty",
  },
  {
    icon: ShieldCheck,
    label: "See the disclosure",
    detail: "Clear commercial relationships",
  },
];

export function CinematicHero({
  brandName = "VOLKOV",
  tagline = "HEALTH, CLEARLY.",
  cardHeading = "Research should reveal the whole picture.",
  cardDescription = "Independent wellness publishing built to make evidence, limitations and commercial context easier to examine.",
  imageSrc = "/images/volkov-research-desk.jpg",
  className,
  ...props
}: CinematicHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const dossierRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const pointerFrame = useRef<number>(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const dossier = dossierRef.current;

    if (!section || !stage || !dossier) return;

    const motion = gsap.matchMedia();
    const context = gsap.context(() => {
      motion.add(
        {
          desktop: "(min-width: 769px)",
          mobile: "(max-width: 768px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        ({ conditions }) => {
          if (conditions?.reduceMotion) {
            gsap.set(
              [
                ".cinematic-intro",
                ".cinematic-dossier",
                ".dossier-copy",
                ".evidence-point",
                ".cinematic-cta",
              ],
              { clearProps: "all" },
            );
            return;
          }

          const isDesktop = Boolean(conditions?.desktop);
          gsap.set(".dossier-copy", { opacity: 0, y: 34 });
          gsap.set(".evidence-point", { opacity: 0, x: 24 });
          gsap.set(".cinematic-cta", { opacity: 0, y: 30 });

          const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.7,
              invalidateOnRefresh: true,
            },
          });

          timeline
            .to(
              ".cinematic-intro",
              {
                opacity: 0.08,
                scale: isDesktop ? 1.08 : 1.03,
                filter: "blur(12px)",
                duration: 1.2,
              },
              0,
            )
            .fromTo(
              ".cinematic-dossier",
              {
                y: isDesktop ? "74vh" : "60vh",
                scale: isDesktop ? 0.82 : 0.94,
              },
              { y: 0, scale: 1, duration: 1.4 },
              0,
            )
            .to(
              imageRef.current,
              { scale: 1.07, yPercent: -2, duration: 2.1 },
              0.55,
            )
            .to(".dossier-copy", { opacity: 1, y: 0, duration: 0.65 }, 1.05)
            .to(
              ".evidence-point",
              { opacity: 1, x: 0, stagger: 0.12, duration: 0.55 },
              1.18,
            )
            .to(
              [".dossier-copy", ".evidence-point"],
              { opacity: 0, y: -18, duration: 0.45 },
              2.08,
            )
            .to(
              ".cinematic-dossier",
              {
                scale: isDesktop ? 0.88 : 0.94,
                opacity: 0.24,
                filter: "blur(8px)",
                duration: 0.7,
              },
              2.12,
            )
            .to(".cinematic-cta", { opacity: 1, y: 0, duration: 0.7 }, 2.23);
        },
      );
    }, section);

    const onPointerMove = (event: PointerEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      cancelAnimationFrame(pointerFrame.current);
      pointerFrame.current = requestAnimationFrame(() => {
        const bounds = dossier.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
        const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
        dossier.style.setProperty("--pointer-x", `${50 + x * 22}%`);
        dossier.style.setProperty("--pointer-y", `${50 + y * 22}%`);
        gsap.to(dossier, {
          rotateY: x * 1.8,
          rotateX: y * -1.2,
          duration: 0.8,
          ease: "power3.out",
          overwrite: true,
        });
      });
    };

    stage.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      stage.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(pointerFrame.current);
      motion.revert();
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn("cinematic-hero", className)}
      aria-labelledby="cinematic-hero-title"
      {...props}
    >
      <div ref={stageRef} className="cinematic-stage">
        <div className="cinematic-atmosphere" aria-hidden="true">
          <span />
          <span />
        </div>

        <div className="cinematic-intro">
          <p>
            Independent research · Responsible discovery · Transparent
            information
          </p>
          <h1 id="cinematic-hero-title">
            <span>
              {tagline.includes(",")
                ? `${tagline.split(",")[0]},`
                : tagline}
            </span>
            <strong>
              {tagline.includes(",")
                ? tagline.split(",").slice(1).join(",").trim()
                : ""}
            </strong>
          </h1>
          <div className="cinematic-brand-line">
            <span>{brandName}</span>
            <span>Independent wellness publishing</span>
          </div>
        </div>

        <div
          ref={dossierRef}
          className="cinematic-dossier"
        >
          <div className="dossier-sheen" aria-hidden="true" />
          <div className="dossier-image">
            {/* The Sites runtime must receive this asset directly; its image
                optimizer is intentionally bypassed for deployment reliability. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imageRef}
              src={imageSrc}
              alt="Editorial research desk with botanical materials, notes and a magnifying glass"
              width="1440"
              height="756"
              fetchPriority="high"
            />
            <span aria-hidden="true">{brandName}</span>
          </div>
          <div className="dossier-copy">
            <p>THE VOLKOV METHOD</p>
            <h2>{cardHeading}</h2>
            <span>{cardDescription}</span>
          </div>
          <div className="evidence-list">
            {evidencePoints.map(({ icon: Icon, label, detail }) => (
              <div className="evidence-point" key={label}>
                <Icon aria-hidden="true" />
                <div>
                  <strong>{label}</strong>
                  <span>{detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cinematic-cta">
          <p>INDEPENDENT. CAREFUL. TRANSPARENT.</p>
          <h2>Better questions create clearer decisions.</h2>
          <span>
            Explore practical frameworks for reading labels, assessing claims
            and understanding what remains uncertain.
          </span>
          <div className="button-row">
            <Link className="button button-light" href="/insights">
              Explore Our Insights <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link className="button button-ghost" href="/about">
              Learn About VOLKOV
            </Link>
          </div>
        </div>

        <a
          href="#who-we-are"
          className="cinematic-scroll-cue"
          aria-label="Scroll to learn more about VOLKOV"
        >
          <ArrowDown aria-hidden="true" />
          Scroll to examine
        </a>
      </div>
    </section>
  );
}
