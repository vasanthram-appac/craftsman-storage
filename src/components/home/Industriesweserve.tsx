"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { ASSET_PREFIX } from "../../../config";

interface CaseStudy {
  label: string;
  href: string;
  variant?: "solid" | "outline";
}
interface Industry {
  title: string;
  image: string;
  description: string;
  caseStudies: CaseStudy[];
}

export default function IndustriesWeServe() {


  const Btn = ({ label, href }: CaseStudy) => (
    <Link
      href={href || "#"}
      className="relative inline-flex items-center px-[2px] py-[2px] rounded-[50px] bg-gradient-to-r from-[#0087A7] via-[#FF8400] to-[#0087A7] bg-[length:300%_100%] animate-gradient hover:shadow-lg  hover:shadow-orange-500/15 active:translate-y-0  transition-all duration-400 ease-out group"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[50px]">
        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 ease-out " />
      </div>
      <span className="relative flex items-center justify-center w-full h-full rounded-[50px] bg-white font-normal hover:bg-gray-50 transition-all duration-300 ease-out
      pl-[15px] pr-[7px] py-[4px] text-[#37384D] z-10 text-[15px]">
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 ml-2 transition-transform duration-300 ease-out "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );

  const industries: Industry[] = [
    {
      title: "Automotive",
      image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
      description: "Creative, safe and supported environment.",
      caseStudies: [
        { label: "Casestudy - automotive", href: "" },
        { label: "Casestudy - company", href: "" },
      ],
    },
    {
      title: "Cutting Tool Manufacturer",
      image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
      description: "Creative, safe and supported environment.",
      caseStudies: [
        { label: "Casestudy - automotive", href: "" },
        { label: "Casestudy - company", href: "" },
      ],
    },
    {
      title: "Industrial Drives Manufacturer",
      image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
      description: "Creative, safe and supported environment.",
      caseStudies: [
        { label: "Casestudy - automotive", href: "" },
        { label: "Casestudy - company", href: "" },
      ],
    },
    {
      title: "FMCG",
      image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
      description: "Creative, safe and supported environment.",
      caseStudies: [
        { label: "Casestudy - automotive", href: "" },
        { label: "Casestudy - company", href: "" },
      ],
    },
    {
      title: "Footwear & Accessories",
      image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
      description: "Creative, safe and supported environment.",
      caseStudies: [
        { label: "Casestudy - automotive", href: "" },
        { label: "Casestudy - company", href: "" },
      ],
    },
    {
      title: "Manufacturing",
      image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
      description: "Creative, safe and supported environment.",
      caseStudies: [
        { label: "Casestudy - automotive", href: "" },
        { label: "Casestudy - company", href: "" },
      ],
    },
    {
      title: "Cold Chain",
      image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
      description: "Creative, safe and supported environment.",
      caseStudies: [
        { label: "Casestudy - Cold Chain", href: "" },
        { label: "Casestudy - 3PL", href: "" },
      ],
    },
    {
      title: "E-Commerce",
      image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
      description: "Creative, safe and supported environment.",
      caseStudies: [
        { label: "Casestudy - E-Commerce", href: "" },
        { label: "Casestudy - E-Commerce", href: "" },
      ],
    },
    {
      title: "E-Commerce",
      image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
      description: "Creative, safe and supported environment.",
      caseStudies: [
        { label: "Casestudy - E-Commerce", href: "" },
        { label: "Casestudy - E-Commerce", href: "" },
      ],
    },
    {
      title: "Textile",
      image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
      description: "Creative, safe and supported environment.",
      caseStudies: [
        { label: "Casestudy - Textile Industry", href: "" },
        { label: "Casestudy - Textile & Fashion", href: "" },
      ],
    },
    {
      title: "Tyre Manufacturer",
      image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
      description: "Creative, safe and supported environment.",
      caseStudies: [
        { label: "Casestudy - Tyre Manufacturer", href: "" },
        { label: "Casestudy - Tyre Manufacturer", href: "" },
      ],
    },
    {
      title: "Record Management",
      image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
      description: "Creative, safe and supported environment.",
      caseStudies: [
        { label: "Casestudy ", href: "" },
        { label: "Casestudy ", href: "" },
      ],
    },
    {
      title: "Electronics  ",
      image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
      description: "Creative, safe and supported environment.",
      caseStudies: [
        { label: "Casestudy - Electronic Industry ", href: "" },
        { label: "Casestudy - Electrode Strorage ", href: "" },
      ],
    },
    {
      title: "Retail",
      image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
      description: "Creative, safe and supported environment.",
      caseStudies: [
        { label: "Casestudy ", href: "" },
        { label: "Casestudy ", href: "" },
      ],
    },
    {
      title: "Pharmaceuticals ",
      image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
      description: "Creative, safe and supported environment.",
      caseStudies: [
        { label: "Casestudy ", href: "" },
        { label: "Casestudy ", href: "" },
      ],
    },
    {
      title: "Mining Machinery ",
      image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
      description: "Creative, safe and supported environment.",
      caseStudies: [
        { label: "Casestudy ", href: "" },
        { label: "Casestudy ", href: "" },
      ],
    },
    {
      title: "Logistics ",
      image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
      description: "Creative, safe and supported environment.",
      caseStudies: [
        { label: "Casestudy ", href: "" },
        { label: "Casestudy ", href: "" },
      ],
    },
  ];

  const IndustryCard = ({ industry }: { industry: Industry }) => (
    <div className="bg-[#fff] h-full rounded-[25px]">
      <div className="relative after:absolute after:bg-[linear-gradient(361deg,rgba(0,0,0,0.8)_24%,rgba(0,0,0,0)_75%)] after:w-full after:h-full after:top-0 after:right-0 group">
        <div className="overflow-hidden rounded-[25px_25px_0_0]">
          <Image
            src={industry.image}
            alt={industry.title}
            className="w-full h-[230px] group-hover:scale-[1.05] transition-all duration-300 ease-in-out rounded-[25px_25px_0_0] object-cover object-center"
            width={30}
            height={30}
            priority
          />
        </div>
        <h2 className="absolute bottom-0 w-full px-[20px] pb-[30px] text-[22px] 2xl:text-[24px] leading-[26px] text-[#fff] tracking-[-0.04em] z-[2] font-light">
          {industry.title}
        </h2>
      </div>

      <div className="px-[20px] pt-[20px] pb-[40px]">
        <p className="text-[#626262] tracking-[-0.03em] text-[16px] leading-[24px] mb-[20px]">
          {industry.description}
        </p>
        <div className="flex flex-wrap gap-[10px]">
          {industry.caseStudies.map((study, i) => (
            <Btn key={i} {...study} />
          ))}
        </div>
      </div>
    </div>
  );
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <>
      {/* Heading */}
      <div className="w-full md:w-[90%] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-[25px] sm:gap-[30px]">
        <div>
          <h2 className="text-[#232323] mb-[15px] md:mb-6">- Industries we serve -</h2>
          <h3 className="text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.4px] text-[#000]">
            <span className="bg-gradient-to-r from-[#232323] to-[#0086A6] bg-clip-text text-transparent">
              Solutions for <br className="hidden lg:block" /> Every Industry
            </span>
          </h3>
        </div>
        <div className="flex justify-end w-full lg:w-auto">
          <Link href="" className="relative inline-flex items-center px-[2px] py-[2px] rounded-[50px] bg-gradient-to-r from-[#0087A7] via-[#FF8400] to-[#0087A7] bg-[length:300%_100%] animate-gradient hover:shadow-lg  hover:shadow-orange-500/15 active:translate-y-0  transition-all duration-400 ease-out group">
            <div className="absolute inset-0 overflow-hidden rounded-[50px]">
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 ease-out  " />
            </div>
            <span className="relative flex items-center justify-center w-full h-full rounded-[50px] bg-white font-normal hover:bg-gray-50 transition-all duration-300 ease-out pl-[23px] pr-[13px] py-[6px] text-[#37384D] text-sm md:text-base z-10">
              View all
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 transition-transform duration-300 ease-out " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Single Swiper for all sizes */}
      <div className="relative mx-auto mt-[30px] md:mt-[60px] w-full md:w-[90%]">
        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: true },
            600: { slidesPerView: 2, centeredSlides: false, spaceBetween: 20 },
            1010: { slidesPerView: 3, centeredSlides: false, spaceBetween: 20 },
            1500: { slidesPerView: 4, centeredSlides: false, spaceBetween: 20 },
          }}
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <IndustryCard industry={industry} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}

        <div className="flex justify-center mt-[40px] flex-wrap gap-[5px]">
          <div className="custom-pagination !static swiper-pagination-bullets cpage "></div>
        </div>
        <div className="flex justify-end gap-3 mt-[20px]">
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
    </>
  );
}
