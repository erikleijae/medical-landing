import Image from "next/image";
import Link from "next/link";

import { BenefitsSimulator } from "../../../components/benefits-simulator";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-3 py-2 md:px-5 lg:px-6">
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
            <Link href="/es/customer-stories" className="hover:text-slate-900">
              Historias de clientes
            </Link>
            <Link href="/es/benefits-simulator" className="hover:text-slate-900">
              Simulador de beneficios
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

      {/* HERO PRECIOS */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-20 text-center md:px-6 md:pb-20 md:pt-24 lg:px-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Precios</p>
          <h1 className="mt-4 font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[40px] md:text-[46px]">
            De médicos independientes a grandes organizaciones de la salud
          </h1>
          <p className="mt-4 text-[15px] text-slate-600">
            Ahorra alrededor de un 30 % del tiempo de consulta y elimina la documentación manual: solo habla y Copiloto
            Médico se encarga del resto. Sin coste de instalación, sin contrato anual.
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

      {/* SIMULADOR DE RETORNO */}
      <section className="bg-slate-50/60">
        <div className="mx-auto max-w-3xl px-6 pb-20 pt-14 md:px-8 lg:px-0">
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Simulador de beneficios
            </p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1 text-[11px] font-semibold text-slate-50">
              <span>Diseñado para médicos</span>
              <span className="h-1 w-1 rounded-full bg-slate-50/60" />
              <span>Calcula tu retorno en menos de 1 minuto</span>
            </div>
            <h2 className="mt-4 font-display text-[26px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[30px]">
              ¿Qué gana una consulta típica con Copiloto Médico?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-[15px]">
              Calcula el impacto económico de usar Copiloto Médico.
            </p>
          </div>

          <BenefitsSimulator />
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
              Todos los planes incluyen acceso al asistente clínico de IA de Copiloto Médico y documentación solo con tu voz.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Plan 1: Gratis */}
            <div className="flex flex-col rounded-3xl bg-slate-50 p-6 text-sm text-slate-800 shadow-sm md:p-8">
              <p className="text-sm font-semibold text-slate-900">Gratis</p>
              <p className="mt-1 text-xs text-slate-500">
                Para médicos que quieren probar Copiloto Médico en su consulta sin compromiso.
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
                <li>• Uso ilimitado del asistente clínico de IA durante el periodo de prueba.</li>
                <li>• Plantillas estándar de notas y resúmenes clínicos.</li>
                <li>• Sin compromiso: no te pedimos tu tarjeta de crédito.</li>
              </ul>
            </div>

            {/* Plan 2: Estándar */}
            <div className="flex flex-col rounded-3xl bg-[#dff4ff] p-6 text-sm text-slate-900 shadow-sm md:p-8">
              <p className="text-sm font-semibold text-slate-900">Plan estándar</p>
              <p className="mt-1 text-xs text-slate-600">
                Para médicos individuales y pequeñas clínicas que quieren incorporar Copiloto Médico al día a día.
              </p>
              <p className="mt-6 text-3xl font-semibold text-slate-900">
                $1,999
                <span className="ml-1 align-baseline text-sm font-normal text-slate-600">MXN por usuario/mes</span>
              </p>
              <ul className="mt-6 space-y-2 text-xs text-slate-800">
                <li>• Pruébalo gratis con tu equipo antes de tomar la decisión final.</li>
                <li>• Formación personalizada y acompañamiento de nuestro equipo clínico.</li>
                <li>• Hasta 3 plantillas de informes médicos adaptadas a tu especialidad.</li>
                <li>• Integraciones con tu sistema de historia clínica para transferir la nota en un clic.</li>
                <li>• Sin permanencia: puedes cancelar en cualquier momento.</li>
              </ul>
            </div>

            {/* Plan 3: Empresa */}
            <div className="flex flex-col rounded-3xl bg-slate-900 p-6 text-sm text-slate-50 shadow-sm md:p-8">
              <p className="text-sm font-semibold text-slate-50">Plan de empresa</p>
              <p className="mt-1 text-xs text-slate-300">
                Para hospitales, redes de clínicas y organizaciones asistenciales.
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
                <li>• Integraciones personalizadas con tus sistemas de historias clínicas y agenda.</li>
                <li>• Plan de incorporación, formación y despliegue adaptado a cada servicio.</li>
                <li>• Soporte prioritario y sesiones con nuestro equipo clínico y de producto.</li>
                <li>• Informes detallados de uso, adopción e impacto en tiempo y consultas.</li>
                <li>• Sin costes de instalación inicial ni cargos ocultos.</li>
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
            &quot;Hemos desplegado Copiloto Médico en nuestras clínicas y estamos muy contentos por cómo mejora las dinámicas de
            la atención de la salud. Ahora, nuestros médicos lo tienen más fácil para mirar a los ojos a los pacientes, en
            lugar de al ordenador&quot;.
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
              <p className="text-sm font-medium">Asistente clínico de IA diseñado junto a médicos de América Latina</p>
            </div>
            <div className="space-y-2">
              <div className="text-base text-slate-900" aria-hidden>
                •
              </div>
              <p className="text-sm font-medium">Enfoque en cumplimiento de HIPAA y NOM mexicanas aplicables</p>
            </div>
            <div className="space-y-2">
              <div className="text-base text-slate-900" aria-hidden>
                •
              </div>
              <p className="text-sm font-medium">Documentación clínica solo con tu voz, sin tecleo manual</p>
            </div>
            <div className="space-y-2">
              <div className="text-base text-slate-900" aria-hidden>
                •
              </div>
              <p className="text-sm font-medium">Diseño intuitivo para consultas presenciales y telemedicina</p>
            </div>
            <div className="space-y-2">
              <div className="text-base text-slate-900" aria-hidden>
                •
              </div>
              <p className="text-sm font-medium">Datos cifrados y procesados en infraestructuras de América del Norte</p>
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
