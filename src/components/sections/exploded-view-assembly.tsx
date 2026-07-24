"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, CalendarCheck, FileText } from "lucide-react";
import {
  explodedViewItems,
  type ExplodedViewItem,
} from "./exploded-view-data";

export function ExplodedViewAssembly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (reducedMotion) {
    return <StaticAssembly />;
  }

  return (
    <section
      ref={containerRef}
      className="exploded-view"
      aria-labelledby="exploded-view-title"
    >
      <div className="exploded-sticky">
        <div className="exploded-copy">
          <p className="eyebrow">HOW WE CREATE CLARITY</p>
          <h2 id="exploded-view-title">
            FROM COMPLEX
            <br />
            TO CLEAR.
          </h2>
          <p>
            Every wellness topic contains multiple layers: ingredients, claims,
            warnings, sources, commercial relationships and consumer questions.
            We separate those layers, examine them carefully and bring the
            information back together in a form that is easier to understand.
          </p>
          <PhaseCopy progress={scrollYProgress} />
        </div>
        <div className="assembly-stage" aria-label="Animated VOLKOV Research File">
          <motion.svg
            className="assembly-lines"
            viewBox="0 0 900 700"
            aria-hidden="true"
          >
            {explodedViewItems.slice(0, 7).map((item, index) => (
              <Connector
                key={item.id}
                item={item}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </motion.svg>
          <div className="research-file-core">
            <span>VOLKOV / RESEARCH FILE</span>
            <FileText aria-hidden="true" />
            <strong>WELLNESS CLAIM REVIEW</strong>
            <small>Eight layers · One clear context</small>
          </div>
          {explodedViewItems.map((item) => (
            <ExplodedPiece
              key={item.id}
              item={item}
              progress={scrollYProgress}
            />
          ))}
          <FinalLock progress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}

function ExplodedPiece({
  item,
  progress,
}: {
  item: ExplodedViewItem;
  progress: MotionValue<number>;
}) {
  const x = useTransform(
    progress,
    [0, 0.2, 0.55, 0.75, 1],
    [0, 0, item.exploded.x, item.exploded.x, item.final.x],
  );
  const y = useTransform(
    progress,
    [0, 0.2, 0.55, 0.75, 1],
    [0, 0, item.exploded.y, item.exploded.y, item.final.y],
  );
  const rotate = useTransform(
    progress,
    [0, 0.2, 0.55, 0.75, 1],
    [0, 0, item.exploded.rotate, item.exploded.rotate, item.final.rotate],
  );
  const scale = useTransform(
    progress,
    [0, 0.2, 0.55, 0.75, 1],
    [0.76, 0.82, item.exploded.scale, item.exploded.scale, item.final.scale],
  );
  const opacity = useTransform(progress, [0, 0.17, 0.28, 0.9, 1], [0, 0.55, 1, 1, 0]);

  return (
    <motion.article
      className={`assembly-piece assembly-piece-${item.order}`}
      style={{ x, y, rotate, scale, opacity, zIndex: 20 + item.order }}
      aria-label={`${item.title}: ${item.description}`}
    >
      <item.icon aria-hidden="true" />
      <span>
        <strong>{item.title}</strong>
        <small>{item.description}</small>
      </span>
    </motion.article>
  );
}

function Connector({
  item,
  index,
  progress,
}: {
  item: ExplodedViewItem;
  index: number;
  progress: MotionValue<number>;
}) {
  const pathLength = useTransform(progress, [0.2, 0.5, 0.74], [0, 1, 0]);
  const x2 = 450 + item.exploded.x * 0.72;
  const y2 = 350 + item.exploded.y * 0.72;
  return (
    <motion.line
      x1="450"
      y1="350"
      x2={x2}
      y2={y2}
      pathLength={pathLength}
      opacity={0.28 + index * 0.025}
    />
  );
}

function PhaseCopy({ progress }: { progress: MotionValue<number> }) {
  const intro = useTransform(progress, [0, 0.16, 0.23], [1, 1, 0]);
  const explode = useTransform(progress, [0.18, 0.28, 0.52, 0.6], [0, 1, 1, 0]);
  const analyze = useTransform(progress, [0.52, 0.6, 0.74, 0.8], [0, 1, 1, 0]);
  const assemble = useTransform(progress, [0.76, 0.84, 1], [0, 1, 1]);

  return (
    <div className="phase-copy" aria-hidden="true">
      <motion.p style={{ opacity: intro }}>
        A wellness claim rarely exists in isolation.
      </motion.p>
      <motion.p style={{ opacity: explode }}>We separate the layers.</motion.p>
      <motion.p style={{ opacity: analyze }}>
        Which sources support the information?
      </motion.p>
      <motion.p style={{ opacity: assemble }}>
        Then we bring the information back together.
      </motion.p>
    </div>
  );
}

function FinalLock({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.78, 0.9, 1], [0, 0.85, 1]);
  const scale = useTransform(progress, [0.78, 0.92, 1], [0.94, 0.97, 1]);
  return (
    <motion.div className="final-lock" style={{ opacity, scale }}>
      <div className="final-lock-top">
        <span>SOURCE CHECKED</span>
        <span>DISCLOSURE VISIBLE</span>
      </div>
      <strong>Clearer structure. Visible limitations. Better questions.</strong>
      <div className="final-lock-meta">
        <span>
          <CalendarCheck aria-hidden="true" /> Last reviewed Jul 24, 2026
        </span>
        <Link href="/standards">
          Explore Our Standards <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  );
}

function StaticAssembly() {
  return (
    <section className="exploded-static" aria-labelledby="exploded-static-title">
      <div className="section-shell">
        <p className="eyebrow">HOW WE CREATE CLARITY</p>
        <h2 id="exploded-static-title">FROM COMPLEX TO CLEAR.</h2>
        <p>
          We separate ingredients, claims, warnings, sources, commercial
          relationships and consumer questions—then bring the information back
          together with visible limitations.
        </p>
        <div className="static-assembly-grid">
          {explodedViewItems.map((item) => (
            <article key={item.id}>
              <item.icon aria-hidden="true" />
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </article>
          ))}
        </div>
        <Link className="button button-light" href="/standards">
          Explore Our Standards <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
