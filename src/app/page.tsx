import Image from "next/image";
import Link from "next/link";

import { HeroVideo } from "../components/hero-video";
import { BenefitsSimulator } from "../components/benefits-simulator";
import { ConsultationsCounter, HoursSavedCounter } from "../components/consultations-counter";
import { AudienceTabs } from "../components/audience-tabs";
import { GrokBackground } from "../components/grok-background";
import { DeepClinicTopNav } from "../components/deepclinic-top-nav";
import { MotionReveal } from "../components/motion-reveal";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav />

      {/* HERO */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center md:px-8 lg:px-0">
          <MotionReveal>
            <h1 className="font-sans text-[42px] font-bold leading-[0.95] tracking-tighter text-white sm:text-[56px] md:text-[72px]">
              El asistente clínico de IA líder en{" "}
              <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                América
              </span>
            </h1>
          </MotionReveal>

          <MotionReveal delayMs={100}>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/60 sm:text-[20px]">
              Utilizado por más de 1.000 doctores que ahorran tiempo cada día con DeepClinic Copilot.
            </p>
          </MotionReveal>

          <MotionReveal delayMs={200}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105"
              >
                Comenzar gratis
              </Link>
            </div>
          </MotionReveal>
        </div>

        <MotionReveal delayMs={300}>
          <div className="mx-auto max-w-6xl px-6 pb-12 md:px-8 lg:px-0 mt-20">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-50 grayscale transition-all duration-500 hover:opacity-80 hover:grayscale-0">
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

      <ConsultationsCounter
        locale="es"
        title="Consultas con DeepClinic Copilot"
        subtitle="Este número aumenta en tiempo real mientras navegas."
        theme="dark"
      />

      <HoursSavedCounter
        locale="es"
        title="Horas ahorradas"
        subtitle="Ahorramos el 30% del tiempo de consulta"
        theme="dark"
      />

      {/* CÓMO FUNCIONA DEEPCLINIC COPILOT */}
      <section id="como-funciona" className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                Cómo funciona DeepClinic Copilot
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                Nuestro asistente médico con inteligencia artificial captura la visita para que puedas prestar toda tu
                atención al paciente.
              </p>
            </MotionReveal>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <MotionReveal delayMs={0} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda116cdb3289f729c87c_sv1_3x-p-500.webp"
                    alt="Pantalla de bienvenida de DeepClinic Copilot en un teléfono móvil"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">01. INICIA DEEPCLINIC</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Simplemente inicia DeepClinic Copilot en su ordenador o dispositivo móvil y estará listo. Funciona a la
                    perfección tanto para las visitas presenciales como virtuales.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={100} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda1b6e4efdc16a1d16ad_sv2_3x-p-500.webp"
                    alt="Interfaz de DeepClinic Copilot mostrando el estado de escucha"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">02. SE HA CREADO TU HISTORIA</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Mientras atiendes al paciente, DeepClinic Copilot trabaja en segundo plano para redactar tus historias
                    clínicas.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={200} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full mix-blend-overlay opacity-80 transition-opacity group-hover:opacity-100">
                  <Image
                    src="/682dda247bf886638e57f4a2_sv3_3x-p-500.webp"
                    alt="Profesional de la salud revisando la historia clínica en un ordenador"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[14px] font-semibold tracking-wide text-white">03. REVISA Y ENVÍA</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Revisa la historia clínica y envíala a tu sistema de historia clínica electrónica con un solo clic.
                  </p>
                </div>
              </article>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* MEJORES HISTORIAS, MAYOR SEGURIDAD */}
      <section className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
          <MotionReveal>
            <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
              Mejores historias, mayor seguridad
            </h2>
            <p className="mt-4 text-[16px] text-white/50">
              DeepClinic Copilot hace que la documentación clínica sea más rápida, fácil y precisa.
            </p>
          </MotionReveal>

          <div className="mt-16 space-y-8 text-left">
            {/* Fila superior: especialidades y transferencias */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Especialidades */}
              <MotionReveal delayMs={0}>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
                  <div className="relative overflow-hidden rounded-xl bg-black/20 aspect-video w-full">
                    <Image
                      src="/especialidades.png"
                      alt="DeepClinic Copilot adaptado a múltiples especialidades"
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[14px] font-semibold tracking-wide text-white">MÁS DE 50 ESPECIALIDADES COMPATIBLES</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                      DeepClinic Copilot entiende el idioma de tu especialidad y profesión. Diseñado para médicos, psicólogos,
                      dentistas, fisioterapeutas, especialistas de urgencias, enfermeros y muchos más.
                    </p>
                    <div className="mt-4 grid gap-3 text-[11px] text-white/50 sm:grid-cols-2">
                      <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-white">
                          IA destilada por especialidad
                        </p>
                        <p className="mt-1">
                          Modelos propios entrenados con datos clínicos reales para cada especialidad.
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-white">
                          Menos ruido, más precisión
                        </p>
                        <p className="mt-1">
                          Cada modelo destilado se ajusta al lenguaje clínico de su especialidad.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionReveal>

              {/* Transferencias */}
              <MotionReveal delayMs={150}>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
                  <div className="relative overflow-hidden rounded-xl bg-black/20 aspect-video w-full">
                    <Image
                      src="/medico.png"
                      alt="Profesional de la salud transfiriendo la historia clínica digital con DeepClinic Copilot"
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[14px] font-semibold tracking-wide text-white">
                      TRANSFERENCIAS A TU HIS CON 1 CLIC
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                      DeepClinic Copilot se integra con tu historia clínica digital (HIS) y transfiere la documentación con un
                      solo clic. Olvídate de copiar y pegar entre sistemas.
                    </p>
                  </div>
                </div>
              </MotionReveal>
            </div>

            {/* Fila inferior: genera historias, foto de consulta y codificación */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* Genera historias, documentos y cartas */}
              <MotionReveal delayMs={0}>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 h-full">
                  <div className="relative overflow-hidden rounded-xl bg-black/20 aspect-video w-full">
                    <Image
                      src="/682dda985c7d89da56d3ed2c_es7_4x.webp"
                      alt="Creación de justificantes y documentos con DeepClinic Copilot"
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[14px] font-semibold tracking-wide text-white">GENERA HISTORIAS Y CARTAS</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                      Obtén historias clínicas, justificantes y otros documentos listos para enviar.
                    </p>
                  </div>
                </div>
              </MotionReveal>

              {/* Foto de consulta */}
              <MotionReveal delayMs={100}>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 h-full">
                  <div className="relative overflow-hidden rounded-xl bg-black/20 aspect-square w-full">
                    <Image
                      src="/home_kid.png"
                      alt="Profesional de la salud utilizando DeepClinic Copilot durante una consulta"
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <p className="mt-6 text-[13px] leading-relaxed text-white/60">
                    DeepClinic Copilot acompaña la consulta sin interrumpir la relación médico-paciente, manteniendo la atención
                    en la persona.
                  </p>
                </div>
              </MotionReveal>

              {/* Codificación clínica integrada */}
              <MotionReveal delayMs={200}>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 h-full">
                  <div className="relative overflow-hidden rounded-xl bg-black/20 aspect-video w-full">
                    <Image
                      src="/682ddaa1be3339a4db428f1f_es8_4x.webp"
                      alt="Ejemplo de codificación clínica automática con DeepClinic Copilot"
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[14px] font-semibold tracking-wide text-white">CODIFICACIÓN CLÍNICA</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                      Muestra automáticamente los códigos clínicos relevantes para cada consulta, ayudando a mantener una codificación precisa.
                    </p>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      <AudienceTabs language="es" theme="dark" />

      {/* DEEPCLINIC COPILOT EN LA PRÁCTICA */}
      <section id="producto" className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                DeepClinic Copilot en la práctica
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                Hospitales y clínicas en México y Estados Unidos confían en nosotros
              </p>
            </MotionReveal>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <MotionReveal delayMs={0}>
              <article className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/Medica.png"
                    alt="Médica Sur, hospital de alta especialidad en Ciudad de México"
                    fill
                    className="object-cover opacity-90"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-8">
                  <p className="text-[14px] leading-relaxed text-white/80">
                    En México, hospitales de alta especialidad como Médica Sur buscan reducir la carga administrativa. Copiloto
                    Médico recorta cerca de un 30 % del tiempo de consulta y genera la nota clínica solo con tu voz.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={150}>
              <article className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/houston.png"
                    alt="Houston Methodist Hospital utilizando soluciones de inteligencia artificial"
                    fill
                    className="object-cover opacity-90"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-8">
                  <p className="text-[14px] leading-relaxed text-white/80">
                    En Estados Unidos, hospitales como Houston Methodist Hospital lideran proyectos de scribes de IA. Copiloto
                    Médico acerca este enfoque a la región y ayuda a recortar hasta 2 horas diarias de documentación por
                    profesional.
                  </p>
                </div>
              </article>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* ESTUDIOS DE CASO DESTACADOS */}
      <section className="relative z-10 py-32 border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <MotionReveal>
            <div className="grid items-center gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div className="relative aspect-square w-full overflow-hidden rounded-[32px] border border-white/10 bg-black">
                <Image
                  src="/680b8bd084ba7f136270ee2a_testimonial1.png"
                  alt="Médico generalista que utiliza DeepClinic Copilot"
                  fill
                  className="object-cover opacity-80"
                  sizes="(min-width: 768px) 22rem, 100vw"
                />
              </div>
              <div className="flex flex-col justify-center p-6 text-left">
                <div className="space-y-6">
                  <p className="text-2xl font-medium leading-relaxed text-white/90">
                    «Estoy muy contenta con cómo DeepClinic Copilot me permite dedicar más tiempo al paciente en Médica Sur y
                    explicar el diagnóstico y tratamiento de manera más completa. Bienvenida la IA que humaniza la consulta».
                  </p>
                  <div className="border-l-2 border-white/20 pl-4">
                    <p className="text-sm font-bold uppercase tracking-wider text-white">Diana Martínez</p>
                    <p className="text-sm text-white/50">Pediatra • Médica Sur</p>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* QUOTE DESTACADA JUAN MORA */}
      <section className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <MotionReveal>
            <p className="text-3xl font-medium leading-snug text-white/90 sm:text-4xl">
              ”Una vez pruebas DeepClinic Copilot,<br className="hidden sm:inline" /> no quieres volver atrás.”
            </p>
            <div className="mt-6 text-lg tracking-[0.3em] text-white/40">★★★★★</div>
            <div className="mt-8 flex flex-col items-center gap-4 text-sm text-white/60">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10 bg-white/5">
                <Image
                  src="/6810bcac6fc499ede820f7a0_Juan Mora.png.png"
                  alt="Foto de Juan Mora Delgado"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-white">Juan Mora Delgado</p>
                <p className="text-xs text-white/50">Médica Sur</p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="historias" className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-16 text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                Los Médicos, encantados
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                Nos gusta DeepClinic Copilot. A nuestros usuarios, aún más.
              </p>
            </MotionReveal>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                text: "El uso de DeepClinic Copilot no obedece a estar al día con los últimos avances tecnológicos. Es, más que nada, un tema de buena práctica clínica. DeepClinic Copilot me permite no tener que pasar 2 horas al día tecleando y 15 minutos con pacientes. Una vez lo pruebas, no quieres volver atrás.",
                name: "Diana Martínez",
                role: "Médica Sur",
                img: "/6810bcac6fc499ede820f7a0_Juan Mora.png.png"
              },
              {
                text: "Mientras exploro al paciente y converso con él de forma natural, DeepClinic Copilot transcribe y estructura toda la información clínica de forma precisa, incluso en casos complejos. El mayor beneficio: la aplicación redacta automáticamente las historias clínicas, lo que me ha ahorrado hasta 2 horas diarias de trabajo administrativo.",
                name: "Carlos Alberto Encinas Ullán",
                role: "Cirujano ortopédico, Hospital Universitario",
                img: "/681068922ceb2a1128818e85_Carlos Alberto Encinas.png"
              },
              {
                text: "Hemos desplegado DeepClinic Copilot en nuestras clínicas y estamos muy contentos por cómo mejora las dinámicas de la atención sanitaria. Ahora, nuestros médicos lo tienen más fácil para mirar a los ojos a los pacientes, en lugar de al ordenador.",
                name: "Hugo Queijeiro Pintos",
                role: "Director médico, Clínicas Gaias",
                img: "/6810688005f18fd45c2ca548_Hugo Queijeiro profile.png"
              },
              {
                text: "En un entorno complejo como lo es la hospitalización domiciliaria pediátrica, con múltiples interlocutores y conversaciones prolongadas, DeepClinic Copilot mantiene las historias clínicas precisas y completas. Me siento tranquilo sabiendo que no se me va a olvidar nada de lo que comentan los padres de mis pacientes.",
                name: "Jose Fernández Cuesta Peñafiel",
                role: "Pediatra, hospitalización domiciliaria pediátrica",
                img: "/681068a3197614922f294a3e_Jose Fernández Cuesta Peñafiel.jpeg"
              }
            ].map((item, i) => (
              <MotionReveal key={i} delayMs={i * 100} className="h-full">
                <figure className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 text-left transition-colors hover:bg-white/10">
                  <blockquote className="space-y-4">
                    <div className="text-white/40 text-sm tracking-widest">★★★★★</div>
                    <p className="text-[14px] leading-relaxed text-white/80">
                      “{item.text}”
                    </p>
                  </blockquote>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/5">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-white">{item.name}</p>
                      <p className="text-[12px] text-white/50">{item.role}</p>
                    </div>
                  </div>
                </figure>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACTO EN NÚMEROS */}
      <section className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <MotionReveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                Impacto en números
              </p>
              <h2 className="mt-4 text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                ¿Cuánto gana el médico por consulta usando DeepClinic Copilot?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] text-white/50">
                Ajusta tus números y ve cuántas horas puedes ahorrar, cuántas consultas adicionales podrías atender y cuánto
                ingreso extra podrías generar cada mes.
              </p>
            </MotionReveal>
          </div>
          <MotionReveal delayMs={200}>
            <div className="mx-auto max-w-3xl">
              <BenefitsSimulator variant="compact" theme="dark" />
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* SEGURIDAD */}
      <section id="seguridad" className="relative z-10 py-32 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <MotionReveal>
              <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
                Priorizamos la seguridad y la integridad
              </h2>
              <p className="mt-4 text-[16px] text-white/50">
                DeepClinic Copilot cumple con los más altos estándares de seguridad y protección de datos.
              </p>
            </MotionReveal>
          </div>

          <div className="mt-16 grid gap-10 text-center md:grid-cols-3">
            {[
              {
                title: "HIPAA y NOM",
                desc: "DeepClinic Copilot está diseñado para alinearse con los marcos de protección de datos de salud en México y Estados Unidos, incluyendo HIPAA y las Normas Oficiales Mexicanas."
              },
              {
                title: "Sin documentación manual",
                desc: "Nuestra solución de voz única permite a los profesionales de la salud centrarse en la atención al paciente, sin necesidad de documentación manual."
              },
              {
                title: "Datos en América del Norte",
                desc: "Todos los datos se cifran y se gestionan en centros de datos ubicados en América del Norte, cumpliendo la normativa vigente en México y Estados Unidos."
              }
            ].map((item, i) => (
              <MotionReveal key={i} delayMs={i * 100}>
                <div className="rounded-[24px] border border-white/5 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04]">
                  <div className="mb-4 text-sky-400">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-[14px] font-bold uppercase tracking-wide text-white">
                    {item.title}
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/50">
                    {item.desc}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>

          <div className="mt-20 grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center">
            <MotionReveal delayMs={400}>
              <div className="space-y-6 text-left">
                <h3 className="text-[24px] font-semibold leading-tight text-white">
                  Con la confianza de más de 1000 doctores en toda América
                </h3>
                <p className="text-[15px] leading-relaxed text-white/60">
                  Basado en los más altos estándares de seguridad, DeepClinic Copilot garantiza una documentación basada en IA
                  segura y confiable.
                </p>
                <p className="text-[15px] leading-relaxed text-white/60">
                  Desde grandes redes hospitalarias hasta clínicas especializadas, los profesionales de la salud utilizan
                  DeepClinic Copilot para mejorar la atención al paciente y recuperar su tiempo.
                </p>
                <Link
                  href="/es/data-security"
                  className="inline-flex items-center text-[13px] font-bold uppercase tracking-wider text-white transition-colors hover:text-sky-300"
                >
                  Conoce más sobre seguridad <span className="ml-2">→</span>
                </Link>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 py-32 border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
          <MotionReveal>
            <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[42px]">
              Comenzar a usar DeepClinic Copilot es muy fácil
            </h2>
            <p className="mt-4 text-[16px] text-white/50">
              No se necesitan datos de pago. Empieza en 5 minutos.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
              >
                Pruébalo gratis
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>

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
            2026 DeepClinic Copilot. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
