type Entry = { count: number; resetAt: number };

const store = new Map<string, Entry>();

export function checkRateLimit(
  key: string,
  max = Number(process.env.CONTACT_RATE_LIMIT_MAX || 5),
  windowSeconds = Number(
    process.env.CONTACT_RATE_LIMIT_WINDOW_SECONDS || 900,
  ),
) {
  const now = Date.now();
  const existing = store.get(key);

  if (!existing || existing.resetAt <= now) {
    const resetAt = now + windowSeconds * 1000;
    store.set(key, { count: 1, resetAt });
    return { allowed: true, remaining: max - 1, resetAt };
  }

  if (existing.count >= max) {
    return { allowed: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  return {
    allowed: true,
    remaining: Math.max(0, max - existing.count),
    resetAt: existing.resetAt,
  };
}

export function resetRateLimitForTests() {
  store.clear();
}
