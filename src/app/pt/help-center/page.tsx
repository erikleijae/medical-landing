import Link from "next/link";

import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function HelpCenterPagePt() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav lang="pt" />

      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <MotionReveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Ajuda</p>
            <h1 className="mt-6 font-sans text-[42px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[56px]">
              Centro de ajuda do DeepClinic Copilot
            </h1>
          </MotionReveal>

          <MotionReveal delayMs={100}>
            <p className="mt-8 text-[16px] leading-relaxed text-white/60">
              Estamos a configurar um novo centro de ajuda para o DeepClinic Copilot. Aqui irá encontrar guias rápidos,
              perguntas frequentes e recursos para a implementação na sua organização.
            </p>
            <p className="mt-6 text-[16px] leading-relaxed text-white/60">
              Enquanto completamos esta migração, a nossa equipa de suporte pode ajudá‑lo diretamente com dúvidas sobre a
              utilização do produto, formação ou deploy em diferentes serviços.
            </p>
          </MotionReveal>

          <MotionReveal delayMs={200}>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Link
                href="/pt/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
              >
                Contactar o suporte
                <span className="ml-2" aria-hidden>
                  →
                </span>
              </Link>
              <Link
                href="/pt"
                className="text-[13px] font-bold uppercase tracking-wider text-white/60 transition-colors hover:text-white"
              >
                Voltar à página inicial
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
