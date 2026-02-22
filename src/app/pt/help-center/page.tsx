import Link from "next/link";

export default function HelpCenterPagePt() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Ajuda</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Centro de ajuda do DeepClinic Copilot
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          Estamos a configurar um novo centro de ajuda para o DeepClinic Copilot. Aqui irá encontrar guias rápidos,
          perguntas frequentes e recursos para a implementação na sua organização.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          Enquanto completamos esta migração, a nossa equipa de suporte pode ajudá‑lo diretamente com dúvidas sobre a
          utilização do produto, formação ou deploy em diferentes serviços.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/pt/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
          >
            Contactar o suporte
            <span className="ml-1" aria-hidden>
              →
            </span>
          </Link>
          <Link href="/pt" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Voltar à página inicial
          </Link>
        </div>
      </div>
    </main>
  );
}
