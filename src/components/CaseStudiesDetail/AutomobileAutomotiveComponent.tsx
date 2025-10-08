"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../config";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Automobileautomotive() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const data = {
    title: "Automotive Industry",
    intro: [
      "Craftsman has fulfilled the storage needs of the world's leading equipment manufacturers of agricultural, construction, forestry and tractor automotive industries.",
      "It's headquartered at Pune, & has manufacturing and services facilities across India.",
    ],
    problems: [
      "With the constantly growing range of articles handled by Farm Manufacturing company, the capacity of their manually operated store was virtually exhausted.",
      "Current storage space is 120 square meters. They wanted reduce storage space of C and D class articles and utilize for production activity.",
      "Due to increase in models of farm equipment, Increase in range of Articles and decrease picking accuracy due manual intervention.",
      "This result into miss match of stock and impact on productivity.",
    ],
    images: [
      `${ASSET_PREFIX}/images/case-studies/dummy.webp`,
      `${ASSET_PREFIX}/images/case-studies/dummy.webp`,
    ],
    solutions: [
      "We installed a solution with which we could save valuable space and respond flexibly to future requirements.",
      "First of all, the experts replaced the manually operated store with two Vstore. Because of the high total payload of each individual Vstore (up to 60 tons), these were installed in warehouse. This means the 8-meter-high Vstore use the full height of warehouse.",
      "This has reduced the overall storage area from about 120 square meters to the footprint of the lifts, which is 20 square meters, thus freeing up valuable floor space.",
      "The time-consuming “man to goods” method of the manually operated warehouse has now been replaced by “goods to man” picking at the Vstore. As a result, picking errors have been reduced significantly.",
      "The new inventory management in conjunction with the high-speed Vstore enables high transparency along with quick and reliable access to the articles.",
    ],
    benefits:
      "The modular technology of Vstore systems from CRAFTSMAN AUTOMATION enables faster product deliveries, improved stock control, minimized pick errors, efficient order picking and therefore shorter lead times.",
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

  return (
    <article
      className="grid grid-cols-1 lg:grid-cols-[65%_350px] gap-[50px] justify-center px-[15px] md:px-[20px] md:px-[40px] 2xl:px-[60px] py-[50px]"
      itemScope
      itemType="https://schema.org/Article"
    >
      {/* MAIN CONTENT */}
      <div>
        {/* Banner */}
        <section ref={addToRefs}>
          <div className="rounded-[25px] overflow-hidden flex mb-[40px] relative group mt-[-15px] flex">
            <Image
              src={data.images[0]}
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
          <h2 itemProp="headline" className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] 2xl:text-[30px] md:text-[36px]
            leading-[28px] sm:leading-[30px] lg:leading-[32px] xl:leading-[34px] 2xl:leading-[40px] text-[#232323] mb-[15px] sm:mb-[20px] tracking-[-0.03em] font-[600]" >
            {data.title}
          </h2>

          {data.intro.map((para, i) => (
            <p
              key={i}
              className={`${
                i === 0
                  ? "mb-[15px] text-[18px] leading-[28px] font-[500]"
                  : "mb-[30px] text-[17px]"
              } text-[#333]`}
            >
              {para}
            </p>
          ))}
        </section>

        {/* Problem Section */}
        <section ref={addToRefs}>
          <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] 2xl:text-[30px] md:text-[36px]
            leading-[28px] sm:leading-[30px] lg:leading-[32px] xl:leading-[34px] 2xl:leading-[40px] text-[#232323] mb-[15px] sm:mb-[20px] tracking-[-0.03em] font-[600]">
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
                className="rounded-[20px] lg:rounded-[35px] overflow-hidden flex relative group"
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
        </section>

        {/* Solution Section */}
        <section ref={addToRefs}>
          <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] 2xl:text-[30px] md:text-[36px]
            leading-[28px] sm:leading-[30px] lg:leading-[32px] xl:leading-[34px] 2xl:leading-[40px] text-[#232323] mb-[15px] sm:mb-[20px] tracking-[-0.03em] font-[600]">
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
            leading-[28px] sm:leading-[30px] lg:leading-[32px] xl:leading-[34px] 2xl:leading-[40px] text-[#232323] mb-[15px] sm:mb-[20px] tracking-[-0.03em] font-[600]">
            Benefits to the Customer
          </h2>

          <div className="px-[20px] sm:px-[30px] py-[30px] sm:py-[40px] bg-[#fff] text-[18px] leading-[28px] text-[#232323] rounded-[20px] font-[500] tracking-[-0.02em] shadow-md shadow-[#0001]">
            <p itemProp="description">{data.benefits}</p>
          </div>
        </section>
      </div>

      {/* SIDEBAR */}
      <aside
        ref={addToRefs}
        className="bg-[#002C3B] rounded-[20px] px-[30px] py-[40px] sticky top-[150px] self-start h-fit text-[#fff]"
      >
        <div className="mb-[50px]">
          <p className="text-[#fffc] font-[200] mb-[15px]">
            Services provided
          </p>
          <h3 className="text-[18px] leading-[26px] font-light">
            Customer Experience, Design Innovation, Product Management,
            Technology & Engineering
          </h3>
        </div>

        <div className="mb-[50px]">
          <p className="text-[#fffc] font-[200] mb-[15px]">Industry</p>
          <h3 className="text-[18px] leading-[26px] font-light">Automobile</h3>
        </div>

        <div>
          <p className="text-[#fffc] font-[200] mb-[15px]">
            Need assistance?
          </p>
          <Link
            href="#"
            className="inline-block py-[9px] px-[30px] sm:px-[40px] text-[#fff] bg-[#0497A2] rounded-[30px] hover:bg-[#037c87] transition-all duration-300"
          >
            Start a Conversation
          </Link>
        </div>
        <Image
              src={data.images[0]}
              alt="Automotive warehouse solutions"
              width={900}
              height={400}
              priority
              className="w-full h-[200px] sm:h-[280px] md:h-[280px] 2xl:h-[400px] object-cover object-right transition-transform duration-700 ease-out group-hover:scale-105 rounded-[25px] parallax-img will-change-transform"
            />
      </aside>
    </article>
  );
}
