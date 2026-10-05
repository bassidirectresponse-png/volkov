import type { MetadataRoute } from "next";
import { company } from "@/src/config/company";
const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-of-use",
  "/cookie-policy",
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
  ];
}
