import Link from "next/link";

export default function TermsOfServicePagePt() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Legal</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Termos de serviço
        </h1>
        <p className="mt-1 text-sm text-slate-500">Copiloto Médico</p>

        {/* Introdução */}
        <section className="mt-6 space-y-3 text-sm leading-relaxed text-slate-700">
          <p>
            O Copiloto Médico oferece um serviço de documentação personalizada que permite aos utilizadores transcrever e
            documentar conversas com pacientes utilizando uma aplicação num computador, tablet ou telemóvel ligado à
            internet. O objetivo do serviço é facilitar a criação de registos clínicos para profissionais de saúde. O
            serviço está disponível online através de um navegador e requer ligação à internet.
          </p>
          <p>
            O serviço é prestado pela Copiloto Médico AB (org.nr 559444-6857). Estes Termos Gerais e Condições regulam a
            utilização do Serviço. Para efeitos destes Termos de Utilização, «Copiloto Médico», «o nosso serviço» ou
            «Serviço» significam o serviço digital de documentação fornecido pela Copiloto Médico AB.
          </p>
        </section>

        {/* 1. Definições */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">1. Definições</h2>
          <p>Para efeitos deste Acordo, os termos abaixo têm os seguintes significados:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">Utilizador:</span> Qualquer colaborador ou prestador de serviços do Cliente
              que utilize o Serviço.
            </li>
            <li>
              <span className="font-semibold">Acordo:</span> O acordo, com os respetivos anexos e aditamentos, celebrado
              entre o Cliente e o Fornecedor, através do qual o Fornecedor se compromete a disponibilizar o Serviço ao
              Cliente.
            </li>
            <li>
              <span className="font-semibold">Informação confidencial:</span> Informação sujeita a dever de sigilo
              profissional ou confidencialidade ao abrigo da legislação aplicável (incluindo, quando pertinente, a lei
              sueca sobre acesso à informação e sigilo e a lei de segurança do paciente), bem como legislação local
              equivalente em matéria de confidencialidade e sigilo profissional.
            </li>
            <li>
              <span className="font-semibold">Serviço:</span> Os serviços que o Fornecedor deverá prestar ao Cliente ao
              abrigo do Acordo, tal como descritos em maior detalhe na descrição do serviço.
            </li>
            <li>
              <span className="font-semibold">Descrição do serviço:</span> A descrição do conteúdo e do âmbito do
              Serviço, anexa ao Acordo, de acordo com a qual o Fornecedor prestará o Serviço.
            </li>
            <li>
              <span className="font-semibold">Legislação de sigilo:</span> A legislação aplicável em matéria de
              confidencialidade e proteção de dados em cada jurisdição, incluindo, quando aplicável, normas nacionais sobre
              terceirização de tratamento ou armazenamento técnico de dados.
            </li>
          </ul>
        </section>

        {/* 2. Obrigações do Fornecedor */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">2. Obrigações do Fornecedor</h2>
          <p>
            2.1 O Fornecedor disponibilizará o Serviço de forma contínua durante o período contratual. O Serviço será
            prestado de forma profissional.
          </p>
          <p>
            2.2 O Fornecedor prestará ao Cliente o apoio necessário durante o horário comercial normal
            (support@copilotomedico.com) e envidará esforços para disponibilizar o Serviço com um tempo de atividade
            (uptime) de 99% numa base trimestral, excluindo períodos de indisponibilidade permitida. O Fornecedor é
            responsável por manter e atualizar o Serviço de forma a que se mantenha funcional e seguro, em conformidade com
            as normas e práticas aplicáveis de TI e saúde. O período de indisponibilidade planeada para manutenção e
            atualizações é entre as 21:00 e as 05:00 (horário da Europa Central ou equivalente). Este tempo de paragem
            programado não é contabilizado no cálculo de uptime. O Fornecedor compromete-se a informar o Cliente com a
            maior antecedência possível sobre interrupções relevantes planeadas dentro destes horários.
          </p>
        </section>

        {/* 3. Utilização aceitável */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">3. Utilização aceitável</h2>
          <p>
            O Copiloto Médico deve ser utilizado de forma responsável e alinhada com o seu objetivo principal: criar
            rascunhos de notas clínicas exatas, editáveis e adequadas ao registo médico.
          </p>
          <p className="font-semibold">Responsabilidades do utilizador:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">Revisão e edição das notas:</span> Garantir que todos os rascunhos são
              revistos, corrigidos e verificados quanto à exatidão antes de serem incluídos em registos clínicos ou em
              sistemas de Registo Eletrónico de Saúde (EHR).
            </li>
            <li>
              <span className="font-semibold">Julgamento profissional:</span> Basear-se sempre na experiência clínica ao
              utilizar os resultados gerados pelo Copiloto Médico. O Serviço é uma ferramenta de apoio, não um substituto
              para a tomada de decisão clínica.
            </li>
            <li>
              <span className="font-semibold">Conformidade:</span> Utilizar o Copiloto Médico em conformidade com a
              legislação, regulamentação e normas clínicas aplicáveis na sua jurisdição.
            </li>
          </ul>
          <p className="font-semibold">Ações proibidas:</p>
          <p>Os utilizadores não devem:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Introduzir informação falsa ou enganosa no sistema.</li>
            <li>
              Tentar utilizar o Copiloto Médico para gerar diagnósticos médicos, recomendações de tratamento ou
              aconselhamento clínico definitivo.
            </li>
            <li>
              Praticar ações que comprometam a segurança, integridade ou desempenho do Serviço (por exemplo,
              engenharia reversa ou manipulação do sistema).
            </li>
            <li>Partilhar credenciais de acesso ou permitir que pessoas não autorizadas utilizem a conta.</li>
            <li>Utilizar o Copiloto Médico para fins distintos daqueles para os quais foi concebido.</li>
          </ul>
          <p>Qualquer violação destes termos pode resultar na suspensão ou rescisão do acesso ao Serviço.</p>
        </section>

        {/* 4. Direito de utilização do Serviço e acesso à conta */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">
            4. Direito de utilização do Serviço e acesso à conta
          </h2>
          <p>
            4.1 O Cliente obtém um direito não exclusivo, intransmissível e limitado no tempo para utilizar o Serviço, de
            acordo com os termos deste Acordo. Este direito está limitado ao número de utilizadores e ao período contratual
            especificados no Acordo.
          </p>
          <p>
            4.2 Cada conta de utilizador destina-se ao uso pessoal de um único utilizador. O utilizador não pode conceder a
            terceiros acesso à sua conta. Para manter o controlo da conta e evitar acessos não autorizados, o utilizador
            deve manter o controlo dos dispositivos utilizados para aceder ao Serviço e não divulgar a palavra‑passe ou
            outros detalhes associados à conta. O utilizador é responsável por fornecer e manter informação correta e
            atualizada na sua conta.
          </p>
          <p>
            4.3 O Copiloto Médico poderá encerrar ou bloquear uma conta quando necessário para proteger o próprio
            utilizador, o Copiloto Médico ou parceiros contra roubo de identidade ou outras atividades fraudulentas.
          </p>
        </section>

        {/* 5. Obrigações do Cliente */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">5. Obrigações do Cliente</h2>
          <p>
            5.1 O Cliente é responsável por dispor do hardware e software necessários para utilizar o Serviço. Para aceder
            ao Serviço, é necessária ligação à internet e um dispositivo compatível.
          </p>
          <p>5.2 O Cliente só pode utilizar o Serviço no âmbito da sua própria atividade.</p>
          <p>
            5.3 O Cliente compromete‑se a utilizar o Serviço em conformidade com a legislação e regulamentação aplicáveis e
            com as instruções e orientações fornecidas pelo Fornecedor. O Cliente é responsável pela utilização do Serviço
            pelos Utilizadores sob a sua responsabilidade e deve garantir que estes não utilizam o Serviço de forma
            inadequada ou que possa prejudicar os direitos do Fornecedor.
          </p>
          <p>
            5.4 Em particular, o Cliente e os utilizadores sob a sua responsabilidade, salvo autorização expressa do
            Copiloto Médico, não podem:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              (i) contornar, remover, alterar, desativar, prejudicar, bloquear, ocultar ou violar qualquer mecanismo de
              proteção de conteúdo ou outro componente de segurança do Serviço;
            </li>
            <li>(ii) utilizar robots, spiders, scrapers ou outros meios automáticos para aceder ao Serviço;</li>
            <li>
              (iii) descompilar, fazer engenharia reversa ou desmontar qualquer software ou outros produtos ou processos
              disponibilizados através do Serviço;
            </li>
            <li>(iv) inserir código ou produtos ou manipular o conteúdo do Serviço de qualquer forma;</li>
            <li>(v) utilizar qualquer método de mineração, recolha ou extração de dados;</li>
            <li>
              (vi) carregar, publicar, enviar por e‑mail ou de outra forma transmitir qualquer material concebido para
              interromper, destruir ou limitar a funcionalidade de qualquer software, hardware ou equipamento de
              telecomunicações associado ao Serviço, incluindo vírus informáticos ou qualquer outro código, ficheiro ou
              programa malicioso.
            </li>
          </ul>
          <p>
            5.5 O Copiloto Médico reserva‑se o direito de terminar ou limitar a utilização do Serviço pelo Cliente se o
            Cliente ou os utilizadores sob a sua responsabilidade violarem estes Termos de Serviço ou fizerem uma
            utilização ilegal ou fraudulenta do Serviço.
          </p>
          <p>
            5.6 O Cliente não pode ceder ou onerar, total ou parcialmente, os seus direitos e/ou obrigações ao abrigo deste
            Acordo sem o consentimento prévio e escrito do Fornecedor.
          </p>
        </section>

        {/* 6. Dados do Cliente */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">6. Dados do Cliente</h2>
          <p>
            6.1 O Cliente mantém todos os direitos sobre os seus dados. O Fornecedor não adquire quaisquer direitos sobre
            os dados do Cliente, ou parte deles, ao abrigo do Acordo. O Fornecedor só pode utilizar os dados do Cliente,
            incluindo dados confidenciais, para prestar o Serviço ao Cliente de acordo com o Acordo, e não para fins
            próprios. O acesso aos dados do Cliente é limitado às pessoas que dele necessitem para o desempenho das suas
            funções.
          </p>
          <p>
            6.2 O Fornecedor não tem, em circunstância alguma, direito a reter os dados do Cliente. O Fornecedor garante que
            os dados do Cliente serão disponibilizados ao Cliente imediatamente após pedido. A disponibilização deve ser
            efetuada com a urgência exigida pelas circunstâncias e tendo em conta o trabalho necessário.
          </p>
          <p>
            6.3 Os dados do Cliente serão disponibilizados no formato definido no Acordo. Caso o formato não tenha sido
            especificado, os dados devem ser disponibilizados no formato solicitado pelo Cliente. Se tal requerer trabalho
            de conversão específico, o Cliente compensará o Fornecedor por esse trabalho em montante razoável.
          </p>
          <p>
            6.4 O Fornecedor garantirá que os dados que o Cliente apaga no Serviço são removidos de forma permanente do
            ambiente do Fornecedor num prazo razoável, e o mais tardar no prazo de trinta (30) dias.
          </p>
          <p>
            6.5 O Fornecedor cessará todo o tratamento dos dados do Cliente após o termo do Acordo, exceto na medida do
            necessário para a sua devolução ao Cliente, ou a pessoa por este designada, e respetiva eliminação definitiva.
          </p>
          <p>
            6.6 Após o termo do Acordo, o Fornecedor garantirá que os dados do Cliente são devolvidos ao Cliente ou, em
            conformidade com as instruções deste, eliminados de forma permanente do ambiente operacional do Fornecedor num
            prazo razoável, e o mais tardar no prazo de trinta (30) dias.
          </p>
        </section>

        {/* 7. Confidencialidade */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">7. Confidencialidade</h2>
          <p>
            7.1 Nenhuma das partes poderá divulgar, ou de outra forma tornar acessível a terceiros, informação relativa à
            atividade da outra parte que possa ser considerada segredo comercial ou profissional, ou que se relacione com
            assuntos internos da outra parte, salvo na medida em que tal seja necessário para a prestação do Serviço e para
            o cumprimento do Acordo.
          </p>
          <p>
            7.2 A obrigação de confidencialidade não se aplica a informação que a parte consiga demonstrar ter obtido por
            outros meios que não a prestação do Serviço, ou que seja de conhecimento público. A obrigação de
            confidencialidade também não se aplica quando uma parte esteja obrigada, ao abrigo da legislação aplicável,
            nomeadamente sueca ou local, a divulgar determinada informação.
          </p>
          <p>
            7.3 No âmbito do Acordo, o Fornecedor pode ter acesso a Informação Confidencial com base em regras legais que
            permitem o tratamento técnico ou armazenamento técnico de dados para conta do Cliente. O Fornecedor garantirá o
            cumprimento das obrigações de confidencialidade e tomará as medidas necessárias para que colaboradores,
            consultores e subcontratados respeitem essas obrigações.
          </p>
          <p>
            7.4 A obrigação de confidencialidade prevista nesta secção mantém‑se em vigor após o termo do Acordo. O
            Fornecedor informará de imediato o ponto de contacto do Cliente se tiver conhecimento de qualquer violação de
            confidencialidade por parte de pessoas sob sua responsabilidade.
          </p>
        </section>

        {/* 8. Dados pessoais */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">8. Dados pessoais</h2>
          <p>
            O tratamento de dados pessoais no âmbito deste Acordo é regulado pelo Acordo de Tratamento de Dados celebrado
            com o Cliente durante o processo de registo. Ambas as partes comprometem‑se a cumprir a legislação aplicável em
            matéria de proteção de dados.
          </p>
          <p>
            Pode encontrar mais detalhes sobre a política de privacidade para profissionais de saúde na nossa Política de
            Privacidade, disponível aqui:
          </p>
          <p>
            <Link href="/pt/privacy-policy" className="text-sm font-medium text-sky-700 hover:text-sky-900">
              Política de privacidade para profissionais de saúde
            </Link>
          </p>
        </section>

        {/* 9. Segurança */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">9. Segurança</h2>
          <p>
            O Fornecedor adotará medidas técnicas e organizativas adequadas para garantir a segurança e a confidencialidade
            no âmbito da prestação do Serviço.
          </p>
        </section>

        {/* 10. Propriedade intelectual */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">10. Direitos de propriedade intelectual</h2>
          <p>
            10.1 O Fornecedor garante deter os direitos de propriedade intelectual necessários, incluindo direitos de autor
            sobre programas informáticos e direitos de utilização ao abrigo de licenças, para prestar o Serviço. O
            Fornecedor é igualmente responsável por assegurar que o Cliente tem o direito de utilizar o Serviço em
            conformidade com o Acordo.
          </p>
          <p>
            10.2 O Cliente é responsável por assegurar que detém os direitos de propriedade intelectual necessários,
            incluindo direitos de autor e licenças de utilização, relativamente ao seu próprio software, e que estes
            permitem ao Fornecedor utilizar o software do Cliente no ambiente operacional para prestação do Serviço nos
            termos do Acordo.
          </p>
        </section>

        {/* 11. Evolução do Serviço */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">11. Evolução do Serviço</h2>
          <p>
            Quaisquer melhorias, inovações ou desenvolvimentos realizados pela Copiloto Médico AB, isoladamente ou em
            conjunto com o Cliente, serão propriedade exclusiva da Copiloto Médico AB. O Cliente não adquire quaisquer
            direitos sobre essas melhorias, inovações ou desenvolvimentos.
          </p>
        </section>

        {/* 12. Limitação de responsabilidade */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">12. Limitação de responsabilidade</h2>
          <p>
            O Fornecedor não é responsável por danos indiretos ou consequentes decorrentes da utilização ou impossibilidade
            de utilização do Serviço. A responsabilidade total do Fornecedor ao abrigo deste Acordo, por qualquer motivo ou
            fundamento, está limitada ao montante total pago pelo Cliente ao Fornecedor nos seis (6) meses que antecederam
            o evento que deu origem à reclamação.
          </p>
        </section>

        {/* 13. Força maior e alteração de circunstâncias */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">13. Força maior e alteração de circunstâncias</h2>
          <p>
            13.1 As partes estão isentas de responsabilidade por incumprimento de determinadas obrigações ao abrigo deste
            Acordo, se o incumprimento resultar de circunstância de força maior de relevância material. Para efeitos deste
            Acordo, consideram‑se exemplos de força maior, entre outros, atos das autoridades, nova legislação ou alteração
            legislativa, conflitos laborais, bloqueios, incêndios, inundações, perda ou destruição de dados ou bens de
            importância relevante, ou acidentes de grande impacto. A parte que pretenda invocar força maior deve informar a
            outra parte sem demora injustificada.
          </p>
          <p>
            13.2 As partes acordam que, caso nova legislação, regulamentação ou desenvolvimentos legais alterem os direitos
            ou obrigações das partes, ou afetem a capacidade de qualquer uma delas de cumprir o Acordo, negociarão de boa
            fé as adaptações necessárias para garantir a conformidade e permitir a continuação da relação contratual.
          </p>
        </section>

        {/* 14. Resolução de litígios */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">14. Resolução de litígios</h2>
          <p>
            14.1 Este Acordo é regido e interpretado de acordo com a legislação sueca, com exclusão das normas sobre
            conflitos de leis. Quaisquer litígios relacionados com este Acordo serão, em primeira instância, resolvidos por
            negociação amigável entre as partes. Caso não seja possível chegar a acordo, o litígio será submetido a
            arbitragem administrada pelo Instituto de Arbitragem da Câmara de Comércio de Estocolmo (SCC). A sede da
            arbitragem será Estocolmo, Suécia, e a língua do processo será o sueco ou outra acordada entre as partes.
          </p>
          <p>
            14.2 As partes comprometem‑se a tratar o processo de arbitragem como estritamente confidencial. Toda a
            informação divulgada durante o processo, bem como a existência do próprio processo e o conteúdo de qualquer
            decisão proferida, será considerada informação confidencial e tratada em conformidade com a cláusula de
            confidencialidade deste Acordo.
          </p>
        </section>

        {/* 15. Pagamentos e faturação */}
        <section className="mt-8 space-y-4 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">15. Pagamentos e faturação</h2>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">15.1 Planos e preços</h3>
            <p>
              O Copiloto Médico disponibiliza planos gratuitos com utilização limitada e planos pagos por subscrição. As
              funcionalidades, limites de utilização e preços podem variar consoante a localização e a moeda do Cliente.
              Todos os preços, condições de pagamento e detalhes dos planos podem ser alterados a critério exclusivo do
              Copiloto Médico.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">15.2 Subscrições e taxas de utilização</h3>
            <p>
              Se o Cliente ou os seus Utilizadores excederem os limites do plano gratuito ou optarem por utilizar
              funcionalidades pagas, serão cobradas as taxas de subscrição ou de utilização aplicáveis ("Taxas"). Estas
              Taxas, bem como impostos, contribuições e outros encargos aplicáveis, serão comunicados de forma clara no
              momento da adesão ou upgrade e podem variar por região, moeda e método de pagamento.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">15.3 Impostos e outros encargos</h3>
            <p>
              <span className="font-semibold">15.3.1 Responsabilidade geral por impostos.</span> Salvo indicação em
              contrário, todas as Taxas são apresentadas sem impostos, contribuições ou taxas governamentais semelhantes
              (coletivamente, "Impostos"). O Cliente é responsável pelo pagamento de todos os Impostos associados às suas
              compras ao abrigo deste Acordo, exceto impostos baseados no rendimento líquido do Copiloto Médico.
            </p>
            <p>
              <span className="font-semibold">15.3.2 Clientes na Suécia.</span> A Copiloto Médico AB é uma empresa
              sueca. Para Clientes sediados na Suécia, o Copiloto Médico cobrará o imposto sobre o valor acrescentado (IVA)
              sueco ou outros impostos aplicáveis, conforme exigido pela legislação sueca.
            </p>
            <p>
              <span className="font-semibold">15.3.3 Clientes noutras regiões.</span> Para Clientes fora da Suécia, os
              Impostos aplicáveis (incluindo IVA, GST ou outros impostos sobre o consumo) dependem da jurisdição em que o
              Cliente opera ou reside. O Cliente reconhece que o Copiloto Médico pode ser obrigado a cobrar certos Impostos
              com base nas regras locais e aceita pagar esses Impostos. Se o Copiloto Médico não for obrigado a cobrar
              Impostos numa determinada jurisdição, o Cliente continua responsável por quaisquer Impostos devidos às
              autoridades competentes.
            </p>
            <p>
              <span className="font-semibold">15.3.4 Comissões bancárias e de câmbio.</span> O Copiloto Médico não é
              responsável por comissões bancárias, taxas de câmbio ou outros encargos cobrados pelo prestador de serviços
              de pagamento do Cliente.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">15.4 Meios de pagamento aceites</h3>
            <p>
              <span className="font-semibold">15.4.1 Cartão de crédito ou débito.</span> Todas as Taxas devem ser
              pagas com um cartão de crédito ou débito válido. O Cliente deve fornecer informação de cartão atual, completa
              e correta, e atualizá‑la prontamente sempre que haja alterações.
            </p>
            <p>
              <span className="font-semibold">15.4.2 Autorizações de cobrança.</span> Ao fornecer os dados do cartão, o
              Cliente autoriza o Copiloto Médico e os respetivos processadores de pagamento a cobrarem nesse cartão todas as
              Taxas devidas ao abrigo do plano ou utilização escolhidos.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">15.5 Alterações de taxas e condições de pagamento</h3>
            <p>
              O Copiloto Médico reserva‑se o direito de alterar Taxas, condições de pagamento e estruturas de preços em
              qualquer momento. Tais alterações podem incluir modificações nos limites de utilização do plano gratuito,
              criação, remoção ou alteração de níveis de subscrição ou de preços de funcionalidades pagas. O Copiloto
              Médico fará esforços razoáveis para notificar o Cliente com antecedência sobre alterações materiais (por
              exemplo, por e‑mail ou notificação dentro do próprio Serviço). A continuação da utilização do Serviço após a
              alteração das Taxas constitui aceitação das mesmas.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">15.6 Ciclo de faturação e extratos</h3>
            <p>
              <span className="font-semibold">15.6.1 Ciclo de faturação.</span> As Taxas de subscrição (quando
              aplicáveis) serão faturadas antecipadamente numa base periódica (por exemplo, mensal, trimestral ou anual),
              consoante o plano escolhido. As Taxas baseadas em utilização serão faturadas de acordo com o descrito no
              plano correspondente.
            </p>
            <p>
              <span className="font-semibold">15.6.2 Registos de cobranças.</span> O Copiloto Médico disponibilizará um
              registo de cobranças, que poderá ser enviado eletronicamente (por e‑mail ou através do painel da conta no
              Serviço). Este documento não constitui uma fatura para pagamento futuro, mas sim um registo das cobranças
              realizadas no cartão associado.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">15.7 Pagamentos em atraso e falta de pagamento</h3>
            <p>
              <span className="font-semibold">15.7.1 Falha de pagamento.</span> Se um pagamento for recusado ou não for
              recebido dentro do prazo, o Copiloto Médico poderá cobrar juros de mora à taxa máxima permitida pela
              legislação aplicável.
            </p>
            <p>
              <span className="font-semibold">15.7.2 Suspensão ou rescisão.</span> O Copiloto Médico poderá suspender ou
              rescindir o acesso do Cliente ao Serviço se as Taxas permanecerem em dívida após notificação razoável.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">15.8 Reembolsos</h3>
            <p>
              Salvo quando exigido pela legislação aplicável ou acordado por escrito em contrário, todas as Taxas são
              não‑reembolsáveis. O Copiloto Médico poderá, a seu critério, conceder créditos ou reembolsos em situações
              específicas (por exemplo, interrupções de serviço que excedam o uptime acordado).
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">15.9 Conversão de moeda</h3>
            <p>
              Todas as Taxas serão cobradas na moeda especificada no plano de subscrição do Cliente. Se for necessária
              conversão cambial, esta será efetuada pelo prestador de serviços de pagamento do Cliente, às suas taxas e
              comissões. O Copiloto Médico não é responsável por quaisquer taxas de conversão de moeda ou encargos cobrados
              pelo prestador de serviços de pagamento do Cliente.
            </p>
          </div>
        </section>

        <p className="mt-10 text-xs text-slate-500">Última atualização: 5 de outubro de 2025</p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href="/pt/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
          >
            Falar connosco sobre estes termos
          </Link>
          <Link href="/pt" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Voltar à página inicial
          </Link>
        </div>
      </div>
    </main>
  );
}
