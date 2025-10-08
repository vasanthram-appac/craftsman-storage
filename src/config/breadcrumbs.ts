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
    { title: "Multi-deep Shuttle ASRS", href: "/" }
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
  "blog/": [
    { title: "Home", href: "/" },
    { title: "blog", href: "/" },
  ],

};
