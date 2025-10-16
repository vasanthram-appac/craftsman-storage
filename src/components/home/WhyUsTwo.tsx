"use client";

import Image from "next/image";
import { ASSET_PREFIX } from "../../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";

import "swiper/css"; // core styles
import "swiper/css/autoplay";

type WhyUsItem = {
  icon: string;
  title: string;
  description: string;
};

const whyUsData: WhyUsItem[] = [
  {
    icon: "/images/icons/maximized-space-utilization.svg",
    title: "Proven Expertise",
    description: "Backed by years of engineering excellence and automation leadership.",
  },
  {
    icon: "/images/icons/faster-order-fullfilment.svg",
    title: "Customised Solutions",
    description: "Designed to meet unique requirements across industries.",
  },
  {
    icon: "/images/icons/reduced-labor-costs-better-efficiency.svg",
    title: "End-to-End Support ",
    description: "From consultation to installation and after-sales service.",
  },
  {
    icon: "/images/icons/flexibility-scalability.svg",
    title: "Trusted Partner",
    description: "Serving leading industries with consistent quality and performance",
  },
];

export default function WhyUsTwo() {
  return (
    <section
      className="bg-[#00384A] text-white relative py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] overflow-hidden rounded-[40px]"
      aria-labelledby="why-us-heading"
    >
      <div className="w-[90%] mx-auto relative z-[2]">


        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] 2xl:grid-cols-[50%_45%] gap-[0] md:gap-10">
          {/* Heading */}
          <div className="w-[100%] sm:w-[90%] md:w-[80%] 2xl:w-[70%] mb-[0] md:mb-[40px]">
          <h2 className="text-[#fff] mb-4 sm:mb-6 text-left"> - Why Us - </h2>
          <h3 className="text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.4px] mb-0 opacity-100 text-[#000] text-left w-full sm:w-[70%] md:w-[80%] lg:w-full mb-[25px] sm:mb-[35px]">
            <span className="bg-gradient-to-r from-[#04B2BE] to-[#0086A6] bg-clip-text text-transparent tracking-[-2px]">
              Innovating  <br className="hidden lg:block" /> Storage, <br className="hidden lg:block" />Empowering <br className="hidden lg:block" />Businesses </span>
          </h3>
        </div>

          {/* --- Desktop static list --- */}
          <ul
            className="hidden md:grid grid-cols-2 lg:grid-cols-1 gap-[0]"
            role="list"
          >
            {whyUsData.map((item, idx) => (
              <li key={idx} className="flex gap-[30px] lg:gap-[50px] p-[30px] transition duration-300 ease-in-out group items-center
              hover:bg-[linear-gradient(90deg,#01465a_60%,transparent_100%)]
              relative after:absolute after:w-[100%] after:h-[1px] after:content-[''] after:block after:bottom-[-0] after:left-[-0] after:top-auto after:bg-[#dddddd36]">
                <IconBlock item={item} />
              </li>
            ))}
          </ul>

          {/* --- Mobile Swiper slider --- */}
          <div className="md:hidden">
            <Swiper
              modules={[Autoplay, A11y]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop
              spaceBetween={20}
              slidesPerView={1}
              centeredSlides
            >
              {whyUsData.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <li className="flex gap-6 p-4 rounded-xl items-center justify-center">
                    <IconBlock item={item} />
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full z-[0]">

          <Image
          src={`${ASSET_PREFIX}/images/icons/whyus-shape.svg`}
          alt=""
          width={65}
          height={65}
          className="w-full h-full transition-transform duration-500 object-cover opacity-[0.3]"
          loading="lazy"
        />
        </div>
    </section>
  );
}

/** Small sub-component to avoid repetition */
function IconBlock({ item }: { item: WhyUsItem }) {
  return (
    <>
      <div className="shrink-0">
        <Image
          src={`${ASSET_PREFIX}${item.icon}`}
          alt={item.title}
          width={65}
          height={65}
          className="w-[50px] 2xl:w-[65px] h-[50px] 2xl:h-[65px] transition-transform duration-500 group-hover:scale-[1.05] "
          loading="lazy"
        />
      </div>
      <div className="w-[70%]">
        <h4 className="text-[18px] leading-[24px] sm:text-[20px] sm:leading-[26px] xl:text-[22px] xl:leading-[28px] 2xl:text-[24px] 2xl:leading-[30px] text-[#232323] font-[500] tracking-[-0.03em] text-[#fff] mb-[12px]">{item.title}</h4>
        <p className="font-light text-[#fffc]">{item.description}</p>
      </div>
    </>
  );
}
