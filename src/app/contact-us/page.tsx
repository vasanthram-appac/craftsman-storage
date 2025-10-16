
import { getMeta } from "../../lib/getMeta";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Address from "@/components/Contact/Address";
import ContactLead from "@/components/Contact/ContactLead";
import Breadcrumbs from "@/components/Breadcrumbs";
import Subbanner from "@/components/Asrs/Subbanner";


export async function generateMetadata() {
    return getMeta("/contact-us");
}

export default function Contact() {
    return (
        <div >
            <main className="bg-[linear-gradient(360deg,#ebf7ff_50%,#fff_100%)]">
                <Header />

                <div className=" rounded-[40px] max-[480px]:pt-[20px] w-[95%] max-w-[105rem]  mx-auto relative">
                          <Breadcrumbs pageKey="contact-us" />
                        </div>
                <div className=" rounded-[40px] w-[95%] max-w-[105rem]  mx-auto">
                          <Subbanner bannerKey="contact-us" />
                        </div>
                <div className="bg-[#vhF7FF] mt-[20px] rounded-[40px_40px_0_0] overflow-hidden !max-[600px]:pb-[0px] max-w-[120rem] m-auto">
                    <div className="bg-[#fff] rounded-[40px_40px_0_0]  sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[100px] w-[95%]  mx-auto "><ContactLead /></div>
                </div>
                <div className="sm:pt-[60px] sm:pb-[0px] md:pt-[70px] md:pb-[0] lg:pt-[80px] lg:pb=[0px] xl:pt-[90px] xl:pb-[0] 2xl:pt-[100px] 2xl:pb-[0px]  w-[75%] max-[900px]:w-[90%] mx-auto max-[640px]:py-[50px] max-w-[120rem] m-auto">
                    <Address />
                </div>
                {/* map section */}
                <section className="rounded-[40px_40px_0_0] pb-[70px] sm:pt-[40px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[100px] w-[95%]  mx-auto ">
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=15_8xEka28A1Wq3WWCYaACuVb_Ou5M0Mw" width="100%" height="400"></iframe>
                </section>
                {/* map section */}
                <div className="bg-[#002C3B] rounded-[0_0_40px_40px] overflow-hidden w-[95%] mx-auto"><Footer /></div>
            </main>
        </div>
    );
}
