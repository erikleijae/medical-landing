import Link from "next/link";

import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function DownloadPage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav />

      {/* CONTENIDO DESCARGAS */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
          <MotionReveal>
            <header className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                Descargar
              </p>
              <h1 className="mt-6 font-sans text-[42px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[56px]">
                Usa DeepClinic Copilot donde estés
              </h1>
              <p className="mt-6 text-[16px] leading-relaxed text-white/60">
                Utiliza DeepClinic Copilot en la consulta o fuera de ella. Descarga la app de escritorio y los complementos para tu
                navegador para transferir tus notas de forma segura a tus sistemas clínicos.
              </p>
            </header>
          </MotionReveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {/* WINDOWS APP */}
            <MotionReveal delayMs={100} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 text-sm transition-colors hover:bg-white/10">
                <div>
                  <h2 className="text-[18px] font-bold text-white">Windows</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Permite que DeepClinic Copilot funcione completamente para videollamadas o llamadas telefónicas (al capturar el
                    audio del paciente) y permite la transferencia a los sistemas de registros médicos locales.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="https://tandemhealth.blob.core.windows.net/tandem-public/native/Tandem-win-Setup.exe"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
                  >
                    Descargar para Windows
                    <span className="ml-2" aria-hidden>
                      ↓
                    </span>
                  </Link>
                </div>
              </article>
            </MotionReveal>

            {/* WEB PLUGIN (CHROME, EDGE, FIREFOX) */}
            <MotionReveal delayMs={200} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 text-sm transition-colors hover:bg-white/10">
                <div>
                  <h2 className="text-[18px] font-bold text-white">Web plugin</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Complemento web para Chrome, Edge y Firefox. Permite transferir automáticamente las notas de DeepClinic Copilot a
                    tu sistema de registro médico basado en la web.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="https://chromewebstore.google.com/detail/tandem-health/agcaglfappbihcbbngkdbiegfjfdcjeg"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
                  >
                    Descargar plugin web
                    <span className="ml-2" aria-hidden>
                      ↓
                    </span>
                  </Link>
                </div>
              </article>
            </MotionReveal>

            {/* iOS Y ANDROID */}
            <MotionReveal delayMs={300} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 text-sm transition-colors hover:bg-white/10">
                <div>
                  <h2 className="text-[18px] font-bold text-white">iOS y Android</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Accede a DeepClinic Copilot desde tu móvil. Inicia sesión con tu cuenta para utilizar la aplicación en iOS y
                    Android.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="/es/login"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105"
                  >
                    Iniciar sesión en el móvil
                    <span className="ml-2" aria-hidden>
                      →
                    </span>
                  </Link>
                </div>
              </article>
            </MotionReveal>

            {/* EDGE PLUGIN */}
            <MotionReveal delayMs={400} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 text-sm transition-colors hover:bg-white/10">
                <div>
                  <h2 className="text-[18px] font-bold text-white">Edge plugin</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Complemento web para Microsoft Edge. Permite transferir automáticamente las notas de DeepClinic Copilot a tu
                    sistema de registro médico basado en la web.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="https://microsoftedge.microsoft.com/addons/detail/tandem-health/jiknejnipfgajfkpbbdpfldkkdjpejja"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
                  >
                    Descargar para Edge
                    <span className="ml-2" aria-hidden>
                      ↓
                    </span>
                  </Link>
                </div>
              </article>
            </MotionReveal>

            {/* FIREFOX PLUGIN */}
            <MotionReveal delayMs={500} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 text-sm transition-colors hover:bg-white/10">
                <div>
                  <h2 className="text-[18px] font-bold text-white">Firefox plugin</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Complemento web para Firefox. Permite transferir automáticamente las notas de DeepClinic Copilot a tu sistema de
                    registro médico basado en la web.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="https://addons.mozilla.org/en-GB/firefox/addon/tandem-health/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
                  >
                    Descargar para Firefox
                    <span className="ml-2" aria-hidden>
                      ↓
                    </span>
                  </Link>
                </div>
              </article>
            </MotionReveal>

            {/* WINDOWS MSI INSTALLER */}
            <MotionReveal delayMs={600} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 text-sm transition-colors hover:bg-white/10">
                <div>
                  <h2 className="text-[18px] font-bold text-white">Windows MSI Installer</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Para despliegue en múltiples ordenadores. Requisitos: Windows 10/11 con .NET 8. Requiere permisos de
                    administrador.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="https://tandemhealth.blob.core.windows.net/tandem-public/launchable-native/Tandem%20Installer.msi"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
                  >
                    Descargar instalador MSI
                    <span className="ml-2" aria-hidden>
                      ↓
                    </span>
                  </Link>
                </div>
              </article>
            </MotionReveal>

            {/* DOCUMENTOS / HOJAS INFORMATIVAS */}
            <MotionReveal delayMs={700} className="h-full md:col-span-2">
              <article className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 text-sm transition-colors hover:bg-white/10">
                <div>
                  <h2 className="text-[18px] font-bold text-white">Hojas informativas (PDF)</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Documentos para clínicas y pacientes que explican qué es DeepClinic Copilot y cómo protegemos la información de
                    los pacientes.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="https://cdn.prod.website-files.com/67ef895ebcae5ebab6aa5d30/6812429f2395a1dd394e2ce0_hojas%20informativas.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105"
                  >
                    Descargar hojas informativas
                    <span className="ml-2" aria-hidden>
                      ↓
                    </span>
                  </Link>
                </div>
              </article>
            </MotionReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
