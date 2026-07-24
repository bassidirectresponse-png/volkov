import { z } from "zod";

const safeText = z
  .string()
  .trim()
  .min(1)
  .refine((value) => !/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(value), {
    message: "Unsupported characters detected.",
  });

export const contactSchema = z.object({
  name: safeText.min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Enter a valid email address.").max(254),
  company: z.string().trim().max(120).optional().default(""),
  subject: safeText.min(3, "Add a short subject.").max(160),
  message: safeText
    .min(20, "Please include at least 20 characters.")
    .max(5000, "Please keep the message under 5,000 characters."),
  consent: z.literal(true, {
    error: "Consent is required so we can respond.",
  }),
  website: z.string().max(0, "Automated submission rejected.").optional(),
});

export const newsletterSchema = z.object({
  email: z.string().trim().email("Enter a valid email address.").max(254),
  consent: z.literal(true, {
    error: "Please consent before subscribing.",
  }),
  website: z.string().max(0, "Automated submission rejected.").optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;

export function stripHeaderBreaks(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}
