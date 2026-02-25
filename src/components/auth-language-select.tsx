"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type AuthLang = "es" | "en" | "pt";

type LanguageOption = {
  value: AuthLang;
  label: string;
};

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { value: "es", label: "Español" },
  { value: "en", label: "English" },
  { value: "pt", label: "Português" },
];

const LANGUAGE_LABELS: Record<AuthLang, string> = {
  es: "Idioma",
  en: "Language",
  pt: "Idioma",
};

function resolveAuthLang(pathname: string | null): AuthLang {
  if (!pathname) return "es";
  if (pathname.startsWith("/en")) return "en";
  if (pathname.startsWith("/pt")) return "pt";
  return "es";
}

function buildPath(nextLang: AuthLang, pathname: string | null) {
  if (!pathname) return `/${nextLang}`;
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] === "es" || parts[0] === "en" || parts[0] === "pt") {
    parts[0] = nextLang;
  } else {
    parts.unshift(nextLang);
  }
  return `/${parts.join("/")}`;
}

export function AuthLanguageSelect({ theme = "light" }: { theme?: "light" | "dark" }) {
  const pathname = usePathname();
  const router = useRouter();
  const [lang, setLang] = useState<AuthLang>("es");

  useEffect(() => {
    setLang(resolveAuthLang(pathname));
  }, [pathname]);

  const isDark = theme === "dark";

  return (
    <label className={`flex items-center gap-2 text-xs ${isDark ? "text-white/50" : "text-slate-500"}`}>
      <span>{LANGUAGE_LABELS[lang]}</span>
      <select
        value={lang}
        onChange={(event) => {
          const nextLang = event.target.value as AuthLang;
          setLang(nextLang);
          router.push(buildPath(nextLang, pathname));
        }}
        className={`rounded-md border px-2 py-1 text-xs outline-none focus:ring-2 ${isDark
            ? "border-white/10 bg-white/5 text-white focus:border-white/20 focus:bg-white/10 focus:ring-white/10"
            : "border-slate-300 bg-white text-slate-900 focus:ring-slate-900/10"
          }`}
      >
        {LANGUAGE_OPTIONS.map((option) => (
          <option key={option.value} value={option.value} className="text-black">
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
