"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type Lang = "es" | "en" | "pt";

const NAV_ITEMS: Record<Lang, NavItem[]> = {
  es: [
    { label: "DEEPCLINIC", href: "/es/deepclinic" },
    { label: "API", href: "/es/platform" },
    { label: "EMPRESA", href: "/es/about" },
    { label: "SEGURIDAD", href: "/es/data-security" },
    { label: "PRECIOS", href: "/es/pricing" },
  ],
  en: [
    { label: "DEEPCLINIC", href: "/en/deepclinic" },
    { label: "PRODUCT", href: "/en/product" },
    { label: "COMPANY", href: "/en/about" },
    { label: "SECURITY", href: "/en/data-security" },
    { label: "PRICING", href: "/en/pricing" },
  ],
  pt: [
    { label: "DEEPCLINIC", href: "/pt/deepclinic" },
    { label: "PRODUTO", href: "/pt/product" },
    { label: "EMPRESA", href: "/pt/about" },
    { label: "SEGURANÇA", href: "/pt/data-security" },
    { label: "PREÇOS", href: "/pt/pricing" },
  ],
};

const CTA_LABEL: Record<Lang, string> = {
  es: "PROBAR DEEPCLINIC",
  en: "TRY DEEPCLINIC",
  pt: "TESTAR DEEPCLINIC",
};

const PRODUCT_ITEMS: Record<Lang, NavItem[]> = {
  es: [
    { label: "COPILOTO", href: "/es/product" },
    { label: "INGRESOS", href: "/es/revenue" },
    { label: "AGENTES", href: "/es/desk" },
    { label: "AGENDA", href: "/es/booking" },
    { label: "NÚCLEO", href: "/es/platform" },
    { label: "FAMILIA", href: "/es/health" },
    { label: "IMÁGENES", href: "/es/imaging" },
  ],
  en: [
    { label: "COPILOT", href: "/en/product" },
    // Fallback for missing pages
    { label: "REVENUE", href: "/en/product" },
    { label: "DESK", href: "/en/product" },
    { label: "BOOKING", href: "/en/product" },
    { label: "DEEPCLINIC AI", href: "/en/product" },
    { label: "PATIENTS", href: "/en/product" },
  ],
  pt: [
    { label: "COPILOTO", href: "/pt/product" },
    // Fallback for missing pages
    { label: "RECEITA", href: "/pt/product" },
    { label: "RECEPÇÃO", href: "/pt/product" },
    { label: "AGENDAMENTO", href: "/pt/product" },
    { label: "DEEPCLINIC IA", href: "/pt/product" },
    { label: "PACIENTES", href: "/pt/product" },
  ],
};

type Props = {
  showProductsSubnav?: boolean;
  lang?: Lang;
};

const LANG_HOME: Record<Lang, string> = {
  es: "/es/deepclinic",
  en: "/en/deepclinic",
  pt: "/pt/deepclinic",
};

const LANG_ROUTE_MAP: Record<string, Partial<Record<Lang, string>>> = {
  "/deepclinic": { es: "/es/deepclinic", en: "/en/deepclinic", pt: "/pt/deepclinic" },
  "/product": { es: "/es/product", en: "/en/product", pt: "/pt/product" },
  "/revenue": { es: "/es/revenue", en: "/en/product", pt: "/pt/product" },
  "/desk": { es: "/es/desk", en: "/en/product", pt: "/pt/product" },
  "/booking": { es: "/es/booking", en: "/en/product", pt: "/pt/product" },
  "/platform": { es: "/es/platform", en: "/en/product", pt: "/pt/product" },
  "/health": { es: "/es/health", en: "/en/product", pt: "/pt/product" },
  "/imaging": { es: "/es/imaging", en: "/en/product", pt: "/pt/product" },
  "/about": { es: "/es/about", en: "/en/about", pt: "/pt/about" },
  "/data-security": { es: "/es/data-security", en: "/en/data-security", pt: "/pt/data-security" },
  "/pricing": { es: "/es/pricing", en: "/en/pricing", pt: "/pt/pricing" },
};

function joinClassNames(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}

