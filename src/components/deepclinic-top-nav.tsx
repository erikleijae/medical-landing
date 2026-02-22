"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

function joinClassNames(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}

export function DeepClinicTopNav() {
  const items = useMemo<NavItem[]>(
    () => [
      { label: "DEEPCLINIC", href: "/es/deepclinic" },
      { label: "API", href: "/es/platform" },
      { label: "COMPANY", href: "/es/about" },
      { label: "COLOSSUS", href: "/es/platform" },
      { label: "CAREERS", href: "/es/recruitment" },
      { label: "NEWS", href: "/es/news" },
      { label: "SHOP", href: "/es/pricing" },
      { label: "SPACEX", href: "/es/platform" },
      { label: "X", href: "/es/deepclinic" },
    ],
    [],
  );

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-transparent" />

        <div className="relative z-20 mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-8 px-6 py-5 md:gap-10 md:px-10">
          <Link href="/" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[12px] font-semibold text-black">
              DC
            </span>
          </Link>

          <nav className="hidden items-center justify-start gap-6 text-[11px] font-medium uppercase tracking-[0.24em] text-white/65 md:flex">
            {items.map((item) => (
              <Link key={item.label} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/90 transition-colors hover:border-white/40 hover:bg-white/[0.08]"
            >
              TRY DEEPCLINIC
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 backdrop-blur transition-colors hover:bg-white/10 md:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M5 17h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={joinClassNames(
            "md:hidden",
            "fixed left-0 right-0 bottom-0 top-[72px]",
            "transition-opacity duration-300",
            open ? "opacity-100" : "pointer-events-none opacity-0",
          )}
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div
          className={joinClassNames(
            "md:hidden",
            "absolute left-0 right-0 top-full",
            "z-30",
            "transition-[opacity,transform] duration-300",
            open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2",
          )}
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-[0_28px_120px_rgba(0,0,0,0.7)] backdrop-blur">
              <div className="flex flex-col gap-1 p-3 text-[12px] font-medium uppercase tracking-[0.22em] text-white/75">
                {items.map((item) => (
                  <Link
                    key={`mobile-${item.label}`}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
