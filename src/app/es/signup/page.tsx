import Image from "next/image";
import Link from "next/link";

import { LocaleSelector } from "../../../components/locale-selector";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="flex min-h-screen w-full flex-col lg:flex-row">
        {/* LADO IZQUIERDO: FORMULARIO */}
        <section className="flex w-full flex-col justify-between bg-white px-6 py-10 sm:px-10 lg:w-1/2 lg:px-24 lg:py-12">
          <div>
            {/* Logo simple reutilizando el estilo de la home */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <span className="inline-block h-6 w-6 rounded-full border border-slate-900" />
                <span className="-ml-3 inline-block h-6 w-6 rounded-full border border-slate-900" />
              </div>
              <span className="text-[18px] font-semibold tracking-tight text-slate-900">
                Copiloto Médico
              </span>
            </div>

            {/* Contenido principal */}
            <div className="mt-16 max-w-sm">
              <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-[32px]">
                Crea tu cuenta
              </h1>
              <p className="mt-3 text-sm text-slate-500">
                El registro en Copiloto Médico es actualmente <span className="font-semibold text-slate-800">solo por
                invitación</span>. Si recibiste una invitación, usa el mismo correo electrónico para continuar.
              </p>

              <form className="mt-8 space-y-4" action="#" method="post">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-800"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="email@example.com"
                    className="block w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-black px-4 py-3 text-sm font-semibold text-[#d5ff7c] shadow-sm transition hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-white"
                >
                  Continuar
                </button>
              </form>

              <p className="mt-3 text-center text-[11px] text-slate-500">
                ¿No tienes una invitación?{" "}
                <Link
                  href="/es/contact"
                  className="font-medium text-slate-900 hover:underline"
                >
                  Solicita acceso
                </Link>
                .
              </p>

              <p className="mt-4 text-center text-xs text-slate-500">
                ¿Ya tienes una cuenta?{" "}
                <Link
                  href="/es/login"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-slate-900 hover:underline"
                >
                  Iniciar sesión
                </Link>
              </p>
            </div>
          </div>

          <LocaleSelector />
        </section>

        {/* LADO DERECHO: IMAGEN + TESTIMONIO */}
        <section className="relative hidden w-full overflow-hidden lg:block lg:w-1/2">
          <Image
            src="/680b8bd084ba7f136270ee2a_testimonial1.webp"
            alt="Profesional sanitario usando Copiloto Médico"
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative flex h-full flex-col justify-center px-10 py-12 text-white">
            <blockquote className="max-w-md text-lg leading-relaxed">
              "Estoy muy contento con que el grupo Recoletas haya incorporado
              Copiloto Médico. Me permite dedicar más tiempo al paciente y
              explicarle el diagnóstico y tratamiento de manera más completa.
              Bienvenida la IA que humaniza la consulta."
            </blockquote>

            <div className="mt-6 flex items-center gap-3 text-xs text-slate-200">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-300">
                <Image
                  src="/6810bcac6fc499ede820f7a0_Juan Mora.png"
                  alt="Profesional sanitario"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <p className="text-sm font-semibold text-white">Joel Joshi Otero</p>
                <p className="text-[11px] text-slate-200/80">
                  Especialista en Cirugía Oral y Maxilofacial
                </p>
                <p className="text-[11px] text-slate-200/80">Recoletas Salud</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
