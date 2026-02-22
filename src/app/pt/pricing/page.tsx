import Link from "next/link";

function HeaderPt() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4 md:px-8 lg:px-10">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="inline-block h-6 w-6 rounded-full border border-slate-900 bg-slate-900" />
            <span className="-ml-3 inline-block h-6 w-6 rounded-full border border-slate-900" />
          </div>
          <span className="text-[18px] font-semibold tracking-tight text-slate-900">DeepClinic Copilot</span>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-slate-800 lg:flex">
          <Link href="/pt/product" className="hover:text-slate-900">
            Produto
          </Link>
          <Link href="/pt/pricing" className="hover:text-slate-900">
            Preços
          </Link>
        </nav>

        <div className="flex items-center gap-4 text-sm">
          <Link
            href="/pt/login"
            target="_blank"
            rel="noreferrer"
            className="hidden text-slate-700 hover:text-slate-900 sm:inline"
          >
            Entrar
          </Link>
          <span className="hidden text-slate-300 sm:inline">|</span>
          <Link
            href="/signup"
            className="hidden text-slate-700 hover:text-slate-900 sm:inline"
          >
            Criar conta
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
          >
            Comece grátis
            <span className="ml-1" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function PricingPagePt() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <HeaderPt />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-display text-[32px] font-semibold tracking-tight text-slate-900 sm:text-[36px]">
              Preços
            </h1>
            <p className="mt-3 text-sm text-slate-600 sm:text-[15px]">
              O DeepClinic Copilot é oferecido como um serviço por assinatura para profissionais individuais e organizações.
              A tabela de preços para América Latina está sendo finalizada; se quiser uma proposta, entre em contato com o
              nosso time.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/pt/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-[13px] font-semibold text-white shadow-sm hover:bg-black"
              >
                Falar com vendas
                <span className="ml-1" aria-hidden>
                  →
                </span>
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-white px-6 py-2.5 text-[13px] font-semibold text-slate-900 hover:bg-slate-50"
              >
                Experimentar grátis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
