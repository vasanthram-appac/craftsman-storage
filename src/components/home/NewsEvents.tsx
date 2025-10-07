"use client";

import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../config";
import { useState } from "react";


import "swiper/css";
import "swiper/css/navigation";

const events = [
  {
    id: 1,
    date: "Jul 27",
    title: "Craftsman Storage Exhibited at IWS Expo 2025",
    img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
  },
  {
    id: 2,
    date: "Jul 27",
    title: "Craftsman Storage Supported Nestle's New Logistics Centre in Chennai",
    img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
  },
  {
    id: 3,
    date: "Jul 27",
    title: "Craftsman Storage Exhibited at IWS Expo 2025",
    img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
  },
  {
    id: 4,
    date: "Jul 27",
    title: "Craftsman Storage Exhibited at IWS Expo 2025",
    img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
  },
  {
    id: 5,
    date: "Jul 27",
    title: "Craftsman Storage Supported Nestle's New Logistics Centre in Chennai",
    img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
  },
  {
    id: 6,
    date: "Jul 27",
    title: "Craftsman Storage Exhibited at IWS Expo 2025",
    img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
  },
  // add more slides here
];

export default function NewsEventsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="w-[90%] mx-auto">


      <div className=" flex flex-col md:flex-row justify-start md:justify-between item-start md:items-end gap-[20px] sm:gap-[30px] md:gap-[0] mb-[20px] lg:mb-[60px] ">
         <div className="">
          <h2 className="text-[#232323] mb-4 sm:mb-6 text-left">- News & Events -</h2>
        <h3 className="text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.4px] mb-[0] opacity-100 text-[#000] text-left md:text-left w-[100%] sm:w-[70%] md:w-[80%] lg:w-[100%]"> <span className="bg-gradient-to-r from-[#232323] to-[#0086A6] bg-clip-text text-transparent tracking-[-2px]"> Widest range of  <br className="hidden lg:block" />customised solutions  </span> </h3>
         </div>
         <div className="flex justify-end w-full lg:w-auto"><Link href="" className="relative inline-flex items-center px-[2px] py-[2px] rounded-[50px] bg-gradient-to-r from-[#0087A7] via-[#FF8400] to-[#0087A7] bg-[length:300%_100%] animate-gradient shadow-lg   hover:shadow-orange-500/15 active:translate-y-0   transition-all duration-400 ease-out group">
  <div className="absolute inset-0 overflow-hidden rounded-[50px]">
    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 ease-out  " />
  </div>
  <span className="relative flex items-center justify-center w-full h-full rounded-[50px] bg-white font-normal hover:bg-gray-50 transition-all duration-300 ease-out pl-[23px] pr-[13px] py-[6px] text-[#37384D] text-sm md:text-base z-10">
   View all
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 transition-transform duration-300 ease-out " fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </span>
</Link></div>
    </div>





      <Swiper
  modules={[Navigation, Pagination]}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  slidesPerView={1}
  spaceBetween={20}
  breakpoints={{
    0: { slidesPerView: 1 },
    767: { slidesPerView: 2 },
    1500: { slidesPerView: 3 },
  }}
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // <-- track current slide
  onBeforeInit={(swiper) => {
    if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
      swiper.params.navigation.prevEl = prevRef.current as HTMLElement;
      swiper.params.navigation.nextEl = nextRef.current as HTMLElement;
    }
  }}
  navigation={{ enabled: true }}
  className="!pb-[10px]"
>
        {events.map((ev) => (
          <SwiperSlide key={ev.id}>
            <div className="bg-white rounded-[15px] p-5 group shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <p className="bg-[#198CB3] text-white text-[18px] leading-[24px] 2xl:text-[20px] 2xl:leading-[26px] font-light w-fit min-w-[70px] 2xl:min-w-[80px] max-h-[70px] 2xl:max-h-[80px] flex items-center justify-center p-3 rounded-[20px]">
                  {ev.date.split(" ")[0]} <br /> {ev.date.split(" ")[1]}
                </p>
                <h4 className="text-[#232323] text-[18px] leading-[26px] 2xl:text-[23px] 2xl:leading-[30px] tracking-[-0.02em] font-[400] line-clamp-2">
                  {ev.title}
                </h4>
              </div>
              <div className="relative flex overflow-hidden rounded-[20px]">
                <Image
                  src={ev.img}
                  alt={ev.title}
                  width={400}
                  height={250}
                  className="w-full h-[160px] lg:h-[200px] 2xl:h-[240px] object-cover rounded-[20px] transform transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute bottom-0 left-0">
                  <Link
                    href="#"
                    className="bg-white text-[#FF8400] text-[16px] px-[15px] py-[8px] rounded-tr-[15px]"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom navigation */}
      <div className="flex justify-center mt-8 gap-2">
  {events.map((_, idx) => (
    <button
      key={idx}
      onClick={() => swiperRef.current?.slideToLoop(idx)} // slideToLoop handles looping
      className={`w-[8px] h-[8px] rounded-full transition-all duration-300 cursor-pointer ${
        activeIndex === idx ? "bg-[#0086A6] w-[30px] rounded-[5px]" : "bg-gray-300"
      }`}
      aria-label={`Go to slide ${idx + 1}`}
    ></button>
  ))}
</div>

      <div className="flex justify-end gap-3 mt-[15px] ">
        <button
          ref={prevRef}
          aria-label="Previous"
          className=" cursor-pointer p-[12px]"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="text-[#323232]"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12h-15m0 0l5.625-6M4.5 12l5.625 6"></path></svg>
        </button>
        <button
          ref={nextRef}
          aria-label="Next"
          className="cursor-pointer p-[12px]"
        >
         <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="text-[#323232]"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"></path></svg>
        </button>
      </div>
    </div>
  );
}
