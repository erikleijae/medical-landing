import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Sobre nosotros</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Copiloto Médico
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          Copiloto Médico es un asistente clínico con inteligencia artificial diseñado para reducir la carga
          administrativa y devolver tiempo a la relación entre profesional sanitario y paciente.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          Nuestro equipo combina experiencia en tecnología, salud y diseño de producto para crear herramientas que se
          integran en la práctica clínica diaria y respetan los más altos estándares de seguridad y privacidad.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/es/customer-stories"
            className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
          >
            Ver historias de clientes
            <span className="ml-1" aria-hidden>
              
            </span>
          </Link>
          <Link href="/es/recruitment" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Únete al equipo
          </Link>
        </div>
      </div>
    </main>
  );
}
