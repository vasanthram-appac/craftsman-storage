'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ASSET_PREFIX } from "../../../config";
import { subbannerConfig, SubbannerContent } from "./../subbannerConfig";

interface PSubbannerProps {
  page: string; // page key to load config (e.g., "home", "about")
}

export default function PSubbanner({ page }: PSubbannerProps) {
  const contents: SubbannerContent[] = subbannerConfig[page] || [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (contents.length <= 1) return; // no need to animate if only 1 content
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % contents.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contents.length]);

  if (!contents.length) return null; // nothing to show

  const { subtitle, heading, description, cta } = contents[index];

  return (
    <section className="relative h-[350px] md:h-[400px] xl:h-[500px]">
      {/* Background video with overlay */}
      <div className="absolute inset-0 rounded-[20px] sm:rounded-[45px] overflow-hidden z-[2]">
        <video
          src={`${ASSET_PREFIX}/videos/craftsman-video-new.mp4`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0087a7_25%,rgba(0,0,0,0)_105%)]" />
      </div>

      {/* Banner content */}
      <div
        className="absolute z-10 left-[0] sm:left-[20px] text-white p-0 sm:px-[30px] py-[30px]
          w-[88%] flex md:flex-row flex-col justify-between items-start md:items-end gap-0 md:gap-[50px]
          text-black bg-no-repeat bg-[length:600px]
          w-fit p-[30px] md:p-[40px] bottom-[0] rounded-[20px] sm:rounded-[40px]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[28px] leading-[32px] sm:text-[30px] sm:leading-[34px] md:text-[34px] md:leading-[40px] lg:text-[40px] lg:leading-[44px] xl:text-[44px] xl:leading-[48px] 2xl:text-[50px] 2xl:leading-[54px] font-semibold tracking-[-1px] mb-[25px] 2xl:mb-[35px] opacity-100 text-[#fff]">
              {heading}
            </h1>
            {subtitle && <div className="mb-[15px]">{subtitle}</div>}
            {description && <p className="text-[#fff] font-[200] text-[16px] leading-[24px] xl:text-[18px] xl:leading-[26px] w-[60%] hidden md:block">{description}</p>}

            {cta && (
              <div className="flex flex-wrap items-center gap-[20px] sm:gap-[30px] mt-[30px] justify-start w-[100%] text-[#fff]">
                {cta.map((link, i) => (
                  <BannerLink key={i} href={link.href}>
                    {link.label}
                  </BannerLink>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function BannerLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className="flex items-center gap-[15px] text-[16px] 2xl:text-[16px] font-normal tracking-[-0.1px] mt-[8px] text-[#fff] hover:text-[#c7c7c7]"
      >
        <div className="bg-[#000] p-[10px] rounded-[50px]">
          <ArrowIcon />
        </div>
        {children}
      </Link>
    </div>
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
    >
      <path
        d="M15.435 1.56497C15.435 1.01269 14.9873 0.564971 14.435 0.564971L5.43503 0.564972C4.88274 0.564971 4.43503 1.01269 4.43503 1.56497C4.43503 2.11726 4.88274 2.56497 5.43503 2.56497L13.435 2.56497L13.435 10.565C13.435 11.1173 13.8827 11.565 14.435 11.565C14.9873 11.565 15.435 11.1173 15.435 10.565L15.435 1.56497ZM1 15L1.70711 15.7071L15.1421 2.27208L14.435 1.56497L13.7279 0.857865L0.292893 14.2929L1 15Z"
        fill="#fff"
      ></path>
    </svg>
  );
}
