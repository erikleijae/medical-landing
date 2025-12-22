import Link from "next/link";

export default function AccessibilityStatementPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Legal</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Declaración de accesibilidad
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          Queremos que Copiloto Médico sea accesible para el mayor número posible de profesionales sanitarios. Estamos
          trabajando para cumplir con las pautas de accesibilidad web y recoger aquí los compromisos concretos.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          Si detectas barreras de accesibilidad en este sitio o en nuestros productos, te agradecemos que nos lo
          comuniques para poder solucionarlo.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/es/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
          >
            Enviar comentarios de accesibilidad
            <span className="ml-1" aria-hidden>
              e
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
