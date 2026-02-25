import Image from "next/image";
import Link from "next/link";

import { HeroVideo } from "../../../components/hero-video";
import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function ProductPage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav />

      {/* HERO PRODUCTO */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:flex-row md:items-center md:px-8 lg:px-10">
          <div className="max-w-xl">
            <MotionReveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                Producto
              </p>
              <h1 className="mt-4 font-sans text-[42px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[56px] md:text-[64px]">
                Tu asistente de IA para cada consulta
              </h1>
            </MotionReveal>

            <MotionReveal delayMs={100}>
              <p className="mt-6 text-[18px] leading-relaxed text-white/60">
                DeepClinic Copilot escucha la conversación con el paciente, redacta tus notas clínicas y genera la documentación
                necesaria para cada visita. Sin plantillas complejas ni horas extra frente al ordenador.
              </p>
            </MotionReveal>

            <MotionReveal delayMs={200}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/es/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
                >
                  Solicitar demo
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105"
                >
                  Pruébalo gratis
                </Link>
              </div>
              <p className="mt-6 text-[13px] text-white/40">
                Funciona en consultas presenciales, videollamadas y visitas telefónicas.
              </p>
            </MotionReveal>
          </div>

          <div className="flex-1">
            <MotionReveal delayMs={300}>
              <HeroVideo theme="dark" />
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* BENEFICIOS CLAVE */}
      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            <MotionReveal delayMs={0} className="h-full">
              <div className="h-full rounded-[24px] border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10">
                <h2 className="text-[14px] font-bold uppercase tracking-wide text-white">Notas completas en minutos</h2>
                <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                  A partir de la conversación, DeepClinic Copilot genera borradores de historias clínicas, justificantes y otros
                  documentos listos para revisar y firmar.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal delayMs={100} className="h-full">
              <div className="h-full rounded-[24px] border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10">
                <h2 className="text-[14px] font-bold uppercase tracking-wide text-white">Compatible con múltiples especialidades</h2>
                <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                  Diseñado para médicos, enfermería, psicología, odontología y otras especialidades, adaptando el lenguaje y la
                  estructura de la nota.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal delayMs={200} className="h-full">
              <div className="h-full rounded-[24px] border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10">
                <h2 className="text-[14px] font-bold uppercase tracking-wide text-white">Más tiempo con el paciente</h2>
                <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                  Al delegar la documentación, puedes centrarte en la relación con el paciente y reducir el tiempo dedicado a
                  tareas administrativas.
                </p>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
          <div className="text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                Cómo funciona DeepClinic Copilot
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                Un flujo sencillo en tres pasos, pensado para integrarse en tu forma de trabajar.
              </p>
            </MotionReveal>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <MotionReveal delayMs={0} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda116cdb3289f729c87c_sv1_3x-p-500.webp"
                    alt="Pantalla de bienvenida de DeepClinic Copilot"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-bold uppercase tracking-wide text-white">01. Inicia DeepClinic Copilot</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Abre la aplicación en tu ordenador o dispositivo móvil y deja que el asistente acompañe la consulta sin
                    cambiar tu rutina.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={100} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda1b6e4efdc16a1d16ad_sv2_3x-p-500.webp"
                    alt="Interfaz de DeepClinic Copilot durante una visita"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-bold uppercase tracking-wide text-white">02. Atiende con normalidad</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Mientras hablas con el paciente, DeepClinic Copilot transcribe y estructura la información clínica en segundo
                    plano.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={200} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda247bf886638e57f4a2_sv3_3x-p-500.webp"
                    alt="Profesional de la salud revisando la nota clínica"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-bold uppercase tracking-wide text-white">03. Revisa y envía</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Revisa el borrador generado, realiza los ajustes necesarios y envíalo o copia el contenido a tu sistema de
                    historia clínica.
                  </p>
                </div>
              </article>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 py-32 border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-8 lg:px-10">
          <MotionReveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/40">
              Empieza hoy
            </p>
            <h2 className="mt-4 text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
              Pruébalo en tu próxima consulta
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/60">
              Descubre cómo DeepClinic Copilot puede ayudarte a reducir la carga administrativa y dedicar más tiempo a tus
              pacientes.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/es/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
              >
                Solicitar demo
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105"
              >
                Crear cuenta gratuita
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
