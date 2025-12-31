import Link from "next/link";

export default function ContactPage() {
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

      {/* HERO CONTACTO */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-stretch md:px-6 lg:px-0">
          {/* LADO IZQUIERDO: TESTIMONIO / CONFIANZA */}
          <div className="flex-1 rounded-3xl bg-slate-50 p-6 md:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Utilizado por +1.000 grupos sanitarios
            </p>

            <div className="mt-8 flex min-h-[260px] flex-col justify-between rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 px-6 py-8 text-slate-800 sm:min-h-[320px] sm:px-8 sm:py-10">
              <div className="space-y-4">
                <p className="text-[22px] font-medium leading-snug text-slate-900 sm:text-[26px]">
                  “Con la solución de IA de Copiloto Médico podemos centrarnos plenamente en el paciente sin preocuparnos por
                  escribir o dictar.”
                </p>
                <p className="text-sm text-slate-600">
                  El asistente clínico nos ayuda a reducir el tiempo dedicado a tareas administrativas y a mantener notas
                  detalladas después de cada consulta.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
                <div className="h-10 w-10 rounded-full bg-slate-300" />
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold text-slate-900">Directora médica</p>
                  <p className="text-xs text-slate-500">Red hospitalaria en América</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-1 text-[10px] text-slate-400">
              <span className="inline-block h-1.5 w-4 rounded-full bg-slate-900" />
              <span className="inline-block h-1.5 w-2 rounded-full bg-slate-300" />
              <span className="inline-block h-1.5 w-2 rounded-full bg-slate-300" />
            </div>
          </div>

          {/* LADO DERECHO: FORMULARIO */}
          <div className="w-full md:w-[420px] lg:w-[460px]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7 lg:p-8">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Demostración personalizada
                </p>
                <h1 className="text-lg font-semibold text-slate-900 sm:text-xl">
                  Descubre Copiloto Médico con uno de nuestros especialistas
                </h1>
                <p className="text-xs text-slate-500 sm:text-[13px]">
                  Comprueba cómo opera Copiloto Médico en la práctica diaria y resuelve dudas sobre tu caso concreto.
                </p>
              </div>

              <form className="mt-6 space-y-4" action="#" method="post">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="firstName" className="text-xs font-medium text-slate-800">
                      Nombre
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="p. ej. Javier"
                      className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="lastName" className="text-xs font-medium text-slate-800">
                      Apellido
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="p. ej. Morales"
                      className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-slate-800">
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="javier@clinica.es"
                      className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-medium text-slate-800">
                      Número de teléfono
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+XX 600 00 00 00"
                      className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="clinic" className="text-xs font-medium text-slate-800">
                      Clínica u organización
                    </label>
                    <input
                      id="clinic"
                      name="clinic"
                      type="text"
                      placeholder="Clínica Vida Clara"
                      className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="country" className="text-xs font-medium text-slate-800">
                      País de práctica
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Elige tu país
                      </option>
                      <option value="es">España</option>
                      <option value="mx">México</option>
                      <option value="co">Colombia</option>
                      <option value="cl">Chile</option>
                      <option value="ar">Argentina</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="interest" className="text-xs font-medium text-slate-800">
                    Su interés en Copiloto Médico
                  </label>
                  <textarea
                    id="interest"
                    name="interest"
                    rows={3}
                    placeholder="Cuéntanos brevemente qué te interesa de Copiloto Médico o qué tipo de centro gestionas."
                    className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <label className="flex items-start gap-2 text-[11px] text-slate-600">
                    <input
                      type="checkbox"
                      name="consent"
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                    />
                    <span>
                      Acepto que Copiloto Médico se ponga en contacto conmigo. Mis datos personales se procesan de acuerdo con
                      la política de privacidad aplicable.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-[#d5ff7c] shadow-sm transition hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-white"
                  >
                    Reservar una demostración
                  </button>
                </div>
              </form>

              <p className="mt-5 text-center text-[10px] text-slate-400 sm:text-[11px]">
                Copiloto Médico sigue estándares exigentes de seguridad y protección de datos y cumple con la normativa de
                privacidad vigente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
