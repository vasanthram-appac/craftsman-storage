"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect } from "react"; // useLayoutEffect is safer for GSAP
import { ASSET_PREFIX } from "../../../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  useLayoutEffect(() => {
    // kill old triggers on hot reload
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const sections = gsap.utils.toArray<HTMLElement>(".panel");
    const container = document.querySelector(".container") as HTMLElement;

    if (!container || !sections.length) return;

    const totalScrollDistance = () =>
      container.scrollWidth - window.innerWidth;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".wrapper",
        pin: true,
        scrub: 1,
        end: () => "+=" + totalScrollDistance(),
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      className="bg-[#fff] relative py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] rounded-[40px] overflow-hidden"
      aria-labelledby="why-us-heading"
    >
      <div className=" w-[90%] mx-auto relative z-[2]">
        {/* Heading */}
        <div className="w-full sm:w-[90%] md:w-[80%] 2xl:w-[70%] mb-[40px]">
          <h2 className="text-[#232323] mb-4 sm:mb-6 text-left">
            - Why Choose Craftsman ASRS? -
          </h2>
          <h3 className="text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.4px] mb-0 text-[#000] text-left w-full sm:w-[70%] md:w-[80%] lg:w-full">
            <span className="bg-gradient-to-r from-[#232323] to-[#0086A6] bg-clip-text text-transparent tracking-[-2px]">
              Hear what our customers say <br className="hidden lg:block" />{" "}
              about our solutions
            </span>
          </h3>
        </div>

        {/* Horizontal Scroll Wrapper */}
        <div className="wrapper relative w-full h-[100vh] overflow-hidden">
          <div className="container flex h-full">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="panel min-w-full flex items-center justify-center p-6"
              >
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
                        className="relative inline-flex items-center px-[2px] py-[2px] rounded-[50px] bg-gradient-to-r from-[#0087A7] via-[#0087A7] to-[#0087A7] bg-[length:300%_100%] animate-gradient hover:shadow-lg hover:shadow-orange-500/15 active:translate-y-0 transition-all duration-400 ease-out group"
                      >
                        <div className="absolute inset-0 overflow-hidden rounded-[50px]">
                          <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 ease-out" />
                        </div>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
