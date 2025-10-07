"use client";
import Link from "next/link";
import { useState } from "react";

interface SideMenuProps {
  isMenuClosed: boolean;
  CloseToggle: () => void;
}

interface Page {
  name: string;
  link: string;
}

interface SubCategory {
  title: string;
  pages: Page[];
}

interface Category {
  title: string;
  pages?: Page[];
  subcategories?: SubCategory[];
}

const SideMenu = ({ isMenuClosed, CloseToggle }: SideMenuProps) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [openStates, setOpenStates] = useState<{ [key: string]: boolean }>({});

  const toggleOpen = (key: string) =>
    setOpenStates((prev) => ({ ...prev, [key]: !prev[key] }));

  /** ✅ Updated Products / Solutions / Technology tree */
  const serviceCategories: Category[] = [
    {
      title: "Automated Storage and Retrieval Systems",
      subcategories: [
        {
          title: "Pallet ASRS",
          pages: [
            { name: "Multi-deep Shuttle ASRS", link: "/" },
            { name: "Pallet ASRS Crane", link: "/" },
            { name: "Crane Shuttle ASRS", link: "/" },
            { name: "Four way shuttle", link: "/" },
          ],
        },
        {
          title: "Miniload ASRS",
          pages: [
            { name: "Miniload Shuttle", link: "/" },
            { name: "Miniload ASRS Crane", link: "/" },
            { name: "Multi level shuttle", link: "/" },
          ],
        },
        { title: "Warehouse Automation", pages: [{ name: "Overview", link: "/" }] },
        { title: "Cold Storage Automation", pages: [{ name: "Overview", link: "/" }] },
        { title: "Autonomous Mobile Robots (AMR)", pages: [{ name: "Overview", link: "/" }] },
        { title: "VStore Calculator", pages: [{ name: "Overview", link: "/" }] },
      ],
    },
    {
      title: "Vertical storage",
      subcategories: [
        {
          title: "Vertical storage",
          pages: [
            { name: "VSTORE", link: "/" },
            { name: "VStore HD - Heavy Duty", link: "/" },
            { name: "Vstore Roto - Vertical Carousels", link: "/" },
          ],
        },
      ],
    },
    {
      title: "Mobility solutions",
      subcategories: [
        {
          title: "Mobility solutions",
          pages: [
            { name: "AMR", link: "/" },
            { name: "RGV", link: "/" },
            { name: "Conveyors", link: "/" },
            { name: "Lifts", link: "/" },
            { name: "Goods to person (GTP)", link: "/" },
          ],
        },
      ],
    },
    {
      title: "Other Solutions",
      pages: [
        { name: "Rack Clad", link: "/" },
        { name: "Semi automated system - Shuttle Racking", link: "/" },
        { name: "Warehouse management system", link: "/" },
      ],
    },
    {
      title: "Static storage",
      subcategories: [
        {
          title: "Industrial Racking systems",
          pages: [
            { name: "Selective Pallet Racking", link: "/" },
            { name: "Pallet Flow Racks", link: "/" },
            { name: "Double Deep Pallet Racking", link: "/" },
            { name: "Push Back Racking", link: "/" },
            { name: "Drive in Racking", link: "/" },
            { name: "Mobile Pallet Racking", link: "/" },
          ],
        },
        {
          title: "Industrial Shelving Systems",
          pages: [
            { name: "Slotted Angle Shelving", link: "/" },
            { name: "Boltless Shelving", link: "/" },
            { name: "Long Span Shelving", link: "/" },
            { name: "Multi Tier Shelving", link: "/" },
            { name: "Carton / Bin Live Storage", link: "/" },
            { name: "Mobile Shelving", link: "/" },
          ],
        },
        {
          title: "Mezzanine & Cantilever Racking",
          pages: [
            { name: "Frame Based Mezzanine", link: "/" },
            { name: "Column Based Mezzanine", link: "/" },
            { name: "Cantilever Racking for long items", link: "/" },
            { name: "Goods Lift - Vertical Reciprocating Conveyor", link: "/" },
          ],
        },
      ],
    },

  ];

