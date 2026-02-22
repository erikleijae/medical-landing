import Link from "next/link";

export default function CookiePolicyPagePt() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Legal</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Política de cookies
        </h1>
        <p className="mt-1 text-sm text-slate-500">DeepClinic Copilot</p>

        {/* 1. O que são cookies */}
        <section className="mt-6 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">1. O que são cookies?</h2>
          <p>
            Cookies são pequenos ficheiros de texto que são guardados no seu navegador quando visita um site. Servem para
            que o site se lembre de determinadas ações e preferências (como idioma, sessão iniciada ou páginas visitadas),
            facilitando a sua navegação e ajudando‑nos a melhorar o serviço.
          </p>
        </section>

        {/* 2. Como usamos cookies no site do DeepClinic Copilot */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">2. Como usamos cookies no DeepClinic Copilot</h2>
          <p>
            Utilizamos cookies e tecnologias semelhantes neste site para:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Manter a sessão iniciada entre páginas quando acede a áreas reservadas.</li>
            <li>Lembrar o idioma ou região preferidos.</li>
            <li>
              Compreender de forma agregada como o site é utilizado (por exemplo, páginas mais visitadas), para que o
              possamos melhorar.
            </li>
          </ul>
          <p>
            Não utilizamos cookies para vender a sua informação a terceiros e não mostramos anúncios de terceiros neste
            site.
          </p>
        </section>

        {/* 3. Tipos de cookies que podem ser utilizados */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">3. Tipos de cookies</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">Cookies estritamente necessários:</span> essenciais para o funcionamento do
              site (por exemplo, para manter a sessão iniciada ou guardar preferências básicas de navegação).
            </li>
            <li>
              <span className="font-semibold">Cookies de desempenho e análise:</span> ajudam‑nos a entender como os
              visitantes utilizam o site, de forma agregada, para que possamos melhorar conteúdo, navegação e velocidade.
            </li>
          </ul>
        </section>

        {/* 4. Gestão das suas preferências */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">4. Como pode gerir cookies</h2>
          <p>
            A maioria dos navegadores permite que aceite, bloqueie ou apague cookies através das respetivas definições.
            Tenha em conta que, se bloquear determinados tipos de cookies, partes do site poderão deixar de funcionar
            corretamente.
          </p>
          <p>
            Para saber mais sobre como gerir cookies, consulte a secção de ajuda do seu navegador ou a documentação do
            dispositivo.
          </p>
        </section>

        {/* 5. Relação com a Política de Privacidade */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">5. Relação com a Política de Privacidade</h2>
          <p>
            A forma como tratamos dados pessoais recolhidos através de cookies e tecnologias semelhantes está explicada na
            nossa Política de Privacidade. Recomendamos que a leia em conjunto com esta Política de Cookies.
          </p>
          <p>
            <Link href="/pt/privacy-policy" className="text-sm font-medium text-sky-700 hover:text-sky-900">
              Ver Política de Privacidade
            </Link>
          </p>
        </section>

        {/* 6. Contacto */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">6. Contacto</h2>
          <p>
            Se tiver dúvidas sobre o uso de cookies neste site ou sobre como tratamos os seus dados, pode contactar a nossa
            equipa através do formulário de contacto.
          </p>
          <p>
            <Link href="/pt/contact" className="text-sm font-medium text-sky-700 hover:text-sky-900">
              Falar com a equipa do DeepClinic Copilot
            </Link>
          </p>
        </section>

        <p className="mt-10 text-xs text-slate-500">Última atualização: 5 de outubro de 2025</p>
      </div>
    </main>
  );
}
