"use client";

import Link from "next/link";
import { MotionReveal } from "./motion-reveal";
import { DeepClinicFxFrame } from "./deepclinic-fx-frame";

const AGENTS_VIDEO = "/video/deep.mp4";

type Props = {
  lang?: "es" | "en" | "pt";
};

const CONTENT = {
  es: {
    title: "DeepClinic Agentes Omnicanal",
    description: "Responde llamadas y WhatsApp con agentes de IA entrenados por especialidad. Aumenta tu capacidad operativa hasta 48% y mejora el acceso 24/7/365.",
    cta: "Ver detalle",
  },
  en: {
    title: "DeepClinic Omnichannel Agents",
    description: "Answer patient calls & WhatsApp with specialty-trained agentic AI. Increase labor capacity by 48% and elevate access 24/7/365.",
    cta: "View details",
  },
  pt: {
    title: "DeepClinic Agentes Omnicanal",
    description: "Atenda chamadas e WhatsApp com IA agentic treinada por especialidade. Aumente a capacidade em 48% e eleve o acesso 24/7/365.",
    cta: "Ver detalhes",
  },
};

export function DeepClinicReception({ lang = "es" }: Props) {
  const t = CONTENT[lang];
  const accent = "rgba(56,189,248,0.22)";
  const painPoints =
    lang === "es"
      ? ["Llamadas perdidas", "WhatsApp saturado", "Sin seguimiento"]
      : lang === "pt"
        ? ["Chamadas perdidas", "WhatsApp saturado", "Sem acompanhamento"]
        : ["Missed calls", "WhatsApp overload", "No follow-up"];
  const metrics =
    lang === "es"
      ? [
        { label: "Capacidad", value: "+48%" },
        { label: "Acceso", value: "24/7" },
        { label: "Días", value: "365" },
      ]
      : lang === "pt"
        ? [
          { label: "Capacidade", value: "+48%" },
          { label: "Acesso", value: "24/7" },
          { label: "Dias", value: "365" },
        ]
        : [
          { label: "Capacity", value: "+48%" },
          { label: "Access", value: "24/7" },
          { label: "Days", value: "365" },
        ];
  return (
    <section className="relative z-10 w-full h-[100svh] snap-start snap-always flex items-center px-6 pt-20 pb-12 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-screen-2xl">
        <MotionReveal durationMs={740} className="w-full">
          <div className="relative isolate flex min-h-[70svh] items-center overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-10 md:min-h-[74svh] md:p-14 lg:min-h-[78svh] lg:p-16">
            {/* Background Glow */}
            <div className="pointer-events-none hidden absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
            <div className="pointer-events-none hidden absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[80px]" />
            <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              {/* Content */}
              <div className="relative z-10 max-w-xl">
                <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {t.title}
                </h3>
                <p className="mt-6 line-clamp-3 text-[13px] leading-relaxed text-white/60 md:text-[14px]">
                  {t.description}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-5">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 sm:col-span-2">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                      {lang === "es" ? "Dolor" : lang === "pt" ? "Dor" : "Pain"}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {painPoints.slice(0, 3).map((p) => (
                        <div
                          key={p}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] font-medium text-white/75"
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ background: "rgba(255,255,255,0.24)", boxShadow: `0 0 18px ${accent}` }}
                          />
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 sm:col-span-3">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                      {lang === "es" ? "Impacto" : lang === "pt" ? "Impacto" : "Impact"}
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {metrics.slice(0, 3).map((m, mi) => {
                        const barSets = [
                          [24, 52, 34, 74, 42],
                          [38, 28, 66, 44, 58],
                          [30, 60, 40, 54, 36],
                        ] as const;
                        const bars = barSets[mi % barSets.length];
                        const raw = String(m.value);
                        const space = raw.indexOf(" ");
                        const main = space === -1 ? raw : raw.slice(0, space);
                        const unit = space === -1 ? "" : raw.slice(space + 1);
                        return (
                          <div
                            key={m.label}
                            className="relative min-w-0 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] px-3 py-3 sm:px-4"
                          >
                            <div
                              className="pointer-events-none absolute inset-0 opacity-70"
                              style={{
                                background: `radial-gradient(80% 90% at 30% 25%, ${accent}, transparent 62%)`,
                              }}
                            />
                            <div className="flex min-w-0 items-baseline gap-2 whitespace-nowrap">
                              <span
                                className="tabular-nums text-[20px] font-semibold leading-none tracking-tight text-white/90 sm:text-[22px] md:text-[24px] lg:text-[28px]"
                                style={{ textShadow: `0 0 28px ${accent}` }}
                              >
                                {main}
                              </span>
                              {unit ? <span className="text-[10px] font-semibold tracking-tight text-white/70 sm:text-[11px]">{unit}</span> : null}
                            </div>

                            <div className="mt-3 flex h-[22px] items-end gap-1.5">
                              {bars.map((h, bi) => (
                                <div
                                  key={bi}
                                  className="dc_motion w-1.5 origin-bottom rounded-full"
                                  style={{
                                    height: `${h}%`,
                                    background: `linear-gradient(180deg, rgba(255,255,255,0.12), ${accent})`,
                                    boxShadow: `0 0 14px ${accent}`,
                                    animation: "dc_metric_bar 2.8s ease-in-out infinite",
                                    animationDelay: `${-0.25 - (mi * 0.4 + bi * 0.12)}s`,
                                    willChange: "transform, opacity",
                                  }}
                                />
                              ))}
                              <div className="ml-auto h-px w-6 bg-white/10" />
                            </div>

                            <div className="mt-2 truncate text-[8px] font-semibold uppercase tracking-[0.22em] text-white/45 sm:text-[9px]">
                              {m.label}
                            </div>
                            <div
                              className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-80"
                              style={{ background: `linear-gradient(90deg, transparent 0%, ${accent} 50%, transparent 100%)` }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    href={`/${lang}/desk`}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80"
                  >
                    {t.cta}
                    <span className="ml-2" aria-hidden>
                      ↗
                    </span>
                  </Link>
                </div>
              </div>

              {/* UI Mockup Visual */}
              <div className="relative z-10">
                <DeepClinicFxFrame
                  accent={accent}
                  variant="video"
                  className="relative mx-auto w-full max-w-[640px] xl:max-w-[720px]"
                >
                  <video
                    className="h-auto w-full object-cover aspect-[4/3]"
                    src={AGENTS_VIDEO}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-label={
                      lang === "es"
                        ? "Demo de agentes omnicanal (audio y WhatsApp) de DeepClinic"
                        : lang === "pt"
                          ? "Demonstração de agentes omnicanal (áudio e WhatsApp) da DeepClinic"
                          : "DeepClinic omnichannel agents demo (audio and WhatsApp)"
                    }
                  />
                </DeepClinicFxFrame>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
