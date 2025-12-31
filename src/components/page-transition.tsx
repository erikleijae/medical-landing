"use client";

import React from "react";
import { usePathname } from "next/navigation";

type PageTransitionProps = {
  children: React.ReactNode;
};

/**
 * Wraps pages with a subtle fade-up animation on initial load and route change.
 */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-fade-up">
      {children}
    </div>
  );
}
