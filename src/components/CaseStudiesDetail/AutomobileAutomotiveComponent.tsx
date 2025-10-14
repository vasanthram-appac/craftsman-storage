"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../config";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Automobileautomotive() {
const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const data = {
    title: "Automobile (Tractor Manufacturing Company)",
    banimg:
      `${ASSET_PREFIX}/images/case-studies/automobile-problem-statement.webp`,
    
    
    intro: [
      "An American corporation specializing in the production of agricultural machinery, heavy equipment, forestry machinery, diesel engines, drivetrains for heavy equipment, and lawn care equipment. Our contribution to their operations includes the supply of over 25 machines to date.",
  
    ],
    problems: [
      "With the constantly growing range of articles handled by Farm Manufacturing company, the capacity of their manually operated store was virtually exhausted.",
      "Current storage space is 120 square meters. They wanted reduce storage space of C and D class articles and utilize for production activity.",
      "Due to increase in models of farm equipment, Increase in range of Articles and decrease picking accuracy due manual intervention.",
      "This result into miss match of stock and impact on productivity.",
    ],
    images: [
      `${ASSET_PREFIX}/images/case-studies/tractor-manufaturing-problem.webp`,
      `${ASSET_PREFIX}/images/case-studies/tractor-manufaturing-solutions.webp`,
    ],
    solutions: [
      "We installed a solution with which we could save valuable space and respond flexibly to future requirements.",
      <>First of all, the experts replaced the manually operated store with two Vstore. Because of the high total payload of each individual Vstore (up to 60 tons), these were installed in warehouse. This means the 8-meter-high <Link href="#" className="text-[#000] font-semibold hover:text-[#505050fa] transition-all duration-300">Vstore</Link>  use the full height of warehouse.</>,
      "This has reduced the overall storage area from about 120 square meters to the footprint of the lifts, which is 20 square meters, thus freeing up valuable floor space",
      "The time-consuming “man to goods” method of the manually operated warehouse has now been replaced by “goods to man” picking at the Vstore. As a result, picking errors have been reduced significantly.",
      "The new inventory management in conjunction with the high-speed Vstore enables high transparency along with quick and reliable access to the articles",
    ],
    benefits:
      " Customer Feedback: The modular technology of Vstore systems from CRAFTSMAN AUTOMATION enables faster product deliveries, improved stock control, minimized pick errors, efficient order picking and therefore shorter lead times.",
  };

  const Bullet = () => (
    <span className="min-w-[20px] w-[20px] h-[20px] flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={8}
        height={8}
        viewBox="0 0 24 24"
        className="text-[#0497A2]"
      >
        <path
          fill="currentColor"
          d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
        />
      </svg>
    </span>
  );

  // 🌟 GSAP Animations
  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Parallax effect for images
    gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((el) => {
      gsap.to(el, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scrub: true,
        },
      });
    });
  }, []);

 useEffect(() => {
  // existing scroll + parallax code ...

  // 🌊 Infinite horizontal wave animation
  const wave = document.querySelector(".wave-bg");
  if (wave) {
    gsap.to(wave, {
      backgroundPositionX: "200%", // moves wave across horizontally
      duration: 200, // slower = longer duration
      ease: "none",
      repeat: -1, // infinite loop
    });
  }
}, []);


  return (
    <article
      className="grid grid-cols-1 lg:grid-cols-[65%_350px] gap-[50px] justify-center px-[15px] md:px-[20px] md:px-[40px] 2xl:px-[60px] "
      itemScope
      itemType="https://schema.org/Article"
    >
      {/* MAIN CONTENT */}
      <div>
        {/* Banner */}
        <section ref={addToRefs}>
            <h2 itemProp="headline" className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] 2xl:text-[34px]
            leading-[30px] sm:leading-[32px]  lg:leading-[36px] xl:leading-[40px] 2xl:leading-[42px]  text-[#232323]  mb-[15px] sm:mb-[20px] tracking-[-0.03em] font-[600]" >
            {data.title}
          </h2>
          <div className="rounded-[25px] overflow-hidden flex mb-[40px] relative group mt-[15px] flex">
            <Image
              src={data.banimg}
              alt="Automotive warehouse solutions"
              width={900}
              height={400}
              priority
              className="w-full h-[200px] sm:h-[280px] md:h-[280px] 2xl:h-[400px] object-cover object-right transition-transform duration-700 ease-out group-hover:scale-105 rounded-[25px] parallax-img will-change-transform"
            />
          </div>
        </section>

        {/* Intro */}
        <section ref={addToRefs}>
        

          {data.intro.map((para, i) => (
            <p
              key={i}
              className={`${
                i === 0
                  ? "mb-[15px] text-[17px] sm:text-[18px] leading-[26px] sm:leading-[28px] font-[500]"
                  : "mb-[30px] text-[17px]"
              } text-[#333]`}
            >
              {para}
            </p>
          ))}
        </section>

        {/* Problem Section */}
        <section ref={addToRefs}>
          <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] 2xl:text-[30px]
            leading-[28px] sm:leading-[30px] lg:leading-[32px] xl:leading-[34px] 2xl:leading-[40px] text-[#232323] mt-[15px] sm:mt-[25px] mb-[15px] sm:mb-[20px] tracking-[-0.03em] font-[600]">
            Problem Statement & Challenges Faced
          </h2>

          <ul className="grid gap-[15px] mt-[15px] text-[#232323] list-none mb-[60px]">
            {data.problems.map((item, i) => (
              <li key={i} className="flex gap-[10px] items-start">
                <Bullet />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Images */}
      <section ref={addToRefs}>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px] mb-[60px]">
    {data.images.map((src, i) => (
      <div
        key={i}
        className="rounded-[20px] lg:rounded-[35px] overflow-hidden flex relative group cursor-pointer"
        onClick={() => setSelectedImage(src)} // open popup
      >
        <Image
          src={src}
          alt={`Automotive warehouse case study image ${i + 1}`}
          width={900}
          height={400}
          loading="lazy"
          className="w-full h-[220px] md:h-[280px] 2xl:h-[300px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 rounded-[20px] lg:rounded-[35px] parallax-img will-change-transform"
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
            className="w-auto max-w-full h-auto max-h-[85vh] rounded-[20px] object-contain shadow-2xl"
          />

          {/* Close Button */}
          <motion.button
            onClick={() => setSelectedImage(null)}
            className="absolute top-[5px] right-[5px] w-[30px] h-[30px] rounded-[50px] text-[18px] text-white font-light hover:text-[#0497A2] cursor-pointer transition-all bg-[#002c3b]"
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
</section>

        {/* Solution Section */}
        <section ref={addToRefs}>
          <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] 2xl:text-[30px] md:text-[36px]
            leading-[28px] sm:leading-[30px] lg:leading-[32px] xl:leading-[34px] 2xl:leading-[40px] text-[#232323] mt-[15px] sm:mt-[25px] mb-[15px] sm:mb-[20px] tracking-[-0.03em] font-[600]">
            The Solution
          </h2>

          <ul className="grid gap-[15px] mt-[15px] text-[#232323] list-none mb-[60px]">
            {data.solutions.map((item, i) => (
              <li key={i} className="flex gap-[10px] items-start">
                <Bullet />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Benefits */}
        <section ref={addToRefs}>
          <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] 2xl:text-[30px] md:text-[36px]
            leading-[28px] sm:leading-[30px] lg:leading-[32px] xl:leading-[34px] 2xl:leading-[40px] text-[#232323] mt-[15px] sm:mt-[25px] mb-[15px] sm:mb-[20px] tracking-[-0.03em] font-[600]">
            Benefits to the Customer
          </h2>

          <div className="px-[20px] sm:px-[30px] py-[30px] sm:py-[40px] bg-[#fff] text-[18px] leading-[28px] text-[#232323] rounded-[20px] font-[500] tracking-[-0.02em] shadow-md shadow-[#0001]">
            <p itemProp="description">{data.benefits}</p>
          </div>
        </section>
      </div>

      {/* SIDEBAR */}

      <div>

      <div className="sticky top-[150px]">
      <aside
        ref={addToRefs}
        className="bg-[#002C3B] rounded-[20px] px-[30px] py-[40px]  self-start h-fit text-[#fff] relative"
      >
        <div className="mb-[30px] sm:mb-[50px]">
          <p className="text-[#fffc] font-[200] mb-[10px] sm:mb-[15px]">
            Services provided
          </p>
          <h3 className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] font-light">
            Customer Experience, Design Innovation, Product Management,
            Technology & Engineering
          </h3>
        </div>

        <div className="mb-[30px] sm:mb-[50px]">
          <p className="text-[#fffc] font-[200] mb-[10px] sm:mb-[15px]">Industry</p>
          <h3 className="text-[18px] leading-[26px] font-light">Automobile</h3>
        </div>

        <div>
          <p className="text-[#fffc] font-[200] mb-[15px]">
            Need assistance?
          </p>
          <Link
            href="#"
            className="inline-flex gap-[10px] items-center py-[10px] px-[30px] sm:px-[35px] text-[#fff] bg-[#0497A2] rounded-[30px] hover:bg-[#037c87] transition-all duration-300 z-[10] relative
            "
          >
            Start a Conversation <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m9 6l6 6l-6 6"></path></svg>
          </Link>
        </div>
      <div
  className="wave-bg absolute bottom-0 left-0 right-0 h-[200px] sm:h-[280px] md:h-[280px] 2xl:h-[290px] opacity-[.8] will-change-transform bg-repeat-x bg-bottom bg-cover"
  style={{
    backgroundImage: `url(${ASSET_PREFIX}/images/wave.png)`,
  }}
></div>



      </aside>

      {/* followus starts */}
      <div>
        <ul className="flex gap-[15px] items-center w-full justify-center mt-[20px]">
      <li><Link href="https://www.linkedin.com/company/appac-media/" target="_blank" className="flex items-center justify-center text-[#212121] w-[35px] h-[35px] block p-[5px] rounded-[50px] transition duration-300 ease-in-out hover:bg-[#0087a7] hover:text-[#fff]"><svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 256 256"><path fill="currentColor" d="M216 28H40a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m4 188a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM92 112v64a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0m88 28v36a4 4 0 0 1-8 0v-36a24 24 0 0 0-48 0v36a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0v6.87A32 32 0 0 1 180 140M96 84a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></path></svg></Link></li>
      <li><Link href="https://www.facebook.com/appacmedia/" target="_blank" className="flex items-center justify-center text-[#212121] w-[35px] h-[35px] block p-[5px] rounded-[50px] transition duration-300 ease-in-out hover:bg-[#0087a7] hover:text-[#fff]"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 14 14"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M.5 12.5v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3V8.76h.71a.61.61 0 0 0 .61-.61v-.77a.61.61 0 0 0-.61-.61h-.67v-.94c0-.84.38-.84.76-.84h.49a.55.55 0 0 0 .43-.18a.58.58 0 0 0 .18-.43v-.74a.62.62 0 0 0-.6-.64H9.65a2.32 2.32 0 0 0-2.39 2.6v1.17h-.64a.61.61 0 0 0-.62.61v.77a.61.61 0 0 0 .62.61h.64v4.74H1.5a1 1 0 0 1-1-1" strokeWidth={0.7}></path></svg></Link></li>
      <li><Link href="https://www.instagram.com/appac_mediatech/" target="_blank" className="flex items-center justify-center text-[#212121] w-[35px] h-[35px] block p-[5px] rounded-[50px] transition duration-300 ease-in-out hover:bg-[#0087a7] hover:text-[#fff]"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><circle cx={17} cy={7} r={1.5} fill="currentColor" fillOpacity={0}><animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1"></animate></circle><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}><path strokeDasharray={72} strokeDashoffset={72} d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></animate></path><path strokeDasharray={28} strokeDashoffset={28} d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.6s" values="28;0"></animate></path></g></svg></Link></li>
      <li><Link href="https://x.com/appac_media" target="_blank" className="flex items-center justify-center text-[#212121] w-[35px] h-[35px] block p-[5px] rounded-[50px] transition duration-300 ease-in-out hover:bg-[#0087a7] hover:text-[#fff]"><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 12 12"><path fill="currentColor" d="M.076 0H3.61l3.145 4.498L10.53 0h1.129L7.185 5.114L12 12H8.468L5.183 7.303L1.128 12H0l4.753-5.312zM1.47.706l7.404 10.588h1.733L3.203.706z"></path></svg></Link></li>
      <li><Link href="https://www.youtube.com/channel/UCv2LNwbfMOlEyxo8kIQ_MwA/featured" target="_blank" className="flex items-center justify-center text-[#212121] w-[35px] h-[35px] block p-[5px] rounded-[50px] transition duration-300 ease-in-out hover:bg-[#0087a7] hover:text-[#fff]"><svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M12 39h24"></path><rect width={39} height={26} x={4.5} y={9} rx={2} ry={2}></rect></g><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m29.86 22l-9.72-5.596v11.192z" strokeWidth={1.5}></path></svg></Link></li>
      <li><Link href="https://wa.me/+919342902803" target="_blank" className=" flex items-center justify-center text-[#212121] w-[35px] h-[35px] block p-[5px] rounded-[50px] transition duration-300 ease-in-out hover:bg-[#0087a7] hover:text-[#fff]"><svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.379.28 2.693.784 3.888c.279.66.418.99.436 1.24c.017.25-.057.524-.204 1.073L2 22l3.799-1.016c.549-.147.823-.22 1.073-.204c.25.018.58.157 1.24.436A10 10 0 0 0 12 22Z"></path><path d="m8.588 12.377l.871-1.081c.367-.456.82-.88.857-1.488c.008-.153-.1-.841-.315-2.218C9.916 7.049 9.41 7 8.973 7c-.57 0-.855 0-1.138.13c-.358.163-.725.622-.806 1.007c-.064.305-.016.515.079.935c.402 1.783 1.347 3.544 2.811 5.009c1.465 1.464 3.226 2.409 5.01 2.811c.42.095.629.143.934.079c.385-.08.844-.448 1.008-.806c.129-.283.129-.568.129-1.138c0-.438-.049-.943-.59-1.028c-1.377-.216-2.065-.323-2.218-.315c-.607.036-1.032.49-1.488.857l-1.081.87"></path></g></svg></Link></li>
    </ul>
      </div>
      {/* followus ends */}

      </div>

      </div>
    </article>
  );
}
