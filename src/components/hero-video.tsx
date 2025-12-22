"use client";

import { useState } from "react";

export function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

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
        className="block w-full text-left focus:outline-none"
      >
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-[#f4f8fd] shadow-sm">
          <div className="relative aspect-[16/9] w-full">
            <video
              src="/tandem-hero-thumb-16-9_esp.mp4"
              className="h-full w-full object-cover opacity-90"
              muted
              loop
              autoPlay
              playsInline
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border-[6px] border-[#b8e66f] bg-white/70 shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
                <span className="inline-flex items-center rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white shadow-lg">
                  Empezar
                </span>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
