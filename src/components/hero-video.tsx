"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

const BUTTON_LABEL: Record<string, string> = {
  es: "Descubre cómo funciona",
  en: "See how it works",
  pt: "Descubra como funciona",
};

export function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : pathname.startsWith("/pt") ? "pt" : "es";
  const buttonLabel = BUTTON_LABEL[locale] ?? BUTTON_LABEL.es;

  if (isPlaying) {
    return (
      <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6 lg:px-0">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-black/90">
          <div className="relative aspect-[16/9] w-full">
            <iframe
              className="h-full w-full rounded-3xl"
              src="https://www.youtube.com/embed/rZnbL_LZSm0?autoplay=1&rel=0"
              title="Copiloto Médico - Cómo funciona"
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
        className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d5ff7c] focus-visible:ring-offset-4 focus-visible:ring-offset-white rounded-3xl"
      >
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.08)] transition-shadow duration-300 group-hover:shadow-[0_8px_40px_rgba(15,23,42,0.12)] group-hover:border-slate-300">
          <div className="relative aspect-[16/9] w-full">
            <video
              src="/tandem-hero-thumb-16-9_esp.mp4"
              className="h-full w-full object-cover opacity-95 transition-opacity duration-300 group-hover:opacity-100"
              muted
              loop
              autoPlay
              playsInline
            />
            {/* Overlay suave para resaltar el botón */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="flex h-44 w-44 items-center justify-center rounded-full border-[4px] border-[#d5ff7c] bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.2),0_0_0_1px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#c9f46c] group-hover:bg-white group-hover:shadow-[0_24px_72px_rgba(15,23,42,0.25)]">
                <span className="inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-6 py-3 text-[15px] font-semibold text-white shadow-lg transition-colors duration-300 group-hover:bg-slate-800">
                  <svg
                    className="h-5 w-5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  {buttonLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
