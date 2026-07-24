import type { Metadata } from "next";
import { company } from "@/src/config/company";
import { site } from "@/src/config/site";

export function createMetadata(
  title: string,
  description: string,
  path = "/",
): Metadata {
  const url = new URL(path, company.siteUrl).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      title,
      description,
      url,
      images: [
        {
          url: new URL("/og.jpg", company.siteUrl).toString(),
          width: 1200,
          height: 630,
          alt: "VOLKOV — Health, Clearly.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og.jpg", company.siteUrl).toString()],
    },
  };
}