export function DeepClinicTopNav({ showProductsSubnav, lang = "es" }: Props) {
  const pathname = usePathname() ?? LANG_HOME[lang];
  const items = useMemo(() => NAV_ITEMS[lang], [lang]);
  const productItems = useMemo(() => PRODUCT_ITEMS[lang], [lang]);
  const ctaLabel = CTA_LABEL[lang];
  // Determine signup link based on lang. Assuming /en/signup and /pt/signup exist or handled by middleware/redirects.
  // Although root /signup exists, usually we want to preserve locale if possible.
  // Given previous files, links were /en/signup and /pt/signup.
  const signupHref = lang === "es" ? "/signup" : `/${lang}/signup`;

  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const menuAriaLabel =
    lang === "es"
      ? open
        ? "Cerrar menú"
        : "Abrir menú"
      : lang === "pt"
        ? open
          ? "Fechar menu"
          : "Abrir menu"
        : open
          ? "Close menu"
          : "Open menu";

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!langOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLangOpen(false);
    };

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest?.("[data-dc-lang]") != null) return;
      setLangOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [langOpen]);

  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  const handleNavClick = (e: React.MouseEvent, label: string) => {
    // Only toggle subnav from the DEEPCLINIC entry
    if (label === "DEEPCLINIC" && showProductsSubnav) {
      e.preventDefault();
      setProductsOpen((prev) => !prev);
    } else {
      setProductsOpen(false);
    }
  };

  const getLangHref = (target: Lang) => {
    if (target === lang) return pathname;

    const match = pathname.match(/^\/(es|en|pt)(\/.*)?$/);
    const rest = match ? match[2] ?? "/" : pathname;
    const base = rest && rest.startsWith("/") ? rest : `/${rest}`;
    const key = base === "/" ? "" : base;

    if (key && LANG_ROUTE_MAP[key]?.[target]) return LANG_ROUTE_MAP[key]?.[target] as string;
    if (!key) return LANG_HOME[target];
    return `/${target}${key}`;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />

        <div className="relative z-20 mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-8 px-6 py-5 md:gap-10 md:px-10">
          <Link href={LANG_HOME[lang]} className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[12px] font-semibold text-black">
              DC
            </span>
          </Link>

          <nav className="hidden items-center justify-start gap-6 text-[11px] font-medium uppercase tracking-[0.24em] text-white/65 md:flex">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${(item.label === "DEEPCLINIC" || item.label === "PRODUCT" || item.label === "PRODUTO") && productsOpen ? "text-white" : ""}`}
                onClick={(e) => handleNavClick(e, item.label)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <div className="relative" data-dc-lang>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                aria-expanded={langOpen}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85 backdrop-blur sm:px-4"
              >
                {lang.toUpperCase()}
              </button>

              <div
                className={joinClassNames(
                  "absolute right-0 top-full mt-3 w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-black/70 shadow-[0_28px_120px_rgba(0,0,0,0.7)] backdrop-blur",
                  "transition-[opacity,transform] duration-200",
                  langOpen ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-1",
                )}
              >
                <div className="flex flex-col gap-1 p-2">
                  {(
                    [
                      { id: "es" as const, label: "Español" },
                      { id: "en" as const, label: "English" },
                      { id: "pt" as const, label: "Português" },
                    ] as const
                  ).map((opt) => {
                    const active = opt.id === lang;
                    return (
                      <Link
                        key={opt.id}
                        href={getLangHref(opt.id)}
                        onClick={() => setLangOpen(false)}
                        className={
                          "flex items-center justify-between rounded-xl px-3 py-3 text-[12px] font-medium " +
                          (active ? "bg-white/[0.05] text-white" : "bg-transparent text-white/80")
                        }
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-[11px] font-semibold uppercase text-white/80">
                            {opt.id}
                          </div>
                          <div className="text-[12px] font-semibold">{opt.label}</div>
                        </div>
                        {active ? <div className="text-[12px] font-semibold text-white/60">✓</div> : null}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link
              href={signupHref}
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/90 sm:px-5"
            >
              {ctaLabel}
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={menuAriaLabel}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 backdrop-blur md:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M5 17h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {showProductsSubnav && productsOpen ? (
          <div className="hidden md:block animate-fade-in-down">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
              <div className="h-px w-full bg-white/10" />
              <nav className="flex items-center justify-start gap-6 py-3 text-[10px] font-medium uppercase tracking-[0.26em] text-white/40">
                {productItems.map((item) => (
                  <Link key={`subnav-${item.label}`} href={item.href} className="">
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="h-px w-full bg-white/10" />
            </div>
          </div>
        ) : null}

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
                <div className="grid grid-cols-3 gap-2 pb-2">
                  {(
                    [
                      { id: "es" as const, label: "ES" },
                      { id: "en" as const, label: "EN" },
                      { id: "pt" as const, label: "PT" },
                    ] as const
                  ).map((opt) => {
                    const active = opt.id === lang;
                    return (
                      <Link
                        key={opt.id}
                        href={getLangHref(opt.id)}
                        onClick={() => setOpen(false)}
                        className={
                          "inline-flex items-center justify-center rounded-full border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] " +
                          (active ? "border-white/25 bg-white/[0.08] text-white" : "border-white/10 bg-white/[0.04] text-white/80")
                        }
                      >
                        {opt.label}
                      </Link>
                    );
                  })}
                </div>

                {items.map((item) => (
                  <Link
                    key={`mobile-${item.label}`}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3"
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

