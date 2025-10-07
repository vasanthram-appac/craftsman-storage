'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ASSET_PREFIX } from '../../../config';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
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

  const paginationRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="w-[90%] max-w-[105rem] mx-auto">
        <div className="w-full md:w-[80%] mx-auto">
          <h2 className="text-[#232323] mb-4 sm:mb-6 text-left">
            - What is ASRS? -
          </h2>

          {/* Header text */}
          <div className="mb-[20px] md:mb-[40px] grid grid-cols-1 md:grid-cols-2 justify-between gap-[30px]">
            <div>
              <h3 className="text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.4px] text-[#000]">
                <span className="bg-gradient-to-r from-[#232323] to-[#0086A6] bg-clip-text text-transparent tracking-[-2px]">
                  An Automated Storage  <br className="hidden lg:block" /> & Retrieval System  <br className="hidden lg:block" /> (ASRS)
                </span>
              </h3>
            </div>
            <div>
              <p className="text-[#232323] text-[16px] sm:text-[18px] md:leading-[28px] 2xl:text-[20px] tracking-[-0.03em]">
                is a high-tech, computer-controlled solution designed to automatically store and retrieve goods with speed and precision. Using equipment such as cranes, shuttles, conveyors, and vertical lifts, ASRS maximizes vertical space, reduces errors, improves safety, and cuts labor costs. It enables real-time inventory tracking, faster order fulfillment, and efficient use of warehouse space. Scalable and flexible, ASRS is widely used across industries like e-commerce, pharmaceuticals, cold storage, and manufacturing to optimize operations, boost productivity, and ensure accuracy in modern supply chains.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper section */}
      <div className="relative mt-[60px] pl-[3%]">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1.1, centeredSlides: true },
            480: { slidesPerView: 1.7, centeredSlides: false, spaceBetween: 20 },
            600: { slidesPerView: 1.7, centeredSlides: false, spaceBetween: 20 },
            992: { slidesPerView: 2.5, centeredSlides: false, spaceBetween: 20 },
            1500: { slidesPerView: 3.5, centeredSlides: false, spaceBetween: 30 },
          }}
          loop={false}
          pagination={{ clickable: true, el: paginationRef.current }}

        >
          {benefitsData.map((item) => (
            <SwiperSlide key={item.id}>
              <BenefitCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="flex justify-end gap-3 mt-[20px] w-[70%] mx-auto">
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

function BenefitCard({ title, description, image, href }: BenefitItem) {
  return (
    <div className="group bg-[#fff] rounded-[15px] md:rounded-[25px]">
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
