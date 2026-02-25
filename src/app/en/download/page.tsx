import Link from "next/link";

import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function DownloadPageEn() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav lang="en" />

      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
          <MotionReveal>
            <header className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Download</p>
              <h1 className="mt-6 font-sans text-[42px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[56px]">
                Use DeepClinic Copilot wherever you work
              </h1>
              <p className="mt-6 text-[16px] leading-relaxed text-white/60">
                Use DeepClinic Copilot in the clinic or remotely. Download the desktop app and browser extensions to securely
                transfer your notes into your clinical systems.
              </p>
            </header>
          </MotionReveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {/* WINDOWS APP */}
            <MotionReveal delayMs={100} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 text-sm transition-colors hover:bg-white/10">
                <div>
                  <h2 className="text-[18px] font-bold text-white">Windows</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Enables full use of DeepClinic Copilot for video or phone calls (by capturing the patient&apos;s audio) and
                    allows secure transfer of notes to local electronic health record systems.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="https://tandemhealth.blob.core.windows.net/tandem-public/native/Tandem-win-Setup.exe"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
                  >
                    Download for Windows
                    <span className="ml-2" aria-hidden>
                      ↓
                    </span>
                  </Link>
                </div>
              </article>
            </MotionReveal>

            {/* WEB PLUGIN */}
            <MotionReveal delayMs={200} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 text-sm transition-colors hover:bg-white/10">
                <div>
                  <h2 className="text-[18px] font-bold text-white">Web plugin</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Browser extension for Chrome, Edge and Firefox. Lets you automatically transfer DeepClinic Copilot notes
                    into your web-based electronic health record system.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="https://chromewebstore.google.com/detail/tandem-health/agcaglfappbihcbbngkdbiegfjfdcjeg"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
                  >
                    Download web plugin
                    <span className="ml-2" aria-hidden>
                      ↓
                    </span>
                  </Link>
                </div>
              </article>
            </MotionReveal>

            {/* IOS AND ANDROID */}
            <MotionReveal delayMs={300} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 text-sm transition-colors hover:bg-white/10">
                <div>
                  <h2 className="text-[18px] font-bold text-white">iOS and Android</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Access DeepClinic Copilot from your phone. Log in with your account to use the app on iOS and Android.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="/en/login"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105"
                  >
                    Log in from your phone
                    <span className="ml-2" aria-hidden>
                      →
                    </span>
                  </Link>
                </div>
              </article>
            </MotionReveal>

            {/* EDGE PLUGIN */}
            <MotionReveal delayMs={400} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 text-sm transition-colors hover:bg-white/10">
                <div>
                  <h2 className="text-[18px] font-bold text-white">Edge plugin</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Browser extension for Microsoft Edge. Lets you automatically transfer DeepClinic Copilot notes into your
                    web-based clinical system.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="https://microsoftedge.microsoft.com/addons/detail/tandem-health/jiknejnipfgajfkpbbdpfldkkdjpejja"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
                  >
                    Download for Edge
                    <span className="ml-2" aria-hidden>
                      ↓
                    </span>
                  </Link>
                </div>
              </article>
            </MotionReveal>

            {/* FIREFOX PLUGIN */}
            <MotionReveal delayMs={500} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 text-sm transition-colors hover:bg-white/10">
                <div>
                  <h2 className="text-[18px] font-bold text-white">Firefox plugin</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Browser extension for Firefox. Lets you automatically transfer DeepClinic Copilot notes into your web-based
                    clinical system.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="https://addons.mozilla.org/en-GB/firefox/addon/tandem-health/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
                  >
                    Download for Firefox
                    <span className="ml-2" aria-hidden>
                      ↓
                    </span>
                  </Link>
                </div>
              </article>
            </MotionReveal>

            {/* WINDOWS MSI INSTALLER */}
            <MotionReveal delayMs={600} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 text-sm transition-colors hover:bg-white/10">
                <div>
                  <h2 className="text-[18px] font-bold text-white">Windows MSI installer</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    For deployment on multiple computers. Requirements: Windows 10/11 with .NET 8. Administrator privileges
                    required.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="https://tandemhealth.blob.core.windows.net/tandem-public/launchable-native/Tandem%20Installer.msi"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
                  >
                    Download MSI installer
                    <span className="ml-2" aria-hidden>
                      ↓
                    </span>
                  </Link>
                </div>
              </article>
            </MotionReveal>

            {/* INFORMATION SHEETS */}
            <MotionReveal delayMs={700} className="h-full md:col-span-2">
              <article className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 text-sm transition-colors hover:bg-white/10">
                <div>
                  <h2 className="text-[18px] font-bold text-white">Information sheets (PDF)</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Documents for clinics and patients explaining what DeepClinic Copilot is and how we protect patient
                    information.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="https://cdn.prod.website-files.com/67ef895ebcae5ebab6aa5d30/6812429f2395a1dd394e2ce0_hojas%20informativas.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105"
                  >
                    Download information sheets
                    <span className="ml-2" aria-hidden>
                      ↓
                    </span>
                  </Link>
                </div>
              </article>
            </MotionReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
