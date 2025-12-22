import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Legal</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Condiciones de servicio
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          Las condiciones de servicio de Copiloto Médico están siendo actualizadas para reflejar la nueva marca y la
          operativa en América. Estamos migrando el contenido legal que antes se encontraba en la web de Tandem.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          Si necesitas revisar un borrador de las condiciones aplicables a tu organización, ponte en contacto con
          nosotros para recibir la versión más reciente y adaptada a tu caso.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/es/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
          >
            Solicitar condiciones de servicio
            <span className="ml-1" aria-hidden>
              
            </span>
          </Link>
          <Link href="/" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
