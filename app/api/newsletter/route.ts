import { NextResponse } from "next/server";
import { newsletterSchema } from "@/src/lib/validation";
import { checkRateLimit } from "@/src/lib/rate-limit";
import { clientIdentifier, isAllowedOrigin } from "@/src/lib/security";

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ message: "Origin not allowed." }, { status: 403 });
  }
  if (process.env.NEWSLETTER_ENABLED !== "true") {
    return NextResponse.json(
      { message: "The newsletter is not accepting subscriptions yet." },
      { status: 503 },
    );
  }
  const limit = checkRateLimit(
    `newsletter:${clientIdentifier(request)}`,
    3,
    3600,
  );
  if (!limit.allowed) {
    return NextResponse.json(
      { message: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }
  try {
    const parsed = newsletterSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json(
        { message: parsed.error.issues[0]?.message || "Invalid request." },
        { status: 400 },
      );
    }
    return NextResponse.json(
      {
        message:
          "Subscription delivery is enabled, but no newsletter provider is configured. No subscription was created.",
      },
      { status: 503 },
    );
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed." }, { status: 405 });
}
