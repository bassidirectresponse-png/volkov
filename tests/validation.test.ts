import assert from "node:assert/strict";
import test from "node:test";
import { contactSchema, newsletterSchema } from "@/src/lib/validation";
import {
  checkRateLimit,
  resetRateLimitForTests,
} from "@/src/lib/rate-limit";

test("contact validation accepts a complete inquiry", () => {
  const result = contactSchema.safeParse({
    name: "Alex Morgan",
    email: "alex@example.com",
    company: "",
    subject: "Editorial correction",
    message: "I would like to share a source related to an article.",
    consent: true,
    website: "",
  });
  assert.equal(result.success, true);
});

test("contact validation rejects health-data-like short and malformed requests", () => {
  const result = contactSchema.safeParse({
    name: "A",
    email: "not-an-email",
    subject: "Hi",
    message: "short",
    consent: false,
    website: "bot.example",
  });
  assert.equal(result.success, false);
});

test("newsletter requires explicit consent", () => {
  assert.equal(
    newsletterSchema.safeParse({
      email: "reader@example.com",
      consent: false,
      website: "",
    }).success,
    false,
  );
});

test("rate limiter blocks requests beyond the configured threshold", () => {
  resetRateLimitForTests();
  assert.equal(checkRateLimit("test", 2, 60).allowed, true);
  assert.equal(checkRateLimit("test", 2, 60).allowed, true);
  assert.equal(checkRateLimit("test", 2, 60).allowed, false);
});
