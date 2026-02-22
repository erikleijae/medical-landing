import Image from "next/image";
import Link from "next/link";

export default function MindlerStoryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 md:px-6 lg:px-0">
          <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Caso de éxito</p>
              <h1 className="mt-3 font-display text-[30px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[34px] md:text-[40px]">
                Psicólogos que ganan tiempo entre sesiones
              </h1>
              <p className="mt-4 text-[15px] text-slate-600">
                Mindler es un proveedor de psicología en remoto que quería reducir el tiempo dedicado a escribir notas
                después de cada sesión.
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Con DeepClinic Copilot, las notas se generan durante la conversación con el paciente, permitiendo a los
                profesionales centrarse en la escucha activa y en la intervención clínica.
              </p>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">En resumen</p>
              <ul className="mt-3 space-y-2 text-xs text-slate-700">
                <li>
                  <span className="font-semibold text-slate-900">Ámbito:</span> salud mental digital.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Reto:</span> documentar de forma consistente sin alargar la
                  jornada.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Beneficio esperado:</span> más tiempo entre sesiones y
                  menor carga administrativa.
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-0">
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
            <div className="relative h-48 w-full overflow-hidden rounded-3xl bg-[#e5d0ff] md:h-52">
              <Image
                src="/680a17e9f7c495837f0a7ddb_mindler.png"
                alt="Logotipo de Mindler"
                fill
                className="object-contain p-6"
                sizes="(min-width: 768px) 26rem, 100vw"
              />
            </div>
            <div className="space-y-4 text-sm text-slate-700">
              <h2 className="text-[22px] font-semibold tracking-tight text-slate-900 sm:text-[24px]">
                Notas estructuradas sin frenar la sesión
              </h2>
              <p>
                El equipo necesitaba que cada sesión quedara documentada de forma clara para poder hacer seguimiento
                clínico, pero sin convertir la escritura de notas en una carga añadida.
              </p>
              <p>
                DeepClinic Copilot propone un borrador estructurado que el profesional revisa brevemente antes de enviarlo,
                manteniendo la calidad y el detalle de la documentación.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-0">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4 text-sm text-slate-700">
              <h2 className="text-[20px] font-semibold tracking-tight text-slate-900 sm:text-[22px]">
                Más foco en la relación terapéutica
              </h2>
              <p>
                Al reducir el tiempo dedicado a escribir, los psicólogos pueden dedicar más atención a la relación con el
                paciente y a preparar las siguientes sesiones.
              </p>
            </div>

            <div className="space-y-4 rounded-3xl bg-slate-50 p-6 text-sm text-slate-700 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                IA como apoyo, no sustituto
              </p>
              <p className="text-sm text-slate-900">
                DeepClinic Copilot ayuda a estructurar la documentación, pero la decisión clínica y el criterio terapéutico
                siguen siendo responsabilidad del profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center text-slate-50 md:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Empieza hoy</p>
          <h2 className="mt-4 text-[26px] font-semibold tracking-tight sm:text-[30px]">
            Aplica este modelo a tu equipo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300">
            Prueba DeepClinic Copilot con tu organización y comprueba cómo cambia la forma de documentar cada sesión.
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
