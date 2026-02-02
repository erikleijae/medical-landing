"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const DOCTOR_IMAGES = [
  "/doctors/67b19236e3a3611ed6065a9b_01%20animation%20img.avif",
  "/doctors/67b19235807867cccd9a5006_03%20animation%20img.avif",
  "/doctors/67b19235d44d8582c04e31fd_05%20animation%20img.avif",
  "/doctors/67b192356ced5afd78c13178_09%20animation%20img.avif",
  "/doctors/67b19235c56540b2db753a22_10%20animation%20img.avif",
  "/doctors/67b19235a4b91a892ffe97a7_17%20animation%20img.avif",
  "/doctors/67b19235feae33bb5666a86a_21%20animation%20img.avif",
  "/doctors/67b19235a4b91a892ffe97a4_28%20animation%20img.avif",
] as const;

type StoredCounter = {
  value: number;
  updatedAt: number;
};

type ConsultationsCounterProps = {
  locale?: string;
  minValue?: number;
  title: string;
  subtitle: string;
};

type MetricSectionProps = {
  id?: string;
  nextId?: string;
  prevId?: string;
  title: string;
  fromValue: number;
  toValue: number;
  formatValue: (value: number) => string;
  subtitle: string;
};

type ConsultationsStore = {
  value: number;
  subscribers: Set<(value: number) => void>;
  started: boolean;
  isAnimating: boolean;
  raf: number | null;
  intervalId: number | null;
  lastPersistAt: number;
  subscriberCount: number;
  minValue: number;
  start: (minValue: number) => void;
  stop: () => void;
  emit: (value: number) => void;
  subscribe: (fn: (value: number) => void) => () => void;
};

