
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Leads from "@/components/Leads";
import { getMeta } from "../../lib/getMeta";

import SubbannerNews from "@/components/NewsCraftsmanHosted/SubbannerNews";
import DetailPage from "@/components/news-detail/logistic-star-2025-mumbai/DetailPage";
import RecentEvents from "@/components/NewsCraftsmanHosted/RecentEvents";
export async function generateMetadata() {
  return getMeta("/craftsman-storage-was-delighted-to-be-part-of-the-cii-institute-of-logistics-star-2025-summit-in-mumbai");
}

export default function NewsDetail() {
  return (
    <div>
      <main className="bg-[linear-gradient(360deg,#ebf7ff_50%,#fff_100%)]">
        <Header />

        <div className=" rounded-[40px] max-[480px]:pt-[20px] w-[95%] max-w-[105rem] mx-auto relative z-index-[99]">
          <Breadcrumbs pageKey="craftsman-storage-was-delighted-to-be-part-of-the-cii-institute-of-logistics-star-2025-summit-in-mumbai" />
        </div>
        <div className=" overflow-hidden">
          <div className=" rounded-[40px] pt-[20px] w-[95%] max-w-[105rem] mx-auto">
            <SubbannerNews bannerKey="craftsman-storage-was-delighted-to-be-part-of-the-cii-institute-of-logistics-star-2025-summit-in-mumbai" />
          </div></div>
        <div className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] rounded-[40px] w-[95%] md:w-[80%] max-w-[105rem] mx-auto overflow-x-hidden">
          <DetailPage />
        </div>
        <div className="pb-[50px] sm:pb-[60px] md:pb-[70px] lg:pb-[80px] xl:pb-[90px] 2xl:pb-[100px] rounded-[40px] w-[95%] md:w-[80%] max-w-[105rem] mx-auto overflow-x-hidden">
                  <RecentEvents />
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
