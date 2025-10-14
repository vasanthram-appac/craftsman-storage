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

export const subbannerConfig3: Record<string, SubbannerItem> = {
  "craftsman-hosted-rishta-customer-meet-in-ahmedabad": {
    key: "automotive-automobile",
    title: "News & Events",
    subtitle: <>News & Events</>,
    description:
      " ",
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },

  "craftsman-hosts-rishta-customer-meet-in-bangalore": {
    key: "automotive-automobile",
    title: "News & Events",
    subtitle: <>News & Events</>,
    description:
      " ",
    mediaType: "video",
    mediaSrc: "/videos/craftsman-video-new.mp4",
    link: { label: "Know More", href: "/contact" },
  },
};
