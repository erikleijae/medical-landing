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
  );
}

export default function DownloadPageEn() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <HeaderEn />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 lg:px-10">
          <header className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Download</p>
            <h1 className="mt-3 font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[38px]">
              Use Copiloto Médico wherever you work
            </h1>
            <p className="mt-4 text-sm text-slate-600">
              Use Copiloto Médico in the clinic or remotely. Download the desktop app and browser extensions to securely
              transfer your notes into your clinical systems.
            </p>
          </header>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* WINDOWS APP */}
            <article className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Windows</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Enables full use of Copiloto Médico for video or phone calls (by capturing the patient&apos;s audio) and
                  allows secure transfer of notes to local electronic health record systems.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="https://tandemhealth.blob.core.windows.net/tandem-public/native/Tandem-win-Setup.exe"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-black"
                >
                  Download for Windows
                  <span className="ml-1" aria-hidden>
                    ↓
                  </span>
                </Link>
              </div>
            </article>

            {/* WEB PLUGIN (CHROME, EDGE, FIREFOX) */}
            <article className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Web plugin</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Browser extension for Chrome, Edge and Firefox. Lets you automatically transfer Copiloto Médico notes
                  into your web-based electronic health record system.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="https://chromewebstore.google.com/detail/tandem-health/agcaglfappbihcbbngkdbiegfjfdcjeg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-black"
                >
                  Download web plugin
                  <span className="ml-1" aria-hidden>
                    ↓
                  </span>
                </Link>
              </div>
            </article>

            {/* IOS AND ANDROID */}
            <article className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              <div>
                <h2 className="text-base font-semibold text-slate-900">iOS and Android</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Access Copiloto Médico from your phone. Log in with your account to use the app on iOS and Android.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="/en/login"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Log in from your phone
                  <span className="ml-1" aria-hidden>
                    →
                  </span>
                </Link>
              </div>
            </article>

            {/* EDGE PLUGIN */}
            <article className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Edge plugin</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Browser extension for Microsoft Edge. Lets you automatically transfer Copiloto Médico notes into your
                  web-based clinical system.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="https://microsoftedge.microsoft.com/addons/detail/tandem-health/jiknejnipfgajfkpbbdpfldkkdjpejja"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-black"
                >
                  Download for Edge
                  <span className="ml-1" aria-hidden>
                    ↓
                  </span>
                </Link>
              </div>
            </article>

            {/* FIREFOX PLUGIN */}
            <article className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Firefox plugin</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Browser extension for Firefox. Lets you automatically transfer Copiloto Médico notes into your web-based
                  clinical system.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="https://addons.mozilla.org/en-GB/firefox/addon/tandem-health/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-black"
                >
                  Download for Firefox
                  <span className="ml-1" aria-hidden>
                    ↓
                  </span>
                </Link>
              </div>
            </article>

            {/* WINDOWS MSI INSTALLER */}
            <article className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Windows MSI installer</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  For deployment on multiple computers. Requirements: Windows 10/11 with .NET 8. Administrator privileges
                  required.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="https://tandemhealth.blob.core.windows.net/tandem-public/launchable-native/Tandem%20Installer.msi"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-black"
                >
                  Download MSI installer
                  <span className="ml-1" aria-hidden>
                    ↓
                  </span>
                </Link>
              </div>
            </article>

            {/* INFORMATION SHEETS (PDF) */}
            <article className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Information sheets (PDF)</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Documents for clinics and patients explaining what Copiloto Médico is and how we protect patient
                  information.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="https://cdn.prod.website-files.com/67ef895ebcae5ebab6aa5d30/6812429f2395a1dd394e2ce0_hojas%20informativas.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Download information sheets
                  <span className="ml-1" aria-hidden>
                    ↓
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
