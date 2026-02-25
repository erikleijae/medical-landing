"use client";

import type { CSSProperties, ReactNode } from "react";

type Props = {
  accent: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  variant?: "ui" | "video" | "visual";
  tilt?: boolean;
  spotlight?: boolean;
  scanlines?: boolean;
  shimmer?: boolean;
  cursor?: boolean;
};

function joinClassNames(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}

export function DeepClinicFxFrame({
  accent,
  children,
  className,
  style,
  variant = "ui",
  tilt = true,
  spotlight = true,
  scanlines = true,
  shimmer = true,
  cursor = true,
}: Props) {
  const spotlightOpacity = variant === "video" ? 0.55 : variant === "visual" ? 0.7 : 0.75;
  const scanlinesOpacity = variant === "video" ? 0.10 : variant === "visual" ? 0.12 : 0.14;
  const shimmerOpacity = variant === "video" ? 0.65 : 0.8;

  return (
    <div
      className={joinClassNames(
        "relative isolate overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-2xl transform-gpu",
        className,
      )}
      style={{ contain: "paint", ...style }}
    >
      <div className="pointer-events-none absolute inset-0">
        {spotlight ? (
          <div
            className="dc_motion absolute -inset-[22%] mix-blend-screen blur-[14px]"
            style={{
              opacity: spotlightOpacity,
              background: `radial-gradient(40% 55% at 30% 30%, rgba(255,255,255,0.10), ${accent}, transparent 70%)`,
              animation: "dc_spotlight_sweep 12.5s ease-in-out infinite",
              willChange: "transform",
            }}
          />
        ) : null}

        {spotlight ? (
          <div
            className="dc_motion absolute -inset-[26%] mix-blend-screen blur-[22px]"
            style={{
              opacity: variant === "video" ? 0.28 : 0.34,
              background: `radial-gradient(35% 45% at 70% 60%, rgba(255,255,255,0.06), ${accent}, transparent 72%)`,
              animation: "dc_spotlight_sweep 16.8s ease-in-out infinite",
              animationDelay: "-5.2s",
              willChange: "transform",
            }}
          />
        ) : null}

        {scanlines ? (
          <div
            className="dc_motion absolute inset-0 mix-blend-overlay"
            style={{
              opacity: scanlinesOpacity,
              backgroundImage:
                "repeating-linear-gradient(180deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 5px)",
              animation: "dc_scanlines 9s linear infinite",
            }}
          />
        ) : null}

        {shimmer ? (
          <div
            className="dc_motion absolute inset-0"
            style={{
              opacity: shimmerOpacity,
              backgroundImage: "linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.10) 45%, transparent 60%)",
              backgroundSize: "200% 100%",
              animation: "dc_shimmer 11.2s ease-in-out infinite",
            }}
          />
        ) : null}

        {cursor ? (
          <div
            className="dc_motion absolute inset-0 mix-blend-screen"
            style={{
              opacity: variant === "video" ? 0.32 : 0.38,
              background: `radial-gradient(110px 110px at 20% 20%, rgba(255,255,255,0.18), ${accent}, transparent 72%)`,
              animation: "dc_ui_cursor 7.8s ease-in-out infinite",
              willChange: "transform, opacity",
            }}
          />
        ) : null}

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/55" />
      </div>

      <div
        className={joinClassNames(tilt ? "dc_motion relative" : "relative")}
        style={
          tilt
            ? {
              transformStyle: "preserve-3d",
              animation: "dc_ui_tilt 12s ease-in-out infinite",
              willChange: "transform",
            }
            : undefined
        }
      >
        {children}
      </div>
    </div>
  );
}
