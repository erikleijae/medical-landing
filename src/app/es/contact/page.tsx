import { DeepClinicTopNav } from "../../../components/deepclinic-top-nav";
import { GrokBackground } from "../../../components/grok-background";
import { MotionReveal } from "../../../components/motion-reveal";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />
      <DeepClinicTopNav showProductsSubnav />

      {/* HERO CONTACTO */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-stretch md:px-8 lg:px-0">
          {/* LADO IZQUIERDO: TESTIMONIO / CONFIANZA */}
          <div className="flex-1 rounded-[24px] border border-white/10 bg-white/5 p-8 md:p-10">
            <MotionReveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                Utilizado por +1.000 grupos sanitarios
              </p>

              <div className="mt-8 flex min-h-[260px] flex-col justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-10 sm:min-h-[320px]">
                <div className="space-y-4">
                  <p className="text-[22px] font-medium leading-snug text-white/90 sm:text-[26px]">
                    “Con la solución de IA de DeepClinic Copilot podemos centrarnos plenamente en el paciente sin preocuparnos por
                    escribir o dictar.”
                  </p>
                  <p className="text-[14px] leading-relaxed text-white/60">
                    El asistente clínico nos ayuda a reducir el tiempo dedicado a tareas administrativas y a mantener notas
                    detalladas después de cada consulta.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/20" />
                  <div className="space-y-0.5">
                    <p className="text-[13px] font-bold text-white">Directora médica</p>
                    <p className="text-[12px] text-white/50">Red hospitalaria en América</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-1.5">
                <span className="inline-block h-1.5 w-4 rounded-full bg-white" />
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/20" />
              </div>
            </MotionReveal>
          </div>

          {/* LADO DERECHO: FORMULARIO */}
          <div className="w-full md:w-[460px]">
            <MotionReveal delayMs={100}>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Demostración personalizada
                  </p>
                  <h1 className="text-[20px] font-bold text-white sm:text-[22px]">
                    Descubre DeepClinic Copilot
                  </h1>
                  <p className="text-[13px] leading-relaxed text-white/60">
                    Comprueba cómo opera DeepClinic Copilot en la práctica diaria y resuelve dudas sobre tu caso concreto.
                  </p>
                </div>

                <form className="mt-8 space-y-4" action="#" method="post" autoComplete="off">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="firstName" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                        Nombre
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="off"
                        placeholder="p. ej. Javier"
                        className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/30 focus:bg-white/10"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lastName" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                        Apellido
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="off"
                        placeholder="p. ej. Morales"
                        className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/30 focus:bg-white/10"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                        Correo electrónico
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="off"
                        placeholder="javier@clinica.es"
                        className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/30 focus:bg-white/10"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                        Teléfono
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="off"
                        placeholder="+XX 600..."
                        className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/30 focus:bg-white/10"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="clinic" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                        Clínica
                      </label>
                      <input
                        id="clinic"
                        name="clinic"
                        type="text"
                        autoComplete="off"
                        placeholder="Clínica Vida"
                        className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/30 focus:bg-white/10"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="country" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                        País
                      </label>
                      <select
                        id="country"
                        name="country"
                        className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition focus:border-white/30 focus:bg-white/10 [&>option]:bg-black"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Elige tu país
                        </option>
                        <option value="es">España</option>
                        <option value="mx">México</option>
                        <option value="co">Colombia</option>
                        <option value="cl">Chile</option>
                        <option value="ar">Argentina</option>
                        <option value="other">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="interest" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                      Interés
                    </label>
                    <textarea
                      id="interest"
                      name="interest"
                      rows={3}
                      autoComplete="off"
                      placeholder="Cuéntanos brevemente qué te interesa..."
                      className="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/30 focus:bg-white/10 resize-none"
                    />
                  </div>

                  <div className="space-y-4 pt-2">
                    <label className="flex items-start gap-3 text-[11px] text-white/50">
                      <input
                        type="checkbox"
                        name="consent"
                        className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 text-white focus:ring-white/20"
                      />
                      <span>
                        Acepto que DeepClinic Copilot se ponga en contacto conmigo. Mis datos se procesan de acuerdo con
                        la política de privacidad.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white/90 hover:scale-[1.02]"
                    >
                      Reservar demostración
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-center text-[10px] text-white/30">
                  DeepClinic Copilot sigue estándares exigentes de seguridad y protección de datos.
                </p>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
