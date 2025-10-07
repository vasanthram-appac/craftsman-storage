"use client";
import { useState, memo } from "react";
import Link from "next/link";
import { InputHTMLAttributes } from "react";

// ---------- HELPERS ----------
type LinkItem = string | { label: string; url: string };

const getLabel = (item: LinkItem) =>
  typeof item === "string" ? item : item.label;

const getUrl = (item: LinkItem) =>
  typeof item === "string"
    ? `/${item.toLowerCase().replace(/\s+/g, "-")}` // fallback slug
    : item.url;
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

// ---------- DATA ----------
const footerData = [
  {
    heading: "Products",
    columns: [
      {
        title: "Automated Storage and Retrieval",
        links: [
          { label: "Pallet ASRS", url: "/products/pallet-asrs" },
          { label: "Miniload ASRS", url: "/products/miniload-asrs" },
          "Warehouse Automation",
          "Cold Storage Automation",
          "Autonomous Mobile Robots (AMR)",
        ],
      },
      {
        title: "Mobility solutions",
        links: ["AMR", "RGV", "Conveyors", "Lifts", "Goods to person (GTP)"],
      },
      {
        title: "Vertical Storage",
        links: [
          "Vstore",
          "VStore HD - Heavy Duty",
          "Vstore Roto - Vertical Carousels",
        ],
      },
      {
        title: "Other Solutions",
        links: [
          "Rack Clad",
          "Semi automated system",
          "Warehouse management system",
        ],
      },
      {
        title: "Static storage",
        links: [
          "Industrial Racking systems",
          "Industrial Shelving Systems",
          "Mezzanine & Cantilever Racking",
        ],
      },
    ],
  },
  {
    heading: "Industry we serve",
    links: [
      "Automotive",
      "Cutting Tools",
      "Electronics",
      "FMCG",
      "Cold Chain",
      "E-Commerce & Quick commerce",
      "Engineering",
      "Manufacturing",
      "Textile & Fashion",
      "Retail",
      "Pharma and healthcare",
      "Chemicals and Petrochemicals",
      "Renewable energy",
      "F&B",
      "FMCD",
      "3PL & Logistics",
      "Semi conductors",
    ],
  },
  {
    heading: "About us",
    links: [
      "Company Overview",
      "Vision & Mission",
      "Leadership Team",
      "Milestones / Journey",
      "Awards & Certifications",
      "Why Craftsman storage",
      "Quality Policy",
      "Infrastructure",
      "Manufacturing Capabilities",
    ],
  },
  {
    heading: "Others",
    links: [
      "Warehouse Audit",
      "Casestudies",
      "Blog",
      "Sustainability",
      "Media Center",
      "Downloads",
      "Newsletter",
      "Testimonials",
      "Career",
      "Contact us",
    ],
  },
];

