import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function detectLocale(request: NextRequest): "es" | "en" | "pt" {
  const header = request.headers.get("accept-language") || "";
  const primary = header.split(",")[0]?.trim().toLowerCase() ?? "";

  if (primary.startsWith("es")) return "es";
  if (primary.startsWith("pt")) return "pt";
  if (primary.startsWith("en")) return "en";

  // Idiomas no soportados: caer a inglés
  return "en";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const locale = detectLocale(request);

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/opengraph-image") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/es") || pathname.startsWith("/en") || pathname.startsWith("/pt")) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    // Español usa la home por defecto en "/"
    if (locale === "es") {
      return NextResponse.next();
    }

    const url = request.nextUrl.clone();

    if (locale === "pt") {
      url.pathname = "/pt";
    } else {
      url.pathname = "/en";
    }

    return NextResponse.redirect(url);
  }

  const url = request.nextUrl.clone();
  if (locale === "es") {
    url.pathname = `/es${pathname}`;
  } else if (locale === "pt") {
    url.pathname = `/pt${pathname}`;
  } else {
    url.pathname = `/en${pathname}`;
  }

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/:path*"],
};
