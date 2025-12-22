import Image from "next/image";
import Link from "next/link";

import { HeroVideo } from "../components/hero-video";

export default function HomePage() {
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
            <Link href="/es/product" className="hover:text-slate-900">
              Producto
            </Link>
            <Link href="/es/customer-stories" className="hover:text-slate-900">
              Historias de clientes
            </Link>
            <Link href="/es/pricing" className="hover:text-slate-900">
              Precio
            </Link>
          </nav>

          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/es/login"
              target="_blank"
              rel="noreferrer"
              className="hidden text-slate-700 hover:text-slate-900 sm:inline"
            >
              Iniciar sesión
            </Link>
            <span className="hidden text-slate-300 sm:inline">|</span>
            <Link
              href="/signup"
              className="hidden text-slate-700 hover:text-slate-900 sm:inline"
            >
              Registrarse
            </Link>
            <Link
              href="/es/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
            >
              Solicitar demo
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
            El asistente clínico de IA líder en{' '}
            <span className="border-b-[6px] border-[#d5ff7c] pb-1">America</span>
          </h1>
          <p className="mt-3 text-[15px] text-slate-500 sm:mt-4">
            Más de 1.000 organizaciones sanitarias están ahorrando horas al día en tareas administrativas con Copiloto
            Médico.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/es/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-6 py-2.5 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
            >
              Solicitar demo
              <span className="ml-1" aria-hidden>
                →
              </span>
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-[13px] font-semibold text-slate-900 hover:bg-slate-50"
            >
              Pruébalo gratis
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

      {/* TANDem EN LA PRÁCTICA */}
      <section id="producto" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12">
          <div className="text-center">
            <h2 className="text-[28px] font-semibold tracking-tight text-slate-900 sm:text-[32px]">
              Copiloto Médico en la práctica
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Más de 1000 organizaciones sanitarias confían en nosotros
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/68a701201d6e0dcd3137fbbf_recoletas-p-500.avif"
                  alt="Recoletas elige a Copiloto Médico"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-700">
                <p>
                  Recoletas elige a Copiloto Médico para llevar la IA a las consultas de más de 50 hospitales y clínicas
                  en España.
                </p>
                <Link
                  href="/es/customer-stories/recoletas"
                  className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                >
                  Leer publicación
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
                  alt="Copiloto Médico se ha asociado con Accurx"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-700">
                <p>
                  Copiloto Médico se ha asociado con Accurx para ofrecer nuestro escriba médico con IA a 200.000
                  profesionales del NHS.
                </p>
                <Link
                  href="/es/news/accurx-partnership"
                  className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                >
                  Leer publicación
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
                  alt="Praktikertjänst confía en Copiloto Médico"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-700">
                <p>
                  Praktikertjänst elige el asistente médico de IA de Copiloto Médico para llevar la documentación
                  asistida por IA a la atención diaria.
                </p>
                <Link
                  href="/es/customer-stories/praktikertjanst"
                  className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                >
                  Ver video
                  <span className="ml-1" aria-hidden>
                    →
                  </span>
                </Link>
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
                src="/6810bcac6fc499ede820f7a0_Juan Mora.png"
                alt="Foto de Juan Mora Delgado"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Juan Mora Delgado</p>
              <p className="text-xs text-slate-500">Médico internista, Hospital de Jerez</p>
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
                  alt="Profesional sanitario revisando la historia clínica en un ordenador"
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
                    src="/682dda8727cd852241825c5f_es5_4x.webp"
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
                    Copiloto Médico entiende el idioma de tu especialidad y profesión. Diseñado para médicos, enfermeros,
                    psicólogos, dentistas, fisioterapeutas y muchos más.
                  </p>
                </div>
              </div>

              {/* Transferencias */}
              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/682dda8f34f0db0e4a4da632_es6_4x.webp"
                    alt="Botón de Transferir historia de Copiloto Médico"
                    width={640}
                    height={360}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="mt-4 text-sm text-slate-700">
                  <p className="text-sm font-semibold text-slate-900">Transferencias al HIS con 1 clic</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Copiloto Médico se integra con tu sistema de historia clínica y transfiere la documentación con un solo
                    clic. Olvídate de copiar y pegar entre sistemas.
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
                    Obtén todo lo que necesitas de una consulta: historias clínicas, justificantes y otros documentos
                    listos para enviar.
                  </p>
                </div>
              </div>

              {/* Foto de consulta */}
              <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/680b89c61846a7cf255a4e19_uk_8.webp"
                    alt="Profesional sanitario utilizando Copiloto Médico durante una consulta"
                    width={640}
                    height={640}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-slate-600">
                  Copiloto Médico acompaña la consulta sin interrumpir la relación médico-paciente, manteniendo la
                  atención en la persona.
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
                src="/680b8bd084ba7f136270ee2a_testimonial1.webp"
                alt="Médico generalista que utiliza Copiloto Médico"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 22rem, 100vw"
              />
            </div>
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm">
              <div className="space-y-3">
                <p className="text-lg font-medium leading-snug text-slate-900 sm:text-xl">
                  «Copiloto Médico facilita mi jornada laboral para poder pasar más tiempo con cada paciente».
                </p>
                <div className="text-xs text-slate-600">
                  <p className="font-semibold text-slate-900">Médico generalista</p>
                  <p>Familjeläkarna, Suecia</p>
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
                >
                  Ver estudio de caso
                  <span className="ml-1" aria-hidden>
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Caso 2 */}
          <div className="mt-16 grid items-center gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,0.7fr)]">
            <div className="space-y-3 text-left">
              <p className="text-xl font-medium leading-snug text-slate-900 sm:text-2xl">
                Ahora, los psicólogos de Mindler se ahorran horas todos los días, con menos estrés entre las sesiones.
              </p>
              <div className="text-xs text-slate-600">
                <p className="font-semibold text-slate-900">Mindler</p>
                <p>Proveedor de psicología en remoto</p>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
                >
                  Ver estudio de caso
                  <span className="ml-1" aria-hidden>
                    →
                  </span>
                </button>
              </div>
            </div>

            <div className="relative h-40 overflow-hidden rounded-3xl bg-[#e5d0ff] md:h-44">
              <Image
                src="/680a17e9f7c495837f0a7ddb_mindler.png"
                alt="Logotipo de Mindler"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 16rem, 60vw"
              />
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
                Leyes de datos de pacientes y RGPD
              </p>
              <p className="text-sm text-slate-700">
                Nuestra solución cumple totalmente con las leyes nacionales sobre datos de pacientes y con el RGPD.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm text-slate-500">
                <span aria-hidden>✓</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">
                Sin almacenamiento de audio
              </p>
              <p className="text-sm text-slate-700">
                El audio se procesa en tiempo real durante la consulta y no se almacena una vez finalizada.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm text-slate-500">
                <span aria-hidden>✓</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">
                Tratamiento de datos dentro de la UE
              </p>
              <p className="text-sm text-slate-700">
                Todos los datos se cifran y se gestionan dentro de America cumpliendo la normativa vigente.
              </p>
            </div>
          </div>

          {/* Bloque inferior con imagen y texto */}
          <div className="mt-14 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-300">
              <Image
                src="/692573bae283b2fdbee9a46b_spain.avif"
                alt="Certificaciones de seguridad de Copiloto Médico"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 24rem, 100vw"
              />
            </div>

            <div className="space-y-4 text-left text-sm text-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                Con la confianza de más de 1000 organizaciones sanitarias de toda America
              </h3>
              <p>
                Basado en los más altos estándares de seguridad, Copiloto Médico garantiza una documentación basada en IA
                segura y confiable.
              </p>
              <p>
                Desde grandes redes hospitalarias hasta clínicas especializadas, los profesionales sanitarios utilizan
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
                    src="/6810bcac6fc499ede820f7a0_Juan Mora.png"
                    alt="Foto de Juan Mora Delgado"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="text-xs text-slate-600">
                  <p className="text-sm font-semibold text-slate-900">Juan Mora Delgado</p>
                  <p>Médico internista, Hospital de Jerez</p>
                </div>
              </div>
              <div className="mt-3 text-amber-400">★★★★★</div>
              <blockquote className="mt-3 space-y-2">
                <p className="text-sm text-slate-800">
                  “El uso de Copiloto Médico no obedece a estar al día con los últimos avances tecnológicos. Es, más que
                  nada, un tema de buena práctica clínica. Copiloto Médico me permite no tener que pasar 3 horas al día
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
                  “Mientras exploro al paciente y converso con él de forma natural, Copiloto Médico transcribe y
                  estructura toda la información clínica de forma precisa, incluso en casos complejos. El mayor
                  beneficio: la aplicación redacta automáticamente las historias clínicas, lo que me ha ahorrado hasta 2
                  horas diarias de trabajo administrativo.”
                </p>
              </blockquote>
            </figure>

            {/* Card 3 */}
            <figure className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 text-left text-sm text-slate-700 shadow-sm">
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
                  <p>Pediatra, Hospital</p>
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

          <div className="mt-10 flex justify-center">
            <Link
              href="/es/customer-stories"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
            >
              Ver historias de clientes
              <span className="ml-1" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="precio" className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
            Comenzar a usarlo es muy fácil
          </h2>
          <p className="mt-2 text-[15px] text-slate-600">
            No se necesitan datos de pago. Empieza en 5 minutos.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/es/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black"
            >
              Solicitar demo
              <span className="ml-1" aria-hidden>
                →
              </span>
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Pruébalo gratis
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="recursos" className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-xs text-slate-700 sm:text-[13px]">
          <div className="grid gap-10 sm:grid-cols-3">
            {/* Columna 1: Copiloto Médico / Producto */}
            <div className="text-left">
              <h3 className="mb-3 text-sm font-semibold text-slate-900">
                Copiloto Médico
              </h3>
              <ul className="space-y-1.5">
                <li>
                  <Link
                    href="/es/product"
                    className="hover:text-slate-900"
                  >
                    Producto
                  </Link>
                </li>
                <li>
                  <Link
                    href="/es/customer-stories"
                    className="hover:text-slate-900"
                  >
                    Historias de clientes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/es/pricing"
                    className="hover:text-slate-900"
                  >
                    Precio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/es/login"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-slate-900"
                  >
                    Iniciar sesión
                  </Link>
                </li>
                <li>
                  <Link
                    href="/es/contact"
                    className="hover:text-slate-900"
                  >
                    Solicitar demo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/es/contact"
                    className="hover:text-slate-900"
                  >
                    Contactar
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="hover:text-slate-900"
                  >
                    Pruébalo gratis
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 2: Recursos */}
            <div className="text-left">
              <h3 className="mb-3 text-sm font-semibold text-slate-900">Recursos</h3>
              <ul className="space-y-1.5">
                <li>
                  <Link href="/es/data-security" className="hover:text-slate-900">
                    Seguridad de datos
                  </Link>
                </li>
                <li>
                  <Link href="/es/trust-center" className="hover:text-slate-900">
                    Centro de confianza
                  </Link>
                </li>
                <li>
                  <Link href="/es/news" className="hover:text-slate-900">
                    Noticias
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://intercom-help.eu/tandem-eu/en/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-slate-900"
                  >
                    Help center ↗
                  </Link>
                </li>
                <li>
                  <Link href="/es/customer-stories" className="hover:text-slate-900">
                    Historias de clientes
                  </Link>
                </li>
                <li>
                  <Link href="/es/about" className="hover:text-slate-900">
                    Acerca de nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/es/download/instructions-for-use"
                    className="hover:text-slate-900"
                  >
                    Instrucciones de uso ↗
                  </Link>
                </li>
                <li>
                  <Link href="/es/download/product-label" className="hover:text-slate-900">
                    Etiqueta del producto ↗
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 3: Jurídico */}
            <div className="text-left">
              <h3 className="mb-3 text-sm font-semibold text-slate-900">Jurídico</h3>
              <ul className="space-y-1.5">
                <li>
                  <Link href="/es/terms-of-service" className="hover:text-slate-900">
                    Condiciones de servicio
                  </Link>
                </li>
                <li>
                  <Link href="/es/privacy-policy" className="hover:text-slate-900">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/es/cookie-policy" className="hover:text-slate-900">
                    Política de Cookies
                  </Link>
                </li>
                <li>
                  <Link href="/es/accessibility-statement" className="hover:text-slate-900">
                    Declaración de accesibilidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
