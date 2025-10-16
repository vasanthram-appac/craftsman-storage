'use client';

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Milestones() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const totalWidth = track.scrollWidth;
    const viewportWidth = container.offsetWidth;
    const scrollDistance = totalWidth - viewportWidth;

    gsap.to(track, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${scrollDistance}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const milestones = [
    {
      year: "1980",
      img: `${ASSET_PREFIX}/images/milestoneshape.svg`,
      text: "Craftsman Storage Systems was founded to deliver innovative storage solutions.",
    },
    {
      year: "1990",
      img: `${ASSET_PREFIX}/images/milestoneshape.svg`,
      text: "Expanded to industrial storage and automation solutions across to industrial storage and automation solutions across India.",
    },
    {
      year: "2000",
      img: `${ASSET_PREFIX}/images/milestoneshape.svg`,
      text: "Introduced modular racking and  ",
    },
    {
      year: "2010",
      img: `${ASSET_PREFIX}/images/milestoneshape.svg`,
      text: "Opened advanced manufacturing  manufacturing facility with robotic automation.",
    },
    {
      year: "2020",
      img: `${ASSET_PREFIX}/images/milestoneshape.svg`,
      text: "Recognized as a division of Craftsman Automation Limited.",
    },
    {
      year: "2024",
      img: `${ASSET_PREFIX}/images/milestoneshape.svg`,
      text: "Launched next-gen automated storage and retrieval systems (ASRS).",
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full h-[700px] transition-all duration-2500 ">
      <div className="w-[90%] max-w-[105rem] mx-auto pt-[60px] mb-[70px]">
        {/* Header */}
        <div className="mb-[40px]">
          <h2 className="text-[#232323] mb-4 text-left">- Milestones -</h2>
          <h3 className="text-[36px] font-semibold text-[#000] leading-[44px]">
            <span className="bg-gradient-to-r from-[#232323] to-[#0086A6] bg-clip-text text-transparent">
              Craftsman Storage Systems — A Journey of Innovation
            </span>
          </h3>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div ref={trackRef} className="flex gap-[40px] pl-[5%] ">
        {milestones.map((item, i) => (
          <div
            key={i}
            className={`milestone-card flex-shrink-0 border border-[#DDDDDD] rounded-[20px] w-[303px] h-fit ${
              i % 2 !== 0 ? "mt-[50px]" : "mt-0"
            } bg-white overflow-hidden`}
          >
            <div className="relative">
              <Image
                src={item.img}
                alt={item.year}
                width={301}
                height={203}
                className="w-[301px] h-[203px] object-cover rounded-t-[20px]"
                loading="lazy"
              />
              <p className="absolute left-[25px] bottom-[5px] text-[20px] font-[600] text-black">
                {item.year}
              </p>
            </div>
            <div className="p-[20px]">
              <p className="text-[#232323] text-[16px]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
