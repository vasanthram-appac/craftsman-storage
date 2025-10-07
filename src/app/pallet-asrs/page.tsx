import { getMeta } from "../../lib/getMeta";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Leads from "@/components/Leads";
import Subbanner from "@/components/Asrs/Subbanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cards from "@/components/ServicesList/Cards";
import QuickLinks from "@/components/PalletAsrs/QuickLinks";

export async function generateMetadata() {
  return getMeta("/pallet-asrs");
}

export default function Services() {
  return (
    <div>
      <main className="bg-[#EBF7FF] overflow-hidden">
        <Header />
        <div className=" rounded-[40px] max-[480px]:pt-[20px] w-[95%] mx-auto relative">
          <Breadcrumbs pageKey="pallet-asrs" />
        </div>
        <div className=" rounded-[40px] pt-[20px] w-[95%] mx-auto">
          <Subbanner bannerKey="pallet-asrs" />
        </div>
        <div className=" rounded-[40px] pt-[20px] w-[95%] mx-auto">
          <QuickLinks />
        </div>
        <div className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] rounded-[40px] w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] max-w-[105rem] mx-auto">
          <Cards />
        </div>
        <div className="bg-[#vhF7FF] rounded-[40px_40px_0_0] overflow-hidden">
          <div className="bg-[#002C3B] rounded-[40px_40px_0_0] pt-[50px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[100px] w-[95%] mx-auto ">
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
