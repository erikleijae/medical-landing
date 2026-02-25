"use client";

import type { PointerEvent as ReactPointerEvent } from "react";
import { useMemo, useRef, useState } from "react";

type StarPoint = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  question: string;
};

function round3(value: number) {
  return Math.round(value * 1000) / 1000;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function joinClassNames(...parts: Array<string | undefined | null | false>) {
  return parts.filter(Boolean).join(" ");
}

type StarRay = {
  id: string;
  deg: number;
  len: number;
  stroke: string;
  strokeWidth: number;
  question: string;
};

type Props = {
  className?: string;
  lang?: "es" | "en" | "pt";
  ambientMotion?: boolean;
};

const QUESTIONS = {
  es: [
    "¿Qué diagnóstico diferencial considerar en cefalea súbita?",
    "¿Interpretación inicial de gasometría arterial en disnea?",
    "¿Manejo de hipertensión severa asintomática vs urgencia hipertensiva?",
    "¿Cuándo iniciar antibiótico en IVU complicada y qué esquema?",
    "¿Algoritmo de dolor abdominal agudo: laboratorios e imagen inicial?",
    "¿Criterios de gravedad en asma y manejo en urgencias?",
    "¿Evaluación inicial de síncope: riesgo y estudios?",
    "¿Abordaje de fiebre sin foco: red flags y pruebas?",
    "¿Manejo de anticoagulación perioperatoria en DOACs?",
    "¿Interpretación de pruebas tiroideas (TSH/T4) en distintos escenarios?",
    "¿Tratamiento inicial de insuficiencia cardiaca descompensada?",
    "¿Cribado y manejo de enfermedad renal crónica en primer nivel?",
  ],
  en: [
    "What differential diagnosis to consider in sudden headache?",
    "Initial interpretation of arterial blood gas in dyspnea?",
    "Management of asymptomatic severe hypertension vs hypertensive urgency?",
    "When to start antibiotics in complicated UTI and which regimen?",
    "Acute abdominal pain algorithm: initial labs and imaging?",
    "Severity criteria in asthma and emergency management?",
    "Initial evaluation of syncope: risk and studies?",
    "Approach to fever without source: red flags and tests?",
    "Management of perioperative anticoagulation in DOACs?",
    "Interpretation of thyroid tests (TSH/T4) in different scenarios?",
    "Initial treatment of decompensated heart failure?",
    "Screening and management of chronic kidney disease in primary care?",
  ],
  pt: [
    "Que diagnóstico diferencial considerar em cefaleia súbita?",
    "Interpretação inicial de gasometria arterial em dispneia?",
    "Manejo de hipertensão grave assintomática vs urgência hipertensiva?",
    "Quando iniciar antibiótico em ITU complicada e qual esquema?",
    "Algoritmo de dor abdominal aguda: laboratórios e imagem inicial?",
    "Critérios de gravidade em asma e manejo na emergência?",
    "Avaliação inicial de síncope: risco e estudos?",
    "Abordagem de febre sem foco: red flags e exames?",
    "Manejo de anticoagulação perioperatória em DOACs?",
    "Interpretação de testes tireoidianos (TSH/T4) em diferentes cenários?",
    "Tratamento inicial de insuficiência cardíaca descompensada?",
    "Rastreamento e manejo de doença renal crônica na atenção primária?",
  ],
};

export function InteractiveStarburst({ className, lang = "es", ambientMotion = false }: Props) {
  const rays = useMemo<StarRay[]>(() => {
    const questions = QUESTIONS[lang];

    const major = [
      0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 132, 144, 156, 168, 180, 192, 204,
      216, 228, 240, 252, 264, 276, 288, 300, 312, 324, 336, 348,
    ];

    const minor = [4, 18, 36, 52, 68, 92, 116, 138, 162, 186, 214, 238, 262, 286, 314, 338];

    const majorRays: StarRay[] = major.map((deg, idx) => ({
      id: `ray-major-${deg}`,
      deg,
      len: 210 + ((idx * 13) % 34),
      stroke: "rgba(255,255,255,0.075)",
      strokeWidth: 2,
      question: questions[idx % questions.length] ?? questions[0] ?? "",
    }));

    const minorRays: StarRay[] = minor.map((deg, idx) => ({
      id: `ray-minor-${deg}`,
      deg,
      len: 240 + ((idx * 17) % 64),
      stroke: "rgba(255,255,255,0.045)",
      strokeWidth: 1,
      question: questions[(idx + majorRays.length) % questions.length] ?? questions[0] ?? "",
    }));

    return [...majorRays, ...minorRays];
  }, [lang]);

  const points = useMemo<StarPoint[]>(() => {
    const cx = 600;
    const cy = 320;

    return rays.map((ray, idx) => {
      const rad = (ray.deg * Math.PI) / 180;
      const len = ray.len;
      const x = cx + Math.sin(rad) * len;
      const y = cy - Math.cos(rad) * len;
      const size = idx % 7 === 0 ? 8 : idx % 3 === 0 ? 7 : 6;
      const fill = idx % 5 === 0 ? "rgba(191,219,254,0.96)" : "rgba(255,255,255,0.74)";

      return {
        id: ray.id,
        x: round3(x - size / 2),
        y: round3(y - size / 2),
        w: size,
        h: size,
        fill,
        question: ray.question,
      };
    });
  }, [rays]);

  const [activePointId, setActivePointId] = useState("");
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const dragRef = useRef<{
    pointerId: number | null;
    startX: number;
    startY: number;
    startOffsetX: number;
    startOffsetY: number;
    moved: boolean;
  }>({
    pointerId: null,
    startX: 0,
    startY: 0,
    startOffsetX: 0,
    startOffsetY: 0,
    moved: false,
  });

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    dragRef.current.pointerId = e.pointerId;
    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
    dragRef.current.startOffsetX = offset.x;
    dragRef.current.startOffsetY = offset.y;
    dragRef.current.moved = false;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragRef.current.pointerId !== e.pointerId) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;

    if (Math.abs(dx) + Math.abs(dy) > 3) dragRef.current.moved = true;

    const nextX = clamp(dragRef.current.startOffsetX + dx, -70, 70);
    const nextY = clamp(dragRef.current.startOffsetY + dy, -40, 40);
    setOffset({ x: nextX, y: nextY });
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragRef.current.pointerId !== e.pointerId) return;
    dragRef.current.pointerId = null;
    setDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // noop
    }
  };

  const onPointerCancel = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragRef.current.pointerId !== e.pointerId) return;
    dragRef.current.pointerId = null;
    setDragging(false);
  };

  return (
    <div
      className={joinClassNames(
        "relative h-full w-full",
        dragging ? "cursor-grabbing" : "cursor-grab",
        className,
      )}
      role="application"
      aria-label="Mapa interactivo de preguntas clínicas"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="dc_motion">
          <div className={joinClassNames("dc_motion will-change-transform", ambientMotion ? "dc_starburst_drift" : null)}>
            <div className="dc_motion will-change-transform" style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}>
              <div
                className="dc_motion dc_starburst_spin origin-center transform-gpu will-change-transform"
                style={{ transformOrigin: "50% 50%" }}
              >
                <svg
                  viewBox="0 0 1200 640"
                  className="h-[620px] w-[1160px] select-none md:h-[760px] md:w-[1400px] lg:h-[820px] lg:w-[1520px]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <g>
                    <g opacity="0.62" transform="translate(600 360)">
                      {rays.map((ray) => {
                        const isActive = ray.id === activePointId;
                        return (
                          <g key={ray.id}>
                            <line
                              x1={0}
                              y1={0}
                              x2={0}
                              y2={-ray.len}
                              transform={`rotate(${ray.deg})`}
                              stroke={isActive ? "rgba(255,255,255,0.26)" : ray.stroke}
                              strokeWidth={isActive ? Math.max(ray.strokeWidth, 2) : ray.strokeWidth}
                              strokeLinecap="round"
                            />
                          </g>
                        );
                      })}
                    </g>

                    <g opacity="0.96">
                      {points
                        .filter((p) => p.id !== activePointId)
                        .map((p, idx) => (
                          <PointGroup
                            key={p.id}
                            p={p}
                            idx={idx}
                            isActive={false}
                            setActivePointId={setActivePointId}
                          />
                        ))}
                      {points
                        .filter((p) => p.id === activePointId)
                        .map((p, idx) => (
                          <PointGroup
                            key={p.id}
                            p={p}
                            idx={idx}
                            isActive={true}
                            setActivePointId={setActivePointId}
                          />
                        ))}
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PointGroup({
  p,
  idx,
  isActive,
  setActivePointId,
}: {
  p: StarPoint;
  idx: number;
  isActive: boolean;
  setActivePointId: (id: string) => void;
}) {
  const hit = 22;
  const hitX = round3(p.x - (hit - p.w) / 2);
  const hitY = round3(p.y - (hit - p.h) / 2);
  const rectX = round3(p.x);
  const rectY = round3(p.y);

  // Calculate active card position (centered above point)
  const foSize = 400;
  const foX = p.x - foSize / 2 + p.w / 2;
  const foY = p.y - foSize / 2 + p.h / 2;

  return (
    <g>
      <rect
        x={hitX}
        y={hitY}
        width={hit}
        height={hit}
        fill="transparent"
        pointerEvents="all"
        role="button"
        aria-label={p.question}
        tabIndex={-1}
        style={{ cursor: "pointer" }}
        onPointerDown={(e) => {
          e.stopPropagation();
        }}
        onClick={(e) => {
          e.stopPropagation();
          setActivePointId(p.id);
        }}
      />

      <rect
        x={rectX}
        y={rectY}
        width={p.w}
        height={p.h}
        fill={p.fill}
        rx={1}
        ry={1}
        className={joinClassNames(
          "dc_motion",
          "outline-none",
          "transition-[opacity] duration-200",
          isActive ? "opacity-100" : "opacity-72",
          "animate-dc-twinkle",
        )}
        style={{
          animationDelay: `${idx * 140}ms`,
          cursor: "pointer",
          filter: isActive
            ? "drop-shadow(0 0 12px rgba(255,255,255,0.45)) drop-shadow(0 0 30px rgba(191,219,254,0.22))"
            : "drop-shadow(0 0 10px rgba(255,255,255,0.10))",
        }}
        tabIndex={0}
        role="button"
        aria-label={p.question}
        onPointerDown={(e) => {
          e.stopPropagation();
        }}
        onFocus={() => setActivePointId(p.id)}
        onClick={(e) => {
          e.stopPropagation();
          setActivePointId(p.id);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setActivePointId(p.id);
          }
        }}
      />

      {isActive ? (
        <>
          <rect
            x={round3(rectX - 3)}
            y={round3(rectY - 3)}
            width={p.w + 6}
            height={p.h + 6}
            fill="transparent"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth={1}
          />
          <foreignObject
            x={foX}
            y={foY}
            width={foSize}
            height={foSize}
            className="overflow-visible pointer-events-none"
          >
            {/* Counter-rotate wrapper to keep text upright */}
            <div
              className="w-full h-full flex items-center justify-center animate-[dc-spin_60s_linear_infinite_reverse]"
              style={{ animationPlayState: isActive ? "paused" : "running" }}
            >
              {/* Tooltip Card - Positioned above point */}
              <div className="flex flex-col items-center justify-end -translate-y-[50px]">
                <div className="bg-white border border-white/20 rounded-xl px-5 py-4 text-center shadow-[0_0_60px_rgba(255,255,255,0.25)] max-w-[320px]">
                  <p className="text-base font-semibold text-black leading-snug">
                    {p.question}
                  </p>
                </div>
                {/* Small indicator arrow/triangle instead of long line */}
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-white mt-[-1px]"></div>
              </div>
            </div>
          </foreignObject>
        </>
      ) : null}
    </g>
  );
}
