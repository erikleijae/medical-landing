import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function CustomerStoriesPagePt() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav lang="pt" />

      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <MotionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-sans text-[42px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[56px]">
                Histórias de clientes
              </h1>
              <p className="mt-6 text-[16px] leading-relaxed text-white/60">
                Médicos, clínicas e redes de saúde utilizam o DeepClinic Copilot para reduzir o tempo de documentação e dedicar
                mais minutos a cada paciente. Estamos preparando estudos de caso completos em português; até lá, você pode
                solicitar uma demonstração personalizada.
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
