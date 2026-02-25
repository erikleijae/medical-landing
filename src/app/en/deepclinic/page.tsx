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
    href: "/en/product",
    title: "DeepClinic Copilot",
    description:
      "The AI that listens, analyzes, and writes for you. Turn visits into flawless clinical notes, detect risk in real time, and auto-code diagnoses—so you can focus on the patient.",
    painPoints: ["Manual notes", "Paperwork", "Burnout"],
    metrics: [
      { value: "2h/day", label: "Saved" },
      { value: "100%", label: "Audit trail" },
      { value: "<3s", label: "Latency" },
    ],
    cta: "View Copilot",
    accent: "rgba(56, 189, 248, 0.5)", // sky-400
    delayMs: 0,
  },
  {
    href: "/en/revenue",
    title: "DeepClinic Revenue",
    description:
      "The financial engine that never sleeps. Audit every procedure, validate coverage in seconds, and recover lost revenue from denials or billing errors before they happen.",
    painPoints: ["Denials", "Leakage", "Collections"],
    metrics: [
      { value: "99%", label: "Approval" },
      { value: "↓40%", label: "Denials" },
      { value: "24/7", label: "Always on" },
    ],
    cta: "View Revenue",
    accent: "rgba(167, 255, 124, 0.5)", // lime
    delayMs: 100,
  },
  {
    href: "/en/desk",
    title: "DeepClinic Agents",
    description:
      "Your infinitely scalable front desk. AI agents that handle WhatsApp, schedule appointments, and resolve patient questions instantly—with the empathy and precision of your best human.",
    painPoints: ["Calls", "No-shows", "Wait time"],
    metrics: [
      { value: "<10s", label: "Response" },
      { value: "+30%", label: "Appointments" },
      { value: "24/7", label: "Coverage" },
    ],
    cta: "View Agents",
    accent: "rgba(244, 63, 94, 0.5)", // rose-500
    delayMs: 0,
  },
  {
    href: "/en/booking",
    title: "DeepClinic Scheduling",
    description:
      "The self-managing calendar. Optimize gaps, reduce no-shows with smart reminders, and automatically prioritize urgent cases based on clinical severity.",
    painPoints: ["Gaps", "No-shows", "Chaos"],
    metrics: [
      { value: "↓25%", label: "No-shows" },
      { value: "+15%", label: "Utilization" },
      { value: "Auto", label: "Reminders" },
    ],
    cta: "View Scheduling",
    accent: "rgba(168, 85, 247, 0.5)", // purple-500
    delayMs: 100,
  },
  {
    href: "/en/platform",
    title: "DeepClinic Core",
    description:
      "The clinical intelligence infrastructure for the world. One unified API to embed state-of-the-art medical reasoning, safety guardrails, and full traceability into any healthcare system.",
    painPoints: ["Silos", "Legacy", "Security"],
    metrics: [
      { value: "180M+", label: "Decisions" },
      { value: "99.9%", label: "Uptime" },
      { value: "SOC2", label: "Security" },
    ],
    cta: "View API",
    accent: "rgba(255, 255, 255, 0.5)", // white
    delayMs: 0,
  },
  {
    href: "/en/health",
    title: "DeepClinic Family",
    description:
      "Connected care for the people who matter most. Monitor, alert, and coordinate your loved ones' health, combining clinical data with preventive care in real time.",
    painPoints: ["Fragmentation", "Uncertainty", "Emergencies"],
    metrics: [
      { value: "24/7", label: "Monitoring" },
      { value: "100%", label: "Peace of mind" },
      { value: "Family", label: "Connected" },
    ],
    cta: "View Family",
    accent: "rgba(251, 146, 60, 0.5)", // orange-400
    delayMs: 100,
  },
  {
    href: "/en/imaging",
    title: "DeepClinic Imaging",
    description:
      "The clinical eye that sees everything. Instant X-ray, CT, and MRI analysis with specialist-level consistency—catching subtle anomalies the human eye might miss.",
    painPoints: ["Errors", "Delays", "Subjectivity"],
    metrics: [
      { value: "<5s", label: "Analysis" },
      { value: "99.8%", label: "Sensitivity" },
      { value: "Multi", label: "Modalities" },
    ],
    cta: "View Imaging",
    accent: "rgba(236, 72, 153, 0.5)", // pink-500
    delayMs: 0,
  },
] as const;

