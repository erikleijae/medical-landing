import Image from "next/image";
import Link from "next/link";

import { HeroVideo } from "../../components/hero-video";
import { BenefitsSimulator } from "../../components/benefits-simulator";
import { LanguageSwitcher } from "../../components/language-switcher";

export default function HomePagePt() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4 md:px-8 lg:px-10">
          <Link href="/pt" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="inline-block h-6 w-6 rounded-full border border-slate-900 bg-slate-900" />
              <span className="-ml-3 inline-block h-6 w-6 rounded-full border border-slate-900" />
            </div>
            <span className="text-[18px] font-semibold tracking-tight text-slate-900">Copiloto Médico</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-800 lg:flex">
            <Link href="/pt/product" className="hover:text-slate-900">
              Produto
            </Link>
            <Link href="/pt/benefits-simulator" className="hover:text-slate-900">
              Simulador de benefícios
            </Link>
            <Link href="/pt/pricing" className="hover:text-slate-900">
              Preços
            </Link>
          </nav>

          <div className="flex items-center gap-4 text-sm">
            <LanguageSwitcher locale="pt" />
            <Link
              href="/pt/login"
              target="_blank"
              rel="noreferrer"
              className="hidden text-slate-700 hover:text-slate-900 sm:inline"
            >
              Entrar
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

      {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-12 pt-20 text-center md:px-8 md:pb-16 md:pt-24 lg:px-0">
          <h1 className="font-display text-[38px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[44px] md:text-[50px]">
            O assistente clínico de IA líder na{' '}
            <span className="border-b-[6px] border-[#d5ff7c] pb-1">América</span>
          </h1>
          <p className="mt-3 text-[15px] text-slate-500 sm:mt-4">
            Mais de 1.000 organizações de saúde já poupam horas por dia em tarefas administrativas com o Copiloto Médico.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-6 py-2.5 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
            >
              Comece grátis
              <span className="ml-1" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </div>

        {/* LOGOS */}
        <div className="mx-auto max-w-6xl px-6 pb-8 md:px-8 lg:px-0">
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <Image
              src="/logos/doktorse.svg"
              alt="Doktor.Se"
              width={120}
              height={32}
              className="h-6 w-auto opacity-80"
            />
            <Image
              src="/680a6f5dd62951a5097ddab2_nhs.svg"
              alt="NHS"
              width={90}
              height={32}
              className="h-6 w-auto opacity-80"
            />
            <Image
              src="/680a970e6d5665751f6bfcb8_gaias.png"
              alt="Clínicas Gaias"
              width={110}
              height={32}
              className="h-6 w-auto opacity-80"
            />
            <Image
              src="/680e64029f546840cd0fa79f_Arriaza.svg"
              alt="Clínica Arriaza"
              width={110}
              height={32}
              className="h-6 w-auto opacity-80"
            />
            <Image
              src="/680e793ec5490e5100c376a2_CGM.svg"
              alt="CompuGroup Medical"
              width={120}
              height={32}
              className="h-6 w-auto opacity-80"
            />
            <Image
              src="/680a6ef48f51aabf2425eca5_ncl icb.svg"
              alt="North Central London ICB"
              width={120}
              height={32}
              className="h-6 w-auto opacity-80"
            />
          </div>
        </div>

        <HeroVideo />
      </section>

      {/* COPILOTO NA PRÁTICA */}
      <section id="produto" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12">
          <div className="text-center">
            <h2 className="text-[28px] font-semibold tracking-tight text-slate-900 sm:text-[32px]">
              Copiloto Médico na prática
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Mais de 1.000 organizações de saúde já confiam em nós.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/Medica.png"
                  alt="Médica Sur, hospital de alta complexidade na Cidade do México"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-700">
                <p className="text-justify">
                  No México, hospitais de alta complexidade como o Médica Sur procuram reduzir a carga administrativa. O
                  Copiloto Médico reduz cerca de 40% do tempo de consulta e gera a nota clínica apenas com a sua voz.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/DoctorSV.png"
                  alt="Doctor SV, plataforma nacional de saúde digital em El Salvador"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-700">
                <p className="text-justify">
                  Em El Salvador, o Doctor SV moderniza o prontuário eletrônico do país. Assistentes de IA como o Copiloto
                  Médico complementam essas iniciativas ao gerar registros em minutos e reduzir cerca de 40% do tempo de
                  consulta.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/houston.png"
                  alt="Houston Methodist Hospital utilizando soluções de IA"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-700">
                <p className="text-justify">
                  Nos Estados Unidos, hospitais como o Houston Methodist Hospital lideram projetos de scribes de IA. O
                  Copiloto Médico traz essa abordagem para a região e ajuda a reduzir até 2 horas diárias de documentação
                  por profissional.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CITA EM DESTAQUE */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 pb-20 pt-8 text-center">
          <p className="text-3xl font-medium leading-snug text-slate-900 sm:text-4xl">
            &quot;Depois que você experimenta o Copiloto Médico, não quer voltar atrás.&quot;
          </p>
          <div className="mt-4 text-lg tracking-[0.3em] text-amber-400">★★★★★</div>
          <div className="mt-6 flex flex-col items-center gap-3 text-sm text-slate-600">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-300">
              <Image
                src="/6810bcac6fc499ede820f7a0_Juan Mora.png.png"
                alt="Foto de Diana Martínez"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Diana Martínez</p>
              <p className="text-xs text-slate-500">Médica Sur</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8">
          <div className="text-center">
            <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
              Como funciona o Copiloto Médico
            </h2>
            <p className="mt-3 text-[15px] text-slate-500">
              Nosso assistente médico com IA captura a consulta para que você possa focar totalmente no paciente.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/682dda116cdb3289f729c87c_sv1_3x-p-500.webp"
                  alt="Tela de boas-vindas do Copiloto Médico em um celular"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-6 pt-4 text-sm text-slate-700">
                <p className="text-[13px] font-semibold text-slate-900">1. Inicie o Copiloto Médico</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  Abra o Copiloto Médico no computador ou no celular e comece a usá-lo. Ele funciona tanto em consultas
                  presenciais quanto virtuais.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/682dda1b6e4efdc16a1d16ad_sv2_3x-p-500.webp"
                  alt="Interface do Copiloto Médico enquanto escuta a consulta"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-6 pt-4 text-sm text-slate-700">
                <p className="text-[13px] font-semibold text-slate-900">2. As notas clínicas são geradas</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  Enquanto você conversa com o paciente, o Copiloto Médico transcreve e estrutura as informações clínicas em
                  segundo plano.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/682dda247bf886638e57f4a2_sv3_3x-p-500.webp"
                  alt="Profissional de saúde revisando a nota clínica em um computador"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-6 pt-4 text-sm text-slate-700">
                <p className="text-[13px] font-semibold text-slate-900">3. Revise e envie</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  Revise o rascunho, faça ajustes rápidos e envie ou transfira o conteúdo para o seu prontuário eletrônico com
                  um só clique.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* MELHORES HISTÓRIAS, MAIOR SEGURANÇA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-16 text-center">
          <h2 className="text-[28px] font-semibold tracking-tight text-slate-900 sm:text-[32px]">
            Melhores histórias, mais segurança
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-[15px]">
            O Copiloto Médico torna a documentação clínica mais rápida, simples e precisa.
          </p>

          <div className="mt-10 space-y-8">
            {/* Linha superior: especialidades e transferências */}
            <div className="grid gap-6 text-left md:grid-cols-2">
              {/* Especialidades */}
              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/especialidades.png"
                    alt="Copiloto Médico adaptado a múltiplas especialidades"
                    width={640}
                    height={360}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="mt-4 text-sm text-slate-700">
                  <p className="text-sm font-semibold text-slate-900">Mais de 50 especialidades compatíveis</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    O Copiloto Médico entende a linguagem da sua especialidade e profissão. Projetado para médicos,
                    psicólogos, dentistas, fisioterapeutas, profissionais de urgência, enfermeiros e muitos outros.
                  </p>
                  <div className="mt-3 grid gap-2 text-[11px] text-slate-600 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2">
                      <p className="text-[11px] font-semibold text-slate-900">IA ajustada por especialidade</p>
                      <p className="mt-1">
                        Modelos próprios treinados com dados clínicos reais para cada especialidade, de Medicina Interna e
                        Pediatria a Cirurgia e Enfermagem.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2">
                      <p className="text-[11px] font-semibold text-slate-900">Menos ruído, mais precisão</p>
                      <p className="mt-1">
                        Cada modelo destilado é ajustado à linguagem clínica da sua especialidade para reduzir erros e
                        alucinações.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transferências */}
              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/medico.png"
                    alt="Profissional de saúde transferindo a história clínica digital com o Copiloto Médico"
                    width={640}
                    height={360}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="mt-4 text-sm text-slate-700">
                  <p className="text-sm font-semibold text-slate-900">
                    Transferências para o seu prontuário eletrônico (HIS) com 1 clique
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    O Copiloto Médico se integra ao seu prontuário eletrônico (HIS) e transfere a documentação com um só
                    clique. Esqueça copiar e colar entre sistemas.
                  </p>
                </div>
              </div>
            </div>

            {/* Linha inferior: gera histórias, foto de consulta e codificação */}
            <div className="grid gap-6 text-left text-sm text-slate-700 md:grid-cols-3">
              {/* Gera histórias, documentos e cartas */}
              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/682dda985c7d89da56d3ed2c_es7_4x.webp"
                    alt="Criação de atestados e documentos com o Copiloto Médico"
                    width={640}
                    height={360}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-900">Gera histórias, documentos e cartas</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Obtenha tudo o que precisa de uma consulta: histórias clínicas, atestados e outros documentos prontos
                    para enviar.
                  </p>
                </div>
              </div>

              {/* Foto de consulta */}
              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/home_kid.png"
                    alt="Profissional de saúde utilizando o Copiloto Médico durante uma consulta"
                    width={640}
                    height={640}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-slate-600">
                  O Copiloto Médico acompanha a consulta sem interromper a relação médico-paciente, mantendo o foco na
                  pessoa.
                </p>
              </div>

              {/* Codificação clínica integrada */}
              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/682ddaa1be3339a4db428f1f_es8_4x.webp"
                    alt="Exemplo de codificação clínica automática com o Copiloto Médico"
                    width={640}
                    height={360}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-900">Codificação clínica integrada</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    O Copiloto Médico mostra automaticamente os códigos clínicos relevantes para cada consulta, ajudando a
                    manter uma codificação precisa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESTUDOS DE CASO EM DESTAQUE */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-20">
          {/* Caso 1 */}
          <div className="grid items-stretch gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-200">
              <Image
                src="/680b8bd084ba7f136270ee2a_testimonial1.png"
                alt="Médico generalista que utiliza o Copiloto Médico"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 22rem, 100vw"
              />
            </div>
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm">
              <div className="space-y-3">
                <p className="text-lg font-medium leading-snug text-slate-900 sm:text-xl">
                  «Estou muito satisfeita com a forma como o Copiloto Médico me permite dedicar mais tempo ao paciente em
                  Médica Sur e explicar o diagnóstico e o tratamento de maneira mais completa. Bem-vinda a IA que humaniza
                  a consulta».
                </p>
                <div className="text-xs text-slate-600">
                  <p className="font-semibold text-slate-900">Diana Martínez</p>
                  <p>Profissional de saúde</p>
                  <p>Pediatra</p>
                  <p>Médica Sur</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SEGURANÇA */}
      <section id="seguranca" className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          {/* Título e subtítulo centralizados */}
          <div className="text-center">
            <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
              Priorizamos a segurança e a integridade
            </h2>
            <p className="mt-3 text-[15px] text-slate-500">
              O Copiloto Médico segue os mais altos padrões de segurança e proteção de dados.
            </p>
          </div>

          {/* Linha de 3 bullets */}
          <div className="mt-12 grid gap-10 text-center text-sm text-slate-700 sm:text-base md:grid-cols-3">
            <div className="space-y-3">
              <div className="text-sm text-slate-500">
                <span aria-hidden>✓</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">HIPAA e normas de saúde brasileiras</p>
              <p className="text-sm text-slate-700">
                O Copiloto Médico foi desenhado para se alinhar a marcos de proteção de dados de saúde na América Latina e
                na América do Norte, incluindo HIPAA e regulamentações nacionais aplicáveis ao prontuário clínico.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm text-slate-500">
                <span aria-hidden>✓</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">Menos documentação manual</p>
              <p className="text-sm text-slate-700">
                Nossa solução de voz permite que profissionais de saúde foquem no paciente, reduzindo ao mínimo a
                necessidade de digitação manual.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm text-slate-500">
                <span aria-hidden>✓</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">Dados tratados nas Américas</p>
              <p className="text-sm text-slate-700">
                Todos os dados são criptografados e processados em centros de dados localizados nas Américas, em
                conformidade com a legislação aplicável.
              </p>
            </div>
          </div>

          {/* Bloco inferior com imagem e texto */}
          <div className="mt-14 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-300">
              <Image
                src="/hipaa.png"
                alt="Certificações de segurança do Copiloto Médico"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 24rem, 100vw"
              />
            </div>

            <div className="space-y-4 text-left text-sm text-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                A confiança de mais de 1.000 médicos em toda a América
              </h3>
              <p>
                Baseado nos mais altos padrões de segurança, o Copiloto Médico oferece documentação clínica baseada em IA
                de forma segura e confiável.
              </p>
              <p>
                De grandes redes hospitalares a clínicas especializadas, os profissionais de saúde utilizam o Copiloto
                Médico para ganhar tempo, qualidade e tranquilidade em cada consulta.
              </p>
              <Link
                href="/pt/data-security"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              >
                Saiba mais sobre nossos protocolos de segurança
                <span className="ml-1" aria-hidden>
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTEMUNHOS */}
      <section id="historias" className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Médicos encantados
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Nós gostamos do Copiloto Médico. Os nossos usuários, ainda mais.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Card 1 */}
            <figure className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 text-left text-sm text-slate-700 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src="/6810bcac6fc499ede820f7a0_Juan Mora.png.png"
                    alt="Foto de Juan Mora Delgado"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="text-xs text-slate-600">
                  <p className="text-sm font-semibold text-slate-900">Diana Martínez</p>
                  <p>Médica Sur</p>
                </div>
              </div>
              <div className="mt-3 text-amber-400">★★★★★</div>
              <blockquote className="mt-3 space-y-2">
                <p className="text-sm text-slate-800">
                  “Usar o Copiloto Médico não é apenas estar em dia com os últimos avanços tecnológicos. É, acima de tudo,
                  uma questão de boa prática clínica. O Copiloto Médico evita que eu passe 2 horas por dia digitando e 15
                  minutos com os pacientes. Depois que você experimenta, não quer voltar atrás.”
                </p>
              </blockquote>
            </figure>

            {/* Card 2 */}
            <figure className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 text-left text-sm text-slate-700 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src="/681068922ceb2a1128818e85_Carlos Alberto Encinas.png"
                    alt="Foto de Carlos Alberto Encinas Ullán"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="text-xs text-slate-600">
                  <p className="text-sm font-semibold text-slate-900">Carlos Alberto Encinas Ullán</p>
                  <p>Cirurgião ortopédico, Hospital Universitário</p>
                </div>
              </div>
              <div className="mt-3 text-amber-400">★★★★★</div>
              <blockquote className="mt-3 space-y-2">
                <p>
                  “Enquanto examino o paciente e converso com ele de forma natural, o Copiloto Médico transcreve e
                  estrutura todas as informações clínicas com precisão, mesmo em casos complexos. O maior benefício: o
                  aplicativo redige automaticamente as histórias clínicas, o que me fez ganhar até 2 horas diárias de
                  trabalho administrativo.”
                </p>
              </blockquote>
            </figure>

            {/* Card 3 */}
            <figure className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 text-left text-sm text-slate-700 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src="/6810688005f18fd45c2ca548_Hugo Queijeiro profile.png"
                    alt="Foto de Hugo Queijeiro Pintos"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="text-xs text-slate-600">
                  <p className="text-sm font-semibold text-slate-900">Hugo Queijeiro Pintos</p>
                  <p>Diretor médico, Clínicas Gaias</p>
                </div>
              </div>
              <div className="mt-3 text-amber-400">★★★★★</div>
              <blockquote className="mt-3 space-y-2">
                <p>
                  “Implementámos o Copiloto Médico nas nossas clínicas e estamos muito satisfeitos com a forma como ele
                  melhora a dinâmica do atendimento. Agora é mais fácil para os nossos médicos olhar nos olhos dos
                  pacientes, em vez de para o computador.”
                </p>
              </blockquote>
            </figure>

            {/* Card 4 */}
            <figure className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 text-left text-sm text-slate-700 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src="/681068a3197614922f294a3e_Jose Fernández Cuesta Peñafiel.jpeg"
                    alt="Foto de Jose Fernández Cuesta Peñafiel"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="text-xs text-slate-600">
                  <p className="text-sm font-semibold text-slate-900">Jose Fernández Cuesta Peñafiel</p>
                  <p>Pediatra, hospitalização domiciliar pediátrica</p>
                </div>
              </div>
              <div className="mt-3 text-amber-400">★★★★★</div>
              <blockquote className="mt-3 space-y-2">
                <p>
                  “Em um contexto complexo como a hospitalização domiciliar pediátrica, com múltiplos interlocutores e
                  conversas prolongadas, o Copiloto Médico mantém as histórias clínicas precisas e completas. Fico
                  tranquilo sabendo que nada do que os pais comentam sobre os meus pacientes será esquecido.”
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </section>

      {/* IMPACTO EM NÚMEROS */}
      <section className="bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 lg:px-0">
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Impacto em números
            </p>
            <h2 className="mt-3 text-[26px] font-semibold tracking-tight text-slate-900 sm:text-[30px]">
              Quanto um médico pode ganhar por consulta usando o Copiloto Médico?
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
              Ajuste os seus números e veja quantas horas pode economizar, quantas consultas adicionais pode atender e
              quanto de receita extra pode gerar a cada mês.
            </p>
          </div>
          <div className="mx-auto mt-4 max-w-3xl">
            <BenefitsSimulator variant="compact" language="pt" />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="precos" className="border-t border-slate-100 bg-gradient-to-b from-[#d5ff7c]/35 via-white to-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
            Começar a usar o Copiloto Médico é muito fácil
          </h2>
          <p className="mt-2 text-[15px] text-slate-600">
            Não é necessário cartão de crédito. Comece em poucos minutos.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Experimente grátis
            </Link>
          </div>
        </div>

        {/* FOOTER */}
        <footer
          id="recursos"
          className="border-t border-slate-100"
        >
          <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-slate-700 sm:text-[13px]">
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              <Link
                href="/pt/product"
                className="hover:text-slate-900"
              >
                Produto
              </Link>
              <Link
                href="/pt/pricing"
                className="hover:text-slate-900"
              >
                Preços
              </Link>
              <Link
                href="/pt/login"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900"
              >
                Entrar
              </Link>
              <Link
                href="/pt/contact"
                className="hover:text-slate-900"
              >
                Contato
              </Link>
              <Link href="/pt/terms-of-service" className="hover:text-slate-900">
                Termos de serviço
              </Link>
              <Link href="/pt/privacy-policy" className="hover:text-slate-900">
                Política de privacidade
              </Link>
              <Link
                href="/signup"
                className="hover:text-slate-900"
              >
                Comece grátis
              </Link>
            </nav>
            <p className="mt-4 text-center text-[11px] text-slate-400">
              © 2026 Medical Copilot. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}
