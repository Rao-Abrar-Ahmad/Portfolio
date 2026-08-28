import type { MetadataRoute } from "next";
import { Site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: Site.name,
    short_name: Site.firstName || Site.name,
    description: Site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fdfbf7",
    theme_color: "#e5e0d8",
    orientation: "portrait-primary",
    scope: "/",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
