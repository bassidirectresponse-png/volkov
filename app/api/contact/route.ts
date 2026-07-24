import { NextResponse } from "next/server";
import { contactSchema } from "@/src/lib/validation";
import { sendContactEmail } from "@/src/lib/email";
import { checkRateLimit } from "@/src/lib/rate-limit";
import { clientIdentifier, isAllowedOrigin } from "@/src/lib/security";

const maxPayloadBytes = 12_000;

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ message: "Origin not allowed." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > maxPayloadBytes) {
    return NextResponse.json({ message: "Request is too large." }, { status: 413 });
  }

  const limit = checkRateLimit(`contact:${clientIdentifier(request)}`);
  if (!limit.allowed) {
    return NextResponse.json(
      { message: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "retry-after": String(
            Math.max(1, Math.ceil((limit.resetAt - Date.now()) / 1000)),
          ),
        },
      },
    );
  }

  try {
    const text = await request.text();
    if (new TextEncoder().encode(text).length > maxPayloadBytes) {
      return NextResponse.json(
        { message: "Request is too large." },
        { status: 413 },
      );
    }
    const parsed = contactSchema.safeParse(JSON.parse(text));
    if (!parsed.success) {
      return NextResponse.json(
        { message: "Please review the submitted fields." },
        { status: 400 },
      );
    }

    const result = await sendContactEmail(parsed.data);
    if (!result.sent) {
      return NextResponse.json(
        {
          message:
            "Online delivery is not configured yet. Please contact us directly by email.",
          fallback: "mailto",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({
      message: "Your message has been sent to the VOLKOV team.",
    });
  } catch {
    return NextResponse.json(
      {
        message:
          "We could not send your message. Please contact us directly by email.",
        fallback: "mailto",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed." }, { status: 405 });
}
