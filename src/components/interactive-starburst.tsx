"use client";

import type { PointerEvent as ReactPointerEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type StarPoint = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  question: string;
};

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
};

function joinClassNames(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function InteractiveStarburst({ className }: Props) {
  const points = useMemo<StarPoint[]>(
    () => [
      {
        id: "p1",
        x: 313,
        y: 118,
        w: 8,
        h: 8,
        fill: "rgba(147,197,253,0.85)",
        question: "¿Qué antibiótico empírico iniciar en neumonía adquirida en la comunidad?",
      },
      {
        id: "p2",
        x: 452,
        y: 88,
        w: 6,
        h: 6,
        fill: "rgba(255,255,255,0.55)",
        question: "¿Manejo inicial de sepsis en urgencias: fluidos, antibióticos y lactato?",
      },
      {
        id: "p3",
        x: 902,
        y: 166,
        w: 7,
        h: 7,
        fill: "rgba(147,197,253,0.70)",
        question: "¿Cómo interpretar este ECG y cuándo activar código infarto?",
      },
      {
        id: "p4",
        x: 992,
        y: 308,
        w: 6,
        h: 6,
        fill: "rgba(255,255,255,0.45)",
        question: "¿Indicaciones de anticoagulación en fibrilación auricular (CHA2DS2-VASc)?",
      },
      {
        id: "p5",
        x: 948,
        y: 430,
        w: 7,
        h: 7,
        fill: "rgba(147,197,253,0.65)",
        question: "¿Evaluación de anemia microcítica: ferritina, VCM y sospecha clínica?",
      },
      {
        id: "p6",
        x: 840,
        y: 522,
        w: 6,
        h: 6,
        fill: "rgba(255,255,255,0.38)",
        question: "¿Abordaje de dolor torácico agudo: diferenciales y pruebas iniciales?",
      },
      {
        id: "p7",
        x: 410,
        y: 518,
        w: 7,
        h: 7,
        fill: "rgba(147,197,253,0.70)",
        question: "¿Criterios para hospitalizar una exacerbación de EPOC y tratamiento?",
      },
      {
        id: "p8",
        x: 284,
        y: 410,
        w: 6,
        h: 6,
        fill: "rgba(255,255,255,0.35)",
        question: "¿Manejo de hiperglucemia en DM2: ajuste de basal/bolo y objetivos?",
      },
      {
        id: "p9",
        x: 226,
        y: 298,
        w: 7,
        h: 7,
        fill: "rgba(147,197,253,0.60)",
        question: "¿Sospecha de TEP: Wells, dímero D, y cuándo solicitar angio-TC?",
      },
    ],
    [],
  );

  const rays = useMemo<StarRay[]>(() => {
    const questions = [
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
    ];

    const major = [
      0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 132, 144, 156, 168, 180, 192, 204,
      216, 228, 240, 252, 264, 276, 288, 300, 312, 324, 336, 348,
    ];

    const minor = [4, 18, 36, 52, 68, 92, 116, 138, 162, 186, 214, 238, 262, 286, 314, 338];

    const majorRays: StarRay[] = major.map((deg, idx) => ({
      id: `ray-major-${deg}`,
      deg,
      len: 320,
      stroke: "rgba(255,255,255,0.08)",
      strokeWidth: 2,
      question: questions[idx % questions.length] ?? questions[0] ?? "",
    }));

    const minorRays: StarRay[] = minor.map((deg, idx) => ({
      id: `ray-minor-${deg}`,
      deg,
      len: 390,
      stroke: "rgba(255,255,255,0.05)",
      strokeWidth: 1,
      question: questions[(idx + majorRays.length) % questions.length] ?? questions[0] ?? "",
    }));

    return [...majorRays, ...minorRays];
  }, []);

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

  const activeQuestion = useMemo(() => {
    if (!activePointId) return "";
    const point = points.find((p) => p.id === activePointId);
    if (point) return point.question;

    const ray = rays.find((r) => r.id === activePointId);
    if (ray) return ray.question;

    return points[0]?.question ?? rays[0]?.question ?? "";
  }, [activePointId, points, rays]);

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

  const onClickBackground = () => {
    if (!dragRef.current.moved) {
      setOffset((prev) => ({ x: clamp(prev.x - 18, -70, 70), y: clamp(prev.y + 8, -40, 40) }));
    }
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
      onClick={onClickBackground}
    >
      {activeQuestion ? (
        <div className="pointer-events-none absolute left-1/2 top-12 w-[min(880px,92vw)] -translate-x-1/2 text-center md:top-16">
          <div className="text-[10px] font-semibold uppercase tracking-[0.34em] text-white/45">
            {activeQuestion}
          </div>
        </div>
      ) : null}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="dc_motion animate-[dc_star_drift_48s_ease-in-out_infinite]">
          <div className="dc_motion will-change-transform" style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}>
            <div className="dc_motion origin-center transform-gpu will-change-transform animate-[dc_spin_110s_linear_infinite]">
              <svg
                viewBox="0 0 1200 640"
                className="h-[620px] w-[1160px] select-none md:h-[760px] md:w-[1400px] lg:h-[820px] lg:w-[1520px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g opacity="0.72">
                  <g transform="translate(600 320)">
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

                          <line
                            x1={0}
                            y1={0}
                            x2={0}
                            y2={-ray.len}
                            transform={`rotate(${ray.deg})`}
                            stroke="transparent"
                            strokeWidth={14}
                            strokeLinecap="round"
                            pointerEvents="stroke"
                            role="button"
                            aria-label={ray.question}
                            tabIndex={0}
                            style={{ cursor: "pointer" }}
                            onPointerDown={(e) => {
                              e.stopPropagation();
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActivePointId(ray.id);
                            }}
                            onPointerEnter={() => {
                              setActivePointId(ray.id);
                            }}
                            onFocus={() => {
                              setActivePointId(ray.id);
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                setActivePointId(ray.id);
                              }
                            }}
                          />
                        </g>
                      );
                    })}
                  </g>

                  {points.map((p, idx) => {
                    const isActive = p.id === activePointId;
                    return (
                      <g key={p.id}>
                        <rect
                          x={p.x}
                          y={p.y}
                          width={p.w}
                          height={p.h}
                          fill={p.fill}
                          rx={1}
                          ry={1}
                          className={joinClassNames(
                            "dc_motion",
                            "outline-none",
                            "transition-[opacity,transform] duration-200",
                            isActive ? "opacity-100" : "opacity-70",
                            "animate-[dc_twinkle_4.2s_ease-in-out_infinite]",
                          )}
                          style={{ animationDelay: `${idx * 420}ms`, cursor: "pointer" }}
                          tabIndex={0}
                          role="button"
                          aria-label={p.question}
                          onPointerDown={(e) => {
                            e.stopPropagation();
                          }}
                          onPointerEnter={(e) => {
                            e.stopPropagation();
                            setActivePointId(p.id);
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
                          <rect
                            x={p.x - 3}
                            y={p.y - 3}
                            width={p.w + 6}
                            height={p.h + 6}
                            fill="transparent"
                            stroke="rgba(255,255,255,0.45)"
                            strokeWidth={1}
                          />
                        ) : null}
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
