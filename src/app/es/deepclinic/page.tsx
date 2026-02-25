import Image from "next/image";
import Link from "next/link";

import type { SVGProps } from "react";

import { MotionReveal } from "@/components/motion-reveal";
import { DeepClinicTopNav } from "@/components/deepclinic-top-nav";
import { InteractiveStarburst } from "@/components/interactive-starburst";
import { DeepClinicWhatsApp } from "@/components/deepclinic-whatsapp";
import { DeepClinicHistory } from "@/components/deepclinic-history";
import { DeepClinicTriage } from "@/components/deepclinic-triage";
import { GrokBackground } from "@/components/grok-background";
import { DeepClinicPerfController } from "@/components/deepclinic-perf-controller";
import { DeepClinicFxFrame } from "@/components/deepclinic-fx-frame";
import { DeepClinicImpactWall } from "@/components/deepclinic-impact-wall";
import { DeepClinicReviewsWall } from "@/components/deepclinic-reviews-wall";

const INFRA_CARDS = [
  {
    href: "/es/product",
    title: "DeepClinic Copiloto",
    description: "La IA que escucha, analiza y escribe por ti. Transforma consultas en notas clínicas perfectas, detecta riesgos en tiempo real y codifica diagnósticos automáticamente. Todo mientras tú solo te enfocas en el paciente.",
    painPoints: ["Notas manuales", "Burocracia", "Fatiga"],
    metrics: [
      { value: "2h/día", label: "Ahorradas" },
      { value: "100%", label: "Auditoría" },
      { value: "<3s", label: "Latencia" },
    ],
    cta: "Ver Copiloto",
    accent: "rgba(56, 189, 248, 0.5)", // sky-400
    delayMs: 0,
  },
  {
    href: "/es/revenue",
    title: "DeepClinic Ingresos",
    description: "El motor financiero que nunca duerme. Audita cada procedimiento, valida coberturas en segundos y recupera ingresos perdidos por glosas o errores de facturación antes de que ocurran.",
    painPoints: ["Glosas", "Fugas", "Cobranza"],
    metrics: [
      { value: "99%", label: "Aprobación" },
      { value: "↓40%", label: "Glosas" },
      { value: "24/7", label: "Activo" },
    ],
    cta: "Ver Ingresos",
    accent: "rgba(167, 255, 124, 0.5)", // lime
    delayMs: 100,
  },
  {
    href: "/es/desk",
    title: "DeepClinic Agentes",
    description: "Tu recepción infinita. Agentes de IA que contestan WhatsApps, agendan citas y resuelven dudas de pacientes al instante, con la misma empatía y precisión que tu mejor humano.",
    painPoints: ["Llamadas", "Ausentismo", "Espera"],
    metrics: [
      { value: "<10s", label: "Respuesta" },
      { value: "+30%", label: "Citas" },
      { value: "24/7", label: "Cobertura" },
    ],
    cta: "Ver Agentes",
    accent: "rgba(244, 63, 94, 0.5)", // rose-500
    delayMs: 0,
  },
  {
    href: "/es/booking",
    title: "DeepClinic Agenda",
    description: "El calendario que se gestiona solo. Optimiza huecos, reduce el ausentismo con recordatorios inteligentes y prioriza urgencias automáticamente según la gravedad clínica.",
    painPoints: ["Huecos", "No-shows", "Caos"],
    metrics: [
      { value: "↓25%", label: "Ausentismo" },
      { value: "+15%", label: "Ocupación" },
      { value: "Auto", label: "Recordatorios" },
    ],
    cta: "Ver Agenda",
    accent: "rgba(168, 85, 247, 0.5)", // purple-500
    delayMs: 100,
  },
  {
    href: "/es/platform",
    title: "DeepClinic Núcleo",
    description: "La infraestructura de inteligencia clínica para el mundo. Una API unificada para integrar razonamiento médico de vanguardia, guardrails de seguridad y trazabilidad total en cualquier sistema de salud.",
    painPoints: ["Silos", "Legacy", "Seguridad"],
    metrics: [
      { value: "180M+", label: "Decisiones" },
      { value: "99.9%", label: "Uptime" },
      { value: "SOC2", label: "Seguridad" },
    ],
    cta: "Ver API",
    accent: "rgba(255, 255, 255, 0.5)", // white
    delayMs: 0,
  },
  {
    href: "/es/health",
    title: "DeepClinic Familia",
    description: "Salud conectada para quienes más importan. Un sistema que monitorea, alerta y coordina el cuidado de tus seres queridos, integrando datos clínicos con atención preventiva en tiempo real.",
    painPoints: ["Dispersión", "Dudas", "Urgencias"],
    metrics: [
      { value: "24/7", label: "Monitoreo" },
      { value: "100%", label: "Paz mental" },
      { value: "Familia", label: "Conectada" },
    ],
    cta: "Ver Familia",
    accent: "rgba(251, 146, 60, 0.5)", // orange-400
    delayMs: 100,
  },
  {
    href: "/es/imaging",
    title: "DeepClinic Imágenes",
    description: "El ojo clínico que todo lo ve. Análisis instantáneo de radiografías, tomografías y resonancias con precisión de especialista, detectando anomalías sutiles que el ojo humano podría pasar por alto.",
    painPoints: ["Error", "Demora", "Subjetividad"],
    metrics: [
      { value: "<5s", label: "Análisis" },
      { value: "99.8%", label: "Sensibilidad" },
      { value: "Multi", label: "Modalidad" },
    ],
    cta: "Ver Imágenes",
    accent: "rgba(236, 72, 153, 0.5)", // pink-500
    delayMs: 0,
  },
] as const;

const DOCTOR_REVIEWS = [
  {
    initials: "VQ",
    name: "Dra. Valeria Quintana",
    specialty: "Medicina interna",
    location: "Monterrey, MX",
    product: "Copiloto",
    rating: 5,
    accent: "rgba(56, 189, 248, 0.55)",
    quote:
      "En guardia hago notas en minutos y con una estructura impecable. Lo que más valoro es la trazabilidad: puedo justificar cada decisión y ajustar el texto sin perder el flujo.",
  },
  {
    initials: "AR",
    name: "Dr. Andrés Roldán",
    specialty: "Urgencias",
    location: "CDMX, MX",
    product: "Triage",
    rating: 5,
    accent: "rgba(244, 63, 94, 0.55)",
    quote:
      "La priorización clínica es consistente y rápida. Me ayuda a documentar riesgos y alertas sin depender de memoria; la sala se mueve más fluida y con menos omisiones.",
  },
  {
    initials: "MC",
    name: "Dra. Mariana Cifuentes",
    specialty: "Pediatría",
    location: "Bogotá, CO",
    product: "Historia",
    rating: 5,
    accent: "rgba(34, 197, 94, 0.55)",
    quote:
      "Por fin tengo un historial universal que no se rompe entre consultas. Cuando llega un niño con antecedentes complejos, el contexto aparece claro y listo para decidir.",
  },
  {
    initials: "JG",
    name: "Dr. Javier Gutiérrez",
    specialty: "Ortopedia",
    location: "Guadalajara, MX",
    product: "Agenda",
    rating: 5,
    accent: "rgba(168, 85, 247, 0.55)",
    quote:
      "La agenda dejó de ser un dolor. Los recordatorios bajaron ausentismo y, cuando hay urgencias, el reacomodo es inmediato. Se nota el impacto en productividad.",
  },
  {
    initials: "LS",
    name: "Dra. Lucía Salvatierra",
    specialty: "Ginecología y obstetricia",
    location: "Lima, PE",
    product: "Agentes",
    rating: 5,
    accent: "rgba(244, 63, 94, 0.55)",
    quote:
      "Los agentes responden WhatsApp con empatía y precisión. Dejan todo documentado y filtran dudas repetidas; mi equipo se enfoca en pacientes, no en mensajes.",
  },
  {
    initials: "PC",
    name: "Dr. Pablo Carranza",
    specialty: "Radiología",
    location: "Santiago, CL",
    product: "Imágenes",
    rating: 5,
    accent: "rgba(236, 72, 153, 0.55)",
    quote:
      "La lectura preliminar acelera la priorización. No sustituye criterio, pero reduce el tiempo de respuesta y estandariza hallazgos. Muy útil en turnos cargados.",
  },
  {
    initials: "SR",
    name: "Dra. Sofía Rivas",
    specialty: "Cardiología",
    location: "Madrid, ES",
    product: "Ingresos",
    rating: 5,
    accent: "rgba(167, 255, 124, 0.55)",
    quote:
      "La cuenta justificada cambió la conversación con auditoría: evidencia clínica + reglas claras. Menos retrabajo y menos fricción con facturación.",
  },
  {
    initials: "DM",
    name: "Dr. Diego Mena",
    specialty: "Anestesiología",
    location: "Quito, EC",
    product: "Núcleo / API",
    rating: 5,
    accent: "rgba(255, 255, 255, 0.55)",
    quote:
      "Integrarlo al sistema del hospital fue sorprendentemente directo. Lo que me tranquiliza son los guardrails y la auditoría: se puede operar con estándares clínicos.",
  },
] as const;

