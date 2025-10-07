'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import type { NavigationOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ASSET_PREFIX } from '../../../config';

const slides = [
  {
    id: 1,
    image: `${ASSET_PREFIX}/images/whyus-banner.webp`,
    title: 'Company Logo1',
    text: `Craftsman Storage systems, a Division of Craftsman Automation Limited provides efficient storage solutions based on your requirement and suitability. Craftsman Storage systems, a Division of Craftsman Automation Limited provides efficient storage solutions based on your requirement and suitability.`,
  },
  {
    id: 2,
    image: `${ASSET_PREFIX}/images/whyus-banner1.webp`,
    title: 'Company Logo2',
    text: `Craftsman systems, a Division of Craftsman Automation Limited provides efficient storage solutions based on your requirement and suitability. Craftsman Storage systems, a Division of Craftsman Automation Limited provides efficient storage solutions based on your requirement and suitability.`,
  },
];

export default function Casestudies() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      {/* Header */}
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end gap-[30px] md:gap-0">
        <div>
          <h2 className="text-[#232323] mb-4 sm:mb-6 text-left">- Case Studies -</h2>
          <h3 className="text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.4px] mb-0 text-[#000] w-full sm:w-[70%] md:w-[80%] lg:w-full">
            <span className="bg-gradient-to-r from-[#232323] to-[#0086A6] bg-clip-text text-transparent tracking-[-2px]">
              Widest range of <br className="hidden lg:block" />
              customised solutions
            </span>
          </h3>
        </div>

        <div className="flex justify-end w-full lg:w-auto">
          <Link
            href=""
            className="relative inline-flex items-center px-[2px] py-[2px] rounded-[50px] bg-gradient-to-r from-[#0087A7] via-[#FF8400] to-[#0087A7] bg-[length:300%_100%] animate-gradient shadow-lg hover:shadow-orange-500/15 active:translate-y-0 transition-all duration-400 ease-out group"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[50px]">
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 ease-out" />
            </div>
            <span className="relative flex items-center justify-center w-full h-full rounded-[50px] bg-white font-normal hover:bg-gray-50 transition-all duration-300 ease-out pl-[23px] pr-[13px] py-[6px] text-[#37384D] text-sm md:text-base z-10">
              View all
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
        </div>
      </div>

      {/* Swiper */}
      <div className="w-[90%] md:w-[80%] mx-auto mt-[40px] md:mt-[60px]">
        <div className="relative w-full h-[450px] sm:h-[350px] md:h-[500px] rounded-[40px] overflow-hidden">
          <Swiper
            modules={[Autoplay, EffectFade, Navigation]}
            effect="fade"
            speed={1000}
            autoplay={{ delay: 100, disableOnInteraction: false }}
            loop
            // Attach navigation after refs exist
            onInit={(swiper) => {
  if (prevRef.current && nextRef.current) {
    const nav = swiper.params.navigation as NavigationOptions;
    nav.prevEl = prevRef.current;
    nav.nextEl = nextRef.current;
    swiper.navigation.init();
    swiper.navigation.update();
  }
}}
            className="h-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full h-full flex items-end">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0087a7]/80 md:bg-[#0087a7]/15" />
                  <div className="absolute left-[0] sm:left-[25px] bottom-auto top-auto mb-[0] md:mb-[30px] xl:mb-[25px] max-w-lg">
                    <div className="md:bg-[#198CB3] rounded-[25px] px-[25px] md:px-[65px] py-[30px] md:py-[40px] pb-[40px] md:pb-[60px] text-white">
                      <div className="flex gap-[15px] items-center mb-[15px]">
                        <Image
                          src={`${ASSET_PREFIX}/images/icons/ctstar.svg`}
                          alt={slide.title}
                          width={24}
                          height={24}
                          priority
                        />
                        <h2 className="text-[20px] leading-[26px] font-normal">{slide.title}</h2>
                      </div>
                      <p className="leading-[24px] text-[16px] font-extralight">{slide.text}</p>
                      <div className="flex justify-start mt-[25px] sm:mt-[40px]">
                       <Link href="" className="relative inline-flex items-center px-[2px] py-[2px] rounded-[50px] bg-gradient-to-r from-[#0087A7] via-[#FF8400] to-[#0087A7] bg-[length:300%_100%] animate-gradient shadow-lg   hover:shadow-orange-500/15 active:translate-y-0   transition-all duration-400 ease-out group">
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

                    {/* Custom Navigation */}
                    <div className="absolute bottom-[35px] md:bottom-[55px] right-[45px] flex gap-4 z-10">
                      <button
                        ref={prevRef}
                        className="w-[34px] xl:w-[44px] h-[34px] xl:h-[44px] p-[5px] xl:p-3 rounded-full cursor-pointer transition flex items-center justify-center
                         hover:bg-[#f1f1f1] group"
                        aria-label="Previous slide"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white group-hover:text-[#232323]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        ref={nextRef}
                        className="w-[34px] xl:w-[44px] h-[34px] xl:h-[44px] p-[5px] xl:p-3 rounded-full cursor-pointer transition flex items-center hover:bg-[#f1f1f1] justify-center group "
                        aria-label="Next slide"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white group-hover:text-[#232323]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
