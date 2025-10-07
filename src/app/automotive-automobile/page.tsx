import Subbanner from "@/components/Asrs/Subbanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Leads from "@/components/Leads";
import { getMeta } from "../../lib/getMeta";
import AutomobileAutomotiveComponent from "@/components/CaseStudiesDetail/AutomobileAutomotiveComponent";
export async function generateMetadata() {
  return getMeta("/automotive-automobile");
}

export default function AutomotiveAutomobile() {
  return (
    <div>
      <main className="bg-[#EBF7FF] overflow-hidden">
        <Header />

        <div className=" rounded-[40px] max-[480px]:pt-[20px] w-[95%] mx-auto relative z-index-[99]">
          <Breadcrumbs pageKey="automotive-automobile" />
        </div>
        <div className=" rounded-[40px] pt-[20px] w-[95%] mx-auto">
          <Subbanner bannerKey="automotive-automobile" />
        </div>
        <div className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] rounded-[40px] w-[95%] md:w-[80%] max-w-[105rem] mx-auto">
          <AutomobileAutomotiveComponent />
        </div>
        <div className="bg-[#002C3B] rounded-[40px_40px_0_0] pt-[50px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[100px] w-[95%] mx-auto ">
          <Leads />
        </div>
        <div className="bg-[#002C3B] rounded-[0_0_40px_40px] overflow-hidden w-[95%] mx-auto">
          <Footer />
        </div>
      </main>
    </div>
  );
}
