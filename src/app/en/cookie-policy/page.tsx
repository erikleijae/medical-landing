import Link from "next/link";

import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function CookiePolicyPageEn() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav lang="en" />

      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <MotionReveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Legal</p>
            <h1 className="mt-6 font-sans text-[42px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[56px]">
              Cookie policy
            </h1>
            <p className="mt-4 text-sm text-white/50">DeepClinic Copilot</p>
          </MotionReveal>

          <MotionReveal delayMs={100}>
            <p className="mt-8 text-[16px] leading-relaxed text-white/60">
              This Cookie Policy explains how DeepClinic Copilot uses cookies and similar technologies on this website. It
              should be read together with our Privacy Policy, which explains how we handle your personal data more broadly.
            </p>

            <section className="mt-10 space-y-4 text-[15px] leading-relaxed text-white/70">
              <h2 className="text-[18px] font-bold text-white">1. What are cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to
                make websites work, or work more efficiently, as well as to provide information to the site owners.
              </p>
            </section>

            <section className="mt-10 space-y-4 text-[15px] leading-relaxed text-white/70">
              <h2 className="text-[18px] font-bold text-white">2. How we use cookies</h2>
              <p>On this website we may use cookies to:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-white/40">
                <li>remember your language or region preferences;</li>
                <li>understand how visitors use the site so we can improve its performance and content;</li>
                <li>keep the site secure and prevent misuse.</li>
              </ul>
              <p>
                We do not use cookies on this marketing site to build individual advertising profiles. Where analytics tools
                are used, data is typically aggregated and pseudonymised.
              </p>
            </section>

            <section className="mt-10 space-y-4 text-[15px] leading-relaxed text-white/70">
              <h2 className="text-[18px] font-bold text-white">3. Managing cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings, including blocking or deleting them.
                If you choose to block cookies, some parts of the site may not function properly.
              </p>
            </section>

            <section className="mt-10 space-y-4 text-[15px] leading-relaxed text-white/70">
              <h2 className="text-[18px] font-bold text-white">4. More information</h2>
              <p>
                For more information on how we process your personal data, please refer to our Privacy Policy:
              </p>
              <p>
                <Link href="/en/privacy-policy" className="text-[14px] font-bold text-white hover:underline decoration-white/30 hover:decoration-white underline-offset-4 transition-all">
                  Privacy Policy
                </Link>
              </p>
            </section>

            <p className="mt-12 text-xs text-white/30">Last updated: October 5th, 2025</p>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
