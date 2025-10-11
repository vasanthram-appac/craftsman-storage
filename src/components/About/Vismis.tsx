


import Image from 'next/image';
import { ASSET_PREFIX } from '../../../config';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';





export default function VisionMission() {


  return (
    <>
   
<div className="  ">
        <div className="w-full ">
         

          {/* Header text */}
          <div className="mb-[20px] md:mb-[40px] grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-[20px] ">
            <div className=" p-[50px_25px] sm:p-[80px_40px]  md:p-[120px_70px] 2xl:p-[150px_100px]  bg-[#178cb2] max-md:rounded-[25px] rounded-[40px] overflow-hidden relative ">
               <div className="relative z-1">
               <h2 className="text-[#fff] mb-4 sm:mb-10 text-left">
            - Vision -
          </h2>
          <p className="text-white/90 text-[18px] leading:-[24px] sm:text-[20px] sm:leading-[26px] md:text-[24px] md:leading-[30px] lg:text-[28px] lg:leading-[34px] 2xl:text-[34px] 2xl:leading-[42px] tracking-[-0.03em] font-light">
        To be a preferred Storage systems provider for diversified industry
        segments and to conceptualize, engineer, manufacture, and install
        effective storage solutions with a focus on quality, speed of execution
        and after sales support.
      </p> 
      </div>
        <div className="absolute bottom-0 left-0 w-[220%] z-[0]">
                   
                             <Image
                             src={`${ASSET_PREFIX}/images/icons/whyus-shape.svg`}
                             alt=""
                             width={65}
                             height={65}
                             className="w-[180%] h-full transition-transform duration-500 object-cover opacity-[1]"
                             loading="lazy"
                           />
                           </div>
            </div>
            <div>
            <div className="p-[50px_25px] sm:p-[80px_40px]  md:p-[120px_70px] 2xl:p-[150px_100px] bg-[#04b1bd] max-md:rounded-[25px] rounded-[40px] overflow-hidden relative">
              <div className="relative z-1">
               <h2 className="text-[#fff] mb-4 sm:mb-10 text-left ">
            - Mission -
          </h2>
           <p className="text-white/90 text-[18px] leading:-[24px] sm:text-[20px] sm:leading-[26px] md:text-[24px] md:leading-[30px] lg:text-[28px] lg:leading-[34px] 2xl:text-[34px] 2xl:leading-[42px] tracking-[-0.03em] font-light ">
        To be a preferred Storage systems provider for diversified industry
        segments and to conceptualize, engineer, manufacture, and install
        effective storage solutions with a focus on quality, speed of execution
        and after sales support.
      </p>
      </div>
         <div className="absolute bottom-0 left-[-100] w-[220%] z-[0]">
                   
                             <Image
                             src={`${ASSET_PREFIX}/images/icons/whyus-shape.svg`}
                             alt=""
                             width={65}
                             height={65}
                             className="w-fit h-full transition-transform duration-500 object-cover opacity-[1]"
                             loading="lazy"
                           />
                           </div>
            </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}


