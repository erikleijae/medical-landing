import { createAuthClient } from "better-auth/react";
import { emailOTPClient } from "better-auth/client/plugins";
import { passkeyClient } from "@better-auth/passkey/client";

function normalizeAuthBaseURL(value: string) {
  const normalized = value.replace(/\/+$/, "");
  return normalized.endsWith("/api/auth") ? normalized : `${normalized}/api/auth`;
}

function resolveAuthBaseURL() {
  const explicit = process.env.NEXT_PUBLIC_AUTH_URL?.trim();
  if (explicit) return normalizeAuthBaseURL(explicit);

  const api = process.env.NEXT_PUBLIC_API_URL?.trim();
  if (api) {
    const normalized = api.replace(/\/+$/, "");
    if (normalized.endsWith("/api")) {
      return `${normalized}/auth`;
    }
    return `${normalized}/api/auth`;
  }

  if (typeof window !== "undefined") {
    return `${window.location.origin}/api/auth`;
  }

  return null;
}

function resolveAppBaseUrl() {
  const explicit = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");
  const fallback = process.env.NEXT_PUBLIC_DASHBOARD_URL?.trim();
  if (fallback) return fallback.replace(/\/+$/, "");
  return "";
}

const baseURL = resolveAuthBaseURL();

export const authClient = baseURL
  ? createAuthClient({
      baseURL,
      plugins: [emailOTPClient(), passkeyClient()],
    })
  : createAuthClient({
      plugins: [emailOTPClient(), passkeyClient()],
    });

export function resolvePostLoginRedirectUrl() {
  return resolveAppBaseUrl() || "/";
}

export function resolvePostSignupRedirectUrl() {
  const base = resolveAppBaseUrl();
  if (!base) return "/";
  return `${base}/onboarding`;
}
