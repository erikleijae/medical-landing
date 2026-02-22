"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";

import { authClient } from "@/lib/auth-client";
import { AuthLanguageSelect } from "../../../components/auth-language-select";

export default function RecoveryPageEs() {
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    setFormSuccess(null);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();

    if (!email) {
      setFormError("Ingresa tu correo electrónico.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await authClient.emailOtp.requestPasswordReset({
        email,
      });

      if (error) {
        setFormError(error.message ?? "No pudimos enviar el enlace. Intenta de nuevo.");
        return;
      }

      setFormSuccess("Si el correo existe, enviamos las instrucciones de recuperación.");
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "No pudimos enviar el enlace. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="flex min-h-screen w-full flex-col lg:flex-row">
        <section className="flex w-full flex-col justify-between bg-white px-6 py-10 sm:px-10 lg:w-1/2 lg:px-24 lg:py-12">
          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <span className="inline-block h-6 w-6 rounded-full border border-slate-900" />
                  <span className="-ml-3 inline-block h-6 w-6 rounded-full border border-slate-900" />
                </div>
                <span className="text-[18px] font-semibold tracking-tight text-slate-900">
                  DeepClinic
                </span>
              </div>

              <AuthLanguageSelect />
            </div>

            <div className="mt-16 max-w-sm">
              <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-[32px]">
                Recupera tu contraseña
              </h1>
              <p className="mt-3 text-sm text-slate-500">
                Te enviaremos un enlace para restablecer tu contraseña.
              </p>

              <form
                id="recovery-form"
                className="mt-8 space-y-4"
                action="#"
                method="post"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-800">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    required
                    placeholder="Correo electrónico"
                    className="block h-[72px] w-full rounded-md border border-slate-200 bg-slate-50 px-5 text-lg text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                  />
                </div>
              </form>

              <div className="mt-4 space-y-3">
                <button
                  type="submit"
                  form="recovery-form"
                  disabled={isSubmitting}
                  className="inline-flex h-[72px] w-full items-center justify-center rounded-full bg-black px-5 text-lg font-semibold text-[#d5ff7c] shadow-sm transition hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Enviando..." : "Enviar enlace"}
                </button>
              </div>

              {formError ? (
                <p className="mt-3 text-sm text-red-600" role="alert">
                  {formError}
                </p>
              ) : null}

              {formSuccess ? (
                <p className="mt-3 text-sm text-emerald-600" role="status">
                  {formSuccess}
                </p>
              ) : null}

              <p className="mt-6 text-center text-xs text-slate-600">
                ¿Recordaste tu contraseña?{" "}
                <Link
                  href="/es/login"
                  className="font-semibold text-slate-900 underline underline-offset-4 decoration-slate-300 transition hover:decoration-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                >
                  Iniciar sesión
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="relative hidden w-full overflow-hidden lg:block lg:w-1/2">
          <Image
            src="/680b8bd084ba7f136270ee2a_testimonial1.png"
            alt="Profesional de la salud usando DeepClinic"
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative flex h-full flex-col justify-center px-10 py-12 text-white">
            <blockquote className="max-w-md text-lg leading-relaxed">
              &quot;Estoy muy contenta con cómo DeepClinic me permite dedicar más tiempo al paciente en Médica Sur y explicar el
              diagnóstico y tratamiento de manera más completa. Bienvenida la IA que humaniza la consulta.&quot;
            </blockquote>

            <div className="mt-6 flex items-center gap-3 text-xs text-slate-200">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-300">
                <Image
                  src="/6810bcac6fc499ede820f7a0_Juan Mora.png.png"
                  alt="Profesional de la salud"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <p className="text-sm font-semibold text-white">Diana Martínez</p>
                <p className="text-[11px] text-slate-200/80">Profesional de la salud</p>
                <p className="text-[11px] text-slate-200/80">Médica Sur</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
