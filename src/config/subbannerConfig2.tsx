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
    description: <>Multi Deep Shuttle ASRS offers an automated <br />storage solution to deliver </>,
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
        <br className="hidden sm:block"/> Retrieval Systems
      </>
    ),
    description:<>Storage solutions designed for Automated Storage and <br />retrieval of palletized goods.</>,
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "automotive-automobile": {
    key: "automotive-automobile",
    title: "Automotive Automobile",
    subtitle: <>Automotive Automobile</>,
    description: <>Tractor Manufacturing Company</>,
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "blog/": {
    key: "automotive-automobile",
    title: "Blog",
    subtitle: <>Blog</>,
    description:<>We would like to keep you updated on the industrial <br />front with regular blog postings.</>,
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "blog-detail/": {
    key: "automotive-automobile",
    title: "Blog",
    subtitle: <>Blog</>,
    description: <>We would like to keep you updated on the industrial <br />front with regular blog postings.</>,
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },

  "about-us": {
    key: "",
    title: "About us",
    subtitle: <>About us</>,
    description: <>We would like to keep you updated on the industrial <br />front with regular blog postings.</>,
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "case-studies": {
    key: "",
    title: "Case Studies",
    subtitle: <>Case Studies</>,
    description: <>We would like to keep you updated on the industrial <br />front with regular blog postings.</>,
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "news-events": {
    key: "",
    title: "News & Events",
    subtitle: <>News & Events</>,
    description: <>We would like to keep you updated on the industrial <br />front with regular blog postings.</>,
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
  "contact-us": {
    key: "",
    title: "Contact Us",
    subtitle: <>Contact Us</>,
    description: <>We would like to keep you updated on the industrial <br />front with regular blog postings.</>,
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },


  // Blog pages
  "maximizing-efficiency-in-cold-storage-the-case-for-warehouse-automation": {
    key: "",
    title: "Our Blog",
    subtitle: <>Our Blog</>,
    description: <>We would like to keep you updated on the industrial <br />front with regular blog postings.</>,
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
};
