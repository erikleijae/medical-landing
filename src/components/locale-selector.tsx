"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type SupportedLanguage = "es" | "en" | "pt";

type CountryCode =
  | "ag" // Antigua y Barbuda
  | "ar" // Argentina
  | "bs" // Bahamas
  | "bb" // Barbados
  | "bz" // Belice
  | "bo" // Bolivia
  | "br" // Brasil
  | "ca" // Canadá
  | "cl" // Chile
  | "co" // Colombia
  | "cr" // Costa Rica
  | "cu" // Cuba
  | "dm" // Dominica
  | "do" // República Dominicana
  | "ec" // Ecuador
  | "sv" // El Salvador
  | "gd" // Granada
  | "gt" // Guatemala
  | "gy" // Guyana
  | "ht" // Haití
  | "hn" // Honduras
  | "jm" // Jamaica
  | "mx" // México
  | "ni" // Nicaragua
  | "pa" // Panamá
  | "py" // Paraguay
  | "pe" // Perú
  | "kn" // San Cristóbal y Nieves
  | "lc" // Santa Lucía
  | "vc" // San Vicente y las Granadinas
  | "sr" // Surinam
  | "tt" // Trinidad y Tobago
  | "us" // Estados Unidos
  | "uy" // Uruguay
  | "ve"; // Venezuela

type CountryOption = {
  code: CountryCode;
  label: string;
  defaultLanguage: SupportedLanguage;
};

type LanguageOption = {
  code: SupportedLanguage;
  label: string;
};

type StoredPreference = {
  countryCode: CountryCode;
  languageCode: SupportedLanguage;
};

const STORAGE_KEY = "copiloto-locale-preferences";

const COUNTRY_OPTIONS: CountryOption[] = [
  { code: "ag", label: "Antigua y Barbuda", defaultLanguage: "en" },
  { code: "ar", label: "Argentina", defaultLanguage: "es" },
  { code: "bs", label: "Bahamas", defaultLanguage: "en" },
  { code: "bb", label: "Barbados", defaultLanguage: "en" },
  { code: "bz", label: "Belice", defaultLanguage: "en" },
  { code: "bo", label: "Bolivia", defaultLanguage: "es" },
  { code: "br", label: "Brasil", defaultLanguage: "pt" },
  { code: "ca", label: "Canadá", defaultLanguage: "en" },
  { code: "cl", label: "Chile", defaultLanguage: "es" },
  { code: "co", label: "Colombia", defaultLanguage: "es" },
  { code: "cr", label: "Costa Rica", defaultLanguage: "es" },
  { code: "cu", label: "Cuba", defaultLanguage: "es" },
  { code: "dm", label: "Dominica", defaultLanguage: "en" },
  { code: "do", label: "República Dominicana", defaultLanguage: "es" },
  { code: "ec", label: "Ecuador", defaultLanguage: "es" },
  { code: "sv", label: "El Salvador", defaultLanguage: "es" },
  { code: "gd", label: "Granada", defaultLanguage: "en" },
  { code: "gt", label: "Guatemala", defaultLanguage: "es" },
  { code: "gy", label: "Guyana", defaultLanguage: "en" },
  { code: "ht", label: "Haití", defaultLanguage: "es" },
  { code: "hn", label: "Honduras", defaultLanguage: "es" },
  { code: "jm", label: "Jamaica", defaultLanguage: "en" },
  { code: "mx", label: "México", defaultLanguage: "es" },
  { code: "ni", label: "Nicaragua", defaultLanguage: "es" },
  { code: "pa", label: "Panamá", defaultLanguage: "es" },
  { code: "py", label: "Paraguay", defaultLanguage: "es" },
  { code: "pe", label: "Perú", defaultLanguage: "es" },
  { code: "kn", label: "San Cristóbal y Nieves", defaultLanguage: "en" },
  { code: "lc", label: "Santa Lucía", defaultLanguage: "en" },
  { code: "vc", label: "San Vicente y las Granadinas", defaultLanguage: "en" },
  { code: "sr", label: "Surinam", defaultLanguage: "en" },
  { code: "tt", label: "Trinidad y Tobago", defaultLanguage: "en" },
  { code: "us", label: "Estados Unidos", defaultLanguage: "en" },
  { code: "uy", label: "Uruguay", defaultLanguage: "es" },
  { code: "ve", label: "Venezuela", defaultLanguage: "es" },
];

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
];

const DEFAULT_COUNTRY: CountryCode = "mx";
const DEFAULT_LANGUAGE: SupportedLanguage = "es";

function getDefaultCountryForLanguage(language: SupportedLanguage): CountryCode {
  const preferredCode: CountryCode | null =
    language === "es" ? "mx" : language === "pt" ? "br" : language === "en" ? "us" : null;

  if (preferredCode) {
    const preferred = COUNTRY_OPTIONS.find((country) => country.code === preferredCode);
    if (preferred) return preferred.code;
  }

  const fallback = COUNTRY_OPTIONS.find((country) => country.defaultLanguage === language);
  if (fallback) return fallback.code;

  return DEFAULT_COUNTRY;
}

