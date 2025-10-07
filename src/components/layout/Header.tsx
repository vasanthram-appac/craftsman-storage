"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../config";
import Image from "next/image";
import SideMenu from "./Sidemenu";

export default function Header() {
  const toggleMenu = () => {
    setIsMenuClosed(!isMenuClosed);
  };

  const closeMenu = () => {
    setIsMenuClosed(true);
  };

  const [isSticky, setIsSticky] = useState(false);
  const [isMenuClosed, setIsMenuClosed] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  console.log(setHasInteracted);

  const pathname = usePathname();

  useEffect(() => {
  setIsMenuClosed(true); // close on every path change
}, [pathname]);

// Keep this only if you actually need to toggle from UI
const CloseToggle = () => {
  setIsMenuClosed(true);
};
console.log(CloseToggle);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [active, SetSubmenu] = useState("technology");
console.log(SetSubmenu);
// const MENU_ITEMS = [
//   {
//     title: "Software Development",
//     submenu: [

//         {label: "Devops Consulting",link:"/technology"},
//       {label: "Andriod & IOS development",link:"/technology"},
//       {label: "Web Portal Development",link:"/technology"},
//       {label: "Webshop - eCommerce ",link:"/technology"},
//       {label: "Payment Gateway & API Integrations",link:"/technology"}


//     ],
//   },
//   {
//     title: "Cloud Consulting",
//     submenu: [

//         {label: "Migration & Deployment",link:"/technology"},
//       {label: "Web Hosting and Maintenance",link:"/technology"},
//       {label: "Email Management (Suite Services)",link:"/technology"},
//       {label: "Cyber Security",link:"/technology"},
//       {label: "Domain Registration",link:"/technology"}
//       ],
//   },
//   {
//     title: "Process Automation",
//     submenu: [
//         {label: "Custom Software Solutions",link:"/technology"},
//       {label: "Booking Engines",link:"/technology"},
//       {label: "Virtual Hospital Portal",link:"/technology"},
//       {label: "Business Process Automation",link:"/technology"},
//       {label: "Enterprise Managment Solutions",link:"/technology"}


//     ],
//   },
// ];

// const DIGITAL_MENU = [
//   {
//     title: "Web Optimization",
//     submenu: [
//       {label: "Core Web Vitals",link:"/digital-marketing-company-in-coimbatore"},
//       {label: "Technical SEO",link:"/digital-marketing-company-in-coimbatore"},
//       {label: "Search Experience Optimization (SXO)",link:"/digital-marketing-company-in-coimbatore"},


//     ],
//   },
//   {
//     title: "Digital Optimization",
//     submenu: [
//          {label: "Search Engine Optimization (SEO)",link:"/digital-marketing-company-in-coimbatore"},
//           {label: "Social Media Marketing (SMM)",link:"/digital-marketing-company-in-coimbatore"},
//            {label: "Paid Marketing (SEM)",link:"/digital-marketing-company-in-coimbatore"},
//     ],
//   },
//   {
//     title: "Marketing Automation",
//     submenu: [
//         {label: "Market Research ",link:"/digital-marketing-company-in-coimbatore"},
//           {label: "GTM Strategy",link:"/digital-marketing-company-in-coimbatore"},
//            {label: "Analytics & Data",link:"/digital-marketing-company-in-coimbatore"},
//             {label: "Martech Strategy",link:"/digital-marketing-company-in-coimbatore"},
//             {label: "Email Automation",link:"/digital-marketing-company-in-coimbatore"},

//     ],
//   },
// ];
  return (
    <header
      className={`header transition-colors duration-1000 ${
        isSticky
          ? "sticky bg-[#EBF7FF] "
          : "sticky bg-[#EBF7FF] "
      } top-0 z-[10000]`}>
      <div
        className={`  mx-auto w-[95%] header-menu grid grid-cols-[235px_auto] sm:grid-cols-[330px_auto] justify-between m-auto items-center   ${
          hasInteracted && isMenuClosed ? "closed" : ""
        }`}>
        <div className="logo-div">
          <Link
            href="/"
            className={`flex items-center gap-[20px] sm:gap-[30px] justify-between relative   ${
             isSticky
               ? " after:bg-[#000] py-[15px] "
               : "after:bg-[#000] py-[15px] "
           }`}>
            <Image
              src={
                isSticky
                  ? `${ASSET_PREFIX}/images/icons/logo.svg` // Sticky version
                  : `${ASSET_PREFIX}/images/icons/logo.svg` // Normal version
              }
              alt="Craftsman Storage"
              className={`transition-all duration-300 mix-blend-multiply ${
                isSticky
                  ? "w-[150px] sm:w-[180px] 2xl:w-[200px]"
                  : "w-[150px] sm:w-[180px] 2xl:w-[200px]"
              }`}
              width={isSticky ? 200 : 200}
              height={isSticky ? 58 : 58}
              priority
            />
            <div>
            </div>
          </Link>
        </div>

        <nav className="menu-div-parent hidden xl:block">
          <ul
            // className="menu-div flex items-center gap-[40px] 2xl:gap-[60px]"
            className={`menu-div flex items-center gap-[30px] 2xl:gap-[60px] ${
              isSticky ? "text-[#000]" : "text-[#fff]"
            }  `}>
            <li className="relative h-[15px] flex items-center overflow-hidden perspective-[1000px]">
              <Link
                href="/"
                className={`group relative inline-flex h-full items-center transform-gpu [transform-style:preserve-3d] hover:text-[#0087a7]
                ${isSticky ? "text-[#000]" : "text-[#000]"}`}>
                {/* Front label */}
                <span
                  className="flex items-center h-full px-2
                 text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] font-normal
                 transition-transform duration-300 ease-out will-change-transform
                 [backface-visibility:hidden]
                 [transform:translateY(0)_rotateY(0deg)]
                 group-hover:[transform:translateY(-100%)_rotateY(12deg)] hover:text-[var(--dblue)]">
                  Home
                </span>

                {/* Incoming label (from bottom) */}
                <span
                  className="absolute inset-x-0 top-full flex items-center h-full px-2
                 text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] font-normal
                 transition-transform duration-300 ease-out will-change-transform
                 [backface-visibility:hidden]
                 [transform:translateY(0)_rotateY(-12deg)]
                 group-hover:[transform:translateY(-100%)_rotateY(0deg)] hover:text-[var(--dblue)]">
                  Home
                </span>
              </Link>
            </li>
            <li className="relative h-[15px] flex items-center overflow-hidden perspective-[1000px]">
              <Link
                href="/about-us"
                className={`group relative inline-flex h-full items-center transform-gpu [transform-style:preserve-3d] hover:text-[#0087a7]
                ${isSticky ? "text-[#000]" : "text-[#000]"}`}>
                {/* Front label */}
                <span
                  className="flex items-center h-full px-2
                 text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] font-normal
                 transition-transform duration-300 ease-out will-change-transform
                 [backface-visibility:hidden]
                 [transform:translateY(0)_rotateY(0deg)]
                 group-hover:[transform:translateY(-100%)_rotateY(12deg)] hover:text-[var(--dblue)]">
                  About Us
                </span>

                {/* Incoming label (from bottom) */}
                <span
                  className="absolute inset-x-0 top-full flex items-center h-full px-2
                 text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] font-normal
                 transition-transform duration-300 ease-out will-change-transform
                 [backface-visibility:hidden]
                 [transform:translateY(0)_rotateY(-12deg)]
                 group-hover:[transform:translateY(-100%)_rotateY(0deg)] hover:text-[var(--dblue)]">
                  About Us
                </span>
              </Link>
            </li>

            {/* chat starts */}
            <li className="relative flex items-center group h-[90px]">
              {/* Services Link */}
              <Link
                href="/services"
                className={`group relative inline-flex h-full items-center transform-gpu [transform-style:preserve-3d] hover:text-[#0087a7]
                ${isSticky ? "text-[#000]" : "text-[#000]"}`}>
                Products
              </Link>

            </li>
            {/* chat ends */}

            <li className="relative h-[15px] flex items-center overflow-hidden perspective-[1000px]">
              <Link
                href="/works"
                className={`group relative inline-flex h-full items-center transform-gpu [transform-style:preserve-3d] hover:text-[#0087a7]
                ${isSticky ? "text-[#000]" : "text-[#000]"}`}>
                {/* Front label */}
                <span
                  className="flex items-center h-full px-2
                 text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] font-normal
                 transition-transform duration-300 ease-out will-change-transform
                 [backface-visibility:hidden]
                 [transform:translateY(0)_rotateY(0deg)]
                 group-hover:[transform:translateY(-100%)_rotateY(12deg)] hover:text-[var(--dblue)]">
                  Industries we serve
                </span>

                {/* Incoming label (from bottom) */}
                <span
                  className="absolute inset-x-0 top-full flex items-center h-full px-2
                 text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] font-normal
                 transition-transform duration-300 ease-out will-change-transform
                 [backface-visibility:hidden]
                 [transform:translateY(0)_rotateY(-12deg)]
                 group-hover:[transform:translateY(-100%)_rotateY(0deg)] hover:text-[var(--dblue)]">
                   Industries we serve
                </span>
              </Link>
            </li>
            <li className="relative h-[15px] flex items-center overflow-hidden perspective-[1000px]">
              <Link
                href="/case-studies"
                className={`group relative inline-flex h-full items-center transform-gpu [transform-style:preserve-3d] hover:text-[#0087a7]
                ${isSticky ? "text-[#000]" : "text-[#000]"}`}>
                {/* Front label */}
                <span
                  className="flex items-center h-full px-2
                 text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] font-normal
                 transition-transform duration-300 ease-out will-change-transform
                 [backface-visibility:hidden]
                 [transform:translateY(0)_rotateY(0deg)]
                 group-hover:[transform:translateY(-100%)_rotateY(12deg)] hover:text-[var(--dblue)]">
                  Case Studies
                </span>

                {/* Incoming label (from bottom) */}
                <span
                  className="absolute inset-x-0 top-full flex items-center h-full px-2
                 text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] font-normal
                 transition-transform duration-300 ease-out will-change-transform
                 [backface-visibility:hidden]
                 [transform:translateY(0)_rotateY(-12deg)]
                 group-hover:[transform:translateY(-100%)_rotateY(0deg)] hover:text-[var(--dblue)]">
                  Case Studies
                </span>
              </Link>
            </li>


            {/* Contact us starts */}
            <li className="relative flex group">
              {/* Main link */}
              <Link
                href="/contact-us"
                className={`flex relative inline-block px-[20px] py-[7px] sm:px-[20px] sm:py-[7px] rounded-full  transition-all duration-300 ease-in-out overflow-hidden z-10 font-regular border text-[16px] leading-[24px]
      ${
        isSticky
          ? "bg-[#0087A7] border-[#0087A7] text-[#000]"
          : "bg-[#0087A7] border-[#0087A7] text-[#000]"
      }`}>
                <span
                  className={`relative z-20 flex items-center gap-[13px] text-[16px] ${
                    isSticky
                      ? "text-[#fff] group-hover:text-[#000]"
                      : "text-[#fff] group-hover:text-[#000]"
                  }`}>
                  Get a Quote
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.435 1.56497C15.435 1.01269 14.9873 0.564971 14.435 0.564971L5.43503 0.564972C4.88274 0.564971 4.43503 1.01269 4.43503 1.56497C4.43503 2.11726 4.88274 2.56497 5.43503 2.56497L13.435 2.56497L13.435 10.565C13.435 11.1173 13.8827 11.565 14.435 11.565C14.9873 11.565 15.435 11.1173 15.435 10.565L15.435 1.56497ZM1 15L1.70711 15.7071L15.1421 2.27208L14.435 1.56497L13.7279 0.857865L0.292893 14.2929L1 15Z"
                      className={`${
                        isSticky
                          ? "fill-[#fff] group-hover:fill-[#000]"
                          : "fill-[white] group-hover:fill-[#1d3d76]"
                      }`}
                    />
                  </svg>
                </span>
                <span
                  className={`absolute inset-0 rounded-full z-0 transform scale-x-0 origin-right transition-transform duration-1000 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:scale-x-100 group-hover:origin-left
        ${
          isSticky
            ? "bg-white group-hover:bg-[#fff]"
            : "bg-white group-hover:bg-white"
        }`}></span>
                <span className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white/50 rounded-full opacity-0 -translate-x-1/2 -translate-y-1/2 group-hover:animate-ripple"></span>
              </Link>


            </li>

            {/* Contact us ends */}
          </ul>
        </nav>

        {/* Hamburger menu */}
        <div
          className={`side-menu-close transition-all duration-300 cursor-pointer relative h-[40px] w-[40px] 2xl:h-[50px] 2xl:w-[50px] flex flex-col justify-center leading-normal rounded-full px-[1vw] bg-[var(--dblue)] rounded-[50px] items-center block xl:hidden ${
            isMenuClosed ? "closed" : "opened"
          } group`}
          onClick={toggleMenu}>
          <span className="bg-[#323232] h-[2px] w-[20px] 2xl:w-[26px]  group-[.opened]:rotate-[45deg] group-[.opened]:translate-x-[0px] transition duration-300 group-[.opened]:translate-y-[6px] "></span>
          <span className="bg-[#323232] h-[2px] w-[20px] 2xl:w-[26px] my-[5px] group-[.opened]:opacity-0 transition duration-300"></span>
          <span className="bg-[#323232] h-[2px] w-[20px] 2xl:w-[26px] group-[.opened]:rotate-[-45deg] group-[.opened]:translate-x-[-1px] transition duration-300 group-[.opened]:translate-y-[-8px]"></span>
        </div>



        {/* Side Navigation Menu */}
        <SideMenu isMenuClosed={isMenuClosed} CloseToggle={closeMenu} />
      </div>
    </header>
  );
}
