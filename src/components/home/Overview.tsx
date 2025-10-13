
import Link from "next/link";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../config";




export default function Overview() {
  return (
     <div className="relative w-[90%] md:w-[80%] max-w-[120rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 flex justify-between items-end relative z-2">
          <div className='mb-[40px] sm:mb-[40px] md:mb-[60px] relative z-2'>
        <h2 className="text-[#232323] mb-4 sm:mb-6 text-left md:text-left">- About us -</h2>

        <h3 className="text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.04em] mb-[25px] opacity-100 text-[#232323] text-left md:text-left w-[100%]  ">
          Our Purpose is to
          <span className="bg-gradient-to-r from-[#194956] to-[#0086A6] bg-clip-text text-transparent tracking-[-0.04em]">
            <br className="hidden lg:block" />deliver on the promise
            <br className="hidden md:block" />of technology
            <br className="hidden lg:block" />and human ingenuity  </span>
            </h3>

        <p className="text-[#37384D] mb-[25px] sm:mb-[30px] md:mb-[50px] w-[100%] sm:w-[80%] xl:w-[50%]">We embrace the power of change to create 360° value for our clients, people and communities.</p>

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

      <div className="flex justify-center lg:justify-end z-[2] relative">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-[10px] sm:gap-[20px] w-[100%] w-ful md:w-fit">
        <div className="bg-[#198CB3] px-[25px] py-[25px] rounded-[15px] sm:rounded-[20px] text-[#fff] w-auto lg:w-[200px] xl:w-[220px] 2xl:w-[250px] grid items-center relative
        hover:scale-[1.02] transition duration-300">
          <div><h3 className="text-center sm:text-left text-[28px] leading-[34px] sm:text-[34px] sm:leading-[40px] lg:text-[40px] lg:leading-[48px] 2xl:text-[50px] 2xl:leading-[58px] mb-[5px] font-semibold">150</h3>
          <p className="text-center sm:text-left font-light leading-[16px] lg:leading-[20px] text-[16px] lg:text-[16px]">Year of Experience</p></div>
          <div className="absolute bottom-0 right-[-65px] sm:right-0 overflow-hidden">
            <Image
                            src={`${ASSET_PREFIX}/images/icons/stat-shape.svg`}
                            alt=""
                            width={24}
                            height={24}
                            className="h-auto w-[120px]"
                            priority
                          /> </div>
        </div>
        <div className="bg-[#04B2BE] px-[25px] py-[25px] rounded-[15px] sm:rounded-[20px] text-[#fff]  w-auto lg:w-[200px] xl:w-[220px] 2xl:w-[250px] grid items-center relative hover:scale-[1.02] transition duration-300">
          <div><h3 className="text-center sm:text-left text-[28px] leading-[34px] sm:text-[34px] sm:leading-[40px] lg:text-[40px] lg:leading-[48px] 2xl:text-[50px] 2xl:leading-[58px] mb-[5px] font-semibold">1213+</h3>
          <p className="text-center sm:text-left font-light leading-[16px] lg:leading-[20px] text-[16px] lg:text-[16px]">Year of Experience</p></div>
           <div className="absolute bottom-0 right-[-65px] sm:right-0 overflow-hidden">
            <Image
                            src={`${ASSET_PREFIX}/images/icons/stat-shape.svg`}
                            alt=""
                            width={24}
                            height={24}
                            className="h-auto w-[120px]"
                            priority
                          /> </div>
        </div>
        <div className="bg-[#5AC6DE] px-[25px] py-[25px] rounded-[15px] sm:rounded-[20px] text-[#fff]  w-auto lg:w-[200px] xl:w-[220px] 2xl:w-[250px] grid items-center relative hover:scale-[1.02] transition duration-300">
           <div><h3 className="text-center sm:text-left text-[28px] leading-[34px] sm:text-[34px] sm:leading-[40px]  lg:text-[40px] lg:leading-[48px] 2xl:text-[50px] 2xl:leading-[58px] mb-[5px] font-semibold">121+</h3>
          <p className="text-center sm:text-left font-light leading-[16px] lg:leading-[20px] text-[16px] lg:text-[16px]">Year of Experience</p></div>
           <div className="absolute bottom-0 right-[-65px] sm:right-0 overflow-hidden">
            <Image
                            src={`${ASSET_PREFIX}/images/icons/stat-shape.svg`}
                            alt=""
                            width={24}
                            height={24}
                            className="h-auto w-[120px]"
                            priority
                          /> </div>
        </div>
        <div className="bg-[#0087A7] px-[25px] py-[25px] rounded-[15px] sm:rounded-[20px] text-[#fff]  w-auto lg:w-[200px] xl:w-[220px] 2xl:w-[250px] grid items-center relative hover:scale-[1.02] transition duration-300">
           <div><h3 className="text-center sm:text-left text-[28px] leading-[34px] sm:text-[34px] sm:leading-[40px]  lg:text-[40px] lg:leading-[48px] 2xl:text-[50px] 2xl:leading-[58px] mb-[5px] font-semibold">163+</h3>
          <p className="text-center sm:text-left font-light leading-[16px] lg:leading-[20px] text-[16px] lg:text-[16px]">Year of Experience</p>
         </div>
           <div className="absolute bottom-0 right-[-65px] sm:right-0 overflow-hidden">
            <Image
                            src={`${ASSET_PREFIX}/images/icons/stat-shape.svg`}
                            alt=""
                            width={24}
                            height={24}
                            className="h-auto w-[120px]"
                            priority
                          /> </div>
        </div>
        </div>

      </div>


        </div>
        <div className="absolute z-0 right-[-25%] top-[-40px]">
      <Image
                        src={`${ASSET_PREFIX}/images/icons/bg-wave.svg`}
                        alt=""
                        width={400}
                        height={250}
                        className="w-[100%] h-auto"
                        priority
                      /></div>
       <div className="absolute bottom-[-55px] sm:bottom-[-70px] md:bottom-[-80px] lg:bottom-[-105px] 2xl:bottom-[-120px] z-[0]">
<p className="
  bg-gradient-to-b from-[#fff] to-[#fff]
  bg-clip-text text-transparent
  [-webkit-text-stroke-width:1px]
  [-webkit-text-stroke-color:#198cb333]
  text-[38px] leading-[44px] sm:text-[60px] sm:leading-[68px] md:text-[80px] md:leading-[80px] lg:text-[100px] lg:leading-[110px] 2xl:text-[145px] 2xl:leading-[145px]
  relative z-[9999999] font-medium tracking-[-2px]
">
  Storage Solutions
</p>


</div>

     </div>
  );
}
