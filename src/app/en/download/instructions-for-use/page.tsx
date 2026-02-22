import Link from "next/link";

export default function InstructionsForUsePageEn() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Resources</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Instructions for use of DeepClinic Copilot
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          We are migrating official instructions for use and other regulatory documentation to this DeepClinic Copilot
          site. Here you will find updated and localised versions of these documents.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          If you need immediate access to the instructions for use for a specific deployment, you can request the
          documents directly from our team.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/en/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
          >
            Request documentation
            <span className="ml-1" aria-hidden>
              
            </span>
          </Link>
          <Link href="/en/download" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Back to downloads
          </Link>
        </div>
      </div>
    </main>
  );
}
