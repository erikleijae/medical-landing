import Image from "next/image";
import Link from "next/link";

export default function PricingPage() {
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
            <Link href="/es/pricing" className="hover:text-slate-900">
              Precio
            </Link>
            <Link href="/es/customer-stories" className="hover:text-slate-900">
              Historias de clientes
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

      {/* HERO PRECIOS */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-20 text-center md:px-6 md:pb-20 md:pt-24 lg:px-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Precios</p>
          <h1 className="mt-4 font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[40px] md:text-[46px]">
            De médicos independientes a grandes organizaciones sanitarias
          </h1>
          <p className="mt-4 text-[15px] text-slate-600">
            Ahorra entre 1 a 2 horas al día. Sin coste de instalación, sin contrato anual. Solo menos papeleo.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <Image
              src="/68a701201d6e0dcd3137fbbf_recoletas-p-500.avif"
              alt="Recoletas Salud"
              width={130}
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
              src="/680e793ec5490e5100c376a2_CGM.svg"
              alt="CompuGroup Medical"
              width={130}
              height={32}
              className="h-6 w-auto opacity-80"
            />
            <Image
              src="/680e64029f546840cd0fa79f_Arriaza.svg"
              alt="Instituto Médico Arriaza"
              width={120}
              height={32}
              className="h-6 w-auto opacity-80"
            />
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
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 lg:px-10">
          <div className="mb-10 text-center">
            <h2 className="text-[24px] font-semibold tracking-tight text-slate-900 sm:text-[28px]">
              Elige el plan que mejor se adapta a tu consulta
            </h2>
            <p className="mt-3 text-sm text-slate-500 sm:text-[15px]">
              Todos los planes incluyen acceso al asistente clínico de IA de Copiloto Médico.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Plan 1: Gratis */}
            <div className="flex flex-col rounded-3xl bg-slate-50 p-6 text-sm text-slate-800 shadow-sm md:p-8">
              <p className="text-sm font-semibold text-slate-900">Gratis</p>
              <p className="mt-1 text-xs text-slate-500">
                Para médicos independientes que quieran explorar Copiloto Médico.
              </p>
              <p className="mt-6 text-3xl font-semibold text-slate-900">Gratis durante 30 días</p>
              <div className="mt-6">
                <Link
                  href="/signup"
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-900 bg-white px-4 py-2 text-[13px] font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Pruebalo ya
                </Link>
              </div>
              <ul className="mt-6 space-y-2 text-xs text-slate-700">
                <li>• Uso ilimitado con toda su funcionalidad.</li>
                <li>• Plantillas estándar de informes médicos.</li>
                <li>• Sin compromiso: no te pediremos tu tarjeta de crédito.</li>
              </ul>
            </div>

            {/* Plan 2: Estándar */}
            <div className="flex flex-col rounded-3xl bg-[#dff4ff] p-6 text-sm text-slate-900 shadow-sm md:p-8">
              <p className="text-sm font-semibold text-slate-900">Plan estándar</p>
              <p className="mt-1 text-xs text-slate-600">
                Para médicos individuales y pequeñas clínicas que buscan la experiencia completa de Copiloto Médico.
              </p>
              <p className="mt-6 text-3xl font-semibold text-slate-900">
                $125
                <span className="ml-1 align-baseline text-sm font-normal text-slate-600">por usuario/mes</span>
              </p>
              <div className="mt-6">
                <Link
                  href="/es/contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-[13px] font-semibold text-white shadow-sm hover:bg-slate-800"
                >
                  Solicitar demo
                </Link>
              </div>
              <ul className="mt-6 space-y-2 text-xs text-slate-800">
                <li>• Pruebalo gratis con tu equipo antes de decidir.</li>
                <li>• Formación personalizada con nuestro equipo clínico.</li>
                <li>• Hasta 3 plantillas de informes médicos creadas a medida.</li>
                <li>• Integraciones con Sistemas de Información Clínica para transferir la nota en un clic.</li>
                <li>• Sin permanencia: puedes cancelar en cualquier momento.</li>
              </ul>
            </div>

            {/* Plan 3: Empresa */}
            <div className="flex flex-col rounded-3xl bg-slate-900 p-6 text-sm text-slate-50 shadow-sm md:p-8">
              <p className="text-sm font-semibold text-slate-50">Plan de empresa</p>
              <p className="mt-1 text-xs text-slate-300">
                Para clínicas grandes y organizaciones asistenciales.
              </p>
              <p className="mt-6 text-3xl font-semibold text-slate-50">Precio a medida</p>
              <div className="mt-6">
                <Link
                  href="/es/contact"
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-100 bg-transparent px-4 py-2 text-[13px] font-semibold text-slate-50 hover:bg-slate-50/10"
                >
                  Solicitar demo
                </Link>
              </div>
              <ul className="mt-6 space-y-2 text-xs text-slate-100">
                <li>• Integraciones personalizadas con su sistema de historias clínicas.</li>
                <li>• Incorporación, formación y gestión del despliegue a medida.</li>
                <li>• Soporte prioritario de nuestro equipo clínico.</li>
                <li>• Informes detallados de uso y adopción.</li>
                <li>• Sin costes de instalación, integración ni incorporación.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[24px] font-semibold tracking-tight text-slate-900 sm:text-[28px]">
            Preguntas frecuentes
          </h2>
          <div className="mt-10 divide-y divide-slate-200">
            <div className="py-6">
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-semibold text-slate-900">
                  ¿Ofrecen descuentos por la compra de varias licencias?
                </p>
                <span className="mt-1 text-xl text-slate-400" aria-hidden>
                  •
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Sí, ofrecemos descuentos por volumen para los equipos que compren una mayor cantidad de licencias. Ponte en
                contacto con nosotros para que podamos diseñar una propuesta que se ajuste a tu uso previsto.
              </p>
            </div>

            <div className="py-6">
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-semibold text-slate-900">
                  ¿Podemos tener licencias gratuitas para fines administrativos?
                </p>
                <span className="mt-1 text-xl text-slate-400" aria-hidden>
                  •
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Sí, entendemos la necesidad de acceso administrativo y podemos ofrecer licencias sin coste para funciones de
                coordinación, siempre que el uso clínico se realice con licencias de pago.
              </p>
            </div>

            <div className="py-6">
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-semibold text-slate-900">
                  ¿Copiloto Médico puede transferir las notas automáticamente a mi sistema de registros médicos?
                </p>
                <span className="mt-1 text-xl text-slate-400" aria-hidden>
                  •
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Sí. Admitimos muchos de los sistemas de registro basados en la web y un número cada vez mayor de sistemas
                nativos. Nuestras integraciones con un solo clic hacen que la configuración sea rápida y fiable. Si tu sistema
                no es compatible todavía, podemos estudiar contigo la mejor forma de integrarlo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-2xl font-medium leading-snug text-slate-900 sm:text-3xl md:text-4xl">
            "Hemos desplegado Copiloto Médico en nuestras clínicas y estamos muy contentos por cómo mejora las dinámicas de
            la atención sanitaria. Ahora, nuestros médicos lo tienen más fácil para mirar a los ojos a los pacientes, en
            lugar de al ordenador".
          </p>
          <div className="mt-6 text-lg tracking-[0.3em] text-amber-400">★★★★★</div>
          <div className="mt-6 flex flex-col items-center gap-3 text-sm text-slate-600">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-300">
              <Image
                src="/6810688005f18fd45c2ca548_Hugo Queijeiro profile.png"
                alt="Foto de Hugo Queijeiro Pintos"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Hugo Queijeiro Pintos</p>
              <p className="text-xs text-slate-500">Director Médico, Clínicas Gaias</p>
            </div>
          </div>
        </div>
      </section>

      {/* SIEMPRE INCLUIDO */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 lg:px-10">
          <div className="mb-10 text-center">
            <h2 className="text-[24px] font-semibold tracking-tight text-slate-900 sm:text-[28px]">
              Siempre con Copiloto Médico
            </h2>
          </div>

          <div className="grid gap-8 text-center text-sm text-slate-900 sm:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-2">
              <div className="text-base text-slate-900" aria-hidden>
                •
              </div>
              <p className="text-sm font-medium">Asistente médico de IA creado por médicos</p>
            </div>
            <div className="space-y-2">
              <div className="text-base text-slate-900" aria-hidden>
                •
              </div>
              <p className="text-sm font-medium">Marcado CE según MDR</p>
            </div>
            <div className="space-y-2">
              <div className="text-base text-slate-900" aria-hidden>
                •
              </div>
              <p className="text-sm font-medium">Certificado ISO 13485 y ENS Nivel ALTO</p>
            </div>
            <div className="space-y-2">
              <div className="text-base text-slate-900" aria-hidden>
                •
              </div>
              <p className="text-sm font-medium">Diseño intuitivo y minimalista</p>
            </div>
            <div className="space-y-2">
              <div className="text-base text-slate-900" aria-hidden>
                •
              </div>
              <p className="text-sm font-medium">Datos almacenados de forma segura en la UE</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center text-slate-50 md:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Comience hoy
          </p>
          <h2 className="mt-4 text-[26px] font-semibold tracking-tight sm:text-[30px]">
            Pruebe Copiloto Médico en su consulta
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300">
            Active una prueba gratuita y compruebe por sí mismo cuánto tiempo puede ahorrar en documentación administrativa.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-6 py-2.5 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
            >
              Empezar gratis
              <span className="ml-1" aria-hidden>
                →
              </span>
            </Link>
            <Link
              href="/es/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-2.5 text-[13px] font-semibold text-slate-50 hover:bg-slate-800"
            >
              Hablar con nosotros
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
