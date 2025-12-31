import Link from "next/link";

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER (copiado de /es/product para mantener consistencia) */}
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

      {/* CONTENIDO DESCARGAS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 lg:px-10">
          <header className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Descargar
            </p>
            <h1 className="mt-3 font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[38px]">
              Usa Copiloto Médico donde estés
            </h1>
            <p className="mt-4 text-sm text-slate-600">
              Utiliza Copiloto Médico en la consulta o fuera de ella. Descarga la app de escritorio y los complementos para tu
              navegador para transferir tus notas de forma segura a tus sistemas clínicos.
            </p>
          </header>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* WINDOWS APP */}
            <article className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Windows</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Permite que Copiloto Médico funcione completamente para videollamadas o llamadas telefónicas (al capturar el
                  audio del paciente) y permite la transferencia a los sistemas de registros médicos locales.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="https://tandemhealth.blob.core.windows.net/tandem-public/native/Tandem-win-Setup.exe"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-black"
                >
                  Descargar para Windows
                  <span className="ml-1" aria-hidden>
                    ↓
                  </span>
                </Link>
              </div>
            </article>

            {/* WEB PLUGIN (CHROME, EDGE, FIREFOX) */}
            <article className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Web plugin</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Complemento web para Chrome, Edge y Firefox. Permite transferir automáticamente las notas de Copiloto Médico a
                  tu sistema de registro médico basado en la web.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="https://chromewebstore.google.com/detail/tandem-health/agcaglfappbihcbbngkdbiegfjfdcjeg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-black"
                >
                  Descargar plugin web
                  <span className="ml-1" aria-hidden>
                    ↓
                  </span>
                </Link>
              </div>
            </article>

            {/* iOS Y ANDROID */}
            <article className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              <div>
                <h2 className="text-base font-semibold text-slate-900">iOS y Android</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Accede a Copiloto Médico desde tu móvil. Inicia sesión con tu cuenta para utilizar la aplicación en iOS y
                  Android.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="/es/login"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Iniciar sesión en el móvil
                  <span className="ml-1" aria-hidden>
                    →
                  </span>
                </Link>
              </div>
            </article>

            {/* EDGE PLUGIN */}
            <article className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Edge plugin</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Complemento web para Microsoft Edge. Permite transferir automáticamente las notas de Copiloto Médico a tu
                  sistema de registro médico basado en la web.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="https://microsoftedge.microsoft.com/addons/detail/tandem-health/jiknejnipfgajfkpbbdpfldkkdjpejja"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-black"
                >
                  Descargar para Edge
                  <span className="ml-1" aria-hidden>
                    ↓
                  </span>
                </Link>
              </div>
            </article>

            {/* FIREFOX PLUGIN */}
            <article className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Firefox plugin</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Complemento web para Firefox. Permite transferir automáticamente las notas de Copiloto Médico a tu sistema de
                  registro médico basado en la web.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="https://addons.mozilla.org/en-GB/firefox/addon/tandem-health/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-black"
                >
                  Descargar para Firefox
                  <span className="ml-1" aria-hidden>
                    ↓
                  </span>
                </Link>
              </div>
            </article>

            {/* WINDOWS MSI INSTALLER */}
            <article className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Windows MSI Installer</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Para despliegue en múltiples ordenadores. Requisitos: Windows 10/11 con .NET 8. Requiere permisos de
                  administrador.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="https://tandemhealth.blob.core.windows.net/tandem-public/launchable-native/Tandem%20Installer.msi"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-black"
                >
                  Descargar instalador MSI
                  <span className="ml-1" aria-hidden>
                    ↓
                  </span>
                </Link>
              </div>
            </article>

            {/* DOCUMENTOS / HOJAS INFORMATIVAS */}
            <article className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Hojas informativas (PDF)</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Documentos para clínicas y pacientes que explican qué es Copiloto Médico y cómo protegemos la información de
                  los pacientes.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="https://cdn.prod.website-files.com/67ef895ebcae5ebab6aa5d30/6812429f2395a1dd394e2ce0_hojas%20informativas.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Descargar hojas informativas
                  <span className="ml-1" aria-hidden>
                    ↓
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