type MosaicRevealStore = {
  step: number;
  subscribers: Set<(step: number) => void>;
  emit: (step: number) => void;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  subscribe: (fn: (step: number) => void) => () => void;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function clampNumber(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function writeStoredCounter(key: string, stored: StoredCounter) {
  try {
    localStorage.setItem(key, JSON.stringify(stored));
  } catch {
  }
}

function resolveNumberLocale(locale?: string) {
  if (!locale) return undefined;
  if (locale.includes("-")) return locale;
  if (locale === "es") {
    const browserLocale = typeof navigator !== "undefined" ? navigator.language : "";
    if (browserLocale.startsWith("es-") && browserLocale !== "es-MX") return browserLocale;
    return "es-MX";
  }
  if (locale === "en") return "en-US";
  if (locale === "pt") return "pt-BR";
  return locale;
}

function formatWithSpaceGrouping(formatter: Intl.NumberFormat, value: number) {
  try {
    const parts = formatter.formatToParts(value);
    return parts
      .map((part) => {
        if (part.type === "group") return " ";
        return part.value;
      })
      .join("");
  } catch {
    return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
}

let consultationsStore: ConsultationsStore | null = null;

let mosaicRevealStore: MosaicRevealStore | null = null;

function getMosaicRevealStore() {
  if (mosaicRevealStore) return mosaicRevealStore;

  const store: MosaicRevealStore = {
    step: 0,
    subscribers: new Set(),
    emit(step) {
      store.step = step;
      store.subscribers.forEach((fn) => fn(step));
    },
    increment() {
      store.emit(clampNumber(store.step + 1, 0, 4));
    },
    decrement() {
      store.emit(clampNumber(store.step - 1, 0, 4));
    },
    reset() {
      store.emit(0);
    },
    subscribe(fn) {
      store.subscribers.add(fn);
      fn(store.step);
      return () => {
        store.subscribers.delete(fn);
      };
    },
  };

  mosaicRevealStore = store;
  return store;
}

function getConsultationsStore(initialMinValue: number) {
  if (consultationsStore) return consultationsStore;

  const storageKey = "copiloto:landing:consultationsCounter";
  const intervalMs = 500;

  const store: ConsultationsStore = {
    value: Math.max(0, initialMinValue),
    subscribers: new Set(),
    started: false,
    isAnimating: false,
    raf: null,
    intervalId: null,
    lastPersistAt: 0,
    subscriberCount: 0,
    minValue: initialMinValue,
    emit(value) {
      store.value = value;
      store.subscribers.forEach((fn) => fn(value));
    },
    stop() {
      if (store.raf != null) {
        cancelAnimationFrame(store.raf);
        store.raf = null;
      }
      if (store.intervalId != null) {
        clearInterval(store.intervalId);
        store.intervalId = null;
      }
      store.started = false;
      const now = Date.now();
      writeStoredCounter(storageKey, { value: store.value, updatedAt: now });
      if (typeof window !== "undefined") {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      }
    },
    start(minValue) {
      store.minValue = Math.max(store.minValue, minValue);
      if (store.started) return;

      store.started = true;

      const baseline = Math.max(store.minValue, store.value);
      store.isAnimating = false;
      store.emit(baseline);
      store.raf = null;

      store.intervalId = window.setInterval(() => {
        if (store.isAnimating) return;

        const next = store.value + 1;
        store.emit(next);

        const now = Date.now();
        if (now - store.lastPersistAt > 3000) {
          store.lastPersistAt = now;
          writeStoredCounter(storageKey, { value: next, updatedAt: now });
        }
      }, intervalMs);

      window.addEventListener("beforeunload", handleBeforeUnload);
    },
    subscribe(fn) {
      store.subscribers.add(fn);
      store.subscriberCount += 1;
      fn(store.value);

      return () => {
        store.subscribers.delete(fn);
        store.subscriberCount = Math.max(0, store.subscriberCount - 1);
        if (store.subscriberCount === 0) store.stop();
      };
    },
  };

  function handleBeforeUnload() {
    const now = Date.now();
    writeStoredCounter(storageKey, { value: store.value, updatedAt: now });
  }

  consultationsStore = store;
  return store;
}

function useInViewOnce<T extends Element>(threshold = 0.35) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setInView(entries.some((entry) => entry.isIntersecting));
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function useConsultationsValue(minValue: number) {
  const store = useMemo(() => getConsultationsStore(minValue), [minValue]);
  const [value, setValue] = useState(() => store.value);

  useEffect(() => {
    store.start(minValue);
    return store.subscribe(setValue);
  }, [minValue, store]);

  return value;
}

function useMosaicRevealStep() {
  const store = useMemo(() => getMosaicRevealStore(), []);
  const [step, setStep] = useState(() => store.step);

  useEffect(() => store.subscribe(setStep), [store]);

  return { step, increment: store.increment, decrement: store.decrement, reset: store.reset };
}

function MetricMosaic({ revealStep, extraDoctors }: { revealStep: number; extraDoctors?: number }) {
  const circle = "relative overflow-hidden rounded-full ring-4 ring-white shadow-sm";

  const isHoursMode = extraDoctors !== undefined;

  const slots = isHoursMode
    ? ([
        {
          key: "h-0",
          src: DOCTOR_IMAGES[0],
          className: "col-start-4 col-span-2 row-start-1 -translate-y-2 sm:-translate-y-3",
          size: "h-16 w-16 sm:h-20 sm:w-20",
        },
        {
          key: "h-1",
          src: DOCTOR_IMAGES[1],
          className: "col-start-7 col-span-2 row-start-1 translate-y-1 sm:translate-y-2",
          size: "h-16 w-16 sm:h-20 sm:w-20",
        },
        {
          key: "h-2",
          src: DOCTOR_IMAGES[2],
          className: "col-start-10 col-span-2 row-start-1 -translate-y-1",
          size: "h-16 w-16 sm:h-20 sm:w-20",
        },
        {
          key: "h-3",
          src: DOCTOR_IMAGES[3],
          className: "col-start-5 col-span-2 row-start-2 translate-y-1",
          size: "h-16 w-16 sm:h-20 sm:w-20",
        },
        {
          key: "h-4",
          src: DOCTOR_IMAGES[4],
          className: "col-start-2 col-span-2 row-start-3 -translate-y-1",
          size: "h-[72px] w-[72px] sm:h-[84px] sm:w-[84px]",
        },
        {
          key: "h-5",
          src: DOCTOR_IMAGES[5],
          className: "col-start-7 col-span-2 row-start-3 translate-y-1",
          size: "h-[72px] w-[72px] sm:h-[84px] sm:w-[84px]",
        },
        {
          key: "h-6",
          src: DOCTOR_IMAGES[6],
          className: "col-start-10 col-span-2 row-start-3 -translate-y-1",
          size: "h-[72px] w-[72px] sm:h-[84px] sm:w-[84px]",
        },
        {
          key: "h-7",
          src: DOCTOR_IMAGES[7],
          className: "col-start-6 col-span-2 row-start-4 translate-y-1",
          size: "h-[72px] w-[72px] sm:h-[84px] sm:w-[84px]",
        },
      ] as const)
    : ([
        {
          key: "c-0",
          src: DOCTOR_IMAGES[0],
          className: "col-start-4 col-span-2 row-start-1 -translate-y-2 sm:-translate-y-3",
          size: "h-16 w-16 sm:h-20 sm:w-20",
        },
        {
          key: "c-1",
          src: DOCTOR_IMAGES[1],
          className: "col-start-7 col-span-2 row-start-1 translate-y-2 sm:translate-y-3",
          size: "h-16 w-16 sm:h-20 sm:w-20",
        },
        {
          key: "c-2",
          src: DOCTOR_IMAGES[2],
          className: "col-start-10 col-span-2 row-start-1 -translate-y-1 sm:-translate-y-2",
          size: "h-16 w-16 sm:h-20 sm:w-20",
        },
        {
          key: "c-3",
          src: DOCTOR_IMAGES[3],
          className: "col-start-5 col-span-2 row-start-2",
          size: "h-16 w-16 sm:h-20 sm:w-20",
        },
        {
          key: "c-4",
          src: DOCTOR_IMAGES[4],
          className: "col-start-8 col-span-2 row-start-2",
          size: "h-16 w-16 sm:h-20 sm:w-20",
        },
        {
          key: "c-5",
          src: DOCTOR_IMAGES[5],
          className: "col-start-3 col-span-2 row-start-3",
          size: "h-[72px] w-[72px] sm:h-[84px] sm:w-[84px]",
        },
        {
          key: "c-6",
          src: DOCTOR_IMAGES[6],
          className: "col-start-6 col-span-2 row-start-3",
          size: "h-[72px] w-[72px] sm:h-[84px] sm:w-[84px]",
        },
        {
          key: "c-7",
          src: DOCTOR_IMAGES[7],
          className: "col-start-9 col-span-2 row-start-4 -translate-y-1",
          size: "h-[72px] w-[72px] sm:h-[84px] sm:w-[84px]",
        },
      ] as const);

  const baseVisibleCount = isHoursMode ? 4 : Math.min(5, slots.length);
  const revealCount = isHoursMode
    ? clampNumber(baseVisibleCount + (extraDoctors ?? 0), baseVisibleCount, slots.length)
    : clampNumber(baseVisibleCount + revealStep * 2, baseVisibleCount, slots.length);

  const slotClass = (visible: boolean) =>
    "transition-all duration-500 ease-out " +
    (visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-[0.98]");

  return (
    <div
      className={
        "relative mx-auto h-[320px] w-full max-w-[600px] sm:h-[360px] md:h-[440px] md:max-w-[720px]"
      }
    >
      <div className="grid h-full w-full grid-cols-12 grid-rows-4 items-center justify-items-center gap-y-8">
        {slots.map((slot, idx) => {
          const visible = idx < revealCount;
          const sizes = slot.size.includes("h-16") ? "(min-width: 640px) 80px, 64px" : "(min-width: 640px) 84px, 72px";
          return (
            <div key={slot.key} className={slot.className}>
              <div className={circle + " " + slot.size + " " + slotClass(visible)}>
                <Image src={slot.src} alt="" fill className="object-cover" sizes={sizes} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MetricSection({
  id,
  nextId,
  prevId,
  title,
  fromValue,
  toValue,
  formatValue,
  subtitle,
}: MetricSectionProps) {
  const { ref, inView } = useInViewOnce<HTMLElement>(0.55);
  const lockRef = useRef(0);
  const touchStartYRef = useRef<number | null>(null);
  const { step: revealStep, increment, decrement, reset } = useMosaicRevealStep();
  const settledAtRef = useRef(0);
  const [numberPulse, setNumberPulse] = useState(false);
  const [exitStep, setExitStep] = useState(0);
  const isHoursSection = Boolean(prevId) && !nextId;

  useEffect(() => {
    if (!inView) return;
    settledAtRef.current = Date.now() + 500;
    if (isHoursSection) setExitStep(0);
  }, [inView, isHoursSection]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setNumberPulse(true);
    const t = window.setTimeout(() => setNumberPulse(false), 240);
    return () => window.clearTimeout(t);
  }, [revealStep]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!nextId && !prevId) return;

    const isActive = () => {
      const el = ref.current;
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;
      const center = (rect.top + rect.bottom) / 2;
      return Math.abs(center - viewportH / 2) < viewportH * 0.45;
    };

    const jumpTo = (targetId: string | undefined) => {
      if (!targetId) return;
      const now = Date.now();
      if (now - lockRef.current < 650) return;
      lockRef.current = now;
      const target = document.getElementById(targetId);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const onWheel = (e: WheelEvent) => {
      if (!isActive()) return;
      if (Math.abs(e.deltaY) < 2) return;

      const now = Date.now();
      if (now < settledAtRef.current) return;

      if (now - lockRef.current < 450) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0 && nextId) {
        if (revealStep < 4) {
          e.preventDefault();
          lockRef.current = now;
          increment();
          if (revealStep === 3) {
            window.setTimeout(() => jumpTo(nextId), 80);
          }
          return;
        }
        e.preventDefault();
        jumpTo(nextId);
      }

      if (e.deltaY > 0 && isHoursSection) {
        if (exitStep < 4) {
          e.preventDefault();
          lockRef.current = now;
          const next = clampNumber(exitStep + 1, 0, 4);
          setExitStep(next);
          if (next === 4) {
            window.setTimeout(() => {
              window.scrollBy({ top: Math.round(window.innerHeight * 0.85), behavior: "smooth" });
            }, 80);
          }
        }
        return;
      }

      if (e.deltaY < 0 && prevId) {
        if (!nextId) {
          e.preventDefault();
          lockRef.current = now;
          reset();
          window.setTimeout(() => jumpTo(prevId), 80);
          return;
        }
        if (revealStep > 0) {
          e.preventDefault();
          lockRef.current = now;
          decrement();
          return;
        }
        e.preventDefault();
        jumpTo(prevId);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [decrement, exitStep, increment, isHoursSection, nextId, prevId, ref, reset, revealStep]);

  const jumpTo = (targetId: string | undefined) => {
    if (!targetId) return;
    const now = Date.now();
    if (now - lockRef.current < 650) return;
    lockRef.current = now;
    const target = document.getElementById(targetId);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id={id}
      ref={ref}
      className={
        "relative scroll-mt-24 overflow-hidden transition-colors duration-700 " +
        (isHoursSection ? "bg-[#fbfff5]" : "bg-white")
      }
      onTouchMove={(e) => {
        if (!isHoursSection) return;
        if (!inView) return;
        if (exitStep >= 4) return;
        e.preventDefault();
      }}
      onTouchStart={(e) => {
        touchStartYRef.current = e.touches[0]?.clientY ?? null;
      }}
      onTouchEnd={(e) => {
        const startY = touchStartYRef.current;
        touchStartYRef.current = null;
        if (!inView) return;
        if (startY == null) return;
        const endY = e.changedTouches[0]?.clientY;
        if (typeof endY !== "number") return;
        const delta = startY - endY;
        if (Math.abs(delta) < 24) return;

        const now = Date.now();
        if (now < settledAtRef.current) return;
        if (now - lockRef.current < 450) return;

        if (delta > 0) {
          if (nextId && revealStep < 4) {
            lockRef.current = now;
            increment();
            if (revealStep === 3) {
              window.setTimeout(() => jumpTo(nextId), 80);
            }
            return;
          }
          if (isHoursSection) {
            const next = clampNumber(exitStep + 1, 0, 4);
            lockRef.current = now;
            setExitStep(next);
            if (next === 4) {
              window.setTimeout(() => {
                window.scrollBy({ top: Math.round(window.innerHeight * 0.85), behavior: "smooth" });
              }, 80);
            }
            return;
          }
          jumpTo(nextId);
        }
        else {
          if (prevId && !nextId) {
            lockRef.current = now;
            reset();
            window.setTimeout(() => jumpTo(prevId), 80);
            return;
          }
          if (prevId && revealStep > 0) {
            lockRef.current = now;
            decrement();
            return;
          }
          jumpTo(prevId);
        }
      }}
    >
      <div
        aria-hidden
        className={
          "pointer-events-none absolute inset-0 transition-opacity duration-700 " +
          (inView ? "opacity-100" : "opacity-0")
        }
      >
        <div
          className={
            "absolute inset-0 " +
            (isHoursSection
              ? "bg-gradient-to-b from-[#fbfff5] via-white to-white"
              : "bg-gradient-to-b from-white via-white to-[#fbfff5]")
          }
        />
        <div className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d5ff7c]/8 blur-3xl" />
      </div>

      <div
        className={
          "mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20 transition-[opacity,transform,filter] duration-700 ease-out md:px-8 lg:px-0 " +
          (inView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[2px]")
        }
      >
        <div className="grid w-full items-center gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <div className="relative flex flex-col items-center text-center">
            <p className="text-[14px] font-extrabold uppercase tracking-[0.32em] text-slate-900">
              {title}
            </p>

            <div className="relative mt-8">
              <div
                aria-hidden
                className={
                  "pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 sm:h-[620px] sm:w-[620px] " +
                  (inView ? "opacity-90" : "opacity-0")
                }
              >
                <div className="absolute inset-0 rounded-full bg-[#d5ff7c]/10" />
                <div className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d5ff7c]/14" />
                <div className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d5ff7c]/20" />
                <div className="absolute left-1/2 top-1/2 h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d5ff7c]/28" />
                <div className="absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d5ff7c]/36" />
              </div>

              <span
                className={
                  "relative z-10 block whitespace-nowrap font-display font-normal leading-none tracking-[-0.05em] text-slate-900 transition-[filter,opacity,transform] duration-300 sm:tracking-[-0.06em] " +
                  (numberPulse ? "opacity-90 blur-[1px]" : "opacity-100 blur-0")
                }
                style={{ fontVariantNumeric: "tabular-nums", fontSize: "clamp(72px, 16vw, 160px)" }}
              >
                {(() => {
                  const progress = easeOutCubic(clampNumber(revealStep / 4, 0, 1));
                  const computed = Math.round(fromValue + (toValue - fromValue) * progress);
                  return formatValue(computed);
                })()}
              </span>
            </div>

            <p className="mx-auto mt-8 max-w-md text-[16px] leading-relaxed text-slate-600">
              {subtitle}
            </p>
          </div>

          <div className="justify-self-center md:justify-self-end">
            <MetricMosaic revealStep={revealStep} extraDoctors={isHoursSection ? exitStep : undefined} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ConsultationsCounter({
  locale,
  minValue = 181_567,
  title,
  subtitle,
}: ConsultationsCounterProps) {
  const resolvedLocale = useMemo(() => resolveNumberLocale(locale), [locale]);

  const numberFormatter = useMemo(() => {
    try {
      return new Intl.NumberFormat(resolvedLocale);
    } catch {
      return new Intl.NumberFormat();
    }
  }, [resolvedLocale]);

  const consultations = useConsultationsValue(minValue);
  const formatValue = (value: number) => formatWithSpaceGrouping(numberFormatter, value);

  return (
    <MetricSection
      id="metric-consultations"
      nextId="metric-hours"
      title={title}
      fromValue={consultations}
      toValue={consultations}
      formatValue={formatValue}
      subtitle={subtitle}
    />
  );
}

export function HoursSavedCounter({
  locale,
  minValue = 181_567,
  title,
  subtitle,
}: ConsultationsCounterProps) {
  const resolvedLocale = useMemo(() => resolveNumberLocale(locale), [locale]);

  const numberFormatter = useMemo(() => {
    try {
      return new Intl.NumberFormat(resolvedLocale);
    } catch {
      return new Intl.NumberFormat();
    }
  }, [resolvedLocale]);

  const consultations = useConsultationsValue(minValue);
  const hoursSaved = Math.floor((consultations * 12) / 60);

  const formatValue = (value: number) => formatWithSpaceGrouping(numberFormatter, value);

  return (
    <MetricSection
      id="metric-hours"
      prevId="metric-consultations"
      title={title}
      fromValue={hoursSaved}
      toValue={hoursSaved}
      formatValue={formatValue}
      subtitle={subtitle}
    />
  );
}
