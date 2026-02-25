import { BenefitsSimulator } from "../../../components/benefits-simulator";
import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function BenefitsSimulatorPagePt() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav lang="pt" />

      {/* SIMULADOR + TÍTULO */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 md:px-8 lg:px-0">
          <MotionReveal>
            <div className="mb-12 text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                Simulador de benefícios
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold text-white/80">
                <span>Desenhado para médicos</span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span>Calcule o retorno em menos de 1 minuto</span>
              </div>
              <h1 className="mt-6 font-sans text-[28px] font-bold leading-tight tracking-tighter text-white sm:text-[32px] md:text-[34px]">
                Quanto ganha o médico por consulta ao usar o DeepClinic Copilot?
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-white/60">
                Calcule o impacto económico de utilizar o DeepClinic Copilot na sua prática.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delayMs={100}>
            <BenefitsSimulator language="pt" theme="dark" />
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}

