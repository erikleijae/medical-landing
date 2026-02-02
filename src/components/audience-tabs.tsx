"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Language = "es" | "en" | "pt";

type TabKey = "clinicians" | "revenue" | "nurses";

type AudienceTabsProps = {
  language?: Language;
};

const IMAGES = [
  "/doctors/67b19236e3a3611ed6065a9b_01%20animation%20img.avif",
  "/doctors/67b19235807867cccd9a5006_03%20animation%20img.avif",
  "/doctors/67b19235d44d8582c04e31fd_05%20animation%20img.avif",
  "/doctors/67b192356ced5afd78c13178_09%20animation%20img.avif",
  "/doctors/67b19235c56540b2db753a22_10%20animation%20img.avif",
  "/doctors/67b19235a4b91a892ffe97a7_17%20animation%20img.avif",
  "/doctors/67b19235feae33bb5666a86a_21%20animation%20img.avif",
  "/doctors/67b19235a4b91a892ffe97a4_28%20animation%20img.avif",
] as const;

const HIGHLIGHTS: Record<TabKey, number[]> = {
  clinicians: [2, 6, 9, 13, 17],
  revenue: [1, 5, 10, 14, 18],
  nurses: [3, 7, 11, 15, 19],
};

const TAB_IMAGE_OFFSETS: Record<TabKey, number> = {
  clinicians: 0,
  revenue: 3,
  nurses: 5,
};

const COPY: Record<Language, Record<TabKey, { label: string; title: string; body: string }>> = {
  es: {
    clinicians: {
      label: "Hospitales y Médicos",
      title: "Hospitales y Médicos",
      body: "Documentación clínica más rápida y precisa. Los profesionales dedican más tiempo al paciente y menos al papeleo administrativo.",
    },
    revenue: {
      label: "Ciclo de ingresos",
      title: "Ciclo de ingresos",
      body: "Estandarización de notas y captura de datos optimizada para reducir retrabajo, acelerar la facturación y maximizar ingresos.",
    },
    nurses: {
      label: "Enfermería",
      title: "Enfermería",
      body: "Documentación diseñada para el flujo de trabajo de enfermería: eficiente, precisa y centrada en el cuidado del paciente.",
    },
  },
  en: {
    clinicians: {
      label: "Hospitals & Doctors",
      title: "Hospitals & Doctors",
      body: "Faster, more accurate clinical documentation. Professionals spend more time with patients and less on administrative paperwork.",
    },
    revenue: {
      label: "Revenue Cycle",
      title: "Revenue Cycle",
      body: "Standardized notes and optimized data capture to reduce rework, speed up billing, and maximize revenue.",
    },
    nurses: {
      label: "Nurses",
      title: "Nurses",
      body: "Documentation designed for nursing workflows: efficient, accurate, and focused on patient care.",
    },
  },
  pt: {
    clinicians: {
      label: "Hospitais e Médicos",
      title: "Hospitais e Médicos",
      body: "Documentação clínica mais rápida e precisa. Os profissionais dedicam mais tempo ao paciente e menos à burocracia administrativa.",
    },
    revenue: {
      label: "Ciclo de receita",
      title: "Ciclo de receita",
      body: "Padronização de notas e captura de dados otimizada para reduzir retrabalho, acelerar faturamento e maximizar receita.",
    },
    nurses: {
      label: "Enfermagem",
      title: "Enfermagem",
      body: "Documentação projetada para o fluxo de trabalho de enfermagem: eficiente, precisa e focada no cuidado ao paciente.",
    },
  },
};

export function AudienceTabs({ language = "es" }: AudienceTabsProps) {
  const [active, setActive] = useState<TabKey>("clinicians");

  const tiles = useMemo(() => {
    const highlightOrder = HIGHLIGHTS[active];
    const highlight = new Set(highlightOrder);
    const offset = TAB_IMAGE_OFFSETS[active] % IMAGES.length;
    const rotatedImages = [...IMAGES.slice(offset), ...IMAGES.slice(0, offset)];

    return Array.from({ length: 20 }, (_, idx) => {
      const isOn = highlight.has(idx);
      const highlightPos = highlightOrder.indexOf(idx);
      const src = isOn
        ? rotatedImages[highlightPos % rotatedImages.length]
        : rotatedImages[(idx * 3 + offset) % rotatedImages.length];
      return { idx, src, isOn };
    });
  }, [active]);

  const items: TabKey[] = ["clinicians", "revenue", "nurses"];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-32 md:px-8 md:py-36 lg:px-0">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="grid grid-cols-5 gap-3">
            {tiles.map((tile) => (
              <div
                key={tile.idx}
                className={
                  "relative aspect-square overflow-hidden rounded-2xl bg-slate-100 transition-opacity duration-300 " +
                  (tile.isOn ? "opacity-100" : "opacity-15")
                }
              >
                <Image src={tile.src} alt="" fill className="object-cover" sizes="(min-width: 768px) 110px, 70px" />
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-8 md:border-t-0 md:pt-0">
            <div className="divide-y divide-slate-200">
              {items.map((key) => {
                const isActive = active === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActive(key)}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <div>
                      <p className={(isActive ? "text-slate-900" : "text-slate-500") + " text-[18px] font-semibold"}>
                        {COPY[language][key].label}
                      </p>
                      {isActive && (
                        <p className="mt-3 text-[14px] leading-relaxed text-slate-700">{COPY[language][key].body}</p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
