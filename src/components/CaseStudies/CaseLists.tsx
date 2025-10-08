"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ASSET_PREFIX } from "../../../config";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CaseItem {
  id: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const caseData: CaseItem[] = [
  {
    id: "1",
    category: "Automobile",
    title: "Automobile (Tractor Manufacturing Company)",
    description:
      "Multi Deep Shuttle ASRS offers an automated storage solution to deliver and stack the products between the different pallet levels.",
    imageSrc: `${ASSET_PREFIX}/images/pallet-asrs-crane.webp`,
    link: "#",
  },
  {
    id: "2",
    category: "Electronics",
    title: "Electronics (Smartphone Manufacturer)",
    description:
      "High-speed ASRS system for fast-moving consumer electronics warehouse automation.",
    imageSrc: `${ASSET_PREFIX}/images/pallet-asrs-crane.webp`,
    link: "#",
  },
  {
    id: "3",
    category: "Electronics",
    title: "Electronics (Smartphone Manufacturer)",
    description:
      "High-speed ASRS system for fast-moving consumer electronics warehouse automation.",
    imageSrc: `${ASSET_PREFIX}/images/pallet-asrs-crane.webp`,
    link: "#",
  },
  {
    id: "4",
    category: "Electronics",
    title: "Electronics (Smartphone Manufacturer)",
    description:
      "High-speed ASRS system for fast-moving consumer electronics warehouse automation.",
    imageSrc: `${ASSET_PREFIX}/images/pallet-asrs-crane.webp`,
    link: "#",
  },
  {
    id: "5",
    category: "Electronics",
    title: "Electronics (Smartphone Manufacturer)",
    description:
      "High-speed ASRS system for fast-moving consumer electronics warehouse automation.",
    imageSrc: `${ASSET_PREFIX}/images/pallet-asrs-crane.webp`,
    link: "#",
  },
  // Add more cards here
];

export default function CaseLists() {
  const wrapperRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
  const slideWrappers = wrapperRefs.current;
  const slides = gsap.utils.toArray<HTMLDivElement>(".Content__slide");

  const mm = gsap.matchMedia(); // ✅ use const

  mm.add(
    "(min-width: 1200px) and (prefers-reduced-motion: no-preference)",
    () => {
      slideWrappers.forEach((wrapper, i) => {
        const card = slides[i];

        let scale = 1;
        let rotationZ = 0;
        let rotationX = 0;

        if (i !== slides.length - 1) {
          scale = 0.4 + 0.025 * i;
          rotationZ = 5;
          rotationX = 40;
        }

        gsap.to(card, {
          scale,
          rotationX,
          rotationZ,
          transformOrigin: "50% center",
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: "bottom bottom",
            endTrigger: slides[slides.length - 1],
            scrub: 1,
            pin: wrapper,
            pinSpacing: false,
            id: String(i + 1),
          },
        });
      });
    }
  );

  return () => {
    mm.revert();
  };
}, []);


  return (
    <div>
      {caseData.map((item, i) => (
        <div
  key={item.id}
  className="Content__wrapper mb-[40px]"
  ref={(el) => {
    if (el) wrapperRefs.current[i] = el; // return void
  }}
>

          <div className="Content__slide bg-[#fff] rounded-[35px] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-shadow duration-500 grid grid-cols-[100%]  sm:grid-cols-[50%_45%] gap-[5px] lg:gap-[20px] p-[15px]">
            {/* Image */}
            <div className="rounded-[25px] overflow-hidden flex">
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={680}
                height={510}
                className="w-full max-[480px]:h-[200px] sm:h-[350px] md:h-[350px] 2xl:h-[400px] object-cover rounded-[25px] transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="px-[5px] sm:px-[25px] pt-[15px] sm:py-[25px] flex flex-col justify-between">
              <div>
                <p className="text-[#0F95B5] mb-[20px] px-[15px] py-[3px] bg-[#9cddec66] rounded-[30px] w-fit text-[15px]">
                  {item.category}
                </p>
                <h2 className="text-[#232323] text-[20px] xl:text-[22px] 2xl:text-[24px] leading-[26px] xl:leading-[28px] 2xl:leading-[30px] tracking-[-0.03em] mb-[15px] font-semibold">
                  {item.title}
                </h2>
                <p className="text-[#555] text-[15px] leading-[24px] line-clamp-2">
                  {item.description}
                </p>
              </div>
              <div className="mt-[30px]">
                <Link
                  href={item.link}
                  className="relative inline-flex items-center px-[2px] py-[2px] rounded-[50px] bg-gradient-to-r from-[#0087A7] via-[#FF8400] to-[#0087A7] bg-[length:300%_100%] animate-gradient hover:shadow-lg hover:shadow-orange-500/15 transition-all duration-400 ease-out group"
                >
                  <div className="absolute inset-0 overflow-hidden rounded-[50px]">
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 ease-out" />
                  </div>
                  <span className="relative flex items-center justify-center w-full h-full rounded-[50px] bg-white hover:bg-gray-50 transition-all duration-300 ease-out pl-[23px] pr-[13px] py-[6px] text-[#37384D] text-sm md:text-base z-10">
                    View Casestudy
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
