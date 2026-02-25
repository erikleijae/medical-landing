"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { SpecialtyCard } from "./specialty-card";
import { getSpecialties, type SpecialtyItem } from "@/data/specialties";

type Props = {
  lang?: "es" | "en" | "pt";
};

const CONTENT = {
  es: {
    title: "Más de 50 especialidades",
    highlight: "",
    description: "DeepClinic Copilot entiende el idioma de tu especialidad. Diseñado para médicos, psicólogos, dentistas, fisioterapeutas y enfermeros."
  },
  en: {
    title: "Over 50 specialties",
    highlight: "supported",
    description: "DeepClinic Copilot understands the language of your specialty. Designed for physicians, psychologists, dentists, physiotherapists, and nurses."
  },
  pt: {
    title: "Mais de 50 especialidades",
    highlight: "compatíveis",
    description: "DeepClinic Copilot entende a linguagem da sua especialidade. Projetado para médicos, psicólogos, dentistas, fisioterapeutas e enfermeiros."
  },
};

export function SpecialtiesVisual({ lang = "es" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const t = CONTENT[lang];

  // Get localized specialties
  const specialties = useMemo(() => getSpecialties(lang), [lang]);

  // Triplicate the array to ensure seamless looping without gaps
  const items = useMemo(() => [...specialties, ...specialties, ...specialties], [specialties]);

  // Use a ref instead of useMotionValue to track mouse position without external deps
  const mouseX = useRef(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width; // 0 to 1
    const value = (relativeX - 0.5) * 2; // -1 to 1
    mouseX.current = value;
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.current = 0;
  };

  return (
    <section className="relative z-10 h-[100svh] snap-start overflow-hidden flex flex-col justify-center px-6 pt-24 pb-16 md:px-8 lg:px-10">

      {/* Background - minimal/clean black style + subtle radial gradient for depth */}
      <div className="pointer-events-none hidden absolute inset-0 bg-black" />
      <div className="pointer-events-none hidden absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]" />

      <div className="mx-auto max-w-7xl relative w-full mb-12">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(32px,4vw,54px)] font-medium leading-[1.1] tracking-tight text-white">
            {t.title}{t.highlight ? <span className="text-white/40"> {t.highlight}</span> : null}
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            {t.description}
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden py-10"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MarqueeContent isHovered={isHovered} mouseX={mouseX} items={items} />

        {/* Gradient Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20" />
      </div>
    </section>
  );
}

function MarqueeContent({
  isHovered,
  mouseX,
  items,
}: {
  isHovered: boolean;
  mouseX: React.MutableRefObject<number>;
  items: SpecialtyItem[];
}) {
  const x = useRef(0);
  const lastTime = useRef(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const animate = (time: number) => {
      if (!lastTime.current) lastTime.current = time;
      const delta = time - lastTime.current;
      lastTime.current = time;

      // Determine speed based on hover and mouse position
      let speed = 0.5; // Default slow drift right (positive x)

      if (isHovered) {
        // Mouse control:
        // Center (0) = 0 speed
        // Right (>0) = Move left (negative speed) to show right content
        // Left (<0) = Move right (positive speed) to show left content

        const mVal = mouseX.current; // -1 to 1
        // Invert interaction for natural feel: Mouse Right -> Content Left
        speed = -mVal * 2.5;
      } else {
        // Default movement: slowly to the right (x increases)
        speed = 0.5;
      }

      // Update position
      x.current += speed * (delta / 16); // Normalize for 60fps

      // Infinite scroll logic (Seamless Loop)
      if (contentRef.current) {
        const fullWidth = contentRef.current.scrollWidth;
        const setWidth = fullWidth / 3; // We have 3 sets

        // Infinite scroll wrap-around
        if (x.current >= 0) {
          x.current = -setWidth;
        }
        else if (x.current <= -2 * setWidth) {
          x.current = -setWidth;
        }

        contentRef.current.style.transform = `translate3d(${x.current}px, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initial positioning
    if (contentRef.current) {
      const fullWidth = contentRef.current.scrollWidth;
      const setWidth = fullWidth / 3;
      x.current = -setWidth;
    }

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, mouseX]); // dependency on mouseX ref is not needed for re-render, ref is stable

  return (
    <div
      ref={contentRef}
      className="flex gap-6 w-max px-4"
      style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}
    >
      {items.map((specialty, index) => (
        <div key={`${specialty.slug}-${index}`} className="shrink-0 w-[320px]">
          <SpecialtyCard specialty={specialty} />
        </div>
      ))}
    </div>
  );
}
