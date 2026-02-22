import Image from "next/image";
import Link from "next/link";

export default function RecoletasStoryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 md:px-6 lg:px-0">
          <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Caso de éxito</p>
              <h1 className="mt-3 font-display text-[30px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[34px] md:text-[40px]">
                Recoletas lleva la documentación asistida por IA a decenas de centros
              </h1>
              <p className="mt-4 text-[15px] text-slate-600">
                El grupo hospitalario Recoletas busca reducir el tiempo dedicado a escribir historias clínicas, manteniendo
                al mismo tiempo el detalle y la calidad de la documentación.
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Con DeepClinic Copilot, los especialistas pueden centrarse más en la conversación con el paciente mientras la
                herramienta genera borradores estructurados de cada visita en segundo plano.
              </p>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">En resumen</p>
              <ul className="mt-3 space-y-2 text-xs text-slate-700">
                <li>
                  <span className="font-semibold text-slate-900">Tipo de organización:</span> red de hospitales y
                  clínicas privadas.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Objetivo:</span> ganar tiempo por consulta sin reducir
                  la calidad de la historia clínica.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Resultado esperado:</span> menos tiempo tecleando y más
                  contacto directo con el paciente.
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
                src="/68a701201d6e0dcd3137fbbf_recoletas-p-500.avif"
                alt="Profesional sanitario en un hospital del grupo Recoletas"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 26rem, 100vw"
              />
            </div>
            <div className="space-y-4 text-sm text-slate-700">
              <h2 className="text-[22px] font-semibold tracking-tight text-slate-900 sm:text-[24px]">
                Menos tareas administrativas al final del día
              </h2>
              <p>
                Antes de usar DeepClinic Copilot, parte de la documentación se completaba fuera del horario de consulta. Esto
                generaba carga adicional para los equipos y hacía más difícil mantener un ritmo de trabajo sostenible.
              </p>
              <p>
                Al incorporar un asistente clínico de IA, las notas se generan durante la visita y quedan listas para
                revisar y enviar al sistema de historia clínica electrónica.
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
                Un flujo de trabajo más sostenible para los equipos
              </h2>
              <ul className="mt-2 space-y-2 text-xs text-slate-700">
                <li>
                  Borradores de historias clínicas generados automáticamente para cada consulta.
                </li>
                <li>
                  Menos tiempo dedicado a dictados y notas manuales.
                </li>
                <li>
                  Mayor capacidad para ver pacientes sin extender la jornada.
                </li>
              </ul>
            </div>

            <div className="space-y-4 rounded-3xl bg-slate-50 p-6 text-sm text-slate-700 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                IA centrada en el profesional
              </p>
              <p className="text-sm text-slate-900">
                DeepClinic Copilot está pensado para que el foco siga en el paciente. La herramienta acompaña la consulta sin
                interrumpir la conversación clínica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center text-slate-50 md:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Empieza hoy</p>
          <h2 className="mt-4 text-[26px] font-semibold tracking-tight sm:text-[30px]">
            Lleva este modelo a tu organización
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300">
            Prueba DeepClinic Copilot con tu propio flujo de trabajo y comprueba cómo cambia la forma de documentar cada
            visita.
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
