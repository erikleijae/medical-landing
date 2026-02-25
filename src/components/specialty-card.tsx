"use client";

import type { SpecialtyItem } from "@/data/specialties";

interface SpecialtyCardProps {
  specialty: SpecialtyItem;
}

export function SpecialtyCard({ specialty }: SpecialtyCardProps) {
  return (
    <div
      className="group relative flex h-[420px] w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]"
    >
      {/* Background Gradient Effect (Subtle) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Accent Glow on Hover */}
      <div
        className="absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full blur-[80px] transition-all duration-700 group-hover:opacity-60"
        style={{
          background: specialty.category === 'human' ? 'rgba(56, 189, 248, 0.15)' :
            specialty.category === 'veterinary' ? 'rgba(34, 197, 94, 0.15)' :
              'rgba(168, 85, 247, 0.15)',
          opacity: 0
        }}
      />

      <div className="relative z-10 flex flex-col gap-6">
        {/* Icon & Category */}
        <div className="flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-3xl shadow-inner ring-1 ring-white/10 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10">
            {specialty.icon}
          </div>
          <div className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/40 backdrop-blur-sm">
            {specialty.category === 'human' ? 'Médica' :
              specialty.category === 'veterinary' ? 'Veterinaria' : 'Odontología'}
          </div>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-2xl font-bold leading-tight text-white transition-colors group-hover:text-white">
            {specialty.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/50 transition-colors group-hover:text-white/70">
            {specialty.description}
          </p>
        </div>
      </div>

      {/* Footer / Action */}
      <div className="relative z-10 mt-auto pt-8">
        <div className="flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-xs font-medium text-white/40 transition-colors group-hover:text-white/60">
            Modelo Especializado
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
