import Link from "next/link";

export default function TrustCenterPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Recursos</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Centro de confianza de Copiloto Médico
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          Este centro reúne la información clave sobre seguridad, cumplimiento, privacidad y fiabilidad del servicio de
          Copiloto Médico. Estamos migrando el contenido que antes se encontraba en el trust center de Tandem a esta
          nueva ubicación.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          Si necesitas documentación específica (evaluaciones de riesgo, acuerdos de tratamiento de datos o
          certificaciones), nuestro equipo puede proporcionártela directamente.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/es/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
          >
            Solicitar documentación
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
