import { BenefitsSimulator } from "../../../components/benefits-simulator";
import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function BenefitsSimulatorPage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav />

      {/* SIMULADOR + TÍTULO */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 md:px-8 lg:px-0">
          <div className="mb-12 text-center">
            <MotionReveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                Simulador de beneficios
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium text-white/80">
                <span>Diseñado para médicos</span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span>Calcula tu retorno en menos de 1 minuto</span>
              </div>
              <h1 className="mt-6 font-sans text-[32px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[42px]">
                ¿Cuánto gana el médico por consulta usando DeepClinic Copilot?
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-white/60">
                Calcula el impacto económico de usar DeepClinic Copilot.
              </p>
            </MotionReveal>
          </div>

          <MotionReveal delayMs={200}>
            <BenefitsSimulator theme="dark" />
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
