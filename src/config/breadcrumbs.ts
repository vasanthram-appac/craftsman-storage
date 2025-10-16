// config/breadcrumbs.ts
export interface BreadcrumbItem {
  title: string;
  href?: string; // optional, last item may not have a link
}

// Example: key is the page identifier
export const breadcrumbsConfig: Record<string, BreadcrumbItem[]> = {
  "automated-storage-and-retrieval-systems/": [
    { title: "Home", href: "/" },
    { title: "Automated Storage", href: "/" },
  ],

  "multi-deep-shuttle-asrs": [
    { title: "Home", href: "/" },
    { title: "Automated Storage", href: "/" },
    { title: "Pallet ASRS", href: "/" },
    { title: "Multi-deep Shuttle ASRS", href: "/" },
  ],

  "pallet-asrs": [
    { title: "Home", href: "/" },
    { title: "Automated Storage", href: "/" },
    { title: "Pallet ASRS", href: "/" },
  ],
  "automotive-automobile": [
    { title: "Home", href: "/" },
    { title: "Case Studies", href: "/" },
    { title: "Automobile Automotive", href: "/" },
  ],
  "craftsman-hosted-rishta-customer-meet-in-ahmedabad": [
    { title: "Home", href: "/" },
    { title: "News and Events", href: "/news-events" },
    { title: "Craftsman Hosted Rishta Customer Meet in Ahmedabad", href: "/" },
  ],
  "blog/": [
    { title: "Home", href: "/" },
    { title: "blog", href: "/" },
  ],
  "blog-detail/": [
    { title: "Home", href: "/" },
    { title: "blog", href: "/" },
  ],
  "about-us/": [
    { title: "Home", href: "/" },
    { title: "About us", href: "/" },
  ],
   "case-studies": [
    { title: "Home", href: "/" },
    { title: "case studies", href: "/" },
  ],
   "news-events": [
    { title: "Home", href: "/" },
    { title: "News & Events", href: "/" },
  ],
   "contact-us": [
    { title: "Home", href: "/" },
    { title: "Contact Us", href: "/" },
  ],
  "craftsman-hosts-rishta-customer-meet-in-bangalore": [
    { title: "Home", href: "/" },
     { title: "News and Events", href: "/news-events" },
    { title: "Craftsman Hosts Rishta Customer Meet in Bangalore", href: "/" },
  ],


  // blog starts
  "maximizing-efficiency-in-cold-storage-the-case-for-warehouse-automation": [
    { title: "Home", href: "/" },
     { title: "Blog", href: "/blog" },
    { title: "Maximizing Efficiency in Cold Storage: The Case for Warehouse Automation", href: "/maximizing-efficiency-in-cold-storage-the-case-for-warehouse-automation/" },
  ],
};
