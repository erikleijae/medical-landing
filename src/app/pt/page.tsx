import Image from "next/image";
import Link from "next/link";

import { HeroVideo } from "../../components/hero-video";

export default function HomePagePt() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4 md:px-8 lg:px-10">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="inline-block h-6 w-6 rounded-full border border-slate-900 bg-slate-900" />
              <span className="-ml-3 inline-block h-6 w-6 rounded-full border border-slate-900" />
            </div>
            <span className="text-[18px] font-semibold tracking-tight text-slate-900">Copiloto Médico</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-800 lg:flex">
            <Link href="/pt/product" className="hover:text-slate-900">
              Produto
            </Link>
            <Link href="/pt/customer-stories" className="hover:text-slate-900">
              Histórias de clientes
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
              href="/pt/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
            >
              Solicitar demonstração
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
              href="/pt/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-6 py-2.5 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
            >
              Solicitar demonstração
              <span className="ml-1" aria-hidden>
                →
              </span>
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-[13px] font-semibold text-slate-900 hover:bg-slate-50"
            >
              Experimente grátis
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
                  src="/68a701201d6e0dcd3137fbbf_recoletas-p-500.avif"
                  alt="Recoletas escolhe o Copiloto Médico"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-700">
                <p>
                  Recoletas leva a documentação assistida por IA a dezenas de hospitais e clínicas.
                </p>
                <Link
                  href="/es/customer-stories/recoletas"
                  className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                >
                  Ler matéria
                  <span className="ml-1" aria-hidden>
                    →
                  </span>
                </Link>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/68dceef83880f62a4f8c2d15_accrux-p-500.avif"
                  alt="Parceria com a Accurx"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-700">
                <p>
                  O Copiloto Médico se une à Accurx para levar nosso escriba médico com IA a milhares de profissionais.
                </p>
                <Link
                  href="/es/news/accurx-partnership"
                  className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                >
                  Ler matéria
                  <span className="ml-1" aria-hidden>
                    →
                  </span>
                </Link>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/68a46f7b98a3bb8fe304f285_praktikertjänst-p-500.avif"
                  alt="Praktikertjänst confia no Copiloto Médico"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-700">
                <p>
                  Praktikertjänst escolhe o Copiloto Médico para levar documentação assistida por IA ao cuidado diário.
                </p>
                <Link
                  href="/es/customer-stories/praktikertjanst"
                  className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                >
                  Ver vídeo
                  <span className="ml-1" aria-hidden>
                    →
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CITA EM DESTAQUE */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 pb-20 pt-8 text-center">
          <p className="text-3xl font-medium leading-snug text-slate-900 sm:text-4xl">
            "Depois que você experimenta o Copiloto Médico, não quer voltar atrás."
          </p>
          <div className="mt-4 text-lg tracking-[0.3em] text-amber-400">★★★★★</div>
          <div className="mt-6 flex flex-col items-center gap-3 text-sm text-slate-600">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-300">
              <Image
                src="/6810bcac6fc499ede820f7a0_Juan Mora.png"
                alt="Foto de Juan Mora Delgado"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Juan Mora Delgado</p>
              <p className="text-xs text-slate-500">Médico internista, Hospital de Jerez</p>
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

      {/* SEGURANÇA */}
      <section id="seguranca" className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
              Priorizamos a segurança e a integridade
            </h2>
            <p className="mt-3 text-[15px] text-slate-500">
              O Copiloto Médico segue padrões rigorosos de proteção de dados e privacidade de pacientes.
            </p>
          </div>

          <div className="mt-12 grid gap-10 text-center text-sm text-slate-700 sm:text-base md:grid-cols-3">
            <div className="space-y-3">
              <div className="text-sm text-slate-500">
                <span aria-hidden>✓</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">Leis de dados de pacientes e privacidade</p>
              <p className="text-sm text-slate-700">
                Nossa solução está alinhada com regulamentações nacionais rigorosas de dados de saúde e privacidade.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm text-slate-500">
                <span aria-hidden>✓</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">Sem armazenamento de áudio</p>
              <p className="text-sm text-slate-700">
                O áudio é processado em tempo real durante a consulta e não é armazenado após o término do atendimento.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm text-slate-500">
                <span aria-hidden>✓</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">Dados hospedados na América</p>
              <p className="text-sm text-slate-700">
                Todos os dados são criptografados e processados dentro da América, em conformidade com a legislação
                aplicável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="precos" className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
            Começar a usar é muito fácil
          </h2>
          <p className="mt-2 text-[15px] text-slate-600">
            Não é necessário cartão de crédito. Comece em poucos minutos.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pt/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black"
            >
              Solicitar demonstração
              <span className="ml-1" aria-hidden>
                →
              </span>
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Experimente grátis
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
