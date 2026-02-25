"use client";

import { useEffect } from "react";

type Props = {
  rootSelector?: string;
};

export function DeepClinicPerfController({ rootSelector = "main.dc_perf" }: Props) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData ?? false;

    const root = document.querySelector(rootSelector) as HTMLElement | null;
    if (!root) return;

    const shouldPreload = !prefersReducedMotion && !saveData;
    let preloadCancel: (() => void) | null = null;
    if (shouldPreload) {
      const startPreload = () => {
        const videos = Array.from(root.querySelectorAll("video")) as HTMLVideoElement[];
        const urls = new Map<string, string | null>();

        for (const video of videos) {
          video.preload = "auto";
          const direct = video.getAttribute("src");
          if (direct) urls.set(direct, null);

          const sources = Array.from(video.querySelectorAll("source")) as HTMLSourceElement[];
          for (const source of sources) {
            const src = source.getAttribute("src");
            if (!src) continue;
            urls.set(src, source.getAttribute("type"));
          }

          try {
            video.load();
          } catch {
            // ignore
          }
        }

        const head = document.head;
        for (const [href, type] of urls.entries()) {
          if (!href) continue;
          const safeHref = typeof CSS !== "undefined" && typeof CSS.escape === "function" ? CSS.escape(href) : href;
          if (head.querySelector(`link[rel="preload"][as="video"][href="${safeHref}"]`)) continue;
          const link = document.createElement("link");
          link.rel = "preload";
          link.as = "video";
          link.href = href;
          if (type) link.type = type;
          head.appendChild(link);
        }
      };

      if ("requestIdleCallback" in window) {
        const id = (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout?: number }) => number }).requestIdleCallback(
          startPreload,
          { timeout: 600 },
        );
        preloadCancel = () => (window as Window & { cancelIdleCallback: (id: number) => void }).cancelIdleCallback?.(id);
      } else {
        const id = setTimeout(startPreload, 250);
        preloadCancel = () => clearTimeout(id);
      }
    }

    let sections: HTMLElement[] = [];
    try {
      sections = Array.from(root.querySelectorAll(":scope > section")) as HTMLElement[];
    } catch {
      sections = Array.from(root.children)
        .filter((el): el is HTMLElement => el instanceof HTMLElement && el.tagName === "SECTION")
        .map((el) => el);
    }
    if (!sections.length) return;

    root.setAttribute("data-dc-ready", "true");

    const setActive = (el: HTMLElement, active: boolean) => {
      if (active) el.setAttribute("data-dc-active", "true");
      else el.removeAttribute("data-dc-active");
    };

    const setNear = (activeIndex: number | null) => {
      const range = 2;
      for (let i = 0; i < sections.length; i += 1) {
        const el = sections[i];
        const near = activeIndex != null && Math.abs(i - activeIndex) <= range;
        if (near) el.setAttribute("data-dc-near", "true");
        else el.removeAttribute("data-dc-near");
      }
    };

    const setHidden = (hidden: boolean) => {
      if (hidden) root.setAttribute("data-dc-hidden", "true");
      else root.removeAttribute("data-dc-hidden");
    };

    const syncVideos = () => {
      const hidden = document.hidden;
      for (const section of sections) {
        const isActive = section.getAttribute("data-dc-active") === "true";
        const videos = Array.from(section.querySelectorAll("video")) as HTMLVideoElement[];
        for (const video of videos) {
          if (hidden) {
            if (!video.paused) video.pause();
            continue;
          }

          if (isActive) {
            if (video.autoplay && video.paused) {
              void video.play().catch(() => { });
            }
          } else {
            if (!video.paused) video.pause();
          }
        }
      }
    };

    for (const section of sections) setActive(section, false);
    const initial = sections.reduce<HTMLElement | null>((best, el) => {
      const bestDist = best ? Math.abs(best.offsetTop - root.scrollTop) : Number.POSITIVE_INFINITY;
      const dist = Math.abs(el.offsetTop - root.scrollTop);
      return dist < bestDist ? el : best;
    }, null);
    if (initial) setActive(initial, true);

    let currentActiveIndex = initial ? sections.indexOf(initial) : -1;
    setNear(currentActiveIndex >= 0 ? currentActiveIndex : null);

    let nearIndex: number | null = currentActiveIndex >= 0 ? currentActiveIndex : null;
    let scrollRaf = 0;
    const syncNearFromScroll = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        const nextNear = sections.reduce<number>((bestIdx, el, idx) => {
          const bestDist = Math.abs(sections[bestIdx]!.offsetTop - root.scrollTop);
          const dist = Math.abs(el.offsetTop - root.scrollTop);
          return dist < bestDist ? idx : bestIdx;
        }, 0);

        if (nearIndex !== nextNear) {
          nearIndex = nextNear;
          setNear(nextNear);
        }
      });
    };

    root.addEventListener("scroll", syncNearFromScroll, { passive: true });
    syncNearFromScroll();

    let currentActive: HTMLElement | null = initial;
    const ratios = new Map<HTMLElement, number>();
    if (initial) ratios.set(initial, 1);

    const setExclusiveActive = (next: HTMLElement | null) => {
      if (next === currentActive) return;
      if (currentActive) setActive(currentActive, false);
      if (next) setActive(next, true);
      currentActive = next;

      const nextIndex = next ? sections.indexOf(next) : -1;
      currentActiveIndex = nextIndex;
      setNear(nextIndex >= 0 ? nextIndex : null);

      syncVideos();
    };

    setHidden(document.hidden);
    const onVisibilityChange = () => {
      setHidden(document.hidden);
      syncVideos();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (!entry.isIntersecting) ratios.delete(el);
          else ratios.set(el, entry.intersectionRatio ?? 0);
        }

        let best: { el: HTMLElement; ratio: number } | null = null;
        for (const [el, ratio] of ratios.entries()) {
          if (!best || ratio > best.ratio) best = { el, ratio };
        }

        if (best) setExclusiveActive(best.el);
        else if (currentActive) {
          const stillInDom = root.contains(currentActive);
          if (!stillInDom) setExclusiveActive(null);
        }
      },
      {
        root,
        rootMargin: "-15% 0px -15% 0px",
        threshold: 0.18,
      },
    );

    for (const section of sections) observer.observe(section);
    syncVideos();

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      observer.disconnect();
      root.removeEventListener("scroll", syncNearFromScroll);
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      if (preloadCancel) preloadCancel();
      root.removeAttribute("data-dc-ready");
    };
  }, [rootSelector]);

  return null;
}
