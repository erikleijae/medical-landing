import Image from "next/image";
import Link from "next/link";

import { HeroVideo } from "../../../components/hero-video";
import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function PlatformPage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav />

      {/* HERO */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-12 text-center md:px-8 lg:px-0">
          <MotionReveal>
            <div className="mb-6 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <SparklesIcon className="mr-1 h-3 w-3" />
              Impulsado por DeepClinic1
            </div>
            <h1 className="font-sans text-[38px] font-bold leading-tight tracking-tighter text-white sm:text-[44px] md:text-[56px]">
              La plataforma médica integral con<br />
              <span className="bg-gradient-to-b from-emerald-300 to-emerald-600 bg-clip-text text-transparent">
                98% de precisión clínica
              </span>
            </h1>
          </MotionReveal>

          <MotionReveal delayMs={100}>
            <p className="mt-6 max-w-3xl text-[18px] leading-relaxed text-white/60">
              Un ecosistema completo de productos conectados por <strong>DeepClinic1</strong>, nuestro LLM especializado que supera a los modelos genéricos en comprensión médica.
            </p>
          </MotionReveal>

          <MotionReveal delayMs={200}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
              >
                Comenzar gratis
              </Link>
              <Link
                href="#productos"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-2.5 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105"
              >
                Ver productos
              </Link>
            </div>
          </MotionReveal>
        </div>

        <MotionReveal delayMs={300}>
          <div className="mx-auto max-w-6xl px-6 pb-8 md:px-8 lg:px-0">
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50 grayscale transition-all duration-500 hover:opacity-80 hover:grayscale-0">
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

      {/* DEEPCLINIC1 COMPARISON */}
      <section className="relative z-10 py-24 border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <MotionReveal>
              <div>
                <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                  <BrainCircuitIcon className="mr-1.5 h-3.5 w-3.5" />
                  Inteligencia Artificial Especializada
                </div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Por qué DeepClinic1 es superior
                </h2>
                <p className="mt-4 text-lg text-white/60">
                  A diferencia de los modelos genéricos entrenados con todo internet, DeepClinic1 ha sido entrenado exclusivamente con literatura médica, guías de práctica clínica y millones de casos anonimizados.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                      <ShieldCheckIcon className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Cero alucinaciones clínicas</p>
                      <p className="text-sm text-white/50">Verificamos cada afirmación médica contra bases de datos confiables.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                      <ActivityIcon className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Contexto profundo</p>
                      <p className="text-sm text-white/50">Entiende historiales complejos y relaciones entre síntomas y tratamientos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delayMs={200}>
              <div className="relative rounded-[24px] bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-sm">
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider">Asertividad Clínica</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="mb-2 flex items-end justify-between">
                      <span className="font-bold text-white">DeepClinic1</span>
                      <span className="text-2xl font-bold text-emerald-400">98%</span>
                    </div>
                    <div className="h-4 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-emerald-500" style={{ width: '98%' }}></div>
                    </div>
                    <p className="mt-1 text-xs text-emerald-400/80">Especializado en medicina</p>
                  </div>

                  <div>
                    <div className="mb-2 flex items-end justify-between">
                      <span className="font-medium text-white/60">LLMs Genéricos (GPT-4, Gemini)</span>
                      <span className="text-xl font-semibold text-white/40">81%</span>
                    </div>
                    <div className="h-4 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-white/20" style={{ width: '81%' }}></div>
                    </div>
                    <p className="mt-1 text-xs text-white/40">Promedio de la industria general</p>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section id="productos" className="relative z-10 py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <MotionReveal>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Un producto para cada necesidad
              </h2>
              <p className="mt-4 text-lg text-white/60">
                Nuestra suite de herramientas se integra perfectamente para cubrir todo el ciclo de atención médica.
              </p>
            </MotionReveal>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* PRODUCTO 1: COPILOT */}
            <MotionReveal delayMs={0} className="h-full">
              <Link href="/" className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:bg-white/10">
                <div className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <MicIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">DeepClinic Copilot</h3>
                  <p className="mt-2 text-sm text-white/60">Tu escriba médico con IA</p>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 pt-0">
                  <p className="text-sm text-white/50">
                    Transcribe consultas, genera notas clínicas estructuradas y codifica diagnósticos automáticamente en tiempo real.
                  </p>
                  <div className="mt-6 flex items-center text-sm font-semibold text-emerald-400 group-hover:text-emerald-300">
                    Ver detalles <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </MotionReveal>

            {/* PRODUCTO 2: DESK */}
            <MotionReveal delayMs={100} className="h-full">
              <Link href="/es/desk" className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:bg-white/10">
                <div className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                    <LayoutDashboardIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">DeepClinic Desk</h3>
                  <p className="mt-2 text-sm text-white/60">Gestión clínica integral</p>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 pt-0">
                  <p className="text-sm text-white/50">
                    Centraliza expedientes, gestiona pacientes y coordina a todo tu equipo clínico desde un solo lugar.
                  </p>
                  <div className="mt-6 flex items-center text-sm font-semibold text-teal-400 group-hover:text-teal-300">
                    Ver detalles <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </MotionReveal>

            {/* PRODUCTO 3: BOOKING */}
            <MotionReveal delayMs={200} className="h-full">
              <Link href="/es/booking" className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:bg-white/10">
                <div className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <CalendarIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">DeepClinic Citas</h3>
                  <p className="mt-2 text-sm text-white/60">Agenda inteligente 24/7</p>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 pt-0">
                  <p className="text-sm text-white/50">
                    Permite a tus pacientes agendar citas online, envía recordatorios automáticos y reduce el ausentismo.
                  </p>
                  <div className="mt-6 flex items-center text-sm font-semibold text-indigo-400 group-hover:text-indigo-300">
                    Ver detalles <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </MotionReveal>

            {/* PRODUCTO 4: REVENUE */}
            <MotionReveal delayMs={0} className="h-full">
              <Link href="/es/revenue" className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:bg-white/10">
                <div className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <ActivityIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">DeepClinic Revenue</h3>
                  <p className="mt-2 text-sm text-white/60">Salud financiera</p>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 pt-0">
                  <p className="text-sm text-white/50">
                    Optimiza la facturación, gestiona cobros a aseguradoras y visualiza el rendimiento financiero de tu práctica.
                  </p>
                  <div className="mt-6 flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300">
                    Ver detalles <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </MotionReveal>

            {/* PRODUCTO 5: HEALTH */}
            <MotionReveal delayMs={100} className="md:col-span-2 lg:col-span-2 h-full">
              <Link href="/es/health" className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:bg-white/10 md:flex-row">
                <div className="flex-1 p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400">
                    <HeartPulseIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">DeepClinic Health</h3>
                  <p className="mt-2 text-sm text-white/60">App para el paciente</p>
                  <p className="mt-4 text-sm text-white/50">
                    Conecta a los pacientes con su salud. Acceso a historial, recetas, chat con el médico y gestión de salud familiar.
                  </p>
                  <div className="mt-6 flex items-center text-sm font-semibold text-rose-400 group-hover:text-rose-300">
                    Ver detalles <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
                <div className="relative min-h-[200px] flex-1 overflow-hidden bg-white/5 md:min-h-0">
                  <Image
                    src="/home_kid.png"
                    alt="DeepClinic Health App"
                    fill
                    className="object-cover object-center opacity-80 transition-opacity group-hover:opacity-100"
                  />
                </div>
              </Link>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* SEGURIDAD */}
      <section id="seguridad" className="relative z-10 border-t border-white/5 py-24">
        <div className="mx-auto max-w-6xl px-6">
          {/* Título y subtítulo centrados */}
          <div className="text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                Seguridad de grado hospitalario
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                Toda la plataforma DeepClinic cumple con los más estrictos estándares de privacidad.
              </p>
            </MotionReveal>
          </div>

          {/* Bloque inferior con imagen y texto */}
          <div className="mt-14 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-center">
            <MotionReveal delayMs={200}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
                <Image
                  src="/hipaa.png"
                  alt="Certificaciones de seguridad de DeepClinic"
                  fill
                  className="object-cover opacity-80"
                  sizes="(min-width: 768px) 24rem, 100vw"
                />
              </div>
            </MotionReveal>

            <MotionReveal delayMs={300}>
              <div className="space-y-6 text-left">
                <h3 className="text-[24px] font-semibold text-white">
                  Tus datos, siempre seguros
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <ShieldCheckIcon className="h-6 w-6 text-emerald-400 flex-shrink-0" />
                    <span className="text-white/70">Cumplimiento total con HIPAA y NOM</span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheckIcon className="h-6 w-6 text-emerald-400 flex-shrink-0" />
                    <span className="text-white/70">Encriptación de extremo a extremo</span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheckIcon className="h-6 w-6 text-emerald-400 flex-shrink-0" />
                    <span className="text-white/70">Almacenamiento seguro en Norteamérica</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link
                    href="/es/data-security"
                    className="inline-flex items-center font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Conoce más sobre nuestra seguridad <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
    </main>
  );
}

// Icons
function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}

function BrainCircuitIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M9 13a4.5 4.5 0 0 0 3-4" />
      <path d="M6.003 5.125A3 3 0 0 1 19.502 11.6" />
      <path d="M12 18a4 4 0 0 0 4-3.464 4.004 4.004 0 0 0 3.498-6" />
      <path d="M12 18V5" />
    </svg>
  );
}

function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function MicIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

function LayoutDashboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function HeartPulseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.28 3.6-1.28 5.09 0 1.49 1.28 1.49 3.36 0 4.63-1.49 1.28-3.6 1.28-5.09 0-1.49-1.28-1.49-3.36 0-4.63z" />
      <path d="M24 12v-2" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10" />
      <path d="M2 12h2.5l1.5 5 2.5-12 2 7h2.5" />
    </svg>
  );
}
