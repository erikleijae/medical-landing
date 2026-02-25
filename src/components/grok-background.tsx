"use client";

type Props = {
  variant?: "default" | "hero";
};

export function GrokBackground({ variant = "default" }: Props) {
  const isHero = variant === "hero";
  return (
    <div
      className="fixed inset-0 z-0 isolate overflow-hidden pointer-events-none select-none bg-black transform-gpu"
      style={{ contain: "paint" }}
    >
      {/* 
        Grok-like Nebular Effect 
        1. Base ambient glow (blue/indigo)
        2. Strong white/blue highlights (nebula clouds)
        3. Subtle movement
      */}

      {isHero ? (
        <div
          className="dc_motion absolute inset-0 opacity-40"
          style={{
            animation: "dc_star_drift 52s ease-in-out infinite",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 62%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 62%, rgba(0,0,0,0) 100%)",
          }}
        >
          <div
            className="dc_motion absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,0.65) 0, transparent 2px), radial-gradient(1px 1px at 28% 34%, rgba(255,255,255,0.35) 0, transparent 2px), radial-gradient(1px 1px at 44% 22%, rgba(255,255,255,0.55) 0, transparent 2px), radial-gradient(1px 1px at 61% 30%, rgba(255,255,255,0.42) 0, transparent 2px), radial-gradient(1px 1px at 76% 16%, rgba(255,255,255,0.62) 0, transparent 2px), radial-gradient(1px 1px at 83% 36%, rgba(255,255,255,0.30) 0, transparent 2px), radial-gradient(1px 1px at 18% 46%, rgba(255,255,255,0.28) 0, transparent 2px), radial-gradient(1px 1px at 36% 52%, rgba(255,255,255,0.34) 0, transparent 2px), radial-gradient(1px 1px at 52% 44%, rgba(255,255,255,0.26) 0, transparent 2px), radial-gradient(1px 1px at 68% 52%, rgba(255,255,255,0.30) 0, transparent 2px), radial-gradient(1px 1px at 91% 50%, rgba(255,255,255,0.24) 0, transparent 2px)",
              animation: "dc_twinkle_soft 14s ease-in-out infinite",
              animationDelay: "-6s",
            }}
          />
          <div
            className="dc_motion absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(0.8px 0.8px at 8% 28%, rgba(255,255,255,0.28) 0, transparent 2px), radial-gradient(0.8px 0.8px at 22% 14%, rgba(255,255,255,0.22) 0, transparent 2px), radial-gradient(0.8px 0.8px at 33% 40%, rgba(255,255,255,0.18) 0, transparent 2px), radial-gradient(0.8px 0.8px at 49% 12%, rgba(255,255,255,0.20) 0, transparent 2px), radial-gradient(0.8px 0.8px at 57% 38%, rgba(255,255,255,0.16) 0, transparent 2px), radial-gradient(0.8px 0.8px at 71% 26%, rgba(255,255,255,0.18) 0, transparent 2px), radial-gradient(0.8px 0.8px at 88% 24%, rgba(255,255,255,0.22) 0, transparent 2px)",
              animation: "dc_twinkle_soft 18s ease-in-out infinite",
              animationDelay: "-11s",
            }}
          />
        </div>
      ) : null}

      {/* Main Right-Side Nebular Glow (The "Source") */}
      <div
        className="dc_motion absolute top-[-14%] right-[-12%] w-[92vw] h-[100vh] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/35 via-indigo-900/16 to-transparent blur-[170px] mix-blend-screen"
        style={{ animation: "dc_light_drift 22s ease-in-out infinite" }}
      />

      {isHero ? (
        <div
          className="dc_motion absolute top-[-22%] right-[-28%] h-[140vh] w-[90vw] blur-[90px] mix-blend-screen"
          style={{
            background:
              "radial-gradient(closest-side at 70% 50%, rgba(255,255,255,0.72), rgba(147,197,253,0.26), rgba(59,130,246,0.08), transparent 72%)",
            animation: "dc_hero_beam 14s ease-in-out infinite",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
          }}
        />
      ) : null}

      {/* Brighter Core for the Right Glow */}
      <div
        className="dc_motion absolute top-[2%] right-[2%] w-[56vw] h-[56vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/18 via-blue-400/16 to-transparent blur-[120px] mix-blend-screen"
        style={{ animation: "dc_light_drift 16s ease-in-out infinite" }}
      />

      <div
        className="dc_motion absolute top-[14%] right-[10%] w-[52vw] h-[52vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-sky-400/12 to-transparent blur-[160px] mix-blend-screen"
        style={{ animation: "dc_drift_a 22s ease-in-out infinite" }}
      />

      {/* Center/Left Ambient Flow */}
      <div
        className="dc_motion absolute top-[14%] left-[-18%] w-[82vw] h-[82vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/14 via-blue-900/10 to-transparent blur-[170px] mix-blend-screen"
        style={{ animation: "dc_drift_b 28s ease-in-out infinite" }}
      />

      <div
        className="dc_motion absolute -bottom-[28%] left-[-18%] w-[76vw] h-[76vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent blur-[170px] mix-blend-screen"
        style={{ animation: "dc_drift_c 36s ease-in-out infinite" }}
      />

      {/* Bottom Center Depth */}
      <div className="absolute bottom-[-22%] left-[10%] w-[90vw] h-[55vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/14 via-black to-transparent blur-[140px]" />

      <div
        className="dc_motion absolute inset-0 opacity-40 blur-[65px] mix-blend-screen"
        style={{
          backgroundImage:
            "radial-gradient(55% 70% at 78% 48%, rgba(255,255,255,0.12), rgba(59,130,246,0.12), transparent 62%), radial-gradient(60% 80% at 62% 56%, rgba(99,102,241,0.08), transparent 60%), radial-gradient(65% 85% at 34% 60%, rgba(56,189,248,0.08), transparent 64%)",
          backgroundSize: "180% 180%",
          backgroundPosition: "120% 50%",
          animation: "dc_fog_flow 34s ease-in-out infinite",
        }}
      />

      {/* Dynamic "Smoke" / "Cloud" Textures */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
        {/* Noise texture via SVG data URI */}
        <div
          className="dc_motion absolute inset-0 opacity-35"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "260px 260px",
            backgroundPosition: "120% 50%",
            animation: "dc_fog_flow 26s ease-in-out infinite",
          }}
        />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-gradient-to-tr from-transparent via-blue-400/10 to-transparent blur-[60px] animate-spin-slow"
          style={{ animationDuration: '30s' }}
        />
      </div>

      {/* Overall tint adjustment to match the "cool" tone */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_50%_50%,rgba(0,0,0,0.0),rgba(0,0,0,0.55)_58%,rgba(0,0,0,0.9)_92%)]" />
    </div>
  );
}
