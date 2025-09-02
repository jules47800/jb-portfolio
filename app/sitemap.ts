import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.SITE_URL || "https://example.com";
  const routes = [
    "",
    "/fr",
    "/en",
    "/fr/services",
    "/en/services",
    "/fr/legal",
    "/en/legal",
    "/fr/privacy",
    "/en/privacy",
    "/fr/projects",
    "/fr/blog",
    "/fr/contact",
    "/fr/about",
    "/en/projects",
    "/en/blog",
    "/en/contact",
    "/en/about",
    "/fr/services/wordpress",
    "/fr/services/restaurant-reservation",
    "/en/services/wordpress",
    "/en/services/restaurant-reservation"
  ];
  return routes.map((r) => ({url: `${base}${r}`, changeFrequency: "weekly", priority: r === "" ? 1 : 0.7}));
}


