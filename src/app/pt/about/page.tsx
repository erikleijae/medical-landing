import Link from "next/link";

import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function AboutPagePt() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav lang="pt" />

      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <MotionReveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Sobre nós</p>
            <h1 className="mt-6 font-sans text-[42px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[56px]">
              DeepClinic Copilot
            </h1>
          </MotionReveal>

          <MotionReveal delayMs={100}>
            <p className="mt-8 text-[16px] leading-relaxed text-white/60">
              O DeepClinic Copilot é um assistente clínico com inteligência artificial desenhado para reduzir a carga
              administrativa e devolver tempo à relação entre profissionais de saúde e pacientes.
            </p>
            <p className="mt-6 text-[16px] leading-relaxed text-white/60">
              A nossa equipa combina experiência em tecnologia, saúde e design de produto para criar ferramentas que se
              integram na prática clínica diária e respeitam os mais altos padrões de segurança e privacidade.
            </p>
          </MotionReveal>

          <MotionReveal delayMs={200}>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Link
                href="/pt/recruitment"
                className="text-[13px] font-bold uppercase tracking-wider text-white/60 transition-colors hover:text-white"
              >
                Juntar-se à equipa
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
