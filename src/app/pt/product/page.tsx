import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function ProductPagePt() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav lang="pt" />

      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <MotionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Produto</p>
              <h1 className="mt-6 font-sans text-[42px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[56px]">
                Produto
              </h1>
              <p className="mt-6 text-[16px] leading-relaxed text-white/60">
                Conheça como o DeepClinic Copilot ajuda médicos e equipes de saúde a documentar cada consulta com mais rapidez e
                qualidade. Esta página de produto em português será ampliada em breve; por enquanto, você pode explorar a
                visão geral na página inicial e solicitar uma demonstração.
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
