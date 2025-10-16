"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../config";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CaseStudyItem {
  id: number;
  title: string;
  author: string;
  industry: string;
  image: string;
  link: string;
}

const caseStudies: CaseStudyItem[] = [
  {
    id: 1,
    title:
      "Special Solution for Storage of Metal Sheets using mechanics eased their storing and retrieval methodologies.",
    author: "Emily Johnson",
    industry: "Manufacturing",
    image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
    link: "#",
  },
  {
    id: 2,
    title:
      "Automated retrieval system increased productivity and optimized warehouse space for critical components.",
    author: "Michael Lee",
    industry: "Automotive",
    image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
    link: "#",
  },
  {
    id: 3,
    title:
      "Craftsman’s smart racking streamlined operations, reducing handling time and improving safety standards.",
    author: "Sophia Patel",
    industry: "Logistics",
    image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
    link: "#",
  },
];

export default function CaseStudiestwo() {
  // ✅ useRef is now inside the component
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null); // typed correctly

  return (
    <section
      className="bg-[#fff] relative py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] overflow-hidden rounded-[40px]"
      aria-labelledby="why-us-heading"
    >
      <div className="w-[90%] mx-auto relative z-[2]">
        {/* Heading */}
        <div className="w-full sm:w-[90%] md:w-[80%] 2xl:w-[70%] mb-[40px]">
          <h2 className="text-[#232323] mb-4 sm:mb-6 text-left">
            - Why Choose Craftsman ASRS? -
          </h2>
          <h3 className="text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.4px] mb-0 text-[#000] text-left w-full sm:w-[70%] md:w-[80%] lg:w-full">
            <span className="bg-gradient-to-r from-[#232323] to-[#0086A6] bg-clip-text text-transparent tracking-[-2px]">
              Hear what our customers say <br className="hidden lg:block" /> about our
              solutions
            </span>
          </h3>
        </div>

        {/* -------- Desktop Grid (>= md) -------- */}
        <div className="hidden md:grid grid-cols-2 gap-[50px] lg:gap-[70px] 2xl:gap-[80px] items-center">
          <div className="grid gap-[80px]">
            {caseStudies.slice(0, 2).map((item) => (
              <CaseStudyCard key={item.id} item={item} />
            ))}
          </div>
          <div>
            {caseStudies.slice(2, 3).map((item) => (
              <CaseStudyCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* -------- Mobile Slider (< md) -------- */}
        <div className="block md:hidden">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
          >
            {caseStudies.map((item) => (
              <SwiperSlide key={item.id}>
                <CaseStudyCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination + Navigation */}
          <div className="flex justify-center mt-[40px] flex-wrap gap-[5px]">
            <div className="custom-pagination !static swiper-pagination-bullets cpage" />
          </div>
          <div className="flex justify-end gap-3 mt-[20px]">
            <button
              ref={prevRef}
              className="custom-prev cursor-pointer p-[12px] hover:bg-[#fff] rounded-[15px]"
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="text-[#323232]"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19.5 12h-15m0 0l5.625-6M4.5 12l5.625 6"
                />
              </svg>
            </button>
            <button
              ref={nextRef}
              className="custom-next cursor-pointer p-[12px] hover:bg-[#fff] rounded-[15px]"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ item }: { item: CaseStudyItem }) {
  return (
    <div>
      <Link
        href={item.link}
        className="relative group w-full rounded-[25px] overflow-hidden
        after:content-[''] after:absolute after:inset-0
        after:bg-[linear-gradient(361deg,#232323_3%,rgba(0,0,0,0)_75%)]
        hover:after:bg-[linear-gradient(361deg,rgb(0_134_166)_3%,rgba(0,0,0,0)_75%)]
        after:translate-y-[50px] hover:after:translate-y-0
        after:transition-transform after:duration-300 block"
      >
        <Image
          src={item.image}
          alt={item.title}
          width={600}
          height={400}
          className="w-full h-[200px] md:h-[250px] lg:h-[250px] xl:h-[300px] 2xl:h-[340px] object-cover object-right transition-transform duration-500 ease-in-out
          group-hover:scale-105 rounded-[15px] sm:rounded-[25px]"
        />

        <div className="absolute bottom-0 right-0 bg-[#fff] p-[8px] sm:p-[15px] z-[2] rounded-[15px_0_0_0] sm:rounded-[25px_0_0_0]">
          <div className="bg-[#000] group-hover:bg-[#0087a7] text-[#fff] rounded-full transition group-hover:text-[#ebf7ff]
             w-[32px] h-[32px] flex items-center justify-center p-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
          </div>
        </div>
      </Link>

      <h4 className="text-[#141414] text-[18px] lg:text-[20px] leading-[26px] 2xl:text-[22px] 2xl:leading-[28px] tracking-[-0.02em] font-[300] w-[90%] xl:w-[80%] mt-[30px] mb-[25px]">
        {item.title}
      </h4>
      <p className="text-[#616161]">
        <span className="font-[600] uppercase">{item.author}</span> - {item.industry}
      </p>
    </div>
  );
}
