import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VOLKOV — Independent Wellness Research",
    short_name: "VOLKOV",
    description:
      "Independent wellness research and transparent consumer information.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#171e19",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
