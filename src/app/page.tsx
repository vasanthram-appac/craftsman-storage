
import Banner from "@/components/Banner";
import { getMeta } from "../lib/getMeta";
// import Banner from "@/components/Banner";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Leads from "@/components/Leads";
import dynamic from "next/dynamic";
import Products from "@/components/home/Products";
import Overview from "@/components/home/Overview";
import Casestudies from "@/components/home/Casestudies";
import Blog from "@/components/home/Blog";
import Industriesweserve from "@/components/home/Industriesweserve";
import FaqStatic from "@/components/home/FaqStatic";
import WhyUsTwo from "@/components/home/WhyUsTwo";

export async function generateMetadata() {
  return getMeta("/");
}
const NewsEventsSlider = dynamic(() => import("@/components/home/NewsEvents"), {
  ssr: true,
});
export default function Home() {
  return (
    <div >
      <main className="bg-[linear-gradient(360deg,#ebf7ff_50%,#fff_100%)]">
        <Header />

        <div className="bg-[#vhF7FF] rounded-[40px_40px_0_0] overflow-hidden">
          <div><Banner /></div>
        <div className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] rounded-[40px] overflow-hidden"><Overview /></div>
        <div className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] bg-[#fff] rounded-[40px] max-w-[105rem] w-[95%] md:w-[80%]  mx-auto"><Products /></div>
        <div className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] rounded-[40px] w-[90%] max-w-[105rem] mx-auto"><Industriesweserve /></div>
        <div className="bg-[#00384A] rounded-[40px] w-[95%] md:w-[80%] max-w-[105rem] mx-auto "><WhyUsTwo /></div>
        <div className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] w-[95%] max-w-[120rem] mx-auto"><Casestudies /></div>
        <div className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] bg-[#fff] rounded-[40px] max-w-[105rem] w-[95%] md:w-[80%] mx-auto"><NewsEventsSlider /></div>
        <div className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] w-[95%] max-w-[120rem] mx-auto"><Blog /></div>
        <div className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] mb-[50px] sm:mb-[60px] md:mb-[70px] lg:mb-[80px] xl:mb-[90px] 2xl:mb-[100px] bg-[#fff] rounded-[40px] w-[95%] md:w-[80%] max-w-[105rem] mx-auto"><FaqStatic /></div>
        <div className="bg-[#002C3B] rounded-[40px_40px_0_0] pt-[50px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[100px] w-[95%]  mx-auto "><Leads /></div>
        <div className="bg-[#002C3B] rounded-[0_0_40px_40px] overflow-hidden w-[95%] mx-auto"><Footer /></div>
        </div>
      </main>
    </div>
  );
}
