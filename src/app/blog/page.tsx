"use client";
import Subbanner from "@/components/Asrs/Subbanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ASSET_PREFIX } from "../../../config";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
export default function Blog() {
  const BlogList = [
    {
      title: "Understanding React Hooks: A Beginner’s Guide",
      date: "2025-10-01",
      link: "/blogs/react-hooks-beginners-guide",
      image: "electronics.jpg",
      href: "/",
    },
    {
      title: "Top 10 JavaScript Tips to Improve Your Code",
      date: "2025-09-28",
      link: "/blogs/javascript-tips",
      image: "news-events-placeholder.jpg",
      href: "/",
    },
    {
      title: "How to Build a Responsive Website with Tailwind CSS",
      date: "2025-09-25",
      link: "/blogs/responsive-website-tailwind",
      image: "news-events-placeholder.jpg",
      href: "/",
    },
    {
      title: "The Future of Web Development in 2025",
      date: "2025-09-20",
      link: "/blogs/future-of-web-development-2025",
      image: "news-events-placeholder.jpg",
      href: "/",
    },
    {
      title: "Understanding APIs and How They Work",
      date: "2025-09-15",
      link: "/blogs/understanding-apis",
      image: "news-events-placeholder.jpg",
      href: "/",
    },
    {
      title: "A Step-by-Step Guide to Deploying on Vercel",
      date: "2025-09-10",
      link: "/blogs/deploying-on-vercel",
      image: "news-events-placeholder.jpg",
      href: "/",
    },
    {
      title: "Mastering Git and GitHub for Developers",
      date: "2025-09-05",
      link: "/blogs/mastering-git-github",
      image: "news-events-placeholder.jpg",
      href: "/",
    },
    {
      title: "Introduction to TypeScript for JavaScript Developers",
      date: "2025-09-01",
      link: "/blogs/typescript-introduction",
      image: "news-events-placeholder.jpg",
      href: "/",
    },
    {
      title: "Best Practices for Writing Clean Code",
      date: "2025-08-28",
      link: "/blogs/clean-code-best-practices",
      image: "news-events-placeholder.jpg",
    },
    {
      title: "Exploring the MERN Stack: A Complete Overview",
      date: "2025-08-20",
      link: "/blogs/mern-stack-overview",
      image: "news-events-placeholder.jpg",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth < 1280 ? 3 : 5
  );
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 1280 ? 3 : 5);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate the indexes
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = BlogList.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(BlogList.length / itemsPerPage);

  // Button component
  const Btn = ({ label, href }: { label: string; href?: string }) => (
    <Link
      href={href || "#"}
      className="relative inline-flex items-center px-[2px] py-[2px] rounded-[50px]
               bg-gradient-to-r from-[#0087A7] via-[#FF8400] to-[#0087A7]
               bg-[length:300%_100%] animate-gradient hover:shadow-lg
               hover:shadow-orange-500/15 active:translate-y-0 transition-all
               duration-400 ease-out group">
      <span
        className="relative flex items-center justify-center w-full h-full rounded-[50px]
                    bg-white font-normal hover:bg-gray-50 transition-all duration-300
                    ease-out pl-[15px] sm:pl-[20px] pr-[7px] sm:pr-[15px] py-[4px] sm:py-[6px] text-[#37384D] z-10 text-[15px]">
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-2 transition-transform duration-300 ease-out"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </Link>
  );

  return (
    <>
      <Header />
      <div className=" rounded-[40px] max-[480px]:pt-[20px] w-[95%] mx-auto relative">
        <Breadcrumbs pageKey="blog/" />
      </div>
      <div className="rounded-[40px] pt-[20px] w-[95%] mx-auto">
        <Subbanner bannerKey="blog/" />
      </div>
      <div className="blog-listing  py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] rounded-[40px]  max-w-[105rem] mx-auto">
        <div className="w-[60%]  max-2xl:w-[70%] max-xl:w-[80%] m-auto  max-w-[120rem]">
          <div className="grid grid-cols-3 max-xl:grid-cols-2  max-md:grid-cols-1 gap-[20px]">
            <AnimatePresence mode="wait">
              {currentItems.map((item, index) =>
                item?.title ? (
                  <motion.div
                    key={item.title} // unique key for animation
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`${
                      index === 0
                        ? "col-span-2 max-xl:col-span-2  max-md:col-span-1"
                        : "col-span-1 max-xl:col-span-1"
                    } rounded-[30px] h-auto w-full bg-[#f5f5f5] overflow-hidden`}>
                    <Image
                      src={`${ASSET_PREFIX}/images/${item.image}`}
                      width={300}
                      height={200}
                      alt={item.title}
                      className={`w-full h-[250px] max-h-[250px] object-cover `}
                    />
                    <div className="p-[20px]">
                      <h2
                        className={`text-[20px] leading-[26px] mb-[15px] mt-[0px] font-semibold text-[#232323] ${
                          index === 0 ? "w-[50%]" : "w-full"
                        }  `}>
                        {item.title}
                      </h2>
                      <p className="leading-[26px] line-clamp-2 text-[#626262] mb-[15px]  text-[15px] leading-[18px]">
                        {item.date}
                      </p>
                      <Btn label="Read More" href={item.href ?? "#"} />
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="m-auto w-fit text-[#626262] mt-[30px]">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={`${
              currentPage === 1 ? "cursor-default" : "cursor-pointer"
            } mr-[10px]`}>
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              style={{
                margin: "0 10px",
                fontWeight: currentPage === i + 1 ? "bold" : "normal",
              }}
              className="cursor-pointer">
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className={`${
              currentPage === totalPages ? "cursor-default" : "cursor-pointer"
            } ml-[10px]`}>
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
