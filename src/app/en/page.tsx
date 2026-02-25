import Image from "next/image";
import Link from "next/link";

import { HeroVideo } from "../../components/hero-video";
import { BenefitsSimulator } from "../../components/benefits-simulator";
import { ConsultationsCounter, HoursSavedCounter } from "../../components/consultations-counter";
import { AudienceTabs } from "../../components/audience-tabs";
import { GrokBackground } from "../../components/grok-background";
import { DeepClinicTopNav } from "../../components/deepclinic-top-nav";
import { MotionReveal } from "../../components/motion-reveal";

export default function HomePageEn() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav lang="en" />

      {/* HERO */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center md:px-8 lg:px-0">
          <MotionReveal>
            <h1 className="font-sans text-[42px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[56px] md:text-[72px]">
              The leading AI clinical assistant in{" "}
              <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                America
              </span>
            </h1>
          </MotionReveal>

          <MotionReveal delayMs={100}>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/60 sm:text-[20px]">
              Over 1,000 healthcare organizations are saving hours of administrative work every day with DeepClinic Copilot.
            </p>
          </MotionReveal>

          <MotionReveal delayMs={200}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/en/signup"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105"
              >
                Start for free
              </Link>
            </div>
          </MotionReveal>
        </div>

        <MotionReveal delayMs={300}>
          <div className="mx-auto max-w-6xl px-6 pb-12 md:px-8 lg:px-0 mt-20">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-50 grayscale transition-all duration-500 hover:opacity-80 hover:grayscale-0">
              <Image
                src="/logos/doktorse.svg"
                alt="Doktor.Se"
                width={120}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
              <Image
                src="/680a6f5dd62951a5097ddab2_nhs.svg"
                alt="NHS"
                width={90}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
              <Image
                src="/680a970e6d5665751f6bfcb8_gaias.png"
                alt="Clínicas Gaias"
                width={110}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
              <Image
                src="/680e64029f546840cd0fa79f_Arriaza.svg"
                alt="Clínica Arriaza"
                width={110}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
              <Image
                src="/680e793ec5490e5100c376a2_CGM.svg"
                alt="CompuGroup Medical"
                width={120}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
              <Image
                src="/680a6ef48f51aabf2425eca5_ncl icb.svg"
                alt="North Central London ICB"
                width={120}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delayMs={400}>
          <HeroVideo theme="dark" />
        </MotionReveal>
      </section>

      <ConsultationsCounter
        locale="en"
        title="Consultations with DeepClinic Copilot"
        subtitle="This number increases in real time while you browse."
        theme="dark"
      />

      <HoursSavedCounter
        locale="en"
        title="Hours saved"
        subtitle="We save 30% of consultation time"
        theme="dark"
      />

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                How DeepClinic Copilot works
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                Our AI medical assistant captures the visit so you can focus entirely on your patient.
              </p>
            </MotionReveal>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <MotionReveal delayMs={0} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda116cdb3289f729c87c_sv1_3x-p-500.webp"
                    alt="Welcome screen of DeepClinic Copilot on a mobile phone"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">01. START DEEPCLINIC</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Open DeepClinic Copilot on your computer or mobile device and you are ready to go. It works seamlessly for
                    in‑person and virtual visits.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={100} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda1b6e4efdc16a1d16ad_sv2_3x-p-500.webp"
                    alt="DeepClinic Copilot interface while listening"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">02. YOUR NOTE IS DRAFTED</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    While you talk to the patient, DeepClinic Copilot listens in the background and drafts structured clinical
                    notes for you.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={200} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda247bf886638e57f4a2_sv3_3x-p-500.webp"
                    alt="Clinician reviewing the note on a computer"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">03. REVIEW AND SEND</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Review the draft, make quick edits and send it or transfer it to your electronic health record in a
                    single click.
                  </p>
                </div>
              </article>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* BETTER NOTES, SAFER CARE */}
      <section className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
          <MotionReveal>
            <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
              Better notes, safer care
            </h2>
            <p className="mt-4 text-[16px] text-white/50">
              DeepClinic Copilot makes clinical documentation faster, easier and more accurate.
            </p>
          </MotionReveal>

          <div className="mt-16 space-y-8 text-left">
            {/* Top row: specialties and transfer */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Specialties */}
              <MotionReveal delayMs={0}>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
                  <div className="relative overflow-hidden rounded-xl bg-black/20 aspect-video w-full">
                    <Image
                      src="/especialidades.png"
                      alt="DeepClinic Copilot tailored to multiple specialties"
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[14px] font-semibold tracking-wide text-white">COMPATIBLE WITH 50+ SPECIALTIES</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                      DeepClinic Copilot understands the language of your specialty and profession. Built for physicians,
                      psychologists, dentists, physiotherapists, emergency clinicians, nurses and many more.
                    </p>
                    <div className="mt-4 grid gap-3 text-[11px] text-white/50 sm:grid-cols-2">
                      <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-white">
                          Specialty-tuned AI
                        </p>
                        <p className="mt-1">
                          Our proprietary models are distilled on real clinical data for each specialty.
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-white">
                          Less noise, more precision
                        </p>
                        <p className="mt-1">
                          Each distilled model is tuned to the clinical language of its specialty.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionReveal>

              {/* Transfers */}
              <MotionReveal delayMs={150}>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
                  <div className="relative overflow-hidden rounded-xl bg-black/20 aspect-video w-full">
                    <Image
                      src="/medico.png"
                      alt="Clinician transferring the note to the electronic health record with DeepClinic Copilot"
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[14px] font-semibold tracking-wide text-white">
                      ONE-CLICK TRANSFER TO YOUR EHR
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                      DeepClinic Copilot connects to your electronic health record (EHR) so you can send notes with a single
                      click. Forget copying and pasting between systems.
                    </p>
                  </div>
                </div>
              </MotionReveal>
            </div>

            {/* Bottom row: generate notes, consultation photo, coding */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* Generate notes, documents and letters */}
              <MotionReveal delayMs={0}>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 h-full">
                  <div className="relative overflow-hidden rounded-xl bg-black/20 aspect-video w-full">
                    <Image
                      src="/682dda985c7d89da56d3ed2c_es7_4x.webp"
                      alt="Creating letters and documents with DeepClinic Copilot"
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[14px] font-semibold tracking-wide text-white">GENERATE NOTES AND LETTERS</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                      Get everything you need from a visit: clinical notes, sick leave certificates and other documents ready
                      to send.
                    </p>
                  </div>
                </div>
              </MotionReveal>

              {/* Consultation photo */}
              <MotionReveal delayMs={100}>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 h-full">
                  <div className="relative overflow-hidden rounded-xl bg-black/20 aspect-square w-full">
                    <Image
                      src="/home_kid.png"
                      alt="Clinician using DeepClinic Copilot during a consultation"
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <p className="mt-6 text-[13px] leading-relaxed text-white/60">
                    DeepClinic Copilot accompanies the consultation without getting in the way of the clinician-patient
                    relationship, keeping the focus on the person.
                  </p>
                </div>
              </MotionReveal>

              {/* Integrated clinical coding */}
              <MotionReveal delayMs={200}>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 h-full">
                  <div className="relative overflow-hidden rounded-xl bg-black/20 aspect-video w-full">
                    <Image
                      src="/682ddaa1be3339a4db428f1f_es8_4x.webp"
                      alt="Automatic clinical coding with DeepClinic Copilot"
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[14px] font-semibold tracking-wide text-white">INTEGRATED CLINICAL CODING</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                      DeepClinic Copilot automatically surfaces relevant clinical codes for each visit, helping you maintain
                      accurate coding.
                    </p>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      <AudienceTabs language="en" theme="dark" />

      {/* DEEPCLINIC COPILOT IN PRACTICE */}
      <section id="product" className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                DeepClinic Copilot in practice
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                More than 1,000 healthcare organizations already trust us.
              </p>
            </MotionReveal>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <MotionReveal delayMs={0}>
              <article className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/Medica.png"
                    alt="Médica Sur, high-complexity hospital in Mexico City"
                    fill
                    className="object-cover opacity-90"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-8">
                  <p className="text-[14px] leading-relaxed text-white/80">
                    In Mexico, high-complexity hospitals such as Médica Sur aim to reduce administrative workload. Copiloto
                    Médico cuts around 30% of consultation time and generates the clinical note using just your voice.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={150}>
              <article className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/houston.png"
                    alt="Houston Methodist Hospital using AI solutions"
                    fill
                    className="object-cover opacity-90"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-8">
                  <p className="text-[14px] leading-relaxed text-white/80">
                    In the United States, hospitals such as Houston Methodist Hospital are leading AI scribe projects.
                    DeepClinic Copilot brings this approach to the region and helps reduce up to 2 hours of daily
                    documentation per clinician.
                  </p>
                </div>
              </article>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="relative z-10 py-32 border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <MotionReveal>
            <div className="grid items-center gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div className="relative aspect-square w-full overflow-hidden rounded-[32px] border border-white/10 bg-black">
                <Image
                  src="/680b8bd084ba7f136270ee2a_testimonial1.png"
                  alt="General practitioner using DeepClinic Copilot"
                  fill
                  className="object-cover opacity-80"
                  sizes="(min-width: 768px) 22rem, 100vw"
                />
              </div>
              <div className="flex flex-col justify-center p-6 text-left">
                <div className="space-y-6">
                  <p className="text-2xl font-medium leading-relaxed text-white/90">
                    “I am very happy with how DeepClinic Copilot allows me to dedicate more time to the patient at Médica Sur
                    and explain the diagnosis and treatment more thoroughly. This is AI that truly humanises the
                    consultation.”
                  </p>
                  <div className="border-l-2 border-white/20 pl-4">
                    <p className="text-sm font-bold uppercase tracking-wider text-white">
                      Diana Martínez
                    </p>
                    <p className="text-sm text-white/50">Paediatrician • Médica Sur</p>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* HIGHLIGHTED QUOTE */}
      <section className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <MotionReveal>
            <p className="text-3xl font-medium leading-snug text-white/90 sm:text-4xl">
              “Once you try DeepClinic Copilot,<br className="hidden sm:inline" /> you don’t want to go back.”
            </p>
            <div className="mt-6 text-lg tracking-[0.3em] text-white/40">★★★★★</div>
            <div className="mt-8 flex flex-col items-center gap-4 text-sm text-white/60">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10 bg-white/5">
                <Image
                  src="/6810bcac6fc499ede820f7a0_Juan Mora.png.png"
                  alt="Photo of Juan Mora Delgado"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-white">Juan Mora Delgado</p>
                <p className="text-xs text-white/50">Médica Sur</p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="stories" className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-16 text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                Clinicians love DeepClinic Copilot
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                We love building DeepClinic Copilot. Our users love it even more.
              </p>
            </MotionReveal>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                text: "Using DeepClinic Copilot is not about keeping up with the latest technology. It is, above all, about good clinical practice. DeepClinic Copilot means I no longer spend 2 hours a day typing and only 15 minutes with my patients. Once you try it, you don’t want to go back.",
                name: "Diana Martínez",
                role: "Médica Sur",
                img: "/6810bcac6fc499ede820f7a0_Juan Mora.png.png"
              },
              {
                text: "While I examine the patient and have a natural conversation, DeepClinic Copilot transcribes and structures all the clinical information accurately, even in complex cases. The biggest benefit: the app drafts my notes automatically, saving me up to 2 hours of admin work every day.",
                name: "Carlos Alberto Encinas Ullán",
                role: "Orthopaedic surgeon, University Hospital",
                img: "/681068922ceb2a1128818e85_Carlos Alberto Encinas.png"
              },
              {
                text: "We have deployed DeepClinic Copilot across our clinics and are very happy with how it improves the dynamics of care. Our clinicians find it much easier to look patients in the eye instead of at the computer.",
                name: "Hugo Queijeiro Pintos",
                role: "Medical director, Clínicas Gaias",
                img: "/6810688005f18fd45c2ca548_Hugo Queijeiro profile.png"
              },
              {
                text: "In a complex setting such as paediatric home hospitalisation, with multiple interlocutors and long conversations, DeepClinic Copilot keeps the notes accurate and complete. I feel confident that nothing that parents share about my patients will be missed.",
                name: "Jose Fernández Cuesta Peñafiel",
                role: "Paediatrician, paediatric home hospitalisation",
                img: "/681068a3197614922f294a3e_Jose Fernández Cuesta Peñafiel.jpeg"
              }
            ].map((item, i) => (
              <MotionReveal key={i} delayMs={i * 100} className="h-full">
                <figure className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 text-left transition-colors hover:bg-white/10">
                  <blockquote className="space-y-4">
                    <div className="text-white/40 text-sm tracking-widest">★★★★★</div>
                    <p className="text-[14px] leading-relaxed text-white/80">
                      “{item.text}”
                    </p>
                  </blockquote>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/5">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-white">{item.name}</p>
                      <p className="text-[12px] text-white/50">{item.role}</p>
                    </div>
                  </div>
                </figure>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT IN NUMBERS */}
      <section className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <MotionReveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                Impact in numbers
              </p>
              <h2 className="mt-4 text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                How much can you earn per visit using DeepClinic Copilot?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] text-white/50">
                Adjust your numbers and see how many hours you can save, how many additional visits you can take and how much
                extra income you could generate every month.
              </p>
            </MotionReveal>
          </div>
          <MotionReveal delayMs={200}>
            <div className="mx-auto max-w-3xl">
              <BenefitsSimulator variant="compact" theme="dark" language="en" />
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                We prioritise security and integrity
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                DeepClinic Copilot follows strict standards for patient data protection and privacy.
              </p>
            </MotionReveal>
          </div>

          <div className="mt-16 grid gap-10 text-center md:grid-cols-3">
            {[
              {
                title: "Patient data laws and privacy regulations",
                desc: "Our solution complies with strict national regulations for patient data and privacy."
              },
              {
                title: "No audio is stored",
                desc: "Audio is processed in real time during the visit and is not stored after the consultation ends."
              },
              {
                title: "Data hosted within America",
                desc: "All data is encrypted and processed within America in line with applicable regulations."
              }
            ].map((item, i) => (
              <MotionReveal key={i} delayMs={i * 100}>
                <div className="rounded-[24px] border border-white/5 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04]">
                  <div className="mb-4 text-sky-400">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-[14px] font-bold uppercase tracking-wide text-white">
                    {item.title}
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/50">
                    {item.desc}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>

          <div className="mt-20 grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center">
            <MotionReveal delayMs={400}>
              <div className="space-y-6 text-left">
                <h3 className="text-[24px] font-semibold leading-tight text-white">
                  Trusted by more than 1,000 clinicians across the Americas
                </h3>
                <p className="text-[15px] leading-relaxed text-white/60">
                  Built on top of strong security standards, DeepClinic Copilot enables safe and reliable AI-powered
                  documentation.
                </p>
                <p className="text-[15px] leading-relaxed text-white/60">
                  From large hospital networks to specialised clinics, healthcare professionals use DeepClinic Copilot to gain
                  back time, quality and peace of mind in every consultation.
                </p>
                <Link
                  href="/en/data-security"
                  className="inline-flex items-center text-[13px] font-bold uppercase tracking-wider text-white transition-colors hover:text-sky-300"
                >
                  Read more about our security protocols <span className="ml-2">→</span>
                </Link>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 py-32 border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
          <MotionReveal>
            <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
              Getting started is easy
            </h2>
            <p className="mt-4 text-[16px] text-white/50">
              No payment details required. Get started in minutes.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/en/signup"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
              >
                Start for free
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="resources"
        className="border-t border-white/10"
      >
        <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-white/60 sm:text-[13px]">
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <Link href="/en/product" className="hover:text-white transition-colors">
              Product
            </Link>
            <Link href="/en/pricing" className="hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/en/about" className="hover:text-white transition-colors">
              Company
            </Link>
            <Link href="/en/login" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Login
            </Link>
            <Link href="/en/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          <div className="mt-8 text-center text-white/40">
            <p>&copy; {new Date().getFullYear()} DeepClinic Copilot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
