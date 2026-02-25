"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { MotionReveal } from "./motion-reveal";
import { DeepClinicFxFrame } from "./deepclinic-fx-frame";

type Props = {
  lang?: "es" | "en" | "pt";
};

const CONTENT = {
  es: {
    title: "DeepClinic Comando de Triaje",
    description: "Llega a consulta con el caso listo. Anamnesis automática por voz y texto, clasificación y resumen clínico en minutos.",
    cta: "Ver detalle",
    chat: "Hola, para preparar su consulta, ¿podría decirme qué síntomas ha sentido hoy?",
    voice: "Voz Detectada",
    summary: "Resumen Preliminar",
    priority: "Prioridad Media",
    intake: "Intake",
    symptoms: "Síntomas",
    vitals: "Signos",
    risk: "Riesgo",
    plan: "Plan",
    ready: "Listo"
  },
  en: {
    title: "DeepClinic Triage Command",
    description: "Walk into the visit with the case prepared. Automated voice/text intake, triage, and a clean clinical summary in minutes.",
    cta: "View details",
    chat: "Hello, to prepare for your consultation, could you tell me what symptoms you have felt today?",
    voice: "Voice Detected",
    summary: "Preliminary Summary",
    priority: "Medium Priority",
    intake: "Intake",
    symptoms: "Symptoms",
    vitals: "Vitals",
    risk: "Risk",
    plan: "Plan",
    ready: "Ready"
  },
  pt: {
    title: "DeepClinic Comando de Triagem",
    description: "Entre na consulta com o caso pronto. Intake por voz/texto, triagem e resumo clínico claro em minutos.",
    cta: "Ver detalhes",
    chat: "Olá, para preparar sua consulta, poderia me dizer quais sintomas sentiu hoje?",
    voice: "Voz Detectada",
    summary: "Resumo Preliminar",
    priority: "Prioridade Média",
    intake: "Intake",
    symptoms: "Sintomas",
    vitals: "Sinais",
    risk: "Risco",
    plan: "Plano",
    ready: "Pronto"
  },
};

