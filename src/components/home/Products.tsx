'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ASSET_PREFIX } from '../../../config';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductsAccordion() {
  // 👇 Start with 0 so the first item is open
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'Automated Storage & Retrieval Systems',
      subtitle: '01',
      sup: '06',
      description: 'Automate your storage and retrieval mechanisms with reduced floor footprint and manpower while increasing the efficiency and promptness of your logistics solutions.',
      pageUrl: '/products/automated-storage-retrieval-systems',
      products: [
        {
          title: 'Pallet ASRS',
          description: 'Pallet ASRS',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
          url: '#'
        },
        {
          title: 'Miniload ASRS',
          description: 'Miniload ASRS',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
          url: '#'
        },
        {
          title: 'Warehouse Automation',
          description: 'Warehouse Automation',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
          url: '#'
        },
        {
          title: 'Cold Storage Automation',
          description: 'Cold Storage Automation',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
          url: '#'
        },
        {
          title: 'Autonomous Mobile Robots (AMR)',
          description: 'Autonomous Mobile Robots (AMR)',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
          url: '#'
        },
        {
          title: 'VStore Calculator',
          description: 'Autonomous Mobile Robots (AMR)',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
          url: '#'
        }
      ]
    },
    {
      title: 'Vertical Storage',
      subtitle: '02',
      sup: '03',
      description: 'Maximize your vertical space with our innovative storage solutions that optimize height utilization while maintaining easy accessibility and safety.',
      pageUrl: '/products/vertical-storage',
      products: [
        {
          title: 'VSTORE',
          description: 'VSTORE',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
          url: '#'
        },
        {
          title: 'VStore HD - Heavy Duty',
          description: 'VStore HD - Heavy Duty',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
          url: '#'
        },
        {
          title: 'Vstore Roto - Vertical Carousels',
          description: 'Vstore Roto - Vertical Carousels',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
          url: '#'
        }
      ]
    },
    {
      title: 'Mobility Solutions',
      subtitle: '03',
      sup: '05',
      description: 'Enhance your operational mobility with our advanced solutions designed for flexible and dynamic material handling requirements.',
      pageUrl: '/products/mobility-solutions',
      products: [
        {
          title: 'AMR',
          description: 'AMR',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
          url: '#'
        },
        {
          title: 'RGV',
          description: 'RGV',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
          url: '#'
        },
        {
          title: 'Conveyors',
          description: 'Conveyors',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
          url: '#'
        },
        {
          title: 'Lifts',
          description: 'Lifts',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
          url: '#'
        },
        {
          title: 'Goods to person (GTP)',
          description: 'Goods to person (GTP)',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
          url: '#'
        },
      ]
    },
    {
      title: 'Other Solutions',
      subtitle: '04',
      sup: '03',
      description: 'Discover our comprehensive range of specialized solutions tailored to meet unique storage and handling challenges across various industries.',
      pageUrl: '/products/other-solutions',
      products: [
        {
          title: 'Rack Clad',
          description: 'Rack Clad',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
          url: '#'
        },
        {
          title: 'Semi automated system',
          description: 'Semi automated system',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
          url: '#'
        },
        {
          title: 'Warehouse management system',
          description: 'Warehouse management system',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
          url: '#'
        }
      ]
    },
    {
      title: 'Static Storage',
      subtitle: '05',
      sup: '03',
      description: 'Reliable and robust static storage solutions that provide durability and organization for your long-term storage requirements.',
      pageUrl: '/products/static-storage',
      products: [
        {
          title: 'Industrial Racking systems',
          description: 'Industrial Racking systems',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
          url: '#'
        },
        {
          title: 'Industrial Shelving Systems',
          description: 'Industrial Shelving Systems',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
         url: '#'
        },
        {
          title: 'Mezzanine & Cantilever Racking',
          description: 'Mezzanine & Cantilever Racking',
          image: `${ASSET_PREFIX}/images/news-events-placeholder.jpg`,
          url: '#'
        },
      ]
    },
  ];

  return (
    <div className=" ">
      <div className='w-[100%] lg:w-[650px] mx-auto mb-[30px] sm:mb-[40px] lg:mb-[60px]'>
        <h2 className="text-[#232323] mb-4 sm:mb-6 text-center lg:text-left">- Products -</h2>
        <h3 className="text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.04em] mb-[25px] opacity-100 text-[#232323] text-center lg:text-left mx-auto w-[100%] sm:w-[90%] md:w-[70%] lg:w-[100%]">Widest range of <br className="hidden lg:block" /> <span className=" tracking-[-0.04em] text-[#0087a7]"> Customized Solutions
          </span>
        </h3>
      </div>

      {accordionData.map((item, idx) => (
        <div key={idx} className=" border-b border-gray-200 w-[90%] mx-auto">
          {/* Accordion Header */}
          <button
            className="flex items-center w-full py-4 text-left hover:bg-[#f1f1f1] pl-[0] sm:pl-[25px] group cursor-pointer border-b border-gray-200 "
            onClick={() => toggle(idx)}
          >
            <div className="flex justify-between gap-[15px] items-center w-[100%] mr-[40px]">
              <p className="text-[#D9D9D9] font-semibold tracking-[-0.025em] text-[24px] md:text-[28px] lg:text-[32px] 2xl:text-[36px] leading-[30px] md:leading-[34px] lg:leading-[48px] 2xl:leading-[42px]">
                {item.subtitle}
              </p>
              <div className='w-[650px]'>
                <h2 className="text-[#232323] text-[18px] md:text-[18px] lg:text-[22px] 2xl:text-[26px] leading-[24px] md:leading-[24px] lg:leading-[26px] 2xl:leading-[30px] font-semibold relative text-left group-hover:text-[#0087a7]">
                  {item.title} <sup className='text-[14px] sm:text-[16px] top-[-5px] sm:top-[-15px]'>{item.sup}</sup>
                </h2>
              </div>
              <span className="w-[30px] h-[30px] md:w-6 md:h-6">
                {openIndex === idx ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24">
                    <path fill="#232323" fillRule="evenodd" d="M11.47 3.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06l-4.72-4.72V20a.75.75 0 0 1-1.5 0V5.81l-4.72 4.72a.75.75 0 1 1-1.06-1.06z" clipRule="evenodd"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24">
                    <path fill="#232323" fillRule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75" clipRule="evenodd"></path>
                  </svg>
                )}
              </span>
            </div>
          </button>

          {/* Accordion Content */}
          <AnimatePresence initial={false}>
            {openIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div>
                  <div className='my-[30px] md:my-[50px] w-[100%] mx-auto flex flex-col md:flex-row items-start gap-[20px] md:items-center justify-between'>
                    <p className='text-[#37384D] w-[100%] md:w-[60%] xl:w-[50%] '>{item.description}</p>
                     {/* View All Button */}
                  <div className="text-center">

<Link href="" className="relative inline-flex items-center px-[2px] py-[2px] rounded-[50px] bg-gradient-to-r from-[#0087A7] via-[#FF8400] to-[#0087A7] bg-[length:300%_100%] animate-gradient hover:shadow-lg  hover:shadow-orange-500/15 active:translate-y-0  transition-all duration-400 ease-out group">
  <div className="absolute inset-0 overflow-hidden rounded-[50px]">
    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 ease-out  " />
  </div>
  <span className="relative flex items-center justify-center w-full h-full rounded-[50px] bg-white font-normal hover:bg-gray-50 transition-all duration-300 ease-out pl-[23px] pr-[13px] py-[6px] text-[#37384D] text-sm md:text-base z-10">
   Know More
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 transition-transform duration-300 ease-out " fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </span>
</Link>





                  </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[30%_35%_30%] gap-[10px] justify-between mt-6 w-[100%] mx-auto mb-[50px]
                   ">
                    {/* First Column */}
                    <div className="grid gap-[10px] 2xl:gap-[10px] ">
                      {item.products.slice(0, 2).map((product, productIdx) => (
                        <Link key={productIdx} href={product.url} className="
                        relative group w-full rounded-[25px] overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(361deg,#232323_3%,rgba(0,0,0,0)_75%)] hover:after:bg-[linear-gradient(361deg,rgb(0_134_166)_3%,rgba(0,0,0,0)_75%)] after:transform after:translate-y-[50px] hover:after:translate-y-0 after:transition-transform after:duration-300
                        ">
                          <Image
                            src={product.image}
                            alt={product.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover object-right transition-transform duration-500 ease-in-out
               group-hover:scale-105 rounded-[15px] sm:rounded-[25px] "
                          />
                          <div className="absolute bottom-4 left-4 text-white w-[75%] z-[2]">
                            {/* <p className="text-sm opacity-100 mb-1">{product.description}</p> */}
                            <h3 className="text-[18px] leading-[22px] sm:text-[20px] sm:leading-[23px] 2xl:text-[22px] 2xl:leading-[24px] font-[500]">{product.title}</h3>
                          </div>
                          <div className='absolute bottom-[0] right-[0] bg-[#fff] p-[8px] sm:p-[15px]  z-[2] rounded-[15px_0_0_0] sm:rounded-[25px_0_0_0]'>
                          <div className="bg-[#626262] group-hover:bg-[#0087a7] text-[#fff] rounded-full transition group-hover:text-[#ebf7ff]
                           w-[32px] h-[32px] flex items-center justify-center p-[5px]
                          ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div></div>
                        </Link>
                      ))}
                    </div>

                    {/* Middle Column - Full Height */}
                    <div className="flex w-full  ">
                      {item.products[2] && (
                        <Link
  href={item.products[2].url}
  className="relative group w-full rounded-[25px] overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(361deg,#232323_3%,rgba(0,0,0,0)_75%)] hover:after:bg-[linear-gradient(361deg,rgb(0_134_166)_3%,rgba(0,0,0,0)_75%)] after:transform after:translate-y-[50px] hover:after:translate-y-0 after:transition-transform after:duration-300"
>
  <Image
    src={item.products[2].image}
    alt={item.products[2].title}
    width={600}
    height={400}
    /* 👇 key changes here */
    className="h-full w-full object-cover object-right
               rounded-[15px] sm:rounded-[25px]
               transition-transform duration-500 ease-in-out
               group-hover:scale-105"
  />

  <div className="absolute bottom-4 left-4 text-white w-[75%] z-[2]">
    <h3 className="text-[20px] leading-[23px] 2xl:text-[22px] 2xl:leading-[24px] font-[500]">
      {item.products[2].title}
    </h3>
  </div>

  <div className="absolute bottom-0 right-0 bg-[#fff] p-[15px] z-[2] rounded-[15px_0_0_0] sm:rounded-[25px_0_0_0]">
    <div className="bg-[#626262] group-hover:bg-[#0087a7] text-[#fff] rounded-full transition
                    group-hover:text-[#ebf7ff] w-[32px] h-[32px] flex items-center justify-center p-[5px] z-[2]">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
</Link>

                      )}
                    </div>

                    {/* Last Column */}
                    <div className="grid gap-[10px] 2xl:gap-[10px] grid-cols-2 lg:grid-cols-1 w-[200%] lg:w-full ">
                      {item.products.slice(3).map((product, productIdx) => (
                        <Link key={productIdx} href={product.url} className="relative group w-full rounded-[25px] overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(361deg,#232323_3%,rgba(0,0,0,0)_75%)] hover:after:bg-[linear-gradient(361deg,rgb(0_134_166)_3%,rgba(0,0,0,0)_75%)] after:transform after:translate-y-[50px] hover:after:translate-y-0 after:transition-transform after:duration-300">
                          <Image
                            src={product.image}
                            alt={product.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover object-right-bottom transition-transform duration-500 ease-in-out
               group-hover:scale-105 rounded-[15px] sm:rounded-[25px]"
                          />
                          <div className="absolute bottom-4 left-4 text-white w-[75%] z-[2]">
                            {/* <p className="text-sm opacity-100 mb-1">{product.description}</p> */}
                            <h3 className="text-[20px] leading-[23px] 2xl:text-[22px] 2xl:leading-[24px]  font-[500]">{product.title}</h3>
                          </div>
                          <div className='absolute bottom-[0] right-[0] bg-[#fff] p-[15px]  z-[2] rounded-[15px_0_0_0] sm:rounded-[25px_0_0_0]'>
                          <div className=" bg-[#626262] group-hover:bg-[#0087a7] text-[#fff] rounded-full transition group-hover:text-[#ebf7ff]
                           w-[32px] h-[32px] flex items-center justify-center p-[5px] z-[2]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>


                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}