// ---------- COMPONENTS ----------
const Arrow = ({ open }: { open: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 1024 1024"
    fill="currentColor"
    className="text-white transition-transform duration-300"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
  >
    <path d="M831.872 340.864L512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6l340.288 331.776a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z" />
  </svg>
);

const Column = memo(function Column({
  col,
  isOpen,
  toggle,
}: {
  col: { title: string; links: LinkItem[] };
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={toggle}
        className="flex w-full justify-between items-center text-left sm:cursor-default py-2 sm:py-0"
      >
        <h3 className="text-white text-[16px]">{col.title}</h3>
        <span className="sm:hidden">
          <Arrow open={isOpen} />
        </span>
      </button>
      <ul
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0 sm:max-h-none"
        } sm:block mb-[20px]`}
      >
        {col.links.map((link, i) => {
          const label = getLabel(link);
          const url = getUrl(link);
          return (
            <li
              key={i}
              className="hover:text-white text-[#8BA2AA] text-[16px] 2xl:text-[16px] py-[8px] transition-colors duration-300"
            >
              <Link href={url} aria-label={label}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

// ---------- MAIN FOOTER ----------
export default function Footer() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [openCols, setOpenCols] = useState<Record<number, number | null>>({});

  const toggleMain = (i: number) =>
    setOpenIdx((prev) => (prev === i ? null : i));

  const toggleCol = (i: number, c: number) =>
    setOpenCols((prev) => ({ ...prev, [i]: prev[i] === c ? null : c }));

  return (
    <>
    <footer className="bg-[#023E52] py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] rounded-[30px] sm:rounded-[40px] relative">
      <div className="w-[90%] mx-auto grid grid-cols-[100%] sm:grid-cols-[48%_48%] md:grid-cols-[34%_34%_26%] lg:grid-cols-[28%_24%_24%_21%] xl:grid-cols-[42%_22%_22%_14%] gap-[20px]">
        {footerData.map((section, idx) => {
          const isOpen = openIdx === idx;
          const isColumns = "columns" in section;

          return (
            <div key={idx} className="border-b sm:border-none border-white/10">
              {/* Section Heading */}
              <button
                type="button"
                onClick={() => toggleMain(idx)}
                className="flex w-full justify-between items-center sm:cursor-default py-3 sm:py-0"
              >
                <h2 className="text-[17px] leading-[25px] sm:text-[18px] sm:leading-[26px] text-white uppercase font-[400] tracking-[-0.02em]">
                  {section.heading}
                </h2>
                <span className="sm:hidden">
                  <Arrow open={isOpen} />
                </span>
              </button>

              {/* Section Content */}
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out
                  ${isOpen ? "max-h-[2000px]" : "max-h-0 sm:max-h-none"}
                  sm:block`}
              >
                {isColumns ? (
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-0 sm:gap-8 mt-4 sm:mt-6">
                    {section.columns!.map((col, cIdx) => (
                      <Column
                        key={cIdx}
                        col={col}
                        isOpen={openCols[idx] === cIdx}
                        toggle={() => toggleCol(idx, cIdx)}
                      />
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-[15px] text-[#8BA2AA] text-[16px] sm:text-[16px] 2xl:text-[16px] mt-4 sm:mt-6 mb-[20px]">
                    {section.links.map((link: LinkItem, i: number) => {
                      const label = getLabel(link);
                      const url = getUrl(link);
                      return (
                        <li
                          key={i}
                          className="hover:text-white transition-colors duration-300"
                        >
                          <Link href={url} aria-label={label}>
                            {label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* follow us starts */}
  <div className="w-[90%] mx-auto static sm:absolute bottom-[40%] md:bottom-[19%] xl:bottom-[16%] right-[30px] md:right-[80px] 2xl:right-[13%] justify-center sm:justify-end flex">
  <div className="w-fit">
    <h2 className="text-white text-[16px] mb-[15px] mt-[25px] sm:mt-[0]">Sign-up for our Storage Tips</h2>
    <div className="mb-4 flex items-center mb-[15px] sm:mb-[35px]">
      <input className="w-full rounded-[8px_0_0_8px] bg-[#fff] px-[15px] py-[10px] focus:border-[#1c5264] outline-none p-2 px-[15px] placeholder:text-[#686565] min-w-[180px] md:min-w-[250px] transition" placeholder="Email Address" />
      <button className="bg-[#0087A7] px-[25px] py-[10px] rounded-[0_8px_8px_0] text-[#fff] hover:bg-[#002c3b] cursor-pointer transition duration-300 ease-in-out">Submit</button>
    </div>
    <h2 className="text-[17px] leading-[25px] sm:text-[18px] sm:leading-[26px] text-white uppercase font-[400] tracking-[-0.02em] mb-[15px]">Follow us on</h2>
    <ul className="flex gap-[25px] items-center w-full">
      <li><Link href="https://www.linkedin.com/company/appac-media/" target="_blank" className="text-white hover:text-[#8BA2AA] w-[25px] h-[25px] block"><svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 256 256"><path fill="currentColor" d="M216 28H40a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m4 188a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM92 112v64a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0m88 28v36a4 4 0 0 1-8 0v-36a24 24 0 0 0-48 0v36a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0v6.87A32 32 0 0 1 180 140M96 84a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></path></svg></Link></li>
      <li><Link href="https://www.facebook.com/appacmedia/" target="_blank" className="text-white hover:text-[#8BA2AA] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 14 14"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M.5 12.5v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3V8.76h.71a.61.61 0 0 0 .61-.61v-.77a.61.61 0 0 0-.61-.61h-.67v-.94c0-.84.38-.84.76-.84h.49a.55.55 0 0 0 .43-.18a.58.58 0 0 0 .18-.43v-.74a.62.62 0 0 0-.6-.64H9.65a2.32 2.32 0 0 0-2.39 2.6v1.17h-.64a.61.61 0 0 0-.62.61v.77a.61.61 0 0 0 .62.61h.64v4.74H1.5a1 1 0 0 1-1-1" strokeWidth={0.7}></path></svg></Link></li>
      <li><Link href="https://www.instagram.com/appac_mediatech/" target="_blank" className="text-white hover:text-[#8BA2AA] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><circle cx={17} cy={7} r={1.5} fill="currentColor" fillOpacity={0}><animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1"></animate></circle><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}><path strokeDasharray={72} strokeDashoffset={72} d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></animate></path><path strokeDasharray={28} strokeDashoffset={28} d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.6s" values="28;0"></animate></path></g></svg></Link></li>
      <li><Link href="https://x.com/appac_media" target="_blank" className="text-white hover:text-[#8BA2AA] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 12 12"><path fill="currentColor" d="M.076 0H3.61l3.145 4.498L10.53 0h1.129L7.185 5.114L12 12H8.468L5.183 7.303L1.128 12H0l4.753-5.312zM1.47.706l7.404 10.588h1.733L3.203.706z"></path></svg></Link></li>
      <li><Link href="https://www.youtube.com/channel/UCv2LNwbfMOlEyxo8kIQ_MwA/featured" target="_blank" className="text-white hover:text-[#8BA2AA] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M12 39h24"></path><rect width={39} height={26} x={4.5} y={9} rx={2} ry={2}></rect></g><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m29.86 22l-9.72-5.596v11.192z" strokeWidth={1.5}></path></svg></Link></li>
      <li><Link href="https://wa.me/+919342902803" target="_blank" className="text-white hover:text-[#8BA2AA] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.379.28 2.693.784 3.888c.279.66.418.99.436 1.24c.017.25-.057.524-.204 1.073L2 22l3.799-1.016c.549-.147.823-.22 1.073-.204c.25.018.58.157 1.24.436A10 10 0 0 0 12 22Z"></path><path d="m8.588 12.377l.871-1.081c.367-.456.82-.88.857-1.488c.008-.153-.1-.841-.315-2.218C9.916 7.049 9.41 7 8.973 7c-.57 0-.855 0-1.138.13c-.358.163-.725.622-.806 1.007c-.064.305-.016.515.079.935c.402 1.783 1.347 3.544 2.811 5.009c1.465 1.464 3.226 2.409 5.01 2.811c.42.095.629.143.934.079c.385-.08.844-.448 1.008-.806c.129-.283.129-.568.129-1.138c0-.438-.049-.943-.59-1.028c-1.377-.216-2.065-.323-2.218-.315c-.607.036-1.032.49-1.488.857l-1.081.87"></path></g></svg></Link></li>
    </ul>
  </div>
</div>


    </footer>

    <div className="">
     <div className="w-[90%] mx-auto flex flex-wrap items-center justify-center gap-[15px] md:justify-between py-[25px] ">
      <div >

                  <div className=" ">
            <div className="flex flex-col md:flex-row justify-end gap-[15px] max-md:gap-[5px] flex-wrap items-center">
              <p className="text-[#8BA2AA] text-[15px] leading-[22px] text-center ">
                © {new Date().getFullYear()}  Craftsman Storage Pvt Ltd.
                 <span className="text-nowrap"> All rights reserved.</span>
              </p>
              {/* <div className="flex  ">
                <Link
                  href="/privacy-policy"
                  className="text-[#444444] text-[16px] leading-[24px] hover:text-[#1D3D76] transition-colors">
                  Privacy Policy
                </Link>
                <div className="mx-[10px] text-[#444444]">|</div>
                <Link
                  href="/"
                  className="text-[#444444] text-[16px] leading-[24px] hover:text-[#1D3D76] transition-colors">
                  Terms & Conditions.
                </Link>
              </div>*/}
            </div>
          </div>

      </div>
      <div><div className=" ">
            <div className="flex flex-col md:flex-row justify-end gap-[15px] max-md:gap-[5px] flex-wrap items-center">
              <p className="text-[#8BA2AA]  text-[15px] leading-[22px] text-center ">
               Designed & Developed by <Link href="https://www.appacmedia.com/" target="_blank" className="hover:text-[#fff] transition duration-300 ease-in-out "><span className="text-nowrap"> Appac Mediatech Pvt Ltd.</span></Link>

              </p>
              {/* <div className="flex  ">
                <Link
                  href="/privacy-policy"
                  className="text-[#444444] text-[16px] leading-[24px] hover:text-[#1D3D76] transition-colors">
                  Privacy Policy
                </Link>
                <div className="mx-[10px] text-[#444444]">|</div>
                <Link
                  href="/"
                  className="text-[#444444] text-[16px] leading-[24px] hover:text-[#1D3D76] transition-colors">
                  Terms & Conditions.
                </Link>
              </div>*/}
            </div>
          </div></div>
     </div>
     </div>

    </>
  );
}
