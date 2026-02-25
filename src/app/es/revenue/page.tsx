import Image from "next/image";
import Link from "next/link";

import { HeroVideo } from "../../../components/hero-video";
import { ConsultationsCounter, HoursSavedCounter } from "../../../components/consultations-counter";
import { AudienceTabs } from "../../../components/audience-tabs";
import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function RevenuePage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav />

      {/* HERO */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-12 text-center md:px-8 lg:px-0">
          <MotionReveal>
            <h1 className="font-sans text-[38px] font-bold leading-tight tracking-tighter text-white sm:text-[44px] md:text-[56px]">
              Maximiza los ingresos de tu práctica con{" "}
              <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                DeepClinic Revenue
              </span>
            </h1>
          </MotionReveal>

          <MotionReveal delayMs={100}>
            <p className="mt-6 text-[18px] leading-relaxed text-white/60">
              Gestión financiera integral, facturación automatizada y análisis de rendimiento para tu consultorio.
            </p>
          </MotionReveal>

          <MotionReveal delayMs={200}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
              >
                Comenzar gratis
              </Link>
            </div>
          </MotionReveal>
        </div>

        <MotionReveal delayMs={300}>
          <div className="mx-auto max-w-6xl px-6 pb-8 md:px-8 lg:px-0">
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50 grayscale transition-all duration-500 hover:opacity-80 hover:grayscale-0">
              <Image
                src="/logos/doktorse.svg"
                alt="Doktor.Se"
                width={120}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
              <Image
                src="/680a6f5dd62951a5097ddab2_nhs.svg"
                alt="NHS"
                width={90}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
              <Image
                src="/680a970e6d5665751f6bfcb8_gaias.png"
                alt="Clínicas Gaias"
                width={110}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
              <Image
                src="/680e64029f546840cd0fa79f_Arriaza.svg"
                alt="Clínica Arriaza"
                width={110}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
              <Image
                src="/680e793ec5490e5100c376a2_CGM.svg"
                alt="CompuGroup Medical"
                width={120}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
              <Image
                src="/680a6ef48f51aabf2425eca5_ncl icb.svg"
                alt="North Central London ICB"
                width={120}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delayMs={400}>
          <HeroVideo theme="dark" />
        </MotionReveal>
      </section>

      <ConsultationsCounter
        locale="es"
        title="Facturas procesadas con DeepClinic Revenue"
        subtitle="Este número aumenta en tiempo real mientras navegas."
        theme="dark"
      />

      <HoursSavedCounter
        locale="es"
        title="Horas ahorradas en contabilidad"
        subtitle="Ahorramos el 50% del tiempo de facturación"
        theme="dark"
      />

      {/* CÓMO FUNCIONA DEEPCLINIC REVENUE */}
      <section id="como-funciona" className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                Cómo funciona DeepClinic Revenue
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                Control total sobre las finanzas de tu práctica médica.
              </p>
            </MotionReveal>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <MotionReveal delayMs={0} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda116cdb3289f729c87c_sv1_3x-p-500.webp"
                    alt="Dashboard financiero en DeepClinic Revenue"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">01. FACTURACIÓN AUTOMÁTICA</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Genera y envía facturas a pacientes y aseguradoras automáticamente tras cada consulta.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={100} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda1b6e4efdc16a1d16ad_sv2_3x-p-500.webp"
                    alt="Reportes de ingresos"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">02. ANÁLISIS DE RENTABILIDAD</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Visualiza tus ingresos, gastos y márgenes por tipo de servicio o procedimiento.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={200} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda247bf886638e57f4a2_sv3_3x-p-500.webp"
                    alt="Gestión de cobros"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">03. GESTIÓN DE COBROS</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Seguimiento de pagos pendientes y conciliación bancaria simplificada.
                  </p>
                </div>
              </article>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* MEJORES HISTORIAS, MAYOR SEGURIDAD */}
      <section className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
          <MotionReveal>
            <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
              Finanzas claras, mayor tranquilidad
            </h2>
            <p className="mt-4 text-[16px] text-white/50">
              DeepClinic Revenue elimina la incertidumbre financiera de tu práctica.
            </p>
          </MotionReveal>

          <div className="mt-16 space-y-8 text-left">
            {/* Fila superior: especialidades y transferencias */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Especialidades */}
              <MotionReveal delayMs={0}>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
                  <div className="relative overflow-hidden rounded-xl bg-black/20 aspect-video w-full">
                    <Image
                      src="/especialidades.png"
                      alt="DeepClinic Revenue para todos los modelos de negocio"
                      width={640}
                      height={360}
                      className="h-auto w-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[14px] font-semibold tracking-wide text-white">ADAPTABLE A TU MODELO</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                      Funciona para consulta privada, pagos por aseguradora, membresías y más.
                    </p>
                  </div>
                </div>
              </MotionReveal>

              {/* Transferencias */}
              <MotionReveal delayMs={150}>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
                  <div className="relative overflow-hidden rounded-xl bg-black/20 aspect-video w-full">
                    <Image
                      src="/medico.png"
                      alt="Conexión con bancos y SAT"
                      width={640}
                      height={360}
                      className="h-auto w-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[14px] font-semibold tracking-wide text-white">
                      CUMPLIMIENTO FISCAL
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                      Emisión de CFDI 4.0 y reportes listos para tu contador.
                    </p>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      <AudienceTabs language="es" theme="dark" />

      {/* DEEPCLINIC REVENUE EN LA PRÁCTICA */}
      <section id="producto" className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                DeepClinic Revenue en la práctica
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                Mejorando la salud financiera de clínicas en México
              </p>
            </MotionReveal>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <MotionReveal delayMs={0}>
              <article className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/Medica.png"
                    alt="Finanzas hospitalarias"
                    fill
                    className="object-cover opacity-90"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-8">
                  <p className="text-[14px] leading-relaxed text-white/80">
                    Identificar fugas de ingresos y optimizar el ciclo de cobro es posible con herramientas analíticas avanzadas.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={150}>
              <article className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/houston.png"
                    alt="Gestión de aseguradoras"
                    fill
                    className="object-cover opacity-90"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-8">
                  <p className="text-[14px] leading-relaxed text-white/80">
                    La gestión de reclamaciones a aseguradoras se simplifica, reduciendo los rechazos y acelerando los pagos.
                  </p>
                </div>
              </article>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* ESTUDIOS DE CASO DESTACADOS */}
      <section className="relative z-10 py-32 border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <MotionReveal>
            <div className="grid items-center gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border border-white/10 bg-black">
                <Image
                  src="/680b8bd084ba7f136270ee2a_testimonial1.png"
                  alt="Director financiero utilizando DeepClinic Revenue"
                  fill
                  className="object-cover opacity-80"
                  sizes="(min-width: 768px) 22rem, 100vw"
                />
              </div>
              <div className="flex flex-col justify-center p-6 text-left">
                <div className="space-y-6">
                  <p className="text-2xl font-medium leading-relaxed text-white/90">
                    «DeepClinic Revenue nos ha dado visibilidad total sobre nuestras finanzas. Hemos recuperado un 15% de ingresos que antes se perdían en trámites administrativos.»
                  </p>
                  <div className="border-l-2 border-white/20 pl-4">
                    <p className="text-sm font-bold uppercase tracking-wider text-white">Roberto Gómez</p>
                    <p className="text-sm text-white/50">Director Financiero • Grupo Médico del Norte</p>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* SEGURIDAD */}
      <section id="seguridad" className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                Priorizamos la seguridad y la integridad
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                DeepClinic Revenue cumple con los más altos estándares de seguridad y protección de datos financieros.
              </p>
            </MotionReveal>
          </div>

          <div className="mt-16 grid gap-10 text-center md:grid-cols-3">
            {[
              {
                title: "Encriptación bancaria",
                desc: "Utilizamos los mismos protocolos de seguridad que las instituciones financieras líderes."
              },
              {
                title: "Información confidencial",
                desc: "Tus datos financieros son estrictamente confidenciales y solo accesibles por personal autorizado."
              },
              {
                title: "Respaldos automáticos",
                desc: "Tu información financiera está respaldada continuamente para evitar pérdidas de datos."
              }
            ].map((item, i) => (
              <MotionReveal key={i} delayMs={i * 100}>
                <div className="rounded-[24px] border border-white/5 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04]">
                  <div className="mb-4 text-sky-400">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-[14px] font-bold uppercase tracking-wide text-white">
                    {item.title}
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/50">
                    {item.desc}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>

          <div className="mt-20 grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center">
            <MotionReveal delayMs={300}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
                <Image
                  src="/hipaa.png"
                  alt="Certificaciones de seguridad de DeepClinic Revenue"
                  fill
                  className="object-cover opacity-80"
                  sizes="(min-width: 768px) 24rem, 100vw"
                />
              </div>
            </MotionReveal>

            <MotionReveal delayMs={400}>
              <div className="space-y-6 text-left">
                <h3 className="text-[24px] font-semibold leading-tight text-white">
                  Con la confianza de gestores en toda América
                </h3>
                <p className="text-[15px] leading-relaxed text-white/60">
                  Basado en los más altos estándares de seguridad, DeepClinic Revenue garantiza una gestión financiera
                  segura y confiable.
                </p>
                <Link
                  href="/es/data-security"
                  className="inline-flex items-center text-[13px] font-bold uppercase tracking-wider text-white transition-colors hover:text-sky-300"
                >
                  Conoce más sobre seguridad <span className="ml-2">→</span>
                </Link>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
