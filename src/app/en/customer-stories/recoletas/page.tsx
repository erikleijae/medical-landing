import Image from "next/image";
import Link from "next/link";

export default function RecoletasStoryPageEn() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 md:px-6 lg:px-0">
          <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Customer story</p>
              <h1 className="mt-3 font-display text-[30px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[34px] md:text-[40px]">
                Recoletas brings AI‑assisted documentation to dozens of hospitals and clinics
              </h1>
              <p className="mt-4 text-[15px] text-slate-600">
                The Recoletas hospital group aims to reduce the time clinicians spend writing clinical notes while
                maintaining the level of detail and quality of documentation.
              </p>
              <p className="mt-3 text-sm text-slate-600">
                With Copiloto Médico, specialists can focus more on the conversation with the patient while the tool
                generates structured drafts of each visit in the background.
              </p>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">At a glance</p>
              <ul className="mt-3 space-y-2 text-xs text-slate-700">
                <li>
                  <span className="font-semibold text-slate-900">Organisation type:</span> network of private hospitals
                  and clinics.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Objective:</span> gain time per visit without reducing
                  the quality of the clinical record.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Expected result:</span> less time typing and more direct
                  contact with patients.
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
                src="/68a701201d6e0dcd3137fbbf_recoletas-p-500.avif"
                alt="Healthcare professional in a Recoletas hospital"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 26rem, 100vw"
              />
            </div>
            <div className="space-y-4 text-sm text-slate-700">
              <h2 className="text-[22px] font-semibold tracking-tight text-slate-900 sm:text-[24px]">
                Fewer administrative tasks at the end of the day
              </h2>
              <p>
                Before using Copiloto Médico, part of the documentation was completed outside clinic hours. This added
                extra workload for teams and made it harder to maintain a sustainable pace.
              </p>
              <p>
                By introducing an AI clinical assistant, notes are generated during the visit and are ready to review and
                send to the electronic health record system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-0">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4 text-sm text-slate-700">
              <h2 className="text-[20px] font-semibold tracking-tight text-slate-900 sm:text-[22px]">
                A more sustainable workflow for teams
              </h2>
              <ul className="mt-2 space-y-2 text-xs text-slate-700">
                <li>Automatically generated draft clinical notes for every consultation.</li>
                <li>Less time spent dictating and writing manual notes.</li>
                <li>Greater capacity to see patients without extending the working day.</li>
              </ul>
            </div>

            <div className="space-y-4 rounded-3xl bg-slate-50 p-6 text-sm text-slate-700 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Clinician‑centred AI</p>
              <p className="text-sm text-slate-900">
                Copiloto Médico is designed so that the focus stays on the patient. The tool accompanies the consultation
                without interrupting the clinical conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center text-slate-50 md:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Get started</p>
          <h2 className="mt-4 text-[26px] font-semibold tracking-tight sm:text-[30px]">
            Bring this model to your organisation
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300">
            Try Copiloto Médico with your own workflow and see how it changes the way you document each visit.
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
