import Image from "next/image";
import Link from "next/link";

export default function PraktikertjanstStoryPageEn() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 md:px-6 lg:px-0">
          <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Customer story</p>
              <h1 className="mt-3 font-display text-[30px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[34px] md:text-[40px]">
                Praktikertjänst bets on AI‑assisted documentation
              </h1>
              <p className="mt-4 text-[15px] text-slate-600">
                Praktikertjänst, a large network of clinics in Northern Europe, introduces DeepClinic Copilot to make daily
                documentation easier for its professionals.
              </p>
              <p className="mt-3 text-sm text-slate-600">
                The goal: improve the quality and consistency of clinical notes while freeing up time in each
                consultation schedule.
              </p>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">At a glance</p>
              <ul className="mt-3 space-y-2 text-xs text-slate-700">
                <li>
                  <span className="font-semibold text-slate-900">Organisation type:</span> network of clinics and health
                  centres.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Challenge:</span> maintain documentation quality in a
                  high‑volume care environment.
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-0">
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-100">
              <Image
                src="/68a46f7b98a3bb8fe304f285_praktikertjänst-p-500.avif"
                alt="Clinician using an AI clinical assistant"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 26rem, 100vw"
              />
            </div>
            <div className="space-y-4 text-sm text-slate-700">
              <h2 className="text-[22px] font-semibold tracking-tight text-slate-900 sm:text-[24px]">
                AI as support for clinical workflows
              </h2>
              <p>
                DeepClinic Copilot generates a draft clinical note based on the conversation with the patient, allowing the
                professional to review and complete the necessary details before sending it to the health record system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center text-slate-50 md:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Get started</p>
          <h2 className="mt-4 text-[26px] font-semibold tracking-tight sm:text-[30px]">
            Discover how DeepClinic Copilot can help you
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300">
            Book a demo to see how DeepClinic Copilot fits into the day‑to‑day work of your organisation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/en/signup"
              className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-6 py-2.5 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
            >
              Start for free
              <span className="ml-1" aria-hidden>
                
              </span>
            </Link>
            <Link
              href="/en/signup"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-2.5 text-[13px] font-semibold text-slate-50 hover:bg-slate-800"
            >
              Create free account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
