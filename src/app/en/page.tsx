import Image from "next/image";
import Link from "next/link";

import { HeroVideo } from "../../components/hero-video";

export default function HomePageEn() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
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

      {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-12 pt-20 text-center md:px-8 md:pb-16 md:pt-24 lg:px-0">
          <h1 className="font-display text-[38px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[44px] md:text-[50px]">
            The leading AI clinical assistant in{' '}
            <span className="border-b-[6px] border-[#d5ff7c] pb-1">America</span>
          </h1>
          <p className="mt-3 text-[15px] text-slate-500 sm:mt-4">
            Over 1,000 healthcare organizations are saving hours of administrative work every day with Copiloto Médico.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/en/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-6 py-2.5 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
            >
              Request demo
              <span className="ml-1" aria-hidden>
                →
              </span>
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-[13px] font-semibold text-slate-900 hover:bg-slate-50"
            >
              Try it for free
            </Link>
          </div>
        </div>

        {/* LOGOS */}
        <div className="mx-auto max-w-6xl px-6 pb-8 md:px-8 lg:px-0">
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <Image
              src="/logos/doktorse.svg"
              alt="Doktor.Se"
              width={120}
              height={32}
              className="h-6 w-auto opacity-80"
            />
            <Image
              src="/680a6f5dd62951a5097ddab2_nhs.svg"
              alt="NHS"
              width={90}
              height={32}
              className="h-6 w-auto opacity-80"
            />
            <Image
              src="/680a970e6d5665751f6bfcb8_gaias.png"
              alt="Clínicas Gaias"
              width={110}
              height={32}
              className="h-6 w-auto opacity-80"
            />
            <Image
              src="/680e64029f546840cd0fa79f_Arriaza.svg"
              alt="Clínica Arriaza"
              width={110}
              height={32}
              className="h-6 w-auto opacity-80"
            />
            <Image
              src="/680e793ec5490e5100c376a2_CGM.svg"
              alt="CompuGroup Medical"
              width={120}
              height={32}
              className="h-6 w-auto opacity-80"
            />
            <Image
              src="/680a6ef48f51aabf2425eca5_ncl icb.svg"
              alt="North Central London ICB"
              width={120}
              height={32}
              className="h-6 w-auto opacity-80"
            />
          </div>
        </div>

        <HeroVideo />
      </section>

      {/* COPILOTO EN LA PRÁCTICA */}
      <section id="product" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12">
          <div className="text-center">
            <h2 className="text-[28px] font-semibold tracking-tight text-slate-900 sm:text-[32px]">
              Copiloto Médico in practice
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              More than 1,000 healthcare organizations already trust us.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/68a701201d6e0dcd3137fbbf_recoletas-p-500.avif"
                  alt="Recoletas chooses Copiloto Médico"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-700">
                <p>
                  Recoletas brings AI‑assisted documentation to dozens of hospitals and clinics.
                </p>
                <Link
                  href="/es/customer-stories/recoletas"
                  className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                >
                  Read article
                  <span className="ml-1" aria-hidden>
                    →
                  </span>
                </Link>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/68dceef83880f62a4f8c2d15_accrux-p-500.avif"
                  alt="Partnership with Accurx"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-700">
                <p>
                  Copiloto Médico partners with Accurx to bring our AI medical scribe to thousands of professionals.
                </p>
                <Link
                  href="/es/news/accurx-partnership"
                  className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                >
                  Read article
                  <span className="ml-1" aria-hidden>
                    →
                  </span>
                </Link>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/68a46f7b98a3bb8fe304f285_praktikertjänst-p-500.avif"
                  alt="Praktikertjänst trusts Copiloto Médico"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-700">
                <p>
                  Praktikertjänst chooses Copiloto Médico to bring AI‑assisted documentation to everyday care.
                </p>
                <Link
                  href="/es/customer-stories/praktikertjanst"
                  className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                >
                  Watch video
                  <span className="ml-1" aria-hidden>
                    →
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTED QUOTE */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 pb-20 pt-8 text-center">
          <p className="text-3xl font-medium leading-snug text-slate-900 sm:text-4xl">
            “Once you try Copiloto Médico, you don’t want to go back.”
          </p>
          <div className="mt-4 text-lg tracking-[0.3em] text-amber-400">★★★★★</div>
          <div className="mt-6 flex flex-col items-center gap-3 text-sm text-slate-600">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-300">
              <Image
                src="/6810bcac6fc499ede820f7a0_Juan Mora.png"
                alt="Photo of Juan Mora Delgado"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Juan Mora Delgado</p>
              <p className="text-xs text-slate-500">Internal medicine physician, Hospital de Jerez</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8">
          <div className="text-center">
            <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
              How Copiloto Médico works
            </h2>
            <p className="mt-3 text-[15px] text-slate-500">
              Our AI medical assistant captures the visit so you can focus entirely on your patient.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/682dda116cdb3289f729c87c_sv1_3x-p-500.webp"
                  alt="Welcome screen of Copiloto Médico on a mobile phone"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-6 pt-4 text-sm text-slate-700">
                <p className="text-[13px] font-semibold text-slate-900">1. Start Copiloto Médico</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  Open Copiloto Médico on your computer or mobile device and you are ready to go. It works seamlessly for
                  in‑person and virtual visits.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/682dda1b6e4efdc16a1d16ad_sv2_3x-p-500.webp"
                  alt="Copiloto Médico interface while listening"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-6 pt-4 text-sm text-slate-700">
                <p className="text-[13px] font-semibold text-slate-900">2. Your clinical note is drafted</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  While you talk to the patient, Copiloto Médico listens in the background and drafts structured clinical
                  notes for you.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/682dda247bf886638e57f4a2_sv3_3x-p-500.webp"
                  alt="Clinician reviewing the note on a computer"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-6 pt-4 text-sm text-slate-700">
                <p className="text-[13px] font-semibold text-slate-900">3. Review and send</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  Review the draft, make quick edits and send it or transfer it to your electronic health record in a
                  single click.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECURITY SECTION (shortened) */}
      <section id="security" className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
              We prioritise security and integrity
            </h2>
            <p className="mt-3 text-[15px] text-slate-500">
              Copiloto Médico follows strict standards for patient data protection and privacy.
            </p>
          </div>

          <div className="mt-12 grid gap-10 text-center text-sm text-slate-700 sm:text-base md:grid-cols-3">
            <div className="space-y-3">
              <div className="text-sm text-slate-500">
                <span aria-hidden>✓</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">Patient data laws and privacy regulations</p>
              <p className="text-sm text-slate-700">
                Our solution complies with strict national regulations for patient data and privacy.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm text-slate-500">
                <span aria-hidden>✓</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">No audio is stored</p>
              <p className="text-sm text-slate-700">
                Audio is processed in real time during the visit and is not stored after the consultation ends.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm text-slate-500">
                <span aria-hidden>✓</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">Data hosted within America</p>
              <p className="text-sm text-slate-700">
                All data is encrypted and processed within America in line with applicable regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA (mirroring ES) */}
      <section id="pricing" className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
            Getting started is easy
          </h2>
          <p className="mt-2 text-[15px] text-slate-600">
            No payment details required. Get started in minutes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/en/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black"
            >
              Request demo
              <span className="ml-1" aria-hidden>
                →
              </span>
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Try it for free
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
