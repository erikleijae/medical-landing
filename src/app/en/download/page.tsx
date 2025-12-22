import Link from "next/link";

function HeaderEn() {
  return (
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
            href="/signup"
            className="hidden text-slate-700 hover:text-slate-900 sm:inline"
          >
            Sign up
          </Link>
          <Link
            href="/en/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
          >
            Request demo
            <span className="ml-1" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function DownloadPageEn() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <HeaderEn />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-display text-[32px] font-semibold tracking-tight text-slate-900 sm:text-[36px]">
              Download Copiloto Médico
            </h1>
            <p className="mt-3 text-sm text-slate-600 sm:text-[15px]">
              Desktop apps and browser extensions for Windows, macOS and the main browsers are currently documented in
              Spanish. You can still use them with your Copiloto Médico account; if you need help in English, contact our
              team.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              For now, please refer to the Spanish download page for the latest installers and links.
            </p>
            <div className="mt-6">
              <Link
                href="/es/download"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2 text-[13px] font-semibold text-slate-900 hover:bg-slate-50"
              >
                Open Spanish download page
                <span className="ml-1" aria-hidden>
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
