'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ASSET_PREFIX } from '../../../config';
import Image from 'next/image';

export default function MaximizingEfficiencyinColdStorage() {
  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const tocItems = [
    'The Benefits of Warehouse Automation in Cold Storage',
    'Conclusion',
  ];

  // Scroll to section smoothly
  const handleScrollTo = (index: number) => {
    const section = sectionRefs.current[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(`section-${index}`);
    }
  };

  // Track scroll position for active highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-[100%] mx-auto py-[120px] max-md:py-[70px]">
      <div className="grid grid-cols-[100%] xl:grid-cols-[71%_25%] 2xl:grid-cols-[71%_25%] justify-between gap-[30px]">
        {/* Left content + TOC */}
        <div className="grid grid-cols-[100%] md:grid-cols-[33%_63%] lg:grid-cols-[25%_70%] justify-between gap-[30px]">
          {/* Table of contents */}
          <aside className="sticky top-[150px] bg-[#f1f1f1] p-[15px] rounded-[15px] h-fit max-md:top-[100px] max-sm:top-[79px]">
            <p className="text-[22px] leading-[28px] font-normal mb-[20px] tracking-[-0.04em] hidden md:block">
              Table of Contents
            </p>
            <ul className="text-[#626262] grid gap-[25px] font-light tracking-[-0.03em] transition-height duration-300 overflow-hidden">
              {tocItems.map((title, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleScrollTo(index)}
                    className={`text-left cursor-pointer transition duration-300 ease-in-out hover:text-[#03509e] ${
                      activeSection === `section-${index}`
                        ? 'text-[#03509e] font-medium'
                        : ''
                    }`}
                  >
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Blog content */}
          <article>
            <h1 className="text-[22px] md:text-[28px] 2xl:text-[32px] leading-[32px] font-normal tracking-[-0.4px] mb-[20px] w-[90%]">
              Maximizing Efficiency in Cold Storage: The Case for Warehouse Automation
            </h1>
            <p className="mb-[40px]">May 07, 2025</p>

            <div className="mb-[40px]">
              <Image
                alt="Maximizing Efficiency in Cold Storage"
                width="900"
                height="400"
                className="w-full h-[220px] sm:h-[280px] 2xl:h-[380px] object-cover object-center rounded-[10px]"
                src={`${ASSET_PREFIX}/images/blog/maximizing-efficiency-in-cold-storage-the-case-for-warehouse-automation.webp`}
                priority={true}
              />
            </div>

            {/* Blog sections */}
            {tocItems.map((title, index) => (
  <section
    key={index}
    id={`section-${index}`}
    ref={(el) => {
  sectionRefs.current[index] = el as HTMLDivElement | null;
}}

                className="mt-[50px] scroll-mt-[150px]"
              >
                {index === 0 && (
                  <>
                    <p className="text-[#141414cc] mb-[15px] tracking-[-0.03em]">
                      In the rapidly evolving world of cold storage, maintaining
                      the integrity and safety of perishable goods while
                      optimizing operational efficiency is paramount. Cold
                      storage facilities face unique challenges such as
                      stringent temperature controls, high inventory turnover,
                      and strict food safety standards.
                    </p>
                    <h2 className="text-[20px] md:text-[20px] 2xl:text-[24px] font-normal mb-[20px]">
                      {title}
                    </h2>
                    <p className="text-[#141414cc] mb-[15px] tracking-[-0.03em]">
                      Craftsman’s warehouse automation involves the use of
                      automated systems and technologies to handle various tasks
                      such as inventory management, order picking, storage, and
                      retrieval. For cold storage customers, the advantages are
                      numerous and impactful.
                    </p>
                    <p className="text-[#141414cc] mb-[15px] tracking-[-0.03em]">
                      Automation provides continuous and precise monitoring of
                      temperatures, improving efficiency, reducing errors, and
                      enhancing productivity. It lowers labor costs and boosts
                      safety by reducing repetitive tasks in cold environments.
                    </p>
                    <p className="text-[#141414cc] mb-[15px] tracking-[-0.03em]">
                      Furthermore,
                      <Link href="/automated-storage-and-retrieval-systems">
                        Automated storage
                      </Link>
                      and retrieval systems (ASRS) maximize space utilization,
                      allowing cold storage facilities to store more products
                      within the same footprint.
                    </p>
                  </>
                )}

                {index === 1 && (
                  <>
                    <h2 className="text-[20px] md:text-[20px] 2xl:text-[24px] font-normal mb-[20px]">
                      {title}
                    </h2>
                    <p className="text-[#141414cc] mb-[15px] tracking-[-0.03em]">
                      In conclusion, warehouse automation is a transformative
                      solution for cold storage customers. It reduces labor
                      costs, improves safety, and ensures customer satisfaction.
                      By investing in automation, facilities gain a competitive
                      edge in the market while ensuring the highest standards of
                      quality and efficiency.
                    </p>
                  </>
                )}
              </section>
            ))}
          </article>
        </div>

        {/* Right side contact box */}
        <aside className="sticky top-[150px] h-fit">
          <div className="grid max-xl:grid-cols-[35%_auto] max-md:grid-cols-1 gap-[30px]">
            <div className="px-[30px] py-[40px] 2xl:px-[40px] 2xl:py-[50px] border border-[#4141418a] rounded-[50px_25px_25px_50px]">
              <h3 className="text-[22px] leading-[28px] font-normal mb-[20px] tracking-[-0.04em]">
                Recent Blogs
              </h3>

                <div className='flex gap-[15px] relative'>
                <Image
                alt="Harnessing Efficiency: Warehouse Automation in the Solar Energy Revolution"
                width="900"
                height="400"
                className=" h-[100px] w-[100px]  object-cover object-center rounded-[10px]"
                src={`${ASSET_PREFIX}/images/blog/maximizing-efficiency-in-cold-storage-the-case-for-warehouse-automation.webp`}
                priority={true}
              />
                <span className="relative  flex items-center gap-[13px] text-[16px] text-[#232323] group-hover:text-[#000]">
                  Harnessing Efficiency: Warehouse Automation in the Solar Energy Revolution
                </span> <Link
                href="/contact-us/"
                className=" absolute inset-0 bg-transparent "
              ></Link></div>

            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
