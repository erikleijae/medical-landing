"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";

import { authClient, resolvePostLoginRedirectUrl } from "@/lib/auth-client";
import { AuthLanguageSelect } from "../../../components/auth-language-select";
import { GrokBackground } from "../../../components/grok-background";

export default function LoginPageEn() {
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
      setFormError("Enter your email and password.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        setFormError(error.message ?? "We couldn't sign you in.");
        return;
      }

      if (data && "twoFactorRedirect" in data && data.twoFactorRedirect) {
        setFormError("Two-factor verification is required. Continue in the main app.");
        return;
      }

      window.location.href = resolvePostLoginRedirectUrl();
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "We couldn't sign you in.");
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
      setFormError(error instanceof Error ? error.message : "Couldn't sign in with Google.");
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
            setFormError(ctx?.error?.message ?? "Couldn't sign in with passkey.");
          },
        },
      });

      if (error) {
        setFormError(error.message ?? "Couldn't sign in with passkey.");
      } else if (data && !(data as { twoFactorRedirect?: boolean })?.twoFactorRedirect) {
        window.location.href = resolvePostLoginRedirectUrl();
      }
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Couldn't sign in with passkey.");
    } finally {
      setIsPasskeySubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <GrokBackground />

      <div className="relative flex min-h-screen w-full flex-col lg:flex-row">
        <section className="relative flex w-full flex-col justify-between overflow-hidden px-6 py-10 sm:px-10 lg:w-1/2 lg:px-24 lg:py-12 z-10">
          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <span className="inline-block h-6 w-6 rounded-full border border-white" />
                  <span className="-ml-3 inline-block h-6 w-6 rounded-full border border-white" />
                </div>
                <span className="text-[18px] font-semibold tracking-tight text-white">
                  DeepClinic
                </span>
              </div>

              <AuthLanguageSelect theme="dark" />
            </div>

            <div className="mt-16 max-w-sm">
              <h1 className="font-sans text-3xl font-semibold tracking-tight text-white sm:text-[32px]">
                Sign in
              </h1>
              <p className="mt-3 text-sm text-white/60">
                Sign in to your account to continue to DeepClinic.
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
                  <label htmlFor="email" className="text-sm font-medium text-white/80">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    required
                    placeholder="Email"
                    className="block h-[56px] w-full rounded-xl border border-white/10 bg-white/5 px-5 text-lg text-white placeholder-white/30 outline-none transition focus:border-white/30 focus:bg-white/10 shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium text-white/80">
                      Password
                    </label>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    required
                    placeholder="Password"
                    className="block h-[56px] w-full rounded-xl border border-white/10 bg-white/5 px-5 text-lg text-white placeholder-white/30 outline-none transition focus:border-white/30 focus:bg-white/10 shadow-sm"
                  />
                </div>
              </form>

              <div className="mt-6 space-y-3">
                <button
                  type="submit"
                  form="login-form"
                  disabled={isSubmitting || isPasskeySubmitting}
                  className="inline-flex h-[56px] w-full items-center justify-center rounded-full bg-white px-5 text-lg font-semibold text-black shadow-lg transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </button>

                <div className="relative flex items-center justify-center py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10" />
                  </div>
                  <span className="relative bg-black px-2 text-xs text-white/40">Or</span>
                </div>

                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={isSubmitting || isPasskeySubmitting}
                  className="inline-flex h-[56px] w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-base font-semibold text-white shadow-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Sign in with Google
                </button>

                <button
                  type="button"
                  onClick={handlePasskeySignIn}
                  disabled={isSubmitting || isPasskeySubmitting}
                  className="inline-flex h-[56px] w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-base font-semibold text-white shadow-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="mr-2 h-5 w-5 text-white/60"
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
                  {isPasskeySubmitting ? "Signing in..." : "Sign in with passkey"}
                </button>
              </div>

              {formError ? (
                <p className="mt-4 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400 border border-red-500/20" role="alert">
                  {formError}
                </p>
              ) : null}

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <p className="text-center text-xs text-white/60">
                  Forgot your password?{" "}
                  <Link
                    href="/en/recovery"
                    className="font-semibold text-white hover:text-white underline underline-offset-4 decoration-white/30 transition hover:decoration-white"
                  >
                    Recover it
                  </Link>
                </p>

                <p className="mt-2 text-center text-xs text-white/60">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/en/signup"
                    className="font-semibold text-white hover:text-white underline underline-offset-4 decoration-white/30 transition hover:decoration-white"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative hidden w-full overflow-hidden lg:block lg:w-1/2 border-l border-white/10">
          <Image
            src="/680b8bd084ba7f136270ee2a_testimonial1.png"
            alt="Healthcare professional using DeepClinic"
            fill
            sizes="50vw"
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="relative flex h-full flex-col justify-end px-10 py-12 text-white">
            <blockquote className="max-w-md text-xl font-medium leading-relaxed tracking-tight text-white/90 drop-shadow-sm">
              &quot;I’m very happy because DeepClinic allows me to spend more time with each patient and explain the diagnosis and
              treatment more thoroughly. Welcome, AI that humanises the consultation.&quot;
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/20 shadow-md">
                <Image
                  src="/6810bcac6fc499ede820f7a0_Juan Mora.png.png"
                  alt="Healthcare professional"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-0.5 drop-shadow-sm">
                <p className="text-sm font-bold text-white">Diana Martínez</p>
                <p className="text-xs text-white/80">Healthcare professional • Médica Sur</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
