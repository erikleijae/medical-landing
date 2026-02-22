import Link from "next/link";

import { BenefitsSimulator } from "../../../components/benefits-simulator";

export default function BenefitsSimulatorPageEn() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-3 py-2 md:px-5 lg:px-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="inline-block h-6 w-6 rounded-full border border-slate-900 bg-slate-900" />
              <span className="-ml-3 inline-block h-6 w-6 rounded-full border border-slate-900" />
            </div>
            <Link href="/en" className="text-[18px] font-semibold tracking-tight text-slate-900">
              DeepClinic Copilot
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

      {/* SIMULATOR + TITLE */}
      <section className="bg-slate-50/60">
        <div className="mx-auto max-w-3xl px-6 pb-20 pt-14 md:px-8 lg:px-0">
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Benefits simulator</p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1 text-[11px] font-semibold text-slate-50">
              <span>Designed for clinicians</span>
              <span className="h-1 w-1 rounded-full bg-slate-50/60" />
              <span>Estimate your return in under 1 minute</span>
            </div>
            <h1 className="mt-4 font-display text-[28px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[32px] md:text-[34px]">
              How much time and revenue can DeepClinic Copilot unlock per visit?
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-[14px] text-slate-600">
              Estimate the economic impact of using DeepClinic Copilot in your practice.
            </p>
          </div>

          <BenefitsSimulator language="en" />
        </div>
      </section>
    </main>
  );
}
