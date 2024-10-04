import React from "react";
import { Button } from "../ui/button";

export const Plan = () => {
  return (
    <div className="px-6">
      <div className="flex flex-col space-y-5 mt-10">
        <div className="flex items-center justify-center">
          <Button className="font-medium text-lg bg-white !py-5 text-center items-center justify-center rounded-[89.58px] text-[#666D80] border-[#E0E2E6] border">
            Our Pricing 💰
          </Button>
        </div>
        <h3 className="font-medium lg:text-[50px] text-[25px]  text-center text-[#212325]">
          Our Web{" "}
          <span className="bg-custom-gradient-2 text-transparent bg-clip-text">
            Hosting
          </span>{" "}
          Plans & Pricing
        </h3>
        <p className="text-center font-normal flex items-center mx-auto text-lg text-[#666D80]">
          Make the most out of your plans, all for a price that fits your
          budget.
        </p>
      </div>
    </div>
  );
};
