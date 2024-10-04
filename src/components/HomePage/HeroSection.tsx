import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="px-4 md:px-8 lg:px-20">
      <div className="">
        <div className="border border-[#A4ACB93D] rounded-[30px] w-fit flex mx-auto items-center justify-center">
          <h3 className=" px-[6.9px] py-[5.75px] font-medium text-lg text-center text-[#666D80]">
            Welcome 👋
          </h3>
        </div>
        <h3 className=" font-extrabold lg:text-[95px] md:text-[80px] text-black text-center pb-4 lg:pb-2">
          Welcome{" "}
          <span className="bg-custom-gradient text-transparent bg-clip-text">
            to Your New
          </span>{" "}
          Digital Home!
        </h3>
        <p className="text-center font-normal text-[#191825BF] lg:text-3xl md:text-2xl text-lg lg:max-w-[800px] max-w-[300px] flex items-center mx-auto">
          High performance dedicated servers. with cloud flexibility &
          Scalability.
        </p>

        <div className="relative lg:w-[500px] w-full mx-auto mt-3">
          <Input
            placeholder="Search"
            className="pl-8 bg-white border-[#E0E2E6] rounded-[87.62px] w-full !h-12"
          />
          <Button className=" absolute right-2 top-1/2 transform -translate-y-1/2 h-4  text-muted-foreground  font-medium text-lg bg-[#38333F] !py-5 text-center items-center text-white rounded-[89.58px]">
            Search Domain
          </Button>
        </div>

        <div className="flex items-center justify-center mt-5 relative w-full mx-auto">
          <Image
            src="/hoisting.svg"
            width={18}
            height={18}
            alt="Logo"
            className="w-[600px] flex items-center justify-center object-cover mx-auto"
          />

          <div className="flex flex-col space-y-5 absolute top-[60%]">
            <div className="flex items-center justify-center ml-16">
              <Button className="font-medium text-lg bg-white !py-5 text-center items-center justify-center rounded-[89.58px] text-[#666D80] border-[#E0E2E6] border">
                About Us 🕵
              </Button>
            </div>
            <h3 className="font-medium lg:text-[50px] text-[25px]  text-center text-[#212325]">
              Why Choose Lyte-{" "}
              <span className="bg-custom-gradient-2 text-transparent bg-clip-text">
                Hosting
              </span>{" "}
              ?
            </h3>
            <p className="text-center font-normal max-w-[500px] flex items-center mx-auto text-lg text-[#666D80]">
              We provide high performance dedicated servers with cloud
              flexibility and scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
