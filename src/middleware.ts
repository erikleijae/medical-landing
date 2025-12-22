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

  // Solo aplicamos redirección en la raíz
  if (pathname !== "/") {
    return NextResponse.next();
  }

  const locale = detectLocale(request);

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

export const config = {
  matcher: ["/"],
};
