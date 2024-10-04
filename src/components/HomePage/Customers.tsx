import React from "react";
import Image from "next/image";
export const CustomerSerices = () => {
  const services = [
    {
      header: "Live Chat & Support Solution ",
      image: "/chat.svg",
    },

    {
      header: "Send Us A Tickets You Created",
      image: "/mail.svg",
    },
    {
      header: "Build Knowledge BAse Systen  ",
      image: "/file.svg",
    },
  ];
  return (
    <div className="my-10 relative">
      <div className="flex lg:flex-row flex-col items-center gap-3 px-6">
        {services.map((list: any, idx: number) => (
          <div
            key={idx}
            className="border border-[#E0E2E6] rounded-[30px] p-6 flex flex-col gap-2 bg-[#F9FAFC] shadow-custom2 w-full"
          >
            <div className="flex items-center justify-center">
              <Image src={list.image} width={50} height={50} alt="" />
            </div>
            <h3 className="font-medium text-[#212325] text-lg text-center">
              {list.header}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
