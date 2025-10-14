"use client";

import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { subbannerConfig3 } from "../../config/subbannerConfig3";
import { ASSET_PREFIX } from "../../../config";

gsap.registerPlugin(ScrollTrigger);

interface SubbannerProps {
  bannerKey: keyof typeof subbannerConfig3;
}

export default function SubbannerNews({ bannerKey }: SubbannerProps) {
  const banner = subbannerConfig3[bannerKey];
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll-based GSAP zoom effect
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (containerRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        tl.to(containerRef.current, {
          scale: 1.1,
          ease: "none",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!banner) return null;

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden rounded-[25px] sm:rounded-[40px] h-[250px] md:h-[300px] xl:h-[350px]"
    >
      {/* Background Media */}
      <div className="absolute inset-0 rounded-[20px] sm:rounded-[45px] overflow-hidden [clip-path:path('M1840_784C1840_810.51_1818.51_832_1792_832H48.0001C21.4904_832_0_810.51_0_784V100C0_73.4903_21.4903_52_48_52H908.759C923.118_52_934.759_40.3594_934.759_26C934.759_11.6406_946.399_0_960.759_0H1792C1818.51_0_1840_21.4903_1840_48V784Z')]   max-[1200px]:[clip-path:path('M1200_784C1200_810.51_1184.02_832_1168_832H31.3C14.01_832_0_810.51_0_784V100C0_73.49_14.01_52_31.3_52H592.5C601.6_52_609.5_40.36_609.5_26C609.5_11.64_617.3_0_626.3_0H1168C1184.02_0_1200_21.49_1200_48V784Z')] max-[767px]:[clip-path:path('M767_784C767_810.51_758.52_832_747.66_832H20C8.9_832_0_810.51_0_784V100C0_73.49_8.9_52_20_52H379.3C385.9_52_390.1_40.36_390.1_26C390.1_11.64_395.2_0_401.3_0H747.7C758.5_0_767_21.49_767_48V784Z')]
      max-[480px]:[clip-path:path('M480_500C480_520_865_840_850_540H20C10_940_0_820_0_500V90C0_60_10_40_20_40H220C240_40_230_25_242_10C250_0_260_0_280_0H470C475_0_480_25_480_55V500Z')]

       ">
        {banner.mediaType === "video" ? (
          <video
            ref={videoRef}
            src={`${ASSET_PREFIX}${banner.mediaSrc}`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={`${ASSET_PREFIX}${banner.mediaSrc}`}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0087a7_25%,rgba(0,0,0,0)_105%)]"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-[2] flex flex-col justify-end px-[20px] sm:px-[40px] py-[30px] text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={banner.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[28px] sm:text-[34px] md:text-[42px] xl:text-[48px] font-semibold leading-[34px] sm:leading-[40px] md:leading-[48px] xl:leading-[50px] mb-[15px]">
              {banner.subtitle}
            </h1>
            {banner.description && (
              <p className="text-[16px] sm:text-[18px] font-light max-w-[600px] mb-[25px] hidden md:block">
                {banner.description}
              </p>
            )}
            {banner.link && (
              <BannerLink href={banner.link.href}>
                {banner.link.label}
              </BannerLink>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function BannerLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
     <Link
  href={href}
  className="inline-flex items-center gap-[5px] text-[16px] font-normal hover:opacity-80 transition group overflow-hidden rounded-full"
>
  <div className="relative p-[12.5px] rounded-full flex items-center justify-center
                  before:content-[''] before:absolute before:left-0 before:top-0 before:w-[40px] before:h-[40px] before:bg-black before:rounded-full before:transition-transform before:duration-500 before:ease-in-out group-hover:before:scale-[6.25]">
    <ArrowIcon />
  </div>
  <span className="relative z-[99] opacity-80 group-hover:opacity-100 group-hover:scale-[1] transition duration-300 ease-in-out pr-[15px] ">{children}</span>
</Link>

  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     className="relative z-[999] ">
      <path
        d="M15.435 1.56497C15.435 1.01269 14.9873 0.564971 14.435 0.564971L5.43503 0.564972C4.88274 0.564971 4.43503 1.01269 4.43503 1.56497C4.43503 2.11726 4.88274 2.56497 5.43503 2.56497L13.435 2.56497L13.435 10.565C13.435 11.1173 13.8827 11.565 14.435 11.565C14.9873 11.565 15.435 11.1173 15.435 10.565L15.435 1.56497ZM1 15L1.70711 15.7071L15.1421 2.27208L14.435 1.56497L13.7279 0.857865L0.292893 14.2929L1 15Z"
        fill="#fff"
      />
    </svg>
  );
}
