import Link from "next/link";

import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function CustomerStoriesPageEn() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav lang="en" />

      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <MotionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-sans text-[42px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[56px]">
                Customer stories
              </h1>
              <p className="mt-6 text-[16px] leading-relaxed text-white/60">
                Read how clinicians and healthcare organisations use DeepClinic Copilot to save time on documentation and focus
                more on patients. Below you can explore a selection of detailed case studies or request a demo to see them
                in context.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-[13px]">
                <Link
                  href="/en/customer-stories/familjelakarna"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-white transition-colors hover:bg-white/10"
                >
                  Familjeläkarna
                </Link>
                <Link
                  href="/en/customer-stories/mindler"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-white transition-colors hover:bg-white/10"
                >
                  Mindler
                </Link>
                <Link
                  href="/en/customer-stories/recoletas"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-white transition-colors hover:bg-white/10"
                >
                  Recoletas
                </Link>
                <Link
                  href="/en/customer-stories/praktikertjanst"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-white transition-colors hover:bg-white/10"
                >
                  Praktikertjänst
                </Link>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
