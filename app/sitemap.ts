import type { MetadataRoute } from "next";
import { company } from "@/src/config/company";
import { insights } from "@/src/content/insights";

const staticRoutes = [
  "",
  "/about",
  "/wellness",
  "/standards",
  "/insights",
  "/products",
  "/contact",
  "/privacy-policy",
  "/terms-of-use",
  "/cookie-policy",
  "/affiliate-disclosure",
  "/health-disclaimer",
  "/editorial-policy",
  "/corrections-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((path) => ({
      url: `${company.siteUrl}${path}`,
      lastModified: new Date("2026-07-24"),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/insights" ? 0.9 : 0.7,
    })),
    ...insights.map((insight) => ({
      url: `${company.siteUrl}/insights/${insight.slug}`,
      lastModified: new Date(insight.updated),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
