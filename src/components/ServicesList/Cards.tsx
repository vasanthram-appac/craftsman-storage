"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ASSET_PREFIX } from "../../../config";

gsap.registerPlugin(ScrollTrigger);

interface CardItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function Cards() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // Example dynamic data (you can fetch from API later)
  const cardsData: CardItem[] = [
    {
      id: 1,
      title: "Multi-deep Shuttle ASRS",
      description:
        "Multi Deep Shuttle ASRS offers an automated storage solution to deliver and stack the products between the different pallet levels.",
      image: `${ASSET_PREFIX}/images/pallet-asrs-crane.webp`,
      link: "#",
    },
    {
      id: 2,
      title: "Pallet ASRS Crane",
      description:
        "Ideal for smaller items, improving efficiency in order picking and inventory handling.",
      image: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs.webp`,
      link: "#",
    },
    {
      id: 3,
      title: "Crane Shuttle ASRS",
      description:
        "Smart shuttle systems designed for deep-lane pallet storage and retrieval with precision.",
      image: `${ASSET_PREFIX}/images/crane-shuttle-asrs.webp`,
      link: "#",
    },
    {
      id: 4,
      title: "Four way shuttle",
      description:
        "Smart shuttle systems designed for deep-lane pallet storage and retrieval with precision.",
      image: `${ASSET_PREFIX}/images/crane-shuttle-asrs.webp`,
      link: "#",
    },
  ];

  useEffect(() => {
    // Animate each card on scroll
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, y: 60, scale: 0.95 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="grid sm:grid-cols-2 gap-[30px]">
      {cardsData.map((card, i) => (
        <div
          key={card.id}
          ref={(el) => {
            if (el) cardsRef.current[i] = el;
          }}
          className="bg-[#fff] rounded-[25px] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-shadow duration-500"
        >
          {/* Image */}
          <div className="rounded-[25px] overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              width={680}
              height={510}
              className="w-full h-[220px] md:h-[280px] 2xl:h-[350px] object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="px-[25px] py-[25px]">
            <h2 className="text-[#232323] text-[22px] md:text-[24px] leading-[30px] tracking-[-0.03em] mb-[15px] font-semibold">
              {card.title}
            </h2>
            <p className="text-[#555] text-[15px] leading-[24px] line-clamp-2">
              {card.description}
            </p>

            <div className="mt-[30px]">
              <Link
                href={card.link}
                className="relative inline-flex items-center px-[2px] py-[2px] rounded-[50px] bg-gradient-to-r from-[#0087A7] via-[#FF8400] to-[#0087A7] bg-[length:300%_100%] animate-gradient hover:shadow-lg hover:shadow-orange-500/15 transition-all duration-400 ease-out group"
              >
                <div className="absolute inset-0 overflow-hidden rounded-[50px]">
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 ease-out" />
                </div>
                <span className="relative flex items-center justify-center w-full h-full rounded-[50px] bg-white hover:bg-gray-50 transition-all duration-300 ease-out pl-[23px] pr-[13px] py-[6px] text-[#37384D] text-sm md:text-base z-10">
                  View all
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1"
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
      ))}
    </div>
  );
}
