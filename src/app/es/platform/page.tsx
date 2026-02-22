import Image from "next/image";
import Link from "next/link";

import { HeroVideo } from "../../../components/hero-video";
import { LanguageSwitcher } from "../../../components/language-switcher";
import { AudienceTabs } from "../../../components/audience-tabs";

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-slate-100/80 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4 md:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="inline-block h-6 w-6 rounded-full border border-brand-ink bg-[var(--brand-ink)]" />
              <span className="-ml-3 inline-block h-6 w-6 rounded-full border border-brand-ink bg-[var(--brand-bg)]" />
            </div>
            <span className="text-[18px] font-semibold tracking-tight text-slate-900">DeepClinic Platform</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-800 lg:flex">
            <Link href="/es/product" className="hover:text-slate-900">
              Producto
            </Link>
            <Link href="/es/benefits-simulator" className="hover:text-slate-900">
              Simulador de beneficios
            </Link>
            <Link href="/es/pricing" className="hover:text-slate-900">
              Precio
            </Link>
          </nav>

          <div className="flex items-center gap-4 text-sm">
            <LanguageSwitcher locale="es" />
            <Link
              href="/es/login"
              target="_blank"
              rel="noreferrer"
              className="hidden text-slate-700 hover:text-slate-900 sm:inline"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-brand-accent px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm ring-1 ring-black/5 hover:bg-brand-accent-hover"
            >
              Comenzar gratis
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
          <div className="mb-6 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
            <SparklesIcon className="mr-1 h-3 w-3" />
            Impulsado por DeepClinic1
          </div>
          <h1 className="font-display text-[38px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[44px] md:text-[50px]">
            La plataforma médica integral con<br />
            <span className="border-b-[6px] border-brand-accent-strong pb-1">98% de precisión clínica</span>
          </h1>
          <p className="mt-6 max-w-3xl text-[16px] leading-relaxed text-slate-500 sm:text-lg">
            Un ecosistema completo de productos conectados por <strong>DeepClinic1</strong>, nuestro LLM especializado que supera a los modelos genéricos en comprensión médica.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-2.5 text-[13px] font-semibold text-slate-900 shadow-sm ring-1 ring-black/5 hover:bg-brand-accent-hover"
            >
              Comenzar gratis
              <span className="ml-1" aria-hidden>
                →
              </span>
            </Link>
            <Link
              href="#productos"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-2.5 text-[13px] font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Ver productos
            </Link>
          </div>
        </div>

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

      {/* DEEPCLINIC1 COMPARISON */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                <BrainCircuitIcon className="mr-1.5 h-3.5 w-3.5" />
                Inteligencia Artificial Especializada
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Por qué DeepClinic1 es superior
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                A diferencia de los modelos genéricos entrenados con todo internet, DeepClinic1 ha sido entrenado exclusivamente con literatura médica, guías de práctica clínica y millones de casos anonimizados.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                    <ShieldCheckIcon className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Cero alucinaciones clínicas</p>
                    <p className="text-sm text-slate-400">Verificamos cada afirmación médica contra bases de datos confiables.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                    <ActivityIcon className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Contexto profundo</p>
                    <p className="text-sm text-slate-400">Entiende historiales complejos y relaciones entre síntomas y tratamientos.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl bg-slate-800 p-8 ring-1 ring-white/10">
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Asertividad Clínica</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex items-end justify-between">
                    <span className="font-bold text-white">DeepClinic1</span>
                    <span className="text-2xl font-bold text-emerald-400">98%</span>
                  </div>
                  <div className="h-4 w-full overflow-hidden rounded-full bg-slate-700">
                    <div className="h-full rounded-full bg-emerald-500" style={{ width: '98%' }}></div>
                  </div>
                  <p className="mt-1 text-xs text-emerald-400/80">Especializado en medicina</p>
                </div>

                <div>
                  <div className="mb-2 flex items-end justify-between">
                    <span className="font-medium text-slate-300">LLMs Genéricos (GPT-4, Gemini)</span>
                    <span className="text-xl font-semibold text-slate-400">81%</span>
                  </div>
                  <div className="h-4 w-full overflow-hidden rounded-full bg-slate-700">
                    <div className="h-full rounded-full bg-slate-500" style={{ width: '81%' }}></div>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">Promedio de la industria general</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section id="productos" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Un producto para cada necesidad
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Nuestra suite de herramientas se integra perfectamente para cubrir todo el ciclo de atención médica.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* PRODUCTO 1: COPILOT */}
            <Link href="/" className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="bg-emerald-50 p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                  <MicIcon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">DeepClinic Copilot</h3>
                <p className="mt-2 text-sm text-slate-600">Tu escriba médico con IA</p>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <p className="text-sm text-slate-600">
                  Transcribe consultas, genera notas clínicas estructuradas y codifica diagnósticos automáticamente en tiempo real.
                </p>
                <div className="mt-6 flex items-center text-sm font-semibold text-emerald-600 group-hover:text-emerald-700">
                  Ver detalles <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>

            {/* PRODUCTO 2: DESK */}
            <Link href="/es/desk" className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="bg-teal-50 p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                  <LayoutDashboardIcon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">DeepClinic Desk</h3>
                <p className="mt-2 text-sm text-slate-600">Gestión clínica integral</p>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <p className="text-sm text-slate-600">
                  Centraliza expedientes, gestiona pacientes y coordina a todo tu equipo clínico desde un solo lugar.
                </p>
                <div className="mt-6 flex items-center text-sm font-semibold text-teal-600 group-hover:text-teal-700">
                  Ver detalles <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>

            {/* PRODUCTO 3: BOOKING */}
            <Link href="/es/booking" className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="bg-indigo-50 p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                  <CalendarIcon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">DeepClinic Booking</h3>
                <p className="mt-2 text-sm text-slate-600">Agenda inteligente 24/7</p>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <p className="text-sm text-slate-600">
                  Permite a tus pacientes agendar citas online, envía recordatorios automáticos y reduce el ausentismo.
                </p>
                <div className="mt-6 flex items-center text-sm font-semibold text-indigo-600 group-hover:text-indigo-700">
                  Ver detalles <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>

            {/* PRODUCTO 4: REVENUE */}
            <Link href="/es/revenue" className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="bg-blue-50 p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                  <ActivityIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">DeepClinic Revenue</h3>
                <p className="mt-2 text-sm text-slate-600">Salud financiera</p>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <p className="text-sm text-slate-600">
                  Optimiza la facturación, gestiona cobros a aseguradoras y visualiza el rendimiento financiero de tu práctica.
                </p>
                <div className="mt-6 flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                  Ver detalles <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>

            {/* PRODUCTO 5: HEALTH */}
            <Link href="/es/health" className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md md:col-span-2 lg:col-span-2">
              <div className="flex h-full flex-col md:flex-row">
                <div className="flex-1 bg-rose-50 p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                    <HeartPulseIcon className="h-6 w-6 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">DeepClinic Health</h3>
                  <p className="mt-2 text-sm text-slate-600">App para el paciente</p>
                  <p className="mt-4 text-sm text-slate-600">
                    Conecta a los pacientes con su salud. Acceso a historial, recetas, chat con el médico y gestión de salud familiar.
                  </p>
                  <div className="mt-6 flex items-center text-sm font-semibold text-rose-600 group-hover:text-rose-700">
                    Ver detalles <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
                <div className="relative min-h-[200px] flex-1 overflow-hidden bg-rose-100 md:min-h-0">
                  <Image
                    src="/home_kid.png"
                    alt="DeepClinic Health App"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SEGURIDAD */}
      <section id="seguridad" className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          {/* Título y subtítulo centrados */}
          <div className="text-center">
            <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
              Seguridad de grado hospitalario
            </h2>
            <p className="mt-3 text-[15px] text-slate-500">
              Toda la plataforma DeepClinic cumple con los más estrictos estándares de privacidad.
            </p>
          </div>

          {/* Bloque inferior con imagen y texto */}
          <div className="mt-14 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-300">
              <Image
                src="/hipaa.png"
                alt="Certificaciones de seguridad de DeepClinic"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 24rem, 100vw"
              />
            </div>

            <div className="space-y-4 text-left text-sm text-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                Tus datos, siempre seguros
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <ShieldCheckIcon className="h-5 w-5 text-emerald-600" />
                  <span>Cumplimiento total con HIPAA y NOM</span>
                </li>
                <li className="flex gap-2">
                  <ShieldCheckIcon className="h-5 w-5 text-emerald-600" />
                  <span>Encriptación de extremo a extremo</span>
                </li>
                <li className="flex gap-2">
                  <ShieldCheckIcon className="h-5 w-5 text-emerald-600" />
                  <span>Almacenamiento seguro en Norteamérica</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link
                  href="/es/data-security"
                  className="inline-flex items-center font-medium text-brand-accent-strong hover:text-brand-accent-hover"
                >
                  Conoce más sobre nuestra seguridad <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
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
