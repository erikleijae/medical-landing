import Link from "next/link";

export default function AccurxPartnershipNewsPageEn() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">News</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Copiloto Médico partners with Accurx
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          Copiloto Médico has partnered with Accurx to bring AI-assisted documentation to thousands of healthcare
          professionals.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          This collaboration makes it easier for clinical teams already using Accurx tools to add Copiloto Médico to
          their daily workflow with minimal friction.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          We will share more details about this collaboration as we progress with deployments and first results.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/en/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
          >
            Talk to our team
            <span className="ml-1" aria-hidden>
              
            </span>
          </Link>
          <Link href="/en/news" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Back to news
          </Link>
        </div>
      </div>
    </main>
  );
}
