"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { SwiperRef, Swiper as SwiperType } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
gsap.registerPlugin(ScrollTrigger);

interface PerformItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function AsrsPerform() {
  const swiperRef = useRef<SwiperRef | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const benefitsData: PerformItem[] = [
    { id: 1, title: "Pallet Entry", description: "Pallets arrive at the input station or conveyor system.", image: `${ASSET_PREFIX}/images/icons/pallet-entry.svg` },
    { id: 2, title: "Shuttle Pick-Up", description: "An automated shuttle picks up the pallet from the entry point.", image: `${ASSET_PREFIX}/images/icons/shuttle-pick-up.svg` },
    { id: 3, title: "Horizontal Movement", description: "The shuttle moves along the storage lane to the designated location.", image: `${ASSET_PREFIX}/images/icons/horizontal-movement.svg` },
    { id: 4, title: "Deep Storage Placement", description: "The pallet is placed in the deepest available position within the lane.", image: `${ASSET_PREFIX}/images/icons/deep-storage-placement.svg` },
    { id: 5, title: "Vertical Transfer", description: "A lifter/elevator moves the shuttle or pallet to the correct rack level.", image: `${ASSET_PREFIX}/images/icons/vertical-transfer-perform.svg` },
    { id: 6, title: "Pallet Entry", description: "Pallets arrive at the input station or conveyor system.", image: `${ASSET_PREFIX}/images/icons/pallet-entry.svg` },
    { id: 7, title: "Shuttle Pick-Up", description: "An automated shuttle picks up the pallet from the entry point.", image: `${ASSET_PREFIX}/images/icons/shuttle-pick-up.svg` },
    { id: 8, title: "Horizontal Movement", description: "The shuttle moves along the storage lane to the designated location.", image: `${ASSET_PREFIX}/images/icons/horizontal-movement.svg` },
  ];

  useEffect(() => {
    const swiperInstance: SwiperClass | undefined = swiperRef.current?.swiper;
    if (!sectionRef.current || !swiperInstance) return;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () => `+=${sectionRef.current!.offsetHeight * benefitsData.length}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalSlides = benefitsData.length - 1;
        const slideIndex = Math.round(progress * totalSlides);

        if (swiperInstance.activeIndex !== slideIndex) {
          swiperInstance.slideTo(slideIndex);
        }

        if (progressRef.current) {
          progressRef.current.style.width = `${progress * 100}%`;
        }
      },
    });

    return () => {
      st.kill();
    };
  }, [benefitsData.length]);

  return (
    <section ref={sectionRef} className="relative w-full h-screen flex items-center justify-center">
      <div className="w-full md:w-[90%] mx-auto flex flex-col justify-center h-full">
        {/* Heading */}
        <div>
          <h2 className="text-[#232323] mb-4 sm:mb-6 text-left">
            - How Multi Deep Shuttle ASRS Perform -
          </h2>
        </div>

        {/* Info Grid */}
        <div className="mb-[20px] md:mb-[40px] grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          <div>
            <h3 className="text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.4px] text-[#000]">
              <span className="bg-gradient-to-r from-[#232323] to-[#0086A6] bg-clip-text text-transparent tracking-[-2px]">
                Craftsman&apos;s Automated <br className="hidden lg:block" />
                Storage & Retrieval <br className="hidden lg:block" /> Systems (ASRS)
              </span>
            </h3>
          </div>
          <div>
            <p className="text-[#232323] text-[16px] sm:text-[18px] md:leading-[28px] 2xl:text-[20px] tracking-[-0.03em]">
              are designed to transform warehouses into high-efficiency, space-optimized, and error-free operations. By combining advanced machinery with smart software, our ASRS solutions streamline storage, retrieval, and inventory management for diverse industries.
            </p>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.2}
          allowTouchMove={true}
          speed={600}
          breakpoints={{
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.2 },
            992: { slidesPerView: 2.8 },
            1200: { slidesPerView: 3.5 },
            1500: { slidesPerView: 4.5 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (prevRef.current && nextRef.current && swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          className="relative flex items-center min-h-[25vh] !pb-[10px] w-[100%]"
        >
          {benefitsData.map(({ id, title, description, image }) => (
            <SwiperSlide key={id}>
              <div className="p-6 sm:p-10 bg-white rounded-2xl shadow-md h-full flex flex-col justify-between min-h-[350px]">
                <div className="flex justify-start">
                  <Image src={image} alt={title} width={65} height={65} className="w-[55px] h-[55px] lg:w-[65px] lg:h-[65px] object-contain" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-[#232323]">{title}</h4>
                  <p className="text-[#555] leading-relaxed">{description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Progress Bar + Navigation */}
        <div className="flex justify-between gap-[50px] items-center mt-6">
          <div className="relative w-full h-[2px] bg-gray-200 rounded-full overflow-hidden">
            <div ref={progressRef} className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#232323] to-[#0086A6] transition-all duration-300 ease-linear"></div>
          </div>

          <div className="flex justify-end gap-3">
            <button ref={prevRef} className="custom-prev cursor-pointer p-[12px] hover:bg-[#fff] rounded-[15px]" aria-label="Previous">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="text-[#232323]">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12h-15m0 0l5.625-6M4.5 12l5.625 6" />
              </svg>
            </button>
            <button ref={nextRef} className="custom-next cursor-pointer p-[12px] hover:bg-[#fff] rounded-[15px]" aria-label="Next">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="text-[#232323]">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
