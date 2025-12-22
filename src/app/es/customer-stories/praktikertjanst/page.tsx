import Image from "next/image";
import Link from "next/link";

export default function PraktikertjanstStoryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 md:px-6 lg:px-0">
          <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Caso de éxito</p>
              <h1 className="mt-3 font-display text-[30px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[34px] md:text-[40px]">
                Praktikertjänst apuesta por la documentación asistida por IA
              </h1>
              <p className="mt-4 text-[15px] text-slate-600">
                Praktikertjänst, una gran red de clínicas en el norte de Europa, incorpora Copiloto Médico para facilitar la
                documentación diaria de sus profesionales.
              </p>
              <p className="mt-3 text-sm text-slate-600">
                El objetivo: mejorar la calidad y consistencia de las historias clínicas mientras se libera tiempo en la
                agenda de cada consulta.
              </p>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">En resumen</p>
              <ul className="mt-3 space-y-2 text-xs text-slate-700">
                <li>
                  <span className="font-semibold text-slate-900">Tipo de organización:</span> red de clínicas y centros de
                  salud.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Reto:</span> mantener la calidad de la documentación en un
                  entorno con alto volumen asistencial.
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-0">
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-100">
              <Image
                src="/68a46f7b98a3bb8fe304f285_praktikertjänst-p-500.avif"
                alt="Profesional sanitario utilizando un asistente clínico de IA"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 26rem, 100vw"
              />
            </div>
            <div className="space-y-4 text-sm text-slate-700">
              <h2 className="text-[22px] font-semibold tracking-tight text-slate-900 sm:text-[24px]">
                IA como apoyo al flujo de trabajo clínico
              </h2>
              <p>
                Copiloto Médico genera un borrador de historia clínica a partir de la conversación con el paciente,
                permitiendo que el profesional revise y complete los detalles necesarios antes de enviarla al sistema de
                historia clínica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center text-slate-50 md:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Empieza hoy</p>
          <h2 className="mt-4 text-[26px] font-semibold tracking-tight sm:text-[30px]">
            Descubre cómo puede ayudarte Copiloto Médico
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300">
            Reserva una demostración para ver cómo se integra Copiloto Médico en el día a día de tu organización.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/es/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-6 py-2.5 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
            >
              Solicitar demo
              <span className="ml-1" aria-hidden>
                e
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
