'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { ASSET_PREFIX } from '../../../config';

// Swiper core & modules
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
}

const benefitsData: BenefitItem[] = [
  {
    id: 1,
    title: "Maximized Space Utilization",
    description:
      "Craftsman ASRS systems allow you to store large inventory volumes using vertical space, reducing the need for wide aisles and achieving higher density.",
    image: `${ASSET_PREFIX}/images/icons/maximized-space-utilization.svg`,
  },
  {
    id: 2,
    title: "Small Footprint, Big Capacity",
    description:
      "Our ASRS Products have a small ground footprint but can hold a lot of items. This is especially useful in space-constrained warehouses or urban locations.",
    image: `${ASSET_PREFIX}/images/icons/small-footprint-big-capacity.svg`,
  },
  {
    id: 3,
    title: "Reduced Labor Costs & Better Efficiency",
    description:
      "Automation means fewer manual handling operations; goods-to-person systems, shuttle systems, etc., reduce the time workers spend walking, searching, lifting.",
    image: `${ASSET_PREFIX}/images/icons/reduced-labor-costs-better-efficiency.svg`,
  },
  {
    id: 4,
    title: "Higher Throughput / Faster Retrieval",
    description:
      "ASRS from Craftsman enables quick and precise storage and retrieval, reducing delays. Systems are designed for fast pallet in/out, shuttle-based movements, etc.",
    image: `${ASSET_PREFIX}/images/icons/higher-throughput-faster-retrieval.svg`,
  },
  {
    id: 5,
    title: "Flexibility & Scalability",
    description:
      "Craftsman offers modular and customizable systems, so you can scale up or adapt depending on your item sizes, SKU counts, or change of business need.",
    image: `${ASSET_PREFIX}/images/icons/flexibility-scalability.svg`,
  },
  {
    id: 6,
    title: "Made in Coimbatore, Customizable",
    description:
      "ASRS systems are fully manufactured in-house, meaning better control on quality and potential for customization, reduced lead times.",
    image: `${ASSET_PREFIX}/images/icons/why-us-blue.svg`,
  },
];

export default function Benefits() {
  const [isMobile, setIsMobile] = useState(false);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full md:w-[80%] mx-auto">
    <h2 className="text-[#232323] mb-4 sm:mb-6 text-left">
        - Benefits & Features of using ASRS -
      </h2>

      {/* Header text */}
      <div className="mb-[20px] md:mb-[40px] grid grid-cols-1 md:grid-cols-2 justify-between gap-[30px]">
        <div>
          <h3 className="text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.4px] text-[#000]">
            <span className="bg-gradient-to-r from-[#232323] to-[#0086A6] bg-clip-text text-transparent tracking-[-2px]">
              Craftsman&apos;s Automated <br className="hidden lg:block" />
              Storage & Retrieval <br className="hidden lg:block" /> Systems
              (ASRS)
            </span>
          </h3>
        </div>
        <div>
          <p className="text-[#232323] text-[16px] sm:text-[18px] md:leading-[28px] 2xl:text-[20px] tracking-[-0.03em]">
            are designed to transform warehouses into high-efficiency,
            space-optimized, and error-free operations. By combining advanced
            machinery with smart software, our ASRS solutions streamline storage,
            retrieval, and inventory management for diverse industries.
          </p>
        </div>
      </div>

      {!isMobile && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] 2xl:gap-[50px] mt-[100px]">
          {benefitsData.map((item) => (
            <BenefitCard key={item.id} {...item} />
          ))}
        </div>
      )}

      {isMobile && (
        <div className="relative mt-[60px]">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            spaceBetween={20}
            loop={false}
            pagination={{
              clickable: true,
              el: paginationRef.current!, // ✅ pass the element itself
            }}
             navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}

          >
            {benefitsData.map((item) => (
              <SwiperSlide key={item.id}>
                <BenefitCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination + Nav */}
          {/* <div className="flex justify-center mt-[40px] flex-wrap gap-[5px]">
  <div className="custom-pagination !static swiper-pagination-bullets cpage "></div>
</div> */}
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
      )}
    </div>
  );
}

function BenefitCard({ title, description, image }: BenefitItem) {
  return (
    <div className=" p-[25px] group hover:bg-[#fff] rounded-[20px] hover:shadow-lg transition-all duration-300 ease-in-out h-full flex flex-col items-start">
      <div className="mb-[25px]">
        <Image
          src={image}
          alt={title}
          width={65}
          height={65}
          className="w-[45px] h-[45px] lg:w-[55px] lg:h-[55px] 2xl:w-[65px] 2xl:h-[65px] object-contain transition duration-300 ease-in-out group-hover:scale-[1.05]"
          loading="lazy"
        />
      </div>
      <h4 className="text-[20px] leading-[26px] mb-[15px] mt-[15px] font-semibold text-[#232323]">{title}</h4>
      <p className="leading-[26px] text-[#232323]">{description}</p>
    </div>
  );
}
