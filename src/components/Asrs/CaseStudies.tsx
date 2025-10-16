"use client";

import Image from "next/image";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Automobile (Tractor Manufacturing Company)",
    tag: "Automobile",
    desc: "Multi Deep Shuttle ASRS offers an automated storage solution to deliver and stack the products between the different pallet levels.",
    img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
  },
  {
    id: 2,
    title: "Pharma Cold Storage",
    tag: "Pharmaceutical",
    desc: "ASRS ensures consistent cold storage with automated precision handling.",
    img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
  },
  {
    id: 3,
    title: "Retail Distribution",
    tag: "Retail",
    desc: "High-density storage for retail distribution with faster throughput.",
    img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
  },
  {
    id: 4,
    title: "E-commerce Fulfillment",
    tag: "E-commerce",
    desc: "Automated picking and order fulfillment at scale.",
    img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
  },
  {
    id: 5,
    title: "Food & Beverage",
    tag: "F&B",
    desc: "Temperature-controlled automated storage for food & beverages.",
    img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
  },
];


export default function CaseStudies() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // GSAP Fade + Scale + Blur Effect
  const handleSlideTransition = () => {
    if (!swiperRef.current) return;
    const slides = swiperRef.current.slides;

    slides.forEach((slide: HTMLElement, i: number) => {
      if (i === swiperRef.current.activeIndex) {
        // Incoming slide
        gsap.to(slide, {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
        });
      } else {
        // Outgoing slides
        gsap.to(slide, {
          opacity: 0,
          scale: 0.95,
          filter: "blur(2px)",
          duration: 0.8,
          ease: "power3.out",
        });
      }
    });
  };

  return (
    <section className="bg-[#fff] relative py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] rounded-[40px] overflow-hidden">
      <div className="w-[90%] mx-auto relative z-[2]">
        {/* Heading */}
        <div className="w-full sm:w-[90%] md:w-[80%] 2xl:w-[70%] mb-[40px]">
          <h2 className="text-[#232323] mb-4 sm:mb-6 text-left">
            - Why Choose Craftsman ASRS? -
          </h2>
          <h3 className="text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.4px] mb-0 text-[#000] text-left w-full sm:w-[70%] md:w-[80%] lg:w-full">
            <span className="bg-gradient-to-r from-[#232323] to-[#0086A6] bg-clip-text text-transparent tracking-[-2px]">
              Hear what our customers say <br className="hidden lg:block" /> about our solutions
            </span>
          </h3>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            speed={800}
            spaceBetween={30}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              handleSlideTransition(); // initial animation
              swiper.on("slideChange", () => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
                handleSlideTransition();
              });
            }}
            className="case-studies-swiper"
            grabCursor
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="opacity-0 scale-[0.95] blur-[2px]">
                <div className="min-w-full flex items-center justify-center p-[5px]">
                  <div className="grid grid-cols-[100%] lg:grid-cols-[50%_45%] justify-between gap-[20px] sm:gap-[30px] md:gap-[40px] border border-[#C6C6C6] p-[10px] sm:p-[15px] rounded-[35px] max-w-[100%] mx-auto bg-white shadow-md">
                    <div>
                      <Image
                        src={slide.img}
                        alt={slide.title}
                        className="w-full h-[200px] sm:h-[330px] 2xl:h-[430px] rounded-[25px] object-cover object-center"
                        width={600}
                        height={400}
                        priority
                      />
                    </div>
                    <div className="flex flex-col justify-between gap-[30px] my-[10px] mx-[10px]">
                      <div className="w-[95%] sm:w-[80%]">
                        <p className="bg-[#9cddec66] text-[#0F95B5] px-[12px] py-[2px] rounded-[50px] w-fit text-[13px] sm:text-[16px]">
                          {slide.tag}
                        </p>
                        <h3 className="line-clamp-2 sm:line-clamp-3 text-[19px] leading-[24px] md:text-[22px] md:leading-[28px] lg:text-[26px] lg:leading-[32px] font-[500] tracking-[-0.03em] my-[15px] text-[#232323]">
                          {slide.title}
                        </h3>
                        <p className="line-clamp-2 sm:line-clamp-3 text-[#232323]">
                          {slide.desc}
                        </p>
                      </div>
                      <div>
                        <Link
                          href="#"
                          className="mt-[40px] md:mt-[70px] relative inline-flex items-center px-[2px] py-[2px] rounded-[50px] bg-gradient-to-r from-[#0087A7] via-[#0087A7] to-[#0087A7] bg-[length:300%_100%] animate-gradient hover:shadow-lg active:translate-y-0 transition-all duration-400 ease-out group"
                        >
                          <span className="relative flex items-center justify-center w-full h-full rounded-[50px] bg-white font-normal hover:bg-gray-50 transition-all duration-300 ease-out pl-[15px] md:pl-[25px] pr-[10px] md:pr-[20px] py-[6px] md:py-[8px] text-[#0087A7] z-10 text-[15px]">
                            View Casestudy
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 ml-2 transition-transform duration-300 ease-out"
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className="absolute bottom-[-45px] md:bottom-[-60px] right-[20px] sm:right-[30px] z-[50] flex gap-[10px]">
            {/* Prev */}
            <button
              ref={prevRef}
              disabled={isBeginning}
              className={`custom-prev cursor-pointer w-[40px] h-[40px] md:w-[50px] md:h-[50px] p-[8px] md:p-[12px] rounded-[50px] shadow-md transition-all duration-300 ${
                isBeginning
                  ? "bg-[#ccc] opacity-40 cursor-default"
                  : "bg-[#dbdbdb] hover:bg-[#dbdbdb] hover:text-[#006a83]"
              }`}
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="text-current"
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

            {/* Next */}
            <button
              ref={nextRef}
              className="custom-next cursor-pointer w-[40px] h-[40px] md:w-[50px] md:h-[50px] p-[8px] md:p-[12px] rounded-[50px] shadow-md bg-[#dbdbdb] hover:bg-[#dbdbdb] hover:text-[#006a83] transition-all duration-300"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="text-current"
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
