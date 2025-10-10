import React from "react";

export interface SubbannerItem {
  key: string;
  title: string;
  subtitle: React.ReactNode;
  description?: string;
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
    description:
      "Multi Deep Shuttle ASRS offers an automated storage solution to deliver and stack the products between the different pallet levels",
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
        <br /> Retrieval Systems
      </>
    ),
    description:
      "Storage solutions designed for Automated Storage and retrieval of palletized goods.",
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "automotive-automobile": {
    key: "automotive-automobile",
    title: "Automotive Automobile",
    subtitle: <>Automotive Automobile</>,
    description: "Tractor Manufacturing Company",
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "blog/": {
    key: "automotive-automobile",
    title: "Blog",
    subtitle: <>Blog</>,
    description:
      "We would like to keep you updated on the industrial front with regular blog postings.",
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },

    "about-us": {
    key: "",
    title: "About us",
    subtitle: <>About us</>,
    description:
      "We would like to keep you updated on the industrial front with regular blog postings.",
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
};
