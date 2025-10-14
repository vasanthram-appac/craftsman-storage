import React from "react";

export interface SubbannerItem {
  key: string;
  title: string;
  subtitle: React.ReactNode;
  description?: React.ReactNode;
  mediaType: "video" | "image";
  mediaSrc: string;
  link?: {
    label: string;
    href: string;
  };
}

export const subbannerConfig2: Record<string, SubbannerItem> = {
  "pallet-asrs": {
    key: "pallet-asrs",
    title: "Automated Storage and Retrieval Systems",
    subtitle: <>Pallet ASRS</>,
    description: (
      <>
        Multi Deep Shuttle ASRS offers an automated storage solution <br />
        to deliver and stack the products between the <br />
        different pallet levels
      </>
    ),
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "automated-storage-and-retrieval-systems": {
    key: "pallet-asrs",
    title: "Automated Storage and Retrieval Systems",
    subtitle: (
      <>
        Automated Storage and
        <br className="hidden sm:block" /> Retrieval Systems
      </>
    ),
    description: (
      <>
        Storage solutions designed for Automated Storage and <br />
        retrieval of palletized goods.
      </>
    ),
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "automotive-automobile": {
    key: "automotive-automobile",
    title: "Automotive Automobile",
    subtitle: <>Automotive Automobile</>,
    description: "",
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "auto-ancillary": {
    key: "auto-ancillary",
    title: "Auto Ancillary",
    subtitle: <>Auto Ancillary</>,
    description: "",
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "automotive-industry": {
    key: "automotive-industry",
    title: "Auto Ancillary",
    subtitle: <>Auto Ancillary</>,
    description: "",
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "construction-and-mining-equipment-manufacturer": {
    key: "construction-and-mining-equipment-manufacturer",
    title: "Construction & Mining Equipment Manufacturer",
    subtitle: <>Construction & Mining Equipment Manufacturer</>,
    description: "",
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "selective-pallet-racking-with-mesh-decking": {
    key: "selective-pallet-racking-with-mesh-decking",
    title: "Auto Sector",
    subtitle: <>Auto Sector</>,
    description: "",
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "cutting-tool-manufacturer": {
    key: "cutting-tool-manufacturer",
    title: "Cutting Tool Manufacturer",
    subtitle: <>Cutting Tool Manufacturer</>,
    description: "",
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "industrial-drives-manufacturer": {
    key: "industrial-drives-manufacturer",
    title: "Industrial Drives Manufacturer",
    subtitle: <>Industrial Drives Manufacturer</>,
    description: "",
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  fmcg: {
    key: "fmcg",
    title: "FMCG",
    subtitle: <>FMCG</>,
    description: "",
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "footwear-accessories-solution": {
    key: "footwear-accessories-solution",
    title: "Footwear & Accessories",
    subtitle: <>Footwear & Accessories</>,
    description: "",
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "manufacturing-solution": {
    key: "manufacturing-solution",
    title: "Manufacturing",
    subtitle: <>Manufacturing</>,
    description: "",
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "cold-chain": {
    key: "cold-chain",
    title: "Cold Chain",
    subtitle: <>Cold Chain</>,
    description: "",
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "3pl": {
    key: "3pl",
    title: "3pl",
    subtitle: <>3pl</>,
    description: "",
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  ecommerce: {
    key: "ecommerce",
    title: "Ecommerce",
    subtitle: <>Ecommerce</>,
    description: "",
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "blog/": {
    key: "automotive-automobile",
    title: "Blog",
    subtitle: <>Blog</>,
    description: (
      <>
        We would like to keep you updated on the industrial <br />
        front with regular blog postings.
      </>
    ),
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "blog-detail/": {
    key: "automotive-automobile",
    title: "Blog",
    subtitle: <>Blog</>,
    description: (
      <>
        We would like to keep you updated on the industrial <br />
        front with regular blog postings.
      </>
    ),
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },

  "about-us": {
    key: "",
    title: "About us",
    subtitle: <>About us</>,
    description: (
      <>
        We would like to keep you updated on the industrial <br />
        front with regular blog postings.
      </>
    ),
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "case-studies": {
    key: "",
    title: "Case Studies",
    subtitle: <>Case Studies</>,
    description: (
      <>
        We would like to keep you updated on the industrial <br />
        front with regular blog postings.
      </>
    ),
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "news-events": {
    key: "",
    title: "News & Events",
    subtitle: <>News & Events</>,
    description: (
      <>
        We would like to keep you updated on the industrial <br />
        front with regular blog postings.
      </>
    ),
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "contact-us": {
    key: "",
    title: "Contact Us",
    subtitle: <>Contact Us</>,
    description: (
      <>
        We would like to keep you updated on the industrial <br />
        front with regular blog postings.
      </>
    ),
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
};
