import Image from "next/image";
import Link from "next/link";

export default function MindlerStoryPageEn() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 md:px-6 lg:px-0">
          <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Customer story</p>
              <h1 className="mt-3 font-display text-[30px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[34px] md:text-[40px]">
                Psychologists gaining time between sessions
              </h1>
              <p className="mt-4 text-[15px] text-slate-600">
                Mindler is a remote psychology provider that wanted to reduce the time spent writing notes after each
                session.
              </p>
              <p className="mt-3 text-sm text-slate-600">
                With DeepClinic Copilot, notes are generated during the conversation with the patient, allowing professionals
                to focus on active listening and clinical interventions.
              </p>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">At a glance</p>
              <ul className="mt-3 space-y-2 text-xs text-slate-700">
                <li>
                  <span className="font-semibold text-slate-900">Setting:</span> digital mental health.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Challenge:</span> document consistently without making
                  the working day longer.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Expected benefit:</span> more time between sessions and
                  lower admin burden.
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-0">
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
            <div className="relative h-48 w-full overflow-hidden rounded-3xl bg-[#e5d0ff] md:h-52">
              <Image
                src="/680a17e9f7c495837f0a7ddb_mindler.png"
                alt="Mindler logo"
                fill
                className="object-contain p-6"
                sizes="(min-width: 768px) 26rem, 100vw"
              />
            </div>
            <div className="space-y-4 text-sm text-slate-700">
              <h2 className="text-[22px] font-semibold tracking-tight text-slate-900 sm:text-[24px]">
                Structured notes without slowing down the session
              </h2>
              <p>
                The team needed each session to be clearly documented to support clinical follow‑up, without turning note
                writing into an additional burden.
              </p>
              <p>
                DeepClinic Copilot suggests a structured draft that the professional quickly reviews before sending, keeping
                the quality and level of detail of the documentation.
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
                More focus on the therapeutic relationship
              </h2>
              <p>
                By reducing the time spent writing, psychologists can devote more attention to the relationship with the
                patient and to preparing future sessions.
              </p>
            </div>

            <div className="space-y-4 rounded-3xl bg-slate-50 p-6 text-sm text-slate-700 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">AI as support, not
                replacement</p>
              <p className="text-sm text-slate-900">
                DeepClinic Copilot helps structure documentation, but clinical decisions and therapeutic judgement remain the
                responsibility of the professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center text-slate-50 md:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Get started</p>
          <h2 className="mt-4 text-[26px] font-semibold tracking-tight sm:text-[30px]">
            Apply this model to your team
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300">
            Try DeepClinic Copilot with your organisation and see how it changes the way each session is documented.
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
