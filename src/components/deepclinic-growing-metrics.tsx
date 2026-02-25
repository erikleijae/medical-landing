"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  locale?: string;
  fromValue?: number;
  toValue?: number;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function resolveNumberLocale(locale?: string) {
  if (!locale) return undefined;
  if (locale.includes("-")) return locale;
  if (locale === "es") return "es-MX";
  if (locale === "en") return "en-US";
  if (locale === "pt") return "pt-BR";
  return locale;
}

export function DeepClinicGrowingMetrics({
  locale = "es",
  fromValue = 100_000_000,
  toValue = 100_000_033,
}: Props) {
  const [value, setValue] = useState(fromValue);
  const [orbitScale, setOrbitScale] = useState(1);
  const startedRef = useRef(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const numberFormatter = useMemo(() => {
    const resolved = resolveNumberLocale(locale);
    return new Intl.NumberFormat(resolved, { maximumFractionDigits: 0 });
  }, [locale]);

  const formatted = useMemo(() => numberFormatter.format(value), [numberFormatter, value]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    let raf: number | null = null;
    let intervalId: number | null = null;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const durationMs = reduced ? 0 : 2200;
      const startAt = performance.now();
      const startValue = fromValue;
      const endValue = toValue;

      const tick = (now: number) => {
        const t = durationMs === 0 ? 1 : Math.min(1, (now - startAt) / durationMs);
        const eased = easeOutCubic(t);
        const next = Math.round(startValue + (endValue - startValue) * eased);
        setValue(next);

        if (t < 1) {
          raf = requestAnimationFrame(tick);
          return;
        }

        if (!reduced) {
          intervalId = window.setInterval(() => {
            setValue((prev) => prev + 1);
          }, 650);
        }
      };

      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) start();
      },
      { threshold: 0.45 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (raf != null) cancelAnimationFrame(raf);
      if (intervalId != null) window.clearInterval(intervalId);
    };
  }, [fromValue, toValue]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mqMd = window.matchMedia("(min-width: 768px)");
    const mqLg = window.matchMedia("(min-width: 1024px)");

    const compute = () => {
      setOrbitScale(mqLg.matches ? 1 : mqMd.matches ? 0.82 : 0.5);
    };

    compute();

    const handler = () => compute();

    mqMd.addEventListener("change", handler);
    mqLg.addEventListener("change", handler);

    return () => {
      mqMd.removeEventListener("change", handler);
      mqLg.removeEventListener("change", handler);
    };
  }, []);

  const avatars = useMemo(
    () => [
      {
        src: "/doctors/67b19236e3a3611ed6065a9b_01%20animation%20img.avif",
        x: -260,
        y: -10,
        rotate: -10,
        size: "h-[62px] w-[62px] lg:h-[78px] lg:w-[78px]",
        visibility: "hidden md:block",
        delay: "-0.6s",
      },
      {
        src: "/doctors/67b19235807867cccd9a5006_03%20animation%20img.avif",
        x: -140,
        y: -150,
        rotate: 6,
        size: "h-[58px] w-[58px] lg:h-[72px] lg:w-[72px]",
        visibility: "hidden md:block",
        delay: "-1.4s",
      },
      {
        src: "/doctors/67b19235d44d8582c04e31fd_05%20animation%20img.avif",
        x: -10,
        y: -220,
        rotate: 10,
        size: "h-[56px] w-[56px] lg:h-[70px] lg:w-[70px]",
        visibility: "hidden md:block",
        delay: "-2.0s",
      },
      {
        src: "/doctors/67b192356ced5afd78c13178_09%20animation%20img.avif",
        x: 135,
        y: -180,
        rotate: -8,
        size: "h-[58px] w-[58px] lg:h-[72px] lg:w-[72px]",
        visibility: "hidden md:block",
        delay: "-0.9s",
      },
      {
        src: "/doctors/67b19235c56540b2db753a22_10%20animation%20img.avif",
        x: 255,
        y: -80,
        rotate: 8,
        size: "h-[62px] w-[62px] lg:h-[78px] lg:w-[78px]",
        visibility: "hidden md:block",
        delay: "-1.8s",
      },
      {
        src: "/doctors/67b19235a4b91a892ffe97a7_17%20animation%20img.avif",
        x: 215,
        y: -30,
        rotate: -6,
        size: "h-[66px] w-[66px] lg:h-[84px] lg:w-[84px]",
        visibility: "hidden md:block",
        delay: "-2.4s",
      },
    ],
    [],
  );

  return (
    <div ref={ref} className="relative w-full">
      <div className="relative mx-auto w-full max-w-screen-2xl">
        {avatars.map((a) => (
          <div
            key={a.src}
            className={
              a.visibility +
              " pointer-events-none z-0 absolute"
            }
            style={{
              left: "50%",
              top: "28%",
              transform: `translate(-50%, -50%) translate(${a.x * orbitScale}px, ${a.y * orbitScale}px) rotate(${a.rotate}deg)`,
            }}
          >
            <div
              className={
                "relative overflow-hidden rounded-full border border-white/10 bg-white/[0.03] shadow-2xl " +
                a.size
              }
              style={{
                animation: "dc_bob 9.5s ease-in-out infinite",
                animationDelay: a.delay,
                willChange: "transform",
              }}
            >
              <Image src={a.src} alt="" fill className="object-cover" sizes="(min-width: 1024px) 84px, 66px" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]" />
            </div>
          </div>
        ))}

        <div className="relative z-10 flex min-h-[70svh] w-full flex-col justify-center overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.02] p-12 text-center shadow-[0_40px_160px_rgba(0,0,0,0.55)] md:min-h-[76svh] md:p-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_30%,rgba(255,255,255,0.08),transparent_66%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(120%_110%_at_50%_105%,rgba(255,140,64,0.18),transparent_62%)]" />
            <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />
            <div className="dc_motion absolute inset-0 opacity-0" style={{ backgroundImage: "linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.10) 45%, transparent 60%)", backgroundSize: "200% 100%", animation: "dc_shimmer 14s ease-in-out infinite" }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/35" />
          </div>

          <div className="relative z-30">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-5 py-2.5 text-[10px] font-semibold tracking-[0.25em] text-white/55">
              OMNI-CHANNEL ENGAGEMENT
            </div>

            <div className="mt-8 text-[clamp(60px,8.8vw,122px)] font-semibold tracking-tight text-white tabular-nums">
              {formatted}
            </div>
            <div className="mx-auto mt-5 max-w-2xl text-[15px] font-medium text-white/60 md:text-[17px]">
              interacciones omnicanal con <span className="text-white/85">DeepClinic Agents</span>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 text-left md:p-8">
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(90%_80%_at_20%_20%,rgba(56,189,248,0.14),transparent_60%)]" />
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-semibold text-white">+48%</div>
                    <div className="h-9 w-9 rounded-xl border border-white/10 bg-black/30" />
                  </div>
                  <div className="mt-2 text-[13px] text-white/55">Capacidad operativa</div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 text-left md:p-8">
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(90%_80%_at_20%_20%,rgba(255,140,64,0.16),transparent_60%)]" />
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-semibold text-white">24/7/365</div>
                    <div className="h-9 w-9 rounded-xl border border-white/10 bg-black/30" />
                  </div>
                  <div className="mt-2 text-[13px] text-white/55">Acceso y respuesta</div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 text-left md:p-8">
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(90%_80%_at_20%_20%,rgba(34,197,94,0.14),transparent_60%)]" />
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-semibold text-white">29</div>
                    <div className="h-9 w-9 rounded-xl border border-white/10 bg-black/30" />
                  </div>
                  <div className="mt-2 text-[13px] text-white/55">Idiomas disponibles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
