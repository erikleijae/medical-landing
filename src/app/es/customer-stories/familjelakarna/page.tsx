import Image from "next/image";
import Link from "next/link";

export default function FamiljelakarnaStoryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="flex items-center justify-between gap-8 px-3 py-2 md:px-5 lg:px-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="inline-block h-6 w-6 rounded-full border border-slate-900 bg-slate-900" />
              <span className="-ml-3 inline-block h-6 w-6 rounded-full border border-slate-900" />
            </div>
            <Link href="/" className="text-[18px] font-semibold tracking-tight text-slate-900">
              Copiloto Médico
            </Link>
          </div>

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

      {/* HERO + SUMMARY */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 md:px-6 lg:px-0">
          <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Caso de éxito
              </p>
              <h1 className="mt-3 font-display text-[30px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[34px] md:text-[40px]">
                Cómo una red de atención primaria aumentó el volumen de pacientes en un 15% con Copiloto Médico
              </h1>
              <p className="mt-4 text-[15px] text-slate-600">
                Familjeläkarna es una red de clínicas de atención primaria que buscaba reducir el tiempo dedicado a la
                documentación para poder atender a más pacientes sin sacrificar calidad.
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Con Copiloto Médico, sus equipos médicos pasaron de teclear notas al final del día a contar con borradores
                generados en tiempo real durante cada consulta.
              </p>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">En resumen</p>
              <ul className="mt-3 space-y-2 text-xs text-slate-700">
                <li>
                  <span className="font-semibold text-slate-900">Notas generadas con IA:</span> más de 5.000 borradores de
                  historias clínicas creados automáticamente.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Tiempo ahorrado:</span> hasta 1 hora al día por profesional,
                  reduciendo la carga administrativa al final de la jornada.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Capacidad adicional:</span> posibilidad de atender 1–2
                  pacientes más por día y por clínico.
                </li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                Datos basados en el uso de asistentes clínicos de IA en redes de clínicas similares a Familjeläkarna.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* IMAGE / CONTEXT SECTION */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-0">
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-100">
              <Image
                src="/680b8bd084ba7f136270ee2a_testimonial1.webp"
                alt="Profesional de atención primaria en consulta con un paciente"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 26rem, 100vw"
              />
            </div>
            <div className="space-y-4 text-sm text-slate-700">
              <h2 className="text-[22px] font-semibold tracking-tight text-slate-900 sm:text-[24px]">
                Reducir el atasco administrativo para abrir más huecos de consulta
              </h2>
              <p>
                Antes de usar Copiloto Médico, los equipos de Familjeläkarna arrastraban atrasos en la documentación debidos a
                dictados largos y a la transcripción manual. Esto añadía estrés y limitaba el número de pacientes que podían
                ver cada día.
              </p>
              <p>
                Al incorporar un asistente clínico de IA, las notas se generan durante la visita, de forma estructurada y
                lista para revisar, en lugar de acumularse al final de la jornada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REAL-TIME NOTES & TIME SAVED */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-0">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4 text-sm text-slate-700">
              <h2 className="text-[20px] font-semibold tracking-tight text-slate-900 sm:text-[22px]">
                Notas en tiempo real para todo el equipo asistencial
              </h2>
              <p>
                Copiloto Médico se desplegó en distintos perfiles: médicos, enfermería y profesionales de salud mental. Durante
                cada consulta, la herramienta escucha y propone un borrador de nota clínica estructurada, que el profesional
                solo tiene que revisar y completar.
              </p>
              <p>
                De este modo, la atención se mantiene en la conversación con el paciente, mientras la documentación va
                quedando lista en segundo plano.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <h2 className="text-[20px] font-semibold tracking-tight text-slate-900 sm:text-[22px]">
                Ahorro de tiempo y más visitas al día
              </h2>
              <ul className="mt-2 space-y-2 text-xs text-slate-700">
                <li>
                  Aproximadamente <span className="font-semibold text-slate-900">5 minutos menos</span> de documentación por
                  consulta.
                </li>
                <li>
                  En torno a <span className="font-semibold text-slate-900">1 hora adicional libre</span> por profesional cada
                  día.
                </li>
                <li>
                  Capacidad para ver <span className="font-semibold text-slate-900">1–2 pacientes más</span> por jornada, sin
                  ampliar horario.
                </li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">
                Estas cifras pueden variar según el volumen de pacientes, la especialidad y el flujo de trabajo concreto de
                cada clínica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCALING ACROSS CLINICS */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-0">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] md:items-center">
            <div className="space-y-4 text-sm text-slate-700">
              <h2 className="text-[20px] font-semibold tracking-tight text-slate-900 sm:text-[22px]">
                Escalar la eficiencia a través de todas las clínicas
              </h2>
              <p>
                Lo que comenzó como un piloto en algunos centros se extendió rápidamente al resto de la red. Una vez los
                profesionales experimentan el cambio en su día a día, se hace difícil imaginar volver a escribir todas las
                notas a mano.
              </p>
              <p>
                Con miles de notas generadas automáticamente, Copiloto Médico se convierte en una pieza central del flujo de
                trabajo clínico, no solo para médicos, sino para todo el equipo asistencial.
              </p>
            </div>

            <div className="space-y-4 rounded-3xl bg-slate-50 p-6 text-sm text-slate-700 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                IA centrada en el profesional
              </p>
              <p className="text-sm text-slate-900">
                Copiloto Médico está diseñado para reforzar la relación entre clínico y paciente, no para sustituirla.
              </p>
              <p className="text-xs text-slate-600">
                Al eliminar la fricción de la documentación y automatizar buena parte de las notas, los profesionales pueden
                dedicar más atención y empatía a cada encuentro, manteniendo estándares clínicos y regulatorios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-2xl font-medium leading-snug text-slate-900 sm:text-3xl">
            &quot;Una vez empiezas a trabajar con un asistente clínico de IA, cuesta imaginar volver a escribir toda la
            documentación tú solo. La diferencia en tiempo y tranquilidad se nota en cada consulta.&quot;
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 text-sm text-slate-600">
            <div className="h-12 w-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-sm font-semibold text-slate-900">Profesional de atención primaria</p>
              <p className="text-xs text-slate-500">Red de clínicas similar a Familjeläkarna</p>
            </div>
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
            Aplica este modelo en tu clínica
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300">
            Prueba Copiloto Médico con tu equipo y comprueba cómo cambia la forma de documentar y la capacidad de tu agenda.
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