const DOCTOR_REVIEWS = [
  {
    initials: "LM",
    name: "Dr. Laura Medina",
    specialty: "General practice",
    location: "Monterrey, MX",
    product: "Copilot",
    rating: 5,
    accent: "rgba(56, 189, 248, 0.55)",
    quote:
      "On call, I write notes in minutes with impeccable structure. What I value most is traceability: I can justify each decision and refine the text without losing flow.",
  },
  {
    initials: "AR",
    name: "Dr. Andrés Roldán",
    specialty: "Emergency medicine",
    location: "CDMX, MX",
    product: "Triage",
    rating: 5,
    accent: "rgba(244, 63, 94, 0.55)",
    quote:
      "Triage prioritization is consistent and fast. It helps me document risks and alerts without relying on memory; the ED moves smoother with fewer omissions.",
  },
  {
    initials: "MC",
    name: "Dr. Mariana Cifuentes",
    specialty: "Pediatrics",
    location: "Bogotá, CO",
    product: "History",
    rating: 5,
    accent: "rgba(34, 197, 94, 0.55)",
    quote:
      "I finally have a unified record that doesn't break between visits. When a child arrives with complex history, the context is clear and ready for decisions.",
  },
  {
    initials: "JG",
    name: "Dr. Javier Gutiérrez",
    specialty: "Orthopedics",
    location: "Guadalajara, MX",
    product: "Scheduling",
    rating: 5,
    accent: "rgba(168, 85, 247, 0.55)",
    quote:
      "Scheduling stopped being a pain. Reminders reduced no-shows and when urgent cases come in, rescheduling is immediate. You can feel the productivity gain.",
  },
  {
    initials: "LS",
    name: "Dr. Lucía Salvatierra",
    specialty: "Obstetrics & gynecology",
    location: "Lima, PE",
    product: "Agents",
    rating: 5,
    accent: "rgba(244, 63, 94, 0.55)",
    quote:
      "Agents reply on WhatsApp with empathy and precision. Everything stays documented and repetitive questions get filtered; my team focuses on patients, not messages.",
  },
  {
    initials: "PC",
    name: "Dr. Pablo Carranza",
    specialty: "Radiology",
    location: "Santiago, CL",
    product: "Imaging",
    rating: 5,
    accent: "rgba(236, 72, 153, 0.55)",
    quote:
      "Preliminary reads speed up prioritization. It doesn't replace judgment, but it reduces turnaround time and standardizes findings. Huge help on heavy shifts.",
  },
  {
    initials: "SR",
    name: "Dr. Sofía Rivas",
    specialty: "Cardiology",
    location: "Madrid, ES",
    product: "Revenue",
    rating: 5,
    accent: "rgba(167, 255, 124, 0.55)",
    quote:
      "A justified claim changed the audit conversation: clinical evidence + clear rules. Less rework and less friction with billing.",
  },
  {
    initials: "DM",
    name: "Dr. Diego Mena",
    specialty: "Anesthesiology",
    location: "Quito, EC",
    product: "Core / API",
    rating: 5,
    accent: "rgba(255, 255, 255, 0.55)",
    quote:
      "Integrating it into the hospital system was surprisingly straightforward. What reassures me are the guardrails and auditing—you can operate with clinical standards.",
  },
] as const;

