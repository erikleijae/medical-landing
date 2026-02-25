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
    href: "/pt/product",
    title: "DeepClinic Copiloto",
    description: "A IA que ouve, analisa e escreve por você. Transforma consultas em notas clínicas perfeitas, detecta riscos em tempo real e codifica diagnósticos automaticamente. Tudo isso enquanto você foca apenas no paciente.",
    painPoints: ["Anotações manuais", "Burocracia", "Fadiga"],
    metrics: [
      { value: "2h/dia", label: "Economizadas" },
      { value: "100%", label: "Auditoria" },
      { value: "<3s", label: "Latência" },
    ],
    cta: "Ver Copiloto",
    accent: "rgba(56, 189, 248, 0.5)", // sky-400
    delayMs: 0,
  },
  {
    href: "/pt/revenue",
    title: "DeepClinic Receitas",
    description: "O motor financeiro que nunca dorme. Audita cada procedimento, valida coberturas em segundos e recupera receitas perdidas por glosas ou erros de faturamento antes que aconteçam.",
    painPoints: ["Glosas", "Perdas", "Cobrança"],
    metrics: [
      { value: "99%", label: "Aprovação" },
      { value: "↓40%", label: "Glosas" },
      { value: "24/7", label: "Ativo" },
    ],
    cta: "Ver Receitas",
    accent: "rgba(167, 255, 124, 0.5)", // lime
    delayMs: 100,
  },
  {
    href: "/pt/desk",
    title: "DeepClinic Agentes",
    description: "Sua recepção infinita. Agentes de IA que respondem no WhatsApp, agendam consultas e tiram dúvidas de pacientes na hora, com a mesma empatia e precisão do seu melhor atendente.",
    painPoints: ["Ligações", "Absenteísmo", "Espera"],
    metrics: [
      { value: "<10s", label: "Resposta" },
      { value: "+30%", label: "Agendamentos" },
      { value: "24/7", label: "Cobertura" },
    ],
    cta: "Ver Agentes",
    accent: "rgba(244, 63, 94, 0.5)", // rose-500
    delayMs: 0,
  },
  {
    href: "/pt/booking",
    title: "DeepClinic Agenda",
    description: "O calendário que se gerencia sozinho. Otimiza intervalos, reduz o absenteísmo com lembretes inteligentes e prioriza urgências automaticamente conforme a gravidade clínica.",
    painPoints: ["Vazios", "Faltas", "Caos"],
    metrics: [
      { value: "↓25%", label: "Absenteísmo" },
      { value: "+15%", label: "Ocupação" },
      { value: "Auto", label: "Lembretes" },
    ],
    cta: "Ver Agenda",
    accent: "rgba(168, 85, 247, 0.5)", // purple-500
    delayMs: 100,
  },
  {
    href: "/pt/platform",
    title: "DeepClinic Núcleo",
    description: "A infraestrutura de inteligência clínica para o mundo. Uma API unificada para integrar raciocínio médico de ponta, guardrails de segurança e rastreabilidade total em qualquer sistema de saúde.",
    painPoints: ["Silos", "Legado", "Segurança"],
    metrics: [
      { value: "180M+", label: "Decisões" },
      { value: "99.9%", label: "Uptime" },
      { value: "SOC2", label: "Segurança" },
    ],
    cta: "Ver API",
    accent: "rgba(255, 255, 255, 0.5)", // white
    delayMs: 0,
  },
  {
    href: "/pt/health",
    title: "DeepClinic Família",
    description: "Saúde conectada para quem mais importa. Um sistema que monitora, alerta e coordena o cuidado de quem você ama, integrando dados clínicos com atenção preventiva em tempo real.",
    painPoints: ["Dispersão", "Dúvidas", "Urgências"],
    metrics: [
      { value: "24/7", label: "Monitoramento" },
      { value: "100%", label: "Tranquilidade" },
      { value: "Família", label: "Conectada" },
    ],
    cta: "Ver Família",
    accent: "rgba(251, 146, 60, 0.5)", // orange-400
    delayMs: 100,
  },
  {
    href: "/pt/imaging",
    title: "DeepClinic Imagens",
    description: "O olhar clínico que vê tudo. Análise instantânea de radiografias, tomografias e ressonâncias com precisão de especialista, detectando anomalias sutis que o olho humano poderia deixar passar.",
    painPoints: ["Erro", "Atraso", "Subjetividade"],
    metrics: [
      { value: "<5s", label: "Análise" },
      { value: "99.8%", label: "Sensibilidade" },
      { value: "Multi", label: "Modalidade" },
    ],
    cta: "Ver Imagens",
    accent: "rgba(236, 72, 153, 0.5)", // pink-500
    delayMs: 0,
  },
] as const;