export function DeepClinicTriage({ lang = "es" }: Props) {
  const t = CONTENT[lang];
  const accent = "rgba(16,185,129,0.22)";
  const tone = "rgba(16,185,129,0.55)";
  const ref = useRef<HTMLElement | null>(null);
  const phaseTimeoutRef = useRef<number | null>(null);
  const [inView, setInView] = useState(false);
  const [phase, setPhase] = useState(0);
  const [voiceHeights, setVoiceHeights] = useState<number[]>(() => Array.from({ length: 16 }, () => 40));
  const capabilities =
    lang === "es"
      ? [
        "Intake por voz y texto listo para consulta",
        "Clasificación y priorización clínica en minutos",
        "Resumen preliminar para acelerar la decisión médica",
        "Escalamiento cuando detecta señales de alarma",
      ]
      : lang === "pt"
        ? [
          "Intake por voz e texto pronto para a consulta",
          "Classificação e priorização clínica em minutos",
          "Resumo preliminar para acelerar a decisão médica",
          "Escalonamento quando detecta sinais de alerta",
        ]
        : [
          "Voice + text intake ready for the visit",
          "Clinical classification and prioritization in minutes",
          "Preliminary summary to speed up medical decisions",
          "Escalation when red flags are detected",
        ];

  const phases = useMemo(
    () => [
      {
        key: "intake",
        label: t.intake,
        priority: lang === "es" ? "En evaluación" : lang === "pt" ? "Em avaliação" : "Assessing",
        priorityClass: "bg-white/10 text-white/70",
      },
      {
        key: "symptoms",
        label: t.symptoms,
        priority: t.priority,
        priorityClass: "bg-yellow-500/20 text-yellow-200",
      },
      {
        key: "vitals",
        label: t.vitals,
        priority: t.priority,
        priorityClass: "bg-yellow-500/20 text-yellow-200",
      },
      {
        key: "risk",
        label: t.risk,
        priority: lang === "es" ? "Prioridad Alta" : lang === "pt" ? "Prioridade Alta" : "High Priority",
        priorityClass: "bg-rose-500/20 text-rose-200",
      },
      {
        key: "plan",
        label: t.plan,
        priority: lang === "es" ? "Acción inmediata" : lang === "pt" ? "Ação imediata" : "Immediate action",
        priorityClass: "bg-rose-500/20 text-rose-200",
      },
      {
        key: "ready",
        label: t.ready,
        priority: lang === "es" ? "Caso listo" : lang === "pt" ? "Caso pronto" : "Case ready",
        priorityClass: "bg-emerald-500/20 text-emerald-200",
      },
    ],
    [lang, t.intake, t.plan, t.priority, t.ready, t.risk, t.symptoms, t.vitals],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (reduced) {
      setInView(true);
      setPhase(phases.length - 1);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        setInView(entry.isIntersecting);
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [phases.length]);

  useEffect(() => {
    if (!inView) return;

    let cancelled = false;
    const durations = [2300, 2400, 2400, 2400, 2400, 2400];
    const len = phases.length;

    if (phaseTimeoutRef.current) {
      window.clearTimeout(phaseTimeoutRef.current);
      phaseTimeoutRef.current = null;
    }

    setPhase(0);
    let nextIndex = 1;

    const scheduleNext = (fromIndex: number) => {
      const ms = durations[fromIndex] ?? 2400;
      phaseTimeoutRef.current = window.setTimeout(() => {
        if (cancelled) return;
        setPhase(nextIndex);
        const current = nextIndex;
        nextIndex = (nextIndex + 1) % len;
        scheduleNext(current);
      }, ms);
    };

    scheduleNext(0);

    return () => {
      cancelled = true;
      if (phaseTimeoutRef.current) {
        window.clearTimeout(phaseTimeoutRef.current);
        phaseTimeoutRef.current = null;
      }
    };
  }, [inView, phases.length]);

  useEffect(() => {
    if (!inView) return;
    const active = phases[phase]?.key;
    if (active !== "symptoms") return;

    const id = window.setInterval(() => {
      setVoiceHeights((prev) =>
        prev.map((_, i) => {
          const base = 24 + ((i % 5) * 6);
          const r = Math.random();
          return Math.max(12, Math.min(92, Math.round(base + r * 62)));
        }),
      );
    }, 140);
    return () => window.clearInterval(id);
  }, [inView, phase, phases]);

  const progress = ((phase + 1) / phases.length) * 100;
  const activePhase = phases[phase] ?? phases[0];
  const showVitals = phase >= 2;
  const showRisk = phase >= 3;
  const showPlan = phase >= 4;
  const showReady = phase >= 5;

  return (
    <section ref={ref} className="relative z-10 w-full h-[100svh] snap-start flex items-center px-6 pt-20 pb-12 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-screen-2xl">
        <MotionReveal durationMs={740} className="w-full">
          <div className="relative isolate flex min-h-[70svh] items-center overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-10 md:min-h-[74svh] md:p-14 lg:min-h-[78svh] lg:p-16">
            {/* Background Glows */}
            <div className="pointer-events-none hidden absolute -left-20 -bottom-20 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[120px]" />
            <div className="pointer-events-none hidden absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-white/[0.015] blur-[110px]" />

            <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">

              {/* Content */}
              <div className="relative z-10 max-w-xl">
                <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {t.title}
                </h3>
                <p className="mt-6 line-clamp-3 text-[13px] leading-relaxed text-white/60 md:text-[14px]">
                  {t.description}
                </p>

                <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/25">
                  <div className="border-b border-white/10 bg-white/[0.02] px-4 py-3">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                      {lang === "es" ? "Capacidades" : lang === "pt" ? "Capacidades" : "Capabilities"}
                    </div>
                  </div>
                  <div className="px-4 py-3">
                    <div className="grid gap-2">
                      {capabilities.slice(0, 4).map((b, idx) => (
                        <div
                          key={b}
                          className={
                            "flex items-start gap-3 py-2 " +
                            (idx === 0 ? "pt-0" : "") +
                            (idx < Math.min(4, capabilities.length) - 1 ? " border-b border-white/10" : "")
                          }
                        >
                          <div className="mt-[7px] h-1.5 w-1.5 rounded-full" style={{ background: tone, boxShadow: `0 0 16px ${tone}` }} />
                          <div className="text-[12.5px] leading-relaxed text-white/75">{b}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    href={`/${lang}/booking`}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80"
                  >
                    {t.cta}
                    <span className="ml-2" aria-hidden>
                      ↗
                    </span>
                  </Link>
                </div>
              </div>

              {/* Visual - Triage Simulation */}
              <div className="relative z-10">
                <DeepClinicFxFrame
                  accent={accent}
                  variant="ui"
                  className="relative mx-auto w-full max-w-[640px] xl:max-w-[720px]"
                >
                  <div className="p-7 md:p-8" style={{ transform: "translateZ(18px)" }}>
                    <div className="space-y-5">
                      <div className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3">
                        <div className="flex items-center justify-between">
                          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45" />
                          <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium text-white/65">
                            {lang === "es" ? "Paciente: Laura M. · 46" : lang === "pt" ? "Paciente: Laura M. · 46" : "Patient: Laura M. · 46"}
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                            <div className="h-full rounded-full bg-emerald-500/60" style={{ width: `${progress}%`, transition: "width 650ms ease" }} />
                          </div>
                          <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
                            {phases.map((p, i) => (
                              <div
                                key={p.key}
                                className={
                                  "rounded-full border px-2 py-1 text-center text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors " +
                                  (i <= phase
                                    ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-200"
                                    : "border-white/10 bg-white/[0.02] text-white/40")
                                }
                              >
                                {p.label}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                          <div className="space-y-4">
                            <div className="flex gap-4">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                              </div>
                              <div className="min-w-0">
                                <div className="rounded-2xl rounded-tl-none bg-white/10 p-3 text-[12px] leading-relaxed text-white/80">
                                  {t.chat}
                                </div>
                                <div className="mt-2 text-[10px] font-medium text-white/40">
                                  {lang === "es" ? "Paso 1" : lang === "pt" ? "Passo 1" : "Step 1"} · {t.intake}
                                </div>
                              </div>
                            </div>

                            <div
                              className={
                                "flex flex-col items-end gap-2 transition-all duration-500 " +
                                (phase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none")
                              }
                            >
                              <div className="flex items-center gap-2 rounded-2xl rounded-tr-none bg-emerald-500/10 px-4 py-3 border border-emerald-500/20">
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300 mr-2">{t.voice}</span>
                                <div className="flex items-end gap-[2px] h-4">
                                  {voiceHeights.map((h, i) => (
                                    <div
                                      key={i}
                                      className="w-[3px] rounded-full bg-emerald-400/60"
                                      style={{
                                        height: `${h}%`,
                                        transition: "height 180ms ease",
                                        opacity: 0.35 + (i % 5) * 0.12,
                                      }}
                                    />
                                  ))}
                                </div>
                              </div>
                              <div className="text-[10px] font-medium text-white/40">
                                {lang === "es" ? "Paso 2" : lang === "pt" ? "Passo 2" : "Step 2"} · {t.symptoms}
                              </div>
                            </div>

                            <div
                              className={
                                "rounded-2xl border border-white/10 bg-black/35 p-4 transition-all duration-500 " +
                                (phase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none")
                              }
                            >
                              <div className="flex items-center justify-between">
                                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                                  {lang === "es" ? "Extracción" : lang === "pt" ? "Extração" : "Extraction"}
                                </div>
                                <div className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[10px] font-medium text-white/60">
                                  {lang === "es" ? "2 min" : lang === "pt" ? "2 min" : "2 min"}
                                </div>
                              </div>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {[
                                  lang === "es" ? "Dolor torácico" : lang === "pt" ? "Dor torácica" : "Chest pain",
                                  lang === "es" ? "Disnea" : lang === "pt" ? "Dispneia" : "Dyspnea",
                                  lang === "es" ? "Mareo" : lang === "pt" ? "Tontura" : "Dizziness",
                                  lang === "es" ? "Inicio: 2h" : lang === "pt" ? "Início: 2h" : "Onset: 2h",
                                  lang === "es" ? "HTA" : lang === "pt" ? "HAS" : "HTN",
                                ].map((chip) => (
                                  <div
                                    key={chip}
                                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-white/70"
                                  >
                                    {chip}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">{t.summary}</span>
                            <span className={"rounded px-2 py-0.5 text-[9px] font-bold uppercase " + activePhase.priorityClass}>{activePhase.priority}</span>
                          </div>

                          <div className="mt-4 space-y-3">
                            <div className="rounded-xl border border-white/10 bg-black/30 px-3 py-3">
                              <div className="flex items-center justify-between">
                                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">{lang === "es" ? "Signos vitales" : lang === "pt" ? "Sinais vitais" : "Vitals"}</div>
                                <div className={"text-[10px] font-medium transition-opacity " + (showVitals ? "opacity-100 text-white/55" : "opacity-40 text-white/30")}>
                                  {showVitals ? (lang === "es" ? "capturados" : lang === "pt" ? "capturados" : "captured") : (lang === "es" ? "pendiente" : lang === "pt" ? "pendente" : "pending")}
                                </div>
                              </div>
                              <div className="mt-3 grid grid-cols-2 gap-2">
                                {[
                                  { k: lang === "es" ? "TA" : lang === "pt" ? "PA" : "BP", v: "168/96" },
                                  { k: lang === "es" ? "FC" : lang === "pt" ? "FC" : "HR", v: "112" },
                                  { k: "SpO₂", v: "92%" },
                                  { k: lang === "es" ? "Temp" : lang === "pt" ? "Temp" : "Temp", v: "37.1" },
                                ].map((row) => (
                                  <div
                                    key={row.k}
                                    className={
                                      "rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 transition-all duration-500 " +
                                      (showVitals ? "opacity-100" : "opacity-40")
                                    }
                                  >
                                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">{row.k}</div>
                                    <div className="mt-1 text-[13px] font-semibold tracking-tight text-white/80">{row.v}</div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div
                              className={
                                "rounded-xl border border-white/10 bg-black/30 px-3 py-3 transition-all duration-500 " +
                                (showRisk ? "opacity-100 translate-y-0" : "opacity-40 -translate-y-0.5")
                              }
                            >
                              <div className="flex items-center justify-between">
                                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                                  {lang === "es" ? "Banderas rojas" : lang === "pt" ? "Sinais de alerta" : "Red flags"}
                                </div>
                                <div className="rounded-full border border-rose-500/20 bg-rose-500/10 px-2.5 py-1 text-[10px] font-semibold text-rose-200">
                                  {showRisk ? (lang === "es" ? "Detectadas" : lang === "pt" ? "Detectadas" : "Detected") : (lang === "es" ? "Analizando" : lang === "pt" ? "Analisando" : "Analyzing")}
                                </div>
                              </div>
                              <div className="mt-3 space-y-2">
                                {[
                                  lang === "es" ? "Dolor torácico + disnea" : lang === "pt" ? "Dor torácica + dispneia" : "Chest pain + dyspnea",
                                  lang === "es" ? "SpO₂ < 94%" : lang === "pt" ? "SpO₂ < 94%" : "SpO₂ < 94%",
                                  lang === "es" ? "Taquicardia" : lang === "pt" ? "Taquicardia" : "Tachycardia",
                                ].map((item) => (
                                  <div key={item} className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-rose-400/80" />
                                    <div className="text-[12px] text-white/70">{item}</div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div
                              className={
                                "rounded-xl border border-white/10 bg-black/30 px-3 py-3 transition-all duration-500 " +
                                (showPlan ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none")
                              }
                            >
                              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                                {lang === "es" ? "Recomendación" : lang === "pt" ? "Recomendação" : "Recommendation"}
                              </div>
                              <div className="mt-3 rounded-xl border border-rose-500/15 bg-rose-500/10 px-3 py-2 text-[12px] font-semibold text-rose-100">
                                {lang === "es"
                                  ? "Derivar a urgencias. ECG y troponinas. Monitorización."
                                  : lang === "pt"
                                    ? "Encaminhar à emergência. ECG e troponinas. Monitorização."
                                    : "Refer to ER. ECG and troponins. Monitoring."}
                              </div>
                            </div>

                            <div
                              className={
                                "rounded-xl border border-white/10 bg-white/[0.02] p-3 transition-all duration-500 " +
                                (showReady ? "opacity-100" : "opacity-0 pointer-events-none")
                              }
                            >
                              <div className="flex items-center justify-between">
                                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                                  {lang === "es" ? "Caso para consulta" : lang === "pt" ? "Caso para consulta" : "Visit-ready"}
                                </div>
                                <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-200">
                                  {lang === "es" ? "Listo" : lang === "pt" ? "Pronto" : "Ready"}
                                </div>
                              </div>
                              <div className="mt-3 space-y-2">
                                {[0, 1, 2].map((i) => (
                                  <div key={i} className="h-1.5 w-full rounded-full bg-white/10" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DeepClinicFxFrame>
              </div>

            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
