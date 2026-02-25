import Image from "next/image";
import Link from "next/link";

import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function CustomerStoriesPage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav />

      {/* HERO */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:flex-row md:items-center md:px-8 lg:px-10">
          <div className="max-w-xl">
            <MotionReveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                Historias de clientes
              </p>
              <h1 className="mt-4 font-sans text-[38px] font-bold leading-tight tracking-tighter text-white sm:text-[44px] md:text-[56px]">
                Cómo DeepClinic Copilot ayuda a los profesionales a centrarse en el paciente
              </h1>
            </MotionReveal>

            <MotionReveal delayMs={100}>
              <p className="mt-6 text-[18px] leading-relaxed text-white/60">
                Clínicas, hospitales y proveedores digitales utilizan DeepClinic Copilot para reducir horas de documentación y
                devolver el foco a la consulta.
              </p>
            </MotionReveal>

            <MotionReveal delayMs={200}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/es/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
                >
                  Solicitar demo
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105"
                >
                  Pruébalo gratis
                </Link>
              </div>
            </MotionReveal>
          </div>

          <div className="flex-1">
            <MotionReveal delayMs={300}>
              <div className="grid gap-4 rounded-[24px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Impacto en la práctica diaria
                </p>
                <p className="text-[15px] leading-relaxed text-white/90">
                  &quot;Ahora pienso en el paciente, no en las notas.&quot; &quot;Me ahorro varios minutos en cada visita.&quot; &quot;Es difícil
                  imaginar volver a teclear todo a mano.&quot; Son frases reales de profesionales que utilizan DeepClinic Copilot en
                  su día a día.
                </p>
                <p className="text-[13px] text-white/50">
                  Descubre algunos de sus casos y cómo están transformando su trabajo clínico con ayuda de la IA.
                </p>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* CASOS DESTACADOS */}
      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
          <div className="mb-12 text-center">
            <MotionReveal>
              <h2 className="text-[28px] font-semibold tracking-tight text-white sm:text-[32px]">
                Historias destacadas
              </h2>
              <p className="mt-3 text-[15px] text-white/50">
                Organizaciones que ya utilizan asistentes clínicos de IA para reducir la carga administrativa.
              </p>
            </MotionReveal>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <MotionReveal delayMs={0} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full bg-white/5">
                  <Image
                    src="/68a701201d6e0dcd3137fbbf_recoletas-p-500.avif"
                    alt="Profesional sanitario en un hospital del grupo Recoletas"
                    fill
                    className="object-cover opacity-80"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">Hospitales privados</p>
                  <p className="mt-3 text-[14px] font-bold text-white">
                    Recoletas lleva la documentación asistida por IA a decenas de centros
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Un grupo hospitalario que busca liberar tiempo a sus especialistas en cada consulta, manteniendo la calidad
                    y el detalle de la historia clínica.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={100} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full bg-white/5">
                  <Image
                    src="/680a17e9f7c495837f0a7ddb_mindler.png"
                    alt="Logotipo de un proveedor de psicología en remoto"
                    fill
                    className="object-contain p-8 opacity-80 invert brightness-0"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">Salud mental digital</p>
                  <p className="mt-3 text-[14px] font-bold text-white">
                    Psicólogos que ganan tiempo entre sesiones
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Un equipo de psicología online que utiliza la IA para documentar cada sesión de forma consistente, sin
                    alargar la jornada.
                  </p>
                </div>
              </article>
            </MotionReveal>

            <MotionReveal delayMs={200} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full bg-white/5">
                  <Image
                    src="/680b8bd084ba7f136270ee2a_testimonial1.webp"
                    alt="Médico generalista utilizando un asistente clínico de IA"
                    fill
                    className="object-cover opacity-80"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">Atención primaria</p>
                  <p className="mt-3 text-[14px] font-bold text-white">
                    Más tiempo mirando al paciente, menos a la pantalla
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                    Centros de salud que utilizan DeepClinic Copilot para que cada profesional pueda dedicar más minutos a la
                    conversación clínica.
                  </p>
                </div>
              </article>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <MotionReveal>
              <h2 className="text-[28px] font-semibold tracking-tight text-white sm:text-[32px]">
                Palabras de nuestros usuarios
              </h2>
              <p className="mt-3 text-[15px] text-white/50">
                Profesionales de distintas especialidades explican cómo la IA les ayuda a documentar mejor y con menos estrés.
              </p>
            </MotionReveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                text: "El uso de DeepClinic Copilot no va de estar a la última en tecnología, sino de buena práctica clínica. Me evita pasar horas tecleando al final del día y me permite dedicar ese tiempo a mis pacientes. Una vez lo pruebas, no quieres volver atrás.",
                name: "Médico internista",
                role: "Hospital general",
                img: "/6810bcac6fc499ede820f7a0_Juan Mora.png.png"
              },
              {
                text: "Mientras exploro al paciente y converso con él con naturalidad, DeepClinic Copilot transcribe y estructura la información clínica en segundo plano. El mayor beneficio es que las historias clínicas se redactan prácticamente solas, lo que me ahorra hasta un par de horas de trabajo administrativo al día.",
                name: "Cirujano ortopédico",
                role: "Hospital universitario",
                img: "/681068922ceb2a1128818e85_Carlos Alberto Encinas.png"
              },
              {
                text: "Hemos desplegado DeepClinic Copilot en nuestras clínicas y vemos cómo mejora la dinámica de la atención. Los profesionales pueden mirar a los ojos al paciente en lugar de al ordenador, y aun así las historias clínicas quedan completas y bien estructuradas.",
                name: "Director médico",
                role: "Grupo de clínicas",
                img: "/6810688005f18fd45c2ca548_Hugo Queijeiro profile.png",
                fullWidth: true
              }
            ].map((item, i) => (
              <MotionReveal key={i} delayMs={i * 100} className={item.fullWidth ? "md:col-span-2" : ""}>
                <figure className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 text-left transition-colors hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-white/5">
                      <Image
                        src={item.img}
                        alt={`Foto de ${item.name}`}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-white">{item.name}</p>
                      <p className="text-[12px] text-white/50">{item.role}</p>
                    </div>
                  </div>
                  <div className="mt-6 text-[12px] tracking-[0.3em] text-white/40">★★★★★</div>
                  <blockquote className="mt-4">
                    <p className="text-[14px] leading-relaxed text-white/80">
                      &quot;{item.text}&quot;
                    </p>
                  </blockquote>
                </figure>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 py-32 border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-8 lg:px-10">
          <MotionReveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/40">
              Empieza hoy
            </p>
            <h2 className="mt-4 text-[32px] font-semibold tracking-tight text-white sm:text-[42px]">
              Lleva estas historias a tu consulta
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/60">
              Prueba DeepClinic Copilot con tu propio flujo de trabajo y comprueba cómo cambia la forma en la que documentas cada
              visita.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/es/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-105"
              >
                Solicitar demo
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105"
              >
                Crear cuenta gratuita
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
