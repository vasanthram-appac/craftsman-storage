import { getMeta } from "../../lib/getMeta";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Leads from "@/components/Leads";
import FaqStatic from "@/components/Asrs/FaqStatic";
import ProductGallery from "@/components/Multideepshuttle/ProductGallery";
import Benefits from "@/components/Multideepshuttle/Benefits";
import KeyActivities from "@/components/Multideepshuttle/KeyActivities";
import AsrsPerform from "@/components/Multideepshuttle/AsrsPerform";
import PSubbanner from "@/components/Multideepshuttle/PSubanner";
import ProductViewer from "@/components/Multideepshuttle/ProductViewer";
import { ASSET_PREFIX } from "../../../config";
import QuickLinks from "@/components/Multideepshuttle/QuickLinks";
import Breadcrumbs from "@/components/Breadcrumbs";

export async function generateMetadata() {
  return getMeta("/multi-deep-shuttle-asrs");
}

const iPhoneFeatures = [
  {
    id: "ON/OFF Switch",
    title: "ON/OFF Switch",
    description:
      "The pallet shuttle ASRS and Carrier can communicate with each other and also with the Shuttle Fleet Management Software (SFMS)",
    type: "image" as const,
    media: {
      large: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs-detail.png`,
    },
  },
  {
    id: "Power Indicator",
    title: "Power Indicator",
    description:
      "The pallet shuttle ASRS and Carrier can communicate with each other and also with the Shuttle Fleet Management Software (SFMS)",
    type: "image" as const,
    media: {
      large: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs-detail.png`,
    },
  },
  {
    id: "Ethernet Connection",
    title: "Ethernet Connection",
    description:
      "The pallet shuttle ASRS and Carrier can communicate with each other and also with the Shuttle Fleet Management Software (SFMS)",
    type: "image" as const,
    media: {
      large: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs-detail.png`,
    },
  },
  {
    id: "Wifi Module",
    title: "Wifi Module",
    description:
      "The pallet shuttle ASRS and Carrier can communicate with each other and also with the Shuttle Fleet Management Software (SFMS)",
    type: "image" as const,
    media: {
      large: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs-detail.png`,
    },
  },
  {
    id: "Chain Conveyor",
    title: "Chain Conveyor",
    description:
      "The pallet shuttle ASRS and Carrier can communicate with each other and also with the Shuttle Fleet Management Software (SFMS)",
    type: "image" as const,
    media: {
      large: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs-detail.png`,
    },
  },
  {
    id: "Pallet Guide Runner",
    title: "Pallet Guide Runner",
    description:
      "The pallet shuttle ASRS and Carrier can communicate with each other and also with the Shuttle Fleet Management Software (SFMS)",
    type: "image" as const,
    media: {
      large: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs-detail.png`,
    },
  },
  {
    id: "Fan",
    title: "Fan",
    description:
      "The pallet shuttle ASRS and Carrier can communicate with each other and also with the Shuttle Fleet Management Software (SFMS)",
    type: "image" as const,
    media: {
      large: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs-detail.png`,
    },
  },
  {
    id: "Guide Wheel",
    title: "Guide Wheel",
    description:
      "The pallet shuttle ASRS and Carrier can communicate with each other and also with the Shuttle Fleet Management Software (SFMS)",
    type: "image" as const,
    media: {
      large: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs-detail.png`,
    },
  },
  {
    id: "Emergency Button",
    title: "Emergency Button",
    description:
      "The pallet shuttle ASRS and Carrier can communicate with each other and also with the Shuttle Fleet Management Software (SFMS)",
    type: "image" as const,
    media: {
      large: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs-detail.png`,
    },
  },
  // {
  //   id: 'USB Connector',
  //   title: 'USB Connector',
  //   description: 'The pallet shuttle ASRS and Carrier can communicate with each other and also with the Shuttle Fleet Management Software (SFMS)',
  //   type: 'image' as const,
  //   media: {
  //     large: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs-detail.png`
  //   }
  // },
  // {
  //   id: 'Communication Lamp',
  //   title: 'Communication Lamp',
  //   description: 'The pallet shuttle ASRS and Carrier can communicate with each other and also with the Shuttle Fleet Management Software (SFMS)',
  //   type: 'image' as const,
  //   media: {
  //     large: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs-detail.png`
  //   }
  // },
  // {
  //   id: 'Buffer',
  //   title: 'Buffer',
  //   description: 'The pallet shuttle ASRS and Carrier can communicate with each other and also with the Shuttle Fleet Management Software (SFMS)',
  //   type: 'image' as const,
  //   media: {
  //     large: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs-detail.png`
  //   }
  // },
  // {
  //   id: 'Carrier Wheel',
  //   title: 'Carrier Wheel',
  //   description: 'The pallet shuttle ASRS and Carrier can communicate with each other and also with the Shuttle Fleet Management Software (SFMS)',
  //   type: 'image' as const,
  //   media: {
  //     large: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs-detail.png`
  //   }
  // },
  // {
  //   id: 'Shuttle',
  //   title: 'Shuttle',
  //   description: 'The pallet shuttle ASRS and Carrier can communicate with each other and also with the Shuttle Fleet Management Software (SFMS)',
  //   type: 'image' as const,
  //   media: {
  //     large: `${ASSET_PREFIX}/images/multi-deep-shuttle-asrs-detail.png`
  //   }
  //},
];

export default function MDSA() {
  return (
    <div>
      <main className="bg-[#EBF7FF]">
        <Header />

        <div className=" rounded-[40px] max-[480px]:pt-[20px] w-[95%] mx-auto relative">
          <Breadcrumbs pageKey="multi-deep-shuttle-asrs" />
        </div>
        <div className=" rounded-[40px] pt-[20px] w-[95%] mx-auto">
          <QuickLinks />
        </div>
        <div className=" rounded-[40px] pt-[20px] w-[95%] mx-auto">
          <PSubbanner page="multi-deep-shuttle-asrs" />
        </div>

        <div className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] rounded-[40px] w-[95%] md:w-[80%] max-w-[105rem] mx-auto   ">
          <ProductViewer features={iPhoneFeatures} initialFeature="colors" />
        </div>
        <div className="rounded-[40px] w-[90%] md:w-[80%] max-w-[105rem] mx-auto   ">
          <AsrsPerform />
        </div>
        <div
          className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px]
         my-[50px] sm:my-[60px] md:my-[70px] lg:my-[80px] xl:my-[90px] 2xl:my-[100px] rounded-[40px] w-[95%] md:w-[80%] max-w-[105rem] mx-auto bg-[#198CB3]">
          <KeyActivities />
        </div>
        <div className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] rounded-[40px] w-[95%] md:w-[80%] max-w-[105rem] mx-auto bg-[#fff]">
          <Benefits />
        </div>
        <div className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] rounded-[40px] w-[95%] md:w-[80%] max-w-[105rem] mx-auto">
          <ProductGallery />
        </div>
        <div className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px]  rounded-[40px] w-[95%] md:w-[80%] max-w-[105rem] mx-auto">
          <FaqStatic />
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
