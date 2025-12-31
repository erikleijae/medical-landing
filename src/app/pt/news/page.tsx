import Link from "next/link";

export default function NewsPagePt() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Atualizações</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Notícias e artigos do Copiloto Médico
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          Estamos a reconstruir a secção de notícias para refletir a nova marca Copiloto Médico. Em breve irá encontrar
          aqui casos de utilização, colaborações com organizações de saúde e novidades do produto.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          Entretanto, se quiser saber como a IA clínica está a ser utilizada em organizações semelhantes à sua, pode falar
          diretamente com a nossa equipa.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/pt/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
          >
            Falar com um especialista
            <span className="ml-1" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}

