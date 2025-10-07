"use client";

import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Benefits() {
  const benefitsData = [
    "100% automated storage operations",
    "Quick access and faster delivery times",
    "Optimized space utilization",
    "Multi-deep storage",
    "High throughputs for a large range of goods",
    "Simple machine control with plug & play solutions for faster commissioning",
    "Optimum solutions for all unit loads owing to Craftsman's load handling attachments",
    "Safe and efficient pallet handling",
    "Ensured reliability",
    "Controlled Inventory",
  ];

  const [isMobile, setIsMobile] = useState(false);
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    const paginationRef = useRef<HTMLDivElement | null>(null);

  // detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Shared Benefit Item Component
  const BenefitItem = ({ benefit, index }: { benefit: string; index: number }) => (
    <li
      className="flex gap-[20px] 2xl:gap-[30px] lg:gap-[50px] p-[20px] md:p-[30px] transition group items-center
        hover:bg-[linear-gradient(90deg,#ededed_60%,transparent_100%)] relative
        after:absolute after:w-[100%] after:h-[1px] after:content-[''] after:block after:bottom-[-0]
        after:left-[-0] after:top-auto after:bg-[#e1e1e1]
        text-[16px] sm:text-[18px] 2xl:text-[20px] leading-[24px] sm:leading-[26px] 2xl:leading-[28px] text-[#232323] tracking-[-0.03em] font-[300]"
    >
      <span
        className="bg-gradient-to-b from-[#fff] to-[#fff] bg-clip-text text-transparent
        [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#0087a7de]
        text-[30px] leading-[36px] md:text-[50px] md:leading-[54px]
        2xl:text-[70px] 2xl:leading-[70px]
        relative z-[9999999] font-bold tracking-[0.03em]"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      {benefit}
    </li>
  );

  return (
    <>
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-[0] sm:gap-[30px]">
        <div>
          <h2 className="text-[#232323] mb-[15px] md:mb-6">
            - Benefits & Features of using ASRS -
          </h2>
        </div>

        {/* Custom Navigation */}
           <div className="flex justify-end gap-3 mt-[0] sm:mt-[20px] w-[70%] mr-[0] mx-auto ">
             <button ref={prevRef} className="custom-prev cursor-pointer p-[12px] hover:bg-[#fff] rounded-[15px]" aria-label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="text-[#323232]" >
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12h-15m0 0l5.625-6M4.5 12l5.625 6" />
            </svg>
          </button>
          <button ref={nextRef} className="custom-next cursor-pointer p-[12px] hover:bg-[#fff] rounded-[15px]" aria-label="Next">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="text-[#323232]">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop grid */}
      {!isMobile && (
        <ul className="grid grid-cols-2 gap-x-[30px] w-[90%] mx-auto mt-[30px]  md:mt-[50px] " role="list">
          {benefitsData.map((benefit, index) => (
            <BenefitItem key={index} benefit={benefit} index={index} />
          ))}
        </ul>
      )}

      {/* Mobile Swiper */}
      {isMobile && (
        <div className="w-[90%] mx-auto relative">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".benefit-next",
              prevEl: ".benefit-prev",
            }}
            className="cpage !pb-[50px]"
          >
            {benefitsData.map((benefit, index) => (
              <SwiperSlide key={index}>
                <BenefitItem benefit={benefit} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>


        </div>
      )}
    </>
  );
}
