import { company } from "@/src/config/company";

export function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  const allowed = new Set([
    new URL(request.url).origin,
    new URL(company.siteUrl).origin,
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ]);

  try {
    return allowed.has(new URL(origin).origin);
  } catch {
    return false;
  }
}

export function clientIdentifier(request: Request) {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}
