import Image from "next/image";
import Link from "next/link";

import { HeroVideo } from "../../components/hero-video";
import { BenefitsSimulator } from "../../components/benefits-simulator";
import { LanguageSwitcher } from "../../components/language-switcher";

export default function HomePageEn() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4 md:px-8 lg:px-10">
          <Link href="/en" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="inline-block h-6 w-6 rounded-full border border-slate-900 bg-slate-900" />
              <span className="-ml-3 inline-block h-6 w-6 rounded-full border border-slate-900" />
            </div>
            <span className="text-[18px] font-semibold tracking-tight text-slate-900">Copiloto Médico</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-800 lg:flex">
            <Link href="/en/product" className="hover:text-slate-900">
              Product
            </Link>
            <Link href="/en/benefits-simulator" className="hover:text-slate-900">
              Benefits simulator
            </Link>
            <Link href="/en/pricing" className="hover:text-slate-900">
              Pricing
            </Link>
          </nav>

          <div className="flex items-center gap-4 text-sm">
            <LanguageSwitcher locale="en" />
            <Link
              href="/en/login"
              target="_blank"
              rel="noreferrer"
              className="hidden text-slate-700 hover:text-slate-900 sm:inline"
            >
              Log in
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
              href="/en/signup"
              className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-6 py-2.5 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
            >
              Start for free
              <span className="ml-1" aria-hidden>
                →
              </span>
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

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/Medica.png"
                  alt="Médica Sur, high-complexity hospital in Mexico City"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-700">
                <p className="text-justify">
                  In Mexico, high-complexity hospitals such as Médica Sur aim to reduce administrative workload. Copiloto
                  Médico cuts around 40% of consultation time and generates the clinical note using just your voice.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/houston.png"
                  alt="Houston Methodist Hospital using AI solutions"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-700">
                <p className="text-justify">
                  In the United States, hospitals such as Houston Methodist Hospital are leading AI scribe projects.
                  Copiloto Médico brings this approach to the region and helps reduce up to 2 hours of daily
                  documentation per clinician.
                </p>
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
                src="/6810bcac6fc499ede820f7a0_Juan Mora.png.png"
                alt="Photo of Diana Martínez"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Diana Martínez</p>
              <p className="text-xs text-slate-500">Médica Sur</p>
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
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-16 text-center">
          <h2 className="text-[28px] font-semibold tracking-tight text-slate-900 sm:text-[32px]">
            Better notes, safer care
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-[15px]">
            Copiloto Médico makes clinical documentation faster, easier and more accurate.
          </p>

          <div className="mt-10 space-y-8">
            <div className="grid gap-6 text-left md:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/especialidades.png"
                    alt="Copiloto Médico tailored to multiple specialties"
                    width={640}
                    height={360}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="mt-4 text-sm text-slate-700">
                  <p className="text-sm font-semibold text-slate-900">Compatible with 50+ specialties</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Copiloto Médico understands the language of your specialty and profession. Built for physicians,
                    psychologists, dentists, physiotherapists, emergency clinicians, nurses and many more.
                  </p>
                  <div className="mt-3 grid gap-2 text-[11px] text-slate-600 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2">
                      <p className="text-[11px] font-semibold text-slate-900">Specialty-tuned AI</p>
                      <p className="mt-1">
                        Our proprietary models are distilled on real clinical data for each specialty, from internal medicine
                        and pediatrics to surgery and nursing.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2">
                      <p className="text-[11px] font-semibold text-slate-900">Less noise, more precision</p>
                      <p className="mt-1">
                        Each distilled model is tuned to the clinical language of its specialty to reduce errors and
                        hallucinations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/medico.png"
                    alt="Clinician transferring the note to the electronic health record with Copiloto Médico"
                    width={640}
                    height={360}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="mt-4 text-sm text-slate-700">
                  <p className="text-sm font-semibold text-slate-900">One-click transfer to your EHR</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Copiloto Médico connects to your electronic health record (EHR) so you can send notes with a single
                    click. Forget copying and pasting between systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 text-left text-sm text-slate-700 md:grid-cols-3">
              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/682dda985c7d89da56d3ed2c_es7_4x.webp"
                    alt="Creating letters and documents with Copiloto Médico"
                    width={640}
                    height={360}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-900">Generate notes, documents and letters</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Get everything you need from a visit: clinical notes, sick leave certificates and other documents ready
                    to send.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/home_kid.png"
                    alt="Clinician using Copiloto Médico during a consultation"
                    width={640}
                    height={640}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-slate-600">
                  Copiloto Médico accompanies the consultation without getting in the way of the clinician-patient
                  relationship, keeping the focus on the person.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/682ddaa1be3339a4db428f1f_es8_4x.webp"
                    alt="Automatic clinical coding with Copiloto Médico"
                    width={640}
                    height={360}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-900">Integrated clinical coding</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Copiloto Médico automatically surfaces relevant clinical codes for each visit, helping you maintain
                    accurate coding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid items-stretch gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-200">
              <Image
                src="/680b8bd084ba7f136270ee2a_testimonial1.png"
                alt="General practitioner using Copiloto Médico"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 22rem, 100vw"
              />
            </div>
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm">
              <div className="space-y-3">
                <p className="text-lg font-medium leading-snug text-slate-900 sm:text-xl">
                  
                  	“I am very happy with how Copiloto Médico allows me to dedicate more time to the patient at Médica Sur
                  and explain the diagnosis and treatment more thoroughly. This is AI that truly humanises the
                  consultation.”
                </p>
                <div className="text-xs text-slate-600">
                  <p className="font-semibold text-slate-900">Diana Martínez</p>
                  <p>Healthcare professional</p>
                  <p>Paediatrician</p>
                  <p>Médica Sur</p>
                </div>
              </div>
            </div>
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
          <div className="mt-14 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-300">
              <Image
                src="/hipaa.png"
                alt="Security and compliance certifications of Copiloto Médico"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 24rem, 100vw"
              />
            </div>

            <div className="space-y-4 text-left text-sm text-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                Trusted by more than 1,000 clinicians across the Americas
              </h3>
              <p>
                Built on top of strong security standards, Copiloto Médico enables safe and reliable AI-powered
                documentation.
              </p>
              <p>
                From large hospital networks to specialised clinics, healthcare professionals use Copiloto Médico to gain
                back time, quality and peace of mind in every consultation.
              </p>
              <Link
                href="/en/data-security"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              >
                Read more about our security protocols
                <span className="ml-1" aria-hidden>
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="stories" className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Clinicians love Copiloto Médico
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              We love building Copiloto Médico. Our users love it even more.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <figure className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 text-left text-sm text-slate-700 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src="/6810bcac6fc499ede820f7a0_Juan Mora.png.png"
                    alt="Photo of Diana Martínez"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="text-xs text-slate-600">
                  <p className="text-sm font-semibold text-slate-900">Diana Martínez</p>
                  <p>Médica Sur</p>
                </div>
              </div>
              <div className="mt-3 text-amber-400">★★★★★</div>
              <blockquote className="mt-3 space-y-2">
                <p className="text-sm text-slate-800">
                  &quot;Using Copiloto Médico is not about keeping up with the latest technology. It is, above all, about good
                  clinical practice. Copiloto Médico means I no longer spend 2 hours a day typing and only 15 minutes with
                  my patients. Once you try it, you don’t want to go back.&quot;
                </p>
              </blockquote>
            </figure>

            <figure className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 text-left text-sm text-slate-700 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src="/681068922ceb2a1128818e85_Carlos Alberto Encinas.png"
                    alt="Photo of Carlos Alberto Encinas Ullán"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="text-xs text-slate-600">
                  <p className="text-sm font-semibold text-slate-900">Carlos Alberto Encinas Ullán</p>
                  <p>Orthopaedic surgeon, university hospital</p>
                </div>
              </div>
              <div className="mt-3 text-amber-400">★★★★★</div>
              <blockquote className="mt-3 space-y-2">
                <p>
                  &quot;While I examine the patient and have a natural conversation, Copiloto Médico transcribes and structures
                  all the clinical information accurately, even in complex cases. The biggest benefit: the app drafts my
                  notes automatically, saving me up to 2 hours of admin work every day.&quot;
                </p>
              </blockquote>
            </figure>

            <figure className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 text-left text-sm text-slate-700 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src="/6810688005f18fd45c2ca548_Hugo Queijeiro profile.png"
                    alt="Photo of Hugo Queijeiro Pintos"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="text-xs text-slate-600">
                  <p className="text-sm font-semibold text-slate-900">Hugo Queijeiro Pintos</p>
                  <p>Medical director, Clínicas Gaias</p>
                </div>
              </div>
              <div className="mt-3 text-amber-400">★★★★★</div>
              <blockquote className="mt-3 space-y-2">
                <p>
                  &quot;We have deployed Copiloto Médico across our clinics and are very happy with how it improves the dynamics
                  of care. Our clinicians find it much easier to look patients in the eye instead of at the computer.&quot;
                </p>
              </blockquote>
            </figure>

            <figure className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 text-left text-sm text-slate-700 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src="/681068a3197614922f294a3e_Jose Fernández Cuesta Peñafiel.jpeg"
                    alt="Photo of Jose Fernández Cuesta Peñafiel"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="text-xs text-slate-600">
                  <p className="text-sm font-semibold text-slate-900">Jose Fernández Cuesta Peñafiel</p>
                  <p>Paediatrician, paediatric home hospitalisation</p>
                </div>
              </div>
              <div className="mt-3 text-amber-400">★★★★★</div>
              <blockquote className="mt-3 space-y-2">
                <p>
                  &quot;In a complex setting such as paediatric home hospitalisation, with multiple interlocutors and long
                  conversations, Copiloto Médico keeps the notes accurate and complete. I feel confident that nothing that
                  parents share about my patients will be missed.&quot;
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 lg:px-0">
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Impact in numbers</p>
            <h2 className="mt-3 text-[26px] font-semibold tracking-tight text-slate-900 sm:text-[30px]">
              How much can you earn per visit using Copiloto Médico?
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
              Adjust your numbers and see how many hours you can save, how many additional visits you can take and how much
              extra income you could generate every month.
            </p>
          </div>
          <div className="mx-auto mt-4 max-w-3xl">
            <BenefitsSimulator variant="compact" language="en" />
          </div>
        </div>
      </section>

      {/* FINAL CTA (mirroring ES) */}
      <section
        id="pricing"
        className="border-t border-slate-100 bg-gradient-to-b from-[#d5ff7c]/35 via-white to-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
            Getting started is easy
          </h2>
          <p className="mt-2 text-[15px] text-slate-600">
            No payment details required. Get started in minutes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/en/signup"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black"
            >
              Start for free
              <span className="ml-1" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </div>

        {/* FOOTER */}
        <footer id="resources" className="border-t border-slate-100">
          <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-slate-700 sm:text-[13px]">
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              <Link href="/en/product" className="hover:text-slate-900">
                Product
              </Link>
              <Link href="/en/pricing" className="hover:text-slate-900">
                Pricing
              </Link>
              <Link
                href="/en/login"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900"
              >
                Log in
              </Link>
              <Link href="/en/contact" className="hover:text-slate-900">
                Contact
              </Link>
              <Link href="/en/terms-of-service" className="hover:text-slate-900">
                Terms of service
              </Link>
              <Link href="/en/privacy-policy" className="hover:text-slate-900">
                Privacy policy
              </Link>
              <Link href="/en/signup" className="hover:text-slate-900">
                Start for free
              </Link>
            </nav>
            <p className="mt-4 text-center text-[11px] text-slate-400">
              © 2026 Medical Copilot. All rights reserved.
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}
