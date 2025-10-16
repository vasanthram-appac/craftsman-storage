import Link from "next/link";
import GetQuoteForm from "./GetQuoteForm";
import { ASSET_PREFIX } from "../../config";
import Image from "next/image";
import { div } from "framer-motion/client";


export default function Leads() {
  return (
    <div className="relative pb-[100px] sm:pb-[120px] md:pb-[140px] lg:pb-[160px] xl:pb-[180px] 2xl:pb-[200px] overflow-hidden">
    <div className=" relative z-[99]">
        <div className="w-[90%] md:w-[80%] mx-auto">

        <h2 className="text-[#fff] mb-[25px] xl:mb-[15px] text-center xl:text-left">- Contact Us -</h2>
        <div className="grid grid-cols-[100%] xl:grid-cols-[60%_35%] 2xl:grid-cols-[50%_45%] justify-between gap-[70px] xl:gap-[50px] ">
        <div>
            <h3 className=" text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.4px] mb-[25px] xl:mb-[35px] opacity-100 text-[#000] text-center xl:text-left mx-auto  w-[100%] sm:w-[90%] md:w-[70%] xl:w-[100%]">
               <span className="bg-gradient-to-r from-[#04B2BE] to-[#0086A6] bg-clip-text text-transparent tracking-[-2px]   ">We Ensure <br className="hidden xl:block"/> Commitment And <br className="hidden xl:block"/> Impart Quality <br className="hidden xl:block"/> Services!</span>
            </h3>
            <p className="text-[#fff] font-extralight  mb-[50px] sm:mb-[60px] md:mb-[70px] xl:mb-[50px] w-[70%] mx-auto xl:ml-0 xl:w-[60%] text-center xl:text-left">Armed with cutting-edge technology and constant innovation, we aim to surpass every benchmark to offer the best.</p>


            <div className="flex flex-col sm:flex-row  justify-around xl:justify-start gap-[30px] md:gap-[50px]">
            <div className="text-center sm:text-left">
                <h4 className="text-[#fff] mb-[15px] font-extralight ">For Enquiry</h4>
                <p className="mb-[30px] xl:mb-[50px]"><Link href="tel:1800-313-03131" className="text-[#fff] font-light text-[18px] leading-[26px]">1800-313-03131 (Toll Free)</Link></p>
                <h5 className="text-[#fff] text-[18px] leading-[26px] mb-[15px] font-extralight tracking-[0.02em]"><span className="font-semibold">CRAFTSMAN AUTOMATION <br /> LIMITED</span> - UNIT IV</h5>
                <p className="text-[#fff] font-extralight">Gat No. 58, Pimple Jagtap, <br />Shirur Taluk, <span className="text-nowrap">Pune - 412 208,</span><br /> Maharashtra, India.</p>
            </div>
            <div className="text-center sm:text-left ml-[0] 2xl:ml-[50px]">
                <h4 className="text-[#fff] mb-[15px] font-extralight">For Enquiry</h4>
                <p className="mb-[30px] xl:mb-[50px]"><Link href="mailto:Storage@carftsmensoultions.com" className="text-[#fff] font-light text-[18px] leading-[26px]">Storage@craftsmansolutions.com</Link></p>
                <h5 className="text-[#fff] text-[18px] leading-[26px] mb-[15px] font-extralight tracking-[0.02em]"><span className="font-normal">CRAFTSMAN AUTOMATION <br /> LIMITED</span> - UNIT III</h5>
                <p className="text-[#fff] font-extralight">123/4, Sangothipalayam Road, <br />Arasur Post, <span className="text-nowrap">Coimbatore - 641 407,</span><br /> Tamil Nadu, India.</p>
            </div>
            </div>
        </div>

        <div className="flex items-center justify-center">
           <GetQuoteForm />
        </div>
        </div>

        </div>
    </div>

    <div className="absolute bottom-[-2%] sm:bottom-[-5%] xl:bottom-[-10%]  2xl:bottom-[-20%] left-0 w-full z-[0]">

              <Image
              src={`${ASSET_PREFIX}/images/icons/whyus-shape.svg`}
              alt=""
              width={65}
              height={65}
              className="w-full h-full transition-transform duration-500 object-cover opacity-[0.3]"
              loading="lazy"
            />
            </div>

   </div>
  );
}
