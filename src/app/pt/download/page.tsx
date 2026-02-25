import Link from "next/link";

import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function DownloadPagePt() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav lang="pt" />

      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
          <MotionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Download</p>
              <h1 className="mt-6 font-sans text-[42px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[56px]">
                Transferir o DeepClinic Copilot
              </h1>
              <p className="mt-6 text-[16px] leading-relaxed text-white/60">
                As aplicações para desktop e as extensões de navegador para Windows, macOS e principais navegadores estão
                documentadas em espanhol. Você pode utilizá-las normalmente com a sua conta do DeepClinic Copilot.
              </p>
              <p className="mt-4 text-[13px] text-white/50">
                Por enquanto, consulte a página de downloads em espanhol para obter os instaladores e links mais recentes.
              </p>
              <div className="mt-8">
                <Link
                  href="/es/download"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105"
                >
                  Abrir página de downloads em espanhol
                  <span className="ml-2" aria-hidden>
                    →
                  </span>
                </Link>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
