


import Image from 'next/image';
import { ASSET_PREFIX } from '../../../config';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';





export default function Overview() {


  return (
    <>
      <div className="w-[90%] max-w-[105rem] mx-auto">
        <div className="w-full md:w-[80%] mx-auto ">

          {/* Header text */}
          <div className="mb-[20px] md:mb-[40px] grid grid-cols-[100%]  sm:grid-cols-[30%_70%] lg:grid-cols-[40%_60%] justify-between gap-[30px]">
            <div>

            </div>
            <div>
              <h3 className="text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.4px] text-[#000]">
                <span className="bg-gradient-to-r from-[#232323] to-[#0086A6] bg-clip-text text-transparent tracking-[-2px]">
                 Our Purpose is to deliver on   <br className="hidden lg:block" />the promise of technology  <br className="hidden lg:block" /> and human ingenuity
                </span>
              </h3>
              <p className="text-[#232323] text-[16px] sm:text-[18px] md:leading-[28px] 2xl:text-[20px] tracking-[-0.03em] mt-[20px] w-[80%] ">
               We embrace the power of change to create 360° value for our clients, people and communities.
              </p>
            </div>
          </div>
        </div>
      </div>
<div className="w-[90%] max-w-[105rem] mx-auto pt-[50px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[100px]  ">
        <div className="w-full md:w-[80%] mx-auto">


          {/* Header text */}
          <div className="mb-[20px] md:mb-[40px] grid grid-cols-1 lg:grid-cols-2 justify-between items-center lg:gap-[30px] ">
            <div className=''>

               <h2 className="text-[#232323] mb-4 sm:mb-6 text-left">
            - Our Company -
          </h2>
          <div className="relative max-[500px]:w-full w-max lg:hidden max-lg:mb-[30px]">
              <Image src={`${ASSET_PREFIX}/images/about-overview.webp`} alt="" width={800} height={800} className="w-full max-[500px]:max-w-[100%] max-[1025px]:max-w-auto max-[1200px]:max-w-[450px]  max-[1500px]:max-w-[550px] max-[1700px]:max-w-[700px] max-w-[800px] relative z-2 "  />
              <div className="absolute top-0 right-2 w-fit z-[1] max-[1700px]:max-w-[400px] max-[1500px]:max-w-[300px] max-[1200px]:max-w-[250px] max-[1025px]:max-w-auto max-[500px]:max-w-[60%] ">

                       <Image
                       src={`${ASSET_PREFIX}/images/icons/background-shape.svg`}
                       alt=""
                       width={65}
                       height={65}
                       className="w-fit h-full transition-transform duration-500 object-cover opacity-[0.3]"
                       loading="lazy"
                     />
                     </div>
                     </div>
              <h3 className="text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.4px] text-[#000]">
                <span className="bg-gradient-to-r from-[#232323] to-[#0086A6] bg-clip-text text-transparent tracking-[-2px]">
                 Craftsman Storage    <br className="hidden lg:block" />systems, a Division of   <br className="hidden lg:block" /> Craftsman Automation <br className="hidden lg:block" /> Limited
                </span>
              </h3>
                 <p className="leading-[26px] text-[#232323]  mt-[20px] lg:w-[85%] ">
               provides efficient storage solutions based on your requirement and suitability. Our objective is to deliver advanced and effective storage solutions making the best utilisation of space at reasonable pricing.
              </p>
              <p className="leading-[26px] text-[#232323]  mt-[20px] lg:w-[85%]">
              Our storage products are completely designed, manufactured, supplied and installed by our in-house team of experts. Our storage solutions helps to optimize space and provides easy accessibility depending on the handling methodology of your SKU.
              </p>
            </div>
            <div>
            <div className="w-full  ">
              <div className="relative w-max hidden lg:block">
                <div className="relative z-2 ">
              <Image src={`${ASSET_PREFIX}/images/about-overview.webp`} alt="" width={800} height={800} className="w-full max-[1200px]:max-w-[450px]  max-[1500px]:max-w-[550px] max-[1700px]:max-w-[700px] max-w-[800px] "  />
              </div>
              <div className="absolute top-0 right-2 w-fit z-[1] max-[1700px]:max-w-[400px] max-[1500px]:max-w-[300px] max-[1200px]:max-w-[250px]">

                       <Image
                       src={`${ASSET_PREFIX}/images/icons/background-shape.svg`}
                       alt=""
                       width={65}
                       height={65}
                       className="w-fit h-full transition-transform duration-500 object-cover opacity-[0.3]"
                       loading="lazy"
                     />
                     </div>
                     </div>
            </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}


