// components/Breadcrumbs.tsx
"use client";

import Link from "next/link";
import { breadcrumbsConfig, BreadcrumbItem } from "../config/breadcrumbs";

interface BreadcrumbsProps {
  pageKey: string; // key to identify which breadcrumbs to render
}

export default function Breadcrumbs({ pageKey }: BreadcrumbsProps) {
  const breadcrumbs: BreadcrumbItem[] = breadcrumbsConfig[pageKey] || [];

  if (breadcrumbs.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-[5px] text-sm absolute bottom-[-35px] left-[3%] z-[999]  max-[1200px]:w-[50%] max-[1000px]:w-[60%]  max-[900px]:w-[70%]  max-[760px]:w-[50%]  max-[760px]:bottom-[-35px] max-[600px]:w-[65%]  max-[480px]:relative max-[480px]:w-[100%]  max-[480px]:top-[0px]">
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1; // current page

        return (
          <li key={index} className="flex items-center gap-[5px] ">
            {crumb.href && !isLast ? (
              <Link
                href={crumb.href}
                className=" text-[#626262] hover:text-[#0087A7] transition-colors duration-300 font-light text-[15px]">
                {crumb.title}
              </Link>
            ) : (
              <span
                className={`font-medium text-[16px] ${
                  isLast ? "text-[#0087A7]" : "text-gray-700"
                }`}>
                {crumb.title}
              </span>
            )}
            {index !== breadcrumbs.length - 1 && (
              <span className="mx-[5px] text-gray-700">/</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
