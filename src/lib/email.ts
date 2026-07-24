import nodemailer from "nodemailer";
import { company } from "@/src/config/company";
import type { ContactInput } from "./validation";
import { stripHeaderBreaks } from "./validation";

export function smtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASSWORD,
  );
}

export async function sendContactEmail(input: ContactInput) {
  if (!smtpConfigured()) {
    return { sent: false as const, reason: "not_configured" as const };
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transport.sendMail({
    from: process.env.SMTP_FROM || `VOLKOV <${company.email}>`,
    to: process.env.CONTACT_EMAIL || company.email,
    replyTo: stripHeaderBreaks(input.email),
    subject: `[VOLKOV contact] ${stripHeaderBreaks(input.subject)}`,
    text: [
      `Name: ${input.name}`,
      `Email: ${input.email}`,
      `Company: ${input.company || "Not provided"}`,
      "",
      input.message,
    ].join("\n"),
  });

  return { sent: true as const };
}
