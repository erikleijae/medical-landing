import Link from "next/link";

import { MotionReveal } from "../../../components/motion-reveal";
import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { InteractiveStarburst } from "../../../components/interactive-starburst";

const NEWS_ITEMS = [
  {
    date: "FEBRUARY 02, 2026",
    title: "DeepClinic Copilot se asocia con Accurx",
    description: "DeepClinic Copilot se ha asociado con Accurx para poner la documentación asistida por IA al alcance de miles de profesionales de la salud.",
    category: "COMPANY",
    href: "/es/news/accurx-partnership",
    previewLabelLeft: "DC",
    previewLabelRight: "AC",
  },
  {
    date: "JANUARY 28, 2026",
    title: "DeepClinic Clinical API",
    description: "State-of-the-art clinical workflows for transcription, notes, and verification across quality, cost, and latency.",
    category: "API",
    href: "/es/platform",
    previewLabelLeft: "API",
    previewLabelRight: "SDK",
  },
  {
    date: "JANUARY 06, 2026",
    title: "DeepClinic raises Series E",
    description: "DeepClinic is accelerating progress in building safe and useful clinical AI.",
    category: "COMPANY",
    href: "/es/news",
    previewLabelLeft: "DC",
    previewLabelRight: "$E",
  },
] as const;

