import Image from "next/image";
import Link from "next/link";

export default function FamiljelakarnaStoryPageEn() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="flex items-center justify-between gap-8 px-3 py-2 md:px-5 lg:px-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="inline-block h-6 w-6 rounded-full border border-slate-900 bg-slate-900" />
              <span className="-ml-3 inline-block h-6 w-6 rounded-full border border-slate-900" />
            </div>
            <Link href="/en" className="text-[18px] font-semibold tracking-tight text-slate-900">
              Copiloto Médico
            </Link>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-800 lg:flex">
            <Link href="/en/product" className="hover:text-slate-900">
              Product
            </Link>
            <Link href="/en/customer-stories" className="hover:text-slate-900">
              Customer stories
            </Link>
            <Link href="/en/benefits-simulator" className="hover:text-slate-900">
              Benefits simulator
            </Link>
            <Link href="/en/pricing" className="hover:text-slate-900">
              Pricing
            </Link>
          </nav>

          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/en/login"
              target="_blank"
              rel="noreferrer"
              className="hidden text-slate-700 hover:text-slate-900 sm:inline"
            >
              Log in
            </Link>
            <span className="hidden text-slate-300 sm:inline">|</span>
            <Link
              href="/en/signup"
              className="hidden text-slate-700 hover:text-slate-900 sm:inline"
            >
              Sign up
            </Link>
            <Link
              href="/en/signup"
              className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
            >
              Start for free
              <span className="ml-1" aria-hidden>
                
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* HERO + SUMMARY */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 md:px-6 lg:px-0">
          <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Customer story</p>
              <h1 className="mt-3 font-display text-[30px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[34px] md:text-[40px]">
                How a primary care network increased patient volume by 15% with Copiloto Médico
              </h1>
              <p className="mt-4 text-[15px] text-slate-600">
                Familjeläkarna is a network of primary care clinics that wanted to reduce the time spent on documentation
                in order to see more patients without sacrificing quality.
              </p>
              <p className="mt-3 text-sm text-slate-600">
                With Copiloto Médico, their clinical teams moved from typing notes at the end of the day to having
                structured drafts generated in real time during each consultation.
              </p>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">At a glance</p>
              <ul className="mt-3 space-y-2 text-xs text-slate-700">
                <li>
                  <span className="font-semibold text-slate-900">AI‑generated notes:</span> more than 5,000 draft clinical
                  notes created automatically.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Time saved:</span> up to 1 hour per day per clinician,
                  reducing end‑of‑day admin load.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Additional capacity:</span> ability to see 1–2 more
                  patients per day per clinician.
                </li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                Figures based on the use of AI clinical assistants in networks similar to Familjeläkarna.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* IMAGE / CONTEXT SECTION */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-0">
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-100">
              <Image
                src="/680b8bd084ba7f136270ee2a_testimonial1.webp"
                alt="Primary care professional in consultation with a patient"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 26rem, 100vw"
              />
            </div>
            <div className="space-y-4 text-sm text-slate-700">
              <h2 className="text-[22px] font-semibold tracking-tight text-slate-900 sm:text-[24px]">
                Reducing admin backlog to open more appointment slots
              </h2>
              <p>
                Before Copiloto Médico, Familjeläkarna teams were dealing with documentation backlogs caused by long
                dictations and manual transcription. This added stress and limited how many patients they could see each
                day.
              </p>
              <p>
                By introducing an AI clinical assistant, notes are generated during the visit, in a structured format and
                ready to review, instead of being pushed to the end of the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REAL-TIME NOTES & TIME SAVED */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-0">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4 text-sm text-slate-700">
              <h2 className="text-[20px] font-semibold tracking-tight text-slate-900 sm:text-[22px]">
                Real‑time notes for the whole care team
              </h2>
              <p>
                Copiloto Médico was deployed across different roles: physicians, nurses and mental health professionals.
                During each visit, the tool listens and proposes a structured clinical note draft that the professional
                only needs to review and complete.
              </p>
              <p>
                This way, attention stays on the conversation with the patient while documentation is prepared in the
                background.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <h2 className="text-[20px] font-semibold tracking-tight text-slate-900 sm:text-[22px]">
                Time saved and more visits per day
              </h2>
              <ul className="mt-2 space-y-2 text-xs text-slate-700">
                <li>
                  Around <span className="font-semibold text-slate-900">5 minutes less</span> of documentation per
                  consultation.
                </li>
                <li>
                  Roughly <span className="font-semibold text-slate-900">1 additional free hour</span> per clinician each
                  day.
                </li>
                <li>
                  Capacity to see <span className="font-semibold text-slate-900">1–2 more patients</span> per day without
                  extending working hours.
                </li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">
                These figures may vary depending on patient volume, specialty and specific workflow at each clinic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCALING ACROSS CLINICS */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-0">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] md:items-center">
            <div className="space-y-4 text-sm text-slate-700">
              <h2 className="text-[20px] font-semibold tracking-tight text-slate-900 sm:text-[22px]">
                Scaling efficiency across all clinics
              </h2>
              <p>
                What started as a pilot in a few sites quickly expanded to the rest of the network. Once professionals
                experience the change in their day‑to‑day work, it becomes hard to imagine going back to writing every note
                by hand.
              </p>
              <p>
                With thousands of notes generated automatically, Copiloto Médico becomes a central part of the clinical
                workflow, not only for physicians but for the whole care team.
              </p>
            </div>

            <div className="space-y-4 rounded-3xl bg-slate-50 p-6 text-sm text-slate-700 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Clinician‑centred AI</p>
              <p className="text-sm text-slate-900">
                Copiloto Médico is designed to reinforce the clinician‑patient relationship, not replace it.
              </p>
              <p className="text-xs text-slate-600">
                By removing documentation friction and automating a large share of the notes, professionals can devote
                more attention and empathy to each encounter while maintaining clinical and regulatory standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-2xl font-medium leading-snug text-slate-900 sm:text-3xl">
            &quot;Once you start working with an AI clinical assistant, it is hard to imagine going back to writing all the
            documentation yourself. The difference in time and peace of mind is noticeable in every visit.&quot;
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 text-sm text-slate-600">
            <div className="h-12 w-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-sm font-semibold text-slate-900">Primary care professional</p>
              <p className="text-xs text-slate-500">Clinic network similar to Familjeläkarna</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center text-slate-50 md:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Get started</p>
          <h2 className="mt-4 text-[26px] font-semibold tracking-tight sm:text-[30px]">
            Bring this model to your clinic
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300">
            Try Copiloto Médico with your team and see how it changes documentation and your scheduling capacity.
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
