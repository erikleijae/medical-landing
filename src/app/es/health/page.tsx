import Image from "next/image";
import Link from "next/link";

import { HeroVideo } from "../../../components/hero-video";
import { ConsultationsCounter, HoursSavedCounter } from "../../../components/consultations-counter";
import { AudienceTabs } from "../../../components/audience-tabs";
import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function HealthPage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav />

      {/* HERO */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center md:px-8 lg:px-0">
          <MotionReveal>
            <h1 className="font-sans text-[42px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[56px] md:text-[72px]">
              Salud conectada para{" "}
              <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                pacientes
              </span>
            </h1>
          </MotionReveal>
          
          <MotionReveal delayMs={100}>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/60 sm:text-[20px]">
              Empodera a tus pacientes con acceso a su historial, citas y comunicación directa. 
              <span className="text-white/40"> El futuro del cuidado médico.</span>
            </p>
          </MotionReveal>

          <MotionReveal delayMs={200}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105"
              >
                Comenzar gratis
              </Link>
            </div>
          </MotionReveal>
        </div>

        <MotionReveal delayMs={300}>
          <div className="mx-auto max-w-6xl px-6 pb-12 md:px-8 lg:px-0 mt-20">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-50 grayscale transition-all duration-500 hover:opacity-80 hover:grayscale-0">
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
        title="Pacientes conectados"
        subtitle="Este número aumenta en tiempo real mientras navegas."
        theme="dark"
      />

      <HoursSavedCounter
        locale="es"
        title="Horas optimizadas"
        subtitle="Mejor comunicación, menos visitas innecesarias"
        theme="dark"
      />

      {/* CÓMO FUNCIONA DEEPCLINIC HEALTH */}
      <section id="como-funciona" className="relative z-10 py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
              Cómo funciona
            </h2>
            <p className="mt-4 text-[16px] text-white/50">
              La app que conecta al paciente con su médico y su salud.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <MotionReveal delayMs={0} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda116cdb3289f729c87c_sv1_3x-p-500.webp"
                    alt="App de paciente"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">01. ACCESO AL HISTORIAL</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Los pacientes pueden consultar sus recetas, resultados de laboratorio y notas de consulta en cualquier momento.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={100} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda1b6e4efdc16a1d16ad_sv2_3x-p-500.webp"
                    alt="Chat médico-paciente"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">02. COMUNICACIÓN SEGURA</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Canal de chat seguro y directo para resolver dudas sin necesidad de visitas presenciales.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={200} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda247bf886638e57f4a2_sv3_3x-p-500.webp"
                    alt="Gestión de salud familiar"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">03. SALUD FAMILIAR</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Gestiona la salud de toda la familia, incluyendo niños y mascotas, desde una sola cuenta.
                  </p>
                </div>
              </article>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* MEJORES HISTORIAS */}
      <section className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
          <MotionReveal>
            <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
              Mejores resultados
            </h2>
            <p className="mt-4 text-[16px] text-white/50">
              DeepClinic Health fomenta el autocuidado y la adherencia al tratamiento.
            </p>
          </MotionReveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 text-left">
            <MotionReveal delayMs={0}>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/20">
                  <Image
                    src="/especialidades.png"
                    alt="DeepClinic Health para todos"
                    fill
                    className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="mt-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">EXPERIENCIA UNIFICADA</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                    Una sola app para interactuar con todos sus médicos y proveedores de salud.
                  </p>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delayMs={150}>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/20">
                  <Image
                    src="/medico.png"
                    alt="Seguimiento de tratamiento"
                    fill
                    className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="mt-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">MEJOR ADHERENCIA</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                    Recordatorios de medicamentos y citas ayudan a los pacientes a seguir su tratamiento al pie de la letra.
                  </p>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <AudienceTabs language="es" theme="dark" />

      {/* EN LA PRÁCTICA */}
      <section id="producto" className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
              En la práctica
            </h2>
            <p className="mt-4 text-[16px] text-white/50">
              Modernizando la experiencia del paciente
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <MotionReveal delayMs={0}>
              <article className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/Medica.png"
                    alt="Experiencia del paciente"
                    fill
                    className="object-cover opacity-90"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-8">
                  <p className="text-[14px] leading-relaxed text-white/80">
                    Los pacientes valoran tener el control de su salud en la palma de su mano, lo que aumenta la lealtad hacia su médico.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={150}>
              <article className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/houston.png"
                    alt="Telemedicina"
                    fill
                    className="object-cover opacity-90"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-8">
                  <p className="text-[14px] leading-relaxed text-white/80">
                    La telemedicina integrada permite consultas rápidas y seguimiento continuo sin desplazamientos.
                  </p>
                </div>
              </article>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative z-10 py-32 border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <MotionReveal>
            <div className="grid items-center gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div className="relative aspect-square w-full overflow-hidden rounded-[32px] border border-white/10 bg-black">
                <Image
                  src="/680b8bd084ba7f136270ee2a_testimonial1.png"
                  alt="Paciente utilizando DeepClinic Health"
                  fill
                  className="object-cover opacity-80"
                  sizes="(min-width: 768px) 22rem, 100vw"
                />
              </div>
              <div className="flex flex-col justify-center p-6 text-left">
                <div className="space-y-6">
                  <p className="text-2xl font-medium leading-relaxed text-white/90">
                    «Tener todas las recetas y citas de mis hijos y mías en una sola app es increíble. Ya no pierdo papeles ni olvido cuándo toca la próxima revisión.»
                  </p>
                  <div className="border-l-2 border-white/20 pl-4">
                    <p className="text-sm font-bold uppercase tracking-wider text-white">María López</p>
                    <p className="text-sm text-white/50">Madre de familia • Usuaria de DeepClinic Health</p>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* SEGURIDAD */}
      <section id="seguridad" className="relative z-10 border-t border-white/5 py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
              Seguridad e integridad
            </h2>
            <p className="mt-4 text-[16px] text-white/50">
              DeepClinic Health protege la privacidad de tu información médica.
            </p>
          </div>

          <div className="mt-16 grid gap-10 text-center md:grid-cols-3">
            {[
              {
                title: "Acceso biométrico",
                desc: "Protege el acceso a tu app con huella digital o reconocimiento facial."
              },
              {
                title: "Tus datos son tuyos",
                desc: "Tú decides qué compartir y con quién. Tienes control total sobre tu información."
              },
              {
                title: "Cumplimiento de privacidad",
                desc: "Cumplimos con todas las normativas de protección de datos personales en salud."
              }
            ].map((item, i) => (
              <MotionReveal key={i} delayMs={i * 100}>
                <div className="rounded-[24px] border border-white/5 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04]">
                  <div className="mb-4 text-sky-400">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
              <Image
                src="/hipaa.png"
                alt="Certificaciones de seguridad"
                fill
                className="object-cover opacity-80"
                sizes="(min-width: 768px) 24rem, 100vw"
              />
            </div>

            <div className="space-y-6 text-left">
              <h3 className="text-[24px] font-semibold leading-tight text-white">
                Con la confianza de familias en toda América
              </h3>
              <p className="text-[15px] leading-relaxed text-white/60">
                Basado en los más altos estándares de seguridad, DeepClinic Health garantiza una gestión de salud personal
                segura y confiable.
              </p>
              <Link
                href="/es/data-security"
                className="inline-flex items-center text-[13px] font-bold uppercase tracking-wider text-white transition-colors hover:text-sky-300"
              >
                Conoce más sobre seguridad <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
