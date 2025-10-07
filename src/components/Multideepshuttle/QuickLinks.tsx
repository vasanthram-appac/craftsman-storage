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
}

export default function QuickLinks() {
  const menus: MenuItem[] = [
    {
      title: "Pallet ASRS",
      submenus: [
        { title: "Multi-deep Shuttle ASRS", href: "#" },
        { title: "Pallet ASRS Crane", href: "#" },
        { title: "Crane Shuttle ASRS", href: "#" },
        { title: "Pallet Conveyor Systems", href: "#" },
        { title: "Sorting and Transfer Vehicle", href: "#" },
        { title: "Four-Way Pallet Shuttle System", href: "#" },
      ],
    },
    {
      title: "Miniload ASRS",
      submenus: [
        { title: "Pallet Conveyor Systems", href: "#" },
        { title: "Sorting and Transfer Vehicle", href: "#" },
        { title: "Four-Way Pallet Shuttle System", href: "#" },
      ],
    },
    {
      title: "VStore",
      submenus: [
        { title: "Multi-deep Shuttle ASRS", href: "#" },
        { title: "Pallet ASRS Crane", href: "#" },
        { title: "Four-Way Pallet Shuttle System", href: "#" },
      ],
    },
  ];

  // Track active main menu for desktop
  const [activeMenu, setActiveMenu] = useState<string>("Pallet ASRS");

  // Track open state for mobile accordion
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
          {menus.map((menu) => (
            <li key={menu.title}>
              <button
                onClick={() => setActiveMenu(menu.title)}
                className={`px-[15px] py-[10px] flex rounded-[15px_15px_0_0] transition-colors duration-300 ${
                  activeMenu === menu.title
                    ? "bg-[#fff] text-[#0087A7] font-[500]"
                    : "bg-transparent text-black"
                }`}
              >
                {menu.title}
              </button>
            </li>
          ))}
        </ul>

        {/* Only active submenu */}
        {menus.map(
          (menu) =>
            menu.title === activeMenu && (
              <ul
                key={menu.title}
                className="flex gap-[15px] bg-[#fff] rounded-[0_15px_15px_15px] mt-[-1px] transition-all duration-500 ease-in-out"
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
      {/* Mobile / Tablet Accordion */}
<div className="xl:hidden">
  <button
    onClick={toggleMainAccordion}
    className="w-full text-left px-[25px] py-[7px] sm:py-3 bg-[#fff] text-[#232323] font-medium rounded-[35px] flex justify-between items-center transition-colors duration-300"
  >
    Quick Links
    <span
      className={`transform transition-transform duration-300 ${
        openMainAccordion ? "rotate-0" : "rotate-0"
      }`}
    >
      {/* Change main Quick Links arrow */}
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
    className={`overflow-hidden transition-all duration-500 ease-in-out ${
      openMainAccordion ? "max-h-[2000px]" : "max-h-0"
    }`}
  >
    <div className="flex flex-col gap-2 mt-2">
      {menus.map((menu) => (
        <div
          key={menu.title}
          className="border border-[#0087a729] rounded-[35px] overflow-hidden"
        >
          {/* Sub Accordion Header */}
          <button
            onClick={() => toggleSubAccordion(menu.title)}
            className=" w-full text-left px-[30px] py-[6px] sm:py-2 flex justify-between items-center bg-[#fff] hover:bg-gray-200 transition-colors duration-300 ease-in-out"
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

          {/* Sub Accordion Content */}
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
      ))}
    </div>
  </div>
</div>

    </div>
  );
}
