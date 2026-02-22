"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";

import { authClient, resolvePostLoginRedirectUrl } from "@/lib/auth-client";
import { AuthLanguageSelect } from "../../../components/auth-language-select";

export default function LoginPagePt() {
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPasskeySubmitting, setIsPasskeySubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "").trim();

    if (!email || !password) {
      setFormError("Informe seu e-mail e senha.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        setFormError(error.message ?? "Não foi possível entrar.");
        return;
      }

      if (data && "twoFactorRedirect" in data && data.twoFactorRedirect) {
        setFormError("É necessária verificação em duas etapas. Continue no app principal.");
        return;
      }

      window.location.href = resolvePostLoginRedirectUrl();
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Não foi possível entrar.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setFormError(null);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: resolvePostLoginRedirectUrl(),
      });
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Não foi possível entrar com Google.");
    }
  };

  const handlePasskeySignIn = async () => {
    setIsPasskeySubmitting(true);
    setFormError(null);
    try {
      const { data, error } = await authClient.signIn.passkey({
        fetchOptions: {
          onSuccess: () => {
            window.location.href = resolvePostLoginRedirectUrl();
          },
          onError: (ctx) => {
            setFormError(ctx?.error?.message ?? "Não foi possível entrar com impressão digital.");
          },
        },
      });

      if (error) {
        setFormError(error.message ?? "Não foi possível entrar com impressão digital.");
      } else if (data && !(data as { twoFactorRedirect?: boolean })?.twoFactorRedirect) {
        window.location.href = resolvePostLoginRedirectUrl();
      }
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Não foi possível entrar com impressão digital.");
    } finally {
      setIsPasskeySubmitting(false);
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
                Entrar
              </h1>
              <p className="mt-3 text-sm text-slate-500">
                Entre na sua conta para continuar no DeepClinic.
              </p>

              <form
                id="login-form"
                className="mt-8 space-y-4"
                action="#"
                method="post"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-800">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    required
                    placeholder="E-mail"
                    className="block h-[72px] w-full rounded-md border border-slate-200 bg-slate-50 px-5 text-lg text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-slate-800">
                    Senha
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    required
                    placeholder="Senha"
                    className="block h-[72px] w-full rounded-md border border-slate-200 bg-slate-50 px-5 text-lg text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/80"
                  />
                </div>
              </form>

              <div className="mt-4 space-y-3">
                <button
                  type="submit"
                  form="login-form"
                  disabled={isSubmitting || isPasskeySubmitting}
                  className="inline-flex h-[72px] w-full items-center justify-center rounded-full bg-black px-5 text-lg font-semibold text-[#d5ff7c] shadow-sm transition hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Entrando..." : "Entrar"}
                </button>

                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={isSubmitting || isPasskeySubmitting}
                  className="inline-flex h-[72px] w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 text-lg font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Entrar com Google
                </button>

                <button
                  type="button"
                  onClick={handlePasskeySignIn}
                  disabled={isSubmitting || isPasskeySubmitting}
                  className="inline-flex h-14 w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="mr-2 h-5 w-5 text-slate-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 10a2 2 0 1 0-2-2" />
                    <path d="M6 8v2" />
                    <path d="M18 8v2" />
                    <path d="M8 14v2" />
                    <path d="M16 14v2" />
                    <path d="M12 12v6" />
                  </svg>
                  {isPasskeySubmitting ? "Entrando..." : "Entrar com impressão digital ou passkey"}
                </button>
              </div>

              {formError ? (
                <p className="mt-3 text-sm text-red-600" role="alert">
                  {formError}
                </p>
              ) : null}

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3">
                <p className="text-center text-xs text-slate-600">
                  Esqueceu sua senha?{" "}
                  <Link
                    href="/pt/recovery"
                    className="font-semibold text-slate-900 underline underline-offset-4 decoration-slate-300 transition hover:decoration-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                  >
                    Recuperar
                  </Link>
                </p>

                <p className="mt-2 text-center text-xs text-slate-600">
                  Não tem uma conta?{" "}
                  <Link
                    href="/pt/signup"
                    className="font-semibold text-slate-900 underline underline-offset-4 decoration-slate-300 transition hover:decoration-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                  >
                    Cadastre-se
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative hidden w-full overflow-hidden lg:block lg:w-1/2">
          <Image
            src="/680b8bd084ba7f136270ee2a_testimonial1.png"
            alt="Profissional de saúde usando DeepClinic"
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative flex h-full flex-col justify-center px-10 py-12 text-white">
            <blockquote className="max-w-md text-lg leading-relaxed">
              &quot;Estou muito feliz porque o DeepClinic me permite dedicar mais tempo a cada paciente e explicar o diagnóstico e
              o tratamento com mais detalhes. Bem-vinda, IA que humaniza a consulta.&quot;
            </blockquote>

            <div className="mt-6 flex items-center gap-3 text-xs text-slate-200">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-300">
                <Image
                  src="/6810bcac6fc499ede820f7a0_Juan Mora.png.png"
                  alt="Profissional de saúde"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <p className="text-sm font-semibold text-white">Diana Martínez</p>
                <p className="text-[11px] text-slate-200/80">Profissional de saúde</p>
                <p className="text-[11px] text-slate-200/80">Médica Sur</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
