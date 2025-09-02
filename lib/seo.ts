import {DefaultSeoProps} from "next-seo";

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: "%s | Jules Bursens",
  defaultTitle: "Jules Bursens",
  description: "Chargé de projet digital — Développement web & SEO à Bordeaux.",
  openGraph: {
    type: "website",
    siteName: "Jules Bursens",
  },
  twitter: {
    cardType: "summary_large_image",
  },
};


