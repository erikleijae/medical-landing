import Link from "next/link";

export default function HelpCenterPageEn() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Help</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          DeepClinic Copilot help center
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          We are setting up a new help center for DeepClinic Copilot. Here you will soon find quick guides, FAQs and
          onboarding resources for your organisation.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          In the meantime, our support team can help you directly with product questions, training or deployments.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/en/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
          >
            Contact support
            <span className="ml-1" aria-hidden>
              
            </span>
          </Link>
          <Link href="/en" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
