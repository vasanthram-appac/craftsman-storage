import { getMeta } from "../../lib/getMeta";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Leads from "@/components/Leads";
import FaqStatic from "@/components/Asrs/FaqStatic";
import IndustriesWeServe from "@/components/home/Industriesweserve";
import WhyUs from "@/components/home/WhyUs";
// import CaseStudies from "@/components/Asrs/CaseStudiestwo";
import Benefits from "@/components/Asrs/Benefits";
import Overview from "@/components/Asrs/Overview";
import Subbanner from "@/components/Asrs/Subbanner";
import CaseStudies from "@/components/Asrs/CaseStudies";
import Breadcrumbs from "@/components/Breadcrumbs";

export async function generateMetadata() {
  return getMeta("/automated-storage-and-retrieval-systems");
}

export default function ASRS() {
  return (
    <div>
      <main className="bg-[linear-gradient(360deg,#ebf7ff_50%,#fff_100%)] overflow-hidden">
        <Header />
        <div className=" rounded-[40px] max-[480px]:pt-[20px] w-[95%] max-w-[105rem] mx-auto relative">
          <Breadcrumbs pageKey="automated-storage-and-retrieval-systems/" />
        </div>
        <div className=" rounded-[40px] pt-[20px] w-[95%] mx-auto max-w-[105rem]">
          <Subbanner bannerKey="automated-storage-and-retrieval-systems" />
        </div>
        <div className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] rounded-[40px] ">
          <Overview />
        </div>
        <div className="pb-[50px] sm:pb-[60px] md:pb-[70px] lg:pb-[80px] xl:pb-[90px] 2xl:pb-[100px] rounded-[40px] w-[90%] max-w-[105rem] mx-auto">
          <Benefits />
        </div>
        <div className="bg-[#fff] rounded-[40px] w-[95%] md:w-[80%] max-w-[105rem] mx-auto ">
          <CaseStudies />
        </div>
        <div className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] rounded-[40px] w-[95%] md:w-[80%] max-w-[105rem] mx-auto">
          <IndustriesWeServe />
        </div>
        <div className="bg-[#fff] rounded-[40px] w-[95%] md:w-[80%] max-w-[105rem] mx-auto ">
          <WhyUs />
        </div>
        <div className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px]  rounded-[40px] w-[95%] md:w-[80%] max-w-[105rem] mx-auto">
          <FaqStatic />
        </div>

        <div className="bg-[#vhF7FF] rounded-[40px_40px_0_0] overflow-hidden">
          <div className="bg-[#002C3B] rounded-[40px_40px_0_0] pt-[50px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[100px] w-[95%]  mx-auto ">
            <Leads />
          </div>
          <div className="bg-[#002C3B] rounded-[0_0_40px_40px] overflow-hidden w-[95%] mx-auto">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
