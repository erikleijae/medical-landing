import Image from "next/image";
import Link from "next/link";

import { HeroVideo } from "../../../components/hero-video";
import { ConsultationsCounter, HoursSavedCounter } from "../../../components/consultations-counter";
import { AudienceTabs } from "../../../components/audience-tabs";
import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function BookingPage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav />

      {/* HERO */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-12 text-center md:px-8 lg:px-0">
          <MotionReveal>
            <h1 className="font-sans text-[38px] font-bold leading-tight tracking-tighter text-white sm:text-[44px] md:text-[56px]">
              Agenda inteligente para tu práctica con{" "}
              <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                DeepClinic Booking
              </span>
            </h1>
          </MotionReveal>

          <MotionReveal delayMs={100}>
            <p className="mt-6 text-[18px] leading-relaxed text-white/60">
              Permite que tus pacientes agenden citas 24/7, reduce el ausentismo y llena tu agenda automáticamente.
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
        title="Citas agendadas con DeepClinic Booking"
        subtitle="Este número aumenta en tiempo real mientras navegas."
        theme="dark"
      />

      <HoursSavedCounter
        locale="es"
        title="Horas ahorradas en gestión de agenda"
        subtitle="Ahorramos el 40% del tiempo de recepción"
        theme="dark"
      />

      {/* CÓMO FUNCIONA DEEPCLINIC BOOKING */}
      <section id="como-funciona" className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                Cómo funciona DeepClinic Booking
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                La forma más sencilla para que tus pacientes encuentren y reserven cita contigo.
              </p>
            </MotionReveal>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <MotionReveal delayMs={0} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda116cdb3289f729c87c_sv1_3x-p-500.webp"
                    alt="Pantalla de reserva online en móvil"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">01. TU PERFIL ONLINE</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Comparte tu enlace de reserva personalizado. Tus pacientes pueden ver tu disponibilidad en tiempo real.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={100} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda1b6e4efdc16a1d16ad_sv2_3x-p-500.webp"
                    alt="Confirmación de cita"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">02. RESERVA INSTANTÁNEA</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    El paciente elige el horario, completa sus datos y confirma la cita en segundos. Sin llamadas telefónicas.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={200} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda247bf886638e57f4a2_sv3_3x-p-500.webp"
                    alt="Recordatorios automáticos"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">03. RECORDATORIOS AUTOMÁTICOS</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Reducimos el ausentismo enviando recordatorios automáticos por WhatsApp y correo electrónico.
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
              Agenda llena, menos ausentismo
            </h2>
            <p className="mt-4 text-[16px] text-white/50">
              DeepClinic Booking optimiza tu tiempo y asegura que tus espacios se aprovechen al máximo.
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
                      alt="DeepClinic Booking para todas las especialidades"
                      width={640}
                      height={360}
                      className="h-auto w-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[14px] font-semibold tracking-wide text-white">PERSONALIZABLE POR ESPECIALIDAD</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                      Configura tipos de cita, duraciones y preguntas previas específicas para tu especialidad.
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
                      alt="Sincronización con calendario"
                      width={640}
                      height={360}
                      className="h-auto w-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[14px] font-semibold tracking-wide text-white">
                      SINCRONIZACIÓN CON TU CALENDARIO
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                      Se integra con Google Calendar, Outlook y Apple Calendar para evitar conflictos de horario.
                    </p>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      <AudienceTabs language="es" theme="dark" />

      {/* DEEPCLINIC BOOKING EN LA PRÁCTICA */}
      <section id="producto" className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                DeepClinic Booking en la práctica
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                Facilitando el acceso a la salud en toda la región
              </p>
            </MotionReveal>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <MotionReveal delayMs={0}>
              <article className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/Medica.png"
                    alt="Recepción hospitalaria"
                    fill
                    className="object-cover opacity-90"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-8">
                  <p className="text-[14px] leading-relaxed text-white/80">
                    La carga de llamadas telefónicas en recepción disminuye drásticamente cuando los pacientes pueden agendar online.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={150}>
              <article className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/houston.png"
                    alt="Gestión de citas"
                    fill
                    className="object-cover opacity-90"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-8">
                  <p className="text-[14px] leading-relaxed text-white/80">
                    La experiencia del paciente comienza desde el momento de la reserva. Una interfaz ágil y moderna marca la diferencia.
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
                  alt="Recepcionista utilizando DeepClinic Booking"
                  fill
                  className="object-cover opacity-80"
                  sizes="(min-width: 768px) 22rem, 100vw"
                />
              </div>
              <div className="flex flex-col justify-center p-6 text-left">
                <div className="space-y-6">
                  <p className="text-2xl font-medium leading-relaxed text-white/90">
                    «DeepClinic Booking ha transformado nuestra recepción. Menos tiempo al teléfono significa mejor atención presencial para nuestros pacientes.»
                  </p>
                  <div className="border-l-2 border-white/20 pl-4">
                    <p className="text-sm font-bold uppercase tracking-wider text-white">Ana Torres</p>
                    <p className="text-sm text-white/50">Coordinadora de Pacientes • Centro Médico</p>
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
                DeepClinic Booking cumple con los más altos estándares de seguridad y protección de datos.
              </p>
            </MotionReveal>
          </div>

          <div className="mt-16 grid gap-10 text-center md:grid-cols-3">
            {[
              {
                title: "Datos de pacientes seguros",
                desc: "Toda la información de contacto y citas se almacena de forma encriptada y segura."
              },
              {
                title: "Confirmaciones verificadas",
                desc: "Validamos los datos de contacto para asegurar que las confirmaciones lleguen a la persona correcta."
              },
              {
                title: "Cumplimiento normativo",
                desc: "Alineado con las regulaciones de privacidad de datos vigentes."
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
                  alt="Certificaciones de seguridad de DeepClinic Booking"
                  fill
                  className="object-cover opacity-80"
                  sizes="(min-width: 768px) 24rem, 100vw"
                />
              </div>
            </MotionReveal>

            <MotionReveal delayMs={400}>
              <div className="space-y-6 text-left">
                <h3 className="text-[24px] font-semibold leading-tight text-white">
                  Con la confianza de clínicas en toda América
                </h3>
                <p className="text-[15px] leading-relaxed text-white/60">
                  Basado en los más altos estándares de seguridad, DeepClinic Booking garantiza una gestión de citas
                  segura y confiable.
                </p>
                <Link
                  href="/es/data-security"
                  className="inline-flex items-center text-[13px] font-bold uppercase tracking-wider text-white transition-colors hover:text-sky-300"
                >
                  Conoce más sobre nuestra seguridad <span className="ml-2">→</span>
                </Link>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
