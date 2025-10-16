"use client";

import { useState } from "react";

interface AccordionItem {
  id: number;
  title: string;
  tcontent: string;
  content: string;
}

interface FaqTabProps {
  heading: string;
  lightheading: string;
  description: string;
  accordionItems: AccordionItem[];
}

function FaqStatic({
  heading,
  lightheading,
  description,
  accordionItems,
}: FaqTabProps) {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(
    accordionItems[0]?.id ?? null
  );

  const toggleAccordion = (id: number) => {
    setActiveAccordion(id === activeAccordion ? null : id);
  };

  return (
    <div className="solution grid grid-cols-[100%] lg:grid-cols-[35%_60%] xl:grid-cols-[40%_55%] justify-between gap-[30px] md:gap-[50px] items-start w-[90%] mx-auto">
      {/* Section Title */}
      <div className="h-full">
      <div className="sticky top-[200px]">
          <h2 className="text-[#232323] mb-4 sm:mb-6 text-left">
           - FAQ -
          </h2>
          <h3 className="text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[46px] 2xl:text-[46px] 2xl:leading-[50px] font-semibold tracking-[-0.4px] mb-0 opacity-100 text-[#000] text-left w-full sm:w-[70%] md:w-[80%] lg:w-full">
            <span className="bg-gradient-to-r from-[#232323] to-[#0086A6] bg-clip-text text-transparent tracking-[-2px]">
              Frequently Asked  <br className="hidden lg:block" /> Questions</span>
          </h3>
        </div>
        </div>


      {/* Accordion */}
      <div className=" grid grid-cols-[100%]">
        <div className="faq-wrp grid gap-[10px] sm:gap-[20px]">
          {accordionItems.map((item) => (
            <div
              key={item.id}
              className={` bg-[#fff] px-[15px] sm:px-[25px] sm:pb-[0] p-[10px] sm:p-[20px] rounded-[20px] group transition-all duration-300 ${
                activeAccordion === item.id ? "active" : ""
              }`}
            >
              <button
                className="w-full cursor-pointer group"
                onClick={() => toggleAccordion(item.id)}
              >
                <div className="flex justify-between w-full items-center">
                  <h3
                    className={` text-[18px] sm:leading-[22px]  sm:text-[20px] sm:leading-[26px] 2xl:text-[22px] 2xl:leading-[28px] font-semibold tracking-[-0.02em] text-left transition duration-300 text-[#232323] mb-[15px] ${
                      activeAccordion === item.id
                        ? "text-[#232323]"
                        : "group-hover:text-[#0087a7]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <div
                    className={`rounded-full p-[0px] border border-[#fff] transition duration-300 w-[32px] h-[32px] sm:w-[38px] sm:h-[38px]  flex items-start justify-end ${
                      activeAccordion === item.id
                        ? ""
                        : " "
                    }`}
                  >
                    <svg
                      className={`transition-transform duration-300 ${
                        activeAccordion === item.id ? "rotate-90" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#232323"
                        d="m5.157 13.069l4.611-4.685a.546.546 0 0 0 0-.768L5.158 2.93a.55.55 0 0 1 0-.771a.53.53 0 0 1 .759 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0a.55.55 0 0 1 0-.771"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeAccordion === item.id
                    ? "max-h-[500px] opacity-100 mb-[5px]"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-normal mb-[15px] text-[#37384D] tracking-[-0.03em] text-[16px] leading-[24px] w-[100%] sm:w-[90%] md:w-[80%]">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const accordionItems: AccordionItem[] = [
    {
      id: 1,
      title:
        "What is Automated Storage & Retrieval System?",
      tcontent: "",
      content:
        "ASRS (Automated Storage & Retrieval System) is a computer-controlled solution that maximizes warehouse space, improves accuracy, reduces labor, and speeds up order fulfillment by integrating with warehouse management software.",
    },
    {
      id: 2,
      title:
        "What types of ASRS systems does Craftsman offer?",
      tcontent: "",
      content:
        "ASRS (Automated Storage & Retrieval System) is a computer-controlled solution that maximizes warehouse space, improves accuracy, reduces labor, and speeds up order fulfillment by integrating with warehouse management software.",
    },
    {
      id: 3,
      title: "How much warehouse floor space can ASRS save?",
      tcontent: "",
      content:
        "ASRS (Automated Storage & Retrieval System) is a computer-controlled solution that maximizes warehouse space, improves accuracy, reduces labor, and speeds up order fulfillment by integrating with warehouse management software.",
    },
    {
      id: 4,
      title:
        "How long does it take to install an ASRS solution?",
      tcontent: "",
      content:
        "ASRS (Automated Storage & Retrieval System) is a computer-controlled solution that maximizes warehouse space, improves accuracy, reduces labor, and speeds up order fulfillment by integrating with warehouse management software.",
    },
    {
      id: 5,
      title:
        "How long does it take to install an ASRS solution?",
      tcontent: "",
      content:
        "ASRS (Automated Storage & Retrieval System) is a computer-controlled solution that maximizes warehouse space, improves accuracy, reduces labor, and speeds up order fulfillment by integrating with warehouse management software.",
    },
    {
      id: 6,
      title:
        "What maintenance is required for ASRS?",
      tcontent: "",
      content:
        "ASRS (Automated Storage & Retrieval System) is a computer-controlled solution that maximizes warehouse space, improves accuracy, reduces labor, and speeds up order fulfillment by integrating with warehouse management software.",
    },
  ];

  return (
    <div className="">
      <FaqStatic
        heading="Frequently Asked"
        lightheading="Questions"
        description="Everything you need to know about our digital marketing services."
        accordionItems={accordionItems}
      />
    </div>
  );
}
