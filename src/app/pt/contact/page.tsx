import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function ContactPagePt() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav lang="pt" />

      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-stretch md:px-8 lg:px-0">
          {/* LEFT SIDE: TESTIMONIAL / TRUST */}
          <div className="flex-1 rounded-[24px] border border-white/10 bg-white/5 p-8 md:p-10">
            <MotionReveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                Utilizado por +1.000 grupos de saúde
              </p>

              <div className="mt-8 flex min-h-[260px] flex-col justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-10 sm:min-h-[320px]">
                <div className="space-y-4">
                  <p className="text-[22px] font-medium leading-snug text-white/90 sm:text-[26px]">
                    &quot;Com o DeepClinic Copilot podemos focar totalmente no paciente sem nos preocupar com a digitação de notas.&quot;
                  </p>
                  <p className="text-[14px] leading-relaxed text-white/60">
                    O assistente clínico com IA ajuda a reduzir o tempo gasto em tarefas administrativas e a manter notas
                    detalhadas após cada consulta.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/20" />
                  <div className="space-y-0.5">
                    <p className="text-[13px] font-bold text-white">Diretora Médica</p>
                    <p className="text-[12px] text-white/50">Rede hospitalar na América</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-1.5">
                <span className="inline-block h-1.5 w-4 rounded-full bg-white" />
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/20" />
              </div>
            </MotionReveal>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="w-full md:w-[460px]">
            <MotionReveal delayMs={100}>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Demonstração personalizada
                  </p>
                  <h1 className="text-[20px] font-bold text-white sm:text-[22px]">
                    Fale com a nossa equipa sobre o DeepClinic Copilot
                  </h1>
                  <p className="text-[13px] leading-relaxed text-white/60">
                    Conte-nos um pouco sobre a sua clínica e entraremos em contacto para marcar uma breve demonstração.
                  </p>
                </div>

                <form className="mt-8 space-y-4" action="#" method="post" autoComplete="off">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="firstName" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                        Nome
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="off"
                        placeholder="ex.: Maria"
                        className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/30 focus:bg-white/10"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lastName" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                        Sobrenome
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="off"
                        placeholder="ex.: Silva"
                        className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/30 focus:bg-white/10"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                        E-mail
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="off"
                        placeholder="voce@clinica.com"
                        className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/30 focus:bg-white/10"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                        Telefone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="off"
                        placeholder="+55 11 90000-0000"
                        className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/30 focus:bg-white/10"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="clinic" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                      Clínica ou organização
                    </label>
                    <input
                      id="clinic"
                      name="clinic"
                      type="text"
                      autoComplete="off"
                      placeholder="Nome da clínica"
                      className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/30 focus:bg-white/10"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="interest" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                      Seu interesse no DeepClinic Copilot
                    </label>
                    <textarea
                      id="interest"
                      name="interest"
                      rows={3}
                      autoComplete="off"
                      placeholder="Conte brevemente sua especialidade e como gostaria de usar o DeepClinic Copilot."
                      className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/30 focus:bg-white/10 resize-none"
                    />
                  </div>

                  <div className="space-y-4 pt-2">
                    <label className="flex items-start gap-3 text-[11px] text-white/50">
                      <input
                        type="checkbox"
                        name="consent"
                        className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 text-white focus:ring-white/20"
                      />
                      <span>
                        Concordo em ser contactado sobre o DeepClinic Copilot. Os meus dados pessoais serão tratados de acordo com
                        a política de privacidade aplicável.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-[1.02]"
                    >
                      Agendar demonstração
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-center text-[10px] text-white/30">
                  O DeepClinic Copilot segue rigorosos padrões de segurança e proteção de dados.
                </p>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
