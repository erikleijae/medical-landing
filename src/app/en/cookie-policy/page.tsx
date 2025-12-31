import Link from "next/link";

export default function CookiePolicyPageEn() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Legal</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Cookie policy
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          This Cookie Policy explains how Copiloto Médico uses cookies and similar technologies on this website. It
          should be read together with our Privacy Policy, which explains how we handle your personal data more broadly.
        </p>
        <section className="mt-6 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">1. What are cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device when you visit a website. They are widely used to
            make websites work, or work more efficiently, as well as to provide information to the site owners.
          </p>
        </section>
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">2. How we use cookies</h2>
          <p>On this website we may use cookies to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>remember your language or region preferences;</li>
            <li>understand how visitors use the site so we can improve its performance and content;</li>
            <li>keep the site secure and prevent misuse.</li>
          </ul>
          <p>
            We do not use cookies on this marketing site to build individual advertising profiles. Where analytics tools
            are used, data is typically aggregated and pseudonymised.
          </p>
        </section>
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">3. Managing cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings, including blocking or deleting them.
            If you choose to block cookies, some parts of the site may not function properly.
          </p>
        </section>
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">4. More information</h2>
          <p>
            For more information on how we process your personal data, please refer to our Privacy Policy:
          </p>
          <p>
            <Link href="/en/privacy-policy" className="text-sm font-medium text-sky-700 hover:text-sky-900">
              Privacy Policy
            </Link>
          </p>
        </section>
        <p className="mt-10 text-xs text-slate-500">Last updated: October 5th, 2025</p>
      </div>
    </main>
  );
}
