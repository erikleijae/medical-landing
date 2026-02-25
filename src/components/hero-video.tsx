"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

const BUTTON_LABEL: Record<string, { text: string; multiline?: boolean }> = {
  es: { text: "Descubre cómo funciona", multiline: true },
  en: { text: "See how it works", multiline: false },
  pt: { text: "Descubra como funciona", multiline: false },
};

export function HeroVideo({ theme = "light" }: { theme?: "light" | "dark" }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : pathname.startsWith("/pt") ? "pt" : "es";
  const labelConfig = BUTTON_LABEL[locale] ?? BUTTON_LABEL.es;
  const previewVideoSrc = locale === "es" ? "/tandem-hero-thumb-16-9_esp.mp4" : "/video/deep.mp4";

  const containerBorder = theme === "dark" ? "border-white/10" : "border-slate-200";
  const containerBg = theme === "dark" ? "bg-white/5" : "bg-slate-100";
  const shadowClass =
    theme === "dark"
      ? "shadow-[0_4px_24px_rgba(0,0,0,0.4)] group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)] group-hover:border-white/20"
      : "shadow-[0_4px_24px_rgba(15,23,42,0.08)] group-hover:shadow-[0_8px_40px_rgba(15,23,42,0.12)] group-hover:border-slate-300";

  const buttonOuterClass =
    theme === "dark"
      ? "flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center rounded-full border-[3px] border-[#d5ff7c] bg-white shadow-[0_0_40px_rgba(213,255,124,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_60px_rgba(213,255,124,0.5)]"
      : "flex h-32 w-32 sm:h-44 sm:w-44 items-center justify-center rounded-full border-[4px] border-brand-accent-strong bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.2),0_0_0_1px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:scale-105 group-hover:bg-white group-hover:shadow-[0_24px_72px_rgba(15,23,42,0.25)]";

  const buttonInnerClass =
    theme === "dark"
      ? "relative flex items-center gap-3 rounded-full bg-[#0f172a] px-5 py-3 text-left text-[14px] sm:text-[15px] font-semibold leading-tight text-white shadow-lg transition-transform duration-300 group-hover:scale-105"
      : "inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-5 py-2.5 sm:px-6 sm:py-3 text-[14px] sm:text-[15px] font-semibold text-white shadow-lg transition-colors duration-300 group-hover:bg-slate-800";

  const renderLabel = () => {
    if (theme === "dark" && labelConfig.multiline && locale === "es") {
      return (
        <span className="block leading-[1.15]">
          <span className="block">Descubre</span>
          <span className="block">cómo</span>
          <span className="block">funciona</span>
        </span>
      );
    }
    return <span className="block max-w-[100px] sm:max-w-none leading-tight">{labelConfig.text}</span>;
  };

  if (isPlaying) {
    return (
      <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6 lg:px-0">
        <div className={"overflow-hidden rounded-3xl bg-black/90 border " + containerBorder}>
          <div className="relative aspect-[16/9] w-full">
            <iframe
              className="h-full w-full rounded-3xl"
              src="https://www.youtube.com/embed/rZnbL_LZSm0?autoplay=1&rel=0"
              title="DeepClinic Copilot - Cómo funciona"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6 lg:px-0">
      <button
        type="button"
        onClick={() => setIsPlaying(true)}
        className="group relative block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-strong focus-visible:ring-offset-4 focus-visible:ring-offset-white rounded-3xl"
      >
        <div
          className={
            "overflow-hidden rounded-3xl border transition-shadow duration-300 " +
            containerBg +
            " " +
            containerBorder +
            " " +
            shadowClass
          }
        >
          <div className="relative aspect-[16/9] w-full">
            <video
              src={previewVideoSrc}
              className="h-full w-full object-cover opacity-95 transition-opacity duration-300 group-hover:opacity-100"
              muted
              loop
              autoPlay
              playsInline
            />
            {/* Overlay suave para resaltar el botón */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Botón posicionado absolutamente sobre el contenedor para evitar recorte del shadow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-10">
          <div className={buttonOuterClass}>
            <span className={buttonInnerClass}>
              <svg
                className="h-5 w-5 shrink-0 fill-current"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              {renderLabel()}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}
