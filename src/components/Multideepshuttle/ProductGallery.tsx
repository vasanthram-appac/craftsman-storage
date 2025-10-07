"use client";

import { useRef } from "react";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProductItem {
  id: number;
  title: string;
  image: string;
}

export default function ProductGallery() {
  const products: ProductItem[] = [
    {
      id: 1,
      title: "Pune Plant",
      image: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs.webp`,
    },
    {
      id: 2,
      title: "Roll forming",
      image: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs.webp`,
    },
    {
      id: 3,
      title: "Powder coating",
      image: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs.webp`,
    },
    {
      id: 4,
      title: "Pune Plant",
      image: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs.webp`,
    },
    {
      id: 5,
      title: "Roll forming",
      image: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs.webp`,
    },
    {
      id: 6,
      title: "Powder coating",
      image: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs.webp`,
    },
  ];

  // Swiper refs
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {/* Heading */}
      <div className="w-full md:w-[90%] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-[0] sm:gap-[30px]">
        <div>
          <h2 className="text-[#232323] mb-[15px] md:mb-6">- Product Gallery -</h2>
          <h3 className="text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.4px] text-[#000]">
            <span className="bg-gradient-to-r from-[#232323] to-[#0086A6] bg-clip-text text-transparent">
              Solutions for <br className="hidden lg:block" /> Every Industry
            </span>
          </h3>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-end gap-3 mt-[20px] w-[70%] mr-[0] mx-auto">
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
              className="text-[#323232]"
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

      {/* Swiper section */}
      <div className="relative mt-[30px] sm:mt-[40px] md:mt-[60px]">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true, el: paginationRef.current }}
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: true },
            580: { slidesPerView: 2, centeredSlides: false, spaceBetween: 20 },
            992: { slidesPerView: 3, centeredSlides: false, spaceBetween: 20 },
            1500: { slidesPerView: 3, centeredSlides: false, spaceBetween: 30 },
          }}
          loop={false}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative rounded-[20px] overflow-hidden group">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-[250px] lg:h-[300px] 2xl:h-[350px] object-cover transition duration-300 ease-in-out group-hover:scale-[1.05] rounded-[20px]"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 bg-[#43839fcc] text-[#fff] uppercase px-[40px] py-[7px] text-[15px] tracking-[-0.02em] leading-[22px]">
                  <h4>{item.title}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div ref={paginationRef} className="swiper-pagination mt-4"></div>


      </div>
    </>
  );
}
