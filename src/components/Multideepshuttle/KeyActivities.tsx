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
    title: "Automated Storage of Pallets",
    description:
      "Efficiently places pallets multiple-deep in high-density racks.",
    image: `${ASSET_PREFIX}/images/icons/automated-storage-of-pallets.svg`,
  },
  {
    id: 2,
    title: "Automated Retrieval of Pallets",
    description:
      "Picks pallets on demand and delivers them to the designated output point.",
    image: `${ASSET_PREFIX}/images/icons/automated-retrieval-of-pallets.svg`,
  },
  {
    id: 3,
    title: "Horizontal Shuttle Movement",
    description:
      "Moves pallets along storage lanes to reach the correct position.",
    image: `${ASSET_PREFIX}/images/icons/horizontal-shuttle-movement.svg`,
  },
  {
    id: 4,
    title: "Vertical Transfer",
    description:
      "Uses lifters or elevators to move pallets/shuttles between different rack levels.",
    image: `${ASSET_PREFIX}/images/icons/vertical-transfer.svg`,
  },
  {
    id: 5,
    title: "Inventory Tracking",
    description:
      "Continuously updates pallet locations in real-time via Warehouse Management System (WMS) or Shuttle Fleet Management Software (SFMS).",
    image: `${ASSET_PREFIX}/images/icons/inventory-tracking.svg`,
  },
  {
    id: 6,
    title: "Task Coordination",
    description:
      "Manages multiple shuttles simultaneously, optimizing routes and reducing wait times.",
    image: `${ASSET_PREFIX}/images/icons/task-coordination.svg`,
  },
  {
    id: 7,
    title: "Buffer Handling",
    description:
      "Manages pallet flow through buffer conveyors to prevent bottlenecks at entry/exit points.",
    image: `${ASSET_PREFIX}/images/icons/buffer-handling.svg`,
  },
  {
    id: 8,
    title: "Order Fulfillment Support:",
    description:
      "acilitates picking sequences, supporting FIFO or LIFO inventory strategies.",
    image: `${ASSET_PREFIX}/images/icons/order-fulfillment-support.svg`,
  },
  {
    id: 9,
    title: "Error Reduction & Safety",
    description:
      " Minimizes manual handling, reducing human errors and workplace accidents.",
    image: `${ASSET_PREFIX}/images/icons/error-reduction-safety.svg`,
  },
  {
    id: 10,
    title: "Throughput Optimization",
    description:
      "Enhances warehouse efficiency by enabling high-speed, accurate storage and retrieval.",
    image: `${ASSET_PREFIX}/images/icons/throughput-optimization.svg`,
  },
];

export default function KeyActivities() {
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
    <div className=" w-[90%] mx-auto">


      {/* Header text */}
      <div className="mb-[20px] md:mb-[40px] grid grid-cols-1 md:grid-cols-2 justify-between gap-[30px]">
        <div>
            <h2 className="text-[#fff] mb-4 sm:mb-6 text-left">
        - Key Activities -
      </h2>

        </div>
        <div>
          <h3 className="text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.4px] text-[#000]">
            <span className="bg-gradient-to-r from-[#fff] to-[#fff] bg-clip-text text-transparent tracking-[-2px]">
             What are the key activities <br className="hidden lg:block" /> Multideep ASRS Perform
            </span>
          </h3>
        </div>
      </div>

      {!isMobile && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] 2xl:gap-[50px] mt-[30px] md:mt-[50px] 2xl:mt-[70px]">
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
<div className="flex justify-end gap-3 mt-[0] sm:mt-[20px]">
          <button ref={prevRef} className="custom-prev cursor-pointer p-[12px] hover:bg-[#fff] rounded-[15px]" aria-label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="text-[#fff]" >
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12h-15m0 0l5.625-6M4.5 12l5.625 6" />
            </svg>
          </button>
          <button ref={nextRef} className="custom-next cursor-pointer p-[12px] hover:bg-[#fff] rounded-[15px]" aria-label="Next">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="text-[#fff]">
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
    <div className=" p-[10px] sm:p-[25px] group">
      <div className="mb-[25px]">
        <Image
          src={image}
          alt={title}
          width={65}
          height={65}
          className="w-[55px] h-[55px] lg:w-[55px] lg:h-[55px] 2xl:w-[65px] 2xl:h-[65px] object-contain transition duration-300 ease-in-out group-hover:scale-[1.05]"
          loading="lazy"
        />
      </div>
      <h4 className="text-[20px] leading-[26px] mb-[15px] mt-[15px] font-[500] text-[#fff]">{title}</h4>
      <p className="leading-[26px] text-[#fffc]">{description}</p>
    </div>
  );
}
