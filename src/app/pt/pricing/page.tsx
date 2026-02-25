import Link from "next/link";

import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function PricingPagePt() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav lang="pt" />

      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <MotionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Preços</p>
              <h1 className="mt-6 font-sans text-[42px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[56px]">
                Preços
              </h1>
              <p className="mt-6 text-[16px] leading-relaxed text-white/60">
                O DeepClinic Copilot é oferecido como um serviço por assinatura para profissionais individuais e organizações.
                A tabela de preços para América Latina está sendo finalizada; se quiser uma proposta, entre em contato com o
                nosso time.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="/pt/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
                >
                  Falar com vendas
                  <span className="ml-2" aria-hidden>
                    →
                  </span>
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105"
                >
                  Experimentar grátis
                </Link>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
