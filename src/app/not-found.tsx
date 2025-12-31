import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-slate-900">
      <div className="mx-auto max-w-xl text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-50">
          404
        </div>
        <h1 className="mt-4 font-display text-[30px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[34px]">
          No encontramos esta página,
          <br className="hidden sm:inline" /> pero tu tiempo sigue siendo valioso
        </h1>
        <p className="mt-3 text-sm text-slate-600 sm:text-[15px]">
          Puede que el enlace esté roto o la URL tenga un error. Mientras tanto, Copiloto Médico sigue ayudando a los
          profesionales de la salud a ahorrar tiempo en documentación y a generar más ingresos con consultas extra.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-6 py-2.5 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
          >
            Volver al inicio
            <span className="ml-1" aria-hidden>
              →
            </span>
          </Link>
          <Link
            href="/es/benefits-simulator"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-[13px] font-semibold text-slate-900 hover:bg-slate-50"
          >
            Ver cómo ahorras horas y $$
          </Link>
        </div>

        <p className="mt-4 text-[11px] text-slate-500">
          Si tienes dudas sobre seguridad, cumplimiento o implementación, nuestro equipo puede acompañarte paso a paso.
        </p>
      </div>
    </main>
  );
}
