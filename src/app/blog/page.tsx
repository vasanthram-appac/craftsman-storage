"use client";
import Subbanner from "@/components/Asrs/Subbanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { p } from "framer-motion/client";
import { link } from "fs";
import { useState } from "react";

export default function Blog() {
  const BlogList = [
    {
      title: "Understanding React Hooks: A Beginner’s Guide",
      date: "2025-10-01",
      link: "/blogs/react-hooks-beginners-guide",
    },
    {
      title: "Top 10 JavaScript Tips to Improve Your Code",
      date: "2025-09-28",
      link: "/blogs/javascript-tips",
    },
    {
      title: "How to Build a Responsive Website with Tailwind CSS",
      date: "2025-09-25",
      link: "/blogs/responsive-website-tailwind",
    },
    {
      title: "The Future of Web Development in 2025",
      date: "2025-09-20",
      link: "/blogs/future-of-web-development-2025",
    },
    {
      title: "Understanding APIs and How They Work",
      date: "2025-09-15",
      link: "/blogs/understanding-apis",
    },
    {
      title: "A Step-by-Step Guide to Deploying on Vercel",
      date: "2025-09-10",
      link: "/blogs/deploying-on-vercel",
    },
    {
      title: "Mastering Git and GitHub for Developers",
      date: "2025-09-05",
      link: "/blogs/mastering-git-github",
    },
    {
      title: "Introduction to TypeScript for JavaScript Developers",
      date: "2025-09-01",
      link: "/blogs/typescript-introduction",
    },
    {
      title: "Best Practices for Writing Clean Code",
      date: "2025-08-28",
      link: "/blogs/clean-code-best-practices",
    },
    {
      title: "Exploring the MERN Stack: A Complete Overview",
      date: "2025-08-20",
      link: "/blogs/mern-stack-overview",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculate the indexes
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = BlogList.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(BlogList.length / itemsPerPage);
  return (
    <>
      <Header />
      <div className=" rounded-[40px] max-[480px]:pt-[20px] w-[95%] mx-auto relative">
        <Breadcrumbs pageKey="blog/" />
      </div>
      <div className="rounded-[40px] pt-[20px] w-[95%] mx-auto">
        <Subbanner bannerKey="blog/" />
      </div>
      <div className="blog-listing  py-[140px]">
        <div className="max-w-[65%] m-auto">
          <div className="grid grid-cols-3 gap-[30px]">
            {currentItems[0]?.title && (
              <div className="col-span-3 rounded-[30px] h-[300px] w-[100%] bg-[#f5f5f5]">
                <p>{currentItems[0]?.title}</p>
              </div>
            )}
            {currentItems[1]?.title && (
              <div className="col-span-1 rounded-[30px] h-[300px] w-[100%] bg-[#f5f5f5]">
                {" "}
                <p>{currentItems[1]?.title}</p>
              </div>
            )}
            {currentItems[2]?.title && (
              <div className="col-span-1 rounded-[30px] h-[300px] w-[100%] bg-[#f5f5f5]">
                {" "}
                <p>{currentItems[2]?.title}</p>
              </div>
            )}
            {currentItems[3]?.title && (
              <div className="col-span-1 rounded-[30px] h-[300px] w-[100%] bg-[#f5f5f5]">
                {" "}
                <p>{currentItems[3]?.title}</p>
              </div>
            )}
          </div>
        </div>
        <div className="m-auto w-fit">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}>
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              style={{
                margin: "0 5px",
                fontWeight: currentPage === i + 1 ? "bold" : "normal",
              }}>
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}>
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
