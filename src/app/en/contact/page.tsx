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

export default function ContactPageEn() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <HeaderEn />
      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-start md:px-6 lg:px-0">
          <div className="flex-1 rounded-3xl bg-slate-50 p-6 md:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Used by 1,000+ healthcare groups
            </p>
            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <p className="text-[22px] font-medium leading-snug text-slate-900 sm:text-[26px]">
                &quot;With Copiloto Médico we can focus entirely on the patient without worrying about typing notes.&quot;
              </p>
              <p>
                Copiloto Médico reduces the time spent on administrative tasks and helps keep detailed clinical notes after
                each visit.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[420px] lg:w-[460px]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7 lg:p-8">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Personalised demo</p>
                <h1 className="text-lg font-semibold text-slate-900 sm:text-xl">
                  Talk to our team about Copiloto Médico
                </h1>
                <p className="text-xs text-slate-500 sm:text-[13px]">
                  Share a few details about your practice and we will contact you to schedule a short demo.
                </p>
              </div>

              <form className="mt-6 space-y-4" action="#" method="post">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="firstName" className="text-xs font-medium text-slate-800">
                      First name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="e.g. Maria"
                      className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="lastName" className="text-xs font-medium text-slate-800">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="e.g. Silva"
                      className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-slate-800">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@clinic.com"
                      className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-medium text-slate-800">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+XX 600 00 00 00"
                      className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="clinic" className="text-xs font-medium text-slate-800">
                    Clinic or organisation
                  </label>
                  <input
                    id="clinic"
                    name="clinic"
                    type="text"
                    placeholder="Clinic name"
                    className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="interest" className="text-xs font-medium text-slate-800">
                    Your interest in Copiloto Médico
                  </label>
                  <textarea
                    id="interest"
                    name="interest"
                    rows={3}
                    placeholder="Tell us briefly about your speciality and how you would like to use Copiloto Médico."
                    className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <label className="flex items-start gap-2 text-[11px] text-slate-600">
                    <input
                      type="checkbox"
                      name="consent"
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                    />
                    <span>
                      I agree to be contacted about Copiloto Médico. My personal data will be processed in accordance with the
                      applicable privacy policy.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-[#d5ff7c] shadow-sm transition hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-white"
                  >
                    Book a demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
