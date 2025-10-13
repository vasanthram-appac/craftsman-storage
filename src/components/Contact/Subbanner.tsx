"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; 

export default function Subbanner() {
  const contents = [
    {
      title: "Pallet ASRS",
      subtitle: (
        <>
          Contact<br />
          <span className="text-[20px] leading-[20px] sm:text-[24px] md:text-[26px] xl:text-[30px] 2xl:text-[34px] sm:leading-[24px] mt-[-15px] text-[#ccc]">
            Storage and
          </span><br /><span className="text-[20px] leading-[20px] sm:text-[24px] md:text-[26px] xl:text-[30px] 2xl:text-[34px] sm:leading-[24px] mt-[-15px] text-[#ccc]">
            Retrieval Systems
          </span>
        </>
      ),
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % contents.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contents.length]);

  return (
    <section className="relative h-[350px] md:h-[400px] xl:h-[500px]">
      <div className="absolute top-[0] text-[#626262] pl-[15px] z-[22] py-[8px] w-full sm:w-[40%] rounded-[0_0_20px_0]">
        <ul className="flex flex-wrap gap-[15px] ">
          <li><Link href="#">Home</Link></li>
          <li>/</li>
          <li><Link href="#">Contact Us</Link></li>
        </ul>
      </div>
      <div className="absolute z-[2] top-[0] w-full  h-full">
        {/* Background video with dark overlay */}
        <div className="absolute inset-0 rounded-[20px] sm:rounded-[45px] overflow-hidden

       <div
  className='
    [clip-path:path('M1840_784C1840_810.51_1818.51_832_1792_832H48.0001C21.4904_832_0_810.51_0_784V100C0_73.4903_21.4903_52_48_52H908.759C923.118_52_934.759_40.3594_934.759_26C934.759_11.6406_946.399_0_960.759_0H1792C1818.51_0_1840_21.4903_1840_48V784Z')]
    max-[1200px]:[clip-path:path('M1200_784C1200_810.51_1184.02_832_1168_832H31.3C14.01_832_0_810.51_0_784V100C0_73.49_14.01_52_31.3_52H592.5C601.6_52_609.5_40.36_609.5_26C609.5_11.64_617.3_0_626.3_0H1168C1184.02_0_1200_21.49_1200_48V784Z')]
    max-[767px]:[clip-path:path('M767_784C767_810.51_758.52_832_747.66_832H20C8.9_832_0_810.51_0_784V100C0_73.49_8.9_52_20_52H379.3C385.9_52_390.1_40.36_390.1_26C390.1_11.64_395.2_0_401.3_0H747.7C758.5_0_767_21.49_767_48V784Z')]
  '
></div>

    ">
          {/* <video
            src={`${ASSET_PREFIX}/videos/craftsman-video-new.mp4`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-black/70 sm:bg-black/60" /> {/* optional overlay */}
        </div>
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
            {/* <p className="text-[#fff] mb-[15px] font-semibold">Pallet ASRS</p> */}
            <h1 className="text-[28px] leading-[32px] sm:text-[30px] sm:leading-[34px] md:text-[34px] md:leading-[40px] lg:text-[40px] lg:leading-[44px] xl:text-[44px] xl:leading-[48px] 2xl:text-[50px] 2xl:leading-[54px] font-semibold tracking-[-1px] mb-[25px] 2xl:mb-[35px] opacity-100 text-[#fff] ">
              Contact Us<br className="hidden sm:block" /> <span className=" text-[#fff] tracking-[-2px] font-semibold">
              </span>
            </h1>
            <p className="text-[#fff] font-[200] text-[16px] leading-[24px] xl:text-[18px] xl:leading-[26px] w-[60%] hidden md:block"></p>
            <div>
              <div className="flex flex-wrap items-center gap-[20px] sm:gap-[30px] mt-[30px] justify-start w-[100%] text-[#fff]">
                <BannerLink href="/about-us">Know More</BannerLink>
              </div></div>
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
        className="flex items-center gap-[15px] text-[16px] 2xl:text-[16px] font-normal tracking-[-0.1px] mt-[8px] text-[#fff] hover:text-[#c7c7c7] "
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
