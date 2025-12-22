import Image from "next/image";
import Link from "next/link";

export default function CustomerStoriesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-3 py-2 md:px-5 lg:px-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="inline-block h-6 w-6 rounded-full border border-slate-900 bg-slate-900" />
              <span className="-ml-3 inline-block h-6 w-6 rounded-full border border-slate-900" />
            </div>
            <Link href="/" className="text-[18px] font-semibold tracking-tight text-slate-900">
              Copiloto Médico
            </Link>
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
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 pb-12 pt-20 md:flex-row md:items-center md:px-6 md:pb-16 md:pt-24 lg:px-0">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Historias de clientes
            </p>
            <h1 className="mt-3 font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[38px] md:text-[44px]">
              Cómo Copiloto Médico ayuda a los profesionales a centrarse en el paciente
            </h1>
            <p className="mt-4 text-[15px] text-slate-600">
              Clínicas, hospitales y proveedores digitales utilizan Copiloto Médico para reducir horas de documentación y
              devolver el foco a la consulta.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
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

          <div className="flex-1">
            <div className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 shadow-sm">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Impacto en la práctica diaria
              </p>
              <p className="text-sm text-slate-900">
                "Ahora pienso en el paciente, no en las notas." "Me ahorro varios minutos en cada visita." "Es difícil
                imaginar volver a teclear todo a mano." Son frases reales de profesionales que utilizan Copiloto Médico en
                su día a día.
              </p>
              <p className="text-xs text-slate-500">
                Descubre algunos de sus casos y cómo están transformando su trabajo clínico con ayuda de la IA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASOS DESTACADOS */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 lg:px-10">
          <div className="mb-8 text-center">
            <h2 className="text-[24px] font-semibold tracking-tight text-slate-900 sm:text-[28px]">
              Historias destacadas
            </h2>
            <p className="mt-2 text-sm text-slate-500 sm:text-[15px]">
              Organizaciones que ya utilizan asistentes clínicos de IA para reducir la carga administrativa.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full bg-slate-100">
                <Image
                  src="/68a701201d6e0dcd3137fbbf_recoletas-p-500.avif"
                  alt="Profesional sanitario en un hospital del grupo Recoletas"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 pb-5 pt-4 text-sm text-slate-700">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Hospitales privados</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Recoletas lleva la documentación asistida por IA a decenas de centros
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Un grupo hospitalario que busca liberar tiempo a sus especialistas en cada consulta, manteniendo la calidad
                  y el detalle de la historia clínica.
                </p>
                <div className="mt-4">
                  <Link
                    href="/es/customer-stories/recoletas"
                    className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                  >
                    Leer historia completa
                    <span className="ml-1" aria-hidden>
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full bg-slate-100">
                <Image
                  src="/680a17e9f7c495837f0a7ddb_mindler.png"
                  alt="Logotipo de un proveedor de psicología en remoto"
                  fill
                  className="object-contain p-6"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 pb-5 pt-4 text-sm text-slate-700">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Salud mental digital</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Psicólogos que ganan tiempo entre sesiones
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Un equipo de psicología online que utiliza la IA para documentar cada sesión de forma consistente, sin
                  alargar la jornada.
                </p>
                <div className="mt-4">
                  <Link
                    href="/es/customer-stories/mindler"
                    className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                  >
                    Ver caso de uso
                    <span className="ml-1" aria-hidden>
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full bg-slate-100">
                <Image
                  src="/680b8bd084ba7f136270ee2a_testimonial1.webp"
                  alt="Médico generalista utilizando un asistente clínico de IA"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 pb-5 pt-4 text-sm text-slate-700">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Atención primaria</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Más tiempo mirando al paciente, menos a la pantalla
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Centros de salud que utilizan Copiloto Médico para que cada profesional pueda dedicar más minutos a la
                  conversación clínica.
                </p>
                <div className="mt-4">
                  <Link
                    href="/es/customer-stories/familjelakarna"
                    className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                  >
                    Leer historia completa
                    <span className="ml-1" aria-hidden>
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Palabras de nuestros usuarios
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Profesionales de distintas especialidades explican cómo la IA les ayuda a documentar mejor y con menos estrés.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <figure className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 text-left text-sm text-slate-700 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src="/6810bcac6fc499ede820f7a0_Juan Mora.png"
                    alt="Foto de un médico internista"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="text-xs text-slate-600">
                  <p className="text-sm font-semibold text-slate-900">Médico internista</p>
                  <p>Hospital general</p>
                </div>
              </div>
              <div className="mt-3 text-amber-400">★★★★★</div>
              <blockquote className="mt-3 space-y-2">
                <p className="text-sm text-slate-800">
                  "El uso de Copiloto Médico no va de estar a la última en tecnología, sino de buena práctica clínica. Me evita
                  pasar horas tecleando al final del día y me permite dedicar ese tiempo a mis pacientes. Una vez lo pruebas,
                  no quieres volver atrás."
                </p>
              </blockquote>
            </figure>

            <figure className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 text-left text-sm text-slate-700 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src="/681068922ceb2a1128818e85_Carlos Alberto Encinas.png"
                    alt="Foto de un cirujano ortopédico"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="text-xs text-slate-600">
                  <p className="text-sm font-semibold text-slate-900">Cirujano ortopédico</p>
                  <p>Hospital universitario</p>
                </div>
              </div>
              <div className="mt-3 text-amber-400">★★★★★</div>
              <blockquote className="mt-3 space-y-2">
                <p>
                  "Mientras exploro al paciente y converso con él con naturalidad, Copiloto Médico transcribe y estructura la
                  información clínica en segundo plano. El mayor beneficio es que las historias clínicas se redactan
                  prácticamente solas, lo que me ahorra hasta un par de horas de trabajo administrativo al día."
                </p>
              </blockquote>
            </figure>

            <figure className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 text-left text-sm text-slate-700 shadow-sm md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src="/6810688005f18fd45c2ca548_Hugo Queijeiro profile.png"
                    alt="Foto de un director médico"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="text-xs text-slate-600">
                  <p className="text-sm font-semibold text-slate-900">Director médico</p>
                  <p>Grupo de clínicas</p>
                </div>
              </div>
              <div className="mt-3 text-amber-400">★★★★★</div>
              <blockquote className="mt-3 space-y-2">
                <p>
                  "Hemos desplegado Copiloto Médico en nuestras clínicas y vemos cómo mejora la dinámica de la atención. Los
                  profesionales pueden mirar a los ojos al paciente en lugar de al ordenador, y aun así las historias clínicas
                  quedan completas y bien estructuradas."
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center text-slate-50 md:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Empieza hoy
          </p>
          <h2 className="mt-4 text-[26px] font-semibold tracking-tight sm:text-[30px]">
            Lleva estas historias a tu consulta
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300">
            Prueba Copiloto Médico con tu propio flujo de trabajo y comprueba cómo cambia la forma en la que documentas cada
            visita.
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
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-2.5 text-[13px] font-semibold text-slate-50 hover:bg-slate-800"
            >
              Crear cuenta gratuita
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
