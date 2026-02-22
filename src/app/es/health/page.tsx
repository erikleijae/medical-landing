import Image from "next/image";
import Link from "next/link";

import { HeroVideo } from "../../../components/hero-video";
import { BenefitsSimulator } from "../../../components/benefits-simulator";
import { LanguageSwitcher } from "../../../components/language-switcher";
import { ConsultationsCounter, HoursSavedCounter } from "../../../components/consultations-counter";
import { AudienceTabs } from "../../../components/audience-tabs";

export default function HealthPage() {
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
            <span className="text-[18px] font-semibold tracking-tight text-slate-900">DeepClinic Health</span>
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
          <h1 className="font-display text-[38px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[44px] md:text-[50px]">
            Salud conectada para pacientes con{" "}
            <span className="border-b-[6px] border-brand-accent-strong pb-1">DeepClinic Health</span>
          </h1>
          <p className="mt-3 text-[15px] text-slate-500 sm:mt-4">
            Empodera a tus pacientes con acceso a su historial, citas y comunicación directa.
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

      <ConsultationsCounter
        locale="es"
        title="Pacientes conectados con DeepClinic Health"
        subtitle="Este número aumenta en tiempo real mientras navegas."
      />

      <HoursSavedCounter
        locale="es"
        title="Horas de atención optimizadas"
        subtitle="Mejor comunicación, menos visitas innecesarias"
      />

      {/* CÓMO FUNCIONA DEEPCLINIC HEALTH */}
      <section id="como-funciona" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-28 md:px-8 md:pt-32">
          <div className="text-center">
            <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
              Cómo funciona DeepClinic Health
            </h2>
            <p className="mt-3 text-[15px] text-slate-500">
              La app que conecta al paciente con su médico y su salud.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/682dda116cdb3289f729c87c_sv1_3x-p-500.webp"
                  alt="App de paciente"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-6 pt-4 text-sm text-slate-700">
                <p className="text-[13px] font-semibold text-slate-900">1. Acceso al historial</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  Los pacientes pueden consultar sus recetas, resultados de laboratorio y notas de consulta en cualquier momento.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/682dda1b6e4efdc16a1d16ad_sv2_3x-p-500.webp"
                  alt="Chat médico-paciente"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-6 pt-4 text-sm text-slate-700">
                <p className="text-[13px] font-semibold text-slate-900">2. Comunicación segura</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  Canal de chat seguro y directo para resolver dudas sin necesidad de visitas presenciales.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/682dda247bf886638e57f4a2_sv3_3x-p-500.webp"
                  alt="Gestión de salud familiar"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-6 pt-4 text-sm text-slate-700">
                <p className="text-[13px] font-semibold text-slate-900">3. Salud familiar</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  Gestiona la salud de toda la familia, incluyendo niños y mascotas, desde una sola cuenta.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* MEJORES HISTORIAS, MAYOR SEGURIDAD */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-32 text-center md:py-36">
          <h2 className="text-[28px] font-semibold tracking-tight text-slate-900 sm:text-[32px]">
            Pacientes comprometidos, mejores resultados
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-[15px]">
            DeepClinic Health fomenta el autocuidado y la adherencia al tratamiento.
          </p>

          <div className="mt-10 space-y-8">
            {/* Fila superior: especialidades y transferencias */}
            <div className="grid gap-6 text-left md:grid-cols-2">
              {/* Especialidades */}
              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/especialidades.png"
                    alt="DeepClinic Health para todos"
                    width={640}
                    height={360}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="mt-4 text-sm text-slate-700">
                  <p className="text-sm font-semibold text-slate-900">Experiencia unificada</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Una sola app para interactuar con todos sus médicos y proveedores de salud.
                  </p>
                </div>
              </div>

              {/* Transferencias */}
              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/medico.png"
                    alt="Seguimiento de tratamiento"
                    width={640}
                    height={360}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="mt-4 text-sm text-slate-700">
                  <p className="text-sm font-semibold text-slate-900">
                    Mejor adherencia
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Recordatorios de medicamentos y citas ayudan a los pacientes a seguir su tratamiento al pie de la letra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AudienceTabs language="es" />

      {/* DEEPCLINIC HEALTH EN LA PRÁCTICA */}
      <section id="producto" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-32 md:py-36">
          <div className="text-center">
            <h2 className="text-[28px] font-semibold tracking-tight text-slate-900 sm:text-[32px]">
              DeepClinic Health en la práctica
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Modernizando la experiencia del paciente
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/Medica.png"
                  alt="Experiencia del paciente"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-700">
                <p className="text-justify">
                  Los pacientes valoran tener el control de su salud en la palma de su mano, lo que aumenta la lealtad hacia su médico.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/houston.png"
                  alt="Telemedicina"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-700">
                <p className="text-justify">
                  La telemedicina integrada permite consultas rápidas y seguimiento continuo sin desplazamientos.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ESTUDIOS DE CASO DESTACADOS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-32 md:py-36">
          {/* Caso 1 */}
          <div className="grid items-stretch gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-200">
              <Image
                src="/680b8bd084ba7f136270ee2a_testimonial1.png"
                alt="Paciente utilizando DeepClinic Health"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 22rem, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm">
              <div className="space-y-3">
                <p className="text-lg font-medium leading-snug text-slate-900 sm:text-xl">
                  «Tener todas las recetas y citas de mis hijos y mías en una sola app es increíble. Ya no pierdo papeles ni olvido cuándo toca la próxima revisión.»
                </p>
                <div className="text-xs text-slate-600">
                  <p className="font-semibold text-slate-900">María López</p>
                  <p>Madre de familia</p>
                  <p>Usuaria de DeepClinic Health</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SEGURIDAD */}
      <section id="seguridad" className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-32 md:py-36">
          {/* Título y subtítulo centrados */}
          <div className="text-center">
            <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
              Priorizamos la seguridad y la integridad
            </h2>
            <p className="mt-3 text-[15px] text-slate-500">
              DeepClinic Health protege la privacidad de tu información médica.
            </p>
          </div>

          {/* Fila de 3 bullets */}
          <div className="mt-12 grid gap-10 text-center text-sm text-slate-700 sm:text-base md:grid-cols-3">
            <div className="space-y-3">
              <div className="text-sm text-slate-500">
                <span aria-hidden>✓</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">
                Acceso biométrico
              </p>
              <p className="text-sm text-slate-700">
                Protege el acceso a tu app con huella digital o reconocimiento facial.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm text-slate-500">
                <span aria-hidden>✓</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">
                Tus datos son tuyos
              </p>
              <p className="text-sm text-slate-700">
                Tú decides qué compartir y con quién. Tienes control total sobre tu información.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm text-slate-500">
                <span aria-hidden>✓</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">
                Cumplimiento de privacidad
              </p>
              <p className="text-sm text-slate-700">
                Cumplimos con todas las normativas de protección de datos personales en salud.
              </p>
            </div>
          </div>

          {/* Bloque inferior con imagen y texto */}
          <div className="mt-14 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-300">
              <Image
                src="/hipaa.png"
                alt="Certificaciones de seguridad de DeepClinic Health"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 24rem, 100vw"
              />
            </div>

            <div className="space-y-4 text-left text-sm text-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                Con la confianza de familias en toda América
              </h3>
              <p>
                Basado en los más altos estándares de seguridad, DeepClinic Health garantiza una gestión de salud personal
                segura y confiable.
              </p>
              <Link
                href="/es/data-security"
                className="inline-flex items-center font-medium text-brand-accent-strong hover:text-brand-accent-hover"
              >
                Conoce más sobre nuestra seguridad <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
