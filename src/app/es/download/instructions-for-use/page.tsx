import Link from "next/link";

export default function InstructionsForUsePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Recursos</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Instrucciones de uso de Copiloto Médico
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          Estamos migrando las instrucciones de uso oficiales y demás documentación regulatoria a este sitio de
          Copiloto Médico. Aquí encontrarás versiones actualizadas y localizadas de estos documentos.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          Si necesitas acceso inmediato a las instrucciones de uso para una implantación concreta, puedes solicitar los
          documentos directamente a nuestro equipo.
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
          <Link href="/es/download" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Volver a descargas
          </Link>
        </div>
      </div>
    </main>
  );
}
