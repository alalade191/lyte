import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
export const PremiumFeatures = () => {
  const features = [
    {
      header: "Register New Domain",
      sub: "Own your online space! Register your domain name for a professional website.",
    },
    {
      header: "Transfer Your Domain",
      sub: "Upgrade Your Hosting, Extend Your Domain (Transfer Today!)",
    },
    {
      header: "Cloud Technology",
      sub: "Our Cloud computing allows your applications to be shared through our network over the Internet&apos;s .",
    },
  ];

  return (
    <div className="px-6 mt-10 flex flex-col gap-10">
      <div className="flex flex-col space-y-5">
        <div className="flex items-center justify-center">
          <Button className="font-medium text-lg bg-white !py-5 text-center items-center justify-center rounded-[89.58px] text-[#666D80] border-[#E0E2E6] border">
            Our Features 🧑🏻‍💻
          </Button>
        </div>
        <h3 className="font-medium lg:text-[50px] text-[25px] text-center text-[#212325]">
          Our Premium <span className="text-[#CB6686]">Hosting </span> Features
        </h3>
        <p className="text-center font-normal flex items-center mx-auto lg:text-lg text-base text-[#666D80]">
          Make the most out of your plans, all for a price that fits your
          budget.
        </p>
      </div>

      <div className="border border-[#E0E2E6] rounded-xl p-5">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
          {features.map((list: any, idx: number) => (
            <div
              key={idx}
              className="border border-[#E0E2E6] rounded-xl px-6 pt-3 pb-7 flex flex-col gap-2 bg-[#F9FAFC] shadow-custom2"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-[#212325] lg:text-lg text-base">
                  {list.header}
                </h3>
                <Image src="/circle.svg" height={40} width={40} alt="" />
              </div>
              <p className="font-normal text-[#666D80] text-base max-w-[450px]">
                {list.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
