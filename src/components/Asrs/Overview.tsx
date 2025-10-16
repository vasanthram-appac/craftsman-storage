'use client';

import { useRef, useState, useEffect } from "react";
import Image from 'next/image';
import { ASSET_PREFIX } from '../../../config';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import gsap from "gsap";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface BenefitItem {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

// Button component
const Btn = ({ label, href }: { label: string; href: string }) => (
  <Link
    href={href || "#"}
    className="relative inline-flex items-center px-[2px] py-[2px] rounded-[50px]
               bg-gradient-to-r from-[#0087A7] via-[#FF8400] to-[#0087A7]
               bg-[length:300%_100%] animate-gradient hover:shadow-lg
               hover:shadow-orange-500/15 active:translate-y-0 transition-all
               duration-400 ease-out group"
  >
    <span className="relative flex items-center justify-center w-full h-full rounded-[50px]
                    bg-white font-normal hover:bg-gray-50 transition-all duration-300
                    ease-out pl-[15px] sm:pl-[20px] pr-[7px] sm:pr-[15px] py-[4px] sm:py-[6px] text-[#37384D] z-10 text-[15px]">
      {label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 ml-2 transition-transform duration-300 ease-out"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </span>
  </Link>
);

// Benefits data
const benefitsData: BenefitItem[] = [
  {
    id: 1,
    title: "Pallet ASRS",
    description:
      "Multi Deep Shuttle ASRS offers an automated storage solution to deliver and stack the products between the different pallet levels.",
    image: `${ASSET_PREFIX}/images/pallet-asrs-crane.webp`,
    href: "/asrs/pallet-asrs-crane",
  },
  {
    id: 2,
    title: "Miniload ASRS",
    description:
      "Multi Deep Shuttle ASRS offers an automated storage solution to deliver and stack the products between the different pallet levels.",
    image: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs.webp`,
    href: "/asrs/multi-deep-shuttle",
  },
  {
    id: 3,
    title: "Warehouse Automation",
    description:
      "Our Pallet shuttle systems are incorporated with Stacker Cranes for higher-density storage racking.",
    image: `${ASSET_PREFIX}/images/crane-shuttle-asrs.webp`,
    href: "/asrs/crane-shuttle",
  },
  {
    id: 4,
    title: "Cold Storage Automation",
    description:
      "Multi Deep Shuttle ASRS offers an automated storage solution to deliver and stack the products between the different pallet levels.",
    image: `${ASSET_PREFIX}/images/pallet-asrs-crane.webp`,
    href: "/asrs/pallet-asrs-crane",
  },
  {
    id: 5,
    title: "Autonomous Mobile Robots (AMR)",
    description:
      "Multi Deep Shuttle ASRS offers an automated storage solution to deliver and stack the products between the different pallet levels.",
    image: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs.webp`,
    href: "/asrs/multi-deep-shuttle",
  },
  {
    id: 6,
    title: "VStore Calculator",
    description:
      "Our Pallet shuttle systems are incorporated with Stacker Cranes for higher-density storage racking.",
    image: `${ASSET_PREFIX}/images/crane-shuttle-asrs.webp`,
    href: "/asrs/crane-shuttle",
  },
];

export default function Overview() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
    const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const paginationRef = useRef<HTMLDivElement | null>(null);
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
          opacity: 1,
          scale: 0.95,
          filter: "blur(0)",
          duration: 0.8,
          ease: "power3.out",
        });
      }
    });
};
  return (
    <>
      <div className="w-[90%] max-w-[105rem] mx-auto">
        <div className="w-full md:w-[80%] mx-auto">
          <h2 className="text-[#232323] mb-4 sm:mb-6 text-left">
            - What is ASRS? -
          </h2>

          {/* Header text */}
          <div className="mb-[20px] md:mb-[100px] grid grid-cols-1 md:grid-cols-2 justify-between gap-[30px]">
            <div>
              <h3 className="text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.4px] text-[#000]">
                <span className="bg-gradient-to-r from-[#232323] to-[#0086A6] bg-clip-text text-transparent tracking-[-2px]">
                  An Automated Storage  <br className="hidden lg:block" /> & Retrieval System  <br className="hidden lg:block" /> (ASRS)
                </span>
              </h3>
            </div>
            <div>
              <p className="text-[#232323] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[26px] tracking-[-0.03em]">
                is a high-tech, computer-controlled solution designed to automatically store and retrieve goods with speed and precision. Using equipment such as cranes, shuttles, conveyors, and vertical lifts, ASRS maximizes vertical space, reduces errors, improves safety, and cuts labor costs. It enables real-time inventory tracking, faster order fulfillment, and efficient use of warehouse space. Scalable and flexible, ASRS is widely used across industries like e-commerce, pharmaceuticals, cold storage, and manufacturing to optimize operations, boost productivity, and ensure accuracy in modern supply chains.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper section */}
      <div className="relative mt-[40px] sm:mt-[60px] pl-[3%]">
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
  handleSlideTransition(); // animate all on load
  swiper.on("slideChange", () => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    handleSlideTransition(); // animate all on slide change
  });
}}

          breakpoints={{
            0: { slidesPerView: 1.1, centeredSlides: true },
            480: { slidesPerView: 1.7, centeredSlides: false, spaceBetween: 20 },
            600: { slidesPerView: 1.7, centeredSlides: false, spaceBetween: 20 },
            992: { slidesPerView: 2.5, centeredSlides: false, spaceBetween: 20 },
            1500: { slidesPerView: 3.5, centeredSlides: false, spaceBetween: 30 },
          }}
          pagination={{ clickable: true, el: paginationRef.current }}

        >
          {benefitsData.map((item) => (
            <SwiperSlide key={item.id}>
              <BenefitCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="absolute bottom-[-45px] md:bottom-[-70px] w-auto right-[5%] md:right-auto md:w-[82%] mx-auto justify-end z-[50] flex gap-[10px]">
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
    </>
  );
}

function BenefitCard({ title, description, image, href }: BenefitItem) {
  return (
    <div className="group bg-[#fff] rounded-[15px] md:rounded-[25px] border border-[#e1e1e1] hover:shadow-lg hover:shadow-orange-500/10 transition duration-300">
      <div className="mb-[25px] overflow-hidden flex rounded-[15px] md:rounded-[25px]">
        <Image
          src={image}
          alt={title}
          width={65}
          height={65}
          className="w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] 2xl:h-[400px] object-cover transition duration-300 ease-in-out group-hover:scale-[1.05] rounded-[15px] md:rounded-[25px]"
          loading="lazy"
        />
      </div>
      <div className='px-[25px] md:px-[35px] pb-[35px]'>
        <h4 className="text-[20px] leading-[26px] mb-[15px] mt-[15px] font-semibold text-[#232323]">{title}</h4>
        <p className="leading-[26px] line-clamp-2 text-[#232323]">{description}</p>
        <div className="mt-[25px]">
          <Btn label="Learn More" href={href} />
        </div>
      </div>
    </div>
  );
}
