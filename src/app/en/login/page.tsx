import Link from "next/link";

import { LocaleSelector } from "../../../components/locale-selector";

export default function LoginPageEn() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-4 py-10 md:px-8">
        <div className="mb-10 flex items-center gap-2 md:mb-12">
          <div className="flex items-center">
            <span className="inline-block h-6 w-6 rounded-full border border-slate-900 bg-slate-900" />
            <span className="-ml-3 inline-block h-6 w-6 rounded-full border border-slate-900" />
          </div>
          <span className="text-[18px] font-semibold tracking-tight text-slate-900">Copiloto Médico</span>
        </div>

        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
          <section className="flex justify-center">
            <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm sm:p-8">
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <span aria-hidden>🌐</span>
                  <span>Americas (English)</span>
                </span>
              </div>

              <div className="mt-6">
                <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-[26px]">Log in</h1>
                <p className="mt-2 text-sm text-slate-500">to continue to Copiloto Médico</p>
              </div>

              <form className="mt-6 space-y-4" action="#" method="post" autoComplete="off">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-slate-800">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    placeholder="email@example.com"
                    className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-black px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-white"
                >
                  Continue
                </button>

                <p className="text-[11px] text-slate-500">
                  By logging in you accept our{" "}
                  <Link
                    href="/en/terms-of-service"
                    className="underline underline-offset-2 hover:text-slate-900"
                  >
                    Terms of Service
                  </Link>
                  .
                </p>
              </form>

              <p className="mt-6 text-center text-[11px] text-slate-500">
                Don&apos;t have an account?{" "}
                <Link
                  href="/en/signup"
                  className="font-medium text-slate-900 underline-offset-2 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </section>

          <aside className="flex justify-center">
            <div className="w-full max-w-md text-center text-[11px] text-slate-600">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-200/80 via-emerald-100 to-slate-100 p-8 shadow-sm">
                <div className="pointer-events-none absolute -left-12 top-10 h-40 w-40 rounded-full bg-emerald-300/70 blur-2xl" />
                <div className="pointer-events-none absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-emerald-200/60 blur-2xl" />

                <div className="relative space-y-3 text-left text-[11px]">
                  <div className="inline-flex max-w-xs rounded-2xl bg-slate-900 px-4 py-2 text-slate-50 shadow-sm">
                    <p>&quot;The patient has a history of…&quot;</p>
                  </div>
                  <div className="inline-flex max-w-xs rounded-2xl bg-white/90 px-4 py-2 text-slate-700 shadow-sm">
                    <p>&quot;My assessment is…&quot;</p>
                  </div>
                </div>
              </div>

              <p className="mt-4 font-semibold text-slate-700">Tip: provide Copiloto Médico with more context</p>
              <p className="mt-1 text-slate-500">
                You&apos;ll get better draft notes if you capture the key information before and after the consultation.
              </p>
            </div>
          </aside>
        </div>

        <LocaleSelector />
      </div>
    </main>
  );
}
