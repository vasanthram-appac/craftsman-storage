// import Link from "next/link";
// import ContactGetQuoteForm from "../ContactGetQuoteForm";
// import { ASSET_PREFIX } from "../../../config";
// import Image from "next/image";
// import { div } from "framer-motion/client"; 
// // app/components/LocationCards.jsx

export default function Address() {
    const locations = [
        {
            city: "Pune",
            name: "CRAFTSMAN AUTOMATION   LIMITED – PUNE UNIT IV",
            address: "GAT No. 58, Pimple Jagtap,\n Shirur Taluka – 412 208,\n Maharashtra, India.",
            email: "storage@craftsmanautomation.com",
            phone: "1800-313-03131",
        },
        {
            city: "Coimbatore",
            name: "CRAFTSMAN AUTOMATION  LIMITED – UNIT III",
            address: "123/4, Sangothipalayam Road, Arasur Post,\n Coimbatore – 641 407,\n Tamil Nadu, India.",
            email: "storage@craftsmanautomation.com",
            phone: "1800-313-03131",
        },
        {
            city: "Chennai",
            name: "CRAFTSMAN AUTOMATION LIMITED",
            address: "Temple Steps, First Floor, Block 1,\n Unit 1, Door No. 184-187,\n Little Mount, Chennai – 600 015,\n Tamil Nadu, India.",
            email: "storage@craftsmanautomation.com",
            phone: "1800-313-03131",
        },
        {
            city: "Mumbai",
            name: "CRAFTSMAN AUTOMATION LIMITED",
            address: "306, 3rd Floor, Jaswanti Landmark, Asha Usha Compound, Lal Bahadur Shastri Marg, Vikhroli West, Mumbai, \n Maharashtra - 400 079",
            email: "storage@craftsmanautomation.com",
            phone: "1800-313-03131",
        },
        {
            city: "Gurgaon",
            name: "CRAFTSMAN AUTOMATION LIMITED",
            address: "Flat 405, Emaar Capital Tower - 1,\n Sector 26, MG Road, Gurgaon,  Haryana - 122 002",
            email: "storage@craftsmanautomation.com",
            phone: "1800-313-03131",
        },
        {
            city: "Chennai",
            name: "CRAFTSMAN AUTOMATION LIMITED",
            address: "Temple Steps, First Floor, Block 1,\n Unit 1, Door No. 184-187,\n Little Mount, Chennai – 600 015,\n Tamil Nadu, India.",
            email: "storage@craftsmanautomation.com",
            phone: "1800-313-03131",
        },
    ];

    return (
        <section className="bg-[#E9F6FF] ">
            {/* <div className="grid mx-auto grid-cols-1 gap-[20px] xl:grid-cols-2 xl:w-[90%] 2xl:grid-cols-3 2xl:gap-[25px] 2xl:w-[90%] max-w-[1200px]"> */}
            <div className="grid mx-auto grid-cols-3 gap-[20px]  max-[1400px]:w-[100%] max-[1350px]:grid-cols-2 max-[800px]:grid-cols-1 ">
                {locations.map((loc, index) => (
                    <div key={index} className="bg-white rounded-3xl shadow-sm p-6 md:p-8 transition-all hover:shadow-md 2xl:w-[100%]" >
                        <h2 className="font-[600] w-[80%] text-[#232323] mb-[20px] whitespace-nowrap text-[28px] leading-[32px] ">{loc.city}</h2>
                        <p className="text-[20px] text-[#232323] leading-[24px] font-[600] whitespace-pre-line mb-[20px] whitespace-nowrap max-[1400px]:w-[80%] max-[600px]:w-[80%] max-[500px]:w-[100%] max-[480px]:!text-[18px] max-[480px]:!leading-[22px]">{loc.name}</p>
                        <p className="text-[16px] text-[#626262] leading-[20px]  mb-4 whitespace-pre-line leading-relaxed mb-[20] whitespace-nowrap">{loc.address}</p>
                        <p className="text-[18px] text-[#626262] leading-[24px] font-[600] whitespace-pre-line mb-[20px] hover:text-[#1a8bb3] transition-colors duration-300 whitespace-nowrap">
                            <a href={`mailto:${loc.email}`} className="text-[#232323] hover:text-[#1a8bb3] transition-colors duration-300 max-[1440px]:text-[16px] line-height-[20px] max-[480px]:text-[15px] ">
                                {loc.email}
                            </a>
                        </p>

                        <p className="text-[18px] text-[#626262] leading-[24px] font-[600] whitespace-pre-line hover:text-[#1a8bb3] transition-colors duration-300 whitespace-nowrap">
                            <a href={`tel:${loc.phone}`} className="text-[#232323] hover:text-[#1a8bb3] transition-colors duration-300 max-[1440px]:text-[16px] line-height-[20px] max-[480px]:text-[15px]">
                                {loc.phone}
                            </a>
                        </p>


                    </div>
                ))}
            </div>
        </section>
    );
}

