"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ASSET_PREFIX } from "../../config";

export default function Banner() {
  const contents = [
    {
      title: "Pallet ASRS",
      subtitle: (
        <>
          We design, manufacture,<br />
          <span className="text-[20px] leading-[20px] sm:text-[24px] md:text-[26px] xl:text-[30px] 2xl:text-[34px] sm:leading-[24px] mt-[-15px] text-[#ccc]">
            supply and erect extensively engineered
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
    <section className="relative  w-[95%] mx-auto h-[80vh]  sm:h-[85vh] ">
      {/* Background video with dark overlay */}
      <div className="absolute inset-0 rounded-[20px] sm:rounded-[45px] overflow-hidden">
        <video
          src={`${ASSET_PREFIX}/videos/craftsman-video-new.mp4`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 sm:bg-black/60" /> {/* optional overlay */}
      </div>

      {/* Banner content */}
      <div
        className="absolute z-10 left-[0] sm:left-[20px] text-white px-[20px] py-[20px] sm:p-[50px]
        w-full sm:w-[88%] flex md:flex-row flex-col justify-between items-start md:items-end gap-0 md:gap-[50px]
        text-black bg-no-repeat bg-[length:600px]
        w-[96%] 2xl:w-full bottom-[20px] rounded-[20px] sm:rounded-[40px]"
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
            <h1 className="text-[28px] leading-[32px] sm:text-[30px] sm:leading-[34px] md:text-[34px] md:leading-[40px] lg:text-[40px] lg:leading-[44px] xl:text-[44px] xl:leading-[48px] 2xl:text-[50px] 2xl:leading-[54px] font-semibold tracking-[-1px] mb-[25px] opacity-100 text-[#fff] ">
              We design, manufacture,<br className="hidden sm:block" /> <span className=" text-[#fff] tracking-[-2px] font-semibold">  supply and erect extensively<br className="hidden sm:block"/>   engineered
              </span>
            </h1>
            <p className="text-[16px] leading-[24px] font-light hidden sm:block">We design, manufacture, supply and erect extensively engineered <br className="hidden sm:block" /> racking solutions for your storage needs.</p>
             <div>
            <div className= "flex flex-wrap items-center gap-[10px] sm:gap-[30px] mt-[30px] justify-end w-[100%] text-[#fff]">
              <BannerLink href="/about-us">Know More</BannerLink>
              <BannerLink href="/about-us">Get a Quote</BannerLink>
            </div>

            </div>
          </motion.div>
        </AnimatePresence>

        <div className="hidden md:block grid gap-[8px] w-[100%] sm:w-[165px] 2xl:w-[250px]">
          {extraLinks.map((item, i) => (
            <div key={i} className="flex items-center gap-[15px] group relative">
              <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                <ArrowIcon />
              </div>
              <div>
                <Link
                  href={item.href}
                  className="flex items-center gap-[15px] text-[14px] font-light tracking-[-0.1px] pb-[2px] w-fit"
                >
                  {item.label}
                </Link>

                <div className="relative h-[1px] w-[100%] bg-[#d9d9d9] mt-[2px] group-hover:after:scale-x-100 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#0087a7] after:scale-x-0 after:origin-center after:transition-transform after:duration-500 after:z-[1] mb-[5px]" />
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

function BannerLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="group relative">

      <Link
  href={href}
  className="inline-flex items-center gap-[5px] text-[16px] font-normal hover:opacity-80 transition group overflow-hidden rounded-full"
>
  <div className="relative p-[12.5px] rounded-full flex items-center justify-center
                  before:content-[''] before:absolute before:left-0 before:top-0 before:w-[40px] before:h-[40px] before:bg-[#0087a7] before:rounded-full before:transition-transform before:duration-500 before:ease-in-out group-hover:before:scale-[6.25]">
    <ArrowIcon />
  </div>
  <span className="relative z-[99] opacity-80 group-hover:opacity-100 group-hover:scale-[1] transition duration-300 ease-in-out pr-[15px] ">{children}</span>
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
      className="relative z-[999] "
    >
      <path
        d="M15.435 1.56497C15.435 1.01269 14.9873 0.564971 14.435 0.564971L5.43503 0.564972C4.88274 0.564971 4.43503 1.01269 4.43503 1.56497C4.43503 2.11726 4.88274 2.56497 5.43503 2.56497L13.435 2.56497L13.435 10.565C13.435 11.1173 13.8827 11.565 14.435 11.565C14.9873 11.565 15.435 11.1173 15.435 10.565L15.435 1.56497ZM1 15L1.70711 15.7071L15.1421 2.27208L14.435 1.56497L13.7279 0.857865L0.292893 14.2929L1 15Z"
        fill="#fff"
      ></path>
    </svg>
  );
}

/* Extra links data */
const extraLinks = [
  { href: "/", label: "Products" },
  { href: "/", label: "Industries we serve" },
  { href: "/", label: "Case Studies" },
  { href: "/", label: "News and Events" },
  { href: "/", label: "Blogs" },
  { href: "/", label: "Contact us" },
];