const industryList = [
  { name: "Automotive", link: "/" },
  { name: "Cutting Tools", link: "/" },
  { name: "Electronics", link: "/" },
  { name: "FMCG", link: "/" },
  { name: "Cold Chain", link: "/" },
  { name: "E-Commerce & Quick commerce", link: "/" },
  { name: "Engineering", link: "/" },
  { name: "Manufacturing", link: "/" },
  { name: "Textile & Fashion", link: "/" },
  { name: "Retail", link: "/" },
  { name: "Pharma and healthcare", link: "/" },
  { name: "Chemicals and Petrochemicals", link: "/" },
  { name: "Renewable energy", link: "/" },
  { name: "F&B", link: "/" },
  { name: "FMCD", link: "/" },
  { name: "3PL & Logistics", link: "/" },
  { name: "Semi conductors", link: "/" },
];


  return (
    <nav
      className={`fixed w-[450px] z-[1000] h-[100vh] bg-white top-[69px] right-0 max-sm:w-full transition-transform duration-300 shadow-[-5px_6px_5px_0px_#a7a7a740] ${
        isMenuClosed ? "translate-x-full" : "translate-x-0"
      } block xl:hidden`}
    >
      <div className="flex h-[90%] flex-col justify-between pb-[30px] overflow-y-auto">
        <ul>
          <li>
            <Link onClick={CloseToggle} href="/" className="block py-[15px] border-b border-[#e8e8e8] px-[20px] text-[17px] sm:text-[18px] text-[#424242]">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={CloseToggle} href="/about-us" className="block py-[15px] border-b border-[#e8e8e8] px-[20px] text-[17px] sm:text-[18px] text-[#424242]">
              About Us
            </Link>
          </li>

          {/* Products Accordion */}
          <li className="border-b border-[#e8e8e8]">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex justify-between items-center py-[15px] px-[20px] text-[17px] sm:text-[18px] text-[#424242]"
            >
              Products

             <span> {servicesOpen ? ( <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"> <path fill="none" stroke="#424242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="m17 14l-5-5l-5 5" /> </svg> ) : ( <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"> <path fill="none" stroke="#424242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="m7 10l5 5l5-5" /> </svg> )} </span>

            </button>
            <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${servicesOpen ? "max-h-[5000px]" : "max-h-0"}`}>
              <ul>
                {serviceCategories.map((cat, i) => (
                  <li key={i} className="border-b border-[#e8e8e8]">
                    <button
                      onClick={() => toggleOpen(`cat-${i}`)}
                      className="w-full flex justify-between items-center py-[15px] px-[25px] text-[16px] text-left text-[#424242]"
                    >
                      {cat.title}
                      <span> {openStates[`cat-${i}`] ? ( <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"> <path fill="none" stroke="#424242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="m17 14l-5-5l-5 5" /> </svg> ) : ( <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"> <path fill="none" stroke="#424242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="m7 10l5 5l5-5" /> </svg> )} </span>
                    </button>

                    <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${openStates[`cat-${i}`] ? "max-h-[3000px]" : "max-h-0"}`}>
                      {cat.pages && (
                        <ul className="bg-[#f1f1f1]">
                          {cat.pages.map((page, j) => (
                            <li key={j}>
                              <Link
                                onClick={CloseToggle}
                                href={page.link}
                                className="block py-[15px] border-b border-[#e8e8e8] px-[40px] text-[16px] text-[#424242]"
                              >
                                {page.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      {cat.subcategories && (
                        <ul>
                          {cat.subcategories.map((sub, k) => (
                            <li key={k} className="border-b border-[#e8e8e8]">
                              <button
                                onClick={() => toggleOpen(`cat-${i}-sub-${k}`)}
                                className="w-full flex justify-between items-center py-[15px] px-[40px] text-[16px] text-[#424242]"
                              >
                                {sub.title}
                                <span> {openStates[`cat-${i}-sub-${k}`] ? ( <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"> <path fill="none" stroke="#424242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="m17 14l-5-5l-5 5" /> </svg> ) : ( <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"> <path fill="none" stroke="#424242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="m7 10l5 5l5-5" /> </svg> )} </span>

                              </button>
                              <div
                                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                                  openStates[`cat-${i}-sub-${k}`] ? "max-h-[1500px]" : "max-h-0"
                                }`}
                              >
                                <ul className="bg-[#eaeaea]">
                                  {sub.pages.map((page, m) => (
                                    <li key={m}>
                                      <Link
                                        onClick={CloseToggle}
                                        href={page.link}
                                        className="block py-[15px] border-b border-[#dcdcdc] px-[55px] text-[16px] text-[#424242]"
                                      >
                                        {page.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* Resources Accordion */}
          <li className="border-b border-[#e8e8e8]">
  <button
    onClick={() => setResourcesOpen(!resourcesOpen)}
    className="w-full flex justify-between items-center py-[15px] px-[20px] text-[17px] sm:text-[18px] text-[#424242]"
  >
    Industry we serve
    <span> {resourcesOpen ? ( <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"> <path fill="none" stroke="#424242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="m17 14l-5-5l-5 5" /> </svg> ) : ( <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"> <path fill="none" stroke="#424242" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="m7 10l5 5l5-5" /> </svg> )} </span>
  </button>

  <div
    className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
      resourcesOpen ? "max-h-[1000px]" : "max-h-0"
    }`}
  >
    <ul className="bg-[#f9f9f9]">
      {industryList.map((item, i) => (
        <li key={i}>
          <Link
            onClick={CloseToggle}
            href={item.link}
            className="block py-[15px] border-b border-[#e8e8e8] px-[40px] text-[16px] text-[#424242]"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</li>


          {/* Static links */}
          <li>
            <Link onClick={CloseToggle} href="/blog" className="block py-[15px] border-b border-[#e8e8e8] px-[20px] text-[17px] sm:text-[18px] text-[#424242]">
              Blogs
            </Link>
          </li>
          <li>
            <Link onClick={CloseToggle} href="/contact-us" className="block py-[15px] border-b border-[#e8e8e8] px-[20px] text-[17px] sm:text-[18px] text-[#424242]">
              Contact Us
            </Link>
          </li>
        </ul>
        {/* Social media section remains unchanged */}
      </div>
    </nav>
  );
};

export default SideMenu;
