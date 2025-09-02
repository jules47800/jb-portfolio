import {MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots {
  const url = process.env.SITE_URL || "https://example.com";
  return {
    rules: [{userAgent: "*", allow: "/"}],
    sitemap: `${url}/sitemap.xml`,
  };
}


