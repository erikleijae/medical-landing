import Link from "next/link";

export default function RecruitmentPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Carreras</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Únete a Copiloto Médico
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          Estamos construyendo herramientas de IA clínica para que los profesionales sanitarios puedan dedicar más
          tiempo a cada paciente y menos a la documentación. Buscamos personas con perfil clínico, técnico y de
          operaciones que compartan esta misión.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          Si te interesa colaborar con nosotros, cuéntanos brevemente tu experiencia y el tipo de rol que buscas.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/es/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
          >
            Escribir al equipo
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
