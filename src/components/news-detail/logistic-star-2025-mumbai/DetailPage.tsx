"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function DetailPage() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const popupImageRef = useRef<HTMLImageElement | null>(null);

  const [popupSrc, setPopupSrc] = useState<string | null>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const galleryImages = [
    `${ASSET_PREFIX}/images/news/cii-institute-of-logistics-star-1-2025.webp`,
    `${ASSET_PREFIX}/images/news/cii-institute-of-logistics-star-2-2025.webp`,
    
  ];

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

        <p className="text-[15px] leading-[24px] text-center text-[#0087a7] rounded-[50px] px-[25px] py-[7px] w-fit mx-auto mt-[10px]">
          12 <sup>th</sup> Sep 2025
        </p>
        <h2
          ref={headingRef}
          className="text-[24px] sm:text-[26px] md:text-[30px] 2xl:text-[36px] leading-[30px] sm:leading-[32px] md:leading-[36px] 2xl:leading-[42px] tracking-[-0.03em] font-[300] text-center will-change-transform"
        >
         Craftsman Storage was delighted to be part of the CII Institute of Logistics STAR 2025 Summit in Mumbai
        </h2>


      </div>

      {/* Event Image */}
      <div
        ref={imageRef}
        className="relative will-change-transform rounded-[40px] mt-[100px] "
      >
        <Image
          src={`${ASSET_PREFIX}/images/news/cii-institute-of-logistics-star-main-2025.webp`}
          alt="CII Institute of Logistics STAR 2025 Summit"
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
          Our Senior VP & Business Head, Mr. Shakti Choube, joined an esteemed panel on "Navigating Robust Technologies for Warehouse Transformation" to share insights on how AI, robotics, and data are shaping the future of warehousing. As India’s warehousing ecosystem evolves, Craftsman continues to contribute toward building smart, scalable, and future-ready supply chains.
        </p>
      </div>

      {/* Image gallery */}
      <h3 className="text-[20px] sm:text-[22px] md:text-[26px] 2xl:text-[32px] leading-[30px] sm:leading-[32px] md:leading-[36px] 2xl:leading-[42px] tracking-[-0.03em] font-[300]  will-change-transform  mt-[30px] md:mt-[50px]">Gallery</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[15px] mt-[30px]">
        {galleryImages.map((src, idx) => (
          <div key={idx} onClick={() => setSelectedImage(src)} className="cursor-pointer">
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

      {/* Popup Modal with Animation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-[9999] flex items-center justify-center cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backgroundColor: "rgba(0,0,0,0.6)", // semi-transparent background
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={() => setSelectedImage(null)} // 👈 close when clicking outside
          >
            {/* Image Container (prevents propagation) */}
            <motion.div
              key="image"
              className="relative max-w-[90vw] max-h-[90vh] cursor-default"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()} // 👈 prevents close when clicking image
            >
              <Image
                src={selectedImage}
                alt="Expanded automotive image"
                width={1200}
                height={800}
                className="w-full h-[500px] rounded-[20px] object-cover max-[768px]:h-[300px] "
              />

              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 w-8 h-8 rounded-full text-white font-light hover:text-[#0497A2] cursor-pointer transition-all bg-[#002c3b] flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close"
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
      {/* <RecentEvents /> */}
    </section>
  );
}
