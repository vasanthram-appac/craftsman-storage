'use client';

import { useState, useRef } from 'react';


import Link from 'next/link';
import Image from 'next/image';
import { ASSET_PREFIX } from '../../../config';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import 'swiper/css';
import 'swiper/css/navigation';
import type { Swiper as SwiperClass } from 'swiper';
import type { NavigationOptions } from 'swiper/types';

type Post = {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
};

const posts: Post[] = [
  {
    id: 1,
    title:
      'An American corporation specializing in the production of agricultural machinery, heavy...',
    date: '27th Aug 2025',
    category: 'Solutions',
    image: `${ASSET_PREFIX}/images/blog-placeholder.webp`,
  },
  {
    id: 2,
    title:
      'New innovations in precision farming technology shaping the future of agriculture...',
    date: '28th Aug 2025',
    category: 'Technology',
    image: `${ASSET_PREFIX}/images/blog-placeholder.webp`,
  },
  {
    id: 3,
    title:
      'How sustainable machinery design is reducing environmental impact across the globe...',
    date: '30th Aug 2025',
    category: 'Environment',
    image: `${ASSET_PREFIX}/images/blog-placeholder.webp`,
  },
];

export default function Blog() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
const swiperRef = useRef<SwiperClass | null>(null);
const [activeIndex, setActiveIndex] = useState(0);

  const Card = ({ post }: { post: Post }) => (
    <div className="bg-white rounded-[25px] overflow-hidden group relative hover:shadow-[0_0_20px_0_#0087a73b] transition duration-300 ease-in-out">
      <div className="relative">
        <Image
          src={post.image}
          alt={post.title}
          width={447}
          height={376}
          className="w-full h-[250px] 2xl:h-[300px] object-cover object-bottom rounded-[25px_25px_35px_0] transform transition-transform duration-500 "
          priority
        />
        <div className="absolute bottom-[13px] 2xl:bottom-[20px] z-[2] grid grid-cols-2 items-center justify-center w-[100%]">
          <div className="px-[15px] sm:px-[25px] flex justify-center">
            <p className="text-[16px] text-[#616161] ">{post.date}</p>
          </div>
          <div className='flex justify-center'>
          <div className="px-[10px] py-[2px] bg-[#f1f1f1] rounded-[5px]">
            <p className="text-[16px] text-[#616161]">{post.category}</p>
          </div></div>
        </div>
      </div>
      <div className="px-[25px] pt-[20px] pb-[30px]">
        <h3 className="text-[#232323] mb-[25px] text-[18px] leading-[26px] tracking-[-0.02em] font-light line-clamp-2 group-hover:text-[#0087a7]">
          {post.title}
        </h3>
        <Link href="#" className="text-[#0087A7] text-[16px] group-hover:text-[#232323]">
          Know More
        </Link>
      </div>
      <Link href="#" className="absolute inset-0 w-full h-full z-10 cursor-pointer "></Link>
    </div>
  );

  return (
    <div className="w-[90%] md:w-[80%] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end gap-[20px] sm:gap-[30px] md:gap-0">
        <div>
          <h2 className="text-[#232323] mb-4 sm:mb-6 text-left">
            - Blogs -
          </h2>
          <h3 className="text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.4px] mb-0 opacity-100 text-[#000] text-left w-full sm:w-[70%] md:w-[80%] lg:w-full">
            <span className="bg-gradient-to-r from-[#232323] to-[#0086A6] bg-clip-text text-transparent tracking-[-2px]">
              Widest range of <br className="hidden lg:block" /> Customized
              Solutions
            </span>
          </h3>
        </div>
        <div className='flex justify-end w-full lg:w-auto'>
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

      {/* Desktop grid */}
      <div className="hidden xl:grid grid-cols-3 gap-[25px] mt-[60px]">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>

      {/* Mobile/Tablet Swiper */}
      <div className="xl:hidden mt-[40px] sm:mt-[60px] relative">
        <Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={20}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // track active slide
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }} // let Swiper generate pagination
  onBeforeInit={(swiper) => {
    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
      const nav = swiper.params.navigation as NavigationOptions;
      nav.prevEl = prevRef.current;
      nav.nextEl = nextRef.current;
    }
  }}
  breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 16 },
    640: { slidesPerView: 1.5, spaceBetween: 18 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1280: { slidesPerView: 3, spaceBetween: 24 },
  }}
>
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <Card post={post} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
<div className="flex justify-center mt-8 gap-2">
  {posts.map((_, idx) => (
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
        <div className="flex justify-end gap-3 mt-[15px]">
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
    </div>
  );
}
