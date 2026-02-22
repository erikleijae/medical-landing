import Link from "next/link";

export default function NewsPageEn() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Updates</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          DeepClinic Copilot news and articles
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          We are rebuilding our news section to reflect the DeepClinic Copilot brand. Soon you will find here case studies,
          collaborations with healthcare organisations and product updates.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          In the meantime, if you would like to learn how AI clinical assistants are being used in organisations similar
          to yours, you can get in touch with our team.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/en/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
          >
            Talk to a specialist
            <span className="ml-1" aria-hidden>
              
            </span>
          </Link>
          <Link href="/en/customer-stories" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            View customer stories
          </Link>
        </div>
      </div>
    </main>
  );
}
