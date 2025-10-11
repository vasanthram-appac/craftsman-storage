"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../config";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NewsEventsSlider from "../home/NewsEvents";
import RecentEvents from "./RecentEvents";

gsap.registerPlugin(ScrollTrigger);

export default function DetailPage() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const popupImageRef = useRef<HTMLImageElement | null>(null);

  const [popupSrc, setPopupSrc] = useState<string | null>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    // Split text into words (preserve spaces)
    const words = heading.textContent?.split(" ") || [];
    heading.innerHTML = words
      .map(
        (word) => `
        <span class="inline-block overflow-hidden relative align-baseline">
          <span class="word-inner inline-block relative">
            <span class="text-[24px] sm:text-[26px] md:text-[30px] 2xl:text-[36px] leading-[30px] sm:leading-[32px] md:leading-[36px] 2xl:leading-[42px] tracking-[-0.03em] font-[300]  text-[#7a7a7a]">${word}&nbsp;</span>
            <span class="text-fill absolute top-0 left-0 text-[#000] clip-hidden">${word}&nbsp;</span>
          </span>
        </span>`
      )
      .join("");

    const fills = heading.querySelectorAll<HTMLElement>(".text-fill");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heading,
        start: "top 80%",
        end: "bottom 40%",
        scrub: true,
      },
    });

    fills.forEach((el) => {
      tl.fromTo(
        el,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 9, ease: "power4.out" },
        "+=0"
      );
    });

    // Main image zoom
    const getScale = () => {
        const width = window.innerWidth;
        if (width >= 1350) return 1.75; // xl and above
        if (width >= 768) return 1.5;   // md to lg
        return 1.15;                     // sm/mobile
      };


    if (imageRef.current) {
      const img = imageRef.current.querySelector("img");
      if (img) {
        gsap.fromTo(
        img,
        { scale: 1 },
        {
          scale: getScale(),
          ease: "none",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      }
    }

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  // Open popup
  const openPopup = (src: string) => {
    setPopupSrc(src);
    if (popupRef.current && popupImageRef.current) {
      gsap.set(popupRef.current, { display: "flex", opacity: 0 });
      gsap.set(popupImageRef.current, { scale: 0.5 });
      gsap.to(popupRef.current, { opacity: 1, duration: 0.2 });
      gsap.to(popupImageRef.current, { scale: 1, duration: 0.5, ease: "power4.out" });
    }
  };

  // Close popup
  const closePopup = () => {
    if (popupRef.current && popupImageRef.current) {
      gsap.to(popupImageRef.current, {
        scale: 0.5,
        duration: 0.5,
        ease: "power4.in",
      });
      gsap.to(popupRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => setPopupSrc(null),
      });
    }
  };

  return (
    <section className="w-[100%] sm:w-[95%] md:w-[85%] xl:w-[70%] mx-auto relative   ">
      {/* Event Content */}
      <div className="mb-10">

        <h2
          ref={headingRef}
          className="text-[24px] sm:text-[26px] md:text-[30px] 2xl:text-[36px] leading-[30px] sm:leading-[32px] md:leading-[36px] 2xl:leading-[42px] tracking-[-0.03em] font-[300] text-center will-change-transform"
        >
          Craftsman Hosted Rishta Customer Meet in Ahmedabad
        </h2><p className="text-[15px] leading-[24px] text-center text-[#0087a7] rounded-[50px] px-[25px] py-[7px] w-fit mx-auto mt-[10px]">
          19 <sup>th</sup> Sep 2025
        </p>

      </div>

      {/* Event Image */}
      <div
        ref={imageRef}
        className="relative will-change-transform rounded-[40px] mt-[100px] "
      >
        <Image
          src={`${ASSET_PREFIX}/images/whyus-banner.webp`}
          alt="Rishta Customer Meet Ahmedabad"
          width={1840}
          height={871}
          className="w-auto h-[180px] md:h-[250px] lg:h-[350px] mx-auto object-cover transition-transform duration-700 ease-out rounded-[25px] md:rounded-[40px]"
          loading="lazy"
          priority={false}
        />
      </div>
      <div>
        <p className="text-[22px] leading-[30px] tracking-[-0.03em] font-[300] text-[#626262] text-center will-change-transform mt-[150px]"
        >
          Craftsman recently brought together our valued customers in Ahmedabad for the Rishta Customer Meet, a day filled with engaging conversations, collaboration, and building stronger partnerships.
        </p>
      </div>

      {/* Image gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[15px] mt-[50px]">
        {Array(6)
          .fill(`${ASSET_PREFIX}/images/whyus-banner.webp`)
          .map((src, idx) => (
            <div key={idx} onClick={() => openPopup(src)} className="cursor-pointer">
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={1840}
                height={871}
                className="w-auto h-[250px] mx-auto object-cover transition-transform duration-700 ease-out rounded-[20px] hover:scale-105"
                loading="lazy"
                priority={false}
              />
            </div>
          ))}
      </div>

      {/* Popup Overlay */}
      {popupSrc && (
        <div
          ref={popupRef}
          onClick={closePopup}
          className="fixed inset-0 bg-black/50 z-[999] items-center justify-center hidden"
        >
          <img
            ref={popupImageRef}
            src={popupSrc}
            alt="Popup"
            className="max-w-[90%] max-h-[50%] rounded-[30px] shadow-lg pointer-events-none "
          />
        </div>
      )}
      <RecentEvents />
    </section>
  );
}
