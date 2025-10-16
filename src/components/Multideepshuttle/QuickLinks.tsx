'use client';

import Link from "next/link";
import { useState } from "react";

interface Submenu {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  submenus: Submenu[];
  href?: string; // for top-level direct links (no dropdown)
}

export default function QuickLinks() {
  const menus: MenuItem[] = [
    {
      title: "Pallet ASRS",
      submenus: [
        { title: "Multi-deep Shuttle ASRS", href: "#" },
        { title: "Pallet ASRS Crane", href: "#" },
        { title: "Crane Shuttle ASRS", href: "#" },
        { title: "Four way shuttle", href: "#" },
      ],
    },
    {
      title: "Miniload ASRS",
      submenus: [
        { title: "Miniload Shuttle", href: "#" },
        { title: "Miniload ASRS Crane", href: "#" },
        { title: "Multi level shuttle", href: "#" },
      ],
    },
    // below 4 are direct links (no dropdown)
    { title: "Warehouse Automation", submenus: [], href: "#" },
    { title: "Cold Storage Automation", submenus: [], href: "#" },
    { title: "Autonomous Mobile Robots (AMR)", submenus: [], href: "#" },
    { title: "VStore Calculator", submenus: [], href: "#" },
  ];

  // default active tab = first item that actually has submenus
  const firstTabbed = menus.find(m => m.submenus.length > 0)?.title ?? menus[0].title;
  const [activeMenu, setActiveMenu] = useState<string>(firstTabbed);

  // mobile state
  const [openMainAccordion, setOpenMainAccordion] = useState(false);
  const [openSubAccordion, setOpenSubAccordion] = useState<string | null>(null);

  const toggleMainAccordion = () => setOpenMainAccordion(!openMainAccordion);
  const toggleSubAccordion = (title: string) =>
    setOpenSubAccordion(openSubAccordion === title ? null : title);

  return (
    <div className="w-full">
      {/* Desktop Menu */}
      <div className="hidden xl:block">
        <ul className="flex gap-[15px]">
          {menus.map((menu) => {
            const isTabbed = menu.submenus.length > 0;
            const baseClasses =
              "px-[15px] py-[10px] flex rounded-[15px_15px_0_0] transition-colors duration-300";
            const activeClasses =
              activeMenu === menu.title
                ? "bg-[#b5cdd34d] text-[#0087A7] font-[500]"
                : "bg-transparent text-black";

            return (
              <li key={menu.title}>
                {isTabbed ? (
                  <button
                    onClick={() => setActiveMenu(menu.title)}
                    className={`${baseClasses} ${activeClasses}`}
                  >
                    {menu.title}
                  </button>
                ) : (
                  <Link
                    href={menu.href ?? "#"}
                    className={`${baseClasses} bg-transparent text-black hover:text-[#0087A7]`}
                  >
                    {menu.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Only render submenus for the active tabbed item */}
        {menus.map(
          (menu) =>
            menu.submenus.length > 0 &&
            menu.title === activeMenu && (
              <ul
                key={menu.title}
                className="flex gap-[15px] bg-[#cce7ed] rounded-[0_15px_15px_15px] mt-[-1px] transition-all duration-500 ease-in-out"
              >
                {menu.submenus.map((sub) => (
                  <li key={sub.title}>
                    <Link
                      href={sub.href}
                      className="px-[12px] 2xl:px-[15px] py-[10px] flex hover:text-[#0087A7] transition-colors duration-300 text-[15px] 2xl:text-[16px]"
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )
        )}
      </div>

     {/* Mobile / Tablet Accordion */}
<div className="xl:hidden">
  <button
    onClick={toggleMainAccordion}
    className="w-full text-left px-[25px] py-[7px] sm:py-[8px] bg-[#fff] text-[#232323] font-medium rounded-[35px] flex justify-between items-center transition-colors duration-300 border border-[#0087a729]"
  >
    Quick Links
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

  <div
    className={`overflow-hidden transition-all duration-500 ease-in-out rounded-[35px] ${
      openMainAccordion ? "max-h-[2000px]" : "max-h-0"
    }`}
  >
    <div className="flex flex-col gap-2 mt-2 border border-[#0087a729] rounded-[35px]">
      {menus.map((menu) => {
        const isTabbed = menu.submenus.length > 0;

        // ✅ Direct-link items — no dropdown, no arrow
        if (!isTabbed) {
          return (
            <div key={menu.title} className="rounded-[35px]  ">
              <Link
                href={menu.href ?? "#"}
                className="rounded-[35px] w-full block px-[30px] py-[10px] sm:py-3 flex justify-between items-center hover:bg-gray-100 transition-colors duration-300"
              >
                <span>{menu.title}</span>
              </Link>
            </div>
          );
        }

        // Accordion items (with submenus)
        return (
          <div key={menu.title} className="overflow-hidden rounded-[35px]">
            <button
              onClick={() => toggleSubAccordion(menu.title)}
              className="rounded-[35px] w-full text-left px-[30px] py-[10px] sm:py-3 flex justify-between items-center hover:bg-gray-200 transition-colors duration-300 ease-in-out"
            >
              {menu.title}
              <span>
                {openSubAccordion === menu.title ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <path fill="none" stroke="#424242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M6 15l6-6 6 6"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <path fill="none" stroke="#424242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M6 9l6 6 6-6"/>
                  </svg>
                )}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openSubAccordion === menu.title ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <ul className="flex flex-col gap-1 px-[35px] py-2 bg-white">
                {menu.submenus.map((sub) => (
                  <li key={sub.title} className="mb-[5px]">
                    <Link
                      href={sub.href}
                      className="block px-2 py-1 rounded hover:bg-[#E0F7FA] transition-colors duration-300 ease-in-out"
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>

    </div>
  );
}
