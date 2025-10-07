// components/subbannerConfig.ts
export interface SubbannerContent {
  title: string;
  subtitle: React.ReactNode;
  heading: React.ReactNode;
  description?: string;
  cta?: {
    label: string;
    href: string;
  }[];
}

export const subbannerConfig: Record<string, SubbannerContent[]> = {


  // Example for another page
  "multi-deep-shuttle-asrs": [
    {
      title: "Multi-deep Shuttle ASRS",
      heading: <>Multi-deep Shuttle ASRS</>,
      subtitle: <>Multi-deep Automated storage system for Pallets</>,
      description:
        "Multi-deep Pallet Shuttle ASRS is a revolutionary multi-deep Automated storage system for Pallets",
      cta: [
        { label: "Get a Quote", href: "/contact" },
      ],
    },
  ],
};
