import Link from "next/link";

export default function DataSecurityPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Recursos</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Seguridad de datos en Copiloto Médico
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          Estamos migrando toda la información de seguridad y cumplimiento desde la antigua web de Tandem a este nuevo
          sitio de Copiloto Médico. Mientras completamos la documentación, puedes contactar con nuestro equipo para
          revisar en detalle requisitos regulatorios, acuerdos de tratamiento de datos y evaluaciones de impacto.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          Copiloto Médico está diseñado para cumplir con normativas de protección de datos aplicables en América y en la
          Unión Europea, incluyendo cifrado de la información y controles de acceso estrictos.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/es/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
          >
            Hablar con nuestro equipo
            <span className="ml-1" aria-hidden>
              
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
