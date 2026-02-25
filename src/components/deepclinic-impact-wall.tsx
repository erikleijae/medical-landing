"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MotionReveal } from "./motion-reveal";

type Props = {
  lang?: "es" | "en" | "pt";
};

type StatKey = "consultations" | "countries" | "interactions" | "hours";

type Stat = {
  key: StatKey;
  label: string;
  value: number;
  plus?: boolean;
  live?: {
    everyMs: number;
    step: number;
    maxExtra?: number;
  };
};

function formatNumber(value: number, lang: "es" | "en" | "pt") {
  const locale = lang === "es" ? "es-MX" : lang === "pt" ? "pt-BR" : "en-US";
  return new Intl.NumberFormat(locale).format(Math.max(0, Math.round(value)));
}

export function DeepClinicImpactWall({ lang = "es" }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  const copy =
    lang === "es"
      ? {
        eyebrow: "[ IMPACTO ]",
        title: "Más de 1.2M consultas clínicas. 30M+ interacciones.",
        description:
          "Métricas reales de uso: alcance global, flujo continuo y horas ahorradas cada semana.",
      }
      : lang === "pt"
        ? {
          eyebrow: "[ IMPACTO ]",
          title: "Mais de 1,2M consultas clínicas. 30M+ interações.",
          description: "Métricas reais de uso: alcance global, fluxo contínuo e horas economizadas toda semana.",
        }
        : {
          eyebrow: "[ IMPACT ]",
          title: "1.2M+ clinical consultations. 30M+ interactions.",
          description: "Real usage metrics: global reach, continuous flow, and hours saved week after week.",
        };

  const stats = useMemo<readonly Stat[]>(() => {
    const base: readonly Stat[] =
      lang === "es"
        ? [
          {
            key: "consultations",
            label: "Consultas clínicas",
            value: 1_200_000,
            plus: true,
            live: { everyMs: 550, step: 7, maxExtra: 22_000 },
          },
          { key: "countries", label: "Países", value: 35, plus: true },
          {
            key: "interactions",
            label: "Interacciones",
            value: 30_000_000,
            plus: true,
            live: { everyMs: 420, step: 220, maxExtra: 1_200_000 },
          },
          {
            key: "hours",
            label: "Horas ahorradas",
            value: 240_000,
            plus: true,
            live: { everyMs: 900, step: 4, maxExtra: 12_000 },
          },
        ]
        : lang === "pt"
          ? [
            {
              key: "consultations",
              label: "Consultas clínicas",
              value: 1_200_000,
              plus: true,
              live: { everyMs: 550, step: 7, maxExtra: 22_000 },
            },
            { key: "countries", label: "Países", value: 35, plus: true },
            {
              key: "interactions",
              label: "Interações",
              value: 30_000_000,
              plus: true,
              live: { everyMs: 420, step: 220, maxExtra: 1_200_000 },
            },
            {
              key: "hours",
              label: "Horas economizadas",
              value: 240_000,
              plus: true,
              live: { everyMs: 900, step: 4, maxExtra: 12_000 },
            },
          ]
          : [
            {
              key: "consultations",
              label: "Clinical consultations",
              value: 1_200_000,
              plus: true,
              live: { everyMs: 550, step: 7, maxExtra: 22_000 },
            },
            { key: "countries", label: "Countries", value: 35, plus: true },
            {
              key: "interactions",
              label: "Interactions",
              value: 30_000_000,
              plus: true,
              live: { everyMs: 420, step: 220, maxExtra: 1_200_000 },
            },
            {
              key: "hours",
              label: "Hours saved",
              value: 240_000,
              plus: true,
              live: { everyMs: 900, step: 4, maxExtra: 12_000 },
            },
          ];
    return base;
  }, [lang]);

  const [values, setValues] = useState<Record<StatKey, number>>(() => ({
    consultations: Math.max(0, stats[0]?.value ? stats[0].value * 0.78 : 0),
    countries: Math.max(0, stats[1]?.value ? stats[1].value : 0),
    interactions: Math.max(0, stats[2]?.value ? stats[2].value * 0.92 : 0),
    hours: Math.max(0, stats[3]?.value ? stats[3].value * 0.84 : 0),
  }));

  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setHasStarted(true);
      setValues({
        consultations: stats.find((s) => s.key === "consultations")?.value ?? 0,
        countries: stats.find((s) => s.key === "countries")?.value ?? 0,
        interactions: stats.find((s) => s.key === "interactions")?.value ?? 0,
        hours: stats.find((s) => s.key === "hours")?.value ?? 0,
      });
      return;
    }

    const el = sectionRef.current;
    if (!el) return;

    const root = document.querySelector("main.dc_perf") as HTMLElement | null;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.disconnect();
            break;
          }
        }
      },
      {
        root,
        threshold: 0.32,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion, stats]);

  useEffect(() => {
    if (!hasStarted) return;

    const el = sectionRef.current;
    if (!el) return;

    const targets: Record<StatKey, number> = {
      consultations: stats.find((s) => s.key === "consultations")?.value ?? 0,
      countries: stats.find((s) => s.key === "countries")?.value ?? 0,
      interactions: stats.find((s) => s.key === "interactions")?.value ?? 0,
      hours: stats.find((s) => s.key === "hours")?.value ?? 0,
    };

    const startValues = { ...values };
    const durationMs = 1300;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValues({
        consultations: startValues.consultations + (targets.consultations - startValues.consultations) * eased,
        countries: startValues.countries + (targets.countries - startValues.countries) * eased,
        interactions: startValues.interactions + (targets.interactions - startValues.interactions) * eased,
        hours: startValues.hours + (targets.hours - startValues.hours) * eased,
      });

      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    if (reducedMotion) return;

    const el = sectionRef.current;
    if (!el) return;

    const baseTargets: Record<StatKey, number> = {
      consultations: stats.find((s) => s.key === "consultations")?.value ?? 0,
      countries: stats.find((s) => s.key === "countries")?.value ?? 0,
      interactions: stats.find((s) => s.key === "interactions")?.value ?? 0,
      hours: stats.find((s) => s.key === "hours")?.value ?? 0,
    };

    const maxExtra: Record<StatKey, number> = {
      consultations: stats.find((s) => s.key === "consultations")?.live?.maxExtra ?? 0,
      countries: 0,
      interactions: stats.find((s) => s.key === "interactions")?.live?.maxExtra ?? 0,
      hours: stats.find((s) => s.key === "hours")?.live?.maxExtra ?? 0,
    };

    const timers: number[] = [];

    for (const s of stats) {
      if (!s.live) continue;
      const { everyMs, step } = s.live;
      const id = window.setInterval(() => {
        if (document.hidden) return;
        if (el.getAttribute("data-dc-active") !== "true") return;

        setValues((prev) => {
          const current = prev[s.key];
          const base = baseTargets[s.key];
          const extraCap = maxExtra[s.key];
          const allowedMax = base + extraCap;
          const next = Math.min(allowedMax, current + step);
          if (next === current) return prev;
          return { ...prev, [s.key]: next };
        });
      }, everyMs);
      timers.push(id);
    }

    return () => {
      for (const id of timers) window.clearInterval(id);
    };
  }, [hasStarted, reducedMotion, stats]);

  return (
    <section ref={sectionRef} className="relative z-10 h-[100svh] snap-start flex items-center">
      <div className="mx-auto flex h-[100svh] w-full max-w-7xl flex-col justify-center px-6 pt-24 pb-16 md:px-8 lg:px-10">
        <MotionReveal durationMs={760} className="w-full">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-[10px] font-semibold tracking-[0.25em] text-white/35">{copy.eyebrow}</div>
            <h2 className="mt-7 text-balance text-[clamp(34px,4.6vw,60px)] font-semibold leading-[0.95] tracking-tight text-white">
              {copy.title}
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-white/60">{copy.description}</p>
          </div>

          <div className="mt-12 relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_20%,rgba(255,255,255,0.06),transparent_68%)]" />
              <div className="absolute inset-0 opacity-[0.55]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "140px 92px" }} />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/35" />
            </div>

            <div className="relative grid md:grid-cols-2">
              {stats.map((s, idx) => {
                const isTop = idx < 2;
                const isLeft = idx % 2 === 0;
                const borderClasses =
                  (isTop ? "border-b border-white/10 " : "") +
                  (isLeft ? "md:border-r md:border-white/10 " : "") +
                  "border-white/10";

                const accent =
                  s.key === "consultations"
                    ? "rgba(56,189,248,0.55)"
                    : s.key === "countries"
                      ? "rgba(168,85,247,0.55)"
                      : s.key === "interactions"
                        ? "rgba(34,197,94,0.55)"
                        : "rgba(244,63,94,0.55)";

                const value = values[s.key];
                const rendered = formatNumber(value, lang);

                return (
                  <div key={s.key} className={"relative p-7 md:p-10 " + borderClasses}>
                    <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: `radial-gradient(75% 70% at 30% 18%, ${accent}, transparent 62%)` }} />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">{s.label}</div>
                        <div className="flex items-center gap-2">
                          {s.live ? (
                            <div className="h-2 w-2 rounded-full" style={{ background: "rgba(255,255,255,0.18)", boxShadow: `0 0 14px ${accent}` }} />
                          ) : null}
                          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">{s.plus ? "+" : ""}</div>
                        </div>
                      </div>

                      <div className="mt-6 flex items-baseline gap-2">
                        <div className="tabular-nums text-[clamp(38px,5.2vw,64px)] font-semibold leading-none tracking-tight text-white">
                          {rendered}
                        </div>
                        {s.plus ? <div className="text-[clamp(18px,2.2vw,26px)] font-semibold text-white/55">+</div> : null}
                      </div>

                      <div className="mt-4 h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />

                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-[12px] font-medium text-white/55">
                          {lang === "es" ? "Actualizado en tiempo real" : lang === "pt" ? "Atualizado em tempo real" : "Updated in real time"}
                        </div>
                        <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                          DeepClinic
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