const FOOTER_GROUPS = [
  {
    title: "TRY DEEPCLINIC ON",
    links: [
      { label: "Web", href: "/" },
      { label: "Desk", href: "/es/desk" },
      { label: "Health", href: "/es/health" },
      { label: "Booking", href: "/es/booking" },
    ],
  },
  {
    title: "PRODUCTS",
    links: [
      { label: "DeepClinic Copilot", href: "/es/product" },
      { label: "DeepClinic Platform", href: "/es/platform" },
      { label: "DeepClinic Desk", href: "/es/desk" },
      { label: "DeepClinic Health", href: "/es/health" },
      { label: "DeepClinic Revenue", href: "/es/revenue" },
    ],
  },
  {
    title: "API",
    links: [
      { label: "Overview", href: "/es/platform" },
      { label: "Pricing", href: "/es/pricing" },
      { label: "Documentation", href: "/es/help-center" },
      { label: "API Console Login", href: "/es/login" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "Company", href: "/es/about" },
      { label: "Careers", href: "/es/recruitment" },
      { label: "Contact", href: "/es/contact" },
      { label: "News", href: "/es/news" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Privacy policy", href: "/es/privacy-policy" },
      { label: "Security", href: "/es/data-security" },
      { label: "Safety", href: "/es/trust-center" },
      { label: "Legal", href: "/es/terms-of-service" },
      { label: "Status", href: "/es/help-center" },
    ],
  },
] as const;

export default function DeepClinicLandingPageEs() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050608] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[820px] overflow-hidden md:h-[920px]">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_55%,rgba(0,0,0,0),rgba(0,0,0,0.94)_68%),radial-gradient(90%_70%_at_90%_52%,rgba(56,189,248,0.05),transparent_62%)]" />

        <div className="dc_motion absolute -left-24 top-10 h-[520px] w-[520px] rounded-full bg-sky-500/[0.06] blur-[100px] animate-[dc_drift_a_26s_ease-in-out_infinite]" />
        <div className="dc_motion absolute -right-28 top-16 h-[560px] w-[560px] rounded-full bg-indigo-500/[0.08] blur-[120px] animate-[dc_drift_b_28s_ease-in-out_infinite]" />

        <div className="dc_motion absolute -right-[580px] top-[-340px] h-[1100px] w-[1100px] opacity-95 saturate-125">
          <div className="dc_motion absolute inset-0 animate-[dc_light_drift_20s_ease-in-out_infinite]">
            <div className="absolute inset-0 rounded-full blur-[26px] opacity-78 mix-blend-screen [background-image:radial-gradient(closest-side_at_40%_54%,rgba(255,255,255,0.58),rgba(191,219,254,0.36),rgba(56,189,248,0.14),transparent_72%)]" />
            <div className="absolute inset-0 rounded-full blur-[58px] opacity-55 mix-blend-screen [background-image:conic-gradient(from_210deg_at_44%_54%,rgba(255,255,255,0.0),rgba(191,219,254,0.22),rgba(56,189,248,0.16),rgba(99,102,241,0.08),rgba(255,255,255,0.0))]" />
            <div className="absolute inset-0 rounded-full blur-[104px] opacity-32 mix-blend-screen [background-image:radial-gradient(closest-side_at_38%_52%,rgba(255,255,255,0.22),transparent_66%)]" />
          </div>

          <div className="dc_motion absolute inset-0 opacity-100 will-change-[opacity,filter,transform] animate-[dc_light_reveal_1500ms_cubic-bezier(0.16,1,0.3,1)_forwards]">
            <div className="dc_motion dc_clip_sweep absolute inset-0 will-change-[clip-path] animate-[dc_clip_sweep_1200ms_cubic-bezier(0.16,1,0.3,1)_forwards]">
              <div className="dc_motion dc_mask_sweep absolute inset-0 [-webkit-mask-image:linear-gradient(90deg,transparent_0%,black_22%,black_100%)] [-webkit-mask-size:240%_100%] [-webkit-mask-position:100%_0] [-webkit-mask-repeat:no-repeat] [mask-image:linear-gradient(90deg,transparent_0%,black_22%,black_100%)] [mask-size:240%_100%] [mask-position:100%_0] [mask-repeat:no-repeat] animate-[dc_mask_sweep_1200ms_cubic-bezier(0.16,1,0.3,1)_forwards]">
                <div className="dc_motion absolute inset-0 will-change-transform animate-[dc_fog_drift_14s_ease-in-out_infinite]">
                  <div className="dc_motion dc_fog_flow pointer-events-none absolute left-[2%] right-[-30%] top-[52%] h-[360px] -translate-y-1/2 blur-[34px] opacity-78 mix-blend-screen [background-image:linear-gradient(270deg,rgba(255,255,255,0.54)_0%,rgba(191,219,254,0.30)_18%,rgba(56,189,248,0.16)_44%,rgba(56,189,248,0.07)_62%,transparent_84%)] [background-size:240%_100%] [background-position:120%_50%] [mask-image:radial-gradient(closest-side_at_92%_50%,black_0%,black_52%,transparent_100%)] animate-[dc_fog_flow_7.5s_linear_infinite]" />
                  <div className="dc_motion dc_fog_flow pointer-events-none absolute left-[-4%] right-[-34%] top-[52%] h-[560px] -translate-y-1/2 blur-[92px] opacity-28 mix-blend-screen [background-image:linear-gradient(270deg,rgba(56,189,248,0.22)_0%,rgba(99,102,241,0.11)_25%,rgba(56,189,248,0.06)_48%,transparent_76%)] [background-size:240%_100%] [background-position:120%_50%] animate-[dc_fog_flow_11.5s_linear_infinite]" />
                  <div className="dc_motion dc_fog_flow pointer-events-none absolute left-[8%] right-[-36%] top-[52%] h-[820px] -translate-y-1/2 blur-[140px] opacity-18 mix-blend-screen [background-image:linear-gradient(270deg,rgba(255,255,255,0.26)_0%,rgba(191,219,254,0.16)_22%,rgba(56,189,248,0.10)_46%,transparent_78%)] [background-size:240%_100%] [background-position:120%_50%] [mask-image:radial-gradient(closest-side_at_96%_50%,black_0%,black_46%,transparent_100%)] animate-[dc_fog_flow_16s_linear_infinite]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.84)_48%,rgba(0,0,0,0.34)_76%,rgba(0,0,0,0)_100%)]" />
      </div>

      <DeepClinicTopNav />

      <section className="relative z-10 min-h-[100svh]">
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 pb-20 pt-24 md:max-w-7xl md:px-8 md:pb-24 md:pt-28 lg:px-10">
          <MotionReveal className="w-full" durationMs={820}>
            <div className="relative w-full">
              <div className="pointer-events-none mx-auto w-full max-w-5xl text-center">
                <div className="relative select-none font-sans text-[clamp(112px,16.8vw,320px)] font-semibold leading-[0.86] tracking-[-0.045em]">
                  <div className="text-white/[0.12] blur-[1px] [text-shadow:0_34px_160px_rgba(0,0,0,0.92)]">
                    DeepClinic
                  </div>
                  <div className="absolute inset-0 text-transparent opacity-60 blur-[18px] mix-blend-screen [background-image:linear-gradient(90deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.10)_44%,rgba(255,255,255,0.95)_78%,rgba(255,255,255,0.70)_100%)] bg-clip-text [mask-image:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.18)_26%,black_56%,black_100%)]">
                    DeepClinic
                  </div>
                  <div className="absolute inset-0 text-transparent mix-blend-screen [background-image:linear-gradient(90deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.16)_44%,rgba(255,255,255,0.92)_78%,rgba(255,255,255,0.64)_100%)] bg-clip-text [mask-image:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_28%,black_56%,black_100%)]">
                    DeepClinic
                  </div>
                </div>
              </div>

              <div className="mx-auto mt-14 w-[min(720px,92vw)]">
                <div className="group relative rounded-[18px] border border-white/12 bg-black/60 shadow-[0_18px_70px_rgba(0,0,0,0.65)] backdrop-blur transition-all duration-300 focus-within:border-white/20 focus-within:bg-black/65 focus-within:shadow-[0_28px_110px_rgba(0,0,0,0.7)]">
                  <textarea
                    name="prompt"
                    rows={2}
                    placeholder="¿Qué quieres saber?"
                    className="min-h-[96px] w-full resize-none bg-transparent px-5 pt-4 pb-12 text-[14px] leading-[1.6] text-white/90 placeholder:text-white/45 focus:outline-none"
                  />
                  <button
                    type="button"
                    className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white shadow-sm ring-1 ring-white/15 transition-all duration-300 hover:bg-white/15 hover:ring-white/20"
                    aria-label="Enviar"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 5l0 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 10l5-5 5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </MotionReveal>

          <div className="absolute bottom-10 left-1/2 w-full -translate-x-1/2 px-6 md:px-10">
            <div className="mx-auto grid max-w-7xl grid-cols-[24px_minmax(0,1fr)_auto] items-center gap-6 text-[12px] text-white/65">
              <a
                href="#siguiente"
                className="inline-flex h-6 w-6 items-center justify-center text-white/45 transition-colors hover:text-white/75"
                aria-label="Bajar"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path
                    d="M7 14l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <div className="space-y-2">
                <div className="text-[11px] font-semibold tracking-[0.22em] text-white/70">DeepClinic se une a Accurx:</div>
                <div className="max-w-lg text-[12px] leading-relaxed text-white/55">
                  Accurx y DeepClinic aceleran la documentación asistida por IA para clínicos.
                </div>
              </div>

              <Link
                href="/es/news/accurx-partnership"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85 transition-colors hover:border-white/35 hover:bg-white/5 hover:text-white"
              >
                Read announcement
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="siguiente" className="relative z-10 min-h-[100svh]">
        <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 py-24 md:px-8 md:py-32 lg:px-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full">
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_30%,rgba(148,163,184,0.10),transparent_60%),radial-gradient(55%_55%_at_70%_35%,rgba(59,130,246,0.10),transparent_62%),radial-gradient(50%_50%_at_70%_70%,rgba(99,102,241,0.10),transparent_65%)]" />
            <div className="absolute inset-0 opacity-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:220px_100%]" />
          </div>

          <MotionReveal durationMs={760}>
            <div>
              <div className="text-[10px] font-semibold tracking-[0.25em] text-white/35">[ PRODUCTS ]</div>
              <h2 className="mt-7 text-balance text-[40px] font-semibold tracking-tight text-white md:text-[54px]">
                IA para toda la humanidad
              </h2>
            </div>
          </MotionReveal>

          <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-x-0 md:gap-y-12">
            <div className="relative md:pr-8">
              <MotionReveal durationMs={740} delayMs={60}>
                <div className="group relative min-h-[480px] overflow-hidden rounded-[14px] border border-white/0 bg-transparent px-10 pb-16 pt-10 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.02] hover:shadow-[0_28px_110px_rgba(0,0,0,0.65)]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_35%_18%,rgba(255,255,255,0.08),transparent_65%),radial-gradient(60%_60%_at_65%_55%,rgba(56,189,248,0.10),transparent_65%)]" />
                  </div>

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -left-px -top-px h-1.5 w-1.5 bg-white/70" />
                    <div className="absolute -right-px -top-px h-1.5 w-1.5 bg-white/70" />
                    <div className="absolute -left-px -bottom-px h-1.5 w-1.5 bg-white/70" />
                    <div className="absolute -right-px -bottom-px h-1.5 w-1.5 bg-white/70" />
                  </div>

                  <div className="relative space-y-3">
                    <h3 className="text-[14px] font-semibold tracking-tight text-white">DeepClinic Copilot</h3>
                    <p className="max-w-sm text-[12.5px] leading-relaxed text-white/50 transition-colors duration-500 group-hover:text-white/70">
                      Consultas y notas médicas. Redacta, compara y valida documentación clínica en segundos.
                    </p>
                  </div>

                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-[184px]">
                    <svg
                      viewBox="0 0 520 420"
                      className="dc_motion absolute bottom-[-70px] left-[-48px] h-[460px] w-[460px] opacity-[0.20] transition-all duration-500 group-hover:opacity-[0.30] group-hover:scale-[1.03] group-hover:translate-x-2"
                    >
                      <path
                        d="M86 292c60-92 140-154 236-170 118-19 216 28 254 106"
                        stroke="rgba(255,255,255,0.40)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <path
                        d="M118 308c44-74 106-126 186-142 94-18 170 18 204 78"
                        stroke="rgba(255,255,255,0.28)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <path
                        d="M174 372c42-84 102-148 182-176"
                        stroke="rgba(255,255,255,0.22)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <path
                        d="M320 140l86-44"
                        stroke="rgba(255,255,255,0.22)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <Link
                    href="/es/product"
                    className="absolute bottom-10 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white group-hover:border-white/25 group-hover:bg-white/[0.08] group-hover:text-white"
                  >
                    VER PRODUCTO
                    <span className="ml-2" aria-hidden>
                      ↗
                    </span>
                  </Link>
                </div>
              </MotionReveal>
            </div>

            <div className="relative md:border-l md:border-white/10 md:px-8">
              <MotionReveal durationMs={740} delayMs={120}>
                <div className="group relative min-h-[480px] overflow-hidden rounded-[14px] border border-white/0 bg-transparent px-10 pb-16 pt-10 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.02] hover:shadow-[0_28px_110px_rgba(0,0,0,0.65)]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_35%_18%,rgba(255,255,255,0.08),transparent_65%),radial-gradient(60%_60%_at_65%_55%,rgba(59,130,246,0.10),transparent_65%)]" />
                  </div>

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -left-px -top-px h-1.5 w-1.5 bg-white/70" />
                    <div className="absolute -right-px -top-px h-1.5 w-1.5 bg-white/70" />
                    <div className="absolute -left-px -bottom-px h-1.5 w-1.5 bg-white/70" />
                    <div className="absolute -right-px -bottom-px h-1.5 w-1.5 bg-white/70" />
                  </div>

                  <div className="relative space-y-3">
                    <h3 className="text-[14px] font-semibold tracking-tight text-white">DeepClinic Revenue</h3>
                    <p className="max-w-sm text-[12.5px] leading-relaxed text-white/50 transition-colors duration-500 group-hover:text-white/70">
                      Gestión de ingresos. Cobros, aseguradoras y analítica financiera para tu práctica.
                    </p>
                  </div>

                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-[198px]">
                    <svg
                      viewBox="0 0 520 420"
                      className="dc_motion absolute bottom-[-54px] left-[10px] h-[420px] w-[520px] opacity-[0.20] transition-all duration-500 group-hover:opacity-[0.30] group-hover:translate-x-2"
                    >
                      <path
                        d="M110 338V210"
                        stroke="rgba(255,255,255,0.30)"
                        strokeWidth="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M178 338V156"
                        stroke="rgba(255,255,255,0.24)"
                        strokeWidth="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M246 338V236"
                        stroke="rgba(255,255,255,0.20)"
                        strokeWidth="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M314 338V126"
                        stroke="rgba(255,255,255,0.28)"
                        strokeWidth="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M382 338V182"
                        stroke="rgba(255,255,255,0.22)"
                        strokeWidth="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M98 214c46-52 108-84 184-96 96-15 168 14 222 70"
                        stroke="rgba(59,130,246,0.35)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <Link
                    href="/es/revenue"
                    className="absolute bottom-10 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white group-hover:border-white/25 group-hover:bg-white/[0.08] group-hover:text-white"
                  >
                    EXPLORAR
                    <span className="ml-2" aria-hidden>
                      ↗
                    </span>
                  </Link>
                </div>
              </MotionReveal>
            </div>

            <div className="relative md:border-l md:border-white/10 md:pl-8">
              <MotionReveal durationMs={740} delayMs={180}>
                <div className="group relative min-h-[480px] overflow-hidden rounded-[14px] border border-white/0 bg-transparent px-10 pb-16 pt-10 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.02] hover:shadow-[0_28px_110px_rgba(0,0,0,0.65)]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_35%_18%,rgba(255,255,255,0.08),transparent_65%),radial-gradient(60%_60%_at_65%_55%,rgba(20,184,166,0.10),transparent_65%)]" />
                  </div>

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -left-px -top-px h-1.5 w-1.5 bg-white/70" />
                    <div className="absolute -right-px -top-px h-1.5 w-1.5 bg-white/70" />
                    <div className="absolute -left-px -bottom-px h-1.5 w-1.5 bg-white/70" />
                    <div className="absolute -right-px -bottom-px h-1.5 w-1.5 bg-white/70" />
                  </div>

                  <div className="relative space-y-3">
                    <h3 className="text-[14px] font-semibold tracking-tight text-white">DeepClinic Desk</h3>
                    <p className="max-w-sm text-[12.5px] leading-relaxed text-white/50 transition-colors duration-500 group-hover:text-white/70">
                      Comunicación con pacientes y gestión operativa para equipos clínicos.
                    </p>
                  </div>

                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-[198px]">
                    <svg
                      viewBox="0 0 520 420"
                      className="dc_motion absolute bottom-[-48px] left-[18px] h-[420px] w-[520px] opacity-[0.20] transition-all duration-500 group-hover:opacity-[0.30] group-hover:translate-x-2"
                    >
                      <path
                        d="M110 120h300a14 14 0 0 1 14 14v172a14 14 0 0 1-14 14H110a14 14 0 0 1-14-14V134a14 14 0 0 1 14-14z"
                        stroke="rgba(255,255,255,0.42)"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path d="M96 152h332" stroke="rgba(255,255,255,0.18)" strokeWidth="2" fill="none" />
                      <path d="M146 190h220" stroke="rgba(255,255,255,0.14)" strokeWidth="2" fill="none" />
                      <path d="M146 226h172" stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="none" />
                      <circle cx="132" cy="138" r="4" fill="rgba(255,255,255,0.20)" />
                      <circle cx="150" cy="138" r="4" fill="rgba(255,255,255,0.14)" />
                      <circle cx="168" cy="138" r="4" fill="rgba(255,255,255,0.10)" />
                    </svg>
                  </div>

                  <Link
                    href="/es/desk"
                    className="absolute bottom-10 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white group-hover:border-white/25 group-hover:bg-white/[0.08] group-hover:text-white"
                  >
                    ABRIR
                    <span className="ml-2" aria-hidden>
                      ↗
                    </span>
                  </Link>
                </div>
              </MotionReveal>
            </div>

            <div className="relative md:pr-8">
              <MotionReveal durationMs={740} delayMs={240}>
                <div className="group relative min-h-[480px] overflow-hidden rounded-[14px] border border-white/0 bg-transparent px-10 pb-16 pt-10 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.02] hover:shadow-[0_28px_110px_rgba(0,0,0,0.65)]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_35%_18%,rgba(255,255,255,0.08),transparent_65%),radial-gradient(60%_60%_at_65%_55%,rgba(99,102,241,0.10),transparent_65%)]" />
                  </div>

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -left-px -top-px h-1.5 w-1.5 bg-white/70" />
                    <div className="absolute -right-px -top-px h-1.5 w-1.5 bg-white/70" />
                    <div className="absolute -left-px -bottom-px h-1.5 w-1.5 bg-white/70" />
                    <div className="absolute -right-px -bottom-px h-1.5 w-1.5 bg-white/70" />
                  </div>

                  <div className="relative space-y-3">
                    <h3 className="text-[14px] font-semibold tracking-tight text-white">DeepClinic Booking</h3>
                    <p className="max-w-sm text-[12.5px] leading-relaxed text-white/50 transition-colors duration-500 group-hover:text-white/70">
                      Reservas 24/7. Agenda online, recordatorios y menos ausentismo.
                    </p>
                  </div>

                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-[198px]">
                    <svg
                      viewBox="0 0 520 420"
                      className="dc_motion absolute bottom-[-44px] left-[24px] h-[420px] w-[520px] opacity-[0.20] transition-all duration-500 group-hover:opacity-[0.30] group-hover:translate-x-2"
                    >
                      <path
                        d="M132 138h256a14 14 0 0 1 14 14v182a14 14 0 0 1-14 14H132a14 14 0 0 1-14-14V152a14 14 0 0 1 14-14z"
                        stroke="rgba(255,255,255,0.40)"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path d="M118 184h284" stroke="rgba(255,255,255,0.18)" strokeWidth="2" fill="none" />
                      <path d="M180 118v40" stroke="rgba(255,255,255,0.22)" strokeWidth="6" strokeLinecap="round" />
                      <path d="M340 118v40" stroke="rgba(255,255,255,0.22)" strokeWidth="6" strokeLinecap="round" />
                      {Array.from({ length: 20 }).map((_, i) => {
                        const x = 156 + (i % 5) * 52;
                        const y = 214 + Math.floor(i / 5) * 42;
                        return (
                          <rect
                            key={i}
                            x={x}
                            y={y}
                            width={18}
                            height={18}
                            rx={3}
                            fill={i === 6 ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.08)"}
                          />
                        );
                      })}
                    </svg>
                  </div>

                  <Link
                    href="/es/booking"
                    className="absolute bottom-10 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white group-hover:border-white/25 group-hover:bg-white/[0.08] group-hover:text-white"
                  >
                    RESERVAR
                    <span className="ml-2" aria-hidden>
                      ↗
                    </span>
                  </Link>
                </div>
              </MotionReveal>
            </div>

            <div className="relative md:border-l md:border-white/10 md:px-8">
              <MotionReveal durationMs={740} delayMs={300}>
                <div className="group relative min-h-[480px] overflow-hidden rounded-[14px] border border-white/0 bg-transparent px-10 pb-16 pt-10 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.02] hover:shadow-[0_28px_110px_rgba(0,0,0,0.65)]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_35%_18%,rgba(255,255,255,0.08),transparent_65%),radial-gradient(60%_60%_at_65%_55%,rgba(56,189,248,0.10),transparent_65%)]" />
                  </div>

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -left-px -top-px h-1.5 w-1.5 bg-white/70" />
                    <div className="absolute -right-px -top-px h-1.5 w-1.5 bg-white/70" />
                    <div className="absolute -left-px -bottom-px h-1.5 w-1.5 bg-white/70" />
                    <div className="absolute -right-px -bottom-px h-1.5 w-1.5 bg-white/70" />
                  </div>

                  <div className="relative space-y-3">
                    <h3 className="text-[14px] font-semibold tracking-tight text-white">DeepClinic IA</h3>
                    <p className="max-w-sm text-[12.5px] leading-relaxed text-white/50 transition-colors duration-500 group-hover:text-white/70">
                      Plataforma y asistente IA. Responde, organiza y sugiere con contexto clínico de extremo a extremo.
                    </p>
                  </div>

                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-[188px]">
                    <svg
                      viewBox="0 0 520 420"
                      className="dc_motion absolute bottom-[-62px] left-[0px] h-[460px] w-[520px] opacity-[0.18] transition-all duration-500 group-hover:opacity-[0.28] group-hover:translate-x-2"
                    >
                      <path
                        d="M156 250c20-60 58-100 116-110 76-13 142 26 162 94"
                        stroke="rgba(255,255,255,0.22)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <path
                        d="M130 300c34-84 98-142 184-154 110-16 196 42 214 132"
                        stroke="rgba(56,189,248,0.22)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <circle cx="304" cy="206" r="12" fill="rgba(255,255,255,0.10)" />
                      <circle cx="304" cy="206" r="4" fill="rgba(255,255,255,0.30)" />
                      <circle cx="362" cy="164" r="6" fill="rgba(255,255,255,0.14)" />
                      <circle cx="222" cy="170" r="6" fill="rgba(255,255,255,0.12)" />
                    </svg>
                  </div>

                  <Link
                    href="/es/platform"
                    className="absolute bottom-10 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white group-hover:border-white/25 group-hover:bg-white/[0.08] group-hover:text-white"
                  >
                    PROBAR
                    <span className="ml-2" aria-hidden>
                      ↗
                    </span>
                  </Link>
                </div>
              </MotionReveal>
            </div>

            <div className="relative md:border-l md:border-white/10 md:pl-8">
              <MotionReveal durationMs={740} delayMs={360}>
                <div className="group relative min-h-[480px] overflow-hidden rounded-[14px] border border-white/0 bg-transparent px-10 pb-16 pt-10 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.02] hover:shadow-[0_28px_110px_rgba(0,0,0,0.65)]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_35%_18%,rgba(255,255,255,0.08),transparent_65%),radial-gradient(60%_60%_at_65%_55%,rgba(34,197,94,0.08),transparent_65%)]" />
                  </div>

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -left-px -top-px h-1.5 w-1.5 bg-white/70" />
                    <div className="absolute -right-px -top-px h-1.5 w-1.5 bg-white/70" />
                    <div className="absolute -left-px -bottom-px h-1.5 w-1.5 bg-white/70" />
                    <div className="absolute -right-px -bottom-px h-1.5 w-1.5 bg-white/70" />
                  </div>

                  <div className="relative space-y-3">
                    <h3 className="text-[14px] font-semibold tracking-tight text-white">DeepClinic Patients</h3>
                    <p className="max-w-sm text-[12.5px] leading-relaxed text-white/50 transition-colors duration-500 group-hover:text-white/70">
                      Portal de pacientes. Historial, comunicación y seguimiento en un solo lugar.
                    </p>
                  </div>

                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-[198px]">
                    <svg
                      viewBox="0 0 520 420"
                      className="dc_motion absolute bottom-[-54px] left-[18px] h-[420px] w-[520px] opacity-[0.20] transition-all duration-500 group-hover:opacity-[0.30] group-hover:translate-x-2"
                    >
                      <path
                        d="M206 104h108a18 18 0 0 1 18 18v196a18 18 0 0 1-18 18H206a18 18 0 0 1-18-18V122a18 18 0 0 1 18-18z"
                        stroke="rgba(255,255,255,0.38)"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M214 148h92"
                        stroke="rgba(255,255,255,0.14)"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M214 182h92"
                        stroke="rgba(255,255,255,0.10)"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M226 248h18l10-24 16 56 12-32h14"
                        stroke="rgba(255,255,255,0.22)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <circle cx="260" cy="298" r="5" fill="rgba(255,255,255,0.16)" />
                      <circle cx="304" cy="318" r="4" fill="rgba(255,255,255,0.12)" />
                      <circle cx="292" cy="220" r="5" fill="rgba(255,255,255,0.10)" />
                    </svg>
                  </div>

                  <Link
                    href="/es/health"
                    className="absolute bottom-10 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white group-hover:border-white/25 group-hover:bg-white/[0.08] group-hover:text-white"
                  >
                    VER MÁS
                    <span className="ml-2" aria-hidden>
                      ↗
                    </span>
                  </Link>
                </div>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <InteractiveStarburst className="absolute inset-0 opacity-[0.62]" />

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_45%_45%,rgba(148,163,184,0.10),transparent_62%),radial-gradient(55%_55%_at_70%_45%,rgba(96,165,250,0.08),transparent_64%),radial-gradient(60%_60%_at_35%_60%,rgba(99,102,241,0.07),transparent_68%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_50%_50%,rgba(0,0,0,0),rgba(0,0,0,0.68)_58%,rgba(0,0,0,0.92)_92%)]" />
          </div>
        </div>

        <div className="mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 md:px-8 lg:px-10">
          <div className="relative w-full pointer-events-none">
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
              <MotionReveal durationMs={900}>
                <h2 className="text-[clamp(54px,7.8vw,96px)] font-medium leading-none tracking-tight text-white">
                  Understand
                </h2>
              </MotionReveal>
              <MotionReveal durationMs={900} delayMs={90}>
                <h2 className="text-[clamp(54px,7.8vw,96px)] font-medium leading-none tracking-tight text-white/35 md:translate-y-[6px] md:text-right">
                  La Salud
                </h2>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 min-h-[100svh] overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_20%_40%,rgba(249,115,22,0.09),transparent_62%),radial-gradient(65%_65%_at_75%_45%,rgba(56,189,248,0.10),transparent_64%),radial-gradient(90%_80%_at_50%_40%,rgba(255,255,255,0.04),transparent_70%)]" />
          <div className="dc_motion absolute inset-0 opacity-[0.22] [background-image:radial-gradient(rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:44px_44px] animate-[dc_soft_pulse_12s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_50%_50%,rgba(0,0,0,0),rgba(0,0,0,0.80)_62%,rgba(0,0,0,0.95)_92%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 md:px-8 lg:px-10">
          <MotionReveal durationMs={820}>
            <div className="relative mx-auto w-full max-w-[720px] text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 3a9 9 0 1 0 0 18"
                      stroke="rgba(255,255,255,0.85)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M21 12a9 9 0 0 1-9 9"
                      stroke="rgba(255,255,255,0.45)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 17L17 7"
                      stroke="rgba(255,255,255,0.55)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h2 className="text-[42px] font-semibold leading-none tracking-tight text-white/85 md:text-[48px]">SuperDeepClinic</h2>
              </div>

              <p className="mt-6 text-[13px] leading-relaxed text-white/55 md:text-[13.5px]">
                Haz más con DeepClinic.
                <br />
                Desbloquea una suscripción SuperDeepClinic en deepclinic.ai.
              </p>
              <p className="mt-6 text-[13px] leading-relaxed text-white/45">
                Acabamos de lanzar SuperDeepClinic Heavy, con acceso extendido y límites más altos.
              </p>

              <div className="mt-8">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[12px] font-semibold tracking-[0.12em] text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                >
                  SIGN UP NOW
                  <span className="ml-2" aria-hidden>
                    ↗
                  </span>
                </Link>
              </div>
            </div>
          </MotionReveal>

        </div>
      </section>

      <section className="relative z-10 min-h-[100svh]">
        <div className="mx-auto min-h-[100svh] max-w-7xl px-6 py-24 md:px-8 md:py-32 lg:px-10">
          <MotionReveal durationMs={820} delayMs={80}>
            <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-10 md:pb-12">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.25em] text-white/40">[ BLOG ]</div>
                <h3 className="mt-5 text-[44px] font-semibold leading-none tracking-tight text-white md:text-[56px]">
                  Latest news
                </h3>
              </div>
              <Link
                href="/es/news"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                EXPLORE MORE
              </Link>
            </div>
          </MotionReveal>

          <div className="mt-0">
            {NEWS_ITEMS.map((item, idx) => (
              <MotionReveal
                key={item.title}
                durationMs={820}
                delayMs={Math.min(220, idx * 70)}
                className="border-b border-white/10"
              >
                <div className="py-10">
                  <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,0.95fr)] md:items-center">
                    <div className="max-w-xl">
                      <div className="text-[10px] font-semibold tracking-[0.25em] text-white/35">
                        {item.date}
                      </div>
                      <h4 className="mt-4 text-[16px] font-semibold tracking-tight text-white/90">
                        <Link href={item.href} className="transition-colors hover:text-white">
                          {item.title}
                        </Link>
                      </h4>
                      <p className="mt-3 text-[12.5px] leading-relaxed text-white/45">{item.description}</p>
                      <div className="mt-8 text-[10px] font-semibold tracking-[0.25em] text-white/30">
                        {item.category}
                      </div>
                    </div>

                    <div className="md:justify-self-center">
                      <Link
                        href={item.href}
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[12px] font-semibold tracking-[0.12em] text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                      >
                        READ
                      </Link>
                    </div>

                    <Link href={item.href} className="group block">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_22px_90px_rgba(0,0,0,0.55)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-white/15 group-hover:bg-white/[0.04] group-hover:shadow-[0_40px_160px_rgba(0,0,0,0.65)]">
                        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_35%,rgba(56,189,248,0.16),transparent_62%),radial-gradient(55%_55%_at_70%_70%,rgba(99,102,241,0.12),transparent_65%)]" />
                        </div>
                        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_30%_30%,rgba(148,163,184,0.14),transparent_60%),radial-gradient(60%_55%_at_70%_50%,rgba(99,102,241,0.12),transparent_62%),radial-gradient(55%_55%_at_60%_70%,rgba(56,189,248,0.10),transparent_65%)]" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-black/20 to-black/40" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex items-center gap-6">
                            <div className="text-[32px] font-semibold tracking-tight text-white/85">
                              {item.previewLabelLeft}
                            </div>
                            <div className="h-10 w-px bg-white/20" />
                            <div className="text-[32px] font-semibold tracking-tight text-white/85">
                              {item.previewLabelRight}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[520px]">
          <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_105%,rgba(249,115,22,0.35),transparent_55%),radial-gradient(90%_70%_at_50%_115%,rgba(59,130,246,0.22),transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/70" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:px-8 md:pb-28 lg:px-10">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
            {FOOTER_GROUPS.map((group, idx) => (
              <MotionReveal key={group.title} durationMs={780} delayMs={Math.min(260, idx * 60)}>
                <div>
                  <div className="text-[10px] font-semibold tracking-[0.25em] text-white/35">{group.title}</div>
                  <div className="mt-5 flex flex-col gap-3 text-[12.5px] text-white/55">
                    {group.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
