import Image from "next/image";
import Link from "next/link";

import { HeroVideo } from "../components/hero-video";
import { BenefitsSimulator } from "../components/benefits-simulator";
import { LanguageSwitcher } from "../components/language-switcher";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4 md:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="inline-block h-6 w-6 rounded-full border border-slate-900 bg-slate-900" />
              <span className="-ml-3 inline-block h-6 w-6 rounded-full border border-slate-900" />
            </div>
            <span className="text-[18px] font-semibold tracking-tight text-slate-900">Copiloto Médico</span>
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
              className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
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
            El asistente clínico de IA líder en{" "}
            <span className="border-b-[6px] border-[#d5ff7c] pb-1">America</span>
          </h1>
          <p className="mt-3 text-[15px] text-slate-500 sm:mt-4">
            Utilizado por más de 1.000 doctores que ahorran tiempo cada día con Copiloto Médico.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-6 py-2.5 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
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

      {/* COPILOTO MÉDICO EN LA PRÁCTICA */}
      <section id="producto" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12">
          <div className="text-center">
            <h2 className="text-[28px] font-semibold tracking-tight text-slate-900 sm:text-[32px]">
              Copiloto Médico en la práctica
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Hospitales y clínicas en México y Estados Unidos confían en nosotros
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/Medica.png"
                  alt="Médica Sur, hospital de alta especialidad en Ciudad de México"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-700">
                <p className="text-justify">
                  En México, hospitales de alta especialidad como Médica Sur buscan reducir la carga administrativa. Copiloto
                  Médico recorta cerca de un 40 % del tiempo de consulta y genera la nota clínica solo con tu voz.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/DoctorSV.png"
                  alt="Doctor SV, plataforma nacional de salud digital en El Salvador"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-700">
                <p className="text-justify">
                  En El Salvador, Doctor SV moderniza la historia clínica digital del país. Asistentes de IA como Copiloto
                  Médico complementan estas iniciativas al generar historias en minutos y reducir cerca de un 40 % del tiempo
                  de consulta.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/houston.png"
                  alt="Houston Methodist Hospital utilizando soluciones de inteligencia artificial"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-700">
                <p className="text-justify">
                  En Estados Unidos, hospitales como Houston Methodist Hospital lideran proyectos de scribes de IA. Copiloto
                  Médico acerca este enfoque a la región y ayuda a recortar hasta 2 horas diarias de documentación por
                  profesional.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* QUOTE DESTACADA JUAN MORA */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 pb-20 pt-8 text-center">
          <p className="text-3xl font-medium leading-snug text-slate-900 sm:text-4xl">
            ”Una vez pruebas Copiloto Médico,<br className="hidden sm:inline" /> no quieres volver atrás.”
          </p>
          <div className="mt-4 text-lg tracking-[0.3em] text-amber-400">★★★★★</div>
          <div className="mt-6 flex flex-col items-center gap-3 text-sm text-slate-600">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-300">
              <Image
                src="/6810bcac6fc499ede820f7a0_Juan Mora.png.png"
                alt="Foto de Juan Mora Delgado"
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

      {/* CÓMO FUNCIONA COPILOTO MÉDICO */}
      <section id="como-funciona" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8">
          <div className="text-center">
            <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
              Cómo funciona Copiloto Médico
            </h2>
            <p className="mt-3 text-[15px] text-slate-500">
              Nuestro asistente médico con inteligencia artificial captura la visita para que puedas prestar toda tu
              atención al paciente.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/682dda116cdb3289f729c87c_sv1_3x-p-500.webp"
                  alt="Pantalla de bienvenida de Copiloto Médico en un teléfono móvil"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-6 pt-4 text-sm text-slate-700">
                <p className="text-[13px] font-semibold text-slate-900">1. Inicia Copiloto Médico</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  Simplemente inicia Copiloto Médico en su ordenador o dispositivo móvil y estará listo. Funciona a la
                  perfección tanto para las visitas presenciales como virtuales.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/682dda1b6e4efdc16a1d16ad_sv2_3x-p-500.webp"
                  alt="Interfaz de Copiloto Médico mostrando el estado de escucha"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-6 pt-4 text-sm text-slate-700">
                <p className="text-[13px] font-semibold text-slate-900">2. Se ha creado tu historia clínica</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  Mientras atiendes al paciente, Copiloto Médico trabaja en segundo plano para redactar tus historias
                  clínicas.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/682dda247bf886638e57f4a2_sv3_3x-p-500.webp"
                  alt="Profesional de la salud revisando la historia clínica en un ordenador"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-6 pt-4 text-sm text-slate-700">
                <p className="text-[13px] font-semibold text-slate-900">3. Revisa y envía</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  Revisa la historia clínica y envíala a tu sistema de historia clínica electrónica con un solo clic.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* MEJORES HISTORIAS, MAYOR SEGURIDAD */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-16 text-center">
          <h2 className="text-[28px] font-semibold tracking-tight text-slate-900 sm:text-[32px]">
            Mejores historias, mayor seguridad
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-[15px]">
            Copiloto Médico hace que la documentación clínica sea más rápida, fácil y precisa.
          </p>

          <div className="mt-10 space-y-8">
            {/* Fila superior: especialidades y transferencias */}
            <div className="grid gap-6 text-left md:grid-cols-2">
              {/* Especialidades */}
              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/especialidades.png"
                    alt="Copiloto Médico adaptado a múltiples especialidades"
                    width={640}
                    height={360}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="mt-4 text-sm text-slate-700">
                  <p className="text-sm font-semibold text-slate-900">Más de 50 especialidades compatibles</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Copiloto Médico entiende el idioma de tu especialidad y profesión. Diseñado para médicos, psicólogos,
                    dentistas, fisioterapeutas, especialistas de urgencias, enfermeros y muchos más.
                  </p>
                  <div className="mt-3 grid gap-2 text-[11px] text-slate-600 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2">
                      <p className="text-[11px] font-semibold text-slate-900">
                        IA destilada por especialidad
                      </p>
                      <p className="mt-1">
                        Modelos propios entrenados con datos clínicos reales para cada especialidad, desde Medicina Interna
                        y Pediatría hasta Cirugía y Enfermería.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2">
                      <p className="text-[11px] font-semibold text-slate-900">
                        Menos ruido, más precisión
                      </p>
                      <p className="mt-1">
                        Cada modelo destilado se ajusta al lenguaje clínico de su especialidad para reducir errores y
                        alucinaciones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transferencias */}
              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/medico.png"
                    alt="Profesional de la salud transfiriendo la historia clínica digital con Copiloto Médico"
                    width={640}
                    height={360}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="mt-4 text-sm text-slate-700">
                  <p className="text-sm font-semibold text-slate-900">
                    Transferencias a tu historia clínica digital (HIS) con 1 clic
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Copiloto Médico se integra con tu historia clínica digital (HIS) y transfiere la documentación con un
                    solo clic. Olvídate de copiar y pegar entre sistemas.
                  </p>
                </div>
              </div>
            </div>

            {/* Fila inferior: genera historias, foto de consulta y codificación */}
            <div className="grid gap-6 text-left text-sm text-slate-700 md:grid-cols-3">
              {/* Genera historias, documentos y cartas */}
              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/682dda985c7d89da56d3ed2c_es7_4x.webp"
                    alt="Creación de justificantes y documentos con Copiloto Médico"
                    width={640}
                    height={360}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-900">Genera historias, documentos y cartas</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Obtén todo lo que necesitas de una consulta: historias clínicas, justificantes y otros documentos listos
                    para enviar.
                  </p>
                </div>
              </div>

              {/* Foto de consulta */}
              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/home_kid.png"
                    alt="Profesional de la salud utilizando Copiloto Médico durante una consulta"
                    width={640}
                    height={640}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-slate-600">
                  Copiloto Médico acompaña la consulta sin interrumpir la relación médico-paciente, manteniendo la atención
                  en la persona.
                </p>
              </div>

              {/* Codificación clínica integrada */}
              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/682ddaa1be3339a4db428f1f_es8_4x.webp"
                    alt="Ejemplo de codificación clínica automática con Copiloto Médico"
                    width={640}
                    height={360}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-900">Codificación clínica integrada</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Copiloto Médico muestra automáticamente los códigos clínicos relevantes para cada consulta, ayudando a
                    mantener una codificación precisa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESTUDIOS DE CASO DESTACADOS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-20">
          {/* Caso 1 */}
          <div className="grid items-stretch gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-200">
              <Image
                src="/680b8bd084ba7f136270ee2a_testimonial1.png"
                alt="Médico generalista que utiliza Copiloto Médico"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 22rem, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm">
              <div className="space-y-3">
                <p className="text-lg font-medium leading-snug text-slate-900 sm:text-xl">
                  «Estoy muy contenta con cómo Copiloto Médico me permite dedicar más tiempo al paciente en Médica Sur y
                  explicar el diagnóstico y tratamiento de manera más completa. Bienvenida la IA que humaniza la consulta».
                </p>
                <div className="text-xs text-slate-600">
                  <p className="font-semibold text-slate-900">Diana Martínez</p>
                  <p>Profesional de la salud</p>
                  <p>Pediatra</p>
                  <p>Médica Sur</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SEGURIDAD */}
      <section id="seguridad" className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          {/* Título y subtítulo centrados */}
          <div className="text-center">
            <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
              Priorizamos la seguridad y la integridad
            </h2>
            <p className="mt-3 text-[15px] text-slate-500">
              Copiloto Médico cumple con los más altos estándares de seguridad y protección de datos.
            </p>
          </div>

          {/* Fila de 3 bullets */}
          <div className="mt-12 grid gap-10 text-center text-sm text-slate-700 sm:text-base md:grid-cols-3">
            <div className="space-y-3">
              <div className="text-sm text-slate-500">
                <span aria-hidden>✓</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">
                HIPAA y Normas Oficiales Mexicanas (NOM)
              </p>
              <p className="text-sm text-slate-700">
                Copiloto Médico está diseñado para alinearse con los marcos de protección de datos de salud en México y
                Estados Unidos, incluyendo HIPAA y las Normas Oficiales Mexicanas aplicables al expediente clínico.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm text-slate-500">
                <span aria-hidden>✓</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">
                Sin documentación manual
              </p>
              <p className="text-sm text-slate-700">
                Nuestra solución de voz única permite a los profesionales de la salud centrarse en la atención al paciente, sin necesidad de documentación manual.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm text-slate-500">
                <span aria-hidden>✓</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">
                Tratamiento de datos en América del Norte
              </p>
              <p className="text-sm text-slate-700">
                Todos los datos se cifran y se gestionan en centros de datos ubicados en América del Norte, cumpliendo la
                normativa vigente en México y Estados Unidos.
              </p>
            </div>
          </div>

          {/* Bloque inferior con imagen y texto */}
          <div className="mt-14 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-300">
              <Image
                src="/hipaa.png"
                alt="Certificaciones de seguridad de Copiloto Médico"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 24rem, 100vw"
              />
            </div>

            <div className="space-y-4 text-left text-sm text-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                Con la confianza de más de 1000 doctores en toda América
              </h3>
              <p>
                Basado en los más altos estándares de seguridad, Copiloto Médico garantiza una documentación basada en IA
                segura y confiable.
              </p>
              <p>
                Desde grandes redes hospitalarias hasta clínicas especializadas, los profesionales de la salud utilizan
                Copiloto Médico para ganar tiempo, calidad y tranquilidad en cada consulta.
              </p>
              <Link
                href="/es/data-security"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              >
                Lee acerca de nuestros protocolos de seguridad
                <span className="ml-1" aria-hidden>
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="historias" className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Los Médicos, encantados
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Nos gusta Copiloto Médico. A nuestros usuarios, aún más.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Card 1 */}
            <figure className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 text-left text-sm text-slate-700 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src="/6810bcac6fc499ede820f7a0_Juan Mora.png.png"
                    alt="Foto de Juan Mora Delgado"
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
                  “El uso de Copiloto Médico no obedece a estar al día con los últimos avances tecnológicos. Es, más que
                  nada, un tema de buena práctica clínica. Copiloto Médico me permite no tener que pasar 2 horas al día
                  tecleando y 15 minutos con pacientes. Una vez lo pruebas, no quieres volver atrás.”
                </p>
              </blockquote>
            </figure>

            {/* Card 2 */}
            <figure className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 text-left text-sm text-slate-700 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src="/681068922ceb2a1128818e85_Carlos Alberto Encinas.png"
                    alt="Foto de Carlos Alberto Encinas Ullán"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="text-xs text-slate-600">
                  <p className="text-sm font-semibold text-slate-900">Carlos Alberto Encinas Ullán</p>
                  <p>Cirujano ortopédico, Hospital Universitario</p>
                </div>
              </div>
              <div className="mt-3 text-amber-400">★★★★★</div>
              <blockquote className="mt-3 space-y-2">
                <p>
                  “Mientras exploro al paciente y converso con él de forma natural, Copiloto Médico transcribe y estructura
                  toda la información clínica de forma precisa, incluso en casos complejos. El mayor beneficio: la
                  aplicación redacta automáticamente las historias clínicas, lo que me ha ahorrado hasta 2 horas diarias de
                  trabajo administrativo.”
                </p>
              </blockquote>
            </figure>

            {/* Card 3 */}
            <figure className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 text-left text-sm text-slate-700 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src="/6810688005f18fd45c2ca548_Hugo Queijeiro profile.png"
                    alt="Foto de Hugo Queijeiro Pintos"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="text-xs text-slate-600">
                  <p className="text-sm font-semibold text-slate-900">Hugo Queijeiro Pintos</p>
                  <p>Director médico, Clínicas Gaias</p>
                </div>
              </div>
              <div className="mt-3 text-amber-400">★★★★★</div>
              <blockquote className="mt-3 space-y-2">
                <p>
                  “Hemos desplegado Copiloto Médico en nuestras clínicas y estamos muy contentos por cómo mejora las
                  dinámicas de la atención sanitaria. Ahora, nuestros médicos lo tienen más fácil para mirar a los ojos a
                  los pacientes, en lugar de al ordenador.”
                </p>
              </blockquote>
            </figure>

            {/* Card 4 */}
            <figure className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 text-left text-sm text-slate-700 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src="/681068a3197614922f294a3e_Jose Fernández Cuesta Peñafiel.jpeg"
                    alt="Foto de Jose Fernández Cuesta Peñafiel"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="text-xs text-slate-600">
                  <p className="text-sm font-semibold text-slate-900">Jose Fernández Cuesta Peñafiel</p>
                  <p>Pediatra, hospitalización domiciliaria pediátrica</p>
                </div>
              </div>
              <div className="mt-3 text-amber-400">★★★★★</div>
              <blockquote className="mt-3 space-y-2">
                <p>
                  “En un entorno complejo como lo es la hospitalización domiciliaria pediátrica, con múltiples
                  interlocutores y conversaciones prolongadas, Copiloto Médico mantiene las historias clínicas precisas y
                  completas. Me siento tranquilo sabiendo que no se me va a olvidar nada de lo que comentan los padres de
                  mis pacientes.”
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </section>

      {/* IMPACTO EN NÚMEROS */}
      <section className="bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 lg:px-0">
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Impacto en números
            </p>
            <h2 className="mt-3 text-[26px] font-semibold tracking-tight text-slate-900 sm:text-[30px]">
              ¿Cuánto gana el médico por consulta usando Copiloto Médico?
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
              Ajusta tus números y ve cuántas horas puedes ahorrar, cuántas consultas adicionales podrías atender y cuánto
              ingreso extra podrías generar cada mes.
            </p>
          </div>
          <div className="mx-auto mt-4 max-w-3xl">
            <BenefitsSimulator variant="compact" />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-slate-100 bg-gradient-to-b from-[#d5ff7c]/35 via-white to-white">
        <div
          id="precio"
          className="mx-auto max-w-6xl px-6 py-20 text-center"
        >
          <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
            Comenzar a usar Copiloto Médico es muy fácil
          </h2>
          <p className="mt-2 text-[15px] text-slate-600">
            No se necesitan datos de pago. Empieza en 5 minutos.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Pruébalo gratis
            </Link>
          </div>
        </div>

        {/* FOOTER */}
        <footer
          id="recursos"
          className="border-t border-slate-100"
        >
          <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-slate-700 sm:text-[13px]">
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              <Link href="/es/product" className="hover:text-slate-900">
                Producto
              </Link>
              <Link href="/es/pricing" className="hover:text-slate-900">
                Precio
              </Link>
              <Link
                href="/es/login"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900"
              >
                Iniciar sesión
              </Link>
              <Link href="/es/contact" className="hover:text-slate-900">
                Contactar
              </Link>
              <Link href="/es/terms-of-service" className="hover:text-slate-900">
                Condiciones de servicio
              </Link>
              <Link href="/es/privacy-policy" className="hover:text-slate-900">
                Política de privacidad
              </Link>
              <Link href="/signup" className="hover:text-slate-900">
                Pruébalo gratis
              </Link>
            </nav>
            <p className="mt-4 text-center text-[11px] text-slate-400">
              © 2026 Medical Copilot. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}
