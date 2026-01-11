import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidade | Copiloto Médico",
  description:
    "Saiba como o Copiloto Médico recolhe, utiliza e protege os seus dados pessoais quando visita o nosso site ou entra em contacto connosco.",
  alternates: {
    canonical: "/pt/privacy-policy",
  },
  openGraph: {
    type: "article",
    url: "/pt/privacy-policy",
    title: "Política de privacidade | Copiloto Médico",
    description:
      "Consulte a política de privacidade do Copiloto Médico e como tratamos os seus dados pessoais e de navegação.",
    siteName: "Copiloto Médico",
    locale: "pt_BR",
    images: [
      {
        url: "/Captura de pantalla 2025-12-07 a la(s) 11.07.14a.m..png",
        width: 1200,
        height: 630,
        alt: "Copiloto Médico, assistente clínico de IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de privacidade | Copiloto Médico",
    description:
      "Saiba como o Copiloto Médico recolhe, utiliza e protege os seus dados pessoais quando visita o nosso site ou entra em contacto connosco.",
    images: ["/Captura de pantalla 2025-12-07 a la(s) 11.07.14a.m..png"],
  },
};

export default function PrivacyPolicyPagePt() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Legal</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Política de privacidade
        </h1>
        <p className="mt-1 text-sm text-slate-500">Copiloto Médico</p>

        {/* 1. Finalidade desta política de privacidade */}
        <section className="mt-6 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">1. Finalidade desta política de privacidade</h2>
          <p>
            No Copiloto Médico (&quot;Copiloto Médico&quot; ou &quot;nós&quot;), damos prioridade à sua privacidade e estamos comprometidos em
            proteger os seus dados pessoais. Esta Política de Privacidade explica como recolhemos, utilizamos, protegemos e
            gerimos os seus dados pessoais quando visita o nosso site ou interage connosco como utilizador ou potencial
            cliente. Também descreve os seus direitos de privacidade e como a legislação o protege.
          </p>
          <p>
            Esta Política de Privacidade aplica‑se ao utilizar o nosso site (o &quot;Site&quot;). Em conjunto com os nossos termos de
            utilização, regula o uso do Site e define a base legal para o tratamento dos dados pessoais que recolhemos ou
            que nos fornece.
          </p>
          <p>
            Para facilitar a leitura, esta Política de Privacidade está organizada em secções. Recomendamos que leia este
            documento com atenção para compreender as nossas práticas e como tratamos os seus dados pessoais.
          </p>
        </section>

        {/* 2. Responsável pelo tratamento de dados */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">2. Responsável pelo tratamento de dados</h2>
          <p>
            Para os fins descritos nesta Política de Privacidade, o Copiloto Médico atua como responsável pelo tratamento de
            dados. Isto significa que determinamos as finalidades e os meios de tratamento dos seus dados pessoais quando
            utiliza o Site ou interage connosco no âmbito desta política.
          </p>
          <p>
            Nomeámos uma pessoa responsável por privacidade (equivalente a um Encarregado de Proteção de Dados). Se tiver
            dúvidas sobre como tratamos os seus dados pessoais ou se quiser exercer os seus direitos, pode contactar‑nos
            através dos dados disponíveis neste Site (por exemplo, formulário de contacto ou endereço de e‑mail indicado no
            rodapé).
          </p>
          <p>
            Esta Política de Privacidade é revista regularmente e pode ser atualizada. Quando houver alterações relevantes,
            publicaremos a versão atualizada nesta página e, quando apropriado, poderemos notificá‑lo (por exemplo, por
            e‑mail ou na próxima vez que aceder ao Site). Recomendamos que consulte esta página periodicamente.
          </p>
        </section>

        {/* 3. Ligações para sites de terceiros */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">3. Ligações para sites de terceiros</h2>
          <p>
            O Site do Copiloto Médico pode incluir, ocasionalmente, ligações para sites de parceiros e outros terceiros.
            Estes sites e os serviços que prestam funcionam segundo as suas próprias políticas de privacidade. Não somos
            responsáveis pelas práticas de privacidade desses sites ou serviços. Recomendamos que leia atentamente as suas
            políticas de privacidade antes de fornecer qualquer dado pessoal ou utilizar as suas funcionalidades.
          </p>
        </section>

        {/* 4. Que dados pessoais recolhemos sobre si */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">4. Que dados pessoais recolhemos sobre si</h2>
          <p>
            Dependendo de como interage com o Site, podemos recolher, utilizar, armazenar e transferir diferentes tipos de
            dados pessoais sobre si, incluindo:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">Dados de identificação:</span> por exemplo, nome e apelido, função
              profissional ou identificador semelhante fornecido quando manifesta interesse na nossa aplicação ou se
              candidata a uma vaga.
            </li>
            <li>
              <span className="font-semibold">Dados de contacto:</span> como endereço de e‑mail e dados da sua
              organização quando solicita contacto ou se candidata a um cargo através do Site.
            </li>
            <li>
              <span className="font-semibold">Dados técnicos:</span> incluindo informação sobre a sua utilização do Site,
              como dados de tráfego, dados de comunicação e recursos acedidos, o que nos ajuda a melhorar o desempenho e a
              segurança do Site.
            </li>
            <li>
              <span className="font-semibold">Dados de qualificação e percurso profissional:</span> por exemplo,
              qualificações, registos profissionais, histórico de emprego e qualquer carta de motivação ou texto que nos
              envie.
            </li>
          </ul>
          <p>
            Também podemos criar e utilizar dados agregados (por exemplo, estatísticas ou dados demográficos). Os dados
            agregados podem ser derivados dos seus dados pessoais, mas não são considerados dados pessoais na medida em que
            não permitem identificá‑lo diretamente. Se combinarmos ou associarmos dados agregados com dados pessoais de
            forma a identificar uma pessoa, trataremos a combinação como dados pessoais.
          </p>
        </section>

        {/* 5. Como recolhemos os seus dados pessoais */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">5. Como recolhemos os seus dados pessoais</h2>
          <p>
            A maioria dos dados pessoais que tratamos é fornecida diretamente por si, por exemplo quando preenche um
            formulário de contacto, subscreve atualizações ou se candidata a uma vaga através do Site.
          </p>
          <p>
            Além disso, recolhemos automaticamente determinados dados técnicos sobre o seu equipamento, ações de navegação
            e padrões de utilização recorrendo a cookies e tecnologias semelhantes. Para mais informação, consulte a nossa
            Política de Cookies.
          </p>
        </section>

        {/* 6. Como utilizamos os seus dados pessoais */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">6. Como utilizamos os seus dados pessoais</h2>
          <p>
            Só utilizaremos os seus dados pessoais quando a lei o permitir. Normalmente, utilizamos os seus dados nas
            seguintes situações:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">Com o seu consentimento:</span> quando nos dá uma autorização clara para
              tratarmos os seus dados para um fim específico. Pode retirar o seu consentimento a qualquer momento.
            </li>
            <li>
              <span className="font-semibold">Interesse legítimo:</span> quando o tratamento é necessário para os nossos
              interesses legítimos (ou de terceiros) e os seus direitos e liberdades fundamentais não se sobrepõem a esses
              interesses, por exemplo para gerir o Site, comunicar com utilizadores e candidatos e melhorar os nossos
              serviços.
            </li>
            <li>
              <span className="font-semibold">Obrigação legal:</span> quando precisamos de tratar dados para cumprir uma
              obrigação legal ou regulatória.
            </li>
          </ul>
          <p>
            Dependendo de como interage connosco, o Copiloto Médico pode tratar os seus dados pessoais para gerir pedidos e
            contactos, avaliar candidaturas, administrar e proteger o Site, cumprir obrigações regulatórias e melhorar os
            nossos produtos e serviços.
          </p>
        </section>

        {/* 7. Conservação dos dados */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">7. Conservação dos dados</h2>
          <p>
            Conservamos os seus dados pessoais apenas pelo período necessário para cumprir as finalidades para as quais
            foram recolhidos, incluindo para satisfazer qualquer requisito legal, contabilístico ou de reporte. Quando os
            dados já não forem necessários, iremos apagá‑los ou anonimizá‑los, salvo se formos obrigados por lei a
            mantê‑los por mais tempo.
          </p>
          <p>
            Em alguns casos, poderemos anonimizar os seus dados pessoais (de forma a que deixem de ser associáveis a si)
            para fins estatísticos ou de investigação. Nesse caso, poderemos utilizar essa informação indefinidamente sem
            aviso adicional.
          </p>
        </section>

        {/* 8. Partilha dos seus dados pessoais */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">8. Partilha dos seus dados pessoais</h2>
          <p>
            No âmbito interno do Copiloto Médico, o acesso aos seus dados pessoais é limitado às pessoas que deles
            necessitam para desempenhar as suas funções. Poderemos partilhar os seus dados com prestadores de serviços que
            atuam como subcontratantes (por exemplo, fornecedores de serviços de TI, alojamento ou suporte). Estes
            prestadores só podem tratar os seus dados de acordo com as nossas instruções e devem protegê‑los de forma
            adequada.
          </p>
          <p>
            Também poderemos partilhar os seus dados pessoais quando tal for exigido por lei ou quando for necessário para
            proteger os nossos direitos ou os direitos de terceiros, por exemplo com autoridades reguladoras ou outras
            entidades públicas.
          </p>
        </section>

        {/* 9. Segurança dos dados */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">9. Segurança dos dados</h2>
          <p>
            Comprometemo‑nos a proteger a confidencialidade, integridade e disponibilidade dos seus dados pessoais.
            Aplicamos medidas técnicas e organizativas adequadas para ajudar a impedir que os seus dados sejam perdidos de
            forma acidental, utilizados ou acedidos de forma não autorizada, alterados ou divulgados.
          </p>
          <p>
            Quando os dados forem transferidos para fora do seu país, tomaremos medidas para garantir que é assegurado um
            nível de proteção adequado, em conformidade com a legislação aplicável em matéria de proteção de dados.
          </p>
        </section>

        {/* 10. Os seus direitos */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">10. Os seus direitos</h2>
          <p>
            Dependendo da sua localização e da legislação aplicável, poderá ter alguns ou todos os seguintes direitos em
            relação aos seus dados pessoais:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>ser informado sobre como tratamos os seus dados pessoais;</li>
            <li>pedir acesso aos dados pessoais que mantemos sobre si;</li>
            <li>solicitar a correção de dados incorretos ou incompletos;</li>
            <li>pedir o apagamento de dados pessoais em determinadas circunstâncias;</li>
            <li>solicitar a restrição do tratamento em determinadas situações;</li>
            <li>opor‑se ao tratamento com base em interesses legítimos;</li>
            <li>pedir a portabilidade dos seus dados para si ou para outro responsável;</li>
            <li>
              apresentar uma reclamação a uma autoridade de controlo se considerar que o tratamento viola a legislação
              aplicável.
            </li>
          </ul>
          <p>
            Se quiser exercer algum destes direitos, por favor contacte‑nos através dos detalhes de contacto indicados neste
            Site. Poderemos precisar de solicitar‑lhe informações adicionais para confirmar a sua identidade antes de
            darmos seguimento ao seu pedido.
          </p>
        </section>

        <p className="mt-10 text-xs text-slate-500">Última atualização: 5 de outubro de 2025</p>
      </div>
    </main>
  );
}