const FOOTER_GROUPS = [
  {
    title: "PRODUCTS",
    links: [
      { label: "Copilot", href: "/en/product" },
      { label: "Revenue", href: "/en/product" },
      { label: "Agents", href: "/en/product" },
      { label: "Scheduling", href: "/en/product" },
      { label: "Family", href: "/en/product" },
      { label: "Imaging", href: "/en/product" },
    ],
  },
  {
    title: "PLATFORM",
    links: [
      { label: "API & SDK", href: "/en/product" },
      { label: "Integrations", href: "/en/product" },
      { label: "Security", href: "/en/data-security" },
      { label: "Models", href: "/en/product" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "/en/about" },
      { label: "Careers", href: "/en/recruitment" },
      { label: "News", href: "/en/news" },
      { label: "Contact", href: "/en/contact" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy", href: "/en/privacy-policy" },
      { label: "Terms", href: "/en/terms-of-service" },
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
    name: "Grandma",
    videoSrc: "/video/696604acc25b997c8d38dea0_697c494dd49cc251342b0d37_luffu-grandma-v2_mp4.mp4",
    type: "video/mp4",
    location: "Home",
  },
  {
    name: "Todd",
    videoSrc: "/video/696604acc25b997c8d38dea0_697c49720a7fedf935d44d89_luffu-todd-v2_mp4.mp4",
    type: "video/mp4",
    location: "Home",
  },
  {
    name: "Mom",
    videoSrc: "/video/696604acc25b997c8d38dea0_697c49791106f47542e76f7a_luffu-mom-v2_webm.webm",
    type: "video/webm",
    location: "Home",
  },
  {
    name: "Dad",
    videoSrc: "/video/696604acc25b997c8d38dea0_697ce8118f60a7de162bcc89_luffu-dad-v9_webm.webm",
    type: "video/webm",
    location: "Home",
  },
  {
    name: "Grandpa",
    videoSrc: "/video/696604acc25b997c8d38dea0_697c4957944f4d906d024b47_luffu-grandpa-v2_mp4.mp4",
    type: "video/mp4",
    location: "Home",
  },
  {
    name: "Ziggy",
    videoSrc: "/video/696604acc25b997c8d38dea0_697c496736963c8ca2534f16_luffu-ziggy-v2_mp4.mp4",
    type: "video/mp4",
    location: "Home",
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

function resolveEnProductHref(href: string) {
  if (
    href === "/en/revenue" ||
    href === "/en/desk" ||
    href === "/en/booking" ||
    href === "/en/platform" ||
    href === "/en/health" ||
    href === "/en/imaging"
  ) {
    return "/en/product";
  }
  return href;
}

function ProductsOverviewMosaic({ items }: { items: readonly InfraCardProps[] }) {
  const featured = items.find((i) => i.href === "/en/product") ?? items[0];
  const primary = items.filter((i) => i.href === "/en/booking" || i.href === "/en/desk");
  const secondary = items.filter((i) => ![featured.href, ...primary.map((p) => p.href)].includes(i.href));

  return (
    <section className="relative z-10 min-h-[100svh] snap-start flex items-center px-6 pt-20 pb-12 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-screen-2xl">
        <MotionReveal durationMs={760} className="w-full">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
            <div className="max-w-xl">
              <div className="text-[10px] font-semibold tracking-[0.25em] text-white/35">[ PRODUCTS ]</div>
              <h2 className="mt-7 text-balance text-[clamp(34px,4.8vw,60px)] font-semibold leading-[0.95] tracking-tight text-white">
                A complete clinical suite.
                <span className="text-white/40"> One core, many products.</span>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-white/60">
                Each module is built for a different stage of care, but they all share the same context and security.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {["From scheduling to visit", "24/7 follow-up", "Clinical traceability", "Less friction"].map((t) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[12.5px] text-white/70">
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-12 gap-4">
                <Link
                  href={resolveEnProductHref(featured.href)}
                  className="relative col-span-12 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] lg:col-span-7 lg:row-span-2"
                >
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 opacity-70" style={{ background: `radial-gradient(70% 70% at 70% 30%, ${featured.accent}, transparent 65%)` }} />
                    <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 h-full w-full object-cover opacity-35">
                      <source src="/video/deep.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/55 to-black/80" />
                  </div>

                  <div className="relative flex h-full flex-col justify-between p-7 md:p-10">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50">{featured.title}</div>
                      <div className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">Perfect notes, risks detected, codes ready.</div>
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
                        View Copilot
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
                    href={resolveEnProductHref(p.href)}
                    className="relative col-span-12 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-7 md:p-8 lg:col-span-5"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: `radial-gradient(70% 70% at 30% 20%, ${p.accent}, transparent 65%)` }} />
                    <div className="relative">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50">{p.title}</div>
                      <div className="mt-4 text-[18px] font-semibold tracking-tight text-white">{p.cta}</div>
                      <p className="mt-3 line-clamp-3 text-[13px] leading-relaxed text-white/55">{p.description}</p>

                      <div className="mt-7 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                        <div className="text-[11px] text-white/55">Impact</div>
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
                    href={resolveEnProductHref(p.href)}
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
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Capabilities</div>
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
                <Link
                  href={resolveEnProductHref(href)}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80"
                >
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
      title: "Clinical record",
      metric: "+250 pages of notes, prescriptions, labs, and studies",
    },
    {
      title: "Commercial contracts",
      metric: "+100 contracts per hospital with different rules",
    },
    {
      title: "HIS / EMR",
      metric: "+18 hours of manual work inside the HIS",
    },
  ] as const;

  const solution = [
    {
      title: "AI reads contracts",
      description:
        "Reads clauses, applies rules, and automatically validates coverage so every charge is justified.",
    },
    {
      title: "AI analyzes clinical data",
      description:
        "Cross-checks notes, prescriptions, and imaging against audit rules to detect inconsistencies before billing.",
    },
    {
      title: "AI generates a justified claim",
      description:
        "Produces a complete, traceable claim ready for external audit with maximum transparency.",
    },
    {
      title: "AI integrates into your HIS",
      description:
        "Inserts validated items into the hospital system and eliminates administrative rework.",
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
                DeepClinic Revenue
              </h3>
              <div className="mt-5 text-[16px] font-medium text-white/80">A perfect claim. No leakage.</div>
              <p className="mt-6 text-[14px] leading-relaxed text-white/55">
                Turn a complex operation into an automated flow: interpret contracts, validate clinical evidence, and recover revenue before it’s lost to denials or errors.
              </p>

              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: tone, boxShadow: `0 0 16px ${tone}` }} />
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">The challenge</div>
                </div>
                <div className="mt-3 text-balance text-[16px] font-semibold leading-tight text-white/85 md:text-[18px]">
                  The complexity of a 5-day hospital claim is superhuman.
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
                <Link
                  href={resolveEnProductHref("/en/revenue")}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80"
                >
                  View Revenue
                  <span className="ml-2" aria-hidden>
                    ↗
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative flex flex-col gap-3 lg:gap-2">
              <DeepClinicFxFrame accent={accent} variant="video" tilt={false} spotlight scanlines shimmer cursor className="mx-auto w-full max-w-[860px]">
                <div className="relative p-3 md:p-4 lg:p-3">
                  <InfraVisual href="/en/revenue" accent={accent} />
                </div>
              </DeepClinicFxFrame>

              <div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: tone, boxShadow: `0 0 16px ${tone}` }} />
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Our solution</div>
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
                            Revenue
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
  if (href === "/en/imaging") {
    return (
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60">
        <div className="absolute inset-0">
          <Image
            src="/images/image.png"
            alt="Medical imaging analysis"
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
            <span className="text-[10px] font-medium text-white/90">Analysis complete</span>
          </div>
        </div>
      </div>
    );
  }

  if (href === "/en/desk") {
    return (
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60">
        <video autoPlay loop muted playsInline preload="auto" className="h-auto w-full object-cover aspect-[4/3] opacity-90">
          <source src="/video/deep.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/55" />
      </div>
    );
  }

  if (href === "/en/booking") {
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

  if (href === "/en/product") {
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
            <source src="/video/deep.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }

  if (href === "/en/revenue") {
    const nodes = [
      { label: "Clinical\nnotes", x: 175, y: 70, delay: "-0.2s" },
      { label: "Labs\nand studies", x: 230, y: 155, delay: "-1.0s" },
      { label: "Prescriptions\nand checks", x: 305, y: 275, delay: "-1.8s" },
      { label: "Surgical\nnotes", x: 235, y: 400, delay: "-2.6s" },
      { label: "Commercial\ncontracts", x: 175, y: 505, delay: "-3.4s" },
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
            Medical claim
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
                  <div className="text-[11px] font-medium text-white/70">Medical claim</div>
                </div>

                <div className="px-4 py-3 text-[10px] text-white/70 sm:text-[11px]">
                  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-1">
                    <div className="text-white/45">Charge</div>
                    <div className="min-w-0 truncate text-right font-medium text-white/80">Compressed air</div>
                    <div className="text-right text-white/55">+ 4 h</div>
                  </div>
                  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-1">
                    <div className="text-white/45">Material</div>
                    <div className="min-w-0 truncate text-right font-medium text-white/80">Macro set</div>
                    <div className="text-right text-white/55">+ 1</div>
                  </div>
                  <div className="mt-2 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2">
                    <div className="flex items-start gap-2">
                      <div
                        className="mt-0.5 h-2.5 w-2.5 rounded-sm"
                        style={{ background: "rgba(245,158,11,0.35)", boxShadow: "0 0 12px rgba(245,158,11,0.25)" }}
                      />
                      <div className="leading-snug text-white/55">
                        Missing enteral diet change note
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

  if (href === "/en/platform") {
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
                  {["Guardrails", "Traceability", "Specialty", "Privacy"].map((tag, i) => (
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
                  <div className="text-[10px] font-semibold tracking-[0.22em] text-white/40">ROUTES</div>
                  <div className="text-[10px] font-medium text-white/50">Active</div>
                </div>
                <div className="mt-3 space-y-2">
                  {[
                    { label: "Appointment → Triage", tone: "rgba(59,130,246,0.60)", delay: "-0.4s" },
                    { label: "Visit → Record", tone: "rgba(245,158,11,0.60)", delay: "-1.0s" },
                    { label: "Follow-up", tone: "rgba(16,185,129,0.60)", delay: "-1.6s" },
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
                <div className="text-[10px] font-semibold tracking-[0.22em] text-white/40">ORCHESTRATION</div>
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
                    { label: "Reasoning", tone: "rgba(255,255,255,0.04)" },
                    { label: "Tools", tone: "rgba(255,255,255,0.04)" },
                    { label: "Audit", tone: "rgba(255,255,255,0.04)" },
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

  if (href === "/en/health") {
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
                  <div className="text-[11px] font-semibold text-white/90">Reminder: medication</div>
                  <div className="mt-1 text-[10px] leading-snug text-white/55">12:00 • Confirm intake</div>
                </div>
              </div>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />
              <div className="mt-3 flex items-center justify-between">
                <div className="text-[10px] font-medium text-white/55">Pending</div>
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
                  <div className="text-[11px] font-semibold text-white/90">Connected caregivers</div>
                  <div className="mt-1 text-[10px] leading-snug text-white/55">Alerts and coordination</div>
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
                {["Follow-up", "Meds", "Visits"].map((t) => (
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
                      <div className="text-[10px] uppercase tracking-widest text-white/40">Continuous monitoring</div>
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
                Specialized Artificial Intelligence
              </div>
              <h2 className="mt-7 text-balance text-[clamp(34px,4.6vw,56px)] font-semibold leading-[0.95] tracking-tight text-white">
                Why DeepClinic1 is better
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
                Unlike generic models trained on the entire internet, DeepClinic1 is trained exclusively on medical literature, clinical practice guidelines, and millions of anonymized cases.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                    <ShieldCheckIcon className="h-4 w-4 text-emerald-300" />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-white/85">Zero clinical hallucinations</div>
                    <div className="mt-1 text-[12.5px] leading-relaxed text-white/55">
                      We verify every clinical claim against trusted databases.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                    <ActivityIcon className="h-4 w-4 text-emerald-300" />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-white/85">Deep context</div>
                    <div className="mt-1 text-[12.5px] leading-relaxed text-white/55">
                      Understands complex histories and relationships between symptoms and treatments.
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
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Clinical accuracy</div>

                <div className="mt-8 space-y-7">
                  <div>
                    <div className="mb-2 flex items-end justify-between">
                      <span className="text-[12.5px] font-semibold text-white">DeepClinic1</span>
                      <span className="text-[22px] font-semibold text-emerald-300">98%</span>
                    </div>
                    <div className="h-4 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-emerald-500" style={{ width: "98%" }} />
                    </div>
                    <div className="mt-2 text-[11px] font-medium text-emerald-300/80">Medicine-specialized</div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-end justify-between">
                      <span className="text-[12.5px] font-medium text-white/60">Generic LLMs (GPT-4, Gemini)</span>
                      <span className="text-[18px] font-semibold text-white/40">81%</span>
                    </div>
                    <div className="h-4 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-white/20" style={{ width: "81%" }} />
                    </div>
                    <div className="mt-2 text-[11px] font-medium text-white/40">General industry average</div>
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
              Hospital-grade security
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-white/60">
              The entire DeepClinic platform meets the strictest privacy standards.
            </p>
          </MotionReveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <MotionReveal durationMs={760} delayMs={140}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02]">
              <Image
                src="/hipaa.png"
                alt="DeepClinic security certifications"
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
                <h3 className="text-[22px] font-semibold tracking-tight text-white/90">Your data, always secure</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <ShieldCheckIcon className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                    <span className="text-[13px] leading-relaxed text-white/65">Full compliance with HIPAA and NOM</span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheckIcon className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                    <span className="text-[13px] leading-relaxed text-white/65">End-to-end encryption</span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheckIcon className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                    <span className="text-[13px] leading-relaxed text-white/65">Secure storage in North America</span>
                  </li>
                </ul>
                <div>
                  <Link href="/en/data-security" className="inline-flex items-center text-[12.5px] font-semibold text-emerald-300">
                    Learn more about our security
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


export default function DeepClinicLandingPageEn() {
  return (
    <main className="dc_perf relative h-[100svh] overflow-x-hidden overflow-y-auto overscroll-x-none overscroll-y-none snap-none md:snap-y md:snap-mandatory bg-black text-white">
      <DeepClinicPerfController />
      {/* Fondo Grok-style: Animado */}
      <div className="dc_bg_static">
        <GrokBackground variant="hero" />
      </div>

      <DeepClinicTopNav showProductsSubnav lang="en" />

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
                  The ultimate clinical intelligence.
                  <br />
                  <span className="text-white/40">Revolutionizing healthcare at planetary scale.</span>
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
              <div className="text-[10px] font-semibold tracking-[0.25em] text-white/35">[ INFRASTRUCTURE ]</div>
              <h2 className="mt-7 text-balance text-[40px] font-semibold tracking-tight text-white md:text-[54px]">
                The Operating System for Medicine
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
                  Everything runs on our
                  <span className="text-white/40"> proprietary LLM</span>
                </h2>
                <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-white/60">
                  DeepClinic 1 is intelligence trained and evaluated for clinical environments. It’s the shared layer that makes every product consistent, safe, and traceable—from scheduling to follow-up.
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
                      {["Healthcare-specialized", "Evidence & traceability", "Security by design", "Multi-product consistency"].map((item) => (
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
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">Step by step</div>
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
                          stage: "Scheduling",
                          product: "Scheduling OS",
                          benefit: "Fewer no-shows. A full calendar.",
                          href: "/en/booking",
                          color: "rgba(99,102,241,0.55)",
                        },
                        {
                          step: "02",
                          stage: "Agents",
                          product: "Omnichannel Agents",
                          benefit: "Audio + WhatsApp 24/7.",
                          href: "/en/desk",
                          color: "rgba(56,189,248,0.55)",
                        },
                        {
                          step: "03",
                          stage: "Triage",
                          product: "Triage Command",
                          benefit: "Case ready before they walk in.",
                          href: "",
                          color: "rgba(16,185,129,0.55)",
                        },
                        {
                          step: "04",
                          stage: "History",
                          product: "Unified Health Record",
                          benefit: "Critical context in seconds.",
                          href: "",
                          color: "rgba(59,130,246,0.55)",
                        },
                        {
                          step: "05",
                          stage: "Visit",
                          product: "Clinical Copilot",
                          benefit: "Actionable plans and risks.",
                          href: "/en/product",
                          color: "rgba(56,189,248,0.55)",
                        },
                        {
                          step: "06",
                          stage: "Family",
                          product: "Family Care System",
                          benefit: "Coordinated follow-up.",
                          href: "/en/health",
                          color: "rgba(34,197,94,0.55)",
                        },
                        {
                          step: "07",
                          stage: "Imaging",
                          product: "DeepClinic Imaging",
                          benefit: "Detect anomalies the human eye might miss.",
                          href: "/en/imaging",
                          color: "rgba(168,85,247,0.55)",
                        },
                        {
                          step: "08",
                          stage: "Revenue",
                          product: "Revenue Engine",
                          benefit: "Accurate claims, no leakage.",
                          href: "/en/revenue",
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
                              <Link href={resolveEnProductHref(row.href)} className="block rounded-2xl">
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
                      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">Shared layer</div>
                      <div className="mt-2 text-[12.5px] text-white/65">DeepClinic 1 keeps safety and consistency at every stage.</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">Scalable</div>
                      <div className="mt-2 text-[12.5px] text-white/65">Each product connects to the next without losing context.</div>
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
        href="/en/booking"
        title="DeepClinic Scheduling"
        headline="The calendar that runs itself."
        description="Reduce no-shows, fill gaps, and automatically prioritize by acuity. A living schedule connected to the rest of the clinical flow."
        bullets={["Smart reminders and omnichannel confirmation", "Fill gaps to increase utilization", "Prioritize urgent cases with clinical criteria", "Integrated with history and follow-up"]}
        accent="rgba(168, 85, 247, 0.55)"
        cta="View Scheduling"
      />

      <ProductDeepDive
        step="02"
        href="/en/desk"
        title="DeepClinic Agents"
        headline="Your infinite front desk."
        description="Clinical agents that answer WhatsApp, audio, and FAQs, schedule appointments, and filter urgent cases—without losing empathy or traceability."
        bullets={["24/7 service with near-zero wait times", "Basic triage and escalation when it matters", "Less operational load, more clinical focus", "Shared context across all products"]}
        accent="rgba(244, 63, 94, 0.55)"
        cta="View Agents"
      />

      <DeepClinicTriage lang="en" />

      <DeepClinicHistory lang="en" />

      <ProductDeepDive
        step="05"
        href="/en/product"
        title="DeepClinic Copilot"
        headline="The visit becomes a system."
        description="Listen, analyze, and write for you. Generate clear clinical notes, detect risk, and suggest codes with auditability and traceability."
        bullets={["Consistent clinical notes in minutes", "Risk and contraindication detection", "Diagnosis codes ready for billing", "Verification and traceability in every output"]}
        accent="rgba(56, 189, 248, 0.55)"
        cta="View Copilot"
      />

      <DeepClinicWhatsApp lang="en" />

      <DeepClinicRevenuePower />

      <ProductDeepDive
        step="07"
        href="/en/platform"
        title="DeepClinic Core"
        headline="Clinical intelligence infrastructure."
        description="A unified API to integrate state-of-the-art medical reasoning, safety guardrails, and full auditing into any healthcare system."
        bullets={["API & SDK to integrate DeepClinic in days", "End-to-end guardrails, privacy, and audit", "Integrations with your HIS/EMR without breaking workflows", "Continuous evaluation to maintain quality and safety"]}
        accent="rgba(255, 255, 255, 0.55)"
        cta="View API"
      />

      <ProductDeepDive
        step="08"
        href="/en/health"
        title="DeepClinic Family"
        headline="Connected care for those who matter most."
        description="Monitor, alert, and coordinate care for your loved ones, combining clinical data with prevention and real-time follow-up."
        bullets={["Smart alerts and reminders", "Caregivers coordinated with clinical context", "Continuous monitoring to prevent emergencies", "Escalation to medical care when it matters"]}
        accent="rgba(34, 197, 94, 0.55)"
        cta="View Family"
      />

      <ProductDeepDive
        step="09"
        href="/en/imaging"
        title="DeepClinic Imaging"
        headline="The clinical eye that sees everything."
        description="Instant analysis of X-rays, CT scans, and MRIs to detect subtle anomalies and prioritize critical studies."
        bullets={["RX/CT/MRI analysis in seconds", "Consistent detection of subtle findings", "Prioritization of urgent studies", "Clear, traceable reports for the team"]}
        accent="rgba(168, 85, 247, 0.55)"
        cta="View Imaging"
      />

      <DeepClinicImpactWall lang="en" />

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
                  The power
                </h2>
              </MotionReveal>
              <MotionReveal durationMs={900} delayMs={90}>
                <h2 className="text-[clamp(32px,6vw,72px)] font-medium leading-none tracking-tight text-white/35 md:translate-y-[6px] md:text-right">
                  of medicine
                </h2>
              </MotionReveal>
            </div>

            <div className="mt-8 flex justify-end">
              <MotionReveal durationMs={820} delayMs={170}>
                <div className="max-w-2xl text-right">
                  <div className="text-[clamp(22px,3.2vw,40px)] font-semibold leading-[1.02] tracking-tight bg-gradient-to-b from-white to-white/55 bg-clip-text text-transparent">
                    in your hands.
                  </div>
                  <div className="mt-4 text-[13px] font-medium leading-relaxed text-white/50">
                    More precision. More speed. More life.
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
              <div className="text-[10px] font-semibold tracking-[0.25em] text-white/35">[ CLINICAL REVIEWS ]</div>
              <h2 className="mt-7 text-balance text-[clamp(34px,4.6vw,56px)] font-semibold leading-[0.95] tracking-tight text-white">
                What doctors say.
                <span className="text-white/40"> Across different specialties.</span>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-white/60">
                Representative feedback by module, based on clinical scenarios—from visits and triage to agents, scheduling, imaging, and revenue.
              </p>

              <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2">
                <div className="flex items-center gap-1" aria-hidden>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} className="text-[12px] leading-none text-emerald-300">
                      ★
                    </span>
                  ))}
                </div>
                <div className="text-[11px] font-semibold text-white/80">4.9/5 average</div>
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
                <div className="text-[10px] font-semibold tracking-[0.25em] text-white/35">[ GET STARTED ]</div>
                <h2 className="mt-7 text-balance text-[clamp(34px,4.8vw,58px)] font-semibold leading-[0.95] tracking-tight text-white">
                  Activate DeepClinic.
                  <span className="text-white/40"> Multiply your clinical capacity</span>
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/60">
                  Omnichannel, secure, and built for healthcare. Everything integrated on top of DeepClinic 1 to support every stage of care.
                </p>

                <div className="mt-10 flex justify-center">
                  <Link
                    href="/en/signup"
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-[13px] font-semibold text-black shadow-[0_18px_70px_rgba(255,140,64,0.28)]"
                  >
                    Get Started
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
