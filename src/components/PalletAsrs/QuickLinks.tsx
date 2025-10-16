'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface Submenu {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  submenus: Submenu[];
}

export default function QuickLinks() {
  const pathname = usePathname(); // current URL path
const currentPath = pathname.replace(/\/$/, ''); // remove trailing slash
// Removed invalid reference to sub.href

  const menus: MenuItem[] = [
    {
      title: "Quick Links",
      submenus: [
        { title: "Pallet ASRS", href: "/pallet-asrs" },
        { title: "Miniload ASRS", href: "/miniload-asrs" },
        { title: "Warehouse Automation", href: "/warehouse-automation" },
        { title: "Cold Storage Automation", href: "/cold-storage-automation" },
        { title: "Autonomous Mobile Robots (AMR)", href: "/amr" },
        { title: "VStore Calculator", href: "/vstore-calculator" },
      ],
    },
  ];

  // Mobile accordion states
  const [openMainAccordion, setOpenMainAccordion] = useState(false);
  const [openSubAccordion, setOpenSubAccordion] = useState<string | null>(null);

  const toggleMainAccordion = () => setOpenMainAccordion(!openMainAccordion);
  const toggleSubAccordion = (title: string) =>
    setOpenSubAccordion(openSubAccordion === title ? null : title);

  return (
    <div className="w-full">
      {/* Desktop Menu */}
      <div className="hidden xl:block">
        <ul className="flex gap-[30px] bg-[#f1f1f1] px-[25px] py-[13px] rounded-[50px]">
  {menus.map((menu) =>
    menu.submenus.map((sub) => {
      const currentPath = pathname.replace(/\/$/, ''); // normalize
      const subHref = sub.href.replace(/\/$/, '');
      const isActive = currentPath === subHref;

      return (
        <li key={sub.title}>
          <Link
            href={sub.href}
            className={`flex rounded-[15px_15px_0_0] text-[15px] 2xl:text-[16px] transition-colors duration-300 ${
              isActive
                ? "text-[#0087A7] font-semibold"
                : "text-black hover:text-[#0087A7]"
            }`}
          >
            {sub.title}
          </Link>
        </li>
      );
    })
  )}
</ul>


      </div>

      {/* Mobile / Tablet Accordion */}
      <div className="xl:hidden">
  {/* Main Quick Links Button */}
  <button
    onClick={toggleMainAccordion}
    className="w-full text-left px-[25px] py-[7px] sm:py-3 bg-[#fff] text-[#232323] font-medium rounded-[35px] flex justify-between items-center transition-colors duration-300"
  >
    Pallet Racks
    <span className="transform transition-transform duration-300">
      {openMainAccordion ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="none" stroke="#0087A7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15l6-6 6 6"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="none" stroke="#0087A7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6"/>
        </svg>
      )}
    </span>
  </button>

        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openMainAccordion ? "max-h-[2000px]" : "max-h-0"}`}>
    <div className="flex flex-col gap-2 mt-2">
      {menus.map((menu) => (
        <div key={menu.title} className="border border-[#0087a729] rounded-[35px] overflow-hidden">
          {/* Render submenu items only when accordion is open */}
          <ul className="flex flex-col gap-1 px-[20px] xl:px-[35px] py-2 bg-white">
            {menu.submenus.map((sub) => {
              const currentPath = pathname.replace(/\/$/, '');
              const subHref = sub.href.replace(/\/$/, '');
              const isActive = currentPath === subHref;

              return (
                <li key={sub.title} className="mb-[5px]">
                  <Link
                    href={sub.href}
                    className={`block px-2 py-1 rounded transition-colors duration-300 ease-in-out ${
                      isActive ? " text-[#0087A7] font-semibold" : "hover:bg-[#fff]"
                    }`}
                  >
                    {sub.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  </div>
      </div>
    </div>
  );
}
