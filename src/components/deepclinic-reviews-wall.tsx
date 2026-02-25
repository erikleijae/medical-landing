"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Review = {
  initials: string;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  quote: string;
  product: string;
  accent: string;
};

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mql) return;
    const update = () => setReducedMotion(mql.matches);
    update();
    mql.addEventListener?.("change", update);
    return () => mql.removeEventListener?.("change", update);
  }, []);

  return reducedMotion;
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="relative w-[320px] shrink-0 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.02] p-5">
      <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: `radial-gradient(85% 80% at 30% 18%, ${r.accent}, transparent 68%)` }} />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-[12px] font-semibold text-white/80">
              {r.initials}
            </div>
            <div>
              <div className="text-[12px] font-semibold leading-snug text-white/85">{r.name}</div>
              <div className="mt-1 text-[11px] leading-snug text-white/50">
                {r.specialty} · {r.location}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1" aria-hidden>
            {Array.from({ length: r.rating }).map((_, idx) => (
              <span key={idx} className="text-[11px] leading-none text-emerald-300">
                ★
              </span>
            ))}
          </div>
        </div>

        <p className="mt-4 text-[12.5px] leading-relaxed text-white/60">“{r.quote}”</p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
            {r.product}
          </div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">DeepClinic</div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  speedPxPerSec,
  direction,
  className,
}: {
  items: readonly Review[];
  speedPxPerSec: number;
  direction: 1 | -1;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const widthRef = useRef(0);
  const offsetRef = useRef(0);
  const lastTRef = useRef<number | null>(null);
  const [inView, setInView] = useState(true);

  const sequence = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        setInView(entry.isIntersecting);
      },
      { threshold: 0.05, rootMargin: "260px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const w = track.scrollWidth / 2;
      widthRef.current = Number.isFinite(w) && w > 0 ? w : 0;
      if (widthRef.current > 0 && offsetRef.current === 0) {
        offsetRef.current = direction === 1 ? -widthRef.current : 0;
      }
    };

    measure();

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    ro?.observe(track);
    window.addEventListener("resize", measure);

    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [direction, items.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (reducedMotion || !inView) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTRef.current = null;
      return;
    }

    const tick = (t: number) => {
      const w = widthRef.current;
      const lastT = lastTRef.current;
      lastTRef.current = t;

      if (w > 0 && lastT != null) {
        const dt = Math.min(48, t - lastT) / 1000;
        offsetRef.current += direction * speedPxPerSec * dt;

        if (direction === 1) {
          while (offsetRef.current >= 0) offsetRef.current -= w;
          while (offsetRef.current < -w) offsetRef.current += w;
        } else {
          while (offsetRef.current <= -w) offsetRef.current += w;
          while (offsetRef.current > 0) offsetRef.current -= w;
        }

        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      } else if (w > 0 && lastT == null) {
        if (direction === 1 && offsetRef.current === 0) offsetRef.current = -w;
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTRef.current = null;
    };
  }, [direction, inView, reducedMotion, speedPxPerSec]);

  return (
    <div ref={containerRef} className={"relative overflow-hidden " + (className ?? "")}> 
      <div ref={trackRef} className="flex w-max items-stretch gap-4 will-change-transform">
        {sequence.map((r, idx) => (
          <ReviewCard key={`${r.initials}-${r.product}-${idx}`} r={r} />
        ))}
      </div>
    </div>
  );
}

export function DeepClinicReviewsWall({ reviews }: { reviews: readonly Review[] }) {
  const rowA = useMemo(() => reviews.filter((_, idx) => idx % 2 === 0), [reviews]);
  const rowB = useMemo(() => reviews.filter((_, idx) => idx % 2 === 1), [reviews]);

  return (
    <div
      className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02]"
      style={{
        WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
        maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "radial-gradient(70% 60% at 30% 22%, rgba(16,185,129,0.10), transparent 60%), radial-gradient(70% 70% at 70% 70%, rgba(56,189,248,0.10), transparent 60%)" }} />
      <div className="relative px-6 py-6">
        <div className="flex flex-col gap-5">
          <MarqueeRow items={rowA.length ? rowA : reviews} speedPxPerSec={22} direction={1} />
          <MarqueeRow items={rowB.length ? rowB : reviews} speedPxPerSec={18} direction={1} className="opacity-90" />
        </div>
      </div>
    </div>
  );
}
