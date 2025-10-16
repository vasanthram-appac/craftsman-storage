import { getMeta } from "../../lib/getMeta";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Leads from "@/components/Leads";

import Overview from "@/components/About/Overview";
import Subbanner from "@/components/Asrs/Subbanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import VisionMission from "@/components/About/Vismis";
import Milestones from "@/components/About/Milestones";

export async function generateMetadata() {
  return getMeta("/about-us");
}

export default function About() {
  return (
    <div>
      <main className="bg-[#EBF7FF] overflow-hidden">
        <Header />
        <div className=" rounded-[40px] max-[480px]:pt-[20px] w-[95%] mx-auto relative">
          <Breadcrumbs pageKey="about-us/" />
        </div>
        <div className=" rounded-[40px] pt-[20px] w-[95%] mx-auto">
          <Subbanner bannerKey="about-us" />
        </div>
        <div className="pt-[50px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[100px] rounded-[40px] ">
          <Overview />
        </div>
        <div className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] rounded-[40px] w-[90%] max-w-[105rem] mx-auto">
          <VisionMission />
        </div>
        <div className=" rounded-[40px] w-[90%] max-w-[105rem] mx-auto">
          <Milestones />
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
