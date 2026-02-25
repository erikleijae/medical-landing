import Link from "next/link";

import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function NewsPagePt() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav lang="pt" />

      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <MotionReveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Atualizações</p>
            <h1 className="mt-6 font-sans text-[42px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[56px]">
              Notícias e artigos do DeepClinic Copilot
            </h1>
          </MotionReveal>

          <MotionReveal delayMs={100}>
            <p className="mt-8 text-[16px] leading-relaxed text-white/60">
              Estamos a reconstruir a secção de notícias para refletir a nova marca DeepClinic Copilot. Em breve irá encontrar
              aqui casos de utilização, colaborações com organizações de saúde e novidades do produto.
            </p>
            <p className="mt-6 text-[16px] leading-relaxed text-white/60">
              Entretanto, se quiser saber como a IA clínica está a ser utilizada em organizações semelhantes à sua, pode falar
              diretamente com a nossa equipa.
            </p>
          </MotionReveal>

          <MotionReveal delayMs={200}>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Link
                href="/pt/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
              >
                Falar com um especialista
                <span className="ml-2" aria-hidden>
                  →
                </span>
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}