const DOCTOR_REVIEWS = [
  {
    initials: "VQ",
    name: "Dra. Valeria Quintana",
    specialty: "Clínica médica",
    location: "Monterrey, MX",
    product: "Copiloto",
    rating: 5,
    accent: "rgba(56, 189, 248, 0.55)",
    quote:
      "Durante o plantão, eu faço notas em minutos, com uma estrutura impecável. O que mais valorizo é a rastreabilidade: consigo justificar cada decisão e ajustar o texto sem perder o fluxo.",
  },
  {
    initials: "AR",
    name: "Dr. Andrés Roldán",
    specialty: "Emergência",
    location: "CDMX, MX",
    product: "Triagem",
    rating: 5,
    accent: "rgba(244, 63, 94, 0.55)",
    quote:
      "A priorização clínica é consistente e rápida. Ajuda a documentar riscos e alertas sem depender da memória; o pronto-socorro flui melhor e com menos omissões.",
  },
  {
    initials: "MC",
    name: "Dra. Mariana Cifuentes",
    specialty: "Pediatria",
    location: "Bogotá, CO",
    product: "Histórico",
    rating: 5,
    accent: "rgba(34, 197, 94, 0.55)",
    quote:
      "Finalmente tenho um prontuário universal que não se quebra entre consultas. Quando chega uma criança com antecedentes complexos, o contexto aparece claro e pronto para decidir.",
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
      "A agenda deixou de ser uma dor. Os lembretes reduziram o absenteísmo e, quando há urgências, o remanejamento é imediato. Dá para sentir o impacto na produtividade.",
  },
  {
    initials: "LS",
    name: "Dra. Lucía Salvatierra",
    specialty: "Ginecologia e obstetrícia",
    location: "Lima, PE",
    product: "Agentes",
    rating: 5,
    accent: "rgba(244, 63, 94, 0.55)",
    quote:
      "Os agentes respondem no WhatsApp com empatia e precisão. Deixam tudo documentado e filtram dúvidas repetidas; minha equipe foca nos pacientes, não nas mensagens.",
  },
  {
    initials: "PC",
    name: "Dr. Pablo Carranza",
    specialty: "Radiologia",
    location: "Santiago, CL",
    product: "Imagens",
    rating: 5,
    accent: "rgba(236, 72, 153, 0.55)",
    quote:
      "A leitura preliminar acelera a priorização. Não substitui o julgamento, mas reduz o tempo de resposta e padroniza achados. Muito útil em plantões cheios.",
  },
  {
    initials: "SR",
    name: "Dra. Sofía Rivas",
    specialty: "Cardiologia",
    location: "Madrid, ES",
    product: "Receitas",
    rating: 5,
    accent: "rgba(167, 255, 124, 0.55)",
    quote:
      "A conta justificada mudou a conversa com a auditoria: evidência clínica + regras claras. Menos retrabalho e menos atrito com o faturamento.",
  },
  {
    initials: "DM",
    name: "Dr. Diego Mena",
    specialty: "Anestesiologia",
    location: "Quito, EC",
    product: "Núcleo / API",
    rating: 5,
    accent: "rgba(255, 255, 255, 0.55)",
    quote:
      "Integrar ao sistema do hospital foi surpreendentemente direto. O que me deixa tranquilo são os guardrails e a auditoria: dá para operar com padrões clínicos.",
  },
] as const;

