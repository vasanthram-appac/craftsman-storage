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
  "auto-ancillary": [
    { title: "Home", href: "/" },
    { title: "Case Studies", href: "/" },
    { title: "Auto Ancillary", href: "/" },
  ],
  "automotive-industry": [
    { title: "Home", href: "/" },
    { title: "Case Studies", href: "/" },
    { title: "Automotive Industry", href: "/" },
  ],
  "footwear-accessories-solution": [
    { title: "Home", href: "/" },
    { title: "Case Studies", href: "/" },
    { title: "Footwear Accessories Solution", href: "/" },
  ],
  "manufacturing-solution": [
    { title: "Home", href: "/" },
    { title: "Case Studies", href: "/" },
    { title: "Manufacturing", href: "/" },
  ],
  "cold-chain": [
    { title: "Home", href: "/" },
    { title: "Case Studies", href: "/" },
    { title: "Cold Chain", href: "/" },
  ],
  "3pl": [
    { title: "Home", href: "/" },
    { title: "Case Studies", href: "/" },
    { title: "3pl", href: "/" },
  ],
  "ecommerce": [
    { title: "Home", href: "/" },
    { title: "Case Studies", href: "/" },
    { title: "Ecommerce", href: "/" },
  ],
  "ecommerce-solutions": [
    { title: "Home", href: "/" },
    { title: "Case Studies", href: "/" },
    { title: "Ecommerce Solutions", href: "/" },
  ],
  "textile-industry": [
    { title: "Home", href: "/" },
    { title: "Case Studies", href: "/" },
    { title: "Textile Industry", href: "/" },
  ],
  "textile-fashion": [
    { title: "Home", href: "/" },
    { title: "Case Studies", href: "/" },
    { title: "Textile Fashion", href: "/" },
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
   "craftsman-storage-was-delighted-to-be-part-of-the-cii-institute-of-logistics-star-2025-summit-in-mumbai": [
    { title: "Home", href: "/" },
     { title: "News and Events", href: "/news-events" },
    { title: " CII Institute of Logistics STAR 2025 ", href: "/" },
  ],
"craftsman-storage-hosted-the-customer-connect-in-hyderabad": [
    { title: "Home", href: "/" },
     { title: "News and Events", href: "/news-events" },
    { title: " Customer Connect in Hyderabad ", href: "/" },
  ],
"craftsman-storage-exhibited-at-iws-expo-2025": [
    { title: "Home", href: "/" },
     { title: "News and Events", href: "/news-events" },
    { title: " Craftsman Storage Exhibited at IWS Expo 2025 ", href: "/" },
  ],
"craftsman-storage-supported-nestles-new-logistics-centre-in-chennai": [
    { title: "Home", href: "/" },
     { title: "News and Events", href: "/news-events" },
    { title: " Nestle's new Logistics center in Chennai ", href: "/" },
  ],
"fully-automated-warehouse-implementation": [
    { title: "Home", href: "/" },
     { title: "News and Events", href: "/news-events" },
    { title: "Fully Automated Warehouse Implementation", href: "/" },
  ],
"craftsman-storage-received-appreciation-from-parekh-integrated-services": [
    { title: "Home", href: "/" },
     { title: "News and Events", href: "/news-events" },
    { title: "Received Appreciation from Parekh Integrated Services", href: "/" },
  ],
"craftsman-storage-honored-by-merck-for-peenya-expansion-project": [
    { title: "Home", href: "/" },
     { title: "News and Events", href: "/news-events" },
    { title: "Honored by Merck for Peenya Expansion Project", href: "/" },
  ],
"craftsman-storage-hosted-rishta-customer-meet-in-chennai": [
    { title: "Home", href: "/" },
     { title: "News and Events", href: "/news-events" },
    { title: "RISHTA Customer Meet in Chennai", href: "/" },
  ],
"craftsman-storage-exhibited-at-intralogistics-warehousing-expo-2025": [
    { title: "Home", href: "/" },
     { title: "News and Events", href: "/news-events" },
    { title: "Intralogistics & Warehousing Expo 2025", href: "/" },
  ],
"craftsman-storage-hosted-a-meaningful-customer-meet-in-mumbai": [
    { title: "Home", href: "/" },
     { title: "News and Events", href: "/news-events" },
    { title: "Customer Meet in Mumbai", href: "/" },
  ],
"design-discussion-with-nuit-suratkal-team": [
    { title: "Home", href: "/" },
     { title: "News and Events", href: "/news-events" },
    { title: "Design discussion with NIT Suratkal Team", href: "/" },
  ],
"logimat-2025": [
    { title: "Home", href: "/" },
     { title: "News and Events", href: "/news-events" },
    { title: "LOGIMAT 2025", href: "/" },
  ],
"imtex-2025": [
    { title: "Home", href: "/" },
     { title: "News and Events", href: "/news-events" },
    { title: "IMTEX 2025", href: "/" },
  ],
"ludhiana-in-association-with-ate": [
    { title: "Home", href: "/" },
     { title: "News and Events", href: "/news-events" },
    { title: "Customer meet at Ludhiana", href: "/" },
  ],
"craftsman-at-innovfest": [
    { title: "Home", href: "/" },
     { title: "News and Events", href: "/news-events" },
    { title: "Craftsman at Innovfest", href: "/" },
  ],
"intralogistics-warehousing-expo-2024": [
    { title: "Home", href: "/" },
     { title: "News and Events", href: "/news-events" },
    { title: "Intralogistics & Warehousing Expo 2024", href: "/" },
  ],

};
