import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function ContactPageEn() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav lang="en" />

      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-stretch md:px-8 lg:px-0">
          {/* LEFT SIDE: TESTIMONIAL / TRUST */}
          <div className="flex-1 rounded-[24px] border border-white/10 bg-white/5 p-8 md:p-10">
            <MotionReveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                Used by 1,000+ healthcare groups
              </p>

              <div className="mt-8 flex min-h-[260px] flex-col justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-10 sm:min-h-[320px]">
                <div className="space-y-4">
                  <p className="text-[22px] font-medium leading-snug text-white/90 sm:text-[26px]">
                    &quot;With DeepClinic Copilot we can focus entirely on the patient without worrying about typing notes.&quot;
                  </p>
                  <p className="text-[14px] leading-relaxed text-white/60">
                    DeepClinic Copilot reduces the time spent on administrative tasks and helps keep detailed clinical notes after
                    each visit.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/20" />
                  <div className="space-y-0.5">
                    <p className="text-[13px] font-bold text-white">Medical Director</p>
                    <p className="text-[12px] text-white/50">Healthcare network in America</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-1.5">
                <span className="inline-block h-1.5 w-4 rounded-full bg-white" />
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/20" />
              </div>
            </MotionReveal>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="w-full md:w-[460px]">
            <MotionReveal delayMs={100}>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Personalised demo</p>
                  <h1 className="text-[20px] font-bold text-white sm:text-[22px]">
                    Talk to our team about DeepClinic Copilot
                  </h1>
                  <p className="text-[13px] leading-relaxed text-white/60">
                    Share a few details about your practice and we will contact you to schedule a short demo.
                  </p>
                </div>

                <form className="mt-8 space-y-4" action="#" method="post" autoComplete="off">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="firstName" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                        First name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="off"
                        placeholder="e.g. Maria"
                        className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/30 focus:bg-white/10"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lastName" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                        Last name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="off"
                        placeholder="e.g. Silva"
                        className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/30 focus:bg-white/10"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="off"
                        placeholder="you@clinic.com"
                        className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/30 focus:bg-white/10"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                        Phone number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="off"
                        placeholder="+XX 600..."
                        className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/30 focus:bg-white/10"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="clinic" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                      Clinic or organisation
                    </label>
                    <input
                      id="clinic"
                      name="clinic"
                      type="text"
                      autoComplete="off"
                      placeholder="Clinic name"
                      className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/30 focus:bg-white/10"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="interest" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                      Your interest in DeepClinic Copilot
                    </label>
                    <textarea
                      id="interest"
                      name="interest"
                      rows={3}
                      autoComplete="off"
                      placeholder="Tell us briefly about your speciality and how you would like to use DeepClinic Copilot."
                      className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/30 focus:bg-white/10 resize-none"
                    />
                  </div>

                  <div className="space-y-4 pt-2">
                    <label className="flex items-start gap-3 text-[11px] text-white/50">
                      <input
                        type="checkbox"
                        name="consent"
                        className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 text-white focus:ring-white/20"
                      />
                      <span>
                        I agree to be contacted about DeepClinic Copilot. My personal data will be processed in accordance with the
                        applicable privacy policy.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-[1.02]"
                    >
                      Book a demo
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-center text-[10px] text-white/30">
                  DeepClinic Copilot follows strict security and data protection standards.
                </p>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
