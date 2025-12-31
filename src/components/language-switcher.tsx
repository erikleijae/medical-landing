"use client";

import Link from "next/link";
import { useState } from "react";

type Locale = "es" | "en" | "pt";

const LANGUAGES: { code: Locale; label: string; href: string; flag: string }[] = [
  { code: "es", label: "ES", href: "/", flag: "🇲🇽" },
  { code: "en", label: "English", href: "/en", flag: "🇺🇸" },
  { code: "pt", label: "PT", href: "/pt", flag: "🇧🇷" },
];

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);

  const current = LANGUAGES.find((lang) => lang.code === locale) ?? LANGUAGES[0];
  const others = LANGUAGES.filter((lang) => lang.code !== current.code);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[13px] font-medium text-slate-900 shadow-sm"
      >
        <span className="mr-2 text-base" aria-hidden>
          {current.flag}
        </span>
        <span>{current.label}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 flex w-32 flex-col gap-1 rounded-2xl bg-slate-50 p-2 shadow-lg">
          {[current, ...others].map((lang) => {
            const isActive = lang.code === current.code;

            return (
              <Link
                key={lang.code}
                href={lang.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`inline-flex items-center rounded-full px-3 py-1.5 text-[13px] font-medium ${
                  isActive
                    ? "bg-white text-slate-900"
                    : "text-slate-700 hover:bg-white/80"
                }`}
              >
                <span className="mr-2 text-base" aria-hidden>
                  {lang.flag}
                </span>
                <span>{lang.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
