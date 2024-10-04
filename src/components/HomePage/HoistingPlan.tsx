import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Check, ChevronDown } from "lucide-react";
export const HoistingPlan = () => {
  const host = [
    {
      title: "Shared Hosting ",
      text: "Unbeatable speed. Shared hosting with top security. Low cost.",
      dols: "$0.",
      price: "72",
      ram: "2gb",
      disk: " Disk Space",
      data: "10gb ",
      cloud: "of Data Bandwidth",
      first: "Unlimited Email Account  ",
      second: "Unlimited Email Account  ",
    },
    {
      title: "Word-Press Hosting",
      text: "Unbeatable speed. Word-Press hosting with top security. on budgets",
      dols: "$2.",
      price: "28",
      ram: "10gb",
      disk: " of Disk Space",
      data: "100gb",
      cloud: " of Data Bandwidth",
      first: "Unlimited Email Account  ",
      second: "Unlimited Email Account  ",
    },
    {
      title: "VPS Hosting",
      text: "High performance VPS Hosting with cloud flexibility and scalability.",
      dols: "$7.",
      price: "50",
      ram: "40gb",
      disk: " SSD of Disk Space",
      data: "20TB",
      cloud: " of Data Bandwidth ",
      first: "2gb of RAM  ",
      second: "4V CPU Core  ",
    },
  ];

  return (
    <div className="px-6 flex flex-col gap-3 mt-10">
      <div className="flex items-center justify-center lg:items-end lg:justify-end lg:pr-4">
        <Button className="font-medium text-lg bg-white hover:bg-transparent !py-5 text-center items-center justify-center rounded-[89.58px] text-[#161618] border-[#E0E2E6] border">
          <div className="flex items-center gap-2">
            <p>Change Currency 💵</p>
            <ChevronDown className="text-[#E0E2E6]" />
          </div>
        </Button>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
        {host.map((item: any, idx: number) => (
          <div
            key={idx}
            className="border border-[#E0E2E6]  rounded-[50px] p-8 flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-[#161618] text-xl text-center lg:text-start">
                {item.title}
              </h3>
              <p className="font-normal text-[#666D80] text-base max-w-[300px]">
                {item.text}
              </p>
            </div>
            <div>
              <p className="font-medium text-[#161618]">
                <span className="text-2xl">{item.dols}</span>
                {item.price}
              </p>
              <p className="font-normal text-[#666D80] text-base">per month</p>
            </div>
            <Button className="font-medium w-full text-lg bg-[#CB6686] !py-5 text-center items-center justify-center rounded-[89.58px] text-white border-[#CB6686] border">
              Order now
            </Button>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image src="/disk.svg" width={20} height={20} alt="" />
                <p className="text-[#666D80] text-base">
                  {" "}
                  <span className="text-[#161618]">{item.ram}</span> {item.disk}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/cloud.svg" width={20} height={20} alt="" />
                <p className="text-[#666D80] text-base">
                  {" "}
                  <span className="text-[text-[#161618]]">
                    {item?.data}
                  </span>{" "}
                  {item.cloud}
                </p>
              </div>
            </div>

            <div className="h-[1px] w-fulll bg-[#E0E2E6]"></div>

            <div className="flex flex-col gap-2">
              <p className="font-medium text-[#161618] text-xl">
                Also includes:
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Check className="text-[#15C855] h-5 w-5" />
                  <p className="font-normal text-base text-[#666D80]">
                    {item.first}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-[#15C855] w-5 h-5" />
                  <p className="font-normal text-[#666D80] text-base">
                    {item.second}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
