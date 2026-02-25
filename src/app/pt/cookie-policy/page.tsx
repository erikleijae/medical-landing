import Link from "next/link";

import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function CookiePolicyPagePt() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav lang="pt" />

      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <MotionReveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Legal</p>
            <h1 className="mt-6 font-sans text-[42px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[56px]">
              Política de cookies
            </h1>
            <p className="mt-4 text-sm text-white/50">DeepClinic Copilot</p>
          </MotionReveal>

          <MotionReveal delayMs={100}>
            {/* 1. O que são cookies */}
            <section className="mt-12 space-y-4 text-[15px] leading-relaxed text-white/70">
              <h2 className="text-[18px] font-bold text-white">1. O que são cookies?</h2>
              <p>
                Cookies são pequenos ficheiros de texto que são guardados no seu navegador quando visita um site. Servem para
                que o site se lembre de determinadas ações e preferências (como idioma, sessão iniciada ou páginas visitadas),
                facilitando a sua navegação e ajudando‑nos a melhorar o serviço.
              </p>
            </section>

            {/* 2. Como usamos cookies no site do DeepClinic Copilot */}
            <section className="mt-10 space-y-4 text-[15px] leading-relaxed text-white/70">
              <h2 className="text-[18px] font-bold text-white">2. Como usamos cookies no DeepClinic Copilot</h2>
              <p>
                Utilizamos cookies e tecnologias semelhantes neste site para:
              </p>
              <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
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
            <section className="mt-10 space-y-4 text-[15px] leading-relaxed text-white/70">
              <h2 className="text-[18px] font-bold text-white">3. Tipos de cookies</h2>
              <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
                <li>
                  <span className="font-semibold text-white">Cookies estritamente necessários:</span> essenciais para o funcionamento do
                  site (por exemplo, para manter a sessão iniciada ou guardar preferências básicas de navegação).
                </li>
                <li>
                  <span className="font-semibold text-white">Cookies de desempenho e análise:</span> ajudam‑nos a entender como os
                  visitantes utilizam o site, de forma agregada, para que possamos melhorar conteúdo, navegação e velocidade.
                </li>
              </ul>
            </section>

            {/* 4. Gestão das suas preferências */}
            <section className="mt-10 space-y-4 text-[15px] leading-relaxed text-white/70">
              <h2 className="text-[18px] font-bold text-white">4. Como pode gerir cookies</h2>
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
            <section className="mt-10 space-y-4 text-[15px] leading-relaxed text-white/70">
              <h2 className="text-[18px] font-bold text-white">5. Relação com a Política de Privacidade</h2>
              <p>
                A forma como tratamos dados pessoais recolhidos através de cookies e tecnologias semelhantes está explicada na
                nossa Política de Privacidade. Recomendamos que a leia em conjunto com esta Política de Cookies.
              </p>
              <p>
                <Link href="/pt/privacy-policy" className="text-[14px] font-bold text-white hover:underline decoration-white/30 hover:decoration-white underline-offset-4 transition-all">
                  Ver Política de Privacidade
                </Link>
              </p>
            </section>

            {/* 6. Contacto */}
            <section className="mt-10 space-y-4 text-[15px] leading-relaxed text-white/70">
              <h2 className="text-[18px] font-bold text-white">6. Contacto</h2>
              <p>
                Se tiver dúvidas sobre o uso de cookies neste site ou sobre como tratamos os seus dados, pode contactar a nossa
                equipa através do formulário de contacto.
              </p>
              <p>
                <Link href="/pt/contact" className="text-[14px] font-bold text-white hover:underline decoration-white/30 hover:decoration-white underline-offset-4 transition-all">
                  Falar com a equipa do DeepClinic Copilot
                </Link>
              </p>
            </section>

            <p className="mt-12 text-xs text-white/30">Última atualização: 5 de outubro de 2025</p>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