const FOOTER_GROUPS = [
  {
    title: "PRODUCTOS",
    links: [
      { label: "Copiloto", href: "/es/product" },
      { label: "Ingresos", href: "/es/revenue" },
      { label: "Agentes", href: "/es/desk" },
      { label: "Agenda", href: "/es/booking" },
      { label: "Familia", href: "/es/health" },
      { label: "Imágenes", href: "/es/imaging" },
    ],
  },
  {
    title: "PLATAFORMA",
    links: [
      { label: "API & SDK", href: "/es/platform" },
      { label: "Integraciones", href: "/es/integrations" },
      { label: "Seguridad", href: "/es/data-security" },
      { label: "Modelos", href: "/es/models" },
    ],
  },
  {
    title: "COMPAÑÍA",
    links: [
      { label: "Sobre nosotros", href: "/es/about" },
      { label: "Carreras", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contacto", href: "/contact" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacidad", href: "/es/privacy-policy" },
      { label: "Términos", href: "/es/terms-of-service" },
      { label: "BAA", href: "/legal/baa" },
    ],
  },
  {
    title: "SOCIAL",
    links: [
      { label: "Twitter", href: "https://twitter.com/deepclinic" },
      { label: "LinkedIn", href: "https://linkedin.com/company/deepclinic" },
      { label: "GitHub", href: "https://github.com/deepclinic" },
    ],
  },
] as const;

const FAMILY_MEMBERS = [
  {
    name: "Abuela",
    videoSrc: "/video/696604acc25b997c8d38dea0_697c494dd49cc251342b0d37_luffu-grandma-v2_mp4.mp4",
    type: "video/mp4",
    location: "Casa",
  },
  {
    name: "Todd",
    videoSrc: "/video/696604acc25b997c8d38dea0_697c49720a7fedf935d44d89_luffu-todd-v2_mp4.mp4",
    type: "video/mp4",
    location: "Casa",
  },
  {
    name: "Mamá",
    videoSrc: "/video/696604acc25b997c8d38dea0_697c49791106f47542e76f7a_luffu-mom-v2_webm.webm",
    type: "video/webm",
    location: "Casa",
  },
  {
    name: "Papá",
    videoSrc: "/video/696604acc25b997c8d38dea0_697ce8118f60a7de162bcc89_luffu-dad-v9_webm.webm",
    type: "video/webm",
    location: "Casa",
  },
  {
    name: "Abuelo",
    videoSrc: "/video/696604acc25b997c8d38dea0_697c4957944f4d906d024b47_luffu-grandpa-v2_mp4.mp4",
    type: "video/mp4",
    location: "Casa",
  },
  {
    name: "Ziggy",
    videoSrc: "/video/696604acc25b997c8d38dea0_697c496736963c8ca2534f16_luffu-ziggy-v2_mp4.mp4",
    type: "video/mp4",
    location: "Casa",
  },
] as const;

type InfraCardProps = {
  href: string;
  title: string;
  description: string;
  painPoints: readonly string[];
  metrics: readonly { value: string; label: string }[];
  cta: string;
  accent: string;
  delayMs: number;
};

