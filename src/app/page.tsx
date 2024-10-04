import { CustomerSerices } from "@/components/HomePage/Customers";
import { Features } from "@/components/HomePage/Features";
import { HeroSection } from "@/components/HomePage/HeroSection";
import { HoistingPlan } from "@/components/HomePage/HoistingPlan";
import { Plan } from "@/components/HomePage/Plan";
import { PremiumFeatures } from "@/components/HomePage/Premium";
import { Review } from "@/components/HomePage/Review";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Features />
      <Plan />
      <HoistingPlan />
      <PremiumFeatures />
      <Review />
      <CustomerSerices />
      <div className="-mb-14 relative z-50 px-6">
        <div className="border-[2px] border-white rounded-lg bg-white p-2 w-full ">
          <div className="flex lg:flex-row flex-col items-center lg:justify-between justify-normal space-y-3 lg:space-y-0 bg-[#CB6686] rounded-lg p-5 border border-[#CB6686] w-full">
            <div className="flex flex-col gap-2 w-full">
              <h3 className="lg:font-bold font-medium text-white lg:text-lg text-base flex-nowrap w-full">
                SIGN UP TO OUR NEWS LETTER
              </h3>
              <p className="font-normal text-base text-white text-center lg:text-start">
                Subscribe to our newsletter to receive news and updates
              </p>
            </div>
            <div className="relative lg:max-w-[400px] w-full">
              <Input
                placeholder="Enter your email address"
                className="pl-8 bg-white border-[#E0E2E6] rounded-lg w-full !h-12"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Image src="/send.svg" width={50} height={50} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
