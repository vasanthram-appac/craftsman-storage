// lib/metaConfig.ts
// import { ASSET_PREFIX } from "../../config";

export interface MetaTags {
  title: string;
  description: string;
  keywords: string;
  author: string;
  canonical: string;
  robots: string;
  googlebot: string;
}

export const metaConfig: Record<string, MetaTags> = {
  "/": {
    title: "Industrial Pallet Racking & Shelving Systems - Automated Storage Racks Manufacturers",
    description:
      "Manufacturer of Automated Industrial Storage Racking Solutions & Shelving Systems like Double Deep Pallet Racks, Mobile - Shuttle Racking Solution, Warehouses & Mezzanine Shelving",
    keywords:
      "Manufacturer of Automated Industrial Storage Racking Solutions & Shelving Systems like Double Deep Pallet Racks, Mobile - Shuttle Racking Solution, Warehouses & Mezzanine Shelving",
    author: "Craftsman Storage",
    canonical: "https://www.craftsmanstorage.com/",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
  "/automated-storage-and-retrieval-systems": {
    title: "Automated Storage and Retrieval System - ASRS Manufacturers",
    description:
      "Our Automated Storage and Retrieval Systems (ASRS) are Automatically Place and Retrieve Loads. We Manufacture Pallet and Miniload Automated Storage and VStore",
    keywords:
      "Our Automated Storage and Retrieval Systems (ASRS) are Automatically Place and Retrieve Loads. We Manufacture Pallet and Miniload Automated Storage and VStore",
    author: "Craftsman Storage",
    canonical: "https://www.craftsmanstorage.com/automated-storage-and-retrieval-systems",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
  "/multi-deep-shuttle-asrs": {
    title: "Multi-deep Shuttle ASRS - Shuttle Systems",
    description:
      "Our Multi-deep Shuttle ASRS combines multiple types of equipment like Pallet & Transfer conveyors and ASRS cranes. It is a Controlled Inventory and Multi-deep storage",
    keywords:
      "Our Multi-deep Shuttle ASRS combines multiple types of equipment like Pallet & Transfer conveyors and ASRS cranes. It is a Controlled Inventory and Multi-deep storage",
    author: "Craftsman Storage",
    canonical: "https://www.craftsmanstorage.com/multi-deep-shuttle-asrs",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },

  // add more routes...
};
