import Image from "next/image";
import Link from "next/link";

import { BenefitsSimulator } from "../../../components/benefits-simulator";
import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function PricingPage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav />

      {/* HERO PRECIOS */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-5xl px-6 pb-16 text-center md:px-8 md:pb-20 lg:px-0">
          <MotionReveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Precios</p>
            <h1 className="mt-4 font-sans text-[42px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[56px] md:text-[64px]">
              De médicos independientes a grandes organizaciones de la salud
            </h1>
          </MotionReveal>

          <MotionReveal delayMs={100}>
            <p className="mt-6 text-[18px] leading-relaxed text-white/60">
              Ahorra alrededor de un 30 % del tiempo de consulta y elimina la documentación manual: solo habla y Copiloto
              Médico se encarga del resto. Sin coste de instalación, sin contrato anual.
            </p>
          </MotionReveal>

          <MotionReveal delayMs={200}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50 grayscale transition-all duration-500 hover:opacity-80 hover:grayscale-0">
              <Image
                src="/68a701201d6e0dcd3137fbbf_recoletas-p-500.avif"
                alt="Recoletas Salud"
                width={130}
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
                src="/680e793ec5490e5100c376a2_CGM.svg"
                alt="CompuGroup Medical"
                width={130}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
              <Image
                src="/680e64029f546840cd0fa79f_Arriaza.svg"
                alt="Instituto Médico Arriaza"
                width={120}
                height={32}
                className="h-6 w-auto brightness-200 contrast-0 invert"
              />
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
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* SIMULADOR DE RETORNO */}
      <section className="relative z-10 py-20 border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-3xl px-6 md:px-8 lg:px-0">
          <div className="mb-10 text-center">
            <MotionReveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                Simulador de beneficios
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium text-white/80">
                <span>Diseñado para médicos</span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span>Calcula tu retorno en menos de 1 minuto</span>
              </div>
              <h2 className="mt-6 text-[28px] font-semibold tracking-tight text-white sm:text-[36px]">
                ¿Qué gana una consulta típica con DeepClinic Copilot?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] text-white/50">
                Calcula el impacto económico de usar DeepClinic Copilot.
              </p>
            </MotionReveal>
          </div>

          <MotionReveal delayMs={200}>
            <BenefitsSimulator theme="dark" />
          </MotionReveal>
        </div>
      </section>

      {/* PLANES */}
      <section className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
          <div className="mb-16 text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                Elige el plan que mejor se adapta a tu consulta
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                Todos los planes incluyen acceso al asistente clínico de IA de DeepClinic Copilot y documentación solo con tu voz.
              </p>
            </MotionReveal>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Plan 1: Gratis */}
            <MotionReveal delayMs={0} className="h-full">
              <div className="flex h-full flex-col rounded-[24px] border border-white/10 bg-white/5 p-8 text-sm text-white shadow-lg transition-colors hover:bg-white/10">
                <p className="text-[14px] font-bold text-white">Gratis</p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                  Para médicos que quieren probar DeepClinic Copilot en su consulta sin compromiso.
                </p>
                <p className="mt-8 text-3xl font-bold text-white">Gratis durante 30 días</p>
                <div className="mt-8">
                  <Link
                    href="/signup"
                    className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-[13px] font-bold uppercase tracking-wider text-black hover:bg-white/90"
                  >
                    Pruébalo ya
                  </Link>
                </div>
                <ul className="mt-8 space-y-3 text-[13px] text-white/60">
                  <li>• Uso ilimitado del asistente clínico de IA durante el periodo de prueba.</li>
                  <li>• Plantillas estándar de notas y resúmenes clínicos.</li>
                  <li>• Sin compromiso: no te pedimos tu tarjeta de crédito.</li>
                </ul>
              </div>
            </MotionReveal>

            {/* Plan 2: Estándar */}
            <MotionReveal delayMs={100} className="h-full">
              <div className="relative flex h-full flex-col rounded-[24px] border border-sky-500/30 bg-sky-500/10 p-8 text-sm text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-sky-500/15">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sky-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Más popular
                </div>
                <p className="text-[14px] font-bold text-white">Plan estándar</p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/70">
                  Para médicos individuales y pequeñas clínicas que quieren incorporar DeepClinic Copilot al día a día.
                </p>
                <p className="mt-8 text-3xl font-bold text-white">
                  $1,999
                  <span className="ml-1 align-baseline text-sm font-normal text-white/50">MXN por usuario/mes</span>
                </p>
                <ul className="mt-8 space-y-3 text-[13px] text-white/70">
                  <li>• Pruébalo gratis con tu equipo antes de tomar la decisión final.</li>
                  <li>• Formación personalizada y acompañamiento de nuestro equipo clínico.</li>
                  <li>• Hasta 3 plantillas de informes médicos adaptadas a tu especialidad.</li>
                  <li>• Integraciones con tu sistema de historia clínica para transferir la nota en un clic.</li>
                  <li>• Sin permanencia: puedes cancelar en cualquier momento.</li>
                </ul>
              </div>
            </MotionReveal>

            {/* Plan 3: Empresa */}
            <MotionReveal delayMs={200} className="h-full">
              <div className="flex h-full flex-col rounded-[24px] border border-white/10 bg-white/5 p-8 text-sm text-white shadow-lg transition-colors hover:bg-white/10">
                <p className="text-[14px] font-bold text-white">Plan de empresa</p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                  Para hospitales, redes de clínicas y organizaciones asistenciales.
                </p>
                <p className="mt-8 text-3xl font-bold text-white">Precio a medida</p>
                <div className="mt-8">
                  <Link
                    href="/es/contact"
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-transparent px-4 py-3 text-[13px] font-bold uppercase tracking-wider text-white hover:bg-white/10"
                  >
                    Solicitar demo
                  </Link>
                </div>
                <ul className="mt-8 space-y-3 text-[13px] text-white/60">
                  <li>• Integraciones personalizadas con tus sistemas de historias clínicas y agenda.</li>
                  <li>• Plan de incorporación, formación y despliegue adaptado a cada servicio.</li>
                  <li>• Soporte prioritario y sesiones con nuestro equipo clínico y de producto.</li>
                  <li>• Informes detallados de uso, adopción e impacto en tiempo y consultas.</li>
                  <li>• Sin costes de instalación inicial ni cargos ocultos.</li>
                </ul>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <MotionReveal>
            <h2 className="text-center text-[28px] font-semibold tracking-tight text-white sm:text-[32px]">
              Preguntas frecuentes
            </h2>
          </MotionReveal>

          <div className="mt-12 divide-y divide-white/10">
            <MotionReveal delayMs={0}>
              <div className="py-8">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[15px] font-semibold text-white">
                    ¿Ofrecen descuentos por la compra de varias licencias?
                  </p>
                  <span className="text-white/40">•</span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-white/60">
                  Sí, ofrecemos descuentos por volumen para los equipos que compren una mayor cantidad de licencias. Ponte en
                  contacto con nosotros para que podamos diseñar una propuesta que se ajuste a tu uso previsto.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal delayMs={100}>
              <div className="py-8">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[15px] font-semibold text-white">
                    ¿Podemos tener licencias gratuitas para fines administrativos?
                  </p>
                  <span className="text-white/40">•</span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-white/60">
                  Sí, entendemos la necesidad de acceso administrativo y podemos ofrecer licencias sin coste para funciones de
                  coordinación, siempre que el uso clínico se realice con licencias de pago.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal delayMs={200}>
              <div className="py-8">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[15px] font-semibold text-white">
                    ¿DeepClinic Copilot puede transferir las notas automáticamente a mi sistema de registros médicos?
                  </p>
                  <span className="text-white/40">•</span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-white/60">
                  Sí. Admitimos muchos de los sistemas de registro basados en la web y un número cada vez mayor de sistemas
                  nativos. Nuestras integraciones con un solo clic hacen que la configuración sea rápida y fiable. Si tu sistema
                  no es compatible todavía, podemos estudiar contigo la mejor forma de integrarlo.
                </p>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="relative z-10 py-32 border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
          <MotionReveal>
            <p className="text-2xl font-medium leading-snug text-white/90 sm:text-3xl md:text-4xl">
              &quot;Hemos desplegado DeepClinic Copilot en nuestras clínicas y estamos muy contentos por cómo mejora las dinámicas de
              la atención de la salud. Ahora, nuestros médicos lo tienen más fácil para mirar a los ojos a los pacientes, en
              lugar de al ordenador&quot;.
            </p>
            <div className="mt-8 text-lg tracking-[0.3em] text-white/40">★★★★★</div>
            <div className="mt-8 flex flex-col items-center gap-4 text-sm text-white/60">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10 bg-white/5">
                <Image
                  src="/6810688005f18fd45c2ca548_Hugo Queijeiro profile.png"
                  alt="Foto de Hugo Queijeiro Pintos"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-white">Hugo Queijeiro Pintos</p>
                <p className="text-xs text-white/50">Director Médico, Clínicas Gaias</p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* SIEMPRE INCLUIDO */}
      <section className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
          <div className="mb-16 text-center">
            <MotionReveal>
              <h2 className="text-[24px] font-semibold tracking-tight text-white sm:text-[32px]">
                Siempre con DeepClinic Copilot
              </h2>
            </MotionReveal>
          </div>

          <MotionReveal delayMs={200}>
            <div className="grid gap-10 text-center text-sm text-white sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Asistente clínico de IA diseñado junto a médicos de América Latina",
                "Enfoque en cumplimiento de HIPAA y NOM mexicanas aplicables",
                "Documentación clínica solo con tu voz, sin tecleo manual",
                "Diseño intuitivo para consultas presenciales y telemedicina",
                "Datos cifrados y procesados en infraestructuras de América del Norte"
              ].map((text, i) => (
                <div key={i} className="space-y-3">
                  <div className="text-base text-white/40" aria-hidden>
                    •
                  </div>
                  <p className="text-[13px] font-medium leading-relaxed text-white/80">{text}</p>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 py-32 border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-8 lg:px-10">
          <MotionReveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/40">
              Comience hoy
            </p>
            <h2 className="mt-4 text-[32px] font-semibold tracking-tight text-white sm:text-[42px]">
              Pruebe DeepClinic Copilot en su consulta
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/60">
              Active una prueba gratuita y compruebe por sí mismo cuánto tiempo puede ahorrar en documentación administrativa.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
              >
                Empezar gratis
              </Link>
              <Link
                href="/es/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105"
              >
                Hablar con nosotros
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