function detectLanguageFromNavigator(): SupportedLanguage {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  const nav = (window.navigator.language || "").toLowerCase();

  if (nav.startsWith("pt")) return "pt";
  if (nav.startsWith("en")) return "en";

  return "es";
}

function detectLanguageFromPathname(pathname: string | null): SupportedLanguage | null {
  if (!pathname) return null;

  if (pathname.startsWith("/en")) return "en";
  if (pathname.startsWith("/pt")) return "pt";
  if (pathname.startsWith("/es")) return "es";

  return null;
}

function readStoredPreference(): StoredPreference | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<StoredPreference> | null;
    if (!parsed || !parsed.languageCode) return null;

    const language = parsed.languageCode;
    if (language !== "es" && language !== "en" && language !== "pt") {
      return null;
    }

    const hasValidCountry =
      parsed.countryCode &&
      COUNTRY_OPTIONS.some((country) => country.code === parsed.countryCode);

    const countryCode = hasValidCountry
      ? (parsed.countryCode as CountryCode)
      : getDefaultCountryForLanguage(language);

    return { countryCode, languageCode: language };
  } catch {
    return null;
  }
}

function persistPreference(preference: StoredPreference) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preference));
  } catch {
    // ignore
  }
}

export function LocaleSelector() {
  const pathname = usePathname();
  const router = useRouter();

  const [countryCode, setCountryCode] = useState<CountryCode>(DEFAULT_COUNTRY);
  const [languageCode, setLanguageCode] = useState<SupportedLanguage>(DEFAULT_LANGUAGE);
  const [isOpen, setIsOpen] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const languageFromPath = detectLanguageFromPathname(pathname ?? null);
    const stored = readStoredPreference();
    const navigatorLanguage = detectLanguageFromNavigator();

    const effectiveLanguage: SupportedLanguage =
      languageFromPath ?? stored?.languageCode ?? navigatorLanguage ?? DEFAULT_LANGUAGE;

    const effectiveCountry: CountryCode =
      stored?.countryCode ?? getDefaultCountryForLanguage(effectiveLanguage);

    setLanguageCode(effectiveLanguage);
    setCountryCode(effectiveCountry);
    persistPreference({ countryCode: effectiveCountry, languageCode: effectiveLanguage });
    setInitialized(true);
  }, [pathname]);

  const selectedCountry =
    COUNTRY_OPTIONS.find((country) => country.code === countryCode) ?? COUNTRY_OPTIONS[0];
  const selectedLanguage =
    LANGUAGE_OPTIONS.find((language) => language.code === languageCode) ?? LANGUAGE_OPTIONS[0];

  const displayLabel = `${selectedCountry.label} (${selectedLanguage.label})`;

  const handleApply = () => {
    if (!initialized) return;

    const preference: StoredPreference = { countryCode, languageCode };
    persistPreference(preference);

    const language = preference.languageCode;
    const currentPath = pathname || "/";
    const segments = currentPath.split("/");

    let restSegments = segments.slice(1);
    if (restSegments[0] === "es" || restSegments[0] === "en" || restSegments[0] === "pt") {
      restSegments = restSegments.slice(1);
    }

    const restPath = restSegments.length > 0 ? `/${restSegments.join("/")}` : "";
    const targetPath = `/${language}${restPath}` || "/";

    if (targetPath !== currentPath) {
      router.push(targetPath);
    }

    setIsOpen(false);
  };

  return (
    <div className="mt-12 flex items-center justify-center text-[11px] text-slate-500 sm:justify-start sm:text-xs">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-[11px] text-slate-700 shadow-sm transition hover:bg-slate-50"
      >
        <span aria-hidden>🌐</span>
        <span>{displayLabel}</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 text-sm text-slate-800 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2 text-slate-900">
                <span aria-hidden>🌐</span>
                <span className="text-sm font-semibold">Elige país e idioma</span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Cerrar selector de idioma"
              >
                ×
              </button>
            </div>

            <div className="mt-6 space-y-6 text-[13px]">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">País</p>
                <div className="mt-2">
                  <select
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/70"
                    value={countryCode}
                    onChange={(event) => {
                      const value = event.target.value as CountryCode;
                      const exists = COUNTRY_OPTIONS.some((country) => country.code === value);
                      if (exists) {
                        setCountryCode(value);
                      }
                    }}
                  >
                    {COUNTRY_OPTIONS.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Idioma</p>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {LANGUAGE_OPTIONS.map((option) => {
                    const isActive = option.code === languageCode;
                    return (
                      <button
                        key={option.code}
                        type="button"
                        onClick={() => setLanguageCode(option.code)}
                        className={`rounded-full border px-3 py-1.5 text-xs transition ${
                          isActive
                            ? "border-slate-900 bg-slate-900 text-white"
                            : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleApply}
                  className="inline-flex w-full items-center justify-center rounded-full bg-black px-4 py-2.5 text-[13px] font-semibold text-[#d5ff7c] shadow-sm transition hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-white"
                >
                  Actualizar preferencias
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
