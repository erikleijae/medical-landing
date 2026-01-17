import Link from "next/link";

function HeaderPt() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="flex items-center justify-between gap-8 px-3 py-2 md:px-5 lg:px-6">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="inline-block h-6 w-6 rounded-full border border-slate-900 bg-slate-900" />
            <span className="-ml-3 inline-block h-6 w-6 rounded-full border border-slate-900" />
          </div>
          <Link href="/pt" className="text-[18px] font-semibold tracking-tight text-slate-900">
            Copiloto Médico
          </Link>
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

export default function ContactPagePt() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <HeaderPt />
      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-start md:px-6 lg:px-0">
          <div className="flex-1 rounded-3xl bg-slate-50 p-6 md:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Utilizado por +1.000 grupos de saúde
            </p>
            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <p className="text-[22px] font-medium leading-snug text-slate-900 sm:text-[26px]">
                &quot;Com o Copiloto Médico podemos focar totalmente no paciente sem nos preocupar com a digitação de notas.&quot;
              </p>
              <p>
                O assistente clínico com IA ajuda a reduzir o tempo gasto em tarefas administrativas e a manter notas
                detalhadas após cada consulta.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[420px] lg:w-[460px]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7 lg:p-8">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Demonstração personalizada
                </p>
                <h1 className="text-lg font-semibold text-slate-900 sm:text-xl">
                  Fale com a nossa equipa sobre o Copiloto Médico
                </h1>
                <p className="text-xs text-slate-500 sm:text-[13px]">
                  Conte-nos um pouco sobre a sua clínica e entraremos em contacto para marcar uma breve demonstração.
                </p>
              </div>

              <form className="mt-6 space-y-4" action="#" method="post" autoComplete="off">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="firstName" className="text-xs font-medium text-slate-800">
                      Nome
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="off"
                      placeholder="ex.: Maria"
                      className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="lastName" className="text-xs font-medium text-slate-800">
                      Sobrenome
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="off"
                      placeholder="ex.: Silva"
                      className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-slate-800">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="off"
                      placeholder="voce@clinica.com"
                      className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-medium text-slate-800">
                      Telefone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="off"
                      placeholder="+55 11 90000-0000"
                      className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="clinic" className="text-xs font-medium text-slate-800">
                    Clínica ou organização
                  </label>
                  <input
                    id="clinic"
                    name="clinic"
                    type="text"
                    autoComplete="off"
                    placeholder="Nome da clínica"
                    className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="interest" className="text-xs font-medium text-slate-800">
                    Seu interesse no Copiloto Médico
                  </label>
                  <textarea
                    id="interest"
                    name="interest"
                    rows={3}
                    autoComplete="off"
                    placeholder="Conte brevemente sua especialidade e como gostaria de usar o Copiloto Médico."
                    className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <label className="flex items-start gap-2 text-[11px] text-slate-600">
                    <input
                      type="checkbox"
                      name="consent"
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                    />
                    <span>
                      Concordo em ser contactado sobre o Copiloto Médico. Os meus dados pessoais serão tratados de acordo com
                      a política de privacidade aplicável.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-[#d5ff7c] shadow-sm transition hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-white"
                  >
                    Agendar demonstração
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