const FOOTER_GROUPS = [
  {
    title: "PRODUTOS",
    links: [
      { label: "Copiloto", href: "/pt/product" },
      { label: "Receitas", href: "/pt/revenue" },
      { label: "Agentes", href: "/pt/desk" },
      { label: "Agenda", href: "/pt/booking" },
      { label: "Família", href: "/pt/health" },
      { label: "Imagens", href: "/pt/imaging" },
    ],
  },
  {
    title: "PLATAFORMA",
    links: [
      { label: "API & SDK", href: "/pt/platform" },
      { label: "Integrações", href: "/pt/integrations" },
      { label: "Segurança", href: "/pt/data-security" },
      { label: "Modelos", href: "/pt/models" },
    ],
  },
  {
    title: "EMPRESA",
    links: [
      { label: "Sobre nós", href: "/pt/about" },
      { label: "Carreiras", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contato", href: "/contact" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacidade", href: "/pt/privacy-policy" },
      { label: "Termos", href: "/pt/terms-of-service" },
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
    name: "Avó",
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
    name: "Mãe",
    videoSrc: "/video/696604acc25b997c8d38dea0_697c49791106f47542e76f7a_luffu-mom-v2_webm.webm",
    type: "video/webm",
    location: "Casa",
  },
  {
    name: "Pai",
    videoSrc: "/video/696604acc25b997c8d38dea0_697ce8118f60a7de162bcc89_luffu-dad-v9_webm.webm",
    type: "video/webm",
    location: "Casa",
  },
  {
    name: "Avô",
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

function resolvePtProductHref(href: string) {
  if (
    href === "/pt/revenue" ||
    href === "/pt/desk" ||
    href === "/pt/booking" ||
    href === "/pt/platform" ||
    href === "/pt/health" ||
    href === "/pt/imaging" ||
    href === "/pt/integrations" ||
    href === "/pt/models"
  ) {
    return "/pt/product";
  }
  return href;
}

function ProductsOverviewMosaic({ items }: { items: readonly InfraCardProps[] }) {
  const featured = items.find((i) => i.href === "/pt/product") ?? items[0];
  const primary = items.filter((i) => i.href === "/pt/booking" || i.href === "/pt/desk");
  const secondary = items.filter((i) => ![featured.href, ...primary.map((p) => p.href)].includes(i.href));

  return (
    <section className="relative z-10 min-h-[100svh] snap-start flex items-center px-6 pt-20 pb-12 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-screen-2xl">
        <MotionReveal durationMs={760} className="w-full">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
            <div className="max-w-xl">
              <div className="text-[10px] font-semibold tracking-[0.25em] text-white/35">[ PRODUTOS ]</div>
              <h2 className="mt-7 text-balance text-[clamp(34px,4.8vw,60px)] font-semibold leading-[0.95] tracking-tight text-white">
                Suite clínica completa.
                <span className="text-white/40"> Um núcleo, múltiplos produtos.</span>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-white/60">
                Cada módulo foi criado para uma etapa diferente do cuidado, mas todos compartilham o mesmo contexto e a mesma segurança.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {["Do agendamento à consulta", "Acompanhamento 24/7", "Rastreabilidade clínica", "Menos fricção"].map((t) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[12.5px] text-white/70">
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-12 gap-4">
                <Link
                  href={resolvePtProductHref(featured.href)}
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
                      <div className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">Notas perfeitas, riscos detectados, códigos prontos.</div>
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
                    href={resolvePtProductHref(p.href)}
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
                    href={resolvePtProductHref(p.href)}
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
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">PASSO {step}</div>
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
                <Link
                  href={resolvePtProductHref(href)}
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
      title: "História clínica",
      metric: "+250 páginas de evoluções, prescrições, exames laboratoriais e estudos",
    },
    {
      title: "Contratos comerciais",
      metric: "+100 contratos por hospital com regras diferentes entre si",
    },
    {
      title: "HIS / EMR",
      metric: "+18 horas de trabalho manual dentro do HIS",
    },
  ] as const;

  const solution = [
    {
      title: "IA interpreta contratos",
      description:
        "Lê cláusulas, aplica regras e valida coberturas automaticamente para que cada cobrança esteja justificada.",
    },
    {
      title: "IA analisa dados clínicos",
      description:
        "Cruza evoluções, prescrições e imagens com regras de auditoria para detectar inconsistências antes de faturar.",
    },
    {
      title: "IA gera conta justificada",
      description:
        "Produz uma conta médica completa, rastreável e pronta para auditoria externa com máxima transparência.",
    },
    {
      title: "IA integra no seu HIS",
      description:
        "Insere itens validados no sistema interno do hospital e elimina retrabalho administrativo.",
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
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">PASSO 06</div>
              <h3 className="mt-6 text-balance text-[clamp(30px,3.4vw,46px)] font-semibold leading-[0.98] tracking-tight text-white">
                DeepClinic Receitas
              </h3>
              <div className="mt-5 text-[16px] font-medium text-white/80">Conta médica perfeita. Sem vazamentos.</div>
              <p className="mt-6 text-[14px] leading-relaxed text-white/55">
                Transforme uma operação complexa em um fluxo automático: interpreta contratos, valida evidências clínicas e recupera receitas antes que se percam por glosas ou erros.
              </p>

              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: tone, boxShadow: `0 0 16px ${tone}` }} />
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">O desafio</div>
                </div>
                <div className="mt-3 text-balance text-[16px] font-semibold leading-tight text-white/85 md:text-[18px]">
                  A complexidade de uma conta médica de 5 dias é sobre-humana.
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
                  href={resolvePtProductHref("/pt/revenue")}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80"
                >
                  Ver Receitas
                  <span className="ml-2" aria-hidden>
                    ↗
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative flex flex-col gap-3 lg:gap-2">
              <DeepClinicFxFrame accent={accent} variant="video" tilt={false} spotlight scanlines shimmer cursor className="mx-auto w-full max-w-[860px]">
                <div className="relative p-3 md:p-4 lg:p-3">
                  <InfraVisual href="/pt/revenue" accent={accent} />
                </div>
              </DeepClinicFxFrame>

              <div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: tone, boxShadow: `0 0 16px ${tone}` }} />
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Nossa solução</div>
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
                            Receitas
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
  if (href === "/pt/imaging") {
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
              alt="Análise de imagens médicas"
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
              <span className="text-[10px] font-medium text-white/90">Análise concluída</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (href === "/pt/desk") {
    return (
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60">
        <video autoPlay loop muted playsInline preload="auto" className="h-auto w-full object-cover aspect-[4/3] opacity-90">
          <source src="/video/deep.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/55" />
      </div>
    );
  }

  if (href === "/pt/booking") {
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

  if (href === "/pt/product") {
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

  if (href === "/pt/revenue") {
    const nodes = [
      { label: "Evoluções\nclínicas", x: 175, y: 70, delay: "-0.2s" },
      { label: "Laboratório\ne exames", x: 230, y: 155, delay: "-1.0s" },
      { label: "Prescrições\n+ verificações", x: 305, y: 275, delay: "-1.8s" },
      { label: "Notas\ncirúrgicas", x: 235, y: 400, delay: "-2.6s" },
      { label: "Contratos\ncomerciais", x: 175, y: 505, delay: "-3.4s" },
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
            Conta médica
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
                  <div className="text-[11px] font-medium text-white/70">Conta médica</div>
                </div>

                <div className="px-4 py-3 text-[10px] text-white/70 sm:text-[11px]">
                  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-1">
                    <div className="text-white/45">Cobrança</div>
                    <div className="min-w-0 truncate text-right font-medium text-white/80">Ar comprimido</div>
                    <div className="text-right text-white/55">+ 4 h</div>
                  </div>
                  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-1">
                    <div className="text-white/45">Material</div>
                    <div className="min-w-0 truncate text-right font-medium text-white/80">Equipamento macro</div>
                    <div className="text-right text-white/55">+ 1</div>
                  </div>
                  <div className="mt-2 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2">
                    <div className="flex items-start gap-2">
                      <div
                        className="mt-0.5 h-2.5 w-2.5 rounded-sm"
                        style={{ background: "rgba(245,158,11,0.35)", boxShadow: "0 0 12px rgba(245,158,11,0.25)" }}
                      />
                      <div className="leading-snug text-white/55">
                        Falta anotação de mudança de dieta enteral
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

  if (href === "/pt/platform") {
    return (
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <div className="h-2 w-28 rounded-full bg-white/10" />
          </div>
          <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-medium text-white/60">
            Núcleo
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
                  {["Guardrails", "Rastreabilidade", "Especialidade", "Privacidade"].map((tag, i) => (
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
                  <div className="text-[10px] font-semibold tracking-[0.22em] text-white/40">ROTAS</div>
                  <div className="text-[10px] font-medium text-white/50">Ativas</div>
                </div>
                <div className="mt-3 space-y-2">
                  {[
                    { label: "Agendamento → Triagem", tone: "rgba(59,130,246,0.60)", delay: "-0.4s" },
                    { label: "Consulta → Registro", tone: "rgba(245,158,11,0.60)", delay: "-1.0s" },
                    { label: "Acompanhamento", tone: "rgba(16,185,129,0.60)", delay: "-1.6s" },
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
                <div className="text-[10px] font-semibold tracking-[0.22em] text-white/40">ORQUESTRAÇÃO</div>
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
                    { label: "Raciocínio", tone: "rgba(255,255,255,0.04)" },
                    { label: "Ferramentas", tone: "rgba(255,255,255,0.04)" },
                    { label: "Auditoria", tone: "rgba(255,255,255,0.04)" },
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

  if (href === "/pt/health") {
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
                  <div className="text-[11px] font-semibold text-white/90">Lembrete: medicação</div>
                  <div className="mt-1 text-[10px] leading-snug text-white/55">12:00 • Confirmar tomada</div>
                </div>
              </div>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />
              <div className="mt-3 flex items-center justify-between">
                <div className="text-[10px] font-medium text-white/55">Pendente</div>
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
                  <div className="mt-1 text-[10px] leading-snug text-white/55">Alertas e coordenação</div>
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
                {["Acompanhamento", "Medicamentos", "Consultas"].map((t) => (
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
                      <div className="text-[10px] uppercase tracking-widest text-white/40">Monitoramento contínuo</div>
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
                Inteligência Artificial Especializada
              </div>
              <h2 className="mt-7 text-balance text-[clamp(34px,4.6vw,56px)] font-semibold leading-[0.95] tracking-tight text-white">
                Por que o DeepClinic1 é superior
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
                Diferente de modelos genéricos treinados com toda a internet, o DeepClinic1 foi treinado exclusivamente com literatura médica, diretrizes de prática clínica e milhões de casos anonimizados.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                    <ShieldCheckIcon className="h-4 w-4 text-emerald-300" />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-white/85">Zero alucinações clínicas</div>
                    <div className="mt-1 text-[12.5px] leading-relaxed text-white/55">
                      Verificamos cada afirmação médica com bases de dados confiáveis.
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
                      Entende históricos complexos e relações entre sintomas e tratamentos.
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
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Assertividade clínica</div>

                <div className="mt-8 space-y-7">
                  <div>
                    <div className="mb-2 flex items-end justify-between">
                      <span className="text-[12.5px] font-semibold text-white">DeepClinic1</span>
                      <span className="text-[22px] font-semibold text-emerald-300">98%</span>
                    </div>
                    <div className="h-4 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-emerald-500" style={{ width: "98%" }} />
                    </div>
                    <div className="mt-2 text-[11px] font-medium text-emerald-300/80">Especializado em medicina</div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-end justify-between">
                      <span className="text-[12.5px] font-medium text-white/60">LLMs genéricos (GPT-4, Gemini)</span>
                      <span className="text-[18px] font-semibold text-white/40">81%</span>
                    </div>
                    <div className="h-4 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-white/20" style={{ width: "81%" }} />
                    </div>
                    <div className="mt-2 text-[11px] font-medium text-white/40">Média da indústria em geral</div>
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
              Segurança de nível hospitalar
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-white/60">
              Toda a plataforma DeepClinic cumpre os mais rigorosos padrões de privacidade.
            </p>
          </MotionReveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <MotionReveal durationMs={760} delayMs={140}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02]">
              <Image
                src="/hipaa.png"
                alt="Certificações de segurança da DeepClinic"
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
                <h3 className="text-[22px] font-semibold tracking-tight text-white/90">Seus dados, sempre seguros</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <ShieldCheckIcon className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                    <span className="text-[13px] leading-relaxed text-white/65">Conformidade total com HIPAA e NOM</span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheckIcon className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                    <span className="text-[13px] leading-relaxed text-white/65">Criptografia ponta a ponta</span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheckIcon className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                    <span className="text-[13px] leading-relaxed text-white/65">Armazenamento seguro na América do Norte</span>
                  </li>
                </ul>
                <div>
                  <Link href="/pt/data-security" className="inline-flex items-center text-[12.5px] font-semibold text-emerald-300">
                    Saiba mais sobre nossa segurança
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


export default function DeepClinicLandingPagePt() {
  return (
    <main className="dc_perf relative h-[100svh] overflow-x-hidden overflow-y-auto overscroll-x-none overscroll-y-none snap-none md:snap-y md:snap-mandatory bg-black text-white">
      <DeepClinicPerfController />
      {/* Fondo Grok-style: Animado */}
      <div className="dc_bg_static">
        <GrokBackground variant="hero" />
      </div>

      <DeepClinicTopNav showProductsSubnav lang="pt" />

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
                  A inteligência clínica definitiva.
                  <br />
                  <span className="text-white/40">Revolucionando a saúde em escala planetária.</span>
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
              <div className="text-[10px] font-semibold tracking-[0.25em] text-white/35">[ INFRAESTRUTURA ]</div>
              <h2 className="mt-7 text-balance text-[40px] font-semibold tracking-tight text-white md:text-[54px]">
                O Sistema Operacional da Medicina
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
                  Tudo roda sobre o nosso
                  <span className="text-white/40"> LLM próprio</span>
                </h2>
                <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-white/60">
                  DeepClinic 1 é inteligência treinada e avaliada para o ambiente clínico. É a camada comum que torna cada produto consistente, seguro e rastreável — do agendamento ao acompanhamento.
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
                      {["Especializado em saúde", "Evidência e rastreabilidade", "Segurança por design", "Consistência multi-produto"].map((item) => (
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
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">Passo a passo</div>
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
                          stage: "Agenda",
                          product: "Sistema de Agenda",
                          benefit: "Menos faltas. Agenda cheia.",
                          href: "/pt/booking",
                          color: "rgba(99,102,241,0.55)",
                        },
                        {
                          step: "02",
                          stage: "Agentes",
                          product: "Agentes Omnichannel",
                          benefit: "Áudio + WhatsApp 24/7.",
                          href: "/pt/desk",
                          color: "rgba(56,189,248,0.55)",
                        },
                        {
                          step: "03",
                          stage: "Triagem",
                          product: "Comando de Triagem",
                          benefit: "Caso pronto antes de entrar.",
                          href: "",
                          color: "rgba(16,185,129,0.55)",
                        },
                        {
                          step: "04",
                          stage: "Histórico",
                          product: "Prontuário Unificado",
                          benefit: "O crítico em segundos.",
                          href: "",
                          color: "rgba(59,130,246,0.55)",
                        },
                        {
                          step: "05",
                          stage: "Consulta",
                          product: "Copiloto Clínico",
                          benefit: "Planos e riscos acionáveis.",
                          href: "/pt/product",
                          color: "rgba(56,189,248,0.55)",
                        },
                        {
                          step: "06",
                          stage: "Família",
                          product: "Sistema de Cuidado Familiar",
                          benefit: "Acompanhamento coordenado.",
                          href: "/pt/health",
                          color: "rgba(34,197,94,0.55)",
                        },
                        {
                          step: "07",
                          stage: "Análise de Imagens",
                          product: "DeepClinic Análise de Imagens",
                          benefit: "Detecta anomalias invisíveis ao olho humano.",
                          href: "/pt/imaging",
                          color: "rgba(168,85,247,0.55)",
                        },
                        {
                          step: "08",
                          stage: "Receita",
                          product: "Motor de Receita",
                          benefit: "Conta médica precisa, sem perdas.",
                          href: "/pt/revenue",
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
                              <Link href={resolvePtProductHref(row.href)} className="block rounded-2xl">
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
                      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">Camada comum</div>
                      <div className="mt-2 text-[12.5px] text-white/65">DeepClinic 1 mantém segurança e consistência em cada etapa.</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">Escalável</div>
                      <div className="mt-2 text-[12.5px] text-white/65">Cada produto se integra ao próximo sem perder contexto.</div>
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
        href="/pt/booking"
        title="DeepClinic Agenda"
        headline="O calendário que se gerencia sozinho."
        description="Reduz faltas, preenche horários livres e prioriza automaticamente por gravidade. Uma agenda viva conectada ao restante do fluxo clínico."
        bullets={["Lembretes inteligentes e confirmação omnicanal", "Otimiza horários livres para elevar a ocupação", "Prioriza urgências com critérios clínicos", "Integra-se ao histórico e ao acompanhamento"]}
        accent="rgba(168, 85, 247, 0.55)"
        cta="Ver Agenda"
      />

      <ProductDeepDive
        step="02"
        href="/pt/desk"
        title="DeepClinic Agentes"
        headline="Sua recepção infinita."
        description="Agentes clínicos que respondem WhatsApp, áudio e dúvidas frequentes, agendam consultas e filtram o que é urgente. Sem perder empatia nem rastreabilidade."
        bullets={["Atendimento 24/7 com tempos de espera próximos de 0", "Triagem básica e escalonamento quando importa", "Menos carga operacional, mais foco clínico", "Contexto compartilhado com o restante dos produtos"]}
        accent="rgba(244, 63, 94, 0.55)"
        cta="Ver Agentes"
      />

      <DeepClinicTriage lang="pt" />

      <DeepClinicHistory lang="pt" />

      <ProductDeepDive
        step="05"
        href="/pt/product"
        title="DeepClinic Copiloto"
        headline="A consulta vira um sistema."
        description="Escuta, analisa e escreve por você. Gera notas clínicas claras, detecta riscos e sugere códigos com auditoria e rastreabilidade."
        bullets={["Notas clínicas consistentes em minutos", "Detecção de riscos e contraindicações", "Códigos diagnósticos prontos para faturamento", "Verificação e rastreabilidade em cada saída"]}
        accent="rgba(56, 189, 248, 0.55)"
        cta="Ver Copiloto"
      />

      <DeepClinicWhatsApp lang="pt" />

      <DeepClinicRevenuePower />

      <ProductDeepDive
        step="07"
        href="/pt/platform"
        title="DeepClinic Núcleo"
        headline="A infraestrutura de inteligência clínica."
        description="Uma API unificada para integrar raciocínio médico de ponta, guardrails de segurança e auditoria total em qualquer sistema de saúde."
        bullets={["API & SDK para integrar a DeepClinic em dias", "Guardrails, privacidade e auditoria ponta a ponta", "Integrações com seu HIS/EMR sem quebrar o fluxo", "Avaliação contínua para manter qualidade e segurança"]}
        accent="rgba(255, 255, 255, 0.55)"
        cta="Ver API"
      />

      <ProductDeepDive
        step="08"
        href="/pt/health"
        title="DeepClinic Família"
        headline="Saúde conectada para quem mais importa."
        description="Monitora, alerta e coordena o cuidado de quem você ama, integrando dados clínicos com prevenção e acompanhamento em tempo real."
        bullets={["Alertas e lembretes inteligentes", "Cuidadores coordenados com contexto clínico", "Acompanhamento contínuo para prevenir urgências", "Escalonamento para atendimento médico quando importa"]}
        accent="rgba(34, 197, 94, 0.55)"
        cta="Ver Família"
      />

      <ProductDeepDive
        step="09"
        href="/pt/imaging"
        title="DeepClinic Imagens"
        headline="O olhar clínico que vê tudo."
        description="Análise instantânea de radiografias, tomografias e ressonâncias para detectar anomalias sutis e priorizar exames críticos."
        bullets={["Análise de RX/CT/MRI em segundos", "Detecção consistente de achados sutis", "Priorização de exames urgentes", "Relatórios claros e rastreáveis para a equipe"]}
        accent="rgba(168, 85, 247, 0.55)"
        cta="Ver Imagens"
      />

      <DeepClinicImpactWall lang="pt" />

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
                  O poder
                </h2>
              </MotionReveal>
              <MotionReveal durationMs={900} delayMs={90}>
                <h2 className="text-[clamp(32px,6vw,72px)] font-medium leading-none tracking-tight text-white/35 md:translate-y-[6px] md:text-right">
                  da medicina
                </h2>
              </MotionReveal>
            </div>

            <div className="mt-8 flex justify-end">
              <MotionReveal durationMs={820} delayMs={170}>
                <div className="max-w-2xl text-right">
                  <div className="text-[clamp(22px,3.2vw,40px)] font-semibold leading-[1.02] tracking-tight bg-gradient-to-b from-white to-white/55 bg-clip-text text-transparent">
                    em suas mãos.
                  </div>
                  <div className="mt-4 text-[13px] font-medium leading-relaxed text-white/50">
                    Mais precisão. Mais velocidade. Mais vida.
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
              <div className="text-[10px] font-semibold tracking-[0.25em] text-white/35">[ DEPOIMENTOS CLÍNICOS ]</div>
              <h2 className="mt-7 text-balance text-[clamp(34px,4.6vw,56px)] font-semibold leading-[0.95] tracking-tight text-white">
                O que os médicos dizem.
                <span className="text-white/40"> Em diferentes especialidades.</span>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-white/60">
                Comentários representativos por módulo, baseados em cenários clínicos: da consulta e triagem até agentes, agenda, imagens e receita.
              </p>

              <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2">
                <div className="flex items-center gap-1" aria-hidden>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} className="text-[12px] leading-none text-emerald-300">
                      ★
                    </span>
                  ))}
                </div>
                <div className="text-[11px] font-semibold text-white/80">4,9/5 em média</div>
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
                <div className="text-[10px] font-semibold tracking-[0.25em] text-white/35">[ COMEÇAR ]</div>
                <h2 className="mt-7 text-balance text-[clamp(34px,4.8vw,58px)] font-semibold leading-[0.95] tracking-tight text-white">
                  Ative a DeepClinic.
                  <span className="text-white/40"> Multiplique sua capacidade clínica</span>
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/60">
                  Omnicanal, seguro e projetado para a saúde. Tudo integrado sobre o DeepClinic 1 para resolver cada etapa do cuidado.
                </p>

                <div className="mt-10 flex justify-center">
                  <Link
                    href="/pt/signup"
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-[13px] font-semibold text-black shadow-[0_18px_70px_rgba(255,140,64,0.28)]"
                  >
                    Começar agora
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
                          href={resolvePtProductHref(link.href)}
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
