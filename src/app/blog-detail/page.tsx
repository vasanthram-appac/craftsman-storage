import Subbanner from "@/components/Asrs/Subbanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function BlogDetail() {
  return (
    <>
      <Header />
      <div className=" rounded-[40px] max-[480px]:pt-[20px] w-[95%] mx-auto relative">
        <Breadcrumbs pageKey="blog-detail/" />
      </div>
      <div className="rounded-[40px] pt-[20px] w-[95%] mx-auto">
        <Subbanner bannerKey="blog-detail/" />
      </div>

      <Footer />
    </>
  );
}
