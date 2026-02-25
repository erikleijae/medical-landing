"use client";

import Link from "next/link";
import { MotionReveal } from "./motion-reveal";
import { DeepClinicFxFrame } from "./deepclinic-fx-frame";

type Props = {
  lang?: "es" | "en" | "pt";
};

const CONTENT = {
  es: {
    title: "DeepClinic Historial Clínico Universal",
    description: "Encuentra lo crítico en segundos. Diagnósticos, tratamientos y seguimiento en un solo lugar, seguro y siempre disponible.",
    cta: "Ver detalle"
  },
  en: {
    title: "DeepClinic Unified Health Record",
    description: "Find critical information in seconds. Diagnoses, treatments, and follow-up in one secure, always-available record.",
    cta: "View details"
  },
  pt: {
    title: "DeepClinic Prontuário Clínico Universal",
    description: "Encontre o que importa em segundos. Diagnósticos, tratamentos e acompanhamento em um único prontuário seguro e sempre disponível.",
    cta: "Ver detalhes"
  },
};

export function DeepClinicHistory({ lang = "es" }: Props) {
  const t = CONTENT[lang];
  const accent = "rgba(56,189,248,0.22)";
  const tone = "rgba(56,189,248,0.55)";
  const capabilities =
    lang === "es"
      ? [
        "Línea de tiempo clínica unificada en un solo lugar",
        "Búsqueda instantánea por diagnósticos, labs e imágenes",
        "Trazabilidad y contexto para decisiones más seguras",
        "Acceso seguro para equipos y cuidadores autorizados",
      ]
      : lang === "pt"
        ? [
          "Linha do tempo clínica unificada em um só lugar",
          "Busca instantânea por diagnósticos, exames e imagens",
          "Rastreabilidade e contexto para decisões mais seguras",
          "Acesso seguro para equipes e cuidadores autorizados",
        ]
        : [
          "Unified clinical timeline in one place",
          "Instant search across diagnoses, labs, and imaging",
          "Traceability and context for safer decisions",
          "Secure access for teams and authorized caregivers",
        ];
  const ui =
    lang === "es"
      ? {
        uhr: "HISTORIAL CLÍNICO UNIVERSAL",
        patient: "Paciente",
        secure: "Seguro",
        connected: "Conectado a",
        timeline: "LÍNEA DE TIEMPO",
        last30: "Últimos 30 días",
        dx: "DIAGNÓSTICOS",
        active: "Activos",
        meds: "MEDICACIÓN",
        today: "HOY",
        consult: "Consulta",
        labs: "Labs",
        imaging: "Imagen",
        er: "Urgencias",
      }
      : lang === "pt"
        ? {
          uhr: "PRONTUÁRIO CLÍNICO UNIVERSAL",
          patient: "Paciente",
          secure: "Seguro",
          connected: "Conectado a",
          timeline: "LINHA DO TEMPO",
          last30: "Últimos 30 dias",
          dx: "DIAGNÓSTICOS",
          active: "Ativos",
          meds: "MEDICAÇÃO",
          today: "HOJE",
          consult: "Consulta",
          labs: "Exames",
          imaging: "Imagem",
          er: "Emergência",
        }
        : {
          uhr: "UNIFIED HEALTH RECORD",
          patient: "Patient",
          secure: "Secure",
          connected: "Connected to",
          timeline: "TIMELINE",
          last30: "Last 30 days",
          dx: "DIAGNOSES",
          active: "Active",
          meds: "MEDICATIONS",
          today: "TODAY",
          consult: "Visit",
          labs: "Labs",
          imaging: "Imaging",
          er: "Emergency",
        };

  const systems =
    lang === "es"
      ? ["HIS/EMR", "LIS", "PACS", "Farmacia", "Aseguradoras", "Wearables"]
      : lang === "pt"
        ? ["HIS/EMR", "LIS", "PACS", "Farmácia", "Seguradoras", "Wearables"]
        : ["HIS/EMR", "LIS", "PACS", "Pharmacy", "Claims", "Wearables"];

  const integrationNodes =
    lang === "es"
      ? [
        { label: "HIS/EMR", x: 14, y: 16, delay: "-0.2s" },
        { label: "PACS", x: 86, y: 18, delay: "-1.2s" },
        { label: "LIS", x: 10, y: 60, delay: "-2.2s" },
        { label: "Farmacia", x: 90, y: 62, delay: "-3.1s" },
        { label: "Aseguradoras", x: 32, y: 90, delay: "-4.0s" },
        { label: "Wearables", x: 70, y: 92, delay: "-4.8s" },
      ]
      : lang === "pt"
        ? [
          { label: "HIS/EMR", x: 14, y: 16, delay: "-0.2s" },
          { label: "PACS", x: 86, y: 18, delay: "-1.2s" },
          { label: "LIS", x: 10, y: 60, delay: "-2.2s" },
          { label: "Farmácia", x: 90, y: 62, delay: "-3.1s" },
          { label: "Seguradoras", x: 32, y: 90, delay: "-4.0s" },
          { label: "Wearables", x: 70, y: 92, delay: "-4.8s" },
        ]
        : [
          { label: "HIS/EMR", x: 14, y: 16, delay: "-0.2s" },
          { label: "PACS", x: 86, y: 18, delay: "-1.2s" },
          { label: "LIS", x: 10, y: 60, delay: "-2.2s" },
          { label: "Pharmacy", x: 90, y: 62, delay: "-3.1s" },
          { label: "Claims", x: 32, y: 90, delay: "-4.0s" },
          { label: "Wearables", x: 70, y: 92, delay: "-4.8s" },
        ];
  return (
    <section className="dc_keep_motion relative z-10 w-full h-[100svh] snap-start flex items-center px-6 pt-20 pb-12 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-screen-2xl">
        <MotionReveal durationMs={740} className="w-full">
          <div className="relative isolate flex min-h-[70svh] items-center overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-10 md:min-h-[74svh] md:p-14 lg:min-h-[78svh] lg:p-16">

            <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">

              {/* Visual - Left Side for variety */}
              <div className="relative z-10 order-2">
                <DeepClinicFxFrame
                  accent={accent}
                  variant="ui"
                  shimmer={false}
                  className="relative mx-auto w-full max-w-[640px] xl:max-w-[720px]"
                >
                  <div className="p-7 md:p-8" style={{ transform: "translateZ(18px)" }}>
                    <div
                      className="dc_motion pointer-events-none absolute inset-x-0 top-0 h-14 opacity-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 0%, rgba(56,189,248,0.18) 45%, transparent 100%)",
                        animation: "dc_scan_y 7.8s ease-in-out infinite",
                      }}
                    />
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60">
                      <div
                        className="pointer-events-none absolute inset-0 opacity-70"
                        style={{
                          background:
                            "radial-gradient(80% 70% at 30% 20%, rgba(56,189,248,0.14), transparent 62%), radial-gradient(60% 60% at 70% 60%, rgba(255,255,255,0.05), transparent 64%)",
                        }}
                      />

                      <div className="pointer-events-none absolute inset-0">
                        <svg
                          className="absolute inset-0 h-full w-full"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient id="dc_his_flow" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0%" stopColor="rgba(56,189,248,0.02)" />
                              <stop offset="45%" stopColor="rgba(56,189,248,0.22)" />
                              <stop offset="70%" stopColor="rgba(255,255,255,0.10)" />
                              <stop offset="100%" stopColor="rgba(56,189,248,0.04)" />
                            </linearGradient>
                            <radialGradient id="dc_his_core" cx="50%" cy="50%" r="60%">
                              <stop offset="0%" stopColor="rgba(56,189,248,0.18)" />
                              <stop offset="55%" stopColor="rgba(56,189,248,0.08)" />
                              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                            </radialGradient>
                          </defs>

                          <circle cx="50" cy="50" r="18" fill="url(#dc_his_core)" opacity="0.9" />

                          {integrationNodes.map((n) => {
                            const d = `M ${n.x} ${n.y} L 50 50`;
                            return (
                              <g key={n.label}>
                                <path
                                  d={d}
                                  fill="none"
                                  stroke="rgba(255,255,255,0.06)"
                                  strokeWidth="0.6"
                                />
                                <path
                                  d={d}
                                  fill="none"
                                  stroke="url(#dc_his_flow)"
                                  strokeWidth="0.9"
                                  strokeLinecap="round"
                                  strokeDasharray="2 7"
                                  className="dc_motion"
                                  style={{
                                    animation: "dc_dash_flow 6.2s linear infinite",
                                    animationDelay: n.delay,
                                  }}
                                />
                              </g>
                            );
                          })}

                          <circle
                            cx="50"
                            cy="50"
                            r="2.2"
                            fill="rgba(56,189,248,0.55)"
                            className="dc_motion"
                            style={{
                              animation: "dc_soft_pulse 3.2s ease-in-out infinite",
                              filter: "drop-shadow(0 0 10px rgba(56,189,248,0.35))",
                            }}
                          />
                        </svg>

                        {integrationNodes.map((n) => (
                          <div
                            key={`${n.label}-chip`}
                            className="dc_motion absolute rounded-full border border-white/10 bg-black/55 px-2.5 py-1 text-[9px] font-semibold tracking-[0.22em] text-white/60"
                            style={{
                              left: `${n.x}%`,
                              top: `${n.y}%`,
                              transform: "translate(-50%, -50%)",
                              animation: "dc_soft_pulse 4.6s ease-in-out infinite",
                              animationDelay: n.delay,
                            }}
                          >
                            {n.label}
                          </div>
                        ))}
                      </div>

                      <div className="relative z-10">

                        <div className="relative flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-5 py-4">
                          <div className="flex items-center gap-4">
                            <div
                              className="h-11 w-11 rounded-2xl border border-white/10 bg-white/[0.03]"
                              style={{ boxShadow: "0 0 28px rgba(56,189,248,0.18)" }}
                            />
                            <div>
                              <div className="text-[11px] font-semibold tracking-[0.14em] text-white/80">{ui.uhr}</div>
                              <div className="mt-1 text-[10px] font-medium text-white/45">{ui.patient}: M. González • ID DC-1024</div>
                              <div className="mt-1 text-[10px] font-medium text-white/35">
                                {ui.connected}: {systems.join(" • ")}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-medium text-white/65">
                              {ui.secure}
                            </div>
                            <div
                              className="dc_motion h-2 w-2 rounded-full"
                              style={{
                                background: "rgba(56,189,248,0.65)",
                                boxShadow: "0 0 16px rgba(56,189,248,0.35)",
                                animation: "dc_soft_pulse 3.2s ease-in-out infinite",
                              }}
                            />
                          </div>
                        </div>

                        <div className="relative px-5 pt-4">
                          <div className="grid grid-cols-4 gap-2">
                            {[
                              { label: lang === "es" ? "Resumen" : lang === "pt" ? "Resumo" : "Summary", active: true },
                              { label: lang === "es" ? "Exámenes" : lang === "pt" ? "Exames" : "Labs", active: false },
                              { label: lang === "es" ? "Imágenes" : lang === "pt" ? "Imagens" : "Imaging", active: false },
                              { label: lang === "es" ? "Medic." : lang === "pt" ? "Medicação" : "Meds", active: false },
                            ].map((tab, i) => (
                              <div
                                key={tab.label}
                                className={
                                  tab.active
                                    ? "relative overflow-hidden rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 text-center text-[10px] font-semibold text-white/85"
                                    : "rounded-full border border-white/10 bg-black/30 px-3 py-2 text-center text-[10px] font-medium text-white/55"
                                }
                                style={tab.active ? { boxShadow: "0 0 26px rgba(56,189,248,0.14)" } : undefined}
                              >
                                {tab.active ? (
                                  <div
                                    className="dc_motion pointer-events-none absolute inset-y-0 left-0 w-16 opacity-0"
                                    style={{
                                      background:
                                        "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.18) 45%, transparent 100%)",
                                      animation: "dc_scan_x 6.8s ease-in-out infinite",
                                      animationDelay: `${-0.4 - i * 0.6}s`,
                                    }}
                                  />
                                ) : null}
                                <div className="relative">{tab.label}</div>
                              </div>
                            ))}
                          </div>

                          <div className="mt-4 grid gap-4 pb-5 sm:grid-cols-[0.42fr_0.58fr]">
                            <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                              <div className="flex items-center justify-between">
                                <div className="text-[10px] font-semibold tracking-[0.22em] text-white/40">{ui.timeline}</div>
                                <div className="text-[10px] font-medium text-white/45">{ui.last30}</div>
                              </div>
                              <div className="mt-4 relative pl-4">
                                <div className="pointer-events-none absolute left-1.5 top-0 h-full w-px bg-gradient-to-b from-white/25 via-white/10 to-white/0" />
                                {[
                                  { date: ui.today, tag: ui.consult, tone: "rgba(56,189,248,0.55)", delay: "-0.2s" },
                                  { date: "-3D", tag: ui.labs, tone: "rgba(16,185,129,0.55)", delay: "-0.9s" },
                                  { date: "-12D", tag: ui.imaging, tone: "rgba(168,85,247,0.55)", delay: "-1.6s" },
                                  { date: "-28D", tag: ui.er, tone: "rgba(245,158,11,0.55)", delay: "-2.3s" },
                                ].map((row) => (
                                  <div key={row.date} className="relative pb-3">
                                    <div
                                      className="dc_motion absolute -left-[5px] top-0 h-3 w-3 rounded-full border border-white/10"
                                      style={{
                                        background: row.tone,
                                        boxShadow: `0 0 18px ${row.tone}`,
                                        animation: "dc_soft_pulse 3.8s ease-in-out infinite",
                                        animationDelay: row.delay,
                                      }}
                                    />
                                    <div className="flex items-center justify-between">
                                      <div className="text-[10px] font-semibold text-white/65">{row.date}</div>
                                      <div className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-white/60">
                                        {row.tag}
                                      </div>
                                    </div>
                                    <div className="mt-2 h-px w-full bg-white/10" />
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="grid gap-3">
                              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                                <div className="flex items-center justify-between">
                                  <div className="text-[10px] font-semibold tracking-[0.22em] text-white/40">{ui.dx}</div>
                                  <div className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-medium text-white/50">{ui.active}</div>
                                </div>
                                <div className="mt-3 space-y-2">
                                  {[
                                    { label: "Hipertensión (I10)", tone: "rgba(59,130,246,0.55)" },
                                    { label: "Diabetes tipo 2 (E11)", tone: "rgba(16,185,129,0.55)" },
                                  ].map((d, i) => (
                                    <div key={d.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-3 py-2">
                                      <div className="h-2 w-2 rounded-full" style={{ background: d.tone, boxShadow: `0 0 16px ${d.tone}` }} />
                                      <div className="text-[11px] font-medium text-white/70">{d.label}</div>
                                      <div
                                        className="dc_motion ml-auto h-6 w-10 rounded-lg border border-white/10"
                                        style={{
                                          background: "rgba(255,255,255,0.04)",
                                          animation: "dc_bar_breathe 4.8s ease-in-out infinite",
                                          animationDelay: `${-0.6 - i * 0.7}s`,
                                        }}
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="grid gap-3 md:grid-cols-2">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                                  <div className="text-[10px] font-semibold tracking-[0.22em] text-white/40">LABS</div>
                                  <div className="mt-3 space-y-2">
                                    {[
                                      { k: "HbA1c", v: "6.9%", s: "Control" },
                                      { k: "LDL", v: "92", s: "mg/dL" },
                                      { k: "Cr", v: "0.9", s: "mg/dL" },
                                    ].map((r) => (
                                      <div key={r.k} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-3 py-2">
                                        <div className="text-[11px] font-medium text-white/65">{r.k}</div>
                                        <div className="text-[11px] font-semibold text-white/80">{r.v}</div>
                                        <div className="text-[10px] font-medium text-white/40">{r.s}</div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                                  <div className="text-[10px] font-semibold tracking-[0.22em] text-white/40">{ui.meds}</div>
                                  <div className="mt-3 space-y-2">
                                    {[
                                      { k: "Metformina", v: "850 mg", s: "BID" },
                                      { k: "Losartán", v: "50 mg", s: "QD" },
                                      { k: "Atorvastatina", v: "20 mg", s: "HS" },
                                    ].map((r, i) => (
                                      <div key={r.k} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-3 py-2">
                                        <div
                                          className="dc_motion h-2 w-2 rounded-full"
                                          style={{
                                            background: "rgba(16,185,129,0.55)",
                                            boxShadow: "0 0 16px rgba(16,185,129,0.28)",
                                            animation: "dc_soft_pulse 3.8s ease-in-out infinite",
                                            animationDelay: `${-0.2 - i * 0.6}s`,
                                          }}
                                        />
                                        <div className="min-w-0">
                                          <div className="text-[11px] font-medium text-white/70">{r.k}</div>
                                          <div className="text-[10px] font-medium text-white/40">
                                            {r.v} • {r.s}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DeepClinicFxFrame>
              </div>

              {/* Content - Right Side */}
              <div className="relative z-10 max-w-xl order-1">
                <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{t.title}</h3>
                <p className="mt-6 line-clamp-3 text-[13px] leading-relaxed text-white/60 md:text-[14px]">{t.description}</p>

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
                    href={`/${lang}/platform`}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80"
                  >
                    {t.cta}
                    <span className="ml-2" aria-hidden>
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
