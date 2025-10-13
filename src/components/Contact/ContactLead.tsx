import Link from "next/link";
import ContactGetQuoteForm from "./ContactGetQuoteForm";

export default function ContactLead() {
    return (
        <div className="relative   pb-[100px] overflow-hidden  max-[1536]:pb-[100px] max-[1440]:pb-[90px]  max-[1200]:pb-[80px]  max-[768]:pb-[70px] max-[640]:pb-[50px]">
            <div className=" relative z-[99] max-[640]:pt-[50px]">
                <div className="w-[90%] md:w-[80%] mx-auto">

                    <h2 className="text-[#232323] mb-4 sm:mb-6 text-left max-[1280px]:text-center">- get in touch -</h2>
                    {/* <div className="grid grid-cols-[100%] xl:grid-cols-[60%_35%] 2xl:grid-cols-[50%_45%] justify-between gap-[70px] xl:gap-[50px] max-[1024px]:mb-[50px] gap-[40px] max-[767px]:mb-[20px] gap-[30px]"> */}
                    <div className="grid grid-cols-[100%] xl:grid-cols-[60%_35%] 2xl:grid-cols-[50%_45%] justify-between gap-[70px] xl:gap-[50px] 2xl:gap-[40px] max-[1024px]:mb-[50px] max-[1024px]:gap-[50px] max-[767px]:mb-[20px] max-[767px]:gap-[30px]">


                        <div>
                            <h3 className="text-[24px] mb-[50px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.4px] mb-0 opacity-100 text-[#000] text-left w-full sm:w-[70%] md:w-[80%] lg:w-full mb-[20px]
                            max-[1280px]:text-center max-[1280px]:mb-[20px] max-[1280px]:m-auto">
                                <span className="bg-gradient-to-r from-[#232323] to-[#0086A6] bg-clip-text text-transparent tracking-[-2px]">We Ensure <br className="hidden xl:block" /> Commitment And <br className="hidden xl:block" /> Impart Quality <br className="hidden xl:block" /> Services!</span>
                            </h3>
                            <p className="text-[#37384D]  font-medium  mb-[50px] sm:mb-[60px] md:mb-[50px] xl:mb-[50px]  w-[70%] mx-auto xl:ml-0 xl:w-[60%] text-center xl:text-left max-[1024]:mt-[50px] max-[600]:w-[100%] max-[640px]:mt-[20px] max-[640px]:mb-[20px]">Armed with cutting-edge technology and constant innovation, we aim to surpass every benchmark to offer the best.</p>


                            <div className="flex flex-col sm:flex-row  justify-around xl:justify-start gap-[30px] md:gap-[50px] max-[640]:gap-[20px] max-[640]:mb[10px]">
                                <div className="text-center sm:text-left">
                                    <h4 className="text-[#000] mb-[15px] font-extralight ">For Enquiry</h4>
                                    <p className="mb-[30px] xl:mb-[50px]  hover:text-[#198cb3] max-[640]:mb-[0px]"><Link href="tel:1800-313-03131" className="text-[#000] font-normal text-[18px] leading-[26px]  hover:text-[#198cb3] transition-colors duration-300">1800-313-03131 (Toll Free)</Link></p>

                                </div>
                                <div className="text-center sm:text-left ml-[0] 2xl:ml-[50px]">
                                    <h4 className="text-[#000] mb-[15px] font-extralight">For Enquiry</h4>
                                    <p className="mb-[30px] xl:mb-[50px]  hover:text-[#198cb3] max-[640]:mb-[0px]"><Link href="mailto:Storage@carftsmensoultions.com" className="text-[#000] font-normal text-[18px] leading-[26px]  hover:text-[#198cb3] transition-colors duration-300">Storage@craftsmansolutions.com</Link></p>

                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <ContactGetQuoteForm />
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className="absolute bottom-[-2%] sm:bottom-[-5%] xl:bottom-[-10%]  2xl:bottom-[-20%] left-0 w-full z-[0]">

                <Image
                    src={`${ASSET_PREFIX}/images/icons/whyus-shape.svg`}
                    alt=""
                    width={65}
                    height={65}
                    className="w-full h-full transition-transform duration-500 object-cover opacity-[0.3]"
                    loading="lazy"
                />
            </div> */}

        </div>
    );
}
