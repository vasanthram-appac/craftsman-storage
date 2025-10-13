"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../config";
import { gsap } from "gsap";

const events = [
  { id: 1, date: "Jul 27", title: "Craftsman Storage Exhibited at IWS Expo 2025", img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg` },
  { id: 2, date: "Jul 27", title: "Craftsman Storage Supported Nestle's New Logistics Centre in Chennai", img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg` },
  { id: 3, date: "Jul 27", title: "Craftsman Storage Exhibited at IWS Expo 2025", img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg` },
  { id: 4, date: "Jul 27", title: "Craftsman Storage Exhibited at IWS Expo 2025", img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg` },
  { id: 5, date: "Jul 27", title: "Craftsman Storage Supported Nestle's New Logistics Centre in Chennai", img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg` },
  { id: 6, date: "Jul 27", title: "Craftsman Storage Exhibited at IWS Expo 2025", img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg` },
  { id: 7, date: "Jul 27", title: "Craftsman Storage - More Highlights from Expo", img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg` },
  { id: 8, date: "Jul 27", title: "New Product Launch - Smart Racking Systems", img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg` },
  { id: 9, date: "Jul 27", title: "Craftsman Logistics Expansion Update", img: `${ASSET_PREFIX}/images/news-events-placeholder.jpg` },
];

export default function Listing() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(events.length / itemsPerPage);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Calculate indexes
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    if (gridRef.current) {
      const visibleCards = gridRef.current.querySelectorAll(".event-card[data-visible='true']");
      const hiddenCards = gridRef.current.querySelectorAll(".event-card[data-visible='false']");

      tlRef.current?.kill(); // stop old animation
      const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.6 } });
      tlRef.current = tl;

      // Fade out hidden cards
      tl.to(hiddenCards, { opacity: 0, y: 20, pointerEvents: "none" }, 0);

      // Fade in visible cards
      tl.fromTo(
        visibleCards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          clearProps: "all",
        },
        0.1
      );
    }
  }, [currentPage]);

  return (
    <div className="w-[90%] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-[40px]">
        <div>
          <h2 className="text-[#232323] mb-4 text-left">- News & Events -</h2>
          <h3 className="text-[26px] sm:text-[32px] lg:text-[38px] font-semibold text-[#000] leading-tight">
            <span className="bg-gradient-to-r from-[#232323] to-[#0086A6] bg-clip-text text-transparent tracking-[-1px]">
              Widest range of customised solutions
            </span>
          </h3>
        </div>
        <div>
          <Link
            href="#"
            className="relative inline-flex items-center px-[2px] py-[2px] rounded-[50px] bg-gradient-to-r from-[#0087A7] via-[#FF8400] to-[#0087A7] bg-[length:300%_100%] animate-gradient shadow-lg hover:shadow-orange-500/15 transition-all duration-400 ease-out group"
          >
            <span className="relative flex items-center justify-center w-full h-full rounded-[50px] bg-white hover:bg-gray-50 pl-[23px] pr-[13px] py-[6px] text-[#37384D] text-sm md:text-base">
              View all
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 transition-transform duration-300 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[30px] relative"
      >
        {events.map((ev, i) => {
          const visible = i >= startIndex && i < endIndex;
          return (
            <div
              key={ev.id}
              className="event-card bg-white rounded-[15px] p-2.5 sm:p-5 group shadow-md transition-all hover:shadow-lg static w-full will-change-transform group"
              style={{
                opacity: visible ? 1 : 0,
                position: visible ? "relative" : "absolute",
              }}
              data-visible={visible}
              aria-hidden={!visible}
            >
              <div className="flex items-start gap-4 mb-4">
                <p className="group-hover:bg-[#198CB3] transition duration-300 ease-in-out bg-[#363636] text-white text-[18px] leading-[24px] font-light w-fit min-w-[70px] flex flex-col items-center justify-center p-3 rounded-[20px]">
                  {ev.date.split(" ")[0]} <br /> {ev.date.split(" ")[1]}
                </p>
                <h4 className="text-[#232323] text-[18px] leading-[26px] font-[400] line-clamp-2">
                  {ev.title}
                </h4>
              </div>
              <div className="relative flex overflow-hidden rounded-[20px]">
                <Image
                  src={ev.img}
                  alt={ev.title}
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-cover rounded-[20px] transform transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute bottom-0 left-0">
                  <Link href="#" className="bg-white group-hover:text-[#FF8400] transition duration-300 ease-in-out text-[#232323]  text-[16px] px-[15px] py-[8px] rounded-tr-[15px]">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-12">
        {/* <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md text-sm font-medium border transition-all ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100 text-[#0086A6]"
          }`}
        >
          Prev
        </button> */}

        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`w-[34px] h-[34px] rounded-full text-sm font-medium transition-all cursor-pointer ${
              currentPage === idx + 1
                ? "bg-[#0086A6] text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {idx + 1}
          </button>
        ))}

        {/* <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md text-sm font-medium border transition-all ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100 text-[#0086A6]"
          }`}
        >
          Next
        </button> */}
      </div>
    </div>
  );
}
