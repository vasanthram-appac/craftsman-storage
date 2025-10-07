// lib/getMeta.ts
import { metaConfig } from "./metaConfig";
import type { Metadata } from "next";
import { ASSET_PREFIX } from "../../config";

export function getMeta(path: string): Metadata {
  const meta = metaConfig[path];

  if (!meta) {
    return {
      title: "Craftsman Storage",
      description: "Craftsman Storage",
      keywords: "Craftsman Storage",
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    icons: {
  icon: `${ASSET_PREFIX}/images/favicon.ico`,
  shortcut: `${ASSET_PREFIX}/images/favicon.ico`,
  apple: `${ASSET_PREFIX}/images/favicon.ico`,
},


    authors: [{ name: meta.author }],
    alternates: {
      canonical: meta.canonical,
    },
    robots: {
      index: meta.robots.includes("index"),
      follow: meta.robots.includes("follow"),
      googleBot: meta.googlebot,
    },
  };
}