function ProductsOverviewMosaic({ items }: { items: readonly InfraCardProps[] }) {
  const featured = items.find((i) => i.href === "/es/product") ?? items[0];
  const primary = items.filter((i) => i.href === "/es/booking" || i.href === "/es/desk");
  const secondary = items.filter((i) => ![featured.href, ...primary.map((p) => p.href)].includes(i.href));

  return (
    <section className="relative z-10 min-h-[100svh] snap-start flex items-center px-6 pt-20 pb-12 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-screen-2xl">
        <MotionReveal durationMs={760} className="w-full">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
            <div className="max-w-xl">
              <div className="text-[10px] font-semibold tracking-[0.25em] text-white/35">[ PRODUCTOS ]</div>
              <h2 className="mt-7 text-balance text-[clamp(34px,4.8vw,60px)] font-semibold leading-[0.95] tracking-tight text-white">
                Suite clínica completa.
                <span className="text-white/40"> Un núcleo, múltiples productos.</span>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-white/60">
                Cada módulo está diseñado para una etapa distinta de la atención médica, pero todos comparten el mismo contexto y seguridad.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {["De la cita a la consulta", "Seguimiento 24/7", "Trazabilidad clínica", "Menos fricción"].map((t) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[12.5px] text-white/70">
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-12 gap-4">
                <Link
                  href={featured.href}
                  className="relative col-span-12 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] lg:col-span-7 lg:row-span-2"
                >
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 opacity-70" style={{ background: `radial-gradient(70% 70% at 70% 30%, ${featured.accent}, transparent 65%)` }} />
                    <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 h-full w-full object-cover opacity-35">
                      <source src="/tandem-hero-thumb-16-9_esp.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/55 to-black/80" />
                  </div>

                  <div className="relative flex h-full flex-col justify-between p-7 md:p-10">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50">{featured.title}</div>
                      <div className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">Notas perfectas, riesgos detectados, códigos listos.</div>
                      <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-white/55 md:text-[14px]">
                        {featured.description}
                      </p>
                    </div>

                    <div>
                      <div className="mt-8 grid gap-3 sm:grid-cols-3">
                        {featured.metrics.slice(0, 3).map((m) => (
                          <div key={m.label} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4">
                            <div className="text-[22px] font-semibold tracking-tight text-white">{m.value}</div>
                            <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">{m.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80">
                        Ver Copiloto
                        <span className="ml-2" aria-hidden>
                          ↗
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                {primary.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="relative col-span-12 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-7 md:p-8 lg:col-span-5"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: `radial-gradient(70% 70% at 30% 20%, ${p.accent}, transparent 65%)` }} />
                    <div className="relative">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50">{p.title}</div>
                      <div className="mt-4 text-[18px] font-semibold tracking-tight text-white">{p.cta}</div>
                      <p className="mt-3 line-clamp-3 text-[13px] leading-relaxed text-white/55">{p.description}</p>

                      <div className="mt-7 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                        <div className="text-[11px] text-white/55">Impacto</div>
                        <div className="text-right">
                          <div className="text-[11px] font-semibold text-white/80">{p.metrics[0]?.value}</div>
                          <div className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">{p.metrics[0]?.label}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}

                {secondary.slice(0, 4).map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="relative col-span-12 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-6 md:p-7 sm:col-span-6 lg:col-span-3"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-60" style={{ background: `radial-gradient(80% 80% at 30% 20%, ${p.accent}, transparent 68%)` }} />
                    <div className="relative">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50">{p.title}</div>
                      <div className="mt-3 text-[14px] font-semibold tracking-tight text-white/90">{p.cta}</div>
                      <div className="mt-5 flex items-center justify-between">
                        <div className="text-[10px] text-white/45">{p.metrics[0]?.label}</div>
                        <div className="text-[11px] font-semibold text-white/80">{p.metrics[0]?.value}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

function ProductDeepDive({
  step,
  href,
  title,
  headline,
  description,
  bullets,
  accent,
  cta,
}: {
  step: string;
  href: string;
  title: string;
  headline: string;
  description: string;
  bullets: readonly string[];
  accent: string;
  cta: string;
}) {
  return (
    <section className="relative z-10 w-full min-h-[100svh] snap-start flex items-start px-6 pt-20 pb-12 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-screen-2xl">
        <MotionReveal durationMs={780} className="w-full">
          <div className="relative isolate grid min-h-[72svh] w-full items-start gap-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-8 md:min-h-[76svh] md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:p-14">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 opacity-70" style={{ background: `radial-gradient(80% 70% at 15% 20%, ${accent}, transparent 65%)` }} />
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/15 to-black/55" />
            </div>

            <div className="relative z-10 max-w-xl self-start">
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">STEP {step}</div>
              <h3 className="mt-6 text-balance text-[clamp(30px,3.4vw,46px)] font-semibold leading-[0.98] tracking-tight text-white">
                {title}
              </h3>
              <div className="mt-6 text-[18px] font-medium text-white/80">{headline}</div>
              <p className="mt-6 text-[14px] leading-relaxed text-white/55">{description}</p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/25">
                <div className="border-b border-white/10 bg-white/[0.02] px-4 py-3">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Capacidades</div>
                </div>
                <div className="px-4 py-3">
                  <div className="grid gap-2">
                    {bullets.slice(0, 4).map((b, idx) => (
                      <div
                        key={b}
                        className={
                          "flex items-start gap-3 py-2 " +
                          (idx === 0 ? "pt-0" : "") +
                          (idx < Math.min(4, bullets.length) - 1 ? " border-b border-white/10" : "")
                        }
                      >
                        <div className="mt-[7px] h-1.5 w-1.5 rounded-full" style={{ background: accent, boxShadow: `0 0 16px ${accent}` }} />
                        <div className="text-[12.5px] leading-relaxed text-white/75">{b}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href={href} className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80">
                  {cta}
                  <span className="ml-2" aria-hidden>
                    ↗
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <DeepClinicFxFrame accent={accent} variant="video" tilt={false} spotlight scanlines shimmer cursor className="mx-auto w-full max-w-[860px]">
                <div className="relative p-5 md:p-6">
                  <InfraVisual href={href} accent={accent} />
                </div>
              </DeepClinicFxFrame>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

function DeepClinicRevenuePower() {
  const accent = "rgba(167, 255, 124, 0.55)";
  const tone = "rgba(167, 255, 124, 0.78)";

  const challengeCards = [
    {
      title: "Historia clínica",
      metric: "+250 páginas de evoluciones, prescripciones, labs y estudios",
    },
    {
      title: "Contratos comerciales",
      metric: "+100 contratos por hospital con reglas distintas entre sí",
    },
    {
      title: "HIS / EMR",
      metric: "+18 horas de trabajo manual dentro del HIS",
    },
  ] as const;

  const solution = [
    {
      title: "IA interpreta contratos",
      description:
        "Lee cláusulas, aplica reglas y valida coberturas automáticamente para que cada cargo esté justificado.",
    },
    {
      title: "IA analiza datos clínicos",
      description:
        "Cruza evoluciones, prescripciones e imágenes con reglas de auditoría para detectar inconsistencias antes de facturar.",
    },
    {
      title: "IA genera cuenta justificada",
      description:
        "Produce una cuenta médica completa, trazable y lista para auditoría externa con máxima transparencia.",
    },
    {
      title: "IA integra en tu HIS",
      description:
        "Inserta ítems validados en el sistema interno del hospital y elimina retrabajo administrativo.",
    },
  ] as const;

  return (
    <section className="relative z-10 w-full box-border min-h-[100svh] snap-start flex items-start px-6 pt-16 pb-12 md:px-8 lg:h-[100svh] lg:items-center lg:px-10 lg:pt-[56px] lg:pb-[40px]">
      <div className="mx-auto w-full max-w-screen-2xl">
        <MotionReveal durationMs={780} className="w-full">
          <div className="relative isolate grid min-h-[72svh] w-full items-start gap-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-7 md:min-h-[76svh] md:p-9 lg:h-[calc(100svh-96px)] lg:min-h-0 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:p-9">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 opacity-70" style={{ background: `radial-gradient(80% 70% at 15% 20%, ${accent}, transparent 65%)` }} />
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/15 to-black/55" />
            </div>

            <div className="relative z-10 max-w-xl self-start">
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">STEP 06</div>
              <h3 className="mt-6 text-balance text-[clamp(30px,3.4vw,46px)] font-semibold leading-[0.98] tracking-tight text-white">
                DeepClinic Ingresos
              </h3>
              <div className="mt-5 text-[16px] font-medium text-white/80">Cuenta médica perfecta. Sin fugas.</div>
              <p className="mt-6 text-[14px] leading-relaxed text-white/55">
                Convierte una operación compleja en un flujo automático: interpreta contratos, valida evidencia clínica y recupera ingresos antes de que se pierdan por glosas o errores.
              </p>

              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: tone, boxShadow: `0 0 16px ${tone}` }} />
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">El desafío</div>
                </div>
                <div className="mt-3 text-balance text-[16px] font-semibold leading-tight text-white/85 md:text-[18px]">
                  La complejidad de una cuenta médica de 5 días es sobrehumana.
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-3 lg:mt-3">
                  {challengeCards.map((card, idx) => (
                    <div key={card.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                      <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: `radial-gradient(110% 90% at 30% 15%, ${accent}, transparent 62%)` }} />
                      <div className="relative p-3">
                        <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-black/35">
                          <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "radial-gradient(70% 70% at 30% 20%, rgba(255,255,255,0.08), transparent 65%)" }} />
                          <div
                            className="absolute left-1/2 top-[58%] h-[120%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-[14px] border border-white/10 bg-white/[0.04]"
                            style={{ transform: `translate(-50%, -50%) rotate(${idx === 0 ? -10 : idx === 1 ? -4 : 8}deg)` }}
                          >
                            <div className="absolute left-5 top-6 h-2 w-24 rounded-full bg-white/10" />
                            <div className="absolute left-5 top-12 h-2 w-16 rounded-full bg-white/10" />
                            <div className="absolute inset-x-5 top-20 h-px bg-white/10" />
                            <div className="absolute left-5 top-24 right-5 grid gap-2">
                              <div className="h-2 w-[92%] rounded-full bg-white/10" />
                              <div className="h-2 w-[86%] rounded-full bg-white/10" />
                              <div className="h-2 w-[78%] rounded-full bg-white/10" />
                              <div className="h-2 w-[88%] rounded-full bg-white/10" />
                            </div>
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/60 to-transparent" />
                          </div>
                        </div>

                        <div className="mt-3">
                          <div className="text-[13px] font-semibold leading-snug text-white/85">{card.title}</div>
                          <div className="mt-2 text-[11.5px] leading-relaxed text-white/55 line-clamp-3 lg:line-clamp-2">{card.metric}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <Link href="/es/revenue" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80">
                  Ver Ingresos
                  <span className="ml-2" aria-hidden>
                    ↗
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative flex flex-col gap-3 lg:gap-2">
              <DeepClinicFxFrame accent={accent} variant="video" tilt={false} spotlight scanlines shimmer cursor className="mx-auto w-full max-w-[860px]">
                <div className="relative p-3 md:p-4 lg:p-3">
                  <InfraVisual href="/es/revenue" accent={accent} />
                </div>
              </DeepClinicFxFrame>

              <div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: tone, boxShadow: `0 0 16px ${tone}` }} />
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Nuestra solución</div>
                </div>

                <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:mt-2">
                  {solution.map((item) => (
                    <div key={item.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4 lg:p-3">
                      <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: `radial-gradient(110% 95% at 25% 15%, ${accent}, transparent 62%)` }} />
                      <div className="relative">
                        <div className="text-[12px] font-semibold tracking-tight text-white/85">{item.title}</div>
                        <div className="mt-2 text-[12px] leading-relaxed text-white/55 line-clamp-3 lg:line-clamp-2">{item.description}</div>
                        <div className="mt-4 h-px w-full bg-gradient-to-r from-white/0 via-white/12 to-white/0" />
                        <div className="mt-3 flex items-center justify-between">
                          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">DeepClinic</div>
                          <div className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-medium text-white/55">
                            Ingresos
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

function InfraVisual({ href, accent }: { href: string; accent: string }) {
  if (href === "/es/imaging") {
    return (
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-60" style={{ background: `radial-gradient(100% 90% at 30% 20%, ${accent}, transparent 62%)` }} />
          <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_70%_65%,rgba(255,255,255,0.06),transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/55" />
        </div>

        <div className="relative aspect-[16/10] w-full">
          <div className="absolute inset-0">
            <Image
              src="/images/image.png"
              alt="Análisis de imágenes médicas"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 768px) 92vw, (max-width: 1200px) 720px, 860px"
            />
            {/* Scan overlay effect */}
            <div
              className="dc_motion absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, transparent 0%, rgba(168,85,247,0.1) 50%, transparent 100%)",
                height: "30%",
                top: "-30%",
                animation: "dc_scan_y 4s ease-in-out infinite"
              }}
            />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
          </div>

          {/* Floating UI Elements over the image */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-md">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-medium text-white/90">Análisis completado</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (href === "/es/desk") {
    return (
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60">
        <video autoPlay loop muted playsInline preload="auto" className="h-auto w-full object-cover aspect-[4/3] opacity-90">
          <source src="/video/deep.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/55" />
      </div>
    );
  }

  if (href === "/es/booking") {
    return (
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-90"
        >
          <source src="/video/agenda.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
    );
  }

  if (href === "/es/product") {
    return (
      <div className="relative overflow-hidden rounded-xl bg-black/40 border border-white/10">
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="absolute inset-0 opacity-70" style={{ background: `radial-gradient(100% 90% at 30% 20%, ${accent}, transparent 62%)` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/55" />
        </div>

        <div className="relative aspect-[16/10] w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          >
            <source src="/tandem-hero-thumb-16-9_esp.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }

  if (href === "/es/revenue") {
    const nodes = [
      { label: "Evoluciones\nclínicas", x: 175, y: 70, delay: "-0.2s" },
      { label: "Laboratorio\ny estudios", x: 230, y: 155, delay: "-1.0s" },
      { label: "Prescripciones\ny verificaciones", x: 305, y: 275, delay: "-1.8s" },
      { label: "Notas\nquirúrgicas", x: 235, y: 400, delay: "-2.6s" },
      { label: "Contratos\ncomerciales", x: 175, y: 505, delay: "-3.4s" },
    ] as const;

    const hub = { x: 560, y: 340 };
    const core = { x: 720, y: 340 };
    const panelAnchor = { x: 940, y: 120 };

    const flowGlow = "rgba(167, 255, 124, 0.78)";
    return (
      <div className="dc_rev_ambient relative overflow-hidden rounded-xl border border-white/10 bg-black/60">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <div className="h-2 w-24 rounded-full bg-white/10" />
          </div>
          <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-medium text-white/60">
            Cuenta médica
          </div>
        </div>

        <div className="relative p-4">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(52% 58% at 66% 55%, rgba(167,255,124,0.18), transparent 65%), radial-gradient(48% 52% at 58% 52%, rgba(167,255,124,0.12), transparent 62%)",
            }}
          />

          <div className="relative h-[clamp(210px,28vh,300px)]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="dc_rev_line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="rgba(255,255,255,0.10)" />
                  <stop offset="0.5" stopColor={flowGlow} stopOpacity="0.55" />
                  <stop offset="1" stopColor="rgba(255,255,255,0.06)" />
                </linearGradient>

                <filter id="dc_rev_glow" x="-60%" y="-60%" width="220%" height="220%" colorInterpolationFilters="sRGB">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {nodes.map((n) => {
                const cx = (n.x + hub.x) / 2;
                const d = `M ${n.x} ${n.y} C ${cx} ${n.y}, ${cx} ${hub.y}, ${hub.x} ${hub.y}`;
                return (
                  <g key={n.label} opacity="0.95">
                    <path
                      d={d}
                      stroke={flowGlow}
                      strokeWidth="8"
                      opacity="0.18"
                      filter="url(#dc_rev_glow)"
                    />
                    <path
                      d={d}
                      stroke="url(#dc_rev_line)"
                      strokeWidth="2.4"
                      opacity="0.95"
                    />
                    <path
                      d={d}
                      className="dc_rev_flow"
                      style={{ animationDelay: n.delay }}
                      stroke={flowGlow}
                      strokeWidth="1.6"
                      opacity="0.55"
                      strokeLinecap="round"
                    />
                  </g>
                );
              })}

              <g opacity="0.98">
                {(() => {
                  const d = `M ${hub.x} ${hub.y} C ${(hub.x + core.x) / 2} ${hub.y - 10}, ${(hub.x + core.x) / 2} ${core.y + 10}, ${core.x} ${core.y}`;
                  return (
                    <>
                      <path
                        d={d}
                        stroke={flowGlow}
                        strokeWidth="10"
                        opacity="0.22"
                        filter="url(#dc_rev_glow)"
                      />
                      <path
                        d={d}
                        stroke="url(#dc_rev_line)"
                        strokeWidth="3"
                        opacity="0.98"
                      />
                      <path
                        d={d}
                        className="dc_rev_flow"
                        stroke={flowGlow}
                        strokeWidth="1.8"
                        opacity="0.6"
                        strokeLinecap="round"
                      />
                    </>
                  );
                })()}
              </g>

              <g opacity="0.9">
                {(() => {
                  const d = `M ${hub.x + 36} ${hub.y - 46} C ${hub.x + 150} ${hub.y - 210}, ${panelAnchor.x - 160} ${panelAnchor.y + 40}, ${panelAnchor.x} ${panelAnchor.y}`;
                  return (
                    <>
                      <path
                        d={d}
                        stroke={flowGlow}
                        strokeWidth="8"
                        opacity="0.12"
                        filter="url(#dc_rev_glow)"
                      />
                      <path
                        d={d}
                        stroke="rgba(255,255,255,0.12)"
                        strokeWidth="2"
                        opacity="0.9"
                      />
                      <path
                        d={d}
                        className="dc_rev_flow"
                        style={{ animationDelay: "-2.4s" }}
                        stroke={flowGlow}
                        strokeWidth="1.6"
                        opacity="0.5"
                        strokeLinecap="round"
                      />
                    </>
                  );
                })()}
              </g>
            </svg>

            {nodes.map((n) => (
              <div
                key={n.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${(n.x / 1000) * 100}%`, top: `${(n.y / 600) * 100}%` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/10 bg-black/60"
                    style={{ boxShadow: `0 0 22px ${flowGlow}` }}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 rounded-full opacity-60"
                      style={{
                        background: `radial-gradient(60% 60% at 35% 30%, ${flowGlow}, transparent 68%)`,
                      }}
                    />
                    <div className="pointer-events-none absolute inset-1 rounded-full border border-white/10" />
                    <div
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        background: flowGlow,
                        boxShadow: `0 0 16px ${flowGlow}`,
                      }}
                    />
                  </div>
                  <div className="whitespace-pre-line text-[10px] font-semibold leading-tight text-white/55">{n.label}</div>
                </div>
              </div>
            ))}

            <div
              className="absolute -translate-y-1/2 -translate-x-full md:-translate-x-1/2"
              style={{ left: `${(hub.x / 1000) * 100}%`, top: `${(hub.y / 600) * 100}%` }}
            >
              <div
                className="relative flex h-[62px] w-[62px] items-center justify-center rounded-full border border-white/10 bg-black/60 sm:h-[74px] sm:w-[74px]"
                style={{ boxShadow: `0 0 28px ${flowGlow}` }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-full opacity-60"
                  style={{
                    background: `radial-gradient(60% 60% at 35% 30%, ${flowGlow}, transparent 70%)`,
                  }}
                />
                <div className="absolute inset-2 rounded-full border border-white/10" />
                <div className="relative text-[11px] font-semibold tracking-[0.22em] text-white/85">IA</div>
              </div>
            </div>

            <div
              className="absolute -translate-y-1/2 -translate-x-full md:-translate-x-1/2"
              style={{ left: `${(core.x / 1000) * 100}%`, top: `${(core.y / 600) * 100}%` }}
            >
              <div
                className="relative flex h-[82px] w-[82px] items-center justify-center rounded-full border border-white/10 bg-black/60 sm:h-[98px] sm:w-[98px]"
                style={{ boxShadow: `0 0 34px ${flowGlow}` }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-full opacity-60"
                  style={{
                    background: `radial-gradient(62% 62% at 35% 30%, rgba(167,255,124,0.55), transparent 70%)`,
                  }}
                />
                <div className="absolute inset-3 rounded-full border border-white/10" />
                <div className="absolute inset-7 rounded-full border border-white/10" />
                <div className="relative text-[12px] font-semibold tracking-[0.16em] text-white/85">DC</div>
              </div>
            </div>

            <div
              className="absolute right-4 top-6 z-10"
            >
              <div className="w-[180px] sm:w-[210px] md:w-[240px] lg:w-[260px] rounded-2xl border border-white/10 bg-black/70 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-white/20" />
                    <div className="h-2 w-2 rounded-full bg-white/20" />
                    <div className="h-2 w-2 rounded-full bg-white/20" />
                  </div>
                  <div className="text-[11px] font-medium text-white/70">Cuenta médica</div>
                </div>

                <div className="px-4 py-3 text-[10px] text-white/70 sm:text-[11px]">
                  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-1">
                    <div className="text-white/45">Cargo</div>
                    <div className="min-w-0 truncate text-right font-medium text-white/80">Aire comprimido</div>
                    <div className="text-right text-white/55">+ 4 h</div>
                  </div>
                  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-1">
                    <div className="text-white/45">Material</div>
                    <div className="min-w-0 truncate text-right font-medium text-white/80">Equipo macro</div>
                    <div className="text-right text-white/55">+ 1</div>
                  </div>
                  <div className="mt-2 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2">
                    <div className="flex items-start gap-2">
                      <div
                        className="mt-0.5 h-2.5 w-2.5 rounded-sm"
                        style={{ background: "rgba(245,158,11,0.35)", boxShadow: "0 0 12px rgba(245,158,11,0.25)" }}
                      />
                      <div className="leading-snug text-white/55">
                        Falta nota de cambio de dieta enteral
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (href === "/es/platform") {
    return (
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <div className="h-2 w-28 rounded-full bg-white/10" />
          </div>
          <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-medium text-white/60">
            Core
          </div>
        </div>

        <div className="relative p-4">
          <div
            className="dc_motion pointer-events-none absolute inset-0 opacity-0"
            style={{
              backgroundImage:
                "linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.10) 45%, transparent 60%)",
              backgroundSize: "200% 100%",
              animation: "dc_shimmer 13.5s ease-in-out infinite",
            }}
          />

          <div className="relative grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <div className="text-[10px] font-semibold tracking-[0.22em] text-white/40">DEEPCLINIC 1</div>
                <div className="mt-2 h-2 w-5/6 rounded-full bg-white/10" />
                <div className="mt-2 h-2 w-2/3 rounded-full bg-white/5" />
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {["Guardrails", "Trazabilidad", "Especialidad", "Privacidad"].map((tag, i) => (
                    <div
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-center text-[10px] font-medium text-white/55"
                    >
                      <span
                        className="dc_motion inline-block"
                        style={{
                          animation: "dc_soft_pulse 4.6s ease-in-out infinite",
                          animationDelay: `${-0.4 - i * 0.5}s`,
                        }}
                      >
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-semibold tracking-[0.22em] text-white/40">RUTAS</div>
                  <div className="text-[10px] font-medium text-white/50">Activas</div>
                </div>
                <div className="mt-3 space-y-2">
                  {[
                    { label: "Cita → Triage", tone: "rgba(59,130,246,0.60)", delay: "-0.4s" },
                    { label: "Consulta → Registro", tone: "rgba(245,158,11,0.60)", delay: "-1.0s" },
                    { label: "Seguimiento", tone: "rgba(16,185,129,0.60)", delay: "-1.6s" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2">
                      <div
                        className="dc_motion h-2 w-2 rounded-full"
                        style={{
                          background: row.tone,
                          boxShadow: `0 0 14px ${row.tone}`,
                          animation: "dc_soft_pulse 3.4s ease-in-out infinite",
                          animationDelay: row.delay,
                        }}
                      />
                      <div className="text-[11px] font-medium text-white/70">{row.label}</div>
                      <div
                        className="dc_motion ml-auto h-6 w-10 rounded-lg border border-white/10"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          animation: "dc_bar_breathe 4.4s ease-in-out infinite",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <div
                className="dc_motion pointer-events-none absolute inset-x-0 top-0 h-16 opacity-0"
                style={{
                  background: `linear-gradient(180deg, transparent 0%, ${accent} 45%, transparent 100%)`,
                  animation: "dc_scan_y 9.2s ease-in-out infinite",
                }}
              />

              <div className="relative flex flex-col items-center">
                <div className="text-[10px] font-semibold tracking-[0.22em] text-white/40">ORQUESTACIÓN</div>
                <div className="mt-4 relative h-44 w-44">
                  <div
                    className="dc_motion absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(60% 60% at 30% 30%, ${accent}, transparent 70%)`,
                      animation: "dc_soft_pulse 5.2s ease-in-out infinite",
                    }}
                  />
                  <div className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.02]" />
                  <div className="absolute inset-5 rounded-full border border-white/10" />
                  <div className="absolute inset-10 rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
                  <div
                    className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-black/60"
                    style={{ boxShadow: `0 0 24px ${accent}` }}
                  >
                    <div className="flex h-full w-full items-center justify-center text-[11px] font-semibold text-white/80">DC1</div>
                  </div>

                  <div className="dc_motion absolute inset-0" style={{ animation: "dc_spin 14s linear infinite" }}>
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                        style={{
                          transform:
                            i === 0
                              ? "translate3d(60px, -52px, 0)"
                              : i === 1
                                ? "translate3d(-62px, 6px, 0)"
                                : "translate3d(18px, 70px, 0)",
                          background: i === 1 ? "rgba(255,255,255,0.18)" : accent,
                          boxShadow: i === 1 ? "0 0 14px rgba(255,255,255,0.20)" : `0 0 18px ${accent}`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid w-full grid-cols-3 gap-2">
                  {[
                    { label: "Razonamiento", tone: "rgba(255,255,255,0.04)" },
                    { label: "Herramientas", tone: "rgba(255,255,255,0.04)" },
                    { label: "Auditoría", tone: "rgba(255,255,255,0.04)" },
                  ].map((chip, i) => (
                    <div
                      key={chip.label}
                      className="rounded-full border border-white/10 px-3 py-2 text-center text-[10px] font-medium text-white/55"
                      style={{ background: chip.tone }}
                    >
                      <span
                        className="dc_motion inline-block"
                        style={{
                          animation: "dc_soft_pulse 4.8s ease-in-out infinite",
                          animationDelay: `${-0.6 - i * 0.6}s`,
                        }}
                      >
                        {chip.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (href === "/es/health") {
    return (
      <div className="relative flex items-center justify-center py-2">
        <div className="relative w-full max-w-[860px]">
          <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: `radial-gradient(70% 70% at 35% 35%, ${accent}, transparent 66%)` }} />

          <div className="pointer-events-none absolute inset-0 z-20 hidden items-start justify-between px-6 pt-10 lg:flex lg:px-8 xl:px-10 xl:pt-12">
            <div
              className="relative w-[220px] rounded-3xl border border-white/15 bg-black/55 px-5 py-4 text-white shadow-[0_30px_90px_rgba(0,0,0,0.65)] backdrop-blur-xl"
              style={{ boxShadow: `0 30px 90px rgba(0,0,0,0.65), 0 0 42px ${accent}` }}
            >
              <div className="absolute -right-10 top-8 hidden h-px w-12 bg-gradient-to-r from-white/25 to-white/0 lg:block" />
              <div className="flex items-start gap-3">
                <div
                  className="mt-0.5 h-9 w-9 rounded-2xl border border-white/10"
                  style={{ background: `radial-gradient(60% 60% at 30% 30%, ${accent}, rgba(255,255,255,0.06))` }}
                />
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold text-white/90">Recordatorio: medicación</div>
                  <div className="mt-1 text-[10px] leading-snug text-white/55">12:00 • Confirmar toma</div>
                </div>
              </div>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />
              <div className="mt-3 flex items-center justify-between">
                <div className="text-[10px] font-medium text-white/55">Pendiente</div>
                <div className="text-[10px] font-semibold tracking-widest text-white/70">1/3</div>
              </div>
            </div>

            <div
              className="relative w-[220px] rounded-3xl border border-white/15 bg-black/55 px-5 py-4 text-white shadow-[0_30px_90px_rgba(0,0,0,0.65)] backdrop-blur-xl"
              style={{ boxShadow: `0 30px 90px rgba(0,0,0,0.65), 0 0 42px rgba(16,185,129,0.22)` }}
            >
              <div className="absolute -left-10 top-8 hidden h-px w-12 bg-gradient-to-l from-white/25 to-white/0 lg:block" />
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[11px] font-semibold text-white/90">Cuidadores conectados</div>
                  <div className="mt-1 text-[10px] leading-snug text-white/55">Alertas y coordinación</div>
                </div>
                <div className="flex items-center gap-1 pt-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-2 w-2 rounded-full"
                      style={{
                        background: "rgba(16,185,129,0.75)",
                        boxShadow: "0 0 14px rgba(16,185,129,0.35)",
                        opacity: 0.85 - i * 0.15,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {["Seguimiento", "Medicinas", "Citas"].map((t) => (
                  <div key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[10px] font-medium text-white/70">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto w-[250px] sm:w-[290px] lg:w-[320px]">
            <div className="relative rounded-[52px] border border-white/10 bg-black/60 p-3 shadow-2xl">
              <div className="pointer-events-none absolute inset-0 rounded-[52px] border border-white/5" />

              <div className="relative overflow-hidden rounded-[44px] bg-[#0A0A0A]">
                <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(80% 70% at 50% 10%, ${accent}, transparent 60%)` }} />

                <div className="pointer-events-none absolute left-1/2 top-3 h-7 w-28 -translate-x-1/2 rounded-full bg-black/70 border border-white/10" />
                <div className="pointer-events-none absolute left-1/2 top-4 h-5 w-16 -translate-x-1/2 rounded-full bg-black/80" />

                <div className="relative aspect-[9/19]">
                  <div className="absolute inset-0 bg-black/90 flex min-h-0 flex-col">
                    <div className="flex items-center justify-between px-6 pt-12 pb-3 shrink-0">
                      <div className="flex items-center gap-4">
                        <div className="h-0.5 w-4 bg-white/80" />
                        <div className="h-5 w-5 rounded-full border border-white/20" />
                      </div>
                      <div className="text-[10px] font-medium text-white/60">9:41</div>
                    </div>

                    <div className="px-6 pb-4 shrink-0">
                      <div className="text-[10px] uppercase tracking-widest text-white/40">Monitoreo continuo</div>
                    </div>

                    <div className="grid flex-1 min-h-0 grid-cols-3 grid-rows-2 gap-[1px] bg-black">
                      {FAMILY_MEMBERS.map((m) => (
                        <div key={m.name} className="relative min-h-0 w-full overflow-hidden bg-[#111]">
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 h-full w-full object-cover opacity-90"
                            preload="auto"
                          >
                            <source src={m.videoSrc} type={m.type} />
                          </video>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          <div className="absolute bottom-3 left-0 w-full text-center">
                            <div className="text-[10px] font-semibold text-white/90">{m.name}</div>
                            <div className="text-[8px] font-medium text-white/50">{m.location}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center">
                    <div className="h-1 w-28 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-6 left-1/2 h-10 w-44 -translate-x-1/2 rounded-full bg-black/60 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <div className="h-2 w-24 rounded-full bg-white/10" />
        <div className="h-2 w-12 rounded-full bg-white/5" />
      </div>
      <div className="mt-5 relative h-32 overflow-hidden rounded-xl border border-white/5 bg-white/[0.02]">
        <div
          className="dc_motion pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(60% 60% at 30% 30%, ${accent}, transparent 65%)`,
            animation: "dc_soft_pulse 4.8s ease-in-out infinite",
          }}
        />
        {[{ x: "18%", y: "30%" }, { x: "45%", y: "55%" }, { x: "72%", y: "35%" }, { x: "80%", y: "70%" }].map(
          (p, i) => (
            <div
              key={i}
              className="dc_motion absolute h-3 w-3 rounded-full border border-white/10 bg-white/[0.04]"
              style={{
                left: p.x,
                top: p.y,
                animation: "dc_soft_pulse 3.6s ease-in-out infinite",
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ),
        )}
        <div className="absolute left-[18%] top-[30%] h-px w-[28%] bg-white/10" />
        <div className="absolute left-[45%] top-[55%] h-px w-[27%] bg-white/10" />
        <div className="absolute left-[72%] top-[35%] h-px w-[8%] bg-white/10" />
      </div>
    </div>
  );
}

function BrainCircuitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M9 13a4.5 4.5 0 0 0 3-4" />
      <path d="M6.003 5.125A3 3 0 0 1 19.502 11.6" />
      <path d="M12 18a4 4 0 0 0 4-3.464 4.004 4.004 0 0 0 3.498-6" />
      <path d="M12 18V5" />
    </svg>
  );
}

function ShieldCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ActivityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function DeepClinic1ComparisonSection() {
  return (
    <section className="relative z-10 h-[100svh] snap-start flex items-center">
      <div className="mx-auto w-full max-w-7xl px-6 pt-24 pb-16 md:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <MotionReveal durationMs={760}>
            <div>
              <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-500/20">
                <BrainCircuitIcon className="mr-1.5 h-3.5 w-3.5" />
                Inteligencia Artificial Especializada
              </div>
              <h2 className="mt-7 text-balance text-[clamp(34px,4.6vw,56px)] font-semibold leading-[0.95] tracking-tight text-white">
                Por qué DeepClinic1 es superior
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
                A diferencia de los modelos genéricos entrenados con todo internet, DeepClinic1 ha sido entrenado exclusivamente con literatura médica, guías de práctica clínica y millones de casos anonimizados.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                    <ShieldCheckIcon className="h-4 w-4 text-emerald-300" />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-white/85">Cero alucinaciones clínicas</div>
                    <div className="mt-1 text-[12.5px] leading-relaxed text-white/55">
                      Verificamos cada afirmación médica contra bases de datos confiables.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                    <ActivityIcon className="h-4 w-4 text-emerald-300" />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-white/85">Contexto profundo</div>
                    <div className="mt-1 text-[12.5px] leading-relaxed text-white/55">
                      Entiende historiales complejos y relaciones entre síntomas y tratamientos.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal durationMs={760} delayMs={180}>
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-8 md:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_80%_at_50%_20%,rgba(16,185,129,0.14),transparent_60%)]" />
              <div className="relative">
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Asertividad clínica</div>

                <div className="mt-8 space-y-7">
                  <div>
                    <div className="mb-2 flex items-end justify-between">
                      <span className="text-[12.5px] font-semibold text-white">DeepClinic1</span>
                      <span className="text-[22px] font-semibold text-emerald-300">98%</span>
                    </div>
                    <div className="h-4 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-emerald-500" style={{ width: "98%" }} />
                    </div>
                    <div className="mt-2 text-[11px] font-medium text-emerald-300/80">Especializado en medicina</div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-end justify-between">
                      <span className="text-[12.5px] font-medium text-white/60">LLMs genéricos (GPT-4, Gemini)</span>
                      <span className="text-[18px] font-semibold text-white/40">81%</span>
                    </div>
                    <div className="h-4 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-white/20" style={{ width: "81%" }} />
                    </div>
                    <div className="mt-2 text-[11px] font-medium text-white/40">Promedio de la industria general</div>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

function DeepClinicHospitalSecuritySection() {
  return (
    <section className="relative z-10 h-[100svh] snap-start flex items-center">
      <div className="mx-auto w-full max-w-7xl px-6 pt-24 pb-16 md:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <MotionReveal durationMs={760}>
            <h2 className="text-balance text-[clamp(32px,4.2vw,52px)] font-semibold leading-[0.95] tracking-tight text-white">
              Seguridad de grado hospitalario
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-white/60">
              Toda la plataforma DeepClinic cumple con los más estrictos estándares de privacidad.
            </p>
          </MotionReveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <MotionReveal durationMs={760} delayMs={140}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02]">
              <Image
                src="/hipaa.png"
                alt="Certificaciones de seguridad de DeepClinic"
                fill
                className="object-cover opacity-85"
                sizes="(min-width: 1024px) 44rem, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/35" />
            </div>
          </MotionReveal>

          <MotionReveal durationMs={760} delayMs={220}>
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-7 md:p-9">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_40%_10%,rgba(16,185,129,0.12),transparent_62%)]" />
              <div className="relative space-y-7">
                <h3 className="text-[22px] font-semibold tracking-tight text-white/90">Tus datos, siempre seguros</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <ShieldCheckIcon className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                    <span className="text-[13px] leading-relaxed text-white/65">Cumplimiento total con HIPAA y NOM</span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheckIcon className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                    <span className="text-[13px] leading-relaxed text-white/65">Encriptación de extremo a extremo</span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheckIcon className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                    <span className="text-[13px] leading-relaxed text-white/65">Almacenamiento seguro en Norteamérica</span>
                  </li>
                </ul>
                <div>
                  <Link href="/es/data-security" className="inline-flex items-center text-[12.5px] font-semibold text-emerald-300">
                    Conoce más sobre nuestra seguridad
                    <span className="ml-2" aria-hidden>
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}


export default function DeepClinicLandingPageEs() {
  return (
    <main className="dc_perf relative h-[100svh] overflow-x-hidden overflow-y-auto overscroll-x-none overscroll-y-none snap-none md:snap-y md:snap-mandatory bg-black text-white">
      <DeepClinicPerfController />
      {/* Fondo Grok-style: Animado */}
      <div className="dc_bg_static">
        <GrokBackground variant="hero" />
      </div>

      <DeepClinicTopNav showProductsSubnav />

      <section className="relative z-10 h-[100svh] snap-start flex items-center">
        <div className="relative mx-auto flex h-[100svh] max-w-6xl flex-col items-center justify-center px-6 pt-24 pb-16 md:max-w-7xl md:px-8 lg:px-10">
          <MotionReveal className="w-full" durationMs={820}>
            <div className="relative w-full">
              <div className="pointer-events-none mx-auto w-full max-w-full text-center">
                <div className="relative select-none font-sans text-[clamp(48px,13.5vw,220px)] font-bold leading-[0.85] tracking-tighter">
                  <div className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent opacity-90">
                    DeepClinic
                  </div>
                </div>
                <p className="mx-auto mt-8 max-w-2xl text-xl font-medium leading-relaxed text-white/70 md:text-2xl">
                  La inteligencia clínica definitiva.
                  <br />
                  <span className="text-white/40">Revolucionando la salud a escala planetaria.</span>
                </p>
              </div>
            </div>
          </MotionReveal>

        </div>
      </section>

      <section id="siguiente" className="relative z-10 h-[100svh] snap-start flex items-center">
        <div className="mx-auto flex h-[100svh] w-full max-w-7xl flex-col justify-center px-6 pt-24 pb-16 md:px-8 lg:px-10">
          <MotionReveal durationMs={760}>
            <div>
              <div className="text-[10px] font-semibold tracking-[0.25em] text-white/35">[ INFRAESTRUCTURA ]</div>
              <h2 className="mt-7 text-balance text-[40px] font-semibold tracking-tight text-white md:text-[54px]">
                El Sistema Operativo de la Medicina
              </h2>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="relative z-10 h-[100svh] snap-start flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 pt-24 pb-16 md:px-8 lg:px-10">
          <MotionReveal durationMs={760}>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div>
                <div className="text-[10px] font-semibold tracking-[0.25em] text-white/35">[ DEEPCLINIC 1 ]</div>
                <h2 className="mt-7 text-balance text-[clamp(34px,4.6vw,56px)] font-semibold leading-[0.95] tracking-tight text-white">
                  Todo corre sobre nuestro
                  <span className="text-white/40"> LLM propio</span>
                </h2>
                <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-white/60">
                  DeepClinic 1 es inteligencia entrenada y evaluada para el entorno clínico. Es la capa común que hace que cada producto sea consistente, seguro y trazable — de la cita al seguimiento.
                </p>

                <div className="mt-10 relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02] p-6 md:p-8">
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_30%,rgba(255,255,255,0.06),transparent_66%)]" />
                    <div className="dc_motion absolute -left-24 -bottom-24 h-[340px] w-[340px] rounded-full blur-[130px] opacity-70 bg-[radial-gradient(closest-side,rgba(56,189,248,0.20),transparent_70%)]" style={{ animation: "dc_drift_a 18s ease-in-out infinite" }} />
                    <div className="dc_motion absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full blur-[130px] opacity-70 bg-[radial-gradient(closest-side,rgba(255,140,64,0.22),transparent_70%)]" style={{ animation: "dc_drift_b 20s ease-in-out infinite" }} />
                    <div className="dc_motion absolute inset-0 opacity-0" style={{ backgroundImage: "linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.10) 45%, transparent 60%)", backgroundSize: "200% 100%", animation: "dc_shimmer 12s ease-in-out infinite" }} />
                  </div>

                  <div className="relative">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">DeepClinic 1</div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {["Especializado en salud", "Evidencia y trazabilidad", "Seguridad por diseño", "Consistencia multi-producto"].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-[12.5px] text-white/70">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0A0A0A] p-8 md:p-10 lg:p-12">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_50%_18%,rgba(56,189,248,0.10),transparent_60%)]" />
                <div className="relative">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">Paso a paso</div>
                  <div className="mt-7 relative pl-9 xl:pl-0">
                    <div className="absolute left-3 top-2 bottom-2 w-px bg-white/10 xl:hidden" />
                    <div
                      className="dc_motion pointer-events-none absolute left-3 top-0 h-20 w-px opacity-0 xl:hidden"
                      style={{
                        background: "linear-gradient(180deg, transparent 0%, rgba(56,189,248,0.40) 45%, transparent 100%)",
                        animation: "dc_scan_y 7.8s ease-in-out infinite",
                      }}
                    />

                    <div className="space-y-0 xl:grid xl:grid-cols-2 xl:gap-x-12 xl:gap-y-6">
                      {[
                        {
                          step: "01",
                          stage: "Citas",
                          product: "Scheduling OS",
                          benefit: "Menos ausencias. Agenda llena.",
                          href: "/es/booking",
                          color: "rgba(99,102,241,0.55)",
                        },
                        {
                          step: "02",
                          stage: "Agentes",
                          product: "Omnichannel Agents",
                          benefit: "Audio + WhatsApp 24/7.",
                          href: "/es/desk",
                          color: "rgba(56,189,248,0.55)",
                        },
                        {
                          step: "03",
                          stage: "Triage",
                          product: "Triage Command",
                          benefit: "Caso listo antes de entrar.",
                          href: "",
                          color: "rgba(16,185,129,0.55)",
                        },
                        {
                          step: "04",
                          stage: "Historial",
                          product: "Unified Health Record",
                          benefit: "Lo crítico en segundos.",
                          href: "",
                          color: "rgba(59,130,246,0.55)",
                        },
                        {
                          step: "05",
                          stage: "Consulta",
                          product: "Clinical Copilot",
                          benefit: "Planes y riesgos accionables.",
                          href: "/es/product",
                          color: "rgba(56,189,248,0.55)",
                        },
                        {
                          step: "06",
                          stage: "Familia",
                          product: "Family Care System",
                          benefit: "Seguimiento coordinado.",
                          href: "/es/health",
                          color: "rgba(34,197,94,0.55)",
                        },
                        {
                          step: "07",
                          stage: "Análisis de Imágenes",
                          product: "DeepClinic Análisis de Imágenes",
                          benefit: "Detecta anomalías invisibles al ojo humano.",
                          href: "/es/imaging",
                          color: "rgba(168,85,247,0.55)",
                        },
                        {
                          step: "08",
                          stage: "Ingresos",
                          product: "Revenue Engine",
                          benefit: "Cuenta médica precisa, sin fugas.",
                          href: "/es/revenue",
                          color: "rgba(59,130,246,0.55)",
                        },
                      ].map((row, i, arr) => {
                        const isLast = i === arr.length - 1;
                        const node = (
                          <div className="absolute left-0 top-[2px]">
                            <div className="h-6 w-6 rounded-full border border-white/15 bg-black/60 flex items-center justify-center">
                              <div
                                className="dc_motion h-2.5 w-2.5 rounded-full"
                                style={{ background: row.color, boxShadow: `0 0 14px ${row.color}`, animation: "dc_soft_pulse 3.2s ease-in-out infinite", animationDelay: `${-0.6 - i * 0.35}s` }}
                              />
                            </div>
                          </div>
                        );

                        const body = (
                          <div className="pl-9">
                            <div className="flex items-center gap-3">
                              <div className="text-[10px] font-semibold tracking-[0.22em] text-white/35">{row.step}</div>
                              <div className="text-[12.5px] font-medium text-white">{row.stage}</div>
                            </div>
                            <div className="mt-1 text-[12.5px] text-white/55">
                              <span className="text-white/75">{row.product}</span>
                              <span className="text-white/35"> — </span>
                              <span>{row.benefit}</span>
                            </div>
                          </div>
                        );

                        return (
                          <div key={row.step} className={"relative xl:pb-0 xl:pr-4 " + (isLast ? "" : "pb-7")}>
                            {node}
                            {row.href ? (
                              <Link href={row.href} className="block rounded-2xl">
                                <div className="py-2">{body}</div>
                              </Link>
                            ) : (
                              <div className="py-2">{body}</div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">Capa común</div>
                      <div className="mt-2 text-[12.5px] text-white/65">DeepClinic 1 mantiene seguridad y consistencia en cada etapa.</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">Escalable</div>
                      <div className="mt-2 text-[12.5px] text-white/65">Cada producto se integra con el siguiente sin perder contexto.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <ProductsOverviewMosaic items={INFRA_CARDS} />

      <ProductDeepDive
        step="01"
        href="/es/booking"
        title="DeepClinic Agenda"
        headline="El calendario que se gestiona solo."
        description="Reduce ausentismo, llena huecos y prioriza automáticamente según gravedad. Agenda viva conectada al resto del flujo clínico."
        bullets={["Recordatorios inteligentes y confirmación omnicanal", "Optimiza huecos para elevar ocupación", "Prioriza urgencias con criterios clínicos", "Se integra al historial y seguimiento"]}
        accent="rgba(168, 85, 247, 0.55)"
        cta="Ver Agenda"
      />

      <ProductDeepDive
        step="02"
        href="/es/desk"
        title="DeepClinic Agentes"
        headline="Tu recepción infinita."
        description="Agentes clínicos que responden WhatsApp, audio y dudas frecuentes, agendan citas y filtran lo urgente. Sin perder empatía ni trazabilidad."
        bullets={["Atención 24/7 con tiempos de espera cercanos a 0", "Triage básico y escalamiento cuando importa", "Menos carga operativa, más foco clínico", "Contexto compartido con el resto de productos"]}
        accent="rgba(244, 63, 94, 0.55)"
        cta="Ver Agentes"
      />

      <DeepClinicTriage />

      <DeepClinicHistory />

      <ProductDeepDive
        step="05"
        href="/es/product"
        title="DeepClinic Copiloto"
        headline="La consulta se vuelve un sistema."
        description="Escucha, analiza y escribe por ti. Genera notas clínicas claras, detecta riesgos y sugiere códigos con auditoría y trazabilidad."
        bullets={["Notas clínicas consistentes en minutos", "Detección de riesgos y contraindicaciones", "Códigos diagnósticos listos para facturación", "Verificación y trazabilidad en cada salida"]}
        accent="rgba(56, 189, 248, 0.55)"
        cta="Ver Copiloto"
      />

      <DeepClinicWhatsApp />

      <DeepClinicRevenuePower />

      <ProductDeepDive
        step="07"
        href="/es/platform"
        title="DeepClinic Núcleo"
        headline="La infraestructura de inteligencia clínica."
        description="Una API unificada para integrar razonamiento médico de vanguardia, guardrails de seguridad y auditoría total en cualquier sistema de salud."
        bullets={["API & SDK para integrar DeepClinic en días", "Guardrails, privacidad y auditoría de extremo a extremo", "Integraciones con tu HIS/EMR sin romper el flujo", "Evaluación continua para mantener calidad y seguridad"]}
        accent="rgba(255, 255, 255, 0.55)"
        cta="Ver API"
      />

      <ProductDeepDive
        step="08"
        href="/es/health"
        title="DeepClinic Familia"
        headline="Salud conectada para quienes más importan."
        description="Monitorea, alerta y coordina el cuidado de tus seres queridos, integrando datos clínicos con prevención y seguimiento en tiempo real."
        bullets={["Alertas y recordatorios inteligentes", "Cuidadores coordinados con contexto clínico", "Seguimiento continuo para prevenir urgencias", "Escalamiento a atención médica cuando importa"]}
        accent="rgba(34, 197, 94, 0.55)"
        cta="Ver Familia"
      />

      <ProductDeepDive
        step="09"
        href="/es/imaging"
        title="DeepClinic Imágenes"
        headline="El ojo clínico que todo lo ve."
        description="Análisis instantáneo de radiografías, tomografías y resonancias para detectar anomalías sutiles y priorizar estudios críticos."
        bullets={["Análisis de RX/CT/MRI en segundos", "Detección de hallazgos sutiles con consistencia", "Priorización de estudios urgentes", "Reportes claros y trazables para el equipo"]}
        accent="rgba(168, 85, 247, 0.55)"
        cta="Ver Imágenes"
      />

      <DeepClinicImpactWall lang="es" />

      <DeepClinic1ComparisonSection />

      <DeepClinicHospitalSecuritySection />

      <section className="relative z-10 h-[100svh] snap-start overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <InteractiveStarburst ambientMotion className="dc_starburst_ambient absolute inset-0 opacity-[0.82] pointer-events-auto" />
        </div>

        <div className="mx-auto flex h-[100svh] max-w-7xl items-center px-6 pt-24 pb-16 md:px-8 lg:px-10">
          <div className="relative w-full pointer-events-none">
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
              <MotionReveal durationMs={900}>
                <h2 className="text-[clamp(32px,6vw,72px)] font-medium leading-none tracking-tight text-white">
                  El poder
                </h2>
              </MotionReveal>
              <MotionReveal durationMs={900} delayMs={90}>
                <h2 className="text-[clamp(32px,6vw,72px)] font-medium leading-none tracking-tight text-white/35 md:translate-y-[6px] md:text-right">
                  de la medicina
                </h2>
              </MotionReveal>
            </div>

            <div className="mt-8 flex justify-end">
              <MotionReveal durationMs={820} delayMs={170}>
                <div className="max-w-2xl text-right">
                  <div className="text-[clamp(22px,3.2vw,40px)] font-semibold leading-[1.02] tracking-tight bg-gradient-to-b from-white to-white/55 bg-clip-text text-transparent">
                    en tus manos.
                  </div>
                  <div className="mt-4 text-[13px] font-medium leading-relaxed text-white/50">
                    Más precisión. Más velocidad. Más vida.
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 min-h-[100svh] snap-start flex items-center px-6 pt-24 pb-16 md:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
            <div className="max-w-xl">
              <div className="text-[10px] font-semibold tracking-[0.25em] text-white/35">[ OPINIONES CLÍNICAS ]</div>
              <h2 className="mt-7 text-balance text-[clamp(34px,4.6vw,56px)] font-semibold leading-[0.95] tracking-tight text-white">
                Lo que dicen los médicos.
                <span className="text-white/40"> En distintas especialidades.</span>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-white/60">
                Comentarios representativos por módulo, basados en escenarios clínicos: desde consulta y triage, hasta agentes, agenda, imágenes e ingresos.
              </p>

              <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2">
                <div className="flex items-center gap-1" aria-hidden>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} className="text-[12px] leading-none text-emerald-300">
                      ★
                    </span>
                  ))}
                </div>
                <div className="text-[11px] font-semibold text-white/80">4.9/5 promedio</div>
              </div>
            </div>

            <div className="relative">
              <DeepClinicReviewsWall reviews={DOCTOR_REVIEWS} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 h-[100svh] snap-start overflow-hidden">
        <div className="mx-auto flex h-[100svh] w-full max-w-7xl flex-col px-6 pt-24 pb-16 md:px-8 lg:px-10">
          <div className="flex flex-1 items-center justify-center">
            <MotionReveal durationMs={820}>
              <div className="mx-auto w-full max-w-3xl text-center">
                <div className="text-[10px] font-semibold tracking-[0.25em] text-white/35">[ INICIAR ]</div>
                <h2 className="mt-7 text-balance text-[clamp(34px,4.8vw,58px)] font-semibold leading-[0.95] tracking-tight text-white">
                  Activa DeepClinic.
                  <span className="text-white/40"> Multiplica tu capacidad clínica</span>
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/60">
                  Omnicanal, seguro y diseñado para salud. Todo integrado sobre DeepClinic 1 para resolver cada etapa de la atención médica.
                </p>

                <div className="mt-10 flex justify-center">
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-[13px] font-semibold text-black shadow-[0_18px_70px_rgba(255,140,64,0.28)]"
                  >
                    Iniciar Ahora
                  </Link>
                </div>
              </div>
            </MotionReveal>
          </div>

          <div className="w-full">
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
                          className="text-white/55"
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
        </div>
      </section>
    </main>
  );
}
