import Link from "next/link";

function HeaderEn() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4 md:px-8 lg:px-10">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="inline-block h-6 w-6 rounded-full border border-slate-900 bg-slate-900" />
            <span className="-ml-3 inline-block h-6 w-6 rounded-full border border-slate-900" />
          </div>
          <span className="text-[18px] font-semibold tracking-tight text-slate-900">Copiloto Médico</span>
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
              →
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function ProductPageEn() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <HeaderEn />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-display text-[32px] font-semibold tracking-tight text-slate-900 sm:text-[36px]">
              Product
            </h1>
            <p className="mt-3 text-sm text-slate-600 sm:text-[15px]">
              Learn how Copiloto Médico helps clinicians document visits faster and more accurately with an AI medical
              scribe. This English product page is being expanded; for now you can explore the main overview on the home
              page and request a demo to see it in action.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
