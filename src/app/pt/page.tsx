import Image from "next/image";
import Link from "next/link";

import { HeroVideo } from "../../components/hero-video";
import { BenefitsSimulator } from "../../components/benefits-simulator";
import { ConsultationsCounter, HoursSavedCounter } from "../../components/consultations-counter";
import { AudienceTabs } from "../../components/audience-tabs";
import { GrokBackground } from "../../components/grok-background";
import { DeepClinicTopNav } from "../../components/deepclinic-top-nav";
import { MotionReveal } from "../../components/motion-reveal";

export default function HomePagePt() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav lang="pt" />

      {/* HERO */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center md:px-8 lg:px-0">
          <MotionReveal>
            <h1 className="font-sans text-[42px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[56px] md:text-[72px]">
              O assistente clínico de IA líder na{" "}
              <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                América
              </span>
            </h1>
          </MotionReveal>

          <MotionReveal delayMs={100}>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/60 sm:text-[20px]">
              Mais de 1.000 organizações de saúde já poupam horas por dia em tarefas administrativas com o DeepClinic Copilot.
            </p>
          </MotionReveal>

          <MotionReveal delayMs={200}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105"
              >
                Comece grátis
              </Link>
            </div>
          </MotionReveal>
        </div>

        <MotionReveal delayMs={300}>
          <div className="mx-auto max-w-6xl px-6 pb-12 md:px-8 lg:px-0 mt-20">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-50 grayscale transition-all duration-500 hover:opacity-80 hover:grayscale-0">
              <Image
                src="/logos/doktorse.svg"
                alt="Doktor.Se"
                width={120}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
              <Image
                src="/680a6f5dd62951a5097ddab2_nhs.svg"
                alt="NHS"
                width={90}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
              <Image
                src="/680a970e6d5665751f6bfcb8_gaias.png"
                alt="Clínicas Gaias"
                width={110}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
              <Image
                src="/680e64029f546840cd0fa79f_Arriaza.svg"
                alt="Clínica Arriaza"
                width={110}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
              <Image
                src="/680e793ec5490e5100c376a2_CGM.svg"
                alt="CompuGroup Medical"
                width={120}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
              <Image
                src="/680a6ef48f51aabf2425eca5_ncl icb.svg"
                alt="North Central London ICB"
                width={120}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delayMs={400}>
          <HeroVideo theme="dark" />
        </MotionReveal>
      </section>

      <ConsultationsCounter
        locale="pt"
        title="Consultas com o DeepClinic Copilot"
        subtitle="Este número aumenta em tempo real enquanto você navega."
        theme="dark"
      />

      <HoursSavedCounter
        locale="pt"
        title="Horas poupadas"
        subtitle="Economizamos 30% do tempo da consulta"
        theme="dark"
      />

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                Como funciona o DeepClinic Copilot
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                Nosso assistente médico com IA captura a consulta para que você possa focar totalmente no paciente.
              </p>
            </MotionReveal>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <MotionReveal delayMs={0} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda116cdb3289f729c87c_sv1_3x-p-500.webp"
                    alt="Tela de boas-vindas do DeepClinic Copilot em um celular"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">01. INICIE O DEEPCLINIC COPILOT</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Abra o DeepClinic Copilot no computador ou no celular e comece a usá-lo. Ele funciona tanto em consultas
                    presenciais quanto virtuais.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={100} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda1b6e4efdc16a1d16ad_sv2_3x-p-500.webp"
                    alt="Interface do DeepClinic Copilot enquanto escuta a consulta"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">02. AS NOTAS CLÍNICAS SÃO GERADAS</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Enquanto você conversa com o paciente, o DeepClinic Copilot transcreve e estrutura as informações clínicas em
                    segundo plano.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={200} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda247bf886638e57f4a2_sv3_3x-p-500.webp"
                    alt="Profissional de saúde revisando a nota clínica em um computador"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">03. REVISE E ENVIE</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Revise o rascunho, faça ajustes rápidos e envie ou transfira o conteúdo para o seu prontuário eletrônico com
                    um só clique.
                  </p>
                </div>
              </article>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* MELHORES HISTÓRIAS, MAIOR SEGURANÇA */}
      <section className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
          <MotionReveal>
            <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
              Melhores histórias, mais segurança
            </h2>
            <p className="mt-4 text-[16px] text-white/50">
              O DeepClinic Copilot torna a documentação clínica mais rápida, simples e precisa.
            </p>
          </MotionReveal>

          <div className="mt-16 space-y-8 text-left">
            {/* Linha superior: especialidades e transferências */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Especialidades */}
              <MotionReveal delayMs={0}>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
                  <div className="relative overflow-hidden rounded-xl bg-black/20 aspect-video w-full">
                    <Image
                      src="/especialidades.png"
                      alt="DeepClinic Copilot adaptado a múltiplas especialidades"
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[14px] font-semibold tracking-wide text-white">MAIS DE 50 ESPECIALIDADES COMPATÍVEIS</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                      O DeepClinic Copilot entende a linguagem da sua especialidade e profissão. Projetado para médicos,
                      psicólogos, dentistas, fisioterapeutas, profissionais de urgência, enfermeiros e muitos outros.
                    </p>
                    <div className="mt-4 grid gap-3 text-[11px] text-white/50 sm:grid-cols-2">
                      <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-white">
                          IA ajustada por especialidade
                        </p>
                        <p className="mt-1">
                          Modelos próprios treinados com dados clínicos reais para cada especialidade.
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-white">
                          Menos ruído, mais precisão
                        </p>
                        <p className="mt-1">
                          Cada modelo destilado é ajustado à linguagem clínica da sua especialidade.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionReveal>

              {/* Transferências */}
              <MotionReveal delayMs={150}>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
                  <div className="relative overflow-hidden rounded-xl bg-black/20 aspect-video w-full">
                    <Image
                      src="/medico.png"
                      alt="Profissional de saúde transferindo a história clínica digital com o DeepClinic Copilot"
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[14px] font-semibold tracking-wide text-white">
                      TRANSFERÊNCIAS PARA O SEU PRONTUÁRIO ELETRÔNICO (HIS) COM 1 CLIQUE
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                      O DeepClinic Copilot se integra ao seu prontuário eletrônico (HIS) e transfere a documentação com um só
                      clique. Esqueça copiar e colar entre sistemas.
                    </p>
                  </div>
                </div>
              </MotionReveal>
            </div>

            {/* Linha inferior: gera histórias, foto de consulta e codificação */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* Gera histórias, documentos e cartas */}
              <MotionReveal delayMs={0}>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 h-full">
                  <div className="relative overflow-hidden rounded-xl bg-black/20 aspect-video w-full">
                    <Image
                      src="/682dda985c7d89da56d3ed2c_es7_4x.webp"
                      alt="Criação de atestados e documentos com o DeepClinic Copilot"
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[14px] font-semibold tracking-wide text-white">GERA HISTÓRIAS, DOCUMENTOS E CARTAS</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                      Obtenha tudo o que precisa de uma consulta: histórias clínicas, atestados e outros documentos prontos
                      para enviar.
                    </p>
                  </div>
                </div>
              </MotionReveal>

              {/* Foto de consulta */}
              <MotionReveal delayMs={100}>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 h-full">
                  <div className="relative overflow-hidden rounded-xl bg-black/20 aspect-square w-full">
                    <Image
                      src="/home_kid.png"
                      alt="Profissional de saúde utilizando o DeepClinic Copilot durante uma consulta"
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <p className="mt-6 text-[13px] leading-relaxed text-white/60">
                    O DeepClinic Copilot acompanha a consulta sem interromper a relação médico-paciente, mantendo o foco na
                    pessoa.
                  </p>
                </div>
              </MotionReveal>

              {/* Codificação clínica integrada */}
              <MotionReveal delayMs={200}>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 h-full">
                  <div className="relative overflow-hidden rounded-xl bg-black/20 aspect-video w-full">
                    <Image
                      src="/682ddaa1be3339a4db428f1f_es8_4x.webp"
                      alt="Exemplo de codificação clínica automática com o DeepClinic Copilot"
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[14px] font-semibold tracking-wide text-white">CODIFICAÇÃO CLÍNICA INTEGRADA</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                      O DeepClinic Copilot mostra automaticamente os códigos clínicos relevantes para cada consulta, ajudando a
                      manter uma codificação precisa.
                    </p>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      <AudienceTabs language="pt" theme="dark" />

      {/* COPILOTO NA PRÁTICA */}
      <section id="produto" className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                DeepClinic Copilot na prática
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                Mais de 1.000 organizações de saúde já confiam em nós.
              </p>
            </MotionReveal>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <MotionReveal delayMs={0}>
              <article className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/Medica.png"
                    alt="Médica Sur, hospital de alta complexidade na Cidade do México"
                    fill
                    className="object-cover opacity-90"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-8">
                  <p className="text-[14px] leading-relaxed text-white/80">
                    No México, hospitais de alta complexidade como o Médica Sur procuram reduzir a carga administrativa. O
                    DeepClinic Copilot reduz cerca de 30% do tempo de consulta e gera a nota clínica apenas com a sua voz.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={150}>
              <article className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/houston.png"
                    alt="Houston Methodist Hospital utilizando soluções de IA"
                    fill
                    className="object-cover opacity-90"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-8">
                  <p className="text-[14px] leading-relaxed text-white/80">
                    Nos Estados Unidos, hospitais como o Houston Methodist Hospital lideram projetos de scribes de IA. O
                    DeepClinic Copilot traz essa abordagem para a região e ajuda a reduzir até 2 horas diárias de documentação
                    por profissional.
                  </p>
                </div>
              </article>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* ESTUDOS DE CASO EM DESTAQUE */}
      <section className="relative z-10 py-32 border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <MotionReveal>
            <div className="grid items-center gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div className="relative aspect-square w-full overflow-hidden rounded-[32px] border border-white/10 bg-black">
                <Image
                  src="/680b8bd084ba7f136270ee2a_testimonial1.png"
                  alt="Médico generalista que utiliza o DeepClinic Copilot"
                  fill
                  className="object-cover opacity-80"
                  sizes="(min-width: 768px) 22rem, 100vw"
                />
              </div>
              <div className="flex flex-col justify-center p-6 text-left">
                <div className="space-y-6">
                  <p className="text-2xl font-medium leading-relaxed text-white/90">
                    «Estou muito satisfeita com a forma como o DeepClinic Copilot me permite dedicar mais tempo ao paciente em
                    Médica Sur e explicar o diagnóstico e o tratamento de maneira mais completa. Bem-vinda a IA que humaniza
                    a consulta».
                  </p>
                  <div className="border-l-2 border-white/20 pl-4">
                    <p className="text-sm font-bold uppercase tracking-wider text-white">Diana Martínez</p>
                    <p className="text-sm text-white/50">Pediatra • Médica Sur</p>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* CITA EM DESTAQUE */}
      <section className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <MotionReveal>
            <p className="text-3xl font-medium leading-snug text-white/90 sm:text-4xl">
              &quot;Depois que você experimenta o DeepClinic Copilot,<br className="hidden sm:inline" /> não quer voltar atrás.&quot;
            </p>
            <div className="mt-6 text-lg tracking-[0.3em] text-white/40">★★★★★</div>
            <div className="mt-8 flex flex-col items-center gap-4 text-sm text-white/60">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10 bg-white/5">
                <Image
                  src="/6810bcac6fc499ede820f7a0_Juan Mora.png.png"
                  alt="Foto de Diana Martínez"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-white">Diana Martínez</p>
                <p className="text-xs text-white/50">Médica Sur</p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* TESTEMUNHOS */}
      <section id="historias" className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-16 text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                Médicos encantados
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                Nós gostamos do DeepClinic Copilot. Os nossos usuários, ainda mais.
              </p>
            </MotionReveal>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                text: "Usar o DeepClinic Copilot não é apenas estar em dia com os últimos avanços tecnológicos. É, acima de tudo, uma questão de boa prática clínica. O DeepClinic Copilot evita que eu passe 2 horas por dia digitando e 15 minutos com os pacientes. Depois que você experimenta, não quer voltar atrás.",
                name: "Diana Martínez",
                role: "Médica Sur",
                img: "/6810bcac6fc499ede820f7a0_Juan Mora.png.png"
              },
              {
                text: "Enquanto examino o paciente e converso com ele de forma natural, o DeepClinic Copilot transcreve e estrutura todas as informações clínicas com precisão, mesmo em casos complexos. O maior benefício: o aplicativo redige automaticamente as histórias clínicas, o que me fez ganhar até 2 horas diárias de trabalho administrativo.",
                name: "Carlos Alberto Encinas Ullán",
                role: "Cirurgião ortopédico, Hospital Universitário",
                img: "/681068922ceb2a1128818e85_Carlos Alberto Encinas.png"
              },
              {
                text: "Implementámos o DeepClinic Copilot nas nossas clínicas e estamos muito satisfeitos com a forma como ele melhora a dinâmica do atendimento. Agora é mais fácil para os nossos médicos olhar nos olhos dos pacientes, em vez de para o computador.",
                name: "Hugo Queijeiro Pintos",
                role: "Diretor médico, Clínicas Gaias",
                img: "/6810688005f18fd45c2ca548_Hugo Queijeiro profile.png"
              },
              {
                text: "Em um contexto complexo como a hospitalização domiciliar pediátrica, com múltiplos interlocutores e conversas prolongadas, o DeepClinic Copilot mantém as histórias clínicas precisas e completas. Fico tranquilo sabendo que nada do que os pais comentam sobre os meus pacientes será esquecido.",
                name: "Jose Fernández Cuesta Peñafiel",
                role: "Pediatra, hospitalização domiciliar pediátrica",
                img: "/681068a3197614922f294a3e_Jose Fernández Cuesta Peñafiel.jpeg"
              }
            ].map((item, i) => (
              <MotionReveal key={i} delayMs={i * 100} className="h-full">
                <figure className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 text-left transition-colors hover:bg-white/10">
                  <blockquote className="space-y-4">
                    <div className="text-white/40 text-sm tracking-widest">★★★★★</div>
                    <p className="text-[14px] leading-relaxed text-white/80">
                      “{item.text}”
                    </p>
                  </blockquote>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/5">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-white">{item.name}</p>
                      <p className="text-[12px] text-white/50">{item.role}</p>
                    </div>
                  </div>
                </figure>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACTO EM NÚMEROS */}
      <section className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <MotionReveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                Impacto em números
              </p>
              <h2 className="mt-4 text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                Quanto um médico pode ganhar por consulta usando o DeepClinic Copilot?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] text-white/50">
                Ajuste os seus números e veja quantas horas pode economizar, quantas consultas adicionais pode atender e
                quanto de receita extra pode gerar a cada mês.
              </p>
            </MotionReveal>
          </div>
          <MotionReveal delayMs={200}>
            <div className="mx-auto max-w-3xl">
              <BenefitsSimulator variant="compact" theme="dark" language="pt" />
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* SEGURANÇA */}
      <section id="seguranca" className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          {/* Título e subtítulo centralizados */}
          <div className="text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                Priorizamos a segurança e a integridade
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                O DeepClinic Copilot segue os mais altos padrões de segurança e proteção de dados.
              </p>
            </MotionReveal>
          </div>

          {/* Linha de 3 bullets */}
          <div className="mt-16 grid gap-10 text-center md:grid-cols-3">
            {[
              {
                title: "HIPAA e normas de saúde brasileiras",
                desc: "O DeepClinic Copilot foi desenhado para se alinhar a marcos de proteção de dados de saúde na América Latina e na América do Norte, incluindo HIPAA e regulamentações nacionais aplicáveis ao prontuário clínico."
              },
              {
                title: "Menos documentação manual",
                desc: "Nossa solução de voz permite que profissionais de saúde foquem no paciente, reduzindo ao mínimo a necessidade de digitação manual."
              },
              {
                title: "Dados tratados nas Américas",
                desc: "Todos os dados são criptografados e processados em centros de dados localizados nas Américas, em conformidade com a legislação aplicável."
              }
            ].map((item, i) => (
              <MotionReveal key={i} delayMs={i * 100}>
                <div className="rounded-[24px] border border-white/5 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04]">
                  <div className="mb-4 text-sky-400">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-[14px] font-bold uppercase tracking-wide text-white">
                    {item.title}
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/50">
                    {item.desc}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>

          {/* Bloco inferior com imagem e texto */}
          <div className="mt-20 grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center">
            <MotionReveal delayMs={400}>
              <div className="space-y-6 text-left">
                <h3 className="text-[24px] font-semibold leading-tight text-white">
                  A confiança de mais de 1.000 médicos em toda a América
                </h3>
                <p className="text-[15px] leading-relaxed text-white/60">
                  Baseado nos mais altos padrões de segurança, o DeepClinic Copilot oferece documentação clínica baseada em IA
                  de forma segura e confiável.
                </p>
                <p className="text-[15px] leading-relaxed text-white/60">
                  De grandes redes hospitalares a clínicas especializadas, os profissionais de saúde utilizam o Copiloto
                  Médico para ganhar tempo, qualidade e tranquilidade em cada consulta.
                </p>
                <Link
                  href="/pt/data-security"
                  className="inline-flex items-center text-[13px] font-bold uppercase tracking-wider text-white transition-colors hover:text-sky-300"
                >
                  Saiba mais sobre nossos protocolos de segurança <span className="ml-2">→</span>
                </Link>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 py-32 border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
          <MotionReveal>
            <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
              Começar a usar o DeepClinic Copilot é muito fácil
            </h2>
            <p className="mt-4 text-[16px] text-white/50">
              Não são necessários dados de pagamento. Comece em 5 minutos.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
              >
                Comece grátis
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="recursos"
        className="border-t border-white/10"
      >
        <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-white/60 sm:text-[13px]">
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <Link
              href="/pt/product"
              className="hover:text-white transition-colors"
            >
              Produto
            </Link>
            <Link
              href="/pt/pricing"
              className="hover:text-white transition-colors"
            >
              Preços
            </Link>
            <Link
              href="/pt/about"
              className="hover:text-white transition-colors"
            >
              Empresa
            </Link>
            <Link
              href="/pt/login"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Entrar
            </Link>
            <Link
              href="/pt/contact"
              className="hover:text-white transition-colors"
            >
              Contato
            </Link>
          </nav>
          <div className="mt-8 text-center text-white/40">
            <p>&copy; {new Date().getFullYear()} DeepClinic Copilot. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
