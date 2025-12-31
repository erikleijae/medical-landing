import Image from "next/image";
import Link from "next/link";

import { HeroVideo } from "../../../components/hero-video";

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-3 py-2 md:px-5 lg:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="inline-block h-6 w-6 rounded-full border border-slate-900 bg-slate-900" />
              <span className="-ml-3 inline-block h-6 w-6 rounded-full border border-slate-900" />
            </div>
            <span className="text-[18px] font-semibold tracking-tight text-slate-900">Copiloto Médico</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-800 lg:flex">
            <Link href="/es/product" className="hover:text-slate-900">
              Producto
            </Link>
            <Link href="/es/customer-stories" className="hover:text-slate-900">
              Historias de clientes
            </Link>
            <Link href="/es/benefits-simulator" className="hover:text-slate-900">
              Simulador de beneficios
            </Link>
            <Link href="/es/pricing" className="hover:text-slate-900">
              Precio
            </Link>
          </nav>

          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/es/login"
              target="_blank"
              rel="noreferrer"
              className="hidden text-slate-700 hover:text-slate-900 sm:inline"
            >
              Iniciar sesión
            </Link>
            <span className="hidden text-slate-300 sm:inline">|</span>
            <Link
              href="/signup"
              className="hidden text-slate-700 hover:text-slate-900 sm:inline"
            >
              Registrarse
            </Link>
            <Link
              href="/es/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
            >
              Solicitar demo
              <span className="ml-1" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* HERO PRODUCTO */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-12 pt-20 md:flex-row md:items-center md:px-6 md:pb-16 md:pt-24 lg:px-0">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Producto
            </p>
            <h1 className="mt-3 font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[38px] md:text-[44px]">
              Tu asistente de IA para cada consulta
            </h1>
            <p className="mt-4 text-[15px] text-slate-600">
              Copiloto Médico escucha la conversación con el paciente, redacta tus notas clínicas y genera la documentación
              necesaria para cada visita. Sin plantillas complejas ni horas extra frente al ordenador.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/es/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-6 py-2.5 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
              >
                Solicitar demo
                <span className="ml-1" aria-hidden>
                  →
                </span>
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-[13px] font-semibold text-slate-900 hover:bg-slate-50"
              >
                Pruébalo gratis
              </Link>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Funciona en consultas presenciales, videollamadas y visitas telefónicas.
            </p>
          </div>

          <div className="flex-1">
            <HeroVideo />
          </div>
        </div>
      </section>

      {/* BENEFICIOS CLAVE */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 lg:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-5 text-sm text-slate-700 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">Notas completas en minutos</h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                A partir de la conversación, Copiloto Médico genera borradores de historias clínicas, justificantes y otros
                documentos listos para revisar y firmar.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 text-sm text-slate-700 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">Compatible con múltiples especialidades</h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Diseñado para médicos, enfermería, psicología, odontología y otras especialidades, adaptando el lenguaje y la
                estructura de la nota.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 text-sm text-slate-700 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">Más tiempo con el paciente</h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Al delegar la documentación, puedes centrarte en la relación con el paciente y reducir el tiempo dedicado a
                tareas administrativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 lg:px-10">
          <div className="text-center">
            <h2 className="text-[24px] font-semibold tracking-tight text-slate-900 sm:text-[28px]">
              Cómo funciona Copiloto Médico
            </h2>
            <p className="mt-3 text-sm text-slate-500 sm:text-[15px]">
              Un flujo sencillo en tres pasos, pensado para integrarse en tu forma de trabajar.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="flex flex-col rounded-3xl bg-white">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/682dda116cdb3289f729c87c_sv1_3x-p-500.webp"
                  alt="Pantalla de bienvenida de Copiloto Médico"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-1 pt-4 text-sm text-slate-700">
                <p className="text-[13px] font-semibold text-slate-900">1. Inicia Copiloto Médico</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  Abre la aplicación en tu ordenador o dispositivo móvil y deja que el asistente acompañe la consulta sin
                  cambiar tu rutina.
                </p>
              </div>
            </article>

            <article className="flex flex-col rounded-3xl bg-white">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/682dda1b6e4efdc16a1d16ad_sv2_3x-p-500.webp"
                  alt="Interfaz de Copiloto Médico durante una visita"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-1 pt-4 text-sm text-slate-700">
                <p className="text-[13px] font-semibold text-slate-900">2. Atiende con normalidad</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  Mientras hablas con el paciente, Copiloto Médico transcribe y estructura la información clínica en segundo
                  plano.
                </p>
              </div>
            </article>

            <article className="flex flex-col rounded-3xl bg-white">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/682dda247bf886638e57f4a2_sv3_3x-p-500.webp"
                  alt="Profesional de la salud revisando la nota clínica"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-1 pt-4 text-sm text-slate-700">
                <p className="text-[13px] font-semibold text-slate-900">3. Revisa y envía</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  Revisa el borrador generado, realiza los ajustes necesarios y envíalo o copia el contenido a tu sistema de
                  historia clínica.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center text-slate-50 md:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Empieza hoy
          </p>
          <h2 className="mt-4 text-[26px] font-semibold tracking-tight sm:text-[30px]">
            Pruébalo en tu próxima consulta
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300">
            Descubre cómo Copiloto Médico puede ayudarte a reducir la carga administrativa y dedicar más tiempo a tus
            pacientes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/es/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-6 py-2.5 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
            >
              Solicitar demo
              <span className="ml-1" aria-hidden>
                →
              </span>
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-2.5 text-[13px] font-semibold text-slate-50 hover:bg-slate-800"
            >
              Crear cuenta gratuita
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
