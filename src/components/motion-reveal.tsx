"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  once?: boolean;
  offsetY?: number;
};

function joinClassNames(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}

export function MotionReveal({
  children,
  className,
  delayMs = 0,
  durationMs = 700,
  once = true,
  offsetY = 18,
}: MotionRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  const transitionStyle = useMemo<CSSProperties>(
    () => ({
      transitionDuration: `${durationMs}ms`,
      transitionDelay: `${delayMs}ms`,
    }),
    [delayMs, durationMs],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (reduced) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "-10% 0px -10% 0px",
        threshold: 0.12,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      style={{
        ...transitionStyle,
        transform: visible ? "translate3d(0,0,0)" : `translate3d(0, ${offsetY}px, 0)`,
      }}
      className={joinClassNames(
        "will-change-[opacity,transform,filter] transition-[opacity,transform,filter]",
        visible ? "opacity-100 blur-0" : "opacity-0 blur-[2px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
